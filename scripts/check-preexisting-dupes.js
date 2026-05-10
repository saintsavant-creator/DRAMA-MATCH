// Check if the 4 detected dupes are from pre-existing base files or our new batch
const preExistingIds = [
  ...require('../data/kdramas'),
  ...require('../data/western-shows'),
  ...require('../data/korean-movies'),
  ...require('../data/western-movies'),
  ...require('../data/cdramas'),
  ...require('../data/jdramas'),
  ...require('../data/anime'),
].map(t => t.id);

const suspected = ['squid-game', 'pachinko', 'under-the-skin', 'one-piece'];
const seen = new Set();
const preExistingDupes = [];
preExistingIds.forEach(id => {
  if (seen.has(id) && suspected.includes(id)) preExistingDupes.push(id);
  seen.add(id);
});
console.log('Pre-existing dupes in base files:', preExistingDupes);
console.log('(These existed before batch-f — not introduced by new entries)');

// Confirm new batch has none of these IDs
const newIds = new Set([
  ...require('../data/kdramas-batch-f-2026'),
  ...require('../data/cdramas-batch-f-2026'),
  ...require('../data/western-batch-f-2026-shows'),
  ...require('../data/western-batch-f-2026-movies'),
].map(t => t.id));

suspected.forEach(id => {
  if (newIds.has(id)) console.log('PROBLEM: new batch has', id);
  else console.log('OK: new batch does not have', id);
});
