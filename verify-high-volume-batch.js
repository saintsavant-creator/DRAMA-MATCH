const engine = require('./data/recommendation-engine');
const all = engine.getAllShows();
const stats = engine.getStats();
console.log('Catalog stats:', JSON.stringify(stats, null, 2));

const allIds = {};
all.forEach(s => { allIds[s.id] = s.type; });

const newShowIds = [
  'arrow','the-flash-cw','riverdale','once-upon-a-time','percy-jackson-2024',
  'on-my-block','fate-winx-saga','sexlife-netflix','pll-original-sin',
  'good-trouble','workin-moms','bel-air-2022','swat-cbs','the-resident-fox',
  'seal-team','warrior-cinemax','warrior-nun','grand-army','first-kill-netflix',
  'the-order-netflix','macgyver-2016','swagger-apple'
];
const newMovieIds = [
  'twilight-2008','the-hunger-games-2012','27-dresses','miss-congeniality',
  'the-kissing-booth','booksmart','easy-a','shes-the-man','a-cinderella-story',
  'romeo-juliet-1996','never-been-kissed','ps-i-love-you','someone-like-you'
];

const allNew = [...newShowIds, ...newMovieIds];
const found = allNew.filter(id => allIds[id]);
const missing = allNew.filter(id => !allIds[id]);

console.log(`\nNew titles: ${allNew.length} expected`);
console.log(`Found in catalog: ${found.length}`);
console.log(`Missing: ${missing.length}`, missing);

console.log('\nShows found as type:');
newShowIds.forEach(id => console.log(`  ${id}: ${allIds[id] || 'MISSING'}`));
console.log('\nMovies found as type:');
newMovieIds.forEach(id => console.log(`  ${id}: ${allIds[id] || 'MISSING'}`));
