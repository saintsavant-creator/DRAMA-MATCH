// Run from project root: node scripts/check-featured-scores.js
const engine = require('../data/recommendation-engine');

// Get the allShows lookup and calculateMatch - they are internal
// So we'll use the public getRecommendations API to infer scores
// Or we can test the getFeaturedMatches and see what it returns

// Let's look at top matches for specific shows
const testWesterns = [
  'succession',
  'bridgerton',
  'stranger-things',
  'the-bear',
  'wednesday',
  'the-last-of-us',
  'severance',
  'white-lotus',
  'beef',
  'only-murders-in-the-building',
  'shogun',
  'emily-in-paris',
  'ted-lasso',
  'never-have-i-ever',
  'squid-game',
  'adolescence',
  'baby-reindeer',
  'the-gentlemen',
  'you',
  'suits',
];

const results = [];

for (const showId of testWesterns) {
  try {
    const recs = engine.getRecommendations(showId, { limit: 3 });
    if (recs && recs.recommendations && recs.recommendations.length > 0) {
      const top = recs.recommendations[0];
      results.push({
        score: top.score,
        western: recs.sourceShow ? recs.sourceShow.title : showId,
        westernId: showId,
        kdrama: top.show.title,
        kdramaId: top.show.id,
      });
      console.log(`${top.score}% | ${recs.sourceShow ? recs.sourceShow.title : showId} -> ${top.show.title} (${top.show.id})`);
    } else {
      console.log('NO RECS for:', showId);
    }
  } catch(e) {
    console.log('ERROR for', showId, ':', e.message);
  }
}

// Show current featured
console.log('\n=== CURRENT FEATURED ===');
const current = engine.getFeaturedMatches();
for (const m of current) {
  console.log(`${m.matchScore}% | ${m.western.title} -> ${m.kdrama.title}`);
}
