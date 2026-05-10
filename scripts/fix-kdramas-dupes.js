#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '../data/kdramas.js');
delete require.cache[require.resolve('../data/kdramas')];
const data = require('../data/kdramas');
const before = data.length;

// Identified duplicates: keep the more complete entry, remove the redundant one
// Determined by field count and ID canonicality
const REMOVE_IDS = new Set([
  // Same-show dups (different IDs for same title+year)
  'moving-kdrama',          // keep 'moving'
  'big-mouth-kdrama',       // keep 'big-mouth'
  'celebrity-kdrama',       // keep 'celebrity'
  'mystic-popup-bar',       // keep 'mystic-pop-up-bar'
  'misty',                  // keep 'misty-kdrama' (higher fields)
  'goong',                  // keep 'goong-princess-hours'
  'hierarchy-kdrama',       // keep 'hierarchy'
  'wonderful-world',        // keep 'wonderful-world-kdrama'
  'the-story-of-park-s-marriage-contract', // keep 'the-story-of-parks-marriage-contract'
  'angel-s-last-mission-love',  // keep 'angels-last-mission-love'
  'it-s-okay-to-not-be-okay',  // keep 'its-okay-to-not-be-okay'
  'grid-kdrama',            // keep 'grid'
  'under-the-queens-umbrella', // keep 'under-the-queen-s-umbrella' (higher fields)
  'a-good-day-to-be-a-dog-2023', // data error: wrong title (If You Wish Upon Me); keep 'if-you-wish-upon-me'
  'not-others-kdrama',      // keep 'not-others'
  'the-frog-2024',          // keep 'the-frog'
  'family-by-choice',       // keep 'family-by-choice-2024' (higher fields)
  'agency-2023',            // keep 'agency-kdrama'
  'little-women-kdrama',    // keep 'little-women'
  'midnight-romance-hagwon', // keep 'midnight-romance-in-hagwon'
  'strong-girl-namsoon',    // keep 'strong-girl-nam-soon'
  'the-good-detective-2',   // keep 'good-detective-season-2'
  'nevertheless',           // keep 'nevertheless-kdrama' (18f)
  'yumis-cells',            // keep 'yumi-cells' (18f)
  'forecasting-love-and-weather', // keep 'forecasting-love' (17f)
  'black-knight-kdrama',    // keep 'black-knight' (18f)
  'island-2022',            // keep 'island-kdrama' (18f)
  'eve-kdrama',             // keep 'eve-2022' (15f tie, cleaner canonical ID)
  // Trauma Code: same show (Ju Ji-hoon, Choo Young-woo), wrong year on one
  'the-trauma-code-heroes', // keep 'trauma-code-heroes-on-call' (correct year 2025)
]);

const filtered = data.filter(x => !REMOVE_IDS.has(x.id));
fs.writeFileSync(filePath, 'module.exports = ' + JSON.stringify(filtered, null, 2) + ';\n');

const removed = before - filtered.length;
console.log('kdramas.js:', before, '->', filtered.length, '(removed', removed, ')');

// Verify no dup IDs remain
const seen = new Set();
let dups = 0;
filtered.forEach(x => { if (seen.has(x.id)) dups++; else seen.add(x.id); });
console.log(dups === 0 ? '✅ No duplicate IDs' : '❌ Still has ' + dups + ' dup IDs');
