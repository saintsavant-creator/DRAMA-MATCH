/**
 * Find which existing files contain the conflicting IDs
 */
const path = require('path');
const fs = require('fs');
const dataDir = './data';
const conflicts = [
  'hot-stove-league','cheese-in-the-trap','midnight-romance-in-hagwon',
  'my-lovely-liar','twinkling-watermelon','divorce-attorney-shin','the-witchs-diner',
  'miss-crow-with-mr-lizard','a-little-thing-called-first-love','midnight-diner'
];

// Build a full ID list from all data files
const allIds = {};
const files = fs.readdirSync(dataDir).filter(f => {
  return f.endsWith('.js') &&
    f !== 'recommendation-engine.js' &&
    f !== 'affiliate-config.js' &&
    f !== 'poster-paths.js' &&
    !f.startsWith('validate');
});

files.forEach(f => {
  try {
    const content = fs.readFileSync(path.join(dataDir, f), 'utf8');
    const idMatches = content.match(/"id":\s*"([^"]+)"/g) || content.match(/\bid:\s*"([^"]+)"/g) || [];
    idMatches.forEach(m => {
      const id = m.replace(/"id":\s*"|id:\s*"|"/g, '').trim();
      if (!allIds[id]) allIds[id] = [];
      allIds[id].push(f);
    });
  } catch(e) {
    // skip
  }
});

conflicts.forEach(cid => {
  const found = allIds[cid];
  if (found) {
    console.log(`CONFLICT: ${cid} -> found in: ${found.join(', ')}`);
  } else {
    console.log(`NOT FOUND (false alarm): ${cid}`);
  }
});

// Also count total catalog size
console.log('\nTotal unique IDs in catalog:', Object.keys(allIds).length);
