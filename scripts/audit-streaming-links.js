/**
 * Audit script: Check streaming platform coverage across all catalog titles
 * Identifies titles missing Netflix and other platform links
 */

const files = [
  'kdramas', 'kdramas-batch-a-thrillers', 'kdramas-batch-b-romances', 'kdramas-batch-c-mixed',
  'kdramas-batch-d-mixed', 'kdramas-batch-h', 'kdramas-batch-i', 'kdramas-batch-m-mixed',
  'kdramas-batch-o-mixed', 'kdramas-batch-p-viki', 'kdramas-batch-p', 'kdramas-batch-q-mixed',
  'kdramas-batch-r-streaming', 'kdramas-batch-w-mixed', 'kdramas-batch-x-mixed',
  'kdramas-batch-y-mixed', 'kdramas-batch-z-mixed',
  'cdramas', 'jdramas', 'anime', 'korean-movies',
  'western-shows', 'western-movies', 'western-batch-crime-detective', 'western-batch-expansion-2026',
  'western-batch-p', 'western-batch-r-streaming', 'western-batch-s-romance', 'western-batch-s',
  'western-batch-t'
];

let allShows = [];
for (const f of files) {
  try {
    const shows = require('../data/' + f + '.js');
    allShows = allShows.concat(shows.map(s => ({ ...s, _source: f })));
  } catch (e) {
    console.error('Error loading', f, e.message);
  }
}

// Dedup by id
const seen = new Set();
const deduped = [];
for (const s of allShows) {
  if (!seen.has(s.id)) {
    seen.add(s.id);
    deduped.push(s);
  }
}

// Check all keys that exist across the data (dynamic discovery)
const platforms = ['netflix', 'amazon_prime', 'viki', 'kocowa', 'disney_plus', 'hulu', 'apple_tv', 'crunchyroll', 'iqiyi', 'paramount', 'max', 'peacock', 'bbc', 'britbox', 'hallmark', 'pbs', 'cbs', 'fox', 'imdbtv'];
const counts = {};
for (const p of platforms) counts[p] = 0;
let noStreaming = 0;
let hasAny = 0;

const noStreamingList = [];
const netflixShows = [];
const noNetflixButHasOther = [];

for (const s of deduped) {
  const streaming = s.streaming || {};
  // Check ALL keys (true values only) — not just known list
  const allActiveKeys = Object.keys(streaming).filter(k => streaming[k] === true);
  if (allActiveKeys.length === 0) {
    noStreaming++;
    noStreamingList.push({ id: s.id, title: s.title, source: s._source, streaming: JSON.stringify(streaming) });
  } else {
    hasAny++;
  }
  // Count per-platform using known list
  for (const p of platforms) {
    if (streaming[p] === true) counts[p]++;
  }

  if (streaming.netflix) {
    netflixShows.push(s.title);
  }
}

console.log('=== STREAMING PLATFORM AUDIT ===\n');
console.log('Total unique titles:', deduped.length);
console.log('Has at least 1 streaming platform:', hasAny);
console.log('Has NO streaming platforms:', noStreaming);
console.log('\nPlatform coverage:');
for (const p of platforms) {
  const pct = ((counts[p] / deduped.length) * 100).toFixed(1);
  console.log('  ' + p + ': ' + counts[p] + ' (' + pct + '%)');
}

console.log('\n=== TITLES WITH NO STREAMING PLATFORMS (' + noStreamingList.length + ') ===');
for (const s of noStreamingList) {
  console.log('  [' + s.source + '] ' + s.title + ' (' + s.id + ') streaming=' + s.streaming);
}

console.log('\n=== TITLES WITH NETFLIX (' + netflixShows.length + ') ===');
for (const t of netflixShows) {
  console.log('  ' + t);
}

// Now look at shows per file that have NO streaming data
console.log('\n=== NO-STREAMING BY FILE ===');
const byFile = {};
for (const s of noStreamingList) {
  if (!byFile[s.source]) byFile[s.source] = [];
  byFile[s.source].push(s.title);
}
for (const [file, titles] of Object.entries(byFile)) {
  console.log('\n  [' + file + '] (' + titles.length + ' titles)');
  for (const t of titles) console.log('    - ' + t);
}
