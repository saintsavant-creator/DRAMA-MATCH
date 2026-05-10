#!/usr/bin/env node
/**
 * Outputs a dedup plan: for each title with multiple entries, which to keep vs remove
 */
const data = require('../data/western-shows');
const groups = new Map();

data.forEach((item, idx) => {
  const title = item.title.toLowerCase().trim();
  if (!groups.has(title)) groups.set(title, []);
  groups.get(title).push({ id: item.id, idx, fields: Object.keys(item).length });
});

const toRemove = [];
for (const [title, entries] of groups) {
  if (entries.length > 1) {
    const sorted = entries.sort((a, b) => b.fields - a.fields);
    const keep = sorted[0];
    const remove = sorted.slice(1);
    console.log(`KEEP: ${keep.id} (${keep.fields}f) | REMOVE: ${remove.map(r => r.id + '(' + r.fields + 'f)').join(', ')} | "${title.slice(0, 35)}"`);
    remove.forEach(r => toRemove.push(r.id));
  }
}
console.log('\nTotal entries to remove:', toRemove.length);
console.log('IDs to remove:', JSON.stringify(toRemove));
console.log('Result count:', data.length - toRemove.length);
