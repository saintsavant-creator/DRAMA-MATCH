// Validate the batch-f additions to the catalog
const path = require('path');

// Load the base files + new batch files (same as recommendation engine will)
const kdramas = [
  ...require('../data/kdramas'),
  ...require('../data/kdramas-batch-f-2026'),
];
const westernShows = [
  ...require('../data/western-shows'),
  ...require('../data/western-batch-f-2026-shows'),
];
const koreanMovies = require('../data/korean-movies');
const westernMovies = [
  ...require('../data/western-movies'),
  ...require('../data/western-batch-f-2026-movies'),
];
const cdramas = [
  ...require('../data/cdramas'),
  ...require('../data/cdramas-batch-f-2026'),
];
const jdramas = require('../data/jdramas');
const animeData = require('../data/anime');

const all = [...kdramas, ...westernShows, ...koreanMovies, ...westernMovies, ...cdramas, ...jdramas, ...animeData];

console.log('\n=== Catalog Size After Batch F ===');
console.log('K-dramas:', kdramas.length, '(+' + require('../data/kdramas-batch-f-2026').length + ')');
console.log('Western Shows:', westernShows.length, '(+' + require('../data/western-batch-f-2026-shows').length + ')');
console.log('Western Movies:', westernMovies.length, '(+' + require('../data/western-batch-f-2026-movies').length + ')');
console.log('C-dramas:', cdramas.length, '(+' + require('../data/cdramas-batch-f-2026').length + ')');
console.log('J-dramas:', jdramas.length);
console.log('K-movies:', koreanMovies.length);
console.log('Anime:', animeData.length);
console.log('TOTAL:', all.length);

// Check for duplicates
const ids = all.map(t => t.id);
const seen = new Set();
const dupes = [];
ids.forEach(id => {
  if (seen.has(id)) dupes.push(id);
  seen.add(id);
});

console.log('\n=== Dedup Check ===');
if (dupes.length === 0) {
  console.log('✓ No duplicates found');
} else {
  console.log('✗ DUPLICATES FOUND:', dupes.length);
  dupes.forEach(id => console.log(' -', id));
}

// Validate new entries have required fields
const newEntries = [
  ...require('../data/kdramas-batch-f-2026'),
  ...require('../data/cdramas-batch-f-2026'),
  ...require('../data/western-batch-f-2026-shows'),
  ...require('../data/western-batch-f-2026-movies'),
];
console.log('\n=== New Entries Validation ===');
console.log('Total new entries:', newEntries.length);
let issues = 0;
newEntries.forEach(e => {
  const required = ['id', 'title', 'year', 'synopsis', 'genres', 'themes', 'tropes', 'tone', 'streaming', 'actors', 'matchReasoningHints'];
  required.forEach(field => {
    if (!e[field] || (Array.isArray(e[field]) && e[field].length === 0)) {
      console.log('  MISSING', field, 'on', e.id);
      issues++;
    }
  });
  if (!e.episodes && !e.runtime) {
    console.log('  MISSING episodes/runtime on', e.id);
    issues++;
  }
});
if (issues === 0) {
  console.log('✓ All required fields present on all new entries');
} else {
  console.log('✗', issues, 'issues found');
}

// Print new entry IDs
console.log('\n=== New Entry IDs ===');
newEntries.forEach(e => console.log('+', e.id, '—', e.title, '(' + e.year + ')'));
