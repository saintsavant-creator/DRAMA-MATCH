/**
 * Merge batch S-Romance (Western romance/drama shows) into western-shows.js
 *
 * Adds 35 new Western romance/drama shows with full streaming metadata,
 * actor data, and cross-cultural match reasoning hints.
 *
 * Deduplicates against all existing entries by ID before appending.
 */
const fs = require('fs');
const path = require('path');

// ── Paths ────────────────────────────────────────────────────────────────────
const westernShowsPath = path.join(__dirname, '../data/western-shows.js');

// ── Load existing catalog ───────────────────────────────────────────────────
const existingWesternShows = require('../data/western-shows.js');

// ── Load batch entries ──────────────────────────────────────────────────────
const batchShows = require('../data/western-batch-s-romance.js');

// ── Build existing ID set ───────────────────────────────────────────────────
const allExistingIds = new Set(existingWesternShows.map(d => d.id));

console.log('=== Batch S-Romance Merge ===\n');
console.log(`Existing catalog: ${allExistingIds.size} unique IDs`);
console.log(`  Western shows: ${existingWesternShows.length}\n`);

// ── Helper: deduplicate + report ────────────────────────────────────────────
function dedup(batchEntries, label) {
  const dupes = batchEntries.filter(d => allExistingIds.has(d.id)).map(d => d.id);
  const toAdd = batchEntries.filter(d => !allExistingIds.has(d.id));
  if (dupes.length > 0) {
    console.log(`[${label}] Batch: ${batchEntries.length} | Dupes skipped (${dupes.length}): ${dupes.join(', ')}`);
  } else {
    console.log(`[${label}] Batch: ${batchEntries.length} | Dupes: none`);
  }
  console.log(`[${label}] To add: ${toAdd.length}\n`);
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
  const entries = require(filePath);
  if (!Array.isArray(entries)) {
    console.error(`  ✗ [${label}] File does not export an array`);
    return;
  }

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
const showsToAdd = dedup(batchShows, 'Western shows (Batch S-Romance)');

let totalAdded = 0;
totalAdded += appendToFile(westernShowsPath, showsToAdd, 'Western shows');

console.log('');

verifyNoDupes(westernShowsPath, 'western-shows.js');

console.log(`\n=== Done! Added ${totalAdded} new titles to western-shows.js ===\n`);
