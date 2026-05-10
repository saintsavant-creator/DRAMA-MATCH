const fs = require('fs');
const path = require('path');

const dataDir = path.join(__dirname, '../data');

// Load all data files
const dataFiles = fs.readdirSync(dataDir).filter(f =>
  f.endsWith('.js') &&
  f !== 'recommendation-engine.js' &&
  f !== 'affiliate-config.js' &&
  f !== 'poster-paths.js'
);

const allIds = new Set();
let total = 0;

dataFiles.forEach(f => {
  try {
    const d = require(path.join(dataDir, f));
    if (Array.isArray(d)) {
      d.forEach(t => {
        if (t && t.id) allIds.add(t.id);
      });
      total += d.length;
    }
  } catch(e) {
    // skip files that fail
  }
});

console.log('Files scanned:', dataFiles.length);
console.log('Total entries (with dupes):', total);
console.log('Unique IDs:', allIds.size);
const sorted = [...allIds].sort();
sorted.forEach(id => console.log(id));
