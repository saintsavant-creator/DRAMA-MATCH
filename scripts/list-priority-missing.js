/**
 * List priority missing shows (K-dramas and Asian content without poster paths)
 */
const engine = require('../data/recommendation-engine');
const { POSTER_PATHS } = require('../data/poster-paths');

const allShows = engine.getAllShows();

// Filter to shows NOT in POSTER_PATHS
const missing = allShows.filter(s => !(s.id in POSTER_PATHS));

// Categorize
const koreanNetworks = ['tvN','SBS','KBS2','MBC','JTBC','OCN','KBS','TV Chosun','Channel A','ENA','Netflix','Disney+','Viki','TVING','Wavve','Coupang Play'];
const japaneseNetworks = ['Fuji TV','NTV','TBS','TV Asahi','Netflix','WOWOW'];

const kdramas = missing.filter(s => {
  if (s.countryOfOrigin === 'Korea') return true;
  if (s.network && koreanNetworks.includes(s.network)) return true;
  // Check if it's in a K-drama data file
  return false;
});

const cdramas = missing.filter(s => s.countryOfOrigin === 'China');
const jdramas = missing.filter(s => {
  if (s.countryOfOrigin === 'Japan') return true;
  if (s.network && japaneseNetworks.includes(s.network) && !s.genres?.includes('anime')) return true;
  return false;
});
const anime = missing.filter(s => s.genres && s.genres.includes('anime'));
const kmovies = missing.filter(s => s.id && s.id.includes('-kmovie'));

console.log('Missing by category:');
console.log('K-dramas:', kdramas.length);
console.log('C-dramas:', cdramas.length);
console.log('J-dramas:', jdramas.length);
console.log('Anime:', anime.length);
console.log('K-movies:', kmovies.length);
console.log('');

// Output JSON for processing - just title+id+year
const allAsian = [...kdramas, ...cdramas, ...jdramas, ...anime, ...kmovies];
// Deduplicate by id
const seen = new Set();
const deduped = allAsian.filter(s => {
  if (seen.has(s.id)) return false;
  seen.add(s.id);
  return true;
});

// Sort by year descending (newer shows more likely on TMDB)
deduped.sort((a, b) => (b.year || 0) - (a.year || 0));

// Output first 200 for processing
console.log(JSON.stringify(deduped.slice(0, 200).map(s => ({
  id: s.id,
  title: s.title,
  year: s.year
})), null, 2));
