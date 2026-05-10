#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

// Clear module cache to get fresh data
const filePath = path.join(__dirname, '../data/western-movies.js');
delete require.cache[require.resolve('../data/western-movies')];
const data = require('../data/western-movies');

const before = data.length;
const removeIds = new Set(['banshees-of-inisherin', 'all-quiet-western-front']);
const filtered = data.filter(x => !removeIds.has(x.id));

fs.writeFileSync(filePath, 'module.exports = ' + JSON.stringify(filtered, null, 2) + ';\n');
console.log('western-movies.js:', before, '->', filtered.length, '(removed', before - filtered.length, ')');

// Verify no dups remain
const seenIds = new Set();
let dups = 0;
filtered.forEach(x => { if (seenIds.has(x.id)) dups++; else seenIds.add(x.id); });
console.log(dups === 0 ? '✅ No duplicate IDs' : '❌ Still has ' + dups + ' dup IDs');
