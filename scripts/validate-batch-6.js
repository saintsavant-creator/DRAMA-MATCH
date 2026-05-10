/**
 * Validate batch-6: count, dedup, syntax check
 */
const fs = require('fs');
const path = require('path');

const shows = require('../data/western-batch-6-2026-shows');
const movies = require('../data/western-batch-6-2026-movies');

console.log('=== Batch 6 Validation ===');
console.log('Shows:', shows.length, '| Movies:', movies.length, '| Total:', shows.length + movies.length);

// Load all existing western data (excluding batch-6 itself)
const dataDir = path.join(__dirname, '../data');
const files = fs.readdirSync(dataDir).filter(f =>
  f.startsWith('western') &&
  f.endsWith('.js') &&
  f.indexOf('batch-6') === -1
);

let existing = [];
files.forEach(f => {
  try {
    const d = require('../data/' + f);
    if (Array.isArray(d)) existing = existing.concat(d);
  } catch(e) {}
});

const existingIds = new Set(existing.map(x => x.id));
const newEntries = [...shows, ...movies];
const newIds = newEntries.map(x => x.id);

// Check against existing catalog
const dupes = newIds.filter(id => existingIds.has(id));
console.log('\nDupes vs existing catalog:', dupes.length === 0 ? 'NONE ✓' : 'FOUND: ' + dupes.join(', '));

// Check internal uniqueness
const uniqIds = new Set(newIds);
console.log('Internal uniqueness:', newIds.length === uniqIds.size ? 'ALL UNIQUE ✓' : 'DUPLICATES FOUND');

// Check required fields
let fieldErrors = 0;
newEntries.forEach(e => {
  const missing = [];
  if (!e.id) missing.push('id');
  if (!e.title) missing.push('title');
  if (!e.synopsis) missing.push('synopsis');
  if (!e.genres || !e.genres.length) missing.push('genres');
  if (!e.matchReasoningHints || e.matchReasoningHints.length < 5) missing.push('matchReasoningHints(need 5)');
  if (!e.streaming || Object.keys(e.streaming).length === 0) missing.push('streaming');
  if (!e.actors || !e.actors.length) missing.push('actors');
  if (missing.length > 0) {
    console.log('MISSING FIELDS in', e.id, ':', missing.join(', '));
    fieldErrors++;
  }
});
console.log('Field validation:', fieldErrors === 0 ? 'ALL PASS ✓' : fieldErrors + ' errors');

// List all new IDs
console.log('\nNew show IDs:');
shows.forEach(s => console.log(' ', s.id, '-', s.title, '(' + s.year + ')'));
console.log('\nNew movie IDs:');
movies.forEach(m => console.log(' ', m.id, '-', m.title, '(' + m.year + ')'));
