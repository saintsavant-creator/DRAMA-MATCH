#!/usr/bin/env node
/**
 * Batch E pre-check: identify search IDs not in the engine
 */
const k = require('../data/kdramas.js');
const c = require('../data/cdramas.js');
const j = require('../data/jdramas.js');
const w = require('../data/western-shows.js');
const wm = require('../data/western-movies.js');
const km = require('../data/korean-movies.js');
const a = require('../data/anime.js');

const allIds = new Set([...k,...c,...j,...w,...wm,...km,...a].map(s=>s.id));
console.log('=== CATALOG SIZES ===');
console.log('K-dramas:', k.length);
console.log('C-dramas:', c.length);
console.log('J-dramas:', j.length);
console.log('Western shows:', w.length);
console.log('Western movies:', wm.length);
console.log('Korean movies:', km.length);
console.log('Anime:', a.length);
console.log('Total in engine:', allIds.size);
console.log('');

// Check all search IDs from DB searches table
const searchIds = [
  'stranger-things','breaking-bad','pursuit-of-jade','john-wick','its-okay-to-not-be-okay',
  'psych','tale-of-the-nine-tailed','outlander','a-shop-for-killers','wednesday',
  'criminal-minds','game-of-thrones','bridgerton','dear-hongrang','rings-of-power',
  'house-of-the-dragon','meteor-garden-2018','mr-robot','sherlock','the-matrix',
  'the-moon-that-embraces-the-sun','hospital-playlist','full-house','stranger',
  'hidden-love','suits','the-last-of-us','the-walking-dead','marry-my-husband',
  'vampire-diaries','fallout','mindhunter','from-me-to-you-kdrama','cobra-kai',
  'lovers-in-prague','cafe-minamdang','billions','trauma-code-heroes-on-call',
  'the-crown','when-calls-the-heart','severance','the-frog','phantom-lawyer',
  'when-the-phone-rings','my-sweet-mobster','little-women-kdrama','story-of-kunning-palace',
  'train-to-busan','the-night-agent','my-journey-to-you','deaths-game','gilmore-girls',
  'lovely-runner','when-the-camellia-blooms','twin-peaks','the-notebook','clueless',
  'love-between-fairy-and-devil','downton-abbey','the-uncanny-counter'
];

const missing = searchIds.filter(id => { return !allIds.has(id); });
console.log('=== SEARCH IDs MISSING FROM ENGINE ===');
console.log(missing);
console.log('');
console.log('Missing count:', missing.length);
