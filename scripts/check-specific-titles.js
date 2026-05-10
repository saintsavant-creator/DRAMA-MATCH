const path = require('path');
const dataDir = path.join(__dirname, '..', 'data');
const exclude = ['affiliate-config.js', 'recommendation-engine.js', 'poster-paths.js'];
const fs = require('fs');
const files = fs.readdirSync(dataDir).filter(f => f.endsWith('.js') && !exclude.includes(f));

let allIds = new Set();
let allTitles = new Set();

for (const file of files) {
  try {
    const mod = require(path.join(dataDir, file));
    if (Array.isArray(mod)) {
      mod.forEach(item => {
        if (item.id) allIds.add(item.id.toLowerCase());
        if (item.title) allTitles.add(item.title.toLowerCase());
      });
    }
  } catch(e) {}
}

const toCheck = [
  // K-drama 2021-2024 potential gaps
  'a business proposal', 'business proposal',
  'twenty-five twenty-one', 'twenty five twenty one',
  'under the queen umbrella', "queen's umbrella", "under the queen's umbrella",
  'queen of tears', 'marry my husband', 'my demon', 'behind your touch',
  'song of the bandits', 'doctor slump', 'the midnight romance in hagwon',
  'the bequeathed', 'bloodhounds', 'mask girl', 'daily dose of sunshine',
  'crash course in romance', 'a time called you', 'my lovely liar',
  'class of lies', 'love in contract', 'work later drink now',
  'thirty-nine', 'its okay to not be okay', 'its okay not to be okay',
  'lovestruck in the city', 'jirisan', 'mountain jiri', 'ji ji',
  'imitation', 'law school', 'mine', 'beyond evil', 'vincenzo',
  'mr. sunshine', 'live on', 'youth of may', 'lovers of the red sky',
  'inspector koo', 'inspector ku', 'cliffhanger', 'mountain climber',
  'now we are breaking up', 'lost', 'the veil', 'the road beloved',
  // C-dramas potential gaps
  'ten miles of peach blossoms', 'eternal love', 'princess agents',
  'nirvana in fire 2', 'the legend of fuyao', 'fuyao',
  'ashes of love', 'joy of life 2', 'story of yanxi palace',
  'the blooms at ruyi pavilion', 'palace of devotion',
  'when a snail falls in love', 'hikaru no go', 'tears in heaven',
  'the rebel princess', 'sword snow stride', 'ancient detective',
  'ancient love poetry', 'the long ballad', 'ancient romance',
  'love between fairy and devil', 'till the end of the moon',
  'the blood of youth', 'new life begins',
  // Western potential gaps
  'white lotus', 'ghosts uk', 'ghosts us', 'ghosts',
  'top boy', 'lockwood and co', 'lockwood & co',
  'wolf like me', 'mr and mrs smith', 'mr. & mrs. smith',
  'jury duty', 'the last kingdom', 'shadow and bone',
  'one piece', 'avatar the last airbender', 'live action',
  'the gentlemen', 'the tourist', 'bodkin', 'kaos',
  'sweet tooth', 'umbrella academy', 'bridgerton',
  'wednesday', 'you', 'outer banks', 'stranger things',
  'the witcher', 'emily in paris', 'lupin',
  'dark winds', 'station 19',
];

console.log('Checking', toCheck.length, 'titles...\n');
const missing = [];
const found = [];
toCheck.forEach(t => {
  if (allTitles.has(t.toLowerCase())) {
    found.push(t);
  } else {
    missing.push(t);
  }
});

console.log('FOUND in catalog:', found.length);
found.forEach(t => console.log('  ✓', t));
console.log('\nMISSING from catalog:', missing.length);
missing.forEach(t => console.log('  ✗', t));
