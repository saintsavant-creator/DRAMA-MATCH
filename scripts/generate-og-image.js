/**
 * Generate DramaMatch OG image (1200x630) and favicon
 * Uses sharp to convert SVG → PNG
 */
const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

const PUBLIC_DIR = path.join(__dirname, '..', 'public');
const OG_DIR = path.join(PUBLIC_DIR, 'og');

// Ensure /public/og/ exists
if (!fs.existsSync(OG_DIR)) {
  fs.mkdirSync(OG_DIR, { recursive: true });
}

// ── Brand Colors ────────────────────────────────────────────────────────────
const CORAL = '#E8614D';
const CORAL2 = '#F08070';
const CREAM = '#FFF8F0';
const CREAM2 = '#FFF0E8';
const DARK = '#1A0A08';
const GOLD = '#C8781A';
const TEXT_SECONDARY = '#7A4030';

/**
 * Generate a branded OG image SVG
 * @param {Object} opts
 * @param {string} opts.type - 'default' | 'comparison' | 'drama' | 'mood'
 * @param {string} opts.title - Page title (for non-default)
 * @param {string} opts.subtitle - Subtitle (for non-default)
 */
function buildOgSvg({ type = 'default', title = '', subtitle = '' } = {}) {
  if (type === 'default') {
    return `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <defs>
    <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:${CREAM}"/>
      <stop offset="100%" style="stop-color:${CREAM2}"/>
    </linearGradient>
    <linearGradient id="coral" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" style="stop-color:${CORAL}"/>
      <stop offset="100%" style="stop-color:${CORAL2}"/>
    </linearGradient>
    <linearGradient id="heroBg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#E8614D;stop-opacity:0.12"/>
      <stop offset="100%" style="stop-color:#F08070;stop-opacity:0.06"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="630" fill="url(#bg)"/>

  <!-- Decorative coral orbs -->
  <circle cx="1100" cy="80" r="240" fill="${CORAL}" opacity="0.06"/>
  <circle cx="80" cy="560" r="180" fill="${CORAL}" opacity="0.07"/>
  <circle cx="600" cy="315" r="400" fill="url(#heroBg)"/>

  <!-- Top accent bar -->
  <rect x="0" y="0" width="1200" height="6" fill="url(#coral)"/>

  <!-- Left coral decoration line -->
  <rect x="80" y="120" width="5" height="80" rx="2" fill="${CORAL}"/>

  <!-- Main Logo -->
  <text x="116" y="177" font-family="Georgia, 'Times New Roman', serif" font-size="72" font-weight="700"
        fill="${DARK}" letter-spacing="-1">DramaMatch</text>

  <!-- Coral underline accent under logo -->
  <rect x="116" y="192" width="500" height="4" rx="2" fill="url(#coral)" opacity="0.9"/>

  <!-- Tagline -->
  <text x="116" y="268" font-family="Georgia, 'Times New Roman', serif" font-size="38" font-weight="400"
        fill="${CORAL}" letter-spacing="0.5">Find your K-Drama Twin</text>

  <!-- Descriptor -->
  <text x="116" y="330" font-family="'Segoe UI', Arial, Helvetica, sans-serif" font-size="24"
        fill="${TEXT_SECONDARY}">Match any Western show to K-dramas, C-dramas &amp; J-dramas</text>

  <!-- Stats line -->
  <text x="116" y="380" font-family="'Segoe UI', Arial, Helvetica, sans-serif" font-size="20"
        fill="${TEXT_SECONDARY}" opacity="0.8">1,300+ dramas matched by vibe, tropes &amp; story DNA</text>

  <!-- Pill badges -->
  <!-- K-Drama -->
  <rect x="116" y="420" width="160" height="46" rx="23" fill="${CORAL}" opacity="0.15"/>
  <rect x="116" y="420" width="160" height="46" rx="23" fill="none" stroke="${CORAL}" stroke-width="1.5" opacity="0.5"/>
  <text x="196" y="448" font-family="'Segoe UI', Arial, sans-serif" font-size="20" font-weight="600"
        text-anchor="middle" fill="${CORAL}">&#x1F1F0;&#x1F1F7; K-Drama</text>

  <!-- C-Drama -->
  <rect x="292" y="420" width="160" height="46" rx="23" fill="${CORAL}" opacity="0.15"/>
  <rect x="292" y="420" width="160" height="46" rx="23" fill="none" stroke="${CORAL}" stroke-width="1.5" opacity="0.5"/>
  <text x="372" y="448" font-family="'Segoe UI', Arial, sans-serif" font-size="20" font-weight="600"
        text-anchor="middle" fill="${CORAL}">&#x1F1E8;&#x1F1F3; C-Drama</text>

  <!-- J-Drama -->
  <rect x="468" y="420" width="160" height="46" rx="23" fill="${CORAL}" opacity="0.15"/>
  <rect x="468" y="420" width="160" height="46" rx="23" fill="none" stroke="${CORAL}" stroke-width="1.5" opacity="0.5"/>
  <text x="548" y="448" font-family="'Segoe UI', Arial, sans-serif" font-size="20" font-weight="600"
        text-anchor="middle" fill="${CORAL}">&#x1F1EF;&#x1F1F5; J-Drama</text>

  <!-- Free badge -->
  <rect x="644" y="420" width="130" height="46" rx="23" fill="#16A34A" opacity="0.12"/>
  <rect x="644" y="420" width="130" height="46" rx="23" fill="none" stroke="#16A34A" stroke-width="1.5" opacity="0.5"/>
  <text x="709" y="448" font-family="'Segoe UI', Arial, sans-serif" font-size="20" font-weight="600"
        text-anchor="middle" fill="#16A34A">&#x2713; Free</text>

  <!-- Right decorative graphic — stacked film strips -->
  <g transform="translate(860, 140)" opacity="0.9">
    <!-- Outer card shadow -->
    <rect x="20" y="20" width="260" height="360" rx="16" fill="${CORAL}" opacity="0.1"/>
    <!-- Main card -->
    <rect x="0" y="0" width="260" height="360" rx="16" fill="white" opacity="0.9"/>
    <rect x="0" y="0" width="260" height="10" rx="8" fill="url(#coral)"/>
    <!-- Film strip holes -->
    <rect x="16" y="24" width="16" height="24" rx="4" fill="${CREAM}"/>
    <rect x="44" y="24" width="16" height="24" rx="4" fill="${CREAM}"/>
    <rect x="72" y="24" width="16" height="24" rx="4" fill="${CREAM}"/>
    <rect x="100" y="24" width="16" height="24" rx="4" fill="${CREAM}"/>
    <rect x="128" y="24" width="16" height="24" rx="4" fill="${CREAM}"/>
    <rect x="156" y="24" width="16" height="24" rx="4" fill="${CREAM}"/>
    <rect x="184" y="24" width="16" height="24" rx="4" fill="${CREAM}"/>
    <rect x="212" y="24" width="16" height="24" rx="4" fill="${CREAM}"/>
    <!-- Image placeholder area -->
    <rect x="16" y="62" width="228" height="200" rx="8" fill="${CORAL}" opacity="0.15"/>
    <text x="130" y="168" font-family="'Segoe UI', Arial, sans-serif" font-size="48"
          text-anchor="middle" fill="${CORAL}" opacity="0.5">&#x1F3AC;</text>
    <!-- Rating stars -->
    <text x="130" y="295" font-family="'Segoe UI', Arial, sans-serif" font-size="24"
          text-anchor="middle" fill="${GOLD}">&#x2605;&#x2605;&#x2605;&#x2605;&#x2605;</text>
    <!-- Match label -->
    <text x="130" y="330" font-family="Georgia, serif" font-size="16"
          text-anchor="middle" fill="${TEXT_SECONDARY}">Perfect Match Found</text>
  </g>

  <!-- URL watermark -->
  <text x="116" y="592" font-family="'Segoe UI', Arial, Helvetica, sans-serif" font-size="18"
        fill="${TEXT_SECONDARY}" opacity="0.6">dramamatch.app</text>

  <!-- Bottom coral bar -->
  <rect x="0" y="624" width="1200" height="6" fill="url(#coral)" opacity="0.7"/>
</svg>`;
  }

  // Comparison / Drama / Mood page template
  // Truncate title if too long
  const maxTitleLen = 52;
  const displayTitle = title.length > maxTitleLen
    ? title.substring(0, maxTitleLen - 1) + '…'
    : title;

  // Split title into up to 2 lines for wrapping
  const words = displayTitle.split(' ');
  let line1 = '';
  let line2 = '';
  let currentLine = '';
  let lineBreakDone = false;
  for (const word of words) {
    const test = currentLine ? `${currentLine} ${word}` : word;
    if (!lineBreakDone && test.length > 28) {
      line1 = currentLine;
      currentLine = word;
      lineBreakDone = true;
    } else {
      currentLine = test;
    }
  }
  if (!line1) {
    line1 = currentLine;
    line2 = '';
  } else {
    line2 = currentLine;
  }

  const hasLine2 = line2.trim().length > 0;
  const titleY1 = hasLine2 ? 230 : 268;
  const titleY2 = titleY1 + 72;
  const subtitleY = hasLine2 ? titleY2 + 60 : titleY1 + 70;

  return `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <defs>
    <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:${CREAM}"/>
      <stop offset="100%" style="stop-color:${CREAM2}"/>
    </linearGradient>
    <linearGradient id="coral" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" style="stop-color:${CORAL}"/>
      <stop offset="100%" style="stop-color:${CORAL2}"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="630" fill="url(#bg)"/>

  <!-- Decorative orbs -->
  <circle cx="1150" cy="80" r="220" fill="${CORAL}" opacity="0.07"/>
  <circle cx="60" cy="580" r="160" fill="${CORAL}" opacity="0.07"/>

  <!-- Top accent bar -->
  <rect x="0" y="0" width="1200" height="6" fill="url(#coral)"/>

  <!-- Left accent line -->
  <rect x="80" y="120" width="5" height="80" rx="2" fill="${CORAL}"/>

  <!-- DramaMatch logo (smaller, top left) -->
  <text x="116" y="177" font-family="Georgia, 'Times New Roman', serif" font-size="40" font-weight="700"
        fill="${CORAL}" letter-spacing="-0.5">DramaMatch</text>

  <!-- Divider -->
  <rect x="116" y="192" width="300" height="3" rx="1" fill="url(#coral)" opacity="0.6"/>

  <!-- Main page title -->
  <text x="116" y="${titleY1}" font-family="Georgia, 'Times New Roman', serif" font-size="58" font-weight="700"
        fill="${DARK}" letter-spacing="-1">${esc(line1)}</text>
  ${hasLine2 ? `<text x="116" y="${titleY2}" font-family="Georgia, 'Times New Roman', serif" font-size="58" font-weight="700"
        fill="${DARK}" letter-spacing="-1">${esc(line2)}</text>` : ''}

  <!-- Subtitle / description -->
  ${subtitle ? `<text x="116" y="${subtitleY}" font-family="'Segoe UI', Arial, Helvetica, sans-serif" font-size="24"
        fill="${TEXT_SECONDARY}" opacity="0.85">${esc(subtitle.length > 70 ? subtitle.substring(0, 69) + '…' : subtitle)}</text>` : ''}

  <!-- Bottom badges row -->
  <rect x="116" y="540" width="160" height="44" rx="22" fill="${CORAL}" opacity="0.12"/>
  <rect x="116" y="540" width="160" height="44" rx="22" fill="none" stroke="${CORAL}" stroke-width="1.5" opacity="0.4"/>
  <text x="196" y="567" font-family="'Segoe UI', Arial, sans-serif" font-size="18" font-weight="600"
        text-anchor="middle" fill="${CORAL}">DramaMatch</text>

  <text x="296" y="567" font-family="'Segoe UI', Arial, Helvetica, sans-serif" font-size="18"
        fill="${TEXT_SECONDARY}" opacity="0.7">dramamatch.app</text>

  <!-- Bottom bar -->
  <rect x="0" y="624" width="1200" height="6" fill="url(#coral)" opacity="0.7"/>
</svg>`;
}

/** Escape XML special chars for SVG text */
function esc(str) {
  if (!str) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

async function svgToPng(svgString, outputPath) {
  const buf = Buffer.from(svgString.trim());
  await sharp(buf)
    .resize(1200, 630)
    .png({ quality: 92 })
    .toFile(outputPath);
}

async function generate() {
  console.log('Generating OG images...');

  // 1. Default branded OG image
  await svgToPng(
    buildOgSvg({ type: 'default' }),
    path.join(PUBLIC_DIR, 'og-default.png')
  );
  console.log('✓ og-default.png saved (1200×630)');

  // 2. Per-page OG images — uses shared registry from services/og-image.js
  const { OG_PAGE_REGISTRY } = require('../services/og-image');

  const entries = Object.entries(OG_PAGE_REGISTRY);
  console.log(`Generating ${entries.length} page-specific OG images...`);

  for (const [slug, meta] of entries) {
    const svg = buildOgSvg({ type: 'comparison', title: meta.title, subtitle: meta.subtitle });
    await svgToPng(svg, path.join(OG_DIR, `${slug}.png`));
    console.log(`✓ og/${slug}.png`);
  }

  // 3. Favicon SVG
  const faviconSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32">
  <rect width="32" height="32" rx="6" fill="${CREAM}"/>
  <rect x="0" y="0" width="32" height="3" rx="1" fill="${CORAL}"/>
  <text x="16" y="23" font-family="Georgia, serif" font-size="20" font-weight="700"
        text-anchor="middle" fill="${CORAL}">D</text>
  <rect x="4" y="28" width="24" height="2" rx="1" fill="${CORAL}"/>
</svg>`;

  const faviconPath = path.join(PUBLIC_DIR, 'favicon.svg');
  require('fs').writeFileSync(faviconPath, faviconSvg.trim());
  console.log('✓ favicon.svg saved');

  // Favicon PNG
  await sharp(Buffer.from(faviconSvg.trim()))
    .resize(32, 32)
    .png()
    .toFile(path.join(PUBLIC_DIR, 'favicon.ico'));
  console.log('✓ favicon.ico saved (32×32 PNG)');

  console.log('\nAll OG assets generated successfully!');
}

generate().catch(err => {
  console.error('OG image generation failed:', err.message);
  process.exit(1);
});
