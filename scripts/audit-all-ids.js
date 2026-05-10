/**
 * Properly load all catalog modules and extract all IDs/titles
 */
const fs = require('fs');
const path = require('path');

const dataDir = path.join(__dirname, '..', 'data');
const exclude = ['affiliate-config.js', 'recommendation-engine.js', 'poster-paths.js'];
const files = fs.readdirSync(dataDir).filter(f => f.endsWith('.js') && !exclude.includes(f));

let allIds = new Set();
let allTitles = new Set();
let fileBreakdown = {};

for (const file of files) {
  try {
    const mod = require(path.join(dataDir, file));
    if (Array.isArray(mod)) {
      let count = 0;
      mod.forEach(item => {
        if (item.id) { allIds.add(item.id); count++; }
        if (item.title) allTitles.add(item.title.toLowerCase());
      });
      fileBreakdown[file] = count;
    }
  } catch(e) {
    console.error('Error loading', file + ':', e.message);
  }
}

console.log('=== FULL CATALOG AUDIT ===');
console.log('Total unique IDs:', allIds.size);
console.log('Total unique titles:', allTitles.size);
console.log('\nTop files:');
Object.entries(fileBreakdown)
  .sort((a, b) => b[1] - a[1])
  .slice(0, 20)
  .forEach(([f, c]) => console.log(`  ${f}: ${c}`));

// Save for reference
const tmpDir = path.join(__dirname, '..', '.tmp');
fs.mkdirSync(tmpDir, { recursive: true });
fs.writeFileSync(path.join(tmpDir, 'all-ids.json'), JSON.stringify([...allIds].sort()));
fs.writeFileSync(path.join(tmpDir, 'all-titles.json'), JSON.stringify([...allTitles].sort()));

// Check candidates
const candidates = [
  // K-dramas
  'moving', 'agency', 'little women', 'my dearest', 'one dollar lawyer',
  'under the queen umbrella', 'reborn rich', 'my name', 'bad and crazy',
  'alchemy of souls', 'twenty five twenty one', 'our blues', 'extraordinary attorney woo',
  'ghost doctor', 'the red sleeve', 'snowdrop', 'happiness',
  'hellbound', 'juvenile justice', 'all of us are dead',
  'nevertheless', 'dali and the cocky prince', 'you are my spring',
  'doom at your step', 'doom at your doorstep',
  'the silent sea', 'jirisan',
  'a business proposal',
  'imitation', 'police university',
  // C-dramas
  'winter begonia', 'the untamed', 'nirvana in fire', 'joy of life', 'ancient love poetry',
  'rattan', 'mysterious lotus casebook', 'word of honor', 'the blooms at ruyi pavilion',
  'palace of devotion', 'tears in heaven', 'hikaru no go', 'put your head on my shoulder',
  'le coup de foudre', 'you are my hero', 'when a snail falls in love',
  'love and redemption', 'the story of ming lan', 'ever night', 'nirvana in fire 2',
  'the legend of fuyao', 'ten miles of peach blossoms',
  // Western
  'the bear', 'ted lasso', 'abbott elementary', 'succession',
  'the last of us', 'andor', 'slow horses', 'reservation dogs',
  'bad sisters', 'shrinking', 'silo', 'the diplomat', 'yellowjackets',
  'severance', 'hacks', 'the morning show', 'white lotus',
  'barry', 'what we do in the shadows', 'ghosts', 'only murders in the building',
  'the watcher', 'the fall of the house of usher', 'lockwood and co',
  'happy valley', 'top boy', 'trigger point', 'until i find you'
];

console.log('\n=== CANDIDATE DEDUP CHECK ===');
let dupes = [];
let clean = [];
candidates.forEach(title => {
  if (allTitles.has(title.toLowerCase())) {
    dupes.push(title);
  } else {
    clean.push(title);
  }
});
console.log('DUPLICATES (skip these):');
dupes.forEach(t => console.log('  -', t));
console.log('\nCLEAN (safe to add):');
clean.forEach(t => console.log('  +', t));
