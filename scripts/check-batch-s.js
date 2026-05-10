const existing = require('../data/western-shows.js');
const batch = require('../data/western-batch-s.js');
const existingIds = new Set(existing.map(s => s.id));
const existingTitles = new Set(existing.map(s => s.title.toLowerCase()));

const newShows = batch.filter(function(s) {
  return !existingIds.has(s.id) && !existingTitles.has(s.title.toLowerCase());
});
const conflicts = batch.filter(function(s) {
  return existingIds.has(s.id) || existingTitles.has(s.title.toLowerCase());
});

console.log('Truly new shows in batch-s:', newShows.length);
newShows.forEach(function(s) { console.log(' NEW:', s.id, '-', s.title); });
console.log('\nConflicts to skip:', conflicts.length);
conflicts.forEach(function(s) { console.log(' DUPE:', s.id, '-', s.title); });
