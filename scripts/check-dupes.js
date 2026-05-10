// Check if proposed batch C titles are already in the main data files
const proposed = [
  // K-dramas
  "Golden Spoon",
  "Mental Coach Jegal",
  "Tell Me That You Love Me",
  "The Killer's Shopping List",
  "Cherry Blossoms After Winter",
  "School 2013",
  "School 2015: Who Are You?",
  "Strongest Deliveryman",
  "The Last Empress",
  "When I Was the Most Beautiful",
  "Oh My Lady",
  "Witch at Court",
  // C-dramas
  "The Double",
  "Back from the Brink",
  "Amidst a Snowstorm of Love",
  "Tribes and Empires: Storm of Prophecy",
  "The King's Woman",
  "Ever Night",
  "Love in Between",
  "Destined",
  // J-dramas
  "First Love",
  "The Naked Director",
  "Quartet",
  "Followers",
  // Anime
  "Kakegurui",
  "Words Bubble Up Like Soda Pop",
  "My Love Story!!",
  // Western
  "Conversations with Friends",
  "Doc Martin",
  "Last Tango in Halifax",
  "Superstore",
  "Gavin & Stacey",
  "Minari",
  "Portrait of a Lady on Fire",
  "My Best Friend's Wedding",
];

const path = require('path');
const mainFiles = [
  './kdramas.js',
  './cdramas.js',
  './jdramas.js',
  './anime.js',
  './western-shows.js',
  './western-movies.js',
  './korean-movies.js',
];

let allTitles = new Set();
for (const f of mainFiles) {
  try {
    const data = require(path.join(__dirname, '..', 'data', f));
    if (Array.isArray(data)) data.forEach(d => allTitles.add(d.title.toLowerCase().trim()));
  } catch(e) { console.error('Error loading', f, e.message); }
}

let dupes = [];
let clean = [];
for (const t of proposed) {
  if (allTitles.has(t.toLowerCase().trim())) {
    dupes.push(t);
  } else {
    clean.push(t);
  }
}

console.log('\n=== DUPLICATES (already in catalog) ===');
dupes.forEach(t => console.log('  ✗', t));
console.log('\n=== CLEAN (safe to add) ===');
clean.forEach(t => console.log('  ✓', t));
console.log('\nTotal proposed:', proposed.length, '| Dupes:', dupes.length, '| Clean:', clean.length);
