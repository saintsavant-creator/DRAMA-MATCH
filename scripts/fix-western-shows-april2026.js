/**
 * April 2026 fix: properly merge batch-s, deduplicate, and add new shows
 * Run: node scripts/fix-western-shows-april2026.js
 */
const fs = require('fs');
const path = require('path');

const westernPath = path.join(__dirname, '../data/western-shows.js');

// Load current state
delete require.cache[require.resolve('../data/western-shows.js')];
const existing = require('../data/western-shows.js');

// Load batch-s
delete require.cache[require.resolve('../data/western-batch-s.js')];
const batchS = require('../data/western-batch-s.js');

const existingIds = new Set(existing.map(s => s.id));
const existingTitles = new Set(existing.map(s => s.title.toLowerCase()));

// Find net-new entries from batch-s
const toAddFromBatch = batchS.filter(s => !existingIds.has(s.id) && !existingTitles.has(s.title.toLowerCase()));
console.log('Batch-s entries to add:', toAddFromBatch.length);

// New shows not in any batch file
const newShows = [
  {
    id: 'marshals',
    title: 'Y: Marshals',
    year: 2026,
    type: 'show',
    genres: ['crime', 'drama', 'western', 'thriller'],
    themes: ['justice', 'corruption', 'honor', 'family', 'duty', 'community', 'redemption', 'loyalty'],
    tropes: ['lawman-protagonist', 'military-background', 'small-town-justice', 'moral-complexity', 'fish-out-of-water', 'frontier-justice'],
    tone: ['gritty', 'serious', 'dramatic', 'tense', 'atmospheric', 'intense'],
    setting: ['rural-america', 'wyoming', 'frontier', 'modern', 'small-town'],
    characterTypes: ['veteran-turned-lawman', 'local-criminals', 'corrupt-officials', 'community-leader', 'reluctant-hero'],
    streaming: { paramount_plus: true },
    actors: [
      { name: 'Luke Grimes', role: 'Hank Dollarhyde', isLead: true }
    ],
    synopsis: 'A former Navy SEAL turned Wyoming state marshal navigates the complex web of justice, loyalty, and corruption in a rural frontier community. A Yellowstone universe spinoff exploring what it means to uphold the law when the law itself is compromised.',
    matchReasoningHints: [
      "Forest of Secrets fans who love 'a principled investigator navigating a deeply corrupt system where every institution has been compromised and the truth costs everything' — Hank Dollarhyde operates in the same moral landscape as Hwang Si-mok: doing the right thing when the right thing is also the dangerous thing",
      "Watcher fans who love 'a small community with buried secrets where the lawman is the only person who has not chosen a side yet — and choosing a side will define everything' — Wyoming's frontier code has the same pressure as the Korean provincial corruption stories",
      "Beyond Evil fans who love 'law enforcement in a tight-knit rural community where everyone has a history and the investigation forces you to choose who you trust' — the Yellowstone universe's moral ambiguity translates directly to Korean procedural drama's best territory",
      "Signal fans who love 'cold cases in small communities where the official story was always a lie and the victims were never powerful enough to get justice' — Marshals' frontier justice angle has Signal's sense that certain people were always going to be left behind",
      "Bad Prosecutor fans who love 'a protagonist who understands the law well enough to know exactly where its limits are — and operates right at that edge' — Luke Grimes brings the same lawman-on-the-edge-of-the-system energy that makes Korean anti-hero procedurals so compelling"
    ]
  },
  {
    id: 'ransom-canyon',
    title: 'Ransom Canyon',
    year: 2025,
    type: 'show',
    genres: ['romance', 'drama', 'western'],
    themes: ['love', 'second-chances', 'family', 'community', 'healing', 'small-town-life', 'belonging', 'grief', 'new-beginnings'],
    tropes: ['slow-burn-romance', 'second-chances', 'small-town-stranger', 'rancher-cowboy', 'multiple-love-stories', 'forbidden-romance', 'community-ensemble'],
    tone: ['warm', 'romantic', 'dramatic', 'emotional', 'bittersweet', 'hopeful'],
    setting: ['rural-america', 'texas', 'small-town', 'ranch', 'modern'],
    characterTypes: ['rugged-cowboy', 'strong-independent-woman', 'community-members', 'ranching-family', 'newcomer-outsider'],
    streaming: { netflix: true },
    actors: [
      { name: 'Josh Duhamel', role: 'Staten Kirkland', isLead: true },
      { name: 'Minka Kelly', role: 'Charlotte Dickerson', isLead: true }
    ],
    synopsis: "In the small Texas canyon town of Ransom Canyon, multiple generations of ranchers, community members, and newcomers navigate interconnected love stories, family legacies, and second chances against the sweeping Texas landscape. Based on Jodi Thomas's beloved novel series.",
    matchReasoningHints: [
      "Hometown Cha-Cha-Cha fans who love 'a city-raised outsider discovering that the small community they dismissed is the place where their heart was always going to land' — Charlotte's arrival in Ransom Canyon has the exact same structural arc as Hye-jin's arrival in Gongjin: resistance, revelation, belonging",
      "When the Camellia Blooms fans who love 'small-town ensemble romance where everyone's business is everyone else's business, and the community's judgment eventually becomes the community's love' — Ransom Canyon's Texas ranching community operates on the same social logic as Ongsan",
      "Our Blues fans who love 'anthology love stories where multiple generations of a tight-knit community fall in and out of love across the same landscape' — Jodi Thomas's multi-protagonist structure maps perfectly onto Our Blues' Jeju Island ensemble storytelling",
      "Summer Strike fans who love 'someone who built their whole life around one thing arrives in a small town and discovers the slower rhythm was not retreat but arriving somewhere' — Ransom Canyon's healing romance arc has the same quiet emotional recalibration",
      "Reply 1988 fans who love 'a neighborhood so close that the boundaries between families dissolve, and the love that forms there is more durable than anything the city offers' — Ransom Canyon's canyon community has Reply 1988's irreplaceable sense of place as emotional home"
    ]
  }
];

// Filter newShows to only those not already in existing
const toAddNew = newShows.filter(s => !existingIds.has(s.id));
console.log('New custom shows to add:', toAddNew.length);

// Combine all shows to add
const allToAdd = [...toAddFromBatch, ...toAddNew];
console.log('Total new entries:', allToAdd.length);

if (allToAdd.length === 0) {
  console.log('Nothing to add!');
  process.exit(0);
}

// Read the file content
let content = fs.readFileSync(westernPath, 'utf8').trimEnd();

// Remove the closing ];
if (content.endsWith('];')) {
  content = content.slice(0, -2).trimEnd();
} else {
  console.error('Unexpected file ending!');
  process.exit(1);
}

// Build new entries string
const newEntriesStr = allToAdd.map(entry => {
  return JSON.stringify(entry, null, 2)
    .replace(/"([^"]+)":/g, '$1:')  // unquote keys
    .replace(/^{/gm, '  {')
    .replace(/^}/gm, '  }');
}).join(',\n\n');

// Write back
const updated = content + ',\n\n' + newEntriesStr + '\n];\n';
fs.writeFileSync(westernPath, updated, 'utf8');

// Verify
delete require.cache[require.resolve('../data/western-shows.js')];
const result = require('../data/western-shows.js');
const resultIds = result.map(s => s.id);
const uniqueIds = new Set(resultIds);

console.log('\nResult:', result.length, 'entries (was', existing.length, ')');

if (resultIds.length !== uniqueIds.size) {
  console.error('WARNING: Duplicates detected!');
  const seen = new Set();
  resultIds.forEach(id => {
    if (seen.has(id)) console.error('  Duplicate:', id);
    seen.add(id);
  });
} else {
  console.log('No duplicates');
}

// Verify target shows exist
['the-penguin', 'marshals', 'ransom-canyon'].forEach(id => {
  const found = result.find(s => s.id === id);
  console.log(found ? '✓ ' + id + ': ' + found.title : '✗ MISSING: ' + id);
});
