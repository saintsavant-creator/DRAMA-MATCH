const path = require('path');
const dataDir = path.join(__dirname, '..', 'data');
Object.keys(require.cache).forEach(k => { if (k.includes('/data/')) delete require.cache[k]; });

const cdramas = require(path.join(dataDir, 'cdramas.js'));
const westernShows = require(path.join(dataDir, 'western-shows.js'));
const cdramaBatch = require(path.join(dataDir, 'cdramas-batch-4-2026.js'));
const westernBatch = require(path.join(dataDir, 'western-batch-4-2026.js'));

console.log('=== C-DRAMAS ===');
const cdramaIds = new Set(cdramas.map(d => d.id));
const cdramaTitles = new Set(cdramas.map(d => d.title.toLowerCase()));
cdramaBatch.forEach(entry => {
  const byId = cdramaIds.has(entry.id);
  const byTitle = cdramaTitles.has(entry.title.toLowerCase());
  const status = (byId || byTitle) ? '❌ DUPLICATE' : '✅ NEW';
  console.log(`  ${status}: ${entry.id} — "${entry.title}"`);
});

console.log('\n=== WESTERN SHOWS ===');
const westernIds = new Set(westernShows.map(d => d.id));
const westernTitles = new Set(westernShows.map(d => d.title.toLowerCase()));
westernBatch.forEach(entry => {
  const byId = westernIds.has(entry.id);
  const byTitle = westernTitles.has(entry.title.toLowerCase());
  const status = (byId || byTitle) ? '❌ DUPLICATE' : '✅ NEW';
  console.log(`  ${status}: ${entry.id} — "${entry.title}"`);
});
