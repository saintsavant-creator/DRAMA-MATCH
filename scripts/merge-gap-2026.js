/**
 * Merge Catalog Gap Batch 2026 entries into their respective base catalog files.
 *
 * K-dramas   (10) → kdramas.js
 * C-dramas   (10) → cdramas.js
 * J-dramas    (8) → jdramas.js
 * Western TV  (7) → western-shows.js
 *
 * Total: 35 gap-filling titles added.
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

  // Check for dupes in result
  const allIds = updated.map(d => d.id);
  const uniqueIds = new Set(allIds);
  if (allIds.length !== uniqueIds.size) {
    console.error('  WARNING: Duplicate IDs detected in result!');
    const seen = new Set();
    allIds.forEach(id => {
      if (seen.has(id)) console.error('    Dup:', id);
      seen.add(id);
    });
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
  path.join(dataDir, 'kdramas-batch-gap-2026.js'),
  path.join(dataDir, 'kdramas.js'),
  'K-DRAMAS → kdramas.js'
);

// 2. C-dramas
total += mergeBatch(
  path.join(dataDir, 'cdramas-batch-gap-2026.js'),
  path.join(dataDir, 'cdramas.js'),
  'C-DRAMAS → cdramas.js'
);

// 3. J-dramas
total += mergeBatch(
  path.join(dataDir, 'jdramas-batch-gap-2026.js'),
  path.join(dataDir, 'jdramas.js'),
  'J-DRAMAS → jdramas.js'
);

// 4. Western shows (all are TV, not movies)
total += mergeBatch(
  path.join(dataDir, 'western-batch-gap-2026.js'),
  path.join(dataDir, 'western-shows.js'),
  'WESTERN SHOWS → western-shows.js'
);

console.log(`\n✅ Catalog Gap Batch 2026 complete — ${total} titles added across all catalogs.\n`);
