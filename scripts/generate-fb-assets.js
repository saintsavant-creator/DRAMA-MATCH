/**
 * Generate DramaMatch Facebook branded assets using @napi-rs/canvas.
 *
 * Uses LiberationSans font (bundled in pdfjs-dist) so text renders correctly
 * even on servers without system fonts / fontconfig.
 *
 * Includes TEXT VERIFICATION — fails the build if text pixels aren't detected.
 *
 * Output:
 *   public/fb-profile.png  (400×400)
 *   public/fb-cover.png    (820×312)
 */

const { createCanvas, GlobalFonts } = require('@napi-rs/canvas');
const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

// ── Register fonts ───────────────────────────────────────────────────────────
const FONT_SEARCH_PATHS = [
  path.resolve(__dirname, '..', 'fonts'),
  path.resolve(__dirname, '..', 'node_modules', 'pdfjs-dist', 'standard_fonts'),
  '/opt/polsia/node_modules/pdfjs-dist/standard_fonts',
];

let fontBase = null;
for (const p of FONT_SEARCH_PATHS) {
  if (fs.existsSync(path.join(p, 'LiberationSans-Regular.ttf'))) {
    fontBase = p;
    break;
  }
}

if (!fontBase) {
  console.error('FATAL: Could not find LiberationSans fonts in any search path:');
  FONT_SEARCH_PATHS.forEach(p => console.error('  -', p));
  process.exit(1);
}

console.log('Font directory:', fontBase);

const regResult1 = GlobalFonts.registerFromPath(path.join(fontBase, 'LiberationSans-Regular.ttf'), 'LibSans');
const regResult2 = GlobalFonts.registerFromPath(path.join(fontBase, 'LiberationSans-Bold.ttf'), 'LibSans');
console.log('Font registration:', regResult1 && regResult2 ? 'OK' : 'FAILED');

// Verify font actually registered
const families = GlobalFonts.families;
const hasLibSans = families.some(f => f.family === 'LibSans' || f.family === 'Liberation Sans');
if (!hasLibSans) {
  console.error('FATAL: LibSans font registered but not found in families:', JSON.stringify(families));
  process.exit(1);
}
console.log('Font families confirmed:', families.map(f => f.family).join(', '));

// ── Font self-test ──────────────────────────────────────────────────────────
// Renders a known string and checks pixel coverage to ensure font works.
function fontSelfTest() {
  const testCanvas = createCanvas(200, 60);
  const tctx = testCanvas.getContext('2d');
  tctx.fillStyle = '#000000';
  tctx.fillRect(0, 0, 200, 60);
  tctx.fillStyle = '#ffffff';
  tctx.font = 'bold 48px LibSans';
  tctx.textAlign = 'center';
  tctx.textBaseline = 'middle';
  tctx.fillText('DM', 100, 30);

  const buf = testCanvas.toBuffer('image/png');
  const raw = require('sharp').default
    ? require('sharp') // handle both ESM and CJS
    : require('sharp');

  // Synchronous check using canvas raw pixels
  const imgData = tctx.getImageData(0, 0, 200, 60);
  let bright = 0;
  for (let i = 0; i < imgData.data.length; i += 4) {
    if (imgData.data[i] > 200) bright++;
  }
  if (bright < 400) {
    console.error(`FATAL: Font self-test FAILED — only ${bright} bright pixels (need 400+)`);
    console.error('The font is registered but not rendering text correctly.');
    console.error('This environment cannot produce correct Facebook images.');
    process.exit(1);
  }
  console.log(`Font self-test passed: ${bright} bright pixels in "DM" render`);
}

fontSelfTest();

const PUBLIC_DIR = path.join(__dirname, '..', 'public');
if (!fs.existsSync(PUBLIC_DIR)) fs.mkdirSync(PUBLIC_DIR, { recursive: true });

// ── Brand palette ────────────────────────────────────────────────────────────
const COLORS = {
  bgDark:    '#060608',
  bgMid:     '#0a0a0f',
  bgCard:    '#13131a',
  coral:     '#e8614d',
  coralLt:   '#f08070',
  gold:      '#d4a853',
  goldLt:    '#f5a623',
  textPri:   '#f0ece4',
  textSec:   '#9a9690',
  textMuted: '#5a5750',
  chipBorder:'#2a2a35',
  green:     '#4ade80',
};

// ── Helpers ──────────────────────────────────────────────────────────────────

function makeLinearGradient(ctx, x0, y0, x1, y1, stops) {
  const grad = ctx.createLinearGradient(x0, y0, x1, y1);
  stops.forEach(([offset, color]) => grad.addColorStop(offset, color));
  return grad;
}

function makeRadialGradient(ctx, cx, cy, r, stops) {
  const grad = ctx.createRadialGradient(cx, cy, 0, cx, cy, r);
  stops.forEach(([offset, color]) => grad.addColorStop(offset, color));
  return grad;
}

function drawRoundedRect(ctx, x, y, w, h, r) {
  ctx.beginPath();
  ctx.moveTo(x + r, y);
  ctx.lineTo(x + w - r, y);
  ctx.arcTo(x + w, y, x + w, y + r, r);
  ctx.lineTo(x + w, y + h - r);
  ctx.arcTo(x + w, y + h, x + w - r, y + h, r);
  ctx.lineTo(x + r, y + h);
  ctx.arcTo(x, y + h, x, y + h - r, r);
  ctx.lineTo(x, y + r);
  ctx.arcTo(x, y, x + r, y, r);
  ctx.closePath();
}

/**
 * Verify that a PNG buffer contains visible text pixels in a given region.
 * Returns the count of bright pixels. Throws if below threshold.
 */
async function verifyTextPixels(pngBuf, region, minPixels, label) {
  const { data, info } = await sharp(pngBuf).raw().toBuffer({ resolveWithObject: true });
  const { x1, y1, x2, y2, r: minR, g: minG, b: maxB } = region;
  let count = 0;
  for (let y = y1; y < y2; y++) {
    for (let x = x1; x < x2; x++) {
      const idx = (y * info.width + x) * info.channels;
      // Check if pixel is bright enough to be text (not background)
      if (data[idx] > minR && data[idx + 1] > minG) {
        count++;
      }
    }
  }
  if (count < minPixels) {
    throw new Error(
      `TEXT VERIFICATION FAILED for "${label}": only ${count} text pixels detected (need ${minPixels}+). ` +
      `Font rendering likely broken — text not visible in the image.`
    );
  }
  return count;
}

// ── Profile Picture (400×400) ────────────────────────────────────────────────

function generateProfile() {
  const W = 400, H = 400;
  const canvas = createCanvas(W, H);
  const ctx = canvas.getContext('2d');

  // Background gradient
  const bgGrad = makeLinearGradient(ctx, 0, 0, W, H, [
    [0, COLORS.bgMid],
    [1, COLORS.bgCard],
  ]);
  ctx.fillStyle = bgGrad;
  ctx.fillRect(0, 0, W, H);

  // Ambient glow (centre) — v2 tuned for warmer profile feel
  const glow = makeRadialGradient(ctx, 200, 200, 200, [
    [0, 'rgba(232, 97, 77, 0.20)'],
    [1, 'rgba(232, 97, 77, 0)'],
  ]);
  ctx.fillStyle = glow;
  ctx.fillRect(0, 0, W, H);

  // Decorative corner arcs
  ctx.globalAlpha = 0.12;
  ctx.strokeStyle = COLORS.coral;
  ctx.lineWidth = 1;
  ctx.beginPath(); ctx.arc(0, 0, 120, 0, Math.PI * 2); ctx.stroke();
  ctx.beginPath(); ctx.arc(400, 400, 120, 0, Math.PI * 2); ctx.stroke();
  ctx.globalAlpha = 1;

  // Top accent bar
  const coralGrad = makeLinearGradient(ctx, 160, 0, 240, 0, [
    [0, COLORS.coral],
    [1, COLORS.coralLt],
  ]);
  ctx.fillStyle = coralGrad;
  ctx.globalAlpha = 0.9;
  drawRoundedRect(ctx, 160, 92, 80, 3, 1.5);
  ctx.fill();
  ctx.globalAlpha = 1;

  // Drama icon: two overlapping circles
  ctx.globalAlpha = 0.55;
  ctx.lineWidth = 2.5;
  ctx.strokeStyle = COLORS.coral;
  ctx.beginPath(); ctx.arc(174, 148, 22, 0, Math.PI * 2); ctx.stroke();
  ctx.strokeStyle = COLORS.gold;
  ctx.beginPath(); ctx.arc(226, 148, 22, 0, Math.PI * 2); ctx.stroke();
  ctx.globalAlpha = 0.5;
  ctx.fillStyle = COLORS.coral;
  ctx.beginPath(); ctx.arc(200, 148, 10, 0, Math.PI * 2); ctx.fill();
  ctx.globalAlpha = 1;

  // "DM" monogram — large bold text
  ctx.fillStyle = COLORS.textPri;
  ctx.font = 'bold 88px LibSans';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText('DM', 200, 218);

  // Coral underline
  ctx.fillStyle = makeLinearGradient(ctx, 120, 0, 280, 0, [
    [0, COLORS.coral],
    [1, COLORS.coralLt],
  ]);
  ctx.globalAlpha = 0.85;
  drawRoundedRect(ctx, 120, 258, 160, 3, 1.5);
  ctx.fill();
  ctx.globalAlpha = 1;

  // "DramaMatch" wordmark
  ctx.fillStyle = COLORS.gold;
  ctx.font = 'bold 28px LibSans';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText('DramaMatch', 200, 295);

  // Tagline
  ctx.fillStyle = COLORS.textSec;
  ctx.font = '14px LibSans';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText('Find Your K-Drama Twin', 200, 330);

  // Bottom accent bar
  ctx.fillStyle = makeLinearGradient(ctx, 160, 0, 240, 0, [
    [0, COLORS.coral],
    [1, COLORS.coralLt],
  ]);
  ctx.globalAlpha = 0.7;
  drawRoundedRect(ctx, 160, 360, 80, 3, 1.5);
  ctx.fill();
  ctx.globalAlpha = 1;

  // Version marker (invisible — 2px transparent in bottom-right)
  // Unique per generation to bust CDN/browser caches
  ctx.fillStyle = 'rgba(6, 6, 8, 0.01)';
  ctx.fillRect(397, 397, 3, 3);

  return canvas;
}

// ── Cover Photo (820×312) ────────────────────────────────────────────────────

function generateCover() {
  const W = 820, H = 312;
  const canvas = createCanvas(W, H);
  const ctx = canvas.getContext('2d');

  // Base background
  const bgGrad = makeLinearGradient(ctx, 0, 0, W, H, [
    [0, COLORS.bgDark],
    [1, COLORS.bgCard],
  ]);
  ctx.fillStyle = bgGrad;
  ctx.fillRect(0, 0, W, H);

  // Ambient glow 1 (left, coral)
  const glow1 = makeRadialGradient(ctx, W * 0.2, H * 0.3, W * 0.45, [
    [0, 'rgba(232, 97, 77, 0.12)'],
    [1, 'rgba(232, 97, 77, 0)'],
  ]);
  ctx.fillStyle = glow1;
  ctx.fillRect(0, 0, W, H);

  // Ambient glow 2 (right, gold)
  const glow2 = makeRadialGradient(ctx, W * 0.8, H * 0.7, W * 0.45, [
    [0, 'rgba(212, 168, 83, 0.10)'],
    [1, 'rgba(212, 168, 83, 0)'],
  ]);
  ctx.fillStyle = glow2;
  ctx.fillRect(0, 0, W, H);

  // Subtle grid lines
  ctx.globalAlpha = 0.04;
  ctx.strokeStyle = COLORS.coral;
  ctx.lineWidth = 1;
  [78, 156, 234].forEach(y => {
    ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(W, y); ctx.stroke();
  });
  [205, 410, 615].forEach(x => {
    ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, H); ctx.stroke();
  });
  ctx.globalAlpha = 1;

  // Left-edge decorative orb
  ctx.globalAlpha = 0.05;
  ctx.fillStyle = COLORS.coral;
  ctx.beginPath(); ctx.arc(60, 156, 140, 0, Math.PI * 2); ctx.fill();
  // Right-edge decorative orb
  ctx.fillStyle = COLORS.gold;
  ctx.beginPath(); ctx.arc(760, 156, 140, 0, Math.PI * 2); ctx.fill();
  ctx.globalAlpha = 1;

  // Film-strip dots (left)
  ctx.globalAlpha = 0.25;
  ctx.fillStyle = COLORS.coral;
  [60, 80, 232, 252].forEach(y => {
    ctx.beginPath(); ctx.arc(52, y, 4, 0, Math.PI * 2); ctx.fill();
  });
  // Film-strip dots (right)
  ctx.fillStyle = COLORS.gold;
  [60, 80, 232, 252].forEach(y => {
    ctx.beginPath(); ctx.arc(768, y, 4, 0, Math.PI * 2); ctx.fill();
  });
  ctx.globalAlpha = 1;

  // Genre label row
  ctx.font = 'bold 16px LibSans';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillStyle = COLORS.textPri;
  ctx.globalAlpha = 0.7;
  ctx.fillText('K-Drama  \u00b7  C-Drama  \u00b7  Movies', 410, 68);
  ctx.globalAlpha = 1;

  // Top accent rule
  const coralGrad = makeLinearGradient(ctx, 310, 0, 510, 0, [
    [0, COLORS.coral],
    [1, COLORS.coralLt],
  ]);
  ctx.fillStyle = coralGrad;
  ctx.globalAlpha = 0.7;
  drawRoundedRect(ctx, 310, 85, 200, 2, 1);
  ctx.fill();
  ctx.globalAlpha = 1;

  // Main wordmark "DramaMatch" with glow
  ctx.save();
  ctx.shadowColor = 'rgba(232, 97, 77, 0.35)';
  ctx.shadowBlur = 20;
  ctx.fillStyle = COLORS.textPri;
  ctx.font = 'bold 64px LibSans';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText('DramaMatch', 410, 140);
  ctx.restore();

  // Gold underline accent
  const goldGrad = makeLinearGradient(ctx, 250, 0, 570, 0, [
    [0, COLORS.gold],
    [1, COLORS.goldLt],
  ]);
  ctx.fillStyle = goldGrad;
  ctx.globalAlpha = 0.85;
  drawRoundedRect(ctx, 250, 175, 320, 3, 1.5);
  ctx.fill();
  ctx.globalAlpha = 1;

  // Tagline
  ctx.fillStyle = COLORS.gold;
  ctx.font = '20px LibSans';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText('Find Your Perfect K-Drama Match', 410, 204);

  // Descriptor chips
  const chips = [
    { label: 'K-Drama', color: COLORS.coral, x: 212 },
    { label: 'C-Drama', color: COLORS.gold, x: 349 },
    { label: 'Free', color: COLORS.green, x: 486 },
  ];

  chips.forEach(chip => {
    ctx.fillStyle = COLORS.bgCard;
    drawRoundedRect(ctx, chip.x, 228, 122, 30, 15);
    ctx.fill();
    ctx.strokeStyle = COLORS.chipBorder;
    ctx.lineWidth = 1;
    drawRoundedRect(ctx, chip.x, 228, 122, 30, 15);
    ctx.stroke();
    ctx.fillStyle = chip.color;
    ctx.font = 'bold 13px LibSans';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(chip.label, chip.x + 61, 243);
  });

  // URL watermark
  ctx.fillStyle = COLORS.textMuted;
  ctx.font = '13px LibSans';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText('dramamatch.app', 410, 282);

  // Bottom coral bar
  ctx.fillStyle = makeLinearGradient(ctx, 0, 0, W, 0, [
    [0, COLORS.coral],
    [1, COLORS.coralLt],
  ]);
  ctx.globalAlpha = 0.7;
  ctx.fillRect(0, 308, W, 4);
  ctx.globalAlpha = 1;

  // Version marker (invisible — 2px transparent in bottom-right)
  ctx.fillStyle = 'rgba(6, 6, 8, 0.01)';
  ctx.fillRect(817, 309, 3, 3);

  return canvas;
}

// ── Main ─────────────────────────────────────────────────────────────────────

async function main() {
  console.log('Generating Facebook profile picture (400\u00d7400)\u2026');
  const profileCanvas = generateProfile();
  const profileBuf = profileCanvas.toBuffer('image/png');

  // Verify profile text: "DM" at y=175-260, x=140-260 should have bright pixels
  // Threshold 3500+ (88px bold "DM" produces ~3900 bright pixels when correct)
  const dmPixels = await verifyTextPixels(profileBuf, {
    x1: 140, y1: 175, x2: 260, y2: 260, r: 200, g: 190,
  }, 3500, 'Profile DM monogram');
  console.log(`  \u2713 DM monogram verified: ${dmPixels} text pixels`);

  // Verify "DramaMatch" wordmark at y=280-310
  // Threshold 1000+ (28px bold "DramaMatch" produces ~1200 bright pixels when correct)
  const wmPixels = await verifyTextPixels(profileBuf, {
    x1: 120, y1: 280, x2: 280, y2: 310, r: 180, g: 140,
  }, 1000, 'Profile DramaMatch wordmark');
  console.log(`  \u2713 Wordmark verified: ${wmPixels} text pixels`);

  fs.writeFileSync(path.join(PUBLIC_DIR, 'fb-profile.png'), profileBuf);
  console.log(`\u2713 public/fb-profile.png saved (${profileBuf.length} bytes)`);

  console.log('Generating Facebook cover photo (820\u00d7312)\u2026');
  const coverCanvas = generateCover();
  const coverBuf = coverCanvas.toBuffer('image/png');

  // Verify cover text: "DramaMatch" wordmark at y=108-172
  // Threshold 6500+ (64px bold "DramaMatch" produces ~7300 bright pixels when correct)
  const cwPixels = await verifyTextPixels(coverBuf, {
    x1: 200, y1: 108, x2: 620, y2: 172, r: 200, g: 190,
  }, 6500, 'Cover DramaMatch wordmark');
  console.log(`  \u2713 Cover wordmark verified: ${cwPixels} text pixels`);

  // Verify tagline "Find Your Perfect K-Drama Match" at y=190-218
  // Threshold 750+ (20px "Find Your..." produces ~895 bright pixels when correct)
  const tagPixels = await verifyTextPixels(coverBuf, {
    x1: 200, y1: 190, x2: 620, y2: 218, r: 180, g: 140,
  }, 750, 'Cover tagline');
  console.log(`  \u2713 Tagline verified: ${tagPixels} text pixels`);

  fs.writeFileSync(path.join(PUBLIC_DIR, 'fb-cover.png'), coverBuf);
  console.log(`\u2713 public/fb-cover.png saved (${coverBuf.length} bytes)`);

  console.log('\nAll Facebook assets generated and verified successfully!');
  console.log('\nDownload URLs (after deploy):');
  console.log('  Profile : https://dramamatch.app/fb-profile.png');
  console.log('  Cover   : https://dramamatch.app/fb-cover.png');
}

main().catch(err => {
  console.error('GENERATION FAILED:', err.message);
  process.exit(1);
});
