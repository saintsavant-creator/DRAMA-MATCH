/**
 * Fix All Streaming Gaps
 *
 * 1. Normalizes inconsistent streaming keys across all data files
 *    (amazon → amazon_prime, disney/disney+ → disney_plus, hbo/hbo_max → max, paramount_plus → paramount)
 *
 * 2. Adds streaming platform data to shows/movies that were missing it entirely
 *
 * Run: node scripts/fix-all-streaming-gaps.js
 */

const fs = require('fs');
const path = require('path');

// ============================================================
// KEY NORMALIZATION MAP
// Old key → canonical key
// ============================================================
const KEY_MAP = {
  amazon: 'amazon_prime',
  'disney': 'disney_plus',
  'disney+': 'disney_plus',
  hbo: 'max',
  hbo_max: 'max',
  paramount_plus: 'paramount',
};

// ============================================================
// MISSING STREAMING DATA — Western Shows
// Shows from western-shows.js that had NO streaming platforms
// Sources: Netflix, Max, HBO, Peacock, Amazon Prime, Hulu, Disney+,
//          Apple TV+, Paramount+
// ============================================================
const WESTERN_SHOW_STREAMING = {
  'psych':                        { peacock: true, amazon_prime: true },
  'breaking-bad':                 { netflix: true, amazon_prime: true },
  'game-of-thrones':              { max: true, amazon_prime: true },
  'stranger-things':              { netflix: true },
  'the-office':                   { peacock: true, amazon_prime: true },
  'friends':                      { max: true },
  'greys-anatomy':                { netflix: true, hulu: true, disney_plus: true },
  'criminal-minds':               { netflix: true, paramount: true },
  'sherlock':                     { netflix: true, amazon_prime: true },
  'money-heist':                  { netflix: true },
  'the-walking-dead':             { amazon_prime: true },
  'bridgerton':                   { netflix: true },
  'you':                          { netflix: true },
  'suits':                        { netflix: true, amazon_prime: true },
  'brooklyn-nine-nine':           { netflix: true, peacock: true, amazon_prime: true },
  'downton-abbey':                { amazon_prime: true, netflix: true },
  'the-witcher':                  { netflix: true },
  'dark':                         { netflix: true },
  'black-mirror':                 { netflix: true },
  'ted-lasso':                    { apple_tv: true },
  'succession':                   { max: true },
  'ozark':                        { netflix: true },
  'killing-eve':                  { amazon_prime: true, hulu: true },
  'gilmore-girls':                { netflix: true },
  'the-crown':                    { netflix: true },
  'dexter':                       { paramount: true, netflix: true, hulu: true },
  'house':                        { amazon_prime: true, hulu: true },
  'the-good-place':               { netflix: true, peacock: true },
  'lost':                         { hulu: true, disney_plus: true },
  'the-mandalorian':              { disney_plus: true },
  'white-lotus':                  { max: true },
  'veronica-mars':                { hulu: true, amazon_prime: true },
  'fleabag':                      { amazon_prime: true },
  'homeland':                     { hulu: true, paramount: true },
  'the-boys':                     { amazon_prime: true },
  'outlander':                    { hulu: true, amazon_prime: true },
  'better-call-saul':             { netflix: true, amazon_prime: true },
  'peaky-blinders':               { netflix: true },
  'true-detective':               { max: true },
  'mindhunter':                   { netflix: true },
  'fargo':                        { hulu: true },
  'narcos':                       { netflix: true },
  'mare-of-easttown':             { max: true },
  'broadchurch':                  { netflix: true, amazon_prime: true },
  'the-blacklist':                { netflix: true, amazon_prime: true },
  'prison-break':                 { hulu: true, disney_plus: true },
  'hannibal':                     { netflix: true, amazon_prime: true },
  'the-mentalist':                { netflix: true, amazon_prime: true },
  'schitts-creek':                { netflix: true, amazon_prime: true },
  'parks-and-recreation':         { peacock: true, netflix: true },
  'new-girl':                     { netflix: true, hulu: true, disney_plus: true },
  'how-i-met-your-mother':        { netflix: true, disney_plus: true },
  'modern-family':                { hulu: true, disney_plus: true },
  'only-murders-in-the-building': { hulu: true, disney_plus: true },
  'abbott-elementary':            { hulu: true, disney_plus: true },
  'the-big-bang-theory':          { max: true },
  'seinfeld':                     { netflix: true },
  'the-marvelous-mrs-maisel':     { amazon_prime: true },
  'this-is-us':                   { hulu: true, disney_plus: true },
  'the-handmaids-tale':           { hulu: true },
  'yellowstone':                  { paramount: true },
  'big-little-lies':              { max: true },
  'euphoria':                     { max: true },
  'normal-people':                { hulu: true, amazon_prime: true },
  'scandal':                      { netflix: true, hulu: true, disney_plus: true },
  'how-to-get-away-with-murder':  { netflix: true, hulu: true, disney_plus: true },
  'parenthood':                   { netflix: true, hulu: true },
  'the-morning-show':             { apple_tv: true },
  'westworld':                    { max: true },
  'severance':                    { apple_tv: true },
  'the-umbrella-academy':         { netflix: true },
  'wandavision':                  { disney_plus: true },
  'loki':                         { disney_plus: true },
  'arcane':                       { netflix: true },
  'the-haunting-of-hill-house':   { netflix: true },
  'shadow-and-bone':              { netflix: true },
  'emily-in-paris':               { netflix: true },
  'jane-the-virgin':              { netflix: true, hulu: true },
  'sex-and-the-city':             { max: true },
  'gossip-girl':                  { netflix: true, max: true },
  'the-queens-gambit':            { netflix: true },
  'poldark':                      { amazon_prime: true, netflix: true },
  'virgin-river':                 { netflix: true },
  'when-calls-the-heart':         { amazon_prime: true },
  'call-the-midwife':             { netflix: true },
  'wednesday':                    { netflix: true },
  'lupin':                        { netflix: true },
  'the-last-of-us':               { max: true },
  'reacher':                      { amazon_prime: true },
  'yellowjackets':                { paramount: true, hulu: true },
  'the-bear':                     { hulu: true, disney_plus: true },
  'american-horror-story':        { hulu: true, disney_plus: true },
  'penny-dreadful':               { paramount: true },
  'vampire-diaries':              { netflix: true, amazon_prime: true },
  'elite':                        { netflix: true },
  'pretty-little-liars':          { netflix: true, hulu: true, disney_plus: true },
  'buffy-the-vampire-slayer':     { hulu: true, amazon_prime: true },
  'supernatural':                 { netflix: true, amazon_prime: true },
  'outer-banks':                  { netflix: true },
  'one-tree-hill':                { netflix: true, amazon_prime: true },
  'lucifer':                      { netflix: true },
  'bodyguard':                    { netflix: true },
  'good-omens':                   { amazon_prime: true },
  'the-wire':                     { max: true },
  'mr-robot':                     { amazon_prime: true },
  'the-100':                      { netflix: true, amazon_prime: true },
  'the-sopranos':                 { max: true },
  'the-good-wife':                { netflix: true, paramount: true, hulu: true },
  'designated-survivor':          { netflix: true, hulu: true },
  'never-have-i-ever':            { netflix: true },
  'heartstopper':                 { netflix: true },
  'the-americans':                { hulu: true, amazon_prime: true },
  'the-night-manager':            { amazon_prime: true, netflix: true },
  'the-great':                    { hulu: true },
  'behind-her-eyes':              { netflix: true },
  'the-gilded-age':               { max: true },
  'shogun':                       { hulu: true, disney_plus: true },
  'beef':                         { netflix: true },
  'inventing-anna':               { netflix: true },
  'from':                         { amazon_prime: true },
  'the-diplomat':                 { netflix: true },
  'house-of-the-dragon':          { max: true },
  'andor':                        { disney_plus: true },
  'the-flight-attendant':         { max: true },
  'trigger-point':                { peacock: true },
  'poker-face':                   { peacock: true },
  'day-of-the-jackal':            { peacock: true },
  'industry':                     { max: true },
  'the-sympathizer':              { max: true },
  'i-may-destroy-you':            { max: true },
  'lovecraft-country':            { max: true },
  'tokyo-vice':                   { max: true },
  'minx':                         { max: true },
  'gaslit':                       { peacock: true },
  'true-detective-night-country': { max: true },
  'cedar-cove':                   { amazon_prime: true },
  'law-and-order-criminal-intent':{ peacock: true },
  'invincible':                   { amazon_prime: true },
  'agatha-all-along':             { disney_plus: true },
  'daredevil-born-again':         { disney_plus: true },
  'the-traitors-us':              { peacock: true },
  'echo-marvel':                  { disney_plus: true },
  'the-gilded-age-s2':            { max: true },
  'the-penguin':                  { max: true },
  'cross-2024':                   { amazon_prime: true },
  'industry-s3':                  { max: true },
  'mr-and-mrs-smith-2024':        { amazon_prime: true },
  'those-about-to-die':           { amazon_prime: true },
  'the-regime':                   { max: true },
  'obi-wan-kenobi':               { disney_plus: true },
  'moon-knight-marvel':           { disney_plus: true },
  'doctor-who-2023':              { disney_plus: true },
  'the-traitors-uk':              { peacock: true },
  'midsomer-murders':             { amazon_prime: true },
  'she-hulk-attorney':            { disney_plus: true },
  'hawkeye-disney':               { disney_plus: true },
  'night-court-reboot':           { peacock: true },
  'ms-marvel-disney':             { disney_plus: true },
  'andor-s2':                     { disney_plus: true },
  'marshals':                     { amazon_prime: true },
  'hacks':                        { max: true },
  'righteous-gemstones':          { max: true },
  'interior-chinatown':           { hulu: true, disney_plus: true },
  'the-lazarus-project':          { amazon_prime: true },
  'constellation':                { apple_tv: true },
  'mythic-quest':                 { apple_tv: true },
  'rivals-2024':                  { disney_plus: true, hulu: true },
  'physical-appletv':             { apple_tv: true },
  'acapulco':                     { apple_tv: true },
  'black-books':                  { amazon_prime: true },
  'hijack':                       { apple_tv: true },
  'the-franchise-max':            { max: true },
};

// ============================================================
// MISSING STREAMING DATA — Western Movies
// ============================================================
const WESTERN_MOVIE_STREAMING = {
  'enchanted':       { disney_plus: true },
  'barbie':          { max: true },
  'dune-part-two':   { max: true },
  'the-batman-2022': { max: true },
  'women-talking':   { amazon_prime: true },
  'living-2022':     { amazon_prime: true },
  'nope':            { peacock: true },
  'bones-and-all':   { netflix: true },
  'causeway':        { apple_tv: true },
  'm3gan':           { peacock: true },
  'barbarian':       { hulu: true, disney_plus: true },
};

// ============================================================
// MISSING STREAMING DATA — western-batch-s.js
// ============================================================
const WESTERN_BATCH_S_STREAMING = {
  'the-day-of-the-jackal-2024': { peacock: true },
  'the-way-home-s1':            { amazon_prime: true },
  'the-rings-of-power':         { amazon_prime: true },
  'from-showtime':              { paramount: true },
  'the-pitt-max':               { max: true },
};

// ============================================================
// MISSING STREAMING DATA — K-dramas
// ============================================================
const KDRAMA_STREAMING = {
  'anna-kdrama':             { viki: true },
  'lies-hidden-in-my-garden': { netflix: true },
  'night-has-come':           { disney_plus: true },
};

// ============================================================
// MISSING STREAMING DATA — C-dramas
// ============================================================
const CDRAMA_STREAMING = {
  'project-17-never-stand-still': { iqiyi: true },
  'run-for-young':                { iqiyi: true },
  'burning-stars':                { iqiyi: true },
};

// ============================================================
// UTILITY FUNCTIONS
// ============================================================

/**
 * Normalize streaming keys (fix inconsistent platform names)
 */
function normalizeStreamingKeys(streaming) {
  if (!streaming) return streaming;
  const normalized = {};
  for (const [key, val] of Object.entries(streaming)) {
    const canonical = KEY_MAP[key] || key;
    // Merge: if canonical key already exists, OR it
    normalized[canonical] = normalized[canonical] || val;
  }
  return normalized;
}

/**
 * Apply streaming additions for a list of shows
 */
function applyStreamingFixes(shows, streamingMap) {
  let added = 0;
  let normalized = 0;

  return shows.map(show => {
    // Normalize existing keys
    const originalKeys = JSON.stringify(show.streaming || {});
    const normalizedStreaming = normalizeStreamingKeys(show.streaming || {});
    if (JSON.stringify(normalizedStreaming) !== originalKeys) normalized++;

    // Add missing streaming data
    if (streamingMap[show.id]) {
      const currentKeys = Object.keys(normalizedStreaming);
      if (currentKeys.length === 0) {
        // No streaming at all — apply the map
        added++;
        return { ...show, streaming: { ...normalizedStreaming, ...streamingMap[show.id] } };
      } else {
        // Has some streaming — just normalize keys (don't overwrite existing data)
        return { ...show, streaming: normalizedStreaming };
      }
    }

    return { ...show, streaming: normalizedStreaming };
  });
}

/**
 * Read, update, and write a data file
 */
function updateFile(filePath, streamingMap) {
  const data = require(filePath);
  const updated = applyStreamingFixes(data, streamingMap);

  // Count changes
  let gapsFixed = 0;
  let keysNormalized = 0;

  for (let i = 0; i < data.length; i++) {
    const orig = JSON.stringify(data[i].streaming || {});
    const upd = JSON.stringify(updated[i].streaming || {});
    if (orig !== upd) {
      const wasEmpty = Object.keys(data[i].streaming || {}).length === 0;
      if (wasEmpty) gapsFixed++;
      else keysNormalized++;
    }
  }

  const content = 'module.exports = ' + JSON.stringify(updated, null, 2) + ';\n';
  fs.writeFileSync(path.resolve(filePath), content);

  console.log(`✓ ${path.basename(filePath)}: ${gapsFixed} gaps filled, ${keysNormalized} keys normalized`);
  return { gapsFixed, keysNormalized };
}

// ============================================================
// RUN ALL FIXES
// ============================================================
console.log('=== Fixing Streaming Data Gaps ===\n');

const files = [
  ['../data/western-shows.js',  WESTERN_SHOW_STREAMING],
  ['../data/western-movies.js', WESTERN_MOVIE_STREAMING],
  ['../data/western-batch-s.js', WESTERN_BATCH_S_STREAMING],
  ['../data/kdramas.js',         KDRAMA_STREAMING],
  ['../data/cdramas.js',         CDRAMA_STREAMING],
];

let totalGaps = 0;
let totalNorm = 0;

for (const [file, map] of files) {
  try {
    const filePath = path.join(__dirname, file);
    const result = updateFile(filePath, map);
    totalGaps += result.gapsFixed;
    totalNorm += result.keysNormalized;
  } catch (e) {
    console.error(`✗ Error processing ${file}:`, e.message);
  }
}

console.log(`\nSummary: ${totalGaps} streaming gaps filled, ${totalNorm} keys normalized`);
console.log('Done! Run `node scripts/audit-streaming-links.js` to verify.\n');
