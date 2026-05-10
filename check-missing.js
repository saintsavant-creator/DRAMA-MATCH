const fs = require('fs');

// Check all data files for missing nativeTitle
const dataFiles = [
  { name: 'anime', path: './data/anime.js' },
  { name: 'jdramas', path: './data/jdramas.js' },
  { name: 'kdramas', path: './data/kdramas.js' },
];

for (const { name, path } of dataFiles) {
  const data = require(path);
  const missing = data.filter(s => !s.nativeTitle).map(s => ({ id: s.id, title: s.title }));
  console.log(`\n=== ${name} (${data.length} total) ===`);
  console.log(`Missing nativeTitle: ${missing.length}`);
  missing.forEach(s => console.log(`  - [${s.id}] "${s.title}"`));
}