const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '../data/western-shows.js');
const shows = require('../data/western-shows.js');

const updated = shows.map(s => {
  if (s.id === 'house-of-the-dragon') {
    console.log('Before:', JSON.stringify(s.streaming));
    const fixed = { ...s, streaming: { max: true } };
    console.log('After:', JSON.stringify(fixed.streaming));
    return fixed;
  }
  return s;
});

const content = 'module.exports = ' + JSON.stringify(updated, null, 2) + ';\n';
fs.writeFileSync(filePath, content);
console.log('Fixed house-of-the-dragon streaming data');
