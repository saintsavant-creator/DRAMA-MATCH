const path = require('path');
const dataDir = path.join(__dirname, '..', 'data');
const exclude = ['affiliate-config.js', 'recommendation-engine.js', 'poster-paths.js'];
const fs = require('fs');
const files = fs.readdirSync(dataDir).filter(f => f.endsWith('.js') && !exclude.includes(f));

let allTitles = new Set();
for (const file of files) {
  try {
    const mod = require(path.join(dataDir, file));
    if (Array.isArray(mod)) {
      mod.forEach(item => { if (item.title) allTitles.add(item.title.toLowerCase()); });
    }
  } catch(e) {}
}

const check = t => ({ title: t, missing: !allTitles.has(t.toLowerCase()) });

const candidates = [
  // K-dramas
  "Flower of Evil", "The Devil Judge", "Doom at Your Service",
  "Bulgasal: Immortal Souls", "My Liberation Notes", "Bossam: Steal the Fate",
  "Again My Life", "Forbidden Marriage", "Tomorrow",
  "Seasons of Blossom", "Secret Royal Inspector and Joy",
  "Dr. Brain", "Island", "Sweet Home 2", "D.P. Season 2",
  "The Tale of Nokdu", "My Country: The New Age",
  "Kingdom: Ashin of the North", "The King's Affection",
  "Moonshine", "Love Is for Suckers", "Blind", "Money Flower",
  "Poong the Joseon Psychiatrist", "Rookie Cops",
  // C-dramas
  "Back From the Brink", "Lighter and Princess", "Falling Into Your Smile",
  "Reset", "The Blue Whisper", "The Imperial Coroner",
  "Someday or One Day", "Unrequited Love",
  "A Little Thing Called First Love", "Under the Skin",
  "Twinkling Watermelon", "Candle in the Tomb",
  "A River Runs Through It", "The Investigator",
  "The Story of Hua Zhi", "Goodbye My Princess",
  "Faithful to Buddha Faithful to You",
  // Western
  "Station Eleven", "Dopesick", "Pachinko",
  "Maid", "Normal People", "Firefly Lane",
  "Virgin River", "Poker Face", "Black Bird",
  "Culprits", "Monarch Legacy of Monsters",
  "For All Mankind", "Foundation", "Black Mirror",
  "1899", "Babylon Berlin", "The Essex Serpent",
  "Minx", "True Detective Night Country", "House of the Dragon",
  "The Rings of Power", "Outlander", "Killing Eve",
  "Normal People", "Maid", "Big Mouth",
];

console.log('MISSING from catalog (safe to add):');
candidates.map(check).filter(c => c.missing).forEach(c => console.log('  +', c.title));

console.log('\nALREADY IN catalog:');
candidates.map(check).filter(c => !c.missing).forEach(c => console.log('  =', c.title));
