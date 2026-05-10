/**
 * Merge western-batch-s.js (35 net-new shows) into western-shows.js
 * Includes Invincible, Agatha All Along, Daredevil Born Again, Ms. Marvel,
 * She-Hulk, Hawkeye, Andor S2, Elsbeth, Night Court, What We Do in the Shadows, etc.
 * Duplicates (20 entries already in catalog) are automatically filtered by ID + title check.
 */
const fs = require('fs');
const path = require('path');

const westernPath = path.join(__dirname, '../data/western-shows.js');

const existing = require('../data/western-shows.js');
const batchEntries = require('../data/western-batch-s.js');

const existingIds = new Set(existing.map(function(s) { return s.id; }));
const existingTitles = new Set(existing.map(function(s) { return s.title.toLowerCase(); }));

const dupes = batchEntries.filter(function(s) { return existingIds.has(s.id) || existingTitles.has(s.title.toLowerCase()); }).map(function(s) { return s.id; });
const toAdd = batchEntries.filter(function(s) { return !existingIds.has(s.id) && !existingTitles.has(s.title.toLowerCase()); });

console.log('=== Merge western-batch-s into western-shows.js ===');
console.log('Existing entries: ' + existing.length);
console.log('Batch entries:    ' + batchEntries.length);
console.log('Duplicates to skip (' + dupes.length + '): ' + (dupes.length > 0 ? dupes.join(', ') : 'none'));
console.log('Entries to add:   ' + toAdd.length);

if (toAdd.length === 0) {
  console.log('Nothing to add — all entries already exist in western-shows.js');
  process.exit(0);
}

// Read the current western-shows.js content
var westernContent = fs.readFileSync(westernPath, 'utf8');

// Remove the closing ]; from the end
westernContent = westernContent.trimEnd();
if (westernContent.endsWith('];')) {
  westernContent = westernContent.slice(0, -2).trimEnd();
} else {
  console.error('Unexpected end of western-shows.js - cannot safely append');
  process.exit(1);
}

// Build the new entries string
var newEntriesStr = toAdd.map(function(entry) {
  return JSON.stringify(entry, null, 4)
    .replace(/"([^"]+)":/g, '$1:') // unquote keys
    .replace(/^{/gm, '  {')
    .replace(/^}/gm, '  }');
}).join(',\n\n');

// Append new entries and close the array
var updatedContent = westernContent + ',\n\n' + newEntriesStr + '\n];\n';

// Write back
fs.writeFileSync(westernPath, updatedContent, 'utf8');

console.log('\nSuccessfully merged!');

// Verify the result
delete require.cache[require.resolve('../data/western-shows.js')];
var updated = require('../data/western-shows.js');
console.log('western-shows.js now has ' + updated.length + ' entries (was ' + existing.length + ', added ' + (updated.length - existing.length) + ')');

// Double-check no duplicates
var allIds = updated.map(function(s) { return s.id; });
var uniqueIds = new Set(allIds);
if (allIds.length !== uniqueIds.size) {
  console.error('WARNING: Duplicate IDs detected in merged file!');
  var seen = new Set();
  allIds.forEach(function(id) {
    if (seen.has(id)) console.error('  Duplicate:', id);
    seen.add(id);
  });
} else {
  console.log('✓ No duplicate IDs in merged file');
}
