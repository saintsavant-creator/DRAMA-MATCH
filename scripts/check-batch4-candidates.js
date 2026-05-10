const path = require('path');
const dataDir = path.join(__dirname, '..', 'data');
const exclude = ['affiliate-config.js', 'recommendation-engine.js', 'poster-paths.js'];
const fs = require('fs');
const files = fs.readdirSync(dataDir).filter(f => f.endsWith('.js') && !exclude.includes(f));

let allIds = new Set();
let allTitles = new Set();

for (const file of files) {
  try {
    const mod = require(path.join(dataDir, file));
    if (Array.isArray(mod)) {
      mod.forEach(item => {
        if (item.id) allIds.add(item.id.toLowerCase());
        if (item.title) allTitles.add(item.title.toLowerCase());
      });
    }
  } catch(e) {}
}

// Final candidates for batch 4
const candidates = {
  kdramas: [
    ["its-okay-to-not-be-okay", "It's Okay to Not Be Okay"],
    ["lovestruck-in-the-city", "Lovestruck in the City"],
    ["jirisan", "Jirisan"],
    ["work-later-drink-now", "Work Later, Drink Now"],
    ["live-on", "Live On"],
    ["midnight-romance-in-hagwon", "The Midnight Romance in Hagwon"],
    ["imitation", "Imitation"],
    ["lovely-runner", "Lovely Runner"],
    ["when-the-phone-rings", "When the Phone Rings"],
    ["captivating-the-king", "Captivating the King"],
    ["my-perfect-stranger", "My Perfect Stranger"],
    ["connection-2024", "Connection"],
    ["hierarchy", "Hierarchy"],
    ["you-are-my-glory", "You Are My Glory"],  // C-drama actually
  ],
  cdramas: [
    ["eternal-love", "Eternal Love"],
    ["ten-miles-of-peach-blossoms", "Ten Miles of Peach Blossoms"],
    ["nirvana-in-fire-2", "Nirvana in Fire 2"],
    ["legend-of-fuyao", "The Legend of Fuyao"],
    ["when-a-snail-falls-in-love", "When a Snail Falls in Love"],
    ["new-life-begins", "New Life Begins"],
    ["joy-of-life-2", "Joy of Life 2"],
    ["the-blooms-at-ruyi-pavilion", "The Blooms at Ruyi Pavilion"],
    ["you-are-my-glory", "You Are My Glory"],
    ["go-ahead", "Go Ahead"],
    ["you-are-my-city-and-fortress", "You Are My City and Fortress"],
    ["hikaru-no-go-cdrama", "Hikaru no Go"],
  ],
  western: [
    ["the-white-lotus", "The White Lotus"],
    ["ghosts-uk", "Ghosts"],
    ["top-boy", "Top Boy"],
    ["avatar-the-last-airbender-2024", "Avatar: The Last Airbender"],
    ["the-umbrella-academy", "The Umbrella Academy"],
    ["sweet-tooth", "Sweet Tooth"],
    ["jury-duty", "Jury Duty"],
    ["wolf-like-me", "Wolf Like Me"],
    ["presumed-innocent", "Presumed Innocent"],
    ["interview-with-the-vampire", "Interview with the Vampire"],
    ["the-penguin", "The Penguin"],
    ["english-teacher", "English Teacher"],
  ]
};

console.log('=== BATCH 4 CANDIDATE CHECK ===\n');
let allClear = [];
let alreadyIn = [];

for (const [cat, items] of Object.entries(candidates)) {
  console.log(`\n${cat.toUpperCase()}:`);
  for (const [id, title] of items) {
    const titleLower = title.toLowerCase();
    const idLower = id.toLowerCase();
    const foundByTitle = allTitles.has(titleLower);
    const foundById = allIds.has(idLower);
    if (foundByTitle || foundById) {
      console.log(`  SKIP (exists): ${title} [id=${id}]`);
      alreadyIn.push([id, title]);
    } else {
      console.log(`  OK (new): ${title} [id=${id}]`);
      allClear.push([id, title, cat]);
    }
  }
}

console.log(`\n=== SUMMARY ===`);
console.log(`Already in catalog: ${alreadyIn.length}`);
console.log(`Safe to add: ${allClear.length}`);
