# DramaMatch

## What this app does
DramaMatch maps Western shows and movies to K-dramas, C-dramas, J-dramas, and anime using genre, theme, trope, tone, setting, and character-type matching. Users search a Western title and get ranked Asian drama recommendations with match scores. 2,110 titles across 8 content types.

## Stack
Node.js 18 / Express.js · PostgreSQL (Neon) · Flat JS file catalog (no MongoDB) · sharp for OG images · Render deployment

## Directory map
- `data/` — Catalog data: recommendation engine + 80+ JS batch files (2,110 titles total)
- `migrations/` — DB migrations run at deploy time via node migrate.js
- `scripts/` — Build/maintenance scripts (catalog export, OG image gen, batch audit tools)
- `services/` — TVmaze poster resolver background service
- `public/` — Static assets (CSS, JS, OG images, fonts, catalog-export.json, dramamatch_data_export.sql)
- `fonts/` — Custom typefaces served locally

## Database
- `users` — User accounts with Stripe subscription fields
- `searches` — Show search analytics (show_id, ip_hash, timestamp)
- `affiliate_clicks` — Streaming platform link clicks
- `match_votes` — Community votes on recommendation quality (agree/too_high/too_low)
- `match_overrides` — Admin score overrides per show pair
- `newsletter_subscribers` — Email list signups
- `pageviews` — Page view analytics with UTM tracking
- `show_comments` — User comments per show slug
- `shared_lists` — Shareable watchlists (JSONB, 16-char ID)
- `_migrations` — Migration tracking (internal)

## External integrations
- **Neon Postgres** — analytics and user data (DATABASE_URL)
- **TMDB CDN** — poster images (static paths in poster-paths.js, no API key required at runtime)
- **TVmaze API** — dynamic poster backfill (background resolver, no key required)
- **Render** — deployment platform (render.yaml, /health endpoint)

## Recent changes
- 2026-05-10: Added internal linking — /drama/:slug pages now show horizontal poster card scroll (6 shows) + detailed cards (3 shows) + "more from these vibes" mood links mapped from show genres (seo.js)
- 2026-05-10: Added pageviews SQL export — scripts/export-pageviews.js exports pageviews data + users schema at build time; served at /dramamatch_data_export_pageviews.sql
- 2026-05-09: Added analytics SQL export — scripts/export-analytics.js generates public/dramamatch_data_export.sql at build time; served at /dramamatch_data_export.sql as forced download (30k rows, ~7.5MB)
- 2026-05-09: Fixed render.yaml — build command now runs migrations + catalog export; added ADMIN_TOKEN auto-generate and env var hints for one-click fork deploys
- 2026-05-08: Added DEPLOY.md — full self-hosted Render deployment guide for migration off Polsia
