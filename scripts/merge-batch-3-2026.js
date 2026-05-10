/**
 * Merge script: appends Catalog Expansion Batch 3 (2026) to main catalog files.
 * Performs dedup check against main catalog files only (not batch staging files).
 */
const fs = require('fs');
const path = require('path');

const dataDir = path.join(__dirname, '..', 'data');

const MERGES = [
  { mainFile: 'kdramas.js', batchFile: 'kdramas-batch-3-2026.js', label: 'K-dramas' },
  { mainFile: 'cdramas.js', batchFile: 'cdramas-batch-3-2026.js', label: 'C-dramas' },
  { mainFile: 'western-shows.js', batchFile: 'western-batch-3-2026-shows.js', label: 'Western Shows' },
  { mainFile: 'western-movies.js', batchFile: 'western-batch-3-2026-movies.js', label: 'Western Movies' },
  { mainFile: 'korean-movies.js', batchFile: 'korean-movies-batch-3-2026.js', label: 'Korean Movies' },
  { mainFile: 'jdramas.js', batchFile: 'jmovies-batch-3-2026.js', label: 'J-Movies' },
];

// Main catalog files (authoritative sources — batch files excluded)
const MAIN_CATALOG_FILES = [
  'kdramas.js', 'western-shows.js', 'western-movies.js', 'cdramas.js',
  'jdramas.js', 'korean-movies.js', 'anime.js'
];

// Load ALL existing IDs from MAIN catalog files only
const globalIds = new Set();
for (const f of MAIN_CATALOG_FILES) {
  try {
    const data = require(path.join(dataDir, f));
    if (Array.isArray(data)) data.forEach(t => { if (t.id) globalIds.add(t.id); });
  } catch (e) {
    console.error(`Error loading ${f}:`, e.message);
  }
}
console.log(`Main catalog IDs loaded: ${globalIds.size}\n`);

let totalAdded = 0;
let totalSkipped = 0;

for (const { mainFile, batchFile, label } of MERGES) {
  const batchPath = path.join(dataDir, batchFile);
  if (!fs.existsSync(batchPath)) {
    console.log(`[SKIP] ${batchFile} not found`);
    continue;
  }

  // Clear require cache for batch file to get fresh load
  delete require.cache[batchPath];
  const batchData = require(batchPath);
  if (!Array.isArray(batchData) || batchData.length === 0) {
    console.log(`[SKIP] ${batchFile} is empty`);
    continue;
  }

  // Dedup check
  const toAdd = [];
  const skipped = [];
  for (const entry of batchData) {
    if (globalIds.has(entry.id)) {
      skipped.push(entry.id);
    } else {
      toAdd.push(entry);
      globalIds.add(entry.id); // prevent intra-batch duplicates
    }
  }

  if (skipped.length > 0) {
    console.log(`[${label}] SKIPPED (already in main catalog): ${skipped.join(', ')}`);
  }

  if (toAdd.length === 0) {
    console.log(`[${label}] Nothing new to add.\n`);
    continue;
  }

  // Read main file, strip trailing ]; and append
  const mainPath = path.join(dataDir, mainFile);
  let mainContent = fs.readFileSync(mainPath, 'utf8');

  // Remove trailing ]; (with possible whitespace/newlines)
  mainContent = mainContent.trimEnd().replace(/\];\s*$/, '');

  // Serialize new entries as formatted JSON (compatible with existing file format)
  const newEntries = toAdd.map(entry => {
    // 2-space indent for the object, then 2-space indent for each line within
    const serialized = JSON.stringify(entry, null, 2);
    const indented = serialized.split('\n').map((line, i) => i === 0 ? '  ' + line : '  ' + line).join('\n');
    return indented;
  }).join(',\n\n');

  const newContent = mainContent + ',\n\n' + newEntries + '\n\n];\n';

  fs.writeFileSync(mainPath, newContent, 'utf8');

  console.log(`[${label}] ✅ Added ${toAdd.length} titles to ${mainFile}`);
  toAdd.forEach(e => console.log(`    + ${e.id}: ${e.title}`));
  console.log();

  totalAdded += toAdd.length;
  totalSkipped += skipped.length;
}

console.log(`\n✅ Done. Added: ${totalAdded} new titles | Skipped (already existed): ${totalSkipped}`);
