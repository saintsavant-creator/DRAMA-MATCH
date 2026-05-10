const ws = require('../data/western-shows.js');
const titles = ws.map(s => s.title.toLowerCase());

const toCheck = [
  'Agatha All Along', 'Echo', 'Daredevil Born Again', 'Secret Invasion',
  'The Bear', 'Beef', 'The Dropout', 'Dopesick', 'Maid',
  'The Terror', 'Midnight Mass', 'The Haunting of Bly Manor',
  'Ghosts UK', 'Ghosts US', 'Derry Girls', 'Heartstopper',
  'I May Destroy You', 'Fleabag', 'Killing Eve',
  'The White Lotus', 'Ted Lasso',
  'Severance', 'Abbott Elementary', 'Reservation Dogs',
  'Industry', 'Dark Winds', 'Yellowjackets',
  'Dead to Me', 'Russian Doll', 'One Day',
  'Station Eleven', 'Dark Matter',
  'The Morning Show', 'Presumed Innocent',
  'Monarch Legacy of Monsters', 'For All Mankind',
  'Silo', 'Foundation', 'Altered Carbon', 'The Expanse',
  'Firefly Lane', 'Sweet Magnolias', 'Virgin River',
  'Outer Banks', 'Ginny and Georgia', 'Emily in Paris',
  'Sex Education', 'Never Have I Ever', 'Everything Now',
  'Atypical', 'One Tree Hill', 'Pretty Little Liars',
  'The 100', 'Reign', 'Shadow and Bone', 'Locke and Key',
  'The Umbrella Academy', 'Wednesday', 'Cobra Kai',
  'All American', 'Manifest',
  'Tulsa King', 'Landman', 'Reacher',
  'Criminal Minds', 'White Collar', 'Monk', 'Psych', 'Burn Notice', 'Alias',
  'Person of Interest', 'Fringe', 'Lost', 'X-Files',
  '24', 'Prison Break', 'Supernatural', 'Dexter',
  'Peaky Blinders', 'Downton Abbey', 'The Crown',
  'Poldark', 'Call the Midwife', 'Grantchester',
  'Broadchurch', 'Happy Valley', 'Line of Duty', 'Sherlock',
  'Merlin', 'Endeavour', 'Vera', 'Shetland',
  'Father Brown', 'Death in Paradise', 'Unforgotten',
  'Luther', 'Bodyguard', 'The Fall', 'Trigger Point',
  'Vigil', 'The Capture', 'The Night Manager',
  'Slow Horses', 'Band of Brothers', 'Rome',
  'Deadwood', 'Spartacus', 'Black Sails', 'Vikings',
  'The Last Kingdom', 'Outlander', 'North and South',
  // additional popular sitcoms
  'Friends', 'Seinfeld', 'The Big Bang Theory', 'How I Met Your Mother',
  'Modern Family', 'New Girl', 'Brooklyn Nine-Nine', 'Parks and Recreation',
  'The Office', 'Community', 'Arrested Development',
  // Dramas
  'Game of Thrones', 'Breaking Bad', 'The Wire', 'The Sopranos', 'Mad Men',
  'True Detective', 'Fargo', 'Mindhunter', 'Ozark', 'Succession',
  'Barry', 'Euphoria', 'Sharp Objects', 'Big Little Lies', 'Mare of Easttown',
  'Normal People', 'Heartstopper', 'Fleabag',
  // Sci-fi
  'Stranger Things', 'Westworld', 'Black Mirror', 'The Expanse', 'Foundation',
  'Battlestar Galactica', 'Dark', 'Arcane',
  // Spanish/International
  'Money Heist', 'Elite', 'Lupin', 'Babylon Berlin', 'Narcos',
  // K-adjacent
  'Pachinko',
  // Action
  'Reacher', 'Jack Ryan', 'The Boys', 'Andor', 'The Mandalorian'
];

const missing = toCheck.filter(function(t) {
  var tl = t.toLowerCase();
  return titles.indexOf(tl) === -1;
});
console.log('Confirmed missing (' + missing.length + '):');
missing.forEach(function(t) { console.log('  -', t); });
