/**
 * Merge IU + Byeon Woo-seok actor batch into kdramas.js
 * 5 titles: My Mister, Hotel del Luna, Moon Lovers: Scarlet Heart Ryeo,
 *           Lovely Runner, Record of Youth
 */
const fs = require('fs');
const path = require('path');

const kdramasPath = path.join(__dirname, '../data/kdramas.js');
const batchPath = path.join(__dirname, '../data/kdramas-batch-iu-bws.js');

const existing = require('../data/kdramas.js');
const batchEntries = require('../data/kdramas-batch-iu-bws.js');

const existingIds = new Set(existing.map(d => d.id));
const dupes = batchEntries.filter(d => existingIds.has(d.id)).map(d => d.id);
if (dupes.length > 0) {
  console.log(`Duplicates to skip: ${dupes.join(', ')}`);
} else {
  console.log(`No duplicates found — all ${batchEntries.length} entries are new.`);
}

// Read the batch file as text and extract individual entries
const batchText = fs.readFileSync(batchPath, 'utf8');

// Extract the array content between module.exports = [ and ];
const arrayMatch = batchText.match(/module\.exports\s*=\s*\[([\s\S]*)\];/);
if (!arrayMatch) {
  console.error('Could not parse batch file');
  process.exit(1);
}

// Split on entry boundaries by tracking braces
function splitEntries(text) {
  const entries = [];
  let depth = 0;
  let start = -1;
  for (let i = 0; i < text.length; i++) {
    if (text[i] === '{') {
      if (depth === 0) start = i;
      depth++;
    } else if (text[i] === '}') {
      depth--;
      if (depth === 0 && start !== -1) {
        entries.push(text.slice(start, i + 1));
        start = -1;
      }
    }
  }
  return entries;
}

const arrayContent = arrayMatch[1];
const rawEntries = splitEntries(arrayContent);
console.log(`Total entries in batch: ${rawEntries.length}`);

// Filter out duplicates
const filteredEntries = rawEntries.filter(entry => {
  const idMatch = entry.match(/id:\s*['"]([^'"]+)['"]/);
  if (!idMatch) return true;
  const id = idMatch[1];
  if (existingIds.has(id)) {
    console.log(`  Skipping duplicate: ${id}`);
    return false;
  }
  return true;
});

console.log(`After filtering: ${filteredEntries.length} entries to add`);

// Build the insertion block
const batchComment = `  // ===================================================================
  // BATCH IU + BWS — Actor Deep-Dive Expansion — 2026-04-15
  // My Mister, Hotel del Luna, Moon Lovers, Lovely Runner, Record of Youth
  // ===================================================================`;

const allNewEntriesText = filteredEntries.join(',\n');

// Read kdramas.js and insert before closing ];
let kdramasContent = fs.readFileSync(kdramasPath, 'utf8');
const insertPoint = kdramasContent.lastIndexOf('];');
if (insertPoint === -1) {
  console.error('Could not find closing ]; in kdramas.js');
  process.exit(1);
}

const newContent =
  kdramasContent.slice(0, insertPoint) +
  ',\n\n' + batchComment + '\n' + allNewEntriesText + '\n' +
  kdramasContent.slice(insertPoint);

fs.writeFileSync(kdramasPath, newContent, 'utf8');
console.log('\n✅ Wrote merged content to kdramas.js');

// Verify by re-requiring
delete require.cache[require.resolve('../data/kdramas.js')];
const verify = require('../data/kdramas.js');
console.log(`✅ kdramas.js now has ${verify.length} total entries`);

// Check for duplicates in final file
const finalIds = verify.map(d => d.id);
const uniqueFinalIds = new Set(finalIds);
if (uniqueFinalIds.size !== finalIds.length) {
  const seen = {};
  const dups = [];
  finalIds.forEach(id => {
    if (seen[id]) dups.push(id);
    seen[id] = true;
  });
  console.error('❌ DUPLICATE IDs in final file:', dups);
  process.exit(1);
}
console.log('✅ No duplicate IDs in final catalog');

// Verify our new shows are in there
const newIds = ['my-mister', 'hotel-del-luna', 'moon-lovers-scarlet-heart-ryeo', 'lovely-runner', 'record-of-youth'];
newIds.forEach(id => {
  const found = verify.find(d => d.id === id);
  if (found) {
    const iuActor = (found.actors || []).find(a => a.name === 'IU' || a.name === 'Byeon Woo-seok');
    console.log(`✅ ${id}: "${found.title}" — ${found.actors.length} actors${iuActor ? ` (${iuActor.name} ✓)` : ''}`);
  } else {
    console.error(`❌ Missing: ${id}`);
  }
});
