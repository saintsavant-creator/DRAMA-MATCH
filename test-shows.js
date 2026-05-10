const engine = require('./data/recommendation-engine');
const shows = ['the-wire','person-of-interest','elementary','monk','bosch','the-blacklist','line-of-duty','criminal-minds'];
shows.forEach(id => {
  const r = engine.getRecommendations(id, 4);
  if (\!r.error) {
    console.log(id, '->', r.recommendations.slice(0,3).map(x => x.show.title).join(', '));
  }
});
