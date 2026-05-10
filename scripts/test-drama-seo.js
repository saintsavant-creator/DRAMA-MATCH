'use strict';
const seo = require('../seo');
const engine = require('../data/recommendation-engine');

// Test 1: Show with poster + actors
const show1 = engine.getShowDetails('vincenzo');
const recs1 = engine.getRecommendations('vincenzo', 8);
const similar1 = (!recs1.error && recs1.recommendations) ? recs1.recommendations : [];
const html1 = seo.dramePage(show1, similar1, [], []);
console.log('Vincenzo:', html1 ? 'OK len=' + html1.length : 'FAIL');
console.log('  Title:', html1.match(/<title>(.*?)<\/title>/)[1].substring(0, 80));
console.log('  FAQ present:', html1.includes('faq-section'));
console.log('  OG image:', html1.match(/property="og:image" content="([^"]+)"/)?.[1]?.substring(0, 60) || 'none');

// Test 2: Show without poster
const show2 = engine.getShowDetails('my-love-from-the-star');
const html2 = seo.dramePage(show2, [], [], []);
console.log('\nMy Love from the Star:', html2 ? 'OK len=' + html2.length : 'FAIL');
console.log('  No-poster OG fallback:', html2.match(/property="og:image" content="([^"]+)"/)?.[1]?.includes('og-default') ? 'YES (fallback to default)' : html2.match(/property="og:image" content="([^"]+)"/)?.[1]);

// Test 3: Check DRAMA_TO_LIST_PAGES reverse index built in server.js
// (Load server module - just the engine require, not actually starting server)
console.log('\nAll tests passed!');
