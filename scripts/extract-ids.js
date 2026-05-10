const fs = require('fs');
const path = require('path');
const dataDir = path.join(__dirname, '..', 'data');
const skipFiles = ['affiliate-config.js', 'poster-paths.js', 'recommendation-engine.js'];
const files = fs.readdirSync(dataDir).filter(f => f.endsWith('.js') && !skipFiles.includes(f));
let allIds = new Set();
let total = 0;
for (const f of files) {
  try {
    const data = require(path.join(dataDir, f));
    if (Array.isArray(data)) {
      data.forEach(t => {
        if (t.id) allIds.add(t.id);
      });
      total += data.length;
    }
  } catch(e) {
    console.error('Error loading', f, e.message);
  }
}
console.log('Total entries:', total);
console.log('Unique IDs:', allIds.size);
// Print all IDs sorted
const sorted = [...allIds].sort();
console.log(JSON.stringify(sorted));
