const batches = ['anime-batch-aa-mixed','anime-batch-d-2026','anime-batch-2026-b'];
let totalMissing = 0;
for (const b of batches) {
  try {
    const data = require('./data/' + b);
    const m = data.filter(s => !s.nativeTitle).length;
    console.log(b + ': ' + data.length + ' entries, ' + m + ' missing nativeTitle');
    if (m > 0) {
      data.filter(s => !s.nativeTitle).forEach(s => console.log('  -', s.id, s.title));
    }
    totalMissing += m;
  } catch(e) { console.log(b + ': error - ' + e.message); }
}
console.log('\nTotal missing from batches:', totalMissing);