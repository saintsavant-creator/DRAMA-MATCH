/**
 * Script to identify shows missing poster paths
 */
const engine = require('../data/recommendation-engine');
const { POSTER_PATHS } = require('../data/poster-paths');

const allShows = engine.getAllShows();

// Count shows missing poster paths
const missing = allShows.filter(s => {
  return !(s.id in POSTER_PATHS);
});

console.log('Total shows:', allShows.length);
console.log('Shows WITH poster paths:', Object.keys(POSTER_PATHS).length);
console.log('Shows WITHOUT poster paths:', missing.length);
console.log('');

// Print all missing shows
console.log('All missing shows (id | title | year | network/origin):');
missing.forEach(s => {
  const source = s.network || s.countryOfOrigin || (s.director ? 'movie' : 'unknown');
  console.log(`${s.id} | ${s.title} | ${s.year || '?'} | ${source}`);
});
