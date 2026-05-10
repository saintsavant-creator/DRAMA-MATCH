const fs = require('fs');
const path = require('path');

const dataDir = path.join(__dirname, '../data');
const excludeFiles = ['affiliate-config.js', 'recommendation-engine.js', 'poster-paths.js'];
const files = fs.readdirSync(dataDir)
  .filter(f => f.endsWith('.js') && !excludeFiles.includes(f))
  .sort();

const allIds = new Set();
const allTitles = new Set();
const fileStats = [];

for (const file of files) {
  try {
    const data = require(path.join(dataDir, file));
    if (Array.isArray(data)) {
      let count = 0;
      data.forEach(item => {
        if (item.id) allIds.add(item.id.toLowerCase());
        if (item.title) allTitles.add(item.title.toLowerCase());
        count++;
      });
      fileStats.push({ file, count });
    }
  } catch(e) {
    // skip
  }
}

console.log('=== CATALOG DEDUP STATS ===');
console.log('Files processed:', fileStats.length);
console.log('Unique IDs:', allIds.size);
console.log('Unique Titles:', allTitles.size);
console.log('');
console.log('=== ALL IDS (sorted) ===');
const sortedIds = [...allIds].sort();
sortedIds.forEach(id => console.log(id));
