const a = require('../data/kdramas.js');
const b = require('../data/kdramas-batch-a-thrillers.js');
const c = require('../data/kdramas-batch-b-romances.js');
const d = require('../data/kdramas-batch-c-mixed.js');
const e = require('../data/kdramas-batch-d-mixed.js');
const f = require('../data/kdramas-batch-m-mixed.js');
const g = require('../data/kdramas-batch-q-mixed.js');
const h = require('../data/kdramas-batch-w-mixed.js');
const i = require('../data/kdramas-batch-x-mixed.js');
const all = [...a, ...b, ...c, ...d, ...e, ...f, ...g, ...h, ...i];
console.log('Total K-dramas:', all.length);

const ids = all.map(x => x.id);
const dupIds = ids.filter((id, idx) => ids.indexOf(id) !== idx);
console.log('Duplicate IDs:', dupIds.length ? dupIds : 'None');

const titles = all.map(x => x.title);
const dupTitles = titles.filter((t, idx) => titles.indexOf(t) !== idx);
console.log('Duplicate titles:', dupTitles.length ? dupTitles : 'None');

const newIds = ['city-hall', 'time-between-dog-and-wolf', 'flower-boy-ramen-shop', 'i-need-romance-3', 'lovers-in-paris'];
console.log('\nNew entries verified:');
newIds.forEach(id => {
  const s = all.find(x => x.id === id);
  console.log(' ' + (s ? '✓' : '✗'), s ? s.title + ' (' + s.year + ', ' + s.episodes + ' eps)' : 'MISSING: ' + id);
});
console.log('\nBatch M total:', f.length);
