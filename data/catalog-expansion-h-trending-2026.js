/**
 * Catalog Expansion H — Trending 2026 Releases (Jan–Apr)
 * 21 titles across K-dramas, C-dramas, Western shows, and anime.
 * All titles verified NOT present in 2,015-title catalog as of 2026-04-22.
 *
 * Covers: Still Shining, If Wishes Could Kill, The Practical Guide to Love,
 * We Are All Trying Here, No Tail to Tell, The WONDERfools, The Scarecrow,
 * Love between Lines, How Dare You!?, Love Story in the 1970s, Unveil: Jadewind,
 * No Pain No Gain, Love beyond the Grave, A Knight of the Seven Kingdoms,
 * The Beauty, How to Get to Heaven From Belfast, Wonder Man, Beef S2,
 * Margo's Got Money Troubles, Half Man, Witch Hat Atelier.
 */

const newKdramas = [

  // ─── 1. Still Shining (JTBC/Netflix, Mar 2026) ────────────────────────────
  {
    id: 'still-shining',
    title: 'Still Shining',
    year: 2026,
    episodes: 16,
    synopsis: "Two people who fell in love as teenagers were forced apart by circumstances neither chose. A decade later, in their thirties, they cross paths again — both carrying the weight of the life that happened in between and the question of whether the feelings they once had are still there or just the memory of feelings. Still Shining earns its second-chance romance by letting the intervening years be real: these aren't the same people, and the show is honest about whether that's a problem or the point.",
    genres: ['romance', 'drama'],
    themes: ['second-chances', 'first-love', 'growing-up', 'regret', 'healing', 'identity'],
    tropes: ['second-chance-romance', 'childhood-sweethearts', 'time-skip', 'slow-burn', 'will-they-wont-they'],
    tone: ['bittersweet', 'warm', 'nostalgic', 'romantic', 'grounded'],
    setting: ['modern-Seoul', 'urban', 'workplace'],
    characterTypes: ['mature-female-lead', 'emotionally-guarded-male-lead', 'old-friends'],
    streaming: { netflix: true },
    network: 'JTBC',
    actors: [],
    matchReasoningHints: [
      "Normal People fans of shows where two people who are clearly right for each other keep missing the timing — Still Shining runs on the same ache of proximity without connection, except the gap is a full decade",
      "Something in the Rain fans who loved the quiet intensity of reuniting with someone who once knew you better than anyone and discovering how much you've both changed",
      "One Spring Night fans of K-dramas where the romance is built on long pauses and unfinished sentences rather than dramatic declarations — the restraint is the whole point",
      "Conversations with Friends fans of stories about adults who have to figure out whether their feelings for someone are about the actual person or about who they were when they last felt this way",
      "Begin Again (C-drama) fans of Asian dramas about reconnection that treat the passage of time as a real character in the story rather than a plot device to skip past"
    ]
  },

  // ─── 2. If Wishes Could Kill (Netflix, Apr 2026) ──────────────────────────
  {
    id: 'if-wishes-could-kill',
    title: 'If Wishes Could Kill',
    year: 2026,
    episodes: 8,
    synopsis: "A group of high schoolers discover they are cursed to die after using GIRIGO, a mysterious wish-granting app that appeared on their phones overnight. Each student made a wish — popularity, revenge, love, money — and each wish was granted with surgical precision. Now the app is collecting. As they race to understand the rules and undo the curse before time runs out, they discover that GIRIGO's origins are tied to their school's darkest secret, and the person who built it is closer than any of them realize.",
    genres: ['horror', 'thriller', 'mystery', 'drama'],
    themes: ['consequences', 'desire', 'technology', 'mortality', 'secrets', 'teen-pressure'],
    tropes: ['cursed-object', 'countdown', 'ensemble-mystery', 'be-careful-what-you-wish-for', 'final-girl'],
    tone: ['suspenseful', 'dark', 'twisty', 'atmospheric', 'intense'],
    setting: ['modern-Seoul', 'high-school', 'digital-world'],
    characterTypes: ['resourceful-teen-leads', 'mysterious-antagonist', 'morally-complex-teens'],
    streaming: { netflix: true },
    network: 'Netflix',
    actors: [],
    matchReasoningHints: [
      "Alice in Borderland fans of death-game premises where the rules seem arbitrary until you realize they're perfectly calibrated to force moral choices — GIRIGO operates on the same logic, except the game came to them",
      "All of Us Are Dead fans of Korean high school horror that uses the genre to interrogate what teenagers are actually afraid of beneath the monsters — in this case, the monster is their own desires granted without cost",
      "Black Mirror fans of technology horror where the premise starts with something seductive and convenient and the show methodically demonstrates why convenience was the trap",
      "Sweet Home fans of K-dramas where a group of people trapped in an impossible situation must decide who to trust and who to sacrifice — If Wishes Could Kill runs the same calculus in a school building",
      "Death Note fans of stories where a supernatural mechanism grants power with hidden rules, and the protagonist's intelligence is the only weapon against a system designed to be unbeatable"
    ]
  },

  // ─── 3. The Practical Guide to Love (Viki, Mar 2026) ──────────────────────
  {
    id: 'the-practical-guide-to-love',
    title: 'The Practical Guide to Love',
    year: 2026,
    episodes: 16,
    synopsis: "A relationship researcher who studies love scientifically — attachment theory, neurochemistry, behavioral patterns — has built a career explaining why people fall in love and an equally impressive track record of failing at it herself. When she's paired with a spontaneous, emotionally intuitive man for a research study she's conducting, the experiment becomes the relationship and the relationship becomes the experiment, and she can't tell which set of data she trusts less: the spreadsheet or her heart.",
    genres: ['romance', 'comedy', 'drama'],
    themes: ['love', 'vulnerability', 'science-vs-feeling', 'self-discovery', 'trust'],
    tropes: ['opposites-attract', 'researcher-falls-for-subject', 'slow-burn', 'rom-com', 'career-woman'],
    tone: ['warm', 'witty', 'romantic', 'charming', 'smart'],
    setting: ['modern-Seoul', 'university', 'research-lab'],
    characterTypes: ['analytical-female-lead', 'emotionally-open-male-lead', 'academic-ensemble'],
    streaming: { viki: true },
    network: 'tvN',
    actors: [],
    matchReasoningHints: [
      "Weightlifting Fairy Kim Bok-joo fans of K-drama romcoms where the leads are both exceptionally good at what they do and exceptionally bad at recognizing they're in love — The Practical Guide to Love plays the same gap between expertise and self-awareness",
      "Because This Is My First Life fans of shows where the arrangement starts as a practical solution and becomes something neither person can categorize with the frameworks they entered with",
      "Fleabag fans of stories about a woman who is very smart about everyone else's emotional life and catastrophically blind about her own — the humor comes from the gap between insight and application",
      "Put Your Head on My Shoulder (C-drama) fans of Asian romcoms where the intellectual character and the intuitive character teach each other something neither could learn alone",
      "The Big Bang Theory fans who wished the show had leaned harder into the actual tension between scientific thinking and emotional intelligence instead of playing it for easy laughs"
    ]
  },

  // ─── 4. We Are All Trying Here (Netflix, Apr 2026) ────────────────────────
  {
    id: 'we-are-all-trying-here',
    title: 'We Are All Trying Here',
    year: 2026,
    episodes: 12,
    synopsis: "A man in his early thirties watches everyone around him appear to succeed — promotions, engagements, homeownership — while his own life seems to be running a different algorithm entirely. The show follows his attempts to manage jealousy, loneliness, and the particular modern pressure of curating a life that looks like progress when progress feels like something that happens to other people. With Koo Kyo-hwan and Go Youn-jung anchoring a story that refuses to treat mental health as a plot twist.",
    genres: ['drama', 'slice-of-life'],
    themes: ['mental-health', 'loneliness', 'comparison', 'self-worth', 'modern-life', 'jealousy'],
    tropes: ['quarter-life-crisis', 'slice-of-life', 'internal-journey', 'found-family', 'unreliable-self-image'],
    tone: ['introspective', 'honest', 'melancholic', 'warm', 'grounded'],
    setting: ['modern-Seoul', 'urban', 'workplace', 'apartment'],
    characterTypes: ['struggling-everyman', 'ambitious-friend', 'understanding-love-interest'],
    streaming: { netflix: true },
    network: 'Netflix',
    actors: [
      { name: 'Koo Kyo-hwan', role: 'Lead', isLead: true },
      { name: 'Go Youn-jung', role: 'Lead', isLead: true }
    ],
    matchReasoningHints: [
      "My Mister fans of K-dramas that sit with the weight of being alive when being alive isn't going well — We Are All Trying Here has the same willingness to portray unhappiness without rushing to fix it",
      "My Liberation Notes fans of shows about people in their twenties and thirties who feel stuck in lives that are technically fine and spiritually insufficient",
      "Beef (Netflix) fans of stories about the gap between how someone presents their life and how they actually experience it — the comedy of performance and the tragedy of believing everyone else's performance is real",
      "Misaeng fans of Korean workplace dramas where the job isn't the point — the job is the lens through which the show examines what it means to feel like you're falling behind in a race you never agreed to run",
      "Normal People fans of stories about the interior experience of people who look fine from the outside and are quietly drowning — the show treats this as drama rather than pathology"
    ]
  },

  // ─── 5. No Tail to Tell (Netflix, Jan 2026) ───────────────────────────────
  {
    id: 'no-tail-to-tell',
    title: 'No Tail to Tell',
    year: 2026,
    episodes: 16,
    synopsis: "A woman harboring an extraordinary secret she cannot reveal navigates the minefield of modern relationships, workplace politics, and family expectations while hiding who — or what — she truly is. Equal parts romantic comedy and identity drama, the show uses its fantasy premise to ask a deceptively simple question: how do you let someone love you when you can't tell them what you are?",
    genres: ['romance', 'comedy', 'fantasy', 'drama'],
    themes: ['identity', 'secrets', 'acceptance', 'love', 'belonging', 'self-discovery'],
    tropes: ['hidden-identity', 'supernatural-romance', 'fish-out-of-water', 'romantic-comedy', 'secret-life'],
    tone: ['charming', 'funny', 'warm', 'bittersweet', 'whimsical'],
    setting: ['modern-Seoul', 'urban', 'workplace'],
    characterTypes: ['secret-keeping-heroine', 'earnest-male-lead', 'suspicious-friend'],
    streaming: { netflix: true },
    network: 'Netflix',
    actors: [],
    matchReasoningHints: [
      "My Roommate Is a Gumiho fans of K-dramas where a supernatural being tries to pass as human in a romantic comedy framework — the humor comes from the near-misses and the heart comes from the question of whether love survives the truth",
      "My Love from the Star fans of fantasy romance where the secret identity is both the obstacle to intimacy and the reason the character is so compelling",
      "The Good Place fans of stories where a character hiding their true nature discovers that the performance of being 'normal' teaches them something real about what they actually want",
      "Tale of the Nine Tailed fans of Korean supernatural romance that takes its mythology seriously while keeping the romantic comedy engine running",
      "Love between Fairy and Devil (C-drama) fans of Asian fantasy romance where the leads are from different worlds and the central tension is whether love can survive the truth of what separates them"
    ]
  },

  // ─── 6. The WONDERfools (Netflix, 2026) ───────────────────────────────────
  {
    id: 'the-wonderfools',
    title: 'The WONDERfools',
    year: 2026,
    episodes: 12,
    synopsis: "An ensemble comedy about a group of people connected by circumstance rather than choice — coworkers, neighbors, ex-lovers — who keep colliding in ways that force them to confront the gap between who they think they are and who everyone else sees. Sharp writing, overlapping storylines, and the kind of ensemble chemistry that makes you care about every character's subplot equally.",
    genres: ['comedy', 'drama'],
    themes: ['self-perception', 'community', 'connection', 'identity', 'modern-life'],
    tropes: ['ensemble-comedy', 'interconnected-stories', 'workplace-comedy', 'neighbors', 'found-family'],
    tone: ['witty', 'warm', 'irreverent', 'observant', 'charming'],
    setting: ['modern-Seoul', 'urban', 'workplace', 'neighborhood'],
    characterTypes: ['quirky-ensemble', 'lovable-mess', 'overachiever', 'reluctant-friend'],
    streaming: { netflix: true },
    network: 'Netflix',
    actors: [],
    matchReasoningHints: [
      "New Girl fans of ensemble comedies where the humor comes from how well the show knows each character — The WONDERfools builds the same texture of people who are ridiculous individually and indispensable together",
      "Be Melodramatic fans of Korean ensemble comedies that balance genuine emotion with sharp observational humor about the absurdity of adult life",
      "Schitt's Creek fans of comedies where the characters start as types and end as people you'd actually want to know — the transformation is so gradual you don't notice it happening",
      "Work Later, Drink Now fans of K-dramas about groups of adults whose friendships are the real love stories of the show",
      "Abbott Elementary fans of workplace comedies where the humor is character-driven and the show genuinely likes every person in its ensemble"
    ]
  },

  // ─── 7. The Scarecrow (tvN/Viki, Apr 2026) ────────────────────────────────
  {
    id: 'the-scarecrow-kdrama',
    title: 'The Scarecrow',
    year: 2026,
    episodes: 16,
    synopsis: "In a small rural town where everyone knows everyone, a mysterious newcomer arrives and takes up residence in a farmhouse that has been empty for years. The town's quiet rhythms begin to shift as the newcomer's past catches up, and a local woman with her own reasons for staying in a place this small finds herself drawn into a mystery that threatens to upend the careful peace the community has built. A slow-burn romance wrapped in a rural mystery.",
    genres: ['romance', 'mystery', 'drama'],
    themes: ['secrets', 'small-town-life', 'healing', 'trust', 'community', 'past-trauma'],
    tropes: ['mysterious-stranger', 'small-town-romance', 'slow-burn', 'dark-past', 'protective-community'],
    tone: ['atmospheric', 'slow-burn', 'mysterious', 'warm', 'moody'],
    setting: ['rural-Korea', 'small-town', 'farmland', 'countryside'],
    characterTypes: ['mysterious-newcomer', 'determined-local-woman', 'protective-townspeople'],
    streaming: { viki: true },
    network: 'tvN',
    actors: [],
    matchReasoningHints: [
      "When the Camellia Blooms fans of K-dramas set in small towns where the romance and the mystery are inseparable — the community is both the obstacle and the safety net",
      "Virgin River fans of stories about someone starting over in a rural community where everyone has an opinion about the newcomer and the newcomer has secrets worth protecting",
      "Hometown Cha-Cha-Cha fans who want the same small-town atmosphere but with a darker mystery thread running underneath the warmth",
      "Broadchurch fans of stories where a community's peace is disrupted by an outsider's arrival and the investigation reveals that the insiders had secrets too",
      "Like Flowers in Sand fans of Korean rural romance that uses the landscape as emotional architecture — the openness of the countryside mirrors the vulnerability the characters resist"
    ]
  }
];

const newCdramas = [

  // ─── 8. Love between Lines (2026) ─────────────────────────────────────────
  {
    id: 'love-between-lines',
    title: 'Love between Lines',
    nativeTitle: '雅希',
    year: 2026,
    episodes: 28,
    synopsis: "Xiao Zhi Yu and Hu Xiu meet during a murder mystery game set in Republic of China-era scenarios. Playing fake identities and acting out fictional plots, they grow genuinely curious about each other behind the roles. As the games become more elaborate and the line between performance and reality blurs, their attraction shifts from the characters they're playing to the people they actually are — which turns out to be more complicated and more interesting than any script.",
    genres: ['romance', 'mystery', 'drama'],
    themes: ['identity', 'performance', 'reality-vs-fiction', 'attraction', 'self-discovery'],
    tropes: ['roleplay-to-romance', 'mystery-game', 'slow-burn', 'intellectual-match', 'hidden-feelings'],
    tone: ['clever', 'romantic', 'atmospheric', 'playful', 'intriguing'],
    setting: ['modern-China', 'mystery-game-venues', 'urban', 'republic-era-sets'],
    characterTypes: ['perceptive-female-lead', 'enigmatic-male-lead', 'game-ensemble'],
    streaming: { viki: true },
    countryOfOrigin: 'China',
    actors: [],
    matchReasoningHints: [
      "Liar Game (K-drama) fans of stories where the game mechanics force genuine human connection because you can't strategize your way out of actually caring about someone",
      "Love O2O fans of C-dramas where two people connect through a shared fictional world and the question becomes whether the connection survives in the real one",
      "Extraordinary Attorney Woo fans of dramas about exceptionally perceptive people who understand systems better than they understand their own feelings",
      "Alice in Borderland fans of premise-driven stories where the games are metaphors for the relationships — Love between Lines runs the same structure but substitutes romance for survival",
      "The Liar and His Lover (K-drama) fans of stories where performance and authenticity are in constant tension and the romance depends on choosing truth over comfort"
    ]
  },

  // ─── 9. How Dare You!? (2026) ─────────────────────────────────────────────
  {
    id: 'how-dare-you-cdrama',
    title: 'How Dare You!?',
    nativeTitle: '离谱',
    year: 2026,
    episodes: 32,
    synopsis: "Workplace rookie Wang Cui Hua finds herself transmigrated into the world of a novel, where she crosses paths with Zhang San — another transmigrator, this time a hidden king biding his time. Both are trying to survive in a fictional world with real consequences, and neither knows the other is also from outside the story. A comedy that uses the isekai premise not just for fish-out-of-water humor but for a genuine meditation on what happens when two people who know the script refuse to follow it.",
    genres: ['comedy', 'fantasy', 'romance', 'drama'],
    themes: ['isekai', 'identity', 'free-will', 'collaboration', 'breaking-the-script'],
    tropes: ['transmigration', 'hidden-identity', 'double-transmigrators', 'comedy-of-errors', 'reluctant-allies'],
    tone: ['hilarious', 'clever', 'warm', 'irreverent', 'inventive'],
    setting: ['ancient-China-fictional', 'royal-court', 'novel-world'],
    characterTypes: ['bewildered-modern-woman', 'scheming-hidden-king', 'oblivious-novel-characters'],
    streaming: { viki: true },
    countryOfOrigin: 'China',
    actors: [],
    matchReasoningHints: [
      "Extraordinary You (K-drama) fans of stories about characters who discover they're inside a fictional narrative and decide to rewrite their own story — How Dare You!? doubles the premise by having TWO characters who know",
      "Alchemy of Souls fans of Asian fantasy comedies where the humor comes from a character trying to navigate a world with rules they didn't agree to",
      "The Romance of Tiger and Rose fans of C-drama transmigration comedies that are smart about the genre conventions they're spoofing while also being genuinely entertaining",
      "Mr. Queen (K-drama) fans of transmigration comedies where a modern person trapped in a historical body generates chaos by applying contemporary thinking to ancient problems",
      "Re:Zero fans of isekai stories that use the premise to explore what happens when someone who knows the plot tries to change it and discovers the plot knows too"
    ]
  },

  // ─── 10. Love Story in the 1970s (2026) ───────────────────────────────────
  {
    id: 'love-story-in-the-1970s',
    title: 'Love Story in the 1970s',
    nativeTitle: '七零年代的爱情故事',
    year: 2026,
    episodes: 29,
    synopsis: "In the 1970s, Fei Ni works in a hat factory and dreams of college — the one route out of a life already scripted for her. Her junior high classmate Fang Mu reappears as the factory's new technician, carrying his own ambitions and a quiet certainty about Fei Ni that she finds both flattering and inconvenient. Set against a China in transition, the show captures the specific optimism of people who believe education can change everything, and the specific romance of two people whose ambitions run parallel rather than intersecting.",
    genres: ['romance', 'drama', 'period'],
    themes: ['ambition', 'education', 'class-mobility', 'first-love', 'social-change', 'perseverance'],
    tropes: ['childhood-friends-to-lovers', 'period-romance', 'ambitious-female-lead', 'patient-male-lead', 'workplace-romance'],
    tone: ['nostalgic', 'warm', 'hopeful', 'bittersweet', 'grounded'],
    setting: ['1970s-China', 'factory', 'rural-town', 'college'],
    characterTypes: ['determined-working-woman', 'steady-patient-man', 'factory-ensemble'],
    streaming: { viki: true },
    countryOfOrigin: 'China',
    actors: [],
    matchReasoningHints: [
      "Reply 1988 (K-drama) fans of period romance dramas set in a specific era that becomes a character — Love Story in the 1970s captures the texture of Chinese life in transition the way Reply captures 1988 Seoul",
      "A Lifelong Journey fans of Chinese period dramas that follow characters through decades of change and treat the historical context as inseparable from the love story",
      "When the Camellia Blooms fans of stories about women who refuse to accept the life that's been laid out for them, set in a community that has opinions about that refusal",
      "Normal People fans of romances where education is the line between the life you have and the life you want, and two people on the same side of that line find each other",
      "Mr. Sunshine fans of Asian historical romance where the personal love story is embedded in a larger story about a country changing around the characters"
    ]
  },

  // ─── 11. Unveil: Jadewind (2026) ──────────────────────────────────────────
  {
    id: 'unveil-jadewind',
    title: 'Unveil: Jadewind',
    nativeTitle: '唐宫奇案',
    year: 2026,
    episodes: 34,
    synopsis: "During the Lantern Festival, Princess Ning Yuan dies mysteriously at the night banquet. Li Pei Yi, Princess of Fuchang County, and Xiao Huai Jin, deputy director of the Astronomical Bureau, are ordered to investigate. What begins as a court murder mystery expands into a conspiracy that reaches every corner of the Tang Dynasty palace — and the two investigators discover that solving the case requires trusting each other with secrets that could destroy them both.",
    genres: ['mystery', 'historical', 'romance', 'thriller'],
    themes: ['investigation', 'court-politics', 'trust', 'conspiracy', 'justice', 'forbidden-knowledge'],
    tropes: ['detective-duo', 'palace-mystery', 'slow-burn-romance', 'court-intrigue', 'reluctant-partners'],
    tone: ['suspenseful', 'elegant', 'intellectual', 'romantic', 'atmospheric'],
    setting: ['tang-dynasty', 'imperial-palace', 'ancient-China', 'court'],
    characterTypes: ['clever-princess-detective', 'scholarly-male-lead', 'scheming-court'],
    streaming: { viki: true },
    countryOfOrigin: 'China',
    actors: [
      { name: 'Bai Lu', role: 'Li Pei Yi', isLead: true },
      { name: 'Wang Xing Yue', role: 'Xiao Huai Jin', isLead: true }
    ],
    matchReasoningHints: [
      "Under the Queen's Umbrella (K-drama) fans of historical dramas where a woman navigates palace politics with intelligence as her primary weapon — Li Pei Yi operates in the same space of strategic competence",
      "Nirvana in Fire fans of Chinese historical dramas where the investigation is the surface layer and the real story is about political architecture and the cost of loyalty",
      "Flower of Evil (K-drama) fans of mystery-romance hybrids where the two leads must investigate together while hiding truths from each other",
      "Story of Minglan fans of Chinese historical dramas with a female lead who is smarter than everyone expects and uses that underestimation strategically",
      "Sherlock fans of detective stories where the pleasure is watching two brilliant people think in complementary ways — Li Pei Yi reads people while Xiao Huai Jin reads evidence"
    ]
  },

  // ─── 12. No Pain No Gain (2026) ───────────────────────────────────────────
  {
    id: 'no-pain-no-gain-cdrama',
    title: 'No Pain No Gain',
    nativeTitle: '年少有为',
    year: 2026,
    episodes: 26,
    synopsis: "Pei Qian receives a mysterious invitation to start a company with one condition: he must lose money. Every business decision must aim for failure, every investment must go wrong, every product must flop. The catch is that everything he touches inexplicably succeeds. The harder he tries to fail, the more money he makes, and the more his unwitting employees worship him as a visionary. A satire of startup culture wrapped in an absurdist comedy that asks: what if the best boss is someone who genuinely doesn't want to succeed?",
    genres: ['comedy', 'drama', 'satire'],
    themes: ['capitalism', 'success', 'irony', 'leadership', 'absurdity', 'accidental-genius'],
    tropes: ['reverse-psychology', 'accidental-hero', 'comedy-of-errors', 'workplace-comedy', 'golden-touch'],
    tone: ['hilarious', 'satirical', 'absurdist', 'clever', 'warm'],
    setting: ['modern-China', 'startup-office', 'tech-industry', 'urban'],
    characterTypes: ['reluctant-genius-boss', 'devoted-employees', 'bewildered-investors'],
    streaming: { viki: true },
    countryOfOrigin: 'China',
    actors: [],
    matchReasoningHints: [
      "Start-Up (K-drama) fans who wished the startup dynamics had leaned harder into comedy — No Pain No Gain is the version where the founder is actively sabotaging his own company and failing at failure",
      "Pegasus Market (K-drama) fans of workplace comedies where the boss operates by rules no one else understands and everything works out for reasons that make no logical sense",
      "Silicon Valley fans of tech-industry satire where the comedy comes from the gap between what the industry says it values and what it actually rewards",
      "The Office fans of workplace comedies where the boss is beloved despite (or because of) making objectively terrible decisions — Pei Qian is Michael Scott if Michael's failures generated billions",
      "Extraordinary Attorney Woo fans of shows where the lead's unconventional approach to everything produces better results than the conventional approach, and no one can figure out why"
    ]
  },

  // ─── 13. Love beyond the Grave (2026) ─────────────────────────────────────
  {
    id: 'love-beyond-the-grave',
    title: 'Love beyond the Grave',
    nativeTitle: '白日提灯',
    year: 2026,
    episodes: 40,
    synopsis: "The exceptionally gifted Ghost Queen He Si Mu encounters young general Duan Xu while searching for food during a break from her supernatural duties. He carries an item connected to her past life, and she carries abilities that could alter the course of his military campaign. Their alliance begins as mutual convenience and becomes something considerably more complicated — a love story between a woman who has already died once and a man whose survival depends on winning a war that may be unwinnable.",
    genres: ['fantasy', 'romance', 'historical', 'action'],
    themes: ['mortality', 'fate', 'duty', 'love-across-worlds', 'sacrifice', 'identity'],
    tropes: ['supernatural-romance', 'ghost-human-love', 'warrior-couple', 'star-crossed-lovers', 'past-lives'],
    tone: ['epic', 'romantic', 'action-packed', 'bittersweet', 'atmospheric'],
    setting: ['ancient-China-fantasy', 'ghost-realm', 'battlefield', 'imperial-era'],
    characterTypes: ['powerful-ghost-queen', 'determined-young-general', 'supernatural-court'],
    streaming: { viki: true },
    countryOfOrigin: 'China',
    actors: [],
    matchReasoningHints: [
      "Alchemy of Souls (K-drama) fans of Asian fantasy romance where the supernatural elements create genuine obstacles to the love story rather than just atmosphere",
      "Love between Fairy and Devil fans of C-drama fantasy romance with a powerful female lead whose supernatural status is both her strength and the reason the relationship seems impossible",
      "Hotel Del Luna (K-drama) fans of stories about a being caught between life and death who finds an unexpected connection to a living person — the romance carries the weight of mortality that normal love stories don't",
      "The Untamed fans of Chinese fantasy epics where the worldbuilding serves the emotional stakes rather than the other way around",
      "Goblin (K-drama) fans of supernatural romance where the question isn't just 'will they get together' but 'can they exist in the same reality long enough for it to matter'"
    ]
  }
];

const newWesternShows = [

  // ─── 14. A Knight of the Seven Kingdoms (HBO, Jan 2026) ────────────────────
  {
    id: 'a-knight-of-the-seven-kingdoms',
    title: 'A Knight of the Seven Kingdoms',
    year: 2026,
    episodes: 6,
    synopsis: "A century before the events of Game of Thrones, Ser Duncan the Tall — a towering, good-hearted man who may or may not actually be a knight — and his quick-witted young squire Egg wander through Westeros, entering tournaments and stumbling into trouble. Where Game of Thrones was a feast of blood and betrayal and House of the Dragon was a genealogy lesson delivered with a flamethrower, A Knight of the Seven Kingdoms is a roadside stew in a dented pot: humble, honest, surprisingly soulful. The stakes are smaller and somehow feel bigger.",
    genres: ['fantasy', 'adventure', 'drama', 'comedy'],
    themes: ['honor', 'friendship', 'chivalry', 'identity', 'loyalty', 'class'],
    tropes: ['unlikely-duo', 'knight-errant', 'buddy-adventure', 'tournament', 'hidden-identity'],
    tone: ['warm', 'adventurous', 'witty', 'heartfelt', 'grounded'],
    setting: ['westeros', 'medieval-fantasy', 'countryside', 'tournament-grounds'],
    characterTypes: ['gentle-giant-knight', 'clever-young-squire', 'feudal-lords'],
    streaming: { hbo_max: true },
    network: 'HBO',
    actors: [
      { name: 'Peter Claffey', role: 'Ser Duncan the Tall', isLead: true },
      { name: 'Dexter Sol Ansell', role: 'Egg', isLead: true }
    ],
    matchReasoningHints: [
      "Hwarang (K-drama) fans of historical coming-of-age stories about young warriors trying to prove themselves worthy — Ser Duncan has the same earnest determination to be better than his circumstances suggest",
      "Andor fans of franchise entries that strip away the scale and find something more human underneath — A Knight of the Seven Kingdoms does for Game of Thrones what Andor did for Star Wars",
      "Mr. Sunshine (K-drama) fans of historical dramas where a person of low birth navigates a world of aristocratic politics through sheer stubbornness and an inconvenient moral compass",
      "Vincenzo fans of shows where the protagonist operates with a personal code that everyone else finds either admirable or ridiculous depending on the scene",
      "Sword Snow Stride (C-drama) fans of adventure stories about a traveler navigating a dangerous world with a companion, using charm and principle where power would be easier"
    ]
  },

  // ─── 15. The Beauty (FX/Hulu, Jan 2026) ───────────────────────────────────
  {
    id: 'the-beauty-fx',
    title: 'The Beauty',
    year: 2026,
    episodes: 8,
    synopsis: "In a near-future world, a virus has emerged that makes those it infects physically beautiful — symmetrical features, perfect skin, enhanced attractiveness. The catch: no one knows what comes next. As the virus spreads and society reorganizes around a new hierarchy of beauty, the show follows characters on both sides of the infection line, exploring what happens when the thing everyone secretly wants turns out to be a contagion. Based on the graphic novel and produced by FX, it's body horror meets social satire.",
    genres: ['sci-fi', 'thriller', 'drama', 'horror'],
    themes: ['beauty-standards', 'contagion', 'social-hierarchy', 'identity', 'desire', 'inequality'],
    tropes: ['mysterious-virus', 'social-satire', 'body-horror', 'divided-society', 'near-future'],
    tone: ['unsettling', 'provocative', 'stylish', 'suspenseful', 'satirical'],
    setting: ['near-future', 'american-city', 'medical-facilities'],
    characterTypes: ['infected-protagonist', 'skeptical-outsider', 'ambitious-scientist'],
    streaming: { hulu: true },
    network: 'FX',
    actors: [],
    matchReasoningHints: [
      "Sweet Home (K-drama) fans of shows where a biological transformation divides humanity into categories and forces people to decide which side they're on before they're ready",
      "Black Mirror fans of sci-fi premises that start with something seductive and systematically reveal why seduction was the point — beauty as a virus is peak Black Mirror logic",
      "Parasyte: The Grey (K-drama) fans of body-transformation sci-fi that uses the genre to explore identity and what makes someone 'themselves' when their body has changed",
      "The Substance fans of body-horror that doubles as social commentary about the beauty industry and the lengths people will go to for physical perfection",
      "Hellbound (K-drama) fans of shows where a supernatural phenomenon creates a new social order and the drama is about who benefits and who gets destroyed"
    ]
  },

  // ─── 16. How to Get to Heaven From Belfast (Netflix, 2026) ─────────────────
  {
    id: 'how-to-get-to-heaven-from-belfast',
    title: 'How to Get to Heaven From Belfast',
    year: 2026,
    episodes: 6,
    synopsis: "From Lisa McGee, the creator of Derry Girls, comes a dark comedy set in Belfast that examines faith, family, and the particular Northern Irish talent for finding humor in circumstances that should not be funny. The show follows interconnected lives in a community where religion and culture create an architecture that everyone simultaneously resents and depends on — and where getting to heaven might require leaving Belfast, or might require never leaving at all.",
    genres: ['comedy', 'drama'],
    themes: ['faith', 'community', 'family', 'identity', 'religion', 'belonging'],
    tropes: ['ensemble-comedy', 'dark-humor', 'community-comedy', 'coming-of-age', 'cultural-identity'],
    tone: ['funny', 'warm', 'sharp', 'irreverent', 'heartfelt'],
    setting: ['belfast', 'northern-ireland', 'community', 'church'],
    characterTypes: ['eccentric-community-members', 'questioning-youth', 'devout-elders'],
    streaming: { netflix: true },
    network: 'Netflix',
    actors: [],
    matchReasoningHints: [
      "Reply 1988 (K-drama) fans of shows about a tight-knit community where everyone is in each other's business and the humor comes from proximity — Belfast operates the same way Seoul's neighborhoods do",
      "Derry Girls fans who have been waiting for Lisa McGee to do this again — How to Get to Heaven From Belfast is the spiritual successor with more weight and the same heart",
      "Hospital Playlist (K-drama) fans of ensemble stories where the community itself is the protagonist and individual storylines weave together into something richer than any single thread",
      "Hometown Cha-Cha-Cha fans of shows about a community so small that privacy is theoretical and support is involuntary",
      "Fleabag fans of British/Irish comedy that uses irreverence as a defense mechanism against genuine feeling and lets the mask slip at exactly the right moments"
    ]
  },

  // ─── 17. Wonder Man (Disney+, Jan 2026) ────────────────────────────────────
  {
    id: 'wonder-man-disney',
    title: 'Wonder Man',
    year: 2026,
    episodes: 8,
    synopsis: "Simon Williams, a failed actor in Hollywood, discovers he has extraordinary powers and is recruited into a world of espionage and superheroics. Yahya Abdul-Mateen II brings genuine charisma to a character caught between the life he wanted (fame, recognition, validation through art) and the life he got (punching things for a secret agency). The show works because it treats Simon's actor brain — his understanding of performance, audience, and narrative — as a genuine superpower alongside the actual superpowers.",
    genres: ['action', 'comedy', 'superhero', 'drama'],
    themes: ['identity', 'fame', 'performance', 'power', 'self-worth', 'espionage'],
    tropes: ['reluctant-hero', 'actor-turned-spy', 'secret-identity', 'superhero-comedy', 'found-purpose'],
    tone: ['fun', 'action-packed', 'witty', 'stylish', 'heartfelt'],
    setting: ['hollywood', 'modern-america', 'MCU'],
    characterTypes: ['charismatic-everyman-hero', 'tough-handler', 'mysterious-agency'],
    streaming: { disney_plus: true },
    network: 'Disney+',
    actors: [
      { name: 'Yahya Abdul-Mateen II', role: 'Simon Williams / Wonder Man', isLead: true }
    ],
    matchReasoningHints: [
      "Vincenzo (K-drama) fans of shows where the protagonist's day job skillset becomes unexpectedly useful in their secret life — Simon's acting training transfers to espionage the way Vincenzo's legal mind transferred to revenge",
      "The Uncanny Counter (K-drama) fans of superhero stories about ordinary people who gain powers and must figure out what kind of hero they actually want to be",
      "Loki fans of Marvel stories that lean into the character's existing personality rather than generic heroism — Wonder Man is to actors what Loki is to tricksters",
      "City Hunter (K-drama) fans of action dramas where the lead maintains a civilian identity while conducting a parallel secret life",
      "The King's Avatar (C-drama) fans of stories about someone whose expertise in one field unexpectedly makes them exceptional in another"
    ]
  },

  // ─── 18. Beef Season 2 (Netflix, Apr 2026) ────────────────────────────────
  {
    id: 'beef-s2',
    title: 'Beef Season 2',
    year: 2026,
    episodes: 8,
    synopsis: "Netflix's Emmy-winning dispute drama returns with a fresh feud and an even starrier cast. A new road rage incident between two strangers spirals into an escalating conflict that consumes their relationships, careers, and sanity. Season 2 proves the format works as an anthology — different people, same human capacity for pettiness elevated to art. The writing remains surgically precise about how small grievances metastasize when ego gets involved.",
    genres: ['drama', 'comedy', 'thriller'],
    themes: ['conflict', 'ego', 'escalation', 'class', 'identity', 'self-destruction'],
    tropes: ['escalating-feud', 'dual-protagonists', 'anthology', 'dark-comedy', 'unreliable-perspectives'],
    tone: ['darkly-funny', 'tense', 'satirical', 'uncomfortable', 'brilliant'],
    setting: ['modern-america', 'los-angeles', 'suburban'],
    characterTypes: ['feuding-strangers', 'caught-in-the-crossfire-family'],
    streaming: { netflix: true },
    network: 'Netflix',
    actors: [],
    matchReasoningHints: [
      "The Glory (K-drama) fans of stories about two people locked in an escalating conflict that consumes their entire lives — Beef runs the same engine but with pettiness instead of revenge",
      "Misaeng (K-drama) fans of stories about people whose internal frustrations find external targets — the 'beef' is never really about the other person, it's about everything the other person represents",
      "Parasite fans of stories about class tension that manifests through interpersonal conflict, where neither side is purely sympathetic and both are completely understandable",
      "The World of the Married (K-drama) fans of dramas about two people destroying each other with escalating precision while the people around them suffer the collateral damage",
      "Sky Castle (K-drama) fans of satire about people whose competitive instincts have outgrown their circumstances and metastasized into something genuinely dangerous"
    ]
  },

  // ─── 19. Margo's Got Money Troubles (Apple TV+, Apr 2026) ──────────────────
  {
    id: 'margos-got-money-troubles',
    title: "Margo's Got Money Troubles",
    year: 2026,
    episodes: 10,
    synopsis: "Margo, a broke college student, discovers her absent father was a professional wrestler and leverages his unexpected fame into content creation — a strategy that works better than it should and creates problems she didn't anticipate. Based on Rufi Thorpe's novel, the show is a comedy about the gig economy, parasocial relationships, and the specific modern calculus of turning your personal life into a product. Sharp, funny, and more thoughtful about internet economics than most shows about twenty-somethings.",
    genres: ['comedy', 'drama'],
    themes: ['money', 'fame', 'family', 'internet-culture', 'identity', 'ambition'],
    tropes: ['underdog-success', 'found-family', 'content-creator', 'daddy-issues', 'coming-of-age'],
    tone: ['sharp', 'funny', 'warm', 'satirical', 'relatable'],
    setting: ['modern-america', 'college', 'online-world'],
    characterTypes: ['resourceful-young-woman', 'absent-famous-father', 'internet-audience'],
    streaming: { apple_tv: true },
    network: 'Apple TV+',
    actors: [],
    matchReasoningHints: [
      "Itaewon Class (K-drama) fans of stories about a young person who builds something from nothing through sheer determination and an unconventional business model",
      "Emily in Paris fans who wanted the show to be smarter about the actual mechanics of turning personality into a career — Margo's Got Money Troubles treats content creation as work rather than magic",
      "Start-Up (K-drama) fans of stories about young entrepreneurs navigating the gap between ambition and resources",
      "Extraordinary Attorney Woo fans of stories about a young woman whose unusual approach to her field produces results that conventional people can't replicate",
      "Record of Youth (K-drama) fans of stories about young people trying to build careers in industries that value fame and attention over substance"
    ]
  },

  // ─── 20. Half Man (HBO, Apr 2026) ──────────────────────────────────────────
  {
    id: 'half-man-hbo',
    title: 'Half Man',
    year: 2026,
    episodes: 6,
    synopsis: "Estranged 'brothers' Niall and Ruben haven't spoken in years when Ruben shows up uninvited at Niall's wedding. What follows is an explosion of violence that catapults viewers backward through their lives — childhood, adolescence, young adulthood — to understand how two people who once loved each other completely ended up here. HBO's latest limited series deconstructs a relationship through reverse chronology, revealing layer by layer what was built and what was broken.",
    genres: ['drama', 'thriller'],
    themes: ['brotherhood', 'violence', 'memory', 'trauma', 'family', 'betrayal'],
    tropes: ['reverse-chronology', 'estranged-family', 'nonlinear-storytelling', 'tragic-past', 'explosive-reunion'],
    tone: ['intense', 'raw', 'devastating', 'cinematic', 'literary'],
    setting: ['modern', 'suburban', 'childhood-flashbacks'],
    characterTypes: ['estranged-brothers', 'wedding-guests', 'childhood-selves'],
    streaming: { hbo_max: true },
    network: 'HBO',
    actors: [],
    matchReasoningHints: [
      "My Mister (K-drama) fans of stories about relationships fractured by life and the question of whether they can be repaired — Half Man runs the same emotional mathematics but between brothers instead of strangers",
      "Beyond Evil (K-drama) fans of nonlinear character studies where the present-day mystery is solved by understanding what happened in the past",
      "Adolescence fans of shows that trace how a person became who they are through meticulous attention to the moments that mattered",
      "Memories of Murder (K-movie) fans of stories where looking backward is the only way to understand the present",
      "Pachinko fans of multi-generational storytelling that uses time jumps to reveal how love and damage propagate through family lines"
    ]
  }
];

const newAnime = [

  // ─── 21. Witch Hat Atelier (Crunchyroll, Apr 2026) ────────────────────────
  {
    id: 'witch-hat-atelier',
    title: 'Witch Hat Atelier',
    year: 2026,
    episodes: 12,
    synopsis: "Coco, a young girl who loves magic but was born without any, discovers that magic isn't an innate gift — it's drawn. Literally. When she witnesses a traveling witch performing spells by drawing mystical patterns, she learns the truth that the magical establishment has kept secret: anyone can do magic, and the elite have been gatekeeping it for centuries. Animated by Kyoto Animation with their signature attention to detail, Witch Hat Atelier is a story about art, accessibility, and what happens when someone who wasn't supposed to have power gets it anyway.",
    genres: ['fantasy', 'adventure', 'drama'],
    themes: ['art', 'magic', 'gatekeeping', 'knowledge', 'belonging', 'creativity'],
    tropes: ['chosen-outsider', 'magic-school', 'hidden-truth', 'mentor-student', 'forbidden-knowledge'],
    tone: ['enchanting', 'beautiful', 'thoughtful', 'adventurous', 'warm'],
    setting: ['fantasy-world', 'magical-atelier', 'mystical-landscapes'],
    characterTypes: ['determined-young-girl', 'stern-but-kind-mentor', 'fellow-apprentices'],
    streaming: { netflix: true },
    network: 'Crunchyroll',
    countryOfOrigin: 'Japan',
    actors: [],
    matchReasoningHints: [
      "Frieren fans of fantasy anime that prioritizes atmosphere and character over action — Witch Hat Atelier runs at the same contemplative pace with the same gorgeous worldbuilding",
      "Howl's Moving Castle fans of magical stories where the heroine's power comes from determination and creativity rather than destiny or bloodline",
      "Alchemy of Souls (K-drama) fans of stories about a magical world with strict hierarchies and a protagonist who threatens the system by existing outside it",
      "The Apothecary Diaries fans of stories about a woman who enters an elite institution and succeeds through knowledge and curiosity that the established order finds threatening",
      "Delicious in Dungeon fans of fantasy anime that takes its worldbuilding seriously enough that the magic system has internal logic and the joy is watching characters who understand it"
    ]
  }
];

module.exports = { newKdramas, newCdramas, newWesternShows, newAnime };
