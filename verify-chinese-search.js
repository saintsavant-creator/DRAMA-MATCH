/**
 * Verify Chinese (Hanzi) native title search works correctly.
 * Tests both Simplified and Traditional Chinese input.
 */
const engine = require('./data/recommendation-engine');

let passed = 0;
let failed = 0;

function test(description, query, expectedId) {
  const results = engine.searchShows(query, 10);
  const found = results.find(r => r.id === expectedId);
  if (found) {
    passed++;
    console.log(`  PASS: "${query}" -> ${found.title} (${found.id})`);
  } else {
    failed++;
    const topIds = results.slice(0, 3).map(r => `${r.title} [${r.id}]`).join(', ');
    console.log(`  FAIL: "${query}" expected ${expectedId}, got: ${topIds || 'no results'}`);
  }
}

console.log('=== Chinese Search Tests ===\n');

console.log('--- C-Drama: Simplified Chinese ---');
test('The Untamed by Chinese title', '陈情令', 'the-untamed');
test('Nirvana in Fire by Chinese title', '琅琊榜', 'nirvana-in-fire');
test('Joy of Life by Chinese title', '庆余年', 'joy-of-life');
test('The Bad Kids by Chinese title', '隐秘的角落', 'the-bad-kids');
test('Love Between Fairy and Devil', '苍兰诀', 'love-between-fairy-and-devil');
test('Hidden Love by Chinese title', '暗恋橘生淮南', 'hidden-love');
test('Story of Yanxi Palace', '延禧攻略', 'story-of-yanxi-palace');
test('Ashes of Love', '香蜜沉沉烬如霜', 'ashes-of-love');
test('Nothing But Thirty (from alias map)', '三十而已', 'nothing-but-thirty');
test('The Long Season (from alias map)', '漫长的季节', 'the-long-season-cdrama');

console.log('\n--- C-Drama: Partial Chinese ---');
test('Partial "陈情" should find The Untamed', '陈情', 'the-untamed');
test('Partial "琅琊" should find Nirvana in Fire', '琅琊', 'nirvana-in-fire');
test('Partial "庆余" should find Joy of Life', '庆余', 'joy-of-life');

console.log('\n--- K-Drama: Chinese Translations ---');
test('Crash Landing in Chinese', '爱的迫降', 'crash-landing-on-you');
test('Squid Game in Chinese', '鱿鱼游戏', 'squid-game');
test('Goblin in Chinese', '鬼怪', 'goblin');
test('Descendants of the Sun in Chinese', '太阳的后裔', 'descendants-of-the-sun');
test('Reply 1988 in Chinese', '请回答1988', 'reply-1988');
test('The Glory in Chinese', '黑暗荣耀', 'the-glory');
test('Hotel Del Luna in Chinese', '德鲁纳酒店', 'hotel-del-luna');

console.log('\n--- Western: Chinese Translations ---');
test('Breaking Bad in Chinese', '绝命毒师', 'breaking-bad');
test('Game of Thrones in Chinese', '权力的游戏', 'game-of-thrones');
test('Stranger Things in Chinese', '怪奇物语', 'stranger-things');
test('Friends in Chinese', '老友记', 'friends');

console.log('\n--- K-Movies: Chinese Translations ---');
test('Parasite in Chinese', '寄生虫', 'parasite-kmovie');
test('Train to Busan in Chinese', '釜山行', 'train-to-busan');

console.log('\n--- Traditional Chinese ---');
test('The Untamed Traditional', '陳情令', 'the-untamed');
test('Squid Game Traditional', '魷魚遊戲', 'squid-game');
test('Breaking Bad Traditional', '絕命毒師', 'breaking-bad');
test('Parasite Traditional', '寄生蟲', 'parasite-kmovie');

console.log('\n--- Korean search still works ---');
test('Korean: Crash Landing', '사랑의 불시착', 'crash-landing-on-you');
test('Korean: Squid Game', '오징어 게임', 'squid-game');
test('Korean: Goblin', '도깨비', 'goblin');

console.log('\n--- English search still works ---');
test('English: Breaking Bad', 'breaking bad', 'breaking-bad');
test('English: The Untamed', 'the untamed', 'the-untamed');
test('English: Crash Landing', 'crash landing', 'crash-landing-on-you');

console.log(`\n=== Results: ${passed} passed, ${failed} failed ===`);
process.exit(failed > 0 ? 1 : 0);
