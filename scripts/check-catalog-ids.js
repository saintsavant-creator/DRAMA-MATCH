const kdramas = require('../data/kdramas.js');
const batches = [
  'kdramas-batch-a-thrillers','kdramas-batch-b-romances','kdramas-batch-c-mixed',
  'kdramas-batch-d-mixed','kdramas-batch-h','kdramas-batch-i','kdramas-batch-m-mixed',
  'kdramas-batch-o-mixed','kdramas-batch-p-viki','kdramas-batch-p','kdramas-batch-q-mixed',
  'kdramas-batch-r-streaming','kdramas-batch-w-mixed','kdramas-batch-x-mixed',
  'kdramas-batch-y-mixed','kdramas-batch-z-mixed'
].map(b => require('../data/'+b+'.js'));
const cdramas = require('../data/cdramas.js');
const jdramas = require('../data/jdramas.js');
const anime = require('../data/anime.js');
const wshows = require('../data/western-shows.js');
const wbatches = [
  'western-batch-crime-detective','western-batch-expansion-2026','western-batch-p',
  'western-batch-r-streaming','western-batch-s-romance','western-batch-s',
  'western-batch-t'
].map(b => require('../data/'+b+'.js'));
const wmovies = require('../data/western-movies.js');
const kmovies = require('../data/korean-movies.js');
const all = [kdramas, ...batches, cdramas, jdramas, anime, wshows, ...wbatches, wmovies, kmovies].flat();
console.log('Total:', all.length);
const ids = all.map(t => t.id);
const dups = ids.filter((id, i) => ids.indexOf(id) !== i);
console.log('Duplicates:', dups.length, dups);
// Print all IDs sorted
const sorted = [...ids].sort();
sorted.forEach(id => console.log(id));
