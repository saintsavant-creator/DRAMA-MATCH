/**
 * Merge Batch 4 (2026) — 35 new titles across all categories
 *
 * K-dramas (13): Lovestruck in the City, Live On, Imitation, Again My Life,
 *   The Forbidden Marriage, Seasons of Blossom, Secret Royal Inspector & Joy,
 *   Sweet Home Season 2, The Tale of Nokdu, My Country: The New Age,
 *   Kingdom: Ashin of the North, Poong the Joseon Psychiatrist, Rookie Cops
 *
 * C-dramas (12): Ten Miles of Peach Blossoms, The Legend of Fuyao,
 *   When a Snail Falls in Love, New Life Begins, The Blooms at Ruyi Pavilion,
 *   Hikaru no Go, Lighter & Princess, Someday or One Day,
 *   Unrequited Love, A Little Thing Called First Love,
 *   Goodbye My Princess, The Story of Hua Zhi
 *
 * Western shows (10): Top Boy, Sweet Tooth, Jury Duty, Wolf Like Me,
 *   Black Bird, Culprits, Monarch: Legacy of Monsters, 1899,
 *   The Essex Serpent, True Detective: Night Country
 *
 * Total: 35 new titles
 * Added: 2026-04-15
 */

const fs = require('fs');
const path = require('path');

// Helper: serialise a single entry to JS source text
function serializeEntry(obj, indent = '  ') {
  const lines = [];
  lines.push(indent + '{');
  for (const [key, val] of Object.entries(obj)) {
    if (typeof val === 'string') {
      lines.push(`${indent}  ${key}: ${JSON.stringify(val)},`);
    } else if (typeof val === 'boolean' || typeof val === 'number') {
      lines.push(`${indent}  ${key}: ${val},`);
    } else if (Array.isArray(val)) {
      if (val.length === 0) {
        lines.push(`${indent}  ${key}: [],`);
      } else if (typeof val[0] === 'string') {
        lines.push(`${indent}  ${key}: [${val.map(v => JSON.stringify(v)).join(', ')}],`);
      } else {
        // Array of objects (actors, matchReasoningHints with objects)
        lines.push(`${indent}  ${key}: [`);
        val.forEach((item, i) => {
          if (typeof item === 'string') {
            const comma = i < val.length - 1 ? ',' : '';
            lines.push(`${indent}    ${JSON.stringify(item)}${comma}`);
          } else {
            const comma = i < val.length - 1 ? ',' : '';
            lines.push(`${indent}    { ${Object.entries(item).map(([k, v]) => `${k}: ${JSON.stringify(v)}`).join(', ')} }${comma}`);
          }
        });
        lines.push(`${indent}  ],`);
      }
    } else if (typeof val === 'object' && val !== null) {
      // streaming object or nested object
      const inner = Object.entries(val).map(([k, v]) => `${k}: ${v}`).join(', ');
      lines.push(`${indent}  ${key}: { ${inner} },`);
    }
  }
  lines.push(indent + '}');
  return lines.join('\n');
}

function mergeIntoFile(targetPath, batchEntries, batchLabel, existingEntries) {
  const existingIds = new Set(existingEntries.map(d => d.id));
  const dupes = batchEntries.filter(d => existingIds.has(d.id)).map(d => d.id);
  if (dupes.length > 0) {
    console.error(`❌ [${batchLabel}] Duplicate IDs found:`, dupes.join(', '));
    return false;
  }
  console.log(`✅ [${batchLabel}] No duplicates. Adding ${batchEntries.length} entries.`);

  const entriesText = batchEntries.map(e => serializeEntry(e)).join(',\n\n');
  const batchComment = `  // ===================================================================
  // BATCH 4 — CATALOG EXPANSION — 2026-04-15
  // ${batchLabel}: ${batchEntries.map(e => e.title).join(', ')}
  // ===================================================================`;
  const insertBlock = '\n\n' + batchComment + '\n\n' + entriesText + '\n';

  let content = fs.readFileSync(targetPath, 'utf8');
  const insertPoint = content.lastIndexOf('];');
  if (insertPoint === -1) {
    console.error(`❌ Could not find closing ]; in ${path.basename(targetPath)}`);
    return false;
  }

  const newContent = content.slice(0, insertPoint) + ',\n' + insertBlock + content.slice(insertPoint);
  fs.writeFileSync(targetPath, newContent, 'utf8');
  console.log(`✅ Wrote merged content to ${path.basename(targetPath)}`);
  return true;
}

// === MERGE ALL BATCHES ===

const dataDir = path.join(__dirname, '../data');

// Clear require cache to get fresh data
Object.keys(require.cache).forEach(k => {
  if (k.includes('/data/')) delete require.cache[k];
});

const merges = [
  {
    targetPath: path.join(dataDir, 'kdramas.js'),
    batchPath: path.join(dataDir, 'kdramas-batch-4-2026.js'),
    label: 'K-dramas'
  },
  {
    targetPath: path.join(dataDir, 'cdramas.js'),
    batchPath: path.join(dataDir, 'cdramas-batch-4-2026.js'),
    label: 'C-dramas'
  },
  {
    targetPath: path.join(dataDir, 'western-shows.js'),
    batchPath: path.join(dataDir, 'western-batch-4-2026.js'),
    label: 'Western Shows'
  }
];

let allSuccess = true;
let totalAdded = 0;

for (const { targetPath, batchPath, label } of merges) {
  // Clear require cache
  delete require.cache[require.resolve(targetPath)];
  delete require.cache[require.resolve(batchPath)];

  const existing = require(targetPath);
  const batchEntries = require(batchPath);

  const success = mergeIntoFile(targetPath, batchEntries, label, existing);
  if (!success) {
    allSuccess = false;
    break;
  }
  totalAdded += batchEntries.length;
}

if (!allSuccess) {
  console.error('❌ Merge failed. Aborting.');
  process.exit(1);
}

console.log(`\n✅ All merges complete. Added ${totalAdded} total entries.`);

// === VERIFY ALL FILES ===
console.log('\n=== VERIFICATION ===');

// Clear cache for re-require
Object.keys(require.cache).forEach(key => {
  if (key.includes('/data/')) delete require.cache[key];
});

const kdramas = require('../data/kdramas');
const cdramas = require('../data/cdramas');
const jdramas = require('../data/jdramas');
const anime = require('../data/anime');
const westernShows = require('../data/western-shows');
const westernMovies = require('../data/western-movies');
const koreanMovies = require('../data/korean-movies');

console.log('K-dramas:', kdramas.length);
console.log('C-dramas:', cdramas.length);
console.log('J-dramas:', jdramas.length);
console.log('Anime:', anime.length);
console.log('Western shows:', westernShows.length);
console.log('Western movies:', westernMovies.length);
console.log('Korean movies:', koreanMovies.length);

const all = [...kdramas, ...cdramas, ...jdramas, ...anime, ...westernShows, ...westernMovies, ...koreanMovies];
console.log('Total active catalog:', all.length);

// Check for duplicates
const ids = all.map(d => d.id);
const uniqueIds = new Set(ids);
if (uniqueIds.size !== ids.length) {
  const seen = {};
  const dups = [];
  ids.forEach(id => { if (seen[id]) dups.push(id); seen[id] = true; });
  console.error('❌ DUPLICATE IDs found:', dups);
  process.exit(1);
}
console.log('✅ No duplicate IDs across all files');

// Verify all new titles exist
const newIds = [
  // K-dramas
  'lovestruck-in-the-city', 'live-on', 'imitation', 'again-my-life',
  'the-forbidden-marriage', 'seasons-of-blossom', 'secret-royal-inspector-and-joy',
  'sweet-home-s2', 'tale-of-nokdu', 'my-country-the-new-age',
  'kingdom-ashin-of-the-north', 'poong-the-joseon-psychiatrist', 'rookie-cops',
  // C-dramas
  'ten-miles-of-peach-blossoms', 'legend-of-fuyao', 'when-a-snail-falls-in-love',
  'new-life-begins', 'the-blooms-at-ruyi-pavilion', 'hikaru-no-go-cdrama',
  'lighter-and-princess', 'someday-or-one-day', 'unrequited-love-cdrama',
  'a-little-thing-called-first-love', 'goodbye-my-princess', 'the-story-of-hua-zhi',
  // Western
  'top-boy', 'sweet-tooth', 'jury-duty', 'wolf-like-me',
  'black-bird-apple', 'culprits', 'monarch-legacy-of-monsters',
  '1899', 'the-essex-serpent', 'true-detective-night-country'
];

const allIdsSet = new Set(ids);
const missing = newIds.filter(id => !allIdsSet.has(id));
if (missing.length > 0) {
  console.error('❌ Some new IDs not found after merge:', missing);
  process.exit(1);
}
console.log(`✅ All ${newIds.length} new titles verified in catalog`);
console.log('\n🎉 Batch 4 complete!');
