/**
 * Brute-force scan: find highest-scoring Western → K-drama pairs across all 241x360 combinations
 */
const engine = require('../data/recommendation-engine');
const westernShowsData = require('../data/western-shows');
const westernMoviesData = require('../data/western-movies');

const stats = engine.getStats();
console.log('Catalog:', stats);
console.log(`Western shows: ${westernShowsData.length}, Western movies: ${westernMoviesData.length}`);

// Brute force all recommendations
const topPairs = [];
let count = 0;

for (const show of [...westernShowsData, ...westernMoviesData]) {
  const result = engine.getRecommendations(show.id, 10);
  if (result.error) {
    // console.log('Missing:', show.id);
    continue;
  }
  count++;
  for (const rec of result.recommendations || []) {
    topPairs.push({
      westernId: show.id,
      westernTitle: result.source.title,
      westernType: result.source.type,
      kdramaId: rec.show.id,
      kdramaTitle: rec.show.title,
      kdramaType: rec.show.type,
      matchScore: rec.matchScore,
      reasoning: rec.reasoning,
      genres: rec.show.genres || []
    });
  }
}

console.log(`Processed ${count} shows, found ${topPairs.length} total pairs`);

// Sort by score
topPairs.sort((a, b) => b.matchScore - a.matchScore);

console.log('\n=== TOP 50 PAIRS (GLOBAL) ===');
let shown = 0;
for (const p of topPairs) {
  if (shown >= 50) break;
  console.log(`${p.matchScore}% | ${p.westernTitle} → ${p.kdramaTitle} [${p.kdramaId}] (${p.kdramaType})`);
  shown++;
}

console.log('\n=== DISTRIBUTION ===');
const dist = { 90: 0, 80: 0, 70: 0, 60: 0, 50: 0, other: 0 };
for (const p of topPairs) {
  if (p.matchScore >= 90) dist[90]++;
  else if (p.matchScore >= 80) dist[80]++;
  else if (p.matchScore >= 70) dist[70]++;
  else if (p.matchScore >= 60) dist[60]++;
  else if (p.matchScore >= 50) dist[50]++;
  else dist.other++;
}
console.log('90%+:', dist[90]);
console.log('80-89%:', dist[80]);
console.log('70-79%:', dist[70]);
console.log('60-69%:', dist[60]);
console.log('50-59%:', dist[50]);
console.log('<50%:', dist.other);

// Diverse high-scoring selection
console.log('\n=== RECOMMENDED FEATURED SET (diverse genres, top scores) ===');
const usedWestern = new Set();
const usedKdrama = new Set();
const selected = [];
for (const pair of topPairs) {
  if (usedWestern.has(pair.westernId)) continue;
  if (usedKdrama.has(pair.kdramaId)) continue;
  selected.push(pair);
  usedWestern.add(pair.westernId);
  usedKdrama.add(pair.kdramaId);
  if (selected.length >= 20) break;
}
selected.forEach(p => {
  console.log(`${p.matchScore}% | ${p.westernTitle} → ${p.kdramaTitle} [${p.kdramaId}] (${p.kdramaType})`);
});
