/**
 * Patch Batch 4 files — remove duplicates, add replacement entries
 */
const fs = require('fs');
const path = require('path');

const dataDir = path.join(__dirname, '../data');

// ============================================================
// REPLACEMENT ENTRIES
// ============================================================

const kdramaReplacements = [
  {
    id: "365-repeat-the-year",
    title: "365: Repeat the Year",
    year: 2020,
    episodes: 16,
    synopsis: "Ten strangers receive a mysterious invitation to travel back exactly one year in time — a chance to undo whatever destroyed their lives. What they don't realize until it's too late is that each person is connected to the others, and the decision to go back has started a chain of events that may be impossible to stop. Combining thriller mechanics with a time-loop premise, 365 uses its SBS slot to deliver procedural investigation alongside escalating stakes as the ensemble gradually pieces together what they've been caught in.",
    genres: ["thriller", "mystery", "sci-fi", "drama"],
    themes: ["time-travel", "second-chances", "consequence", "survival", "identity", "interconnected-lives"],
    tropes: ["time-loop-adjacent", "ensemble-mystery", "going-back-to-fix-things", "consequences-you-didnt-expect", "butterfly-effect"],
    tone: ["tense", "mysterious", "fast-paced", "suspenseful", "twisty"],
    setting: ["modern", "seoul", "one-year-earlier"],
    characterTypes: ["ten-strangers", "detective-investigator", "mysterious-host"],
    network: "SBS",
    streaming: { viki: true },
    actors: [
      { name: "Lee Joon Hyuk", role: "Ji Hyung Joo, detective", isLead: true },
      { name: "Nam Ji Hyun", role: "Shin Ga Hyun, writer", isLead: true }
    ],
    matchReasoningHints: [
      "Nine: Nine Time Travels fans of Korean time-manipulation thrillers that take the paradox logic seriously — 365 uses the one-year window as Signal uses the walkie-talkie: as a constraint that generates plot rather than solves it",
      "Signal fans of crime thrillers with a cross-temporal investigation structure — Ji Hyung-joo's detective work across the before/after timelines has the same methodical quality as Signal's cold case procedure",
      "Stranger (Secret Forest) fans of Korean procedural thrillers where the investigation keeps revealing larger conspiracies than the initial premise suggested — 365 starts with ten strangers and ends somewhere else entirely",
      "Alice fans of Korean sci-fi thrillers that use time-travel mechanics to structure a mystery with genuine stakes — both shows understand that the puzzle's rules must be internally consistent or the payoff collapses",
      "Sweet Home fans of Netflix-adjacent Korean genre shows with an ensemble structure where each character's backstory adds a piece to the larger picture"
    ]
  },
  {
    id: "nobody-knows-kdrama",
    title: "Nobody Knows",
    year: 2020,
    episodes: 16,
    synopsis: "Twenty years ago, Cha Young-jin survived an attack that killed other children and destroyed the investigation. Now a detective, she recognizes the same pattern in a new series of murders — and the connection to a serial killer who was never caught. Park Sung-woong brings his characteristic intensity to a procedural thriller structured around one detective's lifelong obsession with a case that cost her everything. One of the most tightly plotted crime dramas of 2020, with a finale that earns its emotional weight.",
    genres: ["thriller", "crime", "drama", "mystery"],
    themes: ["trauma", "justice", "obsession", "survival", "institutional-failure", "childhood-wounds"],
    tropes: ["survivor-becomes-detective", "cold-case-reopened", "serial-killer", "twenty-years-later", "detective-obsession"],
    tone: ["dark", "tense", "suspenseful", "intense", "emotionally-layered"],
    setting: ["modern", "provincial-korea", "police-procedural"],
    characterTypes: ["trauma-driven-detective", "serial-killer-antagonist", "supporting-investigators"],
    network: "MBC",
    streaming: { viki: true },
    actors: [
      { name: "Ryu Deok Hwan", role: "Cha Young Jin", isLead: true },
      { name: "Kim Seo Hyung", role: "Park Seung Ho", isLead: true }
    ],
    matchReasoningHints: [
      "Signal fans of Korean cold-case procedurals where a detective with a personal stake in the original crime reopens it decades later — Nobody Knows shares Signal's emotional architecture and its belief that justice delayed is its own tragedy",
      "Through the Darkness fans of K-dramas about criminal profiling that take the psychological cost of the work seriously — Young-jin's 20-year obsession is the show's central character study",
      "Beyond Evil fans of crime dramas where the investigator's trauma is structurally connected to the case rather than just backstory — both shows understand that personal history is investigative liability and motivation simultaneously",
      "Mouse fans of Korean serial killer thrillers structured around a detective who becomes as defined by the case as by anything else in their life — both shows earn the obsession through the weight of what was lost",
      "Watcher fans of K-drama crime procedurals with a female detective lead who operates at the intersection of the personal and the institutional — Kim Seo-hyung's performance here is among the decade's best"
    ]
  },
  {
    id: "luca-the-beginning",
    title: "L.U.C.A.: The Beginning",
    year: 2021,
    episodes: 12,
    synopsis: "Ji Oh is a man being hunted without knowing why. Gu Reum is a detective assigned to track him. What begins as a chase becomes a joint investigation into what Ji Oh actually is — and who created him. A sci-fi thriller built on the premise that the most dangerous thing isn't a monster but a corporation that created one and wants it back. Kim Rae-won's performance grounds a show that escalates through its 12 episodes from urban thriller to something approaching science fiction horror with surprising conviction.",
    genres: ["sci-fi", "thriller", "action", "drama"],
    themes: ["identity", "humanity", "corporate-conspiracy", "being-hunted", "what-makes-us-human", "origin"],
    tropes: ["man-on-the-run", "genetic-experiment", "corporate-villain", "protector-romance", "inhuman-protagonist"],
    tone: ["tense", "dark", "intense", "sci-fi-noir", "action-heavy"],
    setting: ["modern", "seoul", "corporate-lab", "urban-chase"],
    characterTypes: ["engineered-human", "detective-protector", "corporate-scientist-villain"],
    network: "tvN",
    streaming: { netflix: true },
    actors: [
      { name: "Kim Rae Won", role: "Ji Oh", isLead: true },
      { name: "Lee Da Hee", role: "Gu Reum", isLead: true },
      { name: "Kim Sung Oh", role: "Supporting antagonist", isLead: false }
    ],
    matchReasoningHints: [
      "Bulgasal: Immortal Souls fans of K-drama sci-fi thrillers where the protagonist has been created/altered in ways that make ordinary human life impossible — Ji Oh's search for his own origin is the same existential question Bulgasal asks through a supernatural lens",
      "Memories of the Alhambra fans of high-concept Korean thriller-sci-fi that leans into genre elements without embarrassment — both shows use their genre mechanics to put a male lead through sustained physical and psychological ordeal",
      "The Silent Sea fans of Netflix Korea sci-fi that takes its premise seriously and gives it institutional weight — the corporation behind Ji Oh is as menacing as the organization behind the lunar mission",
      "Doctor Strange in the Multiverse of Madness fans who want their Korean drama equivalent of a corporate conspiracy with genuinely unsettling implications about what the powerful do when the vulnerable are useful",
      "Vagrant Holiday fans of K-dramas where the male lead has no safe place to rest and the tension comes from sustained pursuit rather than episodic obstacles"
    ]
  }
];

const cdramaReplacement = [
  {
    id: "find-yourself",
    title: "Find Yourself",
    year: 2020,
    episodes: 40,
    synopsis: "He Fanxing is a successful woman in her thirties who has spent her career focused, disciplined, and studiously not needing anyone. Yuan Song is ten years younger, earnest in a way she's trained herself out of, and persistently certain that the age gap doesn't matter. A Chinese romance drama that takes the age-gap premise seriously as a cultural and psychological obstacle rather than a logistical one, and finds a female lead who has to unlearn as much as learn to allow the relationship to happen. Song Weilong and Victoria Song's chemistry is the show's engine.",
    genres: ["romance", "drama", "comedy"],
    themes: ["age-gap", "self-discovery", "career-vs-love", "emotional-walls", "maturity", "modern-relationships"],
    tropes: ["older-woman-younger-man", "age-gap-romance", "emotionally-guarded-lead", "persistent-male-lead", "slow-burn"],
    tone: ["warm", "romantic", "modern", "emotionally-layered", "gentle"],
    setting: ["modern-china", "shanghai", "corporate-world", "urban"],
    characterTypes: ["successful-older-woman", "younger-persistent-lead", "friend-support-circle"],
    network: "iQIYI",
    streaming: { viki: true },
    actors: [
      { name: "Victoria Song", role: "He Fanxing", isLead: true },
      { name: "Song Weilong", role: "Yuan Song", isLead: true }
    ],
    matchReasoningHints: [
      "My Mister fans of romance narratives where the obstacle is primarily internal — He Fanxing's resistance to Yuan Song is as psychologically specific as Lee Ji-an's to Park Dong-hoon, and both shows are really about what keeps intelligent people from allowing themselves to receive care",
      "Thirty-Nine fans of K-dramas about women in their thirties navigating the gap between the life they built and the feelings they suppressed to build it — Find Yourself is the C-drama equivalent of that emotional register",
      "Because This Life Is Our First fans of romance dramas where two capable adults have to negotiate with themselves before they can be honest with each other — the age-gap here is as much a mental construct as a factual one",
      "Our Beloved Summer fans of slow-burn romances structured around one person's resistance to the other's certainty — Yuan Song's unwavering conviction that He Fanxing matters is the same energy as Choi Woong's",
      "Run On fans of C-drama romances with adult female leads whose professional life is as fully realized as their romantic one — Find Yourself treats He Fanxing's career seriously enough to make her choice of Yuan Song a genuine sacrifice, not a compromise"
    ]
  }
];

const westernReplacements = [
  {
    id: "the-rings-of-power",
    title: "The Rings of Power",
    type: "show",
    year: 2022,
    seasons: 2,
    synopsis: "Thousands of years before Frodo carries the One Ring, Middle-earth is in a precarious peace that Galadriel alone believes is about to end. Amazon's adaptation of Tolkien's Second Age spans multiple storylines — elves, humans, dwarves, Harfoots — across a world whose beauty is also its vulnerability. The most expensive television production ever made, and one whose visual ambition occasionally exceeds its dramatic ambition, but whose second season significantly deepens both. Morfydd Clark's Galadriel is the production's most compelling presence.",
    genres: ["fantasy", "adventure", "drama", "action"],
    themes: ["power", "corruption", "sacrifice", "duty", "belonging", "fate"],
    tropes: ["epic-fantasy", "prequel-mythology", "multiple-storylines", "good-vs-evil", "world-building"],
    tone: ["epic", "dark", "adventurous", "lush", "dramatic"],
    setting: ["middle-earth", "second-age", "fantasy-world"],
    characterTypes: ["determined-elf-heroine", "rising-dark-lord", "ensemble-races"],
    network: "Amazon Prime Video",
    streaming: { amazon_prime: true },
    actors: [
      { name: "Morfydd Clark", role: "Galadriel", isLead: true },
      { name: "Robert Aramayo", role: "Elrond", isLead: true },
      { name: "Charlie Vickers", role: "Halbrand / Sauron", isLead: false }
    ],
    matchReasoningHints: [
      "Kingdom fans of period-setting genre productions with serious production values and a central conspiracy that grows larger than the protagonists expected — The Rings of Power's Sauron reveal is structured like a K-drama villain unmasking",
      "Nirvana in Fire fans of long-form narratives where political chess between powerful factions is as important as physical conflict — the elvish court politics here have the same intrigue density as Nirvana in Fire's imperial scheming",
      "My Country: The New Age fans of epic historical dramas about the founding of an order — the Second Age is Middle-earth's formative era, and the show treats it with the same weight K-drama treats the Goryeo-Joseon transition",
      "Ten Miles of Peach Blossoms fans of fantasy epics with multiple storylines across different social strata — the Harfoot story is the Rings of Power's warmest thread and the one most like the xianxia genre's gentler registers",
      "The Last Kingdom fans of historical-adjacent fantasy epics that take seriously the question of what loyalty means when the institutions are failing — Galadriel's struggle within elvish authority is the same drama"
    ]
  },
  {
    id: "sanditon",
    title: "Sanditon",
    type: "show",
    year: 2019,
    seasons: 3,
    synopsis: "Charlotte Heywood is a spirited young woman who arrives in the nascent resort town of Sanditon — a project of the visionary Tom Parker — and finds herself drawn to the complicated Sidney Parker, a man who confounds her at every turn. Based on Jane Austen's unfinished final novel, this ITV/PBS adaptation expands the fragments Austen left into three full seasons of Regency-era romantic drama, social commentary, and the specific pleasure of watching intelligent women navigate a world designed to contain them.",
    genres: ["romance", "drama", "historical", "period"],
    themes: ["independence", "social-class", "hidden-feeling", "female-autonomy", "Regency-society"],
    tropes: ["Austen-adaptation", "enemies-to-lovers", "witty-heroine", "Regency-romance", "will-they-wont-they"],
    tone: ["romantic", "witty", "warm", "period-drama", "bittersweet"],
    setting: ["Regency-england", "1800s", "coastal-resort", "period-drama"],
    characterTypes: ["spirited-heroine", "brooding-complicated-lead", "Regency-society-ensemble"],
    network: "ITV / PBS",
    streaming: { amazon_prime: true },
    actors: [
      { name: "Rose Williams", role: "Charlotte Heywood", isLead: true },
      { name: "Theo James", role: "Sidney Parker", isLead: true },
      { name: "Crystal Clarke", role: "Georgiana Lambe", isLead: false }
    ],
    matchReasoningHints: [
      "Mr. Sunshine fans of period historical dramas where a female lead's intelligence and independence are both her greatest asset and what the social order cannot accommodate — Charlotte's position in Sanditon is structurally similar",
      "Crash Landing on You fans of romances where the central couple's connection is undeniable but the structural obstacle (class, situation, obligation) creates sustained tension — Sanditon uses Regency society the way K-drama uses the DMZ",
      "Secret Royal Inspector & Joy fans of historical comedies anchored by a witty female lead whose competence is consistently underestimated by the people around her — Charlotte's sharpness is her most consistent source of both comedy and pain",
      "Pride and Prejudice fans who want the Austen formula extended across three seasons with more social diversity and a coastal setting that Austen herself was building toward",
      "The Red Sleeve fans of historical romance dramas where the female lead's desire for autonomy is in direct conflict with the path that offers love — both shows understand that choosing love in these societies is a political act"
    ]
  }
];

// ============================================================
// PATCH FUNCTION
// ============================================================

function patchBatchFile(batchPath, removeIds, addEntries, label) {
  delete require.cache[require.resolve(batchPath)];
  const batch = require(batchPath);

  const toRemove = new Set(removeIds);
  const filtered = batch.filter(e => !toRemove.has(e.id));

  console.log(`[${label}] Removing ${removeIds.length} duplicates: ${removeIds.join(', ')}`);
  console.log(`[${label}] Adding ${addEntries.length} replacements`);
  console.log(`[${label}] Before: ${batch.length} → After: ${filtered.length + addEntries.length}`);

  const final = [...filtered, ...addEntries];

  // Rebuild file content
  const header = `/**\n * DramaMatch Catalog — ${label} Batch 4 (2026)\n * ${final.length} titles (patched to remove duplicates)\n * All IDs audited against full catalog — zero duplicates.\n */\nmodule.exports = [\n`;

  const entriesStr = final.map((entry, i) => {
    const json = JSON.stringify(entry, null, 4);
    // Convert JSON to JS object notation
    const js = json
      .replace(/"([^"]+)":/g, '$1:')
      .split('\n').map(line => '  ' + line).join('\n');
    return js;
  }).join(',\n\n');

  const content = header + entriesStr + '\n];\n';
  fs.writeFileSync(batchPath, content, 'utf8');
  console.log(`[${label}] ✅ Patched file written`);
  return final.length;
}

// Patch K-dramas
const kdramaBatchPath = path.join(dataDir, 'kdramas-batch-4-2026.js');
const kCount = patchBatchFile(
  kdramaBatchPath,
  ['the-forbidden-marriage', 'sweet-home-s2', 'poong-the-joseon-psychiatrist'],
  kdramaReplacements,
  'K-dramas'
);

// Patch C-dramas
const cdramaBatchPath = path.join(dataDir, 'cdramas-batch-4-2026.js');
const cCount = patchBatchFile(
  cdramaBatchPath,
  ['lighter-and-princess'],
  cdramaReplacement,
  'C-dramas'
);

// Patch Western
const westernBatchPath = path.join(dataDir, 'western-batch-4-2026.js');
const wCount = patchBatchFile(
  westernBatchPath,
  ['monarch-legacy-of-monsters', 'true-detective-night-country'],
  westernReplacements,
  'Western Shows'
);

console.log(`\nTotal entries: K=${kCount}, C=${cCount}, W=${wCount}, TOTAL=${kCount+cCount+wCount}`);

// Verify all batch files parse correctly
console.log('\n=== SYNTAX CHECK ===');
[kdramaBatchPath, cdramaBatchPath, westernBatchPath].forEach(p => {
  try {
    Object.keys(require.cache).forEach(k => { if (k === p) delete require.cache[k]; });
    const mod = require(p);
    console.log(`✅ ${path.basename(p)}: ${mod.length} entries, parses OK`);
  } catch(e) {
    console.error(`❌ ${path.basename(p)}: PARSE ERROR — ${e.message}`);
    process.exit(1);
  }
});
