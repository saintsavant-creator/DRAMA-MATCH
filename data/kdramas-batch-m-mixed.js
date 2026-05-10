/**
 * K-Drama Batch M — Mixed Genres Expansion
 * 30 titles: classic romcom, melodrama, historical, medical, sci-fi/fantasy, crime, workplace
 * Focused on popular/acclaimed titles from 2005–2022 not yet in catalog
 * Added: 2026-03-25
 */
module.exports = [

  // ── CLASSIC ROMCOMS / ROMANCE ─────────────────────────────────────────────

  {
    id: "my-name-is-kim-sam-soon",
    title: "My Lovely Sam-Soon (My Name is Kim Sam-Soon)",
    year: 2005,
    episodes: 16,
    synopsis: "Sam-soon, a 30-year-old pastry chef dumped on Christmas Eve, enters a fake-dating contract with the arrogant CEO of a restaurant chain while both are nursing heartbreak — and slowly fall for each other for real.",
    genres: ["romance", "comedy", "drama"],
    themes: ["self-worth", "second-chances", "class-divide", "heartbreak", "identity"],
    tropes: ["fake-dating", "contract-relationship", "enemies-to-lovers", "strong-female-lead", "grumpy-vs-sunshine"],
    tone: ["comedic", "heartwarming", "emotional", "lighthearted"],
    setting: ["modern", "urban", "culinary"],
    characterTypes: ["self-deprecating-female-lead", "cold-charismatic-ceo", "first-love-rival", "supportive-friend"],
    streaming: { viki: true, amazon_prime: true },
    network: "MBC",
    actors: [
      { name: "Kim Sun-ah", role: "Kim Sam-soon", isLead: true },
      { name: "Hyun Bin", role: "Hyun Jin-heon", isLead: true },
      { name: "Jung Ryeo-won", role: "Yoo Hee-jin", isLead: false }
    ],
    matchReasoningHints: [
      "The original K-drama that made rom-coms self-aware — Sam-soon's spiraling internal monologue is pure Bridget Jones energy",
      "Hyun Bin doing brooding-cold-CEO before it was a K-drama trope mirrors early Matthew Macfadyen as Darcy before he softened",
      "A fake-dating contract between two heartbroken people is the same bittersweet premise as Sweet Home Alabama — fake for the public, real in private",
      "The pastry-chef heroine who refuses to shrink herself is everything we wanted from Pushing Daisies' Chuck but with more grit",
      "For fans of Schitt's Creek's David/Patrick slow burn — the sarcasm-to-sincerity pipeline here is just as satisfying"
    ],
  },

  {
    id: "goong-princess-hours",
    title: "Goong (Princess Hours)",
    year: 2006,
    episodes: 24,
    synopsis: "In an alternate modern Korea where the monarchy survived, a clumsy art-school girl is suddenly betrothed to the cold, aloof Crown Prince per a childhood arrangement — navigating palace politics, a scheming rival, and an unexpected love.",
    genres: ["romance", "comedy", "drama"],
    themes: ["duty-vs-desire", "class-divide", "identity", "royal-responsibility", "first-love"],
    tropes: ["arranged-marriage", "enemies-to-lovers", "fish-out-of-water", "royal-romance", "slow-burn"],
    tone: ["comedic", "heartwarming", "dramatic", "whimsical"],
    setting: ["modern", "palace", "alternate-history"],
    characterTypes: ["clumsy-relatable-female-lead", "cold-prince-with-hidden-warmth", "scheming-rival-princess", "supportive-second-lead"],
    streaming: { viki: true },
    network: "MBC",
    actors: [
      { name: "Yoon Eun-hye", role: "Shin Chae-kyung", isLead: true },
      { name: "Joo Ji-hoon", role: "Crown Prince Lee Shin", isLead: true },
      { name: "Kim Jeong-hoon", role: "Yul", isLead: false },
      { name: "Song Ji-hyo", role: "Min Hyo-rin", isLead: false }
    ],
    matchReasoningHints: [
      "The original hallyu-wave royal romance that made the world fall for K-dramas — think The Princess Diaries meets a palace soap opera",
      "An arranged marriage between total opposites in a modern monarchy mirrors The Crown's tension between personal desire and royal duty",
      "The alternate-history modern Korean monarchy is its own genre of world-building, as immersive as The Tudors but with cute outfits",
      "Yoon Eun-hye's Chae-kyung is the blueprint for every lovable, relentlessly optimistic K-drama heroine that followed",
      "For Downton Abbey fans who want the upstairs-downstairs drama but with a 20-year-old girl trying to survive palace Wi-Fi cutoffs"
    ],
  },

  {
    id: "fated-to-love-you",
    title: "Fated to Love You",
    year: 2014,
    episodes: 20,
    synopsis: "A meek, people-pleasing office worker accidentally spends the night with a charismatic heir on a cruise and ends up pregnant — forcing them into a contract marriage that slowly becomes the real thing.",
    genres: ["romance", "comedy", "drama"],
    themes: ["self-discovery", "unexpected-family", "class-divide", "growing-confidence", "sacrifice"],
    tropes: ["contract-marriage", "accidental-pregnancy", "enemies-to-lovers", "cinderella-story", "character-growth"],
    tone: ["comedic", "heartwarming", "emotional", "dramatic"],
    setting: ["modern", "urban", "corporate"],
    characterTypes: ["doormat-female-lead-who-grows", "playboy-heir-who-changes", "first-love-rival", "chaebol-family"],
    streaming: { viki: true, amazon_prime: true },
    network: "tvN",
    actors: [
      { name: "Jang Hyuk", role: "Lee Gun", isLead: true },
      { name: "Jang Na-ra", role: "Kim Mi-young", isLead: true },
      { name: "Wang Ji-won", role: "Se-ra", isLead: false }
    ],
    matchReasoningHints: [
      "The accidental-pregnancy-forced-marriage premise mirrors What's Your Number? or The Proposal — but stretched into 20 episodes of genuine emotional growth",
      "Jang Hyuk's explosive comedic physicality is pure Jim Carrey energy — the K-drama that proved male leads could be unhinged AND romantic",
      "The doormat heroine learning her own worth is the satisfying arc you wanted for Anne Hathaway's character in The Devil Wears Prada, complete",
      "Contract marriage that becomes real mirrors Crazy Rich Asians' class-divide romance but with more Post-its and charades",
      "For New Girl fans who love the slow realization that the annoying person you're stuck with is actually your person"
    ],
  },

  {
    id: "a-gentlemans-dignity",
    title: "A Gentleman's Dignity",
    year: 2012,
    episodes: 20,
    synopsis: "Four men in their early 40s — childhood friends who've stayed immature in love — navigate romance, heartbreak, and growing up alongside a high school ethics teacher who won't give one of them the time of day.",
    genres: ["romance", "comedy", "drama"],
    themes: ["male-friendship", "growing-up", "second-chances", "unrequited-love", "commitment"],
    tropes: ["slow-burn", "friends-to-lovers", "found-family", "bromance", "age-gap"],
    tone: ["comedic", "heartwarming", "nostalgic", "lighthearted"],
    setting: ["modern", "urban", "domestic"],
    characterTypes: ["charismatic-40s-friend-group", "principled-female-lead", "loyal-friendship-quartet", "younger-admirer"],
    streaming: { viki: true, amazon_prime: true },
    network: "JTBC",
    actors: [
      { name: "Jang Dong-gun", role: "Kim Do-jin", isLead: true },
      { name: "Kim Ha-neul", role: "Seo Yi-soo", isLead: true },
      { name: "Kim Min-jong", role: "Im Tae-san", isLead: false },
      { name: "Lee Jong-hyuk", role: "Choi Yoon", isLead: false }
    ],
    matchReasoningHints: [
      "Four adult men who refuse to grow up mirrors the entire premise of It's Always Sunny in Philadelphia — except these guys are actually charming",
      "The friendship group at 40 navigating love is pure Sex and the City energy but from the male side, with more soccer",
      "Jang Dong-gun's suave, slightly-too-cool architect is the K-drama equivalent of George Clooney in ER — too handsome to be trusted",
      "A woman who won't fall for the obvious charm mirrors how Elizabeth Bennet handles Wickham — she's seen this type before",
      "For Grey's Anatomy fans who loved the friendships more than the hospital plots — this is that show, aged up and set in Seoul"
    ],
  },

  // ── MELODRAMA ─────────────────────────────────────────────────────────────

  {
    id: "nice-guy-innocent-man",
    title: "Nice Guy (Innocent Man)",
    year: 2012,
    episodes: 20,
    synopsis: "A medical student takes the fall for his first love's crime, destroying his future — then re-enters her life years later to take revenge, but falls for a kind, amnesiac heiress who complicates everything.",
    genres: ["melodrama", "romance", "thriller"],
    themes: ["revenge", "betrayal", "redemption", "amnesia", "moral-ambiguity"],
    tropes: ["revenge-thriller", "amnesia", "enemies-to-lovers", "love-triangle", "moral-grey-protagonist"],
    tone: ["intense", "emotional", "dark", "romantic"],
    setting: ["modern", "urban", "corporate"],
    characterTypes: ["betrayed-hero-turned-villain", "innocent-amnesiac-heiress", "manipulative-first-love", "chaebol-family"],
    streaming: { viki: true, amazon_prime: true },
    network: "KBS2",
    actors: [
      { name: "Song Joong-ki", role: "Kang Ma-ru", isLead: true },
      { name: "Moon Chae-won", role: "Seo Eun-ki", isLead: true },
      { name: "Park Si-yeon", role: "Han Jae-hee", isLead: false }
    ],
    matchReasoningHints: [
      "A man whose entire identity is built on a revenge mission that falls apart when he falls in love is pure Breaking Bad moral collapse territory",
      "Song Joong-ki's cold, calculating anti-hero is the K-drama answer to Don Draper — handsome, tortured, and doing terrible things for understandable reasons",
      "The amnesiac heiress falling for the man who's supposed to be using her mirrors Eternal Sunshine's heartbreak-then-wonder emotional journey",
      "A first love whose betrayal poisons every relationship that follows — this is the K-drama equivalent of Rebecca, and just as gothic",
      "For Succession fans who want corporate power games with genuine emotional devastation — the inheritance war is just the backdrop here"
    ],
  },

  {
    id: "that-winter-the-wind-blows",
    title: "That Winter, The Wind Blows",
    year: 2013,
    episodes: 16,
    synopsis: "A debt-ridden con man pretends to be the long-lost brother of a blind heiress to steal her inheritance — but as he's drawn into her isolated, fragile world, his scheme unravels into something terrifyingly real.",
    genres: ["melodrama", "romance", "thriller"],
    themes: ["deception", "redemption", "loneliness", "trust", "sacrifice"],
    tropes: ["fake-identity", "slow-burn", "forbidden-love", "wealthy-vs-poor", "tragic-romance"],
    tone: ["melancholic", "intense", "romantic", "dark"],
    setting: ["modern", "urban", "winter", "domestic"],
    characterTypes: ["con-man-with-conscience", "lonely-blind-heiress", "scheming-rival", "loyal-friend"],
    streaming: { viki: true, amazon_prime: true },
    network: "SBS",
    actors: [
      { name: "Hyun Bin", role: "Oh Soo", isLead: true },
      { name: "Song Hye-kyo", role: "Oh Young", isLead: true },
      { name: "Kim Bum", role: "Jo Moo-chul", isLead: false }
    ],
    matchReasoningHints: [
      "A con man lying to a vulnerable woman and falling for her before he can stop himself — this is the emotional core of The Sting, rewritten as a love story",
      "The hushed, snow-covered cinematography creates the same intimate dread as The Hours or Blue Valentine — you know it ends badly and you can't look away",
      "Song Hye-kyo's performance as a blind woman who hears everything is as devastating as Audrey Hepburn in Wait Until Dark, but warmer",
      "A deception that starts as exploitation and becomes the most honest relationship either person has ever had — exactly the moral knot of Catch Me If You Can",
      "For fans of Downton Abbey's tragic storylines who want the full emotional wallop without the British restraint"
    ],
  },

  {
    id: "angel-eyes-kdrama",
    title: "Angel Eyes",
    year: 2014,
    episodes: 20,
    synopsis: "Two childhood sweethearts are separated after a tragic accident gives a blind girl her sight — twelve years later, a firefighter returns to find her, not knowing she's become engaged to someone else.",
    genres: ["melodrama", "romance", "drama"],
    themes: ["first-love", "sacrifice", "reunion", "fate", "loss"],
    tropes: ["first-love-reunion", "separation-and-reunion", "noble-idiocy", "tragic-backstory", "slow-burn"],
    tone: ["emotional", "melancholic", "romantic", "heartwarming"],
    setting: ["modern", "small-town", "urban"],
    characterTypes: ["devoted-first-love-hero", "visually-impaired-female-lead", "noble-second-lead", "protective-parent"],
    streaming: { viki: true },
    network: "MBC",
    actors: [
      { name: "Lee Sang-yoon", role: "Yoon Soo-wan", isLead: true },
      { name: "UEE (Jung Yoo-jin)", role: "Oh Soo-yeon", isLead: true },
      { name: "Kang Ha-neul", role: "Ji Min-soo", isLead: false }
    ],
    matchReasoningHints: [
      "The childhood-sweethearts-separated-by-tragedy reunion premise is the same devastatingly effective formula as The Notebook — except with arson investigation subplots",
      "A man who spent twelve years preparing to find her again is the same quiet devotion as Outlander's Jamie Fraser — it's not obsession, it's purpose",
      "The reveal that she got her sight from his mother's corneas adds a layer of fate so operatic it rivals the coincidences in Atonement",
      "Lee Sang-yoon's understated, patient heroism is the K-drama answer to Richard Gere in Nights in Rodanthe — same windswept romantic tragedy energy",
      "For One Tree Hill fans who loved the Lucas-Peyton first-love arc — this is that story as a prestige adult drama, minus the basketball"
    ],
  },

  {
    id: "can-you-hear-my-heart",
    title: "Can You Hear My Heart",
    year: 2011,
    episodes: 30,
    synopsis: "A woman who hid her father's deafness her whole life, and a man hiding that he's the son of a chaebol family while pretending to have an intellectual disability, navigate childhood trauma, class, and complicated first love.",
    genres: ["melodrama", "romance", "family"],
    themes: ["hidden-identity", "class-divide", "disability", "family-trauma", "first-love"],
    tropes: ["fake-identity", "first-love-reunion", "hidden-disability", "chaebol-secret", "slow-burn"],
    tone: ["emotional", "heartwarming", "melancholic", "dramatic"],
    setting: ["modern", "urban", "family", "corporate"],
    characterTypes: ["self-sacrificing-female-lead", "heir-with-hidden-identity", "deaf-father-figure", "scheming-chaebol-family"],
    streaming: { viki: true },
    network: "MBC",
    actors: [
      { name: "Hwang Jung-eum", role: "Cha Dong-joo / Bong Woo-ri", isLead: true },
      { name: "Kim Jae-won", role: "Cha Dong-joo", isLead: true },
      { name: "Nam Goong-min", role: "Moon Joon-ha", isLead: false }
    ],
    matchReasoningHints: [
      "Two people hiding secrets that define their entire identity mirrors the layered reveal structure of Big Little Lies — every episode recontextualizes what came before",
      "A deaf character navigating a hearing world with a family who protects him from it is the same emotional territory as The Sound of Metal, but warmer",
      "The class-divide hidden beneath a fake identity is pure Downton Abbey — the servant who's actually an heir, the sacrifice made to protect appearances",
      "For This Is Us fans who love multi-generational family drama where childhood wounds echo into adult choices — this is that show, Korean edition",
      "Kim Jae-won playing a man pretending to be simple to survive a cruel chaebol world is as quietly devastating as Forrest Gump's social invisibility"
    ],
  },

  {
    id: "on-the-way-to-the-airport",
    title: "On the Way to the Airport",
    year: 2016,
    episodes: 16,
    synopsis: "A flight attendant in an empty marriage and a quiet airline ground supervisor meet repeatedly by chance — their restrained, undeniable connection forcing both to confront the lives they chose and the ones they want.",
    genres: ["melodrama", "romance", "drama"],
    themes: ["forbidden-love", "unhappy-marriage", "self-discovery", "fate", "loneliness"],
    tropes: ["forbidden-romance", "slow-burn", "emotional-affair", "parallel-lives", "quiet-intensity"],
    tone: ["melancholic", "quiet", "intense", "romantic"],
    setting: ["modern", "urban", "airports", "domestic"],
    characterTypes: ["married-woman-in-loveless-marriage", "lonely-divorced-man", "controlling-spouse", "quiet-but-steady-love-interest"],
    streaming: { viki: true },
    network: "KBS2",
    actors: [
      { name: "Kim Ha-neul", role: "Choi Soo-ah", isLead: true },
      { name: "Lee Sang-yoon", role: "Park Do-woo", isLead: true },
      { name: "Shin Sung-rok", role: "Kim Jin-suk", isLead: false }
    ],
    matchReasoningHints: [
      "Two married people who shouldn't be falling in love slowly, inevitably, devastatingly falling in love — this is the Korean Brief Encounter, down to the airports",
      "The restrained, slow-burning mutual recognition of two unhappy people is exactly the emotional suffocation of Revolutionary Road, but with hope",
      "For Normal People fans who need the quiet devastation of two people who want each other but can't get there — except these two are in their 30s and tired",
      "Kim Ha-neul's performance is the K-drama equivalent of Meryl Streep in The Hours — everything happening beneath the surface, nothing said out loud",
      "The airport setting makes every goodbye feel permanent and every reunion feel impossible — Mad Men's restraint with K-drama's emotional honesty"
    ],
  },

  // ── HISTORICAL / PERIOD ──────────────────────────────────────────────────

  {
    id: "the-princesses-man",
    title: "The Princess's Man",
    year: 2011,
    episodes: 24,
    synopsis: "In Joseon's turbulent political succession, the son of a loyal minister and the daughter of the usurping Prince Suyang fall desperately in love — but their fathers' conflict puts their lives and love on a collision course with history.",
    genres: ["historical", "romance", "melodrama", "action"],
    themes: ["forbidden-love", "political-betrayal", "sacrifice", "revenge", "loyalty"],
    tropes: ["romeo-and-juliet", "forbidden-love", "revenge-mission", "noble-sacrifice", "enemies-families"],
    tone: ["intense", "romantic", "melancholic", "dramatic"],
    setting: ["joseon", "palace", "political"],
    characterTypes: ["righteous-scholarly-hero", "daughter-of-villain", "ruthless-usurper-father", "loyal-companions"],
    streaming: { viki: true },
    network: "KBS2",
    actors: [
      { name: "Park Shi-hoo", role: "Kim Seung-yu", isLead: true },
      { name: "Moon Chae-won", role: "Lee Se-ryung", isLead: true },
      { name: "Hong Ri-na", role: "Jung Jong", isLead: false }
    ],
    matchReasoningHints: [
      "Romeo and Juliet in the Joseon court — except both leads survive long enough to make you wish they hadn't, because their choices hurt more",
      "Park Shi-hoo's transformation from idealistic scholar to wounded avenger is the same arc as Inigo Montoya in The Princess Bride, scaled to epic",
      "The doomed love between children of rival political factions mirrors Game of Thrones' Robb Stark/Talisa arc — love as the fatal crack in armor",
      "Historical accuracy blended with operatic romance is exactly why The Last Kingdom fans should be watching Korean historicals — the court politics are just as brutal",
      "Moon Chae-won's Se-ryung choosing love over her father's ambition is the same impossible sacrifice as Downton Abbey's Matthew choosing love over inheritance"
    ],
  },

  {
    id: "gaksital",
    title: "Bridal Mask (Gaksital)",
    year: 2012,
    episodes: 28,
    synopsis: "In 1930s Japanese-occupied Korea, a ruthless officer hunting a legendary masked resistance fighter discovers the mask's identity — and must choose between loyalty to empire and justice for his people.",
    genres: ["action", "historical", "melodrama", "thriller"],
    themes: ["colonialism", "resistance", "identity", "sacrifice", "justice"],
    tropes: ["masked-hero", "enemies-becoming-allies", "colonial-resistance", "revenge", "tragic-fate"],
    tone: ["intense", "dark", "dramatic", "epic"],
    setting: ["1930s-korea", "colonial", "urban", "resistance"],
    characterTypes: ["masked-resistance-hero", "conflicted-enemy-officer", "colonial-oppressor", "freedom-fighters"],
    streaming: { viki: true },
    network: "KBS2",
    actors: [
      { name: "Joo Won", role: "Lee Kang-to / Gaksital", isLead: true },
      { name: "Park Ki-woong", role: "Kimura Shunji", isLead: true },
      { name: "Jin Se-yeon", role: "Oh Mok-dan", isLead: false }
    ],
    matchReasoningHints: [
      "A masked resistance fighter in a brutal occupation is the Korean answer to Zorro — except with wartime atrocities that make the stakes genuinely life-or-death",
      "The friend-turned-enemy dynamic between the two male leads mirrors Band of Brothers' most devastating friendship breakdowns",
      "Joo Won's physical performance is as committed as Tom Hardy in The Dark Knight Rises — the mask as both liberation and burden",
      "Colonial-era resistance with a Robin Hood mythology is the exact emotional DNA of Les Misérables — justice delayed, sacrifice immediate",
      "For Peaky Blinders fans who love a period criminal world where the violence is political and the hero operates in shadow"
    ],
  },

  {
    id: "king-2-hearts",
    title: "King 2 Hearts",
    year: 2012,
    episodes: 20,
    synopsis: "A playboy South Korean prince and a North Korean special forces captain are thrown together for a joint military training exercise — then forced into a political marriage as both countries face a mysterious, dangerous enemy.",
    genres: ["romance", "action", "drama", "political"],
    themes: ["North-South-Korea", "duty-vs-desire", "political-intrigue", "class-divide", "trust"],
    tropes: ["enemies-to-lovers", "political-marriage", "rivals-forced-together", "royal-romance", "strong-female-lead"],
    tone: ["dramatic", "comedic", "tense", "romantic"],
    setting: ["modern", "military", "palace", "political"],
    characterTypes: ["irresponsible-prince", "fierce-military-woman", "manipulative-villain", "loyal-aide"],
    streaming: { viki: true, amazon_prime: true },
    network: "MBC",
    actors: [
      { name: "Lee Seung-gi", role: "Lee Jae-ha", isLead: true },
      { name: "Ha Ji-won", role: "Kim Hang-ah", isLead: true },
      { name: "Jo Jung-suk", role: "Eun-kyu", isLead: false },
      { name: "Yoon Je-moon", role: "John Mayer (villain)", isLead: false }
    ],
    matchReasoningHints: [
      "A South Korean prince and North Korean soldier forced into marriage is the exact geopolitical tension Crash Landing on You refined five years later — this is the original",
      "The eccentric, menacing villain who disrupts international diplomacy purely for personal amusement rivals No Country for Old Men's Anton Chigurh for sheer unnerving charisma",
      "Ha Ji-won's North Korean military captain who refuses to be impressed is the blueprint for every competent K-drama heroine who followed",
      "Royal duty forcing two very different people together under political pressure mirrors The Crown Season 1's Elizabeth/Philip dynamic — but with more punching",
      "For fans of Succession who want the family power struggle in a monarchy but with an actually functional North-South Korea premise"
    ],
  },

  {
    id: "moonshine-kdrama",
    title: "Moonshine",
    year: 2021,
    episodes: 16,
    synopsis: "In Joseon Korea where alcohol is forbidden, a sharp-tongued noblewoman secretly brews illegal liquor to survive poverty — until an upright royal inspector assigned to catch her becomes her most complicated problem.",
    genres: ["historical", "romance", "comedy"],
    themes: ["forbidden-activity", "class-divide", "justice", "survival", "unexpected-love"],
    tropes: ["enemies-to-lovers", "fish-out-of-water", "forbidden-hobby", "noble-vs-commoner", "slow-burn"],
    tone: ["comedic", "heartwarming", "lighthearted", "dramatic"],
    setting: ["joseon", "palace", "marketplace"],
    characterTypes: ["resourceful-female-brewer", "by-the-book-inspector", "loyal-royal-friend", "scheming-noble-family"],
    streaming: { viki: true, disney_plus: true },
    network: "KBS2",
    actors: [
      { name: "Yoo Seung-ho", role: "Crown Prince Lee Pyo", isLead: true },
      { name: "Hyeri", role: "Kang Ro-seo", isLead: true },
      { name: "Byun Woo-seok", role: "Ahn Hyeong-joon", isLead: false }
    ],
    matchReasoningHints: [
      "Prohibition-era illegal brewing in Joseon is the exact same premise as Peaky Blinders, but make it a romantic comedy with better hats",
      "A woman who breaks the law to survive and a lawman whose job is to stop her falling for each other is the classic The Fugitive tension reversed — with more wine",
      "Yoo Seung-ho's prim, rule-following inspector being undone by a chaotic woman mirrors Parks and Recreation's Ben Wyatt meeting Leslie Knope",
      "The Joseon prohibition backdrop gives this the same historical atmosphere as Boardwalk Empire but with traditional Korean costumes and actual charm",
      "For Outlander fans who love the historical world-building but want more laughs and less tragedy — this is your comfort-food equivalent"
    ],
  },

  {
    id: "river-where-the-moon-rises",
    title: "River Where the Moon Rises",
    year: 2021,
    episodes: 20,
    synopsis: "A fierce Goguryeo princess raised as an assassin infiltrates enemy territory disguised as a commoner — and finds unexpected peace with a humble general's son who wants nothing to do with power or war.",
    genres: ["historical", "romance", "action"],
    themes: ["identity", "peace-vs-ambition", "forbidden-love", "duty", "sacrifice"],
    tropes: ["disguised-identity", "warrior-heroine", "enemies-to-lovers", "noble-sacrifice", "political-intrigue"],
    tone: ["dramatic", "romantic", "intense", "epic"],
    setting: ["goguryeo-era-korea", "palace", "battlefield"],
    characterTypes: ["assassin-princess-with-hidden-identity", "peaceful-military-man", "ruthless-queen-mother", "loyal-guard"],
    streaming: { viki: true, amazon_prime: true },
    network: "KBS2",
    actors: [
      { name: "Kim So-hyun", role: "Go Geon (Princess Pyeonggang)", isLead: true },
      { name: "Na In-woo", role: "On Dal", isLead: true },
      { name: "Lee Ji-hoon", role: "Go Won-pyo", isLead: false }
    ],
    matchReasoningHints: [
      "A trained assassin-princess who finds her humanity through a peaceful man who won't fight her is the K-drama version of La Femme Nikita's emotional core",
      "The 'warrior pretending to be ordinary to survive' premise mirrors Mulan — but she chose the danger, and the man she loves is the gentle one",
      "Kim So-hyun's dual identity as both ruthless royal and soft-hearted woman echoes the same duality Cate Blanchett brought to Elizabeth — strength hiding fear",
      "Ancient Goguryeo political warfare is as immersive as HBO's Rome — the kingdom-building stakes are genuinely epic, not just background noise",
      "For fans of The Last Kingdom who want the same warrior-politics-love triangle but with Korean court drama's emotional intimacy layered on top"
    ],
  },

  {
    id: "poong-the-joseon-psychiatrist",
    title: "Poong, the Joseon Psychiatrist",
    year: 2022,
    episodes: 12,
    synopsis: "A disgraced royal physician exiled for using unorthodox methods finds new purpose in a remote village, treating patients' emotional and psychological wounds in a society that doesn't believe in mental illness.",
    genres: ["historical", "medical", "romance", "comedy"],
    themes: ["mental-health", "redemption", "community", "healing", "prejudice"],
    tropes: ["fish-out-of-water", "healing-hero", "mentor-figure", "gradual-romance", "underdog"],
    tone: ["heartwarming", "comedic", "thoughtful", "emotional"],
    setting: ["joseon", "rural-village", "medical"],
    characterTypes: ["disgraced-innovative-doctor", "pragmatic-village-woman", "eccentric-patients", "traditional-medicine-rival"],
    streaming: { viki: true, disney_plus: true },
    network: "tvN",
    actors: [
      { name: "Kim Min-jae", role: "Yoo Se-poong", isLead: true },
      { name: "Kim Hyang Gi", role: "Gye Ji-han", isLead: true },
      { name: "Kim Sang-kyung", role: "Soo Uridang", isLead: false }
    ],
    matchReasoningHints: [
      "A doctor exiled for thinking ahead of his time practicing psychiatry in Joseon is the exact premise of Outlander's Claire — modern knowledge trapped in a hostile era",
      "The village-doctor-treating-unusual-ailments format mirrors Doc Martin — both shows use eccentric patients to reveal the healer's own wounds",
      "Mental illness being treated with compassion in a historical context that forbids it mirrors Ratched's reimagining of institutional care but through warmth not horror",
      "Kim Min-jae's gentle intensity as the disgraced doctor mirrors Paul Bettany in Master and Commander — brilliance punished, finding purpose on the margins",
      "For Call the Midwife fans who want the same community-healing warmth but in a Joseon period setting with understated romance"
    ],
  },

  // ── MEDICAL / PROFESSIONAL ──────────────────────────────────────────────

  {
    id: "doctors-kdrama",
    title: "Doctors",
    year: 2016,
    episodes: 20,
    synopsis: "A delinquent girl transformed by a dedicated teacher's belief in her becomes a top neurosurgeon — then faces her former mentor again as a colleague, reopening every wound and possibility she buried.",
    genres: ["medical", "romance", "drama"],
    themes: ["redemption", "mentorship", "self-worth", "second-chances", "past-wounds"],
    tropes: ["teacher-student-past", "enemies-to-lovers", "rags-to-riches", "forbidden-romance", "character-growth"],
    tone: ["dramatic", "romantic", "inspiring", "emotional"],
    setting: ["modern", "hospital", "urban"],
    characterTypes: ["reformed-delinquent-surgeon", "strict-idealistic-doctor-mentor", "hospital-rival", "protective-hospital-chief"],
    streaming: { viki: true, amazon_prime: true },
    network: "MBC",
    actors: [
      { name: "Park Shin-hye", role: "Yoo Hye-jung", isLead: true },
      { name: "Kim Rae-won", role: "Hong Ji-hong", isLead: true },
      { name: "Lee Sung-kyung", role: "Jin Seo-woo", isLead: false }
    ],
    matchReasoningHints: [
      "A troubled youth transformed by one teacher's belief who becomes exceptional at their field is the structure of every Good Will Hunting story — except she stays and fights",
      "The teacher-turned-colleague dynamic mirrors Grey's Anatomy's Cristina Yang learning from Burke — the power dynamic never fully disappears",
      "Park Shin-hye's journey from street fighter to neurosurgeon is the same compelling 'nobody who becomes somebody' arc as Suits' Mike Ross, minus the fraud",
      "Hospital politics layered over an unresolved past romance is the exact DNA of ER's Carter/Greene dynamic — professional respect hiding personal wounds",
      "For Meredith Grey fans who wanted her pre-medicine backstory explored with the same intensity as her surgical ambition"
    ],
  },

  {
    id: "doctor-john-kdrama",
    title: "Doctor John",
    year: 2019,
    episodes: 32,
    synopsis: "A brilliant pain management doctor — jailed for euthanizing a patient who begged him — is released to work at a pain clinic where a resident doctor who can't feel emotional pain becomes his most challenging case.",
    genres: ["medical", "romance", "drama"],
    themes: ["pain", "ethics", "redemption", "empathy", "death-and-dying"],
    tropes: ["brilliant-but-controversial-doctor", "forbidden-romance", "morally-grey-hero", "medical-ethics", "slow-burn"],
    tone: ["intense", "emotional", "thoughtful", "dramatic"],
    setting: ["modern", "hospital", "urban"],
    characterTypes: ["genius-doctor-with-dark-past", "emotionally-suppressed-resident", "hospital-administrator-rival", "terminal-patients"],
    streaming: { viki: true },
    network: "JTBC",
    actors: [
      { name: "Ji Sung", role: "Cha Yo-han", isLead: true },
      { name: "Lee Se-young", role: "Kang Si-young", isLead: true },
      { name: "Lee Kyu-hyung", role: "Park Tae-min", isLead: false }
    ],
    matchReasoningHints: [
      "A doctor imprisoned for mercy killing who returns to practice medicine is the Korean answer to every House M.D. ethical dilemma but focused entirely on the case that broke him",
      "The debate over euthanasia and medical ethics runs as deep as The Good Place's trolley problem — but these are real patients in real pain, not thought experiments",
      "Ji Sung's CIPA (inability to feel pain) diagnosis as a metaphor for emotional disconnection mirrors Limitless' NZT — a gift that's also a tragedy",
      "A doctor who can't feel pain treating patients whose only symptom IS pain is the same ironic medical structure as House's diagnostic puzzles, but more humane",
      "For ER fans who want the intense ethical debates of the best episodes extended into a full season arc — the moral weight here is genuine"
    ],
  },

  // ── SCI-FI / FANTASY ROMANCE ─────────────────────────────────────────────

  {
    id: "are-you-human",
    title: "Are You Human?",
    year: 2018,
    episodes: 36,
    synopsis: "A chaebol heir falls into a coma, and his genius scientist mother sends his android double — identical in face and memories — to infiltrate the company and survive a power struggle, creating impossible questions about what makes us human.",
    genres: ["sci-fi", "romance", "thriller"],
    themes: ["artificial-intelligence", "identity", "humanity", "love", "inheritance-conflict"],
    tropes: ["robot-pretending-to-be-human", "fake-identity", "chaebol-power-struggle", "unexpected-love", "moral-grey-antagonist"],
    tone: ["dramatic", "thoughtful", "romantic", "tense"],
    setting: ["modern", "corporate", "sci-fi"],
    characterTypes: ["android-learning-emotions", "chaebol-bodyguard-heroine", "scheming-board-members", "genius-scientist-mother"],
    streaming: { viki: true },
    network: "KBS2",
    actors: [
      { name: "Seo Kang-joon", role: "Nam Shin III (android) / Nam Shin (human)", isLead: true },
      { name: "Gong Seung-yeon", role: "Kang So-bong", isLead: true },
      { name: "Yu Oh-seong", role: "Park Jong-gil", isLead: false }
    ],
    matchReasoningHints: [
      "An android learning what it means to feel by loving someone mirrors Westworld's Dolores arc — except with more corporate board meetings and less gun violence",
      "The 'robot is more human than the humans around him' premise is the direct emotional sequel to Ex Machina's questions, but where love is an answer not a threat",
      "Seo Kang-joon playing both the android and the human original is the dual-performance challenge of Orphan Black's Tatiana Maslany — technically stunning",
      "The chaebol inheritance thriller gives this the same structural skeleton as Succession — except one of the heirs is literally not human and that's the kindest one",
      "For Her fans who love the 'human falling for AI' premise but want the AI to be the one falling in love instead — same emotional territory, inverted perspective"
    ],
  },

  {
    id: "my-holo-love",
    title: "My Holo Love",
    year: 2020,
    episodes: 12,
    synopsis: "A woman with prosopagnosia (face-blindness) who struggles to connect with people finds herself falling for a kind, attentive AI hologram — not realizing the human designer behind him watches everything and is falling for her too.",
    genres: ["sci-fi", "romance", "drama"],
    themes: ["artificial-intelligence", "loneliness", "connection", "disability", "identity"],
    tropes: ["ai-romance", "love-triangle", "hidden-disability", "creator-falls-for-user", "unexpected-love"],
    tone: ["heartwarming", "thoughtful", "romantic", "melancholic"],
    setting: ["modern", "urban", "tech-industry"],
    characterTypes: ["face-blind-lonely-heroine", "empathetic-ai-hologram", "its-real-human-creator", "tech-industry-rivals"],
    streaming: { netflix: true },
    network: "Netflix",
    actors: [
      { name: "Yoon Hyun-min", role: "Holo (AI) / Ko Nan-do (creator)", isLead: true },
      { name: "Ko Sung-hee", role: "Han So-yeon", isLead: true }
    ],
    matchReasoningHints: [
      "Falling in love with an AI companion who's perfectly attuned to your needs is the Netflix-era Her — same loneliness, same question of whether the love is real",
      "A disability that prevents the heroine from recognizing faces makes every human connection an act of conscious trust — the same emotional vulnerability as Blindspot's Jane Doe",
      "The creator watching his AI interact with the woman he loves without being seen is Cyrano de Bergerac updated for the Silicon Valley era",
      "Yoon Hyun-min playing both the warm, perfect hologram and the cold, guarded human who designed him is one of K-drama's most nuanced dual performances",
      "For Black Mirror fans who want 'Be Right Back' or 'Hang the DJ' extended to a full series where the love story actually gets to breathe"
    ],
  },

  {
    id: "the-school-nurse-files",
    title: "The School Nurse Files",
    year: 2020,
    episodes: 6,
    synopsis: "A school nurse with the ability to see and fight deadly 'jellies' — manifestations of human desire that most people can't perceive — forms an unexpected bond with a mysterious teacher whose energy keeps the creatures at bay.",
    genres: ["fantasy", "supernatural", "romance", "drama"],
    themes: ["supernatural-vision", "isolation", "desire", "protection", "found-family"],
    tropes: ["supernatural-powers", "outsider-hero", "unexpected-love", "monster-of-the-week", "quiet-bond"],
    tone: ["quirky", "heartwarming", "melancholic", "surreal"],
    setting: ["modern", "school", "supernatural"],
    characterTypes: ["monster-hunter-nurse", "mysterious-teacher-with-special-energy", "oblivious-students", "supernatural-creatures"],
    streaming: { netflix: true },
    network: "Netflix",
    actors: [
      { name: "Jung Yu-mi", role: "Ahn Eun-young", isLead: true },
      { name: "Nam Joo-hyuk", role: "Hong In-pyo", isLead: true }
    ],
    matchReasoningHints: [
      "A school nurse who can see supernatural threats no one else can and fights them alone is the exact Buffy the Vampire Slayer premise — same secret duty, same isolation",
      "The visual language of 'jellies' as physical manifestations of human desire is as inventive as Steven Universe's Gem monsters — strange, beautiful, and emotionally resonant",
      "Jung Yu-mi's deadpan supernatural heroism mirrors Wynonna Earp's Melanie Scrofano — the chosen one who didn't choose it, doing the job with a sigh",
      "The quiet, protective bond between a woman who sees monsters and the one person whose presence calms them mirrors Pushing Daisies' untouchable love",
      "For Twin Peaks fans who want the small-town strangeness and the sense that horror and tenderness coexist in every frame"
    ],
  },

  // ── CRIME / THRILLER ──────────────────────────────────────────────────────

  {
    id: "rooftop-prince",
    title: "Rooftop Prince",
    year: 2012,
    episodes: 20,
    synopsis: "A Joseon crown prince whose wife is murdered mysteriously is transported 300 years into the future — arriving in modern Seoul with three loyal retainers — and discovers his reincarnated past life entangled with a cold corporate heir.",
    genres: ["romance", "comedy", "fantasy", "mystery"],
    themes: ["reincarnation", "time-travel", "past-life-connection", "justice", "identity"],
    tropes: ["time-travel", "fish-out-of-water", "past-life-romance", "mystery", "comedic-fish-out-of-water"],
    tone: ["comedic", "heartwarming", "dramatic", "whimsical"],
    setting: ["modern-seoul", "joseon", "corporate"],
    characterTypes: ["joseon-prince-in-modern-world", "reincarnated-love-interest", "three-loyal-retainers", "cold-corporate-villain"],
    streaming: { viki: true, amazon_prime: true },
    network: "MBC",
    actors: [
      { name: "Park Yoochun", role: "Lee Gak / Yong Tae-yong", isLead: true },
      { name: "Han Ji-min", role: "Park Ha / Crown Princess", isLead: true },
      { name: "Lee Tae-sung", role: "Song Man-bo", isLead: false }
    ],
    matchReasoningHints: [
      "A medieval prince arriving in 2012 Seoul with loyal retainers is The Prince and Me meets The Fish Called Wanda — the culture shock is genuinely funny",
      "The past-life mystery driving a present-day corporate thriller mirrors the structure of Cloud Atlas — except condensed into one love story with a rooftop",
      "Three Joseon retainers learning to navigate smartphones and convenience stores is as delightfully absurd as the time-travel comedy of About Time",
      "The murder mystery from 300 years ago that's still unresolved in the present connects the past and future the way The Returned does but with more neon signs",
      "For Outlander fans who love the fish-out-of-water time travel premise — same disorientation, same beauty, except the culture shock is funnier"
    ],
  },

  {
    id: "youre-all-surrounded",
    title: "You're All Surrounded",
    year: 2014,
    episodes: 20,
    synopsis: "Four rookie detectives join a violent crimes unit and one discovers his supervisor is connected to his mother's unsolved murder from years ago — forcing him to navigate justice, revenge, and an unexpected found family.",
    genres: ["crime", "drama", "comedy", "romance"],
    themes: ["justice", "revenge", "found-family", "truth", "growing-up"],
    tropes: ["revenge-mission", "found-family", "rookie-vs-veteran", "bromance", "underdog"],
    tone: ["comedic", "dramatic", "heartwarming", "tense"],
    setting: ["modern", "police", "urban"],
    characterTypes: ["revenge-driven-rookie", "gruff-supervisor-with-secrets", "quirky-detective-squad", "determined-female-detective"],
    streaming: { viki: true, amazon_prime: true },
    network: "SBS",
    actors: [
      { name: "Lee Seung-gi", role: "Eun Dae-gu", isLead: true },
      { name: "Cha Seung-won", role: "Seo Pan-seok", isLead: true },
      { name: "Go Ara", role: "Oh Ji-soo", isLead: false }
    ],
    matchReasoningHints: [
      "Rookies joining a squad with a dark secret connecting one of them to the boss mirrors Castle's Castle/Beckett dynamic but with the power imbalance reversed",
      "Lee Seung-gi's character discovering his revenge target is actually his moral role model is the same identity crisis as Brooklyn Nine-Nine's Jake Peralta meeting his hero",
      "The buddy-cop comedy energy between four mismatched rookies is exactly what makes Brooklyn Nine-Nine's ensemble work — the humor never undermines the stakes",
      "A murder from 12 years ago that everyone tried to bury surfacing through a determined young detective mirrors Cold Case's procedural format but with an ensemble heart",
      "For fans of The Shield who want the moral complexity of cops with secrets but prefer comedic relief over unrelenting grimness"
    ],
  },

  {
    id: "missing-noir-m",
    title: "Missing Noir M",
    year: 2015,
    episodes: 8,
    synopsis: "An elite FBI-trained detective joins Korea's first Missing Persons Crime Investigation Unit, tackling meticulously crafted disappearance cases that reveal the dark psychology behind ordinary-seeming lives.",
    genres: ["crime", "thriller", "mystery"],
    themes: ["missing-persons", "psychology", "justice", "dark-truth", "obsession"],
    tropes: ["brilliant-detective", "procedural-investigation", "dark-psychology", "missing-persons", "case-of-the-week"],
    tone: ["dark", "tense", "intellectual", "psychological"],
    setting: ["modern", "police", "urban"],
    characterTypes: ["elite-fbi-trained-detective", "missing-persons-unit", "complex-antagonists", "profiler"],
    streaming: { viki: true },
    network: "OCN",
    actors: [
      { name: "Kim Kang-woo", role: "Gil Soo-hyun", isLead: true },
      { name: "Ko Boksum", role: "Oh Dae-young", isLead: true }
    ],
    matchReasoningHints: [
      "Short-run, prestige crime procedural focused on missing persons cases with FBI-trained methods mirrors Mindhunter's clinical approach to dark psychology",
      "Each disappearance revealing a different layer of human psychology is exactly how True Detective Season 1 built its anthology structure — case as window, not destination",
      "OCN crime dramas built the Korean prestige thriller genre — Missing Noir M is where that tradition became genuinely cinematic",
      "For Sherlock fans who want the deductive brilliance without the insufferable personality — Gil Soo-hyun is just as sharp but considerably more human",
      "Eight tight episodes with film-quality cinematography mirrors the best of Scandinavian noir — The Killing's restraint with Mindhunter's psychological depth"
    ],
  },

  {
    id: "witch-s-court",
    title: "Witch's Court",
    year: 2017,
    episodes: 16,
    synopsis: "A ruthless, self-serving prosecutor who handles sexual violence cases gets an unlikely partner — an idealistic, naive male prosecutor — and together they take on cases she once only cared about winning, not the victims.",
    genres: ["legal", "crime", "drama", "romance"],
    themes: ["justice", "sexual-violence", "redemption", "partnership", "moral-growth"],
    tropes: ["odd-couple-partners", "morally-grey-protagonist", "character-growth", "unlikely-alliance", "legal-battles"],
    tone: ["intense", "dramatic", "emotional", "occasionally-comedic"],
    setting: ["modern", "legal", "urban"],
    characterTypes: ["pragmatic-ruthless-female-prosecutor", "idealistic-male-partner", "survivors-seeking-justice", "corrupt-legal-establishment"],
    streaming: { viki: true, amazon_prime: true },
    network: "KBS2",
    actors: [
      { name: "Jung Ryeo-won", role: "Ma Yi-deum", isLead: true },
      { name: "Yoon Hyun-min", role: "Yeo Jin-wook", isLead: true }
    ],
    matchReasoningHints: [
      "A prosecutor who treats victims as means to career wins getting forced to actually see their humanity mirrors The Good Wife's Alicia Florrick's slow ethical awakening",
      "Sexual violence cases handled by a female prosecutor without flinching is the K-drama equivalent of Law & Order: SVU's Olivia Benson origin story",
      "The odd-couple partnership between a cynical woman and an idealistic man is Boston Legal's Denny/Alan dynamic reversed — the woman is the jaded one",
      "Jung Ryeo-won's anti-heroine prosecutor who learns to care is as satisfying a character arc as House M.D.'s gradual (and contested) humanity",
      "For Damages fans who want the morally complex female lawyer archetype but want redemption to be genuinely earned, not just implied"
    ],
  },

  // ── WORKPLACE / LIGHT COMEDY ─────────────────────────────────────────────

  {
    id: "search-www",
    title: "Search: WWW",
    year: 2019,
    episodes: 16,
    synopsis: "Three women navigating the cutthroat world of Korean web portal companies fight for career dominance, creative control, and personal fulfillment — finding love as an unexpected complication rather than a goal.",
    genres: ["drama", "romance", "workplace"],
    themes: ["ambition", "female-empowerment", "career-vs-love", "competition", "friendship"],
    tropes: ["career-driven-female-lead", "rivals-become-friends", "age-gap", "three-female-leads", "workplace-politics"],
    tone: ["stylish", "empowering", "romantic", "sharp"],
    setting: ["modern", "tech-corporate", "urban"],
    characterTypes: ["ambitious-career-woman", "idealistic-creative-director", "calculating-rival", "age-gap-love-interest"],
    streaming: { viki: true, amazon_prime: true },
    network: "tvN",
    actors: [
      { name: "Im Soo-jung", role: "Bae Ta-mi", isLead: true },
      { name: "Lee Da-hee", role: "Cha Hyeon", isLead: true },
      { name: "Jeon Hye-jin", role: "Song Ga-gyeong", isLead: true },
      { name: "Jang Ki-yong", role: "Park Morgan", isLead: false }
    ],
    matchReasoningHints: [
      "Three women at the top of a competitive industry navigating love as an afterthought is Sex and the City grown up and moved to Seoul tech",
      "Web portal competition as gladiatorial corporate warfare mirrors The Social Network's zero-sum intensity but told entirely from the women's perspective",
      "A 38-year-old woman casually dating a younger game developer she finds interesting is the K-drama that told the age-gap conversation to stay in its lane",
      "The show's refusal to make any of the women 'wrong' in their life choices mirrors Fleabag's feminist ambivalence — success and loneliness coexist here",
      "For Suits fans who love the corporate power games but want them to be about women fighting for creative vision rather than men fighting for partner status"
    ],
  },

  {
    id: "life-kdrama",
    title: "Life",
    year: 2018,
    episodes: 16,
    synopsis: "A new CEO from the parent holding company arrives at a major hospital with a mandate to make it profitable — directly clashing with idealistic emergency room doctors who believe medicine should serve patients, not shareholders.",
    genres: ["medical", "thriller", "drama"],
    themes: ["ethics", "profit-vs-care", "power", "justice", "institutional-corruption"],
    tropes: ["idealist-vs-pragmatist", "institutional-thriller", "whistleblower", "medical-ethics", "conspiracy"],
    tone: ["tense", "dark", "intense", "dramatic"],
    setting: ["modern", "hospital", "corporate"],
    characterTypes: ["idealistic-er-doctor", "calculating-ceo", "hospital-administration-villain", "whistleblower-doctor"],
    streaming: { viki: true },
    network: "JTBC",
    actors: [
      { name: "Lee Dong-wook", role: "Ye Jin-woo", isLead: true },
      { name: "Jo Seung-woo", role: "Gu Seung-hyo", isLead: true },
      { name: "Won Jin-ah", role: "Lee No-eul", isLead: false }
    ],
    matchReasoningHints: [
      "Corporate takeover of a hospital forcing doctors to choose between patient care and survival mirrors The Knick's tension between medicine and money, updated for the MBA era",
      "Jo Seung-woo's cold, brilliant CEO who may be villain or reformer mirrors Succession's Logan Roy — is he breaking the system or optimizing it?",
      "The hospital-as-battlefield-for-ideologies structure is pure ER's season 8 budget-cut storylines elevated to the show's central premise",
      "Lee Dong-wook plays the idealist who refuses to bend exactly the way Atticus Finch does — knowing he'll lose, staying anyway, curious if it matters",
      "For The Good Fight fans who want prestige institutional thriller energy in a medical setting — the moral ambiguity is just as unresolved and intentional"
    ],
  },

  {
    id: "high-school-king-of-savvy",
    title: "High School King of Savvy",
    year: 2014,
    episodes: 17,
    synopsis: "A high school hockey star agrees to impersonate his older brother at a company, accidentally excelling at both the ice rink and corporate life — until his cover nearly blows when a sharp-eyed manager starts connecting the dots.",
    genres: ["romance", "comedy", "drama"],
    themes: ["hidden-identity", "growing-up", "unexpected-responsibility", "age-gap", "first-love"],
    tropes: ["fake-identity", "fish-out-of-water", "underdog-succeeds", "age-gap", "comedic-disguise"],
    tone: ["comedic", "heartwarming", "lighthearted", "romantic"],
    setting: ["modern", "corporate", "school"],
    characterTypes: ["teenage-prodigy-pretending-to-be-adult", "sharp-observant-manager", "corporate-rivals", "loyal-teenage-friends"],
    streaming: { viki: true, amazon_prime: true },
    network: "tvN",
    actors: [
      { name: "Seo In-guk", role: "Lee Min-seok", isLead: true },
      { name: "Lee Ha-na", role: "Jung Soo-young", isLead: true },
      { name: "Lee Yeol-eum", role: "Im Ha-young", isLead: false }
    ],
    matchReasoningHints: [
      "A teenager impersonating an adult in a corporate setting is 13 Going on 30 from the boy's perspective — except he's actually competent, which makes it funnier",
      "The premise is pure Big (the Tom Hanks movie) — a young person in an adult's world succeeding through genuine enthusiasm rather than experience",
      "Seo In-guk's ability to be simultaneously teenage-stupid and surprisingly wise mirrors early Michael Scott in The Office — unaware of his own charm",
      "The sharp female manager slowly realizing her 'colleague' is actually a high schooler mirrors 10 Things I Hate About You's Kat when the truth lands — not angry, just impressed",
      "For Younger fans who love the fake-age premise — this is that show's Korean high school hockey cousin and it's just as delightfully absurd"
    ],
  },

  {
    id: "bring-it-on-ghost",
    title: "Bring It On, Ghost",
    year: 2016,
    episodes: 16,
    synopsis: "A college student who can see ghosts and a spirited ghost girl team up as a ghost-hunting duo — but as their banter turns into something warmer, a sinister mystery surrounding her forgotten past threatens both their existences.",
    genres: ["romance", "comedy", "fantasy", "supernatural"],
    themes: ["supernatural-coexistence", "memory", "past-trauma", "unexpected-love", "protection"],
    tropes: ["ghost-romance", "enemies-to-lovers", "supernatural-comedy", "mystery", "unresolved-past"],
    tone: ["comedic", "heartwarming", "tense", "romantic"],
    setting: ["modern", "urban", "supernatural", "school"],
    characterTypes: ["grumpy-ghost-seeing-hero", "cheerful-ghost-heroine", "ancient-villain", "supportive-friends"],
    streaming: { viki: true, amazon_prime: true },
    network: "tvN",
    actors: [
      { name: "OK Taecyeon", role: "Park Bong-pal", isLead: true },
      { name: "Kim So-hyun", role: "Yoo Myung", isLead: true },
      { name: "Kwon Yul", role: "Choi Cheon-sang", isLead: false }
    ],
    matchReasoningHints: [
      "A ghost-seeing grouch partnered with a cheerful ghost to fight supernatural threats is the Korean Ghost Whisperer meets Pushing Daisies — all the charm, some of the heartbreak",
      "The banter between the living boy who doesn't want to see ghosts and the dead girl who refuses to be ignored is exactly the energy of iZombie's Liv/Ravi dynamic",
      "Kim So-hyun's cheerful ghost learning that her forgotten past is the show's real mystery mirrors The Good Place's Eleanor slowly uncovering the truth",
      "A ghost detective duo where only one of them can physically interact with the world is the central mechanic of Ghost (the movie) made into a full comedy-thriller",
      "For Supernatural fans who want the monster-of-the-week format with genuine romantic tension between the lead pair instead of just brotherly codependence"
    ],
  },

  // ── CITY HALL / POLITICAL ROMANCE ─────────────────────────────────────────

  {
    id: "city-hall",
    title: "City Hall",
    year: 2009,
    episodes: 20,
    synopsis: "A cheerful, idealistic small-town civil servant with zero political ambitions gets swept up in a mayoral campaign when a charismatic, ruthlessly ambitious candidate uses her as a pawn — and both slowly fall for each other in ways that challenge everything they believe about power, duty, and who they're supposed to be.",
    genres: ["romance", "drama", "comedy"],
    themes: ["civic-duty", "ambition", "class-divide", "unexpected-love", "political-corruption"],
    tropes: ["enemies-to-lovers", "political-backdrop", "unlikely-heroine-succeeds", "boss-subordinate", "slow-burn"],
    tone: ["heartwarming", "comedic", "dramatic", "romantic"],
    setting: ["modern", "small-town", "political", "urban"],
    characterTypes: ["warm-idealistic-civil-servant", "cold-calculating-politician", "scheming-rivals", "loyal-small-town-ensemble"],
    streaming: { viki: true },
    network: "MBC",
    actors: [
      { name: "Cha Seung-won", role: "Jo Guk", isLead: true },
      { name: "Kim Sun-ah", role: "Shin Mi-rae", isLead: true },
      { name: "Choi Il-hwa", role: "Go Boo-nam", isLead: false }
    ],
    matchReasoningHints: [
      "An idealistic underdog in a corrupt political system who refuses to play the game is Leslie Knope from Parks and Recreation — optimism as a radical act",
      "Cha Seung-won's cold political operator melting for the one person he can't manipulate mirrors Frank Underwood if he'd fallen genuinely in love with Claire before the ambition ate him",
      "Small-town politics filled with absurd bureaucracy and earnest civic passion is the Korean version of Veep but with actual warmth underneath the satire",
      "A woman who wasn't supposed to matter becoming the moral center of everyone around her is the slow-burn structural DNA of The West Wing's C.J. Cregg arc",
      "For Madam Secretary fans who want the political drama but with the romantic tension dialed up to eleven and a heroine whose superpower is pure sincerity"
    ],
  },

  // ── ACTION THRILLER ───────────────────────────────────────────────────────

  {
    id: "time-between-dog-and-wolf",
    title: "Time Between Dog and Wolf",
    year: 2007,
    episodes: 16,
    synopsis: "A customs officer goes deep undercover in a drug syndicate to avenge his mother's murder — but a traumatic injury erases his memories and leaves him genuinely believing he is the criminal he was pretending to be, with the woman who loves him as the only thread connecting both identities.",
    genres: ["thriller", "action", "romance", "drama"],
    themes: ["dual-identity", "vengeance", "memory-loss", "undercover", "sacrifice"],
    tropes: ["amnesia", "hidden-identity", "undercover-romance", "action-thriller", "tragic-fate"],
    tone: ["intense", "dark", "romantic", "dramatic"],
    setting: ["modern", "criminal-underworld", "southeast-asia", "urban"],
    characterTypes: ["undercover-agent-losing-himself", "devoted-heroine-waiting", "drug-syndicate-villain", "conflicted-double-agent"],
    streaming: { viki: true },
    network: "MBC",
    actors: [
      { name: "Lee Jun-ki", role: "Lee Soo-hyun / Kim Jong-min", isLead: true },
      { name: "Nam Sang-mi", role: "Seo Ji-woo", isLead: true },
      { name: "Jung Kyung-ho", role: "Baek San", isLead: false }
    ],
    matchReasoningHints: [
      "A man who goes undercover so deep he forgets who he actually is mirrors the central tragedy of The Americans' Philip Jennings — except here the identity erasure is literal",
      "Lee Jun-ki playing two versions of the same character — good cop and genuine criminal — is the dual-performance challenge that makes Breaking Bad's Walter White transformation so compelling",
      "The title refers to dusk: the ambiguous hour when you can't tell whether the creature approaching is a domestic dog or a wild wolf — the show's entire thesis in one image",
      "A woman who must love a man whose face is the same but whose soul has been replaced is the haunting premise of Eternal Sunshine of the Spotless Mind played as an action thriller",
      "For Alias fans who love when the spy mission becomes a question of self — Sydney Bristow's identity fractures here become a literal amnesia that erases the line between mission and man"
    ],
  },

  // ── ROMCOM / FOOD ─────────────────────────────────────────────────────────

  {
    id: "flower-boy-ramen-shop",
    title: "Flower Boy Ramen Shop",
    year: 2011,
    episodes: 16,
    synopsis: "A fiercely independent graduate student teacher-trainee suddenly inherits her late father's ramen shop — and finds herself in a deliciously complicated situation when her gorgeous, infuriating new neighbor turns out to be a student in her class.",
    genres: ["romance", "comedy", "drama"],
    themes: ["taboo-romance", "unexpected-family", "food", "independence", "identity"],
    tropes: ["forbidden-romance", "nosy-neighbor", "age-gap", "comedic-chaos", "fish-out-of-water"],
    tone: ["comedic", "heartwarming", "lighthearted", "romantic"],
    setting: ["modern", "urban", "culinary", "school"],
    characterTypes: ["fiery-independent-heroine", "gorgeous-troublemaker-younger-man", "eccentric-regular-customers", "chaotic-found-family"],
    streaming: { viki: true, netflix: true },
    network: "tvN",
    actors: [
      { name: "Jung Il-woo", role: "Choi Han-kyul", isLead: true },
      { name: "Lee Chung-ah", role: "Eun Bi", isLead: true },
      { name: "Lee Ki-woo", role: "Kang Dong-joo", isLead: false }
    ],
    matchReasoningHints: [
      "A woman trying to maintain professional authority while chaos enters her life via one ridiculously beautiful person is the structural DNA of every beloved workplace romcom from New Girl to Schitt's Creek",
      "The ramen shop as found-family gathering place mirrors the bar in Cheers — a small chaotic space where everyone's personal crisis becomes communal entertainment",
      "Jung Il-woo playing a man who weaponizes his beauty but is genuinely undone by one woman's complete indifference is the K-drama equivalent of Tom Hardy's early rom-com challenge",
      "An age-gap romance where the older woman refuses to be charmed while clearly losing the battle is the same delicious tension as Younger but with better noodles",
      "For Food Network fans who believe great cooking shows are really love stories — this show understands that a perfect bowl of ramen and a perfect first kiss have identical emotional architecture"
    ],
  },

  // ── ROMANCE / EMOTIONAL DRAMA ─────────────────────────────────────────────

  {
    id: "i-need-romance-3",
    title: "I Need Romance 3",
    year: 2014,
    episodes: 16,
    synopsis: "A polished, emotionally armored TV shopping host who hasn't cried in fifteen years suddenly has her walls demolished when her childhood best friend — the boy she once adored and then completely forgot — reappears in her adult life determined to make her feel things again.",
    genres: ["romance", "drama", "comedy"],
    themes: ["emotional-repression", "childhood-friends", "self-discovery", "adult-relationships", "healing"],
    tropes: ["childhood-friends-to-lovers", "reconnection", "cold-female-lead", "emotional-journey", "noona-romance"],
    tone: ["heartwarming", "emotional", "comedic", "romantic"],
    setting: ["modern", "urban", "media-industry", "domestic"],
    characterTypes: ["emotionally-repressed-successful-woman", "warm-persistent-childhood-love", "chaotic-roommates", "self-aware-narrator"],
    streaming: { viki: true },
    network: "tvN",
    actors: [
      { name: "Kim So-yeon", role: "Shin Joo-yeon", isLead: true },
      { name: "Sung Joon", role: "Joo Wan", isLead: true },
      { name: "Wang Ji-won", role: "Oh Se-ryung", isLead: false }
    ],
    matchReasoningHints: [
      "A woman who has successfully switched off her own emotions being patiently dismantled by someone who simply refuses to accept her locked door is the emotional architecture of Normal People's Marianne arc",
      "The childhood best friend who grew up to be the adult you needed mirrors the core fantasy of Dawson's Creek's Pacey/Joey slow burn — the person who always saw you before you knew yourself",
      "Kim So-yeon narrating her own emotional unavailability with forensic precision while slowly drowning in feelings is Fleabag's confessional style two years before Fleabag existed",
      "The Korean workplace-drama-as-adult-coming-of-age is at its sharpest here — Joo-yeon's arc of learning to cry again is the emotional journey Mad Men's Don Draper never completed",
      "For Sex Education fans who love when emotionally stunted adults finally do the work — this show understands that learning to feel things at 30 is braver than never shutting down at all"
    ],
  },

  // ── SNOWDROP / POLITICAL THRILLER ─────────────────────────────────────────

  {
    id: "snowdrop-kdrama",
    title: "Snowdrop",
    year: 2021,
    episodes: 16,
    synopsis: "In 1987 Seoul, during Korea's democracy movement, a wounded man covered in blood stumbles into a women's dormitory — and the student who hides him begins falling for him as both discover the truth of who he really is threatens everything.",
    genres: ["romance", "thriller", "historical", "political"],
    themes: ["1980s-democracy-movement", "forbidden-love", "espionage", "sacrifice", "identity"],
    tropes: ["hidden-identity", "forbidden-romance", "historical-thriller", "spy", "tragic-fate"],
    tone: ["intense", "romantic", "dark", "dramatic"],
    setting: ["1987-seoul", "university", "political", "espionage"],
    characterTypes: ["wounded-spy-with-hidden-agenda", "idealistic-student-heroine", "undercover-agents", "democracy-movement-students"],
    streaming: { disney_plus: true },
    network: "JTBC",
    actors: [
      { name: "Jung Hae-in", role: "Im Su-ho", isLead: true },
      { name: "Jisoo (Kim Ji-soo)", role: "Eun Young-ro", isLead: true },
      { name: "Yoo In-na", role: "Pi Seung-hee", isLead: false }
    ],
    matchReasoningHints: [
      "A wounded stranger hiding in a dormitory during a political uprising while a student falls for him is the emotional DNA of The Americans' Elizabeth/Philip — love inside impossible circumstances",
      "1987 Korea's democracy movement as a backdrop makes every romantic scene carry the weight of real history, the same way Homeland used post-9/11 anxiety",
      "Jung Hae-in's character whose true identity is more complicated than the heroine understands mirrors the 'who is he really' tension of The Spy Who Came in from the Cold",
      "A love story between two people on opposite sides of a historical conflict is Anna Karenina's fatal pull updated to Cold War-adjacent Korean student activism",
      "For The Americans fans who want Cold War espionage with genuine romantic stakes — this is that show's Korean equivalent set in a crucial historical moment"
    ],
  },

  // ── ROOFTOP PRINCE ── (already written above)

  {
    id: "backstreet-rookie",
    title: "Backstreet Rookie",
    year: 2020,
    episodes: 16,
    synopsis: "A convenience store district manager's life is upended when a woman he briefly met years ago shows up as his new employee — bringing chaos, honesty, and an inconvenient attraction he tries very hard to be professional about.",
    genres: ["romance", "comedy", "drama"],
    themes: ["workplace-romance", "first-impressions", "class-divide", "family", "growing-up"],
    tropes: ["boss-employee-romance", "enemies-to-lovers", "reconnection", "slice-of-life", "comedic-situations"],
    tone: ["comedic", "heartwarming", "lighthearted", "romantic"],
    setting: ["modern", "urban", "convenience-store", "workplace"],
    characterTypes: ["strict-district-manager", "free-spirited-employee", "workplace-ensemble", "family-comedic-relief"],
    streaming: { viki: true, netflix: true },
    network: "SBS",
    actors: [
      { name: "Ji Chang-wook", role: "Choi Dae-hyun", isLead: true },
      { name: "Kim Yoo-jung", role: "Saet-byul", isLead: true },
      { name: "Han Sun-hwa", role: "Yoo Yeon-joo", isLead: false }
    ],
    matchReasoningHints: [
      "A by-the-book manager undone by a chaotic employee who doesn't follow rules but somehow always gets results is the premise of every great workplace comedy, from Parks and Rec to Brooklyn Nine-Nine",
      "Ji Chang-wook playing someone desperately trying to stay professional while clearly losing the battle mirrors Jim Halpert's years of visible suffering in The Office",
      "The convenience store setting turns everyday transactions into a window on neighborhood life exactly the way Cheers used a bar — everyone has a story, everyone comes back",
      "Kim Yoo-jung's Saet-byul is the whirlwind female lead archetype at her most charming — the same energy as Jennifer Aniston in early Friends, all warmth and forward momentum",
      "For Schitt's Creek fans who love watching a somewhat-uptight person learn to let loose around someone who never learned to be tight in the first place"
    ],
  },

  // ── CLASSIC HALLYU ROMANCE ────────────────────────────────────────────────

  {
    id: "lovers-in-paris",
    title: "Lovers in Paris",
    year: 2004,
    episodes: 20,
    synopsis: "A warm-hearted, clumsy Korean woman working in Paris on a shoe-string scholarship falls for a cold, impossibly handsome heir — but their love must survive class warfare, family obligations, and a rival who has a prior claim on his heart.",
    genres: ["romance", "drama"],
    themes: ["class-divide", "overseas-romance", "sacrifice", "family-obligation", "first-love"],
    tropes: ["cinderella-story", "cold-male-lead-with-hidden-warmth", "rich-vs-poor", "international-romance", "rival-love-triangle"],
    tone: ["romantic", "dramatic", "heartwarming", "emotional"],
    setting: ["2000s-paris", "modern", "urban", "international"],
    characterTypes: ["warm-clumsy-heroine", "cold-charismatic-heir", "polished-female-rival", "chaebol-family"],
    streaming: { viki: true },
    network: "SBS",
    actors: [
      { name: "Park Shin-yang", role: "Han Ki-joo", isLead: true },
      { name: "Kim Jung-eun", role: "Tak Gye-hyun", isLead: true },
      { name: "Lee Dong-gun", role: "Oh Dal-gun", isLead: false }
    ],
    matchReasoningHints: [
      "The original hallyu wave romance that proved Korean dramas could go global — Audrey Hepburn in Paris energy but with a female lead who trips over cobblestones and somehow charms everyone anyway",
      "A warm, ordinary woman winning the heart of a man everyone else says is out of her league is the Cinderella fantasy that predates most of the tropes it inspired — the source code of K-drama rom-com DNA",
      "Paris as the setting that removes both characters from their social context — allowing an impossible connection to form before reality reasserts itself — is the same structural trick as Before Sunrise",
      "Park Shin-yang's cold exterior slowly warming under genuine affection rather than strategic pursuit is the Mr. Darcy arc before Korean drama had processed Pride and Prejudice",
      "For Notting Hill fans who believe love across impossible class lines is the most emotionally honest fantasy — this show set the template that a hundred K-dramas would spend the next decade refining"
    ],
  },
];
