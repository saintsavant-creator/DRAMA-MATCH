const { POSTER_PATHS } = require('../data/poster-paths');
const engine = require('../data/recommendation-engine');
const catalog = engine.getAllShows();
const missing = catalog.filter(s => !POSTER_PATHS[s.id]);
const covered = catalog.filter(s => POSTER_PATHS[s.id]);

// Count by type
const missingByType = {};
const coveredByType = {};
missing.forEach(s => { missingByType[s.type] = (missingByType[s.type] || 0) + 1; });
covered.forEach(s => { coveredByType[s.type] = (coveredByType[s.type] || 0) + 1; });

console.log('Missing by type:');
Object.entries(missingByType).sort((a, b) => b[1] - a[1]).forEach(([type, count]) => {
  console.log(`  ${type}: ${count} missing (${coveredByType[type] || 0} covered)`);
});

// Print all missing show titles + IDs as a flat JSON for batch processing
const allMissing = missing.map(s => ({ id: s.id, title: s.title, year: s.year, type: s.type }));
const fs = require('fs');
fs.writeFileSync('scripts/missing-shows.json', JSON.stringify(allMissing, null, 2));
console.log('\nWrote missing-shows.json with', allMissing.length, 'entries');
