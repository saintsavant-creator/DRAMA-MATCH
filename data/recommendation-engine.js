/**
 * DramaMatch Recommendation Engine
 *
 * Cross-cultural matching algorithm that finds K-drama and K-movie equivalents
 * for any Western show or movie based on shared DNA: genres, themes, tropes, tone,
 * character archetypes, and setting.
 *
 * Uses weighted Jaccard similarity across multiple dimensions.
 *
 * Content types:
 *   'kdrama'       - Korean TV shows (recommendation output + input)
 *   'western'      - Western TV shows (search input)
 *   'kmovie'       - Korean movies (recommendation output + input)
 *   'western-movie' - Western movies (search input → K-drama + K-movie results)
 *   'cdrama'       - Chinese dramas (recommendation output + input)
 *   'jdrama'       - Japanese TV shows (recommendation output + input)
 *   'jmovie'       - Japanese films (recommendation output + input)
 */

const expansionHTrending = require('./catalog-expansion-h-trending-2026');
const expansionHGapFills = require('./catalog-expansion-h-gap-fills-2026');
const catalogBatchApr2026 = require('./catalog-batch-apr-2026');
const kdramasTrending2026 = require('./kdramas-trending-batch-2026');
const kdramasBatchJ2024 = require('./kdramas-batch-j-2024-2026');
const kdramas = [
  ...require('./kdramas'),
  ...require('./kdramas-batch-f-2026'),
  ...require('./kdramas-batch-g-2026'),
  ...require('./kdramas-comedies-2026'),
  ...require('./kdramas-comedies-batch2-2026'),
  ...require('./kdramas-seo-batch-2026'),
  ...expansionHTrending.newKdramas,
  ...catalogBatchApr2026.newKdramas,
  ...kdramasTrending2026,
  ...kdramasBatchJ2024,
];
const westernShows = [
  ...require('./western-shows'),
  ...require('./western-batch-f-2026-shows'),
  ...require('./western-batch-6-2026-shows'),
  ...require('./western-batch-8-2026-shows'),
  ...require('./western-batch-high-volume-2026-shows'),
  ...require('./western-seo-batch-2026'),
  ...expansionHTrending.newWesternShows,
  ...expansionHGapFills.newWesternShows,
  ...catalogBatchApr2026.newWesternShows,
  ...require('./western-trending-batch-2026'),
];
const koreanMovies = [
  ...require('./korean-movies'),
  ...require('./kmovies-comedies-2026'),
  ...require('./kmovies-batch-g-2026'),
];
const westernMovies = [
  ...require('./western-movies'),
  ...require('./western-batch-f-2026-movies'),
  ...require('./western-batch-6-2026-movies'),
  ...require('./western-batch-8-2026-movies'),
  ...require('./western-batch-comedy-2026'),
  ...require('./western-batch-high-volume-2026-movies'),
];
const cdramas = [
  ...require('./cdramas'),
  ...require('./cdramas-batch-f-2026'),
  ...require('./cdramas-batch-g-2026'),
  ...require('./cdramas-comedies-2026'),
  ...require('./cdramas-seo-batch-2026'),
  ...expansionHTrending.newCdramas,
  ...catalogBatchApr2026.newCdramas,
  ...require('./cdramas-batch-h-2026'),
  ...require('./cdramas-batch-i-2026'),
];
const animeJdramaBatchE = require('./anime-jdrama-batch-e-2026');
const jdramas = [
  ...require('./jdramas'),
  ...require('./jdramas-comedies-2026'),
  ...require('./jdramas-batch-gap-2026'),
  ...require('./jdramas-batch-d-2026'),
  ...require('./jdramas-batch-aa-mixed'),
  ...require('./jdramas-batch-e-2026'),
  ...animeJdramaBatchE.newJdramas,
  ...require('./jmovies-batch-3-2026'),
  ...require('./jmovies-seo-batch-2026'),
];
const animeData = [
  ...require('./anime'),
  ...require('./anime-batch-2026-b'),
  ...require('./anime-batch-d-2026'),
  ...require('./anime-batch-aa-mixed'),
  ...require('./anime-batch-e-2026'),
  ...animeJdramaBatchE.newAnime,
  ...require('./anime-seo-batch-2026'),
  ...expansionHTrending.newAnime,
  ...expansionHGapFills.newAnime,
];
const koreanNativeTitles = require('./korean-native-titles');
const japaneseNativeTitles = require('./japanese-native-titles');
const chineseNativeTitlesModule = require('./chinese-native-titles');
const chineseNativeTitles = (function() {
  const map = {};
  const trad = chineseNativeTitlesModule.traditionalVariants || {};
  for (const [id, title] of Object.entries(chineseNativeTitlesModule)) {
    if (id === 'traditionalVariants') continue;
    map[id] = { simplified: title, traditional: trad[id] || null };
  }
  for (const [id, title] of Object.entries(trad)) {
    if (!map[id]) map[id] = { simplified: null, traditional: title };
  }
  return map;
})();

// All content indexed by ID for fast lookup
const allShows = {};
const kdramaList = [];
const westernList = [];
const kmovieList = [];
const westernMovieList = [];
const cdramaList = [];
const jdramaList = [];
const jmovieList = [];
const animeList = [];
const animeMovieList = [];
const allShowsList = [];

// Actor index: normalized name -> array of show IDs
const actorIndex = {};

// Build indices
kdramas.forEach(show => {
  const entry = { ...show, type: 'kdrama' };
  allShows[show.id] = entry;
  kdramaList.push(entry);
  allShowsList.push(entry);

  // Index actors
  (show.actors || []).forEach(actor => {
    const key = actor.name.toLowerCase().trim();
    if (!actorIndex[key]) actorIndex[key] = [];
    actorIndex[key].push({ showId: show.id, role: actor.role, isLead: actor.isLead });
  });
});

// Build indices — Western TV shows
westernShows.forEach(show => {
  const entry = { ...show, type: 'western' };
  allShows[show.id] = entry;
  westernList.push(entry);
  allShowsList.push(entry);
});

// Build indices — Korean movies
koreanMovies.forEach(movie => {
  const entry = { ...movie, type: 'kmovie' };
  allShows[movie.id] = entry;
  kmovieList.push(entry);
  allShowsList.push(entry);

  // Index K-movie actors (same structure as K-dramas)
  (movie.actors || []).forEach(actor => {
    const key = actor.name.toLowerCase().trim();
    if (!actorIndex[key]) actorIndex[key] = [];
    actorIndex[key].push({ showId: movie.id, role: actor.role, isLead: actor.isLead });
  });
});

// Build indices — Western movies
westernMovies.forEach(movie => {
  const entry = { ...movie, type: 'western-movie' };
  allShows[movie.id] = entry;
  westernMovieList.push(entry);
  allShowsList.push(entry);
});

// Build indices — C-dramas (Chinese dramas)
cdramas.forEach(show => {
  const entry = { ...show, type: 'cdrama' };
  allShows[show.id] = entry;
  cdramaList.push(entry);
  allShowsList.push(entry);

  // Index C-drama actors (same pattern as K-dramas)
  (show.actors || []).forEach(actor => {
    const key = actor.name.toLowerCase().trim();
    if (!actorIndex[key]) actorIndex[key] = [];
    actorIndex[key].push({ showId: show.id, role: actor.role, isLead: actor.isLead });
  });
});

// Build indices — J-dramas and J-movies (Japanese content)
jdramas.forEach(show => {
  // Items with 'runtime' are movies; items with 'episodes' are series
  const type = (show.runtime && !show.episodes) ? 'jmovie' : 'jdrama';
  const entry = { ...show, type };
  allShows[show.id] = entry;
  if (type === 'jmovie') {
    jmovieList.push(entry);
  } else {
    jdramaList.push(entry);
  }
  allShowsList.push(entry);

  // Index J-drama/J-movie actors
  (show.actors || []).forEach(actor => {
    const key = actor.name.toLowerCase().trim();
    if (!actorIndex[key]) actorIndex[key] = [];
    actorIndex[key].push({ showId: show.id, role: actor.role, isLead: actor.isLead });
  });
});

// Build indices — Anime and Anime Movies
animeData.forEach(show => {
  // Items with 'runtime' and no 'episodes' are movies; everything else is series
  const type = (show.runtime && !show.episodes) ? 'anime-movie' : 'anime';
  const entry = { ...show, type };
  allShows[show.id] = entry;
  if (type === 'anime-movie') {
    animeMovieList.push(entry);
  } else {
    animeList.push(entry);
  }
  allShowsList.push(entry);

  // Index anime actors/voice actors
  (show.actors || []).forEach(actor => {
    const key = actor.name.toLowerCase().trim();
    if (!actorIndex[key]) actorIndex[key] = [];
    actorIndex[key].push({ showId: show.id, role: actor.role, isLead: actor.isLead });
  });
});

// Detect Japanese script (Hiragana + Katakana + CJK Unified Ideographs)
const JP_SCRIPT_RE = /[\u3040-\u309F\u30A0-\u30FF\u4E00-\u9FFF]/;

// Build search index (lowercase title fragments + Korean/Japanese/Chinese native titles)
const searchIndex = allShowsList.map(show => {
  // nativeTitle: the primary script title for the show's origin language.
  // Priority: embedded catalog field → Korean Hangul aliases.
  const nativeTitle = show.nativeTitle || koreanNativeTitles[show.id] || null;

  // japaneseTitle: used exclusively for Japanese-script input matching.
  const japaneseTitle = japaneseNativeTitles[show.id] ||
    (show.nativeTitle && JP_SCRIPT_RE.test(show.nativeTitle) ? show.nativeTitle : null);

  // Chinese title: from our chinese-native-titles map (covers C-dramas, K-dramas, Western)
  // For C-dramas, the catalog nativeTitle IS the simplified Chinese title
  const isChinese = show.type === 'cdrama';
  const chEntry = chineseNativeTitles[show.id];
  const chineseTitle = (chEntry && chEntry.simplified) || (isChinese ? nativeTitle : null);
  const chineseTradTitle = chEntry ? chEntry.traditional : null;

  // Build comprehensive search terms
  let searchTerms = show.title.toLowerCase();
  if (nativeTitle) searchTerms = nativeTitle + ' ' + searchTerms;
  if (japaneseTitle && japaneseTitle !== nativeTitle) searchTerms = japaneseTitle + ' ' + searchTerms;
  if (chineseTitle && chineseTitle !== nativeTitle) searchTerms = chineseTitle + ' ' + searchTerms;
  if (chineseTradTitle) searchTerms = chineseTradTitle + ' ' + searchTerms;

  // Build Chinese-specific search terms (both Simplified + Traditional)
  const chineseParts = [];
  if (chineseTitle) chineseParts.push(chineseTitle);
  if (chineseTradTitle && chineseTradTitle !== chineseTitle) chineseParts.push(chineseTradTitle);

  return {
    id: show.id,
    title: show.title,
    type: show.type,
    year: show.year,
    nativeTitle,
    japaneseTitle,
    chineseTitle,
    chineseTradTitle,
    searchTerms,
    // Korean Hangul search terms (for dedicated Korean/Hangul input searches)
    nativeTerms: nativeTitle || null,
    // Chinese Hanzi search terms (Simplified + Traditional, for dedicated Chinese input)
    chineseTerms: chineseParts.length > 0 ? chineseParts.join(' ') : null,
  };
});

// Build actor search index for autocomplete
// Resolves canonical name from show data and creates URL-friendly slugs
const actorSearchList = Object.entries(actorIndex).map(([key, appearances]) => {
  // Find canonical (properly-cased) name from source data
  let canonicalName = key;
  const allKorean = [...kdramaList, ...kmovieList, ...cdramaList, ...jdramaList, ...jmovieList, ...animeList, ...animeMovieList];
  for (const show of allKorean) {
    const found = (show.actors || []).find(a => a.name.toLowerCase().trim() === key);
    if (found) { canonicalName = found.name; break; }
  }
  const slug = canonicalName.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
  return { key, name: canonicalName, slug, showCount: appearances.length };
});

/**
 * Jaccard similarity between two arrays
 */
function jaccardSimilarity(a, b) {
  if (!a || !b || a.length === 0 || b.length === 0) return 0;
  const setA = new Set(a);
  const setB = new Set(b);
  const intersection = new Set([...setA].filter(x => setB.has(x)));
  const union = new Set([...setA, ...setB]);
  return intersection.size / union.size;
}

/**
 * Get overlapping items between two arrays
 */
function getOverlap(a, b) {
  if (!a || !b) return [];
  const setB = new Set(b);
  return a.filter(x => setB.has(x));
}

/**
 * Calculate match score between two shows
 * Returns { score, breakdown, reasoning }
 */
function calculateMatch(sourceShow, targetShow) {
  const weights = {
    genres: 0.20,
    themes: 0.25,
    tropes: 0.25,
    tone: 0.15,
    characterTypes: 0.10,
    setting: 0.05
  };

  const breakdown = {};
  let totalScore = 0;

  for (const [dimension, weight] of Object.entries(weights)) {
    const similarity = jaccardSimilarity(
      sourceShow[dimension] || [],
      targetShow[dimension] || []
    );
    breakdown[dimension] = {
      score: similarity,
      weight,
      weighted: similarity * weight,
      overlap: getOverlap(sourceShow[dimension] || [], targetShow[dimension] || [])
    };
    totalScore += similarity * weight;
  }

  // Generate human-readable reasoning
  const reasoning = generateReasoning(sourceShow, targetShow, breakdown);

  return {
    score: Math.round(totalScore * 100),
    breakdown,
    reasoning
  };
}

/**
 * Trope → evocative narrative description
 * Used to construct "If you loved X's [narrative], you'll find the same in Y"
 */
const TROPE_NARRATIVES = {
  'enemies-to-lovers': 'two people who despise each other helplessly, inevitably falling in love',
  'slow-burn': 'slow build where every stolen glance and almost-moment pays off',
  'forbidden-love': 'love story the world is determined to crush — which only makes it burn hotter',
  'fated-lovers': 'two souls pulled together by something bigger than either of them',
  'star-crossed-lovers': 'love story the universe keeps trying to destroy',
  'will-they-wont-they': 'delicious tension of two people circling each other for far too long',
  'fake-dating': 'fake relationship that becomes dangerously real',
  'love-triangle': 'love triangle where every choice breaks someone\'s heart',
  'boss-employee-romance': 'power dynamic that makes the romance both complicated and electric',
  'forced-proximity': 'two people stuck together long enough for every wall to come down',
  'fish-out-of-water': 'fish completely out of water — comedy and heart in equal measure',
  'found-family': 'ragtag group of people who slowly become each other\'s whole world',
  'anti-hero': 'protagonist you shouldn\'t root for but absolutely do',
  'moral-descent': 'watching a person make choices that pull them further into darkness — and being unable to look away',
  'cat-and-mouse': 'relentless game of predator and prey where the tables keep turning',
  'twist-ending': 'rug-pull ending that reframes everything you thought you knew',
  'revenge': 'revenge arc so carefully constructed it becomes the whole point',
  'con-artist-hero': 'loveable con artist running circles around everyone who underestimates them',
  'fake-psychic': 'fake psychic bluffing their way through crimes while somehow actually solving them',
  'detective-duo': 'mismatched detective duo whose chemistry carries the entire show',
  'serial-killer-investigation': 'investigators crawling inside the mind of a monster',
  'time-travel': 'time travel used to explore what we\'d change — and what we can\'t',
  'hidden-identity': 'hidden identity that creates impossible, irresistible dramatic tension',
  'amnesia': 'amnesia as a device to rediscover love from scratch',
  'class-warfare': 'class collision that turns quietly, devastatingly violent',
  'workplace-rivalry': 'workplace rivalry that becomes something far more complicated',
  'underdog': 'underdog story you\'re desperately rooting for',
  'heist': 'high-stakes heist where every plan immediately goes sideways',
  'unreliable-narrator': 'narrator you can\'t quite trust — and love for exactly that reason',
  'dark-secrets': 'secrets buried deep enough to destroy everyone when they surface',
  'transformation': 'character transformation so complete you barely recognize who they started as',
  'corporate-betrayal': 'corporate backstabbing where loyalty means nothing and power means everything',
  'political-intrigue': 'political maneuvering where every alliance is temporary',
  'revenge-plot': 'long-game revenge that dismantles an empire piece by piece',
  'secret-identity': 'secret identity maintaining a double life that keeps threatening to collapse',
  'cold-male-lead-warms-up': 'seemingly cold lead slowly cracked open by someone who refuses to give up',
  'morally-grey-everyone': 'everyone operating in shades of grey — no clean heroes, no simple villains',
  'ensemble-cast': 'ensemble where every character earns their screen time',
  'second-chance-romance': 'second-chance romance carrying the weight of everything they couldn\'t say before',
  'reincarnation': 'love story that refuses to end, even across lifetimes',
  'campus-romance': 'campus romance that manages to feel both specific and universal',
  'accidental-cohabitation': 'accidental cohabitation turning strangers into something neither planned for',
  'contract-relationship': 'contract relationship with feelings neither party contracted for',
};

/**
 * Theme → emotional stakes framing
 * Used to construct "Both are built around [stakes]"
 */
const THEME_STAKES = {
  'revenge': 'a revenge plot that\'s really about grief, identity, and what getting even actually costs',
  'betrayal': 'betrayal from the people closest to them — which always hits the hardest',
  'corporate-betrayal': 'corporate loyalty as a myth, and what happens when someone finally stops believing it',
  'sacrifice': 'characters making devastating sacrifices for people they love — and the aftermath',
  'forbidden-love': 'love that crosses a line society drew and the price they pay for it',
  'power-struggle': 'a power struggle where absolutely no one\'s hands stay clean',
  'redemption': 'a redemption arc that actually earns it through real consequence',
  'moral-descent': 'a credible, painful slide from good intentions to unforgivable choices',
  'identity': 'questions of who you really are under the person you\'ve been told to be',
  'family': 'the complicated, consuming love and damage that only family can deliver',
  'corruption': 'systemic corruption grinding down everyone who tries to fight it',
  'grief': 'grief handled honestly enough to make you feel it',
  'loyalty': 'loyalty tested until it breaks — or proves it won\'t',
  'justice': 'the pursuit of justice in a system that was never built for it',
  'class-divide': 'class divide that poisons every relationship it touches',
  'obsession': 'an obsession that consumes a character completely and thrillingly',
  'healing': 'the slow, non-linear work of healing — done with real tenderness',
  'friendship': 'a friendship that becomes the emotional anchor of everything else',
  'found-family': 'found family that ends up messier and realer than the biological kind',
  'power': 'the intoxication of power and what it costs to keep it',
  'deception': 'a web of deception where everyone is hiding something and no one is safe',
  'survival': 'survival that strips characters down to what they\'re actually made of',
  'ambition': 'ambition that starts as a virtue and reveals itself as something else entirely',
  'trauma': 'trauma that shapes characters\' every choice without reducing them to their wounds',
  'fate': 'fate as both comfort and cruelty — the sense that this was always coming',
  'war': 'war that refuses to make heroism look clean or uncomplicated',
  'sacrifice-and-loss': 'the specific ache of giving something up you can never get back',
  'jealousy': 'jealousy as character engine — the thing that pushes everyone to their worst',
  'secret': 'a secret so heavy it warps every relationship it touches',
};

/**
 * Tone → pacing / viewing experience description
 */
const TONE_PACING = {
  'dark': 'a slow-burn dread that accumulates until the weight of it is unbearable',
  'psychological': 'psychologically intense — it gets under your skin and stays there',
  'comedic': 'sharp comedic timing that earns the laughs rather than demanding them',
  'lighthearted': 'light on its feet even when the stakes are real',
  'emotional': 'emotionally heavy — you\'ll need to sit with it after',
  'bittersweet': 'bittersweet in the best way: joy and heartbreak in the same breath',
  'intense': 'relentlessly intense — it doesn\'t really let you breathe',
  'heartwarming': 'genuinely warm without tipping into saccharine',
  'romantic': 'romantically charged — the tension is everywhere, even when nothing\'s happening',
  'witty': 'sharp and witty — you\'ll miss lines if you look away',
  'tense': 'tense enough to make you watch through your fingers',
  'dramatic': 'commits fully to every emotional beat — no half-measures',
  'thrilling': 'the kind of pacing that makes 60-minute episodes feel like 20',
  'suspenseful': 'the kind of suspense that makes you forget to breathe',
  'chilling': 'chilling in an understated way that lingers far longer than jump scares',
  'fun': 'pure fun — the kind you don\'t have to feel guilty about',
  'quirky': 'delightfully weird in a way that takes some getting used to and then becomes the whole appeal',
  'nostalgic': 'wrapped in a nostalgic warmth that feels earned rather than manufactured',
  'action-packed': 'kinetically paced — constantly in motion',
};

/**
 * Generate "Why you'll love this" reasoning — Thematic Vibe Matching
 *
 * Produces narrative-first reasoning grounded in specific character dynamics,
 * storytelling style, emotional stakes, and plot parallels — not surface tags.
 */
function generateReasoning(source, target, breakdown) {
  const tropeOverlap = breakdown.tropes?.overlap || [];
  const themeOverlap = breakdown.themes?.overlap || [];
  const toneOverlap = breakdown.tone?.overlap || [];
  const charOverlap = breakdown.characterTypes?.overlap || [];

  const hasAnyOverlap = tropeOverlap.length > 0 || themeOverlap.length > 0 || toneOverlap.length > 0;
  if (!hasAnyOverlap) {
    return `${target.title} scratches the same itch as ${source.title} — different world, same emotional frequency.`;
  }

  const isMood = source.type === 'mood';
  const sourceName = source.title;
  const parts = [];

  // --- Sentence 1: Trope-anchored narrative comparison ---
  if (tropeOverlap.length > 0) {
    const trope = tropeOverlap[0];
    const narrativeDesc = TROPE_NARRATIVES[trope];
    if (isMood) {
      // Mood-based: frame as a promise, not a comparison
      if (narrativeDesc) {
        parts.push(`Delivers ${narrativeDesc}`);
      } else {
        parts.push(`Built around ${formatTag(trope).toLowerCase()}`);
      }
    } else {
      if (narrativeDesc) {
        parts.push(`If you loved ${sourceName}'s ${narrativeDesc}, ${target.title} delivers exactly that`);
      } else {
        // Fallback with second trope if available
        const fallbackTrope = tropeOverlap[1];
        const fallbackDesc = fallbackTrope ? TROPE_NARRATIVES[fallbackTrope] : null;
        if (fallbackDesc) {
          parts.push(`Like ${sourceName}, ${target.title} is built around ${fallbackDesc}`);
        } else {
          parts.push(`Like ${sourceName}, it leans hard into **${formatTag(trope).toLowerCase()}**`);
        }
      }
    }
  }

  // --- Sentence 2: Theme / emotional stakes ---
  if (themeOverlap.length > 0) {
    const theme = themeOverlap[0];
    const stakeDesc = THEME_STAKES[theme];
    if (stakeDesc) {
      if (parts.length === 0) {
        parts.push(`Both are built around ${stakeDesc}`);
      } else {
        parts.push(`At its core, it's about ${stakeDesc}`);
      }
    } else {
      // Use up to two themes, framed as emotional territory
      const secondTheme = themeOverlap[1];
      const formatted = secondTheme
        ? `${theme.replace(/-/g, ' ')} and ${secondTheme.replace(/-/g, ' ')}`
        : theme.replace(/-/g, ' ');
      if (parts.length === 0) {
        parts.push(`Both navigate the same emotional territory: **${formatted}**`);
      } else {
        parts.push(`The emotional territory — **${formatted}** — is the same`);
      }
    }
  }

  // --- Sentence 3: Tone / pacing / viewing experience ---
  if (toneOverlap.length > 0 && parts.length < 3) {
    const tone = toneOverlap[0];
    const pacingDesc = TONE_PACING[tone];
    if (pacingDesc) {
      parts.push(`The pacing is ${pacingDesc}`);
    } else {
      // Combine up to two tones
      const secondTone = toneOverlap[1];
      const formatted = secondTone
        ? `${tone.replace(/-/g, ' ')} and ${secondTone.replace(/-/g, ' ')}`
        : tone.replace(/-/g, ' ');
      parts.push(`Same **${formatted}** energy throughout`);
    }
  }

  // --- Bonus: character archetype note (only if we still need a third point) ---
  if (charOverlap.length > 0 && parts.length < 2) {
    const char = charOverlap[0].replace(/-/g, ' ');
    parts.push(`You'll recognize the ${char} immediately`);
  }

  if (parts.length === 0) {
    return `${target.title} hits the same emotional notes as ${source.title} — worth the cultural crossing.`;
  }

  return parts.slice(0, 3).join('. ') + '.';
}

/**
 * Format tag for display (kebab-case to Title Case)
 */
function formatTag(tag) {
  return tag.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
}

/**
 * Search shows and movies by title (for autocomplete)
 * Returns all content types: western shows, K-dramas, western movies, K-movies
 * Supports Japanese script (Kanji, Hiragana, Katakana) via japaneseTitle matching
 * Supports Korean script (Hangul) via nativeTerms matching
 */
function searchShows(query, limit = 8) {
  if (!query || query.length < 1) return [];

  const q = query.toLowerCase().trim();

  // --- Script detection ---
  // Hangul (Korean): syllables + jamo + compat jamo
  const hasHangul = /[\uAC00-\uD7A3\u1100-\u11FF\u3130-\u318F]/.test(query);

  // Japanese-specific kana (Hiragana + Katakana — NOT shared with Chinese)
  const hasKana = /[\u3040-\u309F\u30A0-\u30FF]/.test(query);

  // CJK Unified Ideographs (shared by Chinese, Japanese, Korean hanja)
  const hasCJK = /[\u4E00-\u9FFF\u3400-\u4DBF\uF900-\uFAFF]/.test(query);

  // CJK Ext-B (rare characters used in some Traditional Chinese)
  const hasCJKExtB = /[\u{20000}-\u{2A6DF}]/u.test(query);

  // Determine query script type:
  // - If Hangul present → Korean
  // - If Kana present → Japanese (may also have Kanji)
  // - If only CJK characters (no Kana, no Hangul) → Chinese
  const isHangul = hasHangul;
  const isJapaneseQuery = hasKana; // kana required for definitive Japanese
  const isChineseQuery = (hasCJK || hasCJKExtB) && !hasKana && !hasHangul;

  // For CJK-only queries (no kana), search both Chinese and Japanese native titles
  // (some Kanji are identical in Chinese and Japanese)
  const isCJKAmbiguous = hasCJK && !hasKana && !hasHangul;

  // Score a term string against the query, returns 0–100
  function scoreTitle(term) {
    if (!term) return 0;
    const t = (isHangul || isChineseQuery || isJapaneseQuery) ? term : term.toLowerCase();
    const matchQ = (isHangul || isChineseQuery || isJapaneseQuery) ? query.trim() : q;
    if (t === matchQ) return 100;
    if (t.startsWith(matchQ)) return 80;
    if (t.split(/[\s:,\-()·]+/).some(word => word.startsWith(matchQ))) return 60;
    if (t.includes(matchQ)) return 40;
    // Fuzzy: all query characters appear in order within term
    let qi = 0;
    for (let i = 0; i < t.length && qi < matchQ.length; i++) {
      if (t[i] === matchQ[qi]) qi++;
    }
    if (qi === matchQ.length) return 20;
    return 0;
  }

  // Score each show/movie
  const results = searchIndex.map(show => {
    let score = 0;
    let nativeScore = 0;
    let chineseScore = 0;

    // --- Chinese query: score against Chinese titles (Simplified + Traditional) ---
    if (isChineseQuery && show.chineseTerms) {
      chineseScore = scoreTitle(show.chineseTerms);
      // Exact match bonus on specific title variant
      if (show.chineseTitle === query.trim()) chineseScore = 110;
      else if (show.chineseTradTitle === query.trim()) chineseScore = 110;
      else if (show.chineseTitle && show.chineseTitle.startsWith(query.trim())) chineseScore = Math.max(chineseScore, 95);
      else if (show.chineseTradTitle && show.chineseTradTitle.startsWith(query.trim())) chineseScore = Math.max(chineseScore, 95);
    }

    // CJK-ambiguous (no kana, no hangul): also check Japanese titles (shared Kanji)
    if (isCJKAmbiguous && show.japaneseTitle) {
      const jt = show.japaneseTitle;
      if (jt === query.trim()) nativeScore = Math.max(nativeScore, 110);
      else if (jt.startsWith(query.trim())) nativeScore = Math.max(nativeScore, 95);
      else if (jt.includes(query.trim())) nativeScore = Math.max(nativeScore, 75);
    }

    // Japanese query (has kana): score japaneseTitle directly
    if (isJapaneseQuery && show.japaneseTitle) {
      const nt = show.japaneseTitle;
      if (nt === query) nativeScore = 110;
      else if (nt.startsWith(query)) nativeScore = 95;
      else if (nt.includes(query)) nativeScore = 75;
    }

    if (isHangul) {
      // Korean input: search against native title only
      if (show.nativeTerms) {
        score = scoreTitle(show.nativeTerms);
      }
    } else if (isChineseQuery) {
      // Chinese input: also check nativeTitle for C-dramas (which IS Chinese)
      if (show.nativeTitle) {
        const ntScore = scoreTitle(show.nativeTitle);
        score = Math.max(score, ntScore);
      }
    } else {
      // Latin input: search against full searchTerms (English + all native)
      score = scoreTitle(show.searchTerms);
    }

    return { ...show, score: Math.max(score, nativeScore, chineseScore) };
  })
    .filter(s => s.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, limit);

  return results.map(r => ({
    id: r.id,
    title: r.title,
    type: r.type,
    year: r.year,
    nativeTitle: r.nativeTitle || undefined,
    japaneseTitle: r.japaneseTitle || undefined,
    chineseTitle: r.chineseTitle || undefined,
  }));
}

/**
 * Search actors by name (for autocomplete / actor discovery)
 * Returns actors whose names fuzzy-match the query, sorted by relevance
 * Only covers K-drama and K-movie actors (Western cast not in database)
 */
function searchActors(query, limit = 3) {
  if (!query || query.length < 2) return [];

  const q = query.toLowerCase().trim();

  const results = actorSearchList.map(actor => {
    const name = actor.key; // already lowercase
    let score = 0;

    if (name === q) score = 100;
    else if (name.startsWith(q)) score = 80;
    // First or last name starts with query (handles "Song" matching "Song Joong-ki")
    else if (name.split(/[\s\-]+/).some(word => word.startsWith(q))) score = 60;
    else if (name.includes(q)) score = 40;
    else if (q.length >= 3) {
      // Fuzzy: all query characters appear in order
      let qi = 0;
      for (let i = 0; i < name.length && qi < q.length; i++) {
        if (name[i] === q[qi]) qi++;
      }
      if (qi === q.length) score = 20;
    }

    return { ...actor, score };
  })
    .filter(s => s.score > 0)
    .sort((a, b) => b.score - a.score || b.showCount - a.showCount)
    .slice(0, limit);

  return results.map(r => ({
    id: r.slug,
    name: r.name,
    type: 'actor',
    showCount: r.showCount
  }));
}

/**
 * Get recommendations for a show or movie.
 *
 * Matching logic:
 *   - Western TV show  → K-dramas
 *   - Western movie    → K-dramas + K-movies (mixed Korean content)
 *   - K-drama          → similar K-dramas (excluding self)
 *   - K-movie          → K-movies + K-dramas (excluding self)
 */
function getRecommendations(showId, limit = 5, direction = 'auto') {
  const sourceShow = allShows[showId];
  if (!sourceShow) return { error: 'Show not found' };

  let candidates = [];

  const isWesternSource = sourceShow.type === 'western' || sourceShow.type === 'western-movie';
  const isAsianSource = !isWesternSource;

  // Determine effective direction
  // 'western' → always return Western candidates
  // 'asian'   → always return Asian candidates
  // 'auto'    → infer from source type (current behavior)
  const effectiveDirection = direction === 'western' ? 'western'
    : direction === 'asian' ? 'asian'
    : isWesternSource ? 'asian' : 'western';

  if (effectiveDirection === 'western') {
    // Return Western shows + movies
    const westernContent = sourceShow.type === 'kmovie' || sourceShow.type === 'jmovie' || sourceShow.type === 'anime-movie' || sourceShow.type === 'western-movie'
      ? [...westernMovieList, ...westernList]
      : [...westernList, ...westernMovieList];
    candidates = westernContent
      .filter(k => k.id !== showId)
      .map(k => buildCandidate(sourceShow, k));

  } else {
    // Return Asian content (K-dramas, C-dramas, J-dramas, Anime, K-movies, J-movies, Anime movies)
    const includeMovies = sourceShow.type === 'western-movie' || sourceShow.type === 'kmovie' || sourceShow.type === 'jmovie' || sourceShow.type === 'anime-movie';
    let asianContent;
    if (includeMovies) {
      asianContent = [...kdramaList, ...kmovieList, ...cdramaList, ...jdramaList, ...jmovieList, ...animeList, ...animeMovieList];
    } else {
      asianContent = [...kdramaList, ...cdramaList, ...jdramaList, ...animeList];
    }
    candidates = asianContent
      .filter(k => k.id !== showId)
      .map(k => buildCandidate(sourceShow, k));
  }

  const recommendations = candidates
    .sort((a, b) => b.matchScore - a.matchScore)
    .slice(0, limit);

  return {
    direction: effectiveDirection,
    source: {
      id: sourceShow.id,
      title: sourceShow.title,
      type: sourceShow.type,
      year: sourceShow.year,
      runtime: sourceShow.runtime,
      episodes: sourceShow.episodes,
      synopsis: sourceShow.synopsis,
      genres: (sourceShow.genres || []).map(formatTag),
      themes: (sourceShow.themes || []).slice(0, 4).map(formatTag),
      streaming: sourceShow.streaming || {},
      network: sourceShow.network,
      actors: sourceShow.actors || []
    },
    recommendations
  };
}

/**
 * Reverse matching: Asian drama/movie → best Western shows
 * Used for "Western Shows Like [K-Drama]" programmatic list pages.
 *
 * @param {string} showId - Asian drama ID
 * @param {number} limit  - Max results to return
 */
function getWesternRecommendations(showId, limit = 10) {
  const sourceShow = allShows[showId];
  if (!sourceShow) return { error: 'Show not found' };

  const asianTypes = ['kdrama', 'kmovie', 'cdrama', 'jdrama', 'jmovie', 'anime', 'anime-movie'];
  if (!asianTypes.includes(sourceShow.type)) {
    return { error: 'Not an Asian title' };
  }

  // Score all Western shows + movies against this Asian source
  const candidates = [...westernList, ...westernMovieList]
    .map(w => buildCandidate(sourceShow, w));

  const recommendations = candidates
    .sort((a, b) => b.matchScore - a.matchScore)
    .slice(0, limit);

  return {
    source: {
      id: sourceShow.id,
      title: sourceShow.title,
      type: sourceShow.type,
      year: sourceShow.year,
      runtime: sourceShow.runtime,
      episodes: sourceShow.episodes,
      synopsis: sourceShow.synopsis,
      genres: (sourceShow.genres || []).map(formatTag),
      themes: (sourceShow.themes || []).slice(0, 4).map(formatTag),
      tropes: (sourceShow.tropes || []).slice(0, 4),
      streaming: sourceShow.streaming || {},
      network: sourceShow.network,
      actors: sourceShow.actors || []
    },
    recommendations
  };
}

/**
 * Build a candidate recommendation object from source → target
 */
function buildCandidate(sourceShow, target) {
  const match = calculateMatch(sourceShow, target);
  return {
    show: {
      id: target.id,
      title: target.title,
      type: target.type,
      year: target.year,
      episodes: target.episodes,
      runtime: target.runtime,
      synopsis: target.synopsis,
      genres: (target.genres || []).map(formatTag),
      themes: (target.themes || []).slice(0, 4).map(formatTag),
      tropes: (target.tropes || []).slice(0, 4).map(formatTag),
      tone: (target.tone || []).map(formatTag),
      streaming: target.streaming || {},
      network: target.network,
      director: target.director,
      actors: target.actors || [],
      manhwaAdaptation: target.manhwaAdaptation || false,
      mangaAdaptation: target.mangaAdaptation || false
    },
    matchScore: match.score,
    reasoning: match.reasoning,
    breakdown: match.breakdown
  };
}

/**
 * Get show or movie details by ID
 */
function getShowDetails(showId) {
  const show = allShows[showId];
  if (!show) return null;

  return {
    id: show.id,
    title: show.title,
    type: show.type,
    year: show.year,
    episodes: show.episodes,
    runtime: show.runtime,
    synopsis: show.synopsis,
    genres: (show.genres || []).map(formatTag),
    themes: (show.themes || []).map(formatTag),
    tropes: (show.tropes || []).map(formatTag),
    tone: (show.tone || []).map(formatTag),
    setting: (show.setting || []).map(formatTag),
    characterTypes: (show.characterTypes || []).map(formatTag),
    streaming: show.streaming || {},
    network: show.network,
    director: show.director,
    actors: show.actors || [],
    manhwaAdaptation: show.manhwaAdaptation || false,
    mangaAdaptation: show.mangaAdaptation || false,
    countryOfOrigin: show.countryOfOrigin || null,
    nativeTitle: show.nativeTitle || null
  };
}

/**
 * Get featured matches for homepage display
 * Includes both TV show pairs and movie pairs
 */
function getFeaturedMatches() {
  const featuredPairs = [
    // Trending entry points — bidirectional (Western ↔ Asian)
    { source: 'shogun',         target: 'six-flying-dragons',             score: 88 }, // Historical Epic
    { source: 'bridgerton',     target: 'the-red-sleeve',                 score: 86 }, // Historical Romance
    { source: 'the-gentlemen',  target: 'vincenzo',                       score: 85 }, // Crime Comedy
    { source: 'succession',     target: 'sky-castle',                     score: 84 }, // Dark Satire
    { source: 'stranger-things',target: 'all-of-us-are-dead',             score: 83 }, // Survival Horror
    { source: 'the-last-of-us', target: 'sweet-home',                     score: 82 }, // Apocalyptic Drama
    { source: 'adolescence',    target: 'extracurricular',                 score: 81 }, // Youth Crime
    { source: 'john-wick',      target: 'a-bittersweet-life',             score: 81 }, // Action Crime (K-movie)
    { source: 'psych',          target: 'cafe-minamdang',                  score: 88 }, // Crime Comedy
    { source: 'outlander',      target: 'moon-lovers-scarlet-heart-ryeo',  score: 84 }, // Time Travel Romance
    { source: 'notting-hill',   target: 'my-sassy-girl-movie',            score: 72 }, // Romantic Comedy (K-movie)
    // Reverse direction: Asian → Western matches
    { source: 'crash-landing-on-you', target: 'lost',                        score: 83 }, // Epic Romance/Drama
    { source: 'signal',         target: 'true-detective',                   score: 79 }, // Crime Thriller
  ];

  return featuredPairs.map(pair => {
    const source = allShows[pair.source];
    const target = allShows[pair.target];
    if (!source || !target) return null;

    const match = calculateMatch(source, target);
    // Shared genres for badge display (overlap between source and target)
    const sharedGenres = (source.genres || []).filter(g => (target.genres || []).includes(g)).slice(0, 2);
    const kdramaGenres = (target.genres || []).slice(0, 3);
    return {
      western: { id: source.id, title: source.title, year: source.year, type: source.type },
      kdrama: { id: target.id, title: target.title, year: target.year, type: target.type, streaming: target.streaming || {} },
      matchScore: pair.score !== undefined ? pair.score : match.score,
      reasoning: match.reasoning,
      genres: sharedGenres.length > 0 ? sharedGenres : kdramaGenres
    };
  }).filter(Boolean);
}

/**
 * Get stats about the full catalog
 */
function getStats() {
  return {
    totalKdramas: kdramaList.length,
    totalWesternShows: westernList.length,
    totalKoreanMovies: kmovieList.length,
    totalWesternMovies: westernMovieList.length,
    totalCdramas: cdramaList.length,
    totalJdramas: jdramaList.length,
    totalJmovies: jmovieList.length,
    totalAnime: animeList.length,
    totalAnimeMovies: animeMovieList.length,
    totalShows: allShowsList.length
  };
}

/**
 * Find an actor by name (case-insensitive)
 * Returns canonical name and all their show appearances
 */
function findActor(actorName) {
  const key = actorName.toLowerCase().trim();
  const appearances = actorIndex[key];
  if (!appearances) return null;

  // Find canonical name from first show appearance
  let canonicalName = actorName;
  for (const show of kdramaList) {
    const found = (show.actors || []).find(a => a.name.toLowerCase().trim() === key);
    if (found) { canonicalName = found.name; break; }
  }

  return { name: canonicalName, appearances };
}

/**
 * Get all shows for an actor, optionally ranked by match score against a source show
 * Returns { actor: { name }, shows: [{ show, role, isLead, matchScore }] }
 */
function getActorShowsWithMatches(actorName, sourceShowId) {
  const actor = findActor(actorName);
  if (!actor) return null;

  const sourceShow = sourceShowId ? allShows[sourceShowId] : null;

  const shows = actor.appearances.map(({ showId, role, isLead }) => {
    const show = allShows[showId];
    if (!show) return null;

    let matchScore = null;
    let reasoning = null;
    let breakdown = null;

    if (sourceShow && sourceShow.id !== showId) {
      const match = calculateMatch(sourceShow, show);
      matchScore = match.score;
      reasoning = match.reasoning;
      breakdown = match.breakdown;
    }

    return {
      show: {
        id: show.id,
        title: show.title,
        year: show.year,
        episodes: show.episodes,
        synopsis: show.synopsis,
        genres: (show.genres || []).map(formatTag),
        themes: (show.themes || []).slice(0, 4).map(formatTag),
        tropes: (show.tropes || []).slice(0, 4).map(formatTag),
        tone: (show.tone || []).map(formatTag),
        streaming: show.streaming || {},
        network: show.network,
        actors: show.actors || []
      },
      role,
      isLead,
      matchScore,
      reasoning,
      breakdown
    };
  }).filter(Boolean);

  // Sort: if source provided, sort by matchScore desc; otherwise leads first, then by year desc
  if (sourceShow) {
    shows.sort((a, b) => (b.matchScore || 0) - (a.matchScore || 0));
  } else {
    shows.sort((a, b) => {
      if (a.isLead !== b.isLead) return a.isLead ? -1 : 1;
      return (b.show.year || 0) - (a.show.year || 0);
    });
  }

  return {
    actor: { name: actor.name },
    source: sourceShow ? { id: sourceShow.id, title: sourceShow.title, type: sourceShow.type } : null,
    shows
  };
}

// ============================================
// MOOD-BASED DISCOVERY
// ============================================

const MOOD_CATALOG = [
  {
    id: 'cry-it-out',
    label: 'Need a Good Cry',
    emoji: '😭',
    desc: 'Emotional gut-punches',
    tone: ['emotional', 'heartwarming', 'bittersweet', 'dramatic'],
    genres: ['romance', 'melodrama', 'drama', 'family'],
    themes: ['sacrifice', 'loss', 'grief', 'forbidden-love', 'tragedy'],
    tropes: ['bittersweet-ending', 'tragic-ending', 'self-sacrifice', 'star-crossed-lovers']
  },
  {
    id: 'feel-good',
    label: 'Make Me Happy',
    emoji: '☀️',
    desc: 'Warm & uplifting vibes',
    tone: ['heartwarming', 'comedic', 'lighthearted', 'fun'],
    genres: ['comedy', 'romance', 'slice-of-life'],
    themes: ['friendship', 'family', 'healing', 'community'],
    tropes: ['found-family', 'slow-burn', 'will-they-wont-they', 'underdog']
  },
  {
    id: 'edge-of-seat',
    label: 'Edge of My Seat',
    emoji: '😱',
    desc: 'Suspense & thrills',
    tone: ['tense', 'dark', 'intense', 'psychological'],
    genres: ['thriller', 'mystery', 'crime', 'action'],
    themes: ['revenge', 'justice', 'deception', 'cat-and-mouse'],
    tropes: ['cat-and-mouse', 'twist-ending', 'serial-killer-investigation', 'anti-hero']
  },
  {
    id: 'laugh-out-loud',
    label: 'Make Me Laugh',
    emoji: '😂',
    desc: 'Pure comedic chaos',
    tone: ['comedic', 'witty', 'fun', 'lighthearted'],
    genres: ['comedy', 'rom-com', 'slice-of-life'],
    themes: ['workplace-dynamics', 'friendship', 'identity'],
    tropes: ['comedy-of-errors', 'fish-out-of-water', 'mistaken-identity', 'fake-relationship']
  },
  {
    id: 'epic-romance',
    label: 'Epic Romance',
    emoji: '💘',
    desc: 'Sweeping love stories',
    tone: ['romantic', 'dramatic', 'emotional'],
    genres: ['romance', 'drama', 'historical'],
    themes: ['forbidden-love', 'fate', 'sacrifice', 'class-divide'],
    tropes: ['enemies-to-lovers', 'slow-burn', 'fated-lovers', 'star-crossed-lovers']
  },
  {
    id: 'dark-twisted',
    label: 'Dark & Twisted',
    emoji: '🖤',
    desc: 'Morally complex & chilling',
    tone: ['dark', 'psychological', 'chilling', 'disturbing'],
    genres: ['thriller', 'crime', 'horror', 'mystery'],
    themes: ['moral-descent', 'obsession', 'evil', 'revenge', 'identity'],
    tropes: ['anti-hero', 'moral-descent', 'unreliable-narrator', 'dark-secrets']
  }
];

/**
 * Get all available moods for the mood discovery UI
 */
function getMoods() {
  return MOOD_CATALOG.map(m => ({
    id: m.id,
    label: m.label,
    emoji: m.emoji,
    desc: m.desc
  }));
}

/**
 * Get K-drama recommendations for a given mood
 * Scores K-dramas by their overlap with the mood's metadata profile
 */
function getMoodRecommendations(moodId, limit = 5) {
  const mood = MOOD_CATALOG.find(m => m.id === moodId);
  if (!mood) return { error: 'Mood not found' };

  // Build a virtual "show" profile from mood dimensions
  const moodProfile = {
    id: mood.id,
    title: mood.label,
    type: 'mood',
    genres: mood.genres,
    themes: mood.themes,
    tropes: mood.tropes,
    tone: mood.tone,
    setting: [],
    characterTypes: []
  };

  // Score K-dramas against the mood profile
  const candidates = kdramaList.map(kdrama => buildCandidate(moodProfile, kdrama));

  const recommendations = candidates
    .sort((a, b) => b.matchScore - a.matchScore)
    .slice(0, limit);

  return {
    source: {
      id: mood.id,
      type: 'mood',
      title: mood.label,
      emoji: mood.emoji,
      description: mood.desc
    },
    recommendations
  };
}

/**
 * Get related Western shows/movies for a given source show (for "Explore More" sections)
 * Used to cross-link match pages together
 */
function getRelatedWesternShows(showId, limit) {
  const sourceShow = allShows[showId];
  if (!sourceShow) return [];

  // Pick candidates from same type category
  let candidates = [];
  if (sourceShow.type === 'western') {
    candidates = westernList.filter(s => s.id !== showId);
  } else if (sourceShow.type === 'western-movie') {
    candidates = westernMovieList.filter(s => s.id !== showId);
  } else if (sourceShow.type === 'kdrama' || sourceShow.type === 'cdrama' || sourceShow.type === 'jdrama' || sourceShow.type === 'anime') {
    // For Asian TV shows, surface related Asian dramas — each links to its own Western match page
    const asianShows = [...kdramaList, ...cdramaList, ...jdramaList, ...animeList];
    candidates = asianShows.filter(s => s.id !== showId);
  } else if (sourceShow.type === 'kmovie' || sourceShow.type === 'jmovie' || sourceShow.type === 'anime-movie') {
    // For Asian movies, surface related Asian films
    const asianMovies = [...kmovieList, ...jmovieList, ...animeMovieList, ...kdramaList];
    candidates = asianMovies.filter(s => s.id !== showId);
  } else {
    candidates = westernList;
  }

  // Score by genre + theme overlap (simple Jaccard)
  const scored = candidates.map(s => {
    const genreScore = jaccardSimilarity(sourceShow.genres || [], s.genres || []);
    const themeScore = jaccardSimilarity(sourceShow.themes || [], s.themes || []);
    const toneScore = jaccardSimilarity(sourceShow.tone || [], s.tone || []);
    const totalScore = genreScore * 0.4 + themeScore * 0.35 + toneScore * 0.25;
    return { id: s.id, title: s.title, year: s.year, type: s.type, score: totalScore };
  });

  return scored
    .sort((a, b) => b.score - a.score)
    .slice(0, limit || 5)
    .map(s => ({ id: s.id, title: s.title, year: s.year, type: s.type }));
}

/**
 * Search tropes and themes by label for autocomplete.
 * Returns matches sorted by relevance then popularity (count).
 * @param {string} query - User's typed query
 * @param {number} limit - Max results to return
 */
function searchTropes(query, limit = 3) {
  if (!query || query.length < 2) return [];

  const { tropes, themes } = getAllTropesAndThemes();
  const all = [...tropes, ...themes];
  const q = query.toLowerCase().trim();
  // Normalize: treat dashes/underscores as spaces for matching
  const qNorm = q.replace(/[-_]/g, ' ');

  const seen = new Set();
  const results = all.map(tag => {
    const labelLower = tag.label.toLowerCase();
    const valueLower = tag.value.toLowerCase().replace(/-/g, ' ');
    let score = 0;

    if (labelLower === qNorm || valueLower === qNorm) score = 100;
    else if (labelLower.startsWith(qNorm) || valueLower.startsWith(qNorm)) score = 80;
    else if (
      labelLower.split(/\s+/).some(w => w.startsWith(qNorm)) ||
      valueLower.split(/\s+/).some(w => w.startsWith(qNorm))
    ) score = 60;
    else if (labelLower.includes(qNorm) || valueLower.includes(qNorm)) score = 40;
    else if (qNorm.length >= 3) {
      let qi = 0;
      for (let i = 0; i < labelLower.length && qi < qNorm.length; i++) {
        if (labelLower[i] === qNorm[qi]) qi++;
      }
      if (qi === qNorm.length) score = 20;
    }

    return { ...tag, score };
  })
    .filter(t => t.score > 0)
    .filter(t => { // deduplicate by value
      if (seen.has(t.value)) return false;
      seen.add(t.value);
      return true;
    })
    .sort((a, b) => b.score - a.score || b.count - a.count)
    .slice(0, limit);

  return results.map(r => ({
    id: r.value,
    type: 'trope',
    label: r.label,
    count: r.count
  }));
}

/**
 * Get all unique tropes and themes across the full catalog with occurrence counts.
 * Returns sorted lists (most common first) for browse/filter UI.
 */
function getAllTropesAndThemes() {
  const tropeCounts = {};
  const themeCounts = {};

  allShowsList.forEach(show => {
    (show.tropes || []).forEach(t => {
      tropeCounts[t] = (tropeCounts[t] || 0) + 1;
    });
    (show.themes || []).forEach(t => {
      themeCounts[t] = (themeCounts[t] || 0) + 1;
    });
  });

  const tropes = Object.entries(tropeCounts)
    .map(([value, count]) => ({ value, label: formatTag(value), count }))
    .sort((a, b) => b.count - a.count);

  const themes = Object.entries(themeCounts)
    .map(([value, count]) => ({ value, label: formatTag(value), count }))
    .sort((a, b) => b.count - a.count);

  return { tropes, themes };
}

/**
 * Get all shows (K-dramas, K-movies, Western shows/movies) that have a given trope or theme.
 * Searches both the `tropes` and `themes` arrays on each show.
 * @param {string} trope - The trope/theme value (kebab-case, e.g. 'enemies-to-lovers')
 */
function getShowsByTrope(trope) {
  const normalized = (trope || '').toLowerCase().trim();
  if (!normalized) return null;

  const matches = allShowsList.filter(show => {
    const allTags = [...(show.tropes || []), ...(show.themes || [])];
    return allTags.some(t => t.toLowerCase() === normalized);
  });

  const formatForTrope = (show) => ({
    id: show.id,
    title: show.title,
    year: show.year,
    type: show.type,
    genres: show.genres || [],
    tropes: show.tropes || [],
    themes: show.themes || [],
    synopsis: (show.synopsis || '').substring(0, 220),
    streaming: show.streaming || {},
    network: show.network || '',
    episodes: show.episodes || null,
    runtime: show.runtime || null,
    actors: (show.actors || []).slice(0, 3)
  });

  return {
    trope: normalized,
    label: formatTag(normalized),
    kdramas: matches.filter(s => s.type === 'kdrama').map(formatForTrope),
    kmovies: matches.filter(s => s.type === 'kmovie').map(formatForTrope),
    cdramas: matches.filter(s => s.type === 'cdrama').map(formatForTrope),
    jdramas: matches.filter(s => s.type === 'jdrama').map(formatForTrope),
    jmovies: matches.filter(s => s.type === 'jmovie').map(formatForTrope),
    anime: matches.filter(s => s.type === 'anime').map(formatForTrope),
    animeMovies: matches.filter(s => s.type === 'anime-movie').map(formatForTrope),
    westernShows: matches.filter(s => s.type === 'western').map(formatForTrope),
    westernMovies: matches.filter(s => s.type === 'western-movie').map(formatForTrope),
    total: matches.length
  };
}

/**
 * Look up an actor by URL slug (e.g. "byeon-woo-seok" → Byeon Woo-seok)
 * Handles names with hyphens (like "Woo-seok") that don't deslugify cleanly.
 * Returns same format as getActorShowsWithMatches or null.
 */
function getActorBySlug(slug) {
  // First: try direct deslugify (works for most names like "hyun-bin" → "hyun bin")
  const nameQuery = slug.replace(/-/g, ' ');
  let result = getActorShowsWithMatches(nameQuery, null);
  if (result) return result;

  // Second: find matching entry in actorSearchList by slug field
  const match = actorSearchList.find(a => a.slug === slug);
  if (match) {
    return getActorShowsWithMatches(match.name, null);
  }

  return null;
}

/**
 * Return the full catalog as a flat array (all types included).
 * Used by the dynamic /llms-full.txt route to generate an up-to-date title index.
 */
function getAllShows() {
  return allShowsList;
}

module.exports = {
  searchShows,
  searchActors,
  searchTropes,
  getRecommendations,
  getMoodRecommendations,
  getMoods,
  getShowDetails,
  getFeaturedMatches,
  getStats,
  formatTag,
  getActorShowsWithMatches,
  getActorBySlug,
  getWesternRecommendations,
  getRelatedWesternShows,
  getAllTropesAndThemes,
  getShowsByTrope,
  getAllShows
};
