/**
 * Normalize IU actor name: "IU (Lee Ji-eun)" → "IU" across kdramas.js
 * So all IU shows appear at /actor/iu instead of being split
 */
const fs = require('fs');
const path = require('path');

const kdramasPath = path.join(__dirname, '../data/kdramas.js');
let content = fs.readFileSync(kdramasPath, 'utf8');

const before = (content.match(/IU \(Lee Ji-eun\)/g) || []).length;
console.log(`Found ${before} occurrences of "IU (Lee Ji-eun)"`);

// Replace all instances
content = content.replace(/"IU \(Lee Ji-eun\)"/g, '"IU"');

const after = (content.match(/IU \(Lee Ji-eun\)/g) || []).length;
console.log(`After replacement: ${after} remaining`);

fs.writeFileSync(kdramasPath, content, 'utf8');
console.log('✅ Wrote updated kdramas.js');

// Verify
delete require.cache[require.resolve('../data/kdramas.js')];
const engine = require('../data/recommendation-engine.js');

// Clear engine cache too
Object.keys(require.cache).filter(k => k.includes('recommendation-engine')).forEach(k => delete require.cache[k]);

// Re-require engine fresh
const freshEngine = require('../data/recommendation-engine.js');
const result = freshEngine.getActorShowsWithMatches('IU', null);
console.log(`\nIU now has ${result ? result.shows.length : 0} shows:`);
if (result) result.shows.forEach(s => console.log(` - ${s.show.title} (${s.show.year}) — isLead: ${s.isLead}`));
