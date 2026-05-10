/**
 * Remove duplicate IDs from base catalog files (keep first occurrence).
 */
const fs = require('fs');
const path = require('path');
const dataDir = path.join(__dirname, '..', 'data');

Object.keys(require.cache).forEach(k => { if (k.includes('/data/')) delete require.cache[k]; });

function dedup(filePath, label) {
  const mod = require(filePath);
  const seen = new Set();
  const dupes = [];
  const deduped = mod.filter(item => {
    if (seen.has(item.id)) {
      dupes.push(item.id);
      return false;
    }
    seen.add(item.id);
    return true;
  });

  if (dupes.length === 0) {
    console.log(`${label}: no duplicates found ✅`);
    return;
  }

  console.log(`${label}: removing ${dupes.length} duplicate(s): ${dupes.join(', ')}`);
  console.log(`  ${mod.length} → ${deduped.length} entries`);

  // Rebuild file
  const content = fs.readFileSync(filePath, 'utf8');
  // Get the module.exports = prefix
  const prefix = 'module.exports = ';
  const prefixIdx = content.indexOf(prefix);
  if (prefixIdx === -1) {
    console.error(`ERROR: could not find module.exports in ${filePath}`);
    process.exit(1);
  }

  const newContent = prefix + JSON.stringify(deduped, null, 2) + ';\n';
  fs.writeFileSync(filePath, newContent);
  console.log(`  ✅ Written to ${path.basename(filePath)}`);
}

dedup(path.join(dataDir, 'kdramas.js'), 'kdramas.js');
dedup(path.join(dataDir, 'cdramas.js'), 'cdramas.js');
dedup(path.join(dataDir, 'western-shows.js'), 'western-shows.js');

// Final count
Object.keys(require.cache).forEach(k => { if (k.includes('/data/')) delete require.cache[k]; });
const k = require(path.join(dataDir, 'kdramas.js'));
const c = require(path.join(dataDir, 'cdramas.js'));
const w = require(path.join(dataDir, 'western-shows.js'));
console.log(`\nFinal counts: K=${k.length} C=${c.length} W=${w.length}`);
