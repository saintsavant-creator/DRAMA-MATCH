// Check all unique streaming keys across the catalog
const shows = require('../data/western-shows.js');
const movies = require('../data/western-movies.js');

const allKeys = new Set();
for (const s of [...shows, ...movies]) {
  if (s.streaming) {
    for (const key of Object.keys(s.streaming)) {
      if (s.streaming[key]) allKeys.add(key);
    }
  }
}
console.log('All unique streaming keys in western catalog:');
for (const k of [...allKeys].sort()) console.log(' -', k);
