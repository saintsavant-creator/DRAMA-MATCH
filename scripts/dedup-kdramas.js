/**
 * Deduplicates kdramas.js by keeping the LAST occurrence of each ID.
 * Last occurrence has the better metadata (matchReasoningHints, better synopses).
 */

const fs = require('fs');
const path = require('path');
const kdramas = require('../data/kdramas');

// Find first occurrence of duplicate IDs (those should be removed)
const firstOccurrence = {};
const removeIndices = new Set();
kdramas.forEach((show, i) => {
  if (firstOccurrence[show.id] !== undefined) {
    // This ID was seen before — remove the FIRST occurrence (older, less complete)
    removeIndices.add(firstOccurrence[show.id]);
    firstOccurrence[show.id] = i; // Update to track the latest occurrence
  } else {
    firstOccurrence[show.id] = i;
  }
});

const deduped = kdramas.filter((_, i) => !removeIndices.has(i));

console.log('Original count:', kdramas.length);
console.log('After dedup:', deduped.length);
console.log('Removed indices:', [...removeIndices].sort((a, b) => a - b));

// Verify the deduped entries keep the better version
const dupeIds = ['lovely-runner', 'marry-my-husband', 'little-women-kdrama'];
dupeIds.forEach(id => {
  const entries = deduped.filter(s => s.id === id);
  const entry = entries[0];
  console.log(id + ': ' + entries.length + ' entry, hints: ' + (entry && entry.matchReasoningHints ? 'YES (' + entry.matchReasoningHints.length + ')' : 'NO'));
});

// Write the deduplicated array as a JSON module
const output = 'module.exports = ' + JSON.stringify(deduped, null, 2) + ';\n';
const outPath = path.join(__dirname, '../data/kdramas-deduped.js');
fs.writeFileSync(outPath, output, 'utf8');
console.log('Written to:', outPath);
