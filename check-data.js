const anime = require('./data/anime.js');
const jdramas = require('./data/jdramas.js');
const kdramas = require('./data/kdramas.js');
const western = require('./data/western-shows.js');
const movies = require('./data/western-movies.js');

console.log('=== Native Title Coverage ===');
console.log('Anime:', anime.length, '| with nativeTitle:', anime.filter(s => s.nativeTitle).length);
console.log('Jdramas:', jdramas.length, '| with nativeTitle:', jdramas.filter(s => s.nativeTitle).length);
console.log('Kdramas:', kdramas.length, '| with nativeTitle:', kdramas.filter(s => s.nativeTitle).length);
console.log('Western shows:', western.length, '| with nativeTitle:', western.filter(s => s.nativeTitle).length);
console.log('Western movies:', movies.length, '| with nativeTitle:', movies.filter(s => s.nativeTitle).length);

console.log('\n=== Kdramas missing nativeTitle (first 30) ===');
const missingKdrama = kdramas.filter(s => !s.nativeTitle).map(s => s.title);
console.log('Count:', missingKdrama.length);
missingKdrama.slice(0, 30).forEach(t => console.log(' -', t));