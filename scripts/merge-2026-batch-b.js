/**
 * Merge all Batch 2026-B entries into their respective base catalog files.
 * K-dramas → kdramas.js (9 entries)
 * C-dramas → cdramas.js (8 entries)
 * Anime    → anime.js   (7 entries)
 * Western shows → western-shows.js (7 entries)
 * Western movies → western-movies.js (4 entries)
 */
const fs = require('fs');
const path = require('path');

function mergeBatch(batchPath, targetPath, label, filterFn) {
  const batchEntries = require(batchPath);
  const existing = require(targetPath);
  const batch = filterFn ? batchEntries.filter(filterFn) : batchEntries;

  const existingIds = new Set(existing.map(d => d.id));
  const dupes = batch.filter(d => existingIds.has(d.id)).map(d => d.id);
  const toAdd = batch.filter(d => !existingIds.has(d.id));

  console.log(`\n── ${label} ──`);
  console.log(`  Existing: ${existing.length}`);
  console.log(`  Batch:    ${batch.length}`);
  console.log(`  Dupes:    ${dupes.length > 0 ? dupes.join(', ') : 'none'}`);
  console.log(`  To add:   ${toAdd.length}`);

  if (toAdd.length === 0) {
    console.log('  Nothing to add — all entries already exist.');
    return 0;
  }

  let content = fs.readFileSync(targetPath, 'utf8').trimEnd();
  if (content.endsWith('];')) {
    content = content.slice(0, -2).trimEnd();
  } else {
    console.error(`  ERROR: Unexpected end of ${path.basename(targetPath)} — cannot safely append`);
    process.exit(1);
  }

  const newEntriesStr = toAdd.map(entry => {
    return JSON.stringify(entry, null, 2)
      .replace(/"([^"]+)":/g, '$1:')
      .replace(/^{/gm, '  {')
      .replace(/^}/gm, '  }');
  }).join(',\n\n');

  const updatedContent = content + ',\n\n' + newEntriesStr + '\n];\n';
  fs.writeFileSync(targetPath, updatedContent, 'utf8');

  // Verify
  delete require.cache[require.resolve(targetPath)];
  const updated = require(targetPath);
  console.log(`  ✓ Merged: ${existing.length} → ${updated.length}`);

  // Check for dupes
  const allIds = updated.map(d => d.id);
  const uniqueIds = new Set(allIds);
  if (allIds.length !== uniqueIds.size) {
    console.error('  WARNING: Duplicate IDs detected in result!');
    const seen = new Set();
    allIds.forEach(id => { if (seen.has(id)) console.error('    Dup:', id); seen.add(id); });
  } else {
    console.log('  ✓ No duplicate IDs');
  }

  toAdd.forEach(s => console.log(`  + ${s.id} — ${s.title} (${s.year})`));
  return toAdd.length;
}

const dataDir = path.join(__dirname, '../data');

let total = 0;

// 1. K-dramas
total += mergeBatch(
  path.join(dataDir, 'kdrama-batch-2026-b.js'),
  path.join(dataDir, 'kdramas.js'),
  'K-DRAMAS → kdramas.js'
);

// 2. C-dramas
total += mergeBatch(
  path.join(dataDir, 'cdrama-batch-2026-b.js'),
  path.join(dataDir, 'cdramas.js'),
  'C-DRAMAS → cdramas.js'
);

// 3. Anime
total += mergeBatch(
  path.join(dataDir, 'anime-batch-2026-b.js'),
  path.join(dataDir, 'anime.js'),
  'ANIME → anime.js'
);

// 4. Western shows (type !== 'movie')
total += mergeBatch(
  path.join(dataDir, 'western-batch-2026-b.js'),
  path.join(dataDir, 'western-shows.js'),
  'WESTERN SHOWS → western-shows.js',
  e => e.type !== 'movie'
);

// 5. Western movies (type === 'movie')
total += mergeBatch(
  path.join(dataDir, 'western-batch-2026-b.js'),
  path.join(dataDir, 'western-movies.js'),
  'WESTERN MOVIES → western-movies.js',
  e => e.type === 'movie'
);

console.log(`\n✅ Batch 2026-B complete — ${total} titles added across all catalogs.\n`);
