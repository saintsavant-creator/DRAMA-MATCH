const express = require('express');
const compression = require('compression');
const { Pool } = require('pg');
const path = require('path');
const fs = require('fs');
const engine = require('./data/recommendation-engine');
const affiliateConfig = require('./data/affiliate-config');
const { getPosterUrl } = require('./data/poster-paths');
const { startBackgroundResolver } = require('./services/poster-resolver');
const seo = require('./seo');

const app = express();
const port = process.env.PORT || 3000;

// ============================================
// IN-MEMORY RESPONSE CACHE
// Caches expensive compute-heavy API responses.
// Keys: arbitrary strings. Entries expire after TTL ms.
// ============================================
const _cache = new Map();
const CACHE_TTL_RECOMMEND = 6 * 60 * 60 * 1000;  // 6h — recommendation scores don't change between deploys
const CACHE_TTL_STATIC    = 24 * 60 * 60 * 1000; // 24h — featured/moods/tropes are fully static

function cacheGet(key) {
  const entry = _cache.get(key);
  if (!entry) return null;
  if (Date.now() - entry.ts > entry.ttl) { _cache.delete(key); return null; }
  return entry.value;
}

function cacheSet(key, value, ttl) {
  _cache.set(key, { value, ts: Date.now(), ttl });
}

// Database (optional — used for analytics/user tracking)
let pool = null;
if (process.env.DATABASE_URL) {
  pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: process.env.DATABASE_URL?.includes('localhost') ? false : { rejectUnauthorized: false }
  });
}

// In-memory rate limit for comments: ipHash → array of timestamps
const commentRateLimits = new Map();

app.use(express.json());

// Gzip/brotli compression for all responses — reduces payload by 60-80%
// Threshold: 1 KB (skip compression for tiny responses where overhead > savings)
app.use(compression({ threshold: 1024 }));

// Health check endpoint (required for Render)
app.get('/health', (req, res) => {
  res.json({ status: 'healthy' });
});

// 301 redirect: dramamatch.polsia.app → dramamatch.app
// Preserves full path+query so bookmarks and shared links land correctly.
app.use((req, res, next) => {
  if (req.hostname === 'dramamatch.polsia.app' || req.hostname === 'www.dramamatch.app') {
    const target = `https://dramamatch.app${req.path}${req.query && Object.keys(req.query).length ? '?' + new URLSearchParams(req.query).toString() : ''}`;
    return res.redirect(301, target);
  }
  next();
});

// ============================================
// AI DISCOVERY — Dynamic /llms-full.txt (auto-generated from live catalog)
// Must be registered BEFORE express.static so it overrides the stale static file.
// ============================================
app.get('/llms-full.txt', (req, res) => {
  const allShows = engine.getAllShows();
  const base = 'https://dramamatch.app';
  const stats = engine.getStats();
  const lines = [
    '# DramaMatch — Full Catalog Index',
    '',
    `> Complete title index for AI/LLM crawlers. Summary version: ${base}/llms.txt`,
    '',
    `DramaMatch maps Western shows and movies to K-dramas, C-dramas, J-dramas, and anime using`,
    'genre, theme, trope, tone, setting, and character-type matching.',
    '',
    `Total catalog: ${stats.totalShows} titles across all categories.`,
    `Generated: ${new Date().toISOString().split('T')[0]}`,
    '',
    '---',
    '',
  ];

  // Helper to format streaming platforms
  const streamingStr = (streaming) => {
    if (!streaming || typeof streaming !== 'object') return '';
    const platforms = Object.keys(streaming).filter(k => streaming[k]);
    return platforms.length ? platforms.join(', ') : '';
  };

  // Helper to format show line
  const formatShow = (show) => {
    const url = ['kdrama', 'kmovie', 'cdrama', 'jdrama', 'jmovie', 'anime', 'anime-movie'].includes(show.type)
      ? `${base}/drama/${show.id}`
      : `${base}/match/${show.id}`;
    const genres = (show.genres || []).slice(0, 4).join(', ');
    const streaming = streamingStr(show.streaming);
    const parts = [show.title, show.year, genres];
    if (streaming) parts.push(streaming);
    parts.push(url);
    return parts.join(' | ');
  };

  // K-dramas
  const kdramas = allShows.filter(s => s.type === 'kdrama');
  lines.push(`## Korean Dramas (${kdramas.length} titles)`);
  lines.push('');
  lines.push('Format: Title | Year | Genres | Streaming | URL');
  lines.push('');
  kdramas.forEach(s => lines.push(formatShow(s)));
  lines.push('');

  // K-movies
  const kmovies = allShows.filter(s => s.type === 'kmovie');
  lines.push(`## Korean Movies (${kmovies.length} titles)`);
  lines.push('');
  lines.push('Format: Title | Year | Genres | Streaming | URL');
  lines.push('');
  kmovies.forEach(s => lines.push(formatShow(s)));
  lines.push('');

  // C-dramas
  const cdramas = allShows.filter(s => s.type === 'cdrama');
  lines.push(`## Chinese Dramas (${cdramas.length} titles)`);
  lines.push('');
  lines.push('Format: Title | Year | Genres | Streaming | URL');
  lines.push('');
  cdramas.forEach(s => lines.push(formatShow(s)));
  lines.push('');

  // J-dramas
  const jdramas = allShows.filter(s => s.type === 'jdrama');
  lines.push(`## Japanese Dramas (${jdramas.length} titles)`);
  lines.push('');
  lines.push('Format: Title | Year | Genres | Streaming | URL');
  lines.push('');
  jdramas.forEach(s => lines.push(formatShow(s)));
  lines.push('');

  // J-movies
  const jmovies = allShows.filter(s => s.type === 'jmovie');
  if (jmovies.length > 0) {
    lines.push(`## Japanese Films (${jmovies.length} titles)`);
    lines.push('');
    lines.push('Format: Title | Year | Genres | Streaming | URL');
    lines.push('');
    jmovies.forEach(s => lines.push(formatShow(s)));
    lines.push('');
  }

  // Anime
  const anime = allShows.filter(s => s.type === 'anime' || s.type === 'anime-movie');
  lines.push(`## Anime (${anime.length} titles — series and films)`);
  lines.push('');
  lines.push('Format: Title | Year | Genres | Streaming | URL');
  lines.push('');
  anime.forEach(s => lines.push(formatShow(s)));
  lines.push('');

  // Western shows
  const westernShows = allShows.filter(s => s.type === 'western');
  lines.push(`## Western TV Shows (${westernShows.length} titles — search inputs)`);
  lines.push('');
  lines.push('Format: Title | Year | Genres | Match URL');
  lines.push('');
  westernShows.forEach(s => lines.push(formatShow(s)));
  lines.push('');

  // Western movies
  const westernMovies = allShows.filter(s => s.type === 'western-movie');
  lines.push(`## Western Movies (${westernMovies.length} titles — search inputs)`);
  lines.push('');
  lines.push('Format: Title | Year | Genres | Match URL');
  lines.push('');
  westernMovies.forEach(s => lines.push(formatShow(s)));
  lines.push('');

  res.type('text/plain').set('Cache-Control', 'public, max-age=3600').send(lines.join('\n'));
});

// Analytics SQL export — force download with correct content type
app.get('/dramamatch_data_export.sql', (req, res) => {
  const filePath = path.join(__dirname, 'public', 'dramamatch_data_export.sql');
  if (!fs.existsSync(filePath)) {
    return res.status(404).send('Export file not found. It is generated at deploy time — please try again after the next deploy.');
  }
  res.setHeader('Content-Type', 'application/sql');
  res.setHeader('Content-Disposition', 'attachment; filename="dramamatch_data_export.sql"');
  res.setHeader('Cache-Control', 'no-cache');
  res.sendFile(filePath);
});

// Pageviews SQL export — force download
app.get('/dramamatch_data_export_pageviews.sql', (req, res) => {
  const filePath = path.join(__dirname, 'public', 'dramamatch_data_export_pageviews.sql');
  if (!fs.existsSync(filePath)) {
    return res.status(404).send('Pageviews export not found. It is generated at deploy time — please try again after the next deploy.');
  }
  res.setHeader('Content-Type', 'application/sql');
  res.setHeader('Content-Disposition', 'attachment; filename="dramamatch_data_export_pageviews.sql"');
  res.setHeader('Cache-Control', 'no-cache');
  res.sendFile(filePath);
});

// Serve static files from public folder
// HTML: revalidate on every request (content changes with deploys)
// Assets (JS/CSS/images): cache for 7 days (they're versioned by deploy)
app.use(express.static(path.join(__dirname, 'public'), {
  etag: true,
  lastModified: true,
  setHeaders(res, filePath) {
    if (filePath.endsWith('.html')) {
      res.setHeader('Cache-Control', 'no-cache');
    } else if (filePath.includes('fb-profile') || filePath.includes('fb-cover')) {
      // Facebook branded assets — force revalidation + no CDN caching
      res.setHeader('Cache-Control', 'no-store, no-cache, must-revalidate, max-age=0');
      res.setHeader('Pragma', 'no-cache');
      res.setHeader('Expires', '0');
    } else {
      // 7 days + immutable — static assets don't change between deploys at the same URL
      res.setHeader('Cache-Control', 'public, max-age=604800, immutable');
    }
  }
}));

// ============================================
// OG IMAGE — on-demand generation + caching for /og/:slug.png
// (static middleware serves pre-built files; this fallback generates on demand)
// ============================================
const ogImageService = require('./services/og-image');

app.get('/og/:filename', async (req, res, next) => {
  if (!req.params.filename.endsWith('.png')) return next();
  try {
    await ogImageService.serveOgImage(req, res);
  } catch (err) {
    console.error('[OG Route] Error:', err.message);
    next();
  }
});

// ============================================
// TMDB IMAGE PROXY — serves TMDB posters from same origin
// Eliminates TMDB CDN failures on iOS Safari
// ============================================
const https = require('https');

app.get('/api/poster/:posterPath', (req, res) => {
  const posterPath = req.params.posterPath;

  // Validate: must be a TMDB poster hash (alphanumeric + dash/underscore) ending in .jpg
  if (!/^[a-zA-Z0-9_-]+\.jpg$/.test(posterPath)) {
    return res.status(400).end();
  }

  const tmdbUrl = `https://image.tmdb.org/t/p/w342/${posterPath}`;

  const proxyReq = https.get(tmdbUrl, { timeout: 8000 }, (tmdbRes) => {
    if (tmdbRes.statusCode !== 200) {
      return res.status(tmdbRes.statusCode).end();
    }
    res.setHeader('Content-Type', tmdbRes.headers['content-type'] || 'image/jpeg');
    res.setHeader('Cache-Control', 'public, max-age=2592000, immutable'); // 30 days — TMDB posters don't change
    tmdbRes.pipe(res);
  });

  proxyReq.on('error', () => res.status(502).end());
  proxyReq.on('timeout', () => { proxyReq.destroy(); res.status(504).end(); });
});

// ============================================
// TIKTOK AD VIDEO GENERATION
// GET /api/generate-ad-videos — Returns download links + generation guide
// ============================================

app.get('/api/generate-ad-videos', (req, res) => {
  const baseUrl = `${req.protocol}://${req.get('host')}`;
  res.json({
    success: true,
    message: 'DramaMatch TikTok Ad Videos Ready',
    description: 'Two 15-second vertical video ads (9:16 aspect ratio, 1080x1920px) for TikTok',
    videos: [
      {
        id: 'video1',
        name: 'dramamatch-ad-1-cinematic.mp4',
        title: 'Cinematic K-Drama Hook',
        description: 'Cinematic B-roll vibes with proven "Hooked on K-Drama?" hook (6.25% CTR)',
        hook: 'Hooked on K-Drama?',
        flow: 'Hook → Find your perfect drama match → Thousands of titles → CTA',
        colors: ['#1a1a2e', '#16213e', '#0f3460', '#e94560'],
        cta: 'dramamatch.app',
        downloadUrl: `${baseUrl}/videos/dramamatch-ad-1-cinematic.mp4`,
        aspectRatio: '9:16',
        duration: '15s',
        resolution: '1080x1920px',
      },
      {
        id: 'video2',
        name: 'dramamatch-ad-2-dramatic.mp4',
        title: 'Dramatic K-Drama Vibes',
        description: 'Fan-edit energy with rapid drama scene cuts and emotional K-drama vibes',
        hook: 'Hooked on K-Drama?',
        flow: 'Hook → But dont know what to watch? → Rapid genre montage (Romance/Action/Drama/Twists) → CTA',
        colors: ['#2d0a4e', '#5a189a', '#7c2d12', '#c1121f'],
        cta: 'dramamatch.app',
        downloadUrl: `${baseUrl}/videos/dramamatch-ad-2-dramatic.mp4`,
        aspectRatio: '9:16',
        duration: '15s',
        resolution: '1080x1920px',
      },
    ],
    specs: {
      format: 'MP4 (H.264)',
      resolution: '1080x1920px',
      aspectRatio: '9:16 (vertical)',
      duration: '15 seconds',
      fps: '30',
      bitrate: '2000-3000 kbps',
      fileSize: '3-5 MB per video',
    },
    nextSteps: [
      '1. Download both MP4 files',
      '2. Upload to TikTok Ads Manager (https://ads.tiktok.com/)',
      '3. Set targeting: Western viewers 18-45, interested in drama/streaming',
      '4. Start with $200-500/week budget',
      '5. Monitor CTR and engagement',
    ],
    generationGuide: `${baseUrl}/GENERATE_TIKTOK_ADS.md`,
    tips: [
      'Test on mobile before uploading to TikTok',
      'Use landscape mode to preview vertical videos properly',
      'Proven hook "Hooked on K-Drama?" drives 6.25% CTR on Meta',
      'Best posting times: Weekends and evenings (18:00-23:00)',
      'Consider A/B testing both videos with different targeting',
    ],
  });
});

// ============================================
// API ENDPOINTS
// ============================================

/**
 * Search shows by title (autocomplete)
 * GET /api/search?q=breaking
 */
app.get('/api/search', (req, res) => {
  const query = req.query.q || '';
  const limit = Math.min(parseInt(req.query.limit) || 8, 20);

  // Shows/dramas first — the primary search intent
  const showResults = engine.searchShows(query, limit - 3);
  // Actors: up to 2 results
  const actorResults = engine.searchActors(query, 2);
  // Tropes/themes: up to 2 results, shown at the bottom
  const tropeResults = engine.searchTropes(query, 2);
  // Dramas first, then actors, then tropes
  const results = [...showResults, ...actorResults, ...tropeResults];

  res.json({ success: true, results });
});

/**
 * Inject poster URLs into a recommendation result at response time.
 * Runs on every response (cache hit or miss) so the dynamic poster cache
 * (populated by the background TVmaze resolver) is always consulted.
 */
function injectPosterUrls(result) {
  const out = { ...result };
  out.recommendations = (out.recommendations || []).map(rec => ({
    ...rec,
    posterUrl: getPosterUrl(rec.show.id)
  }));
  if (out.source && out.source.id) {
    out.source = { ...out.source, posterUrl: getPosterUrl(out.source.id) };
  }
  return out;
}

/**
 * Get K-drama recommendations for a show
 * GET /api/recommend/:showId
 */
app.get('/api/recommend/:showId', async (req, res) => {
  const { showId } = req.params;
  const limit = Math.min(parseInt(req.query.limit) || 8, 12);
  // 'dir' param allows clients to override the default recommendation direction:
  //   'western' → always return Western shows/movies
  //   'asian'   → always return Asian dramas/movies
  //   (omitted) → auto-detect from source show type
  const dir = ['western', 'asian'].includes(req.query.dir) ? req.query.dir : 'auto';

  // Check in-memory cache (cache key includes limit + direction so different combos don't collide)
  const cacheKey = `rec:${showId}:${limit}:${dir}`;
  const cached = cacheGet(cacheKey);
  if (cached) {
    // Still fire analytics tracking even on cache hit (fire and forget)
    if (pool) {
      pool.query(
        `INSERT INTO searches (show_id, show_title, show_type, ip_hash, created_at)
         VALUES ($1, $2, $3, $4, NOW())`,
        [showId, cached.source?.title || showId, cached.source?.type || 'unknown', hashIP(req.ip)]
      ).catch(() => {});
    }
    // Re-inject poster URLs on cache hits (dynamic cache may have new entries since caching)
    const freshResult = injectPosterUrls(cached);
    res.setHeader('X-Cache', 'HIT');
    res.setHeader('Cache-Control', 'public, max-age=3600'); // 1h CDN/browser cache
    return res.json({ success: true, ...freshResult });
  }

  const result = engine.getRecommendations(showId, limit, dir);

  if (result.error) {
    return res.status(404).json({ success: false, message: result.error });
  }

  if (pool) {
    // Track search (fire and forget)
    pool.query(
      `INSERT INTO searches (show_id, show_title, show_type, ip_hash, created_at)
       VALUES ($1, $2, $3, $4, NOW())`,
      [showId, result.source.title, result.source.type, hashIP(req.ip)]
    ).catch(() => {}); // Ignore errors

    // Embed admin override scores directly in recommendations so the
    // initial page render already shows the overridden score (no flicker).
    try {
      const overrideRows = await pool.query(
        `SELECT target_show_id, override_score FROM match_overrides WHERE source_show_id = $1`,
        [showId]
      );
      if (overrideRows.rows.length > 0) {
        const overrides = {};
        for (const row of overrideRows.rows) {
          overrides[row.target_show_id] = row.override_score;
        }
        result.recommendations = result.recommendations.map(rec => ({
          ...rec,
          overrideScore: overrides[rec.show.id] ?? null
        }));
      }
    } catch (e) {
      // Non-critical — continue without overrides embedded
    }
  }

  // Cache the computed result (WITHOUT poster URLs — they're injected at response time
  // so the dynamic poster cache always has the latest data)
  cacheSet(cacheKey, result, CACHE_TTL_RECOMMEND);

  // Inject poster URLs at response time (uses both static TMDB + dynamic TVmaze cache)
  const freshResult = injectPosterUrls(result);

  res.setHeader('X-Cache', 'MISS');
  res.setHeader('Cache-Control', 'public, max-age=3600'); // 1h CDN/browser cache
  res.json({ success: true, ...freshResult });
});

/**
 * Get show details
 * GET /api/show/:showId
 */
app.get('/api/show/:showId', (req, res) => {
  const show = engine.getShowDetails(req.params.showId);
  if (!show) {
    return res.status(404).json({ success: false, message: 'Show not found' });
  }
  res.json({ success: true, show });
});

/**
 * Get all available moods
 * GET /api/moods
 */
app.get('/api/moods', (req, res) => {
  const cached = cacheGet('moods');
  if (cached) {
    res.setHeader('Cache-Control', 'public, max-age=86400');
    return res.json(cached);
  }
  const moods = engine.getMoods();
  const payload = { success: true, moods };
  cacheSet('moods', payload, CACHE_TTL_STATIC);
  res.setHeader('Cache-Control', 'public, max-age=86400');
  res.json(payload);
});

/**
 * Get K-drama recommendations by mood/vibe
 * GET /api/recommend/mood/:moodId
 */
app.get('/api/recommend/mood/:moodId', (req, res) => {
  const { moodId } = req.params;
  const limit = Math.min(parseInt(req.query.limit) || 8, 12);
  const cacheKey = `mood:${moodId}:${limit}`;
  const cached = cacheGet(cacheKey);
  if (cached) {
    // Re-inject poster URLs on cache hits (dynamic cache may have new entries)
    const freshResult = injectPosterUrls(cached);
    res.setHeader('Cache-Control', 'public, max-age=3600');
    return res.json({ success: true, ...freshResult });
  }
  const result = engine.getMoodRecommendations(moodId, limit);

  if (result.error) {
    return res.status(404).json({ success: false, message: result.error });
  }

  // Cache WITHOUT poster URLs (they're injected at response time)
  cacheSet(cacheKey, result, CACHE_TTL_STATIC);
  // Inject poster URLs at response time
  const freshResult = injectPosterUrls(result);
  res.setHeader('Cache-Control', 'public, max-age=3600');
  res.json({ success: true, ...freshResult });
});

/**
 * Get all unique tropes and themes from the catalog with counts
 * GET /api/tropes
 */
app.get('/api/tropes', (req, res) => {
  const cached = cacheGet('tropes');
  if (cached) {
    res.setHeader('Cache-Control', 'public, max-age=86400');
    return res.json(cached);
  }
  const data = engine.getAllTropesAndThemes();
  const payload = { success: true, ...data };
  cacheSet('tropes', payload, CACHE_TTL_STATIC);
  res.setHeader('Cache-Control', 'public, max-age=86400');
  res.json(payload);
});

/**
 * Get all shows (K-dramas + Western) that share a specific trope or theme
 * GET /api/browse/trope/:trope
 */
app.get('/api/browse/trope/:trope', (req, res) => {
  const trope = (req.params.trope || '').toLowerCase().trim();
  const cacheKey = `trope:${trope}`;
  const cached = cacheGet(cacheKey);
  if (cached) {
    res.setHeader('Cache-Control', 'public, max-age=3600');
    return res.json(cached);
  }
  const result = engine.getShowsByTrope(trope);
  if (!result || result.total === 0) {
    return res.status(404).json({ success: false, message: 'No shows found for this trope' });
  }
  const payload = { success: true, ...result };
  cacheSet(cacheKey, payload, CACHE_TTL_STATIC);
  res.setHeader('Cache-Control', 'public, max-age=3600');
  res.json(payload);
});

/**
 * Get featured matches for homepage
 * GET /api/featured
 */
app.get('/api/featured', (req, res) => {
  const cached = cacheGet('featured');
  if (cached) {
    res.setHeader('Cache-Control', 'public, max-age=3600');
    return res.json(cached);
  }
  const featured = engine.getFeaturedMatches();
  // Inject poster URLs for visual display
  const featuredWithPosters = featured.map(match => ({
    ...match,
    western: {
      ...match.western,
      posterUrl: getPosterUrl(match.western.id)
    },
    kdrama: {
      ...match.kdrama,
      posterUrl: getPosterUrl(match.kdrama.id)
    }
  }));
  const payload = { success: true, featured: featuredWithPosters };
  cacheSet('featured', payload, CACHE_TTL_STATIC);
  res.setHeader('Cache-Control', 'public, max-age=3600');
  res.json(payload);
});

/**
 * Themed featured sections — 20 curated Western → K-drama pairings in 5 categories
 * GET /api/themed-featured
 */
const THEMED_SECTIONS = [
  {
    id: 'sovereign',
    title: 'The Sovereign Matches',
    subtitle: 'Power, Wealth & Betrayal',
    emoji: '👑',
    pairings: [
      { westernId: 'succession',    westernTitle: 'Succession',    kdramaId: 'reborn-rich',   kdramaTitle: 'Reborn Rich',     score: 91, why: 'Corporate warfare, toxic family dynamics, and inheritance battles.' },
      { westernId: 'billions',      westernTitle: 'Billions',      kdramaId: 'tracer',        kdramaTitle: 'Tracer',          score: 87, why: 'Tax evasion, financial crimes, and cat-and-mouse games with high stakes.' },
      { westernId: 'gossip-girl',   westernTitle: 'Gossip Girl',   kdramaId: 'penthouse',     kdramaTitle: 'The Penthouse',   score: 84, why: 'High-society scandals, elitist schools, and extreme revenge.' },
      { westernId: 'house-of-cards',westernTitle: 'House of Cards',kdramaId: 'chief-of-staff',kdramaTitle: 'Chief of Staff',  score: 89, why: 'Intense political maneuvering and the dark side of power.' }
    ]
  },
  {
    id: 'procedural',
    title: 'The Procedural Matches',
    subtitle: 'Crime & Mystery',
    emoji: '🔍',
    pairings: [
      { westernId: 'mindhunter',     westernTitle: 'Mindhunter',     kdramaId: 'through-the-darkness', kdramaTitle: 'Through the Darkness', score: 86, why: 'The origin story of criminal profilers catching serial killers.' },
      { westernId: 'criminal-minds', westernTitle: 'Criminal Minds', kdramaId: 'signal',               kdramaTitle: 'Signal',               score: 82, why: 'Solving cold cases using psychological profiling (with a supernatural twist).' },
      { westernId: 'sherlock',       westernTitle: 'Sherlock',       kdramaId: 'stranger',             kdramaTitle: 'Stranger (Forest of Secrets)', score: 85, why: 'A brilliant, socially detached lead solving high-level corruption.' },
      { westernId: 'the-good-wife',  westernTitle: 'The Good Wife',  kdramaId: 'the-good-wife-kr',     kdramaTitle: 'The Good Wife (Korean)', score: 93, why: 'A direct, highly acclaimed remake of the legal/political drama.' }
    ]
  },
  {
    id: 'life-career',
    title: 'The Life & Career Matches',
    subtitle: 'Relatable Dramas',
    emoji: '☕',
    pairings: [
      { westernId: 'the-bear',        westernTitle: 'The Bear',           kdramaId: 'wok-of-love',       kdramaTitle: 'Wok of Love',        score: 83, why: 'High-pressure kitchen energy mixed with personal growth.' },
      { westernId: 'greys-anatomy',   westernTitle: "Grey's Anatomy",     kdramaId: 'hospital-playlist', kdramaTitle: 'Hospital Playlist',  score: 80, why: 'Ensemble medical cast focusing on friendship and life\'s small moments.' },
      { westernId: 'sex-and-the-city',westernTitle: 'Sex and the City',   kdramaId: 'search-www',        kdramaTitle: 'Search: WWW',        score: 78, why: 'Strong, successful women navigating career and love in the modern world.' },
      { westernId: 'friends',         westernTitle: 'Friends',            kdramaId: 'welcome-to-waikiki',kdramaTitle: 'Welcome to Waikiki', score: 76, why: 'A group of friends living together and dealing with chaotic, hilarious failures.' }
    ]
  },
  {
    id: 'dark-gritty',
    title: 'The Dark & Gritty Matches',
    subtitle: 'Thriller & Action',
    emoji: '⚡',
    pairings: [
      { westernId: 'john-wick',       westernTitle: 'John Wick',       kdramaId: 'the-man-from-nowhere', kdramaTitle: 'The Man from Nowhere', score: 88, why: 'A retired professional forced back into violence to save someone.' },
      { westernId: 'black-mirror',    westernTitle: 'Black Mirror',    kdramaId: 'bloodhounds',          kdramaTitle: 'Bloodhounds',          score: 75, why: 'Gritty, dark action involving debt, corruption, and underground fights.' },
      { westernId: 'prison-break',    westernTitle: 'Prison Break',    kdramaId: 'prison-playbook',      kdramaTitle: 'Prison Playbook',      score: 79, why: 'Life inside the system, with dark comedy and found family.' },
      { westernId: 'the-walking-dead',westernTitle: 'The Walking Dead',kdramaId: 'kingdom',              kdramaTitle: 'Kingdom',              score: 86, why: 'A high-budget zombie outbreak set in historical Joseon Korea.' }
    ]
  },
  {
    id: 'niche-vibe',
    title: 'The Niche/Vibe Matches',
    subtitle: 'Pure Feeling',
    emoji: '✨',
    pairings: [
      { westernId: 'emily-in-paris',  westernTitle: 'Emily in Paris',   kdramaId: 'business-proposal',  kdramaTitle: 'Business Proposal',  score: 85, why: 'Lighthearted, stylish, and full of accidental romance tropes.' },
      { westernId: 'the-queens-gambit',westernTitle: "The Queen's Gambit",kdramaId: 'the-glory',        kdramaTitle: 'The Glory',           score: 82, why: 'Genius masterclass feel and intense focus on a specific craft.' },
      { westernId: 'stranger-things', westernTitle: 'Stranger Things',  kdramaId: 'sweet-home',         kdramaTitle: 'Sweet Home',          score: 80, why: 'Residents fighting terrifying monsters in a confined space.' },
      { westernId: 'normal-people',   westernTitle: 'Normal People',    kdramaId: 'our-beloved-summer', kdramaTitle: 'Our Beloved Summer',  score: 87, why: 'A realistic, melancholic look at the one that got away.' }
    ]
  }
];

app.get('/api/themed-featured', (req, res) => {
  const cached = cacheGet('themed-featured');
  if (cached) {
    res.setHeader('Cache-Control', 'public, max-age=3600');
    return res.json(cached);
  }
  const sections = THEMED_SECTIONS.map(section => ({
    ...section,
    pairings: section.pairings.map(p => ({
      ...p,
      westernPosterUrl: getPosterUrl(p.westernId),
      kdramaPosterUrl: getPosterUrl(p.kdramaId)
    }))
  }));
  const payload = { success: true, sections };
  cacheSet('themed-featured', payload, CACHE_TTL_STATIC);
  res.setHeader('Cache-Control', 'public, max-age=3600');
  res.json(payload);
});

/**
 * Featured Match of the Week — weekly curated trending show → K-drama/C-drama pair
 * GET /api/featured/week
 *
 * Data source: data/featured-week.json — update this file each week.
 * Returns config with poster URLs injected from TMDB poster-paths map.
 */
app.get('/api/featured/week', (req, res) => {
  const cached = cacheGet('featured-week');
  if (cached) {
    res.setHeader('Cache-Control', 'public, max-age=3600');
    return res.json(cached);
  }
  try {
    // Fresh require each time so dev can hot-edit without restart
    delete require.cache[require.resolve('./data/featured-week.json')];
    const config = require('./data/featured-week.json');
    const payload = {
      success: true,
      week: config.week,
      updatedLabel: config.updatedLabel,
      headline: config.headline,
      subheadline: config.subheadline,
      matchScore: config.matchScore,
      whyMatch: config.whyMatch,
      matchLabel: config.matchLabel,
      western: {
        ...config.western,
        posterUrl: getPosterUrl(config.western.id)
      },
      drama: {
        ...config.drama,
        posterUrl: getPosterUrl(config.drama.id)
      }
    };
    cacheSet('featured-week', payload, CACHE_TTL_STATIC);
    res.setHeader('Cache-Control', 'public, max-age=3600');
    res.json(payload);
  } catch (err) {
    console.error('[Featured Week] Error loading config:', err);
    res.json({ success: false });
  }
});

/**
 * New & Trending titles — recently added catalog entries
 * GET /api/new-titles
 *
 * Returns two lists:
 *   newTitles    — 8 K-dramas from the May 2025 batch (kdramas-batch-j-2024-2026)
 *   staffPicks   — 5 hand-curated all-time favourites for discovery
 *
 * Update NEW_TITLE_IDS with each batch release to keep the "Just Added" row fresh.
 */
const NEW_TITLE_IDS = [
  // May 2025 batch (Day 46) — 8 standout picks from the 25-title drop
  'little-women-kdrama',       // 2022 — high-stakes chaebol thriller, critically acclaimed
  'all-of-us-are-dead-s2',     // 2025 — zombie action, long-awaited sequel
  'the-red-sleeve-2021',       // 2021 — sweeping historical romance
  'celebrity-2023',            // 2023 — dark thriller about influencer culture
  'mouse-kdrama',              // 2021 — mind-bending serial killer thriller
  'the-auditors',              // 2024 — sharp comedy-thriller
  'forecasting-love-and-weather', // 2022 — warm workplace romance
  'mine-kdrama',               // 2021 — prestige chaebol drama
];

const STAFF_PICK_IDS = [
  'crash-landing-on-you',
  'goblin',
  'stranger-things',
  'breaking-bad',
  'signal',
];

app.get('/api/new-titles', (req, res) => {
  const cached = cacheGet('new-titles');
  if (cached) {
    res.setHeader('Cache-Control', 'public, max-age=3600');
    return res.json(cached);
  }

  const buildEntry = (id) => {
    const show = engine.getShowDetails(id);
    if (!show) return null;
    return {
      id: show.id,
      title: show.title,
      year: show.year,
      type: show.type,
      genres: (show.genres || []).slice(0, 2),
      posterUrl: getPosterUrl(id) || null,
    };
  };

  const newTitles = NEW_TITLE_IDS.map(buildEntry).filter(Boolean);
  const staffPicks = STAFF_PICK_IDS.map(buildEntry).filter(Boolean);
  const payload = { success: true, newTitles, staffPicks };
  cacheSet('new-titles', payload, CACHE_TTL_STATIC);
  res.setHeader('Cache-Control', 'public, max-age=3600');
  res.json(payload);
});

/**
 * Get database stats
 * GET /api/stats
 */
app.get('/api/stats', async (req, res) => {
  const stats = engine.getStats();

  let searchesThisWeek = 0;
  if (pool) {
    try {
      const result = await pool.query(
        `SELECT COUNT(*) as cnt FROM searches WHERE created_at > NOW() - INTERVAL '7 days'`
      );
      searchesThisWeek = parseInt(result.rows[0].cnt) || 0;
    } catch (e) { /* non-critical */ }
  }

  res.json({ success: true, ...stats, searchesThisWeek });
});

/**
 * Live activity feed for homepage ticker
 * GET /api/activity
 */
app.get('/api/activity', async (req, res) => {
  // Curated smart defaults based on popular catalog matches
  const DEFAULTS = [
    { message: 'Someone just matched Breaking Bad → Signal', ago: 'just now' },
    { message: '3 people discovered Crash Landing on You today', ago: '2m ago' },
    { message: 'Someone matched Stranger Things → All of Us Are Dead', ago: '4m ago' },
    { message: 'Game of Thrones → Kingdom trending right now 🔥', ago: '6m ago' },
    { message: 'Someone discovered Cafe Minamdang via Psych', ago: '9m ago' },
    { message: 'Dexter fans are loving Mouse today', ago: '12m ago' },
    { message: 'Someone just matched The Office → Reply 1988', ago: '15m ago' },
    { message: 'Breaking Bad → Strangers from Hell — 84% match', ago: '18m ago' },
    { message: 'Someone discovered Through the Darkness via Mindhunter', ago: '22m ago' },
    { message: "Grey's Anatomy fans are loving Dr. Romantic 🏥", ago: '26m ago' },
    { message: 'Prison Break → Big Mouth — 60% match found', ago: '29m ago' },
    { message: 'Suits → Good Partner trending this week', ago: '31m ago' },
    { message: 'Someone matched Outlander → Moon Lovers: Scarlet Heart', ago: '34m ago' },
    { message: '7 people found their Asian drama match this hour', ago: '38m ago' },
    { message: 'Peaky Blinders fans are discovering Vincenzo 🔥', ago: '41m ago' },
  ];

  let activities = [...DEFAULTS];

  if (pool) {
    try {
      const recent = await pool.query(
        `SELECT show_title, show_type, created_at
           FROM searches
          WHERE created_at > NOW() - INTERVAL '24 hours'
          ORDER BY created_at DESC
          LIMIT 20`
      );
      if (recent.rows.length >= 3) {
        const realActivities = recent.rows.map(row => {
          const mins = Math.max(0, Math.round((Date.now() - new Date(row.created_at).getTime()) / 60000));
          const ago = mins < 1 ? 'just now' : mins < 60 ? `${mins}m ago` : `${Math.round(mins / 60)}h ago`;
          if (row.show_type === 'western' || row.show_type === 'western-movie') {
            return { message: `Someone looked up Asian dramas like ${row.show_title}`, ago };
          } else {
            return { message: `Someone just discovered ${row.show_title}`, ago };
          }
        });
        // Blend real recent activity with curated defaults for a full feed
        activities = [...realActivities.slice(0, 8), ...DEFAULTS.slice(0, 7)];
      }
    } catch (e) { /* non-critical — use defaults */ }
  }

  res.json({ success: true, activities });
});

// ============================================
// EMAIL CAPTURE
// ============================================

/**
 * Subscribe to newsletter
 * POST /api/subscribe
 * Body: { email, source }
 */
app.post('/api/subscribe', async (req, res) => {
  const { email, source } = req.body || {};

  if (!email || !email.includes('@')) {
    return res.status(400).json({ success: false, message: 'Valid email required' });
  }

  // Sanitize email
  const cleanEmail = email.trim().toLowerCase().substring(0, 254);
  const cleanSource = (source || 'homepage').substring(0, 50);

  if (!pool) {
    // No DB — just acknowledge (email will be lost, but don't error on user)
    console.log(`[Newsletter] Subscriber without DB: ${cleanEmail} from ${cleanSource}`);
    return res.json({ success: true });
  }

  try {
    const result = await pool.query(
      `INSERT INTO newsletter_subscribers (email, source, created_at)
       VALUES ($1, $2, NOW())
       ON CONFLICT (email) DO NOTHING`,
      [cleanEmail, cleanSource]
    );
    if (result.rowCount === 0) {
      // Email already exists — treat as success (friendly UX)
      return res.status(409).json({ success: false, message: 'Already subscribed' });
    }
    res.json({ success: true });
  } catch (err) {
    console.error('[Newsletter] Subscribe error:', err.message);
    res.status(500).json({ success: false, message: 'Subscription failed' });
  }
});

// ============================================
// STRIPE PURCHASE CONFIRMATION — Meta Pixel Purchase event
// Use as Stripe success_url: https://dramamatch.app/purchase-complete?value={CHECKOUT_SESSION_AMOUNT_TOTAL_DECIMAL}&currency={CHECKOUT_SESSION_CURRENCY}
// Stripe template vars are injected server-side by Stripe before redirect, so
// the actual URL the browser hits contains real numeric values.
// ============================================

/**
 * GET /purchase-complete
 * Stripe success redirect page. Fires Meta Pixel Purchase event with
 * real amount + currency from query params, then redirects to homepage.
 *
 * Usage in Stripe Checkout session:
 *   success_url: 'https://dramamatch.app/purchase-complete?value={CHECKOUT_SESSION_AMOUNT_TOTAL_DECIMAL}&currency={CHECKOUT_SESSION_CURRENCY}'
 */
app.get('/purchase-complete', (req, res) => {
  const value    = parseFloat(req.query.value)    || 0;
  const currency = (req.query.currency || 'USD').toUpperCase().substring(0, 3);

  res.send(`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Thank you! — DramaMatch</title>
  <!-- Meta Pixel Code -->
  <script>
  !function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?
  n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;
  n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;
  t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,
  document,'script','https://connect.facebook.net/en_US/fbevents.js');
  fbq('init', '1686999645661477');
  fbq('track', 'PageView');
  fbq('track', 'Purchase', { value: ${value}, currency: '${currency}' });
  // Redirect to homepage after pixel fires
  setTimeout(function() { window.location.replace('/'); }, 300);
  </script>
  <noscript><img height="1" width="1" style="display:none"
  src="https://www.facebook.com/tr?id=1686999645661477&ev=Purchase&noscript=1"
  /></noscript>
  <!-- End Meta Pixel Code -->
</head>
<body style="font-family:sans-serif;text-align:center;padding:3rem">
  <p>Processing your order…</p>
</body>
</html>`);
});

// ============================================
// AFFILIATE TRACKING
// ============================================

/**
 * Get affiliate config (platform colors, names)
 * GET /api/affiliate/config
 */
app.get('/api/affiliate/config', (req, res) => {
  const config = {};
  for (const [key, platform] of Object.entries(affiliateConfig)) {
    config[key] = {
      name: platform.name,
      shortName: platform.shortName,
      color: platform.color,
      bgColor: platform.bgColor,
      icon: platform.icon,
      priority: platform.priority
    };
  }
  res.json({ success: true, platforms: config });
});

/**
 * Track affiliate click (fire-and-forget beacon)
 * POST /api/affiliate/click
 */
app.post('/api/affiliate/click', (req, res) => {
  const { platform, showId, showTitle, sourceShowId } = req.body;

  if (!platform || !showId) {
    return res.status(400).json({ success: false, message: 'platform and showId required' });
  }

  // Track click (fire and forget)
  if (pool) {
    pool.query(
      `INSERT INTO affiliate_clicks (platform, show_id, show_title, source_show_id, ip_hash, user_agent, referrer, created_at)
       VALUES ($1, $2, $3, $4, $5, $6, $7, NOW())`,
      [
        platform,
        showId,
        showTitle || '',
        sourceShowId || '',
        hashIP(req.ip),
        (req.headers['user-agent'] || '').substring(0, 500),
        (req.headers['referer'] || '').substring(0, 500)
      ]
    ).catch(() => {}); // Ignore errors
  }

  res.json({ success: true });
});

/**
 * Get affiliate click stats (for analytics)
 * GET /api/affiliate/stats
 */
app.get('/api/affiliate/stats', async (req, res) => {
  if (!pool) {
    return res.json({ success: true, stats: { total: 0, byPlatform: {}, topShows: [] } });
  }

  try {
    const [totalRes, platformRes, showsRes] = await Promise.all([
      pool.query('SELECT COUNT(*) as total FROM affiliate_clicks'),
      pool.query('SELECT platform, COUNT(*) as clicks FROM affiliate_clicks GROUP BY platform ORDER BY clicks DESC'),
      pool.query('SELECT show_title, platform, COUNT(*) as clicks FROM affiliate_clicks GROUP BY show_title, platform ORDER BY clicks DESC LIMIT 10')
    ]);

    res.json({
      success: true,
      stats: {
        total: parseInt(totalRes.rows[0].total),
        byPlatform: Object.fromEntries(platformRes.rows.map(r => [r.platform, parseInt(r.clicks)])),
        topShows: showsRes.rows.map(r => ({ title: r.show_title, platform: r.platform, clicks: parseInt(r.clicks) }))
      }
    });
  } catch (err) {
    res.json({ success: true, stats: { total: 0, byPlatform: {}, topShows: [] } });
  }
});

/**
 * Redirect through affiliate link (for tracking + redirect)
 * GET /api/affiliate/go/:platform/:showId
 */
app.get('/api/affiliate/go/:platform/:showId', (req, res) => {
  const { platform, showId } = req.params;
  // locale used for Amazon regional domain selection (ko → amazon.co.kr, ja → amazon.co.jp, etc.)
  const locale = req.query.locale || 'en';
  const show = engine.getShowDetails(showId);
  const platformConfig = affiliateConfig[platform];

  if (!platformConfig || !show) {
    return res.redirect('https://www.google.com/search?q=' + encodeURIComponent((show?.title || showId) + ' watch online'));
  }

  // Track click
  if (pool) {
    pool.query(
      `INSERT INTO affiliate_clicks (platform, show_id, show_title, ip_hash, user_agent, referrer, created_at)
       VALUES ($1, $2, $3, $4, $5, $6, NOW())`,
      [platform, showId, show.title, hashIP(req.ip), (req.headers['user-agent'] || '').substring(0, 500), (req.headers['referer'] || '').substring(0, 500)]
    ).catch(() => {});
  }

  const url = platformConfig.buildUrl(show.title, locale);
  res.redirect(url);
});

// ============================================
// PAGEVIEW & ANALYTICS TRACKING
// ============================================

/**
 * Parse referrer URL into a clean source label
 */
function parseReferrerSource(referer, utmSource) {
  if (utmSource) return utmSource.toLowerCase().substring(0, 100);
  if (!referer) return 'direct';
  try {
    const url = new URL(referer);
    const host = url.hostname.replace(/^www\./, '').toLowerCase();
    if (host.includes('google.')) return 'google';
    if (host.includes('bing.')) return 'bing';
    if (host.includes('yahoo.')) return 'yahoo';
    if (host.includes('duckduckgo.')) return 'duckduckgo';
    if (host.includes('reddit.')) return 'reddit';
    if (host.includes('twitter.') || host === 'x.com' || host === 't.co') return 'twitter';
    if (host.includes('facebook.') || host.includes('fb.')) return 'facebook';
    if (host.includes('instagram.')) return 'instagram';
    if (host.includes('tiktok.')) return 'tiktok';
    if (host.includes('youtube.') || host === 'youtu.be') return 'youtube';
    if (host.includes('pinterest.')) return 'pinterest';
    if (host.includes('linkedin.')) return 'linkedin';
    if (host.includes('polsia.') || host.includes('dramamatch.')) return 'internal';
    return host.substring(0, 100) || 'other';
  } catch (e) {
    return 'other';
  }
}

/**
 * Track a pageview (fire-and-forget beacon)
 * POST /api/track/pageview
 * Body: { page, referrer, utmSource, utmMedium, utmCampaign }
 */
app.post('/api/track/pageview', (req, res) => {
  res.json({ success: true });

  if (!pool) return;

  const { page, referrer, utmSource, utmMedium, utmCampaign } = req.body || {};
  const pagePath = (page || '/').substring(0, 500);
  const refererRaw = (referrer || req.headers['referer'] || '').substring(0, 500);
  const utmSrc = (utmSource || '').substring(0, 100);
  const utmMed = (utmMedium || '').substring(0, 100);
  const utmCamp = (utmCampaign || '').substring(0, 200);
  const source = parseReferrerSource(refererRaw, utmSrc);

  pool.query(
    `INSERT INTO pageviews (page, referrer_raw, referrer_source, utm_source, utm_medium, utm_campaign, ip_hash, user_agent, created_at)
     VALUES ($1, $2, $3, $4, $5, $6, $7, $8, NOW())`,
    [pagePath, refererRaw, source, utmSrc || null, utmMed || null, utmCamp || null,
     hashIP(req.ip), (req.headers['user-agent'] || '').substring(0, 500)]
  ).catch(() => {});
});

/**
 * Analytics dashboard — unified stats
 * GET /api/analytics/dashboard?days=30
 */
app.get('/api/analytics/dashboard', async (req, res) => {
  // Require admin token
  const adminToken = req.headers['x-admin-token'] || req.query.token || '';
  if (!process.env.ADMIN_TOKEN || adminToken !== process.env.ADMIN_TOKEN) {
    return res.status(403).json({ success: false, message: 'Unauthorized' });
  }

  if (!pool) {
    return res.json({ success: true, message: 'No database connected', data: {} });
  }

  const days = Math.min(parseInt(req.query.days) || 30, 90);

  try {
    const [
      pvTotalRes,
      pvDailyRes,
      pvPagesRes,
      pvSourcesRes,
      affTotalRes,
      affPlatformRes,
      affShowsRes,
      affDailyRes,
      searchTopRes,
      searchDailyRes
    ] = await Promise.all([
      // Total pageviews
      pool.query(`SELECT COUNT(*) as total, COUNT(DISTINCT ip_hash) as uniq FROM pageviews WHERE created_at > NOW() - INTERVAL '${days} days'`),
      // Daily pageviews
      pool.query(`SELECT DATE(created_at) as day, COUNT(*) as views, COUNT(DISTINCT ip_hash) as uniq FROM pageviews WHERE created_at > NOW() - INTERVAL '${days} days' GROUP BY day ORDER BY day`),
      // Top pages
      pool.query(`SELECT page, COUNT(*) as views FROM pageviews WHERE created_at > NOW() - INTERVAL '${days} days' GROUP BY page ORDER BY views DESC LIMIT 15`),
      // Top referral sources
      pool.query(`SELECT referrer_source, COUNT(*) as visits FROM pageviews WHERE created_at > NOW() - INTERVAL '${days} days' GROUP BY referrer_source ORDER BY visits DESC LIMIT 15`),
      // Total affiliate clicks
      pool.query(`SELECT COUNT(*) as total FROM affiliate_clicks WHERE created_at > NOW() - INTERVAL '${days} days'`),
      // Affiliate clicks by platform
      pool.query(`SELECT platform, COUNT(*) as clicks FROM affiliate_clicks WHERE created_at > NOW() - INTERVAL '${days} days' GROUP BY platform ORDER BY clicks DESC`),
      // Top shows clicked
      pool.query(`SELECT show_title, COUNT(*) as clicks FROM affiliate_clicks WHERE created_at > NOW() - INTERVAL '${days} days' GROUP BY show_title ORDER BY clicks DESC LIMIT 10`),
      // Daily affiliate clicks
      pool.query(`SELECT DATE(created_at) as day, COUNT(*) as clicks FROM affiliate_clicks WHERE created_at > NOW() - INTERVAL '${days} days' GROUP BY day ORDER BY day`),
      // Top searched shows
      pool.query(`SELECT show_title, COUNT(*) as searches FROM searches WHERE created_at > NOW() - INTERVAL '${days} days' GROUP BY show_title ORDER BY searches DESC LIMIT 10`),
      // Daily searches
      pool.query(`SELECT DATE(created_at) as day, COUNT(*) as searches FROM searches WHERE created_at > NOW() - INTERVAL '${days} days' GROUP BY day ORDER BY day`)
    ]);

    res.json({
      success: true,
      period: `${days} days`,
      pageviews: {
        total: parseInt(pvTotalRes.rows[0].total) || 0,
        uniqueVisitors: parseInt(pvTotalRes.rows[0].uniq) || 0,
        daily: pvDailyRes.rows.map(r => ({ day: r.day, views: parseInt(r.views), uniq: parseInt(r.uniq) })),
        topPages: pvPagesRes.rows.map(r => ({ page: r.page, views: parseInt(r.views) })),
        topSources: pvSourcesRes.rows.map(r => ({ source: r.referrer_source, visits: parseInt(r.visits) }))
      },
      affiliateClicks: {
        total: parseInt(affTotalRes.rows[0].total) || 0,
        byPlatform: Object.fromEntries(affPlatformRes.rows.map(r => [r.platform, parseInt(r.clicks)])),
        topShows: affShowsRes.rows.map(r => ({ title: r.show_title, clicks: parseInt(r.clicks) })),
        daily: affDailyRes.rows.map(r => ({ day: r.day, clicks: parseInt(r.clicks) }))
      },
      searches: {
        topShows: searchTopRes.rows.map(r => ({ title: r.show_title, searches: parseInt(r.searches) })),
        daily: searchDailyRes.rows.map(r => ({ day: r.day, searches: parseInt(r.searches) }))
      }
    });
  } catch (err) {
    console.error('[Analytics Dashboard]', err.message);
    res.status(500).json({ success: false, message: 'Query error' });
  }
});

// ============================================
// ANALYTICS ENDPOINTS (no auth required — internal use)
// ============================================

/**
 * Subscriber analytics
 * GET /api/analytics/subscribers
 */
app.get('/api/analytics/subscribers', async (req, res) => {
  if (!pool) return res.json({ success: true, total: 0, last7d: 0, last30d: 0, bySource: {} });

  try {
    const [totalRes, last7dRes, last30dRes, sourceRes] = await Promise.all([
      pool.query('SELECT COUNT(*) as total FROM newsletter_subscribers'),
      pool.query("SELECT COUNT(*) as cnt FROM newsletter_subscribers WHERE created_at > NOW() - INTERVAL '7 days'"),
      pool.query("SELECT COUNT(*) as cnt FROM newsletter_subscribers WHERE created_at > NOW() - INTERVAL '30 days'"),
      pool.query('SELECT source, COUNT(*) as cnt FROM newsletter_subscribers GROUP BY source ORDER BY cnt DESC')
    ]);

    res.json({
      success: true,
      total: parseInt(totalRes.rows[0].total) || 0,
      last7d: parseInt(last7dRes.rows[0].cnt) || 0,
      last30d: parseInt(last30dRes.rows[0].cnt) || 0,
      bySource: Object.fromEntries(sourceRes.rows.map(r => [r.source || 'unknown', parseInt(r.cnt)]))
    });
  } catch (err) {
    console.error('[Analytics Subscribers]', err.message);
    res.status(500).json({ success: false, message: 'Query error' });
  }
});

/**
 * Affiliate click analytics
 * GET /api/analytics/affiliate-clicks
 */
app.get('/api/analytics/affiliate-clicks', async (req, res) => {
  if (!pool) return res.json({ success: true, total: 0, last7d: 0, last30d: 0, byPlatform: {}, topTitles: [] });

  try {
    const [totalRes, last7dRes, last30dRes, platformRes, topTitlesRes] = await Promise.all([
      pool.query('SELECT COUNT(*) as total FROM affiliate_clicks'),
      pool.query("SELECT COUNT(*) as cnt FROM affiliate_clicks WHERE created_at > NOW() - INTERVAL '7 days'"),
      pool.query("SELECT COUNT(*) as cnt FROM affiliate_clicks WHERE created_at > NOW() - INTERVAL '30 days'"),
      pool.query('SELECT platform, COUNT(*) as clicks FROM affiliate_clicks GROUP BY platform ORDER BY clicks DESC'),
      pool.query('SELECT show_title, COUNT(*) as clicks FROM affiliate_clicks WHERE show_title IS NOT NULL GROUP BY show_title ORDER BY clicks DESC LIMIT 10')
    ]);

    res.json({
      success: true,
      total: parseInt(totalRes.rows[0].total) || 0,
      last7d: parseInt(last7dRes.rows[0].cnt) || 0,
      last30d: parseInt(last30dRes.rows[0].cnt) || 0,
      byPlatform: Object.fromEntries(platformRes.rows.map(r => [r.platform, parseInt(r.clicks)])),
      topTitles: topTitlesRes.rows.map(r => ({ title: r.show_title, clicks: parseInt(r.clicks) }))
    });
  } catch (err) {
    console.error('[Analytics Affiliate Clicks]', err.message);
    res.status(500).json({ success: false, message: 'Query error' });
  }
});

/**
 * Pageview analytics
 * GET /api/analytics/pageviews
 */
app.get('/api/analytics/pageviews', async (req, res) => {
  if (!pool) return res.json({ success: true, total: 0, last7d: 0, last30d: 0, topPages7d: [], topPages30d: [] });

  try {
    const [totalRes, last7dRes, last30dRes, topPages7dRes, topPages30dRes] = await Promise.all([
      pool.query('SELECT COUNT(*) as total, COUNT(DISTINCT ip_hash) as uniq FROM pageviews'),
      pool.query("SELECT COUNT(*) as cnt, COUNT(DISTINCT ip_hash) as uniq FROM pageviews WHERE created_at > NOW() - INTERVAL '7 days'"),
      pool.query("SELECT COUNT(*) as cnt, COUNT(DISTINCT ip_hash) as uniq FROM pageviews WHERE created_at > NOW() - INTERVAL '30 days'"),
      pool.query("SELECT page, COUNT(*) as views FROM pageviews WHERE created_at > NOW() - INTERVAL '7 days' GROUP BY page ORDER BY views DESC LIMIT 10"),
      pool.query("SELECT page, COUNT(*) as views FROM pageviews WHERE created_at > NOW() - INTERVAL '30 days' GROUP BY page ORDER BY views DESC LIMIT 10")
    ]);

    res.json({
      success: true,
      total: parseInt(totalRes.rows[0].total) || 0,
      uniqueVisitorsAllTime: parseInt(totalRes.rows[0].uniq) || 0,
      last7d: { views: parseInt(last7dRes.rows[0].cnt) || 0, uniqueVisitors: parseInt(last7dRes.rows[0].uniq) || 0 },
      last30d: { views: parseInt(last30dRes.rows[0].cnt) || 0, uniqueVisitors: parseInt(last30dRes.rows[0].uniq) || 0 },
      topPages7d: topPages7dRes.rows.map(r => ({ page: r.page, views: parseInt(r.views) })),
      topPages30d: topPages30dRes.rows.map(r => ({ page: r.page, views: parseInt(r.views) }))
    });
  } catch (err) {
    console.error('[Analytics Pageviews]', err.message);
    res.status(500).json({ success: false, message: 'Query error' });
  }
});

/**
 * Summary analytics — single call for daily CEO report
 * GET /api/analytics/summary
 */
app.get('/api/analytics/summary', async (req, res) => {
  const catalogStats = engine.getStats();

  if (!pool) {
    return res.json({
      success: true,
      generatedAt: new Date().toISOString(),
      catalog: catalogStats,
      subscribers: { total: 0, last7d: 0, last30d: 0, bySource: {} },
      affiliateClicks: { total: 0, last7d: 0, last30d: 0, byPlatform: {}, topTitles: [] },
      pageviews: { total: 0, last7d: 0, last30d: 0 },
      searches: { last7d: 0, last30d: 0 }
    });
  }

  try {
    const [
      subTotalRes, subLast7dRes, subLast30dRes, subSourceRes,
      affTotalRes, affLast7dRes, affLast30dRes, affPlatformRes, affTopRes,
      pvTotalRes, pvLast7dRes, pvLast30dRes,
      searchLast7dRes, searchLast30dRes
    ] = await Promise.all([
      pool.query('SELECT COUNT(*) as total FROM newsletter_subscribers'),
      pool.query("SELECT COUNT(*) as cnt FROM newsletter_subscribers WHERE created_at > NOW() - INTERVAL '7 days'"),
      pool.query("SELECT COUNT(*) as cnt FROM newsletter_subscribers WHERE created_at > NOW() - INTERVAL '30 days'"),
      pool.query('SELECT source, COUNT(*) as cnt FROM newsletter_subscribers GROUP BY source ORDER BY cnt DESC'),
      pool.query('SELECT COUNT(*) as total FROM affiliate_clicks'),
      pool.query("SELECT COUNT(*) as cnt FROM affiliate_clicks WHERE created_at > NOW() - INTERVAL '7 days'"),
      pool.query("SELECT COUNT(*) as cnt FROM affiliate_clicks WHERE created_at > NOW() - INTERVAL '30 days'"),
      pool.query('SELECT platform, COUNT(*) as clicks FROM affiliate_clicks GROUP BY platform ORDER BY clicks DESC'),
      pool.query('SELECT show_title, COUNT(*) as clicks FROM affiliate_clicks WHERE show_title IS NOT NULL GROUP BY show_title ORDER BY clicks DESC LIMIT 5'),
      pool.query('SELECT COUNT(*) as total FROM pageviews'),
      pool.query("SELECT COUNT(*) as cnt, COUNT(DISTINCT ip_hash) as uniq FROM pageviews WHERE created_at > NOW() - INTERVAL '7 days'"),
      pool.query("SELECT COUNT(*) as cnt, COUNT(DISTINCT ip_hash) as uniq FROM pageviews WHERE created_at > NOW() - INTERVAL '30 days'"),
      pool.query("SELECT COUNT(*) as cnt FROM searches WHERE created_at > NOW() - INTERVAL '7 days'"),
      pool.query("SELECT COUNT(*) as cnt FROM searches WHERE created_at > NOW() - INTERVAL '30 days'")
    ]);

    res.json({
      success: true,
      generatedAt: new Date().toISOString(),
      catalog: catalogStats,
      subscribers: {
        total: parseInt(subTotalRes.rows[0].total) || 0,
        last7d: parseInt(subLast7dRes.rows[0].cnt) || 0,
        last30d: parseInt(subLast30dRes.rows[0].cnt) || 0,
        bySource: Object.fromEntries(subSourceRes.rows.map(r => [r.source || 'unknown', parseInt(r.cnt)]))
      },
      affiliateClicks: {
        total: parseInt(affTotalRes.rows[0].total) || 0,
        last7d: parseInt(affLast7dRes.rows[0].cnt) || 0,
        last30d: parseInt(affLast30dRes.rows[0].cnt) || 0,
        byPlatform: Object.fromEntries(affPlatformRes.rows.map(r => [r.platform, parseInt(r.clicks)])),
        topTitles: affTopRes.rows.map(r => ({ title: r.show_title, clicks: parseInt(r.clicks) }))
      },
      pageviews: {
        total: parseInt(pvTotalRes.rows[0].total) || 0,
        last7d: { views: parseInt(pvLast7dRes.rows[0].cnt) || 0, uniqueVisitors: parseInt(pvLast7dRes.rows[0].uniq) || 0 },
        last30d: { views: parseInt(pvLast30dRes.rows[0].cnt) || 0, uniqueVisitors: parseInt(pvLast30dRes.rows[0].uniq) || 0 }
      },
      searches: {
        last7d: parseInt(searchLast7dRes.rows[0].cnt) || 0,
        last30d: parseInt(searchLast30dRes.rows[0].cnt) || 0
      }
    });
  } catch (err) {
    console.error('[Analytics Summary]', err.message);
    res.status(500).json({ success: false, message: 'Query error' });
  }
});

// ============================================
// MATCH VOTES & ADMIN OVERRIDES
// ============================================

/**
 * Get vote stats for all recommendations from a source show
 * GET /api/votes?source=breaking-bad
 * Returns per-target vote counts, user's own vote (by IP), and override scores.
 */
app.get('/api/votes', async (req, res) => {
  const sourceShowId = (req.query.source || '').trim();
  if (!sourceShowId) {
    return res.status(400).json({ success: false, message: 'source parameter required' });
  }

  const defaultResponse = () => res.json({ success: true, votes: {} });

  if (!pool) return defaultResponse();

  const ipHash = hashIP(req.ip);
  const adminToken = req.headers['x-admin-token'] || '';
  const isCreator = adminToken && adminToken === (process.env.ADMIN_TOKEN || '');

  try {
    const [voteRows, overrideRows, userVoteRows] = await Promise.all([
      pool.query(
        `SELECT target_show_id, vote, COUNT(*) as cnt
           FROM match_votes
          WHERE source_show_id = $1
          GROUP BY target_show_id, vote`,
        [sourceShowId]
      ),
      pool.query(
        `SELECT target_show_id, override_score
           FROM match_overrides
          WHERE source_show_id = $1`,
        [sourceShowId]
      ),
      pool.query(
        `SELECT target_show_id, vote
           FROM match_votes
          WHERE source_show_id = $1 AND ip_hash = $2`,
        [sourceShowId, ipHash]
      )
    ]);

    // Build per-target stats
    const votes = {};

    for (const row of voteRows.rows) {
      const t = row.target_show_id;
      if (!votes[t]) votes[t] = { agree: 0, too_high: 0, too_low: 0, total: 0, agreePercent: 0, userVote: null, overrideScore: null };
      votes[t][row.vote] = parseInt(row.cnt);
    }

    // Calculate totals and agree%
    for (const t of Object.keys(votes)) {
      const v = votes[t];
      v.total = v.agree + v.too_high + v.too_low;
      v.agreePercent = v.total > 0 ? Math.round((v.agree / v.total) * 100) : 0;
    }

    // User's own vote
    for (const row of userVoteRows.rows) {
      const t = row.target_show_id;
      if (!votes[t]) votes[t] = { agree: 0, too_high: 0, too_low: 0, total: 0, agreePercent: 0, userVote: null, overrideScore: null };
      votes[t].userVote = row.vote;
    }

    // Override scores
    for (const row of overrideRows.rows) {
      const t = row.target_show_id;
      if (!votes[t]) votes[t] = { agree: 0, too_high: 0, too_low: 0, total: 0, agreePercent: 0, userVote: null, overrideScore: null };
      votes[t].overrideScore = row.override_score;
    }

    res.json({ success: true, votes, isCreator });
  } catch (err) {
    console.error('Votes fetch error:', err.message);
    defaultResponse();
  }
});

/**
 * Submit a vote on a match pair
 * POST /api/votes
 * Body: { sourceShowId, targetShowId, vote: 'agree'|'too_high'|'too_low' }
 * One vote per IP per pair — subsequent votes from same IP update the existing one.
 */
app.post('/api/votes', async (req, res) => {
  const { sourceShowId, targetShowId, vote } = req.body || {};

  if (!sourceShowId || !targetShowId || !['agree', 'too_high', 'too_low'].includes(vote)) {
    return res.status(400).json({ success: false, message: 'sourceShowId, targetShowId, and valid vote required' });
  }

  if (!pool) return res.json({ success: true, stats: null });

  const ipHash = hashIP(req.ip);
  const adminToken = req.headers['x-admin-token'] || '';
  const isCreator = adminToken && adminToken === (process.env.ADMIN_TOKEN || '');

  try {
    // Upsert: one vote per IP per pair (update if already voted)
    await pool.query(
      `INSERT INTO match_votes (source_show_id, target_show_id, vote, ip_hash, is_creator, created_at)
       VALUES ($1, $2, $3, $4, $5, NOW())
       ON CONFLICT DO NOTHING`,
      [sourceShowId, targetShowId, vote, ipHash, isCreator]
    );

    // Check if already voted — if so, update
    const existing = await pool.query(
      `SELECT id FROM match_votes WHERE source_show_id=$1 AND target_show_id=$2 AND ip_hash=$3`,
      [sourceShowId, targetShowId, ipHash]
    );
    if (existing.rows.length > 0) {
      await pool.query(
        `UPDATE match_votes SET vote=$1 WHERE source_show_id=$2 AND target_show_id=$3 AND ip_hash=$4`,
        [vote, sourceShowId, targetShowId, ipHash]
      );
    }

    // Return updated stats for this pair
    const statsRes = await pool.query(
      `SELECT vote, COUNT(*) as cnt
         FROM match_votes
        WHERE source_show_id = $1 AND target_show_id = $2
        GROUP BY vote`,
      [sourceShowId, targetShowId]
    );

    const stats = { agree: 0, too_high: 0, too_low: 0, total: 0, agreePercent: 0 };
    for (const row of statsRes.rows) {
      stats[row.vote] = parseInt(row.cnt);
    }
    stats.total = stats.agree + stats.too_high + stats.too_low;
    stats.agreePercent = stats.total > 0 ? Math.round((stats.agree / stats.total) * 100) : 0;

    res.json({ success: true, stats });
  } catch (err) {
    console.error('Vote submit error:', err.message);
    res.json({ success: true, stats: null });
  }
});

/**
 * Admin: set a score override for a match pair
 * POST /api/admin/override
 * Body: { sourceShowId, targetShowId, score, adminToken }
 */
app.post('/api/admin/override', async (req, res) => {
  const { sourceShowId, targetShowId, score, adminToken, note } = req.body || {};

  const expectedToken = process.env.ADMIN_TOKEN || '';
  if (!expectedToken || adminToken !== expectedToken) {
    return res.status(403).json({ success: false, message: 'Unauthorized' });
  }

  if (!sourceShowId || !targetShowId || !score || score < 1 || score > 100) {
    return res.status(400).json({ success: false, message: 'sourceShowId, targetShowId, and score (1-100) required' });
  }

  if (!pool) return res.status(503).json({ success: false, message: 'Database not available' });

  try {
    await pool.query(
      `INSERT INTO match_overrides (source_show_id, target_show_id, override_score, note, created_at, updated_at)
       VALUES ($1, $2, $3, $4, NOW(), NOW())
       ON CONFLICT ON CONSTRAINT match_overrides_pair_unique
       DO UPDATE SET override_score = $3, note = $4, updated_at = NOW()`,
      [sourceShowId, targetShowId, parseInt(score), note || null]
    );
    res.json({ success: true, override: { sourceShowId, targetShowId, score: parseInt(score) } });
  } catch (err) {
    console.error('Override set error:', err.message);
    res.status(500).json({ success: false, message: 'Server error' });
  }
});

/**
 * Admin: remove a score override
 * DELETE /api/admin/override
 * Body: { sourceShowId, targetShowId, adminToken }
 */
app.delete('/api/admin/override', async (req, res) => {
  const { sourceShowId, targetShowId, adminToken } = req.body || {};

  const expectedToken = process.env.ADMIN_TOKEN || '';
  if (!expectedToken || adminToken !== expectedToken) {
    return res.status(403).json({ success: false, message: 'Unauthorized' });
  }

  if (!sourceShowId || !targetShowId) {
    return res.status(400).json({ success: false, message: 'sourceShowId and targetShowId required' });
  }

  if (!pool) return res.status(503).json({ success: false, message: 'Database not available' });

  try {
    await pool.query(
      `DELETE FROM match_overrides WHERE source_show_id = $1 AND target_show_id = $2`,
      [sourceShowId, targetShowId]
    );
    res.json({ success: true });
  } catch (err) {
    console.error('Override delete error:', err.message);
    res.status(500).json({ success: false, message: 'Server error' });
  }
});

// ============================================
// ACTOR DEEP-DIVE
// ============================================

/**
 * Get actor filmography with optional match scores
 * GET /api/actor?name=Hyun+Bin&source=breaking-bad
 */
app.get('/api/actor', (req, res) => {
  const actorName = (req.query.name || '').trim();
  const sourceShowId = (req.query.source || '').trim() || null;

  if (!actorName) {
    return res.status(400).json({ success: false, message: 'name parameter required' });
  }

  const result = engine.getActorShowsWithMatches(actorName, sourceShowId);
  if (!result) {
    return res.status(404).json({ success: false, message: 'Actor not found' });
  }

  res.json({ success: true, ...result });
});

/**
 * Server-rendered actor SEO page
 * GET /actor/:actorSlug  (e.g. /actor/hyun-bin)
 * Slug is converted back to a name: "hyun-bin" → "hyun bin" → matched case-insensitively
 */
app.get('/actor/:actorSlug', (req, res) => {
  const slug = req.params.actorSlug;
  // Use getActorBySlug which handles hyphenated names like "byeon-woo-seok"
  const result = engine.getActorBySlug(slug);
  if (!result) {
    return res.status(404).send('<h1>Actor not found</h1>');
  }
  const html = seo.actorPage(result.actor.name, result.shows);
  if (!html) return res.status(404).send('<h1>Actor not found</h1>');
  res.type('html').send(html);
});

/**
 * Serve actor deep-dive interactive page
 * GET /actor?name=...&source=...  (JS app for interactive use)
 */
app.get('/actor', (req, res) => {
  const htmlPath = path.join(__dirname, 'public', 'actor.html');
  if (fs.existsSync(htmlPath)) {
    res.type('html').sendFile(htmlPath);
  } else {
    res.status(404).json({ message: 'Actor page not found' });
  }
});

/**
 * Meteor Garden F4 group bio page
 * GET /meteor-garden-f4
 */
app.get('/meteor-garden-f4', (req, res) => {
  const htmlPath = path.join(__dirname, 'public', 'f4.html');
  if (fs.existsSync(htmlPath)) {
    res.type('html').sendFile(htmlPath);
  } else {
    res.status(404).send('<h1>Page not found</h1>');
  }
});

/**
 * Pursuit of Jade cast & actor dive page
 * GET /pursuit-of-jade
 */
app.get('/pursuit-of-jade', (req, res) => {
  const htmlPath = path.join(__dirname, 'public', 'pursuit-of-jade.html');
  if (fs.existsSync(htmlPath)) {
    res.type('html').sendFile(htmlPath);
  } else {
    res.status(404).send('<h1>Page not found</h1>');
  }
});

/**
 * Actor Dives landing page
 * GET /actors
 */
app.get('/actors', (req, res) => {
  const htmlPath = path.join(__dirname, 'public', 'actors.html');
  if (fs.existsSync(htmlPath)) {
    res.type('html').sendFile(htmlPath);
  } else {
    res.status(404).send('<h1>Page not found</h1>');
  }
});

/**
 * About / Our Story page
 * GET /about
 */
app.get('/about', (req, res) => {
  const htmlPath = path.join(__dirname, 'public', 'about.html');
  if (fs.existsSync(htmlPath)) {
    res.type('html').sendFile(htmlPath);
  } else {
    res.status(404).send('<h1>Page not found</h1>');
  }
});

/**
 * Watchlist page (LocalStorage-based saved dramas)
 * GET /watchlist
 */
app.get('/watchlist', (req, res) => {
  const htmlPath = path.join(__dirname, 'public', 'watchlist.html');
  if (fs.existsSync(htmlPath)) {
    res.type('html').sendFile(htmlPath);
  } else {
    res.status(404).send('<h1>Page not found</h1>');
  }
});

// ============================================
// BLOG — SEO long-tail content pages
// ============================================

/**
 * Standalone listicle config — "10 K-Dramas to Watch If You Loved Squid Game"
 * SEO targets: "shows like squid game", "kdrama recommendations", "best korean dramas"
 */
const SQUID_GAME_LIST = {
  slug: 'shows-like-squid-game',
  h1: '10 K-Dramas to Watch If You Loved Squid Game',
  metaTitle: '10 K-Dramas to Watch If You Loved Squid Game (Netflix & More) | DramaMatch',
  metaDescription: 'Finished Squid Game and need your next obsession? These 10 K-dramas deliver the same class warfare, survival tension, and societal critique — ranked and explained.',
  datePublished: '2026-04-11',
  intro: 'Squid Game hit different because it made you care about the players before it put them in danger. Debt, desperation, and a system designed to grind people down — then games. These K-dramas hit the same nerve. Class warfare, moral ambiguity, and that specific Korean storytelling energy where the real monsters are usually wearing suits.',
  picks: [
    {
      id: 'the-8-show',
      title: 'The 8 Show',
      year: 2024,
      episodes: 8,
      streaming: { netflix: true },
      synopsis: 'Eight financially desperate people are locked inside a building with 8 floors — higher floors earn more money, but only for time spent performing entertainment. The social hierarchy is immediate, the power dynamics are brutal, and the show never lets you forget that the game is just capitalism with the mask off.',
      whySimilar: 'The closest thing to Squid Game Season 3 we have right now. Same class-stratification-as-game concept, same Netflix production values, same uncomfortable question: how far would you actually go? The 8 Show is more psychological and more claustrophobic — and the ending will mess you up.'
    },
    {
      id: 'squid-game-s2',
      title: 'Squid Game Season 2',
      year: 2024,
      episodes: 7,
      streaming: { netflix: true },
      synopsis: 'Three years after surviving the games, Gi-hun returns — not to move on, but to hunt down the organization running them. What he finds is a new cycle of desperate players, evolved games, and a conspiracy deeper than anyone imagined. Darker, more personal, and more politically charged.',
      whySimilar: 'Season 2 earns its place beyond the sequel label. Gi-hun as a hunter instead of a victim completely changes the moral calculus, and the new players are drawn with the same care as the originals. The cliffhanger ending means Season 3 cannot come fast enough.'
    },
    {
      id: 'hellbound',
      title: 'Hellbound',
      year: 2021,
      episodes: 6,
      streaming: { netflix: true },
      synopsis: 'Supernatural beings appear to publicly condemn random people to hell — and instead of causing panic, it triggers the rise of a fanatical religious movement that uses the condemnations to seize power. A societal horror show about how quickly humans organize around fear and use "divine judgment" as a weapon.',
      whySimilar: 'Where Squid Game used capitalism as the horror vehicle, Hellbound uses religion and mob psychology. Both shows are fundamentally about how systems dehumanize people — and how those people comply. Director Yeon Sang-ho brings the same cinematic intensity. Six episodes, no filler.'
    },
    {
      id: 'kingdom',
      title: 'Kingdom',
      year: 2019,
      episodes: 12,
      streaming: { netflix: true },
      synopsis: 'A Joseon-era crown prince investigates a mysterious plague turning the dead into zombies while navigating a political conspiracy that threatens his succession. The zombies are the least of his problems — the elites using the plague to consolidate power are the real threat.',
      whySimilar: 'Kingdom proved Korean prestige TV could do global-scale genre storytelling before Squid Game made it undeniable. The political corruption runs deeper, the historical setting adds weight, and the class dynamics — aristocrats sacrificing commoners to protect themselves — are Squid Game in period dress.'
    },
    {
      id: 'money-heist-korea',
      title: 'Money Heist: Korea – Joint Economic Area',
      year: 2022,
      episodes: 12,
      streaming: { netflix: true },
      synopsis: 'A crew of desperate, masked thieves take over the newly unified Korean Mint with hundreds of hostages. The Korean adaptation adds the weight of the divided peninsula\'s history and gives the heist a political dimension the Spanish original never had.',
      whySimilar: 'Park Hae-soo — who played Sang-woo in Squid Game — plays Berlin here with the same terrifying moral ambiguity. The class-war theme is explicit: the crew are the people the system failed. The Korean adaptation goes harder on political context and earns every second of it.'
    },
    {
      id: 'all-of-us-are-dead',
      title: 'All of Us Are Dead',
      year: 2022,
      episodes: 12,
      streaming: { netflix: true },
      synopsis: 'A zombie virus starts at a high school in Hyosan and spreads faster than containment is possible. The students trapped inside are trying to survive together — which is harder than surviving alone, especially when love, jealousy, and class dynamics do not pause for an apocalypse.',
      whySimilar: 'Squid Game made you care about the players first, then put them in danger. All of Us Are Dead does the same — the high school social dynamics are established with real care before the horror begins, which makes every loss hit exactly as hard. Netflix K-drama at its most emotionally devastating.'
    },
    {
      id: 'sweet-home',
      title: 'Sweet Home',
      year: 2020,
      episodes: 10,
      streaming: { netflix: true },
      synopsis: 'Residents of an apartment complex fight for survival as people begin turning into monsters that reflect their deepest desires and fears. A reclusive teenager who came to the building to die finds himself fighting to protect people he barely knows.',
      whySimilar: 'Sweet Home uses monster transformation as a metaphor for what desperation and unchecked desire does to people — the same psychological territory Squid Game covers through games. Both shows use ensemble casts of economically marginal characters and ask: what do you lose when you fight only for yourself?'
    },
    {
      id: 'vincenzo',
      title: 'Vincenzo',
      year: 2021,
      episodes: 20,
      streaming: { netflix: true },
      synopsis: 'A Korean-Italian mafia consigliere returns to Seoul to recover gold hidden under a building and ends up teaming with eccentric tenants against a corrupt mega-corporation. Part dark comedy, part revenge thriller — the show\'s thesis is that sometimes the only way to beat evil is to be slightly more evil.',
      whySimilar: 'Vincenzo\'s villain — a corporation so powerful it operates above the law — is Squid Game\'s front organization in a business suit. Song Joong-ki is one of K-drama\'s all-time great antiheroes, and the dark comedy makes the critique of wealth and corruption land even harder.'
    },
    {
      id: 'black-knight-kdrama',
      title: 'Black Knight',
      year: 2023,
      episodes: 6,
      streaming: { netflix: true },
      synopsis: 'Post-apocalyptic Korea, 2071. Air is so polluted only the wealthy live in the clean zones. Deliverymen are the only people who can travel between territories — part courier, part warrior. A legendary deliveryman fights the system protecting the privileged few.',
      whySimilar: 'The class system in Black Knight is Squid Game\'s subtext made literal — the poor literally breathe worse air. Dense world-building, exceptional action choreography, and a six-episode format that moves fast. For Squid Game fans who want the inequality critique in a dystopian sci-fi package.'
    },
    {
      id: 'mouse',
      title: 'Mouse',
      year: 2021,
      episodes: 20,
      streaming: { netflix: true },
      synopsis: 'A rookie cop and a detective hunt a serial killer while the question haunting both cases — is psychopathy genetic? — keeps shifting their assumptions about guilt, justice, and what makes someone a monster. Twenty episodes of increasingly unhinged revelations.',
      whySimilar: 'Mouse is for Squid Game fans who want the moral complexity pushed further. The "are monsters made or born?" question drives twenty episodes that keep reversing your understanding of who the villain actually is. Slower burn than Squid Game, but the payoff is devastating.'
    }
  ],
  faqs: [
    {
      q: 'What are the best K-dramas like Squid Game?',
      a: 'The closest to Squid Game in concept is The 8 Show (Netflix, 2024) — same social-stratification-as-game premise. For the societal critique angle, Hellbound (Netflix, 2021) and Kingdom (Netflix, 2019) are essential. For the ensemble survival energy, All of Us Are Dead (Netflix, 2022) and Sweet Home (Netflix, 2020) are the picks.'
    },
    {
      q: 'Is Squid Game Season 2 worth watching?',
      a: 'Yes. Season 2 changes the dynamic by making Gi-hun the hunter rather than the hunted, which reframes the moral complexity in interesting ways. The new ensemble is as well-drawn as Season 1\'s, and the cliffhanger ending makes Season 3 essential viewing.'
    },
    {
      q: 'What K-dramas are on Netflix similar to Squid Game?',
      a: 'Netflix has an exceptional Korean thriller catalog: The 8 Show (2024), Squid Game Season 2 (2024), Hellbound (2021), Kingdom (2019), All of Us Are Dead (2022), Sweet Home (2020), Vincenzo (2021), Money Heist: Korea (2022), and Black Knight (2023) — all on Netflix.'
    },
    {
      q: 'What makes Squid Game so popular?',
      a: 'Squid Game works because it made you care about the characters before putting them in danger. The class commentary is specific enough to resonate globally, the production design is iconic, and the moral questions it asks — would you play? would you stop someone else? — are genuinely uncomfortable. The best K-dramas like it share that formula: character investment first, genre mechanics second.'
    },
    {
      q: 'How do I find more personalized K-drama recommendations?',
      a: 'Use the DramaMatch engine — type any show you love and it finds K-dramas that share its exact story DNA across 6 dimensions: genres, themes, tropes, tone, cast, and streaming. Try it at dramamatch.app or take the 60-second quiz for personalized picks.'
    }
  ]
};

/**
 * Blog post definitions — each maps a URL slug to a Western show in the catalog
 * and provides the editorial content for the article.
 */
const BLOG_POSTS = [
  {
    slug: 'k-dramas-for-breaking-bad-fans',
    westernShowId: 'breaking-bad',
    datePublished: '2025-01-15',
    h1: 'Top K-Dramas for Breaking Bad Fans',
    metaTitle: 'Top 8 K-Dramas for Breaking Bad Fans (2024) | DramaMatch',
    metaDescription: 'Love Breaking Bad? These K-dramas deliver the same moral descent, slow-burn tension, and brilliant anti-hero storytelling. Ranked by the DramaMatch engine.',
    intro: 'Breaking Bad set the gold standard for the anti-hero story — a brilliant man making increasingly dark choices, surrounded by consequences he can\'t outrun. These K-dramas hit the same nerve: moral ambiguity, methodical tension, and characters you root for even when you shouldn\'t.',
    whyKdramas: 'Korean crime dramas have mastered the slow-burn thriller. Where Breaking Bad spent five seasons dissecting one man\'s fall, K-dramas compress that intensity into tightly paced episodes with cinematography that rivals prestige TV. The best ones leave you questioning who the real villain is — which is exactly what made Breaking Bad unforgettable.'
  },
  {
    slug: 'k-dramas-like-stranger-things',
    westernShowId: 'stranger-things',
    datePublished: '2025-01-22',
    h1: 'Best K-Dramas If You Love Stranger Things',
    metaTitle: 'Best K-Dramas Like Stranger Things — Sci-Fi, Nostalgia & Horror | DramaMatch',
    metaDescription: 'Finished Stranger Things? These K-dramas blend supernatural mystery, coming-of-age drama, and eerie atmosphere that will give you the same goosebumps.',
    intro: 'Stranger Things works because it layers supernatural horror over genuine emotional stakes — kids we actually care about, in a world that feels both nostalgic and terrifying. These K-dramas do the same thing: grounded characters in extraordinary circumstances, where the real horror is often human.',
    whyKdramas: 'K-dramas excel at blending the emotional with the eerie. Shows like All of Us Are Dead and Moving prove that Korean writers understand something Stranger Things understood early: monsters are scarier when we\'re emotionally invested in the people they\'re hunting. Add the visual inventiveness of Korean production and you have something worth clearing your schedule for.'
  },
  {
    slug: 'k-dramas-like-game-of-thrones',
    westernShowId: 'game-of-thrones',
    datePublished: '2025-01-29',
    h1: 'K-Dramas Like Game of Thrones — Epic Political Fantasy',
    metaTitle: 'K-Dramas Like Game of Thrones: Epic Fantasy & Political Intrigue | DramaMatch',
    metaDescription: 'Missing Game of Thrones? These K-dramas have the same epic scale, political scheming, palace intrigue, and shocking betrayals — without the decade-long wait.',
    intro: 'Game of Thrones was about power: who wants it, who has it, what it costs to keep it. Korean historical dramas have been telling that same story for decades, with the added bonus of actually sticking the landing. Palace intrigue, warring factions, tragic heroes — it\'s all here.',
    whyKdramas: 'Korean period dramas (saeguk) are the original game of thrones. Centuries of dynastic conflict, warrior culture, and palace politics give Korean writers an endless well of material. Where GoT built a fictional world, shows like Arthdal Chronicles and Six Flying Dragons draw from actual Korean history — which makes the betrayals hit even harder.'
  },
  {
    slug: 'k-dramas-like-the-office',
    westernShowId: 'the-office',
    datePublished: '2025-02-05',
    h1: 'Best K-Dramas for The Office Fans — Workplace Comedies',
    metaTitle: 'Best K-Dramas for The Office Fans: Workplace Comedy & Ensemble Drama | DramaMatch',
    metaDescription: 'The Office proved that a great ensemble in a confined workplace is endlessly watchable. These K-dramas have the same warm humor, found family, and lovable chaos.',
    intro: 'The Office succeeded because it made you genuinely care about a group of people you\'d normally find insufferable. That\'s a hard trick. These K-dramas pull it off — workplace comedies and ensemble dramas with the same heart, the same slow-build relationships, and the same ability to make you laugh and cry in the same episode.',
    whyKdramas: 'The Korean workplace drama is a genre unto itself. Shows like Prison Playbook and Hospital Playlist take the ensemble comedy format and add emotional depth that The Office occasionally reached but never consistently sustained. The found-family dynamic is the same; the execution is often even better.'
  },
  {
    slug: 'k-dramas-like-bridgerton',
    westernShowId: 'bridgerton',
    datePublished: '2025-02-12',
    h1: 'K-Dramas Like Bridgerton — Historical Romance & Period Drama',
    metaTitle: 'K-Dramas Like Bridgerton: Historical Romance & Palace Intrigue | DramaMatch',
    metaDescription: 'Obsessed with Bridgerton? These K-dramas deliver the same lush period romance, forbidden love, and social intrigue — with Korean history as the stunning backdrop.',
    intro: 'Bridgerton made period romance mainstream again — the costumes, the forbidden glances, the social rules designed to keep people apart. Korean historical dramas have been doing this beautifully for years, with the added dimension of genuine historical events woven through every love story.',
    whyKdramas: 'Korean historical romance is a different beast from Western period drama. The emotional restraint demanded by Joseon-era social codes creates a tension that Bridgerton achieves through plot. A single touch of hands carries the weight of an entire episode. Shows like The Red Sleeve and Moon Lovers: Scarlet Heart Ryeo deliver that slow-burn intensity with production values that would make Netflix jealous.'
  },
  {
    slug: 'k-dramas-for-sherlock-fans',
    westernShowId: 'sherlock',
    datePublished: '2025-02-19',
    h1: 'Top K-Dramas for Sherlock Fans — Mystery & Detective Thrillers',
    metaTitle: 'Top K-Dramas for Sherlock Fans: Mystery, Detectives & Mind Games | DramaMatch',
    metaDescription: 'Sherlock left you wanting more brilliant detective work and psychological cat-and-mouse games. These K-dramas deliver the same sharp plotting, complex villains, and satisfying twists.',
    intro: 'Sherlock worked because it made intelligence feel thrilling — watching a brilliant mind race ahead of everyone else, spotting what others miss. Korean crime dramas are obsessed with this dynamic. The detective vs. the killer, the truth vs. the cover-up, the mind vs. the evidence.',
    whyKdramas: 'Korean crime writing has a particular affinity for the procedural puzzle. Where Sherlock used wit and flash, shows like Stranger (Secret Forest) and Signal use institutional corruption and moral complexity to create a different — often deeper — kind of mystery. The cases are twisty, the detectives flawed, and the endings rarely comfortable. Exactly as it should be.'
  },
  {
    slug: 'k-dramas-like-suits',
    westernShowId: 'suits',
    datePublished: '2025-02-26',
    h1: 'Best K-Dramas Like Suits — Legal Thrillers & Power Plays',
    metaTitle: 'Best K-Dramas Like Suits: Legal Dramas, Courtroom Battles & Sharp Suits | DramaMatch',
    metaDescription: 'Loved Suits? These K-dramas have the same slick legal maneuvering, high-stakes courtroom drama, and brilliantly dressed protagonists who bend every rule to win.',
    intro: 'Suits was about competence porn — watching extremely capable people be extremely good at their jobs, in extremely expensive clothes. Korean legal dramas deliver all of that, often with higher emotional stakes and villains who are genuinely frightening rather than just annoying.',
    whyKdramas: 'The Korean legal drama has evolved into something sharper than its Western counterpart. While Suits was about workplace dynamics with law as the backdrop, shows like Good Partner and Extraordinary Attorney Woo put the law itself at the center — the ethics of it, the weaponization of it, and the humans it fails. Same stylish energy, more substance.'
  },
  {
    slug: 'k-dramas-for-greys-anatomy-fans',
    westernShowId: 'greys-anatomy',
    datePublished: '2025-03-05',
    h1: "Best K-Dramas for Grey's Anatomy Fans — Medical Dramas",
    metaTitle: "Best K-Dramas for Grey's Anatomy Fans: Medical Dramas & Hospital Romances | DramaMatch",
    metaDescription: "Grey's Anatomy proved you can sustain a show for 20 seasons if the hospital is emotional enough. These K-medical dramas hit harder in 16 episodes than most shows do in 10 seasons.",
    intro: "Grey's Anatomy pioneered the model: brilliant doctors, impossible cases, impossible relationships, repeat forever. Korean medical dramas take the same formula and add something Grey's eventually lost — a sense of urgency. With 16 episodes to work with, nothing is filler.",
    whyKdramas: "Korean medical dramas are focused in a way Grey's Anatomy stopped being around Season 5. Shows like Dr. Romantic and Hospital Playlist use the hospital setting to explore mentorship, sacrifice, and what it costs to keep caring after you\'ve seen everything. Same emotional DNA, none of the filler."
  },
  {
    slug: 'k-dramas-like-peaky-blinders',
    westernShowId: 'peaky-blinders',
    datePublished: '2025-03-12',
    h1: 'K-Dramas Like Peaky Blinders — Crime, Power & Atmosphere',
    metaTitle: 'K-Dramas Like Peaky Blinders: Crime Dynasties, Power & Dark Atmosphere | DramaMatch',
    metaDescription: 'Peaky Blinders was all atmosphere — a crime dynasty rising, a morally complex patriarch, gorgeous cinematography of a world where violence is the only currency. These K-dramas match that energy.',
    intro: 'Peaky Blinders was as much about texture as it was about plot — the way power looked and moved, the cost of building something from nothing through violence. These K-dramas share that aesthetic obsession: organized crime with a aesthetic, anti-heroes with a code, and consequences that never stop accumulating.',
    whyKdramas: 'Korean crime dramas understand the Peaky Blinders formula: moral complexity dressed in beautiful clothes. Vincenzo is essentially a K-drama Peaky Blinders — a criminal who becomes the hero not because he changes, but because his enemies are worse. The genre regularly produces shows that Western crime drama struggles to match for pure cinematic confidence.'
  },
  {
    slug: 'k-dramas-for-prison-break-fans',
    westernShowId: 'prison-break',
    datePublished: '2025-03-19',
    h1: 'Top K-Dramas for Prison Break Fans — Action & Escape Thrillers',
    metaTitle: 'Top K-Dramas for Prison Break Fans: Action, Escape & High-Stakes Thrillers | DramaMatch',
    metaDescription: 'Prison Break was pure adrenaline — impossible plans executed under impossible pressure. These K-dramas deliver the same non-stop tension, clever plotting, and stakes where every episode matters.',
    intro: 'Prison Break ran on a single premise — a man smart enough to break out of anything — and kept escalating until you were entirely invested. Korean action thrillers understand this escalation. They start tense and they never let up, layering conspiracies and reversals until you have no choice but to marathon through to the end.',
    whyKdramas: 'Korean action dramas have mastered the ticking-clock thriller. Where Prison Break had weeks between twists, shows like Vagabond and Big Mouth pack the same density of plot into episodes that end on cliffhangers strong enough to ruin your sleep schedule. The production values are there. The writing is there. The only problem is you\'ll run out of episodes too fast.'
  },
  // ─── C-Drama Cast Guide (standalone, no westernShowId) ───────────────────────
  {
    slug: 'pursuit-of-jade-cast',
    westernShowId: null, // standalone cast guide — served by its own route
    h1: 'Pursuit of Jade: Full Cast Guide — Every Actor\'s Other Shows',
    metaTitle: 'Pursuit of Jade Full Cast Guide — Every Actor\'s Other Works | DramaMatch',
    metaDescription: 'Complete cast breakdown for Pursuit of Jade (2025): Zhang Linghe, Tian Xiwei, and every villain — with full filmographies and two links to read the novel online.'
  },
  // ─── Squid Game listicle (standalone, no westernShowId) ──────────────────────
  {
    slug: 'shows-like-squid-game',
    westernShowId: null, // standalone K-drama list — served by kdramaListPage
    h1: '10 K-Dramas to Watch If You Loved Squid Game',
    metaTitle: '10 K-Dramas to Watch If You Loved Squid Game (Netflix & More) | DramaMatch',
    metaDescription: 'Finished Squid Game and need your next obsession? These 10 K-dramas deliver the same class warfare, survival tension, and societal critique — ranked and explained.'
  }
];

/**
 * Blog index page — lists all articles
 * GET /blog
 */
app.get('/blog', (req, res) => {
  const html = seo.blogIndexPage(BLOG_POSTS);
  res.type('html').send(html);
});

/**
 * Individual blog article page
 * GET /blog/:slug
 */
app.get('/blog/:slug', (req, res) => {
  const { slug } = req.params;
  const post = BLOG_POSTS.find(p => p.slug === slug);
  if (!post) {
    return res.status(404).send('<h1>Article not found</h1><p><a href="/blog">← Back to Blog</a></p>');
  }

  // Standalone guides have no westernShowId — dispatch by slug
  if (!post.westernShowId) {
    try {
      let html;
      if (slug === 'shows-like-squid-game') {
        const relatedPosts = BLOG_POSTS.filter(p => p.slug !== slug && p.westernShowId).slice(0, 4);
        html = seo.kdramaListPage(SQUID_GAME_LIST, relatedPosts);
      } else {
        // Default: cast guide (pursuit-of-jade-cast and any future cast guides)
        html = seo.castGuidePage(PURSUIT_OF_JADE_CAST_GUIDE);
      }
      if (!html) return res.status(500).send('<h1>Page generation error</h1>');
      return res.type('html').send(html);
    } catch (err) {
      console.error('[Blog] Standalone guide error:', err);
      return res.status(500).send('<h1>Page error</h1>');
    }
  }

  const result = engine.getRecommendations(post.westernShowId, 8);
  if (result.error) {
    return res.status(500).send('<h1>Could not load recommendations</h1>');
  }

  // Pass 4 other blog posts for cross-linking (exclude current)
  const relatedPosts = BLOG_POSTS.filter(p => p.slug !== slug).slice(0, 4);

  const html = seo.blogPage(post, result.source, result.recommendations, relatedPosts);
  if (!html) return res.status(500).send('<h1>Page generation error</h1>');
  res.type('html').send(html);
});

// ============================================
// BLOG — Standalone cast / editorial guides
// ============================================

/**
 * Pursuit of Jade — Full Cast Guide
 * GET /blog/pursuit-of-jade-cast
 *
 * SEO targets: "Pursuit of Jade cast", "Pursuit of Jade actors other shows",
 *              "where to read Pursuit of Jade novel", "Chasing Jade novel"
 */
const PURSUIT_OF_JADE_CAST_GUIDE = {
  slug: 'pursuit-of-jade-cast',
  h1: 'Pursuit of Jade: Full Cast Guide — Every Actor\'s Other Shows + Read the Novel',
  metaTitle: 'Pursuit of Jade Full Cast Guide — Every Actor\'s Other Works | DramaMatch',
  metaDescription: 'Complete Pursuit of Jade cast guide: Zhang Linghe, Tian Xiwei, and every lead villain with their full filmography. Plus two links to read the Pursuit of Jade / Chasing Jade novel online.',
  datePublished: '2025-04-08',
  intro: 'Pursuit of Jade (逐玉) is the C-drama everyone can\'t stop talking about — a cross-dressing academy romance with palace-intrigue stakes, a male lead who sees through the disguise and stays anyway, and a female lead who outsmarts everyone in the room. If you\'ve finished bingeing and need to know everything about the cast and where to find them next, this is your guide.',
  showId: 'pursuit-of-jade',
  showTitle: 'Pursuit of Jade',
  castMembers: [
    {
      name: 'Zhang Linghe',
      nativeName: '张凌赫',
      character: 'Yan Qi',
      role: 'Male Lead',
      bio: 'Zhang Linghe is one of the most exciting rising stars in C-drama right now. His speciality: the cold, perceptive man who notices everything but says nothing — until the moment he can\'t stay quiet anymore. He plays Yan Qi, the brilliant academy student who suspects Shen Ruoxi\'s secret and makes the decision that changes everything. Born 1998, he launched into leading-man status with The Legend of Anle and hasn\'t slowed down.',
      facebookHook: 'Did you know Zhang Linghe (Yan Qi in Pursuit of Jade) was also in The Princess Royal — playing the loyal guard who waits YEARS for the most powerful woman in the empire to let him in? Same quiet intensity, same devastating slow burn. 😭',
      filmography: [
        {
          title: 'The Princess Royal',
          year: 2024,
          role: 'Pei Wenxuan (loyal imperial guard)',
          note: 'Palace intrigue + devoted bodyguard slow burn — fan-voted "most similar energy to Pursuit of Jade"',
          platform: 'iQiyi · Netflix',
          dramaId: 'the-princess-royal',
          streamingUrl: 'https://www.netflix.com/search?q=The+Princess+Royal'
        },
        {
          title: 'Our Generation (我们的年代)',
          year: 2023,
          role: 'Male lead — the idealist the story keeps testing',
          note: 'Modern drama spanning 20 years — completely different from palace shows, same principled core',
          platform: 'iQiyi · Netflix',
          dramaId: 'our-generation',
          streamingUrl: 'https://www.netflix.com/search?q=Our+Generation'
        },
        {
          title: 'A Journey to Love (一念关山)',
          year: 2023,
          role: 'Ren Ruyi (supporting)',
          note: 'Wuxia with Ren Min and Liu Yuning — generated massive following for ZLH in this role',
          platform: 'iQiyi',
          streamingUrl: 'https://www.viki.com/search?q=A+Journey+to+Love'
        },
        {
          title: 'The Legend of Anle (安乐传)',
          year: 2023,
          role: 'Di Zi Yuan — the general torn between duty and love',
          note: 'His breakthrough leading-man role opposite Dilraba Dilmurat',
          platform: 'Youku · Viki',
          streamingUrl: 'https://www.viki.com/search?q=The+Legend+of+Anle'
        },
        {
          title: 'Meet Yourself (去有风的地方)',
          year: 2023,
          role: 'Supporting',
          note: 'Netflix hit with Liu Yifei — a quieter, slice-of-life role showing range',
          platform: 'Netflix',
          streamingUrl: 'https://www.netflix.com/search?q=Meet+Yourself'
        }
      ]
    },
    {
      name: 'Tian Xiwei',
      nativeName: '田曦薇',
      character: 'Shen Ruoxi',
      role: 'Female Lead',
      bio: 'Tian Xiwei has been building her reputation for years, and Pursuit of Jade is her moment. She plays Shen Ruoxi — the scholar\'s sister who disguises herself as a man to attend the Yujian Academy, outsmarts everyone, and refuses to be the damsel in any scene she\'s in. Tian Xiwei\'s strength is emotional intelligence on screen; she plays smart characters who feel deeply, and that combination is rare.',
      facebookHook: 'Did you know Tian Xiwei (Shen Ruoxi in Pursuit of Jade) has been delivering performances this good for years? She was already incredible in The Romance of Tiger and Rose — and now the rest of the C-drama world is finally paying attention. 🌹',
      filmography: [
        {
          title: 'The Romance of Tiger and Rose (传闻中的陈芊芊)',
          year: 2020,
          role: 'Supporting — plays Fan Qianqian',
          note: 'Beloved romcom with Zhao Lusi and Ding Yuxi — Tian Xiwei\'s early standout supporting turn',
          platform: 'Youku · Viki',
          streamingUrl: 'https://www.viki.com/search?q=Romance+of+Tiger+and+Rose'
        },
        {
          title: 'Half a Lifelong Romance (半生缘)',
          year: 2021,
          role: 'Gu Manzhen (lead) — tragic romance set in 1930s Shanghai',
          note: 'Adaptation of the Eileen Chang novel; Tian Xiwei earned critical praise for this emotionally layered lead role',
          platform: 'Youku',
          streamingUrl: 'https://www.viki.com/search?q=Half+a+Lifelong+Romance'
        },
        {
          title: 'Nothing But You (一念关山)',
          year: 2023,
          role: 'Supporting',
          note: 'Overlapping with Zhang Linghe — the two built chemistry long before Pursuit of Jade was announced',
          platform: 'iQiyi',
          streamingUrl: 'https://www.viki.com/search?q=Nothing+But+You'
        },
        {
          title: 'Blossoms in Adversity (鹤唳华亭)',
          year: 2019,
          role: 'Gu Yanxi (supporting)',
          note: 'Serious historical drama — shows Tian Xiwei can carry weight in period pieces',
          platform: 'Viki',
          streamingUrl: 'https://www.viki.com/search?q=Blossoms+in+Adversity'
        }
      ]
    },
    {
      name: 'Connor Leong',
      nativeName: '刘令姿 / Leon Leong',
      character: 'Gu Chen',
      role: 'Second Male Lead / Fan-favourite rival',
      bio: 'Connor Leong plays the second male lead who the community absolutely lost its mind over. That\'s not unusual in C-dramas — but the depth of the fandom response to his character tells you everything about how well he plays the role. Connor has been quietly building a resume across very different genres: from a tender sports drama about a neurodivergent badminton prodigy to modern ensemble dramas.',
      facebookHook: 'Anyone else NOT okay after Connor Leong\'s scenes in Pursuit of Jade? He also played a neurodivergent badminton prodigy in Project 17: Never Stand Still — completely different role, same ability to make you feel everything. 🏸',
      filmography: [
        {
          title: 'Project 17: Never Stand Still (极限17)',
          year: 2019,
          role: 'Ping An — neurodivergent badminton prodigy',
          note: 'Tender, acclaimed sports drama — completely different energy from Pursuit of Jade, showcases extraordinary range',
          platform: 'WeTV',
          dramaId: 'project-17-never-stand-still',
          streamingUrl: 'https://wetv.vip/search?q=Project+17'
        },
        {
          title: 'Another Me (七月与安生)',
          year: 2019,
          role: 'Lin Jiu Yue (supporting)',
          note: 'Emotional female friendship drama — Connor in a quieter supporting role',
          platform: 'iQiyi · Viki',
          dramaId: 'another-me',
          streamingUrl: 'https://www.viki.com/search?q=Another+Me+cdrama'
        },
        {
          title: 'Twisted Fate of Love (遇见璃醍)',
          year: 2021,
          role: 'Supporting',
          note: 'Fantasy historical romance where he holds his own against a stacked cast',
          platform: 'WeTV',
          streamingUrl: 'https://wetv.vip/search?q=Twisted+Fate+of+Love'
        }
      ]
    },
    {
      name: 'Chen Xingxu',
      nativeName: '陈星旭',
      character: 'Liu Zhi',
      role: 'Lead Villain / Antagonist',
      bio: 'The villain you love to hate. Chen Xingxu plays Liu Zhi, the antagonist whose scheming drives some of the most tense plot arcs in the show. Here\'s what makes him compelling as a villain pick: Chen Xingxu is genuinely one of the most charismatic actors in C-drama, and he brings that full force to his antagonist role. His fan following refuses to stay mad at him for long — which is the mark of a great villain performance.',
      facebookHook: 'Did you know Chen Xingxu (the VILLAIN in Pursuit of Jade) played the lead in The Starry Love — a completely different kind of handsome chaos? One moment he\'s the character you\'re rooting against, the next he\'s making you understand why the character made every wrong choice. That\'s real acting. ⭐',
      filmography: [
        {
          title: 'The Starry Love (星落凝成糖)',
          year: 2023,
          role: 'Qing Kui (male lead) — dual roles, divine realm fantasy',
          note: 'Full leading-man mode — gorgeous xianxia opposite Landy Li',
          platform: 'Youku · Viki',
          streamingUrl: 'https://www.viki.com/search?q=The+Starry+Love'
        },
        {
          title: 'Miss the Dragon (遇龙)',
          year: 2021,
          role: 'Male lead — dragon who falls for a mortal',
          note: 'Sweet fantasy romance; built a huge international fanbase for Chen Xingxu',
          platform: 'WeTV · Viki',
          streamingUrl: 'https://www.viki.com/search?q=Miss+the+Dragon'
        },
        {
          title: 'Ancient Love Poetry (千古玦尘)',
          year: 2021,
          role: 'Supporting — held his own opposite the stars of the whole drama',
          note: 'Major C-drama event — appeared alongside Xu Kai and Zhou Dongyu',
          platform: 'iQiyi',
          streamingUrl: 'https://www.viki.com/search?q=Ancient+Love+Poetry'
        },
        {
          title: 'Sword and Fairy (古相思曲)',
          year: 2024,
          role: 'Lead — the latest Sword and Fairy adaptation',
          note: 'Genre classic rebooted with him at the centre',
          platform: 'Youku',
          streamingUrl: 'https://www.viki.com/search?q=Sword+and+Fairy+2024'
        }
      ]
    },
    {
      name: 'Cai Wenjing',
      nativeName: '蔡文静',
      character: 'Xu Ningzhi',
      role: 'Female Villain / Antagonist',
      bio: 'Cai Wenjing plays the female antagonist with a particular kind of cold competence that makes every scene she\'s in feel dangerous. She\'s been doing this for years — playing complex, morally grey characters who you understand even when you want to shake them. Her career shows remarkable range across comedy, melodrama, and villain roles.',
      facebookHook: 'Cai Wenjing (the female villain in Pursuit of Jade) was also in The Bad Kids — one of the most acclaimed Chinese thrillers ever made. From domestic tension thriller to court schemer without missing a beat. That\'s range. 🔪',
      filmography: [
        {
          title: 'The Bad Kids (隐秘的角落)',
          year: 2020,
          role: 'Major supporting — in one of China\'s most critically acclaimed thriller dramas',
          note: 'Absolute must-watch psychological thriller — won every award going',
          platform: 'iQiyi · Netflix',
          streamingUrl: 'https://www.netflix.com/search?q=The+Bad+Kids'
        },
        {
          title: 'Go Ahead (以家人之名)',
          year: 2020,
          role: 'Supporting in ensemble family melodrama',
          note: 'Emotional heavy-hitter about found family and the weight of parental failure',
          platform: 'Youku · Viki',
          streamingUrl: 'https://www.viki.com/search?q=Go+Ahead+cdrama'
        },
        {
          title: 'A Romance of the Little Forest (一寸相思)',
          year: 2021,
          role: 'Lead — palace intrigue + romance',
          note: 'Shows the full range: she can carry a romantic lead as convincingly as she plays villains',
          platform: 'Youku',
          streamingUrl: 'https://www.viki.com/search?q=Romance+of+the+Little+Forest'
        }
      ]
    },
    {
      name: 'He Junlin',
      nativeName: '何俊霖',
      character: 'Bai Mingzhi',
      role: 'Fan-favourite Supporting Male',
      bio: 'He Junlin plays one of the academy students who becomes a genuine highlight of the ensemble — the character that fandom affectionately loses it over for all the right reasons. He brings a lightness to scenes that contrast perfectly with the tension of the main plot.',
      facebookHook: 'Can we talk about He Junlin\'s character in Pursuit of Jade for a moment? Because the way he plays Bai Mingzhi is genuinely one of the reasons this show works as a full ensemble and not just a two-lead vehicle. 💙',
      filmography: [
        {
          title: 'Reset (开端)',
          year: 2022,
          role: 'Supporting in the time-loop thriller that broke records',
          note: 'One of the most watched C-dramas on iQiyi — a thriller that earned comparison to Dark',
          platform: 'iQiyi',
          streamingUrl: 'https://www.viki.com/search?q=Reset+cdrama+2022'
        },
        {
          title: 'Moonlight Chicken (泰版月光鸡排饭)',
          year: 2023,
          role: 'Appeared in various 2022–2024 productions building a strong ensemble resume',
          note: 'Watch for him across multiple 2023–2025 releases — he\'s one to follow',
          platform: 'Various',
          streamingUrl: 'https://www.viki.com/search?q=He+Junlin'
        }
      ]
    }
  ],
  novelSection: `<p style="color:var(--text-2);line-height:1.75;margin-bottom:16px;">
    Pursuit of Jade is adapted from the novel <strong>《逐玉》</strong> — you can read the English fan translation right now at either of these two links. Both are free, both are fan-translated with active update schedules:
  </p>
  <div style="display:grid;gap:12px;margin-bottom:16px;">
    <a href="https://www.readthedrama.com/novels/pursuit-of-jade/chapters/1" target="_blank" rel="noopener noreferrer"
       style="display:flex;align-items:center;gap:12px;background:var(--bg-accent);border:1px solid rgba(212,168,83,0.3);border-radius:8px;padding:14px 18px;text-decoration:none;transition:border-color 0.2s;" onmouseover="this.style.borderColor='rgba(212,168,83,0.6)'" onmouseout="this.style.borderColor='rgba(212,168,83,0.3)'">
      <span style="font-size:1.4rem;">📖</span>
      <div>
        <div style="font-weight:700;color:var(--gold);margin-bottom:2px;">Read the Drama — Pursuit of Jade</div>
        <div style="color:var(--text-3);font-size:0.82rem;">readthedrama.com · Chapter 1 → Full novel translation</div>
      </div>
      <span style="margin-left:auto;color:var(--gold);font-size:0.82rem;">Read now →</span>
    </a>
    <a href="https://mydramanovel.com/chasing-jade/" target="_blank" rel="noopener noreferrer"
       style="display:flex;align-items:center;gap:12px;background:var(--bg-accent);border:1px solid rgba(212,168,83,0.3);border-radius:8px;padding:14px 18px;text-decoration:none;transition:border-color 0.2s;" onmouseover="this.style.borderColor='rgba(212,168,83,0.6)'" onmouseout="this.style.borderColor='rgba(212,168,83,0.3)'">
      <span style="font-size:1.4rem;">📚</span>
      <div>
        <div style="font-weight:700;color:var(--gold);margin-bottom:2px;">My Drama Novel — Chasing Jade</div>
        <div style="color:var(--text-3);font-size:0.82rem;">mydramanovel.com · Alternative translation — "Chasing Jade"</div>
      </div>
      <span style="margin-left:auto;color:var(--gold);font-size:0.82rem;">Read now →</span>
    </a>
  </div>
  <p style="color:var(--text-3);font-size:0.82rem;">Both sites offer the same source novel — the show follows the plot closely. If you\'ve already watched past episode 20, the novel will fill in backstory the show leaves implied.</p>`,
  facebookPosts: [
    {
      label: '🎬 Actor Spotlight — Zhang Linghe (Male Lead)',
      copy: `Did you know Zhang Linghe (Yan Qi in Pursuit of Jade) was also in The Princess Royal — where he plays the loyal imperial guard who waits YEARS for the most powerful woman in the empire to even acknowledge his feelings?\n\nSame quiet intensity. Same "I will put myself between you and danger without being asked" energy. Same devastating slow burn.\n\nIf you finished Pursuit of Jade and immediately need more Zhang Linghe in your life:\n✨ The Princess Royal (2024) — iQiyi / Netflix\n✨ A Journey to Love (2023) — iQiyi\n✨ The Legend of Anle (2023) — Youku / Viki\n\nWhich Zhang Linghe drama is on your watchlist? 👇\n\n👉 Full cast guide at the link in bio — DramaMatch`
    },
    {
      label: '🌸 Actor Spotlight — Tian Xiwei (Female Lead)',
      copy: `Tian Xiwei (Shen Ruoxi in Pursuit of Jade) has been THIS good for years — and she finally has the role that proves it to everyone.\n\nShe plays Half a Lifelong Romance with the same emotional intelligence she brings to the cross-dressing scholar — leading a tragic 1930s Shanghai love story that earned real critical praise.\n\nIf you want more Tian Xiwei after Pursuit of Jade:\n✨ Half a Lifelong Romance (2021) — Youku\n✨ The Romance of Tiger and Rose (2020) — Youku / Viki\n\nTian Xiwei fans: what's her best performance? Drop it below 👇\n\n👉 DramaMatch — link in bio`
    },
    {
      label: '😤 Villain Appreciation — Chen Xingxu',
      copy: `The villain in Pursuit of Jade is played by Chen Xingxu — and can we just appreciate how good he is at making you understand a character even when you want him to stop?\n\nHere's the twist: this same actor plays the LEAD in The Starry Love (2023) and Miss the Dragon (2021) — full romantic lead mode, completely different energy.\n\nAnd he was ALSO in Ancient Love Poetry (2021) in a supporting role that had the whole fandom talking.\n\nVillains who are also romantic leads somewhere else — name a more iconic C-drama energy 😭\n\n👉 Full Pursuit of Jade cast breakdown at DramaMatch (link in bio)`
    },
    {
      label: '📖 Novel Teaser — Read Pursuit of Jade / Chasing Jade',
      copy: `Finished Pursuit of Jade and already need more? The novel is online RIGHT NOW — and it fills in everything the show leaves implied.\n\nTwo places to read the English translation:\n📖 readthedrama.com/novels/pursuit-of-jade/chapters/1\n📚 mydramanovel.com/chasing-jade/\n\nBoth are free. Both have active translators. The novel goes DEEP on Yan Qi's internal monologue — which means you get every single thought he was having in those quiet scenes.\n\nYou are NOT ready.\n\n👉 Full novel guide + cast breakdown at DramaMatch (link in bio)`
    },
    {
      label: '💙 Second Lead Appreciation — Connor Leong',
      copy: `The second male lead in Pursuit of Jade is Connor Leong — and if you're currently Not Okay about his storyline, this post is for you.\n\nHe played a completely different role in Project 17: Never Stand Still (2019) — a neurodivergent badminton prodigy whose story is all about the people who show up for him. Genuinely one of the most tender sports dramas in the entire C-drama catalog.\n\nSame actor. Completely different energy. Just as unforgettable.\n\nTag someone who needs to know this. 👇\n\n👉 DramaMatch — full Pursuit of Jade cast guide (link in bio)`
    }
  ],
  faqs: [
    {
      q: 'What is Pursuit of Jade about?',
      a: 'Pursuit of Jade (逐玉) is a 2025 C-drama airing on iQiyi and Netflix. It follows Shen Ruoxi, a woman who disguises herself as a man to take her sick brother\'s place at the prestigious Yujian Academy. The cold, perceptive Yan Qi suspects her secret but keeps it — and their relationship becomes the emotional core of the show. It blends cross-dressing comedy with palace intrigue, slow-burn romance, and genuine action.'
    },
    {
      q: 'Who plays the male lead in Pursuit of Jade?',
      a: 'Zhang Linghe (张凌赫) plays Yan Qi, the male lead. He\'s known for The Princess Royal (2024), A Journey to Love (2023), and The Legend of Anle (2023). His speciality is the quiet, perceptive man who notices everything and acts on very little — until the moment that changes everything.'
    },
    {
      q: 'Who plays the female lead in Pursuit of Jade?',
      a: 'Tian Xiwei (田曦薇) plays Shen Ruoxi, the female lead. She\'s previously appeared in Half a Lifelong Romance (2021), The Romance of Tiger and Rose (2020), and Blossoms in Adversity (2019). Pursuit of Jade is her breakthrough leading role that the wider C-drama world has noticed.'
    },
    {
      q: 'Where can I read the Pursuit of Jade novel online?',
      a: 'The Pursuit of Jade novel (also known as Chasing Jade) has two English fan translation sites: (1) readthedrama.com/novels/pursuit-of-jade/chapters/1 and (2) mydramanovel.com/chasing-jade/. Both are free and have active translation schedules.'
    },
    {
      q: 'Where can I watch Pursuit of Jade?',
      a: 'Pursuit of Jade streams on iQiyi International (iq.com) and Netflix. Netflix availability may vary by region — check your local Netflix library. iQiyi International carries the show in most regions.'
    },
    {
      q: 'Is Pursuit of Jade the same as Chasing Jade?',
      a: 'Yes — "Chasing Jade" is an alternative English translation of the Chinese title 逐玉 (Zhú Yù). Both names refer to the same 2025 drama and the same source novel. Some fan translation sites use "Chasing Jade" instead of "Pursuit of Jade."'
    },
    {
      q: 'What other shows has Zhang Linghe been in?',
      a: 'Zhang Linghe\'s major works include The Princess Royal (2024, iQiyi/Netflix), A Journey to Love (2023, iQiyi), The Legend of Anle (2023, Youku/Viki), Our Generation (2023, iQiyi/Netflix), and Meet Yourself (2023, Netflix).'
    },
    {
      q: 'What C-dramas should I watch after Pursuit of Jade?',
      a: 'If you loved Pursuit of Jade, try The Princess Royal (same Zhang Linghe energy, palace politics, devoted bodyguard slow burn), Word of Honor (wuxia bromance with incredible chemistry), and Alchemy of Souls (a dangerous FL in a world not built for her). Use the DramaMatch engine to find your exact match.'
    }
  ]
};

app.get('/blog/pursuit-of-jade-cast', (req, res) => {
  try {
    const html = seo.castGuidePage(PURSUIT_OF_JADE_CAST_GUIDE);
    if (!html) return res.status(500).send('<h1>Page generation error</h1>');
    res.type('html').send(html);
  } catch (err) {
    console.error('[Blog] Cast guide error:', err);
    res.status(500).send('<h1>Page error</h1>');
  }
});

// ============================================
// SEO COMPARISON PAGES — "Shows Like [X]"
// Long-tail keyword landing pages for romance/drama matches
// ============================================

const COMPARISON_PAGES = [
  {
    slug: 'shows-like-bridgerton',
    sourceShowId: 'bridgerton',
    h1: 'Shows Like Bridgerton — K-Dramas & C-Dramas With the Same Energy',
    metaTitle: 'Shows Like Bridgerton: 7 K-Dramas & C-Dramas for Bridgerton Fans (2025) | DramaMatch',
    metaDescription: 'Obsessed with Bridgerton? These K-dramas and C-dramas deliver the same lush period romance, forbidden love, and social intrigue — with even more emotional intensity.',
    intro: 'Bridgerton proved the world still wants sweeping period romance — the costumes, the tension, the forbidden glances across ballrooms. Korean and Chinese dramas have been perfecting this formula for years. If you loved Bridgerton\'s high-society romance and scandal, these Asian dramas share the exact same DNA.',
    curatedPicks: [
      { showId: 'the-red-sleeve', whyYoullLove: 'The restraint demanded by Joseon court protocol creates tension Bridgerton achieves through plot. A single touch of hands carries the weight of an entire season. Lush palace settings, devastating forbidden love, real historical stakes.' },
      { showId: 'donggung', whyYoullLove: 'Palace romance with the same lavish costumes and forbidden love. A princess and a prince from rival kingdoms fall for each other knowing their love could destroy both their families. Pure Bridgerton DNA in ancient China.' },
      { showId: 'moon-lovers-scarlet-heart-ryeo', whyYoullLove: 'Rivals Bridgerton for sheer romantic devastation. A modern woman trapped in ancient Korea falls for a prince she knows is doomed. The costumes, the palace intrigue, the heartbreak — it\'s all here at maximum intensity.' },
      { showId: 'youth-of-may', whyYoullLove: 'A love story set against sweeping historical events. Two people from different worlds fall for each other while society tears itself apart around them. Same star-crossed intensity as Bridgerton\'s best romances.' },
      { showId: 'the-kings-affection', whyYoullLove: 'A princess disguised as a prince in the royal court. Gender roles, forbidden identity, court intrigue — the same transgressive romance energy that powers Bridgerton, but set in Joseon-era Korea with even higher stakes.' },
      { showId: 'queen-of-tears', whyYoullLove: 'Modern-day chaebol families are Korea\'s version of the ton. Same social climbing, same family pressure, same passionate love story fighting against the system. Bridgerton fans will feel right at home.' }
    ],
    relatedPages: [
      { slug: 'shows-like-outlander', title: 'Outlander' },
      { slug: 'shows-like-virgin-river', title: 'Virgin River' },
      { slug: 'shows-like-when-calls-the-heart', title: 'When Calls the Heart' },
      { slug: 'shows-like-this-is-us', title: 'This Is Us' }
    ]
  },
  {
    slug: 'shows-like-virgin-river',
    sourceShowId: 'virgin-river',
    h1: 'Shows Like Virgin River — K-Dramas & C-Dramas for Virgin River Fans',
    metaTitle: 'Shows Like Virgin River: 7 Cozy K-Dramas & C-Dramas With the Same Warmth (2025) | DramaMatch',
    metaDescription: 'Love Virgin River\'s small-town romance and healing vibes? These K-dramas and C-dramas deliver the same cozy warmth, new beginnings, and slow-burn love stories.',
    intro: 'Virgin River is comfort television at its finest — a woman starting over in a small town, finding love she wasn\'t looking for, surrounded by a community that becomes family. Korean and Chinese dramas are masters of this formula. Here are the ones that hit the same emotional frequency.',
    curatedPicks: [
      { showId: 'our-blues', whyYoullLove: 'Set on Jeju Island, this anthology follows interconnected stories of love, loss, and second chances in a tight-knit fishing village. If you watch Virgin River for the community warmth, this delivers it tenfold.' },
      { showId: 'warm-and-cozy', whyYoullLove: 'A woman escapes city life for Jeju Island and starts over running a restaurant. The exact same formula as Virgin River — new beginnings, small-town charm, and love sneaking up on you when you least expect it.' },
      { showId: 'hometown-cha-cha-cha', whyYoullLove: 'The closest K-drama equivalent to Virgin River. Big-city woman moves to a seaside village, clashes with the charming local handyman, slowly falls in love with both him and the community. Cozy, healing, and impossibly sweet.' },
      { showId: 'when-the-camellia-blooms', whyYoullLove: 'Single mom opens a bar in a small town and faces judgment from the community. A genuinely good man falls for her against all odds. Same small-town dynamics as Virgin River with deeper emotional stakes.' },
      { showId: 'encounter-kdrama', whyYoullLove: 'A wealthy woman visits a small coastal town and meets a man who sees her — really sees her. Same "fresh start through love" energy that makes Virgin River so comforting.' },
      { showId: 'see-you-in-my-19th-life', whyYoullLove: 'A woman who remembers her past lives searches for the man she loved before. Tender, slow-burn romance with the same "fate brought us together" warmth that Virgin River does so well.' }
    ],
    relatedPages: [
      { slug: 'shows-like-when-calls-the-heart', title: 'When Calls the Heart' },
      { slug: 'shows-like-bridgerton', title: 'Bridgerton' },
      { slug: 'shows-like-this-is-us', title: 'This Is Us' },
      { slug: 'shows-like-outlander', title: 'Outlander' }
    ]
  },
  {
    slug: 'shows-like-when-calls-the-heart',
    sourceShowId: 'when-calls-the-heart',
    h1: 'Shows Like When Calls the Heart — K-Dramas & C-Dramas With the Same Wholesome Charm',
    metaTitle: 'Shows Like When Calls the Heart: Wholesome K-Dramas & C-Dramas (2025) | DramaMatch',
    metaDescription: 'Missing When Calls the Heart? These K-dramas and C-dramas deliver the same wholesome small-town romance, uplifting community, and slow-burn love stories.',
    intro: 'When Calls the Heart built a devoted audience on wholesome romance, resilient communities, and stories where good people face challenges and come out stronger together. Korean and Chinese dramas excel at this — heartwarming stories with genuine emotional depth. If you love Hope Valley, you\'ll love these.',
    curatedPicks: [
      { showId: 'when-life-gives-you-tangerines-s3', whyYoullLove: 'Set in rural Jeju decades ago — a frontier-like community where everyone depends on each other. Same warmth, same faith in good people doing right by their neighbors. The closest K-drama equivalent to Hope Valley.' },
      { showId: 'hometown-cha-cha-cha', whyYoullLove: 'Gongjin is basically Hope Valley by the sea. A tight-knit coastal village, a newcomer finding her place, a lovable local who helps everyone, and the warmest community vibes in all of K-drama. This is the one.' },
      { showId: 'warm-and-cozy', whyYoullLove: 'A woman starts over on Jeju Island, building a life from scratch with the help of a small, supportive community. Same "fresh start in a beautiful small town" energy that defines When Calls the Heart.' },
      { showId: 'our-blues', whyYoullLove: 'Jeju Island as a frontier town. Hardworking people with complicated pasts finding hope and love in a small community where everyone knows everyone. Wholesome with real emotional weight.' },
      { showId: 'when-the-camellia-blooms', whyYoullLove: 'A woman builds a new life in a small town despite gossip and judgment. The community slowly rallies around her. Same faith-in-people energy that makes When Calls the Heart so special.' },
      { showId: 'reply-1988', whyYoullLove: 'Set in a close-knit neighborhood in 1988 Seoul, five families share everything — meals, problems, celebrations. The warmth of this show is unmatched. If Hope Valley is about community, this is its Korean twin.' }
    ],
    relatedPages: [
      { slug: 'shows-like-virgin-river', title: 'Virgin River' },
      { slug: 'shows-like-this-is-us', title: 'This Is Us' },
      { slug: 'shows-like-bridgerton', title: 'Bridgerton' },
      { slug: 'shows-like-outlander', title: 'Outlander' }
    ]
  },
  {
    slug: 'shows-like-this-is-us',
    sourceShowId: 'this-is-us',
    h1: 'Shows Like This Is Us — K-Dramas & C-Dramas That Will Make You Cry',
    metaTitle: 'Shows Like This Is Us: Emotional K-Dramas & Family Sagas (2025) | DramaMatch',
    metaDescription: 'This Is Us left a void only great storytelling can fill. These K-dramas and C-dramas deliver the same family dynamics, timeline-jumping drama, and ugly-crying moments.',
    intro: 'This Is Us mastered the art of making you cry about parenthood, siblings, and the way small moments ripple through generations. Korean dramas are built for this kind of storytelling — family sagas with devastating emotional payoffs delivered in a fraction of the episodes. Bring tissues.',
    curatedPicks: [
      { showId: 'when-life-gives-you-tangerines-s3', whyYoullLove: 'Multi-generational family storytelling set across different eras. Same time-jumping structure, same focus on how parents shape their children and how children finally understand their parents. The Korean This Is Us.' },
      { showId: 'what-happens-to-my-family', whyYoullLove: 'A sprawling family saga about siblings, parents, and the messy love that holds them together. Same ensemble family drama DNA — if This Is Us made you cry about the Pearsons, this will destroy you with the Cha family.' },
      { showId: 'reply-1988', whyYoullLove: 'Five families in one neighborhood, decades of shared history, and a focus on the quiet sacrifices parents make that you don\'t understand until you\'re older. You will ugly-cry. Guaranteed.' },
      { showId: 'family-by-choice-2024', whyYoullLove: 'Three kids from broken families become each other\'s chosen family. Years later, they navigate adult life while confronting childhood wounds. Same "family isn\'t just blood" theme that powers This Is Us.' },
      { showId: 'move-to-heaven', whyYoullLove: 'An autistic young man and his rough uncle clean up the belongings of deceased people — and discover the stories they left behind. Each episode is a self-contained tearjerker that connects to a bigger family story. Devastating.' },
      { showId: 'our-blues', whyYoullLove: 'Anthology format following different characters in a Jeju fishing village across multiple timelines. Same generational storytelling, same "small moments that define a life" approach. This Is Us would approve.' }
    ],
    relatedPages: [
      { slug: 'shows-like-virgin-river', title: 'Virgin River' },
      { slug: 'shows-like-when-calls-the-heart', title: 'When Calls the Heart' },
      { slug: 'shows-like-bridgerton', title: 'Bridgerton' },
      { slug: 'shows-like-outlander', title: 'Outlander' }
    ]
  },
  {
    slug: 'shows-like-outlander',
    sourceShowId: 'outlander',
    h1: 'Shows Like Outlander — K-Dramas & C-Dramas With the Same Epic Romance',
    metaTitle: 'Shows Like Outlander: Epic Historical K-Dramas & Romance (2025) | DramaMatch',
    metaDescription: 'Love Outlander\'s time-travel romance and historical epic? These K-dramas and C-dramas deliver the same sweeping love stories, historical settings, and emotional intensity.',
    intro: 'Outlander combined time travel with historical romance and proved that audiences wanted love stories with real stakes — war, politics, separation, and a love strong enough to survive centuries. Korean and Chinese historical dramas have been telling these exact stories, and they do it brilliantly.',
    curatedPicks: [
      { showId: 'moon-lovers-scarlet-heart-ryeo', whyYoullLove: 'The K-drama Outlander. A modern woman transported to ancient Korea falls for a prince and becomes entangled in a deadly succession war. Same time-travel romance, same historical stakes, same devastating ending that will haunt you.' },
      { showId: 'the-kings-affection', whyYoullLove: 'Royal court secrets, forbidden love, and a protagonist living a dangerous double life. Same "love in a world that forbids it" tension as Outlander, with costumes and cinematography that match its ambition.' },
      { showId: 'alchemy-of-souls', whyYoullLove: 'Epic fantasy with a love story that spans lifetimes. Warriors, magic, political intrigue, and a romance built on sacrifice. If Outlander\'s scope and emotional weight are what hook you, this delivers.' },
      { showId: 'the-red-sleeve', whyYoullLove: 'A court lady and a crown prince fall in love against historical inevitability. Based on real events, so you know the ending — and that makes every tender moment more devastating. Outlander fans understand this kind of doomed-but-beautiful romance.' },
      { showId: 'my-dearest', whyYoullLove: 'Set during the devastating Manchu invasions of Korea — a love story forged in wartime, where separation and survival test every bond. Same "love endures through history\'s worst moments" energy that defines Outlander.' },
      { showId: 'queen-inhyuns-man', whyYoullLove: 'A Joseon scholar literally travels through time and falls for a modern actress. The purest time-travel romance in K-drama — if you love Outlander for the "love across centuries" concept, this is your next obsession.' }
    ],
    relatedPages: [
      { slug: 'shows-like-bridgerton', title: 'Bridgerton' },
      { slug: 'shows-like-virgin-river', title: 'Virgin River' },
      { slug: 'shows-like-this-is-us', title: 'This Is Us' },
      { slug: 'shows-like-when-calls-the-heart', title: 'When Calls the Heart' }
    ]
  },

  // ─── Crime & Detective Shows ──────────────────────────────────────────────

  {
    slug: 'shows-like-criminal-minds',
    sourceShowId: 'criminal-minds',
    h1: 'Shows Like Criminal Minds — K-Dramas With the Same Dark Psychology',
    metaTitle: 'Shows Like Criminal Minds: 7 K-Dramas for Criminal Minds Fans (2025) | DramaMatch',
    metaDescription: 'Hooked on Criminal Minds? These K-dramas deliver the same criminal profiling, serial killer psychology, and procedural tension — often with even more intense storytelling.',
    intro: 'Criminal Minds built its audience on one thing: getting inside the minds of killers. Korean crime dramas have pushed this formula further — darker, more personal, and willing to go places American network TV never could. If you loved the BAU\'s profiling cases, these K-dramas were made for you.',
    curatedPicks: [
      { showId: 'through-the-darkness', whyYoullLove: 'The most direct Criminal Minds equivalent in K-drama. Based on the true story of Korea\'s first criminal profiler, this series follows the painstaking process of building a serial killer profiling unit from scratch in the 1990s. The interview scenes are chilling in exactly the way the BAU\'s scenes are. Methodical, cerebral, and deeply unsettling.' },
      { showId: 'missing-noir-m', whyYoullLove: 'An FBI-trained detective joins Korea\'s missing persons unit and encounters cases that reveal disturbing psychological depths. Short but intense episodes (like Criminal Minds mini-arcs), with a brilliant investigator who reads crime scenes the way Spencer Reid reads people. The dark psychology hits the same nerve.' },
      { showId: 'signal', whyYoullLove: 'A criminal profiler communicates with a detective from the past via a mysterious walkie-talkie to crack cold cases. Signal has Criminal Minds\' obsession with unsolved trauma and the weight of cases that never closed. The time-communication gimmick is actually just a vehicle for devastating justice stories.' },
      { showId: 'beyond-evil', whyYoullLove: 'Two detectives in a small town become both suspects and investigators in a serial murder case. Beyond Evil takes Criminal Minds\' formula and collapses the distance — the investigator and the killer share the same small world. The psychological cat-and-mouse is relentless and the acting is extraordinary.' },
      { showId: 'stranger', whyYoullLove: 'An emotionless prosecutor and a warm detective partner up to dig into institutional corruption tied to serial murders. Stranger has Criminal Minds\' serious procedural tone with the added dimension of systemic rot. If you love it when the BAU uncovers how society enables killers, this is your show.' },
      { showId: 'voice-kdrama', whyYoullLove: 'An elite emergency call center teams with a detective to catch killers in real time. Voice is Criminal Minds at maximum tension — audio forensics, psychological profiling, and a villain who\'s always one step ahead. The first case is one of the most gripping in K-crime drama.' },
      { showId: 'blind-kdrama', whyYoullLove: 'Jurors in a criminal case become targets themselves, and a detective must protect them while unraveling a conspiracy. Blind has Criminal Minds\' DNA — evil with institutional cover, trauma driving the investigation, and characters who carry the weight of past failures.' }
    ],
    relatedPages: [
      { slug: 'shows-like-true-detective', title: 'True Detective' },
      { slug: 'shows-like-mindhunter', title: 'Mindhunter' },
      { slug: 'shows-like-sherlock', title: 'Sherlock' },
      { slug: 'shows-like-dexter', title: 'Dexter' }
    ]
  },
  {
    slug: 'shows-like-true-detective',
    sourceShowId: 'true-detective',
    h1: 'Shows Like True Detective — K-Dramas With the Same Dark Atmosphere',
    metaTitle: 'Shows Like True Detective: 7 K-Dramas for True Detective Fans (2025) | DramaMatch',
    metaDescription: 'Love True Detective\'s brooding atmosphere and moral complexity? These K-dramas deliver the same slow-burn dread, haunted detectives, and cases that reveal something rotten at the heart of society.',
    intro: 'True Detective created a genre: the prestige crime drama where the case matters less than what solving it does to the people who work it. Korean crime dramas have mastered this same template — detectives damaged by the cases they can\'t let go, small-town secrets with deep roots, and an atmosphere of dread that permeates every frame.',
    curatedPicks: [
      { showId: 'beyond-evil', whyYoullLove: 'The closest K-drama equivalent to True Detective Season 1. Two detectives in a small town — one a troubled local, one an ambitious outsider — circle each other and the truth of an old murder. Same southern Gothic atmosphere transplanted to rural Korea, same question of whether justice is even possible. Extraordinary performances throughout.' },
      { showId: 'good-detective-season-2', whyYoullLove: 'A detective willing to use dirty means and his idealistic partner navigate a justice system riddled with corruption. Season 2 especially captures True Detective\'s sense that the rot goes all the way down — that solving the case just reveals a deeper rot beneath it. Morally complex and genuinely dark.' },
      { showId: 'memorist', whyYoullLove: 'A detective with the ability to read people\'s memories teams up with a criminal profiler to catch a serial killer who\'s always ahead of them. Memorist has True Detective\'s long cat-and-mouse structure, with a perpetual sense of doom hanging over the investigators. The killer is genuinely frightening.' },
      { showId: 'the-art-of-sarah', whyYoullLove: 'A cold case detective investigates a string of art-world murders with an unsettling sense that the killer is watching. The Art of Sarah has True Detective\'s aesthetic obsessions — crime as performance, investigators who get lost in the cases they pursue, and an atmosphere that makes the familiar feel deeply wrong.' },
      { showId: 'karma-kdrama', whyYoullLove: 'A detective confronts a serial killer who seems to be targeting people who escaped justice. Karma shares True Detective\'s moral philosophy — that the system fails, and some people try to compensate for that in horrifying ways. The investigation forces the detective to reckon with what justice actually means.' },
      { showId: 'upper-ground', whyYoullLove: 'A detective investigating murders in a Seoul high-rise complex uncovers the hidden darkness behind respectable facades. Upper Ground has True Detective\'s talent for revealing the violence lurking beneath ordinary life, and the same interest in how institutions protect the powerful and punish the vulnerable.' },
      { showId: 'nine-puzzles', whyYoullLove: 'Nine separate cases turn out to be connected to a single killer operating across years. Nine Puzzles has True Detective\'s long-game structure — each piece of the puzzle revealing something worse than the last. The detectives don\'t just solve crimes; they inherit their weight.' }
    ],
    relatedPages: [
      { slug: 'shows-like-criminal-minds', title: 'Criminal Minds' },
      { slug: 'shows-like-mindhunter', title: 'Mindhunter' },
      { slug: 'shows-like-dexter', title: 'Dexter' },
      { slug: 'shows-like-sherlock', title: 'Sherlock' }
    ]
  },
  {
    slug: 'shows-like-mindhunter',
    sourceShowId: 'mindhunter',
    h1: 'Shows Like Mindhunter — K-Dramas With the Same Cerebral Crime Psychology',
    metaTitle: 'Shows Like Mindhunter: 7 K-Dramas for Mindhunter Fans (2025) | DramaMatch',
    metaDescription: 'Obsessed with Mindhunter\'s deep-dive into criminal psychology? These K-dramas deliver the same intellectual intensity, profiling methodology, and uncomfortable fascination with evil.',
    intro: 'Mindhunter was about building the language to understand evil — the slow, methodical work of interviewing killers until their patterns became visible. Korean crime dramas share this intellectual obsession with the psychology behind murder. These shows go just as deep, often darker, and with stories rooted in real Korean cases.',
    curatedPicks: [
      { showId: 'through-the-darkness', whyYoullLove: 'The Korean Mindhunter. Literally. This is the true story of Korea\'s first criminal profiler building a profiling unit in the 1990s — the same origin story as the FBI\'s BSU. The interview scenes with incarcerated killers are just as chilling as anything in Mindhunter, and the show captures the same sense of pioneers making up the methodology as they go.' },
      { showId: 'memorist', whyYoullLove: 'A detective with psychic memory-reading ability works with a criminal profiler to understand and catch a serial killer. Memorist shares Mindhunter\'s belief that understanding the killer\'s mind is the only way to catch them — and its willingness to show how disturbing that process is for the investigators.' },
      { showId: 'the-frog', whyYoullLove: 'Based on a real unsolved Korean serial killer case, this drama follows investigators trying to piece together the psychology of a killer who evaded capture for years. The Frog has Mindhunter\'s commitment to procedural reality and the frustration of building a case when your only evidence is behavioral patterns.' },
      { showId: 'lies-hidden-in-my-garden', whyYoullLove: 'A thriller that gets inside the psychology of both victim and perpetrator — exploring how abuse creates the conditions for violence. Lies Hidden in My Garden shares Mindhunter\'s interest in the family systems and personal histories that produce killers, not just the crimes themselves.' },
      { showId: 'the-art-of-sarah', whyYoullLove: 'A cold case detective tracks a killer who treats murder as artistic performance, getting progressively closer to understanding — and being understood by — the perpetrator. The Art of Sarah has Mindhunter\'s unnerving dynamic between investigator and killer, where understanding requires a dangerous kind of empathy.' },
      { showId: 'somebody', whyYoullLove: 'A serial killer who uses a dating app to find victims, and a woman who seems to understand him in ways that put her in danger. Somebody explores the same territory Mindhunter does — the attraction of the void, what it means to truly understand violence, and how that understanding can become complicity.' },
      { showId: 'anna-kdrama', whyYoullLove: 'A woman who reinvents her identity through a series of lies, and the investigation into how she became who she is. Anna has Mindhunter\'s interest in constructed identity and the gap between the story a person tells and the truth underneath — just from a radically different angle.' }
    ],
    relatedPages: [
      { slug: 'shows-like-criminal-minds', title: 'Criminal Minds' },
      { slug: 'shows-like-true-detective', title: 'True Detective' },
      { slug: 'shows-like-dexter', title: 'Dexter' },
      { slug: 'shows-like-sherlock', title: 'Sherlock' }
    ]
  },
  {
    slug: 'shows-like-dexter',
    sourceShowId: 'dexter',
    h1: 'Shows Like Dexter — K-Dramas With the Same Dark Anti-Hero Thrills',
    metaTitle: 'Shows Like Dexter: 7 K-Dramas for Dexter Fans (2025) | DramaMatch',
    metaDescription: 'Loved Dexter\'s dark anti-hero and killer psychology? These K-dramas deliver the same morally complex characters, murderer perspective, and tension between justice and violence.',
    intro: 'Dexter asked a question American TV hadn\'t dared to ask before: what if we liked the killer? Korean crime dramas are willing to sit with that same moral discomfort — to write killers with interiority, to make justice complicated, to let you feel the appeal of a world where the guilty don\'t escape. These shows go there.',
    curatedPicks: [
      { showId: 'mouse', whyYoullLove: 'The closest Korean equivalent to Dexter in terms of sheer ambition and darkness. Mouse follows both a serial killer and the detective hunting him across a genuinely shocking narrative that subverts everything you expect about who the monster is. It asks the same question Dexter does — is the killer made or born? — and goes further than Dexter dared with the answer.' },
      { showId: 'watcher-kdrama', whyYoullLove: 'Three police officers with deeply compromised pasts work together to investigate crime while hiding their own darkness. Watcher has Dexter\'s moral complexity — investigators who aren\'t innocent, a justice system they\'ve broken faith with, and the question of whether bad means are ever justified by good ends.' },
      { showId: 'adamas', whyYoullLove: 'Twin brothers — one a crime novelist, one a prosecutor — discover their stepfather may be a serial killer. Adamas has Dexter\'s DNA: a killer embedded in respectable society, a protagonist who must become something dark to expose them, and constant tension between what is legal and what is just.' },
      { showId: 'hide-kdrama', whyYoullLove: 'A woman discovers her husband has been living a secret second life, and the more she investigates, the darker the truth gets. Hide has Dexter\'s interest in the gap between the face someone shows the world and who they actually are — and the violence that secret can do.' },
      { showId: 'good-detective-season-2', whyYoullLove: 'A detective willing to cut every corner and break every rule to get results, partnered with someone who forces him to confront what he\'s becoming. Good Detective 2 has Dexter\'s moral corruption arc — the slow acknowledgment that the methods you use shape who you are, not just the results.' },
      { showId: 'black-out', whyYoullLove: 'A man with no memory of the previous night discovers he may be responsible for a series of murders. Black Out has Dexter\'s central horror: the killer who doesn\'t fully know himself, who must investigate his own darkness. The internal monologue structure echoes Dexter\'s narration.' },
      { showId: 'the-art-of-sarah', whyYoullLove: 'A cold case detective is drawn into an investigation where the killer seems to be performing for her specifically. The Art of Sarah has Dexter\'s fascination with killers who have an aesthetic — who treat murder as craft — and the investigators who become uncomfortably drawn into their logic.' }
    ],
    relatedPages: [
      { slug: 'shows-like-true-detective', title: 'True Detective' },
      { slug: 'shows-like-criminal-minds', title: 'Criminal Minds' },
      { slug: 'shows-like-mindhunter', title: 'Mindhunter' },
      { slug: 'shows-like-sherlock', title: 'Sherlock' }
    ]
  },
  {
    slug: 'shows-like-sherlock',
    sourceShowId: 'sherlock',
    h1: 'Shows Like Sherlock — K-Dramas With the Same Brilliant Detective Energy',
    metaTitle: 'Shows Like Sherlock: 7 K-Dramas for Sherlock Fans (2025) | DramaMatch',
    metaDescription: 'Love Sherlock\'s brilliant detective and rapid deductions? These K-dramas deliver the same genius investigator energy, intricate mystery plots, and dynamic detective duos.',
    intro: 'Sherlock made detective fiction feel electric again — a genius operating at a speed no one else could follow, with a partner who grounds him in humanity. Korean drama has produced a generation of shows that share this formula and push it in new directions: detectives with impossible abilities, mysteries that reward full attention, and partnerships that make both characters better.',
    curatedPicks: [
      { showId: 'nine-puzzles', whyYoullLove: 'Nine seemingly unconnected murder cases turn out to share a single brilliant mind behind them. Nine Puzzles has Sherlock\'s love of the puzzle — the pleasure of watching a detective connect the dots that no one else sees — with a criminal intellect that matches the investigator move for move. The deduction sequences are legitimately impressive.' },
      { showId: 'stranger', whyYoullLove: 'A prosecutor who literally cannot feel emotions because of brain damage teams with a warm detective to uncover a conspiracy. Stranger has Sherlock\'s core dynamic: the logician and the empath, each indispensable. The prosecutor\'s cold genius and the detective\'s human insight mirror Holmes and Watson so precisely it feels intentional.' },
      { showId: 'beyond-evil', whyYoullLove: 'Two detectives who read each other perfectly circle a serial murder case where neither is sure who the real suspect is. Beyond Evil has Sherlock\'s pleasure of watching brilliant minds work — except here the brilliance is mutual, and the cat-and-mouse plays both ways. Extraordinary.' },
      { showId: 'memorist', whyYoullLove: 'A detective who can read people\'s memories partners with a profiler to hunt a serial killer. Memorist gives its detective a literal superpower for observation and deduction — Sherlock\'s mind palace made manifest — and builds its cases around the pleasure of watching him use it against an adversary who knows he\'s coming.' },
      { showId: 'adamas', whyYoullLove: 'A crime novelist uses his writer\'s pattern-recognition to investigate what he believes is a covered-up murder. Adamas has Sherlock\'s civilian-genius-investigates dynamic — a brilliant outsider using different mental tools than the police, seeing things they miss, and getting into danger because he keeps being right.' },
      { showId: 'celebrity', whyYoullLove: 'A woman enters the world of social media celebrity and must navigate an ecosystem of hidden identities and staged performances. Celebrity has Sherlock\'s interest in the performance of identity — reading people through the gaps between what they show and what they are. A modern-register mystery for the parasocial age.' },
      { showId: 'the-art-of-sarah', whyYoullLove: 'A detective investigates art-world murders where the crime scenes are staged as performances. The Art of Sarah has Sherlock\'s aesthetic intelligence — the detective who reads art and symbolism as evidence, who enters the killer\'s mind through their creations. The intellectual sparring between investigator and perpetrator is pure Sherlock DNA.' }
    ],
    relatedPages: [
      { slug: 'shows-like-criminal-minds', title: 'Criminal Minds' },
      { slug: 'shows-like-true-detective', title: 'True Detective' },
      { slug: 'shows-like-mindhunter', title: 'Mindhunter' },
      { slug: 'shows-like-dexter', title: 'Dexter' }
    ]
  },
  {
    slug: 'shows-like-ncis',
    sourceShowId: 'criminal-minds',
    h1: 'Shows Like NCIS — K-Dramas With the Same Procedural Crime Team Energy',
    metaTitle: 'Shows Like NCIS: 7 K-Dramas for NCIS Fans (2025) | DramaMatch',
    metaDescription: 'Love NCIS\'s team-driven crime investigations and procedural format? These K-dramas deliver the same case-of-the-week structure, specialized investigation units, and team chemistry you\'re missing.',
    intro: 'NCIS built two decades of loyal viewers on a formula that works: a tight-knit team of specialists, cases that matter, and enough recurring personal drama to keep you invested between investigations. Korean crime dramas have been perfecting this exact formula. These shows have the same team energy, procedural satisfaction, and cases that hit harder than you expect.',
    curatedPicks: [
      { showId: 'missing-noir-m', whyYoullLove: 'Korea\'s NCIS equivalent — an elite FBI-trained detective leads a specialized missing persons unit whose cases always turn out to be more than they appear. The procedural structure is tight, the team dynamics are satisfying, and every case reveals something about the society producing the crime. Short-run (8 episodes) but dense.' },
      { showId: 'voice-kdrama', whyYoullLove: 'An elite emergency dispatch unit works in real time with a detective to catch killers. Voice has NCIS\'s specialized-unit structure — people with specific skills (audio forensics, criminal psychology) working together on cases that are personal as well as procedural. The first season especially is relentlessly gripping.' },
      { showId: 'through-the-darkness', whyYoullLove: 'Korea\'s first criminal profiling unit, built from scratch in the 1990s. Like NCIS, this show is about specialists who can do what regular detectives can\'t, fighting for institutional recognition while solving cases no one else can crack. The team dynamic between the profilers is the emotional core.' },
      { showId: 'signal', whyYoullLove: 'A criminal profiler works cold cases via mysterious radio contact with a detective from the past. Signal has NCIS\'s obsession with cases that never closed — the ones that haunt investigators for years — and the procedural satisfaction of finally getting justice for victims who were forgotten.' },
      { showId: 'blind-kdrama', whyYoullLove: 'A detective must protect jury members who become targets after a high-profile criminal trial. Blind has NCIS\'s genre versatility — moving between procedural investigation, action, and emotional character work — with the same sense that the team is the show, not just the cases.' },
      { showId: 'beyond-evil', whyYoullLove: 'Two detectives in a small town investigate a serial killer case while circling each other as suspects. Beyond Evil has NCIS\'s interest in what happens to investigators when cases get personal, and how team dynamics shift under that kind of pressure. Darker and more intense than NCIS, but the same procedural satisfactions.' },
      { showId: 'stranger', whyYoullLove: 'A prosecutor and detective team up to investigate corruption linked to murder. Stranger has NCIS\'s cross-agency cooperation structure — different institutions, different methods, forced to work together — and the same pleasure of watching a partnership click into gear on cases bigger than either could handle alone.' }
    ],
    relatedPages: [
      { slug: 'shows-like-criminal-minds', title: 'Criminal Minds' },
      { slug: 'shows-like-law-and-order', title: 'Law & Order' },
      { slug: 'shows-like-sherlock', title: 'Sherlock' },
      { slug: 'shows-like-mindhunter', title: 'Mindhunter' }
    ]
  },
  {
    slug: 'shows-like-law-and-order',
    sourceShowId: 'stranger',
    h1: 'Shows Like Law & Order — K-Dramas With the Same Legal Procedural Intensity',
    metaTitle: 'Shows Like Law & Order: 7 K-Dramas for Law & Order Fans (2025) | DramaMatch',
    metaDescription: 'Addicted to Law & Order\'s two-part formula of investigation and prosecution? These K-dramas deliver the same legal procedural tension, courtroom drama, and justice-system exploration.',
    intro: 'Law & Order invented a formula that\'s still running because it works: investigate the crime, then prosecute it — and find out the justice system is as messy as the crime was. Korean legal dramas have been building on this foundation for years, with shows that split their time between investigation and prosecution, and are unafraid to let the system fail. Ripped from the Korean headlines.',
    curatedPicks: [
      { showId: 'stranger', whyYoullLove: 'The Korean Law & Order. A cold, methodical prosecutor and a warm detective partner to investigate corruption linked to murder — and discover the rot goes deeper than any single case. Stranger nails Law & Order\'s core thesis: institutions are both our best weapon against crime and the system that enables it. Season 1 and 2 are both exceptional.' },
      { showId: 'blind-kdrama', whyYoullLove: 'The legal system is put on trial when jury members become murder targets. Blind has Law & Order\'s faith in due process tested against a reality that keeps subverting it. The show asks whether trials deliver justice or perform it — Law & Order\'s central question, made urgent and personal.' },
      { showId: 'good-detective-season-2', whyYoullLove: 'A detective and his morally flexible partner work cases where the truth and the verdict don\'t always align. Good Detective 2 has Law & Order\'s dual structure — investigation and consequence — with Korean drama\'s willingness to let the system produce genuinely unjust outcomes.' },
      { showId: 'class-of-lies', whyYoullLove: 'A disgraced prosecutor goes undercover at a high school to investigate a murder connected to his past case. Class of Lies has Law & Order\'s interest in how lawyers navigate a system built for procedures rather than truth, and the costs of operating outside it.' },
      { showId: 'the-devil-judge', whyYoullLove: 'A charismatic judge turns his courtroom into a televised spectacle and starts dispensing vigilante justice. The Devil Judge takes Law & Order\'s legal architecture and asks what happens when a figure inside the system decides the system isn\'t enough. Dark, political, and compulsively watchable.' },
      { showId: 'military-prosecutor-doberman', whyYoullLove: 'A cynical military prosecutor and an idealistic colleague work cases within a rigid institutional hierarchy. Military Prosecutor Doberman has Law & Order\'s genre-specific procedural satisfactions — the rules of the institution shaping how justice can and can\'t be pursued — with sharp writing and real stakes.' },
      { showId: 'karma-kdrama', whyYoullLove: 'A detective investigates a serial killer who targets people the justice system failed to convict. Karma forces Law & Order\'s central question into dramatic form: if the courts set them free, and they kill again, who bears responsibility? The investigation becomes a meditation on what the system is actually for.' }
    ],
    relatedPages: [
      { slug: 'shows-like-ncis', title: 'NCIS' },
      { slug: 'shows-like-criminal-minds', title: 'Criminal Minds' },
      { slug: 'shows-like-true-detective', title: 'True Detective' },
      { slug: 'shows-like-sherlock', title: 'Sherlock' }
    ]
  },
  // ─── New: General-audience SEO pages ─────────────────────────────────────
  {
    slug: 'shows-like-succession',
    sourceShowId: 'succession',
    h1: 'If You Loved Succession, Watch These K-Dramas',
    metaTitle: 'Shows Like Succession: 7 K-Dramas for Succession Fans (2025) | DramaMatch',
    metaDescription: 'Loved Succession\'s savage power plays, family betrayal, and dark humor? These K-dramas and C-dramas deliver the same chaebol warfare, elite dysfunction, and prestige storytelling — often with even higher stakes.',
    intro: 'Succession built its audience on one obsession: watching obscenely powerful people destroy each other over an inheritance they don\'t deserve. Korean dramas have been telling versions of this story for years — chaebol heirs, boardroom coups, and families where love and leverage are the same thing. If Logan Roy had run a Korean conglomerate, it would look like this.',
    curatedPicks: [
      { showId: 'reborn-rich', whyYoullLove: 'The most direct Succession equivalent in K-drama. A loyal conglomerate executive is betrayed and murdered by the family he served — then reincarnated as their youngest son, armed with future knowledge and a revenge agenda. Reborn Rich has Succession\'s obsession with inherited power, fraternal competition, and the question of whether any of these people actually deserve what they\'re fighting for. The boardroom scenes are electric.' },
      { showId: 'sky-castle', whyYoullLove: 'Succession for the Korean upper class. Elite families in a luxury residential enclave compete viciously over their children\'s university admissions — and the darkness lurking beneath their polished facades escalates beautifully. Sky Castle has Succession\'s dark humor, its contempt for wealth without wisdom, and its talent for making you despise characters you can\'t stop watching.' },
      { showId: 'queenmaker', whyYoullLove: 'A corporate fixer for a powerful conglomerate switches sides and channels all her dirty skills into building an opposition candidate. Queenmaker has Succession\'s DNA — institutional power, ruthless operators, and the question of whether it\'s possible to do clean work inside a dirty machine. The central dynamic between the fixer and the idealist mirrors Succession\'s best relationships.' },
      { showId: 'itaewon-class', whyYoullLove: 'A young man\'s father is killed by a chaebol heir, and he spends a decade building from nothing to take down the dynasty that destroyed him. Itaewon Class has Succession\'s focus on corporate power as a site of moral warfare, with an underdog energy that Succession deliberately withholds. The villain family is Succession-caliber awful.' },
      { showId: 'little-women-kdrama', whyYoullLove: 'Three sisters from poverty stumble into the orbit of a supremely powerful political family — and discover the secrets that hold their empire together. Little Women has Succession\'s sense that the ultra-wealthy operate in a different moral universe, and its plot is a masterclass in escalating reveals. One of the best-written Korean dramas of recent years.' },
      { showId: 'nirvana-in-fire', whyYoullLove: 'A brilliant strategist, presumed dead, returns to the imperial court and methodically dismantles the conspiracy that destroyed his family — while engineering a succession battle among the princes. Nirvana in Fire is what Succession would look like if the Roy family fought for the throne of a medieval Chinese empire. The political chess is extraordinary, and the protagonist is the anti-Logan: methodical, patient, and devastatingly competent.' },
      { showId: 'misaeng', whyYoullLove: 'A former baduk (Go) prodigy enters a corporate trading company as a temp and discovers the institutional violence of office life. Misaeng is Succession from the bottom of the hierarchy — the world where the powerful wage their wars, seen through the eyes of someone with no armor. The show\'s portrait of corporate culture is the most honest thing Korean drama has ever made.' }
    ],
    relatedPages: [
      { slug: 'shows-like-game-of-thrones', title: 'Game of Thrones' },
      { slug: 'shows-like-breaking-bad', title: 'Breaking Bad' },
      { slug: 'shows-like-true-detective', title: 'True Detective' }
    ]
  },
  {
    slug: 'shows-like-breaking-bad',
    sourceShowId: 'breaking-bad',
    h1: 'If You Loved Breaking Bad, Watch These K-Dramas',
    metaTitle: 'Shows Like Breaking Bad: 7 K-Dramas for Breaking Bad Fans (2025) | DramaMatch',
    metaDescription: 'Hooked on Breaking Bad\'s moral descent, cat-and-mouse tension, and transformation story? These K-dramas deliver the same psychological depth, crime thriller intensity, and characters who make catastrophically bad choices for almost-understandable reasons.',
    intro: 'Breaking Bad is the definitive story of a man choosing to become a monster — and making that choice look almost rational every step of the way. Korean crime dramas have been telling versions of this story with different cultural textures: the cop who crosses lines, the civilian dragged into the underworld, the person whose identity dissolves in the acid of what they\'ve done. If you loved watching Walter White\'s transformation, these will devastate you in all the right ways.',
    curatedPicks: [
      { showId: 'my-name', whyYoullLove: 'A young woman whose father is murdered by a drug gang joins the criminal organization to find his killer — then goes undercover as a cop. My Name has Breaking Bad\'s core transformation arc: a person who becomes the thing they set out to destroy, and can\'t find the way back. The action is spectacular, the moral cost is real, and the ending doesn\'t flinch.' },
      { showId: 'flower-of-evil', whyYoullLove: 'A man who may have committed horrific crimes years ago has built a quiet new life — until his detective wife\'s murder case starts circling toward his past. Flower of Evil has Breaking Bad\'s unbearable dramatic irony: we know more than the characters, we watch the trap close, and we desperately want a way out for someone who may not deserve one. Devastating psychological thriller.' },
      { showId: 'mouse', whyYoullLove: 'What if a serial killer\'s predatory gene could be identified before birth — and what if someone with that gene became a cop? Mouse starts as a procedural and becomes something far stranger and darker, with Breaking Bad\'s willingness to dismantle your assumptions about who the protagonist is and what they\'re actually doing. One of the most genuinely surprising K-dramas ever made.' },
      { showId: 'beyond-evil', whyYoullLove: 'Two detectives in a small town circle each other and an old murder — each suspecting the other, both hiding something. Beyond Evil has Breaking Bad\'s structure of moral exposure: the longer you watch, the less certainty you have about who\'s a victim and who\'s a perpetrator. The cat-and-mouse is relentless and the performances are extraordinary.' },
      { showId: 'taxi-driver', whyYoullLove: 'A covert vigilante organization runs a "revenge-for-hire" service for victims the justice system failed. Taxi Driver has Breaking Bad\'s essential appeal: people doing illegal things with a morally coherent (if not legally defensible) rationale. The show never fully lets you off the hook for enjoying their methods, which is exactly Breaking Bad\'s trick.' },
      { showId: 'bad-prosecutor', whyYoullLove: 'A prosecutor who uses street-fighting and unorthodox tactics fights institutional corruption from inside a system that\'s mostly rotten. Bad Prosecutor has Breaking Bad\'s anti-hero energy — the rules are for suckers, and our protagonist knows how to break them — with a dark comedy streak that keeps it from getting too grim.' },
      { showId: 'kingdom', whyYoullLove: 'A crown prince investigates a plague spreading from the south — and discovers the political conspiracy that created it. Kingdom is Breaking Bad transposed to the Joseon dynasty: a protagonist trying to do the right thing discovers that the right thing and the survivable thing are not the same, and watches his choices narrow down to only the terrible options. Stunning production values.' }
    ],
    relatedPages: [
      { slug: 'shows-like-true-detective', title: 'True Detective' },
      { slug: 'shows-like-dexter', title: 'Dexter' },
      { slug: 'shows-like-criminal-minds', title: 'Criminal Minds' },
      { slug: 'shows-like-succession', title: 'Succession' }
    ]
  },
  {
    slug: 'shows-like-stranger-things',
    sourceShowId: 'stranger-things',
    h1: 'If You Loved Stranger Things, Watch These K-Dramas',
    metaTitle: 'Shows Like Stranger Things: 7 K-Dramas for Stranger Things Fans (2025) | DramaMatch',
    metaDescription: 'Obsessed with Stranger Things\' supernatural mystery, 80s nostalgia, and found-family friendships? These K-dramas deliver the same mix of coming-of-age heart, horror-adjacent thrills, and ensemble casts you\'ll root for against impossible odds.',
    intro: 'Stranger Things works because it pairs genuine supernatural dread with the warmth of real friendship — and does both at a level where you\'re terrified and heartbroken at the same time. Korean dramas have mastered this combination. Whether it\'s teens facing an apocalypse, detectives with supernatural gifts, or found families fighting monsters from other realms, these shows carry the same emotional frequency as Hawkins, Indiana.',
    curatedPicks: [
      { showId: 'all-of-us-are-dead', whyYoullLove: 'High school students are trapped on campus during a zombie outbreak and have to survive using only each other. All of Us Are Dead is Stranger Things with the dial turned up on horror: same ensemble of teens with different personalities and skills, same mixture of real emotional beats with visceral terror, same sense that the bonds between them are what will either save or doom them. Compulsively watchable.' },
      { showId: 'sweet-home', whyYoullLove: 'Residents of an apartment complex survive a monster apocalypse where humans transform into creatures born from their own suppressed desires. Sweet Home has Stranger Things\' core monster-horror DNA plus a psychological layer — the Upside Down made internal. The ensemble of survivors mirrors Stranger Things\' found-family structure, and the monsters are genuinely inventive.' },
      { showId: 'reply-1988', whyYoullLove: 'Five teenagers and their families living in the same alley in 1988 Seoul navigate growing up, first loves, and family hardship together. If Stranger Things\' nostalgia and friendship are what hook you, Reply 1988 is the Korean equivalent — no supernatural elements, but the same emotional warmth and period detail. You will cry. Everyone cries.' },
      { showId: 'the-uncanny-counter', whyYoullLove: 'A team of noodle shop workers are secretly demon-hunters with supernatural abilities. The Uncanny Counter has Stranger Things\' essential structure: an ordinary-seeming team with hidden powers, a supernatural threat that keeps escalating, and the found-family bonds that form when regular people are thrown into extraordinary circumstances together. Huge fun.' },
      { showId: 'goblin', whyYoullLove: 'An immortal goblin waiting for the one who can end his centuries-long life meets a girl with the power to do it — and falls in love with her instead. Goblin is Stranger Things for the supernatural romance angle: mythology-heavy world-building, a mythology that the protagonists are trapped inside, and an emotional payoff that justifies the elaborate setup. The bromance subplot is some of the best television ever made.' },
      { showId: 'kingdom', whyYoullLove: 'A crown prince investigates a zombie plague spreading across Joseon Korea and uncovers the political conspiracy behind it. Kingdom is Stranger Things\' structure — ordinary people investigating something deeply wrong, discovering it goes higher than they thought — in a historical epic package. The six-episode first season is essentially a perfect piece of television.' },
      { showId: 'tale-of-the-nine-tailed', whyYoullLove: 'A former mountain spirit living in modern Seoul investigates supernatural disappearances alongside a documentary filmmaker who may be connected to his past. Tale of the Nine Tailed has Stranger Things\' mythology-from-another-world energy: creatures with rules and histories, a protagonist with one foot in each world, and the sense that the ordinary and the supernatural are always just one door apart.' }
    ],
    relatedPages: [
      { slug: 'shows-like-dexter', title: 'Dexter' },
      { slug: 'shows-like-criminal-minds', title: 'Criminal Minds' },
      { slug: 'shows-like-game-of-thrones', title: 'Game of Thrones' }
    ]
  },
  {
    slug: 'shows-like-the-office',
    sourceShowId: 'the-office',
    h1: 'If You Loved The Office, Watch These K-Dramas',
    metaTitle: 'Shows Like The Office: 7 K-Dramas for The Office Fans (2025) | DramaMatch',
    metaDescription: 'Love The Office\'s workplace comedy, awkward romance, and ensemble cast of coworkers you\'d recognize anywhere? These K-dramas deliver the same office dynamics, slow-burn relationships, and humor that comes from people spending too much time together in small rooms.',
    intro: 'The Office works because it finds the absurdity and warmth inside the most mundane place on earth: the workplace. Korean dramas set in offices understand this intimately. They\'ve built entire genres around the slow-burn romance that develops across cubicle walls, the mentor-mentee bond forged in late-night overtime, and the ensemble of coworkers who become your accidental family. You\'ll recognize these characters immediately.',
    curatedPicks: [
      { showId: 'misaeng', whyYoullLove: 'The definitive Korean workplace drama. A former baduk prodigy enters a corporate trading company as a temp — with no university degree, no connections, and no idea how office culture works. Misaeng has The Office\'s essential quality: finding the profound inside the tedious. The coworker relationships are as richly observed as anything in The Office, and the mentorship between the protagonist and his team leader is genuinely moving.' },
      { showId: 'extraordinary-attorney-woo', whyYoullLove: 'A brilliant lawyer with autism navigates the workplace politics and case-of-the-week challenges of a mid-tier law firm. Extraordinary Attorney Woo has The Office\'s ensemble structure — the boss, the overachievers, the slackers, the office romance — plus a genuinely warm protagonist whose perspective makes the familiar feel fresh. The recurring whale obsession is an Office-caliber bit.' },
      { showId: 'hospital-playlist', whyYoullLove: 'Five doctors who\'ve been best friends since medical school navigate hospital life, band practice, and the slow realization that their friendships might be romantic. Hospital Playlist is The Office if Jim and Pam had four close friends who were all equally interesting. The ensemble chemistry is extraordinary, and the show rewards patience with one of the warmest TV friendships ever filmed.' },
      { showId: 'whats-wrong-with-secretary-kim', whyYoullLove: 'An impossibly efficient secretary announces she\'s quitting after nine years — and her narcissistic boss realizes, to his horror, that he might be in love with her. What\'s Wrong with Secretary Kim has The Office\'s boss-employee dynamic with the awkward romance made explicit and the comedy pitched at a slightly broader register. Enormously fun, and the leads have great chemistry.' },
      { showId: 'coffee-prince', whyYoullLove: 'A cash-strapped young woman takes a job at a coffee shop — disguised as a man — and her new boss starts developing feelings he can\'t explain. Coffee Prince is The Office\'s premise (people stuck working together slowly falling in love) with a gender-disguise twist that generates both comedy and genuine emotional complexity. A landmark of the workplace romance genre.' },
      { showId: 'itaewon-class', whyYoullLove: 'A young man opens a small bar in Itaewon and builds a scrappy found-family team of misfits to compete against the conglomerate that destroyed his life. Itaewon Class has The Office\'s ensemble energy — a motley crew of coworkers each with their own arc — plus a vengeance plot that keeps the stakes higher than anything Dunder Mifflin ever faced.' },
      { showId: 'start-up', whyYoullLove: 'A group of young entrepreneurs navigate the chaos of startup culture, falling in love, and the question of what they\'re actually building and why. Start-Up has The Office\'s feel for the small dramas that happen when ambitious people share space — the love triangle, the mentor who\'s hiding something, the coworker rivalry — in a tech startup setting that\'s quintessentially modern.' }
    ],
    relatedPages: [
      { slug: 'shows-like-bridgerton', title: 'Bridgerton' },
      { slug: 'shows-like-succession', title: 'Succession' }
    ]
  },
  {
    slug: 'shows-like-game-of-thrones',
    sourceShowId: 'game-of-thrones',
    h1: 'If You Loved Game of Thrones, Watch These K-Dramas',
    metaTitle: 'Shows Like Game of Thrones: 7 K-Dramas for Game of Thrones Fans (2025) | DramaMatch',
    metaDescription: 'Obsessed with Game of Thrones\' political intrigue, sprawling ensemble, and world where anyone can die? These K-dramas and C-dramas deliver the same epic scope, power struggles, and moral complexity — minus the years-long wait between seasons.',
    intro: 'Game of Thrones hooked the world by proving that prestige drama could also be epic fantasy — and that political intrigue was just as thrilling as dragons. Korean historical dramas (sageuks) have been doing this for decades. Court politics, faction warfare, betrayal at every level of the hierarchy, and protagonists who understand that power is earned by understanding everyone else\'s game. These are the shows that fill the Game of Thrones-shaped hole.',
    curatedPicks: [
      { showId: 'nirvana-in-fire', whyYoullLove: 'The Game of Thrones of C-drama. A brilliant strategist, presumed dead after a massacre, returns to the imperial capital with a new identity and begins dismantling the conspiracy that destroyed his family — by controlling the succession battle between the princes. Nirvana in Fire has every Game of Thrones ingredient: a vast political map, characters playing long games, and a protagonist who wins through intelligence rather than force. The writing is extraordinary.' },
      { showId: 'six-flying-dragons', whyYoullLove: 'Six people with conflicting visions of what Korea should become navigate the violent founding of the Joseon dynasty. Six Flying Dragons has Game of Thrones\' scale — a genuine ensemble where every major character has a complete arc and a coherent political philosophy — plus the historical weight of events that actually happened. The villain is one of the great characters in Korean drama history.' },
      { showId: 'kingdom', whyYoullLove: 'A crown prince investigates a plague spreading from the south and discovers it\'s being used as a weapon in a succession struggle. Kingdom is Game of Thrones with zombies: political conspiracy, a protagonist trying to do the right thing in a system designed to punish it, and production values that rival anything HBO made. The short episode count (6 per season) makes it the most efficient Game of Thrones equivalent on this list.' },
      { showId: 'moon-lovers-scarlet-heart-ryeo', whyYoullLove: 'A modern woman is transported back to the Goryeo dynasty and falls in love with a prince — while the brothers around her wage war over the throne. Moon Lovers has Game of Thrones\' ensemble of princes with different personalities and ambitions, and the same willingness to let the politics devour the people caught inside them. The tragedy is real.' },
      { showId: 'mr-sunshine', whyYoullLove: 'A Korean boy who fled slavery in the 1860s returns as an American Marine officer at the dawn of Japanese colonization — and falls in love with a noblewoman who becomes a guerrilla fighter. Mr. Sunshine has Game of Thrones\' historical epic scope and its sense that the characters we love are caught in forces bigger than them. The cinematography is some of the most beautiful ever put on television.' },
      { showId: 'hwarang', whyYoullLove: 'A group of elite warrior-scholars from noble families navigate the dangerous political landscape of the Silla kingdom while forming unexpected bonds. Hwarang has Game of Thrones\' young ensemble of privileged, competing characters — each with a different relationship to power — and the court politics that constantly reorder their alliances. Think of it as Game of Thrones: The Next Generation.' },
      { showId: 'tree-with-deep-roots', whyYoullLove: 'A king tries to create a writing system for his people against the fierce resistance of the noble class that benefits from illiteracy. Tree With Deep Roots has Game of Thrones\' central question — who does power actually serve? — played out in one of Korean history\'s most dramatic moments. The political philosophy is sophisticated and the mystery is genuinely gripping.' }
    ],
    relatedPages: [
      { slug: 'shows-like-succession', title: 'Succession' },
      { slug: 'shows-like-true-detective', title: 'True Detective' },
      { slug: 'shows-like-criminal-minds', title: 'Criminal Minds' },
      { slug: 'shows-like-mindhunter', title: 'Mindhunter' }
    ]
  },

  // ─── April 2026 Batch — Trending Western Shows ────────────────────────────

  {
    slug: 'shows-like-euphoria',
    sourceShowId: 'euphoria',
    h1: 'Shows Like Euphoria — K-Dramas With the Same Raw, Stylized Intensity',
    metaTitle: 'Shows Like Euphoria: 7 K-Dramas for Euphoria Fans (2026) | DramaMatch',
    metaDescription: 'Obsessed with Euphoria\'s dark aesthetics, toxic relationships, and brutal honesty about addiction and identity? These K-dramas match that same raw, stylized emotional intensity — with even more devastating storytelling.',
    intro: 'Euphoria built its audience by refusing to flinch. Teen addiction, identity crisis, toxic love, trauma passed between generations — and all of it shot with the most beautiful cinematography on television. Korean dramas have been making this kind of emotionally merciless coming-of-age content for years, often with less budget and more gut-punch. If you loved Euphoria\'s willingness to go there, these K-dramas go further.',
    curatedPicks: [
      { showId: 'extracurricular', whyYoullLove: 'The closest K-drama to Euphoria\'s DNA. High school students running an illegal operation — not because they\'re bad people, but because the system left them no other options. Netflix dark, morally complex, no redemption arc handed to anyone. The Korean education system as a trap, and teenagers choosing the trap with open eyes.' },
      { showId: 'nevertheless', whyYoullLove: 'Euphoria distilled into a toxic romance. You know Na-bi should leave Park Jae-eon. She knows it. The show knows it. And nobody does anything about it. Nevertheless captures that Euphoria energy of loving something that is actively destroying you — stylized, sensual, and brutally honest about desire and self-deception.' },
      { showId: 'my-mister', whyYoullLove: 'Euphoria\'s emotional frequency without the stylization. A woman carrying impossible weight — debt, family, survival — finds an unexpected connection with a middle-aged engineer carrying his own buried grief. My Mister is what happens after the Euphoria-style trauma: the years of quiet endurance. IU\'s performance is one of the best in Korean drama history.' },
      { showId: 'my-liberation-notes', whyYoullLove: 'Three siblings living in a commuter town outside Seoul, grinding through jobs they hate, relationships that don\'t work, and a vague sense that their lives are passing them by. My Liberation Notes has Euphoria\'s interest in the emptiness underneath the performance of normalcy — except it\'s quieter, more introspective, and the release it builds toward is earned.' },
      { showId: 'juvenile-justice', whyYoullLove: 'A no-nonsense judge in the juvenile court system confronts what the Korean justice system does to children who slip through every other crack. Juvenile Justice shares Euphoria\'s refusal to sentimentalize youth — these kids are products of their circumstances, and the circumstances are a system designed to fail them. Hard to watch. Impossible to stop.' },
      { showId: 'bloodhounds', whyYoullLove: 'Young people trapped by predatory debt — the kind that doesn\'t have legal recourse because the lenders operate in the spaces between the law. Bloodhounds has Euphoria\'s class-consciousness and its specific anger at systems that crush people who had no chance to begin with. Intense, physical, and emotionally honest about desperation.' },
      { showId: 'my-name', whyYoullLove: 'A young woman\'s father is murdered. She infiltrates the criminal organization to find the killer — then goes undercover as a cop. My Name has Euphoria\'s identity dissolution at its core: a protagonist who loses track of who she is in the process of becoming what the situation demanded. The action is exceptional, and the emotional damage is real.' }
    ],
    relatedPages: [
      { slug: 'shows-like-stranger-things', title: 'Stranger Things' },
      { slug: 'shows-like-breaking-bad', title: 'Breaking Bad' },
      { slug: 'shows-like-the-bear', title: 'The Bear' },
      { slug: 'shows-like-succession', title: 'Succession' }
    ]
  },

  {
    slug: 'shows-like-marshals',
    sourceShowId: 'marshals',
    h1: 'Shows Like Y: Marshals — K-Dramas With the Same Frontier Justice Energy',
    metaTitle: 'Shows Like Y: Marshals: 7 K-Dramas for Yellowstone Fans (2026) | DramaMatch',
    metaDescription: 'Love Y: Marshals\' principled lawman navigating a corrupt frontier? These K-dramas deliver the same moral complexity, isolated community secrets, and protagonists who enforce justice when institutions can\'t — or won\'t.',
    intro: 'Y: Marshals works because Hank Dollarhyde is a specific kind of hero — someone who knows the system is broken and chooses to work inside it anyway, drawing lines in places where the official rules don\'t exist. Korean crime dramas are built for this. Whether it\'s a prosecutor who can\'t feel emotion, a detective in a haunted small town, or a profiler reconstructing killers no one wanted to find — K-drama\'s moral universe fits the Yellowstone franchise perfectly.',
    curatedPicks: [
      { showId: 'stranger', whyYoullLove: 'The most direct equivalent to Y: Marshals\' principled-investigator-in-corrupt-system premise. Hwang Si-mok is a prosecutor who had part of his brain removed — it left him incapable of feeling normal human emotion, which makes him perfectly suited for navigating institutional corruption without being swayed by it. The Marshals\' frontier code meets Korea\'s prosecution office. The writing is extraordinary.' },
      { showId: 'watcher-kdrama', whyYoullLove: 'A small community, a lawman with buried secrets, and a web of corruption that runs higher than anyone will admit. Watcher has Y: Marshals\' essential premise — the person enforcing justice is also implicated in the thing they\'re investigating — and delivers on it with real psychological complexity. The rural setting maps directly to Wyoming frontier energy.' },
      { showId: 'beyond-evil', whyYoullLove: 'Two detectives in a small town circle each other and an old murder — each suspecting the other, both hiding something. Beyond Evil has Y: Marshals\' tight-community dynamic where history between people runs deeper than any official case file, and the line between investigator and suspect keeps moving. One of the best performances in Korean drama history.' },
      { showId: 'signal', whyYoullLove: 'A criminal profiler communicates with a detective from the past via a mysterious walkie-talkie. Signal has Y: Marshals\' obsession with cold cases and communities where the official verdict was always wrong — the victims were the wrong people to be victims, and so their cases stayed cold. The frontier justice angle is transposed to Korean cold-case territory with devastating effect.' },
      { showId: 'through-the-darkness', whyYoullLove: 'Based on the true story of Korea\'s first serial killer profiler, this show follows the methodical building of a criminal psychology unit from scratch. Through the Darkness has Y: Marshals\' quality of a protagonist who is inventing their role as they go — there\'s no manual for what they\'re doing, just conviction that it matters.' },
      { showId: 'jirisan', whyYoullLove: 'A national park ranger navigates an isolated mountain community with its own code of law, isolated from the normal justice apparatus. Jirisan\'s setting — rugged, remote, a place where the official law comes late if it comes at all — is the Korean equivalent of Wyoming frontier territory. Two rangers, a mystery, and a community that keeps its own secrets.' },
      { showId: 'bad-prosecutor', whyYoullLove: 'A prosecutor who uses street-fighting and unorthodox tactics fights institutional corruption from inside a system that\'s mostly rotten. Bad Prosecutor has the anti-hero lawman energy that powers Y: Marshals\' best moments — Hank Dollarhyde drawing lines the official rulebook doesn\'t have, this K-drama\'s protagonist operating in the same extra-legal space with moral coherence.' }
    ],
    relatedPages: [
      { slug: 'shows-like-succession', title: 'Succession' },
      { slug: 'shows-like-true-detective', title: 'True Detective' },
      { slug: 'shows-like-criminal-minds', title: 'Criminal Minds' },
      { slug: 'shows-like-breaking-bad', title: 'Breaking Bad' }
    ]
  },

  {
    slug: 'shows-like-ransom-canyon',
    sourceShowId: 'ransom-canyon',
    h1: 'Shows Like Ransom Canyon — K-Dramas With the Same Small-Town Romance',
    metaTitle: 'Shows Like Ransom Canyon: 7 K-Dramas for Ransom Canyon Fans (2026) | DramaMatch',
    metaDescription: 'Hooked on Ransom Canyon\'s Texas small-town romance and tight-knit community love stories? These K-dramas deliver the same slow-burn romance, healing community warmth, and second chances — often with even more emotional depth.',
    intro: 'Ransom Canyon works because Jodi Thomas understood something fundamental: small towns are where people go to either run from something or finally stop running. The community knows your story before you tell it, which makes love there both more complicated and more real. Korean dramas have been perfecting this formula — the outsider who arrives broken and leaves healed, the community that judges and then embraces, the love that finds you when you weren\'t looking. These are the shows that hit the same frequency.',
    curatedPicks: [
      { showId: 'hometown-cha-cha-cha', whyYoullLove: 'The most direct Ransom Canyon equivalent in K-drama. A city dentist moves to the coastal village of Gongjin, clashes with the town\'s beloved "Mr. Handyman," and slowly falls in love with both the man and the community. Hometown Cha-Cha-Cha has the same structure as Ransom Canyon: an outsider who came to a small town and got claimed by it. The chemistry is perfect and the community warmth is unmatched.' },
      { showId: 'when-the-camellia-blooms', whyYoullLove: 'A single mother opens a bar in a small town and faces the community\'s judgment — until a genuinely good police officer falls for her and refuses to let the town define her story. When the Camellia Blooms has Ransom Canyon\'s slow build from "outsider" to "the person this town needed all along," with the same sense that small-town romance carries more weight because everyone is watching.' },
      { showId: 'our-blues', whyYoullLove: 'An anthology of love stories set in a Jeju Island fishing village — different couples, different generations, all connected by the same tight-knit community. Our Blues has Ransom Canyon\'s multi-protagonist structure: multiple love stories happening simultaneously in a place small enough that they all intersect. The community is a character, and every story is better because of it.' },
      { showId: 'summer-strike', whyYoullLove: 'A woman quits her exhausting Seoul job and moves to a small coastal town with no plan, discovers the community she didn\'t know she needed, and falls for a librarian who has chosen the quiet life deliberately. Summer Strike has Ransom Canyon\'s healing-through-belonging arc: the place that looks like retreat turns out to be arrival.' },
      { showId: 'reply-1988', whyYoullLove: 'Five families living in the same alley in 1988 Seoul — so close together that the distinction between neighbors and family has dissolved entirely. Reply 1988 has Ransom Canyon\'s sense of community as the emotional ground everything else grows from. The romance is slow, the nostalgia is aching, and the neighborhood is irreplaceable. You will cry. Everyone cries.' },
      { showId: 'the-good-bad-mother', whyYoullLove: 'A prosecutor loses his memory and returns home to the rural community where he grew up — where his mother and childhood community hold every piece of who he was. The Good Bad Mother has Ransom Canyon\'s rural-community-as-emotional-foundation quality, with a love story that grows from shared history and the particular tenderness of coming home.' },
      { showId: 'see-you-in-my-19th-life', whyYoullLove: 'A woman who remembers all her past lives finds the man she loved before, now grown and living a life she needs to re-enter carefully. See You in My 19th Life has Ransom Canyon\'s "fate kept bringing us back to each other" romantic logic — the slow burn justified by a connection that feels pre-existing even when it\'s new.' }
    ],
    relatedPages: [
      { slug: 'shows-like-virgin-river', title: 'Virgin River' },
      { slug: 'shows-like-bridgerton', title: 'Bridgerton' },
      { slug: 'shows-like-when-calls-the-heart', title: 'When Calls the Heart' },
      { slug: 'shows-like-outlander', title: 'Outlander' }
    ]
  },

  {
    slug: 'shows-like-the-bear',
    sourceShowId: 'the-bear',
    h1: 'Shows Like The Bear — K-Dramas With the Same Raw Intensity',
    metaTitle: 'Shows Like The Bear: 7 K-Dramas for The Bear Fans (2026) | DramaMatch',
    metaDescription: 'Hooked on The Bear\'s chaotic kitchen energy, trauma-driven perfectionism, and found family under pressure? These K-dramas match that same intense workplace drama, emotional unraveling, and ensemble depth — with the volume turned up.',
    intro: 'The Bear works because it found something true: excellence is a trauma response, kitchens are families, and the pressure to be perfect is indistinguishable from the pressure not to feel. Korean dramas understand institutional pressure — the hierarchy, the 14-hour days, the relationships built entirely inside the workplace — and they understand grief that expresses itself as obsession. These shows hit The Bear\'s emotional register even when the setting is completely different.',
    curatedPicks: [
      { showId: 'misaeng', whyYoullLove: 'The Bear for the office. A former baduk prodigy enters a corporate trading company as a temp with no connections, no degree, and no idea how the institutional hierarchy works — and discovers that surviving it requires the same total commitment that the game did. Misaeng has The Bear\'s essential quality: finding the profound and the devastating inside the grinding, daily, fluorescent-lit ordinary.' },
      { showId: 'hospital-playlist', whyYoullLove: 'Five doctors who have been best friends since medical school navigate the relentless pressure of a hospital, band practice, and the slowly dawning realization that their closest friendships might be something more. Hospital Playlist has The Bear\'s found-family-in-a-workplace structure and its understanding that the people you spend 60 hours a week with become your actual family whether you planned for it or not.' },
      { showId: 'itaewon-class', whyYoullLove: 'A young man whose father was killed by a chaebol heir\'s negligence spends a decade building a scrappy restaurant to take down the dynasty that destroyed him. Itaewon Class has The Bear\'s restaurant-as-proving-ground energy — the kitchen as the site where character gets tested, where the team either coheres or fractures, and where the mission is bigger than any one shift.' },
      { showId: 'my-mister', whyYoullLove: 'The emotional core of The Bear — carrying impossible weight inside a professional exterior while everything slowly unravels and then, somehow, resolves — without the kitchen. My Mister is what happens in the years between the grief and the healing: a man surviving, a woman surviving, and the unexpected connection that makes survival feel like something more.' },
      { showId: 'extraordinary-attorney-woo', whyYoullLove: 'A brilliant lawyer with autism navigates a high-pressure law firm, developing her own methods for doing exceptional work inside a system that doesn\'t accommodate how her mind works. Extraordinary Attorney Woo has The Bear\'s quality of a protagonist who approaches their work with total commitment and finds the institutional culture hostile to that commitment. The warmth makes the pressure bearable.' },
      { showId: 'crash-course-in-romance', whyYoullLove: 'A top-ranked private tutoring academy in Korea operates with the same pressure-cooker intensity as The Bear\'s kitchen: rankings, performance, institutional hierarchy, and lives on the line. A single mother navigates this world through her daughter, and the romance that develops with a top tutor has The Bear\'s quality of love that grows in the spaces between crisis moments.' },
      { showId: 'the-good-bad-mother', whyYoullLove: 'A driven prosecutor loses everything and is forced to return to the slowness of his rural hometown, rebuild his relationship with his mother, and remember who he was before the institution consumed him. The Good Bad Mother has The Bear\'s theme of excellence as escape — and what happens when the escape route closes and all you have left is the people who knew you before you needed escaping.' }
    ],
    relatedPages: [
      { slug: 'shows-like-succession', title: 'Succession' },
      { slug: 'shows-like-breaking-bad', title: 'Breaking Bad' },
      { slug: 'shows-like-euphoria', title: 'Euphoria' },
      { slug: 'shows-like-the-office', title: 'The Office' }
    ]
  },

  {
    slug: 'shows-like-the-penguin',
    sourceShowId: 'the-penguin',
    h1: 'Shows Like The Penguin — K-Dramas & C-Dramas With the Same Villain Protagonist Energy',
    metaTitle: 'Shows Like The Penguin: 7 K-Dramas for The Penguin Fans (2026) | DramaMatch',
    metaDescription: 'Loved The Penguin\'s villain protagonist and criminal dynasty power plays? These K-dramas and C-dramas deliver the same working-class ambition, crime family betrayal, and anti-hero excellence — in Asian drama\'s most morally complex stories.',
    intro: 'The Penguin works because Oz Cobb is the best kind of villain protagonist: a man who understands exactly what world he lives in and refuses to pretend it\'s a different one. He doesn\'t have Logan Roy\'s inheritance or Walter White\'s chemistry set. He has intelligence, patience, and a working-class fury at a world that keeps trying to remind him of his place. Korean and Chinese dramas excel at this character — the man who was always going to win, once the right vacuum appeared.',
    curatedPicks: [
      { showId: 'reborn-rich', whyYoullLove: 'The most direct Penguin equivalent in K-drama. A loyal conglomerate employee is betrayed and murdered by the family he served, then reincarnated as their youngest son with full memory of the future. Reborn Rich has Oz Cobb\'s essential dynamic — a man of lower standing navigating an aristocratic power structure that views him as disposable — with the added satisfaction of pre-knowledge. The boardroom is Gotham with suits instead of costumes.' },
      { showId: 'vincenzo', whyYoullLove: 'A Korean-Italian mob consigliere returns to Seoul and ends up fighting a corrupt mega-corporation using exactly the methods that corporation uses on everyone else. Vincenzo has The Penguin\'s moral argument at its core: in a world this corrupt, the most honest actor is sometimes the criminal. Song Joong-ki brings the same dangerous charm as Colin Farrell — a man who enjoys the work a little too much.' },
      { showId: 'money-flower', whyYoullLove: 'A man adopted into a powerful family as a child has spent decades building a perfect cover while methodically setting up the conditions for their destruction. Money Flower has The Penguin\'s patience — Oz\'s rise through Gotham\'s power vacuum is built on knowing that the right moment only comes to people who prepared for it. The slowest, most satisfying burn in Korean drama.' },
      { showId: 'arthdal-chronicles', whyYoullLove: 'A massive fantasy epic about the founding of a civilization — with a power vacuum at the center and multiple protagonists trying to fill it by any means necessary. Arthdal Chronicles has The Penguin\'s quality of a new political order being built from the ruins of the old one, with maximum carnage and minimum sentimentality about what that requires.' },
      { showId: 'little-women-kdrama', whyYoullLove: 'Three sisters from poverty stumble into the orbit of a supremely powerful political family and discover the secrets that hold their empire together. Little Women has The Penguin\'s sense that ordinary people who accidentally see behind the curtain either get absorbed by the machine or become its most dangerous enemies. The villain family is Gotham-caliber awful.' },
      { showId: 'sky-castle', whyYoullLove: 'Elite families in a luxury residential enclave compete with the same ferocity as Gotham\'s crime families over the only resource that matters: positioning their children for success. Sky Castle has The Penguin\'s dark comedy DNA — these people are monstrous, and the show knows it, and can\'t stop watching them. The rot underneath the polish is the whole show.' },
      { showId: 'nirvana-in-fire', whyYoullLove: 'A brilliant strategist, presumed dead after a massacre, returns to the imperial capital with a new identity and begins systematically dismantling the conspiracy that destroyed his family. Nirvana in Fire is the C-drama Penguin: the methodical, patient, intelligence-driven rise of someone the powerful thought they had eliminated. The chess match is extraordinary, and the satisfaction of every piece clicking into place is unmatched.' }
    ],
    relatedPages: [
      { slug: 'shows-like-succession', title: 'Succession' },
      { slug: 'shows-like-breaking-bad', title: 'Breaking Bad' },
      { slug: 'shows-like-game-of-thrones', title: 'Game of Thrones' },
      { slug: 'shows-like-true-detective', title: 'True Detective' }
    ]
  },

  // ─── Netflix Hits & J-Drama Survival ─────────────────────────────────────────

  {
    slug: 'shows-like-alice-in-borderland',
    sourceShowId: 'alice-in-borderland',
    h1: 'Shows Like Alice in Borderland — J-Dramas, K-Dramas & Survival Thrillers',
    metaTitle: 'Shows Like Alice in Borderland: J-Dramas & K-Dramas With the Same Survival Thrills (2025) | DramaMatch',
    metaDescription: 'Obsessed with Alice in Borderland\'s deadly games and high-stakes survival? These K-dramas and J-dramas deliver the same visceral tension, desperate choices, and emotional stakes.',
    intro: 'Alice in Borderland took the survival game premise Netflix made famous and ran it through a distinctly Japanese lens — brutal games, shattered social contracts, and characters forced to reveal what they\'re really made of when the rules disappear. The production is extraordinary and the emotional investment in the central trio makes every death hit harder. These K-dramas and J-dramas share the same survival DNA.',
    curatedPicks: [
      { showId: 'squid-game', whyYoullLove: 'The survival game that put Korean content on the global map. Same premise as Alice in Borderland — deadly games, desperate participants, a system designed to exploit the desperate — but with Korean storytelling\'s capacity for class warfare and emotional devastation. The pink guard aesthetic is pure Borderlands horror.' },
      { showId: 'sweet-home', whyYoullLove: 'An abandoned apartment building becomes a survival arena as residents face monsters that reveal something about human nature under pressure. Sweet Home has the same empty-city devastation and the same watching-people-you-care-about-make-impossible-choices electricity as Alice in Borderland.' },
      { showId: 'kingdom', whyYoullLove: 'Joseon-era horror-thriller where a crumbling political order and flesh-eating undead create a survival scenario across an entire nation. Kingdom has Alice in Borderland\'s sense of a system that\'s already dead before the real monsters show up — and the same gorgeous production value.' },
      { showId: 'signal', whyYoullLove: 'A criminal profiler communicates with a detective in the past via a mysterious walkie-talkie — and together they close cases that never got solved. Signal shares Alice in Borderland\'s quality of two worlds colliding through an impossible device, with the same atmosphere of people solving impossible problems because the alternative is worse.' },
      { showId: 'beyond-evil', whyYoullLove: 'Two detectives in a small town both become suspects in a serial murder case that forces them to confront how well they actually know the people around them. Beyond Evil has Alice in Borderland\'s central tension: the killer is inside the social circle, and you don\'t know who to trust.' },
      { showId: 'stranger', whyYoullLove: 'An emotionless prosecutor investigates a serial murder case tied to institutional corruption — and discovers how deep the rot goes. Stranger has Alice in Borderland\'s willingness to show how power protects itself at any cost, with the same procedural tension and characters who are dangerous precisely because they\'re brilliant.' }
    ],
    relatedPages: [
      { slug: 'shows-like-squid-game', title: 'Squid Game' },
      { slug: 'shows-like-stranger-things', title: 'Stranger Things' },
      { slug: 'shows-like-breaking-bad', title: 'Breaking Bad' },
      { slug: 'shows-like-godzilla-minus-one', title: 'Godzilla Minus One' }
    ]
  },

  {
    slug: 'shows-like-cobra-kai',
    sourceShowId: 'cobra-kai',
    h1: 'Shows Like Cobra Kai — Martial Arts K-Dramas & C-Dramas With the Same Fight Energy',
    metaTitle: 'Shows Like Cobra Kai: 7 Martial Arts K-Dramas & C-Dramas for Cobra Kai Fans (2025) | DramaMatch',
    metaDescription: 'Love Cobra Kai\'s redemption arcs, dojo rivalries, and martial arts drama? These K-dramas and C-dramas deliver the same moral complexity, training montages, and fight-for-something-bigger energy.',
    intro: 'Cobra Kai proved that martial arts drama isn\'t just about the fights — it\'s about what people fight for and why. The \"strike first, strike hard, no mercy\" philosophy, the generational trauma, the rivalries that span decades — this is martial arts storytelling at its most emotionally complex. Korean and Chinese dramas have been doing this for years. Here are the ones that match Cobra Kai\'s best qualities.',
    curatedPicks: [
      { showId: 'my-dearest', whyYoullLove: 'Set during the devastating Manchu invasions of Korea, where martial arts skill means the difference between survival and annihilation. My Dearest has Cobra Kai\'s quality of martial arts as a moral philosophy — what you fight for and who you\'re fighting for determines whether the skill makes you better or destroys you.' },
      { showId: 'weak-hero-class-1', whyYoullLove: 'A new student arrives at a high school run by physical hierarchies and discovers that the only way to change the system is to fight through it. Weak Hero Class 1 has Cobra Kai\'s quality of martial arts as a language for working out who people really are — and the stakes feel real at every moment.' },
      { showId: 'warrior-dong-yi', whyYoullLove: 'A spy trained in martial arts infiltrates the royal palace and becomes a bodyguard to a future king. Warrior Dong Yi has Cobra Kai\'s central relationship energy — two people who could be enemies if they understood each other, working out their conflict through physical skill in a world where that skill determines life or death.' },
      { showId: 'flower-of-evil', whyYoullLove: 'A detective investigates a serial murder case while discovering the man she loves has secrets that could destroy everything. Flower of Evil has Cobra Kai\'s quality of martial arts translated into psychological stakes — the fighting is emotional, the danger is domestic, and the villain is someone you almost understand.' },
      { showId: 'my-name', whyYoullLove: 'A woman whose father was murdered joins a criminal organization specifically to train — and discovers that martial arts excellence is both her inheritance and her curse. My Name has Cobra Kai\'s quality of martial arts as a path to power and a trap — you can\'t stop once you start, and the people who taught you don\'t let you go.' },
      { showId: 'extraordinary-you', whyYoullLove: 'A high school student discovers she\'s a character in a comic — and decides to rewrite her own story by fighting the narrative that\'s been written for her. Extraordinary You has Cobra Kai\'s quality of martial arts as a metaphor for refusing to accept the role you\'ve been given. Quirky, funny, unexpectedly powerful.' }
    ],
    relatedPages: [
      { slug: 'shows-like-bridgerton', title: 'Bridgerton' },
      { slug: 'shows-like-outlander', title: 'Outlander' },
      { slug: 'shows-like-stranger-things', title: 'Stranger Things' },
      { slug: 'shows-like-the-office', title: 'The Office' }
    ]
  },

  // ─── Literary Adaptations & Family Sagas ─────────────────────────────────────

  {
    slug: 'shows-like-little-women',
    sourceShowId: 'little-women-2019',
    h1: 'Shows Like Little Women — K-Dramas With the Same Sisterhood, Class & Heart',
    metaTitle: 'Shows Like Little Women (2019): 7 K-Dramas for Little Women Fans (2025) | DramaMatch',
    metaDescription: 'Love Little Women (2019 or the 2022 K-drama)? These K-dramas deliver the same sisterhood dynamics, class commentary, and emotionally devastating storytelling across generations.',
    intro: 'Little Women, whether you mean the 2019 film or the brilliant 2022 K-drama adaptation, works because it\'s about what women do for each other when the world gives them nothing. The March sisters\' dynamics — loyalty, jealousy, sacrifice, and fierce love — translate perfectly into K-drama\'s own specialty: family sagas where the women carry the emotional weight. These are stories that will leave you thinking about your own family.',
    curatedPicks: [
      { showId: 'little-women-kdrama', whyYoullLove: 'The K-drama Little Women that won the Cannes International Drama Festival Grand Prize. Three sisters from poverty stumble into the orbit of a supremely powerful family and discover the secrets that hold their empire together. Same story DNA as the original — women who won\'t break, a system that won\'t bend, and the question of whether you can beat the machine by joining it.' },
      { showId: 'reply-1988', whyYoullLove: 'Five families in one neighborhood, decades of shared history, and three best friends whose lives are about to split in different directions. Reply 1988 is Little Women expanded to a whole community — same focus on female relationships, same bittersweet ending, and the same feeling that you lived those years yourself.' },
      { showId: 'the-glory', whyYoullLove: 'A woman who was bullied in high school spends her adult life systematically dismantling the people who destroyed her. The Glory has Little Women\'s quality of women who have been wronged and refuse to accept the world\'s verdict on their story. The revenge is extraordinary, the sisterly bond is the emotional anchor, and the class commentary cuts deep.' },
      { showId: 'queen-of-tears', whyYoullLove: 'A chaebol heiress and her working-class husband face a marriage crisis that forces them to remember why they chose each other. Queen of Tears has Little Women\'s quality of class dynamics as a love story — the question of whether people from different worlds can build something together when society is working against them.' },
      { showId: 'what-happens-to-my-family', whyYoullLove: 'A sprawling family saga about siblings who grew up together but ended up in completely different places — and the father whose stubborn love holds them together even when they\'re tearing themselves apart. What Happens to My Family has Little Women\'s ensemble quality, the same generational reach, and the same \"family as the thing you can\'t escape and can\'t live without\" feeling.' },
      { showId: 'our-blues', whyYoullLove: 'An anthology on Jeju Island following the women of a fishing village across different phases of life. Same ensemble female cast as Little Women, same focus on what women say to each other when men aren\'t listening, and the same emotional honesty that makes you feel like you\'re watching real people.' }
    ],
    relatedPages: [
      { slug: 'shows-like-bridgerton', title: 'Bridgerton' },
      { slug: 'shows-like-this-is-us', title: 'This Is Us' },
      { slug: 'shows-like-virgin-river', title: 'Virgin River' },
      { slug: 'shows-like-outlander', title: 'Outlander' }
    ]
  },

  // ─── Japanese Cinema & Disaster/Action ───────────────────────────────────────

  {
    slug: 'shows-like-godzilla-minus-one',
    sourceShowId: 'godzilla-minus-one',
    h1: 'Shows Like Godzilla Minus One — K-Dramas & C-Dramas With the Same Disaster Energy',
    metaTitle: 'Shows Like Godzilla Minus One: 7 K-Dramas & C-Dramas With Disaster Drama Energy (2025) | DramaMatch',
    metaDescription: 'Blew away by Godzilla Minus One\'s Oscar-winning spectacle and emotional depth? These K-dramas and C-dramas deliver the same disaster stakes, historical weight, and character-driven intensity.',
    intro: 'Godzilla Minus One won an Oscar because it proved that spectacle and heart aren\'t opposites — you can have the most technically accomplished kaiju destruction ever committed to film and still make the story about ordinary people forced to be extraordinary by circumstances they didn\'t choose. Korean and Chinese dramas have been building disaster narratives for years. These are the ones with the same combination of scale and soul.',
    curatedPicks: [
      { showId: 'emergency-declaration', whyYoullLove: 'An airplane is mid-flight when a bio-terror threat turns it into a sealed survival scenario. Emergency Declaration has the same quality as Godzilla Minus One: people trapped in a disaster they didn\'t create, watching a system fail them, and ordinary people having to step up. The technical precision is extraordinary.' },
      { showId: 'kingdom', whyYoullLove: 'An entire nation becomes a survival arena as Joseon Korea faces a zombie plague while dealing with court politics. Kingdom has Godzilla Minus One\'s quality of historical catastrophe as backdrop for character — the disaster reveals what the society actually is, and the human response to the crisis tells you who everyone really is.' },
      { showId: 'sweet-home', whyYoullLove: 'Residents of an abandoned apartment building must survive as monsters that embody their own psychology begin hunting them. Sweet Home has Godzilla Minus One\'s quality of the disaster being the entry point to something personal — the monsters here are trauma made literal, and the survival story is really about people learning to live with what they\'ve done.' },
      { showId: 'crash-landing-on-you', whyYoullLove: 'A Korean woman accidentally paraglides into North Korea and falls for a soldier whose job is to send her back. Crash Landing on You has Godzilla Minus One\'s quality of a disaster that\'s also a national story — the division of Korea is the disaster, and the love story is the survival against all odds. The scale is epic; the feelings are intimate.' },
      { showId: 'alchemy-of-souls', whyYoullLove: 'A fantasy epic where magical catastrophe creates a world where the rules have changed and everyone must adapt or die. Alchemy of Souls has Godzilla Minus One\'s quality of an event that restructured everything — and follows people who are navigating the new world the disaster created. Epic scope, deeply personal stakes.' },
      { showId: 'signal', whyYoullLove: 'A criminal profiler\'s walkie-talkie connects him to a detective in the past — and together they close cases about disasters that never got solved. Signal has Godzilla Minus One\'s quality of using genre mechanics (the impossible device) to explore what it means to fail to stop a catastrophe — and whether second chances are possible.' }
    ],
    relatedPages: [
      { slug: 'shows-like-squid-game', title: 'Squid Game' },
      { slug: 'shows-like-alice-in-borderland', title: 'Alice in Borderland' },
      { slug: 'shows-like-stranger-things', title: 'Stranger Things' },
      { slug: 'shows-like-suzume', title: 'Suzume' }
    ]
  },

  // ─── Anime & Emotionally-Driven Stories ─────────────────────────────────────

  {
    slug: 'shows-like-suzume',
    sourceShowId: 'suzume',
    h1: 'Shows Like Suzume — Emotionally Driven K-Dramas & J-Dramas About Loss & Becoming',
    metaTitle: 'Shows Like Suzume: 7 K-Dramas & J-Dramas About Loss, Journey & Coming-of-Age (2025) | DramaMatch',
    metaDescription: 'Moved by Suzume\'s emotional journey, grief, and coming-of-age magic? These K-dramas and J-dramas deliver the same tender heartbreak, magical realism, and stories about surviving what happened to you.',
    intro: 'Suzume is a Makoto Shinkai film, which means it\'s built on the same emotional architecture as all his work: a young woman on a journey that\'s really about processing grief, a magical premise that\'s really about emotional truth, and the kind of beautiful that makes you cry not because it\'s sad but because it\'s true. Korean dramas are masters of this exact formula. These are the ones that share Suzume\'s emotional DNA.',
    curatedPicks: [
      { showId: 'goblin', whyYoullLove: 'A 939-year-old goblin wants to die but can\'t — until a young woman who can see him becomes the one who decides when his story ends. Goblin is the K-drama that proved magical realism and emotional devastation could be the same thing. Same architecture as Suzume: a fantastical premise that\'s really a container for processing grief and learning to let go.' },
      { showId: 'reply-1988', whyYoullLove: 'Five friends in 1988 Seoul are about to graduate into adult life — and the show spends every episode building the sense that what you\'re about to lose is the best thing that ever happened to you. Reply 1988 is the K-drama Suzume would recommend if it could: a coming-of-age story about the specific grief of leaving childhood behind, rendered with extraordinary tenderness.' },
      { showId: 'twenty-five-twenty-one', whyYoullLove: 'A young woman in 1998 faces a collapsing economy, a sport she loves, and the question of whether the future is still worth believing in. Twenty-Five Twenty-One is Suzume\'s Korean cousin: a story about surviving what the world does to your plans, and finding that the thing that saved you isn\'t the thing you expected.' },
      { showId: 'move-to-heaven', whyYoullLove: 'An autistic young man and his rough uncle clean up the belongings of deceased people — and discover the stories they left behind. Move to Heaven is Suzume\'s emotional equivalent: each episode uses what people left behind to understand what they went through, and to grieve in a way that feels like celebration. Devastating and healing at the same time.' },
      { showId: 'our-beloved-summer', whyYoullLove: 'Two people who broke up years ago are forced to revisit their shared past through a documentary crew — and discover what they lost was more than they knew. Our Beloved Summer is Suzume\'s quieter cousin: the same quality of a story about two people discovering that the thing they thought was over was actually the thing that mattered most.' },
      { showId: 'our-blues', whyYoullLove: 'An anthology on Jeju Island following the women of a fishing village through life, love, loss, and second chances. Our Blues has Suzume\'s quality of treating grief without euphemism — the show knows exactly what it\'s doing when it lets its characters be sad, and trusts you to understand that being sad is part of being alive.' }
    ],
    relatedPages: [
      { slug: 'shows-like-alice-in-borderland', title: 'Alice in Borderland' },
      { slug: 'shows-like-little-women', title: 'Little Women' },
      { slug: 'shows-like-godzilla-minus-one', title: 'Godzilla Minus One' },
      { slug: 'shows-like-virgin-river', title: 'Virgin River' }
    ]
  }
];

// ============================================
// PROGRAMMATIC SEO LIST PAGES — "Best K-Dramas for [Show] Fans"
// Auto-generated pages targeting: dramamatch.app/lists/best-kdramas-for-{id}-fans
// Top 100 Western shows indexed in sitemap; engine handles all 700+
// ============================================

const LIST_TOP_SHOWS = [
  'breaking-bad', 'game-of-thrones', 'stranger-things', 'succession', 'ozark',
  'peaky-blinders', 'better-call-saul', 'true-detective', 'mindhunter', 'the-wire',
  'dexter', 'the-sopranos', 'mr-robot', 'fargo', 'narcos',
  'prison-break', 'the-blacklist', 'criminal-minds', 'hannibal', 'sherlock',
  'the-good-wife', 'house', 'greys-anatomy', 'bridgerton', 'outlander',
  'the-crown', 'downton-abbey', 'gilmore-girls', 'this-is-us', 'the-handmaids-tale',
  'sex-and-the-city', 'gossip-girl', 'emily-in-paris', 'virgin-river', 'normal-people',
  'big-little-lies', 'euphoria', 'killing-eve', 'the-queens-gambit', 'yellowjackets',
  'the-last-of-us', 'wednesday', 'reacher', 'the-boys', 'severance',
  'the-bear', 'ted-lasso', 'abbott-elementary', 'schitts-creek', 'fleabag',
  'the-office', 'friends', 'brooklyn-nine-nine', 'parks-and-recreation', 'how-i-met-your-mother',
  'new-girl', 'the-big-bang-theory', 'seinfeld', 'modern-family', 'the-good-place',
  'black-mirror', 'westworld', 'dark', 'lost', 'the-witcher',
  'the-umbrella-academy', 'shadow-and-bone', 'arcane', 'the-haunting-of-hill-house', 'american-horror-story',
  'supernatural', 'buffy-the-vampire-slayer', 'penny-dreadful', 'vampire-diaries', 'good-omens',
  'suits', 'scandal', 'how-to-get-away-with-murder', 'homeland', 'bodyguard',
  'broadchurch', 'mare-of-easttown', 'line-of-duty', 'happy-valley', 'luther',
  'the-night-manager', 'the-fall', 'shetland', 'the-americans', 'yellowstone',
  'lupin', 'money-heist', 'elite', 'only-murders-in-the-building', 'psych',
  'the-mandalorian', 'loki', 'wandavision', 'shogun', 'the-great'
];

// ── Drama → List Pages reverse index ──────────────────────────────────────
// Maps drama ID → [{slug, westernTitle}] for "fans of X also love this" links
// Built once at startup; recommendations are cached so this runs fast on warm hits.
const DRAMA_TO_LIST_PAGES = new Map();
(function buildDramaListIndex() {
  LIST_TOP_SHOWS.forEach(westernId => {
    try {
      const result = engine.getRecommendations(westernId, 10);
      if (result.error || !result.recommendations || !result.source) return;
      const westernTitle = result.source.title;
      result.recommendations.forEach(r => {
        const dramaId = r.show && r.show.id;
        if (!dramaId) return;
        if (!DRAMA_TO_LIST_PAGES.has(dramaId)) DRAMA_TO_LIST_PAGES.set(dramaId, []);
        DRAMA_TO_LIST_PAGES.get(dramaId).push({
          slug: `lists/best-kdramas-for-${westernId}-fans`,
          westernTitle
        });
      });
    } catch (e) { /* skip on error */ }
  });
})();
// ──────────────────────────────────────────────────────────────────────────

// ============================================
// REVERSE PROGRAMMATIC SEO — "Western Shows Like [K-Drama]"
// Auto-generated pages: /lists/western-shows-like-{kdramaId}
// ============================================

const REVERSE_LIST_TOP_SHOWS = [
  // Task heavy hitters
  'crash-landing-on-you', 'goblin', 'vincenzo', 'squid-game-s2', 'reply-1988',
  'itaewon-class', 'my-love-from-the-star', 'descendants-of-the-sun', 'all-of-us-are-dead', 'sweet-home',
  // Top romance / melodrama
  'boys-over-flowers', 'what-is-love', 'my-id-is-gangnam-beauty', 'strong-woman-do-bong-soon',
  'business-proposal', 'queen-of-tears', 'my-demon', 'the-glory',
  // Crime / thriller
  'signal', 'stranger', 'beyond-evil', 'mouse', 'juvenile-justice', 'through-the-darkness',
  'taxi-driver', 'my-name',
  // Fantasy / supernatural
  'hotel-del-luna', 'kingdom', 'mr-sunshine', 'alchemy-of-souls',
  // Workplace / slice of life
  'extraordinary-attorney-woo', 'misaeng', 'sky-castle', 'hot-stove-league', 'start-up',
  // Streaming hits
  'twenty-five-twenty-one', 'our-beloved-summer', 'nevertheless', 'nevertheless-2021',
  'reply-1997', 'reply-1994', 'nevertheless-kdrama',
  // Action / military
  'vagabond', 'lawless-lawyer', 'the-king-eternal-monarch', 'money-flower'
];

// Western show → which reverse list pages recommend it (for internal links on match pages)
const WESTERN_TO_REVERSE_PAGES = new Map();
(function buildReverseListIndex() {
  REVERSE_LIST_TOP_SHOWS.forEach(kdramaId => {
    try {
      const result = engine.getWesternRecommendations(kdramaId, 10);
      if (result.error || !result.recommendations || !result.source) return;
      const dramaTitle = result.source.title;
      result.recommendations.forEach(r => {
        const westernId = r.show && r.show.id;
        if (!westernId) return;
        if (!WESTERN_TO_REVERSE_PAGES.has(westernId)) WESTERN_TO_REVERSE_PAGES.set(westernId, []);
        WESTERN_TO_REVERSE_PAGES.get(westernId).push({
          slug: `lists/western-shows-like-${kdramaId}`,
          dramaTitle
        });
      });
    } catch (e) { /* skip on error */ }
  });
})();
// ──────────────────────────────────────────────────────────────────────────

/**
 * Extract clean show title from comparison page h1
 * Handles: "Shows Like Bridgerton — ...", "If You Loved Succession, Watch These K-Dramas"
 */
function extractComparisonTitle(h1, slug) {
  // "Shows Like X — ..." format
  const showsLikeMatch = h1.match(/^Shows Like\s+(.+?)(?:\s*[—–-]\s*|$)/i);
  if (showsLikeMatch) return showsLikeMatch[1].trim();
  // "If You Loved X, Watch..." format
  const lovedMatch = h1.match(/If You Loved\s+(.+?),/i);
  if (lovedMatch) return lovedMatch[1].trim();
  // Fallback: derive from slug
  return slug.replace('shows-like-', '').replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase());
}

/**
 * API: List all comparison pages for navigation/discovery
 * GET /api/comparison-pages
 */
app.get('/api/comparison-pages', (req, res) => {
  // Group comparison pages by category for organized display
  const categories = {
    'Romance & Family': [],
    'Crime & Detective': [],
    'Power & Drama': [],
    'Sci-Fi & Fantasy': [],
    'Comedy & Slice of Life': [],
    'Action & Thriller': [],
    'Japanese & Anime': []
  };

  const categoryMap = {
    'shows-like-bridgerton': 'Romance & Family',
    'shows-like-virgin-river': 'Romance & Family',
    'shows-like-when-calls-the-heart': 'Romance & Family',
    'shows-like-this-is-us': 'Romance & Family',
    'shows-like-outlander': 'Romance & Family',
    'shows-like-ransom-canyon': 'Romance & Family',
    'shows-like-little-women': 'Romance & Family',
    'shows-like-criminal-minds': 'Crime & Detective',
    'shows-like-true-detective': 'Crime & Detective',
    'shows-like-mindhunter': 'Crime & Detective',
    'shows-like-dexter': 'Crime & Detective',
    'shows-like-sherlock': 'Crime & Detective',
    'shows-like-ncis': 'Crime & Detective',
    'shows-like-law-and-order': 'Crime & Detective',
    'shows-like-succession': 'Power & Drama',
    'shows-like-breaking-bad': 'Power & Drama',
    'shows-like-game-of-thrones': 'Power & Drama',
    'shows-like-the-penguin': 'Power & Drama',
    'shows-like-euphoria': 'Power & Drama',
    'shows-like-marshals': 'Action & Thriller',
    'shows-like-stranger-things': 'Sci-Fi & Fantasy',
    'shows-like-the-office': 'Comedy & Slice of Life',
    'shows-like-the-bear': 'Comedy & Slice of Life',
    'shows-like-cobra-kai': 'Action & Thriller',
    'shows-like-alice-in-borderland': 'Japanese & Anime',
    'shows-like-godzilla-minus-one': 'Japanese & Anime',
    'shows-like-suzume': 'Japanese & Anime'
  };

  const pages = COMPARISON_PAGES.map(p => {
    const sourceShow = engine.getShowDetails(p.sourceShowId);
    const displayTitle = extractComparisonTitle(p.h1, p.slug);
    return {
      slug: p.slug,
      title: displayTitle,
      sourceShowId: p.sourceShowId,
      metaDescription: p.metaDescription,
      pickCount: (p.curatedPicks || []).length,
      category: categoryMap[p.slug] || 'More Shows'
    };
  });

  // Group by category
  pages.forEach(p => {
    if (categories[p.category]) {
      categories[p.category].push(p);
    } else {
      if (!categories['More Shows']) categories['More Shows'] = [];
      categories['More Shows'].push(p);
    }
  });

  // Filter out empty categories
  const grouped = {};
  for (const [cat, items] of Object.entries(categories)) {
    if (items.length > 0) grouped[cat] = items;
  }

  res.json({ success: true, pages, grouped, total: pages.length });
});

/**
 * Shows Like Index Page — browse all comparison pages
 * GET /shows-like
 */
app.get('/shows-like', (req, res) => {
  const categoryMap = {
    'shows-like-bridgerton': 'Romance & Family',
    'shows-like-virgin-river': 'Romance & Family',
    'shows-like-when-calls-the-heart': 'Romance & Family',
    'shows-like-this-is-us': 'Romance & Family',
    'shows-like-outlander': 'Romance & Family',
    'shows-like-ransom-canyon': 'Romance & Family',
    'shows-like-little-women': 'Romance & Family',
    'shows-like-criminal-minds': 'Crime & Detective',
    'shows-like-true-detective': 'Crime & Detective',
    'shows-like-mindhunter': 'Crime & Detective',
    'shows-like-dexter': 'Crime & Detective',
    'shows-like-sherlock': 'Crime & Detective',
    'shows-like-ncis': 'Crime & Detective',
    'shows-like-law-and-order': 'Crime & Detective',
    'shows-like-succession': 'Power & Drama',
    'shows-like-breaking-bad': 'Power & Drama',
    'shows-like-game-of-thrones': 'Power & Drama',
    'shows-like-the-penguin': 'Power & Drama',
    'shows-like-euphoria': 'Power & Drama',
    'shows-like-marshals': 'Action & Thriller',
    'shows-like-stranger-things': 'Sci-Fi & Fantasy',
    'shows-like-the-office': 'Comedy & Slice of Life',
    'shows-like-the-bear': 'Comedy & Slice of Life',
    'shows-like-cobra-kai': 'Action & Thriller',
    'shows-like-alice-in-borderland': 'Japanese & Anime',
    'shows-like-godzilla-minus-one': 'Japanese & Anime',
    'shows-like-suzume': 'Japanese & Anime'
  };

  const categories = {};
  const order = ['Romance & Family', 'Crime & Detective', 'Power & Drama', 'Sci-Fi & Fantasy', 'Comedy & Slice of Life', 'Action & Thriller', 'Japanese & Anime'];
  order.forEach(c => { categories[c] = []; });

  COMPARISON_PAGES.forEach(p => {
    const displayTitle = extractComparisonTitle(p.h1, p.slug);
    const cat = categoryMap[p.slug] || 'More Shows';
    if (!categories[cat]) categories[cat] = [];
    categories[cat].push({
      slug: p.slug,
      title: displayTitle,
      pickCount: (p.curatedPicks || []).length
    });
  });

  // Filter out empty categories
  const grouped = {};
  for (const [cat, items] of Object.entries(categories)) {
    if (items.length > 0) grouped[cat] = items;
  }

  const html = seo.showsLikeIndexPage(grouped);
  res.type('html').send(html);
});

/**
 * SEO Comparison Pages — /shows-like-:slug
 * Each page targets "shows like [X]" long-tail keywords
 */
app.get('/shows-like-:slug', (req, res) => {
  const pageSlug = `shows-like-${req.params.slug}`;
  const config = COMPARISON_PAGES.find(p => p.slug === pageSlug);
  if (!config) {
    return res.status(404).send('<h1>Page not found</h1>');
  }

  // Fetch extra results to ensure curated picks (which may rank lower) are included
  const result = engine.getRecommendations(config.sourceShowId, 100);
  if (result.error) {
    return res.status(404).send('<h1>Show not found</h1>');
  }

  // Supplement recommendations with curated picks not returned by the engine
  // (e.g. cross-type picks: Western shows on a K-drama source page, or vice versa)
  let recommendations = result.recommendations;
  if (config.curatedPicks && config.curatedPicks.length > 0) {
    const existingIds = new Set(recommendations.map(r => r.show.id));
    const supplemental = [];
    for (const pick of config.curatedPicks) {
      if (!existingIds.has(pick.showId)) {
        const showDetails = engine.getShowDetails(pick.showId);
        if (showDetails) {
          supplemental.push({ show: showDetails, matchScore: 50, reasoning: pick.whyYoullLove });
        }
      }
    }
    if (supplemental.length > 0) {
      recommendations = [...supplemental, ...recommendations];
    }
  }

  const html = seo.comparisonPage(config, result.source, recommendations);
  if (!html) return res.status(404).send('<h1>Page not found</h1>');
  res.type('html').send(html);
});

// ============================================
// PROGRAMMATIC SEO LIST PAGES — /lists/best-kdramas-for-{showId}-fans
// ============================================

/**
 * List index — browse all "Best K-Dramas for X Fans" pages
 * GET /lists
 */
app.get('/lists', (req, res) => {
  const westernShows = require('./data/western-shows');
  const westernMovies = require('./data/western-movies');
  const all = [...westernShows, ...westernMovies];
  // Only include shows that have recommendations
  const shows = LIST_TOP_SHOWS
    .map(id => all.find(s => s.id === id))
    .filter(Boolean);
  const html = seo.listIndexPage(shows);
  if (!html) return res.status(500).send('<h1>Error generating page</h1>');
  res.type('html').send(html);
});

/**
 * Unified list page handler — covers all /lists/* slug patterns:
 *   - "western"                          → reverse list index
 *   - "best-kdramas-for-{showId}-fans"  → K-dramas for Western fans
 *   - "western-shows-like-{kdramaId}"   → Western shows for K-drama fans
 * GET /lists/:slug
 */
app.get('/lists/:slug', (req, res) => {
  const slug = req.params.slug;

  // Pattern 0: reverse list index
  if (slug === 'western') {
    const allKdramas = [
      ...require('./data/kdramas'),
      ...require('./data/kdramas-batch-f-2026'),
      ...require('./data/kdramas-comedies-2026'),
      ...require('./data/kdramas-comedies-batch2-2026')
    ];
    const shows = REVERSE_LIST_TOP_SHOWS
      .map(id => allKdramas.find(s => s.id === id))
      .filter(Boolean)
      .map(s => ({ ...s, type: s.type || 'kdrama' }));
    const html = seo.reverseListIndexPage(shows);
    if (!html) return res.status(500).send('<h1>Error generating page</h1>');
    return res.type('html').send(html);
  }

  // Pattern 1: reverse list — "western-shows-like-{kdramaId}"
  const reverseMatch = slug.match(/^western-shows-like-(.+)$/);
  if (reverseMatch) {
    const kdramaId = reverseMatch[1];
    const result = engine.getWesternRecommendations(kdramaId, 10);
    if (result.error || !result.source) {
      return res.status(404).send('<h1>Show not found</h1>');
    }
    const html = seo.reverseListPage(slug, result.source, result.recommendations);
    if (!html) return res.status(404).send('<h1>Page not found</h1>');
    return res.type('html').send(html);
  }

  // Pattern 2: forward list — "best-kdramas-for-{showId}-fans"
  const forwardMatch = slug.match(/^best-kdramas-for-(.+)-fans$/);
  if (!forwardMatch) {
    return res.status(404).send('<h1>Page not found</h1>');
  }
  const showId = forwardMatch[1];
  const result = engine.getRecommendations(showId, 10);
  if (result.error || !result.source) {
    return res.status(404).send('<h1>Show not found</h1>');
  }
  // Only render list pages for Western shows/movies (not K-dramas as source)
  const sourceType = result.source.type;
  if (sourceType && sourceType !== 'western' && sourceType !== 'western-movie') {
    return res.status(404).send('<h1>Page not found</h1>');
  }
  const html = seo.listPage(slug, result.source, result.recommendations);
  if (!html) return res.status(404).send('<h1>Page not found</h1>');
  res.type('html').send(html);
});

// ============================================
// SEO — Server-rendered pages for crawlers & AI
// ============================================

/**
 * XML Sitemap covering every indexable URL
 * GET /sitemap.xml
 */
app.get('/sitemap.xml', (req, res) => {
  // Use the engine's full catalog — includes all batch files, always up to date
  const allCatalog = engine.getAllShows();
  const moods = engine.getMoods();

  // Drama page types (served at /drama/:id)
  const dramaTypes = new Set(['kdrama', 'kmovie', 'cdrama', 'jdrama', 'jmovie', 'anime', 'anime-movie']);
  // Match page types (every show has a /match/:id page)
  const asianTypes = new Set(['kdrama', 'kmovie', 'cdrama', 'jdrama', 'jmovie', 'anime', 'anime-movie']);
  const westernTypes = new Set(['western', 'western-movie']);

  // Collect unique actors from all Asian content
  const actors = new Set();
  allCatalog.forEach(s => {
    if (asianTypes.has(s.type)) {
      (s.actors || []).forEach(a => actors.add(a.name));
    }
  });

  const now = new Date().toISOString().split('T')[0];
  const base = seo.BASE_URL;

  const urls = [];

  // Homepage
  urls.push({ loc: base, priority: '1.0', changefreq: 'daily' });

  // Drama detail pages — K-dramas at 0.9, all others at 0.85
  allCatalog.forEach(s => {
    if (!dramaTypes.has(s.type)) return;
    const priority = s.type === 'kdrama' ? '0.9' : '0.85';
    urls.push({ loc: `${base}/drama/${s.id}`, priority, changefreq: 'monthly' });
  });

  // Match pages — Western shows/movies at 0.8, Asian content at 0.75
  allCatalog.forEach(s => {
    const priority = westernTypes.has(s.type) || s.type === 'kdrama' ? '0.8' : '0.75';
    urls.push({ loc: `${base}/match/${s.id}`, priority, changefreq: 'monthly' });
  });

  // Mood category pages
  moods.forEach(m => {
    urls.push({ loc: `${base}/mood/${m.id}`, priority: '0.7', changefreq: 'weekly' });
  });

  // Actor pages — all unique actors from Asian content (/actor/:slug)
  Array.from(actors).forEach(name => {
    const slug = name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
    urls.push({ loc: `${base}/actor/${slug}`, priority: '0.6', changefreq: 'monthly' });
  });

  // Blog index
  urls.push({ loc: `${base}/blog`, priority: '0.9', changefreq: 'weekly' });

  // Individual blog posts
  BLOG_POSTS.forEach(post => {
    urls.push({ loc: `${base}/blog/${post.slug}`, priority: '0.85', changefreq: 'monthly' });
  });

  // Shows Like index page
  urls.push({ loc: `${base}/shows-like`, priority: '0.90', changefreq: 'weekly' });

  // SEO Comparison pages — "Shows Like [X]"
  COMPARISON_PAGES.forEach(page => {
    urls.push({ loc: `${base}/${page.slug}`, priority: '0.85', changefreq: 'monthly' });
  });

  // Programmatic list pages — "Best K-Dramas for [Show] Fans"
  urls.push({ loc: `${base}/lists`, priority: '0.90', changefreq: 'weekly' });
  LIST_TOP_SHOWS.forEach(showId => {
    urls.push({ loc: `${base}/lists/best-kdramas-for-${showId}-fans`, priority: '0.85', changefreq: 'monthly' });
  });

  // Reverse programmatic list pages — "Top Western Shows for [K-Drama] Fans"
  urls.push({ loc: `${base}/lists/western`, priority: '0.90', changefreq: 'weekly' });
  REVERSE_LIST_TOP_SHOWS.forEach(kdramaId => {
    urls.push({ loc: `${base}/lists/western-shows-like-${kdramaId}`, priority: '0.85', changefreq: 'monthly' });
  });

  // Static pages
  urls.push({ loc: `${base}/about`, priority: '0.70', changefreq: 'monthly' });
  urls.push({ loc: `${base}/actors`, priority: '0.80', changefreq: 'monthly' });
  urls.push({ loc: `${base}/meteor-garden-f4`, priority: '0.75', changefreq: 'monthly' });
  urls.push({ loc: `${base}/pursuit-of-jade`, priority: '0.85', changefreq: 'monthly' });

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map(u => `  <url>
    <loc>${u.loc}</loc>
    <lastmod>${now}</lastmod>
    <changefreq>${u.changefreq}</changefreq>
    <priority>${u.priority}</priority>
  </url>`).join('\n')}
</urlset>`;

  res.type('application/xml').send(xml);
});

// ============================================
// COMMENTS API
// ============================================

/**
 * Get comments for a show
 * GET /api/comments/:showSlug
 */
app.get('/api/comments/:showSlug', async (req, res) => {
  const { showSlug } = req.params;
  if (!pool) return res.json({ success: true, comments: [], count: 0 });
  try {
    const result = await pool.query(
      `SELECT id, display_name, comment_text, created_at
         FROM show_comments
        WHERE show_slug = $1
        ORDER BY created_at DESC
        LIMIT 100`,
      [showSlug]
    );
    res.json({ success: true, comments: result.rows, count: result.rows.length });
  } catch (err) {
    res.json({ success: true, comments: [], count: 0 });
  }
});

/**
 * Post a comment for a show
 * POST /api/comments/:showSlug
 */
app.post('/api/comments/:showSlug', async (req, res) => {
  const { showSlug } = req.params;
  const { display_name, comment_text, website } = req.body || {};

  // Honeypot: if website field is filled, silently reject
  if (website && website.trim().length > 0) {
    return res.json({ success: true, comment: null });
  }

  // Validate inputs
  const name = (display_name || '').trim().substring(0, 60);
  const text = (comment_text || '').trim().substring(0, 500);
  if (!name || name.length < 1) {
    return res.status(400).json({ success: false, message: 'Display name is required.' });
  }
  if (!text || text.length < 2) {
    return res.status(400).json({ success: false, message: 'Comment is too short.' });
  }

  // Rate limit: max 3 comments per IP per hour
  const ip = req.headers['x-forwarded-for']?.split(',')[0]?.trim() || req.connection?.remoteAddress || 'unknown';
  const ipHash = hashIP(ip);
  const now = Date.now();
  const oneHour = 60 * 60 * 1000;
  const recent = (commentRateLimits.get(ipHash) || []).filter(ts => now - ts < oneHour);
  if (recent.length >= 3) {
    return res.status(429).json({ success: false, message: 'You\'ve posted too many comments. Try again in an hour.' });
  }
  // Update rate limit bucket
  recent.push(now);
  commentRateLimits.set(ipHash, recent);

  if (!pool) {
    return res.status(503).json({ success: false, message: 'Comments unavailable right now.' });
  }

  try {
    const result = await pool.query(
      `INSERT INTO show_comments (show_slug, display_name, comment_text, ip_hash, created_at)
       VALUES ($1, $2, $3, $4, NOW())
       RETURNING id, display_name, comment_text, created_at`,
      [showSlug, name, text, ipHash]
    );
    res.json({ success: true, comment: result.rows[0] });
  } catch (err) {
    console.error('[Comments] Insert error:', err.message);
    res.status(500).json({ success: false, message: 'Failed to save comment.' });
  }
});

/**
 * K-drama detail page (server-rendered HTML with schema.org)
 * GET /drama/:id
 */
app.get('/drama/:id', async (req, res) => {
  const show = engine.getShowDetails(req.params.id);
  if (!show || (show.type !== 'kdrama' && show.type !== 'kmovie' && show.type !== 'cdrama' && show.type !== 'jdrama' && show.type !== 'jmovie' && show.type !== 'anime' && show.type !== 'anime-movie')) {
    return res.status(404).send('<h1>Show not found</h1>');
  }
  // Get similar K-dramas for "You Might Also Like" section
  const similarResult = engine.getRecommendations(req.params.id, 8);
  const similar = (!similarResult.error && similarResult.recommendations) ? similarResult.recommendations : [];
  // Find comparison pages where this drama is featured as a curated pick
  const relatedComparisonPages = COMPARISON_PAGES.filter(p =>
    (p.curatedPicks || []).some(pick => pick.showId === req.params.id)
  ).map(p => ({
    slug: p.slug,
    title: extractComparisonTitle(p.h1, p.slug)
  }));
  // Fetch comments for this show
  let comments = [];
  if (pool) {
    try {
      const commentResult = await pool.query(
        `SELECT id, display_name, comment_text, created_at
           FROM show_comments
          WHERE show_slug = $1
          ORDER BY created_at DESC
          LIMIT 100`,
        [req.params.id]
      );
      comments = commentResult.rows;
    } catch (e) {
      // non-fatal — just show no comments
    }
  }
  const html = seo.dramePage(show, similar, relatedComparisonPages, comments);
  if (!html) return res.status(404).send('<h1>Show not found</h1>');
  res.type('html').send(html);
});

/**
 * "K-dramas like [Western show]" match page (server-rendered HTML)
 * GET /match/:sourceId
 */
app.get('/match/:sourceId', (req, res) => {
  const dir = ['western', 'asian'].includes(req.query.dir) ? req.query.dir : 'auto';
  const result = engine.getRecommendations(req.params.sourceId, 10, dir);
  if (result.error) {
    return res.status(404).send('<h1>Show not found</h1>');
  }
  // Get 4 related Western shows for cross-linking
  const relatedShows = engine.getRelatedWesternShows(req.params.sourceId, 4);
  // Check if there's a matching blog post for this show
  const blogPost = BLOG_POSTS.find(p => p.westernShowId === req.params.sourceId) || null;
  // Check if there's a dedicated comparison page for this show
  const comparisonPageConfig = COMPARISON_PAGES.find(p => p.sourceShowId === req.params.sourceId) || null;
  // Check if there's a programmatic list page for this show (western shows only)
  const sourceType = result.source && result.source.type;
  const listPageSlug = (sourceType === 'western' || sourceType === 'western-movie')
    ? `lists/best-kdramas-for-${req.params.sourceId}-fans`
    : REVERSE_LIST_TOP_SHOWS.includes(req.params.sourceId)
      ? `lists/western-shows-like-${req.params.sourceId}`
      : null;
  let html = seo.matchPage(result.source, result.recommendations, relatedShows, blogPost, comparisonPageConfig, listPageSlug);
  if (!html) return res.status(404).send('<h1>Page not found</h1>');

  // Inject direction toggle into the SSR match page
  const activeDir = result.direction || (dir !== 'auto' ? dir : 'asian');
  const showId = req.params.sourceId;
  const toggleSnippet = `
<style>
  #match-dir-toggle{display:flex;align-items:center;justify-content:center;gap:.5rem;margin:1.25rem auto 1.5rem;flex-wrap:wrap}
  .mdt-label{font-size:.8rem;color:#5a5750;text-transform:uppercase;letter-spacing:.06em}
  .mdt-btn{display:inline-flex;align-items:center;gap:.35rem;padding:.4rem .9rem;border-radius:999px;border:1.5px solid rgba(255,255,255,.1);background:transparent;color:#a09c94;font-size:.85rem;font-family:inherit;cursor:pointer;transition:all .18s ease;white-space:nowrap;text-decoration:none}
  .mdt-btn:hover{border-color:#e8614d;color:#e8614d}
  .mdt-btn.active{background:#e8614d;border-color:#e8614d;color:#fff;font-weight:600}
</style>
<div id="match-dir-toggle">
  <span class="mdt-label">Show me</span>
  <a class="mdt-btn ${activeDir==='asian'?'active':''}" href="/match/${showId}?dir=asian">🌏 Asian Dramas</a>
  <a class="mdt-btn ${activeDir==='western'?'active':''}" href="/match/${showId}?dir=western">🌎 Western Shows</a>
</div>
<script>
(function(){
  var t=document.getElementById('match-dir-toggle');
  if(!t)return;
  // Find a good anchor: first h1 or the first section heading
  var h1=document.querySelector('h1,h2.match-title,.match-heading');
  if(h1&&h1.parentNode){h1.parentNode.insertBefore(t,h1.nextSibling);}
  else{var body=document.querySelector('main,.main-content,article,body');if(body)body.prepend(t);}
})();
</script>`;
  html = html.replace('</body>', toggleSnippet + '\n</body>');
  res.type('html').send(html);
});

/**
 * Mood category page (server-rendered HTML)
 * GET /mood/:moodId
 */
app.get('/mood/:moodId', (req, res) => {
  const result = engine.getMoodRecommendations(req.params.moodId, 12);
  if (result.error) {
    return res.status(404).send('<h1>Mood not found</h1>');
  }
  const html = seo.moodPage(result.source, result.recommendations);
  if (!html) return res.status(404).send('<h1>Page not found</h1>');
  res.type('html').send(html);
});

// ============================================
// LANGUAGE PREFIX ROUTES — i18n SEO (/ko/, /ja/, /zh/)
// Serve the same index.html; client-side i18n.js detects path prefix and applies language.
// ============================================
function serveIndexWithLang(req, res) {
  const slug = process.env.POLSIA_ANALYTICS_SLUG || '';
  const htmlPath = path.join(__dirname, 'public', 'index.html');
  if (fs.existsSync(htmlPath)) {
    let html = fs.readFileSync(htmlPath, 'utf8');
    html = html.replace('__POLSIA_SLUG__', slug);
    // Inject hreflang link elements for SEO
    const hreflang = [
      '<link rel="alternate" hreflang="en" href="https://dramamatch.app/">',
      '<link rel="alternate" hreflang="ko" href="https://dramamatch.app/ko/">',
      '<link rel="alternate" hreflang="ja" href="https://dramamatch.app/ja/">',
      '<link rel="alternate" hreflang="zh-Hans" href="https://dramamatch.app/zh/">',
      '<link rel="alternate" hreflang="x-default" href="https://dramamatch.app/">'
    ].join('\n    ');
    html = html.replace('</head>', '    ' + hreflang + '\n</head>');
    res.type('html').send(html);
  } else {
    res.status(404).send('<h1>Not Found</h1>');
  }
}

app.get('/ko', serveIndexWithLang);
app.get('/ko/', serveIndexWithLang);
app.get('/ja', serveIndexWithLang);
app.get('/ja/', serveIndexWithLang);
app.get('/zh', serveIndexWithLang);
app.get('/zh/', serveIndexWithLang);

// ============================================
// LANDING PAGE (with analytics beacon)
// ============================================
app.get('/', (req, res) => {
  const slug = process.env.POLSIA_ANALYTICS_SLUG || '';
  const htmlPath = path.join(__dirname, 'public', 'index.html');

  if (fs.existsSync(htmlPath)) {
    let html = fs.readFileSync(htmlPath, 'utf8');
    html = html.replace('__POLSIA_SLUG__', slug);
    res.type('html').send(html);
  } else {
    res.json({ message: 'DramaMatch API', endpoints: ['/api/search', '/api/recommend/:showId', '/api/featured'] });
  }
});

// ============================================
// POPULAR TITLES — full Asian catalog, text-only quick add
// ============================================

app.get('/api/popular-titles', (req, res) => {
  const ASIAN_TYPES = ['kdrama', 'cdrama', 'jdrama', 'anime', 'kmovie', 'jmovie', 'anime-movie'];
  const CATEGORY_META = {
    kdrama:       { label: '🇰🇷 K-Dramas',  order: 0 },
    cdrama:       { label: '🇨🇳 C-Dramas',  order: 1 },
    jdrama:       { label: '🇯🇵 J-Dramas',  order: 2 },
    anime:        { label: '🎌 Anime',       order: 3 },
    kmovie:       { label: '🎥 K-Movies',   order: 4 },
    jmovie:       { label: '🎞 J-Movies',   order: 5 },
    'anime-movie':{ label: '🎬 Anime Films',order: 6 },
  };

  const allShows = engine.getAllShows();
  const buckets = {};
  ASIAN_TYPES.forEach(t => { buckets[t] = []; });

  allShows.forEach(show => {
    if (!ASIAN_TYPES.includes(show.type)) return;
    buckets[show.type].push({
      id: show.id,
      title: show.title,
      year: show.year || null,
      type: show.type,
      episodes: show.episodes || null,
      runtime: show.runtime || null,
      network: show.network || '',
      genres: (show.genres || []).slice(0, 3),
    });
  });

  // Sort each bucket alphabetically
  ASIAN_TYPES.forEach(t => {
    buckets[t].sort((a, b) => (a.title || '').localeCompare(b.title || ''));
  });

  const result = ASIAN_TYPES
    .map(t => ({ id: t, label: CATEGORY_META[t].label, shows: buckets[t] }))
    .filter(cat => cat.shows.length > 0);

  res.json({ success: true, categories: result });
});

// ============================================
// SHARED LISTS — permanent snapshots for sharing
// ============================================

function generateListId() {
  const chars = 'abcdefghijklmnopqrstuvwxyz0123456789';
  let id = '';
  for (let i = 0; i < 10; i++) id += chars.charAt(Math.floor(Math.random() * chars.length));
  return id;
}

app.post('/api/shared-list', async (req, res) => {
  if (!pool) return res.status(503).json({ error: 'Database unavailable — list sharing requires a database connection' });
  const { items, listTitle } = req.body || {};
  if (!Array.isArray(items) || items.length === 0) {
    return res.status(400).json({ error: 'items array required' });
  }
  try {
    let id = generateListId();
    for (let attempt = 0; attempt < 5; attempt++) {
      const existing = await pool.query('SELECT id FROM shared_lists WHERE id = $1', [id]);
      if (existing.rows.length === 0) break;
      id = generateListId();
    }
    const data = {
      items: items.slice(0, 200),
      listTitle: (listTitle || '').substring(0, 120)
    };
    await pool.query('INSERT INTO shared_lists (id, data) VALUES ($1, $2)', [id, JSON.stringify(data)]);
    const base = process.env.BASE_URL || 'https://dramamatch.app';
    const url = `${base}/list/${id}`;
    res.json({ success: true, id, url });
  } catch (err) {
    console.error('[shared-list] POST error:', err.message);
    res.status(500).json({ error: 'Failed to save shared list' });
  }
});

app.get('/api/shared-list/:id', async (req, res) => {
  if (!pool) return res.status(503).json({ error: 'Database unavailable' });
  const { id } = req.params;
  if (!id || !/^[a-z0-9]{8,16}$/.test(id)) return res.status(404).json({ error: 'Not found' });
  try {
    const result = await pool.query(
      'SELECT id, data, created_at FROM shared_lists WHERE id = $1', [id]
    );
    if (!result.rows.length) return res.status(404).json({ error: 'List not found' });
    const row = result.rows[0];
    res.json({ success: true, id: row.id, data: row.data, createdAt: row.created_at });
  } catch (err) {
    console.error('[shared-list] GET error:', err.message);
    res.status(500).json({ error: 'Failed to fetch shared list' });
  }
});

app.get('/list/:id', (req, res) => {
  const htmlPath = path.join(__dirname, 'public', 'list.html');
  if (fs.existsSync(htmlPath)) {
    res.type('html').sendFile(htmlPath);
  } else {
    res.status(404).send('<h1>Page not found</h1>');
  }
});

app.get('/popular', (req, res) => {
  const htmlPath = path.join(__dirname, 'public', 'popular.html');
  if (fs.existsSync(htmlPath)) {
    res.type('html').sendFile(htmlPath);
  } else {
    res.status(404).send('<h1>Page not found</h1>');
  }
});

// ============================================
// HELPERS
// ============================================
function hashIP(ip) {
  if (!ip) return 'unknown';
  // Simple hash for privacy
  let hash = 0;
  for (let i = 0; i < ip.length; i++) {
    const char = ip.charCodeAt(i);
    hash = ((hash << 5) - hash) + char;
    hash = hash & hash;
  }
  return Math.abs(hash).toString(36);
}

// ============================================
// START
// ============================================
app.listen(port, () => {
  const stats = engine.getStats();
  console.log(`DramaMatch running on port ${port}`);
  console.log(`Catalog: ${stats.totalKdramas} K-dramas, ${stats.totalWesternShows} Western shows, ${stats.totalKoreanMovies} K-movies, ${stats.totalWesternMovies} Western movies, ${stats.totalCdramas} C-dramas (${stats.totalShows} total)`);

  // Start background poster resolution (fetches missing poster images from TVmaze)
  // Delayed 10s to let server handle initial traffic first
  setTimeout(() => {
    const allShows = engine.getAllShows();
    startBackgroundResolver(allShows);
  }, 10000);

  // Ping Google & Bing to trigger sitemap re-crawl (production only, 15s after startup)
  if (process.env.BASE_URL) {
    const https = require('https');
    const sitemapUrl = encodeURIComponent(`${seo.BASE_URL}/sitemap.xml`);
    setTimeout(() => {
      https.get(`https://www.google.com/ping?sitemap=${sitemapUrl}`, r => { r.resume(); }).on('error', () => {});
      https.get(`https://www.bing.com/ping?sitemap=${sitemapUrl}`, r => { r.resume(); }).on('error', () => {});
      console.log(`[SEO] Sitemap pinged: ${seo.BASE_URL}/sitemap.xml`);
    }, 15000);
  }
});
