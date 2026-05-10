/**
 * Affiliate Link Configuration
 *
 * Centralized configuration for all streaming platform affiliate/referral links.
 * When a user clicks "Watch Now", we build URLs using these configs.
 *
 * Revenue model:
 * - Amazon Associates: Commission per signup/purchase (~$3-8 per trial signup)
 * - Viki (Rakuten): CPA/CPS through Impact affiliate network
 * - Kocowa: Referral commissions
 * - Netflix: No direct affiliate program — use JustWatch referral or search links
 * - Disney+: Through affiliate networks (Impact, CJ)
 * - Hulu: Through CJ Affiliate or Impact
 * - Apple TV+: Through Apple Performance Partners
 * - Paramount+: Through Commission Junction / Impact
 *
 * To update: Replace the tag/ref values with your actual affiliate IDs
 * after signing up for each program.
 */
module.exports = {
  // Amazon Prime Video — Amazon Associates Program
  // Sign up: https://affiliate-program.amazon.com/
  amazon_prime: {
    name: 'Prime Video',
    shortName: 'Prime',
    color: '#00A8E1',
    bgColor: 'rgba(0, 168, 225, 0.12)',
    icon: '▶',
    buildUrl: (title, locale) => {
      // Locale-aware Amazon domains and affiliate tags
      const domain = locale === 'ko' ? 'amazon.co.kr'
                   : locale === 'ja' ? 'amazon.co.jp'
                   : 'amazon.com'; // default US (covers en, zh, and all other locales)
      // Japan uses a separate Associates tag (dramamatch20-22); all others use dramamatch20-20
      const defaultTag = locale === 'ja' ? 'dramamatch20-22' : 'dramamatch20-20';
      const tag = process.env.AMAZON_AFFILIATE_TAG || defaultTag;
      return `https://www.${domain}/s?k=${encodeURIComponent(title)}&i=instant-video&tag=${tag}`;
    },
    priority: 1 // Highest revenue potential
  },

  // Netflix — No direct affiliate, use search links with tracking
  netflix: {
    name: 'Netflix',
    shortName: 'Netflix',
    color: '#E50914',
    bgColor: 'rgba(229, 9, 20, 0.12)',
    icon: '▶',
    buildUrl: (title) => {
      return `https://www.netflix.com/search?q=${encodeURIComponent(title)}`;
    },
    priority: 2
  },

  // Viki (Rakuten Viki) — Affiliate through Impact
  // Sign up: https://app.impact.com/ (search Rakuten Viki)
  viki: {
    name: 'Viki',
    shortName: 'Viki',
    color: '#1A9FD9',
    bgColor: 'rgba(26, 159, 217, 0.12)',
    icon: '▶',
    buildUrl: (title) => {
      const ref = process.env.VIKI_AFFILIATE_REF || 'dramamatch';
      return `https://www.viki.com/search?q=${encodeURIComponent(title)}&utm_source=${ref}&utm_medium=affiliate`;
    },
    priority: 3
  },

  // Kocowa — Korean content streaming
  // Sign up for referral program at kocowa.com
  kocowa: {
    name: 'Kocowa',
    shortName: 'Kocowa',
    color: '#FF6B35',
    bgColor: 'rgba(255, 107, 53, 0.12)',
    icon: '▶',
    buildUrl: (title) => {
      const ref = process.env.KOCOWA_AFFILIATE_REF || 'dramamatch';
      return `https://www.kocowa.com/en_us/search?keyword=${encodeURIComponent(title)}&utm_source=${ref}&utm_medium=affiliate`;
    },
    priority: 4
  },

  // Disney+ — Through affiliate networks (key: disney_plus to match show data)
  // Sign up: Impact.com or CJ Affiliate
  // NOTE: Disney+ retired the /search/{Title} path format (2025). Using query-param
  // format /search?q={title} which is the standard working format as of Apr 2026.
  disney_plus: {
    name: 'Disney+',
    shortName: 'Disney+',
    color: '#0063E5',
    bgColor: 'rgba(0, 99, 229, 0.12)',
    icon: '▶',
    buildUrl: (title) => {
      return `https://www.disneyplus.com/search?q=${encodeURIComponent(title)}`;
    },
    priority: 5
  },

  // Hulu — Through CJ Affiliate or Impact
  // Sign up: https://www.cj.com or https://app.impact.com (search Hulu)
  hulu: {
    name: 'Hulu',
    shortName: 'Hulu',
    color: '#1CE783',
    bgColor: 'rgba(28, 231, 131, 0.12)',
    icon: '▶',
    buildUrl: (title) => {
      const ref = process.env.HULU_AFFILIATE_REF || 'dramamatch';
      return `https://www.hulu.com/search?q=${encodeURIComponent(title)}&utm_source=${ref}&utm_medium=affiliate`;
    },
    priority: 6
  },

  // Apple TV+ — Through Apple Performance Partners
  // Sign up: https://affiliate.itunes.apple.com/resources/documentation/apple-services-performance-partners/
  apple_tv: {
    name: 'Apple TV+',
    shortName: 'Apple TV+',
    color: '#A2AAAD',
    bgColor: 'rgba(162, 170, 173, 0.12)',
    icon: '▶',
    buildUrl: (title) => {
      const at = process.env.APPLE_AFFILIATE_TAG || '';
      const base = `https://tv.apple.com/search?term=${encodeURIComponent(title)}`;
      return at ? `${base}&at=${at}` : base;
    },
    priority: 7
  },

  // iQiyi — Chinese streaming giant, international version at iQiyi.com
  // No formal affiliate program yet; using direct search links
  iqiyi: {
    name: 'iQiyi',
    shortName: 'iQiyi',
    color: '#00BE06',
    bgColor: 'rgba(0, 190, 6, 0.12)',
    icon: '▶',
    buildUrl: (title) => {
      return `https://www.iq.com/search?query=${encodeURIComponent(title)}`;
    },
    priority: 3
  },

  // Paramount+ — Through Commission Junction or Impact
  // Sign up: https://www.cj.com (search Paramount+)
  paramount: {
    name: 'Paramount+',
    shortName: 'Paramount+',
    color: '#0064FF',
    bgColor: 'rgba(0, 100, 255, 0.12)',
    icon: '▶',
    buildUrl: (title) => {
      const ref = process.env.PARAMOUNT_AFFILIATE_REF || 'dramamatch';
      return `https://www.paramountplus.com/search/${encodeURIComponent(title)}/?utm_source=${ref}&utm_medium=affiliate`;
    },
    priority: 8
  },

  // Crunchyroll — Primary anime streaming platform
  // Sign up: https://www.crunchyroll.com/affiliate or through Impact
  crunchyroll: {
    name: 'Crunchyroll',
    shortName: 'Crunchyroll',
    color: '#F47521',
    bgColor: 'rgba(244, 117, 33, 0.12)',
    icon: '▶',
    buildUrl: (title) => {
      const ref = process.env.CRUNCHYROLL_AFFILIATE_REF || 'dramamatch';
      return `https://www.crunchyroll.com/search?q=${encodeURIComponent(title)}&utm_source=${ref}&utm_medium=affiliate`;
    },
    priority: 3 // High priority for anime content
  },

  // Max (formerly HBO Max) — WarnerMedia streaming
  // No direct affiliate program — use search links for now
  max: {
    name: 'Max',
    shortName: 'Max',
    color: '#002BE7',
    bgColor: 'rgba(0, 43, 231, 0.12)',
    icon: '▶',
    buildUrl: (title) => {
      return `https://www.max.com/search?q=${encodeURIComponent(title)}`;
    },
    priority: 2
  },

  // Peacock — NBCUniversal streaming platform
  // No direct affiliate program — use search links for now
  peacock: {
    name: 'Peacock',
    shortName: 'Peacock',
    color: '#0F69AF',
    bgColor: 'rgba(15, 105, 175, 0.12)',
    icon: '▶',
    buildUrl: (title) => {
      return `https://www.peacocktv.com/search?q=${encodeURIComponent(title)}`;
    },
    priority: 5
  },

  // WeTV — Tencent Video international platform (C-dramas, K-dramas)
  // No formal affiliate program
  wetv: {
    name: 'WeTV',
    shortName: 'WeTV',
    color: '#1FA14C',
    bgColor: 'rgba(31, 161, 76, 0.12)',
    icon: '▶',
    buildUrl: (title) => {
      return `https://wetv.vip/search?keyword=${encodeURIComponent(title)}`;
    },
    priority: 4
  }
};
