const kd = require('../data/kdramas-batch-p.js');
const wb = require('../data/western-batch-p.js');

console.log('K-dramas batch:', kd.length);
console.log('Western batch:', wb.length);
console.log('Total new:', kd.length + wb.length);

const allNew = [...kd, ...wb];
const issues = [];
allNew.forEach(function(t) {
  const hints = t.matchReasoningHints || [];
  if (hints.length < 5) {
    issues.push(t.id + ': needs 5 hints, has ' + hints.length);
  }
  const s = t.streaming || {};
  const platforms = Object.keys(s);
  const affiliatePlatforms = platforms.filter(function(p) {
    return p === 'netflix' || p === 'amazon_prime' || p === 'disney_plus';
  });
  if (affiliatePlatforms.length === 0) {
    issues.push(t.id + ': no affiliate platform');
  }
});

if (issues.length > 0) {
  console.log('\nISSUES:');
  issues.forEach(function(i) { console.log(' -', i); });
} else {
  console.log('\nAll validations passed');
}

console.log('\nNew IDs and platforms:');
allNew.forEach(function(t) {
  const platforms = Object.keys(t.streaming || {}).join(',');
  console.log(' -', t.id, '(' + platforms + ')');
});
