/**
 * Merge Batch C (mixed genres) into kdramas.js
 * Reads batch file as JS module, converts to source text, appends to kdramas.js
 */
const fs = require('fs');
const path = require('path');

const kdramasPath = path.join(__dirname, '../data/kdramas.js');
const batchPath = path.join(__dirname, '../data/kdramas-batch-c-mixed.js');

// Load via require for validation
const existing = require('../data/kdramas.js');
const batchEntries = require('../data/kdramas-batch-c-mixed.js');

const existingIds = new Set(existing.map(d => d.id));
const dupes = batchEntries.filter(d => existingIds.has(d.id)).map(d => d.id);
if (dupes.length > 0) {
  console.error('❌ Duplicate IDs found:', dupes.join(', '));
  process.exit(1);
}
console.log(`✅ No duplicates. Adding ${batchEntries.length} entries.`);

// Helper: serialise a single entry to JS source text
function serializeEntry(obj, indent = '  ') {
  const lines = [];
  lines.push(indent + '{');
  for (const [key, val] of Object.entries(obj)) {
    if (typeof val === 'string') {
      lines.push(`${indent}  ${key}: ${JSON.stringify(val)},`);
    } else if (typeof val === 'boolean' || typeof val === 'number') {
      lines.push(`${indent}  ${key}: ${val},`);
    } else if (Array.isArray(val)) {
      if (val.length === 0) {
        lines.push(`${indent}  ${key}: [],`);
      } else if (typeof val[0] === 'string') {
        lines.push(`${indent}  ${key}: [${val.map(v => JSON.stringify(v)).join(', ')}],`);
      } else {
        // Array of objects (actors)
        lines.push(`${indent}  ${key}: [`);
        val.forEach((item, i) => {
          const comma = i < val.length - 1 ? ',' : '';
          lines.push(`${indent}    { ${Object.entries(item).map(([k, v]) => `${k}: ${JSON.stringify(v)}`).join(', ')} }${comma}`);
        });
        lines.push(`${indent}  ],`);
      }
    } else if (typeof val === 'object' && val !== null) {
      // streaming object
      const inner = Object.entries(val).map(([k, v]) => `${k}: ${v}`).join(', ');
      lines.push(`${indent}  ${key}: { ${inner} },`);
    }
  }
  lines.push(indent + '}');
  return lines.join('\n');
}

const batchComment = `  // ===================================================================
  // BATCH C — MIXED GENRES EXPANSION — 2026-03-23
  // Fantasy, Historical, Comedy, Slice-of-Life, Horror, Sci-Fi, Medical, Legal, Workplace
  // ===================================================================`;

const entriesText = batchEntries.map(e => serializeEntry(e)).join(',\n\n');
const insertBlock = '\n\n' + batchComment + '\n\n' + entriesText + '\n';

// Read kdramas.js and insert before closing ];
let content = fs.readFileSync(kdramasPath, 'utf8');
const insertPoint = content.lastIndexOf('];');
if (insertPoint === -1) {
  console.error('❌ Could not find closing ]; in kdramas.js');
  process.exit(1);
}

const newContent = content.slice(0, insertPoint) + ',\n' + insertBlock + content.slice(insertPoint);
fs.writeFileSync(kdramasPath, newContent, 'utf8');
console.log('✅ Wrote merged content to kdramas.js');

// Verify
delete require.cache[require.resolve('../data/kdramas.js')];
const verify = require('../data/kdramas.js');
console.log(`✅ kdramas.js now has ${verify.length} total entries`);

const finalIds = verify.map(d => d.id);
const uniqueFinalIds = new Set(finalIds);
if (uniqueFinalIds.size !== finalIds.length) {
  const seen = {};
  const dups = [];
  finalIds.forEach(id => { if (seen[id]) dups.push(id); seen[id] = true; });
  console.error('❌ DUPLICATE IDs in final file:', dups);
  process.exit(1);
}
console.log('✅ No duplicate IDs in final catalog');
console.log(`✅ Total K-dramas: ${verify.length}`);
