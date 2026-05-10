const files = [
  '../data/kdramas-batch-d-2026.js',
  '../data/cdramas-batch-d-2026.js',
  '../data/jdramas-batch-d-2026.js',
  '../data/anime-batch-d-2026.js',
  '../data/western-batch-d-2026-shows.js',
  '../data/western-batch-d-2026-movies.js'
];
let total = 0;
for (const f of files) {
  const data = require(f);
  console.log(f + ': ' + data.length + ' entries');
  total += data.length;
  for (const e of data) {
    if (!e.id) throw new Error('Missing id in ' + f);
    if (!e.title) throw new Error('Missing title for ' + e.id);
    if (!e.matchReasoningHints || e.matchReasoningHints.length < 5) throw new Error('Need 5 hints for ' + e.id + ' (got ' + (e.matchReasoningHints || []).length + ')');
    if (!e.genres || !e.themes || !e.tropes || !e.tone || !e.setting) throw new Error('Missing metadata for ' + e.id);
    if (!e.actors || e.actors.length === 0) throw new Error('Missing actors for ' + e.id);
    if (!e.streaming) throw new Error('Missing streaming for ' + e.id);
  }
}
console.log('\nTotal new titles: ' + total);
console.log('All entries validated successfully!');
