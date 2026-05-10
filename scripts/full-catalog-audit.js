#!/usr/bin/env node
/**
 * Full Catalog Dedup Audit
 * - Checks every catalog file for duplicate IDs and duplicate titles
 * - Reports counts vs expected
 * - Checks batch files not yet merged into main files
 */
const path = require('path');
const dataDir = path.join(__dirname, '../data');

function load(file) {
  try {
    return require(path.join(dataDir, file));
  } catch (e) {
    console.error(`  ❌ Failed to load ${file}: ${e.message}`);
    return null;
  }
}

function findDuplicates(arr, label) {
  const seenIds = new Map();
  const seenTitles = new Map();
  const dupIds = [];
  const dupTitles = [];

  arr.forEach((item, idx) => {
    const id = item.id;
    const title = (item.title || '').toLowerCase().trim();

    if (seenIds.has(id)) {
      dupIds.push({ id, firstIdx: seenIds.get(id), secondIdx: idx });
    } else {
      seenIds.set(id, idx);
    }

    if (title && seenTitles.has(title)) {
      // Only flag if different IDs (same title, different IDs = potential dup)
      const firstId = seenTitles.get(title);
      if (firstId !== id) {
        dupTitles.push({ title: item.title, id1: firstId, id2: id });
      }
    } else if (title) {
      seenTitles.set(title, id);
    }
  });

  return { dupIds, dupTitles };
}

// Expected counts from memory/docs
const EXPECTED = {
  'kdramas.js': 671,
  'cdramas.js': 161,
  'western-shows.js': 529,
  'western-movies.js': 140,
  'korean-movies.js': 18,
  'jdramas.js': null, // ~35 but combined w/ jmovies
  'anime.js': null,   // ~78
};

// Main catalog files
const MAIN_FILES = [
  'kdramas.js',
  'cdramas.js',
  'western-shows.js',
  'western-movies.js',
  'korean-movies.js',
  'jdramas.js',
  'anime.js',
];

// All batch files (staging — not loaded by engine)
const BATCH_FILES = [
  // K-dramas batches
  'kdramas-batch-a-thrillers.js',
  'kdramas-batch-aa-mixed.js',
  'kdramas-batch-b-romances.js',
  'kdramas-batch-c-mixed.js',
  'kdramas-batch-d-mixed.js',
  'kdramas-batch-d-2026.js',
  'kdramas-batch-e-2026.js',
  'kdramas-batch-gap-2026.js',
  'kdramas-batch-h.js',
  'kdramas-batch-i.js',
  'kdramas-batch-iu-bws.js',
  'kdramas-batch-m-mixed.js',
  'kdramas-batch-o-mixed.js',
  'kdramas-batch-p.js',
  'kdramas-batch-p-viki.js',
  'kdramas-batch-q-mixed.js',
  'kdramas-batch-r-streaming.js',
  'kdramas-batch-w-mixed.js',
  'kdramas-batch-x-mixed.js',
  'kdramas-batch-y-mixed.js',
  'kdramas-batch-z-mixed.js',
  // C-dramas batches
  'cdramas-batch-aa-mixed.js',
  'cdramas-batch-d-2026.js',
  'cdramas-batch-e-2026.js',
  'cdramas-batch-gap-2026.js',
  // Western batches
  'western-batch-aa-movies.js',
  'western-batch-d-2026-movies.js',
  // J-dramas batches
  'jdramas-batch-aa-mixed.js',
  'jdramas-batch-d-2026.js',
  'jdramas-batch-gap-2026.js',
  // Anime batches
  'anime-batch-2026-b.js',
  'anime-batch-aa-mixed.js',
  'anime-batch-d-2026.js',
  'anime-jdrama-batch-e-2026.js',
];

console.log('='.repeat(60));
console.log('FULL CATALOG DEDUP AUDIT');
console.log('='.repeat(60));

// Load all main files and audit
const mainData = {};
let totalIssues = 0;

console.log('\n📋 MAIN CATALOG FILES:\n');

MAIN_FILES.forEach(file => {
  const data = load(file);
  if (!data) { totalIssues++; return; }
  mainData[file] = data;

  const count = data.length;
  const expected = EXPECTED[file];
  const countStatus = expected ? (count === expected ? '✅' : `⚠️  (expected ${expected})`) : '';

  const { dupIds, dupTitles } = findDuplicates(data, file);
  const hasDups = dupIds.length > 0 || dupTitles.length > 0;

  console.log(`${hasDups ? '⚠️ ' : '✅'} ${file}: ${count} entries ${countStatus}`);

  if (dupIds.length > 0) {
    console.log(`   ❌ DUPLICATE IDs (${dupIds.length}):`);
    dupIds.forEach(d => console.log(`      - "${d.id}" at positions ${d.firstIdx} and ${d.secondIdx}`));
    totalIssues += dupIds.length;
  }

  if (dupTitles.length > 0) {
    console.log(`   ⚠️  SAME TITLE, DIFFERENT IDs (${dupTitles.length}):`);
    dupTitles.forEach(d => console.log(`      - "${d.title}" → ids: "${d.id1}" vs "${d.id2}"`));
    totalIssues += dupTitles.length;
  }
});

// Check batch files — find any entries NOT yet in main files
console.log('\n📦 BATCH FILES (staging — checking for unmerged entries):\n');

// Build main ID sets per category
const kdramaIds = new Set((mainData['kdramas.js'] || []).map(x => x.id));
const cdramaIds = new Set((mainData['cdramas.js'] || []).map(x => x.id));
const westernShowIds = new Set((mainData['western-shows.js'] || []).map(x => x.id));
const westernMovieIds = new Set((mainData['western-movies.js'] || []).map(x => x.id));
const jdramaIds = new Set((mainData['jdramas.js'] || []).map(x => x.id));
const animeIds = new Set((mainData['anime.js'] || []).map(x => x.id));

// Determine relevant main ID set per batch
function getMainSet(file) {
  if (file.startsWith('kdramas')) return kdramaIds;
  if (file.startsWith('cdramas')) return cdramaIds;
  if (file.startsWith('western-batch-aa-movies') || file.startsWith('western-batch-d-2026-movies')) return westernMovieIds;
  if (file.startsWith('western')) return westernShowIds;
  if (file.startsWith('jdramas')) return jdramaIds;
  if (file.startsWith('anime')) return animeIds;
  return null;
}

let unmergedCount = 0;
BATCH_FILES.forEach(file => {
  const data = load(file);
  if (!data) return;

  const mainSet = getMainSet(file);
  if (!mainSet) {
    console.log(`  ℹ️  ${file}: ${data.length} entries (no main set mapping)`);
    return;
  }

  const unmerged = data.filter(x => !mainSet.has(x.id));
  const alreadyMerged = data.filter(x => mainSet.has(x.id));

  if (unmerged.length > 0) {
    console.log(`  ⚠️  ${file}: ${data.length} entries — ${unmerged.length} NOT yet in main file`);
    unmerged.slice(0, 5).forEach(x => console.log(`     - "${x.title}" (${x.id})`));
    if (unmerged.length > 5) console.log(`     ... and ${unmerged.length - 5} more`);
    unmergedCount += unmerged.length;
  } else {
    console.log(`  ✅ ${file}: ${data.length} entries — all merged into main file`);
  }
});

// Summary
console.log('\n' + '='.repeat(60));
console.log('SUMMARY');
console.log('='.repeat(60));

const kdramas = mainData['kdramas.js'];
const cdramas = mainData['cdramas.js'];
const westernShows = mainData['western-shows.js'];
const westernMovies = mainData['western-movies.js'];
const koreanMovies = mainData['korean-movies.js'];
const jdramas = mainData['jdramas.js'];
const anime = mainData['anime.js'];

const total = [kdramas, cdramas, westernShows, westernMovies, koreanMovies, jdramas, anime]
  .filter(Boolean).reduce((sum, arr) => sum + arr.length, 0);

console.log(`\nMain catalog totals:`);
if (kdramas) console.log(`  K-dramas:       ${kdramas.length} (expected 671)`);
if (cdramas) console.log(`  C-dramas:       ${cdramas.length} (expected 161)`);
if (westernShows) console.log(`  Western shows:  ${westernShows.length} (expected 529)`);
if (westernMovies) console.log(`  Western movies: ${westernMovies.length} (expected 140)`);
if (koreanMovies) console.log(`  Korean movies:  ${koreanMovies.length} (expected 18)`);
if (jdramas) console.log(`  J-dramas:       ${jdramas.length}`);
if (anime) console.log(`  Anime:          ${anime.length}`);
console.log(`  ──────────────────────`);
console.log(`  TOTAL:          ${total}`);
console.log(`\nDedup issues found: ${totalIssues}`);
console.log(`Unmerged batch entries: ${unmergedCount}`);

if (totalIssues === 0 && unmergedCount === 0) {
  console.log('\n✅ Catalog is clean — no duplicates, all batches merged.');
} else {
  if (totalIssues > 0) console.log('\n⚠️  Fix required: duplicate entries found in main files.');
  if (unmergedCount > 0) console.log('\n⚠️  Unmerged entries exist in batch files — may need merging.');
}
