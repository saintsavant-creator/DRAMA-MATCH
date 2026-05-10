#!/usr/bin/env node
/**
 * Merge Batch E into main catalog files
 * Strict dedup check before any write
 */
const fs = require('fs');
const path = require('path');

const DATA_DIR = path.join(__dirname, '../data');

function loadJSON(filename) {
  return require(path.join(DATA_DIR, filename));
}

function writeMainFile(filename, entries) {
  const content = 'module.exports = ' + JSON.stringify(entries, null, 2) + ';\n';
  fs.writeFileSync(path.join(DATA_DIR, filename), content, 'utf8');
}

// Load existing catalogs
const kdramas = loadJSON('kdramas.js');
const cdramas = loadJSON('cdramas.js');
const anime = loadJSON('anime.js');
const jdramas = loadJSON('jdramas.js');

// Load batch E data
const kdramasBatchE = loadJSON('kdramas-batch-e-2026.js');
const cdramasBatchE = loadJSON('cdramas-batch-e-2026.js');
const { newAnime: animeBatchE, newJdramas: jdramasBatchE } = loadJSON('anime-jdrama-batch-e-2026.js');

function deduplicateAndMerge(existing, batchNew, label) {
  const existingIds = new Set(existing.map(s => s.id));
  const existingTitles = new Set(existing.map(s => s.title.toLowerCase().trim()));

  const toAdd = [];
  const skipped = [];

  for (const show of batchNew) {
    if (existingIds.has(show.id)) {
      skipped.push({ id: show.id, reason: 'ID exists' });
      continue;
    }
    const titleLower = show.title.toLowerCase().trim();
    if (existingTitles.has(titleLower)) {
      skipped.push({ id: show.id, reason: 'Title exists: ' + show.title });
      continue;
    }
    toAdd.push(show);
    existingIds.add(show.id);
    existingTitles.add(titleLower);
  }

  console.log(`\n=== ${label} ===`);
  console.log(`Existing: ${existing.length}`);
  console.log(`Batch new: ${batchNew.length}`);
  console.log(`Adding: ${toAdd.length}`);
  if (skipped.length) {
    console.log(`Skipped (duplicates): ${skipped.length}`);
    skipped.forEach(s => console.log('  SKIP:', s.id, '-', s.reason));
  }
  console.log(`New total: ${existing.length + toAdd.length}`);

  return [...existing, ...toAdd];
}

// Merge
const newKdramas = deduplicateAndMerge(kdramas, kdramasBatchE, 'K-DRAMAS');
const newCdramas = deduplicateAndMerge(cdramas, cdramasBatchE, 'C-DRAMAS');
const newAnime = deduplicateAndMerge(anime, animeBatchE, 'ANIME');
const newJdramas = deduplicateAndMerge(jdramas, jdramasBatchE, 'J-DRAMAS');

// Validate no NEW duplicates were introduced (pre-existing dupes are known/ignored)
function validateNoDupes(existing, merged, batchIds, label) {
  // Find pre-existing duplicate IDs in the original file
  const existingIdCounts = {};
  existing.forEach(s => { existingIdCounts[s.id] = (existingIdCounts[s.id] || 0) + 1; });
  const preExistingDupeIds = new Set(
    Object.entries(existingIdCounts).filter(([, v]) => v > 1).map(([id]) => id)
  );

  // Check for new duplicates (only in batch-added entries)
  const mergedIdCounts = {};
  merged.forEach(s => { mergedIdCounts[s.id] = (mergedIdCounts[s.id] || 0) + 1; });
  const newDupes = Object.entries(mergedIdCounts)
    .filter(([id, v]) => v > 1 && !preExistingDupeIds.has(id));

  if (preExistingDupeIds.size > 0) {
    console.log(`  [WARNING] Pre-existing dupes in ${label} (not introduced by this batch): ${[...preExistingDupeIds].join(', ')}`);
  }
  if (newDupes.length > 0) {
    console.error(`\nERROR: New duplicates introduced in ${label}:`, newDupes);
    process.exit(1);
  } else {
    console.log(`  [OK] Zero new duplicates introduced in ${label}`);
  }
}

const kdramaBatchIds = new Set(kdramasBatchE.map(s => s.id));
const cdramaBatchIds = new Set(cdramasBatchE.map(s => s.id));
const animeBatchIds = new Set(animeBatchE.map(s => s.id));
const jdramaBatchIds = new Set(jdramasBatchE.map(s => s.id));

validateNoDupes(kdramas, newKdramas, kdramaBatchIds, 'kdramas');
validateNoDupes(cdramas, newCdramas, cdramaBatchIds, 'cdramas');
validateNoDupes(anime, newAnime, animeBatchIds, 'anime');
validateNoDupes(jdramas, newJdramas, jdramaBatchIds, 'jdramas');

// Summary
const totalAdded = (newKdramas.length - kdramas.length) +
                   (newCdramas.length - cdramas.length) +
                   (newAnime.length - anime.length) +
                   (newJdramas.length - jdramas.length);
console.log(`\n=== SUMMARY ===`);
console.log(`Total new entries: ${totalAdded}`);
console.log(`K-dramas: ${kdramas.length} → ${newKdramas.length} (+${newKdramas.length - kdramas.length})`);
console.log(`C-dramas: ${cdramas.length} → ${newCdramas.length} (+${newCdramas.length - cdramas.length})`);
console.log(`Anime: ${anime.length} → ${newAnime.length} (+${newAnime.length - anime.length})`);
console.log(`J-dramas: ${jdramas.length} → ${newJdramas.length} (+${newJdramas.length - jdramas.length})`);

// Write to files
if (process.argv[2] === '--write') {
  console.log('\nWriting to files...');
  writeMainFile('kdramas.js', newKdramas);
  writeMainFile('cdramas.js', newCdramas);
  writeMainFile('anime.js', newAnime);
  writeMainFile('jdramas.js', newJdramas);
  console.log('Done! ✓');
} else {
  console.log('\nDry run complete. Run with --write to apply changes.');
}
