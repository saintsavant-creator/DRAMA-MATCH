#!/usr/bin/env node
/**
 * Fix Catalog Duplicates
 * Removes duplicate entries from: cdramas.js, kdramas.js, western-movies.js, western-shows.js
 *
 * Strategy: keep FIRST occurrence for exact ID dups; for same-title/different-ID keep the
 * more complete entry (most fields). Season variants (s2, s5 suffixes with unique titles) kept.
 */
const fs = require('fs');
const path = require('path');

function dedup(filePath, label, options = {}) {
  const data = require(filePath);
  const originalCount = data.length;

  let filtered;
  if (options.removeIds) {
    // Remove specific IDs (duplicates of existing entries)
    const removeSet = new Set(options.removeIds);
    filtered = data.filter(x => !removeSet.has(x.id));
  } else {
    // Default: deduplicate by ID, keep first occurrence
    const seenIds = new Set();
    filtered = data.filter(x => {
      if (seenIds.has(x.id)) return false;
      seenIds.add(x.id);
      return true;
    });
  }

  const removedCount = originalCount - filtered.length;

  // Write back as JS module
  const content = 'module.exports = ' + JSON.stringify(filtered, null, 2) + ';\n';
  fs.writeFileSync(filePath, content);

  console.log(`✅ ${label}: ${originalCount} → ${filtered.length} entries (removed ${removedCount})`);
  return { original: originalCount, final: filtered.length, removed: removedCount };
}

// ─── 1. cdramas.js: 10 duplicate IDs ───────────────────────────────────────
// Positions with dups: "pursuit-of-jade" at 9+32, "nirvana-in-fire" at 46+93,
// "till-the-end-of-the-moon" at 56+94, "love-like-the-galaxy" at 41+95,
// "ashes-of-love" at 49+97, "the-bad-kids" at 45+98, "hidden-love" at 38+99,
// "word-of-honor" at 37+100, "ancient-love-poetry" at 52+103, "nothing-but-you" at 64+105
const cdramasPath = path.join(__dirname, '../data/cdramas.js');
const r1 = dedup(cdramasPath, 'cdramas.js');

// ─── 2. kdramas.js: 1 duplicate ID (the-atypical-family at 104 + 586) ─────
const kdramasPath = path.join(__dirname, '../data/kdramas.js');
const r2 = dedup(kdramasPath, 'kdramas.js');

// ─── 3. western-movies.js: 1 duplicate ID (little-women-2019) ──────────────
const wMoviesPath = path.join(__dirname, '../data/western-movies.js');
const r3 = dedup(wMoviesPath, 'western-movies.js');

// ─── 4. western-shows.js: same-show dups with different IDs ────────────────
// Remove the less-complete/redundant entry for each same-show conflict.
// Season variants (reign-s2, the-great-s2, the-last-kingdom-s5) are kept.
const WESTERN_SHOWS_REMOVE = [
  'you',                      // keep you-netflix (15f)
  'white-lotus',              // keep the-white-lotus (15f)
  'the-marvelous-mrs-maisel', // keep mrs-maisel (13f)
  'call-the-midwife',         // keep call-the-midwife-drama (13f)
  'beef',                     // keep beef-netflix (15f)
  'from',                     // keep from-mgm (14f)
  'the-diplomat',             // keep the-diplomat-us (13f)
  'dark-matter',              // keep dark-matter-apple (13f)
  'maid',                     // keep maid-netflix (13f)
  'the-wilds',                // keep the-wilds-amazon (13f)
  'the-gentlemen',            // keep the-gentlemen-netflix (15f)
  'the-gentlemen-series',     // keep the-gentlemen-netflix (15f)
  'ripley',                   // keep ripley-netflix (15f)
  'ripley-2024',              // keep ripley-netflix (15f)
  'one-day',                  // keep one-day-netflix (15f)
  'the-split-bbc',            // keep the-split (13f)
  'grease-rise-of-the-pink-ladies', // wrong title, same data as anne-with-an-e
  'atypical-netflix',         // keep atypical (13f)
  'the-affair-us',            // keep the-affair (13f)
  'eric',                     // keep eric-netflix (15f)
  'physical',                 // keep physical-appletv (14f)
  'bodies',                   // keep bodies-netflix (15f)
  'dear-child-netflix',       // keep dear-child (13f)
  'rivals',                   // keep rivals-2024 (14f)
  '3-body-problem',           // keep three-body-problem-netflix (15f)
  'three-body-problem',       // keep three-body-problem-netflix (15f)
  'the-residence',            // keep the-residence-2025 (13f)
];

const wShowsPath = path.join(__dirname, '../data/western-shows.js');
const r4 = dedup(wShowsPath, 'western-shows.js', { removeIds: WESTERN_SHOWS_REMOVE });

// Summary
console.log('\n=== FINAL COUNTS ===');
const totals = [r1, r2, r3, r4];
const totalRemoved = totals.reduce((sum, r) => sum + r.removed, 0);
console.log(`Total entries removed: ${totalRemoved}`);

// Verify by reloading
delete require.cache[require.resolve('../data/cdramas')];
delete require.cache[require.resolve('../data/kdramas')];
delete require.cache[require.resolve('../data/western-movies')];
delete require.cache[require.resolve('../data/western-shows')];

const cdramas = require('../data/cdramas');
const kdramas = require('../data/kdramas');
const wMovies = require('../data/western-movies');
const wShows = require('../data/western-shows');
const koreanMovies = require('../data/korean-movies');
const jdramas = require('../data/jdramas');
const anime = require('../data/anime');

const total = cdramas.length + kdramas.length + wMovies.length + wShows.length +
              koreanMovies.length + jdramas.length + anime.length;

console.log(`\nFinal catalog:`);
console.log(`  K-dramas:      ${kdramas.length} (expected 671 → 670 after 1 dup removed)`);
console.log(`  C-dramas:      ${cdramas.length} (expected 161 → 151 after 10 dups removed)`);
console.log(`  Western shows: ${wShows.length} (expected 529, was 536)`);
console.log(`  Western movies:${wMovies.length} (expected 140, was 139)`);
console.log(`  Korean movies: ${koreanMovies.length} (expected 18)`);
console.log(`  J-dramas:      ${jdramas.length}`);
console.log(`  Anime:         ${anime.length}`);
console.log(`  TOTAL:         ${total}`);
