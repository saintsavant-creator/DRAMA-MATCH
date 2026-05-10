const batch = require('../data/kdramas-batch-h.js');
const existing = require('../data/kdramas.js');

console.log('Batch H count:', batch.length);

// Check all have required fields
batch.forEach(d => {
  const fields = ['id', 'title', 'year', 'episodes', 'synopsis', 'genres', 'themes', 'tropes', 'tone', 'setting', 'characterTypes', 'streaming', 'network', 'actors', 'matchReasoningHints'];
  fields.forEach(f => {
    if (!d[f]) console.error('MISSING field', f, 'on', d.id);
  });
  if (!d.matchReasoningHints || d.matchReasoningHints.length !== 5) {
    console.error('WRONG HINTS COUNT on', d.id, ':', d.matchReasoningHints && d.matchReasoningHints.length);
  }
});

// Check for duplicate IDs within batch
const batchIds = batch.map(d => d.id);
const batchIdSet = new Set(batchIds);
if (batchIdSet.size !== batchIds.length) {
  console.error('DUPLICATE IDs WITHIN BATCH!');
} else {
  console.log('✅ No duplicates within batch');
}

// Check against existing catalog
const existingIds = new Set(existing.map(d => d.id));
const conflicts = batch.filter(d => existingIds.has(d.id));
if (conflicts.length > 0) {
  console.error('CONFLICTS with existing:', conflicts.map(d => d.id).join(', '));
} else {
  console.log('✅ No conflicts with existing', existing.length, 'entries');
}

// Check title conflicts
const existingTitles = new Set(existing.map(d => d.title.toLowerCase().trim()));
const titleConflicts = batch.filter(d => existingTitles.has(d.title.toLowerCase().trim()));
if (titleConflicts.length > 0) {
  console.error('TITLE CONFLICTS:', titleConflicts.map(d => d.title).join(', '));
} else {
  console.log('✅ No title conflicts with existing catalog');
}

console.log('IDs:', batch.map(d => d.id).join('\n'));
