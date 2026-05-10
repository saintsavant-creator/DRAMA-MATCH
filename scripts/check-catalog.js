#!/usr/bin/env node
const kdramas = require('../data/kdramas');
const cdramas = require('../data/cdramas');
const koreanMovies = require('../data/korean-movies');
const westernShows = require('../data/western-shows');
const westernMovies = require('../data/western-movies');

const batchA = require('../data/kdramas-batch-a-thrillers');
const batchB = require('../data/kdramas-batch-b-romances');
const batchC = require('../data/kdramas-batch-c-mixed');
const batchD = require('../data/kdramas-batch-d-mixed');
const batchM = require('../data/kdramas-batch-m-mixed');
const batchQ = require('../data/kdramas-batch-q-mixed');
const batchW = require('../data/kdramas-batch-w-mixed');
const batchX = require('../data/kdramas-batch-x-mixed');

const kdramaIds = new Set(kdramas.map(k => k.id));
const allBatches = [...batchA, ...batchB, ...batchC, ...batchD, ...batchM, ...batchQ, ...batchW, ...batchX];

const inKdramas = allBatches.filter(b => kdramaIds.has(b.id));
const notInKdramas = allBatches.filter(b => !kdramaIds.has(b.id));

console.log('=== Catalog Summary ===');
console.log('kdramas.js entries:', kdramas.length);
console.log('cdramas.js entries:', cdramas.length);
console.log('korean-movies.js entries:', koreanMovies.length);
console.log('western-shows.js entries:', westernShows.length);
console.log('western-movies.js entries:', westernMovies.length);
console.log('');
console.log('=== Batch Files ===');
console.log('Total batch entries:', allBatches.length);
console.log('Batch entries ALREADY in kdramas.js:', inKdramas.length, inKdramas.slice(0, 3).map(b => b.id));
console.log('Batch entries NOT in kdramas.js:', notInKdramas.length, notInKdramas.slice(0, 3).map(b => b.id));
console.log('');
console.log('=== Sitemap Coverage ===');
const sitemapCovered = kdramas.length + westernShows.length + westernMovies.length;
const missing = cdramas.length + koreanMovies.length;
console.log('Currently in sitemap (drama pages):', kdramas.length);
console.log('Missing from sitemap (cdramas):', cdramas.length);
console.log('Missing from sitemap (k-movies):', koreanMovies.length);
