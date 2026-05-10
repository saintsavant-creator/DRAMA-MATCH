const ws = require('../data/western-shows.js');

const allShows = [...ws];
const titles = new Set(allShows.map(s => s.title.toLowerCase()));
const ids = new Set(allShows.map(s => s.id));

const popular = [
  'The Bear', 'Yellowstone', 'Ted Lasso', 'Severance', 'The Last of Us',
  'House of the Dragon', 'The White Lotus', 'Abbott Elementary',
  'Only Murders in the Building', 'Shrinking', 'Reacher', 'Jack Ryan',
  'The Diplomat', 'Beef', 'Shogun', 'Fallout', '3 Body Problem',
  'Baby Reindeer', 'The Gentlemen', 'Slow Horses',
  'Succession', 'Barry', 'Euphoria', 'The Boys', 'Andor',
  'Atlanta', 'Russian Doll', 'Fleabag', 'Killing Eve', 'Mindhunter',
  'Ozark', 'Mare of Easttown', 'Sharp Objects', 'The Haunting of Hill House',
  'Station Eleven', 'The Morning Show', 'Normal People', 'Sex Education',
  'Cobra Kai', 'Bridgerton', 'Arcane', 'Stranger Things', 'Wednesday',
  'Dark', 'Money Heist', 'Squid Game', 'Emily in Paris',
  'Industry', 'Reservation Dogs', 'What We Do in the Shadows',
  'Our Flag Means Death',
  'The Office', 'Parks and Recreation', 'Community', 'Schitts Creek',
  'Arrested Development', 'Brooklyn Nine-Nine',
  'The Marvelous Mrs. Maisel', 'Veep',
  'Better Call Saul', 'Breaking Bad', 'The Wire', 'The Sopranos',
  'Mad Men', 'Deadwood', 'True Detective', 'Fargo',
  'Peaky Blinders', 'Band of Brothers', 'Rome',
  'Justified', 'Yellowjackets', 'Big Little Lies',
  'Derry Girls', 'Heartstopper', 'One Day',
  'Loki', 'WandaVision', 'Andor', 'The Mandalorian',
  'For All Mankind', 'Silo', 'Dark Matter', 'The Expanse', 'Foundation', 'Altered Carbon',
  'Black Mirror', 'The Terror', 'Big Sky', 'Longmire', 'Dark Winds',
  'Narcos', 'Lupin', 'The Watcher', 'Ratched', 'Dahmer'
];

const missing = popular.filter(t => {
  const tl = t.toLowerCase();
  return !titles.has(tl);
});
console.log('Missing from catalog (' + missing.length + ' shows):');
missing.forEach(t => console.log('  -', t));
