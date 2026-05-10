#!/usr/bin/env node
const data = require('../data/kdramas');

const sameTitlePairs = [
  ['moving-kdrama', 'moving'],
  ['big-mouth-kdrama', 'big-mouth'],
  ['celebrity', 'celebrity-kdrama'],
  ['doctor-john-kdrama', 'doctor-john'],
  ['mystic-pop-up-bar', 'mystic-popup-bar'],
  ['misty-kdrama', 'misty'],
  ['goong-princess-hours', 'goong'],
  ['hierarchy-kdrama', 'hierarchy'],
  ['wonderful-world-kdrama', 'wonderful-world'],
  ['the-story-of-parks-marriage-contract', 'the-story-of-park-s-marriage-contract'],
  ['angels-last-mission-love', 'angel-s-last-mission-love'],
  ['its-okay-to-not-be-okay', 'it-s-okay-to-not-be-okay'],
  ['grid-kdrama', 'grid'],
  ['under-the-queens-umbrella', 'under-the-queen-s-umbrella'],
  ['if-you-wish-upon-me', 'a-good-day-to-be-a-dog-2023'],
  ['not-others', 'not-others-kdrama'],
  ['resident-playbook', 'resident-playbook-s2'],
  ['trauma-code-heroes-on-call', 'the-trauma-code-heroes'],
  ['the-frog', 'the-frog-2024'],
  ['family-by-choice', 'family-by-choice-2024'],
  ['social-detective', 'social-detective-2024'],
  ['agency-kdrama', 'agency-2023'],
  ['little-women', 'little-women-kdrama'],
  ['midnight-romance-in-hagwon', 'midnight-romance-hagwon'],
  ['strong-girl-nam-soon', 'strong-girl-namsoon'],
  ['good-detective-season-2', 'the-good-detective-2'],
  ['sweet-home', 'sweet-home-s2'],
  ['nevertheless', 'nevertheless-kdrama'],
  ['yumis-cells', 'yumi-cells'],
  ['forecasting-love-and-weather', 'forecasting-love'],
  ['black-knight-kdrama', 'black-knight'],
  ['island-2022', 'island-kdrama'],
  ['eve-2022', 'eve-kdrama'],
];

const byId = new Map(data.map(x => [x.id, x]));
const toRemove = [];

sameTitlePairs.forEach(([id1, id2]) => {
  const e1 = byId.get(id1);
  const e2 = byId.get(id2);
  const f1 = e1 ? Object.keys(e1).length : 0;
  const f2 = e2 ? Object.keys(e2).length : 0;
  const year1 = e1 ? e1.year : '?';
  const year2 = e2 ? e2.year : '?';
  const title1 = e1 ? e1.title : 'MISSING';
  const title2 = e2 ? e2.title : 'MISSING';
  const sameYear = year1 === year2;
  const sameTitle = title1 === title2;

  if (!e1 || !e2) {
    console.log('MISSING ENTRY:', !e1 ? id1 : id2);
    return;
  }

  // If same year and same title = genuine duplicate
  // If different year = possibly different seasons, skip
  const isDup = sameTitle && sameYear;
  const keepId = f1 >= f2 ? id1 : id2;
  const removeId = f1 >= f2 ? id2 : id1;

  // Special cases:
  // - sweet-home vs sweet-home-s2: if same title but s2 suffix = different seasons
  // - resident-playbook vs resident-playbook-s2: same
  const isSeasonVariant = removeId.endsWith('-s2') || removeId.endsWith('-s3');

  if (isDup && !isSeasonVariant) {
    toRemove.push(removeId);
    console.log(`DUP: KEEP ${keepId}(${f1 >= f2 ? f1 : f2}f) | REMOVE ${removeId}(${f1 >= f2 ? f2 : f1}f) | "${title1}"`);
  } else if (isSeasonVariant) {
    console.log(`SEASONS: keep both ${id1} + ${id2} | "${title1}"`);
  } else {
    console.log(`DIFF SHOW: ${id1}(${f1}f,"${title1}",${year1}) vs ${id2}(${f2}f,"${title2}",${year2})`);
  }
});

console.log('\nIDs to remove from kdramas.js:', JSON.stringify(toRemove));
console.log('Count to remove:', toRemove.length);
