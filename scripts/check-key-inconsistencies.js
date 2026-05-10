// Check streaming key inconsistencies and what's missing from affiliate-config
const affiliateConfig = require('../data/affiliate-config');
const shows = require('../data/western-shows.js');
const movies = require('../data/western-movies.js');

const affiliateKeys = new Set(Object.keys(affiliateConfig));
const allKeys = {};

for (const s of [...shows, ...movies]) {
  if (s.streaming) {
    for (const [key, val] of Object.entries(s.streaming)) {
      if (val) {
        if (!allKeys[key]) allKeys[key] = [];
        allKeys[key].push(s.title);
      }
    }
  }
}

console.log('=== AFFILIATE CONFIG KEYS ===');
for (const k of [...affiliateKeys].sort()) console.log(' -', k);

console.log('\n=== STREAMING KEYS USED IN DATA (with count) ===');
for (const [k, v] of Object.entries(allKeys).sort()) {
  const inConfig = affiliateKeys.has(k) ? '✓' : '✗ MISSING FROM CONFIG';
  console.log(` - ${k}: ${v.length} shows  ${inConfig}`);
}

console.log('\n=== SHOWS USING INCONSISTENT KEYS ===');
const inconsistent = ['amazon', 'disney', 'disney+', 'hbo', 'hbo_max', 'max', 'paramount_plus'];
for (const key of inconsistent) {
  if (allKeys[key]) {
    console.log(`\n  Key "${key}" (${allKeys[key].length} shows):`);
    allKeys[key].slice(0, 5).forEach(t => console.log('    -', t));
    if (allKeys[key].length > 5) console.log('    ... and', allKeys[key].length - 5, 'more');
  }
}
