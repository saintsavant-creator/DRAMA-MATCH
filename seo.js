/**
 * DramaMatch SEO — Server-rendered pages for search engine & AI discoverability
 *
 * Generates fully crawlable HTML for:
 *   /drama/:id         — K-drama detail pages (TVSeries schema)
 *   /match/:sourceId   — "K-dramas like X" pages (ItemList schema)
 *   /mood/:moodId      — Mood category pages (ItemList schema)
 *
 * All pages include: JSON-LD, Open Graph, Twitter Card, canonical URL
 */

'use strict';

const BASE_URL = process.env.BASE_URL || 'https://dramamatch.app';

const { getPosterUrl } = require('./data/poster-paths');

/** Escape HTML entities */
function esc(str) {
  if (!str) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

/** Slugify a name for URL use */
function slugify(str) {
  return String(str).toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
}

/** Platform display config (name + affiliate URL builder) */
const PLATFORMS = {
  amazon_prime: { name: 'Prime Video', color: '#00A8E1', bgColor: 'rgba(0,168,225,0.18)', borderColor: 'rgba(0,168,225,0.4)', buildUrl: (t) => `https://www.amazon.com/s?k=${encodeURIComponent(t)}&i=instant-video&tag=${process.env.AMAZON_AFFILIATE_TAG || 'dramamatch20-20'}` },
  netflix:      { name: 'Netflix',     color: '#ff4757', bgColor: 'rgba(229,9,20,0.15)',   borderColor: 'rgba(229,9,20,0.35)',   buildUrl: (t) => `https://www.netflix.com/search?q=${encodeURIComponent(t)}` },
  viki:         { name: 'Viki',        color: '#1ac4ff', bgColor: 'rgba(26,159,217,0.15)', borderColor: 'rgba(26,159,217,0.35)', buildUrl: (t) => `https://www.viki.com/search?q=${encodeURIComponent(t)}` },
  kocowa:       { name: 'Kocowa',      color: '#ff8c57', bgColor: 'rgba(255,107,53,0.15)', borderColor: 'rgba(255,107,53,0.35)', buildUrl: (t) => `https://www.kocowa.com/en_us/search?keyword=${encodeURIComponent(t)}` },
  disney_plus:  { name: 'Disney+',     color: '#4da3ff', bgColor: 'rgba(0,99,229,0.15)',   borderColor: 'rgba(0,99,229,0.35)',   buildUrl: (t) => `https://www.disneyplus.com/search/${encodeURIComponent(t)}` },
  hulu:         { name: 'Hulu',        color: '#1ce783', bgColor: 'rgba(28,231,131,0.15)', borderColor: 'rgba(28,231,131,0.35)', buildUrl: (t) => `https://www.hulu.com/search?q=${encodeURIComponent(t)}` },
  apple_tv:     { name: 'Apple TV+',   color: '#c8cdd0', bgColor: 'rgba(162,170,173,0.12)',borderColor: 'rgba(162,170,173,0.3)', buildUrl: (t) => `https://tv.apple.com/search?term=${encodeURIComponent(t)}` },
  paramount:    { name: 'Paramount+',  color: '#4d80ff', bgColor: 'rgba(0,100,255,0.15)',  borderColor: 'rgba(0,100,255,0.35)',  buildUrl: (t) => `https://www.paramountplus.com/search/${encodeURIComponent(t)}/` },
  crunchyroll:  { name: 'Crunchyroll', color: '#F47521', bgColor: 'rgba(244,117,33,0.15)', borderColor: 'rgba(244,117,33,0.35)', buildUrl: (t) => `https://www.crunchyroll.com/search?q=${encodeURIComponent(t)}` }
};

/** Priority order: revenue-first */
const PLATFORM_ORDER = ['amazon_prime', 'netflix', 'crunchyroll', 'viki', 'kocowa', 'disney_plus', 'hulu', 'apple_tv', 'paramount'];

/** Solid CTA background colors per platform (high-contrast, brand-appropriate) */
const PLATFORM_CTA = {
  amazon_prime: { bg: '#0094C6', text: '#fff' },
  netflix:      { bg: '#C40A16', text: '#fff' },
  crunchyroll:  { bg: '#D96315', text: '#fff' },
  viki:         { bg: '#0D8EBF', text: '#fff' },
  kocowa:       { bg: '#D94A1D', text: '#fff' },
  disney_plus:  { bg: '#0B2FA8', text: '#fff' },
  hulu:         { bg: '#0A7A44', text: '#fff' },
  apple_tv:     { bg: '#1D1D1F', text: '#fff' },
  paramount:    { bg: '#0058D6', text: '#fff' }
};

/** Build plain streaming platform badges (for metadata rows) */
function streamingBadges(streaming) {
  if (!streaming) return '';
  return PLATFORM_ORDER
    .filter(k => streaming[k])
    .map(k => `<span class="badge platform">${esc(PLATFORMS[k] ? PLATFORMS[k].name : k)}</span>`)
    .join(' ');
}

/** Build clickable affiliate "Watch on [Platform] →" CTA buttons */
function watchNowButtons(streaming, showId, showTitle) {
  if (!streaming || !showId) return '';
  const buttons = PLATFORM_ORDER.filter(k => streaming[k]);
  if (buttons.length === 0) return '';
  return buttons.map((k, i) => {
    const p = PLATFORMS[k];
    if (!p) return '';
    const url = `/api/affiliate/go/${k}/${encodeURIComponent(showId)}`;
    const cta = PLATFORM_CTA[k] || { bg: p.bgColor, text: p.color };
    const isPrimary = i === 0;
    return `<a href="${url}" target="_blank" rel="noopener noreferrer" class="watch-btn${isPrimary ? ' watch-btn-primary' : ''}" style="background:${cta.bg};color:${cta.text}" title="Watch ${esc(showTitle || showId)} on ${p.name}"><span>Watch on ${p.name}</span><span class="watch-btn-arrow">→</span></a>`;
  }).join('');
}

/** Build FAQPage JSON-LD schema from array of {q, a} objects */
function buildFaqSchema(faqs) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    'mainEntity': faqs.map(faq => ({
      '@type': 'Question',
      'name': faq.q,
      'acceptedAnswer': { '@type': 'Answer', 'text': faq.a }
    }))
  };
}

/** Render an accessible accordion FAQ section */
function faqAccordionHtml(faqs, heading) {
  if (!faqs || !faqs.length) return '';
  const h = heading || 'Frequently Asked Questions';
  const items = faqs.map(faq => `
    <details class="faq-item">
      <summary class="faq-q">${esc(faq.q)}</summary>
      <div class="faq-a"><p>${faq.a}</p></div>
    </details>`).join('\n');
  return `
  <section class="faq-section">
    <h2 class="faq-heading">${esc(h)}</h2>
    <div class="faq-list">${items}
    </div>
  </section>`;
}

/** Build BreadcrumbList JSON-LD from trail array [{name, url}] */
function breadcrumbSchema(trail) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    'itemListElement': [
      { '@type': 'ListItem', 'position': 1, 'name': 'DramaMatch', 'item': BASE_URL },
      ...trail.map((crumb, i) => ({
        '@type': 'ListItem',
        'position': i + 2,
        'name': crumb.name,
        'item': crumb.url
      }))
    ]
  };
}

/** Organization schema — injected into every server-rendered page */
const ORGANIZATION_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  'name': 'DramaMatch',
  'url': BASE_URL,
  'logo': { '@type': 'ImageObject', 'url': `${BASE_URL}/og-default.png`, 'width': 1200, 'height': 628 },
  'description': 'Asian drama recommendation engine that maps Western TV shows to K-dramas, C-dramas, and J-dramas using story DNA matching.',
  'sameAs': [
    'https://twitter.com/dramamatch'
  ]
};

/** Shared page shell with common CSS */
function pageShell({ title, description, canonical, ogImage, jsonLd, bodyContent, breadcrumbs, breadcrumbTrail, pageType, dramaTitle }) {
  const ogImg = ogImage || `${BASE_URL}/og-default.png`;
  // Support single schema or array; optionally inject BreadcrumbList + Organization
  const schemas = Array.isArray(jsonLd) ? jsonLd : [jsonLd];
  if (breadcrumbTrail && breadcrumbTrail.length) {
    schemas.push(breadcrumbSchema(breadcrumbTrail));
  }
  // Add Organization schema to every page for AI/search crawler context
  schemas.push(ORGANIZATION_SCHEMA);
  const schemaJson = schemas.length === 1
    ? JSON.stringify(schemas[0], null, 2)
    : JSON.stringify(schemas, null, 2);

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${esc(title)}</title>
  <meta name="description" content="${esc(description)}">
  <link rel="canonical" href="${esc(canonical)}">

  <!-- Favicon -->
  <link rel="icon" type="image/svg+xml" href="/favicon.svg">
  <link rel="alternate icon" href="/favicon.ico">

  <!-- Open Graph -->
  <meta property="og:type" content="website">
  <meta property="og:url" content="${esc(canonical)}">
  <meta property="og:title" content="${esc(title)}">
  <meta property="og:description" content="${esc(description)}">
  <meta property="og:image" content="${esc(ogImg)}">
  <meta property="og:image:width" content="1200">
  <meta property="og:image:height" content="630">
  <meta property="og:image:type" content="image/png">
  <meta property="og:site_name" content="DramaMatch">

  <!-- Twitter Card -->
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:site" content="@dramamatch">
  <meta name="twitter:title" content="${esc(title)}">
  <meta name="twitter:description" content="${esc(description)}">
  <meta name="twitter:image" content="${esc(ogImg)}">
  <meta name="twitter:image:width" content="1200">
  <meta name="twitter:image:height" content="630">

  <!-- JSON-LD Structured Data -->
  <script type="application/ld+json">
${schemaJson}
  </script>

  <!-- Robots -->
  <meta name="robots" content="index, follow">

  <!-- Google Search Console Verification -->
  <meta name="google-site-verification" content="kKg0NGN-xvsiacmjcUKSRTWdhIOsN0U-R5P_yZw_doI" />

  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    :root {
      --bg: #0a0a0f; --bg-card: #13131a; --bg-accent: #1a1a24;
      --coral: #e8614d; --gold: #d4a853; --green: #4ade80;
      --text: #f0ece4; --text-2: #9a9690; --text-3: #5a5750;
      --border: #2a2a35;
    }
    body { font-family: 'Inter', 'DM Sans', 'Segoe UI', sans-serif; background: #060608; color: var(--text); line-height: 1.6; }
    a { color: var(--coral); text-decoration: none; }
    a:hover { text-decoration: underline; }

    .topbar { padding: 16px 24px; border-bottom: 1px solid var(--border); display: flex; align-items: center; gap: 16px; }
    .topbar .logo { font-weight: 700; font-size: 1.1rem; color: var(--text); }
    .topbar .logo span { color: var(--coral); }
    .topbar nav { display: flex; gap: 20px; font-size: 0.875rem; color: var(--text-2); flex-wrap: wrap; }
    .topbar nav a { color: var(--text-2); }
    .topbar nav a:hover { color: var(--text); text-decoration: none; }
    /* Watchlist link stands out in coral */
    .topbar nav a.nav-watchlist { color: var(--coral); }

    .container { max-width: 900px; margin: 0 auto; padding: 0 24px; }

    .breadcrumb { padding: 16px 0; font-size: 0.8rem; color: var(--text-3); }
    .breadcrumb a { color: var(--text-3); }
    .breadcrumb span { margin: 0 6px; }

    .hero-section { padding: 48px 0 32px; border-bottom: 1px solid var(--border); margin-bottom: 40px; }
    .hero-section h1 { font-size: 2rem; font-weight: 700; line-height: 1.25; margin-bottom: 12px; }
    .hero-section .subtitle { color: var(--text-2); font-size: 1.05rem; max-width: 640px; }

    .meta-row { display: flex; flex-wrap: wrap; gap: 8px; margin-top: 16px; align-items: center; }
    .badge { background: var(--bg-card); border: 1px solid var(--border); border-radius: 6px; padding: 3px 10px; font-size: 0.78rem; color: var(--text-2); }
    .badge.genre { color: var(--gold); border-color: rgba(212,168,83,0.3); background: rgba(212,168,83,0.08); }
    .badge.year { color: var(--text-2); }
    .badge.network { color: var(--green); border-color: rgba(74,222,128,0.3); background: rgba(74,222,128,0.08); }
    .badge.platform { color: #60a5fa; border-color: rgba(96,165,250,0.3); background: rgba(96,165,250,0.08); }
    .badge.trope { color: #c084fc; border-color: rgba(192,132,252,0.25); background: rgba(192,132,252,0.06); }

    .section-title { font-size: 1.1rem; font-weight: 600; margin-bottom: 20px; color: var(--text-2); text-transform: uppercase; letter-spacing: 0.05em; font-size: 0.8rem; }

    .card-grid { display: grid; gap: 16px; }
    .drama-card { background: var(--bg-card); border: 1px solid var(--border); border-radius: 12px; padding: 20px 24px; transition: border-color 0.2s; }
    .drama-card:hover { border-color: rgba(232,97,77,0.4); }
    .drama-card .card-top { display: flex; justify-content: space-between; align-items: flex-start; gap: 12px; margin-bottom: 8px; }
    .drama-card h2 { font-size: 1.1rem; font-weight: 600; }
    .drama-card h2 a { color: var(--text); }
    .drama-card h2 a:hover { color: var(--coral); text-decoration: none; }
    .drama-card .match-score { font-size: 1.25rem; font-weight: 700; color: var(--coral); white-space: nowrap; }
    .drama-card .synopsis { color: var(--text-2); font-size: 0.9rem; margin: 8px 0; }
    .drama-card .reasoning { color: var(--text-2); font-size: 0.85rem; font-style: italic; margin-top: 8px; padding-top: 8px; border-top: 1px solid var(--border); }
    .vibe-meter-section { margin:10px 0 4px; padding:8px 10px; background:rgba(255,255,255,0.02); border-radius:8px; border:1px solid var(--border); }
    .vibe-meter-title { font-size:0.59rem; font-weight:700; text-transform:uppercase; letter-spacing:0.1em; color:var(--text-3); margin-bottom:7px; }
    .vibe-meter-row { display:flex; align-items:center; gap:6px; margin-bottom:5px; }
    .vibe-meter-row:last-child { margin-bottom:0; }
    .vibe-lbl { font-size:0.62rem; color:var(--text-2); white-space:nowrap; width:60px; }
    .vibe-lbl-l { text-align:right; }
    .vibe-lbl-r { text-align:left; }
    .vibe-track { flex:1; height:4px; border-radius:2px; position:relative; overflow:visible; }
    .vibe-dot { position:absolute; top:50%; transform:translate(-50%,-50%); width:9px; height:9px; border-radius:50%; background:var(--bg-card); border:2px solid rgba(240,236,228,0.8); box-shadow:0 0 5px rgba(0,0,0,0.6); }

    .actors-list { display: flex; flex-wrap: wrap; gap: 8px; margin-top: 8px; }
    .actor-chip { font-size: 0.78rem; color: var(--text-3); background: var(--bg-accent); border-radius: 4px; padding: 2px 8px; }

    .synopsis-section { background: var(--bg-card); border: 1px solid var(--border); border-radius: 12px; padding: 24px; margin-bottom: 32px; }
    .synopsis-section p { color: var(--text-2); line-height: 1.7; }

    .tags-section { margin-bottom: 32px; }
    .tag-group { margin-bottom: 16px; }
    .tag-group label { font-size: 0.75rem; font-weight: 600; text-transform: uppercase; letter-spacing: 0.06em; color: var(--text-3); display: block; margin-bottom: 6px; }
    .tag-list { display: flex; flex-wrap: wrap; gap: 6px; }
    .tag { background: var(--bg-accent); border: 1px solid var(--border); border-radius: 20px; padding: 3px 12px; font-size: 0.8rem; color: var(--text-2); }

    .cta-section { text-align: center; padding: 48px 0; border-top: 1px solid var(--border); margin-top: 40px; }
    .cta-section p { color: var(--text-2); margin-bottom: 20px; }
    .btn-primary { display: inline-block; background: var(--coral); color: white; font-weight: 600; padding: 12px 28px; border-radius: 8px; font-size: 0.95rem; }
    .btn-primary:hover { background: #ff7b6a; text-decoration: none; }

    .watch-now-section { margin-top: 18px; background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.1); border-radius: 14px; padding: 16px 18px; }
    .watch-now-label { font-size: 0.72rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.1em; color: rgba(255,255,255,0.4); margin-bottom: 12px; }
    .watch-now-buttons { display: flex; flex-direction: column; gap: 9px; }
    .watch-btn { display: flex; align-items: center; justify-content: space-between; padding: 13px 18px; border-radius: 10px; font-size: 0.88rem; font-weight: 700; text-decoration: none; border: none; transition: filter 0.15s, transform 0.15s, box-shadow 0.15s; width: 100%; box-sizing: border-box; }
    .watch-btn:hover { filter: brightness(1.1); transform: translateY(-2px); box-shadow: 0 6px 18px rgba(0,0,0,0.35); text-decoration: none; }
    .watch-btn:active { transform: translateY(0); }
    .watch-btn-primary { padding: 15px 20px; font-size: 0.95rem; }
    .watch-btn-arrow { font-size: 1.1rem; opacity: 0.85; }

    .related-section { padding: 32px 0; border-top: 1px solid var(--border); }
    .related-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)); gap: 12px; margin-top: 16px; }
    .related-card { background: var(--bg-card); border: 1px solid var(--border); border-radius: 8px; padding: 14px 16px; font-size: 0.875rem; }
    .related-card a { color: var(--text); font-weight: 500; }
    .related-card .year { color: var(--text-3); font-size: 0.78rem; margin-top: 2px; }

    footer { border-top: 1px solid var(--border); padding: 32px 0; margin-top: 48px; text-align: center; color: var(--text-3); font-size: 0.85rem; }
    footer a { color: var(--text-3); }

    /* FAQ accordion */
    .faq-section { border-top: 1px solid var(--border); padding: 40px 0; margin-top: 8px; }
    .faq-heading { font-size: 1.25rem; font-weight: 700; margin-bottom: 24px; }
    .faq-list { display: grid; gap: 16px; }
    .faq-item { background: var(--bg-card); border: 1px solid var(--border); border-radius: 10px; overflow: hidden; transition: border-color 0.2s; }
    .faq-item[open] { border-color: rgba(232,97,77,0.35); }
    .faq-q { list-style: none; padding: 18px 20px; font-size: 0.95rem; font-weight: 600; cursor: pointer; display: flex; justify-content: space-between; align-items: center; color: var(--text); user-select: none; }
    .faq-q::-webkit-details-marker { display: none; }
    .faq-q::after { content: '+'; font-size: 1.2rem; color: var(--coral); transition: transform 0.2s; flex-shrink: 0; margin-left: 12px; }
    .faq-item[open] .faq-q::after { content: '−'; }
    .faq-a { padding: 18px 20px; color: var(--text-2); font-size: 0.9rem; line-height: 1.75; border-top: 1px solid var(--border); }
    .faq-a a { color: var(--coral); }

    /* ── Comparison page styles ── */
    .comparison-hero { text-align: center; }
    .comparison-hero .meta-row { justify-content: center; }
    .comparison-card .card-top { align-items: center; }
    .comparison-card .pick-number { font-size: 0.7rem; font-weight: 700; color: var(--coral); background: rgba(232,97,77,0.12); border: 1px solid rgba(232,97,77,0.3); border-radius: 6px; padding: 2px 8px; flex-shrink: 0; letter-spacing: 0.04em; }
    .comparison-card .match-score { font-size: 1rem; }
    .why-love { background: rgba(212,168,83,0.06); border: 1px solid rgba(212,168,83,0.2); border-radius: 8px; padding: 12px 16px; margin: 10px 0; }
    .why-love-label { font-size: 0.78rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.08em; color: var(--gold); margin-bottom: 6px; }
    .why-love p { color: var(--text-2); font-size: 0.88rem; line-height: 1.6; margin: 0; }
    .related-pages-section { border-top: 1px solid var(--border); padding-top: 32px; margin: 32px 0; }
    .related-pages-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(220px, 1fr)); gap: 10px; margin-top: 16px; }
    .related-page-link { display: flex; justify-content: space-between; align-items: center; background: var(--bg-card); border: 1px solid var(--border); border-radius: 8px; padding: 14px 16px; text-decoration: none; transition: border-color 0.2s; }
    .related-page-link:hover { border-color: rgba(232,97,77,0.4); text-decoration: none; }
    .related-page-title { font-weight: 500; color: var(--text); font-size: 0.875rem; }
    .related-page-arrow { color: var(--coral); font-size: 1rem; }

    /* ── Drama detail page — hero with poster ── */
    .drama-hero { display:flex; align-items:flex-start; gap:28px; }
    .drama-hero-info { flex:1; min-width:0; }
    .drama-hero-poster { width:120px; height:auto; max-height:180px; border-radius:8px; object-fit:cover; flex-shrink:0; box-shadow:0 8px 24px rgba(0,0,0,0.5); border:1px solid var(--border); }

    @media (max-width: 640px) {
      .drama-hero { flex-direction:column-reverse; align-items:flex-start; }
      .drama-hero-poster { width:90px; }
      .hero-section h1 { font-size: 1.5rem; }
      .hero-section { padding: 32px 0 24px; margin-bottom: 28px; }
      .hero-section .subtitle { font-size: 0.95rem; }
      .container { padding: 0 16px; }
      .related-pages-grid { grid-template-columns: 1fr; }
      .drama-card { padding: 16px; }
      .cta-section { padding: 32px 0; }
      /* Trim nav to essentials on small screens */
      .topbar { padding: 11px 16px; gap: 8px; }
      .topbar nav { gap: 10px; font-size: 0.82rem; }
      .topbar nav a:nth-child(n+3) { display: none; }
    }

    /* ── Email Capture Modal (SEO pages) ── */
    #seo-em-overlay { display:none; position:fixed; inset:0; background:rgba(0,0,0,0.75); z-index:9999; align-items:center; justify-content:center; padding:1rem; backdrop-filter:blur(4px); }
    #seo-em-overlay.open { display:flex; }
    #seo-em-card { background:var(--bg-card,#13131a); border:1px solid var(--border,#2a2a35); border-radius:20px; padding:2rem; max-width:420px; width:100%; position:relative; box-shadow:0 24px 64px rgba(0,0,0,0.6); animation:seoEmUp 0.3s ease; }
    @keyframes seoEmUp { from{opacity:0;transform:translateY(24px)} to{opacity:1;transform:translateY(0)} }
    #seo-em-card .em-eyebrow { font-size:0.7rem; font-weight:700; letter-spacing:0.12em; text-transform:uppercase; color:var(--coral,#e8614d); margin-bottom:0.6rem; }
    #seo-em-card h2 { font-size:1.35rem; font-weight:700; line-height:1.3; color:var(--text,#f0ece4); margin:0 0 0.5rem; }
    #seo-em-card .em-sub { font-size:0.88rem; color:var(--text-2,#9a9690); margin-bottom:1.4rem; line-height:1.5; }
    #seo-em-form { display:flex; gap:0.5rem; flex-wrap:wrap; }
    #seo-em-input { flex:1 1 200px; background:var(--bg-accent,#1a1a24); border:1px solid var(--border,#2a2a35); border-radius:8px; padding:10px 14px; font-size:0.9rem; color:var(--text,#f0ece4); outline:none; transition:border-color 0.2s; min-width:0; }
    #seo-em-input:focus { border-color:var(--coral,#e8614d); }
    #seo-em-submit { flex-shrink:0; background:linear-gradient(135deg,#e8614d 0%,#d44a3a 100%); color:#fff; border:none; border-radius:8px; padding:10px 18px; font-size:0.9rem; font-weight:700; cursor:pointer; white-space:nowrap; transition:opacity 0.2s; }
    #seo-em-submit:hover { opacity:0.9; }
    #seo-em-submit:disabled { opacity:0.6; cursor:default; }
    #seo-em-msg { margin-top:0.7rem; font-size:0.85rem; min-height:1.2em; }
    #seo-em-msg.success { color:#4ade80; }
    #seo-em-msg.error { color:#ff6b6b; }
    #seo-em-dismiss { display:block; margin-top:1rem; text-align:center; background:none; border:none; color:var(--text-2,#9a9690); font-size:0.82rem; cursor:pointer; text-decoration:underline; text-underline-offset:3px; }
    #seo-em-close { position:absolute; top:0.85rem; right:0.9rem; background:none; border:none; color:var(--text-2,#9a9690); font-size:1rem; cursor:pointer; padding:0.25rem; line-height:1; transition:color 0.15s; }
    #seo-em-close:hover { color:var(--text-1,#e0dbd6); }
    @media (max-width:600px) {
      #seo-em-overlay { align-items:flex-end; padding:0; }
      #seo-em-card { border-radius:20px 20px 0 0; max-width:100%; padding:1.5rem 1.25rem 2rem; animation:seoMobileUp 0.35s cubic-bezier(0.32,0.72,0,1); }
      @keyframes seoMobileUp { from{transform:translateY(100%)} to{transform:translateY(0)} }
      #seo-em-card h2 { font-size:1.15rem; }
      #seo-em-form { flex-direction:column; }
      #seo-em-input,#seo-em-submit { width:100%; }
    }
  </style>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link rel="preload" href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=DM+Sans:wght@400;500&display=swap" as="style" onload="this.onload=null;this.rel='stylesheet'">
  <noscript><link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=DM+Sans:wght@400;500&display=swap" rel="stylesheet"></noscript>
  <!-- Meta Pixel Code -->
  <script>
  !function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?
  n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;
  n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;
  t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,
  document,'script','https://connect.facebook.net/en_US/fbevents.js');
  fbq('init', '1686999645661477');
  fbq('track', 'PageView');
  </script>
  <noscript><img height="1" width="1" style="display:none"
  src="https://www.facebook.com/tr?id=1686999645661477&ev=PageView&noscript=1"
  /></noscript>
  <!-- End Meta Pixel Code -->
</head>
<body>

<header class="topbar">
  <a href="/" class="logo">Drama<span>Match</span></a>
  <nav>
    <a href="/watchlist" class="nav-watchlist">♡ Watchlist</a>
    <a href="/">Find Match</a>
    <a href="/mood/epic-romance">Browse Moods</a>
    <a href="/shows-like">Shows Like...</a>
    <a href="/actors">Actor Dives</a>
    <a href="/blog">Blog</a>
  </nav>
</header>

<main class="container">
  ${breadcrumbs ? `<nav class="breadcrumb" aria-label="Breadcrumb">
    <a href="/">Home</a>${breadcrumbs}
  </nav>` : ''}
  ${bodyContent}
</main>

<section style="border-top:1px solid var(--border);padding:40px 0;">
  <div class="container" style="text-align:center;">
    <h3 style="font-size:1.15rem;font-weight:700;margin-bottom:8px;">Get the Asian drama watchlist your friends don't have</h3>
    <p style="color:var(--text-2);font-size:0.88rem;margin-bottom:16px;">Monthly picks — hidden gems, new releases, best matches. No spam.</p>
    <form id="seo-subscribe-form" onsubmit="seoSubscribe(event)" style="display:flex;justify-content:center;gap:8px;flex-wrap:wrap;">
      <input type="email" id="seo-email-input" placeholder="your@email.com" required autocomplete="email"
             style="padding:9px 14px;background:#1a1a24;border:1px solid #2a2a35;border-radius:8px;color:#f0ece4;font-size:0.9rem;width:240px;outline:none;">
      <button type="submit" id="seo-subscribe-btn"
              style="padding:9px 18px;background:linear-gradient(135deg,#d4a853,#e8c060);color:#0a0a0f;border:none;border-radius:8px;font-weight:700;font-size:0.9rem;cursor:pointer;">
        Subscribe →
      </button>
    </form>
    <div id="seo-subscribe-feedback" style="margin-top:10px;font-size:0.82rem;min-height:1.1em;"></div>
  </div>
</section>
<script>
function seoSubscribe(e) {
  e.preventDefault();
  var emailInput = document.getElementById('seo-email-input');
  var btn = document.getElementById('seo-subscribe-btn');
  var feedback = document.getElementById('seo-subscribe-feedback');
  var email = emailInput.value.trim();
  if (!email) return;
  btn.disabled = true; btn.textContent = 'Subscribing...';
  fetch('/api/subscribe', {
    method: 'POST',
    headers: {'Content-Type':'application/json'},
    body: JSON.stringify({email: email, source: 'seo_page'})
  }).then(function(r){ return r.json(); }).then(function(data){
    if (data.success) {
      emailInput.value = '';
      btn.textContent = '✓ Subscribed!';
      feedback.style.color = '#4ade80';
      feedback.textContent = "You're in 🎉 Watch for your first picks soon.";
    } else {
      btn.textContent = '✓ Already in';
      feedback.style.color = '#4ade80';
      feedback.textContent = "Already subscribed — more picks coming.";
    }
    setTimeout(function(){ btn.disabled = false; btn.textContent = 'Subscribe →'; }, 3000);
  }).catch(function(){
    btn.disabled = false; btn.textContent = 'Subscribe →';
    feedback.style.color = '#e8614d';
    feedback.textContent = 'Something went wrong. Please try again.';
  });
}
function inlineSubscribe(e, formId, source) {
  e.preventDefault();
  var input = document.getElementById(formId + '-input');
  var btn   = document.getElementById(formId + '-btn');
  var msg   = document.getElementById(formId + '-msg');
  var succ  = document.getElementById(formId + '-success');
  var form  = document.getElementById(formId + '-form');
  var email = input ? input.value.trim() : '';
  if (!email) return;
  btn.disabled = true; btn.textContent = 'Subscribing...';
  fetch('/api/subscribe', {
    method: 'POST',
    headers: {'Content-Type':'application/json'},
    body: JSON.stringify({email: email, source: source})
  }).then(function(r){ return r.json(); }).then(function(data){
    if (data.success || data.message === 'Already subscribed') {
      try { localStorage.setItem('dm_email_subscribed', '1'); } catch(ex) {}
      if (form) form.style.display = 'none';
      if (succ) { succ.style.display = 'block'; }
    } else {
      btn.disabled = false; btn.textContent = 'Subscribe →';
      if (msg) { msg.style.color = '#ff6b6b'; msg.textContent = 'Something went wrong. Please try again.'; }
    }
  }).catch(function(){
    btn.disabled = false; btn.textContent = 'Subscribe →';
    if (msg) { msg.style.color = '#ff6b6b'; msg.textContent = 'Something went wrong. Please try again.'; }
  });
}
</script>
<footer>
  <div class="container">
    <p>© ${new Date().getFullYear()} DramaMatch — made by an Asian drama fan who just wants everyone to watch Signal 🎬</p>
    <p style="margin-top:8px"><a href="/">Home</a> · <a href="/blog">Blog</a> · <a href="/sitemap.xml">Sitemap</a></p>
  </div>
</footer>
<script src="/track.js" defer></script>
<script>try{var v=parseInt(sessionStorage.getItem('dm_drama_page_visits')||'0',10);sessionStorage.setItem('dm_drama_page_visits',String(v+1));}catch(e){}
// Store last-viewed show so the homepage popup can personalise its headline
try{var _lt=${JSON.stringify(dramaTitle||'')};var _lp=${JSON.stringify(pageType||'')};if(_lt)localStorage.setItem('dm_last_show',JSON.stringify({title:_lt,type:_lp}));}catch(e){}</script>

<!-- Email Capture Modal -->
<div id="seo-em-overlay" role="dialog" aria-modal="true" aria-labelledby="seo-em-heading">
  <div id="seo-em-card">
    <button id="seo-em-close" type="button" aria-label="Close">✕</button>
    <div class="em-eyebrow">✉️ Free Weekly Picks</div>
    <h2 id="seo-em-heading">Get weekly K-drama picks matched to your taste — free</h2>
    <p class="em-sub">Join 1,200+ drama fans — weekly picks curated to your taste. No spam.</p>
    <form id="seo-em-form" novalidate>
      <input id="seo-em-input" type="email" placeholder="your@email.com" autocomplete="email" required>
      <button id="seo-em-submit" type="submit">Subscribe →</button>
    </form>
    <div id="seo-em-msg"></div>
    <button id="seo-em-dismiss" type="button">No thanks, I'll find them myself</button>
  </div>
</div>
<script>
(function() {
  'use strict';
  var DISMISSED_KEY   = 'dm_email_dismissed';
  var SUBSCRIBED_KEY  = 'dm_email_subscribed';
  var SESSION_KEY     = 'dm_popup_session';      // max 1 popup per session across all triggers
  var DISMISS_SOFT_MS = 7  * 24 * 60 * 60 * 1000; // 7 days  — X / backdrop / Escape
  var DISMISS_HARD_MS = 14 * 24 * 60 * 60 * 1000; // 14 days — "No thanks"

  // Injected by server template
  var PAGE_TYPE   = ${JSON.stringify(pageType || 'generic')};
  var DRAMA_TITLE = ${JSON.stringify(dramaTitle || '')};
  var dramaVisits = 0;
  try { dramaVisits = parseInt(sessionStorage.getItem('dm_drama_page_visits') || '0', 10); } catch(e) {}

  function shouldShow() {
    try {
      if (localStorage.getItem(SUBSCRIBED_KEY)) return false;
      var expiry = localStorage.getItem(DISMISSED_KEY);
      if (expiry && Date.now() < parseInt(expiry, 10)) return false;
      if (sessionStorage.getItem(SESSION_KEY)) return false; // session guard
    } catch(e) { return false; }
    return true;
  }

  var overlay = document.getElementById('seo-em-overlay');
  var opened = false;

  function openModal(source) {
    if (!shouldShow() || opened) return;
    opened = true;
    // Set session guard so no other unsolicited popup fires this session
    try { sessionStorage.setItem(SESSION_KEY, '1'); } catch(e) {}
    // Personalise copy based on trigger source and page context
    var heading = document.getElementById('seo-em-heading');
    var sub = overlay.querySelector('.em-sub');
    if (source === 'drama_exit_intent' || source === 'match_exit_intent') {
      if (heading) heading.textContent = 'Before you go \u2014 grab your personalized drama watchlist';
      if (sub) sub.textContent = 'Join 1,200+ drama fans \u2014 weekly picks matched to your taste. No spam, ever.';
    } else if (PAGE_TYPE === 'drama' && dramaVisits >= 3) {
      if (heading) heading.textContent = "You\u2019ve been exploring \u2014 want weekly recommendations like these in your inbox?";
      if (sub) sub.textContent = "Join 1,200+ drama fans \u2014 personalized picks every week. No spam.";
    } else if (PAGE_TYPE === 'drama' && DRAMA_TITLE) {
      if (heading) heading.textContent = 'Love ' + DRAMA_TITLE + '? We\u2019ll email you 5 similar picks every week';
      if (sub) sub.textContent = 'Join 1,200+ drama fans \u2014 weekly picks curated to your taste. No spam.';
    } else if (PAGE_TYPE === 'match') {
      if (heading) heading.textContent = 'Get weekly picks like these in your inbox \u2709\uFE0F';
      if (sub) sub.textContent = 'Join 1,200+ drama fans \u2014 we curate the best Asian drama matches every week. No spam.';
    }
    overlay.classList.add('open');
    overlay.dataset.source = source || 'drama_page';
    var input = document.getElementById('seo-em-input');
    if (input) setTimeout(function() { input.focus(); }, 80);
  }

  // type: 'hard' (No thanks = 14d) | 'soft' (X / backdrop / Escape = 7d) | false = no dismiss
  function closeModal(dismissType) {
    overlay.classList.remove('open');
    if (dismissType) {
      var ttl = dismissType === 'hard' ? DISMISS_HARD_MS : DISMISS_SOFT_MS;
      try { localStorage.setItem(DISMISSED_KEY, String(Date.now() + ttl)); } catch(e) {}
    }
  }

  var dismissBtn = document.getElementById('seo-em-dismiss');
  if (dismissBtn) dismissBtn.addEventListener('click', function() { closeModal('hard'); }); // No thanks = 14d
  var closeBtn = document.getElementById('seo-em-close');
  if (closeBtn) closeBtn.addEventListener('click', function() { closeModal('soft'); }); // X = 7d
  overlay.addEventListener('click', function(e) { if (e.target === overlay) closeModal('soft'); });
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && overlay.classList.contains('open')) closeModal('soft');
  });

  var form = document.getElementById('seo-em-form');
  var msgEl = document.getElementById('seo-em-msg');
  var submitBtn = document.getElementById('seo-em-submit');
  if (form) {
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      var email = (document.getElementById('seo-em-input').value || '').trim();
      if (!email || !email.includes('@')) { msgEl.textContent = 'Please enter a valid email.'; msgEl.className = 'error'; return; }
      submitBtn.disabled = true; submitBtn.textContent = 'Subscribing\u2026'; msgEl.textContent = ''; msgEl.className = '';
      var source = overlay.dataset.source || 'drama_page';
      fetch('/api/subscribe', { method: 'POST', headers: {'Content-Type':'application/json'}, body: JSON.stringify({email:email, source:source}) })
        .then(function(r) { return r.json(); })
        .then(function(data) {
          if (data.success) {
            try { localStorage.setItem(SUBSCRIBED_KEY, '1'); } catch(e) {}
            msgEl.textContent = '\uD83C\uDF89 You\'re in! Check your inbox soon.'; msgEl.className = 'success';
            submitBtn.textContent = '\u2713 Subscribed';
            setTimeout(function() { closeModal(false); }, 2200);
          } else if (data.message === 'Already subscribed') {
            try { localStorage.setItem(SUBSCRIBED_KEY, '1'); } catch(e) {}
            msgEl.textContent = 'You\'re already on the list! \uD83D\uDE4C'; msgEl.className = 'success';
            setTimeout(function() { closeModal(false); }, 2000);
          } else {
            msgEl.textContent = data.message || 'Something went wrong. Try again.'; msgEl.className = 'error';
            submitBtn.disabled = false; submitBtn.textContent = 'Subscribe \u2192';
          }
        })
        .catch(function() {
          msgEl.textContent = 'Network error. Please try again.'; msgEl.className = 'error';
          submitBtn.disabled = false; submitBtn.textContent = 'Subscribe \u2192';
        });
    });
  }

  if (!shouldShow()) return;

  // ── Trigger: Exit-intent — mouse leaves top of viewport (desktop, all page types) ──
  var exitFired = false;
  document.addEventListener('mouseleave', function(e) {
    if (e.clientY <= 0 && !exitFired) {
      exitFired = true;
      var src = PAGE_TYPE === 'match' ? 'match_exit_intent' : 'drama_exit_intent';
      openModal(src);
    }
  });

  if (PAGE_TYPE === 'drama') {
    // ── Drama detail: only fire on 3rd+ drama page visit (high-intent users) ──
    if (dramaVisits >= 3) {
      var simSection = document.getElementById('similar-shows-section');
      if (simSection && window.IntersectionObserver) {
        var simObs = new IntersectionObserver(function(entries) {
          entries.forEach(function(entry) {
            if (entry.isIntersecting) {
              simObs.disconnect();
              setTimeout(function() { openModal('drama_similar_shows'); }, 600);
            }
          });
        }, { threshold: 0.3 });
        simObs.observe(simSection);
      }
      // ── Drama detail: 15 seconds on page ──
      setTimeout(function() { openModal('drama_time'); }, 15000);
    }

  } else if (PAGE_TYPE === 'match') {
    // ── SEO comparison: 30s on page + scrolled past 60% depth (high-intent signal) ──
    var seoScrolled = false;
    var seoTimerFired = false;
    function tryFireSeoPopup() {
      if (seoScrolled && seoTimerFired) openModal('seo_30s_scroll');
    }
    window.addEventListener('scroll', function() {
      if (seoScrolled) return;
      var scrolled = window.scrollY + window.innerHeight;
      var total = document.documentElement.scrollHeight;
      if (total > 0 && scrolled / total >= 0.6) {
        seoScrolled = true;
        tryFireSeoPopup();
      }
    }, { passive: true });
    setTimeout(function() { seoTimerFired = true; tryFireSeoPopup(); }, 30000);

  } else {
    // ── Generic SEO pages (actor dives, comparison pages): 60% scroll depth ──
    var scrollFired = false;
    window.addEventListener('scroll', function() {
      if (scrollFired) return;
      var scrolled = window.scrollY + window.innerHeight;
      var total = document.documentElement.scrollHeight;
      if (total > 0 && scrolled / total >= 0.6) {
        scrollFired = true;
        setTimeout(function() { openModal('drama_scroll'); }, 600);
      }
    }, { passive: true });
    setTimeout(function() { openModal('drama_time'); }, 35000);
  }

})();
</script>
</body>
</html>`;
}

/** Format a comment timestamp to a relative or absolute string */
function formatCommentDate(date) {
  const d = new Date(date);
  const now = new Date();
  const diff = now - d;
  const mins = Math.floor(diff / 60000);
  if (mins < 1) return 'just now';
  if (mins < 60) return `${mins}m ago`;
  const hrs = Math.floor(mins / 60);
  if (hrs < 24) return `${hrs}h ago`;
  const days = Math.floor(hrs / 24);
  if (days < 30) return `${days}d ago`;
  return d.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
}

/** Build the comment section HTML for a drama page */
function buildCommentSection(showSlug, comments) {
  const count = comments.length;
  const headerText = count === 0
    ? 'Be the first to share your thoughts!'
    : `${count} Comment${count === 1 ? '' : 's'}`;

  const commentsHtml = comments.map(c => `
    <div class="comment-item">
      <div class="comment-meta">
        <span class="comment-name">${esc(c.display_name)}</span>
        <span class="comment-time">${formatCommentDate(c.created_at)}</span>
      </div>
      <p class="comment-text">${esc(c.comment_text)}</p>
    </div>
  `).join('');

  return `
<section id="comments-section" style="border-top:1px solid var(--border);padding-top:36px;margin-bottom:32px;">
  <style>
    #comments-section .comments-header { font-size:1.1rem;font-weight:600;color:var(--text);margin-bottom:24px; }
    #comments-section .comment-item { background:var(--bg-card);border:1px solid var(--border);border-radius:10px;padding:16px 20px;margin-bottom:12px;transition:border-color 0.2s; }
    #comments-section .comment-item:hover { border-color:rgba(232,97,77,0.3); }
    #comments-section .comment-meta { display:flex;align-items:center;gap:10px;margin-bottom:6px; }
    #comments-section .comment-name { font-weight:600;font-size:0.88rem;color:var(--coral); }
    #comments-section .comment-time { font-size:0.78rem;color:var(--text-3); }
    #comments-section .comment-text { font-size:0.9rem;color:var(--text-2);line-height:1.55; }
    #comments-section .no-comments { color:var(--text-3);font-size:0.9rem;font-style:italic;margin-bottom:20px; }
    #comment-form { background:var(--bg-card);border:1px solid var(--border);border-radius:12px;padding:20px 24px;margin-top:20px; }
    #comment-form label { display:block;font-size:0.78rem;color:var(--text-2);text-transform:uppercase;letter-spacing:0.05em;margin-bottom:6px;font-weight:600; }
    #comment-form input[type="text"],
    #comment-form textarea { width:100%;background:var(--bg-accent);border:1px solid var(--border);border-radius:8px;padding:10px 14px;color:var(--text);font-size:0.9rem;font-family:inherit;outline:none;transition:border-color 0.2s;resize:vertical; }
    #comment-form input[type="text"]:focus,
    #comment-form textarea:focus { border-color:rgba(232,97,77,0.5); }
    #comment-form textarea { min-height:90px;max-height:200px; }
    #comment-form .form-row { margin-bottom:14px; }
    #comment-form .char-count { font-size:0.72rem;color:var(--text-3);text-align:right;margin-top:3px; }
    #comment-form .hp-field { display:none; }
    #comment-submit-btn { background:var(--coral);color:#fff;border:none;border-radius:8px;padding:10px 22px;font-size:0.9rem;font-weight:600;cursor:pointer;transition:opacity 0.2s; }
    #comment-submit-btn:hover { opacity:0.88; }
    #comment-submit-btn:disabled { opacity:0.5;cursor:not-allowed; }
    #comment-feedback { margin-top:10px;font-size:0.85rem;min-height:20px; }
    @media (max-width:600px) { #comment-form { padding:16px; } }
  </style>

  <div class="comments-header">${headerText}</div>

  <div id="comments-list">
    ${count === 0 ? '<p class="no-comments">No comments yet — start the conversation!</p>' : commentsHtml}
  </div>

  <form id="comment-form" novalidate>
    <div class="form-row">
      <label for="comment-name">Your Name</label>
      <input type="text" id="comment-name" name="display_name" placeholder="Drama fan" maxlength="60" autocomplete="off" required>
    </div>
    <div class="form-row">
      <label for="comment-text">Comment <span style="color:var(--text-3);font-weight:400;font-size:0.72rem;">max 500 chars</span></label>
      <textarea id="comment-text" name="comment_text" placeholder="What did you think? Any similar shows to recommend?" maxlength="500" required></textarea>
      <div class="char-count"><span id="comment-char-count">0</span> / 500</div>
    </div>
    <!-- Honeypot -->
    <div class="hp-field" aria-hidden="true">
      <label for="comment-website">Website</label>
      <input type="text" id="comment-website" name="website" tabindex="-1" autocomplete="off">
    </div>
    <button type="submit" id="comment-submit-btn">Post Comment →</button>
    <div id="comment-feedback"></div>
  </form>

  <script>
  (function() {
    var form = document.getElementById('comment-form');
    var textArea = document.getElementById('comment-text');
    var charCount = document.getElementById('comment-char-count');
    var feedback = document.getElementById('comment-feedback');
    var submitBtn = document.getElementById('comment-submit-btn');
    var commentsList = document.getElementById('comments-list');
    var SLUG = ${JSON.stringify(showSlug)};

    // Character counter
    textArea.addEventListener('input', function() {
      charCount.textContent = textArea.value.length;
    });

    // Prepend a new comment to the list
    function prependComment(c) {
      var noMsg = commentsList.querySelector('.no-comments');
      if (noMsg) noMsg.remove();
      var item = document.createElement('div');
      item.className = 'comment-item';
      item.style.borderColor = 'rgba(232,97,77,0.4)';
      item.innerHTML =
        '<div class="comment-meta">' +
          '<span class="comment-name">' + escHtml(c.display_name) + '</span>' +
          '<span class="comment-time">just now</span>' +
        '</div>' +
        '<p class="comment-text">' + escHtml(c.comment_text) + '</p>';
      commentsList.insertBefore(item, commentsList.firstChild);
      setTimeout(function() { item.style.borderColor = ''; }, 2000);
      // Update header count
      var header = document.querySelector('#comments-section .comments-header');
      if (header) {
        var existing = parseInt(header.textContent) || 0;
        var newCount = existing + 1;
        header.textContent = newCount + ' Comment' + (newCount === 1 ? '' : 's');
      }
    }

    function escHtml(s) {
      return String(s)
        .replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;')
        .replace(/"/g,'&quot;').replace(/'/g,'&#x27;');
    }

    form.addEventListener('submit', function(e) {
      e.preventDefault();
      var name = document.getElementById('comment-name').value.trim();
      var text = textArea.value.trim();
      var website = document.getElementById('comment-website').value;
      if (!name) { feedback.style.color = '#e8614d'; feedback.textContent = 'Please enter your name.'; return; }
      if (text.length < 2) { feedback.style.color = '#e8614d'; feedback.textContent = 'Comment is too short.'; return; }
      submitBtn.disabled = true;
      submitBtn.textContent = 'Posting...';
      feedback.textContent = '';
      fetch('/api/comments/' + SLUG, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ display_name: name, comment_text: text, website: website })
      })
      .then(function(r) { return r.json(); })
      .then(function(data) {
        if (data.success && data.comment) {
          prependComment(data.comment);
          form.reset();
          charCount.textContent = '0';
          feedback.style.color = '#4ade80';
          feedback.textContent = 'Comment posted!';
          setTimeout(function() { feedback.textContent = ''; }, 3000);
        } else if (data.success) {
          // honeypot triggered silently
          form.reset();
          charCount.textContent = '0';
        } else {
          feedback.style.color = '#e8614d';
          feedback.textContent = data.message || 'Something went wrong. Please try again.';
        }
      })
      .catch(function() {
        feedback.style.color = '#e8614d';
        feedback.textContent = 'Network error. Please try again.';
      })
      .finally(function() {
        submitBtn.disabled = false;
        submitBtn.textContent = 'Post Comment →';
      });
    });
  })();
  </script>
</section>`;
}

/**
 * Inline newsletter capture block — reusable across page types.
 * @param {string} heading   - Main CTA headline
 * @param {string} subtext   - Supporting copy (pass '' to omit)
 * @param {string} source    - Value saved to newsletter_subscribers.source
 * @param {string} formId    - Unique DOM id prefix (no spaces)
 */
function inlineNewsletterHtml(heading, subtext, source, formId) {
  return `
<section id="${formId}-section" style="background:linear-gradient(135deg,rgba(232,97,77,0.09) 0%,rgba(212,168,83,0.06) 100%);border:1px solid rgba(232,97,77,0.28);border-radius:16px;padding:28px 24px;margin:32px 0;text-align:center;">
  <div style="font-size:0.7rem;text-transform:uppercase;letter-spacing:0.12em;color:var(--coral);margin-bottom:10px;font-weight:700;">✉️ Free Weekly Picks</div>
  <h3 style="font-size:1.18rem;font-weight:700;margin-bottom:${subtext ? '8px' : '16px'};color:var(--text);">${heading}</h3>
  ${subtext ? `<p style="color:var(--text-2);font-size:0.88rem;margin-bottom:20px;max-width:440px;margin-left:auto;margin-right:auto;">${subtext}</p>` : ''}
  <div id="${formId}-success" style="display:none;color:#4ade80;font-size:0.95rem;font-weight:600;padding:8px 0;">✓ You're in! First picks headed your way.</div>
  <form id="${formId}-form" onsubmit="inlineSubscribe(event,'${formId}','${source}')" style="display:flex;justify-content:center;gap:8px;flex-wrap:wrap;">
    <input type="email" id="${formId}-input" placeholder="your@email.com" required autocomplete="email"
           style="padding:10px 14px;background:#1a1a24;border:1px solid #2a2a35;border-radius:8px;color:#f0ece4;font-size:0.9rem;width:230px;min-width:0;outline:none;transition:border-color 0.2s;" onfocus="this.style.borderColor='#e8614d'" onblur="this.style.borderColor='#2a2a35'">
    <button type="submit" id="${formId}-btn"
            style="padding:10px 20px;background:linear-gradient(135deg,#e8614d 0%,#d44a3a 100%);color:#fff;border:none;border-radius:8px;font-weight:700;font-size:0.9rem;cursor:pointer;white-space:nowrap;transition:opacity 0.2s;" onmouseover="this.style.opacity='0.88'" onmouseout="this.style.opacity='1'">
      Subscribe →
    </button>
  </form>
  <div id="${formId}-msg" style="margin-top:8px;font-size:0.82rem;min-height:1.1em;"></div>
</section>
<script>(function(){try{if(localStorage.getItem('dm_email_subscribed')){var s=document.getElementById('${formId}-section');if(s){s.querySelector('form').style.display='none';var sc=document.getElementById('${formId}-success');if(sc)sc.style.display='block';}}}catch(e){}}());</script>`;
}

/**
 * Map a show's genres to the most relevant mood page IDs.
 * Returns up to 3 mood objects: { id, label, emoji }
 */
function genresToMoods(genres) {
  const genreSet = new Set((genres || []).map(g => g.toLowerCase()));
  const GENRE_MOOD_MAP = [
    { id: 'cry-it-out',      label: 'Need a Good Cry',  emoji: '😭', match: ['melodrama','drama','romance','family'] },
    { id: 'feel-good',       label: 'Make Me Happy',    emoji: '☀️', match: ['comedy','slice-of-life','romance','heartwarming'] },
    { id: 'edge-of-seat',    label: 'Edge of My Seat',  emoji: '😱', match: ['thriller','mystery','crime','action','horror','suspense'] },
    { id: 'laugh-out-loud',  label: 'Make Me Laugh',    emoji: '😂', match: ['comedy','rom-com','sitcom'] },
    { id: 'epic-romance',    label: 'Epic Romance',     emoji: '💘', match: ['romance','historical','period'] },
    { id: 'dark-twisted',    label: 'Dark & Twisted',   emoji: '🖤', match: ['thriller','crime','horror','psychological','dark'] }
  ];
  const scored = GENRE_MOOD_MAP.map(m => ({
    ...m,
    score: m.match.filter(g => genreSet.has(g)).length
  })).filter(m => m.score > 0).sort((a, b) => b.score - a.score);
  return scored.slice(0, 3);
}

/** Generate a K-drama detail page */
function dramePage(show, similar, relatedComparisonPages, comments) {
  if (!show) return null;

  const dramaLabel = show.type === 'cdrama' ? 'C-Drama' : show.type === 'kmovie' ? 'K-Movie' : show.type === 'anime' ? 'Anime' : show.type === 'anime-movie' ? 'Anime Film' : show.type === 'jdrama' ? 'J-Drama' : show.type === 'jmovie' ? 'J-Movie' : 'K-Drama';
  const similarLabel = show.type === 'cdrama' ? 'C-dramas' : show.type === 'anime' || show.type === 'anime-movie' ? 'anime' : show.type === 'jdrama' || show.type === 'jmovie' ? 'J-dramas' : 'K-dramas';
  const title = `${show.title} — Synopsis, Cast, Where to Watch & Similar ${dramaLabel}s | DramaMatch`;
  const description = show.synopsis
    ? `${show.synopsis.substring(0, 120).trim()} Find where to watch ${show.title}, see the full cast, and discover similar ${similarLabel} on DramaMatch.`
    : `${show.title} (${show.year}) ${dramaLabel} — synopsis, cast, where to watch, and similar ${similarLabel} recommendations. Find your perfect drama match on DramaMatch.`;
  const canonical = `${BASE_URL}/drama/${show.id}`;

  const dramaPosterUrl = getPosterUrl(show.id);
  // Streaming platforms available for this drama — used in schema + watch buttons
  const dramaStreamingKeys = PLATFORM_ORDER.filter(k => show.streaming && show.streaming[k] && PLATFORMS[k]);
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': (show.type === 'kmovie' || show.type === 'jmovie' || show.type === 'anime-movie') ? 'Movie' : 'TVSeries',
    'name': show.title,
    'datePublished': String(show.year),
    'description': show.synopsis || `${show.title} is a ${(show.genres || []).join(', ')} ${dramaLabel}.`,
    'url': canonical,
    'image': dramaPosterUrl || `${BASE_URL}/og-default.png`,
    'inLanguage': show.type === 'cdrama' ? 'zh' : (show.type === 'jdrama' || show.type === 'jmovie' || show.type === 'anime' || show.type === 'anime-movie') ? 'ja' : 'ko',
    'countryOfOrigin': { '@type': 'Country', 'name': (show.type === 'cdrama') ? 'China' : (show.type === 'jdrama' || show.type === 'jmovie' || show.type === 'anime' || show.type === 'anime-movie') ? 'Japan' : 'South Korea' },
    'contentRating': 'TV-14',
    'genre': (show.genres || []),
    'numberOfEpisodes': show.episodes || undefined,
    'productionCompany': show.network ? { '@type': 'Organization', 'name': show.network } : undefined,
    'actor': (show.actors || []).map(a => ({
      '@type': 'Person',
      'name': a.name,
      'url': `${BASE_URL}/actor/${slugify(a.name)}`
    })),
    // WatchAction links: signal to Google which platforms carry this drama
    ...(dramaStreamingKeys.length ? {
      'potentialAction': dramaStreamingKeys.map(k => ({
        '@type': 'WatchAction',
        'target': {
          '@type': 'EntryPoint',
          'urlTemplate': PLATFORMS[k].buildUrl(show.title),
          'actionPlatform': [
            'http://schema.org/DesktopWebPlatform',
            'http://schema.org/MobileWebPlatform'
          ]
        }
      })),
      'availableOnApplication': dramaStreamingKeys.map(k => ({
        '@type': 'SoftwareApplication',
        'name': PLATFORMS[k].name,
        'applicationCategory': 'EntertainmentApplication',
        'url': PLATFORMS[k].buildUrl(show.title)
      }))
    } : {})
  };

  const genreBadges = (show.genres || []).map(g => `<span class="badge genre">${esc(g)}</span>`).join(' ');
  const streamBadges = streamingBadges(show.streaming);
  const watchButtons = watchNowButtons(show.streaming, show.id, show.title);
  const actorLinks = (show.actors || []).map(a => {
    const actorSlug = slugify(a.name);
    return `<span class="actor-chip"><a href="/actor/${actorSlug}">${esc(a.name)}</a>${a.role ? ` as ${esc(a.role)}` : ''}</span>`;
  }).join('');

  // Build FAQ targeting common search queries: "[Show] cast", "where to watch [Show]", "shows like [Show]"
  const faqStreamingNames = PLATFORM_ORDER.filter(k => show.streaming && show.streaming[k]).map(k => PLATFORMS[k] ? PLATFORMS[k].name : k);
  const faqActorNames = (show.actors || []).slice(0, 4).map(a => `${a.name}${a.role ? ` (${a.role})` : ''}`).join(', ');
  const dramaFaqs = [
    ...(show.synopsis ? [{
      q: `What is ${show.title} about?`,
      a: `${show.synopsis} It is a ${show.year} ${dramaLabel}${show.network ? ` from ${show.network}` : ''} with ${(show.genres || []).slice(0, 3).join(', ')} elements.`
    }] : []),
    ...(faqActorNames ? [{
      q: `Who stars in ${show.title}?`,
      a: `${show.title} stars ${faqActorNames}.${show.episodes ? ` The ${(show.type === 'kmovie' || show.type === 'jmovie' || show.type === 'anime-movie') ? 'film' : 'series'} runs for ${show.episodes} episodes.` : ''} Explore each actor's full filmography on DramaMatch.`
    }] : []),
    {
      q: `Where can I watch ${show.title}?`,
      a: faqStreamingNames.length > 0
        ? `${show.title} is available on ${faqStreamingNames.join(', ')}. Use DramaMatch to find the direct streaming link and discover similar ${similarLabel} on the same platforms.`
        : `Check Netflix, Viki, Amazon Prime Video, Disney+, and other streaming services for ${show.title}. DramaMatch tracks availability for over 1,800 Asian dramas.`
    },
    ...(similar && similar.length >= 2 ? [{
      q: `What are some dramas similar to ${show.title}?`,
      a: `Great picks similar to ${show.title}: ${similar.slice(0, 3).map(r => `<a href="/drama/${r.show.id}">${esc(r.show.title)}</a>`).join(', ')}. DramaMatch uses 6-dimensional matching (genres, themes, tropes, tone, cast, streaming) to find ${similar.length}+ similar titles.`
    }] : [])
  ];
  const faqSchemaObj = dramaFaqs.length ? buildFaqSchema(dramaFaqs) : null;
  const faqHtml = faqAccordionHtml(dramaFaqs, `${show.title} — Frequently Asked Questions`);

  const bodyContent = `
    <section class="hero-section drama-hero">
      <div class="drama-hero-info">
        <h1>${esc(show.title)}</h1>
        <div class="meta-row">
          ${show.year ? `<span class="badge year">${show.year}</span>` : ''}
          ${show.episodes ? `<span class="badge">${show.episodes} episodes</span>` : ''}
          ${show.network ? `<span class="badge network">${esc(show.network)}</span>` : ''}
          ${genreBadges}
          ${streamBadges}
        </div>
      </div>
      ${dramaPosterUrl ? `<img src="${esc(dramaPosterUrl)}" alt="${esc(show.title)} poster" class="drama-hero-poster" loading="lazy" width="120" height="180">` : ''}
    </section>

    ${show.synopsis ? `
    <section class="synopsis-section">
      <p>${esc(show.synopsis)}</p>
    </section>` : ''}

    ${watchButtons ? `
    <div class="watch-now-section" style="margin-bottom:28px;">
      <div class="watch-now-label">Where to Watch</div>
      <div class="watch-now-buttons">${watchButtons}</div>
    </div>` : ''}

    <section class="tags-section">
      ${show.themes && show.themes.length ? `
      <div class="tag-group">
        <label>Themes</label>
        <div class="tag-list">${(show.themes || []).map(t => `<span class="tag">${esc(t)}</span>`).join('')}</div>
      </div>` : ''}
      ${show.tropes && show.tropes.length ? `
      <div class="tag-group">
        <label>Tropes</label>
        <div class="tag-list">${(show.tropes || []).map(t => `<span class="tag">${esc(t)}</span>`).join('')}</div>
      </div>` : ''}
      ${show.tone && show.tone.length ? `
      <div class="tag-group">
        <label>Tone</label>
        <div class="tag-list">${(show.tone || []).map(t => `<span class="tag">${esc(t)}</span>`).join('')}</div>
      </div>` : ''}
    </section>

    ${actorLinks ? `
    <section style="margin-bottom: 32px;">
      <div class="section-title">Cast</div>
      <div class="actors-list">${actorLinks}</div>
    </section>` : ''}

    ${similar && similar.length ? `
    <section id="similar-shows-section" class="related-section" style="border-top:1px solid var(--border);padding-top:32px;margin-bottom:32px;">
      <div class="section-title">you might also like 👇</div>
      <style>
        .poster-scroll { display:flex; gap:12px; overflow-x:auto; padding-bottom:8px; scrollbar-width:thin; scrollbar-color:rgba(232,97,77,0.3) transparent; -webkit-overflow-scrolling:touch; }
        .poster-scroll::-webkit-scrollbar { height:4px; }
        .poster-scroll::-webkit-scrollbar-track { background:transparent; }
        .poster-scroll::-webkit-scrollbar-thumb { background:rgba(232,97,77,0.3); border-radius:2px; }
        .poster-card { flex:0 0 120px; text-decoration:none; color:inherit; display:flex; flex-direction:column; border-radius:8px; overflow:hidden; background:var(--bg-card); border:1px solid var(--border); transition:border-color 0.2s,transform 0.15s; }
        .poster-card:hover { border-color:rgba(232,97,77,0.5); transform:translateY(-2px); }
        .poster-card img { width:120px; height:180px; object-fit:cover; display:block; }
        .poster-card .poster-fallback { width:120px; height:180px; background:var(--bg-card); display:flex; align-items:center; justify-content:center; font-size:2rem; }
        .poster-card .poster-info { padding:8px; flex:1; }
        .poster-card .poster-title { font-size:0.78rem; font-weight:600; color:var(--text); line-height:1.3; display:-webkit-box; -webkit-line-clamp:2; -webkit-box-orient:vertical; overflow:hidden; }
        .poster-card .poster-meta { font-size:0.72rem; color:var(--text-2); margin-top:3px; }
        .poster-card .poster-score { font-size:0.7rem; color:var(--coral); font-weight:700; margin-top:3px; }
      </style>
      <div class="poster-scroll">
        ${similar.slice(0, 6).map(r => {
          const s = r.show;
          const posterUrl = getPosterUrl(s.id);
          return `<a href="/drama/${s.id}" class="poster-card" title="${esc(s.title)}${s.year ? ' (' + s.year + ')' : ''}">
            ${posterUrl
              ? `<img src="${esc(posterUrl)}" alt="${esc(s.title)} poster" loading="lazy" width="120" height="180">`
              : `<div class="poster-fallback">${s.type === 'anime' || s.type === 'anime-movie' ? '🎌' : s.type === 'cdrama' ? '🐉' : s.type === 'jdrama' || s.type === 'jmovie' ? '⛩️' : '🎬'}</div>`}
            <div class="poster-info">
              <div class="poster-title">${esc(s.title)}</div>
              ${s.year ? `<div class="poster-meta">${s.year}</div>` : ''}
              <div class="poster-score">${Math.round(r.matchScore)}% match</div>
            </div>
          </a>`;
        }).join('\n')}
      </div>
      <div class="card-grid" style="margin-top:20px;">
        ${similar.slice(0, 3).map(r => {
          const s = r.show;
          const genreTags = (s.genres || []).slice(0, 3).map(g => `<span class="badge genre">${esc(g)}</span>`).join(' ');
          const watchBtns = watchNowButtons(s.streaming, s.id, s.title);
          return `
        <article class="drama-card">
          <div class="card-top">
            <h2><a href="/drama/${s.id}">${esc(s.title)}</a></h2>
            <span class="match-score">${Math.round(r.matchScore)}%</span>
          </div>
          <div class="meta-row">
            ${s.year ? `<span class="badge year">${s.year}</span>` : ''}
            ${s.episodes ? `<span class="badge">${s.episodes} eps</span>` : ''}
            ${s.network ? `<span class="badge network">${esc(s.network)}</span>` : ''}
            ${genreTags}
          </div>
          ${s.synopsis ? `<p class="synopsis">${esc(s.synopsis.substring(0, 160))}…</p>` : ''}
          ${r.reasoning ? `<p class="reasoning">${esc(r.reasoning.replace(/\*\*/g, ''))}</p>` : ''}
          ${watchBtns ? `<div class="watch-now-section"><div class="watch-now-label">Where to Watch</div><div class="watch-now-buttons">${watchBtns}</div></div>` : ''}
        </article>`;
        }).join('\n')}
      </div>
    </section>` : ''}

    ${relatedComparisonPages && relatedComparisonPages.length ? `
    <section style="margin-bottom:32px;padding-top:24px;border-top:1px solid var(--border);">
      <div class="section-title">featured in these curated lists</div>
      <div style="display:flex;flex-wrap:wrap;gap:8px;">
        ${relatedComparisonPages.map(cp => `
          <a href="/${esc(cp.slug)}" style="display:inline-flex;align-items:center;gap:6px;padding:8px 14px;background:var(--bg-card);border:1px solid var(--border);border-radius:8px;color:var(--text);font-size:0.88rem;text-decoration:none;transition:border-color 0.2s;">
            Shows Like ${esc(cp.title)}
          </a>
        `).join('')}
      </div>
      <div style="margin-top:10px;"><a href="/shows-like" style="font-size:0.82rem;color:var(--coral);">Browse all curated lists →</a></div>
    </section>` : ''}

    ${(() => {
      const moodLinks = genresToMoods(show.genres);
      if (!moodLinks.length) return '';
      return `
    <section style="margin-bottom:32px;padding-top:24px;border-top:1px solid var(--border);">
      <div class="section-title">more from these vibes</div>
      <div style="display:flex;flex-wrap:wrap;gap:10px;margin-top:4px;">
        ${moodLinks.map(m => `
          <a href="/mood/${esc(m.id)}" style="display:inline-flex;align-items:center;gap:8px;padding:10px 18px;background:var(--bg-card);border:1px solid var(--border);border-radius:999px;color:var(--text);font-size:0.88rem;text-decoration:none;transition:border-color 0.2s,background 0.2s;" onmouseover="this.style.borderColor='rgba(232,97,77,0.5)'" onmouseout="this.style.borderColor='var(--border)'">
            <span style="font-size:1.1rem;">${esc(m.emoji)}</span>
            <span>${esc(m.label)}</span>
          </a>
        `).join('')}
      </div>
    </section>`;
    })()}

    <section style="margin-bottom:24px;padding:20px 24px;background:var(--bg-card);border:1px solid rgba(232,97,77,0.25);border-radius:12px;text-align:center;">
      <p style="color:var(--text-2);margin-bottom:12px;font-size:0.95rem;">Looking for more dramas like <strong style="color:var(--text);">${esc(show.title)}</strong>?</p>
      <a href="/match/${show.id}" style="display:inline-flex;align-items:center;gap:6px;background:var(--coral);color:white;padding:10px 22px;border-radius:8px;font-weight:600;font-size:0.9rem;text-decoration:none;">See all matches for ${esc(show.title)} →</a>
    </section>

    ${inlineNewsletterHtml(`Love ${esc(show.title)}? Get similar picks`, 'Weekly K-drama picks matched to what you already love — free.', 'drama_page', 'inl-drama')}

    ${buildCommentSection(show.id, comments || [])}

    <section class="cta-section">
      <p>loved ${esc(show.title)}? let me find your next obsession.</p>
      <a href="/" class="btn-primary">find my next Asian drama →</a>
    </section>
  `;

  // Build schema array: TVSeries/Movie + FAQPage + optional Review schema from comments
  const dramaSchemas = [jsonLd];
  if (faqSchemaObj) dramaSchemas.push(faqSchemaObj);
  // Add Review schema if comments exist (helps Google understand community engagement)
  if (comments && comments.length > 0) {
    const validComments = comments.filter(c => c.comment_text && c.comment_text.trim().length >= 10);
    if (validComments.length > 0) {
      dramaSchemas.push({
        '@context': 'https://schema.org',
        '@type': 'Review',
        'itemReviewed': {
          '@type': (show.type === 'kmovie' || show.type === 'jmovie' || show.type === 'anime-movie') ? 'Movie' : 'TVSeries',
          'name': show.title,
          'url': canonical
        },
        'author': { '@type': 'Person', 'name': validComments[0].display_name || 'DramaMatch User' },
        'datePublished': validComments[0].created_at
          ? new Date(validComments[0].created_at).toISOString().split('T')[0]
          : new Date().toISOString().split('T')[0],
        'reviewBody': validComments[0].comment_text,
        'publisher': { '@type': 'Organization', 'name': 'DramaMatch', 'url': BASE_URL }
      });
    }
  }
  const pageJsonLd = dramaSchemas.length === 1 ? dramaSchemas[0] : dramaSchemas;
  return pageShell({
    title, description, canonical,
    ogImage: dramaPosterUrl ? dramaPosterUrl.replace('/w342/', '/w500/') : undefined,
    jsonLd: pageJsonLd,
    breadcrumbs: `<span>›</span> <a href="/drama/${show.id}">${esc(show.title)}</a>`,
    breadcrumbTrail: [{ name: show.title, url: canonical }],
    bodyContent,
    pageType: 'drama',
    dramaTitle: show.title
  });
}

/** Derive vibe scores (0–1) from a show's tone/genre/theme/trope arrays */
function computeVibeScores(show) {
  const tone   = (show.tone   || []).map(t => t.toLowerCase());
  const genres = (show.genres || []).map(g => g.toLowerCase());
  const themes = (show.themes || []).map(t => t.toLowerCase());
  const tropes = (show.tropes || []).map(t => t.toLowerCase());
  const all    = [...tone, ...genres, ...themes, ...tropes];
  function axis(neg, pos) {
    let n = 0, p = 0;
    neg.forEach(k => { if (all.some(t => t === k || t.includes(k))) n++; });
    pos.forEach(k => { if (all.some(t => t === k || t.includes(k))) p++; });
    const total = n + p;
    return total === 0 ? 0.5 : p / total;
  }
  return {
    grittyFluffy:      axis(['dark','gritty','tense','intense','brutal','raw','bleak','crime','thriller','horror','noir','betrayal','revenge','moral-descent','violence','war','psychological'],['sweet','light-hearted','warm','romantic','cute','heartwarming','comedic','bubbly','romance','comedy','slice-of-life','first-love','friendship','fluffy','cozy','soft','campus']),
    slowFast:          axis(['slow-burn','slow','atmospheric','contemplative','meditative','slice-of-life','quiet','introspective','pensive'],['fast-paced','action-packed','thrilling','adventurous','action','adventure','chase','explosive','high-stakes','suspense']),
    cynicalHeartfelt:  axis(['dark','cynical','satirical','bitter','bleak','corruption','betrayal','disillusionment','power','political','nihilistic','manipulation'],['heartwarming','emotional','warm','touching','uplifting','sweet','family','friendship','redemption','love','hopeful','wholesome','sincere']),
    lightHeavy:        axis(['light-hearted','comedic','fun','breezy','whimsical','fluffy','comedy','slice-of-life','lighthearted','cheerful','playful'],['dark','tragic','dramatic','intense','emotional','heavy','melodrama','death','grief','trauma','loss','tragedy','heartbreaking','gut-wrenching'])
  };
}

/** Generate a "K-dramas like [Western show]" match page */
function matchPage(sourceShow, recommendations, relatedShows, blogPost, comparisonPageConfig, listPageSlug) {
  if (!sourceShow || !recommendations) return null;

  const isWesternSource = sourceShow.type === 'western' || sourceShow.type === 'western-movie';
  const isAsianSource = !isWesternSource;
  const isMovieSource = sourceShow.type === 'western-movie' || sourceShow.type === 'kmovie' || sourceShow.type === 'jmovie' || sourceShow.type === 'anime-movie';
  const showType = isMovieSource ? 'movie' : 'show';

  // Type-aware labels for page title / headings
  const isWesternTV = sourceShow.type === 'western';
  let pageLabel, recLabel;
  if (isWesternTV) {
    pageLabel = `K-Dramas Like ${sourceShow.title}`;
    recLabel = 'Korean & Asian Drama Matches';
  } else if (sourceShow.type === 'western-movie') {
    pageLabel = `Asian Films Like ${sourceShow.title}`;
    recLabel = 'Asian Film & Drama Picks';
  } else if (sourceShow.type === 'kdrama') {
    pageLabel = `Western Shows Like ${sourceShow.title}`;
    recLabel = 'Western TV & Film Matches';
  } else if (sourceShow.type === 'cdrama') {
    pageLabel = `Western Shows Like ${sourceShow.title}`;
    recLabel = 'Western TV & Film Matches';
  } else if (sourceShow.type === 'jdrama') {
    pageLabel = `Western Shows Like ${sourceShow.title}`;
    recLabel = 'Western TV & Film Matches';
  } else if (sourceShow.type === 'anime' || sourceShow.type === 'anime-movie') {
    pageLabel = `Western Shows Like ${sourceShow.title}`;
    recLabel = 'Western TV & Film Matches';
  } else {
    // kmovie, jmovie, etc.
    pageLabel = `Western Films Like ${sourceShow.title}`;
    recLabel = 'Western Film Matches';
  }

  const top3Recs = recommendations.slice(0, 3).map(r => r.show.title).join(', ');
  // SEO-optimised titles targeting long-tail "K-drama like X" / "Korean drama similar to X" queries
  const title = isWesternTV
    ? `${pageLabel} — Korean Drama Similar to ${sourceShow.title} | DramaMatch`
    : isWesternSource
      ? `${pageLabel} — Best Asian Film & Drama Picks | DramaMatch`
      : isAsianSource
        ? `${pageLabel} — Best US & UK TV Picks | DramaMatch`
        : `${pageLabel} — Similar Dramas & Recommendations | DramaMatch`;
  const description = isWesternTV
    ? `Looking for a K-drama like ${sourceShow.title} (${sourceShow.year})? These Korean, Chinese & Japanese dramas share the same story DNA: ${top3Recs}. Find your perfect match on DramaMatch.`
    : isWesternSource
      ? `Loved ${sourceShow.title} (${sourceShow.year})? These Asian films and dramas share the same DNA: ${top3Recs}. Curated by DramaMatch.`
      : isAsianSource
        ? `Loved ${sourceShow.title} (${sourceShow.year})? These Western shows and movies share the same story DNA: ${top3Recs}. Find your perfect Western match on DramaMatch.`
        : `Loved ${sourceShow.title} (${sourceShow.year})? Similar picks with the same story DNA: ${top3Recs} and more.`;
  const canonical = `${BASE_URL}/match/${sourceShow.id}`;

  const itemListElements = recommendations.map((r, i) => {
    const s = r.show;
    const isMovieType = s.type === 'kmovie' || s.type === 'jmovie' || s.type === 'anime-movie';
    const schemaType = isMovieType ? 'Movie' : 'TVSeries';
    const posterUrl = getPosterUrl(s.id);
    const itemObj = {
      '@type': schemaType,
      '@id': `${BASE_URL}/drama/${s.id}`,
      'name': s.title,
      'url': `${BASE_URL}/drama/${s.id}`
    };
    if (posterUrl) itemObj.image = posterUrl;
    if (r.reasoning) itemObj.description = r.reasoning.replace(/\*\*/g, '');
    if (s.year) itemObj.datePublished = String(s.year);
    // WatchAction: first available streaming platform for this recommendation
    const recStreamKeys = PLATFORM_ORDER.filter(k => s.streaming && s.streaming[k] && PLATFORMS[k]);
    if (recStreamKeys.length > 0) {
      itemObj.potentialAction = {
        '@type': 'WatchAction',
        'target': {
          '@type': 'EntryPoint',
          'urlTemplate': PLATFORMS[recStreamKeys[0]].buildUrl(s.title),
          'actionPlatform': ['http://schema.org/DesktopWebPlatform', 'http://schema.org/MobileWebPlatform']
        }
      };
    }
    return { '@type': 'ListItem', 'position': i + 1, 'item': itemObj };
  });

  // Dynamic FAQ for this source show (type-aware)
  const matchFaqs = isWesternSource ? [
    {
      q: `What K-drama should I watch if I like ${sourceShow.title}?`,
      a: recommendations.length > 0
        ? `If you love ${sourceShow.title}, start with <a href="/drama/${recommendations[0].show.id}">${recommendations[0].show.title}</a>${recommendations[1] ? ` or <a href="/drama/${recommendations[1].show.id}">${recommendations[1].show.title}</a>` : ''} — both share the same ${(sourceShow.genres || []).slice(0, 2).join(' and ')} DNA. DramaMatch found ${recommendations.length} Asian drama matches total.`
        : `Use the DramaMatch engine to find Asian dramas that match ${sourceShow.title}.`
    },
    {
      q: `Is there a Korean version of ${sourceShow.title}?`,
      a: recommendations.length > 0
        ? `The closest Korean equivalent to ${sourceShow.title} is <a href="/drama/${recommendations[0].show.id}">${recommendations[0].show.title}</a> (${recommendations[0].show.year || ''}), which scores a ${Math.round(recommendations[0].matchScore)}% match on DramaMatch.${recommendations[0].reasoning ? ' ' + esc(recommendations[0].reasoning.replace(/\*\*/g, '')) : ''}`
        : `Search DramaMatch for the closest Asian drama match to ${sourceShow.title}.`
    },
    {
      q: `Where can I watch Asian dramas like ${sourceShow.title}?`,
      a: `Asian dramas similar to ${sourceShow.title} are available on Netflix, Viki, Amazon Prime Video, Disney+, and Hulu. DramaMatch shows the exact streaming platform for each recommendation so you can start watching immediately.`
    },
    {
      q: `Why do ${sourceShow.title} fans like K-dramas?`,
      a: `${sourceShow.title} fans tend to love K-dramas because Korean drama storytelling delivers the same emotional intensity, strong character arcs, and genre-blending${(sourceShow.genres || []).length ? ' — especially ' + (sourceShow.genres || []).slice(0, 2).join(' and ') : ''}. K-dramas often tell tighter, season-long stories without filler episodes.`
    }
  ] : isAsianSource ? [
    {
      q: `What Western show should I watch if I like ${sourceShow.title}?`,
      a: recommendations.length > 0
        ? `If you love ${sourceShow.title}, start with <a href="/drama/${recommendations[0].show.id}">${recommendations[0].show.title}</a>${recommendations[1] ? ` or <a href="/drama/${recommendations[1].show.id}">${recommendations[1].show.title}</a>` : ''} — both share the same ${(sourceShow.genres || []).slice(0, 2).join(' and ')} DNA. DramaMatch found ${recommendations.length} Western matches total.`
        : `Use DramaMatch to find Western shows that match ${sourceShow.title}.`
    },
    {
      q: `Is there a Western version of ${sourceShow.title}?`,
      a: recommendations.length > 0
        ? `The closest Western equivalent to ${sourceShow.title} is <a href="/drama/${recommendations[0].show.id}">${recommendations[0].show.title}</a> (${recommendations[0].show.year || ''}), which scores a ${Math.round(recommendations[0].matchScore)}% match on DramaMatch.${recommendations[0].reasoning ? ' ' + esc(recommendations[0].reasoning.replace(/\*\*/g, '')) : ''}`
        : `Search DramaMatch for the closest Western match to ${sourceShow.title}.`
    },
    {
      q: `Where can I watch Western shows like ${sourceShow.title}?`,
      a: `Western shows similar to ${sourceShow.title} are available on Netflix, Amazon Prime Video, Hulu, Disney+, HBO Max, Apple TV+, and Peacock. DramaMatch shows the exact streaming platform for each recommendation so you can start watching immediately.`
    },
    {
      q: `Why do ${sourceShow.title} fans like Western shows?`,
      a: `${sourceShow.title} fans discover Western shows share the same emotional intensity, genre-blending, and story craft${(sourceShow.genres || []).length ? ' — especially ' + (sourceShow.genres || []).slice(0, 2).join(' and ') : ''}. Western shows often have bigger production budgets and longer seasons, delivering the same narrative depth in a different cultural context.`
    }
  ] : [
    {
      q: `What dramas are most similar to ${sourceShow.title}?`,
      a: recommendations.length > 0
        ? `The closest match to ${sourceShow.title} is <a href="/drama/${recommendations[0].show.id}">${recommendations[0].show.title}</a>, scoring ${Math.round(recommendations[0].matchScore)}% on DramaMatch.${recommendations[1] ? ` You should also check <a href="/drama/${recommendations[1].show.id}">${recommendations[1].show.title}</a>.` : ''}`
        : `Use DramaMatch to find dramas similar to ${sourceShow.title}.`
    },
    {
      q: `Is there a show like ${sourceShow.title} I can watch next?`,
      a: recommendations.length > 0
        ? `DramaMatch found ${recommendations.length} shows with the same story DNA as ${sourceShow.title}. Top picks: ${recommendations.slice(0, 3).map(r => `<a href="/drama/${r.show.id}">${r.show.title}</a>`).join(', ')}.`
        : `Use DramaMatch to discover shows similar to ${sourceShow.title}.`
    },
    {
      q: `Where can I watch dramas like ${sourceShow.title}?`,
      a: `Dramas similar to ${sourceShow.title} are available on Netflix, Viki, Amazon Prime Video, Disney+, Hulu, and Crunchyroll. DramaMatch lists the exact streaming platform for each recommendation.`
    }
  ];

  // Standalone TVSeries/Movie schema for the source show — enables Google rich snippets
  const sourceSchemaType = isMovieSource ? 'Movie' : 'TVSeries';
  const sourceShowSchema = {
    '@context': 'https://schema.org',
    '@type': sourceSchemaType,
    '@id': `${canonical}#source`,
    'name': sourceShow.title,
    'datePublished': String(sourceShow.year || ''),
    'genre': (sourceShow.genres || []).map(g => g.charAt(0).toUpperCase() + g.slice(1))
  };
  if (sourceShow.synopsis) sourceShowSchema.description = sourceShow.synopsis.substring(0, 300);
  if (!isMovieSource && sourceShow.episodes) sourceShowSchema.numberOfEpisodes = sourceShow.episodes;
  if (sourceShow.network) sourceShowSchema.productionCompany = { '@type': 'Organization', 'name': sourceShow.network };
  // aggregateRating: average DramaMatch similarity score across all recommendations
  // signals to Google that this show has been algorithmically matched against N Asian dramas
  if (recommendations && recommendations.length >= 3) {
    const avgScore = Math.round(
      recommendations.reduce((sum, r) => sum + r.matchScore, 0) / recommendations.length
    );
    sourceShowSchema.aggregateRating = {
      '@type': 'AggregateRating',
      'ratingValue': (avgScore / 10).toFixed(1),
      'bestRating': '10',
      'worstRating': '1',
      'ratingCount': recommendations.length
    };
  }

  const jsonLd = [
    {
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      'name': pageLabel,
      'description': description,
      'url': canonical,
      'numberOfItems': recommendations.length,
      'itemListElement': itemListElements
    },
    {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      'name': title,
      'description': description,
      'url': canonical,
      'about': {
        '@type': sourceSchemaType,
        'name': sourceShow.title,
        'datePublished': String(sourceShow.year || '')
      }
    },
    buildFaqSchema(matchFaqs),
    sourceShowSchema
  ];

  const sourcePosterUrl = getPosterUrl(sourceShow.id);

  const cardsHtml = recommendations.map((r, idx) => {
    const s = r.show;
    const pct = Math.round(r.matchScore);
    const recPosterUrl = getPosterUrl(s.id);
    const genreTags = (s.genres || []).slice(0, 3).map(g => `<span class="badge genre">${esc(g)}</span>`).join(' ');
    const tropeTags = (s.tropes || []).slice(0, 2).map(t => `<span class="badge trope">${esc(t.replace(/-/g, ' '))}</span>`).join(' ');
    const watchButtons = watchNowButtons(s.streaming, s.id, s.title);
    const vb = computeVibeScores(s);
    const vmAxes = [
      { l: 'Gritty',    r: 'Fluffy',     s: vb.grittyFluffy,     g: 'linear-gradient(to right,#64748b,#f9a8d4)' },
      { l: 'Slow-Burn', r: 'Fast-Paced', s: vb.slowFast,         g: 'linear-gradient(to right,#93c5fd,#fbbf24)' },
      { l: 'Cynical',   r: 'Heartfelt',  s: vb.cynicalHeartfelt, g: 'linear-gradient(to right,#4b5563,#fb7185)' },
      { l: 'Light',     r: 'Heavy',      s: vb.lightHeavy,       g: 'linear-gradient(to right,#86efac,#818cf8)' }
    ];
    const vibeMeterHtml = `<div class="vibe-meter-section">
      <div class="vibe-meter-title">Vibe Check</div>
      ${vmAxes.map(a => `<div class="vibe-meter-row">
        <span class="vibe-lbl vibe-lbl-l">${a.l}</span>
        <div class="vibe-track" style="background:${a.g};"><div class="vibe-dot" style="left:${Math.round(a.s*100)}%;"></div></div>
        <span class="vibe-lbl vibe-lbl-r">${a.r}</span>
      </div>`).join('')}
    </div>`;
    // Poster pair: source on left, recommendation on right
    const posterPairHtml = `<div class="match-poster-pair" style="display:flex;align-items:flex-end;gap:0.5rem;margin-bottom:1rem;">
      <div style="display:flex;flex-direction:column;align-items:center;gap:0.25rem;">
        ${sourcePosterUrl
          ? `<img src="${esc(sourcePosterUrl)}" alt="${esc(sourceShow.title)} poster" width="74" height="110" style="border-radius:6px;object-fit:cover;object-position:center top;" loading="${idx < 2 ? 'eager' : 'lazy'}" onerror="this.style.display='none'">`
          : `<div style="width:74px;height:110px;border-radius:6px;background:linear-gradient(135deg,rgba(232,97,77,0.15),rgba(100,80,160,0.15));display:flex;align-items:center;justify-content:center;font-size:1.4rem;">${isWesternSource ? '\uD83C\uDFAC' : '\uD83C\uDDF0\uD83C\uDDF7'}</div>`}
        <div style="font-size:0.58rem;text-transform:uppercase;letter-spacing:0.1em;color:var(--text-3);font-weight:700;">you watch</div>
      </div>
      <div style="display:flex;flex-direction:column;align-items:center;gap:0.15rem;padding:0 0.3rem;">
        <div style="font-size:0.72rem;font-weight:700;color:var(--coral);white-space:nowrap;">${pct}%</div>
        <div style="font-size:0.85rem;color:rgba(232,97,77,0.6);">\u2192</div>
      </div>
      <div style="display:flex;flex-direction:column;align-items:center;gap:0.25rem;">
        ${recPosterUrl
          ? `<a href="/drama/${s.id}"><img src="${esc(recPosterUrl)}" alt="${esc(s.title)} poster" width="74" height="110" style="border-radius:6px;object-fit:cover;object-position:center top;" loading="${idx < 2 ? 'eager' : 'lazy'}" onerror="this.style.display='none'"></a>`
          : `<div style="width:74px;height:110px;border-radius:6px;background:linear-gradient(135deg,rgba(232,97,77,0.15),rgba(100,80,160,0.15));display:flex;align-items:center;justify-content:center;font-size:1.4rem;">\uD83C\uDDF0\uD83C\uDDF7</div>`}
        <div style="font-size:0.58rem;text-transform:uppercase;letter-spacing:0.1em;color:var(--text-3);font-weight:700;">you'll love</div>
      </div>
    </div>`;
    return `
    <article class="drama-card" itemscope itemtype="https://schema.org/${s.runtime ? 'Movie' : 'TVSeries'}">
      ${posterPairHtml}
      <div class="card-top">
        <h2 itemprop="name"><a href="/drama/${s.id}">${esc(s.title)}</a></h2>
        <span class="match-score">${pct}% match</span>
      </div>
      <div class="meta-row">
        ${s.year ? `<span class="badge year" itemprop="datePublished">${s.year}</span>` : ''}
        ${s.episodes ? `<span class="badge">${s.episodes} eps</span>` : ''}
        ${s.network ? `<span class="badge network">${esc(s.network)}</span>` : ''}
        ${genreTags}
        ${tropeTags}
      </div>
      ${s.synopsis ? `<p class="synopsis" itemprop="description">${esc(s.synopsis.substring(0, 180))}${s.synopsis.length > 180 ? '…' : ''}</p>` : ''}
      ${vibeMeterHtml}
      ${r.reasoning ? `<p class="reasoning">${esc(r.reasoning.replace(/\*\*/g, ''))}</p>` : ''}
      ${watchButtons ? `<div class="watch-now-section"><div class="watch-now-label">Where to Watch</div><div class="watch-now-buttons">${watchButtons}</div></div>` : ''}
    </article>`;
  }).join('\n');

  const sourceH1Prefix = isWesternTV ? 'K-Dramas Like'
    : sourceShow.type === 'western-movie' ? 'Asian Films Like'
    : (sourceShow.type === 'kmovie' || sourceShow.type === 'jmovie' || sourceShow.type === 'anime-movie') ? 'Western Films Like'
    : isAsianSource ? 'Western Shows Like'
    : 'Shows Like';

  const bodyContent = `
    <section class="hero-section">
      <h1>${sourceH1Prefix} <em>${esc(sourceShow.title)}</em></h1>
      <p class="subtitle">
        ${isWesternTV
          ? `Same energy. Different language. These Korean, Chinese, and Japanese dramas share the exact DNA of ${esc(sourceShow.title)} — same story beats, same emotional intensity, same kind of show.`
          : isWesternSource
            ? `Loved ${esc(sourceShow.title)}? These Asian films and dramas share the same DNA — same tropes, same emotional beats, same kind of story.`
            : isAsianSource
              ? `Same energy. Western accent. These shows and movies share the exact story DNA of ${esc(sourceShow.title)} — same tropes, same emotional beats, same kind of story.`
              : `Loved ${esc(sourceShow.title)}? These picks share the same story DNA — same tropes, same emotional beats, same kind of show.`}
      </p>
      <div class="meta-row" style="margin-top:12px">
        ${sourceShow.year ? `<span class="badge year">${sourceShow.year}</span>` : ''}
        <span class="badge">${showType === 'movie' ? 'Movie' : 'TV Show'}</span>
        ${(sourceShow.genres || []).slice(0, 3).map(g => `<span class="badge genre">${esc(g)}</span>`).join(' ')}
        ${(sourceShow.tropes || []).slice(0, 2).map(t => `<span class="badge trope">${esc(t.replace(/-/g, ' '))}</span>`).join(' ')}
      </div>
    </section>

    <div class="section-title">${recommendations.length} ${recLabel}</div>
    <div id="match-results-grid" class="card-grid">
      ${cardsHtml}
    </div>

    ${inlineNewsletterHtml('Get weekly K-drama picks', 'Join 2,000+ fans. New matches every week.', 'match_page', 'inl-match')}

    ${comparisonPageConfig ? `
    <section style="background:linear-gradient(135deg,rgba(232,97,77,0.06),rgba(212,168,83,0.06));border:1px solid rgba(232,97,77,0.25);border-radius:12px;padding:20px 24px;margin-bottom:32px;">
      <div style="font-size:0.72rem;font-weight:700;text-transform:uppercase;letter-spacing:0.08em;color:var(--coral);margin-bottom:8px;">Deep-Dive Guide</div>
      <h3 style="font-size:1rem;font-weight:600;margin-bottom:6px;"><a href="/${esc(comparisonPageConfig.slug)}" style="color:var(--text);">${esc(comparisonPageConfig.h1)}</a></h3>
      <p style="color:var(--text-2);font-size:0.87rem;margin-bottom:10px;">${esc(comparisonPageConfig.metaDescription)}</p>
      <a href="/${esc(comparisonPageConfig.slug)}" style="font-size:0.82rem;color:var(--coral);">See the full curated list with reasoning →</a>
    </section>` : ''}

    ${listPageSlug ? `
    <section style="background:linear-gradient(135deg,rgba(74,222,128,0.05),rgba(212,168,83,0.05));border:1px solid rgba(74,222,128,0.2);border-radius:12px;padding:20px 24px;margin-bottom:32px;">
      <div style="font-size:0.72rem;font-weight:700;text-transform:uppercase;letter-spacing:0.08em;color:var(--green);margin-bottom:8px;">Ranked List</div>
      <h3 style="font-size:1rem;font-weight:600;margin-bottom:6px;"><a href="/${esc(listPageSlug)}" style="color:var(--text);">10 Best K-Dramas for ${esc(sourceShow.title)} Fans</a></h3>
      <p style="color:var(--text-2);font-size:0.87rem;margin-bottom:10px;">Numbered, ranked, and reviewed — with poster images, vibe meters, and streaming links for every pick.</p>
      <a href="/${esc(listPageSlug)}" style="font-size:0.82rem;color:var(--green);">See the full ranked list →</a>
    </section>` : ''}

    ${blogPost ? `
    <section style="background:var(--bg-card);border:1px solid rgba(212,168,83,0.3);border-radius:12px;padding:20px 24px;margin-bottom:32px;">
      <div style="font-size:0.72rem;font-weight:700;text-transform:uppercase;letter-spacing:0.08em;color:var(--gold);margin-bottom:8px;">K-Drama Guide</div>
      <h3 style="font-size:1rem;font-weight:600;margin-bottom:6px;"><a href="/blog/${esc(blogPost.slug)}" style="color:var(--text);">${esc(blogPost.h1)}</a></h3>
      <p style="color:var(--text-2);font-size:0.87rem;margin-bottom:10px;">${esc(blogPost.metaDescription)}</p>
      <a href="/blog/${esc(blogPost.slug)}" style="font-size:0.82rem;color:var(--coral);">Read the full guide →</a>
    </section>` : ''}

    ${relatedShows && relatedShows.length ? `
    <section style="border-top:1px solid var(--border);padding-top:32px;margin-bottom:32px;">
      <div class="section-title">${isWesternSource ? 'more shows you might be obsessed with 🔥' : isAsianSource ? 'more dramas with the same vibe 🎬' : 'western shows with similar vibes — find their Asian matches 🌏'}</div>
      <div class="related-grid">
        ${relatedShows.map(s => `
        <a href="/match/${s.id}" style="display:block;background:var(--bg-card);border:1px solid var(--border);border-radius:8px;padding:14px 16px;text-decoration:none;transition:border-color 0.2s;" onmouseover="this.style.borderColor='rgba(232,97,77,0.4)'" onmouseout="this.style.borderColor='var(--border)'">
          <div style="font-weight:500;color:var(--text);font-size:0.875rem;">${esc(s.title)}</div>
          <div style="color:var(--text-3);font-size:0.78rem;margin-top:2px;">${s.year ? s.year + ' · ' : ''}${isAsianSource ? 'find its Western match →' : 'Asian dramas like this →'}</div>
        </a>`).join('\n')}
      </div>
    </section>` : ''}

    ${faqAccordionHtml(matchFaqs, `${pageLabel}: FAQ`)}

    <section class="cta-section">
      <p>${isAsianSource ? `obsessed with another drama? I can find its Western match too.` : `got another show you're obsessed with? I can find its Asian drama match too.`}</p>
      <a href="/" class="btn-primary">find another match →</a>
    </section>
  `;

  return pageShell({
    title, description, canonical,
    jsonLd,
    breadcrumbs: `<span>›</span> <span>${esc(pageLabel)}</span>`,
    breadcrumbTrail: [{ name: pageLabel, url: canonical }],
    bodyContent,
    pageType: 'match'
  });
}

/** Generate a mood category page */
function moodPage(mood, recommendations) {
  if (!mood || !recommendations) return null;

  // Normalise field names: engine returns { title, description } while some callers pass { label, desc }
  const label = mood.label || mood.title || mood.id;
  const desc = mood.desc || mood.description || '';
  const emoji = mood.emoji || '';

  const title = `${label} K-Dramas — ${desc} | DramaMatch`;
  const description = `Looking for K-dramas that ${label.toLowerCase()}? Here are the best Korean dramas for ${desc.toLowerCase()}: ${recommendations.slice(0, 4).map(r => r.show.title).join(', ')} and more.`;
  const canonical = `${BASE_URL}/mood/${mood.id}`;

  const itemListElements = recommendations.map((r, i) => {
    const s = r.show;
    const isMovieType = s.type === 'kmovie' || s.type === 'jmovie' || s.type === 'anime-movie';
    const schemaType = isMovieType ? 'Movie' : 'TVSeries';
    const posterUrl = getPosterUrl(s.id);
    const itemObj = {
      '@type': schemaType,
      '@id': `${BASE_URL}/drama/${s.id}`,
      'name': s.title,
      'url': `${BASE_URL}/drama/${s.id}`
    };
    if (posterUrl) itemObj.image = posterUrl;
    if (s.synopsis) itemObj.description = s.synopsis.substring(0, 150);
    if (s.year) itemObj.datePublished = String(s.year);
    return { '@type': 'ListItem', 'position': i + 1, 'item': itemObj };
  });

  // Mood-specific FAQ
  const moodFaqs = [
    {
      q: `What are the best ${label} K-dramas?`,
      a: recommendations.length > 0
        ? `The top ${label.toLowerCase()} K-dramas on DramaMatch are <a href="/drama/${recommendations[0].show.id}">${recommendations[0].show.title}</a>${recommendations[1] ? `, <a href="/drama/${recommendations[1].show.id}">${recommendations[1].show.title}</a>` : ''}${recommendations[2] ? `, and <a href="/drama/${recommendations[2].show.id}">${recommendations[2].show.title}</a>` : ''}. ${desc}`
        : `Browse the DramaMatch ${label.toLowerCase()} mood page for curated recommendations.`
    },
    {
      q: `Where can I watch ${label.toLowerCase()} K-dramas?`,
      a: `${label} K-dramas are available on Netflix, Viki (free with ads), Amazon Prime Video, Disney+, and Hulu. Each recommendation on this page shows which platforms carry it.`
    },
    {
      q: `How does DramaMatch find ${label.toLowerCase()} K-dramas?`,
      a: `DramaMatch uses a 6-dimensional algorithm comparing genres, themes, tropes, tone, setting, and character types. The ${label.toLowerCase()} mood filter weights tone and tropes heavily to surface dramas that match the exact emotional experience you're looking for.`
    },
    {
      q: `Are there K-dramas on Netflix that are ${label.toLowerCase()}?`,
      a: `Yes — several ${label.toLowerCase()} K-dramas are on Netflix. DramaMatch shows Netflix availability for each recommendation. Browse this page and look for the Netflix badge on each drama card.`
    }
  ];

  const jsonLd = [
    {
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      'name': `${mood.label} K-Dramas`,
      'description': description,
      'url': canonical,
      'numberOfItems': recommendations.length,
      'itemListElement': itemListElements
    },
    buildFaqSchema(moodFaqs)
  ];

  const cardsHtml = recommendations.map(r => {
    const s = r.show;
    const genreTags = (s.genres || []).slice(0, 3).map(g => `<span class="badge genre">${esc(g)}</span>`).join(' ');
    const watchButtons = watchNowButtons(s.streaming, s.id, s.title);
    const vb2 = computeVibeScores(s);
    const vmAxes2 = [
      { l: 'Gritty',    r: 'Fluffy',     s: vb2.grittyFluffy,     g: 'linear-gradient(to right,#64748b,#f9a8d4)' },
      { l: 'Slow-Burn', r: 'Fast-Paced', s: vb2.slowFast,         g: 'linear-gradient(to right,#93c5fd,#fbbf24)' },
      { l: 'Cynical',   r: 'Heartfelt',  s: vb2.cynicalHeartfelt, g: 'linear-gradient(to right,#4b5563,#fb7185)' },
      { l: 'Light',     r: 'Heavy',      s: vb2.lightHeavy,       g: 'linear-gradient(to right,#86efac,#818cf8)' }
    ];
    const vibeMeterHtml2 = `<div class="vibe-meter-section">
      <div class="vibe-meter-title">Vibe Check</div>
      ${vmAxes2.map(a => `<div class="vibe-meter-row">
        <span class="vibe-lbl vibe-lbl-l">${a.l}</span>
        <div class="vibe-track" style="background:${a.g};"><div class="vibe-dot" style="left:${Math.round(a.s*100)}%;"></div></div>
        <span class="vibe-lbl vibe-lbl-r">${a.r}</span>
      </div>`).join('')}
    </div>`;
    return `
    <article class="drama-card" itemscope itemtype="https://schema.org/TVSeries">
      <div class="card-top">
        <h2 itemprop="name"><a href="/drama/${s.id}">${esc(s.title)}</a></h2>
      </div>
      <div class="meta-row">
        ${s.year ? `<span class="badge year" itemprop="datePublished">${s.year}</span>` : ''}
        ${s.episodes ? `<span class="badge">${s.episodes} eps</span>` : ''}
        ${s.network ? `<span class="badge network">${esc(s.network)}</span>` : ''}
        ${genreTags}
      </div>
      ${s.synopsis ? `<p class="synopsis" itemprop="description">${esc(s.synopsis.substring(0, 180))}${s.synopsis.length > 180 ? '…' : ''}</p>` : ''}
      ${vibeMeterHtml2}
      ${watchButtons ? `<div class="watch-now-section" style="margin-top:10px;"><div class="watch-now-label">Where to Watch</div><div class="watch-now-buttons">${watchButtons}</div></div>` : ''}
    </article>`;
  }).join('\n');

  const moodLinks = ['cry-it-out','feel-good','edge-of-seat','laugh-out-loud','epic-romance','dark-twisted']
    .filter(id => id !== mood.id)
    .map(id => {
      const labels = {
        'cry-it-out': '😭 Need a Good Cry',
        'feel-good': '☀️ Make Me Happy',
        'edge-of-seat': '😱 Edge of My Seat',
        'laugh-out-loud': '😂 Make Me Laugh',
        'epic-romance': '💘 Epic Romance',
        'dark-twisted': '🌑 Dark & Twisted'
      };
      return `<a href="/mood/${id}" class="related-card"><div>${labels[id] || id}</div></a>`;
    }).join('');

  const bodyContent = `
    <section class="hero-section">
      <h1>${emoji} ${esc(label)} K-Dramas</h1>
      <p class="subtitle">${esc(desc)} — the best Korean dramas for when you're in the mood.</p>
    </section>

    <div class="section-title">${recommendations.length} K-Dramas</div>
    <div class="card-grid">
      ${cardsHtml}
    </div>

    ${moodLinks ? `
    <section class="related-section">
      <div class="section-title">Other Moods</div>
      <div class="related-grid">${moodLinks}</div>
    </section>` : ''}

    ${faqAccordionHtml(moodFaqs, `${label} K-Dramas: FAQ`)}

    ${inlineNewsletterHtml('Want more lists like this?', 'Weekly picks — curated lists, hidden gems, new releases. No spam.', 'mood_page', 'inl-mood')}

    <section class="cta-section">
      <p>or I can match you based on a specific show you already love.</p>
      <a href="/" class="btn-primary">find my match →</a>
    </section>
  `;

  return pageShell({
    title, description, canonical,
    jsonLd,
    breadcrumbs: `<span>›</span> <span>${esc(label)}</span>`,
    breadcrumbTrail: [{ name: `${label} K-Dramas`, url: canonical }],
    bodyContent
  });
}

/**
 * ACTOR_PROFILES — Bio, photo, and context for key actors.
 * Keys are lowercase slugified names matching the actor index key.
 * photo: TMDB person image path (via /api/poster proxy) or null
 */
const ACTOR_PROFILES = {
  'iu': {
    displayName: 'IU (Lee Ji-eun)',
    nationality: 'Korean',
    born: '1993',
    knownFor: 'My Mister, Hotel del Luna, When Life Gives You Tangerines',
    tagline: 'Korea\'s national younger sister — now its most nuanced dramatic actor.',
    bio: 'IU (이지은 / Lee Ji-eun) began as a singer and became one of the most successful solo artists in Korean pop history. But somewhere along the way she also quietly became one of the best dramatic actors working in K-drama. The pivot was complete with My Mister (2018), where she matched Lee Sun-kyun scene for scene in one of the most emotionally demanding roles the medium has produced. Hotel del Luna (2019) proved it wasn\'t a fluke — she carried a 16-episode supernatural fantasy on pure presence. With When Life Gives You Tangerines (2025), she is now building a legacy that belongs to both worlds: the singer who became an actor, and the actor who was always going to become this good.',
    accentColor: '#d4a853',
    accentBg: 'rgba(212,168,83,0.12)',
    accentBorder: 'rgba(212,168,83,0.3)',
    photo: null // TMDB: /cqQzOFbGsMbJNJoGU7RQz3p0vkH.jpg — add when verified
  },
  'byeon-woo-seok': {
    displayName: 'Byeon Woo-seok',
    nationality: 'Korean',
    born: '1991',
    knownFor: 'Lovely Runner, Record of Youth',
    tagline: 'The male lead who broke the internet in 2024 — and made everyone go back to watch everything he was ever in.',
    bio: 'Byeon Woo-seok (변우석) spent years in supporting roles — Record of Youth (2020), Flower of Evil, Shooting Stars — building technique while the leads took the flowers. Then came Lovely Runner (2024) and the entire K-drama community lost its mind simultaneously. His Ryu Sun-jae is one of the warmest, most fully realized romantic leads the genre has produced: a character who is devoted without being passive, emotionally intelligent without being unrealistic. The show made him a star, but the talent was always there.',
    accentColor: '#60a5fa',
    accentBg: 'rgba(96,165,250,0.12)',
    accentBorder: 'rgba(96,165,250,0.3)',
    photo: null // TMDB: add path when verified
  },
  'jisoo': {
    displayName: 'Jisoo (BLACKPINK)',
    nationality: 'Korean',
    born: '1995',
    knownFor: 'Snowdrop, The Producers',
    tagline: 'BLACKPINK\'s Jisoo — the idol who proved she could hold a K-drama lead role.',
    bio: 'Kim Ji-soo (김지수), known as Jisoo, is the visual and vocalist of BLACKPINK — one of the most globally successful K-pop groups ever. Her leading role in Snowdrop (2021) generated enormous pre-air anticipation and a firestorm of controversy, but her performance held. She brings the kind of screen presence that fame alone cannot manufacture.',
    accentColor: '#f472b6',
    accentBg: 'rgba(244,114,182,0.12)',
    accentBorder: 'rgba(244,114,182,0.3)',
    photo: null
  }
};

/** Generate a server-rendered actor filmography page */
function actorPage(actorName, shows) {
  if (!actorName || !shows) return null;

  const slug = slugify(actorName);
  const canonical = `${BASE_URL}/actor/${slug}`;
  const profile = ACTOR_PROFILES[slug] || null;
  const displayName = (profile && profile.displayName) ? profile.displayName : actorName;

  const title = `${displayName} — K-Drama Filmography & Shows | DramaMatch`;
  const baseDesc = profile
    ? `${profile.bio.substring(0, 155)}…`
    : `Every K-drama and Korean movie featuring ${actorName}. See all ${shows.length} appearances, characters, and streaming info on DramaMatch.`;
  const description = baseDesc;

  // Person + ItemList schema
  const schemaJobTitle = profile ? 'Actor' : 'Actor';
  const jsonLd = [
    {
      '@context': 'https://schema.org',
      '@type': 'Person',
      'name': displayName,
      'url': canonical,
      'jobTitle': schemaJobTitle,
      'nationality': profile ? profile.nationality : 'Korean',
      'knowsAbout': 'Korean Drama',
      'performerIn': shows.map(s => ({
        '@type': s.show.type === 'kmovie' ? 'Movie' : 'TVSeries',
        'name': s.show.title,
        'datePublished': String(s.show.year || ''),
        'url': `${BASE_URL}/drama/${s.show.id}`
      }))
    },
    {
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      'name': `${displayName} K-Drama Filmography`,
      'description': description,
      'url': canonical,
      'numberOfItems': shows.length,
      'itemListElement': shows.map((s, i) => {
        const show = s.show;
        const isMovieType = show.type === 'kmovie' || show.type === 'jmovie' || show.type === 'anime-movie';
        const schemaType = isMovieType ? 'Movie' : 'TVSeries';
        const posterUrl = getPosterUrl(show.id);
        const itemObj = {
          '@type': schemaType,
          '@id': `${BASE_URL}/drama/${show.id}`,
          'name': show.title,
          'url': `${BASE_URL}/drama/${show.id}`
        };
        if (posterUrl) itemObj.image = posterUrl;
        if (show.year) itemObj.datePublished = String(show.year);
        return { '@type': 'ListItem', 'position': i + 1, 'item': itemObj };
      })
    }
  ];

  const cardsHtml = shows.map(s => {
    const show = s.show;
    const genreTags = (show.genres || []).slice(0, 3).map(g => `<span class="badge genre">${esc(g)}</span>`).join(' ');
    const leadBadge = s.isLead ? '<span class="badge" style="color:var(--coral);border-color:rgba(232,97,77,0.4)">Lead</span>' : '';
    // Streaming badges
    const streamingPlatforms = Object.keys(show.streaming || {}).filter(p => show.streaming[p]);
    const streamBadges = streamingPlatforms.slice(0, 2).map(p => {
      const cfg = PLATFORMS[p];
      if (!cfg) return '';
      return `<a href="${cfg.buildUrl(show.title)}" target="_blank" rel="noopener" class="badge platform-badge" style="color:${cfg.color};border-color:${cfg.borderColor};background:${cfg.bgColor};">${esc(cfg.name)}</a>`;
    }).join(' ');
    return `
    <article class="drama-card" itemscope itemtype="https://schema.org/${show.type === 'kmovie' ? 'Movie' : 'TVSeries'}">
      <div class="card-top">
        <h2 itemprop="name"><a href="/drama/${show.id}">${esc(show.title)}</a></h2>
        ${leadBadge}
      </div>
      <div class="meta-row">
        ${show.year ? `<span class="badge year" itemprop="datePublished">${show.year}</span>` : ''}
        ${show.episodes ? `<span class="badge">${show.episodes} eps</span>` : ''}
        ${show.network ? `<span class="badge network">${esc(show.network)}</span>` : ''}
        ${genreTags}
      </div>
      ${streamBadges ? `<div class="meta-row" style="margin-top:6px;">${streamBadges}</div>` : ''}
      ${s.role ? `<p class="synopsis" style="margin-top:8px;">Role: <strong>${esc(s.role)}</strong></p>` : ''}
      ${show.synopsis ? `<p class="synopsis">${esc(show.synopsis.substring(0, 160))}${show.synopsis.length > 160 ? '…' : ''}</p>` : ''}
    </article>`;
  }).join('\n');

  // Profile header section (enhanced if we have a profile)
  const accentColor = profile ? profile.accentColor : 'var(--coral)';
  const accentBg = profile ? profile.accentBg : 'rgba(232,97,77,0.12)';
  const accentBorder = profile ? profile.accentBorder : 'rgba(232,97,77,0.3)';
  const initials = displayName.split(/\s+/).slice(0, 2).map(w => w[0] && w[0].toUpperCase()).filter(Boolean).join('');

  const photoHtml = (profile && profile.photo)
    ? `<img src="/api/poster${profile.photo}" alt="${esc(displayName)}" class="actor-profile-photo" loading="eager">`
    : `<div class="actor-profile-initial" style="background:${accentBg};color:${accentColor};border:2px solid ${accentBorder};">${esc(initials)}</div>`;

  const bioSection = profile ? `
    <section class="actor-bio-section">
      <div class="actor-bio-header">
        ${photoHtml}
        <div class="actor-bio-meta">
          <h1 itemprop="name" itemscope itemtype="https://schema.org/Person">${esc(displayName)}</h1>
          ${profile.tagline ? `<p class="actor-tagline">${esc(profile.tagline)}</p>` : ''}
          <div class="actor-meta-chips">
            ${profile.nationality ? `<span class="meta-chip">🌏 ${esc(profile.nationality)}</span>` : ''}
            ${profile.born ? `<span class="meta-chip">Born ${esc(profile.born)}</span>` : ''}
            <span class="meta-chip">${shows.length} titles</span>
          </div>
        </div>
      </div>
      <p class="actor-bio-text">${esc(profile.bio)}</p>
    </section>` : `
    <section class="hero-section">
      <h1 itemprop="name" itemscope itemtype="https://schema.org/Person">${esc(displayName)}</h1>
      <p class="subtitle">${shows.length} Asian drama${shows.length !== 1 ? 's' : ''} and movies in the DramaMatch catalog.</p>
    </section>`;

  // Extra CSS for actor bio layout (injected inline — minimal)
  const actorPageStyles = `<style>
    .actor-bio-section {
      max-width: 760px;
      margin: 0 auto;
      padding: 48px 24px 36px;
      border-bottom: 1px solid var(--border);
    }
    .actor-bio-header {
      display: flex;
      align-items: flex-start;
      gap: 28px;
      margin-bottom: 28px;
    }
    .actor-profile-photo {
      width: 110px;
      height: 110px;
      border-radius: 16px;
      object-fit: cover;
      border: 2px solid ${accentBorder};
      flex-shrink: 0;
    }
    .actor-profile-initial {
      width: 110px;
      height: 110px;
      border-radius: 16px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-family: 'Space Grotesk', sans-serif;
      font-weight: 700;
      font-size: 2.2rem;
      flex-shrink: 0;
    }
    .actor-bio-meta h1 {
      font-family: 'Space Grotesk', sans-serif;
      font-size: 2rem;
      font-weight: 700;
      margin-bottom: 8px;
      line-height: 1.2;
      color: var(--text-primary);
    }
    .actor-tagline {
      color: var(--text-secondary);
      font-size: 1rem;
      margin-bottom: 14px;
      line-height: 1.5;
    }
    .actor-meta-chips {
      display: flex;
      flex-wrap: wrap;
      gap: 8px;
    }
    .meta-chip {
      font-size: 0.78rem;
      font-weight: 600;
      padding: 4px 12px;
      border-radius: 20px;
      background: var(--bg-accent);
      border: 1px solid var(--border);
      color: var(--text-secondary);
    }
    .actor-bio-text {
      color: var(--text-secondary);
      font-size: 0.97rem;
      line-height: 1.75;
      max-width: 680px;
    }
    .platform-badge {
      text-decoration: none;
      font-size: 0.75rem !important;
      font-weight: 600;
    }
    @media (max-width: 560px) {
      .actor-bio-header { flex-direction: column; gap: 16px; }
      .actor-profile-initial, .actor-profile-photo { width: 80px; height: 80px; font-size: 1.6rem; }
      .actor-bio-meta h1 { font-size: 1.5rem; }
    }
  </style>`;

  const bodyContent = `
    ${actorPageStyles}

    ${bioSection}

    <div class="section-title" style="max-width:760px;margin:0 auto;padding-left:24px;padding-right:24px;">${shows.length} Appearance${shows.length !== 1 ? 's' : ''} in the DramaMatch Catalog</div>
    <div class="card-grid" style="max-width:760px;margin:0 auto;padding:0 24px;">
      ${cardsHtml}
    </div>

    <section class="cta-section">
      <p>obsessed with their vibe? find K-dramas with the same energy.</p>
      <a href="/" class="btn-primary">find my match →</a>
    </section>
  `;

  return pageShell({
    title, description, canonical,
    jsonLd,
    breadcrumbs: `<span>›</span> <a href="/actors">Actor Dives</a> <span>›</span> <span>${esc(displayName)}</span>`,
    breadcrumbTrail: [
      { name: 'Actor Dives', url: `${BASE_URL}/actors` },
      { name: displayName, url: canonical }
    ],
    bodyContent
  });
}

/**
 * Blog article page — "Top K-dramas for [Show] fans"
 * @param {Object} post  - Blog post config { slug, h1, metaTitle, metaDescription, intro, sections }
 * @param {Object} sourceShow - Western show object from engine
 * @param {Array}  recommendations - Array of { show, matchScore, reasoning } from engine
 */
function blogPage(post, sourceShow, recommendations, relatedPosts) {
  if (!post || !recommendations) return null;

  const canonical = `${BASE_URL}/blog/${post.slug}`;
  const title = post.metaTitle || post.h1;
  const description = post.metaDescription;

  // Blog FAQ — contextual to the source show/guide
  const showName = sourceShow ? sourceShow.title : 'this show';
  const topRecs = recommendations.slice(0, 3);
  const blogFaqs = [
    {
      q: post.h1,
      a: topRecs.length > 0
        ? `The best K-dramas for ${showName} fans are ${topRecs.map(r => r.show.title).join(', ')}. They share the same ${(sourceShow && sourceShow.genres || []).slice(0, 2).join(' and ')} DNA and are ranked by DramaMatch's 6-dimensional algorithm.`
        : `DramaMatch has curated the best K-dramas for ${showName} fans based on genre, themes, tropes, and tone.`
    },
    {
      q: `Is there a Korean version of ${showName}?`,
      a: topRecs.length > 0
        ? `The closest Korean equivalent to ${showName} is <a href="/drama/${topRecs[0].show.id}">${topRecs[0].show.title}</a> (${topRecs[0].show.year || ''}), scoring ${Math.round(topRecs[0].matchScore)}% on DramaMatch. <a href="/match/${sourceShow ? sourceShow.id : ''}">See all matches →</a>`
        : `Search DramaMatch to find the closest Korean drama to ${showName}.`
    },
    {
      q: `Where can I watch these K-dramas?`,
      a: `K-dramas in this guide are available on Netflix, Viki, Amazon Prime Video, Disney+, and Hulu. Each drama card on this page shows which streaming platforms carry it.`
    },
    {
      q: `Why should ${showName} fans try K-dramas?`,
      a: `K-dramas deliver the same storytelling intensity as ${showName} — tight season-long arcs, morally complex characters, and genre-blending narratives. Korean drama production values rival Hollywood, and the stories move faster with fewer filler episodes.`
    }
  ];

  // BlogPosting JSON-LD schema (more specific than Article — better for AI snippet extraction)
  const jsonLd = [
    {
      '@context': 'https://schema.org',
      '@type': 'BlogPosting',
      'headline': title,
      'description': description,
      'url': canonical,
      'datePublished': post.datePublished || '2025-01-01',
      'dateModified': new Date().toISOString().split('T')[0],
      'author': {
        '@type': 'Organization',
        'name': 'DramaMatch',
        'url': BASE_URL
      },
      'publisher': {
        '@type': 'Organization',
        'name': 'DramaMatch',
        'url': BASE_URL,
        'logo': { '@type': 'ImageObject', 'url': `${BASE_URL}/og-default.png`, 'width': 1200, 'height': 628 }
      },
      'mainEntityOfPage': { '@type': 'WebPage', '@id': canonical },
      'image': { '@type': 'ImageObject', 'url': `${BASE_URL}/og-default.png`, 'width': 1200, 'height': 628 },
      'speakable': {
        '@type': 'SpeakableSpecification',
        'cssSelector': ['h1', '.subtitle', '.faq-q', '.faq-a']
      },
      'about': recommendations.slice(0, 8).map((rec, i) => ({
        '@type': 'TVSeries',
        'position': i + 1,
        'name': rec.show.title,
        'url': `${BASE_URL}/drama/${rec.show.id}`,
        'description': rec.show.synopsis ? rec.show.synopsis.substring(0, 160) : undefined
      }))
    },
    buildFaqSchema(blogFaqs)
  ];

  // Build recommendation cards
  const recCards = recommendations.slice(0, 8).map((rec, i) => {
    const show = rec.show;
    const genreBadges = (show.genres || []).slice(0, 3).map(g => `<span class="badge genre">${esc(g)}</span>`).join(' ');
    const streamBadges = streamingBadges(show.streaming);
    const watchButtons = watchNowButtons(show.streaming, show.id, show.title);
    const score = rec.matchScore || 0;
    const reasoning = rec.reasoning || rec.matchReasoningHints || '';

    return `
    <article class="drama-card" id="pick-${i + 1}">
      <div class="card-top">
        <h2><a href="/drama/${esc(show.id)}">${i + 1}. ${esc(show.title)}</a></h2>
        ${score ? `<div class="match-score" title="DramaMatch score">${score}%</div>` : ''}
      </div>
      <div class="meta-row">
        ${show.year ? `<span class="badge year">${show.year}</span>` : ''}
        ${show.episodes ? `<span class="badge">${show.episodes} eps</span>` : ''}
        ${genreBadges}
        ${streamBadges}
      </div>
      ${show.synopsis ? `<p class="synopsis">${esc(show.synopsis.substring(0, 200))}…</p>` : ''}
      ${reasoning ? `<p class="reasoning">"${esc(typeof reasoning === 'string' ? reasoning : (Array.isArray(reasoning) ? reasoning[0] : ''))}"</p>` : ''}
      ${watchButtons ? `
      <div class="watch-now-section">
        <div class="watch-now-label">Where to Watch</div>
        <div class="watch-now-buttons">${watchButtons}</div>
      </div>` : ''}
      <div style="margin-top:12px;">
        <a href="/match/${esc(sourceShow ? sourceShow.id : '')}" style="font-size:0.82rem;color:var(--text-3);">
          ← See all K-dramas like ${esc(sourceShow ? sourceShow.title : 'this show')}
        </a>
      </div>
    </article>`;
  }).join('\n');

  // Intro paragraph
  const introText = post.intro || `okay so if you love <strong>${esc(sourceShow ? sourceShow.title : '')}</strong>, we need to talk. these K-dramas share its exact DNA — same energy, same tension, same emotional devastation. DramaMatch matched them by tropes, tone, and story structure. you're gonna be so obsessed.`;

  // Why K-dramas section (generic)
  const whySection = post.whyKdramas ? `
    <section style="background:var(--bg-card);border:1px solid var(--border);border-radius:12px;padding:24px;margin-bottom:32px;">
      <h2 style="font-size:1.1rem;font-weight:700;margin-bottom:12px;">Why K-dramas?</h2>
      <p style="color:var(--text-2);line-height:1.7;">${post.whyKdramas}</p>
    </section>` : '';

  const bodyContent = `
    <section class="hero-section">
      <div style="font-size:0.82rem;color:var(--text-3);margin-bottom:12px;text-transform:uppercase;letter-spacing:0.06em;">Blog · K-Drama Guides</div>
      <h1>${esc(post.h1)}</h1>
      <p class="subtitle">${introText}</p>
      <div class="meta-row" style="margin-top:20px;">
        <span class="badge">📺 ${recommendations.length} recommendations</span>
        ${sourceShow ? `<a href="/match/${esc(sourceShow.id)}" style="font-size:0.82rem;padding:4px 10px;background:rgba(232,97,77,0.1);border:1px solid rgba(232,97,77,0.3);border-radius:6px;color:var(--coral);">Full match engine →</a>` : ''}
      </div>
    </section>

    ${whySection}

    <section>
      <div class="section-title">Top Picks</div>
      <div class="card-grid">
        ${recCards}
      </div>
    </section>

    ${relatedPosts && relatedPosts.length ? `
    <section style="border-top:1px solid var(--border);padding-top:32px;margin-bottom:32px;">
      <div class="section-title">More K-Drama Guides</div>
      <div style="display:grid;gap:12px;">
        ${relatedPosts.slice(0, 4).map(p => `
        <a href="/blog/${esc(p.slug)}" style="display:block;background:var(--bg-card);border:1px solid var(--border);border-radius:8px;padding:14px 18px;text-decoration:none;transition:border-color 0.2s;" onmouseover="this.style.borderColor='rgba(232,97,77,0.4)'" onmouseout="this.style.borderColor='var(--border)'">
          <div style="font-weight:600;color:var(--text);font-size:0.9rem;margin-bottom:4px;">${esc(p.h1)}</div>
          <div style="color:var(--text-2);font-size:0.82rem;">${esc(p.metaDescription.substring(0, 100))}…</div>
          <div style="margin-top:8px;font-size:0.78rem;color:var(--coral);">Read guide →</div>
        </a>`).join('\n')}
      </div>
    </section>` : ''}

    ${faqAccordionHtml(blogFaqs)}

    <section class="cta-section">
      <h2 style="font-size:1.4rem;font-weight:700;margin-bottom:12px;">find the K-drama made for you</h2>
      <p>type any show you love — I'll find the K-drama that shares its exact energy. you're gonna be obsessed.</p>
      <a href="/" class="btn-primary">find my match →</a>
    </section>`;

  return pageShell({
    title,
    description,
    canonical,
    ogImage: `${BASE_URL}/og/${post.slug}.png`,
    jsonLd,
    breadcrumbs: `<span>›</span> <a href="/blog">Blog</a> <span>›</span> <span>${esc(post.h1)}</span>`,
    breadcrumbTrail: [
      { name: 'Blog', url: `${BASE_URL}/blog` },
      { name: post.h1, url: canonical }
    ],
    bodyContent
  });
}

/**
 * Blog index page listing all articles
 */
function blogIndexPage(posts) {
  const title = 'K-Drama Guides & Recommendations | DramaMatch Blog';
  const description = 'Find the perfect K-drama based on your favorite Western shows. Breaking Bad, Stranger Things, Game of Thrones — we have a K-drama for every fan.';
  const canonical = `${BASE_URL}/blog`;

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    'name': 'DramaMatch Blog',
    'description': description,
    'url': canonical,
    'publisher': { '@type': 'Organization', 'name': 'DramaMatch', 'url': BASE_URL }
  };

  const postCards = posts.map(post => `
    <a href="/blog/${esc(post.slug)}" style="display:block;background:var(--bg-card);border:1px solid var(--border);border-radius:12px;padding:20px 24px;text-decoration:none;transition:border-color 0.2s;" onmouseover="this.style.borderColor='rgba(232,97,77,0.4)'" onmouseout="this.style.borderColor='var(--border)'">
      <div style="font-size:0.75rem;text-transform:uppercase;letter-spacing:0.06em;color:var(--text-3);margin-bottom:8px;">K-Drama Guide</div>
      <h2 style="font-size:1.05rem;font-weight:700;color:var(--text);margin-bottom:8px;">${esc(post.h1)}</h2>
      <p style="color:var(--text-2);font-size:0.87rem;line-height:1.5;">${esc(post.metaDescription)}</p>
      <div style="margin-top:12px;font-size:0.82rem;color:var(--coral);">Read guide →</div>
    </a>`).join('\n');

  const bodyContent = `
    <section class="hero-section">
      <h1>K-Drama Guides</h1>
      <p class="subtitle">Love a Western show? We found the K-dramas that hit the same way. Hand-curated guides powered by the DramaMatch engine.</p>
    </section>
    <div style="display:grid;gap:16px;margin-bottom:48px;">
      ${postCards}
    </div>
    <section class="cta-section">
      <h2 style="font-size:1.4rem;font-weight:700;margin-bottom:12px;">don't see your show? just search it.</h2>
      <p>DramaMatch works for any Western show or movie — 702 titles in the catalog and counting.</p>
      <a href="/" class="btn-primary">find my K-drama twin →</a>
    </section>`;

  return pageShell({
    title,
    description,
    canonical,
    jsonLd,
    breadcrumbs: `<span>›</span> <span>Blog</span>`,
    breadcrumbTrail: [{ name: 'Blog', url: canonical }],
    bodyContent
  });
}

/**
 * Standalone cast guide page for a C-drama / trending show
 * No dependency on the recommendation engine — pure editorial content
 *
 * @param {Object} config
 *   slug, h1, metaTitle, metaDescription, datePublished,
 *   intro,          — opening paragraph HTML (safe — internal only)
 *   showId,         — drama catalog id for cross-link to /drama/:id
 *   castMembers,    — array of cast member objects (see below)
 *   novelSection,   — HTML block for the novel-reading section
 *   facebookPosts,  — array of {label, copy} ready-to-copy FB captions
 *   faqs            — array of {q, a} for FAQ accordion
 */
function castGuidePage(config) {
  const canonical = `${BASE_URL}/blog/${config.slug}`;
  const title = config.metaTitle;
  const description = config.metaDescription;

  const jsonLd = [
    {
      '@context': 'https://schema.org',
      '@type': 'Article',
      'headline': title,
      'description': description,
      'url': canonical,
      'datePublished': config.datePublished || '2025-01-01',
      'dateModified': new Date().toISOString().split('T')[0],
      'author': { '@type': 'Organization', 'name': 'DramaMatch' },
      'publisher': {
        '@type': 'Organization',
        'name': 'DramaMatch',
        'url': BASE_URL,
        'logo': { '@type': 'ImageObject', 'url': `${BASE_URL}/og-default.png` }
      },
      'mainEntityOfPage': { '@type': 'WebPage', '@id': canonical },
      'about': {
        '@type': 'TVSeries',
        'name': config.showTitle || config.h1,
        'url': config.showId ? `${BASE_URL}/drama/${config.showId}` : canonical
      }
    },
    buildFaqSchema(config.faqs || [])
  ];

  // Build cast member cards
  const castCards = (config.castMembers || []).map(member => {
    const actorSlug = slugify(member.name);
    const filmographyItems = (member.filmography || []).map(film => {
      const watchUrl = film.streamingUrl || null;
      const platformBadge = film.platform
        ? `<span class="badge platform">${esc(film.platform)}</span>`
        : '';
      const dramaLink = film.dramaId
        ? `<a href="/drama/${film.dramaId}" style="color:var(--text);font-weight:600;">${esc(film.title)}</a>`
        : `<strong>${esc(film.title)}</strong>`;
      return `
          <li style="margin-bottom:10px;padding-bottom:10px;border-bottom:1px solid var(--border);">
            <div style="display:flex;justify-content:space-between;align-items:flex-start;gap:8px;">
              <div>
                <div style="font-size:0.9rem;">${dramaLink} <span style="color:var(--text-3);font-size:0.82rem;">(${film.year || ''})</span></div>
                ${film.role ? `<div style="color:var(--text-2);font-size:0.82rem;margin-top:2px;">as <em>${esc(film.role)}</em></div>` : ''}
                ${film.note ? `<div style="color:var(--text-3);font-size:0.78rem;margin-top:2px;">${esc(film.note)}</div>` : ''}
              </div>
              <div style="display:flex;gap:4px;flex-shrink:0;flex-wrap:wrap;">
                ${platformBadge}
                ${watchUrl ? `<a href="${esc(watchUrl)}" target="_blank" rel="noopener noreferrer" class="watch-btn" style="background:rgba(232,97,77,0.12);color:var(--coral);border-color:rgba(232,97,77,0.35);font-size:0.72rem;padding:3px 8px;">▶ Watch</a>` : ''}
              </div>
            </div>
          </li>`;
    }).join('');

    const facebookHook = member.facebookHook
      ? `<div style="background:rgba(212,168,83,0.08);border:1px solid rgba(212,168,83,0.2);border-radius:8px;padding:12px 16px;margin-bottom:16px;font-size:0.88rem;color:var(--gold);font-style:italic;">"${esc(member.facebookHook)}"</div>`
      : '';

    const actorPageLink = `<a href="/actor/${actorSlug}" style="font-size:0.78rem;color:var(--text-3);margin-top:8px;display:inline-block;">→ See full filmography on DramaMatch</a>`;

    return `
    <article class="drama-card" id="cast-${actorSlug}" style="margin-bottom:24px;">
      <div class="card-top">
        <div>
          <h2 style="font-size:1.15rem;font-weight:700;color:var(--text);">${esc(member.name)}</h2>
          ${member.nativeName ? `<div style="color:var(--text-3);font-size:0.82rem;">${esc(member.nativeName)}</div>` : ''}
        </div>
        <div style="text-align:right;flex-shrink:0;">
          ${member.character ? `<div style="font-size:0.82rem;color:var(--coral);font-weight:600;">as ${esc(member.character)}</div>` : ''}
          ${member.role ? `<div style="font-size:0.75rem;color:var(--text-3);">${esc(member.role)}</div>` : ''}
        </div>
      </div>
      ${facebookHook}
      ${member.bio ? `<p style="color:var(--text-2);font-size:0.9rem;line-height:1.65;margin-bottom:14px;">${esc(member.bio)}</p>` : ''}
      ${filmographyItems ? `
      <div style="margin-top:12px;">
        <div class="section-title" style="margin-bottom:10px;">Other works</div>
        <ul style="list-style:none;padding:0;margin:0;">${filmographyItems}
        </ul>
      </div>` : ''}
      ${actorPageLink}
    </article>`;
  }).join('\n');

  // Facebook-ready captions section
  const fbSection = config.facebookPosts && config.facebookPosts.length ? `
    <section style="background:var(--bg-card);border:1px solid var(--border);border-radius:12px;padding:24px;margin-bottom:32px;">
      <h2 style="font-size:1.1rem;font-weight:700;margin-bottom:6px;">📱 Ready-to-Copy Facebook Captions</h2>
      <p style="color:var(--text-3);font-size:0.82rem;margin-bottom:20px;">Copy any of these for the DramaMatch Facebook page — post as-is or personalise further.</p>
      <div style="display:grid;gap:16px;">
        ${config.facebookPosts.map((post, i) => `
        <div style="background:var(--bg-accent);border:1px solid var(--border);border-radius:8px;padding:16px;">
          <div style="font-size:0.72rem;text-transform:uppercase;letter-spacing:0.06em;color:var(--text-3);margin-bottom:8px;">${esc(post.label)}</div>
          <p style="color:var(--text-2);font-size:0.88rem;line-height:1.65;white-space:pre-wrap;">${esc(post.copy)}</p>
        </div>`).join('\n')}
      </div>
    </section>` : '';

  const bodyContent = `
    <section class="hero-section">
      <div style="font-size:0.82rem;color:var(--text-3);margin-bottom:12px;text-transform:uppercase;letter-spacing:0.06em;">Blog · C-Drama Cast Guide</div>
      <h1>${esc(config.h1)}</h1>
      <p class="subtitle">${config.intro}</p>
      <div class="meta-row" style="margin-top:20px;">
        ${config.showId ? `<a href="/drama/${esc(config.showId)}" style="font-size:0.82rem;padding:4px 10px;background:rgba(232,97,77,0.1);border:1px solid rgba(232,97,77,0.3);border-radius:6px;color:var(--coral);">📺 Show page →</a>` : ''}
        <span class="badge">👥 ${(config.castMembers || []).length} cast members</span>
      </div>
    </section>

    <section style="margin-bottom:40px;">
      <div class="section-title" style="margin-bottom:20px;">Full Cast — Every Actor, Every Show</div>
      <div class="card-grid">
        ${castCards}
      </div>
    </section>

    ${config.novelSection ? `
    <section style="background:var(--bg-card);border:1px solid rgba(212,168,83,0.3);border-radius:12px;padding:24px;margin-bottom:32px;">
      <h2 style="font-size:1.1rem;font-weight:700;margin-bottom:14px;color:var(--gold);">📖 Read the Novel Online</h2>
      ${config.novelSection}
    </section>` : ''}

    ${fbSection}

    ${faqAccordionHtml(config.faqs || [], 'Frequently Asked Questions')}

    <section class="cta-section">
      <h2 style="font-size:1.4rem;font-weight:700;margin-bottom:12px;">obsessed with Pursuit of Jade? find what to watch next.</h2>
      <p>Tell me any show you love — I'll match you to the C-drama or K-drama that hits the same way.</p>
      <a href="/" class="btn-primary">find my next obsession →</a>
    </section>
  `;

  return pageShell({
    title,
    description,
    canonical,
    jsonLd,
    breadcrumbs: `<span>›</span> <a href="/blog">Blog</a> <span>›</span> <span>${esc(config.h1)}</span>`,
    breadcrumbTrail: [
      { name: 'Blog', url: `${BASE_URL}/blog` },
      { name: config.h1, url: canonical }
    ],
    bodyContent
  });
}

/**
 * Standalone K-drama listicle page (e.g., "10 K-Dramas Like Squid Game")
 * No dependency on the recommendation engine — pure editorial content.
 *
 * @param {Object} config
 *   slug, h1, metaTitle, metaDescription, datePublished,
 *   intro  — opening paragraph text
 *   picks  — array of { id, title, year, episodes, streaming, synopsis, whySimilar }
 *   faqs   — array of {q, a}
 * @param {Array} relatedPosts — other BLOG_POSTS for cross-linking
 */
function kdramaListPage(config, relatedPosts) {
  const canonical = `${BASE_URL}/blog/${config.slug}`;
  const title = config.metaTitle;
  const description = config.metaDescription;

  const faqs = config.faqs || [];

  const jsonLd = [
    {
      '@context': 'https://schema.org',
      '@type': 'Article',
      'headline': title,
      'description': description,
      'url': canonical,
      'datePublished': config.datePublished || '2025-01-01',
      'dateModified': new Date().toISOString().split('T')[0],
      'author': { '@type': 'Organization', 'name': 'DramaMatch', 'url': BASE_URL },
      'publisher': {
        '@type': 'Organization', 'name': 'DramaMatch', 'url': BASE_URL,
        'logo': { '@type': 'ImageObject', 'url': `${BASE_URL}/og-default.png`, 'width': 1200, 'height': 628 }
      },
      'mainEntityOfPage': { '@type': 'WebPage', '@id': canonical },
      'image': { '@type': 'ImageObject', 'url': `${BASE_URL}/og-default.png`, 'width': 1200, 'height': 628 },
      'about': (config.picks || []).map((pick, i) => ({
        '@type': 'TVSeries',
        'position': i + 1,
        'name': pick.title,
        'url': `${BASE_URL}/drama/${pick.id}`
      }))
    },
    buildFaqSchema(faqs)
  ];

  // Build pick cards
  const pickCards = (config.picks || []).map((pick, i) => {
    const watchBtn = pick.streaming && pick.id ? watchNowButtons(pick.streaming, pick.id, pick.title) : '';
    const platformBadges = pick.streaming ? streamingBadges(pick.streaming) : '';
    return `
    <article class="drama-card" id="pick-${i + 1}" style="margin-bottom:24px;background:var(--bg-card);border:1px solid var(--border);border-radius:12px;padding:24px;">
      <div style="display:flex;align-items:flex-start;justify-content:space-between;gap:12px;margin-bottom:12px;flex-wrap:wrap;">
        <h2 style="font-size:1.15rem;font-weight:700;line-height:1.3;margin:0;">
          <a href="/drama/${esc(pick.id)}" style="color:var(--text);text-decoration:none;" onmouseover="this.style.color='var(--coral)'" onmouseout="this.style.color='var(--text)'">${i + 1}. ${esc(pick.title)}</a>
        </h2>
        <span style="background:var(--bg-accent);border:1px solid var(--border);border-radius:6px;padding:3px 10px;font-size:0.78rem;color:var(--text-2);white-space:nowrap;flex-shrink:0;">${esc(String(pick.year))} · ${esc(String(pick.episodes))} eps</span>
      </div>
      ${platformBadges ? `<div style="margin-bottom:10px;">${platformBadges}</div>` : ''}
      <p style="color:var(--text-2);font-size:0.92rem;line-height:1.65;margin-bottom:12px;">${esc(pick.synopsis)}</p>
      <div style="background:var(--bg-accent);border-left:3px solid var(--coral);padding:12px 14px;border-radius:0 8px 8px 0;margin-bottom:${watchBtn ? '16px' : '0'};">
        <p style="font-size:0.88rem;color:var(--text-2);line-height:1.6;margin:0;font-style:italic;">${esc(pick.whySimilar)}</p>
      </div>
      ${watchBtn ? `
      <div>
        <div style="font-size:0.72rem;text-transform:uppercase;letter-spacing:0.08em;color:var(--text-3);margin-bottom:8px;">Where to Watch</div>
        <div class="watch-now-buttons">${watchBtn}</div>
      </div>` : ''}
      <div style="margin-top:14px;">
        <a href="/drama/${esc(pick.id)}" style="font-size:0.82rem;color:var(--coral);">See similar K-dramas →</a>
      </div>
    </article>`;
  });

  // Email / quiz CTA — embedded mid-article
  const emailCaptureSection = `
    <section style="background:linear-gradient(135deg,rgba(232,97,77,0.12) 0%,rgba(96,165,250,0.07) 100%);border:1px solid rgba(232,97,77,0.3);border-radius:16px;padding:28px 24px;margin:32px 0;text-align:center;">
      <div style="font-size:0.72rem;text-transform:uppercase;letter-spacing:0.12em;color:var(--coral);margin-bottom:10px;">Want more personalized picks?</div>
      <h3 style="font-size:1.25rem;font-weight:700;margin-bottom:8px;">Take our 60-second quiz →</h3>
      <p style="color:var(--text-2);font-size:0.9rem;margin-bottom:20px;max-width:480px;margin-left:auto;margin-right:auto;">Tell us what you watch and we'll find K-dramas matched to your exact taste — beyond just "dark thrillers".</p>
      <a href="/" class="btn-primary" style="display:inline-block;">find my K-drama match →</a>
    </section>`;

  // Split cards at midpoint for CTA insertion
  const mid = Math.ceil(pickCards.length / 2);
  const firstHalf = pickCards.slice(0, mid).join('\n');
  const secondHalf = pickCards.slice(mid).join('\n');

  const relatedSection = (relatedPosts && relatedPosts.length) ? `
    <section style="border-top:1px solid var(--border);padding-top:32px;margin-bottom:32px;">
      <div class="section-title">More K-Drama Guides</div>
      <div style="display:grid;gap:12px;">
        ${relatedPosts.slice(0, 4).map(p => `
        <a href="/blog/${esc(p.slug)}" style="display:block;background:var(--bg-card);border:1px solid var(--border);border-radius:8px;padding:14px 18px;text-decoration:none;transition:border-color 0.2s;" onmouseover="this.style.borderColor='rgba(232,97,77,0.4)'" onmouseout="this.style.borderColor='var(--border)'">
          <div style="font-weight:600;color:var(--text);font-size:0.9rem;margin-bottom:4px;">${esc(p.h1)}</div>
          <div style="color:var(--text-2);font-size:0.82rem;">${esc(p.metaDescription.substring(0, 100))}…</div>
          <div style="margin-top:8px;font-size:0.78rem;color:var(--coral);">Read guide →</div>
        </a>`).join('\n')}
      </div>
    </section>` : '';

  const bodyContent = `
    <section class="hero-section">
      <div style="font-size:0.82rem;color:var(--text-3);margin-bottom:12px;text-transform:uppercase;letter-spacing:0.06em;">Blog · K-Drama Guides</div>
      <h1>${esc(config.h1)}</h1>
      <p class="subtitle">${esc(config.intro)}</p>
      <div class="meta-row" style="margin-top:20px;">
        <span class="badge">📺 ${(config.picks || []).length} recommendations</span>
        <a href="/" style="font-size:0.82rem;padding:4px 10px;background:rgba(232,97,77,0.1);border:1px solid rgba(232,97,77,0.3);border-radius:6px;color:var(--coral);">Try the quiz →</a>
      </div>
    </section>

    <section>
      ${firstHalf}
    </section>

    ${emailCaptureSection}

    <section>
      ${secondHalf}
    </section>

    ${relatedSection}

    ${faqAccordionHtml(faqs)}

    <section class="cta-section">
      <h2 style="font-size:1.4rem;font-weight:700;margin-bottom:12px;">find the K-drama made for you</h2>
      <p>type any show you love — I'll find the K-drama that shares its exact energy. you're gonna be obsessed.</p>
      <a href="/" class="btn-primary">find my match →</a>
    </section>`;

  return pageShell({
    title,
    description,
    canonical,
    jsonLd,
    breadcrumbs: `<span>›</span> <a href="/blog">Blog</a> <span>›</span> <span>${esc(config.h1)}</span>`,
    breadcrumbTrail: [
      { name: 'Blog', url: `${BASE_URL}/blog` },
      { name: config.h1, url: canonical }
    ],
    bodyContent
  });
}

/**
 * Generate an SEO comparison landing page for "shows like [Western Show]"
 * Targets long-tail keywords like "K-drama like Bridgerton" or "Korean drama similar to Virgin River"
 *
 * @param {Object} config - Page configuration
 * @param {string} config.slug - URL slug (e.g. "shows-like-bridgerton")
 * @param {string} config.sourceShowId - Western show ID for engine lookup
 * @param {string} config.h1 - Page H1 heading
 * @param {string} config.metaTitle - Meta title tag
 * @param {string} config.metaDescription - Meta description
 * @param {string} config.intro - Intro paragraph under H1
 * @param {Array} config.curatedPicks - Array of { showId, whyYoullLove } for hand-curated reasoning
 * @param {Array} config.relatedPages - Array of { slug, title } for internal cross-links
 * @param {Object} sourceShow - Source show details from engine
 * @param {Array} recommendations - Recommendations from engine (will be filtered/reordered by curatedPicks)
 */
function comparisonPage(config, sourceShow, recommendations) {
  if (!sourceShow || !recommendations || !recommendations.length) return null;

  const title = config.metaTitle;
  const description = config.metaDescription;
  const canonical = `${BASE_URL}/${config.slug}`;

  // Build curated list: use hand-picked order and reasoning if available
  const curatedMap = {};
  if (config.curatedPicks) {
    config.curatedPicks.forEach((pick, i) => {
      curatedMap[pick.showId] = { order: i, reasoning: pick.whyYoullLove };
    });
  }

  // Sort recommendations: curated picks first (in order), then by match score
  let displayRecs;
  if (config.curatedPicks && config.curatedPicks.length > 0) {
    const curated = [];
    const rest = [];
    for (const rec of recommendations) {
      if (curatedMap[rec.show.id] !== undefined) {
        curated.push({
          ...rec,
          reasoning: curatedMap[rec.show.id].reasoning || rec.reasoning,
          _order: curatedMap[rec.show.id].order
        });
      } else {
        rest.push(rec);
      }
    }
    curated.sort((a, b) => a._order - b._order);
    rest.sort((a, b) => b.matchScore - a.matchScore);
    displayRecs = [...curated, ...rest].slice(0, 7);
  } else {
    displayRecs = recommendations.slice(0, 7);
  }

  // Schema.org structured data — item objects with images for carousel rich results
  const itemListElements = displayRecs.map((r, i) => {
    const s = r.show;
    const isMovieType = s.type === 'kmovie' || s.type === 'jmovie' || s.type === 'anime-movie';
    const schemaType = isMovieType ? 'Movie' : 'TVSeries';
    const posterUrl = getPosterUrl(s.id);
    const itemObj = {
      '@type': schemaType,
      '@id': `${BASE_URL}/drama/${s.id}`,
      'name': s.title,
      'url': `${BASE_URL}/drama/${s.id}`
    };
    if (posterUrl) itemObj.image = posterUrl;
    if (r.reasoning) itemObj.description = r.reasoning.replace(/\*\*/g, '');
    if (s.year) itemObj.datePublished = String(s.year);
    return { '@type': 'ListItem', 'position': i + 1, 'item': itemObj };
  });

  // Dynamic FAQs
  const showTitle = sourceShow.title;
  const topRecs = displayRecs.slice(0, 3);
  const genres = (sourceShow.genres || []).slice(0, 2).join(' and ');

  const faqs = [
    {
      q: `What Korean drama should I watch if I like ${showTitle}?`,
      a: topRecs.length >= 2
        ? `Start with <a href="/drama/${topRecs[0].show.id}">${topRecs[0].show.title}</a> and <a href="/drama/${topRecs[1].show.id}">${topRecs[1].show.title}</a> — both share the same ${genres} DNA that makes ${showTitle} so addictive. DramaMatch found ${displayRecs.length} strong matches total.`
        : `Use DramaMatch to find K-dramas that match ${showTitle}'s vibe.`
    },
    {
      q: `Are there K-dramas similar to ${showTitle}?`,
      a: `Yes — Korean dramas excel at ${genres} storytelling. ${topRecs[0] ? `<a href="/drama/${topRecs[0].show.id}">${topRecs[0].show.title}</a> is the closest match at ${Math.round(topRecs[0].matchScore)}%.` : ''} K-dramas often tell complete stories in 16 episodes, so you get the same emotional payoff without years of commitment.`
    },
    {
      q: `Where can I stream K-dramas like ${showTitle}?`,
      a: `Most K-dramas similar to ${showTitle} are available on Netflix, Viki, Amazon Prime Video, and Disney+. Each recommendation on this page shows exactly which platforms carry it, so you can start watching immediately.`
    },
    {
      q: `Are C-dramas also similar to ${showTitle}?`,
      a: `Yes! Chinese dramas (C-dramas) share many storytelling elements with ${showTitle}. DramaMatch's algorithm matches across both K-dramas and C-dramas to find the best fits regardless of origin.`
    }
  ];

  const jsonLd = [
    {
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      'name': config.h1,
      'description': description,
      'url': canonical,
      'numberOfItems': displayRecs.length,
      'itemListElement': itemListElements
    },
    {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      'name': title,
      'description': description,
      'url': canonical,
      'about': {
        '@type': 'TVSeries',
        'name': sourceShow.title,
        'datePublished': String(sourceShow.year)
      }
    },
    buildFaqSchema(faqs)
  ];

  // Recommendation cards with "Why you'll love this" callout
  const cardsHtml = displayRecs.map((r, idx) => {
    const s = r.show;
    const pct = Math.round(r.matchScore);
    const genreTags = (s.genres || []).slice(0, 3).map(g => `<span class="badge genre">${esc(g)}</span>`).join(' ');
    const typeBadge = s.type === 'cdrama' ? '<span class="badge" style="background:rgba(232,97,77,0.15);color:#e8614d;">C-Drama</span>' :
                      s.type === 'kmovie' ? '<span class="badge" style="background:rgba(212,168,83,0.15);color:#d4a853;">K-Movie</span>' :
                      s.type === 'anime' ? '<span class="badge" style="background:rgba(244,117,33,0.15);color:#F47521;">Anime</span>' :
                      s.type === 'anime-movie' ? '<span class="badge" style="background:rgba(244,117,33,0.15);color:#F47521;">Anime Film</span>' :
                      s.type === 'jdrama' ? '<span class="badge" style="background:rgba(167,139,250,0.15);color:#a78bfa;">J-Drama</span>' :
                      s.type === 'jmovie' ? '<span class="badge" style="background:rgba(167,139,250,0.15);color:#a78bfa;">J-Movie</span>' :
                      '<span class="badge" style="background:rgba(74,222,128,0.15);color:#4ade80;">K-Drama</span>';
    const watchButtons = watchNowButtons(s.streaming, s.id, s.title);
    const num = idx + 1;

    return `
    <article class="drama-card comparison-card" itemscope itemtype="https://schema.org/TVSeries">
      <div class="card-top">
        <span class="pick-number">#${num}</span>
        <h2 itemprop="name"><a href="/drama/${s.id}">${esc(s.title)}</a></h2>
        <span class="match-score">${pct}%</span>
      </div>
      <div class="meta-row">
        ${typeBadge}
        ${s.year ? `<span class="badge year" itemprop="datePublished">${s.year}</span>` : ''}
        ${s.episodes ? `<span class="badge">${s.episodes} eps</span>` : ''}
        ${s.network ? `<span class="badge network">${esc(s.network)}</span>` : ''}
        ${genreTags}
      </div>
      ${r.reasoning ? `
      <div class="why-love">
        <div class="why-love-label">Why you'll love this</div>
        <p>${esc(r.reasoning.replace(/\*\*/g, ''))}</p>
      </div>` : ''}
      ${s.synopsis ? `<p class="synopsis" itemprop="description">${esc(s.synopsis.substring(0, 200))}${s.synopsis.length > 200 ? '…' : ''}</p>` : ''}
      ${watchButtons ? `<div class="watch-now-section"><div class="watch-now-label">Where to Watch</div><div class="watch-now-buttons">${watchButtons}</div></div>` : ''}
    </article>`;
  }).join('\n');

  // Related comparison pages (internal cross-links)
  const relatedLinksHtml = (config.relatedPages || []).map(rp => `
    <a href="/${esc(rp.slug)}" class="related-page-link">
      <span class="related-page-title">Shows Like ${esc(rp.title)}</span>
      <span class="related-page-arrow">→</span>
    </a>`).join('\n');

  const bodyContent = `
    <style>
      .cpage-search { padding: 24px 0 32px; }
      .cpage-search-label { font-size: 0.88rem; color: var(--text-2); margin-bottom: 12px; text-align: center; }
      .cpage-search-wrap { position: relative; max-width: 560px; margin: 0 auto; }
      .cpage-search-input {
        width: 100%; padding: 14px 20px 14px 46px;
        background: var(--bg-card); border: 1px solid var(--border);
        border-radius: 12px; color: var(--text); font-size: 0.95rem;
        outline: none; transition: border-color 0.2s; font-family: inherit; box-sizing: border-box;
      }
      .cpage-search-input:focus { border-color: var(--coral); box-shadow: 0 0 0 3px rgba(232,97,77,0.12); }
      .cpage-search-input::placeholder { color: var(--text-3); }
      .cpage-search-icon {
        position: absolute; left: 14px; top: 50%; transform: translateY(-50%);
        font-size: 1.1rem; pointer-events: none; line-height: 1;
      }
      .cpage-ac-drop {
        position: absolute; top: calc(100% + 6px); left: 0; right: 0;
        background: var(--bg-card); border: 1px solid var(--border);
        border-radius: 10px; overflow: hidden; z-index: 200;
        box-shadow: 0 8px 32px rgba(0,0,0,0.5); display: none;
      }
      .cpage-ac-drop.open { display: block; }
      .cpage-ac-item {
        display: flex; justify-content: space-between; align-items: center;
        padding: 11px 16px; cursor: pointer; transition: background 0.1s;
        font-size: 0.9rem; color: var(--text); gap: 10px;
      }
      .cpage-ac-item:hover, .cpage-ac-item.kb-active { background: var(--bg-accent); }
      .cpage-ac-name { flex: 1; min-width: 0; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
      .cpage-ac-type {
        font-size: 0.7rem; background: rgba(232,97,77,0.12); color: var(--coral);
        border-radius: 4px; padding: 2px 7px; flex-shrink: 0;
      }
      .cpage-ac-empty { padding: 12px 16px; color: var(--text-3); font-size: 0.88rem; text-align: center; }
      @media (max-width: 640px) {
        .cpage-search { padding: 16px 0 24px; }
        .cpage-search-input { font-size: 0.9rem; padding: 12px 16px 12px 42px; }
      }
    </style>

    <section class="hero-section comparison-hero">
      <h1>${esc(config.h1)}</h1>
      <p class="subtitle">${config.intro}</p>
      <div class="meta-row" style="margin-top:14px;justify-content:center;">
        ${sourceShow.year ? `<span class="badge year">${sourceShow.year}</span>` : ''}
        ${(sourceShow.genres || []).slice(0, 4).map(g => `<span class="badge genre">${esc(g)}</span>`).join(' ')}
      </div>
    </section>

    <section class="cpage-search">
      <p class="cpage-search-label">Search any show — find your perfect Asian drama match</p>
      <div class="cpage-search-wrap">
        <span class="cpage-search-icon">🔍</span>
        <input
          type="text"
          id="cpage-search-input"
          class="cpage-search-input"
          placeholder="Breaking Bad, Succession, Outlander..."
          autocomplete="off"
          spellcheck="false"
          aria-label="Search for a show to find Asian drama matches"
        />
        <div id="cpage-ac-drop" class="cpage-ac-drop" role="listbox"></div>
      </div>
    </section>

    <div class="section-title">${displayRecs.length} Best Matches for ${esc(sourceShow.title)} Fans</div>
    <div class="card-grid comparison-grid">
      ${cardsHtml}
    </div>

    ${relatedLinksHtml ? `
    <section class="related-pages-section">
      <div class="section-title">explore more matches</div>
      <div class="related-pages-grid">
        ${relatedLinksHtml}
      </div>
      <div style="text-align:center;margin-top:16px;"><a href="/shows-like" style="font-size:0.88rem;color:var(--coral);">Browse all curated lists →</a></div>
    </section>` : ''}

    ${faqAccordionHtml(faqs, `Shows Like ${sourceShow.title}: FAQ`)}

    ${inlineNewsletterHtml('Want more lists like this?', 'Weekly picks — curated lists, hidden gems, new releases. No spam.', 'comparison_page', 'inl-comp')}

    <section class="cta-section">
      <h2 style="font-size:1.4rem;font-weight:700;margin-bottom:12px;">got another show you're obsessed with?</h2>
      <p>type any show — I'll find the K-drama or C-drama that shares its exact energy.</p>
      <a href="/" class="btn-primary">find my match →</a>
    </section>

    <script>
    (function() {
      var inp = document.getElementById('cpage-search-input');
      var drop = document.getElementById('cpage-ac-drop');
      if (!inp || !drop) return;
      var results = [];
      var timer = null;
      var kbIdx = -1;

      function escH(s) {
        return String(s || '').replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
      }

      function typeLabel(t) {
        var m = {
          kdrama:'K-Drama', cdrama:'C-Drama', jdrama:'J-Drama', anime:'Anime',
          kmovie:'K-Movie', jmovie:'J-Movie', 'anime-movie':'Anime Film',
          western:'Western', american:'Western', movie:'Movie', actor:'Actor', trope:'Theme'
        };
        return m[t] || (t || '').replace(/-/g,' ');
      }

      function closeDrop() {
        drop.classList.remove('open');
        kbIdx = -1;
      }

      function renderDrop(items) {
        kbIdx = -1;
        if (!items.length) {
          drop.innerHTML = '<div class="cpage-ac-empty">No shows found — try another title</div>';
          drop.classList.add('open');
          return;
        }
        var html = '';
        for (var i = 0; i < items.length; i++) {
          var r = items[i];
          var name = escH(r.title || r.name || '');
          var tl = escH(typeLabel(r.type));
          html += '<div class="cpage-ac-item" data-i="' + i + '" role="option">' +
                  '<span class="cpage-ac-name">' + name + '</span>' +
                  '<span class="cpage-ac-type">' + tl + '</span>' +
                  '</div>';
        }
        drop.innerHTML = html;
        drop.querySelectorAll('.cpage-ac-item').forEach(function(el) {
          el.addEventListener('mousedown', function(e) {
            e.preventDefault();
            var r = results[parseInt(this.getAttribute('data-i'))];
            if (r) selectResult(r);
          });
        });
        drop.classList.add('open');
      }

      function selectResult(r) {
        closeDrop();
        inp.value = r.title || r.name || '';
        if (r.type === 'actor') {
          window.location.href = '/actor/' + encodeURIComponent(r.id || r.slug || r.title || '');
        } else if (r.type === 'trope') {
          window.location.href = '/?q=' + encodeURIComponent(r.title || r.id || '');
        } else {
          window.location.href = '/?show=' + encodeURIComponent(r.id || r.slug || '');
        }
      }

      function doSearch(q) {
        fetch('/api/search?q=' + encodeURIComponent(q))
          .then(function(res) { return res.json(); })
          .then(function(data) {
            results = (data.success && data.results) ? data.results : [];
            renderDrop(results);
          })
          .catch(function() { closeDrop(); });
      }

      inp.addEventListener('input', function() {
        var q = this.value.trim();
        clearTimeout(timer);
        kbIdx = -1;
        if (q.length < 1) { closeDrop(); drop.innerHTML = ''; results = []; return; }
        timer = setTimeout(function() { doSearch(q); }, 120);
      });

      inp.addEventListener('keydown', function(e) {
        var items = drop.querySelectorAll('.cpage-ac-item');
        if (e.key === 'Escape') { closeDrop(); return; }
        if (!items.length) return;
        if (e.key === 'ArrowDown') {
          e.preventDefault();
          if (kbIdx >= 0) items[kbIdx].classList.remove('kb-active');
          kbIdx = (kbIdx + 1) % items.length;
          items[kbIdx].classList.add('kb-active');
          items[kbIdx].scrollIntoView({ block: 'nearest' });
        } else if (e.key === 'ArrowUp') {
          e.preventDefault();
          if (kbIdx >= 0) items[kbIdx].classList.remove('kb-active');
          kbIdx = kbIdx <= 0 ? items.length - 1 : kbIdx - 1;
          items[kbIdx].classList.add('kb-active');
          items[kbIdx].scrollIntoView({ block: 'nearest' });
        } else if (e.key === 'Enter') {
          e.preventDefault();
          if (kbIdx >= 0 && results[kbIdx]) { selectResult(results[kbIdx]); return; }
          if (results.length > 0) selectResult(results[0]);
        }
      });

      document.addEventListener('click', function(e) {
        if (!inp.contains(e.target) && !drop.contains(e.target)) closeDrop();
      });

      inp.addEventListener('focus', function() {
        if (results.length > 0) drop.classList.add('open');
      });
    })();
    </script>
  `;

  return pageShell({
    title, description, canonical,
    ogImage: `${BASE_URL}/og/${config.slug}.png`,
    jsonLd,
    breadcrumbs: `<span>›</span> <span>Shows Like ${esc(sourceShow.title)}</span>`,
    breadcrumbTrail: [{ name: `Shows Like ${sourceShow.title}`, url: canonical }],
    bodyContent
  });
}

/**
 * Shows Like Index Page — browse all comparison pages
 */
function showsLikeIndexPage(grouped) {
  const title = 'Shows Like... — Find Asian Dramas Similar to Your Favorite Western Shows | DramaMatch';
  const description = 'Browse curated lists of K-dramas, C-dramas, and J-dramas similar to popular Western shows like Bridgerton, Breaking Bad, Game of Thrones, Criminal Minds, and more.';
  const canonical = `${BASE_URL}/shows-like`;

  const categoryEmojis = {
    'Romance & Family': '💕',
    'Crime & Detective': '🔍',
    'Power & Drama': '👑',
    'Sci-Fi & Fantasy': '✨',
    'Comedy & Slice of Life': '😂',
    'Action & Thriller': '⚡',
    'Japanese & Anime': '🎌',
    'More Shows': '🎬'
  };

  let categoriesHtml = '';
  for (const [category, pages] of Object.entries(grouped)) {
    const emoji = categoryEmojis[category] || '🎬';
    const pageLinks = pages.map(p => {
      const displayTitle = p.title;
      return `
      <a href="/${esc(p.slug)}" style="display:flex;align-items:center;justify-content:space-between;padding:14px 18px;background:var(--bg-card);border:1px solid var(--border);border-radius:10px;color:var(--text);text-decoration:none;transition:border-color 0.2s,transform 0.15s;">
        <span style="font-weight:600;font-size:0.95rem;">${esc(displayTitle)}</span>
        <span style="font-size:0.75rem;color:var(--text-2);background:var(--bg-accent);padding:2px 8px;border-radius:6px;">${p.pickCount} picks</span>
      </a>`;
    }).join('\n');

    categoriesHtml += `
    <div style="margin-bottom:2.5rem;">
      <h2 style="font-size:1rem;text-transform:uppercase;letter-spacing:0.1em;color:var(--coral);font-weight:700;margin-bottom:1rem;padding-bottom:0.5rem;border-bottom:1px solid rgba(232,97,77,0.2);">${emoji} ${esc(category)}</h2>
      <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(260px,1fr));gap:0.75rem;">
        ${pageLinks}
      </div>
    </div>`;
  }

  const bodyContent = `
    <section class="hero-section">
      <h1>Shows Like Your Favorites</h1>
      <p class="subtitle">Curated Asian drama recommendations for fans of the biggest Western shows. Each page features 7 hand-picked matches with detailed reasoning on why you'll love them.</p>
    </section>

    ${categoriesHtml}

    <section class="cta-section" style="margin-top:40px;">
      <p>don't see your show? search for it directly.</p>
      <a href="/" class="btn-primary">find my next Asian drama →</a>
    </section>
  `;

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    'name': 'Shows Like... — Asian Drama Recommendations',
    'description': description,
    'url': canonical
  };

  return pageShell({
    title, description, canonical,
    jsonLd,
    breadcrumbs: '<span>›</span> <span>Shows Like...</span>',
    breadcrumbTrail: [{ name: 'Shows Like...', url: canonical }],
    bodyContent
  });
}

/**
 * Auto-generated list page: "Best K-Dramas for [Show] Fans"
 * Targets: dramamatch.app/lists/best-kdramas-for-{showId}-fans
 *
 * @param {string} slug - URL slug (e.g. "best-kdramas-for-breaking-bad-fans")
 * @param {Object} sourceShow - Western show object from recommendation engine
 * @param {Array}  recommendations - Array of {show, matchScore, reasoning} from engine
 */
function listPage(slug, sourceShow, recommendations) {
  if (!sourceShow || !recommendations || !recommendations.length) return null;

  const displayRecs = recommendations.slice(0, 10);
  const showTitle = sourceShow.title;
  const showYear = sourceShow.year;
  const genres = (sourceShow.genres || []).slice(0, 2);
  const genreStr = genres.join(' and ');
  const top3 = displayRecs.slice(0, 3).map(r => r.show.title).join(', ');

  const metaTitle = `10 Best K-Dramas for ${showTitle} Fans (${showYear || '2025'}) | DramaMatch`;
  const description = `Love ${showTitle}? These K-dramas deliver the same ${genreStr || 'intense storytelling'} energy. Ranked by match score with streaming links: ${top3} and more.`;
  const canonical = `${BASE_URL}/lists/${slug}`;

  // Schema.org ItemList — each ListItem wraps a typed entity with image for carousel rich results
  const itemListElements = displayRecs.map((r, i) => {
    const s = r.show;
    const isMovieType = s.type === 'kmovie' || s.type === 'jmovie' || s.type === 'anime-movie';
    const schemaType = isMovieType ? 'Movie' : 'TVSeries';
    const posterUrl = getPosterUrl(s.id);
    const itemObj = {
      '@type': schemaType,
      '@id': `${BASE_URL}/drama/${s.id}`,
      'name': s.title,
      'url': `${BASE_URL}/drama/${s.id}`
    };
    if (posterUrl) itemObj.image = posterUrl;
    if (r.reasoning) itemObj.description = r.reasoning.replace(/\*\*/g, '');
    if (s.year) itemObj.datePublished = String(s.year);
    // aggregateRating: DramaMatch curation score for this show as a recommendation
    if (r.matchScore) {
      itemObj.aggregateRating = {
        '@type': 'AggregateRating',
        'ratingValue': (Math.round(r.matchScore) / 10).toFixed(1),
        'bestRating': '10',
        'worstRating': '1',
        'ratingCount': displayRecs.length
      };
    }
    // WatchAction: primary streaming platform for this recommendation
    const listStreamKeys = PLATFORM_ORDER.filter(k => s.streaming && s.streaming[k] && PLATFORMS[k]);
    if (listStreamKeys.length > 0) {
      itemObj.potentialAction = {
        '@type': 'WatchAction',
        'target': {
          '@type': 'EntryPoint',
          'urlTemplate': PLATFORMS[listStreamKeys[0]].buildUrl(s.title),
          'actionPlatform': ['http://schema.org/DesktopWebPlatform', 'http://schema.org/MobileWebPlatform']
        }
      };
    }
    return { '@type': 'ListItem', 'position': i + 1, 'item': itemObj };
  });

  // FAQs targeting long-tail queries
  const faqs = [
    {
      q: `What are the best K-dramas for ${showTitle} fans?`,
      a: displayRecs.length >= 3
        ? `The top K-dramas for ${showTitle} fans are <a href="/drama/${displayRecs[0].show.id}">${displayRecs[0].show.title}</a>, <a href="/drama/${displayRecs[1].show.id}">${displayRecs[1].show.title}</a>, and <a href="/drama/${displayRecs[2].show.id}">${displayRecs[2].show.title}</a>. All three share the same ${genreStr || 'story'} DNA that makes ${showTitle} so compelling.`
        : `Use DramaMatch to find the best K-dramas for ${showTitle} fans.`
    },
    {
      q: `Are there Korean dramas similar to ${showTitle}?`,
      a: `Yes — there are ${displayRecs.length} strong K-drama matches for ${showTitle}. Korean drama storytelling excels at ${genreStr || 'character-driven narratives'}, often in tightly-paced 16-episode seasons. The closest match is <a href="/drama/${displayRecs[0].show.id}">${displayRecs[0].show.title}</a> at ${Math.round(displayRecs[0].matchScore)}% similarity.`
    },
    {
      q: `Where can I watch K-dramas like ${showTitle}?`,
      a: `Most K-dramas similar to ${showTitle} stream on Netflix, Viki, Amazon Prime Video, and Disney+. Each title on this page has a Watch Now button showing exactly which platforms carry it.`
    },
    {
      q: `Why do ${showTitle} fans love K-dramas?`,
      a: `${showTitle} fans love K-dramas because they deliver the same emotional intensity and genre mastery — ${genreStr ? 'especially in ' + genreStr + ' stories' : 'across drama, thriller, and romance'}. K-dramas tend to tell complete stories without filler, which fans of binge-worthy series appreciate.`
    }
  ];

  const jsonLd = [
    {
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      'name': `10 Best K-Dramas for ${showTitle} Fans`,
      'description': description,
      'url': canonical,
      'numberOfItems': displayRecs.length,
      'itemListElement': itemListElements
    },
    {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      'name': metaTitle,
      'description': description,
      'url': canonical,
      'about': {
        '@type': 'TVSeries',
        'name': showTitle,
        'datePublished': String(showYear || '')
      }
    },
    buildFaqSchema(faqs)
  ];

  // Render numbered list cards
  const cardsHtml = displayRecs.map((r, idx) => {
    const s = r.show;
    const pct = Math.round(r.matchScore);
    const num = idx + 1;
    const posterUrl = getPosterUrl(s.id);
    const genreTags = (s.genres || []).slice(0, 3).map(g => `<span class="badge genre">${esc(g)}</span>`).join(' ');
    const tropeTags = (s.tropes || []).slice(0, 3).map(t => `<span class="badge trope">${esc(t.replace(/-/g, ' '))}</span>`).join(' ');
    const typeBadge = s.type === 'cdrama'
      ? '<span class="badge" style="background:rgba(232,97,77,0.15);color:#e8614d;">C-Drama</span>'
      : s.type === 'kmovie'
        ? '<span class="badge" style="background:rgba(212,168,83,0.15);color:#d4a853;">K-Movie</span>'
        : s.type === 'anime'
          ? '<span class="badge" style="background:rgba(244,117,33,0.15);color:#F47521;">Anime</span>'
          : s.type === 'jdrama'
            ? '<span class="badge" style="background:rgba(167,139,250,0.15);color:#a78bfa;">J-Drama</span>'
            : '<span class="badge" style="background:rgba(74,222,128,0.15);color:#4ade80;">K-Drama</span>';
    const watchButtons = watchNowButtons(s.streaming, s.id, s.title);

    // Vibe meter
    const vb = computeVibeScores(s);
    const vmAxes = [
      { l: 'Gritty',    r: 'Fluffy',     v: vb.grittyFluffy,     g: 'linear-gradient(to right,#64748b,#f9a8d4)' },
      { l: 'Slow-Burn', r: 'Fast-Paced', v: vb.slowFast,         g: 'linear-gradient(to right,#93c5fd,#fbbf24)' },
      { l: 'Cynical',   r: 'Heartfelt',  v: vb.cynicalHeartfelt, g: 'linear-gradient(to right,#4b5563,#fb7185)' },
      { l: 'Light',     r: 'Heavy',      v: vb.lightHeavy,       g: 'linear-gradient(to right,#86efac,#818cf8)' }
    ];
    const vibeMeterHtml = `<div class="vibe-meter-section">
      <div class="vibe-meter-title">Vibe Check</div>
      ${vmAxes.map(a => `<div class="vibe-meter-row">
        <span class="vibe-lbl vibe-lbl-l">${a.l}</span>
        <div class="vibe-track" style="background:${a.g};"><div class="vibe-dot" style="left:${Math.round(a.v * 100)}%;"></div></div>
        <span class="vibe-lbl vibe-lbl-r">${a.r}</span>
      </div>`).join('')}
    </div>`;

    return `
    <article class="list-card" itemscope itemtype="https://schema.org/${s.runtime ? 'Movie' : 'TVSeries'}" id="pick-${num}">
      <div class="list-card-rank" aria-label="Rank ${num}">${num}</div>
      <div class="list-card-body">
        <div class="list-card-header">
          ${posterUrl ? `<a href="/drama/${s.id}" class="list-card-poster-link"><img class="list-card-poster" src="${posterUrl}" alt="${esc(s.title)} poster" width="90" height="135" loading="${idx < 3 ? 'eager' : 'lazy'}"></a>` : ''}
          <div class="list-card-info">
            <div class="list-card-title-row">
              <h2 itemprop="name"><a href="/drama/${s.id}">${esc(s.title)}</a></h2>
              <div class="list-match-badge" title="${pct}% DNA match with ${esc(showTitle)}">
                <div class="list-match-fill" style="width:${pct}%"></div>
                <span class="list-match-pct">${pct}%</span>
              </div>
            </div>
            <div class="meta-row" style="margin-top:6px;flex-wrap:wrap;">
              ${typeBadge}
              ${s.year ? `<span class="badge year" itemprop="datePublished">${s.year}</span>` : ''}
              ${s.episodes ? `<span class="badge">${s.episodes} eps</span>` : ''}
              ${s.network ? `<span class="badge network">${esc(s.network)}</span>` : ''}
              ${genreTags}
            </div>
            ${tropeTags ? `<div class="meta-row" style="margin-top:4px;">${tropeTags}</div>` : ''}
          </div>
        </div>
        ${r.reasoning ? `<div class="why-love"><div class="why-love-label">Why you'll love this</div><p>${esc(r.reasoning.replace(/\*\*/g, ''))}</p></div>` : ''}
        ${s.synopsis ? `<p class="synopsis" itemprop="description">${esc(s.synopsis.substring(0, 200))}${s.synopsis.length > 200 ? '…' : ''}</p>` : ''}
        ${vibeMeterHtml}
        ${watchButtons ? `<div class="watch-now-section"><div class="watch-now-label">Where to Watch</div><div class="watch-now-buttons">${watchButtons}</div></div>` : ''}
      </div>
    </article>`;
  }).join('\n');

  const bodyContent = `
    <style>
      /* List page specific styles */
      .list-hero { text-align: center; padding: 40px 24px 32px; max-width: 760px; margin: 0 auto; }
      .list-hero h1 { font-size: clamp(1.6rem, 4vw, 2.4rem); font-weight: 800; line-height: 1.2; margin-bottom: 14px; }
      .list-hero h1 em { font-style: normal; color: var(--coral); }
      .list-hero .subtitle { color: var(--text-2); font-size: 1.05rem; line-height: 1.6; max-width: 600px; margin: 0 auto 16px; }
      .list-container { max-width: 860px; margin: 0 auto; padding: 0 16px 48px; }
      .list-card { display: flex; gap: 0; background: var(--bg-card); border: 1px solid var(--border); border-radius: 14px; margin-bottom: 20px; overflow: hidden; }
      .list-card-rank { min-width: 56px; display: flex; align-items: center; justify-content: center; font-size: 1.8rem; font-weight: 800; color: var(--text-3); background: rgba(255,255,255,0.03); border-right: 1px solid var(--border); flex-shrink: 0; }
      .list-card-body { flex: 1; padding: 20px; min-width: 0; }
      .list-card-header { display: flex; gap: 16px; }
      .list-card-poster-link { flex-shrink: 0; }
      .list-card-poster { width: 90px; height: 135px; object-fit: cover; border-radius: 8px; display: block; }
      .list-card-info { flex: 1; min-width: 0; }
      .list-card-title-row { display: flex; align-items: flex-start; gap: 12px; justify-content: space-between; }
      .list-card-title-row h2 { font-size: 1.15rem; font-weight: 700; line-height: 1.3; }
      .list-card-title-row h2 a { color: var(--text); }
      .list-card-title-row h2 a:hover { color: var(--coral); text-decoration: none; }
      .list-match-badge { flex-shrink: 0; background: rgba(232,97,77,0.12); border: 1px solid rgba(232,97,77,0.3); border-radius: 20px; padding: 4px 10px; font-size: 0.82rem; font-weight: 700; color: var(--coral); white-space: nowrap; position: relative; overflow: hidden; }
      .list-match-fill { position: absolute; left: 0; top: 0; bottom: 0; background: rgba(232,97,77,0.1); border-radius: 20px; }
      .list-match-pct { position: relative; z-index: 1; }
      .why-love { background: linear-gradient(135deg,rgba(212,168,83,0.08),rgba(232,97,77,0.06)); border-left: 3px solid var(--gold); border-radius: 0 8px 8px 0; padding: 10px 14px; margin: 12px 0; }
      .why-love-label { font-size: 0.7rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.08em; color: var(--gold); margin-bottom: 4px; }
      .why-love p { font-size: 0.9rem; color: var(--text); line-height: 1.55; }
      .lists-nav { text-align: center; padding: 12px 0 28px; }
      .lists-nav a { font-size: 0.84rem; color: var(--text-2); }
      .lists-nav a:hover { color: var(--coral); }
      .match-page-link { display: inline-block; margin-top: 10px; padding: 7px 18px; background: rgba(232,97,77,0.1); border: 1px solid rgba(232,97,77,0.3); border-radius: 20px; font-size: 0.84rem; color: var(--coral); }
      .match-page-link:hover { background: rgba(232,97,77,0.2); text-decoration: none; }
      @media (max-width: 600px) {
        .list-card { flex-direction: row; }
        .list-card-rank { min-width: 44px; font-size: 1.4rem; }
        .list-card-poster { width: 70px; height: 105px; }
        .list-card-title-row { flex-wrap: wrap; gap: 6px; }
      }
    </style>

    <section class="list-hero">
      <nav class="breadcrumbs" style="font-size:0.8rem;color:var(--text-3);margin-bottom:16px;justify-content:center;display:flex;gap:6px;align-items:center;">
        <a href="/" style="color:var(--text-3);">DramaMatch</a>
        <span>›</span>
        <a href="/lists" style="color:var(--text-3);">Lists</a>
        <span>›</span>
        <span>${esc(showTitle)} Fans</span>
      </nav>
      <h1>10 Best K-Dramas for <em>${esc(showTitle)}</em> Fans</h1>
      <p class="subtitle">Same emotional DNA. Different language. These Korean, Chinese &amp; Japanese dramas share the exact ${genreStr ? genreStr + ' energy' : 'story beats'} that makes ${esc(showTitle)} so addictive.</p>
      <div class="meta-row" style="justify-content:center;margin-top:14px;flex-wrap:wrap;">
        ${showYear ? `<span class="badge year">${showYear}</span>` : ''}
        ${genres.map(g => `<span class="badge genre">${esc(g)}</span>`).join(' ')}
        ${(sourceShow.tropes || []).slice(0, 2).map(t => `<span class="badge trope">${esc(t.replace(/-/g, ' '))}</span>`).join(' ')}
      </div>
      <div style="margin-top:20px;">
        <a href="/match/${sourceShow.id}" class="match-page-link">See all recommendations for ${esc(showTitle)} →</a>
      </div>
    </section>

    <div class="list-container">
      ${cardsHtml}

      <div style="text-align:center;padding:16px 0 8px;">
        <a href="/lists" style="font-size:0.85rem;color:var(--text-2);">← Browse all lists</a>
        &nbsp;&nbsp;·&nbsp;&nbsp;
        <a href="/match/${sourceShow.id}" style="font-size:0.85rem;color:var(--coral);">See all ${esc(showTitle)} matches →</a>
      </div>
    </div>

    ${faqAccordionHtml(faqs, `K-Dramas for ${showTitle} Fans: FAQ`)}

    ${inlineNewsletterHtml('Want more lists like this?', 'Weekly picks — curated lists, hidden gems, new releases. No spam.', 'list_page', 'inl-list')}

    <section class="cta-section">
      <h2 style="font-size:1.4rem;font-weight:700;margin-bottom:12px;">obsessed with another show?</h2>
      <p>Type any Western show or movie — DramaMatch finds the K-dramas that share its exact DNA.</p>
      <a href="/" class="btn-primary">find my match →</a>
    </section>
  `;

  return pageShell({
    title: metaTitle,
    description,
    canonical,
    ogImage: `${BASE_URL}/og-default.png`,
    jsonLd,
    breadcrumbs: `<span>›</span> <span>Lists</span> <span>›</span> <span>Best K-Dramas for ${esc(showTitle)} Fans</span>`,
    breadcrumbTrail: [
      { name: 'Lists', url: `${BASE_URL}/lists` },
      { name: `Best K-Dramas for ${showTitle} Fans`, url: canonical }
    ],
    bodyContent
  });
}

/**
 * Auto-generated list index page — /lists
 * Shows all available "Best K-Dramas for X Fans" pages
 */
function listIndexPage(shows) {
  const title = 'Best K-Dramas For Fans Of — Browse by Show | DramaMatch';
  const description = 'Find the best K-dramas matched to your favorite Western shows. Browse curated "Best K-Dramas for [Show] Fans" lists across crime, romance, thriller, sci-fi, and more.';
  const canonical = `${BASE_URL}/lists`;

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    'name': 'Best K-Dramas For Fans Of — DramaMatch',
    'description': description,
    'url': canonical
  };

  const cardsHtml = shows.map(s => {
    const slug = `best-kdramas-for-${s.id}-fans`;
    const genres = (s.genres || []).slice(0, 2).map(g => `<span class="badge genre">${esc(g)}</span>`).join(' ');
    return `
    <a href="/lists/${slug}" class="list-index-card">
      <div class="list-index-title">${esc(s.title)}</div>
      <div class="list-index-meta">
        ${s.year ? `<span class="badge year">${s.year}</span>` : ''}
        ${genres}
      </div>
    </a>`;
  }).join('\n');

  const bodyContent = `
    <style>
      .list-index-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(220px, 1fr)); gap: 14px; max-width: 1100px; margin: 0 auto; padding: 0 16px 48px; }
      .list-index-card { background: var(--bg-card); border: 1px solid var(--border); border-radius: 12px; padding: 16px; text-decoration: none; transition: border-color 0.2s, transform 0.15s; display: block; }
      .list-index-card:hover { border-color: var(--coral); transform: translateY(-2px); text-decoration: none; }
      .list-index-title { font-size: 0.95rem; font-weight: 700; color: var(--text); margin-bottom: 8px; line-height: 1.3; }
      .list-index-meta { display: flex; flex-wrap: wrap; gap: 4px; }
    </style>
    <section class="hero-section" style="text-align:center;">
      <h1>Best K-Dramas For Fans Of...</h1>
      <p class="subtitle">We've matched every major Western show to the K-dramas that share its exact DNA. Pick your show to see the full ranked list.</p>
      <div style="margin-top:16px;display:flex;gap:12px;justify-content:center;flex-wrap:wrap;">
        <a href="/lists/western" style="display:inline-block;padding:8px 20px;background:rgba(74,222,128,0.1);border:1px solid rgba(74,222,128,0.3);border-radius:20px;font-size:0.88rem;color:#4ade80;text-decoration:none;">Already a K-drama fan? Find Western shows →</a>
      </div>
    </section>
    <div class="section-title">${shows.length} Shows with Curated K-Drama Lists</div>
    <div class="list-index-grid">
      ${cardsHtml}
    </div>
    <section class="cta-section">
      <h2 style="font-size:1.3rem;font-weight:700;margin-bottom:12px;">don't see your show?</h2>
      <p>DramaMatch has 700+ Western titles. Type your show and get instant matches.</p>
      <a href="/" class="btn-primary">find my match →</a>
    </section>
  `;

  return pageShell({
    title,
    description,
    canonical,
    jsonLd,
    breadcrumbs: '<span>›</span> <span>Lists</span>',
    breadcrumbTrail: [{ name: 'Lists', url: canonical }],
    bodyContent
  });
}

/**
 * Reverse list page: "Top Western Shows for [K-Drama] Fans"
 * Targets: dramamatch.app/lists/western-shows-like-{showId}
 *
 * @param {string} slug            - URL slug (e.g. "western-shows-like-crash-landing-on-you")
 * @param {Object} sourceShow      - Asian show object from recommendation engine
 * @param {Array}  recommendations - Array of {show, matchScore, reasoning} (Western shows)
 */
function reverseListPage(slug, sourceShow, recommendations) {
  if (!sourceShow || !recommendations || !recommendations.length) return null;

  const displayRecs = recommendations.slice(0, 10);
  const showTitle = sourceShow.title;
  const showYear = sourceShow.year;
  const genres = (sourceShow.genres || []).slice(0, 2);
  const genreStr = genres.join(' and ');
  const top3 = displayRecs.slice(0, 3).map(r => r.show.title).join(', ');

  const metaTitle = `Top Western Shows for ${showTitle} Fans (${showYear || '2025'}) | DramaMatch`;
  const description = `Love ${showTitle}? These Western shows deliver the same ${genreStr || 'intense storytelling'} energy. Ranked by match score with streaming links: ${top3} and more.`;
  const canonical = `${BASE_URL}/lists/${slug}`;

  // Schema.org ItemList
  const itemListElements = displayRecs.map((r, i) => {
    const s = r.show;
    const isMovieType = s.type === 'western-movie';
    const schemaType = isMovieType ? 'Movie' : 'TVSeries';
    const posterUrl = getPosterUrl(s.id);
    const itemObj = {
      '@type': schemaType,
      '@id': `${BASE_URL}/match/${s.id}`,
      'name': s.title,
      'url': `${BASE_URL}/match/${s.id}`
    };
    if (posterUrl) itemObj.image = posterUrl;
    if (r.reasoning) itemObj.description = r.reasoning.replace(/\*\*/g, '');
    if (s.year) itemObj.datePublished = String(s.year);
    if (r.matchScore) {
      itemObj.aggregateRating = {
        '@type': 'AggregateRating',
        'ratingValue': (Math.round(r.matchScore) / 10).toFixed(1),
        'bestRating': '10',
        'worstRating': '1',
        'ratingCount': displayRecs.length
      };
    }
    const streamKeys = PLATFORM_ORDER.filter(k => s.streaming && s.streaming[k] && PLATFORMS[k]);
    if (streamKeys.length > 0) {
      itemObj.potentialAction = {
        '@type': 'WatchAction',
        'target': {
          '@type': 'EntryPoint',
          'urlTemplate': PLATFORMS[streamKeys[0]].buildUrl(s.title),
          'actionPlatform': ['http://schema.org/DesktopWebPlatform', 'http://schema.org/MobileWebPlatform']
        }
      };
    }
    return { '@type': 'ListItem', 'position': i + 1, 'item': itemObj };
  });

  const faqs = [
    {
      q: `What Western shows are similar to ${showTitle}?`,
      a: displayRecs.length >= 3
        ? `The top Western shows for ${showTitle} fans are <a href="/match/${displayRecs[0].show.id}">${displayRecs[0].show.title}</a>, <a href="/match/${displayRecs[1].show.id}">${displayRecs[1].show.title}</a>, and <a href="/match/${displayRecs[2].show.id}">${displayRecs[2].show.title}</a>. All three share the same ${genreStr || 'story'} DNA that makes ${showTitle} so compelling.`
        : `Use DramaMatch to find Western shows similar to ${showTitle}.`
    },
    {
      q: `Are there American or British shows like ${showTitle}?`,
      a: `Yes — there are ${displayRecs.length} strong Western matches for ${showTitle}. The closest is <a href="/match/${displayRecs[0].show.id}">${displayRecs[0].show.title}</a> at ${Math.round(displayRecs[0].matchScore)}% similarity. Western shows capture the same ${genreStr || 'themes'} in English-language productions.`
    },
    {
      q: `Where can I watch Western shows like ${showTitle}?`,
      a: `Western shows similar to ${showTitle} stream on Netflix, HBO Max, Amazon Prime Video, Hulu, Apple TV+, and Disney+. Each title on this page has a Watch Now button showing exactly which platforms carry it.`
    },
    {
      q: `Why do ${showTitle} fans love Western shows?`,
      a: `${showTitle} fans often discover Western shows share the same emotional core — ${genreStr ? 'especially ' + genreStr + ' stories' : 'intense drama and character depth'}. DramaMatch's algorithm scores each match by genre, themes, tone, and story tropes for the highest-quality recommendations.`
    }
  ];

  const jsonLd = [
    {
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      'name': `Top Western Shows for ${showTitle} Fans`,
      'description': description,
      'url': canonical,
      'numberOfItems': displayRecs.length,
      'itemListElement': itemListElements
    },
    {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      'name': metaTitle,
      'description': description,
      'url': canonical,
      'about': {
        '@type': 'TVSeries',
        'name': showTitle,
        'datePublished': String(showYear || ''),
        'countryOfOrigin': sourceShow.type === 'cdrama' ? 'CN' : sourceShow.type === 'jdrama' ? 'JP' : 'KR'
      }
    },
    buildFaqSchema(faqs)
  ];

  // Type badge for source show
  const sourceTypeBadge = sourceShow.type === 'cdrama'
    ? '<span class="badge" style="background:rgba(232,97,77,0.15);color:#e8614d;">C-Drama</span>'
    : sourceShow.type === 'jdrama'
      ? '<span class="badge" style="background:rgba(167,139,250,0.15);color:#a78bfa;">J-Drama</span>'
      : sourceShow.type === 'anime'
        ? '<span class="badge" style="background:rgba(244,117,33,0.15);color:#F47521;">Anime</span>'
        : '<span class="badge" style="background:rgba(74,222,128,0.15);color:#4ade80;">K-Drama</span>';

  // Render numbered list cards (Western shows)
  const cardsHtml = displayRecs.map((r, idx) => {
    const s = r.show;
    const pct = Math.round(r.matchScore);
    const num = idx + 1;
    const posterUrl = getPosterUrl(s.id);
    const genreTags = (s.genres || []).slice(0, 3).map(g => `<span class="badge genre">${esc(g)}</span>`).join(' ');
    const tropeTags = (s.tropes || []).slice(0, 3).map(t => `<span class="badge trope">${esc(t.replace(/-/g, ' '))}</span>`).join(' ');
    const typeBadge = s.type === 'western-movie'
      ? '<span class="badge" style="background:rgba(212,168,83,0.15);color:#d4a853;">Western Movie</span>'
      : '<span class="badge" style="background:rgba(99,179,237,0.15);color:#63b3ed;">Western Show</span>';
    const watchButtons = watchNowButtons(s.streaming, s.id, s.title);

    const vb = computeVibeScores(s);
    const vmAxes = [
      { l: 'Gritty',    r: 'Fluffy',     v: vb.grittyFluffy,     g: 'linear-gradient(to right,#64748b,#f9a8d4)' },
      { l: 'Slow-Burn', r: 'Fast-Paced', v: vb.slowFast,         g: 'linear-gradient(to right,#93c5fd,#fbbf24)' },
      { l: 'Cynical',   r: 'Heartfelt',  v: vb.cynicalHeartfelt, g: 'linear-gradient(to right,#4b5563,#fb7185)' },
      { l: 'Light',     r: 'Heavy',      v: vb.lightHeavy,       g: 'linear-gradient(to right,#86efac,#818cf8)' }
    ];
    const vibeMeterHtml = `<div class="vibe-meter-section">
      <div class="vibe-meter-title">Vibe Check</div>
      ${vmAxes.map(a => `<div class="vibe-meter-row">
        <span class="vibe-lbl vibe-lbl-l">${a.l}</span>
        <div class="vibe-track" style="background:${a.g};"><div class="vibe-dot" style="left:${Math.round(a.v * 100)}%;"></div></div>
        <span class="vibe-lbl vibe-lbl-r">${a.r}</span>
      </div>`).join('')}
    </div>`;

    return `
    <article class="list-card" itemscope itemtype="https://schema.org/${s.runtime ? 'Movie' : 'TVSeries'}" id="pick-${num}">
      <div class="list-card-rank" aria-label="Rank ${num}">${num}</div>
      <div class="list-card-body">
        <div class="list-card-header">
          ${posterUrl ? `<a href="/match/${s.id}" class="list-card-poster-link"><img class="list-card-poster" src="${posterUrl}" alt="${esc(s.title)} poster" width="90" height="135" loading="${idx < 3 ? 'eager' : 'lazy'}"></a>` : ''}
          <div class="list-card-info">
            <div class="list-card-title-row">
              <h2 itemprop="name"><a href="/match/${s.id}">${esc(s.title)}</a></h2>
              <div class="list-match-badge" title="${pct}% DNA match with ${esc(showTitle)}">
                <div class="list-match-fill" style="width:${pct}%"></div>
                <span class="list-match-pct">${pct}%</span>
              </div>
            </div>
            <div class="meta-row" style="margin-top:6px;flex-wrap:wrap;">
              ${typeBadge}
              ${s.year ? `<span class="badge year" itemprop="datePublished">${s.year}</span>` : ''}
              ${s.episodes ? `<span class="badge">${s.episodes} eps</span>` : ''}
              ${s.network ? `<span class="badge network">${esc(s.network)}</span>` : ''}
              ${genreTags}
            </div>
            ${tropeTags ? `<div class="meta-row" style="margin-top:4px;">${tropeTags}</div>` : ''}
          </div>
        </div>
        ${r.reasoning ? `<div class="why-love"><div class="why-love-label">Why you'll love this</div><p>${esc(r.reasoning.replace(/\*\*/g, ''))}</p></div>` : ''}
        ${s.synopsis ? `<p class="synopsis" itemprop="description">${esc(s.synopsis.substring(0, 200))}${s.synopsis.length > 200 ? '…' : ''}</p>` : ''}
        ${vibeMeterHtml}
        ${watchButtons ? `<div class="watch-now-section"><div class="watch-now-label">Where to Watch</div><div class="watch-now-buttons">${watchButtons}</div></div>` : ''}
      </div>
    </article>`;
  }).join('\n');

  const bodyContent = `
    <style>
      .list-hero { text-align: center; padding: 40px 24px 32px; max-width: 760px; margin: 0 auto; }
      .list-hero h1 { font-size: clamp(1.6rem, 4vw, 2.4rem); font-weight: 800; line-height: 1.2; margin-bottom: 14px; }
      .list-hero h1 em { font-style: normal; color: var(--coral); }
      .list-hero .subtitle { color: var(--text-2); font-size: 1.05rem; line-height: 1.6; max-width: 600px; margin: 0 auto 16px; }
      .list-container { max-width: 860px; margin: 0 auto; padding: 0 16px 48px; }
      .list-card { display: flex; gap: 0; background: var(--bg-card); border: 1px solid var(--border); border-radius: 14px; margin-bottom: 20px; overflow: hidden; }
      .list-card-rank { min-width: 56px; display: flex; align-items: center; justify-content: center; font-size: 1.8rem; font-weight: 800; color: var(--text-3); background: rgba(255,255,255,0.03); border-right: 1px solid var(--border); flex-shrink: 0; }
      .list-card-body { flex: 1; padding: 20px; min-width: 0; }
      .list-card-header { display: flex; gap: 16px; }
      .list-card-poster-link { flex-shrink: 0; }
      .list-card-poster { width: 90px; height: 135px; object-fit: cover; border-radius: 8px; display: block; }
      .list-card-info { flex: 1; min-width: 0; }
      .list-card-title-row { display: flex; align-items: flex-start; gap: 12px; justify-content: space-between; }
      .list-card-title-row h2 { font-size: 1.15rem; font-weight: 700; line-height: 1.3; }
      .list-card-title-row h2 a { color: var(--text); }
      .list-card-title-row h2 a:hover { color: var(--coral); text-decoration: none; }
      .list-match-badge { flex-shrink: 0; background: rgba(99,179,237,0.12); border: 1px solid rgba(99,179,237,0.3); border-radius: 20px; padding: 4px 10px; font-size: 0.82rem; font-weight: 700; color: #63b3ed; white-space: nowrap; position: relative; overflow: hidden; }
      .list-match-fill { position: absolute; left: 0; top: 0; bottom: 0; background: rgba(99,179,237,0.1); border-radius: 20px; }
      .list-match-pct { position: relative; z-index: 1; }
      .why-love { background: linear-gradient(135deg,rgba(99,179,237,0.08),rgba(74,222,128,0.06)); border-left: 3px solid #63b3ed; border-radius: 0 8px 8px 0; padding: 10px 14px; margin: 12px 0; }
      .why-love-label { font-size: 0.7rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.08em; color: #63b3ed; margin-bottom: 4px; }
      .why-love p { font-size: 0.9rem; color: var(--text); line-height: 1.55; }
      .lists-nav { text-align: center; padding: 12px 0 28px; }
      .lists-nav a { font-size: 0.84rem; color: var(--text-2); }
      .lists-nav a:hover { color: var(--coral); }
      .match-page-link { display: inline-block; margin-top: 10px; padding: 7px 18px; background: rgba(74,222,128,0.1); border: 1px solid rgba(74,222,128,0.3); border-radius: 20px; font-size: 0.84rem; color: #4ade80; }
      .match-page-link:hover { background: rgba(74,222,128,0.2); text-decoration: none; }
      @media (max-width: 600px) {
        .list-card { flex-direction: row; }
        .list-card-rank { min-width: 44px; font-size: 1.4rem; }
        .list-card-poster { width: 70px; height: 105px; }
        .list-card-title-row { flex-wrap: wrap; gap: 6px; }
      }
    </style>

    <section class="list-hero">
      <nav class="breadcrumbs" style="font-size:0.8rem;color:var(--text-3);margin-bottom:16px;justify-content:center;display:flex;gap:6px;align-items:center;">
        <a href="/" style="color:var(--text-3);">DramaMatch</a>
        <span>›</span>
        <a href="/lists" style="color:var(--text-3);">Lists</a>
        <span>›</span>
        <span>${esc(showTitle)} Fans</span>
      </nav>
      <h1>Top Western Shows for <em>${esc(showTitle)}</em> Fans</h1>
      <p class="subtitle">If you loved ${esc(showTitle)}, these English-language shows deliver the same ${genreStr ? genreStr + ' energy' : 'emotional intensity and storytelling'}. Ranked by DNA match score.</p>
      <div class="meta-row" style="justify-content:center;margin-top:14px;flex-wrap:wrap;">
        ${sourceTypeBadge}
        ${showYear ? `<span class="badge year">${showYear}</span>` : ''}
        ${genres.map(g => `<span class="badge genre">${esc(g)}</span>`).join(' ')}
        ${(sourceShow.tropes || []).slice(0, 2).map(t => `<span class="badge trope">${esc((typeof t === 'string' ? t : t).replace(/-/g, ' '))}</span>`).join(' ')}
      </div>
      <div style="margin-top:20px;">
        <a href="/drama/${sourceShow.id}" class="match-page-link">About ${esc(showTitle)} →</a>
      </div>
    </section>

    <div class="list-container">
      ${cardsHtml}

      <div style="text-align:center;padding:16px 0 8px;">
        <a href="/lists" style="font-size:0.85rem;color:var(--text-2);">← Browse all lists</a>
        &nbsp;&nbsp;·&nbsp;&nbsp;
        <a href="/drama/${sourceShow.id}" style="font-size:0.85rem;color:var(--coral);">About ${esc(showTitle)} →</a>
      </div>
    </div>

    ${faqAccordionHtml(faqs, `Western Shows for ${showTitle} Fans: FAQ`)}

    <section class="cta-section">
      <h2 style="font-size:1.4rem;font-weight:700;margin-bottom:12px;">found your next western obsession?</h2>
      <p>Search any K-drama or Western show — DramaMatch finds what shares its exact DNA.</p>
      <a href="/" class="btn-primary">find my match →</a>
    </section>
  `;

  return pageShell({
    title: metaTitle,
    description,
    canonical,
    ogImage: `${BASE_URL}/og-default.png`,
    jsonLd,
    breadcrumbs: `<span>›</span> <span>Lists</span> <span>›</span> <span>Western Shows for ${esc(showTitle)} Fans</span>`,
    breadcrumbTrail: [
      { name: 'Lists', url: `${BASE_URL}/lists` },
      { name: `Top Western Shows for ${showTitle} Fans`, url: canonical }
    ],
    bodyContent
  });
}

/**
 * Reverse list index page — /lists/western
 * Shows all available "Top Western Shows for [K-Drama] Fans" pages
 */
function reverseListIndexPage(shows) {
  const title = 'Western Shows For Fans Of — Browse by K-Drama | DramaMatch';
  const description = 'Find the best Western shows matched to your favorite K-dramas. Browse curated "Top Western Shows for [K-Drama] Fans" lists across romance, thriller, crime, sci-fi, and more.';
  const canonical = `${BASE_URL}/lists/western`;

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    'name': 'Western Shows For Fans Of — DramaMatch',
    'description': description,
    'url': canonical
  };

  const cardsHtml = shows.map(s => {
    const slug = `western-shows-like-${s.id}`;
    const typeLabel = s.type === 'cdrama' ? 'C-Drama' : s.type === 'jdrama' ? 'J-Drama' : s.type === 'anime' ? 'Anime' : 'K-Drama';
    const typeColor = s.type === 'cdrama' ? '#e8614d' : s.type === 'jdrama' ? '#a78bfa' : s.type === 'anime' ? '#F47521' : '#4ade80';
    const typeBg = s.type === 'cdrama' ? 'rgba(232,97,77,0.15)' : s.type === 'jdrama' ? 'rgba(167,139,250,0.15)' : s.type === 'anime' ? 'rgba(244,117,33,0.15)' : 'rgba(74,222,128,0.15)';
    const genres = (s.genres || []).slice(0, 2).map(g => `<span class="badge genre">${esc(g)}</span>`).join(' ');
    return `
    <a href="/lists/${slug}" class="list-index-card">
      <div class="list-index-title">${esc(s.title)}</div>
      <div class="list-index-meta">
        <span class="badge" style="background:${typeBg};color:${typeColor};">${typeLabel}</span>
        ${s.year ? `<span class="badge year">${s.year}</span>` : ''}
        ${genres}
      </div>
    </a>`;
  }).join('\n');

  const bodyContent = `
    <style>
      .list-index-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(220px, 1fr)); gap: 14px; max-width: 1100px; margin: 0 auto; padding: 0 16px 48px; }
      .list-index-card { background: var(--bg-card); border: 1px solid var(--border); border-radius: 12px; padding: 16px; text-decoration: none; transition: border-color 0.2s, transform 0.15s; display: block; }
      .list-index-card:hover { border-color: var(--coral); transform: translateY(-2px); text-decoration: none; }
      .list-index-title { font-size: 0.95rem; font-weight: 700; color: var(--text); margin-bottom: 8px; line-height: 1.3; }
      .list-index-meta { display: flex; flex-wrap: wrap; gap: 4px; }
    </style>
    <section class="hero-section" style="text-align:center;">
      <h1>Western Shows For Fans Of...</h1>
      <p class="subtitle">Already watched your favorite K-drama? These Western shows deliver the same energy. Pick your drama to see the full ranked list.</p>
      <div style="margin-top:14px;">
        <a href="/lists" style="font-size:0.85rem;color:var(--text-2);">← Best K-Dramas for Western fans</a>
      </div>
    </section>
    <div class="section-title">${shows.length} K-Dramas with Curated Western Lists</div>
    <div class="list-index-grid">
      ${cardsHtml}
    </div>
    <section class="cta-section">
      <h2 style="font-size:1.3rem;font-weight:700;margin-bottom:12px;">don't see your drama?</h2>
      <p>DramaMatch has 500+ Asian titles. Type your drama and get instant Western matches.</p>
      <a href="/" class="btn-primary">find my match →</a>
    </section>
  `;

  return pageShell({
    title,
    description,
    canonical,
    jsonLd,
    breadcrumbs: '<span>›</span> <span>Lists</span> <span>›</span> <span>Western Shows For Fans Of</span>',
    breadcrumbTrail: [
      { name: 'Lists', url: `${BASE_URL}/lists` },
      { name: 'Western Shows For Fans Of', url: canonical }
    ],
    bodyContent
  });
}

module.exports = { dramePage, matchPage, moodPage, actorPage, blogPage, blogIndexPage, castGuidePage, kdramaListPage, comparisonPage, showsLikeIndexPage, listPage, listIndexPage, reverseListPage, reverseListIndexPage, BASE_URL };
