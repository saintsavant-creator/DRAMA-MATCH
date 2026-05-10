const engine = require('../data/recommendation-engine');
const catalog = engine.getAllShows();
const ids = catalog.map(s => s.id);
const checkIds = [
  'vincenzo', 'all-of-us-are-dead', 'twenty-five-twenty-one',
  'extraordinary-attorney-woo', 'reply-1988', 'the-glory', 'goblin',
  'doom-at-your-service', 'hometown-cha-cha-cha', 'penthouse',
  'the-penthouse', 'true-beauty', 'start-up', 'my-name',
  'dead-ringers-2023', 'stranger-things', 'the-office', 'squid-game'
];
checkIds.forEach(id => {
  const show = catalog.find(s => s.id === id);
  console.log(show ? `OK ${id} (${show.title})` : `MISSING ${id}`);
});
