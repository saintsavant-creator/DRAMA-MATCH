/**
 * Merge western-batch-expansion-2026.js into western-shows.js
 * 30 shows: Cedar Cove + crime/detective/romance fills
 * Owner request: catalog gaps including NCIS spinoffs, CBS procedurals,
 * Hallmark romances, and family dramas.
 */
const fs = require('fs');
const path = require('path');

const westernPath = path.join(__dirname, '../data/western-shows.js');
const batchPath = path.join(__dirname, '../data/western-batch-expansion-2026.js');

const existing = require('../data/western-shows');
const batchEntries = require('../data/western-batch-expansion-2026');

const existingIds = new Set(existing.map(d => d.id));
const dupes = batchEntries.filter(d => existingIds.has(d.id)).map(d => d.id);
const toAdd = batchEntries.filter(d => !existingIds.has(d.id));

console.log(`Existing entries: ${existing.length}`);
console.log(`Batch entries: ${batchEntries.length}`);
console.log(`Duplicates to skip: ${dupes.length > 0 ? dupes.join(', ') : 'none'}`);
console.log(`Entries to add: ${toAdd.length}`);

if (toAdd.length === 0) {
  console.log('Nothing to add — all entries already exist in western-shows.js');
  process.exit(0);
}

// Read the current western-shows.js content
let westernContent = fs.readFileSync(westernPath, 'utf8');

// Remove the closing ]; from the end
westernContent = westernContent.trimEnd();
if (westernContent.endsWith('];')) {
  westernContent = westernContent.slice(0, -2).trimEnd();
} else {
  console.error('Unexpected end of western-shows.js - cannot safely append');
  process.exit(1);
}

// Build the new entries string
const newEntriesStr = toAdd.map(entry => {
  return JSON.stringify(entry, null, 2)
    .replace(/"([^"]+)":/g, '$1:')
    .replace(/^{/gm, '  {')
    .replace(/^}/gm, '  }');
}).join(',\n\n');

// Append new entries and close the array
const updatedContent = westernContent + ',\n\n' + newEntriesStr + '\n];\n';

// Write back
fs.writeFileSync(westernPath, updatedContent, 'utf8');

console.log('\n✓ Successfully merged!');

// Verify the result
delete require.cache[require.resolve('../data/western-shows')];
const updated = require('../data/western-shows');
console.log(`western-shows.js: ${existing.length} → ${updated.length} (added ${updated.length - existing.length})`);

// Double-check no duplicates
const allIds = updated.map(d => d.id);
const uniqueIds = new Set(allIds);
if (allIds.length !== uniqueIds.size) {
  console.error('WARNING: Duplicate IDs detected!');
  const seen = new Set();
  allIds.forEach(id => { if (seen.has(id)) console.error('  Duplicate:', id); seen.add(id); });
} else {
  console.log('✓ No duplicate IDs');
}

// Print newly added IDs
console.log('\nNewly added shows:');
toAdd.forEach(s => console.log(`  + ${s.id} — ${s.title} (${s.year})`));
