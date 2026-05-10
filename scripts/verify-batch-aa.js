const k = require('../data/kdramas');
const c = require('../data/cdramas');
const j = require('../data/jdramas');
const a = require('../data/anime');
const ws = require('../data/western-shows');
const wm = require('../data/western-movies');
console.log('=== Catalog Counts ===');
console.log('kdramas:', k.length);
console.log('cdramas:', c.length);
console.log('jdramas:', j.length);
console.log('anime:', a.length);
console.log('western-shows:', ws.length);
console.log('western-movies:', wm.length);
console.log('TOTAL:', k.length + c.length + j.length + a.length + ws.length + wm.length + 18);

const newIds = [
  'nevertheless-kdrama','thirty-nine-kdrama','law-school-kdrama','bloodhounds-kdrama',
  'yumi-cells','one-ordinary-day','under-the-queen-umbrella','spring-night-kdrama',
  'queen-in-hyuns-man','connect-kdrama',
  'hidden-love-cdrama','meet-yourself','a-dream-of-splendor','forever-and-ever-cdrama',
  'legally-romance','go-ahead-cdrama','day-and-night-cdrama','nirvana-in-fire-2',
  'hana-yori-dango','nodame-cantabile','liar-game','one-litre-of-tears','border-jdrama',
  'dr-stone','made-in-abyss','mushoku-tensei','komi-cant-communicate','my-next-life-as-a-villainess',
  'beef-netflix','the-white-lotus','from-scratch-netflix','you-netflix','one-day-netflix',
  'the-half-of-it','always-be-my-maybe'
];

const allData = [...k,...c,...j,...a,...ws,...wm];
const allIds = new Set(allData.map(x => x.id));
const found = newIds.filter(id => allIds.has(id));
const missing = newIds.filter(id => !allIds.has(id));
console.log('\n=== New Titles Verification ===');
console.log('New IDs found:', found.length, '/ 35');
if (missing.length > 0) {
  console.log('MISSING:', missing);
  process.exit(1);
} else {
  console.log('All 35 new titles confirmed in catalog!');
}

// Check syntax validity
k.forEach(show => { if (!show.id || !show.title) throw new Error('Invalid K-drama entry: ' + JSON.stringify(show)); });
c.forEach(show => { if (!show.id || !show.title) throw new Error('Invalid C-drama entry: ' + JSON.stringify(show)); });
j.forEach(show => { if (!show.id || !show.title) throw new Error('Invalid J-drama entry: ' + JSON.stringify(show)); });
a.forEach(show => { if (!show.id || !show.title) throw new Error('Invalid Anime entry: ' + JSON.stringify(show)); });
ws.forEach(show => { if (!show.id || !show.title) throw new Error('Invalid Western show entry: ' + JSON.stringify(show)); });
wm.forEach(show => { if (!show.id || !show.title) throw new Error('Invalid Western movie entry: ' + JSON.stringify(show)); });
console.log('All entries have valid id and title.');

// Check new entries have matchReasoningHints
const newEntries = allData.filter(x => newIds.includes(x.id));
const missingHints = newEntries.filter(x => !x.matchReasoningHints || x.matchReasoningHints.length < 5);
if (missingHints.length > 0) {
  console.log('MISSING matchReasoningHints:', missingHints.map(x => x.id));
} else {
  console.log('All new entries have 5 matchReasoningHints.');
}
