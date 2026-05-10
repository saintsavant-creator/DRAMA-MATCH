/**
 * Merge batch O (mixed genres) into kdramas.js
 * 37 titles: 2025-2026 trending, thriller, historical, romance, fantasy, comedy, melodrama
 */
const fs = require('fs');
const path = require('path');

const kdramasPath = path.join(__dirname, '../data/kdramas.js');
const batchPath = path.join(__dirname, '../data/kdramas-batch-o-mixed.js');

const existing = require('../data/kdramas.js');
const batchEntries = require('../data/kdramas-batch-o-mixed.js');

const existingIds = new Set(existing.map(d => d.id));
const dupes = batchEntries.filter(d => existingIds.has(d.id)).map(d => d.id);
const toAdd = batchEntries.filter(d => !existingIds.has(d.id));

console.log(`Existing entries: ${existing.length}`);
console.log(`Batch entries: ${batchEntries.length}`);
console.log(`Duplicates to skip: ${dupes.length > 0 ? dupes.join(', ') : 'none'}`);
console.log(`Entries to add: ${toAdd.length}`);

if (toAdd.length === 0) {
  console.log('Nothing to add — all entries already exist in kdramas.js');
  process.exit(0);
}

// Read the current kdramas.js content
let kdramasContent = fs.readFileSync(kdramasPath, 'utf8');

// Remove the closing ]; from the end
kdramasContent = kdramasContent.trimEnd();
if (kdramasContent.endsWith('];')) {
  kdramasContent = kdramasContent.slice(0, -2).trimEnd();
} else {
  console.error('Unexpected end of kdramas.js - cannot safely append');
  process.exit(1);
}

// Build the new entries string
const newEntriesStr = toAdd.map(entry => {
  // Convert each entry to JS string representation
  return JSON.stringify(entry, null, 4)
    .replace(/"([^"]+)":/g, '$1:') // unquote keys
    .replace(/^{/gm, '  {')
    .replace(/^}/gm, '  }');
}).join(',\n\n');

// Append new entries and close the array
const updatedContent = kdramasContent + ',\n\n' + newEntriesStr + '\n];\n';

// Write back
fs.writeFileSync(kdramasPath, updatedContent, 'utf8');

console.log('\nSuccessfully merged!');

// Verify the result
delete require.cache[require.resolve('../data/kdramas.js')];
const updated = require('../data/kdramas.js');
console.log(`kdramas.js now has ${updated.length} entries (was ${existing.length}, added ${updated.length - existing.length})`);

// Double-check no duplicates
const allIds = updated.map(d => d.id);
const uniqueIds = new Set(allIds);
if (allIds.length !== uniqueIds.size) {
  console.error('WARNING: Duplicate IDs detected in merged file!');
  const seen = new Set();
  allIds.forEach(id => {
    if (seen.has(id)) console.error('  Duplicate:', id);
    seen.add(id);
  });
} else {
  console.log('✓ No duplicate IDs in merged file');
}
