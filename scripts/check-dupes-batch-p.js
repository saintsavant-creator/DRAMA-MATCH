const kd = require('../data/kdramas.js');
const ws = require('../data/western-shows.js');
const wm = require('../data/western-movies.js');
const cd = require('../data/cdramas.js');
const km = require('../data/korean-movies.js');

const kdBatch = require('../data/kdramas-batch-p.js');
const wBatch = require('../data/western-batch-p.js');

const allExisting = [...kd, ...ws, ...wm, ...cd, ...km];
const existingIds = new Set(allExisting.map(function(x) { return x.id; }));

console.log('Existing catalog:', allExisting.length, 'titles');

const newBatch = [...kdBatch, ...wBatch];
let dupes = 0;
newBatch.forEach(function(t) {
  if (existingIds.has(t.id)) {
    console.log('DUPLICATE:', t.id);
    dupes++;
  }
});

if (dupes === 0) {
  console.log('Zero duplicates — clean batch!');
  console.log('After merge:', allExisting.length + newBatch.length, 'titles');
} else {
  console.log(dupes, 'duplicate(s) found — fix before merging');
  process.exit(1);
}
