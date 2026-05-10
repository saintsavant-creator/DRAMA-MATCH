const shows = require('../data/western-shows.js');
const noStreaming = shows.filter(s => {
  const st = s.streaming || {};
  return Object.keys(st).length === 0;
});
console.log('Western shows with NO streaming data:', noStreaming.length);
noStreaming.forEach(s => console.log(' -', s.title, '(' + s.id + ')'));
