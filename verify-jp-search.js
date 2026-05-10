// Verify Japanese search works
const engine = require('./data/recommendation-engine');

console.log('=== Testing Japanese Script Search ===\n');

// Test 1: Search for anime by Japanese title
const attackOnTitan = engine.searchShows('進撃の巨人', 3);
console.log('Test 1: 進撃の巨人 →', attackOnTitan.map(r => r.title));

// Test 2: Search for anime by Japanese title
const deathNote = engine.searchShows('|DEATH NOTE', 3);
console.log('Test 2: |DEATH NOTE →', deathNote.map(r => r.title));

// Test 3: Search for jdrama by Japanese title
const aliceBorderland = engine.searchShows('アリス・イン・ボーダーランド', 3);
console.log('Test 3: アリス・イン・ボーダーランド →', aliceBorderland.map(r => r.title));

// Test 4: English search still works
const breakingBad = engine.searchShows('breaking bad', 3);
console.log('Test 4: breaking bad →', breakingBad.map(r => r.title));

// Test 5: One Piece live action (newly added nativeTitle)
const onePieceLA = engine.searchShows('ワンピース', 3);
console.log('Test 5: ワンピース →', onePieceLA.map(r => r.title));

// Test 6: Solo Leveling
const soloLeveling = engine.searchShows('俺だけレベルアップな件', 3);
console.log('Test 6: 俺だけレベルアップな件 →', soloLeveling.map(r => r.title));

// Test 7: Kaiju No. 8
const kaiju = engine.searchShows('怪獣あの', 3);
console.log('Test 7: 怪獣あの →', kaiju.map(r => r.title));

console.log('\n=== All tests complete ===');