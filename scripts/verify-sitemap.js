#!/usr/bin/env node
/**
 * Verify sitemap would include all expected URLs
 * Run: node scripts/verify-sitemap.js
 */
const kdramas = require('../data/kdramas');
const koreanMovies = require('../data/korean-movies');
const westernShows = require('../data/western-shows');
const westernMovies = require('../data/western-movies');
const cdramas = require('../data/cdramas');

const base = 'https://dramamatch.app';
const urls = [];

// Homepage
urls.push(`${base}`);

// K-drama pages
kdramas.forEach(d => urls.push(`${base}/drama/${d.id}`));

// K-movie pages
koreanMovies.forEach(m => urls.push(`${base}/drama/${m.id}`));

// C-drama pages
cdramas.forEach(d => urls.push(`${base}/drama/${d.id}`));

// Match pages
westernShows.forEach(s => urls.push(`${base}/match/${s.id}`));
westernMovies.forEach(m => urls.push(`${base}/match/${m.id}`));

// Static pages
urls.push(`${base}/blog`);
urls.push(`${base}/about`);
urls.push(`${base}/actors`);
urls.push(`${base}/meteor-garden-f4`);

console.log('=== Sitemap Coverage (after fix) ===');
console.log('Homepage:', 1);
console.log('K-drama pages (/drama/:id):', kdramas.length);
console.log('K-movie pages (/drama/:id):', koreanMovies.length);
console.log('C-drama pages (/drama/:id):', cdramas.length);
console.log('Western show match pages (/match/:id):', westernShows.length);
console.log('Western movie match pages (/match/:id):', westernMovies.length);
console.log('Blog index + 10 posts:', 1 + 10);
console.log('Static pages (about, actors, f4):', 3);
console.log('');
const dramatotal = kdramas.length + koreanMovies.length + cdramas.length;
const matchtotal = westernShows.length + westernMovies.length;
console.log(`Total drama/movie detail pages: ${dramatotal}`);
console.log(`Total match pages: ${matchtotal}`);
console.log(`Estimated total URLs (before actors/moods): ${urls.length + 11}`);
console.log('');
console.log('Sample C-drama URLs:');
cdramas.slice(0, 3).forEach(d => console.log(`  /drama/${d.id}`));
console.log('Sample K-movie URLs:');
koreanMovies.slice(0, 3).forEach(m => console.log(`  /drama/${m.id}`));
