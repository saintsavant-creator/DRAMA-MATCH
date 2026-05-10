const path = require('path');
const dataDir = path.join(__dirname, '..', 'data');
Object.keys(require.cache).forEach(k => { if (k.includes('/data/')) delete require.cache[k]; });

const kdramas = require(path.join(dataDir, 'kdramas.js'));
const cdramas = require(path.join(dataDir, 'cdramas.js'));
const westernShows = require(path.join(dataDir, 'western-shows.js'));

const allTitles = new Set([
  ...kdramas, ...cdramas, ...westernShows
].map(d => d.title.toLowerCase()));

const allIds = new Set([
  ...kdramas, ...cdramas, ...westernShows
].map(d => d.id));

const check = (id, title) => {
  const ok = !allIds.has(id) && !allTitles.has(title.toLowerCase());
  return { id, title, ok };
};

// K-drama replacements
const kdramaReplacements = [
  check('365-repeat-the-year', '365: Repeat the Year'),
  check('nobody-knows-kdrama', 'Nobody Knows'),
  check('luca-the-beginning', 'L.U.C.A.: The Beginning'),
];

// C-drama replacements
const cdramaReplacements = [
  check('love-scenery', 'Love Scenery'),
  check('find-yourself', 'Find Yourself'),
  check('well-intended-love', 'Well-Intended Love'),
  check('the-princess-royal', 'The Princess Royal'),
  check('ancient-detective', 'Ancient Detective'),
  check('word-of-honor', 'Word of Honor'),
  check('love-02o', 'Love O2O'),
];

// Western replacements
const westernReplacements = [
  check('the-fall-bbc', 'The Fall'),
  check('the-rings-of-power', 'The Rings of Power'),
  check('fleabag', 'Fleabag'),
  check('the-great-hulu', 'The Great'),
  check('surface-apple', 'Surface'),
  check('the-day-of-the-jackal', 'The Day of the Jackal'),
  check('sanditon', 'Sanditon'),
  check('grantchester', 'Grantchester'),
];

console.log('K-drama replacements:');
kdramaReplacements.forEach(r => console.log(`  ${r.ok ? '✅ CLEAN' : '❌ DUP'}: ${r.id} — "${r.title}"`));

console.log('\nC-drama replacements:');
cdramaReplacements.forEach(r => console.log(`  ${r.ok ? '✅ CLEAN' : '❌ DUP'}: ${r.id} — "${r.title}"`));

console.log('\nWestern replacements:');
westernReplacements.forEach(r => console.log(`  ${r.ok ? '✅ CLEAN' : '❌ DUP'}: ${r.id} — "${r.title}"`));
