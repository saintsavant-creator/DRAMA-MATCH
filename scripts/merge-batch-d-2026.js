/**
 * Merge Batch D 2026 — 35 new titles across all categories
 *
 * K-dramas (12): Do You Like Brahms?, Mad for Each Other, Another Oh Hae-Young,
 *   Yong-Pal, Live Up to Your Name, Come Back Mister, Wok of Love,
 *   My Father is Strange, School 2017, When My Love Blooms, Sassy Go Go, My Girl
 *
 * C-dramas (8): Love Is Sweet, You Are My Hero, Douluo Continent,
 *   The Sword and the Brocade, The King's Avatar, My Little Happiness,
 *   Crush, Accidentally in Love
 *
 * J-dramas (4): Long Vacation, Rich Man Poor Woman, Proposal Daisakusen, Code Blue
 *
 * Anime (3): Dandadan, The Promised Neverland, Bungo Stray Dogs
 *
 * Western shows (5): Lessons in Chemistry, Griselda, The Perfect Couple, Maniac, Devs
 * Western movies (3): Saltburn, Anatomy of a Fall, Killers of the Flower Moon
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
        // Array of objects (actors)
        lines.push(`${indent}  ${key}: [`);
        val.forEach((item, i) => {
          const comma = i < val.length - 1 ? ',' : '';
          lines.push(`${indent}    { ${Object.entries(item).map(([k, v]) => `${k}: ${JSON.stringify(v)}`).join(', ')} }${comma}`);
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
  // BATCH D — CATALOG EXPANSION — 2026-04-15
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

const merges = [
  {
    targetPath: path.join(__dirname, '../data/kdramas.js'),
    batchPath: path.join(__dirname, '../data/kdramas-batch-d-2026.js'),
    label: 'K-dramas'
  },
  {
    targetPath: path.join(__dirname, '../data/cdramas.js'),
    batchPath: path.join(__dirname, '../data/cdramas-batch-d-2026.js'),
    label: 'C-dramas'
  },
  {
    targetPath: path.join(__dirname, '../data/jdramas.js'),
    batchPath: path.join(__dirname, '../data/jdramas-batch-d-2026.js'),
    label: 'J-dramas'
  },
  {
    targetPath: path.join(__dirname, '../data/anime.js'),
    batchPath: path.join(__dirname, '../data/anime-batch-d-2026.js'),
    label: 'Anime'
  },
  {
    targetPath: path.join(__dirname, '../data/western-shows.js'),
    batchPath: path.join(__dirname, '../data/western-batch-d-2026-shows.js'),
    label: 'Western Shows'
  },
  {
    targetPath: path.join(__dirname, '../data/western-movies.js'),
    batchPath: path.join(__dirname, '../data/western-batch-d-2026-movies.js'),
    label: 'Western Movies'
  }
];

let allSuccess = true;
let totalAdded = 0;

for (const { targetPath, batchPath, label } of merges) {
  // Clear require cache to get fresh data
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

// Verify specific new titles exist
const newIds = [
  'do-you-like-brahms', 'mad-for-each-other', 'another-oh-hae-young', 'yong-pal',
  'live-up-to-your-name', 'come-back-mister', 'wok-of-love', 'my-father-is-strange',
  'school-2017', 'when-my-love-blooms', 'sassy-go-go', 'my-girl-kdrama',
  'love-is-sweet-cdrama', 'you-are-my-hero-cdrama', 'douluo-continent', 'the-sword-and-the-brocade',
  'the-kings-avatar', 'my-little-happiness', 'crush-cdrama', 'accidentally-in-love',
  'long-vacation-jdrama', 'rich-man-poor-woman', 'proposal-daisakusen', 'code-blue-jdrama',
  'dandadan', 'the-promised-neverland', 'bungo-stray-dogs',
  'lessons-in-chemistry', 'griselda-netflix', 'the-perfect-couple', 'maniac-netflix', 'devs-hulu',
  'saltburn', 'anatomy-of-a-fall', 'killers-of-the-flower-moon'
];

const allIdsSet = new Set(ids);
const missing = newIds.filter(id => !allIdsSet.has(id));
if (missing.length > 0) {
  console.error('❌ Some new IDs not found:', missing);
  process.exit(1);
}
console.log(`✅ All ${newIds.length} new titles verified in catalog`);
