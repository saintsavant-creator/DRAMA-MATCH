const d = require('../data/kdramas.js');
const batch = d.slice(-30);
const missing = batch.filter(x => {
  if (!x.matchReasoningHints) return true;
  if (x.matchReasoningHints.length !== 5) return true;
  return false;
});
console.log('New entries count:', batch.length);
console.log('Entries without 5 hints:', missing.map(x => x.id));
console.log('All have 5 hints:', missing.length === 0);
batch.forEach(x => {
  const hints = x.matchReasoningHints ? x.matchReasoningHints.length : 0;
  console.log(x.year, x.id, '| hints:', hints);
});
