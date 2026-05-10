const main = require('../data/western-shows.js');
const ids = ['the-day-of-the-jackal-2024', 'the-way-home-s1', 'the-rings-of-power', 'from-showtime', 'the-pitt-max'];
const mainMap = {};
for (const s of main) mainMap[s.id] = s;

for (const id of ids) {
  const s = mainMap[id];
  if (s) {
    console.log('FOUND IN WESTERN-SHOWS:', id, '| streaming:', JSON.stringify(s.streaming || {}));
  } else {
    console.log('NOT IN WESTERN-SHOWS:', id);
  }
}
