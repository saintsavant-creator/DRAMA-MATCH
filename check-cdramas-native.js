const path = require('path');
const base = path.join(process.cwd(), 'data');

// Load the 3 files used in recommendation-engine.js
const cdramas = [
  ...require(path.join(base, 'cdramas')),
  ...require(path.join(base, 'cdramas-batch-f-2026')),
  ...require(path.join(base, 'cdramas-comedies-2026')),
];

const missing = cdramas.filter(s => !s.nativeTitle);
const has = cdramas.filter(s => !!s.nativeTitle);

console.log('Engine C-dramas:', cdramas.length);
console.log('With nativeTitle:', has.length);
console.log('Missing nativeTitle:', missing.length);
if (missing.length > 0) {
  console.log('\nMissing:');
  missing.forEach(s => console.log('  ' + s.id + ' - ' + s.title));
}

// Load ALL cdrama files
const allFiles = [
  'cdramas', 'cdramas-batch-f-2026', 'cdramas-comedies-2026',
  'cdrama-batch-2026-b', 'cdramas-batch-3-2026', 'cdramas-batch-4-2026',
  'cdramas-batch-aa-mixed', 'cdramas-batch-d-2026', 'cdramas-batch-e-2026',
  'cdramas-batch-expansion-5-2026', 'cdramas-batch-gap-2026', 'cdramas-batch-search-gap-2026'
];

let allCdramas = [];
allFiles.forEach(f => {
  try {
    const data = require(path.join(base, f));
    allCdramas = allCdramas.concat(data);
    console.log('Loaded ' + f + ': ' + data.length + ' items');
  } catch(e) {
    console.log('Skip ' + f + ': ' + e.message);
  }
});

const allMissing = allCdramas.filter(s => !s.nativeTitle);
console.log('\nAll cdrama files total:', allCdramas.length);
console.log('All with nativeTitle:', allCdramas.length - allMissing.length);
console.log('All missing nativeTitle:', allMissing.length);
if (allMissing.length > 0) {
  console.log('\nAll missing:');
  allMissing.forEach(s => console.log('  ' + s.id + ' - ' + s.title));
}

// Print all IDs with their native titles for reference
console.log('\n--- All C-drama IDs with nativeTitle ---');
allCdramas.filter(s => !!s.nativeTitle).forEach(s => {
  console.log("  '" + s.id + "': '" + s.nativeTitle + "',");
});
