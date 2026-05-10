/**
 * Extract all existing IDs and titles from all catalog data files
 * Used before adding new titles to ensure zero duplicates
 */
const fs = require('fs');
const path = require('path');

const dataDir = path.join(__dirname, '..', 'data');
const excludeFiles = ['affiliate-config.js', 'recommendation-engine.js', 'poster-paths.js'];
const files = fs.readdirSync(dataDir).filter(f => f.endsWith('.js') && !excludeFiles.includes(f));

let allIds = new Set();
let allTitles = new Set();
let fileBreakdown = {};

for (const file of files) {
  try {
    const content = fs.readFileSync(path.join(dataDir, file), 'utf8');
    const idMatches = content.match(/id:\s*['"]([^'"]+)['"]/g) || [];
    const titleMatches = content.match(/title:\s*['"]([^'"]+)['"]/g) || [];

    let fileIds = [];
    idMatches.forEach(m => {
      const match = m.match(/id:\s*['"]([^'"]+)['"]/);
      if (match) {
        allIds.add(match[1]);
        fileIds.push(match[1]);
      }
    });

    titleMatches.forEach(m => {
      const match = m.match(/title:\s*['"]([^'"]+)['"]/);
      if (match) allTitles.add(match[1].toLowerCase());
    });

    fileBreakdown[file] = fileIds.length;
  } catch(e) {
    console.error(`Error reading ${file}:`, e.message);
  }
}

console.log('=== CATALOG AUDIT ===');
console.log('Total unique IDs:', allIds.size);
console.log('Total unique titles:', allTitles.size);
console.log('\nFiles breakdown:');
Object.entries(fileBreakdown).sort((a,b) => b[1]-a[1]).forEach(([f, c]) => {
  if (c > 0) console.log(`  ${f}: ${c} entries`);
});

// Check for specific titles we plan to add
const planningToAdd = [
  'moving', 'agency', 'little women', 'my dearest', 'the glory part 2',
  'one dollar lawyer', 'under the queen umbrella', 'reborn rich', 'my name',
  'bad and crazy', 'yumi\'s cells 2', 'link eat love kill',
  // C-dramas
  'winter begonia', 'the untamed', 'nirvana in fire', 'joy of life',
  'ancient love poetry', 'rattan', 'mysterious lotus casebook',
  // Western
  'the bear', 'ted lasso', 'abbott elementary', 'succession',
  'the last of us', 'andor', 'slow horses', 'reservation dogs',
  'bad sisters', 'shrinking', 'silo'
];

console.log('\n=== DEDUP CHECK FOR PLANNED TITLES ===');
planningToAdd.forEach(title => {
  const found = allTitles.has(title.toLowerCase());
  if (found) console.log(`  DUPLICATE: "${title}"`);
});
console.log('(no output = no duplicates found)');

// Output all IDs to a file
fs.writeFileSync(path.join(__dirname, '..', '.tmp', 'all-existing-ids.json'), JSON.stringify([...allIds].sort()));
fs.writeFileSync(path.join(__dirname, '..', '.tmp', 'all-existing-titles.json'), JSON.stringify([...allTitles].sort()));
console.log('\nSaved to .tmp/all-existing-ids.json and .tmp/all-existing-titles.json');
