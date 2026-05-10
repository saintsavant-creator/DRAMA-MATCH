// Check which proposed new titles are NOT in the current live catalog
const path = require('path');
const kdramas = require('../data/kdramas.js');
const cdramas = require('../data/cdramas.js');
const wshows = require('../data/western-shows.js');
const wmovies = require('../data/western-movies.js');
const kmovies = require('../data/korean-movies.js');
const jdramas = require('../data/jdramas.js');
const anime = require('../data/anime.js');

const allIds = new Set([
  ...kdramas, ...cdramas, ...wshows, ...wmovies, ...kmovies, ...jdramas, ...anime
].map(t => t.id));

console.log('Total live catalog:', allIds.size);

const proposed = [
  // K-dramas
  'again-my-life',
  'good-job-2022',
  'oasis-2023',
  'thirty-days-2023',
  'cleaning-up-2022',
  'thank-you-2006',
  'shine-or-go-crazy',
  'my-princess',
  'surplus-princess',
  'gap-dong',
  'all-that-we-loved',
  'marry-him-if-you-dare',
  'my-secret-hotel',
  // C-dramas
  'serenade-of-peaceful-joy',
  'in-a-class-of-her-own',
  'a-little-thing-called-first-love',
  'ruyi-royal-love',
  'the-love-you-give-me',
  'the-legend-of-anle',
  'renegade-immortal',
  'the-world-owes-me-a-first-love',
  'stand-by-me-2019',
  'i-hear-you-cdrama',
  'love-of-thousand-years',
  'ordinary-greatness',
  // Western
  'challengers-2024',
  'love-lies-bleeding',
  'conclave',
  'the-substance',
  'it-ends-with-us',
  'silo-s2',
  'slow-horses-s5',
  'severance-s2',
  'on-becoming-a-god-in-central-florida',
  'white-lotus-s3',
];

const alreadyIn = proposed.filter(id => allIds.has(id));
const notIn = proposed.filter(id => !allIds.has(id));

console.log('\nAlready in catalog:', alreadyIn.length);
alreadyIn.forEach(id => console.log(' ✓', id));
console.log('\nNOT in catalog (can add):', notIn.length);
notIn.forEach(id => console.log(' +', id));
