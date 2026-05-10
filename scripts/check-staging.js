// Check if proposed new titles exist in ANY batch file (staging)
const path = require('path');
const fs = require('fs');

const dataDir = path.join(__dirname, '../data');
const dataFiles = fs.readdirSync(dataDir).filter(f =>
  f.endsWith('.js') &&
  f !== 'recommendation-engine.js' &&
  f !== 'affiliate-config.js' &&
  f !== 'poster-paths.js'
);

const allStagingIds = new Set();
dataFiles.forEach(f => {
  try {
    const d = require(path.join(dataDir, f));
    if (Array.isArray(d)) d.forEach(t => { if (t && t.id) allStagingIds.add(t.id); });
  } catch(e) {}
});

const proposed = [
  'again-my-life','good-job-2022','oasis-2023','thirty-days-2023','cleaning-up-2022',
  'thank-you-2006','shine-or-go-crazy','my-princess','surplus-princess','gap-dong',
  'all-that-we-loved','marry-him-if-you-dare','my-secret-hotel',
  'serenade-of-peaceful-joy','in-a-class-of-her-own','a-little-thing-called-first-love',
  'ruyi-royal-love','the-love-you-give-me','the-legend-of-anle','renegade-immortal',
  'the-world-owes-me-a-first-love','stand-by-me-2019','i-hear-you-cdrama',
  'love-of-thousand-years','ordinary-greatness',
  'challengers-2024','love-lies-bleeding','conclave','the-substance','it-ends-with-us',
  'silo-s2','slow-horses-s5','severance-s2','on-becoming-a-god-in-central-florida','white-lotus-s3',
];

console.log('Total unique IDs across all files:', allStagingIds.size);
const inStaging = proposed.filter(id => allStagingIds.has(id));
const clean = proposed.filter(id => !allStagingIds.has(id));
console.log('Proposed that exist in staging batch files:', inStaging.length);
inStaging.forEach(id => console.log(' !', id));
console.log('Clean (not in any file):', clean.length);
