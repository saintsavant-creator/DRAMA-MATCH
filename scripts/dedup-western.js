/**
 * Deduplicates western-shows.js by keeping the LAST occurrence of each ID.
 */
const fs = require('fs');
const path = require('path');
const shows = require('../data/western-shows');

const firstOccurrence = {};
const removeIndices = new Set();
shows.forEach((show, i) => {
  if (firstOccurrence[show.id] !== undefined) {
    removeIndices.add(firstOccurrence[show.id]);
    firstOccurrence[show.id] = i;
  } else {
    firstOccurrence[show.id] = i;
  }
});

const deduped = shows.filter((_, i) => !removeIndices.has(i));
console.log('Original:', shows.length, '-> Deduped:', deduped.length);
console.log('Removed indices:', [...removeIndices].sort((a,b) => a-b));

const output = 'module.exports = ' + JSON.stringify(deduped, null, 2) + ';\n';
fs.writeFileSync(path.join(__dirname, '../data/western-shows-deduped.js'), output);
console.log('Done');
