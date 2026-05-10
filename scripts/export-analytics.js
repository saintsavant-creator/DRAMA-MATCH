/**
 * export-analytics.js
 *
 * Exports all DramaMatch analytics tables as SQL INSERT statements.
 * Output: public/dramamatch_data_export.sql (served statically at /dramamatch_data_export.sql)
 *
 * Runs at build time (npm run build). Requires DATABASE_URL env var.
 * Skips gracefully if DATABASE_URL is not set.
 *
 * Usage: node scripts/export-analytics.js
 */

const { Pool } = require('pg');
const fs = require('fs');
const path = require('path');

if (!process.env.DATABASE_URL) {
  console.log('⚠️  DATABASE_URL not set — skipping analytics export');
  process.exit(0);
}

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: process.env.DATABASE_URL.includes('localhost') ? false : { rejectUnauthorized: false }
});

// Tables to export, in order. Tables with integer serial ids get sequence resets.
const TABLES = [
  { name: 'affiliate_clicks',      serialId: true  },
  { name: 'pageviews',             serialId: true  },
  { name: 'searches',              serialId: true  },
  { name: 'match_votes',           serialId: true  },
  { name: 'match_overrides',       serialId: true  },
  { name: 'newsletter_subscribers',serialId: true  },
  { name: 'show_comments',         serialId: true  },
  { name: 'shared_lists',          serialId: false }, // varchar id
  { name: 'users',                 serialId: true  },
];

const BATCH_SIZE = 500;
const OUTPUT_PATH = path.join(__dirname, '../public/dramamatch_data_export.sql');

// Escape a single value for SQL
function escapeValue(val) {
  if (val === null || val === undefined) return 'NULL';
  if (typeof val === 'boolean') return val ? 'TRUE' : 'FALSE';
  if (typeof val === 'number') return String(val);
  if (val instanceof Date) return `'${val.toISOString()}'`;
  // Objects/arrays (jsonb) → JSON string
  if (typeof val === 'object') {
    return `'${JSON.stringify(val).replace(/'/g, "''")}'`;
  }
  // Strings: escape single quotes by doubling them
  return `'${String(val).replace(/'/g, "''")}'`;
}

async function exportTable(client, tableName, lines) {
  // Get columns
  const colRes = await client.query(
    `SELECT column_name FROM information_schema.columns
     WHERE table_schema = 'public' AND table_name = $1
     ORDER BY ordinal_position`,
    [tableName]
  );
  const columns = colRes.rows.map(r => r.column_name);
  const colList = columns.map(c => `"${c}"`).join(', ');

  let offset = 0;
  let totalRows = 0;

  while (true) {
    const res = await client.query(
      `SELECT * FROM "${tableName}" ORDER BY id LIMIT $1 OFFSET $2`,
      [BATCH_SIZE, offset]
    );
    if (res.rows.length === 0) break;

    for (const row of res.rows) {
      const vals = columns.map(c => escapeValue(row[c])).join(', ');
      lines.push(`INSERT INTO "${tableName}" (${colList}) VALUES (${vals});`);
    }

    totalRows += res.rows.length;
    offset += res.rows.length;
    if (res.rows.length < BATCH_SIZE) break;
  }

  return totalRows;
}

async function main() {
  const client = await pool.connect();
  const lines = [];

  lines.push('-- DramaMatch Analytics Data Export');
  lines.push(`-- Generated: ${new Date().toISOString()}`);
  lines.push('-- Tables: affiliate_clicks, pageviews, searches, match_votes,');
  lines.push('--         match_overrides, newsletter_subscribers, show_comments, shared_lists, users');
  lines.push('-- Import: psql $DATABASE_URL < dramamatch_data_export.sql');
  lines.push('');

  let grandTotal = 0;

  try {
    for (const { name, serialId } of TABLES) {
      lines.push(`-- ============================================================`);
      lines.push(`-- Table: ${name}`);
      lines.push(`-- ============================================================`);

      const rowCount = await exportTable(client, name, lines);
      grandTotal += rowCount;

      // Reset sequence so future inserts don't collide with imported ids
      if (serialId && rowCount > 0) {
        lines.push(`SELECT setval(pg_get_serial_sequence('"${name}"', 'id'), COALESCE((SELECT MAX(id) FROM "${name}"), 0) + 1, false);`);
      }

      lines.push('');
      console.log(`  ✓ ${name}: ${rowCount} rows`);
    }
  } finally {
    client.release();
    await pool.end();
  }

  const sql = lines.join('\n');
  fs.writeFileSync(OUTPUT_PATH, sql, 'utf8');

  const sizeMB = (fs.statSync(OUTPUT_PATH).size / 1024 / 1024).toFixed(2);
  console.log(`\n✓ Exported ${grandTotal.toLocaleString()} total rows → public/dramamatch_data_export.sql (${sizeMB} MB)`);
  console.log(`\nDownloadable at: https://dramamatch.polsia.app/dramamatch_data_export.sql`);
}

main().catch(err => {
  console.error('Export failed:', err.message);
  process.exit(1);
});
