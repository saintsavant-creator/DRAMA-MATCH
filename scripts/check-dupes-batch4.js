Object.keys(require.cache).forEach(k => { if (k.includes('/data/')) delete require.cache[k]; });
const c = require('../data/cdramas.js');
const k = require('../data/kdramas.js');
const w = require('../data/western-shows.js');

function findDupes(arr, label) {
  const ids = arr.map(s => s.id);
  const seen = {};
  const dupes = [];
  ids.forEach(id => {
    if (seen[id]) dupes.push(id);
    else seen[id] = true;
  });
  if (dupes.length) {
    console.log(`${label} duplicates (${dupes.length}):`, dupes);
  } else {
    console.log(`${label}: no duplicates ✅`);
  }
}

findDupes(k, 'kdramas.js');
findDupes(c, 'cdramas.js');
findDupes(w, 'western-shows.js');
