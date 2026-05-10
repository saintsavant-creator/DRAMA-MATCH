const kd = require('../data/kdramas.js');
const ws = require('../data/western-shows.js');
const wm = require('../data/western-movies.js');
const cd = require('../data/cdramas.js');
const km = require('../data/korean-movies.js');
const all = [...kd, ...ws, ...wm, ...cd, ...km];
console.log('Total titles:', all.length);

const myNew = [
  'when-life-gives-you-tangerines-s3','connection-2024','midnight-studio-2024',
  'sweet-home-season-3','no-way-out-the-roulette','happy-merry-christmas',
  'nothing-uncovered','lovely-runner-season-2','be-my-candy','a-wonderful-world',
  'resident-playbook-s2','the-trauma-code-heroes','queen-of-divorce',
  'missing-you-2024','seduction','the-frog-2024','kidnapped-by-the-villain',
  'family-by-choice-2024','guardians-2024','social-detective-2024',
  'toxic-town','american-primeval','black-doves','the-diplomat-s2',
  'the-way-home-s3','the-pitt','nine-perfect-strangers-s2','apple-tv-shrinking-s2',
  'paradise-2025','the-residence-2025','lockerbie-a-search-for-truth',
  'poker-face-s2','mid-century-modern','the-old-guard-2','wolf'
];

const ids = new Set(all.map(function(x) { return x.id; }));
const found = myNew.filter(function(id) { return ids.has(id); });
const missing = myNew.filter(function(id) { return ids.has(id) === false; });

console.log('New titles found in catalog: ' + found.length + ' / ' + myNew.length);
if (missing.length > 0) {
  console.log('MISSING:', missing.join(', '));
} else {
  console.log('All 35 new titles confirmed in catalog!');
}

// Platform breakdown
const newEntries = all.filter(function(x) { return ids.has(x.id) && myNew.indexOf(x.id) !== -1; });
let netflix = 0, amazon = 0, disney = 0;
newEntries.forEach(function(t) {
  const s = t.streaming || {};
  if (s.netflix) netflix++;
  if (s.amazon_prime) amazon++;
  if (s.disney_plus) disney++;
});
console.log('\nPlatform breakdown (new titles):');
console.log('  Netflix:      ' + netflix);
console.log('  Amazon Prime: ' + amazon);
console.log('  Disney+:      ' + disney);
