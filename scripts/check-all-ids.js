/**
 * Collect all IDs from ALL data files to check for duplicates
 */
const path = require('path');
const fs = require('fs');
const dataDir = './data';

const skipFiles = new Set([
  'recommendation-engine.js', 'affiliate-config.js', 'poster-paths.js',
  'featured-week.json',
  'kdramas-comedies-2026.js', 'cdramas-comedies-2026.js', 'jdramas-comedies-2026.js'
]);

const allIds = new Set();
const files = fs.readdirSync(dataDir).filter(f => {
  return (f.endsWith('.js') || f.endsWith('.json')) && !skipFiles.has(f);
});

files.forEach(f => {
  try {
    const content = fs.readFileSync(path.join(dataDir, f), 'utf8');
    // Match both quoted formats
    const matches1 = content.match(/"id":\s*"([^"]+)"/g) || [];
    const matches2 = content.match(/\bid:\s*"([^"]+)"/g) || [];
    const matches3 = content.match(/id:\s*'([^']+)'/g) || [];
    [...matches1, ...matches2, ...matches3].forEach(m => {
      const id = m.replace(/^.*id.*[:"']\s*['"]/,'').replace(/['"]/g,'').trim();
      allIds.add(id);
    });
  } catch(e) {
    // skip
  }
});

// Check candidate replacements
const candidates = [
  'romantic-doctor-kim', 'dr-romantic',
  'so-not-worth-it',
  'monthly-magazine-home',
  'do-do-sol-sol-la-la-sol',
  'ipartment', 'ipartment-cdrama',
  'my-best-ex',
  'legal-high-jdrama', 'legal-high',
  'snail-and-yellow-bird',
  'love-in-the-big-city',
  'doctor-cha',
  'my-perfect-stranger',
  'please-dont-date-him',
  'golden-spoon',
  'let-me-be-your-knight',
];

console.log('Total existing IDs (excluding new batch):', allIds.size);
console.log('\n--- Candidate Check ---');
candidates.forEach(c => {
  const status = allIds.has(c) ? 'CONFLICT' : 'AVAILABLE ✓';
  console.log(`${c}: ${status}`);
});
