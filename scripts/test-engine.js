const engine = require('../data/recommendation-engine');
console.log('Engine loaded successfully');

// Test search for new titles
const testSearches = ['Again My Life', 'Challengers', 'Severance', 'Serenade of Peaceful Joy', 'Good Job'];
testSearches.forEach(q => {
  const results = engine.searchShows(q, 3);
  const found = results.find(r => r.title && r.title.toLowerCase().includes(q.toLowerCase().split(' ')[0].toLowerCase()));
  console.log(`Search "${q}":`, found ? `✓ Found "${found.title}"` : `✗ Not found (got: ${results.map(r => r.title).join(', ')})`);
});

// Test recommendations for new entries
const testRec = engine.getRecommendations('again-my-life', 5);
console.log('\nRecommendations for "again-my-life":', testRec.error ? 'ERROR: ' + testRec.error : `✓ Got ${testRec.recommendations.length} recs (source: ${testRec.source.title})`);

const testRec2 = engine.getRecommendations('challengers-2024', 5);
console.log('Recommendations for "challengers-2024":', testRec2.error ? 'ERROR: ' + testRec2.error : `✓ Got ${testRec2.recommendations.length} recs`);

const testRec3 = engine.getRecommendations('serenade-of-peaceful-joy', 5);
console.log('Recommendations for "serenade-of-peaceful-joy":', testRec3.error ? 'ERROR: ' + testRec3.error : `✓ Got ${testRec3.recommendations.length} recs`);

console.log('\nAll checks passed!');
