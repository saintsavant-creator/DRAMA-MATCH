// Fix remaining key inconsistencies in kdramas.js
// night-has-come has "disneyplus" (should be "disney_plus")
// Also normalize any other stray keys in kdramas

const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '../data/kdramas.js');
const shows = require('../data/kdramas.js');

const KEY_MAP = {
  'disneyplus': 'disney_plus',
  'amazon': 'amazon_prime',
  'hbo': 'max',
  'hbo_max': 'max',
  'disney': 'disney_plus',
  'disney+': 'disney_plus',
  'paramount_plus': 'paramount',
};

let fixCount = 0;
const updated = shows.map(s => {
  if (!s.streaming) return s;
  const keys = Object.keys(s.streaming);
  const needsFix = keys.some(k => KEY_MAP[k]);
  if (!needsFix) return s;

  const normalized = {};
  for (const [k, v] of Object.entries(s.streaming)) {
    const canonical = KEY_MAP[k] || k;
    normalized[canonical] = normalized[canonical] || v;
  }
  fixCount++;
  console.log('Fixed', s.id, ':', JSON.stringify(s.streaming), '->', JSON.stringify(normalized));
  return { ...s, streaming: normalized };
});

const content = 'module.exports = ' + JSON.stringify(updated, null, 2) + ';\n';
fs.writeFileSync(filePath, content);
console.log('\nFixed', fixCount, 'K-drama entries');
