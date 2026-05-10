#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '../data/cdramas.js');
delete require.cache[require.resolve('../data/cdramas')];
const data = require('../data/cdramas');
const before = data.length;

const REMOVE_IDS = new Set([
  'story-of-ming-lan',   // wrong actor (Zhao Lusi), keep 'the-story-of-ming-lan' (Zhao Liying)
  'ancient-detective',   // wrong ID for "The Longest Promise", keep 'the-longest-promise'
  'hidden-love-cdrama',  // dup of 'hidden-love' (same show, same actor)
  'go-ahead-cdrama',     // dup of 'go-ahead'
  'day-and-night-cdrama', // dup of 'day-and-night'
]);

const filtered = data.filter(x => !REMOVE_IDS.has(x.id));
fs.writeFileSync(filePath, 'module.exports = ' + JSON.stringify(filtered, null, 2) + ';\n');

const removed = before - filtered.length;
console.log('cdramas.js:', before, '->', filtered.length, '(removed', removed, ')');

const seen = new Set();
let dups = 0;
filtered.forEach(x => { if (seen.has(x.id)) dups++; else seen.add(x.id); });
console.log(dups === 0 ? '✅ No duplicate IDs' : '❌ Still has ' + dups + ' dup IDs');
