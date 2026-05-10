/**
 * Merge batch R (Netflix/Amazon/Disney+ streaming titles) into catalog files
 *
 * Handles three data types:
 *   1. K-dramas → kdramas.js
 *   2. Western shows → western-shows.js
 *   3. Western movies → western-movies.js
 *
 * Deduplicates against all existing entries by ID before appending.
 */
const fs = require('fs');
const path = require('path');

// ── Paths ────────────────────────────────────────────────────────────────────
const kdramasPath      = path.join(__dirname, '../data/kdramas.js');
const westernShowsPath = path.join(__dirname, '../data/western-shows.js');
const westernMoviesPath = path.join(__dirname, '../data/western-movies.js');

// ── Load existing catalogs ──────────────────────────────────────────────────
const existingKdramas      = require('../data/kdramas.js');
const existingWesternShows = require('../data/western-shows.js');
const existingWesternMovies = require('../data/western-movies.js');

// ── Load batch entries ──────────────────────────────────────────────────────
const kdramaBatch = require('../data/kdramas-batch-r-streaming.js');
const { westernShows: showsBatch, westernMovies: moviesBatch } = require('../data/western-batch-r-streaming.js');

// ── Build global ID set (cross-file dedup) ──────────────────────────────────
const allExistingIds = new Set([
  ...existingKdramas.map(d => d.id),
  ...existingWesternShows.map(d => d.id),
  ...existingWesternMovies.map(d => d.id),
]);

console.log('=== Batch R Merge ===\n');
console.log(`Existing catalog: ${allExistingIds.size} unique IDs`);
console.log(`  K-dramas: ${existingKdramas.length}`);
console.log(`  Western shows: ${existingWesternShows.length}`);
console.log(`  Western movies: ${existingWesternMovies.length}\n`);

// ── Helper: deduplicate + report ────────────────────────────────────────────
function dedup(batchEntries, label) {
  const dupes = batchEntries.filter(d => allExistingIds.has(d.id)).map(d => d.id);
  const toAdd = batchEntries.filter(d => !allExistingIds.has(d.id));
  console.log(`[${label}] Batch: ${batchEntries.length} | Dupes: ${dupes.length > 0 ? dupes.join(', ') : 'none'} | To add: ${toAdd.length}`);
  return toAdd;
}

// ── Helper: append entries to a JS module file ──────────────────────────────
function appendToFile(filePath, newEntries, label) {
  if (newEntries.length === 0) {
    console.log(`  → [${label}] Nothing to add — all entries already exist.`);
    return 0;
  }

  let content = fs.readFileSync(filePath, 'utf8').trimEnd();

  // Remove closing ];
  if (content.endsWith('];')) {
    content = content.slice(0, -2).trimEnd();
  } else {
    console.error(`  ✗ [${label}] Unexpected end of file — cannot safely append to ${filePath}`);
    process.exit(1);
  }

  const newStr = newEntries.map(entry =>
    JSON.stringify(entry, null, 4)
      .replace(/"([^"]+)":/g, '$1:')   // unquote keys
      .replace(/^{/gm, '  {')
      .replace(/^}/gm, '  }')
  ).join(',\n\n');

  const updated = content + ',\n\n' + newStr + '\n];\n';
  fs.writeFileSync(filePath, updated, 'utf8');

  console.log(`  ✓ [${label}] Appended ${newEntries.length} entries`);
  return newEntries.length;
}

// ── Helper: verify no duplicates in merged file ─────────────────────────────
function verifyNoDupes(filePath, label) {
  delete require.cache[require.resolve(filePath)];
  let entries;
  try {
    entries = require(filePath);
  } catch (e) {
    // Handle { westernShows, westernMovies } exports
    entries = Object.values(require(filePath)).flat();
  }
  // If it's the western-batch-r, skip
  if (!Array.isArray(entries)) return;

  const ids = entries.map(d => d.id);
  const unique = new Set(ids);
  if (ids.length !== unique.size) {
    console.error(`  ✗ [${label}] DUPLICATE IDs detected!`);
    const seen = new Set();
    ids.forEach(id => {
      if (seen.has(id)) console.error(`    Duplicate: ${id}`);
      seen.add(id);
    });
  } else {
    console.log(`  ✓ [${label}] No duplicate IDs (${ids.length} total)`);
  }
}

// ── Execute ─────────────────────────────────────────────────────────────────
const kdramasToAdd      = dedup(kdramaBatch, 'K-dramas');
const showsToAdd        = dedup(showsBatch, 'Western shows');
const moviesToAdd       = dedup(moviesBatch, 'Western movies');

console.log('');

let totalAdded = 0;
totalAdded += appendToFile(kdramasPath, kdramasToAdd, 'K-dramas');
totalAdded += appendToFile(westernShowsPath, showsToAdd, 'Western shows');
totalAdded += appendToFile(westernMoviesPath, moviesToAdd, 'Western movies');

console.log('');

verifyNoDupes(kdramasPath, 'kdramas.js');
verifyNoDupes(westernShowsPath, 'western-shows.js');
verifyNoDupes(westernMoviesPath, 'western-movies.js');

console.log(`\n=== Done! Added ${totalAdded} new titles across all catalogs ===\n`);
