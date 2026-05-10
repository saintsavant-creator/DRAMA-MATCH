/**
 * Audit script: find highest-percentage Western → K-drama match pairs
 * Groups by genre to ensure variety
 */
const engine = require('../data/recommendation-engine');

// Get all shows via the engine's search
const allStats = engine.getStats();
console.log('Catalog stats:', allStats);

// Use getRecommendations for each western show to find best K-drama matches
// We'll hardcode a curated list of well-known Western shows to test
const westernShowIds = [
  // Thrillers/Crime
  'breaking-bad', 'better-call-saul', 'ozark', 'mindhunter', 'true-detective',
  'wire-the', 'sopranos', 'dexter', 'sherlock', 'hannibal',
  'criminal-minds', 'yellowstone', 'suits', 'narcos',
  // Sci-fi/Fantasy
  'stranger-things', 'game-of-thrones', 'black-mirror', 'lost', 'westworld',
  'the-witcher', 'dark', 'altered-carbon',
  // Romance/Drama
  'bridgerton', 'outlander', 'gilmore-girls', 'grey-anatomy',
  'emily-in-paris', 'sex-and-the-city', 'virgin-river', 'downton-abbey',
  // Comedy/Feel-good
  'the-office', 'schitts-creek', 'ted-lasso', 'parks-and-recreation',
  'brooklyn-nine-nine', 'friends', 'community', 'new-girl',
  // Action/Adventure
  'the-boys', 'peaky-blinders', 'vikings', 'last-of-us',
  'prison-break', '24', 'arrow',
  // Mystery/Supernatural
  'castle', 'mentalist', 'psych', 'monk', 'twin-peaks',
  'supernatural', 'american-horror-story', 'x-files'
];

const allPairs = [];

for (const showId of westernShowIds) {
  try {
    const result = engine.getRecommendations(showId, 10);
    if (result.error) {
      // Show might not exist under this ID, skip
      continue;
    }

    const sourceName = result.source.title;
    const sourceType = result.source.type;

    for (const rec of result.recommendations) {
      if (rec.matchScore >= 50) {
        allPairs.push({
          westernId: showId,
          westernTitle: sourceName,
          westernType: sourceType,
          kdramaId: rec.show.id,
          kdramaTitle: rec.show.title,
          kdramaType: rec.show.type,
          matchScore: rec.matchScore,
          reasoning: rec.reasoning,
          genres: rec.show.genres || []
        });
      }
    }
  } catch (e) {
    // Skip invalid shows
  }
}

// Sort by match score descending
allPairs.sort((a, b) => b.matchScore - a.matchScore);

console.log('\n=== TOP 30 HIGHEST-SCORING PAIRS ===');
allPairs.slice(0, 30).forEach(p => {
  console.log(`${p.matchScore}% | ${p.westernTitle} → ${p.kdramaTitle} [${p.kdramaId}] (${p.kdramaType})`);
});

console.log('\n=== 85%+ MATCH PAIRS ===');
const topPairs = allPairs.filter(p => p.matchScore >= 85);
console.log(`Found ${topPairs.length} pairs at 85%+`);
topPairs.forEach(p => {
  console.log(`${p.matchScore}% | ${p.westernTitle} → ${p.kdramaTitle} [${p.kdramaId}]`);
});

console.log('\n=== 80%+ MATCH PAIRS ===');
const goodPairs = allPairs.filter(p => p.matchScore >= 80);
console.log(`Found ${goodPairs.length} pairs at 80%+`);
goodPairs.slice(0, 20).forEach(p => {
  console.log(`${p.matchScore}% | ${p.westernTitle} → ${p.kdramaTitle} [${p.kdramaId}]`);
});

// Genre breakdown - find best pair per genre
const genreMap = {};
for (const pair of allPairs) {
  for (const genre of pair.genres) {
    if (!genreMap[genre] || genreMap[genre].matchScore < pair.matchScore) {
      genreMap[genre] = pair;
    }
  }
}

console.log('\n=== BEST PAIR PER GENRE ===');
Object.entries(genreMap)
  .sort((a, b) => b[1].matchScore - a[1].matchScore)
  .forEach(([genre, pair]) => {
    console.log(`${genre}: ${pair.matchScore}% | ${pair.westernTitle} → ${pair.kdramaTitle}`);
  });

// Check current featured pairs scores
console.log('\n=== CURRENT FEATURED PAIR SCORES ===');
const currentFeatured = engine.getFeaturedMatches();
currentFeatured.forEach(m => {
  console.log(`${m.matchScore}% | ${m.western.title} → ${m.kdrama.title}`);
});
