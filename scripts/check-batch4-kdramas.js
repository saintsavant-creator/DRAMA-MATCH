const path = require('path');
const dataDir = path.join(__dirname, '..', 'data');

Object.keys(require.cache).forEach(k => { if (k.includes('/data/')) delete require.cache[k]; });

const kdramas = require(path.join(dataDir, 'kdramas.js'));
const batch = require(path.join(dataDir, 'kdramas-batch-4-2026.js'));

const existingIds = new Set(kdramas.map(d => d.id));
const existingTitles = new Set(kdramas.map(d => d.title.toLowerCase()));

console.log('Existing K-dramas:', kdramas.length);
console.log('\nBatch entries:');
batch.forEach(entry => {
  const byId = existingIds.has(entry.id);
  const byTitle = existingTitles.has(entry.title.toLowerCase());
  const status = (byId || byTitle) ? '❌ DUPLICATE' : '✅ NEW';
  console.log(`  ${status}: ${entry.id} — "${entry.title}" (byId=${byId}, byTitle=${byTitle})`);
});
