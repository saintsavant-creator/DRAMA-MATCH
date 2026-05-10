/**
 * Verify scores for our 8 target featured pairs
 */
const engine = require('../data/recommendation-engine');

const pairs = [
  { source: 'psych', target: 'cafe-minamdang', label: 'Psych → Cafe Minamdang' },
  { source: 'mindhunter', target: 'through-the-darkness', label: 'Mindhunter → Through the Darkness' },
  { source: 'dexter', target: 'mouse', label: 'Dexter → Mouse' },
  { source: 'outlander', target: 'moon-lovers-scarlet-heart-ryeo', label: 'Outlander → Moon Lovers' },
  { source: 'john-wick', target: 'a-bittersweet-life', label: 'John Wick → A Bittersweet Life' },
  { source: 'greys-anatomy', target: 'doctor-romantic', label: "Grey's Anatomy → Dr. Romantic" },
  { source: 'notting-hill', target: 'my-sassy-girl-movie', label: 'Notting Hill → My Sassy Girl' },
  { source: 'prison-break', target: 'big-mouth-kdrama', label: 'Prison Break → Big Mouth' },
];

console.log('=== FEATURED PAIR SCORES ===\n');
for (const pair of pairs) {
  const result = engine.getRecommendations(pair.source, 20);
  if (result.error) {
    console.log(`${pair.label}: ERROR - ${result.error}`);
    continue;
  }

  const match = result.recommendations.find(r => r.show.id === pair.target);
  if (match) {
    console.log(`✓ ${pair.label}: ${match.matchScore}%`);
  } else {
    // Check if target is at all in the catalog
    const allRecs = engine.getRecommendations(pair.source, 100);
    const found = allRecs.recommendations?.find(r => r.show.id === pair.target);
    if (found) {
      console.log(`✓ ${pair.label}: ${found.matchScore}% (found outside top 20)`);
    } else {
      console.log(`✗ ${pair.label}: target not found in recommendations`);
      if (allRecs.recommendations?.length > 0) {
        console.log(`  Top match: ${allRecs.recommendations[0].show.title} at ${allRecs.recommendations[0].matchScore}%`);
      }
    }
  }
}

// Also show top 5 for each western show
console.log('\n=== TOP 5 FOR EACH WESTERN SOURCE ===\n');
const westerns = ['psych', 'mindhunter', 'dexter', 'outlander', 'john-wick', 'greys-anatomy', 'notting-hill', 'prison-break'];
for (const id of westerns) {
  const result = engine.getRecommendations(id, 5);
  if (result.error) continue;
  console.log(`${result.source.title}:`);
  result.recommendations.forEach(r => {
    const marker = ['cafe-minamdang','through-the-darkness','mouse','moon-lovers-scarlet-heart-ryeo','a-bittersweet-life','doctor-romantic','my-sassy-girl-movie','big-mouth-kdrama'].includes(r.show.id) ? '⭐' : '  ';
    console.log(`  ${marker} ${r.matchScore}% ${r.show.title}`);
  });
  console.log('');
}
