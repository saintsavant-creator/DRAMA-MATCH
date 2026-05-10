/**
 * Verify Batch 4 additions — check all 35 new titles are in catalog
 */
const path = require('path');
const dataDir = path.join(__dirname, '../data');
Object.keys(require.cache).forEach(k => { if (k.includes('/data/')) delete require.cache[k]; });

const kdramas = require(path.join(dataDir, 'kdramas.js'));
const cdramas = require(path.join(dataDir, 'cdramas.js'));
const westernShows = require(path.join(dataDir, 'western-shows.js'));

const allIds = new Set([...kdramas, ...cdramas, ...westernShows].map(d => d.id));
const allTitles = new Set([...kdramas, ...cdramas, ...westernShows].map(d => d.title.toLowerCase()));

const expected = [
  // K-dramas
  ['lovestruck-in-the-city', 'Lovestruck in the City'],
  ['live-on', 'Live On'],
  ['imitation', 'Imitation'],
  ['again-my-life', 'Again My Life'],
  ['seasons-of-blossom', 'Seasons of Blossom'],
  ['secret-royal-inspector-and-joy', 'Secret Royal Inspector & Joy'],
  ['tale-of-nokdu', 'The Tale of Nokdu'],
  ['my-country-the-new-age', 'My Country: The New Age'],
  ['kingdom-ashin-of-the-north', 'Kingdom: Ashin of the North'],
  ['rookie-cops', 'Rookie Cops'],
  ['365-repeat-the-year', '365: Repeat the Year'],
  ['nobody-knows-kdrama', 'Nobody Knows'],
  ['luca-the-beginning', 'L.U.C.A.: The Beginning'],
  // C-dramas
  ['ten-miles-of-peach-blossoms', 'Ten Miles of Peach Blossoms'],
  ['legend-of-fuyao', 'The Legend of Fuyao'],
  ['when-a-snail-falls-in-love', 'When a Snail Falls in Love'],
  ['new-life-begins', 'New Life Begins'],
  ['the-blooms-at-ruyi-pavilion', 'The Blooms at Ruyi Pavilion'],
  ['hikaru-no-go-cdrama', 'Hikaru no Go'],
  ['someday-or-one-day', 'Someday or One Day'],
  ['unrequited-love-cdrama', 'Unrequited Love'],
  ['a-little-thing-called-first-love', 'A Little Thing Called First Love'],
  ['goodbye-my-princess', 'Goodbye My Princess'],
  ['the-story-of-hua-zhi', 'The Story of Hua Zhi'],
  ['find-yourself', 'Find Yourself'],
  // Western
  ['top-boy', 'Top Boy'],
  ['sweet-tooth', 'Sweet Tooth'],
  ['jury-duty', 'Jury Duty'],
  ['wolf-like-me', 'Wolf Like Me'],
  ['black-bird-apple', 'Black Bird'],
  ['culprits', 'Culprits'],
  ['1899', '1899'],
  ['the-essex-serpent', 'The Essex Serpent'],
  ['the-rings-of-power', 'The Rings of Power'],
  ['sanditon', 'Sanditon'],
];

console.log('=== BATCH 4 VERIFICATION ===');
console.log(`Expected: ${expected.length} new titles\n`);

let passed = 0;
let failed = 0;

expected.forEach(([id, title]) => {
  const byId = allIds.has(id);
  if (byId) {
    console.log(`  ✅ ${id} — "${title}"`);
    passed++;
  } else {
    console.log(`  ❌ MISSING: ${id} — "${title}"`);
    failed++;
  }
});

console.log(`\n${passed}/${expected.length} titles verified`);
console.log(`K-dramas now: ${kdramas.length} (was 654)`);
console.log(`C-dramas now: ${cdramas.length} (was 156)`);
console.log(`Western shows now: ${westernShows.length} (was 519)`);
if (failed === 0) {
  console.log('\n🎉 ALL 35 TITLES SUCCESSFULLY ADDED TO CATALOG!');
} else {
  console.log(`\n❌ ${failed} titles missing from catalog`);
  process.exit(1);
}
