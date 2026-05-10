const path = require('path');
const kdramas = require('../data/kdramas.js');
const gap = require('../data/kdramas-batch-gap-2026.js');

const kIds = new Set(kdramas.map(t => t.id));
const missing = gap.filter(t => !kIds.has(t.id));
console.log('K-dramas in base:', kdramas.length);
console.log('Gap batch count:', gap.length);
console.log('Gap items NOT in kdramas.js:', missing.length);
missing.forEach(t => console.log('-', t.id, t.title));

// Also check cdramas
const cdramas = require('../data/cdramas.js');
const cgap = require('../data/cdramas-batch-gap-2026.js');
const cIds = new Set(cdramas.map(t => t.id));
const cmissing = cgap.filter(t => !cIds.has(t.id));
console.log('\nCdramas in base:', cdramas.length);
console.log('CDrama gap items NOT in cdramas.js:', cmissing.length);
cmissing.forEach(t => console.log('-', t.id, t.title));

// Check western-batch-gap-2026
const wshows = require('../data/western-shows.js');
const wmovies = require('../data/western-movies.js');
const wgap = require('../data/western-batch-gap-2026.js');
const wIds = new Set([...wshows, ...wmovies].map(t => t.id));
const wmissing = wgap.filter(t => !wIds.has(t.id));
console.log('\nWestern base:', wshows.length + wmovies.length);
console.log('Western gap items NOT in base:', wmissing.length);
wmissing.forEach(t => console.log('-', t.id, t.title));
