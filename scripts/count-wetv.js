// Count WeTV shows across all data files
const files = [
  '../data/kdramas.js', '../data/cdramas.js', '../data/jdramas.js', '../data/anime.js',
  '../data/western-shows.js', '../data/western-movies.js', '../data/korean-movies.js'
];
let wetv = [], bbc = [], britbox = [];
for (const f of files) {
  try {
    const shows = require(f);
    for (const s of shows) {
      if (s.streaming && s.streaming.wetv) wetv.push(s.title);
      if (s.streaming && s.streaming.bbc) bbc.push(s.title);
      if (s.streaming && s.streaming.britbox) britbox.push(s.title);
    }
  } catch(e) {}
}
console.log('WeTV shows:', wetv.length, ':', wetv.join(', '));
console.log('BBC shows:', bbc.length, ':', bbc.join(', '));
console.log('BritBox shows:', britbox.length, ':', britbox.join(', '));
