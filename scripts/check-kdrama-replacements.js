const path = require('path');
const dataDir = path.join(__dirname, '..', 'data');
Object.keys(require.cache).forEach(k => { if (k.includes('/data/')) delete require.cache[k]; });
const kdramas = require(path.join(dataDir, 'kdramas.js'));
const existingIds = new Set(kdramas.map(d => d.id));
const existingTitles = new Set(kdramas.map(d => d.title.toLowerCase()));

const candidates = [
  ['psychopath-diary', 'Psychopath Diary'],
  ['365-repeat-the-year', '365: Repeat the Year'],
  ['nobody-knows-kdrama', 'Nobody Knows'],
  ['run-on', 'Run On'],
  ['navillera', 'Navillera'],
  ['my-roommate-is-a-gumiho', 'My Roommate Is a Gumiho'],
  ['yumis-cells', "Yumi's Cells"],
  ['so-i-married-an-anti-fan', 'So I Married an Anti-Fan'],
  ['on-the-verge-of-insanity', 'On the Verge of Insanity'],
  ['luca-the-beginning', 'L.U.C.A.: The Beginning'],
  ['the-uncanny-counter', 'The Uncanny Counter'],
  ['squid-game-s2', 'Squid Game: Season 2'],
  ['moving', 'Moving'],
  ['death-game', 'Death Game'],
  ['six-flying-dragons', 'Six Flying Dragons'],
  ['queen-and-i', 'The King and I'],
  ['destined-with-you', 'Destined with You'],
  ['welcome-to-samdal-ri', 'Welcome to Samdal-ri'],
  ['crash', 'Crash'],
  ['lovely-runner', 'Lovely Runner'],
  ['a-good-day-to-be-a-dog', 'A Good Day to Be a Dog'],
  ['twinkling-watermelon', 'Twinkling Watermelon'],
  ['the-moon-rises-river', 'The Moon That Rises in the River'],
];

console.log('NEW (safe to add):');
candidates.forEach(([id, title]) => {
  const byId = existingIds.has(id);
  const byTitle = existingTitles.has(title.toLowerCase());
  if (!byId && !byTitle) console.log(`  + ${id} — "${title}"`);
});
console.log('\nALREADY EXISTS:');
candidates.forEach(([id, title]) => {
  const byId = existingIds.has(id);
  const byTitle = existingTitles.has(title.toLowerCase());
  if (byId || byTitle) console.log(`  = ${id} — "${title}" (id=${byId}, title=${byTitle})`);
});
