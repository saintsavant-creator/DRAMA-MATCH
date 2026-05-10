const engine = require('./data/recommendation-engine');

const tests = [
  ['Attack on Titan', 'Attack on Titan'],
  ['Sweet Home', 'Sweet Home'],
  ['進撃の巨人', 'Attack on Titan'],
  ['アリス・イン・ボーダーランド', 'Alice in Borderland'],
  ['스위트홈', 'Sweet Home'],
  ['ワンピース', 'One Piece (Live Action)'],
  ['怪獣あの', 'Kaiju No. 8'],
  ['花より男子', 'Boys Over Flowers'],
  ['breaking bad', 'Breaking Bad'],
];

let pass = 0;
for (const [query, expected] of tests) {
  const r = engine.searchShows(query, 2);
  const top = r[0] ? r[0].title : 'NONE';
  const ok = top === expected;
  if (ok) pass++;
  const note = ok ? '' : '(expected: ' + expected + ')';
  console.log(ok ? 'PASS' : 'FAIL', JSON.stringify(query), '→', top, note);
}

console.log('\n' + pass + '/' + tests.length + ' tests passed');