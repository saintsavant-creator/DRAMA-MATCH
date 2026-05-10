/**
 * Merge Search Gap Batch 2026 — 35 new titles targeting real search gaps.
 *
 * K-dramas  (13) → kdramas.js
 * C-dramas  (10) → cdramas.js
 * Western shows (10) → western-shows.js
 * Western movies (2) → western-movies.js
 *
 * Total: 35 titles across 4 catalog files.
 */
const fs = require('fs');
const path = require('path');

function mergeBatch(batchPath, targetPath, label, filterFn) {
  const batchEntries = require(batchPath);
  const existing = require(targetPath);
  const batch = filterFn ? batchEntries.filter(filterFn) : batchEntries;

  const existingIds = new Set(existing.map(function(d) { return d.id; }));
  const dupes = batch.filter(function(d) { return existingIds.has(d.id); }).map(function(d) { return d.id; });
  const toAdd = batch.filter(function(d) { return !existingIds.has(d.id); });

  console.log('\n── ' + label + ' ──');
  console.log('  Existing: ' + existing.length);
  console.log('  Batch:    ' + batch.length);
  console.log('  Dupes:    ' + (dupes.length > 0 ? dupes.join(', ') : 'none'));
  console.log('  To add:   ' + toAdd.length);

  if (toAdd.length === 0) {
    console.log('  Nothing to add — all entries already exist.');
    return 0;
  }

  var content = fs.readFileSync(targetPath, 'utf8').trimEnd();
  if (content.endsWith('];')) {
    content = content.slice(0, -2).trimEnd();
  } else {
    console.error('  ERROR: Unexpected end of ' + path.basename(targetPath) + ' — cannot safely append');
    process.exit(1);
  }

  var newEntriesStr = toAdd.map(function(entry) {
    return JSON.stringify(entry, null, 2)
      .replace(/"([^"]+)":/g, '$1:')
      .replace(/^{/gm, '  {')
      .replace(/^}/gm, '  }');
  }).join(',\n\n');

  var updatedContent = content + ',\n\n' + newEntriesStr + '\n];\n';
  fs.writeFileSync(targetPath, updatedContent, 'utf8');

  // Verify
  delete require.cache[require.resolve(targetPath)];
  var updated = require(targetPath);
  console.log('  \u2713 Merged: ' + existing.length + ' \u2192 ' + updated.length);

  // Check for dupes in result
  var allIds = updated.map(function(d) { return d.id; });
  var uniqueIds = new Set(allIds);
  if (allIds.length !== uniqueIds.size) {
    console.error('  WARNING: Duplicate IDs detected in result!');
    var seen = new Set();
    allIds.forEach(function(id) {
      if (seen.has(id)) console.error('    Dup:', id);
      seen.add(id);
    });
  } else {
    console.log('  \u2713 No duplicate IDs');
  }

  toAdd.forEach(function(s) { console.log('  + ' + s.id + ' \u2014 ' + s.title + ' (' + s.year + ')'); });
  return toAdd.length;
}

var dataDir = path.join(__dirname, '../data');
var total = 0;

// 1. K-dramas
total += mergeBatch(
  path.join(dataDir, 'kdramas-batch-search-gap-2026.js'),
  path.join(dataDir, 'kdramas.js'),
  'K-DRAMAS (13) \u2192 kdramas.js'
);

// 2. C-dramas
total += mergeBatch(
  path.join(dataDir, 'cdramas-batch-search-gap-2026.js'),
  path.join(dataDir, 'cdramas.js'),
  'C-DRAMAS (10) \u2192 cdramas.js'
);

// 3. Western shows (episodes > 1 = TV show)
total += mergeBatch(
  path.join(dataDir, 'western-batch-search-gap-2026.js'),
  path.join(dataDir, 'western-shows.js'),
  'WESTERN SHOWS (10) \u2192 western-shows.js',
  function(d) { return d.episodes > 1; }
);

// 4. Western movies (episodes === 1 = movie)
total += mergeBatch(
  path.join(dataDir, 'western-batch-search-gap-2026.js'),
  path.join(dataDir, 'western-movies.js'),
  'WESTERN MOVIES (2) \u2192 western-movies.js',
  function(d) { return d.episodes === 1; }
);

console.log('\n\u2705 Search Gap Batch 2026 complete \u2014 ' + total + ' titles added across all catalogs.\n');
