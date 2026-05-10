/**
 * Merge batch A thrillers into kdramas.js
 * Filters duplicates, adds 3 replacement entries, appends all to kdramas.js
 */
const fs = require('fs');
const path = require('path');

const kdramasPath = path.join(__dirname, '../data/kdramas.js');
const batchPath = path.join(__dirname, '../data/kdramas-batch-a-thrillers.js');

const existing = require('../data/kdramas.js');
const batchEntries = require('../data/kdramas-batch-a-thrillers.js');

const existingIds = new Set(existing.map(d => d.id));
const dupes = batchEntries.filter(d => existingIds.has(d.id)).map(d => d.id);
console.log(`Duplicates to skip: ${dupes.join(', ')}`);

// The 3 replacements for removed duplicates (raw JS strings to match file format)
const replacementEntries = `  {
    id: 'a-model-family',
    title: 'A Model Family',
    year: 2022,
    episodes: 10,
    synopsis: 'Dong-ha is a failing chemistry professor drowning in debt — until he stumbles onto a dead drug courier\\'s stash and makes a desperate decision to take the cash. That single moment pulls his picture-perfect family into the orbit of Korea\\'s most ruthless drug cartel, and a NIS agent who has been hunting the cartel for years. A tense, Ozark-style thriller about how fast a good man dissolves.',
    genres: ['crime', 'thriller', 'drama', 'action'],
    themes: ['desperation', 'family-destruction', 'drug-trade', 'moral-collapse', 'survival', 'corruption'],
    tropes: ['ordinary-man-in-over-his-head', 'family-at-risk', 'escalating-crime', 'undercover', 'moral-decay', 'drug-cartel'],
    tone: ['intense', 'dark', 'suspenseful', 'gritty', 'tense'],
    setting: ['modern', 'suburban', 'drug-trade', 'urban', 'domestic'],
    characterTypes: ['desperate-father', 'ruthless-cartel', 'government-agent', 'innocent-family'],
    streaming: { netflix: true },
    network: 'Netflix',
    actors: [
      { name: 'Jung Woo', role: 'Dong-ha', isLead: true },
      { name: 'Park Hee-soon', role: 'Kwang-cheon', isLead: true }
    ],
    matchReasoningHints: [
      'Ozark\\'s DNA transplanted to suburban Korea — slow moral collapse is identical',
      'Breaking Bad\\'s "how did a good man get here" spiral in 10 tight episodes',
      'Family thriller where every episode raises the cost of the original bad choice',
      'Drug cartel thriller with the grounded realism of Better Call Saul',
      'Perfect entry point for Narcos fans exploring Korean crime drama'
    ]
  },
  {
    id: 'light-shop',
    title: 'Light Shop',
    year: 2024,
    episodes: 12,
    synopsis: 'A mysterious light shop appears overnight in an ordinary neighborhood, and a series of strange deaths begins to surround it. A stubborn detective and a woman with no memory of her past find themselves entangled in a supernatural conspiracy that stretches across decades. Became the most-watched Disney+ Korean original of 2024 with its haunting blend of mystery, horror, and emotional depth.',
    genres: ['thriller', 'mystery', 'horror', 'supernatural', 'drama'],
    themes: ['memory', 'identity', 'fate', 'death', 'obsession', 'supernatural-mystery'],
    tropes: ['supernatural-mystery', 'amnesia', 'detective-thriller', 'conspiracy', 'haunting-atmosphere', 'slow-reveal'],
    tone: ['haunting', 'atmospheric', 'dark', 'mysterious', 'emotional'],
    setting: ['modern', 'urban', 'supernatural', 'neighborhood'],
    characterTypes: ['stubborn-detective', 'mysterious-amnesiac', 'supernatural-entity', 'ordinary-people-drawn-in'],
    streaming: { disney_plus: true, hulu: true },
    network: 'Disney+',
    actors: [
      { name: 'Byun Yo-han', role: 'Joo Woo-taek', isLead: true },
      { name: 'Han Hyo-joo', role: 'Yeom Joo-hee', isLead: true }
    ],
    matchReasoningHints: [
      '#1 most-watched Korean Disney+ original of 2024 — the platform\\'s biggest Korean hit',
      'Dark supernatural mystery with Twin Peaks\\' unsettling neighborhood energy',
      'Haunting atmosphere like The Haunting of Hill House with a detective spine',
      'Han Hyo-joo following Moving with another Disney+ prestige genre drama',
      'Mystery box storytelling that pays off — designed for binge-watching'
    ]
  },
  {
    id: 'crash-kdrama',
    title: 'Crash',
    year: 2024,
    episodes: 12,
    synopsis: 'An elite traffic investigation unit — staffed by cops with too much ambition, too much trauma, and zero social skills — investigates accidents that turn out to be murders. When a new detective joins the team after a personal tragedy, the cases they crack begin pointing toward a single, terrifying criminal operation hiding in plain sight on the roads.',
    genres: ['crime', 'thriller', 'action', 'drama'],
    themes: ['justice', 'trauma', 'teamwork', 'corruption', 'revenge', 'institutional-reform'],
    tropes: ['found-family', 'procedural-thriller', 'detective-team', 'unlikely-partnership', 'hidden-conspiracy', 'accident-as-murder'],
    tone: ['intense', 'witty', 'action-packed', 'dark', 'gripping'],
    setting: ['modern', 'urban', 'traffic-investigation', 'roads'],
    characterTypes: ['misfit-detective-team', 'brilliant-troublemaker', 'traumatized-detective', 'hidden-criminal-network'],
    streaming: { disney_plus: true, hulu: true },
    network: 'ENA',
    actors: [
      { name: 'Uhm Ki-joon', role: 'Oh Hyun-jo', isLead: true },
      { name: 'Lee Min-ki', role: 'Cha Yeon-ho', isLead: true },
      { name: 'Kwak Sun-young', role: 'Bong Min-young', isLead: false }
    ],
    matchReasoningHints: [
      'Traffic crimes as murder mystery — procedural angle that hasn\\'t been done before in K-drama',
      'Found-family detective team energy like Brooklyn Nine-Nine but with genuine thriller stakes',
      'Crimes hiding in accident reports echoes the real-world horror of The Fall or Mindhunter',
      'Sharp ensemble writing with the wit of Suits and the darkness of True Detective',
      'Perfect follow-up for Taxi Driver fans who want procedural thriller with fresh premise'
    ]
  }`;

// Read the batch file as text and extract individual entries
// We'll rebuild the entries list minus duplicates, plus replacements
const batchText = fs.readFileSync(batchPath, 'utf8');

// Extract the array content between module.exports = [ and ];
const arrayMatch = batchText.match(/module\.exports\s*=\s*\[([\s\S]*)\];/);
if (!arrayMatch) {
  console.error('Could not parse batch file');
  process.exit(1);
}

// Split on entry boundaries - each entry starts with "  {\n    id:"
const arrayContent = arrayMatch[1];

// Use a regex to split entries
// Each entry is from { to } at the object level
// We'll parse by tracking braces
function splitEntries(text) {
  const entries = [];
  let depth = 0;
  let start = -1;
  for (let i = 0; i < text.length; i++) {
    if (text[i] === '{') {
      if (depth === 0) start = i;
      depth++;
    } else if (text[i] === '}') {
      depth--;
      if (depth === 0 && start !== -1) {
        entries.push(text.slice(start, i + 1));
        start = -1;
      }
    }
  }
  return entries;
}

const rawEntries = splitEntries(arrayContent);
console.log(`Total entries in batch: ${rawEntries.length}`);

// Filter out duplicates
const filteredEntries = rawEntries.filter(entry => {
  const idMatch = entry.match(/id:\s*['"]([^'"]+)['"]/);
  if (!idMatch) return true;
  const id = idMatch[1];
  if (existingIds.has(id)) {
    console.log(`  Skipping duplicate: ${id}`);
    return false;
  }
  return true;
});

console.log(`After filtering: ${filteredEntries.length} entries`);

// Build the insertion block
const batchComment = `  // ===================================================================
  // BATCH A — THRILLER/CRIME EXPANSION (2022-2026) — 2026-03-23
  // ===================================================================`;

const allNewEntriesText = filteredEntries.join(',\n') + ',\n' + replacementEntries;

// Read kdramas.js and insert before closing ];
let kdramasContent = fs.readFileSync(kdramasPath, 'utf8');
const insertPoint = kdramasContent.lastIndexOf('];');
if (insertPoint === -1) {
  console.error('Could not find closing ]; in kdramas.js');
  process.exit(1);
}

const newContent =
  kdramasContent.slice(0, insertPoint) +
  ',\n\n' + batchComment + '\n' + allNewEntriesText + '\n' +
  kdramasContent.slice(insertPoint);

fs.writeFileSync(kdramasPath, newContent, 'utf8');
console.log('\n✅ Wrote merged content to kdramas.js');

// Verify by re-requiring
delete require.cache[require.resolve('../data/kdramas.js')];
const verify = require('../data/kdramas.js');
console.log(`✅ kdramas.js now has ${verify.length} total entries`);

// Check for duplicates in final file
const finalIds = verify.map(d => d.id);
const uniqueFinalIds = new Set(finalIds);
if (uniqueFinalIds.size !== finalIds.length) {
  const seen = {};
  const dups = [];
  finalIds.forEach(id => {
    if (seen[id]) dups.push(id);
    seen[id] = true;
  });
  console.error('❌ DUPLICATE IDs in final file:', dups);
  process.exit(1);
}
console.log('✅ No duplicate IDs in final catalog');
console.log(`✅ Total K-dramas: ${verify.length}`);
