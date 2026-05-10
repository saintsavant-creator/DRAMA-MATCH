/**
 * export-pageviews.js
 *
 * Exports pageviews table data + users CREATE TABLE as SQL INSERT statements.
 * Output: public/dramamatch_data_export_pageviews.sql
 * Served at /dramamatch_data_export_pageviews.sql
 *
 * Runs at build time. Requires DATABASE_URL env var.
 */

const { Pool } = require('pg');
const fs = require('fs');
const path = require('path');

if (!process.env.DATABASE_URL) {
  console.log('⚠️  DATABASE_URL not set — skipping pageviews export');
  process.exit(0);
}

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: process.env.DATABASE_URL.includes('localhost') ? false : { rejectUnauthorized: false }
});

const BATCH_SIZE = 200;
const OUTPUT_PATH = path.join(__dirname, '../public/dramamatch_data_export_pageviews.sql');

function escapeValue(val) {
  if (val === null || val === undefined) return 'NULL';
  if (typeof val === 'boolean') return val ? 'TRUE' : 'FALSE';
  if (typeof val === 'number') return String(val);
  if (val instanceof Date) return `'${val.toISOString()}'`;
  if (typeof val === 'object') {
    return `'${JSON.stringify(val).replace(/'/g, "''")}'`;
  }
  return `'${String(val).replace(/'/g, "''")}'`;
}

async function main() {
  const client = await pool.connect();
  const lines = [];

  lines.push('-- DramaMatch Pageviews + Users Export');
  lines.push(`-- Generated: ${new Date().toISOString()}`);
  lines.push('-- Import: psql $DATABASE_URL < dramamatch_data_export_pageviews.sql');
  lines.push('');

  try {
    // --- Users table: CREATE TABLE (0 rows in source, schema only) ---
    lines.push('-- ============================================================');
    lines.push('-- Table: users (schema only — 0 rows in source)');
    lines.push('-- ============================================================');
    lines.push('CREATE TABLE IF NOT EXISTS users (');
    lines.push('  id SERIAL PRIMARY KEY,');
    lines.push('  email VARCHAR NOT NULL,');
    lines.push('  name VARCHAR,');
    lines.push('  password_hash VARCHAR,');
    lines.push('  created_at TIMESTAMPTZ DEFAULT NOW(),');
    lines.push('  updated_at TIMESTAMPTZ DEFAULT NOW(),');
    lines.push('  stripe_subscription_id VARCHAR,');
    lines.push('  subscription_status VARCHAR,');
    lines.push('  subscription_plan VARCHAR,');
    lines.push('  subscription_expires_at TIMESTAMPTZ,');
    lines.push('  subscription_updated_at TIMESTAMPTZ');
    lines.push(');');
    lines.push('');

    // --- Pageviews table: CREATE TABLE + INSERT data ---
    lines.push('-- ============================================================');
    lines.push('-- Table: pageviews (full data export)');
    lines.push('-- ============================================================');
    lines.push('CREATE TABLE IF NOT EXISTS pageviews (');
    lines.push('  id SERIAL PRIMARY KEY,');
    lines.push('  page VARCHAR NOT NULL,');
    lines.push('  referrer_raw VARCHAR,');
    lines.push('  referrer_source VARCHAR,');
    lines.push('  utm_source VARCHAR,');
    lines.push('  utm_medium VARCHAR,');
    lines.push('  utm_campaign VARCHAR,');
    lines.push('  ip_hash VARCHAR,');
    lines.push('  user_agent VARCHAR,');
    lines.push('  created_at TIMESTAMPTZ DEFAULT NOW()');
    lines.push(');');
    lines.push('');

    // Get columns
    const colRes = await client.query(
      `SELECT column_name FROM information_schema.columns
       WHERE table_schema = 'public' AND table_name = 'pageviews'
       ORDER BY ordinal_position`
    );
    const columns = colRes.rows.map(r => r.column_name);
    const colList = columns.map(c => `"${c}"`).join(', ');

    let offset = 0;
    let totalRows = 0;

    while (true) {
      const res = await client.query(
        `SELECT * FROM pageviews ORDER BY id LIMIT $1 OFFSET $2`,
        [BATCH_SIZE, offset]
      );
      if (res.rows.length === 0) break;

      for (const row of res.rows) {
        const vals = columns.map(c => escapeValue(row[c])).join(', ');
        lines.push(`INSERT INTO "pageviews" (${colList}) VALUES (${vals});`);
      }

      totalRows += res.rows.length;
      offset += res.rows.length;
      if (res.rows.length < BATCH_SIZE) break;
    }

    // Reset sequence
    if (totalRows > 0) {
      lines.push('');
      lines.push(`SELECT setval(pg_get_serial_sequence('"pageviews"', 'id'), COALESCE((SELECT MAX(id) FROM "pageviews"), 0) + 1, false);`);
    }

    lines.push('');
    console.log(`  ✓ pageviews: ${totalRows} rows`);
    console.log(`  ✓ users: 0 rows (schema only)`);

  } finally {
    client.release();
    await pool.end();
  }

  const sql = lines.join('\n');
  fs.writeFileSync(OUTPUT_PATH, sql, 'utf8');

  const sizeMB = (fs.statSync(OUTPUT_PATH).size / 1024 / 1024).toFixed(2);
  console.log(`\n✓ Exported pageviews → public/dramamatch_data_export_pageviews.sql (${sizeMB} MB)`);
}

main().catch(err => {
  console.error('Pageviews export failed:', err.message);
  process.exit(1);
});
