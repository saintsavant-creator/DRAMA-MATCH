const fs = require('fs');
const path = require('path');
const dataDir = path.join(__dirname, '..', 'data');
const skip = ['affiliate-config.js', 'poster-paths.js', 'recommendation-engine.js'];
const files = fs.readdirSync(dataDir).filter(f => f.endsWith('.js') && !skip.includes(f));
let allTitles = [];
let allIds = [];
for (const f of files) {
  try {
    const data = require(path.join(dataDir, f));
    if (Array.isArray(data)) {
      allTitles.push(...data.map(d => d.title));
      allIds.push(...data.map(d => d.id));
    }
  } catch(e) {
    // skip
  }
}
allTitles.sort();
console.log('Total titles:', allTitles.length);
console.log(JSON.stringify(allTitles));
