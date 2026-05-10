#!/usr/bin/env node
const data = require('../data/cdramas');
const sameTitlePairs = [
  ['the-story-of-ming-lan', 'story-of-ming-lan'],
  ['ancient-detective', 'the-longest-promise'],
  ['hidden-love', 'hidden-love-cdrama'],
  ['go-ahead', 'go-ahead-cdrama'],
  ['day-and-night', 'day-and-night-cdrama'],
];

const byId = new Map(data.map(x => [x.id, x]));
sameTitlePairs.forEach(([id1, id2]) => {
  const e1 = byId.get(id1);
  const e2 = byId.get(id2);
  const f1 = e1 ? Object.keys(e1).length : 0;
  const f2 = e2 ? Object.keys(e2).length : 0;
  console.log(`${id1} (${f1}f,"${e1 ? e1.title : 'MISSING'}",${e1 ? e1.year : '?'}) vs ${id2} (${f2}f,"${e2 ? e2.title : 'MISSING'}",${e2 ? e2.year : '?'})`);
  if (e1 && e2) {
    console.log('  actors1:', (e1.actors||[]).slice(0,1).map(a=>a.name));
    console.log('  actors2:', (e2.actors||[]).slice(0,1).map(a=>a.name));
  }
});
