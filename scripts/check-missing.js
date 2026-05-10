const { POSTER_PATHS } = require('../data/poster-paths');
const engine = require('../data/recommendation-engine');
const catalog = engine.getAllShows();
const missing = catalog.filter(s => !POSTER_PATHS[s.id]);
// Print first 15 (the ones in batch 1)
missing.slice(0, 15).forEach(s => console.log(s.id, '|', s.title, '|', s.year, '|', s.type));
console.log('\n--- Also test a popular western show ---');
const popular = missing.filter(s => s.type === 'western').slice(0, 5);
popular.forEach(s => console.log(s.id, '|', s.title, '|', s.year, '|', s.type));
