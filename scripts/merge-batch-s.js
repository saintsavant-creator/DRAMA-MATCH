/**
 * Merge Batch S (Streaming-focused) — 35 new titles into main data files
 * 20 K-dramas (kdramas-batch-p.js) + 15 Western shows/movies (western-batch-p.js)
 * All titles on Netflix, Amazon Prime Video, or Disney+
 */
const fs = require('fs');
const path = require('path');

const kdramas = require('../data/kdramas.js');
const westernShows = require('../data/western-shows.js');
const westernMovies = require('../data/western-movies.js');
const cdramas = require('../data/cdramas.js');
const koreanMovies = require('../data/korean-movies.js');

const kdBatch = require('../data/kdramas-batch-p.js');
const wBatch = require('../data/western-batch-p.js');

// --- Duplicate detection across ALL catalogs ---
const allExisting = [...kdramas, ...westernShows, ...westernMovies, ...cdramas, ...koreanMovies];
const existingIds = new Set(allExisting.map(function(x) { return x.id; }));

console.log('=== Batch S Merge (Streaming-focused) ===');
console.log('Existing catalog: ' + allExisting.length + ' titles');

let duplicates = 0;
[...kdBatch, ...wBatch].forEach(function(title) {
  if (existingIds.has(title.id)) {
    console.error('  DUPLICATE: ' + title.id);
    duplicates++;
  }
});

if (duplicates > 0) {
  console.error('\nABORTED: ' + duplicates + ' duplicate(s) found.');
  process.exit(1);
}

// Split western batch into shows and movies
const newWesternShows = wBatch.filter(function(x) { return x.type !== 'movie'; });
const newWesternMovies = wBatch.filter(function(x) { return x.type === 'movie'; });

console.log('New K-dramas:        ' + kdBatch.length);
console.log('New Western shows:   ' + newWesternShows.length);
console.log('New Western movies:  ' + newWesternMovies.length);
console.log('Total new titles:    ' + (kdBatch.length + newWesternShows.length + newWesternMovies.length));

// Merge arrays
const mergedKdramas = [...kdramas, ...kdBatch];
const mergedWesternShows = [...westernShows, ...newWesternShows];
const mergedWesternMovies = [...westernMovies, ...newWesternMovies];

function serialize(arr) {
  return 'module.exports = ' + JSON.stringify(arr, null, 2) + ';\n';
}

fs.writeFileSync(path.join(__dirname, '../data/kdramas.js'), serialize(mergedKdramas));
fs.writeFileSync(path.join(__dirname, '../data/western-shows.js'), serialize(mergedWesternShows));
fs.writeFileSync(path.join(__dirname, '../data/western-movies.js'), serialize(mergedWesternMovies));

const newTotal = allExisting.length + kdBatch.length + wBatch.length;
console.log('\n✓ Merged successfully');
console.log('  K-dramas:       ' + mergedKdramas.length + ' (was ' + kdramas.length + ')');
console.log('  Western shows:  ' + mergedWesternShows.length + ' (was ' + westernShows.length + ')');
console.log('  Western movies: ' + mergedWesternMovies.length + ' (was ' + westernMovies.length + ')');
console.log('  New total:      ' + newTotal + ' (was ' + allExisting.length + ', added ' + (newTotal - allExisting.length) + ')');

// Verify no dupes in merged files
const mergedAll = [...mergedKdramas, ...mergedWesternShows, ...mergedWesternMovies, ...cdramas, ...koreanMovies];
const mergedIds = mergedAll.map(function(x) { return x.id; });
const mergedUnique = new Set(mergedIds);
if (mergedIds.length !== mergedUnique.size) {
  console.error('\nWARNING: Duplicate IDs in merged files!');
  process.exit(1);
} else {
  console.log('✓ Zero duplicate IDs in merged catalog');
}
