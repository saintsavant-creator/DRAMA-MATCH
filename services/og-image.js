/**
 * OG Image Generator Service
 * Generates per-page OG images on demand (1200x630 PNG)
 * Falls back to og-default.png if sharp is not available
 */
const path = require('path');
const fs = require('fs');

const BASE_URL = 'https://dramamatch.app';
const PUBLIC_DIR = path.join(__dirname, '..', 'public');
const OG_DIR = path.join(PUBLIC_DIR, 'og');

// Brand colors
const CORAL = '#E8614D';
const CORAL2 = '#F08070';
const CREAM = '#FFF8F0';
const CREAM2 = '#FFF0E8';
const DARK = '#1A0A08';
const TEXT_SECONDARY = '#7A4030';

// ── Page title/subtitle registry ─────────────────────────────────────────────
// Covers all COMPARISON_PAGES (/shows-like-*) and BLOG_POSTS (/blog/*)
const OG_PAGE_REGISTRY = {
  // ── Comparison pages (shows-like-*) ─────────────────────────────────────
  'shows-like-bridgerton':            { title: 'K-Dramas Like Bridgerton',              subtitle: 'Period romance, forbidden love & Regency drama' },
  'shows-like-virgin-river':          { title: 'K-Dramas Like Virgin River',             subtitle: 'Small town romance, healing & emotional depth' },
  'shows-like-when-calls-the-heart':  { title: 'K-Dramas Like When Calls the Heart',     subtitle: 'Wholesome romance & frontier community stories' },
  'shows-like-this-is-us':            { title: 'K-Dramas Like This Is Us',               subtitle: 'Family drama, emotional depth & generational stories' },
  'shows-like-outlander':             { title: 'K-Dramas Like Outlander',                subtitle: 'Time travel, historical romance & epic adventure' },
  'shows-like-ransom-canyon':         { title: 'K-Dramas Like Ransom Canyon',            subtitle: 'Rural romance, drama & small-town passion' },
  'shows-like-little-women':          { title: 'K-Dramas Like Little Women',             subtitle: 'Sisters, ambition & timeless coming-of-age stories' },
  'shows-like-criminal-minds':        { title: 'K-Dramas Like Criminal Minds',           subtitle: 'Crime procedurals, psychological thrillers & detectives' },
  'shows-like-true-detective':        { title: 'K-Dramas Like True Detective',           subtitle: 'Dark crime mysteries with complex anti-heroes' },
  'shows-like-mindhunter':            { title: 'K-Dramas Like Mindhunter',               subtitle: 'Criminal psychology, investigation & moral complexity' },
  'shows-like-dexter':                { title: 'K-Dramas Like Dexter',                   subtitle: 'Dark anti-heroes, moral ambiguity & crime thrillers' },
  'shows-like-sherlock':              { title: 'K-Dramas Like Sherlock',                 subtitle: 'Genius detectives, clever mysteries & sharp writing' },
  'shows-like-ncis':                  { title: 'K-Dramas Like NCIS',                     subtitle: 'Team crime procedurals with strong ensemble casts' },
  'shows-like-law-and-order':         { title: 'K-Dramas Like Law & Order',              subtitle: 'Legal procedurals, justice & courtroom drama' },
  'shows-like-succession':            { title: 'K-Dramas Like Succession',               subtitle: 'Power, family dysfunction & corporate intrigue' },
  'shows-like-breaking-bad':          { title: 'K-Dramas Like Breaking Bad',             subtitle: 'Anti-hero transformation, moral descent & high stakes' },
  'shows-like-stranger-things':       { title: 'K-Dramas Like Stranger Things',          subtitle: 'Supernatural mystery, friendship & nostalgic thrills' },
  'shows-like-the-office':            { title: 'K-Dramas Like The Office',               subtitle: 'Workplace comedy, ensemble casts & relatable humor' },
  'shows-like-game-of-thrones':       { title: 'K-Dramas Like Game of Thrones',          subtitle: 'Epic political power struggles & fantasy drama' },
  'shows-like-euphoria':              { title: 'K-Dramas Like Euphoria',                 subtitle: 'Raw intensity, toxic love & dark coming-of-age drama' },
  'shows-like-marshals':              { title: 'K-Dramas Like Y: Marshals',              subtitle: 'Frontier justice, action & high-stakes crime drama' },
  'shows-like-the-bear':              { title: 'K-Dramas Like The Bear',                 subtitle: 'High-pressure workplace drama, passion & identity' },
  'shows-like-the-penguin':           { title: 'K-Dramas Like The Penguin',              subtitle: 'Crime dynasties, power & dark urban drama' },
  'shows-like-alice-in-borderland':   { title: 'K-Dramas Like Alice in Borderland',      subtitle: 'Survival games, alternate realities & high-stakes thrills' },
  'shows-like-cobra-kai':             { title: 'K-Dramas Like Cobra Kai',                subtitle: 'Redemption arcs, rivalry & martial arts drama' },
  'shows-like-godzilla-minus-one':    { title: 'K-Dramas Like Godzilla Minus One',       subtitle: 'Epic monster action, survival & human resilience' },
  'shows-like-suzume':                { title: 'K-Dramas Like Suzume',                   subtitle: 'Mystical journeys, loss & breathtaking animation' },
  'shows-like-squid-game':            { title: '10 K-Dramas Like Squid Game',            subtitle: 'Survival thrillers, class warfare & societal critique' },

  // ── Blog posts (/blog/*) ──────────────────────────────────────────────────
  'k-dramas-for-greys-anatomy-fans':  { title: "K-Dramas for Grey's Anatomy Fans",       subtitle: 'Medical dramas with heart, hospital romance & high stakes' },
  'k-dramas-like-peaky-blinders':     { title: 'K-Dramas Like Peaky Blinders',           subtitle: 'Crime dynasties, power & dark atmospheric drama' },
  'k-dramas-for-prison-break-fans':   { title: 'K-Dramas for Prison Break Fans',         subtitle: 'Action, escape thrillers & high-stakes suspense' },
  'k-dramas-for-breaking-bad-fans':   { title: 'K-Dramas for Breaking Bad Fans',         subtitle: 'Anti-hero moral descent, slow-burn crime & tension' },
  'k-dramas-like-stranger-things':    { title: 'K-Dramas Like Stranger Things',          subtitle: 'Supernatural mystery, 80s nostalgia & found family' },
  'k-dramas-like-game-of-thrones':    { title: 'K-Dramas Like Game of Thrones',          subtitle: 'Epic power struggles, political intrigue & fantasy' },
  'k-dramas-like-the-office':         { title: 'K-Dramas Like The Office',               subtitle: 'Workplace comedy, ensemble casts & relatable humor' },
  'k-dramas-like-bridgerton':         { title: 'K-Dramas Like Bridgerton',               subtitle: 'Period romance, forbidden love & lush historical drama' },
  'k-dramas-for-sherlock-fans':       { title: 'K-Dramas for Sherlock Fans',             subtitle: 'Genius detectives, clever mysteries & sharp wit' },
  'k-dramas-like-suits':              { title: 'K-Dramas Like Suits',                    subtitle: 'Legal drama, power dynamics & high-stakes careers' },
};

/** Escape XML special chars for SVG text content */
function esc(str) {
  if (!str) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

/** Split a title string into at most 2 lines */
function splitTitle(title) {
  const maxLineLen = 28;
  const words = title.split(' ');
  let line1 = '';
  let line2 = '';
  let lineBreakDone = false;
  let current = '';

  for (const word of words) {
    const test = current ? `${current} ${word}` : word;
    if (!lineBreakDone && test.length > maxLineLen) {
      line1 = current;
      current = word;
      lineBreakDone = true;
    } else {
      current = test;
    }
  }

  if (!line1) {
    line1 = current;
  } else {
    line2 = current;
  }

  return { line1, line2: line2.trim() };
}

/** Build an OG image SVG for a comparison/list page */
function buildComparisonSvg(title, subtitle) {
  const { line1, line2 } = splitTitle(title);
  const hasLine2 = line2.length > 0;

  const titleY1 = hasLine2 ? 230 : 270;
  const titleY2 = titleY1 + 74;
  const subtitleY = hasLine2 ? titleY2 + 60 : titleY1 + 72;
  const subText = subtitle && subtitle.length > 72 ? subtitle.substring(0, 71) + '…' : (subtitle || '');

  return `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <defs>
    <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:${CREAM}"/>
      <stop offset="100%" style="stop-color:${CREAM2}"/>
    </linearGradient>
    <linearGradient id="coral" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" style="stop-color:${CORAL}"/>
      <stop offset="100%" style="stop-color:${CORAL2}"/>
    </linearGradient>
  </defs>
  <rect width="1200" height="630" fill="url(#bg)"/>
  <circle cx="1150" cy="80" r="220" fill="${CORAL}" opacity="0.07"/>
  <circle cx="60" cy="580" r="160" fill="${CORAL}" opacity="0.07"/>
  <rect x="0" y="0" width="1200" height="6" fill="url(#coral)"/>
  <rect x="80" y="120" width="5" height="80" rx="2" fill="${CORAL}"/>
  <text x="116" y="177" font-family="Georgia, 'Times New Roman', serif" font-size="40" font-weight="700"
        fill="${CORAL}" letter-spacing="-0.5">DramaMatch</text>
  <rect x="116" y="192" width="300" height="3" rx="1" fill="url(#coral)" opacity="0.6"/>
  <text x="116" y="${titleY1}" font-family="Georgia, 'Times New Roman', serif" font-size="58" font-weight="700"
        fill="${DARK}" letter-spacing="-1">${esc(line1)}</text>
  ${hasLine2 ? `<text x="116" y="${titleY2}" font-family="Georgia, 'Times New Roman', serif" font-size="58" font-weight="700" fill="${DARK}" letter-spacing="-1">${esc(line2)}</text>` : ''}
  ${subText ? `<text x="116" y="${subtitleY}" font-family="'Segoe UI', Arial, Helvetica, sans-serif" font-size="24" fill="${TEXT_SECONDARY}" opacity="0.85">${esc(subText)}</text>` : ''}
  <rect x="116" y="540" width="160" height="44" rx="22" fill="${CORAL}" opacity="0.12"/>
  <rect x="116" y="540" width="160" height="44" rx="22" fill="none" stroke="${CORAL}" stroke-width="1.5" opacity="0.4"/>
  <text x="196" y="567" font-family="'Segoe UI', Arial, sans-serif" font-size="18" font-weight="600"
        text-anchor="middle" fill="${CORAL}">DramaMatch</text>
  <text x="296" y="567" font-family="'Segoe UI', Arial, Helvetica, sans-serif" font-size="18"
        fill="${TEXT_SECONDARY}" opacity="0.7">dramamatch.app</text>
  <rect x="0" y="624" width="1200" height="6" fill="url(#coral)" opacity="0.7"/>
</svg>`;
}

/** Try to load sharp — returns null if not available */
let _sharp = null;
let _sharpTried = false;
function getSharp() {
  if (_sharpTried) return _sharp;
  _sharpTried = true;
  try {
    _sharp = require('sharp');
  } catch (e) {
    console.warn('[OG Images] sharp not available — OG images served as SVG fallback');
    _sharp = null;
  }
  return _sharp;
}

/** Ensure /public/og/ directory exists */
function ensureOgDir() {
  if (!fs.existsSync(OG_DIR)) {
    fs.mkdirSync(OG_DIR, { recursive: true });
  }
}

/**
 * Generate and cache a comparison-page PNG on disk.
 * Returns the file path on success, null on failure.
 */
async function generateAndCacheOgPng(slug) {
  const sharp = getSharp();
  if (!sharp) return null;

  ensureOgDir();
  const outPath = path.join(OG_DIR, `${slug}.png`);

  const meta = OG_PAGE_REGISTRY[slug];
  if (!meta) return null;

  const svgStr = buildComparisonSvg(meta.title, meta.subtitle);
  try {
    await sharp(Buffer.from(svgStr.trim()))
      .resize(1200, 630)
      .png({ quality: 92 })
      .toFile(outPath);
    return outPath;
  } catch (err) {
    console.error(`[OG Images] Failed to generate ${slug}.png:`, err.message);
    return null;
  }
}

/**
 * Express handler for GET /og/:filename
 * Serves cached file if available, generates if not, falls back to og-default.png
 */
async function serveOgImage(req, res) {
  // Support both :slug and :filename param names
  const rawSlug = req.params.filename || req.params.slug || '';
  // Strip .png extension to get the slug
  const slug = rawSlug.replace(/\.png$/, '');

  if (!OG_PAGE_REGISTRY[slug]) {
    // Not a known comparison page — serve default
    return res.sendFile(path.join(PUBLIC_DIR, 'og-default.png'));
  }

  const cachedPath = path.join(OG_DIR, `${slug}.png`);

  if (fs.existsSync(cachedPath)) {
    res.setHeader('Cache-Control', 'public, max-age=86400, immutable'); // 24h — disk-cached
    return res.sendFile(cachedPath);
  }

  // Try to generate on-demand
  const generated = await generateAndCacheOgPng(slug);
  if (generated) {
    res.setHeader('Cache-Control', 'public, max-age=86400, immutable');
    return res.sendFile(generated);
  }

  // Fallback to default
  res.setHeader('Cache-Control', 'public, max-age=3600');
  return res.sendFile(path.join(PUBLIC_DIR, 'og-default.png'));
}

module.exports = {
  serveOgImage,
  generateAndCacheOgPng,
  OG_PAGE_REGISTRY,
  BASE_URL,
};
