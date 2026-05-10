const engine = require('../data/recommendation-engine');
const catalog = engine.getAllShows();
const ids = catalog.map(s => s.id);

// Check these IDs exist in catalog
const checkIds = [
  'money-heist', 'brooklyn-nine-nine', 'downton-abbey', 'the-witcher', 'dark',
  'descendants-of-the-sun', 'my-love-from-the-star', 'whats-wrong-with-secretary-kim',
  'strong-woman-do-bong-soon', 'flower-of-evil', 'hotel-del-luna', 'itaewon-class',
  'mr-sunshine', 'my-mister', 'misaeng', 'tale-of-the-nine-tailed', 'love-in-the-moonlight',
  'queen-of-tears', 'my-name', 'move-to-heaven', 'weak-hero-class-1',
  'stranger-things', 'the-office', 'squid-game', 'alchemy-of-souls', 'business-proposal',
  'vincenzo', 'dead-ringers-2023'
];

checkIds.forEach(id => {
  const found = ids.includes(id);
  console.log(found ? 'OK' : 'MISSING', id);
});
