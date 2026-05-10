const main = require('../data/western-shows.js');
const batch = require('../data/western-batch-s.js');
const mainIds = new Set(main.map(s => s.id));
const batchIds = batch.map(s => s.id);
const inBoth = batchIds.filter(id => mainIds.has(id));
const onlyInBatch = batchIds.filter(id => { return !mainIds.has(id); });
console.log('In batch-s:', batchIds.length);
console.log('Already in western-shows:', inBoth.length);
console.log('NOT yet merged:', onlyInBatch.length);
if (onlyInBatch.length > 0) {
  console.log('Unmerged IDs:', onlyInBatch.slice(0, 10).join(', '));
}
