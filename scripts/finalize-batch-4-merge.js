/**
 * Finalize Batch 4 merge — append only missing entries to base catalog files.
 * Safe to run multiple times (idempotent).
 */
const fs = require('fs');
const path = require('path');
const dataDir = path.join(__dirname, '..', 'data');

// Fresh-load all modules
Object.keys(require.cache).forEach(k => { if (k.includes('/data/')) delete require.cache[k]; });

const kdramas = require(path.join(dataDir, 'kdramas.js'));
const cdramas = require(path.join(dataDir, 'cdramas.js'));
const westernShows = require(path.join(dataDir, 'western-shows.js'));
const kb4 = require(path.join(dataDir, 'kdramas-batch-4-2026.js'));
const cb4 = require(path.join(dataDir, 'cdramas-batch-4-2026.js'));
const wb4 = require(path.join(dataDir, 'western-batch-4-2026.js'));

const kIds = new Set(kdramas.map(s => s.id));
const cIds = new Set(cdramas.map(s => s.id));
const wIds = new Set(westernShows.map(s => s.id));

const kMissing = kb4.filter(s => !kIds.has(s.id));
const cMissing = cb4.filter(s => !cIds.has(s.id));
const wMissing = wb4.filter(s => !wIds.has(s.id));

console.log(`K-dramas to add: ${kMissing.length} — ${kMissing.map(s => s.id).join(', ')}`);
console.log(`C-dramas to add: ${cMissing.length} — ${cMissing.map(s => s.id).join(', ')}`);
console.log(`Western to add: ${wMissing.length} — ${wMissing.map(s => s.id).join(', ')}`);
console.log(`Total: ${kMissing.length + cMissing.length + wMissing.length}`);

function appendToFile(filePath, entries, label) {
  if (entries.length === 0) {
    console.log(`\n${label}: nothing to add`);
    return;
  }
  const content = fs.readFileSync(filePath, 'utf8');
  // Find the last ]; and insert before it
  const lastBracket = content.lastIndexOf('];');
  if (lastBracket === -1) {
    console.error(`ERROR: could not find ]; in ${filePath}`);
    process.exit(1);
  }
  // Get content before ]; and trim trailing whitespace
  const before = content.slice(0, lastBracket).trimEnd();
  const newEntries = entries.map(e => {
    // Indent each entry with 2 spaces to match file style
    const lines = JSON.stringify(e, null, 2).split('\n');
    return lines.map((l, i) => i === 0 ? '  ' + l : '  ' + l).join('\n');
  }).join(',\n');

  const newContent = before + ',\n' + newEntries + '\n];\n';
  fs.writeFileSync(filePath, newContent);
  console.log(`\n${label}: appended ${entries.length} entries`);
}

appendToFile(path.join(dataDir, 'kdramas.js'), kMissing, 'kdramas.js');
appendToFile(path.join(dataDir, 'cdramas.js'), cMissing, 'cdramas.js');
appendToFile(path.join(dataDir, 'western-shows.js'), wMissing, 'western-shows.js');

// Verify
Object.keys(require.cache).forEach(k => { if (k.includes('/data/')) delete require.cache[k]; });
const kNew = require(path.join(dataDir, 'kdramas.js'));
const cNew = require(path.join(dataDir, 'cdramas.js'));
const wNew = require(path.join(dataDir, 'western-shows.js'));

console.log(`\n=== AFTER MERGE ===`);
console.log(`K-dramas: ${kdramas.length} → ${kNew.length}`);
console.log(`C-dramas: ${cdramas.length} → ${cNew.length}`);
console.log(`Western shows: ${westernShows.length} → ${wNew.length}`);

// Verify all 35 batch 4 IDs are present
const allIds = new Set([...kNew, ...cNew, ...wNew].map(s => s.id));
const allBatch4 = [...kb4, ...cb4, ...wb4];
let passed = 0, failed = 0;
allBatch4.forEach(s => {
  if (allIds.has(s.id)) {
    passed++;
  } else {
    console.log(`  MISSING: ${s.id}`);
    failed++;
  }
});
console.log(`\nBatch 4 verification: ${passed}/${allBatch4.length} titles present`);
if (failed === 0) {
  console.log('ALL 35 BATCH 4 TITLES VERIFIED IN BASE FILES');
} else {
  console.log(`${failed} titles still missing`);
  process.exit(1);
}
