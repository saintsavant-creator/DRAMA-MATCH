/**
 * Batch 6 dedup check - identifies which candidates are NOT yet in catalog
 */
const fs = require('fs');
const path = require('path');

const dataDir = path.join(__dirname, '../data');
const files = fs.readdirSync(dataDir).filter(f =>
  f.startsWith('western') &&
  f.endsWith('.js') &&
  f !== 'recommendation-engine.js' &&
  !f.includes('affiliate')
);

let all = [];
files.forEach(f => {
  try {
    const data = require('../data/' + f);
    if (Array.isArray(data)) all = all.concat(data);
  } catch(e) {
    // skip
  }
});

const ids = new Set(all.map(x => x.id));
const titleSet = new Set(all.map(x => x.title.toLowerCase()));

const candidates = [
  // TV Shows
  'tracker',
  'paradise-hulu-2025',
  'the-studio-apple',
  'lioness-s2',
  'emilia-perez',  // movie
  'anora',
  'a-complete-unknown',
  'nosferatu-2024',
  'carry-on-netflix',
  'the-wild-robot',
  'dept-q',
  'cross-amazon-2024',
  'the-penguin',
  'dune-prophecy',
  'american-primeval',
  'bad-sisters',
  'apple-cider-vinegar',
  'mr-and-mrs-smith-series',
  'your-friends-and-neighbors-apple',
  'elsbeth',
  'yellowjackets-s3',
  'watson-cbs',
  'back-in-action',
  'presence-2025',
  'on-call-netflix',
  'the-residence',
  'found-s2',
  'sheriff-country',
  'black-bag-2025',
  'prime-target',
  'september-5',
  'nickel-boys',
  'the-brutalist',
  'wicked-2024',
  'conclave',
  'hard-truths',
  'i-saw-the-tv-glow',
  'all-of-us-strangers',
  'saltburn',
  'the-holdovers',
  'american-fiction',
  'bottoms',
  'reality-2023',
  'fair-play-netflix',
  'the-killer-2023',
  'past-lives',
  'godzilla-x-kong',
  'twisters-2024',
  'deadpool-wolverine',
  'alien-romulus',
  'beetlejuice-beetlejuice',
  'trap-2024',
  'longlegs',
  'smile-2',
  'the-union-netflix',
  'rebel-ridge',
  'it-ends-with-us',
];

console.log('=== Already in catalog (SKIP) ===');
candidates.filter(c => ids.has(c)).forEach(c => console.log(' EXISTS:', c));

console.log('\n=== NOT in catalog (AVAILABLE for batch 6) ===');
candidates.filter(c => !ids.has(c)).forEach(c => console.log(' AVAILABLE:', c));

console.log('\nTotal western entries loaded:', all.length);
console.log('Total unique IDs in western catalog:', ids.size);
