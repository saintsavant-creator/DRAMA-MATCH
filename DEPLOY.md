# DramaMatch — Self-Hosted Deployment Guide

Complete instructions to deploy DramaMatch on your own Render account, fully independent of Polsia infrastructure.

---

## What You're Deploying

- **App**: Express.js web server (Node.js 18+)
- **Database**: PostgreSQL (Neon free tier or Render native Postgres)
- **Catalog**: 2,110 titles stored as flat JS files in `data/` — **no MongoDB needed**
- **Analytics**: 7 PostgreSQL tables tracking searches, clicks, votes, comments, etc.

The catalog ships with the code. No database needed for recommendations — Postgres is analytics-only.

---

## Step 1: Prerequisites

1. Create a [Render account](https://render.com) (free tier works)
2. Fork or push this repository to your GitHub account
3. Have your `dramamatch_analytics_backup.sql` ready if you want to restore analytics data

---

## Step 2: Set Up PostgreSQL

### Option A — Render Native Postgres (Recommended for simplicity)

1. In Render dashboard → **New → PostgreSQL**
2. Name: `dramamatch-db`
3. Plan: **Free** (1GB, sufficient for analytics)
4. Region: Oregon (US West) or your preferred region
5. Click **Create Database**
6. Copy the **Internal Database URL** (use this for same-region deployments)

### Option B — Neon PostgreSQL (Recommended for free-tier longevity)

1. Sign up at [neon.tech](https://neon.tech)
2. Create a new project: `dramamatch`
3. Copy the connection string from the dashboard
4. Format: `REDACTED/neondb?sslmode=require`

---

## Step 3: Deploy the Web Service

The repo includes a `render.yaml` — Render will auto-detect it when you connect the repo and pre-fill all settings. You can also configure manually:

1. In Render dashboard → **New → Web Service**
2. Connect your GitHub repo
3. Configure:
   - **Name**: `dramamatch`
   - **Runtime**: Node
   - **Build Command**: `npm install && npm run build`
   - **Start Command**: `npm start`
   - **Plan**: Free (or Starter for no spin-down)

4. Under **Environment Variables**, add:

| Variable | Value | Required |
|----------|-------|----------|
| `NODE_ENV` | `production` | Yes |
| `DATABASE_URL` | Your Postgres connection string | Yes |
| `ADMIN_TOKEN` | A secret random string (32+ chars) | Yes |
| `BASE_URL` | `https://dramamatch.app` (or your domain) | Recommended |
| `PORT` | Leave blank (Render sets this automatically) | No |

**Generate a secure ADMIN_TOKEN:**
```bash
node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"
```

5. Click **Create Web Service**

The first deploy runs migrations automatically (`npm run build` → `node migrate.js`).

---

## Step 4: Restore Analytics Data (Optional)

If you have `dramamatch_analytics_backup.sql`, restore it after the service is live.

### Using Neon

```bash
# Install psql if needed: brew install postgresql
psql "REDACTED/neondb?sslmode=require" \
  -f ~/Desktop/dramamatch_analytics_backup.sql
```

### Using Render Postgres

```bash
# Get connection string from Render dashboard → your database → Connect
psql "REDACTED/dramamatch_db" \
  -f ~/Desktop/dramamatch_analytics_backup.sql
```

**Note**: Migrations already created the tables. If the backup includes `CREATE TABLE` statements, you may need to drop tables first or use `--no-owner --no-acl` flags:

```bash
psql "YOUR_DATABASE_URL" \
  --no-owner \
  -f ~/Desktop/dramamatch_analytics_backup.sql
```

---

## Step 5: Set Up Custom Domain (dramamatch.app)

### On Render

1. Go to your web service → **Settings → Custom Domains**
2. Click **Add Custom Domain**
3. Enter `dramamatch.app` and `www.dramamatch.app`
4. Copy the verification values Render provides

### On Cloudflare (current DNS provider)

1. Log into Cloudflare → select `dramamatch.app` zone
2. Update DNS records:

| Type | Name | Value | Proxy |
|------|------|-------|-------|
| `A` | `@` | Render's IP (from dashboard) | ☁️ Proxied |
| `CNAME` | `www` | `your-service.onrender.com` | ☁️ Proxied |

3. Wait for SSL provisioning (~2 minutes on Render)

**Important**: Update the `BASE_URL` env var on Render to match your live domain before switching DNS. The server uses this for sitemap generation and SEO pings.

---

## Step 6: Verify Deployment

Once deployed, confirm these endpoints work:

```bash
# Health check
curl https://your-service.onrender.com/health
# Expected: {"status":"healthy"}

# Catalog export (confirms data/ files loaded)
curl -I https://your-service.onrender.com/catalog-export.json
# Expected: HTTP/2 200

# Homepage
curl -I https://your-service.onrender.com/
# Expected: HTTP/2 200
```

---

## About the Catalog (No MongoDB Needed)

The catalog is **file-based** — 2,110 titles live in `data/*.js` files and are loaded at startup. The `dramamatch-catalog.json` export on your Desktop is a snapshot of this data.

**You have two options:**

### Option A — Keep flat files (Recommended, zero infra)
Nothing to do. The catalog is already in the repo and loads automatically.

### Option B — Import to MongoDB (if you want a hosted catalog DB)

If you want to migrate to MongoDB Atlas (e.g., for dynamic catalog updates):

1. Create a free cluster at [mongodb.com/cloud/atlas](https://www.mongodb.com/cloud/atlas)
2. Import the catalog JSON:

```bash
# Install mongoimport: https://www.mongodb.com/docs/database-tools/
mongoimport \
  --uri "REDACTED/dramamatch" \
  --collection shows \
  --file ~/Desktop/dramamatch-catalog.json \
  --jsonArray \
  --drop
```

3. This would require modifying `data/recommendation-engine.js` to query MongoDB instead of loading flat files — significant code change, not recommended unless you plan active catalog management.

**Verdict**: Keep flat files unless you need real-time catalog edits without redeploying.

---

## Environment Variables Reference

| Variable | Purpose | Required |
|----------|---------|----------|
| `DATABASE_URL` | PostgreSQL connection string (analytics/users) | Yes |
| `NODE_ENV` | Set to `production` | Yes |
| `ADMIN_TOKEN` | Protects `/api/admin/*` endpoints (score overrides, etc.) | Strongly recommended |
| `BASE_URL` | Canonical domain for sitemap/SEO (`https://dramamatch.app`) | Recommended |
| `PORT` | HTTP port — Render sets this automatically | No (auto) |

**Removed Polsia-specific vars** (no longer needed after migration):
- `POLSIA_ANALYTICS_SLUG` — Polsia tracking snippet (remove from code if desired, or leave — it degrades gracefully to empty string)
- `OPENAI_BASE_URL` / `OPENAI_API_KEY` / `POLSIA_API_*` — Only used by build scripts for OG image generation, not runtime

---

## Database Schema

The app creates these tables automatically on first deploy:

| Table | Purpose |
|-------|---------|
| `users` | User accounts (Stripe subscription sync) |
| `searches` | Show search analytics |
| `affiliate_clicks` | Streaming link clicks (Netflix, Viki, etc.) |
| `match_votes` | Community votes on recommendation quality |
| `match_overrides` | Admin score overrides |
| `newsletter_subscribers` | Email list |
| `pageviews` | Page view analytics |
| `show_comments` | User comments on show pages |
| `shared_lists` | Shareable watchlists |
| `_migrations` | Migration tracking (internal) |

---

## Build Process

```
npm install              # Install dependencies
npm run migrate          # Run DB migrations (auto on deploy)
npm run export:catalog   # Regenerate /catalog-export.json from flat files
npm run gen:og           # Generate OG image (optional, skipped if sharp fails)
npm start                # Start Express server
```

Render runs `npm install && npm run build` then `npm start` on every deploy.

---

## Troubleshooting

**App not starting**: Check Render logs. Common cause: `DATABASE_URL` not set.

**Migrations failing**: Confirm `DATABASE_URL` is the correct format. Neon URLs require `?sslmode=require`.

**Catalog not loading**: The `data/recommendation-engine.js` loads all batch files at startup. If any file has a syntax error, startup fails — check logs for the specific file.

**ADMIN_TOKEN 401 errors**: Any request to `/api/admin/*` without `?token=YOUR_ADMIN_TOKEN` returns 401. This is correct behavior.

**OG images missing**: If `sharp` fails during build (e.g., wrong Node version), the app falls back gracefully. Pre-generated images in `public/og/` are used. Not a runtime issue.

---

## Removing Polsia References

The app has two Polsia-specific behaviors you may want to clean up:

1. **Analytics tracking snippet** (lines ~3641, ~3672 in `server.js`): Injects a `<script>` tag if `POLSIA_ANALYTICS_SLUG` is set. Just don't set that env var — it degrades to empty string automatically.

2. **Redirect rule** (lines ~58-61 in `server.js`): Redirects `dramamatch.polsia.app` → `dramamatch.app`. Harmless to leave; it only fires if the `polsia.app` subdomain is hit.

No code changes required. Both degrade gracefully with no env var set.

---

## Summary Checklist

- [ ] Repo pushed to your GitHub account
- [ ] PostgreSQL created (Neon or Render native)
- [ ] `DATABASE_URL` set in Render env vars
- [ ] `ADMIN_TOKEN` generated and set
- [ ] `BASE_URL` set to your domain
- [ ] Render web service created and deployed
- [ ] `/health` returns `{"status":"healthy"}`
- [ ] Analytics backup restored (optional)
- [ ] DNS switched to Render (optional)
- [ ] SSL verified on custom domain (optional)
