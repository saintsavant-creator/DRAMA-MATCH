/**
 * Fix the 3 duplicate entries in batch Q
 */
const fs = require('fs');
const path = require('path');

const replacements = {
  '49-days': {
    id: 'stairway-to-heaven',
    title: 'Stairway to Heaven',
    year: 2003,
    episodes: 20,
    synopsis: "Two childhood sweethearts are separated when their parents remarry and a scheming stepsister grows obsessed with destroying them. After years apart they reunite — but fate keeps piling on tragedy until terminal illness forces the question: is love enough when time is running out? The quintessential early-2000s K-melodrama that launched hallyu globally.",
    genres: ['melodrama', 'romance', 'drama'],
    themes: ['tragedy', 'first-love', 'sacrifice', 'memory', 'illness', 'forgiveness'],
    tropes: ['childhood-sweethearts', 'evil-stepsister', 'terminal-illness', 'separated-lovers', 'fateful-reunion', 'bittersweet-ending'],
    tone: ['tragic', 'emotional', 'romantic', 'melancholic', 'dramatic'],
    setting: ['modern', 'urban', 'domestic', 'hospital'],
    characterTypes: ['devoted-male-lead', 'pure-hearted-female-lead', 'scheming-villain', 'loyal-bystanders'],
    streaming: { viki: true, amazon_prime: true },
    network: 'SBS',
    actors: [
      { name: 'Kwon Sang-woo', role: 'Han Jung-seo', isLead: true },
      { name: 'Choi Ji-woo', role: 'Song Joo', isLead: true },
      { name: 'Kim Tae-hee', role: 'Han Yuri', isLead: false },
      { name: 'Shin Hyun-joon', role: 'Cha In-soo', isLead: false }
    ],
    matchReasoningHints: [
      "Terminal illness love story with the emotional devastation of A Walk to Remember or Love Story",
      "Childhood sweethearts separated by a manipulative stepsister mirrors Jane Eyre's interrupted romance",
      "Evil stepsister villain driving every tragedy channels the dark fairy-tale energy of Cinderella's worst timeline",
      "Kwon Sang-woo's devoted performance rivals Ryan Gosling in The Notebook for pure romantic intensity",
      "The bedrock early-2000s hallyu classic that launched K-drama globally — every fan should eventually watch"
    ]
  },
  'the-greatest-love': {
    id: 'tempted-kdrama',
    title: 'Tempted (The Great Seducer)',
    year: 2018,
    episodes: 32,
    synopsis: "Three rich, bored friends make a cruel bet: seduce a serious, rule-abiding woman and break her heart within a month. But the designated seducer — charming, emotionally closed-off, and never genuinely interested in anyone — finds himself unexpectedly falling. A sharp, glossy Korean update of Dangerous Liaisons set in a world of yachts and penthouse parties.",
    genres: ['romance', 'drama', 'melodrama'],
    themes: ['manipulation', 'redemption', 'class-divide', 'trust', 'betrayal', 'genuine-love'],
    tropes: ['fake-seduction', 'enemies-to-lovers', 'rich-world-aesthetics', 'bet-romance', 'slow-burn', 'emotional-walls'],
    tone: ['dramatic', 'romantic', 'intense', 'dark', 'glossy'],
    setting: ['modern', 'wealthy', 'yacht', 'urban', 'university'],
    characterTypes: ['charming-but-empty-seducer', 'principled-female-lead', 'scheming-friends', 'damaged-backstory'],
    streaming: { viki: true, amazon_prime: true },
    network: 'MBC',
    actors: [
      { name: 'Woo Do-hwan', role: 'Kwon Si-hyun', isLead: true },
      { name: 'Joy (Son Seung-wan)', role: 'Eun Tae-hee', isLead: true },
      { name: 'Moon Ga-young', role: 'Choi Soo-ji', isLead: false },
      { name: 'Kim Min-jae', role: 'Lee Se-joo', isLead: false }
    ],
    matchReasoningHints: [
      "Korean Dangerous Liaisons — same cruel seduction bet, same devastating emotional fallout, glossier setting",
      "Cruel game that becomes real love mirrors Cruel Intentions' Valmont-Annette arc with sharper pacing",
      "Woo Do-hwan's charming hollow seducer channels Gossip Girl's Chuck Bass before his redemption arc",
      "Rich-world aesthetics and moral rot fans of Elite or You will find immediately familiar",
      "Bet-romance where the seducer falls first has the same irresistible slow-burn as 10 Things I Hate About You"
    ]
  },
  'the-good-bad-mother': {
    id: 'ruler-master-of-the-mask',
    title: 'Ruler: Master of the Mask',
    year: 2017,
    episodes: 40,
    synopsis: "A Joseon crown prince, forced to wear a mask to survive a conspiracy that controls the water supply, must outwit a powerful merchant guild monopolising the nation's most essential resource. Stripped of his identity and branded a rebel, he fights back to the throne through sheer willpower and the loyalty of those who see the man behind the mask.",
    genres: ['historical', 'action', 'drama', 'romance'],
    themes: ['identity', 'power', 'justice', 'sacrifice', 'class-struggle', 'corruption'],
    tropes: ['hidden-identity', 'masked-hero', 'political-intrigue', 'royal-disguise', 'slow-burn', 'underdog'],
    tone: ['epic', 'dramatic', 'intense', 'romantic', 'adventurous'],
    setting: ['joseon-era', 'court', 'historical', 'rural'],
    characterTypes: ['masked-prince', 'loyal-female-lead', 'scheming-merchant-guild', 'corrupt-minister'],
    streaming: { viki: true, amazon_prime: true },
    network: 'MBC',
    actors: [
      { name: 'Yoo Seung-ho', role: 'Lee Sun (Crown Prince)', isLead: true },
      { name: 'Kim So-hyun', role: 'Han Ga-eun', isLead: true },
      { name: 'L (Kim Myung-soo)', role: 'Lee Sun (rival prince)', isLead: false },
      { name: 'Yoon So-hee', role: 'Kim Hwa-goon', isLead: false }
    ],
    matchReasoningHints: [
      "Masked prince fighting a water monopoly echoes The Man in the Iron Mask's royal-identity thriller",
      "Corporate corruption controlling essential resources rivals Succession's Roys — except with swords and real stakes",
      "Yoo Seung-ho's quietly intense prince mirrors Andrew Lincoln in early The Walking Dead — calm exterior, explosive conviction",
      "40-episode epic political saga rewards patient fans of The Last Kingdom or Marco Polo the same way",
      "Power stripped from a rightful king fought back through cunning rivals Hamlet's slow-burning revenge arc"
    ]
  }
};

const batchPath = 'data/kdramas-batch-q-mixed.js';
// Clear require cache
delete require.cache[require.resolve('../' + batchPath)];
const existing = require('../' + batchPath);

const updated = existing.map(entry => {
  if (replacements[entry.id]) {
    console.log('Replacing:', entry.id, '->', replacements[entry.id].id);
    return replacements[entry.id];
  }
  return entry;
});

// Verify count
console.log('Entry count:', updated.length);

// Verify no dupes within the batch
const ids = updated.map(e => e.id);
const unique = new Set(ids);
if (unique.size !== ids.length) {
  const dupes = ids.filter((id, i) => ids.indexOf(id) !== i);
  console.error('Dupes within batch!', dupes);
  process.exit(1);
}
console.log('All IDs unique within batch');

// Serialize to JS
function serializeEntry(obj, indent = '  ') {
  const lines = [];
  lines.push(indent + '{');
  for (const [key, val] of Object.entries(obj)) {
    if (typeof val === 'string') {
      lines.push(`${indent}  ${key}: ${JSON.stringify(val)},`);
    } else if (typeof val === 'boolean' || typeof val === 'number') {
      lines.push(`${indent}  ${key}: ${val},`);
    } else if (Array.isArray(val)) {
      if (val.length === 0) {
        lines.push(`${indent}  ${key}: [],`);
      } else if (typeof val[0] === 'string') {
        lines.push(`${indent}  ${key}: [${val.map(v => JSON.stringify(v)).join(', ')}],`);
      } else {
        lines.push(`${indent}  ${key}: [`);
        val.forEach((item, i) => {
          const comma = i < val.length - 1 ? ',' : '';
          lines.push(`${indent}    { ${Object.entries(item).map(([k, v]) => `${k}: ${JSON.stringify(v)}`).join(', ')} }${comma}`);
        });
        lines.push(`${indent}  ],`);
      }
    } else if (typeof val === 'object' && val !== null) {
      const inner = Object.entries(val).map(([k, v]) => `${k}: ${v}`).join(', ');
      lines.push(`${indent}  ${key}: { ${inner} },`);
    }
  }
  lines.push(indent + '}');
  return lines.join('\n');
}

const header = `/**
 * BATCH Q — K-DRAMA MIXED EXPANSION (Classic Era through 2024)
 * 30 acclaimed titles: classics (2003–2012), golden era (2013–2018), modern era (2019–2024)
 * Added: 2026-03-24
 */
module.exports = [
  // ===================================================================
  // BATCH Q — CLASSIC TO MODERN ERA (2003–2024)
  // Spy/Action, Rom-Com, Coming-of-Age, Historical, Sci-Fi, Melodrama
  // ===================================================================`;

const entriesText = updated.map(e => serializeEntry(e)).join(',\n\n');
const fileContent = header + '\n' + entriesText + '\n];\n';

fs.writeFileSync(path.join(__dirname, '..', batchPath), fileContent, 'utf8');
console.log('Written updated batch file.');
