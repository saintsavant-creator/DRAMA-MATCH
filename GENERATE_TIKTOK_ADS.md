# DramaMatch TikTok Ad Video Generation

Generate two professional 15-second vertical video ads (9:16 aspect ratio, 1080x1920px) for TikTok with the "Hooked on K-Drama?" hook proven to drive 6.25% CTR.

## Quick Start (Local Machine)

### Option 1: Using FFmpeg (Recommended)

**Requirements:**
- FFmpeg 4.0+ (includes both `ffmpeg` and `ffprobe`)
- Node.js 16+

**Installation:**

**macOS:**
```bash
brew install ffmpeg
```

**Ubuntu/Debian:**
```bash
sudo apt-get update
sudo apt-get install ffmpeg
```

**Windows:**
Download from https://ffmpeg.org/download.html

**Generate Videos:**

```bash
# Install dependencies (one time)
npm install

# Generate both ad videos (output to ./public/videos)
npm run gen:ads

# Or customize output location
node scripts/generate-tiktok-ads.js /path/to/output
```

The script will create:
- `dramamatch-ad-1-cinematic.mp4` — Cinematic K-drama hook with text overlays
- `dramamatch-ad-2-dramatic.mp4` — Dramatic scenes with emotional K-drama vibes

### Option 2: Using Online Video Editor

If FFmpeg isn't available, use a web tool:

1. **Canva Pro** (easiest)
   - https://www.canva.com/create/video
   - Use vertical 9:16 template
   - Add text: "Hooked on K-Drama?" → "Find your perfect drama match" → "dramamatch.app"
   - Add background colors and music
   - Export as MP4

2. **Adobe Express** (free)
   - https://www.adobe.com/express/create/video
   - Similar workflow to Canva

3. **CapCut** (mobile, free)
   - Download from App Store / Play Store
   - Create new project (TikTok ratio)
   - Add text and background colors
   - Export as MP4

### Option 3: Fiverr/Video Professional

Budget: $50-200 per video
- Hire on Fiverr (search "TikTok vertical video 9:16")
- Share script below
- Get MP4 files in 1-2 days

---

## Video Scripts

### **Video 1: Cinematic K-Drama Hook**

**Duration:** 15 seconds
**Aspect Ratio:** 9:16 (1080x1920px)

| Time | Content | Notes |
|------|---------|-------|
| 0-3s | Hook: "Hooked on K-Drama?" | Large bold white text, dark blue background (#1a1a2e), center of screen |
| 3-7s | "Find your perfect drama match" | Gradient to darker blue (#16213e), emphasize "perfect match" |
| 7-12s | B-roll vibes (optional) | Deep blue (#0f3460), text: "Thousands of titles" (0-5s), "Perfect matches waiting" (5-7s) |
| 12-15s | CTA: "Try DramaMatch\ndramamatch.app" | Red/coral background (#e94560), large white text, very readable |

**Color Palette:**
- Background 1: `#1a1a2e` (dark navy)
- Background 2: `#16213e` (darker blue)
- Background 3: `#0f3460` (deep teal)
- Background 4: `#e94560` (coral/red CTA)
- Text: White, 60-80pt bold sans-serif

**Music:** Upbeat K-pop or cinematic Korean instrumental (royalty-free suggestions: YouTube Audio Library → "K-pop" or "Cinematic")

---

### **Video 2: Dramatic K-Drama Vibes**

**Duration:** 15 seconds
**Aspect Ratio:** 9:16 (1080x1920px)

| Time | Content | Notes |
|------|---------|-------|
| 0-3s | Hook: "Hooked on K-Drama?" | Deep purple background (#2d0a4e), large bold white text |
| 3-5s | "But don't know what to watch next?" | Purple (#5a189a), transition to slightly brighter shade |
| 5-11s | Rapid-fire genre montage | Brown/burgundy (#7c2d12), quick text cuts every 1.5s: "✨ Romance" → "⚡ Action" → "💔 Drama" → "🎬 Twists" |
| 11-15s | CTA: "DramaMatch finds your perfect match\ndramamatch.app" | Red (#c1121f), large white bold text |

**Color Palette:**
- Background 1: `#2d0a4e` (deep purple)
- Background 2: `#5a189a` (purple)
- Background 3: `#7c2d12` (brown/burgundy)
- Background 4: `#c1121f` (deep red)
- Text: White, 60-80pt bold sans-serif

**Music:** Dramatic/emotional Korean OST vibe (YouTube Audio Library → "Korean", "Dramatic", or "Emotional")

---

## Technical Specs

| Property | Value |
|----------|-------|
| Resolution | 1080 x 1920px (9:16 vertical) |
| Format | MP4 (H.264 codec) |
| Duration | 15 seconds |
| Frame Rate | 30 FPS (TikTok standard) |
| Bitrate | 2000-3000 kbps |
| File Size | 3-5 MB per video |
| Audio | Optional (or silence) |

**TikTok Upload Requirements:**
- Min: 50px × 50px, Max: 4096px × 4096px
- Aspect ratio: 9:16 (portrait), 16:9 (landscape), or 1:1 (square)
- Format: MP4, MOV, AVI, MPEG, FLV, WMV
- Max file size: 287.6MB
- Max duration: 15 minutes

✓ Our 1080x1920, 15s MP4 meets all requirements.

---

## Upload to TikTok Ads Manager

1. Go to [TikTok Ads Manager](https://ads.tiktok.com/)
2. **Create Campaign** → Select **Traffic, Conversions, or Awareness** goal
3. **Ad Group** → Set budget, targeting (Western viewers, 18-45, interested in drama/streaming)
4. **Creative** → Upload your MP4 video
5. **Copy** → CTA: "Learn More" or "Visit Website"
6. **Landing Page**: https://dramamatch.app
7. **Preview** → Looks good? Launch!

**Recommended Budget:**
- Start: $200-500/week
- Best time: Weekends (higher engagement)
- Target: US, UK, CA, AU

---

## FFmpeg Command Reference (Advanced)

Generate videos from command line:

```bash
# Video 1: Cinematic with text overlays
ffmpeg -f lavfi -i color=c=#1a1a2e:s=1080x1920:d=3 \
  -vf "drawtext=text='Hooked on K-Drama?':fontfile=/path/to/font.ttf:fontsize=80:fontcolor=white:x=(w-text_w)/2:y=(h-text_h)/2" \
  -c:v libx264 -preset fast -b:v 2000k -pix_fmt yuv420p -t 3 scene1.mp4

# (Repeat for each scene, then concatenate with ffmpeg concat demuxer)
```

For complex multi-scene generation with proper concatenation and audio, use the included Node.js script:

```bash
node scripts/generate-tiktok-ads.js
```

---

## Troubleshooting

### "ffmpeg: command not found"
→ Install FFmpeg (see "Installation" section above)

### Video won't play
→ Ensure MP4 codec is H.264 and resolution is exactly 1080x1920

### Text is unreadable on TikTok
→ Increase font size (use 70-90pt for mobile), check contrast (white on dark = good)

### File is too large
→ Reduce bitrate to 1500k: `-b:v 1500k`

### Need custom music?
→ Use royalty-free libraries:
- YouTube Audio Library (free with account)
- Epidemic Sound ($10/mo)
- Artlist ($130/year)

---

## Files in This Directory

- `scripts/generate-tiktok-ads.js` — Node.js script to generate videos (requires FFmpeg on system)
- `public/videos/` — Output location (create if needed)
- `GENERATE_TIKTOK_ADS.md` — This guide

---

## Support

Questions about video generation?

1. **For technical help:** Check FFmpeg docs https://ffmpeg.org/documentation.html
2. **For TikTok ad questions:** Use TikTok Ads support
3. **For DramaMatch integration:** Contact support@dramamatch.app

Good luck! 🎬🎭
