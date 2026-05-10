// List all IDs in the active catalog (loaded by recommendation-engine.js)
const kdramas = require('../data/kdramas');
const westernShows = require('../data/western-shows');
const koreanMovies = require('../data/korean-movies');
const westernMovies = require('../data/western-movies');
const cdramas = require('../data/cdramas');
const jdramas = require('../data/jdramas');
const animeData = require('../data/anime');

const all = [...kdramas, ...westernShows, ...koreanMovies, ...westernMovies, ...cdramas, ...jdramas, ...animeData];
const ids = all.map(s => s.id).sort();
console.log('Total active titles:', all.length);
ids.forEach(id => console.log(id));
