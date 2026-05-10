/**
 * export-catalog.js
 *
 * Exports the full DramaMatch shows catalog to JSON.
 * Output: public/catalog-export.json (served statically at /catalog-export.json)
 *
 * Usage: node scripts/export-catalog.js
 */

const fs = require('fs');
const path = require('path');

// Load the recommendation engine which aggregates all catalog data files
const engine = require('../data/recommendation-engine');

const allShows = engine.getAllShows();
const catalog = Object.values(allShows);

// Sort by type, then title for readability
catalog.sort((a, b) => {
  if (a.type !== b.type) return a.type.localeCompare(b.type);
  return (a.title || '').localeCompare(b.title || '');
});

const output = {
  exported_at: new Date().toISOString(),
  total_count: catalog.length,
  by_type: {},
  shows: catalog
};

// Count by type
catalog.forEach(show => {
  output.by_type[show.type] = (output.by_type[show.type] || 0) + 1;
});

const outputPath = path.join(__dirname, '../public/catalog-export.json');
fs.writeFileSync(outputPath, JSON.stringify(output, null, 2));

console.log(`✓ Exported ${catalog.length} titles to public/catalog-export.json`);
console.log('\nBreakdown by type:');
Object.entries(output.by_type)
  .sort((a, b) => b[1] - a[1])
  .forEach(([type, count]) => console.log(`  ${type}: ${count}`));
console.log(`\nFile size: ${(fs.statSync(outputPath).size / 1024 / 1024).toFixed(2)} MB`);
console.log(`\nDownloadable at: https://dramamatch.app/catalog-export.json`);
