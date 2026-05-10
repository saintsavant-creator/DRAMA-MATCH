// Verify specific shows have correct streaming data
const kdramas = require('../data/kdramas.js');
const cdramas = require('../data/cdramas.js');
const western = require('../data/western-shows.js');
const movies = require('../data/western-movies.js');

const checkIds = [
  // kdramas
  { file: kdramas, id: 'anna-kdrama', expected: 'viki' },
  { file: kdramas, id: 'lies-hidden-in-my-garden', expected: 'netflix' },
  { file: kdramas, id: 'night-has-come', expected: 'disney_plus' },
  // cdramas
  { file: cdramas, id: 'project-17-never-stand-still', expected: 'iqiyi' },
  { file: cdramas, id: 'run-for-young', expected: 'iqiyi' },
  { file: cdramas, id: 'burning-stars', expected: 'iqiyi' },
  // Key western shows
  { file: western, id: 'breaking-bad', expected: 'netflix' },
  { file: western, id: 'stranger-things', expected: 'netflix' },
  { file: western, id: 'money-heist', expected: 'netflix' },
  { file: western, id: 'house-of-the-dragon', expected: 'max' },
  { file: western, id: 'succession', expected: 'max' },
  { file: western, id: 'the-sopranos', expected: 'max' },
  { file: western, id: 'the-last-of-us', expected: 'max' },
  { file: western, id: 'euphoria', expected: 'max' },
  { file: western, id: 'the-mandalorian', expected: 'disney_plus' },
  { file: western, id: 'fleabag', expected: 'amazon_prime' },
  { file: western, id: 'ted-lasso', expected: 'apple_tv' },
  { file: western, id: 'severance', expected: 'apple_tv' },
  { file: western, id: 'yellowstone', expected: 'paramount' },
  { file: western, id: 'trigger-point', expected: 'peacock' },
  // Movies
  { file: movies, id: 'barbie', expected: 'max' },
  { file: movies, id: 'dune-part-two', expected: 'max' },
  { file: movies, id: 'the-batman-2022', expected: 'max' },
  { file: movies, id: 'nope', expected: 'peacock' },
  { file: movies, id: 'barbarian', expected: 'hulu' },
];

let allPassed = true;
for (const check of checkIds) {
  const show = check.file.find(s => s.id === check.id);
  if (!show) {
    console.log('❌ NOT FOUND:', check.id);
    allPassed = false;
  } else if (!show.streaming || !show.streaming[check.expected]) {
    console.log('❌ MISSING ' + check.expected + ':', check.id, '| streaming:', JSON.stringify(show.streaming || {}));
    allPassed = false;
  } else {
    console.log('✅', check.id, '→', check.expected);
  }
}

if (allPassed) {
  console.log('\n✅ All checks passed!');
} else {
  console.log('\n❌ Some checks failed — investigate above');
}
