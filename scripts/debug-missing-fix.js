// Debug why some shows weren't fixed
const shows = require('../data/western-shows.js');
const movies = require('../data/western-movies.js');

// Shows still missing streaming (from second audit run)
const stillMissing = [
  'friends', 'succession', 'white-lotus', 'true-detective', 'mare-of-easttown',
  'the-big-bang-theory', 'big-little-lies', 'euphoria', 'westworld',
  'sex-and-the-city', 'the-last-of-us', 'the-wire', 'the-sopranos',
  'the-gilded-age', 'house-of-the-dragon', 'the-flight-attendant',
  'trigger-point', 'poker-face', 'day-of-the-jackal', 'industry',
  'the-sympathizer', 'i-may-destroy-you', 'lovecraft-country', 'tokyo-vice',
  'minx', 'gaslit', 'true-detective-night-country', 'cedar-cove',
  'law-and-order-criminal-intent', 'the-traitors-us', 'the-gilded-age-s2',
  'the-penguin', 'industry-s3', 'those-about-to-die', 'the-regime',
  'the-traitors-uk', 'midsomer-murders', 'night-court-reboot', 'hacks',
  'righteous-gemstones', 'the-franchise-max',
  // Movies
  'barbie', 'dune-part-two', 'the-batman-2022', 'nope', 'm3gan'
];

const allShows = [...shows, ...movies];
const showMap = {};
for (const s of allShows) showMap[s.id] = s;

for (const id of stillMissing) {
  const s = showMap[id];
  if (!s) {
    console.log('ID NOT FOUND IN DATA FILES:', id);
  } else {
    console.log('FOUND but streaming empty:', id, '| current streaming:', JSON.stringify(s.streaming));
  }
}
