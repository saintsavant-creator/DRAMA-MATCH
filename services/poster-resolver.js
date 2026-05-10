/**
 * Background Poster Resolver
 *
 * Automatically fetches poster images from TVmaze API for shows that don't
 * have hardcoded TMDB poster paths. Runs in the background after server startup
 * to populate the dynamic poster cache.
 *
 * TVmaze API: Free, no key required. Rate limit: 20 requests per 10 seconds.
 * Docs: https://www.tvmaze.com/api
 */

const https = require('https');
const { cachePosterUrl, POSTER_PATHS, getDynamicCacheSize } = require('../data/poster-paths');

// Concurrency settings — stay well under TVmaze rate limit (20/10s)
const BATCH_SIZE = 10;
const BATCH_DELAY_MS = 6000; // 6 seconds between batches
const REQUEST_TIMEOUT_MS = 8000;

let isRunning = false;
let totalResolved = 0;
let totalFailed = 0;

/**
 * Search TVmaze for a show and return the poster image URL.
 * @param {string} title Show title
 * @returns {Promise<string|null>} TVmaze image URL or null
 */
function searchTVmaze(title) {
  return new Promise((resolve) => {
    const query = encodeURIComponent(title);
    const url = `https://api.tvmaze.com/singlesearch/shows?q=${query}`;

    const req = https.get(url, { timeout: REQUEST_TIMEOUT_MS }, (res) => {
      let data = '';
      res.on('data', chunk => { data += chunk; });
      res.on('end', () => {
        if (res.statusCode === 200) {
          try {
            const result = JSON.parse(data);
            // Prefer medium (210x295) — good quality for cards without being oversized
            const imageUrl = result.image && (result.image.medium || result.image.original);
            resolve(imageUrl || null);
          } catch {
            resolve(null);
          }
        } else {
          resolve(null);
        }
      });
    });
    req.on('error', () => resolve(null));
    req.on('timeout', () => { req.destroy(); resolve(null); });
  });
}

/**
 * Process a batch of shows concurrently.
 * @param {Array<{id: string, title: string}>} shows
 * @returns {Promise<number>} Number of posters resolved in this batch
 */
async function processBatch(shows) {
  const results = await Promise.all(
    shows.map(async (show) => {
      const url = await searchTVmaze(show.title);
      if (url) {
        cachePosterUrl(show.id, url);
        return true;
      }
      return false;
    })
  );
  return results.filter(Boolean).length;
}

/**
 * Start background poster resolution for all shows missing posters.
 * Non-blocking — runs asynchronously after server startup.
 *
 * @param {Array<{id: string, title: string}>} allShows Full catalog
 */
function startBackgroundResolver(allShows) {
  if (isRunning) return;
  isRunning = true;

  // Filter to shows that need posters (not in hardcoded map AND not already cached)
  const missing = allShows.filter(s => !POSTER_PATHS[s.id]);

  if (missing.length === 0) {
    console.log('[Poster Resolver] All shows have poster paths — nothing to resolve.');
    isRunning = false;
    return;
  }

  console.log(`[Poster Resolver] Starting background resolution for ${missing.length} shows...`);

  // Run in background — don't block server startup
  (async () => {
    try {
      for (let i = 0; i < missing.length; i += BATCH_SIZE) {
        const batch = missing.slice(i, i + BATCH_SIZE);
        const found = await processBatch(batch);

        totalResolved += found;
        totalFailed += (batch.length - found);

        const progress = Math.round(((i + batch.length) / missing.length) * 100);
        if (progress % 10 === 0 || i + batch.length === missing.length) {
          console.log(`[Poster Resolver] ${progress}% — ${totalResolved} found, ${totalFailed} not found (${getDynamicCacheSize()} cached)`);
        }

        // Rate limit delay between batches
        if (i + BATCH_SIZE < missing.length) {
          await new Promise(r => setTimeout(r, BATCH_DELAY_MS));
        }
      }

      console.log(`[Poster Resolver] Complete! ${totalResolved} posters resolved, ${totalFailed} not found. Cache: ${getDynamicCacheSize()} entries.`);
    } catch (err) {
      console.error('[Poster Resolver] Error during resolution:', err.message);
    } finally {
      isRunning = false;
    }
  })();
}

/**
 * Get resolver status for health checks
 */
function getResolverStatus() {
  return {
    isRunning,
    totalResolved,
    totalFailed,
    cacheSize: getDynamicCacheSize()
  };
}

module.exports = { startBackgroundResolver, getResolverStatus };
