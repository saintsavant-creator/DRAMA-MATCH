// Clear cache
Object.keys(require.cache).forEach(function(key) { if (key.includes('/data/')) delete require.cache[key]; });
const kdramas = require('../data/kdramas');
const cdramas = require('../data/cdramas');
const jdramas = require('../data/jdramas');
const anime = require('../data/anime');
const ws = require('../data/western-shows');
const wm = require('../data/western-movies');
const km = require('../data/korean-movies');
const all = [...kdramas, ...cdramas, ...jdramas, ...anime, ...ws, ...wm, ...km];
console.log('Total catalog:', all.length);

const newIds = [
  'do-you-like-brahms', 'mad-for-each-other', 'another-oh-hae-young', 'yong-pal',
  'live-up-to-your-name', 'come-back-mister', 'wok-of-love', 'my-father-is-strange',
  'school-2017', 'when-my-love-blooms', 'sassy-go-go', 'my-girl-kdrama',
  'love-is-sweet-cdrama', 'you-are-my-hero-cdrama', 'douluo-continent', 'the-sword-and-the-brocade',
  'the-kings-avatar', 'my-little-happiness', 'crush-cdrama', 'accidentally-in-love',
  'long-vacation-jdrama', 'rich-man-poor-woman', 'proposal-daisakusen', 'code-blue-jdrama',
  'dandadan', 'the-promised-neverland', 'bungo-stray-dogs',
  'lessons-in-chemistry', 'griselda-netflix', 'the-perfect-couple', 'maniac-netflix', 'devs-hulu',
  'saltburn', 'anatomy-of-a-fall', 'killers-of-the-flower-moon'
];

const allIds = new Set(all.map(function(d) { return d.id; }));
const found = newIds.filter(function(id) { return allIds.has(id); });
const missing = newIds.filter(function(id) { return !allIds.has(id); });
console.log('New titles found:', found.length, '/', newIds.length);
if (missing.length) {
  console.log('MISSING:', missing);
} else {
  console.log('All 35 new titles verified in catalog!');
}
