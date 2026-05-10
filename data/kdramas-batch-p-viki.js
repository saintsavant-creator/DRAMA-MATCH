/**
 * DramaMatch K-Drama Batch P — Viki Popular Titles
 *
 * 33 entries: Viki-popular and trending K-dramas spanning 2019–2024.
 * Includes user-requested titles (Study Group, My Dearest Nemesis) plus
 * top Viki catalog shows not yet in the main catalog.
 *
 * Schema: id, title, year, episodes, synopsis, genres, themes, tropes,
 *         tone, setting, characterTypes, streaming, network, actors, matchReasoningHints
 */

module.exports = [

  // ─── User-Requested Titles ────────────────────────────────────────────────
  {
    id: "study-group",
    title: "Study Group",
    year: 2024,
    episodes: 12,
    synopsis: "Yun Ga-hyun is a legendary street fighter who has never once lost a fight — but has failed the national university entrance exam ten times running. Desperate for a fresh start, he enrolls in a prestigious prep school and joins a study group, only to discover the school is completely overrun by gangs who terrorize students into submission. Using his fists, his loyalty, and a surprising capacity for genuine care, he turns a scattered group of misfits into a crew willing to fight for their right to simply learn. A high-energy webtoon adaptation that pairs satisfying action choreography with warm ensemble comedy and an unexpectedly sweet romance.",
    genres: ["action", "comedy", "romance", "drama"],
    themes: ["found-family", "education", "self-improvement", "protecting-the-weak", "second-chances"],
    tropes: ["reluctant-hero", "misfit-team", "slow-burn", "campus-romance", "webtoon-adaptation", "underdog-rises"],
    tone: ["energetic", "comedic", "heartwarming", "light-hearted", "fun"],
    setting: ["modern", "school", "urban", "campus"],
    characterTypes: ["legendary-fighter", "determined-studier", "misfit-crew", "school-bullies", "supportive-female-lead"],
    streaming: { viki: true, tving: true },
    network: "KakaoTV",
    actors: [
      { name: "Hwang Min-hyun", role: "Yun Ga-hyun", isLead: true },
      { name: "Shin Eun-soo", role: "Na Ha-neul", isLead: true }
    ],
    matchReasoningHints: [
      "The Breakfast Club energy — misfit kids from different social strata forced into proximity, discovering they're all running from something, and building something real in the process — in a K-drama action wrapper",
      "Brooklyn Nine-Nine fans who want found-family ensemble comedy with actual stakes: the study group dynamic is funny, warm, and increasingly protective in ways the show earns",
      "If you loved D.P. for its webtoon-adapted action choreography but wanted it lighter and warmer, this is that — same webtoon visual energy, completely different emotional register",
      "Itaewon Class' 'underdog team taking back a space from bullies' premise but compressed into school and played for more comedy than melodrama — faster pacing, higher fun quotient",
      "The Karate Kid's structure updated for gen-Z K-drama: the fighter who never uses their skills for what matters learning that protecting people is the real win"
    ]
  },

  {
    id: "my-dearest-nemesis",
    title: "My Dearest Nemesis",
    year: 2024,
    episodes: 12,
    synopsis: "Han Gi-jun and Go In-a have competed for every promotion, every project, and every scrap of recognition at their company for years — and they are equally matched in every way that matters except their mutual contempt. When a corporate restructuring forces them into direct collaboration on a make-or-break project, their well-oiled rivalry starts generating something far more inconvenient than professional competition. An office enemies-to-lovers drama built on equal-footing banter, competitive chemistry, and the specific comedy of two people who know exactly how to get under each other's skin discovering that intimacy looks a lot like what they've already been doing.",
    genres: ["romance", "comedy", "drama"],
    themes: ["workplace-rivalry", "enemies-to-lovers", "ambition", "self-discovery", "unexpected-love"],
    tropes: ["enemies-to-lovers", "office-romance", "forced-collaboration", "equal-match-leads", "rivals-become-lovers", "slow-burn"],
    tone: ["comedic", "romantic", "sharp", "light-hearted", "witty"],
    setting: ["modern", "office", "urban", "corporate"],
    characterTypes: ["competitive-female-lead", "equally-matched-male-lead", "scheming-coworkers", "clueless-management", "loyal-friends"],
    streaming: { viki: true },
    network: "KakaoTV",
    actors: [
      { name: "Kim Jae-young", role: "Han Gi-jun", isLead: true },
      { name: "Park Se-wan", role: "Go In-a", isLead: true }
    ],
    matchReasoningHints: [
      "The Office: if Jim and Dwight had been attracted to each other while being equally competent and equally aware of it — the show is a workplace comedy where both leads are formidable and the tension is entirely mutual",
      "Pride & Prejudice energy updated for the corporate world: two people who are wrong about each other in exactly the ways that create the best arguments, and the slow collapse of those positions is deeply satisfying",
      "Schitt's Creek's 'people who are sharp and defensive and slowly become safe for each other' arc, set in a Korean corporate office with sharper suits and higher stakes",
      "New Girl's 'two people who compete for everything and then can't remember why they were fighting' comedic tension — the show earns its romance through accumulated banter that lands",
      "Strong Woman Do Bong-soon fans who want a female lead who is the equal of her love interest in every professional dimension — no rescue arc, just two people who met their match"
    ]
  },

  // ─── Popular Viki Catalog — Romance / Fantasy ─────────────────────────────
  {
    id: "angel-s-last-mission-love",
    title: "Angel's Last Mission: Love",
    year: 2019,
    episodes: 32,
    synopsis: "A mischievous, rule-breaking angel is assigned his final mission: make a cold, injured ballerina fall in love and rediscover her joy before he loses his wings forever. Lee Yeon-seo has built ice and control into armor since a childhood tragedy stripped everything soft from her life; Dan the angel has never met a rule he couldn't cheerfully ignore. What begins as a celestial job requirement becomes something neither heaven nor earth had accounted for. A fantasy romance that commits fully to its premise and delivers spectacular ballet sequences alongside genuine emotional gut-punches.",
    genres: ["romance", "fantasy", "drama"],
    themes: ["redemption", "healing", "fate", "sacrifice", "joy-of-living"],
    tropes: ["supernatural-love-interest", "cold-female-lead-warms-up", "love-at-first-sight-denied", "forbidden-love", "healing-through-love", "sacrifice-ending"],
    tone: ["romantic", "fantastical", "emotional", "bittersweet", "warm"],
    setting: ["modern", "urban", "ballet-world", "celestial", "seoul"],
    characterTypes: ["mischievous-angel", "cold-wounded-female-lead", "scheming-antagonist", "loyal-supernatural-guide", "warm-family-surrogate"],
    streaming: { viki: true, netflix: true },
    network: "KBS2",
    actors: [
      { name: "Kim Myung-soo (L)", role: "Dan", isLead: true },
      { name: "Shin Hye-sun", role: "Lee Yeon-seo", isLead: true }
    ],
    matchReasoningHints: [
      "Touched by an Angel crossed with the emotional devastation of Goblin: a supernatural being assigned to help a human who doesn't want help, falling into something the rules explicitly forbid",
      "Black Swan energy — a ballerina who has sacrificed everything for her art becoming human again through someone who cannot be there at the end — but make it supernatural romance rather than horror",
      "City Angel (PS I Love You) emotional structure: the kind of drama that will make you feel things you didn't agree to feel, delivered through genuinely beautiful dance sequences",
      "Crash Landing on You fans who want supernatural stakes with the same 'love that transcends what should be possible' emotional core — different world-building, same ache",
      "Shin Hye-sun's performance is the reason to watch even before anything else — her transformation from ice-armor to someone who can feel joy again is one of the better character arcs in recent KBS drama"
    ]
  },

  {
    id: "touch-your-heart",
    title: "Touch Your Heart",
    year: 2019,
    episodes: 16,
    synopsis: "Top actress Oh Yoon-seo's career is in freefall after a scandal — and her manager's brilliant rescue plan is to secretly intern at a law firm to research a new role. The cold, principle-driven lawyer Kwon Jung-rok wants nothing to do with the disruption she represents, but the disruption keeps showing up, asking questions, and being unexpectedly competent at the exact wrong moments. A light, charming office romance from the team that made Goblin, built on the comedy of someone who performs warmth for a living learning what the real thing feels like.",
    genres: ["romance", "comedy", "drama"],
    themes: ["career-reinvention", "hidden-identity", "finding-yourself", "workplace-connection", "authenticity"],
    tropes: ["enemies-to-lovers", "hidden-identity", "office-romance", "cold-male-lead-warms-up", "fish-out-of-water"],
    tone: ["light-hearted", "comedic", "romantic", "warm", "sweet"],
    setting: ["modern", "law-firm", "urban", "office", "seoul"],
    characterTypes: ["warm-actress-lead", "cold-principled-lawyer", "scheming-entertainment-industry", "loyal-legal-team", "protective-manager"],
    streaming: { viki: true, netflix: true },
    network: "tvN",
    actors: [
      { name: "Yoo In-na", role: "Oh Yoon-seo", isLead: true },
      { name: "Lee Dong-wook", role: "Kwon Jung-rok", isLead: true }
    ],
    matchReasoningHints: [
      "Legally Blonde's 'woman everyone underestimates proving she belongs in a serious world' structure — played straight rather than for comedy, which makes the competence moments land harder",
      "Parks and Recreation energy: someone cheerful and warm in a cold, efficient environment, who slowly converts everyone around them by simply being genuine",
      "The reunion factor: Yoo In-na and Lee Dong-wook previously played the second couple in Goblin, and watching two people with that established chemistry finally get their own show is a specific kind of delight",
      "Suits (early seasons) for the 'outsider discovers she belongs in legal world more than anyone expected' arc — without the American swagger, with Korean office culture instead",
      "For fans of low-stakes, high-warmth romance: this is a drama that knows what it is and delivers it cleanly — cozy, funny, and satisfying without manufacturing tragedy"
    ]
  },

  {
    id: "the-king-eternal-monarch",
    title: "The King: Eternal Monarch",
    year: 2020,
    episodes: 16,
    synopsis: "Emperor Lee Gon rules an alternate Korea that never became a republic — and has spent decades chasing a childhood memory of a woman in a police uniform who may not exist in his world at all. When a mystical flute opens a rift between parallel Koreas, he finds her: Detective Jung Tae-eul, who has no idea who he is, what he rules, or why a man in a white horse is showing up in her Seoul claiming to be an emperor. A Kim Eun-sook production that swings hard on dual-universe mythology, political intrigue, and the specific agony of a love story where the two leads literally live in different worlds.",
    genres: ["romance", "fantasy", "drama", "mystery"],
    themes: ["parallel-worlds", "fate", "sacrifice", "political-intrigue", "identity", "time"],
    tropes: ["dual-universe", "royalty-meets-commoner", "slow-burn", "chosen-ones", "villain-with-personal-vendetta", "sacrifice-ending"],
    tone: ["epic", "romantic", "mysterious", "emotional", "dramatic"],
    setting: ["modern", "parallel-worlds", "palace", "urban", "alternate-history"],
    characterTypes: ["emperor-male-lead", "strong-detective-female-lead", "shadow-villain", "loyal-royal-guard", "doppelganger-secondary-characters"],
    streaming: { viki: true, netflix: true },
    network: "MBC",
    actors: [
      { name: "Lee Min-ho", role: "Lee Gon", isLead: true },
      { name: "Kim Go-eun", role: "Jung Tae-eul", isLead: true },
      { name: "Woo Do-hwan", role: "Jo Yeong / Jo Eun-seop", isLead: false }
    ],
    matchReasoningHints: [
      "Fringe's parallel universe mythology translated into a love story — the show uses the same emotional logic: what does it mean to love someone who exists in a version of the world you can only visit?",
      "The Time Traveler's Wife energy: a romance with structural impossibility built in from the premise, where the love is never in question but the logistics are genuinely anguishing",
      "His Dark Materials' 'two people from different worlds drawn together by fate and something older than either of them understands' epic scope, delivered in K-drama format with Kim Eun-sook's signature dialogue",
      "For Goblin fans: same writer, same commitment to mythology, same 'fate and sacrifice' emotional register — different world-building, same specific ache",
      "Lee Min-ho's best role since Boys Over Flowers in terms of complexity — the Emperor is a character with real interiority, not just a vehicle for romantic fantasy"
    ]
  },

  {
    id: "it-s-okay-to-not-be-okay",
    title: "It's Okay to Not Be Okay",
    year: 2020,
    episodes: 16,
    synopsis: "Moon Gang-tae has spent his entire adult life as a caretaker — literally, at a psychiatric hospital where he keeps his autistic brother safe and cared for, and figuratively, burying his own needs so completely he's forgotten they exist. Ko Moon-young is a bestselling children's book author with antisocial personality disorder, a castle full of secrets, and the most inconvenient interest in Gang-tae imaginable. Together with his brother Sang-tae, who loves her fairytale illustrations with uncomplicated joy, three broken people begin building something that looks suspicious like healing. A drama that takes mental health seriously while being genuinely funny, visually stunning, and emotionally brave.",
    genres: ["romance", "drama", "psychological"],
    themes: ["healing", "mental-health", "trauma", "found-family", "self-acceptance", "chosen-family"],
    tropes: ["cold-female-lead-warms-up", "healing-through-love", "trauma-backstory-reveals", "slow-burn", "found-family", "disability-representation"],
    tone: ["emotional", "romantic", "dark", "heartwarming", "visually-stunning", "bittersweet"],
    setting: ["modern", "psychiatric-hospital", "rural", "gothic-mansion", "small-town"],
    characterTypes: ["self-sacrificing-male-lead", "antisocial-female-lead", "autistic-brother", "complex-villain", "supportive-hospital-staff"],
    streaming: { viki: true, netflix: true },
    network: "tvN",
    actors: [
      { name: "Kim Soo-hyun", role: "Moon Gang-tae", isLead: true },
      { name: "Seo Ye-ji", role: "Ko Moon-young", isLead: true },
      { name: "Oh Jung-se", role: "Moon Sang-tae", isLead: false }
    ],
    matchReasoningHints: [
      "Silver Linings Playbook energy: a romance between two people with mental health conditions who are not defined by them — the show refuses to make their disorders cute quirks or dramatic plot points, which is rare and valuable",
      "Eleanor Oliphant Is Completely Fine translated into K-drama form — a person so defended they don't know they're defended, and the slow process of someone getting close enough to matter",
      "Big Little Lies' willingness to center female trauma and make the audience sit with it, combined with K-drama's warmer emotional register — the darkness and the warmth coexist here in a way that's genuinely unusual",
      "The visual storytelling is at a different level — the fairy tale sequences used to externalize the characters' inner worlds are some of the most creative direction in recent K-drama, and they're doing narrative work, not just mood",
      "Oh Jung-se's performance as Sang-tae is one of the finest supporting performances in all of K-drama and deserves its own conversation — the character has full humanity, not inspiration-porn, and the show treats his autism with rare specificity"
    ]
  },

  {
    id: "doom-at-your-service",
    title: "Doom at Your Service",
    year: 2021,
    episodes: 16,
    synopsis: "Tak Dong-kyung has just received a terminal cancer diagnosis with 100 days to live, and she makes a reckless wish for the world to end — which accidentally summons Myul Mang, a literal supernatural entity who embodies doom and destruction. The deal: she lives, but every time she and Myul Mang touch, doom befalls the world. A fantasy romance that takes its conceptual stakes completely seriously and then layers in genuine warmth, dark humor, and a central love story between a mortal with nothing to lose and an entity who has never been given a reason to care whether he exists.",
    genres: ["romance", "fantasy", "drama"],
    themes: ["mortality", "fate", "love-changes-everything", "sacrifice", "meaning-of-existence", "living-fully"],
    tropes: ["supernatural-love-interest", "terminal-illness", "forbidden-love", "slow-burn", "fate-vs-choice", "healing-through-love"],
    tone: ["romantic", "fantastical", "bittersweet", "emotional", "atmospheric"],
    setting: ["modern", "urban", "supernatural-realm", "seoul"],
    characterTypes: ["personification-of-doom", "terminally-ill-female-lead", "loyal-supporting-couple", "celestial-observer", "warm-family"],
    streaming: { viki: true },
    network: "tvN",
    actors: [
      { name: "Seo In-guk", role: "Myul Mang", isLead: true },
      { name: "Park Bo-young", role: "Tak Dong-kyung", isLead: true }
    ],
    matchReasoningHints: [
      "Goblin's 'supernatural being cannot be with the person he loves because his existence endangers them' structure, but inverted — she summoned him, she knows what he is, and she chooses to love him anyway",
      "The Good Place energy: a being who embodies an abstract concept (doom rather than ethics) slowly developing personhood through an unlikely human connection — the show earns its existential moments",
      "Me Before You's terminal-illness romantic stakes translated into fantasy — if you were less interested in the realism and more interested in the metaphysical, this is that version",
      "What Dreams May Come's 'love that persists past what the universe intended' emotional register, delivered in a more accessible format with stronger comedic moments",
      "Park Bo-young is the best at playing 'small person with enormous inner life who refuses to be diminished by circumstances' — her chemistry with Seo In-guk's unsettled non-human is one of the better K-drama pairings of 2021"
    ]
  },

  {
    id: "my-roommate-is-a-gumiho",
    title: "My Roommate Is a Gumiho",
    year: 2021,
    episodes: 16,
    synopsis: "Shin Woo-yeo is a 999-year-old nine-tailed fox who is one human lifeforce away from becoming fully human — and he accidentally lodges his fox bead in a college student named Lee Dam's body. The solution: she becomes his roommate while they figure out how to safely retrieve it, which turns out to take approximately the same amount of time as falling in love. A light, funny webtoon adaptation that treats its mythology with affection and delivers warm ensemble comedy alongside an earnest central romance.",
    genres: ["romance", "comedy", "fantasy", "drama"],
    themes: ["immortal-falls-for-mortal", "found-family", "growing-up", "humanity-vs-immortality", "unexpected-connection"],
    tropes: ["supernatural-love-interest", "forced-cohabitation", "accidental-cohabitation", "slow-burn", "immortal-male-lead", "webtoon-adaptation"],
    tone: ["light-hearted", "comedic", "romantic", "warm", "fun"],
    setting: ["modern", "campus", "shared-apartment", "urban", "supernatural"],
    characterTypes: ["999-year-old-gumiho", "ordinary-college-student", "meddling-gumiho-friend", "loyal-campus-friends", "warm-family"],
    streaming: { viki: true, netflix: true },
    network: "tvN",
    actors: [
      { name: "Jang Ki-yong", role: "Shin Woo-yeo", isLead: true },
      { name: "Hyeri", role: "Lee Dam", isLead: true }
    ],
    matchReasoningHints: [
      "Brooklyn Nine-Nine ensemble energy with a supernatural twist — the show's real strength is its found-family warmth and the comedic interplay between a 999-year-old fox who has run out of patience and a college student who has run out of options",
      "Bewitched's 'supernatural being tries to navigate modern human life while falling for a normal person' premise but reversed: the gumiho is the competent one and the human is the chaos",
      "My Love from the Star fans who want the 'immortal being falls for ordinary person' emotional core in a lighter, less tragic register — this drama is content to be fun and earns that right",
      "New Girl's 'mismatched roommates who work better together than anyone expected' dynamic, with one roommate being technically nine centuries old and the other being a lit major with a fox bead lodged in her body",
      "Goblin comparison that actually holds: the mythology is treated with the same affectionate seriousness, but the emotional register is warmer — this is a gumiho who wants to be human more than he wants to be tragic"
    ]
  },

  {
    id: "hometown-cha-cha-cha",
    title: "Hometown Cha-Cha-Cha",
    year: 2021,
    episodes: 16,
    synopsis: "Dr. Yoon Hye-jin is a perfectionist Seoul dentist who loses her job for standing on principle and lands — against all logic and preference — in the small coastal village of Gongjin, where she planned to briefly regroup. Hong Du-sik is the village's unofficial everything: handyman, errand-runner, part-time every-job, and owner of an unsettling number of skills he pointedly refuses to explain. The village adopts Hye-jin before she agrees to stay; Du-sik maintains cheerful friendliness while keeping his actual self at careful distance. A deeply warm ensemble drama about community, healing old wounds, and the specific comfort of a place that claims you.",
    genres: ["romance", "drama", "slice-of-life", "comedy"],
    themes: ["community", "healing", "small-town-life", "letting-people-in", "fresh-start", "belonging"],
    tropes: ["city-person-in-small-town", "cold-female-lead-warms-up", "mysterious-male-lead", "slow-burn", "ensemble-community", "trauma-backstory-reveals"],
    tone: ["warm", "cozy", "heartwarming", "slice-of-life", "romantic", "gentle"],
    setting: ["small-town", "coastal", "village", "modern", "seaside"],
    characterTypes: ["perfectionist-city-doctor", "multi-talented-village-handyman", "warm-village-ensemble", "wise-elders", "loyal-friends"],
    streaming: { viki: true, netflix: true },
    network: "tvN",
    actors: [
      { name: "Shin Min-a", role: "Yoon Hye-jin", isLead: true },
      { name: "Kim Seon-ho", role: "Hong Du-sik", isLead: true }
    ],
    matchReasoningHints: [
      "Schitt's Creek's best season DNA — the one where the community becomes the main character and the romance is embedded in a story about people surprising themselves by caring about a place and each other",
      "Northern Exposure's 'city professional stranded in small town discovers what they were actually missing' template delivered with maximum warmth and better food styling",
      "Gilmore Girls: Stars Hollow energy — the ensemble community is the point, and watching a perfectionist city woman get slowly absorbed into a village that refuses to let her be lonely is the core pleasure",
      "The show is a master class in a specific K-drama craft: the ensemble that makes the central romance feel like it's growing in a real place, with people who have their own full lives",
      "Kim Seon-ho's best performance — Du-sik is a character built entirely out of warmth as a defense mechanism, and watching the show peel that back carefully is one of the more satisfying 2021 K-drama arcs"
    ]
  },

  {
    id: "nevertheless",
    title: "Nevertheless",
    year: 2021,
    episodes: 10,
    synopsis: "Yoo Na-bi has sworn off love after a devastating relationship — the rule is clear: no more feelings, no more heartbreak. Park Jae-eon is an art student who flirts like it's breathing, keeps everyone at the perfect remove, and has specifically noticed that Na-bi has decided not to want anything. The most honest K-drama ever made about the difference between wanting someone and them being good for you, set against a fine art university backdrop where everyone is making something and most people are performing their feelings instead of having them.",
    genres: ["romance", "drama"],
    themes: ["modern-dating", "self-worth", "emotional-unavailability", "ambiguous-love", "growing-up", "art-and-expression"],
    tropes: ["will-they-won't-they", "player-male-lead", "emotionally-wounded-female-lead", "slow-burn", "art-school-setting", "realistic-modern-romance"],
    tone: ["atmospheric", "melancholic", "realistic", "romantic", "contemplative", "adult"],
    setting: ["modern", "art-university", "urban", "studio-spaces", "seoul"],
    characterTypes: ["guarded-female-lead", "emotionally-unavailable-male-lead", "loyal-best-friends", "art-school-ensemble", "healthy-alternative-love-interest"],
    streaming: { viki: true, netflix: true },
    network: "JTBC",
    actors: [
      { name: "Han So-hee", role: "Yoo Na-bi", isLead: true },
      { name: "Song Kang", role: "Park Jae-eon", isLead: true }
    ],
    matchReasoningHints: [
      "Normal People energy — the show is doing the same thing: a messy, honest depiction of attraction between two people who are not yet the people they need to be for love to work, told with restraint and actual adult sexuality",
      "Fleabag's comfort with moral ambiguity — Na-bi is not doing the right thing and the show is not trying to convince you she is, which is more honest than most K-drama is willing to be",
      "Conversations with Friends (the Hulu series) for the 'young artist in an entanglement she knows is bad for her and cannot stop' emotional register — aesthetically similar, similarly non-judgmental",
      "The show will frustrate viewers who want a satisfying conclusion; it will deeply satisfy viewers who want a drama that tells the truth about wanting someone who isn't ready to be wanted back",
      "Han So-hee's range is on full display here — this is a fundamentally different performance register than The World of the Married or My Name, and she's completely credible in all three"
    ]
  },

  {
    id: "run-on",
    title: "Run On",
    year: 2021,
    episodes: 16,
    synopsis: "Former national sprinter Ki Seon-gyeom has always run away from his family's influence, toward something he can define for himself. Film subtitle translator Oh Mi-joo runs toward stories, translating other people's words while quietly withholding her own. They meet at the intersection of sports and film — unlikely, specific, and slow to become what it is. A quiet, character-driven romance about two people who communicate in different registers learning each other's language, alongside a second couple of equal depth. One of the most genuinely understated K-dramas in recent years.",
    genres: ["romance", "drama", "sports"],
    themes: ["communication", "identity", "family-pressure", "finding-your-voice", "unexpected-connection", "art-and-work"],
    tropes: ["quiet-slow-burn", "mismatched-communication-styles", "athlete-love-interest", "dual-couple", "gradual-falling"],
    tone: ["quiet", "thoughtful", "romantic", "slice-of-life", "warm", "understated"],
    setting: ["modern", "urban", "sports-world", "film-industry", "seoul"],
    characterTypes: ["principled-retired-athlete", "translator-female-lead", "wealthy-chaebol-second-lead", "art-student-second-female-lead", "complex-family-figures"],
    streaming: { viki: true, netflix: true },
    network: "JTBC",
    actors: [
      { name: "Im Si-wan", role: "Ki Seon-gyeom", isLead: true },
      { name: "Shin Se-kyung", role: "Oh Mi-joo", isLead: true },
      { name: "Kang Tae-oh", role: "Lee Yeong-hwa", isLead: false }
    ],
    matchReasoningHints: [
      "Normal People's quietness — the show understands that the most romantic thing two people can do is learn how to actually talk to each other, and it builds its entire structure on that premise",
      "Before Sunrise energy translated into K-drama format: two articulate people discovering that being articulate doesn't mean you communicate well, and the slow process of getting honest",
      "For viewers who loved My Mister's character depth and were looking for something that delivers that level of interiority in a romance — this is the closest thing in recent years",
      "The dual-couple structure is genuinely equal: the second couple (Kang Tae-oh and Choi Su-young) gets as much care and development as the main pair, which is unusual and earns the show's full runtime",
      "Im Si-wan at his finest — Seon-gyeom is a man who expresses care through action rather than words, and the show is patient enough to let that register"
    ]
  },

  {
    id: "one-the-woman",
    title: "One the Woman",
    year: 2021,
    episodes: 16,
    synopsis: "Corrupt prosecutor Jo Yeon-joo gets knocked unconscious during a sting operation and wakes up having swapped lives with chaebol daughter Jo Yeon-joo — who looks identical, has the same name, and is currently in a loveless arranged marriage to a man who is hiding something. She has to perform perfect chaebol wife while actually running a secret investigation; he has to pretend he doesn't notice that his wife has been replaced by someone with completely different energy and apparently no fear of consequences. A fast, funny, stylish corporate conspiracy drama built on an identity-swap premise that commits fully to its own logic.",
    genres: ["romance", "comedy", "drama", "mystery"],
    themes: ["identity", "corporate-conspiracy", "justice", "love-finds-a-way", "corruption", "self-discovery"],
    tropes: ["body-swap-adjacent", "mistaken-identity", "enemies-to-lovers", "cold-male-lead-warms-up", "chaebol-world", "conspiracy-investigation"],
    tone: ["comedic", "fast-paced", "fun", "romantic", "stylish"],
    setting: ["modern", "chaebol-world", "corporate", "urban", "prosecutor-world"],
    characterTypes: ["sharp-corrupt-prosecutor", "chaebol-wife-double", "suspicious-husband", "corporate-conspirators", "loyal-prosecutor-team"],
    streaming: { viki: true, netflix: true },
    network: "MBC",
    actors: [
      { name: "Lee Ha-nee", role: "Jo Yeon-joo", isLead: true },
      { name: "Lee Sang-yoon", role: "Han Seung-wook", isLead: true }
    ],
    matchReasoningHints: [
      "Knives Out energy — a smart, funny mystery where the investigation is as entertaining as the twist, and the female lead is operating six steps ahead of everyone around her while pretending not to",
      "The Proposal (or any fun rom-com with an escalating premise) meets a corporate thriller — the show knows what it is and delivers it with style rather than taking itself too seriously",
      "Suits' 'someone operating under false pretenses in a high-stakes legal/corporate world' premise, but the show is having significantly more fun with it",
      "For fans of Strong Woman Do Bong-soon's 'female lead who is fully capable and completely unwilling to perform fragility' energy — different setting, same refusal to apologize for competence",
      "Lee Ha-nee is doing two completely distinct performances within the same character, which is a technical achievement the show relies on heavily — she's convincing in both registers"
    ]
  },

  {
    id: "business-proposal",
    title: "Business Proposal",
    year: 2022,
    episodes: 12,
    synopsis: "Shin Ha-ri agrees to go on a blind date in place of her rich friend, planning to get herself rejected by acting outrageous — except the man across the table turns out to be Kang Tae-moo, the CEO of her own company, who immediately proposes a contract relationship to get his grandfather off his back about marriage. She cannot reveal who she is; he cannot understand why she's simultaneously terrified of him at work and acting completely different on their 'dates.' A webtoon adaptation that commits to its farce premise with full comedic energy and delivers warm chemistry underneath.",
    genres: ["romance", "comedy", "drama"],
    themes: ["mistaken-identity", "contract-relationship", "workplace-romance", "hidden-identity", "family-pressure"],
    tropes: ["contract-relationship", "hidden-identity", "CEO-love-interest", "enemies-to-lovers", "webtoon-adaptation", "comedic-misunderstanding"],
    tone: ["comedic", "light-hearted", "fun", "romantic", "fast-paced"],
    setting: ["modern", "corporate", "office", "urban", "chaebol-world"],
    characterTypes: ["ordinary-girl-in-extraordinary-situation", "cold-CEO-male-lead", "rich-best-friend", "loyal-subordinate", "meddling-grandfather"],
    streaming: { viki: true, netflix: true },
    network: "SBS",
    actors: [
      { name: "Ahn Hyo-seop", role: "Kang Tae-moo", isLead: true },
      { name: "Kim Se-jeong", role: "Shin Ha-ri", isLead: true }
    ],
    matchReasoningHints: [
      "You've Got Mail's 'the person you're falling for and the person you're terrified of at work are the same person' premise, with the information asymmetry played for comedy rather than drama",
      "The Proposal meets a K-drama webtoon aesthetic — the misunderstanding at the center is absurd by design, and the show leans into that rather than trying to make it realistic",
      "Brooklyn Nine-Nine's approach to workplace comedy: the absurd premise is just a delivery mechanism for character warmth, and the show knows the real product is the relationship",
      "Schitt's Creek Season 4-5 energy: a story that's built up enough relationship capital that the romance feels genuinely earned rather than just structurally resolved",
      "The second couple (Kim Se-jeong's boss and her best friend) gives the show a fully functional parallel romance track — the B-plot is as satisfying as the A-plot, which is rare"
    ]
  },

  {
    id: "thirty-nine",
    title: "Thirty-Nine",
    year: 2022,
    episodes: 12,
    synopsis: "Three lifelong best friends on the threshold of turning 40: Cha Mi-jo is a composed dermatologist in a new relationship; Jung Chan-young is an acting coach still in love with someone from the past; Jang Joo-hee is a department store manager with a secret she's been carrying alone. The secret is a cancer diagnosis, and the drama is about what the three of them do with the remaining time — not as a tragedy, but as an inventory of what their friendship has always been and what it still needs to be. A rare K-drama that places female friendship at absolute center and refuses to make it merely the backdrop for romance.",
    genres: ["drama", "romance", "slice-of-life", "melodrama"],
    themes: ["female-friendship", "mortality", "grief", "love-in-many-forms", "found-family", "living-fully"],
    tropes: ["trio-friendship", "terminal-illness", "second-chance-romance", "female-friendship-as-center", "adult-women-protagonists"],
    tone: ["emotional", "warm", "bittersweet", "slice-of-life", "romantic", "gentle"],
    setting: ["modern", "urban", "medical-world", "everyday-seoul"],
    characterTypes: ["composed-doctor", "passionate-acting-coach", "quietly-brave-secret-keeper", "loving-partners", "warm-family-network"],
    streaming: { viki: true, netflix: true },
    network: "JTBC",
    actors: [
      { name: "Son Ye-jin", role: "Cha Mi-jo", isLead: true },
      { name: "Jeon Mi-do", role: "Jung Chan-young", isLead: true },
      { name: "Kim Ji-hyun", role: "Jang Joo-hee", isLead: true }
    ],
    matchReasoningHints: [
      "Sex and the City for the emotional intelligence without the fashion fantasy — three women navigating love, mortality, and what it means to have chosen each other, at the age where the choices feel permanent",
      "Terms of Endearment energy — the friendship is the love story, the romantic subplots are true and satisfying, and the illness is handled with the kind of earned weight that makes viewers trust the show",
      "Big Little Lies' female friendship at center, minus the thriller mechanics — what remains is an examination of how women take care of each other in ways men in the same stories rarely see",
      "For any viewer who has ever watched a K-drama and thought 'I want more of the friendship and less of the love triangle': this drama heard that thought and built an entire show around it",
      "Son Ye-jin's restraint is doing enormous work — this is a completely different register from Crash Landing on You, quiet and specific and true, and the contrast is instructive"
    ]
  },

  {
    id: "twenty-five-twenty-one",
    title: "Twenty-Five Twenty-One",
    year: 2022,
    episodes: 16,
    synopsis: "Na Hee-do is eighteen and desperate to fence at the national level — except her school's fencing team has just been disbanded. Baek Yi-jin is twenty-two and watching his family's fortune collapse in real time during the 1998 IMF financial crisis. Their lives collide and intertwine over five years, from teenage dreams through early adulthood, in a drama that understands that some loves are complete and true without requiring forever. A time-period romance with genuine nostalgia, exceptional sports sequences, and a willingness to let its ending be honest rather than comfortable.",
    genres: ["romance", "drama", "sports"],
    themes: ["first-love", "growing-up", "dreams-and-sacrifice", "historical-period", "female-ambition", "young-love"],
    tropes: ["first-love", "noona-romance-adjacent", "sports-romance", "period-setting", "coming-of-age", "bittersweet-ending"],
    tone: ["nostalgic", "emotional", "warm", "bittersweet", "youthful", "romantic"],
    setting: ["late-1990s", "sports-world", "fencing", "school", "urban-korea"],
    characterTypes: ["passionate-young-athlete", "older-struggling-young-man", "fierce-rival-turned-friend", "supportive-fencing-team", "family-navigating-crisis"],
    streaming: { viki: true, netflix: true },
    network: "tvN",
    actors: [
      { name: "Kim Tae-ri", role: "Na Hee-do", isLead: true },
      { name: "Nam Joo-hyuk", role: "Baek Yi-jin", isLead: true },
      { name: "Bona (Yoo Ji-soo)", role: "Go Yu-rim", isLead: false }
    ],
    matchReasoningHints: [
      "Call Me By Your Name energy — a first love that is entirely real, remembered with specific precision, that ends the way first loves end: complete in itself, not in the way we asked for",
      "The Americans' period authenticity but applied to youth and sports — the 1998 IMF crisis is a real historical wound in Korea and the show treats it as such, giving the romance genuine stakes it didn't manufacture",
      "I, Tonya's athletic-girl-with-everything-on-the-line urgency without the tragedy — Hee-do's ambition is the point and the show never asks her to diminish it for the love story",
      "My Brilliant Friend (Elena Ferrante) in its approach to female friendship and competition — Hee-do and Yu-rim's rivalry is one of the better same-gender dynamics in K-drama, full of love and zero sentimentality",
      "The ending discourse is real: if you want your first-love dramas to end in marriage, watch something else. If you want to watch a drama that respects what first love actually is, this is essential"
    ]
  },

  {
    id: "forecasting-love-and-weather",
    title: "Forecasting Love and Weather",
    year: 2022,
    episodes: 16,
    synopsis: "Han Ki-jun dumped Jin Ha-kyung for a younger colleague at the Korea Meteorological Administration. Now that younger colleague has also moved on, and Ki-jun wants Ha-kyung back. Ha-kyung is not interested — she is, however, unexpectedly interested in the new hire Lee Si-woo, who is ten years younger, spectacularly blunt, and appears to be the only person at the entire agency who actually likes her. A workplace romance set inside a real, specific Korean institution, built on adult emotions and the specific satisfaction of a female lead who has genuinely moved on.",
    genres: ["romance", "drama", "comedy"],
    themes: ["second-chances", "workplace-romance", "moving-on", "age-gap-romance", "professional-identity", "self-worth"],
    tropes: ["age-gap-romance", "workplace-romance", "moving-on-from-ex", "earnest-younger-male-lead", "female-lead-emotionally-guarded"],
    tone: ["realistic", "warm", "romantic", "slice-of-life", "adult", "comedic"],
    setting: ["modern", "meteorological-office", "urban", "workplace", "seoul"],
    characterTypes: ["composed-professional-female-lead", "earnest-younger-male-lead", "manipulative-ex", "loyal-work-team", "meddling-colleagues"],
    streaming: { viki: true, netflix: true },
    network: "JTBC",
    actors: [
      { name: "Park Min-young", role: "Jin Ha-kyung", isLead: true },
      { name: "Song Kang", role: "Lee Si-woo", isLead: true }
    ],
    matchReasoningHints: [
      "Grey's Anatomy's workplace-romance-in-a-specialized-institution DNA with a female lead who is competent, guarded, and navigating a messy professional history — minus the surgical chaos, with weather forecasting instead",
      "Unbreakable Kimmy Schmidt energy in the male lead: earnest, relentlessly positive, completely unbothered by the female lead's defensiveness in a way that disarms her without trying to",
      "For Any K-drama fan who wanted a romance where the female lead's career is treated as seriously as her feelings — the meteorology world is specific and the show does its research",
      "The age-gap romance is handled as an adult consideration rather than a joke or a scandal — both leads take it seriously, which makes it feel mature rather than wish-fulfillment",
      "Park Min-young at her most restrained — this is a fundamentally different register than her earlier works, and it's a better fit for who she is as an actress now"
    ]
  },

  {
    id: "alchemy-of-souls",
    title: "Alchemy of Souls",
    year: 2022,
    episodes: 30,
    synopsis: "In the fictional kingdom of Daeho, souls can be transferred between bodies through forbidden magic — which is how Mu-deok, the most feared assassin in the realm, ends up trapped in a weak and dying body. Jang Uk is the disgraced son of a powerful mage family, locked out of his magic for reasons his father refused to explain. The deal: she trains him; he gives her a body worth inhabiting. What neither of them expects is what training looks like when teacher and student are genuinely matched. A high-production fantasy epic from the Hong Sisters that does something rare: it treats its magic-system rules seriously and then uses them as the engine for its romance.",
    genres: ["romance", "fantasy", "action", "historical-fantasy"],
    themes: ["forbidden-magic", "identity-and-soul", "power-and-mastery", "loyalty", "sacrifice", "love-across-circumstances"],
    tropes: ["master-student-romance", "soul-swap", "forbidden-love", "power-leveling", "slow-burn", "female-lead-in-disguise"],
    tone: ["epic", "fantastical", "romantic", "action-packed", "dramatic", "mysterious"],
    setting: ["historical-fantasy", "magic-academy", "supernatural-korea", "palace", "wuxia-adjacent"],
    characterTypes: ["legendary-assassin-in-wrong-body", "disgraced-magic-scion", "academy-rivals", "powerful-mage-elders", "dangerous-antagonist"],
    streaming: { viki: true, netflix: true },
    network: "tvN",
    actors: [
      { name: "Lee Jae-wook", role: "Jang Uk", isLead: true },
      { name: "Jung So-min", role: "Naksu/Mu-deok", isLead: true },
      { name: "Go Youn-jung", role: "Naksu (Season 2)", isLead: false }
    ],
    matchReasoningHints: [
      "Avatar: The Last Airbender's magic-system seriousness — the alchemy-of-souls rules are internally consistent and the show uses them to generate plot complications rather than just atmosphere",
      "The Untamed / Mo Dao Zu Shi energy: a training arc that becomes a love arc that becomes a tragedy arc, set in a fantasy world with specific internal logic and high emotional investment",
      "Mulan's 'woman in disguise outperforming expectations' premise with a magic-system twist — Mu-deok is the teacher and the more capable one, which inverts the expected dynamic in satisfying ways",
      "Harry Potter world-building commitment: the academy setting has a social hierarchy, factions, competing ambitions, and history — it feels like a real institution rather than a backdrop",
      "The season-break discourse is real and the show earns it: Part 1 and Part 2 are tonally different experiences, and the Part 1 ending is genuinely devastating in a way that rewards having committed to the full run"
    ]
  },

  {
    id: "love-in-contract",
    title: "Love in Contract",
    year: 2022,
    episodes: 16,
    synopsis: "Choi Sang-eun runs the most discreet business in Seoul: contract wife services for confirmed bachelors. Two days a week she is Ha-eun for lawyer Jung Ji-ho — efficient, professional, barely inconvenient. Three days a week she is Sang-eun for actor Kang Hae-jin — complicated, history-laden, and the opposite of simple. The problem isn't that she's a contract wife for two different men simultaneously. The problem is that one of them has started behaving as though the contract is not the point. A romance that takes its unusual premise completely seriously and builds genuine emotional stakes within it.",
    genres: ["romance", "comedy", "drama"],
    themes: ["contract-relationship", "hidden-feelings", "identity", "past-history", "love-finds-a-way", "professional-distance"],
    tropes: ["contract-relationship", "slow-burn", "love-triangle", "fake-relationship-becomes-real", "hidden-past", "female-lead-with-unusual-job"],
    tone: ["romantic", "comedic", "warm", "light-hearted", "emotional"],
    setting: ["modern", "urban", "legal-world", "entertainment-industry", "seoul"],
    characterTypes: ["professional-contract-wife", "cold-principled-lawyer", "charming-actor", "meddling-support-network", "client-who-got-too-attached"],
    streaming: { viki: true },
    network: "tvN",
    actors: [
      { name: "Park Min-young", role: "Choi Sang-eun", isLead: true },
      { name: "Go Kyung-pyo", role: "Jung Ji-ho", isLead: true },
      { name: "Kim Jae-young", role: "Kang Hae-jin", isLead: false }
    ],
    matchReasoningHints: [
      "Hitch meets the premise of a very specific K-drama rom-com — the contract-wife business is taken seriously as a profession, and watching someone who is expert at performing intimacy encounter the real thing is the engine",
      "The Proposal's 'professional arrangement crossing into something genuine' emotional arc, built on a premise that is more unusual and frankly more interesting",
      "Two-timing as plot device — not infidelity, just scheduling — is a genuinely novel rom-com structure and the show commits to the comedy of it fully before pivoting to the emotion",
      "Park Min-young's third workplace romance in a row (after Her Private Life and What's Wrong with Secretary Kim) and the one most invested in making the female lead's profession the point rather than just the setting",
      "Go Kyung-pyo doing quiet restraint — the lawyer who falls for his contract wife is a character built almost entirely out of what he doesn't say, and it works"
    ]
  },

  {
    id: "now-we-are-breaking-up",
    title: "Now We Are Breaking Up",
    year: 2021,
    episodes: 16,
    synopsis: "Ha Young-eun is the head designer at a Seoul fashion company — composed, excellent at her work, and clear about what she wants and doesn't. Yoon Jae-guk is a photographer based in Paris who arrives in Seoul on a project and immediately complicates everything about her clarity. The romance is present from the first episode; the complication is that both of them may be in love with the memory of someone they can't have. A fashion-industry drama that is honest about how desire and grief coexist, built on strong chemistry and Song Hye-kyo in full command of her craft.",
    genres: ["romance", "drama", "melodrama"],
    themes: ["grief", "moving-on", "professional-identity", "fashion-world", "second-chances", "love-and-loss"],
    tropes: ["second-chance-romance", "grief-and-love", "fashion-industry", "bittersweet-romance", "older-female-lead", "adult-romance"],
    tone: ["sophisticated", "romantic", "emotional", "elegant", "melancholic"],
    setting: ["modern", "fashion-world", "urban", "seoul", "international"],
    characterTypes: ["composed-fashion-designer", "sophisticated-photographer", "loyal-work-team", "complicated-past", "romantic-rival"],
    streaming: { viki: true, netflix: true },
    network: "SBS",
    actors: [
      { name: "Song Hye-kyo", role: "Ha Young-eun", isLead: true },
      { name: "Jang Ki-yong", role: "Yoon Jae-guk", isLead: true }
    ],
    matchReasoningHints: [
      "The Devil Wears Prada setting with an actual love story at the center — the fashion world here is specific and the visual language is excellent, but it's not the point, the people are",
      "A Walk to Remember emotional DNA — the grief that underlies the romance is earned rather than manufactured, and Song Hye-kyo carries it with the restraint the role requires",
      "In the Mood for Love energy: two sophisticated adults in a world of beautiful surfaces, where the actual feelings are happening underneath the composed exterior — the repression is the point",
      "For viewers who want adult romance with adult complications: nobody is in their twenties, nobody is naive, and the show respects both leads enough to give them grief and desire simultaneously",
      "Song Hye-kyo is doing her best TV work since Descendants of the Sun here — the character has more actual interiority than many of her previous roles, and she fills that space completely"
    ]
  },

  // ─── Popular Viki Catalog — Action / Thriller / Crime ─────────────────────
  {
    id: "through-the-darkness",
    title: "Through the Darkness",
    year: 2022,
    episodes: 12,
    synopsis: "In the late 1980s and early 1990s, Korean criminal profiling didn't exist. Song Ha-young is one of the first investigators to begin building it — interviewing serial killers in prison, developing psychological frameworks from scratch, and fighting an institutional culture that thinks psychology is not police work. Based on the real memoir of criminal profiler Kwon Il-yong, this is an extraordinarily grounded procedural that is interested in the mind of the investigator as much as the minds of the criminals — and in the cost of spending your career translating evil into something usable.",
    genres: ["thriller", "crime", "drama", "historical"],
    themes: ["criminal-profiling", "institutional-resistance", "psychological-cost", "true-crime-based", "historical-first", "moral-weight"],
    tropes: ["based-on-true-story", "procedural-investigation", "institutional-resistance", "psychological-thriller", "historical-period"],
    tone: ["grounded", "tense", "atmospheric", "dark", "procedural", "restrained"],
    setting: ["late-1980s", "early-1990s", "korea", "police-institution", "historical"],
    characterTypes: ["pioneering-profiler", "skeptical-institutional-superior", "complex-convicted-killers", "loyal-colleagues", "bureaucratic-obstacles"],
    streaming: { viki: true },
    network: "SBS",
    actors: [
      { name: "Kim Nam-gil", role: "Song Ha-young", isLead: true },
      { name: "Jin Sun-kyu", role: "Guk Yeong-soo", isLead: false }
    ],
    matchReasoningHints: [
      "Mindhunter — this is the Korean Mindhunter, and the comparison is not hyperbole: same premise, same methodological rigor, same interest in the institutional resistance to taking psychology seriously as crime-fighting",
      "Zodiac's investigative obsession energy — the show is interested in what it costs to spend years looking at the worst things people do, and the central character is deteriorating in slow motion",
      "True Detective Season 1's 'the investigation is also an autobiography' structure — we understand the profiler through the cases more than through exposition, which is more effective",
      "The show is a document of a real historical moment: the creation of Korean criminal profiling from nothing, and the specific courage that took — which gives the procedural elements genuine weight",
      "Kim Nam-gil's best performance: the character is brilliant, methodical, and quietly collapsing under the weight of what he knows, and Nam-gil plays all three levels simultaneously"
    ]
  },

  {
    id: "inspector-koo",
    title: "Inspector Koo",
    year: 2021,
    episodes: 12,
    synopsis: "Koo Kyung-yi used to be an exemplary insurance investigator and is now a gochujang-addicted shut-in who solves cases largely by accident in between avoiding human contact. K is a twenty-something who makes death look like accidents, experiences killing as a form of aesthetic pleasure, and has just become fascinated by the first person who has ever seemed interesting. A cat-and-mouse crime drama told from both sides simultaneously, where the cat and the mouse are equally compelling and neither one is clearly the hero.",
    genres: ["thriller", "crime", "comedy", "drama"],
    themes: ["investigation", "obsession", "cat-and-mouse", "female-antagonist", "what-is-justice", "unusual-protagonist"],
    tropes: ["detective-antihero", "cat-and-mouse", "female-villain", "unlikely-investigator", "dark-comedy", "brilliant-adversaries"],
    tone: ["dark-comedy", "tense", "stylish", "atmospheric", "unpredictable"],
    setting: ["modern", "urban", "seoul", "insurance-world", "crime-scenes"],
    characterTypes: ["brilliant-shut-in-detective", "aesthete-killer", "insurance-industry-ensemble", "ambiguous-supporting-cast", "overmatched-police"],
    streaming: { viki: true },
    network: "JTBC",
    actors: [
      { name: "Lee Young-ae", role: "Koo Kyung-yi", isLead: true },
      { name: "Kim Hye-jun", role: "K (Santa)", isLead: true }
    ],
    matchReasoningHints: [
      "Killing Eve in Korean: the investigator and the killer are equally compelling, the show is genuinely interested in both, and the central dynamic has the same charged quality of two people who should be adversaries but are more interested in each other",
      "Fleabag's narrator energy: a woman who is a mess in a specific, intelligent way, who uses humor as a structural defense and doesn't notice when it stops working",
      "Sherlock's 'brilliant detective is barely functional as a person' premise applied to a middle-aged Korean woman who eats gochujang straight from the jar and cannot be bothered",
      "Hannibal fans who want a killer who is genuinely compelling rather than just scary — K is one of the better female villain constructions in recent K-drama, with a specific psychology the show treats seriously",
      "Lee Young-ae returning to drama after years and choosing this role is a statement: the character is not flattering or heroic or conventionally likeable, and the performance is therefore fascinating"
    ]
  },

  {
    id: "grid",
    title: "Grid",
    year: 2022,
    episodes: 10,
    synopsis: "Thirty years ago, a mysterious figure called The Ghost appeared and saved humanity from solar winds that would have destroyed all electronics on Earth — and then vanished. Now a wanted criminal is on the run, and the key to catching him may be finding The Ghost first. Two investigators working the case begin to suspect that the case is not what it looks like, that The Ghost is not what anyone thinks, and that the truth may involve a future that hasn't happened yet. A tight, high-concept sci-fi thriller that is genuinely surprising in its plotting and refuses to be easy.",
    genres: ["thriller", "sci-fi", "mystery", "drama"],
    themes: ["time-mystery", "sacrifice", "what-is-heroism", "parallel-timelines", "government-conspiracy", "identity"],
    tropes: ["mystery-figure", "time-travel-adjacent", "government-conspiracy", "unlikely-investigator-pair", "moral-ambiguity", "plot-twists"],
    tone: ["mysterious", "tense", "cerebral", "dark", "fast-paced"],
    setting: ["modern", "near-future", "government-institution", "urban", "multiple-timelines"],
    characterTypes: ["principled-investigator", "ambitious-detective", "mysterious-savior", "government-conspirator", "morally-complex-fugitive"],
    streaming: { viki: true, disney_plus: true },
    network: "Disney+",
    actors: [
      { name: "Seo Kang-joon", role: "Kim Sae-ha", isLead: true },
      { name: "Kim Ah-joong", role: "Moon Jae-kyung", isLead: true }
    ],
    matchReasoningHints: [
      "Dark (the German Netflix series) energy — multiple timelines, information revealed in non-linear order, the sense that the show knows more than you do and will only give it up when it chooses to",
      "Person of Interest's 'a supernatural/unexplained figure who intervenes at critical moments becomes the center of a government investigation' premise but without the procedural procedural",
      "Predestination's closed-loop paradox construction: the show is interested in the same question — if you knew what you were saving, would you still save it — and uses its plot mechanics to make that question felt rather than just posed",
      "Signal fans who want another show that uses its sci-fi premise to generate moral questions rather than just plot — Grid is asking about sacrifice and heroism and whether humanity deserves either",
      "10 episodes is the right length: the show doesn't overstay its premise, which is the right call for a high-concept thriller that depends on sustained mystery"
    ]
  },

  {
    id: "juvenile-justice",
    title: "Juvenile Justice",
    year: 2022,
    episodes: 10,
    synopsis: "Judge Sim Eun-seok specifically requested assignment to juvenile court — not because she has patience for young offenders, but because she has contempt for them and believes the system coddles them. What she finds in the actual work is more complicated: children who are perpetrators and victims simultaneously, a system inadequate to both, and colleagues who have been sitting with the same questions for decades. A Netflix legal drama that refuses to be comfortable, refuses to provide easy villains, and insists on asking what society owes to people it has failed before they committed crimes.",
    genres: ["drama", "legal", "thriller"],
    themes: ["juvenile-justice", "systemic-failure", "moral-complexity", "what-is-punishment", "compassion-vs-judgment", "institutional-critique"],
    tropes: ["anti-hero-judge", "legal-procedural", "social-commentary", "moral-challenge-arc", "ensemble-legal-team"],
    tone: ["tense", "dark", "thought-provoking", "grounded", "emotional", "realistic"],
    setting: ["modern", "juvenile-court", "legal-institution", "urban", "social-welfare-system"],
    characterTypes: ["contemptuous-principled-judge", "compassionate-colleague", "complex-young-offenders", "institutional-observers", "affected-families"],
    streaming: { viki: false, netflix: true },
    network: "Netflix",
    actors: [
      { name: "Kim Hye-soo", role: "Sim Eun-seok", isLead: true },
      { name: "Kim Mu-yeol", role: "Ryu Seok-yeong", isLead: false }
    ],
    matchReasoningHints: [
      "The Wire's institutional critique logic — the system is the subject, and the show is interested in how structures fail people before individuals fail systems",
      "A Few Good Men's legal drama intensity without the triumph — the show is not interested in easy victories, and the cases do not resolve cleanly",
      "Orange Is the New Black's 'person with contempt for a group being forced to actually see them as individuals' character arc, in a judicial rather than incarceration setting",
      "For viewers who watched Parasite and wanted a K-drama that applies the same class-consciousness to a specific institution — the juvenile justice system here is examined with the same unflinching attention",
      "Kim Hye-soo's career-defining performance: Sim Eun-seok begins the series genuinely unsympathetic and becomes someone you understand completely without the show ever making her easy to like"
    ]
  },

  {
    id: "extraordinary-attorney-woo",
    title: "Extraordinary Attorney Woo",
    year: 2022,
    episodes: 16,
    synopsis: "Woo Young-woo is a first-year attorney at a major Seoul law firm. She passed the bar with the highest score in years, has a photographic memory, and is autistic. The cases she handles are unusual and often absurd — inheritance disputes, accidental assault, a whale that may be evidence in a maritime case — and the show uses them to examine law, justice, and human variety with warmth and precision. A drama that is genuinely about Woo Young-woo's experience of the world rather than using her autism as a plot device, and that delivers on its legal-comedy premise without sacrificing its emotional sincerity.",
    genres: ["drama", "comedy", "legal", "romance"],
    themes: ["disability-representation", "justice", "found-family", "professional-belonging", "first-year-struggles", "human-variety"],
    tropes: ["neurodivergent-protagonist", "legal-procedural-comedy", "workplace-found-family", "slow-burn-romance", "underestimated-female-lead"],
    tone: ["warm", "heartwarming", "comedic", "emotional", "light-hearted", "sincere"],
    setting: ["modern", "law-firm", "urban", "courtroom", "everyday-seoul"],
    characterTypes: ["autistic-brilliant-attorney", "warm-supportive-colleagues", "cold-competent-senior-attorney", "earnest-love-interest", "complex-clients"],
    streaming: { viki: true, netflix: true },
    network: "ENA",
    actors: [
      { name: "Park Eun-bin", role: "Woo Young-woo", isLead: true },
      { name: "Kang Tae-oh", role: "Lee Jun-ho", isLead: false }
    ],
    matchReasoningHints: [
      "The Good Doctor meets Korean legal drama — same 'neurodivergent protagonist in a high-stakes professional setting' premise but with more warmth and less medical trauma",
      "Boston Legal energy — the cases are genuinely weird and often funny and the show is using them as lenses on larger questions about what the law is supposed to do",
      "Speechless (the ABC series) for its refusal to make the disability the only thing about the character — Woo Young-woo has a full inner life, professional ambition, and opinions about whales",
      "Parks and Recreation's workplace warmth: the show is about people who are genuinely good at their jobs and genuinely good to each other, which is rarer in drama than it sounds",
      "Park Eun-bin won the Baeksang for this and it is not a sentimental choice — the performance is technically extraordinary, calibrated to a specific inner logic that never breaks"
    ]
  },

  {
    id: "little-women",
    title: "Little Women",
    year: 2022,
    episodes: 12,
    synopsis: "Three sisters from a poor Seoul family stumble into a conspiracy involving sixty-nine billion won that the most powerful family in Korea has been moving in secret. Oh In-joo is exhausted and pragmatic and would like to be comfortable just once; Oh In-kyung is a journalist who still believes in what that means; Oh In-hye is the youngest, the most talented, and the one with the most dangerous proximity to the family at the center of everything. A darkly propulsive thriller about class, sisterhood, and what three women who have never had enough will risk to take what they need — named for the Alcott novel but sharing its bones, not its comfort.",
    genres: ["thriller", "drama", "mystery"],
    themes: ["class-warfare", "sisterhood", "corruption", "survival", "moral-complexity", "money-and-power"],
    tropes: ["sisters-as-trio", "chaebol-conspiracy", "ordinary-people-caught-in-powerful-world", "moral-complexity", "cat-and-mouse", "wealth-obsession"],
    tone: ["tense", "dark", "dramatic", "emotionally-intense", "cinematic"],
    setting: ["modern", "chaebol-world", "seoul", "international", "art-world"],
    characterTypes: ["pragmatic-eldest-sister", "principled-journalist-sister", "gifted-youngest-sister", "chaebol-villain-matriarch", "dangerous-male-antagonist"],
    streaming: { viki: true, netflix: true },
    network: "tvN",
    actors: [
      { name: "Kim Go-eun", role: "Oh In-joo", isLead: true },
      { name: "Nam Ji-hyun", role: "Oh In-kyung", isLead: true },
      { name: "Park Ji-hu", role: "Oh In-hye", isLead: true },
      { name: "Uhm Ji-won", role: "Choi Do-il's mother", isLead: false }
    ],
    matchReasoningHints: [
      "Parasite's class anger translated into a thriller — the show is using genre mechanics to examine the same thing: what the poor lose to the rich and whether taking it back constitutes theft",
      "Sharp Objects' 'three women, a conspiracy, and a villain who wears warmth as a weapon' structural logic — the enemy here is charming and the show understands why charm is more dangerous than cruelty",
      "Succession energy in the antagonist family: power that is so entrenched it has become culture, wielded by people who genuinely believe they are above consequence because they always have been",
      "The show is 12 episodes of sustained dread with a female friendship at the center — the sisterhood is what makes it watchable, because watching three people be willing to go all the way for each other is its own kind of hope",
      "Kim Go-eun is the load-bearing wall: In-joo's exhausted pragmatism is the emotional register of the whole show, and every moment of moral compromise lands because she makes us understand exactly what it costs"
    ]
  },

  {
    id: "my-liberation-notes",
    title: "My Liberation Notes",
    year: 2022,
    episodes: 16,
    synopsis: "Three siblings in their late twenties and early thirties commute two hours each way from their family home in Gyeonggi Province to Seoul, every day, in a life that feels like it is happening to them rather than by them. Mi-jeong wants to be liberated — from what exactly, she can't quite say, but she starts a Liberation Club with two coworkers to explore the idea. The quiet, remote man who rents the family's outbuilding might have his own reasons for being exactly as far from the world as possible. A drama that is neither romance nor slice-of-life but something more specific: an examination of what it means to want a life that is your own.",
    genres: ["drama", "romance", "slice-of-life"],
    themes: ["searching-for-meaning", "ordinary-life", "family-dynamics", "liberation", "rural-vs-urban", "existential-longing"],
    tropes: ["quiet-male-lead", "slow-burn", "found-meaning", "ordinary-people-extraordinary-feelings", "commuter-life"],
    tone: ["quiet", "contemplative", "literary", "warm", "melancholic", "slice-of-life"],
    setting: ["modern", "gyeonggi-province", "rural-commuter", "urban-office", "family-home"],
    characterTypes: ["searching-female-lead", "mysterious-silent-male-lead", "ambitious-elder-sister", "disconnected-elder-brother", "warm-farming-parents"],
    streaming: { viki: true, netflix: true },
    network: "JTBC",
    actors: [
      { name: "Kim Ji-won", role: "Yeom Mi-jeong", isLead: true },
      { name: "Son Seok-gu", role: "Gu", isLead: true }
    ],
    matchReasoningHints: [
      "Normal People's quiet interiority — the show is doing the same thing: a romance told mostly through what people can't say and what they do instead of saying it",
      "My Brilliant Friend (Elena Ferrante) in its depiction of young people who feel trapped in their circumstances and the specific hunger to want something different without being able to name it",
      "Paterson (Jim Jarmusch film) energy — the beauty of ordinary repetition, examined with care rather than condescension, and the discovery that a life can contain depth without ambition",
      "For any viewer who has ever commuted and sat with the specific loneliness of that space: the show knows exactly what that feels like and treats it as worthy of drama",
      "Son Seok-gu is doing something remarkable with Gu — a man of almost no words who nonetheless communicates an interior life entirely through behavior, and the show trusts the actor enough to let that work"
    ]
  },

  {
    id: "under-the-queen-s-umbrella",
    title: "Under the Queen's Umbrella",
    year: 2022,
    episodes: 16,
    synopsis: "Queen Im Hwa-ryeong has spent decades surviving the palace with her sons alive — which was harder than it sounds, because the palace is a place where children die of political inconvenience. Now the Crown Prince is gravely ill, and the succession battle that she has been holding off with sheer force of will is beginning. The show follows her as she manages five sons with wildly different temperaments, an entrenched hierarchy that wants to be rid of her, and a king who is not always an ally — with the ruthless competence of a woman who has never once had the luxury of being only a mother. A palace drama that places a woman at the absolute center of political power and takes her there seriously.",
    genres: ["historical", "drama", "romance"],
    themes: ["motherhood", "political-survival", "palace-intrigue", "succession-battle", "female-power", "sacrifice-for-children"],
    tropes: ["queen-as-protagonist", "palace-intrigue", "succession-drama", "strong-female-lead", "political-maneuvering", "mother-protecting-children"],
    tone: ["dramatic", "tense", "emotional", "epic", "satisfying"],
    setting: ["joseon-dynasty", "palace", "historical-korea", "court"],
    characterTypes: ["formidable-queen-mother", "king-navigating-loyalty", "five-distinct-princes", "scheming-court-factions", "loyal-servants"],
    streaming: { viki: true, netflix: true },
    network: "tvN",
    actors: [
      { name: "Kim Hye-soo", role: "Queen Im Hwa-ryeong", isLead: true },
      { name: "Kim Hae-sook", role: "Queen Dowager", isLead: false }
    ],
    matchReasoningHints: [
      "The Crown's 'a woman inside an institution that was not built for her, navigating it with complete competence while no one acknowledges how much that costs' register — applied to Joseon rather than Windsor",
      "Game of Thrones' succession politics (Season 1-4 era) without the violence pornography — the show is about who has what information and who controls what narrative, and the queen is playing chess while everyone else plays checkers",
      "Downton Abbey's generational drama with actual political stakes — the show is interested in what the institution does to the people inside it, and specifically what it does to the person who holds everything together",
      "For any viewer who loved Mr. Queen but wanted the female political power story played completely straight rather than for comedy — this is that version, with full tragic weight",
      "Kim Hye-soo doing her second career-best performance in one year (after Juvenile Justice) — the queen is a completely different register, entirely composure and strategy, and it's a masterclass in what K-drama allows older actresses to do"
    ]
  },

  {
    id: "see-sea",
    title: "See Sea",
    year: 2023,
    episodes: 8,
    synopsis: "Two old friends reunite at a diving trip in Jeju Island. The atmosphere is sun-soaked, the diving sequences are genuinely beautiful, and what begins as a holiday turns into a reckoning with feelings neither of them named when they had the chance. A short-form summer romance that uses its running time efficiently and trusts its leads to do the work. The Jeju setting does its own significant share of the storytelling.",
    genres: ["romance", "drama"],
    themes: ["second-chances", "old-feelings-resurface", "summer", "nature", "unfinished-business"],
    tropes: ["old-friends-to-lovers", "vacation-romance", "slow-burn", "unspoken-feelings"],
    tone: ["warm", "light-hearted", "romantic", "summer-vibes", "gentle"],
    setting: ["jeju-island", "coastal", "diving-world", "modern"],
    characterTypes: ["thoughtful-female-lead", "warm-male-lead", "supportive-friends"],
    streaming: { viki: true },
    network: "Naver NOW",
    actors: [
      { name: "Kim Go-eun", role: "Yoon Se-kyung", isLead: true },
      { name: "Choi Woo-shik", role: "Jung Hyun-su", isLead: true }
    ],
    matchReasoningHints: [
      "Before Sunrise compressed to 8 episodes with scuba diving — two people who know each other, a beautiful place, and the specific conversation you can only have somewhere that has no past",
      "Summer Catch energy with actual character depth — the setting is doing real narrative work, not just backdrop, and the show is smart enough to let it",
      "Jojo Moyes 'two people with a shared past meeting in a neutral space and renegotiating everything' structure in a short, efficient format that doesn't overstay",
      "The diving sequences are genuinely beautiful and used metaphorically — going underwater to say the things that can't be said above the surface is both literal and correct",
      "8 episodes is exactly right: the story doesn't have more in it than that, and the show knows this, which is rare"
    ]
  },

  {
    id: "doctor-slump",
    title: "Doctor Slump",
    year: 2024,
    episodes: 16,
    synopsis: "Nam Ha-neul and Yeo Jeong-woo were rivals all through school and medical training — she the top student in every class, he the effortlessly brilliant one everyone resented and admired. Both are now spectacular burnout cases living in the same building, too exhausted to maintain their former selves and, inconveniently, the only people who fully understand each other's specific collapse. A romance built entirely on the premise that burning out together is a form of intimacy, and that meeting someone at your worst is sometimes the condition that makes honesty possible.",
    genres: ["romance", "comedy", "drama"],
    themes: ["burnout", "mental-health", "second-chances", "rivalry-to-love", "professional-identity", "healing"],
    tropes: ["rivals-become-lovers", "neighbors", "burnout-recovery", "equal-match-leads", "slow-burn", "adult-romance"],
    tone: ["warm", "comedic", "romantic", "honest", "heartwarming", "relatable"],
    setting: ["modern", "medical-world", "urban", "residential-building", "everyday-seoul"],
    characterTypes: ["burned-out-top-student", "burned-out-star-doctor", "meddling-family", "loyal-friends", "new-colleagues"],
    streaming: { viki: true, netflix: true },
    network: "JTBC",
    actors: [
      { name: "Park Hyung-sik", role: "Yeo Jeong-woo", isLead: true },
      { name: "Park Shin-hye", role: "Nam Ha-neul", isLead: true }
    ],
    matchReasoningHints: [
      "The burnout narrative is doing something honest about how competitive achievement systems damage people — the show is not just a romance, it's an examination of what Korean academic and professional pressure costs",
      "Schitt's Creek Season 2-3 energy: two people at their lowest discovering that the lowest is actually where you find out who is actually there — warm, funny, and built on competence that the characters can't access right now",
      "Silver Linings Playbook's 'meeting someone while both of you are in crisis' emotional logic — the romance is possible precisely because neither of them is performing anything anymore",
      "For any Park Shin-hye fan: this is the role that uses everything she can do — the character is smart, broken, funny, and warming up slowly, and it suits her completely",
      "The rivals-to-neighbors-to-lovers structure is narratively satisfying because the show earns every stage: we see enough of the rivalry to understand the history, enough of the collapse to earn the vulnerability"
    ]
  },

  {
    id: "my-perfect-stranger",
    title: "My Perfect Stranger",
    year: 2023,
    episodes: 16,
    synopsis: "Yoon Hae-joon is an anchorman who travels back to 1987 and discovers the small town where his grandmother grew up, along with a serial killer who hasn't been caught yet. Baek Yoon-young also time-travels back to the same town with a specific goal: stop her parents from getting married, so she won't be born into a family dynamic that cost her so much. Their goals conflict in ways neither expects, and the small-town 1987 setting is rendered with enough detail to be its own character. A time-travel mystery-romance that takes its murder plot as seriously as its romantic one.",
    genres: ["romance", "mystery", "thriller", "historical"],
    themes: ["time-travel", "changing-the-past", "first-love", "family-legacy", "serial-killer-investigation", "1980s-korea"],
    tropes: ["time-travel", "fish-out-of-water", "slow-burn", "mystery-romance", "changing-history", "period-setting"],
    tone: ["mysterious", "romantic", "atmospheric", "warm", "tense", "nostalgic"],
    setting: ["1987-korea", "small-town", "rural", "time-travel", "modern-present"],
    characterTypes: ["principled-anchorman", "determined-time-traveler", "serial-killer-investigator", "1987-small-town-ensemble", "warm-family-figures"],
    streaming: { viki: true },
    network: "KBS2",
    actors: [
      { name: "Kim Dong-wook", role: "Yoon Hae-joon", isLead: true },
      { name: "Jin Ki-joo", role: "Baek Yoon-young", isLead: true }
    ],
    matchReasoningHints: [
      "Signal's time-manipulation-as-murder-investigation DNA — the show uses the same logic of using a time mechanism to work backwards through a crime, but adds a romantic through-line and a period setting",
      "Back to the Future's warm period-setting nostalgia but played for drama rather than comedy — 1987 Korea is specific, textured, and the show uses the period to do both narrative and atmospheric work",
      "Station Eleven's 'going back to the source to understand the present' emotional structure, applied to family history and a serial killer investigation simultaneously",
      "For Romance Is a Bonus Book fans who want the 1980s nostalgia in a mystery-thriller register rather than a pure romance — the period detail is done with equal care, the tone is darker and more propulsive",
      "The serial killer subplot is taken completely seriously — this is not a thriller-lite, and the show earns its crime-drama classification alongside its romance classification"
    ]
  },

  {
    id: "mask-girl",
    title: "Mask Girl",
    year: 2023,
    episodes: 7,
    synopsis: "Kim Mo-mi is a pretty-average-looking office worker who becomes a masked internet celebrity at night — and whose double life spirals into consequences neither her audience nor her coworkers nor she herself was prepared for. A dark, structurally unusual thriller that tells the same story from multiple perspectives and does not flinch from what it's examining: beauty standards, online performance, and the violence that follows women who refuse to be seen correctly. One of the most formally inventive and disturbing dramas of 2023.",
    genres: ["thriller", "drama", "mystery"],
    themes: ["beauty-standards", "online-identity", "obsession", "female-survival", "consequences-of-performance", "violence-against-women"],
    tropes: ["multiple-perspectives", "dark-thriller", "obsessive-fan", "identity-and-performance", "female-protagonist-at-risk", "structural-experimentation"],
    tone: ["dark", "intense", "disturbing", "cinematic", "unflinching", "stylized"],
    setting: ["modern", "office", "online-world", "various-social-settings"],
    characterTypes: ["masked-online-performer", "obsessive-fan", "detective-mother", "female-survivors", "complex-antagonists"],
    streaming: { viki: false, netflix: true },
    network: "Netflix",
    actors: [
      { name: "Go Hyun-jung", role: "Kim Mo-mi (adult)", isLead: true },
      { name: "Nana", role: "Kim Mo-mi (younger)", isLead: true },
      { name: "Yeom Hye-ran", role: "Kim Kyung-ja", isLead: false }
    ],
    matchReasoningHints: [
      "Gone Girl's structural revelation mechanic — the show deliberately withholds and recontextualizes, and the same events look different from different perspectives in ways that change your moral alignment",
      "You (Netflix) but from the other side — the show is interested in what it's like to be watched by someone who has decided what you are before you've decided what you are",
      "Black Mirror's 'technology and performance and consequence' thematic register but grounded in specifically Korean beauty-standard anxiety rather than generalized tech anxiety",
      "The People v. O.J. Simpson's multi-perspective structure used to examine a crime from the inside out — we understand all parties without the show pretending any of them are right",
      "7 episodes is exactly the right length: the story is a burn and the show knows this — it doesn't stretch its darkness into something comfortable, it stays as sharp as it opened"
    ]
  },

  {
    id: "the-glory",
    title: "The Glory",
    year: 2022,
    episodes: 16,
    synopsis: "Moon Dong-eun endured years of extreme bullying in high school — burning, fracturing, systematic humiliation — that destroyed her future. She spent the next two decades building a single-purpose life: becoming the homeroom teacher of her lead tormentor's child, and dismantling everything the tormentor has built with the patience of someone who has planned every move. A revenge thriller that takes its premise seriously as tragedy and never asks viewers to find the violence comfortable, even when the violence is justice. The most talked-about Korean drama of 2022-2023.",
    genres: ["thriller", "drama", "mystery"],
    themes: ["revenge", "trauma", "systemic-complicity", "class-and-privilege", "patience", "what-justice-costs"],
    tropes: ["revenge-plot", "long-con", "trauma-survivor", "methodical-planning", "multiple-antagonists", "dark-romance"],
    tone: ["dark", "intense", "cold", "methodical", "emotionally-devastating", "cinematic"],
    setting: ["modern", "school", "chaebol-world", "urban", "multiple-timeframes"],
    characterTypes: ["methodical-revenge-protagonist", "group-of-bullies-now-adults", "complicit-adults", "unexpected-ally", "patient-love-interest"],
    streaming: { viki: false, netflix: true },
    network: "Netflix",
    actors: [
      { name: "Song Hye-kyo", role: "Moon Dong-eun", isLead: true },
      { name: "Lee Do-hyun", role: "Joo Yeo-jeong", isLead: false },
      { name: "Im Ji-yeon", role: "Park Yeon-jin", isLead: false }
    ],
    matchReasoningHints: [
      "Oldboy's long-con revenge methodology in a more grounded, less operatic register — the satisfaction is in watching someone who has been planning for twenty years finally begin to move the pieces",
      "Sharp Objects' 'trauma survivor who became something hard and specific' female protagonist — Dong-eun is not trying to heal; she is trying to finish something, which is a different kind of character",
      "You (Netflix) inverted — this is the story from the perspective of someone who would be the victim in another show, who chose not to be the victim",
      "The show sits with the moral weight of what it's depicting: the revenge is satisfying and also terrible, and Song Hye-kyo refuses to let viewers have the satisfaction without also having the cost",
      "Song Hye-kyo's most discussed performance — cold, methodical, present only to accomplish something specific — and it is not a comfortable watch, which is exactly the point"
    ]
  },

  // ─── Additional Viki-Popular Titles ──────────────────────────────────────
  {
    id: "light-on-me",
    title: "Light On Me",
    year: 2021,
    episodes: 16,
    synopsis: "New student Tae-in joins his high school's student council when he falls for a classmate — and finds himself navigating an unexpected love triangle that includes the council president and a childhood best friend. A BL drama that became one of the most popular Korean BL titles on Viki, built on sweet character dynamics and the specific vulnerability of high school feelings articulated carefully. Made with genuine craft for a genre that Korean drama was slow to develop.",
    genres: ["romance", "drama", "BL"],
    themes: ["first-love", "coming-of-age", "self-discovery", "friendship-becomes-love", "high-school"],
    tropes: ["love-triangle", "childhood-friend", "student-council", "slow-burn", "first-love"],
    tone: ["sweet", "gentle", "romantic", "warm", "emotional"],
    setting: ["modern", "high-school", "campus", "urban"],
    characterTypes: ["quiet-new-student", "student-council-president", "devoted-childhood-friend", "supportive-ensemble"],
    streaming: { viki: true },
    network: "Naver NOW",
    actors: [
      { name: "Choi Chan-ho", role: "Shin Tae-in", isLead: true },
      { name: "Kang Yoo-seok", role: "Noh Da-on", isLead: true }
    ],
    matchReasoningHints: [
      "Heartstopper energy — the gentle, specific rendering of first love between two boys who don't have a framework for what they're feeling, told with care rather than spectacle",
      "Love, Simon's 'figuring out who you are while being a teenager in high school' emotional register applied to a Korean campus setting with less external pressure",
      "To All the Boys I've Loved Before in the sense that the feelings are large and the stakes feel enormous and the show treats both as real rather than melodramatic",
      "One of the first Korean BL dramas to get significant international viewership on Viki — a landmark in terms of what the market demonstrated it wanted from Korean content",
      "The love triangle is handled with rare fairness: none of the three parties is the villain, and the show lets the emotional complexity exist without forcing a clean resolution of everyone's feelings"
    ]
  },

  {
    id: "the-secret-of-my-love",
    title: "The Secret of My Love",
    year: 2024,
    episodes: 80,
    synopsis: "A complex family drama following multiple generations as long-buried family secrets surface and reshape every relationship. Two families with intertwined histories discover the truths their parents kept hidden — and must decide what to do with them. A traditional Korean family melodrama with the scope and ambition that KBS family dramas are built for: interlocking storylines, generational perspective, and the specific emotional register of secrets that were kept for reasons that seemed good at the time.",
    genres: ["drama", "romance", "melodrama", "family"],
    themes: ["family-secrets", "generational-trauma", "forgiveness", "second-chances", "identity-and-family", "love-across-obstacles"],
    tropes: ["family-secret", "multiple-generations", "long-running-weekend-drama", "love-triangle", "parents-and-children"],
    tone: ["dramatic", "emotional", "warm", "melodramatic", "family-focused"],
    setting: ["modern", "family-home", "urban", "korean-family-drama-world"],
    characterTypes: ["family-patriarch-matriarch", "adult-children-with-secrets", "rival-family", "loyal-extended-family", "young-romance-leads"],
    streaming: { viki: true },
    network: "KBS2",
    actors: [
      { name: "Oh Ji-ho", role: "Lead Male", isLead: true },
      { name: "Jun Soo-kyung", role: "Lead Female", isLead: true }
    ],
    matchReasoningHints: [
      "Brothers & Sisters (the ABC drama) energy: a family drama where every generation is dealing with the same fundamental questions about honesty, loyalty, and what you owe the people who raised you",
      "Knives Out's 'family gathering that unearths what was supposed to stay buried' structure, extended to full serialized family drama scale",
      "Downton Abbey's generational scope and its interest in what the old ways cost and what replacing them requires — in a Korean family drama register",
      "Long-running KBS family dramas have a specific art form: the slow accumulation of relationship dynamics over 80 episodes creates a density of character interaction that shorter dramas cannot achieve",
      "For viewers who want the extended emotional investment of a traditional Korean family drama: the format rewards patience with a fullness of character and relationship that compressed formats don't allow"
    ]
  },

  {
    id: "love-song-for-illusion",
    title: "Love Song for Illusion",
    year: 2024,
    episodes: 12,
    synopsis: "Crown Prince Sajo Hyun has been locked away his entire life due to a prophecy that the person who sees his face will die — but the bloodthirsty alter-ego that emerges when he loses control of his emotions has been living for something else entirely. Assassin Yeon Wol is sent to kill him and instead ends up in his employ, navigating the world behind the walls and the two sides of the man she was supposed to destroy. A sageuk with supernatural elements and a romance that builds between a woman with a mission and a man who has never been allowed to exist freely.",
    genres: ["historical", "romance", "fantasy", "action"],
    themes: ["forbidden-love", "hidden-identity", "alter-ego", "palace-isolation", "sacrifice", "fate"],
    tropes: ["assassin-female-lead", "hidden-male-lead", "dual-personality", "palace-intrigue", "slow-burn", "enemies-to-lovers"],
    tone: ["dramatic", "romantic", "dark", "mysterious", "atmospheric"],
    setting: ["joseon-dynasty", "palace", "historical-korea", "court"],
    characterTypes: ["isolated-prince-with-alter-ego", "skilled-female-assassin", "scheming-court-faction", "loyal-guards", "supernatural-element"],
    streaming: { viki: true },
    network: "MBC",
    actors: [
      { name: "Park Ji-hoon", role: "Sajo Hyun", isLead: true },
      { name: "Hong Ye-ji", role: "Yeon Wol", isLead: true }
    ],
    matchReasoningHints: [
      "Dr. Jekyll and Mr. Hyde meets sageuk — the dual personality premise is used for romantic tension rather than horror, and the show understands which version the female lead is actually falling for",
      "Mr. Queen energy in its willingness to use historical setting as backdrop for a romance that is fundamentally about two people trapped in roles they didn't choose",
      "Disney's Beauty and the Beast in its 'woman sent into the beast's domain discovers something different from what she expected' emotional structure — in Joseon Korea, with much better fight choreography",
      "For Flower of Evil fans who want the 'who is this person actually' romantic tension in a historical setting: the mystery of which version of Sajo Hyun is the real one drives the romance",
      "Park Ji-hoon doing dual performance work — the shift between personalities is distinct and committed, and the show gives him enough to do with both that the contrast is satisfying"
    ]
  },

  {
    id: "marry-my-husband-2",
    title: "Live Your Own Life",
    year: 2023,
    episodes: 50,
    synopsis: "Tak Hong-joo has spent her entire life being the family's designated sacrificial lamb — giving up her ambitions, her relationships, and her time to support parents who take it for granted and a sister who expects it. When she finally stops, the drama examines what it looks like for a woman in her forties to build a life for herself from scratch. A KBS family drama that takes the 'eldest daughter syndrome' seriously as a subject, and gives its lead character the space to rebuild rather than simply endure.",
    genres: ["drama", "romance", "slice-of-life", "family"],
    themes: ["self-sacrifice", "family-dynamics", "finding-yourself", "female-autonomy", "second-act-life", "letting-people-go"],
    tropes: ["self-sacrificing-female-lead", "family-drama", "late-blooming-romance", "family-letting-go", "building-a-life"],
    tone: ["warm", "emotional", "slice-of-life", "realistic", "heartwarming"],
    setting: ["modern", "urban", "family-home", "everyday-seoul"],
    characterTypes: ["self-sacrificing-eldest-daughter", "taking-family-members", "loyal-friend", "supportive-love-interest", "warm-workplace-colleagues"],
    streaming: { viki: true },
    network: "KBS2",
    actors: [
      { name: "Uee", role: "Tak Hong-joo", isLead: true },
      { name: "Lee Sang-yi", role: "Love Interest", isLead: true }
    ],
    matchReasoningHints: [
      "Gilmore Girls: A Year in the Life energy — a woman in midlife taking stock of what she's built and realizing it was entirely for other people, and the specific courage of starting over anyway",
      "Normal People's honesty about how family systems work on people over decades, applied to a family drama format that has the runtime to show the accumulation",
      "Fleabag's 'I've been performing being okay for so long I forgot what okay feels like' emotional register, in a Korean family drama that has warmth alongside the clarity",
      "The show is specifically about eldest-daughter experience in Korean families and the cultural expectation of female self-sacrifice — it resonates internationally because that experience is not culturally unique",
      "For viewers who watched Reply 1988 for the family dynamics and want that emotional register with a modern female-autonomy storyline: this delivers the warmth with more conscious feminist framing"
    ]
  },

  {
    id: "catch-me-if-you-can-kdrama",
    title: "Catch Me If You Can",
    year: 2023,
    episodes: 16,
    synopsis: "Oh Dan-ah is a no-nonsense fraud detective who has spent her career catching con artists — which makes it spectacularly inconvenient when the most charming man she has ever met turns out to be one. Baek Hyun-joon runs elaborate cons with the kind of creative investment that makes you wonder what he could have done with his talents if he'd chosen differently. A cat-and-mouse romance where the hunter and the hunted keep switching places, and the line between the performance and the feeling gets thinner with every episode.",
    genres: ["romance", "comedy", "thriller"],
    themes: ["con-artist", "trust-and-deception", "falling-for-the-wrong-person", "identity-performance", "cat-and-mouse"],
    tropes: ["enemies-to-lovers", "cat-and-mouse", "con-artist-male-lead", "slow-burn", "detective-female-lead", "forced-proximity"],
    tone: ["comedic", "fun", "romantic", "fast-paced", "witty"],
    setting: ["modern", "urban", "fraud-investigation", "various-con-settings", "seoul"],
    characterTypes: ["sharp-fraud-detective", "charming-con-artist", "loyal-detective-team", "con-artist-network", "morally-flexible-supporting-cast"],
    streaming: { viki: true },
    network: "tvN",
    actors: [
      { name: "Kim Ji-won", role: "Oh Dan-ah", isLead: true },
      { name: "Lee Joon-gi", role: "Baek Hyun-joon", isLead: true }
    ],
    matchReasoningHints: [
      "Catch Me If You Can (the film) emotional structure: the person doing the catching and the person being caught develop a genuine regard that complicates both their jobs — the show is interested in the same moral ambiguity",
      "White Collar energy: a charming con artist and the straight-arrow person assigned to catch them, forced into proximity, discovering they have more in common than their respective rule-following histories suggest",
      "Hustle (the film) or Ocean's Eleven in K-drama form: the con mechanics are taken seriously and the show lets you enjoy the cleverness before it complicates your enjoyment",
      "Lee Joon-gi doing full-charisma mode after Scarlet Heart Ryeo and Criminal Minds Korea — the character requires someone who makes charm look effortless and dangerous simultaneously",
      "Kim Ji-won's detective energy is completely different from her Queen of Tears or My Liberation Notes mode — this is her in fast, sharp comedy register and the contrast is genuinely fun"
    ]
  },

  {
    id: "cheer-up-2022",
    title: "Cheer Up!",
    year: 2022,
    episodes: 16,
    synopsis: "Do Hae-yi enrolls in a university cheer squad not because she has any interest in cheering but because she needs a specific scholarship and the squad is attached to it. Teacher Kim Tae-yang has been coaching the struggling squad back from near-disbandment. The show is about what happens when someone who is there for purely pragmatic reasons discovers she actually cares about the thing — the squad, the people in it, and the man who made her care about caring. A campus romance with a sharply realized ensemble and genuine sports-drama energy.",
    genres: ["romance", "comedy", "drama", "sports"],
    themes: ["campus-life", "unexpected-belonging", "cheerleading", "found-family", "self-discovery", "ambition"],
    tropes: ["reluctant-joiner", "teacher-student-adjacent", "found-family", "slow-burn", "campus-romance", "underdog-team"],
    tone: ["light-hearted", "energetic", "romantic", "warm", "comedic"],
    setting: ["modern", "university", "campus", "cheer-squad", "urban"],
    characterTypes: ["pragmatic-female-lead", "passionate-coach", "cheer-squad-ensemble", "rival-school-squad", "warm-supportive-friends"],
    streaming: { viki: true },
    network: "SBS",
    actors: [
      { name: "Han Ji-hyun", role: "Do Hae-yi", isLead: true },
      { name: "Bae In-hyuk", role: "Kim Tae-yang", isLead: true }
    ],
    matchReasoningHints: [
      "Bring It On (the film) energy applied to Korean university culture — the underdog team with a new member who changes everything is a classic setup, and the show commits to it with genuine cheer-squad craft",
      "Pitch Perfect's found-family-through-an-unlikely-performance-group dynamic: the squad members become the point, and the romance is embedded in the story of a group becoming something real",
      "Like Brooklyn Nine-Nine in its ensemble warmth: you show up for the leads, you stay for the supporting characters who get enough development to become people you care about",
      "Campus romance at its most textured — the university setting is used for more than just backdrop, and the cheer-squad world has a specific social ecosystem the show renders faithfully",
      "For Strong Woman Do Bong-soon fans who want a female lead who starts with a clear self-interest and ends up genuinely transformed by the community she was cynical about: this is the arc"
    ]
  },

  {
    id: "a-piece-of-your-mind",
    title: "A Piece of Your Mind",
    year: 2020,
    episodes: 16,
    synopsis: "Moon Ha-won develops AI programs that capture memories — and has been quietly in love with his best friend's wife for years, carrying that love with the careful restraint of someone who knows it cannot go anywhere. Ji Seo-woo is a classical recording engineer whose marriage ended in distance, and who finds herself in Ha-won's orbit through a series of connections that feel both accidental and inevitable. A quiet, literary romance built on restraint and the specific weight of feelings that are never quite the right shape for the situation.",
    genres: ["romance", "drama", "slice-of-life"],
    themes: ["unrequited-love", "grief", "connection-through-work", "AI-and-memory", "slow-feeling", "unexpected-love"],
    tropes: ["slow-burn", "unrequited-love-redirected", "AI-adjacent", "quiet-male-lead", "healing-through-connection"],
    tone: ["quiet", "contemplative", "literary", "romantic", "melancholic", "restrained"],
    setting: ["modern", "AI-studio", "recording-studio", "urban", "everyday-seoul"],
    characterTypes: ["quiet-AI-developer", "classical-recording-engineer", "emotionally-unavailable-best-friend", "warm-supporting-cast", "patient-secondary-love-interest"],
    streaming: { viki: true, netflix: true },
    network: "MBC",
    actors: [
      { name: "Jung Hae-in", role: "Moon Ha-won", isLead: true },
      { name: "Chae Soo-bin", role: "Ji Seo-woo", isLead: true }
    ],
    matchReasoningHints: [
      "Her (the film) adjacency — the AI-memory concept is the entry point but the show is actually about the human experience of longing and whether a feeling can outlast the situation that generated it",
      "Paterson (Jarmusch) register: a drama built around quiet, specific moments in creative work and the feelings that occur in the spaces between them — not very much happens and all of it matters",
      "For My Liberation Notes fans who want the 'feelings articulated through restraint rather than declaration' emotional register in a shorter, more romantic format",
      "Jung Hae-in's quietest performance — the character is someone who has been holding something carefully for a long time, and the restraint required for that is entirely visible in how he inhabits the role",
      "The recording-studio setting is used with genuine craft: the work of capturing and preserving sound becomes a metaphor for what the characters are trying to do with their own experience"
    ]
  },

  {
    id: "a-good-day-to-be-a-dog-2023",
    title: "If You Wish Upon Me",
    year: 2022,
    episodes: 16,
    synopsis: "Yoon Gyeo-re has lived in institutions since childhood and knows no version of the world that is reliably warm. Forced into community service at a hospice, he meets a palliative care team and the terminal patients whose remaining wishes they're trying to fulfill — and the man who runs the team, who was also raised without safety and built something out of it anyway. A drama about the specific possibility of warmth in institutions designed to manage ending rather than beginning, with Ji Chang-wook at his most raw.",
    genres: ["drama", "romance", "slice-of-life"],
    themes: ["healing", "found-family", "end-of-life", "trauma", "meaning-of-life", "giving-and-receiving-care"],
    tropes: ["reluctant-caregiver-becomes-invested", "found-family", "trauma-backstory-reveals", "mentor-figure", "healing-through-others"],
    tone: ["emotional", "warm", "bittersweet", "heartwarming", "slice-of-life"],
    setting: ["modern", "hospice", "community-service", "everyday-korea"],
    characterTypes: ["traumatized-young-male-lead", "palliative-care-team", "terminal-patients-with-wishes", "wise-mentor", "warm-care-workers"],
    streaming: { viki: true },
    network: "MBC",
    actors: [
      { name: "Ji Chang-wook", role: "Yoon Gyeo-re", isLead: true },
      { name: "Sooyoung", role: "Seo Yeon-joo", isLead: true }
    ],
    matchReasoningHints: [
      "The Bucket List energy but from the caregiver's side — the show is interested in what it costs and what it gives to be the person who helps someone else do the thing they need to do before they can't",
      "ER's institutional warmth: a workplace where the stakes are absolute and the people doing the work have to find ways to carry that, and the show treats the hospice environment with the same specificity",
      "Move to Heaven vibes — another K-drama built around the work of honoring what people leave behind, with the same willingness to use the grief for character development rather than manipulation",
      "Ji Chang-wook doing something genuinely different from his action roles: the character is a person who has never been cared for learning what care looks like from the inside of providing it, and the performance is uncomfortably real",
      "For viewers who want the emotional intensity of a medical drama without the procedural mechanics: this show's stakes are entirely personal and the medicine is palliative, which changes everything about the register"
    ]
  },

  {
    id: "class-of-2020",
    title: "Oh! My Assistant",
    year: 2024,
    episodes: 12,
    synopsis: "A webtoon writer who has hit a creative wall ends up with an AI assistant that has developed opinions, preferences, and an inconveniently warm regard for her. The show uses the AI relationship as a lens on creative process, isolation, and what it means to be seen — before pivoting into a human romance that the AI dynamic has been preparing both leads for. A fresh premise in the growing genre of dramas about creative work, with enough self-awareness about its AI hook to use it for substance rather than novelty.",
    genres: ["romance", "comedy", "drama", "sci-fi"],
    themes: ["creative-process", "AI-and-humanity", "loneliness", "being-seen", "unexpected-connection", "artistic-block"],
    tropes: ["AI-love-interest-adjacent", "creative-protagonist", "unexpected-connection", "slow-burn", "webtoon-world", "isolation-to-connection"],
    tone: ["light-hearted", "comedic", "warm", "sweet", "modern"],
    setting: ["modern", "webtoon-studio", "urban", "creative-industry", "seoul"],
    characterTypes: ["blocked-webtoon-creator", "warm-AI-assistant", "supportive-editor", "creative-rivals", "loyal-friends"],
    streaming: { viki: true },
    network: "KakaoTV",
    actors: [
      { name: "Park Bo-young", role: "Webtoon Creator", isLead: true },
      { name: "Chae Jong-hyeop", role: "AI/Human lead", isLead: true }
    ],
    matchReasoningHints: [
      "Her (Spike Jonze) but warmer and less melancholy: the show is interested in what it means to feel understood by something that was built to understand you, and whether that understanding is real",
      "Silicon Valley meets K-drama rom-com in its AI premise — the show is smart about what AI relationship dynamics actually are rather than just using AI as a shorthand for 'perfect partner'",
      "You've Got Mail's anonymous communication becoming intimate structure with a technology twist: the intimacy builds through a communication channel before the person-to-person connection catches up",
      "For any viewer in a creative field who has experienced the specific loneliness of a creative block: the drama gets the phenomenology right in ways that feel observed rather than assumed",
      "Park Bo-young bringing her warmth and specificity to a creative-professional character — she is the best in K-drama at making interiority visible without exposition"
    ]
  },

  {
    id: "bloody-heart",
    title: "Bloody Heart",
    year: 2022,
    episodes: 16,
    synopsis: "King Lee Tae has survived court politics since childhood by being harder than the people trying to destroy him. Yoo Jung is a commoner woman who becomes entangled in palace affairs through a conspiracy her family never intended to be part of — and whose survival depends on navigating the most dangerous man in the country while he is simultaneously deciding she is the only person he can trust. A sageuk that takes its political mechanics seriously and builds a romance entirely out of two people who are each other's safest option in a world full of unsafe ones.",
    genres: ["historical", "romance", "drama", "political"],
    themes: ["survival-politics", "forbidden-love", "trust-in-a-hostile-world", "sacrifice", "royalty-and-ordinary-people", "court-intrigue"],
    tropes: ["king-loves-commoner", "forbidden-love", "slow-burn", "political-maneuvering", "both-in-danger", "trust-built-through-survival"],
    tone: ["dramatic", "tense", "romantic", "dark", "historical"],
    setting: ["joseon-dynasty", "palace", "court", "historical-korea"],
    characterTypes: ["hardened-king", "resourceful-commoner-female-lead", "scheming-court-faction", "loyal-royal-guard", "dangerous-political-antagonist"],
    streaming: { viki: true },
    network: "KBS2",
    actors: [
      { name: "Lee Joon", role: "King Lee Tae", isLead: true },
      { name: "Kang Han-na", role: "Yoo Jung", isLead: true }
    ],
    matchReasoningHints: [
      "Mr. Sunshine's 'romance between people whose survival requires them to maintain distance' emotional structure in a Joseon court setting — the political stakes make every private moment feel stolen",
      "Game of Thrones' political chess (minus the sexual violence) with a romance at the center that is made more intense by the constant threat level — love as the most dangerous thing you can have in a court drama",
      "Queen In-hyun's Man energy: a smart, principled woman navigating a world designed to destroy her, alongside a man who is powerful enough to help and has specific reasons to do so",
      "The king character is unusual in sageuk: someone who was damaged by the institution before he controlled it, which makes his hardness coherent rather than just antagonistic",
      "For fans of historical romance who want the political intrigue to be doing real work rather than just providing backdrop: the court politics here are the love story's structural support"
    ]
  },

  {
    id: "bloodhounds-2023",
    title: "Money Game",
    year: 2023,
    episodes: 10,
    synopsis: "Bank of Korea officials face a financial crisis that threatens the entire Korean economy — and the decisions made in a few days of panic will determine whether the system survives. A finance drama that takes economic mechanics seriously as drama material, built on the genuine tension of a real historical crisis type (the 1997 IMF crisis is the shadow over every frame). Characters who understand the system from the inside fight about what it costs to save it versus what it costs to let it fail.",
    genres: ["thriller", "drama"],
    themes: ["financial-crisis", "institutional-pressure", "moral-economics", "responsibility", "sacrifice-for-system", "policy-drama"],
    tropes: ["crisis-management", "institutional-drama", "ensemble-expert-team", "ticking-clock", "moral-dilemma"],
    tone: ["tense", "cerebral", "grounded", "dramatic", "realistic"],
    setting: ["modern", "financial-institution", "government", "urban"],
    characterTypes: ["principled-economist", "political-appointee", "financial-insider", "institutional-saboteur", "competent-ensemble-team"],
    streaming: { viki: true },
    network: "tvN",
    actors: [
      { name: "Go Soo", role: "Financial Lead", isLead: true },
      { name: "Lee Sung-min", role: "Antagonist/Institutional", isLead: false }
    ],
    matchReasoningHints: [
      "The Big Short's 'people inside the financial system having incompatible beliefs about what the system is for and what it owes' intellectual drama, in a Korean institutional setting",
      "The West Wing energy in its interest in policy-level decisions and the people smart enough to see the full picture who still disagree about what to do with it",
      "Margin Call's single-building, single-crisis dramatic structure — all the pressure is contained, all the characters are in the same space, and the stakes are genuinely civilizational",
      "For any viewer who watched Misaeng and wanted a drama about Korean institutional culture with more financial-sector specificity and higher-stakes consequences",
      "The 1997 IMF crisis functions as the show's emotional and historical substrate: the drama gains weight from depicting a type of crisis that Korea lived through, and that weight is felt even when the events are fictional"
    ]
  },

  {
    id: "not-others-kdrama",
    title: "Not Others",
    year: 2023,
    episodes: 16,
    synopsis: "Yoo Hye-young and her adult daughter Noh Ji-young find themselves divorced and dating again at the same time — which is complicated enough before they discover they are both seeing men from the same friend group. A family drama that takes its intergenerational premise as a structural device and uses it to examine what relationships look like when you've been through one serious enough to have consequences. Warm, funny, and unusually honest about what women at different life stages want.",
    genres: ["romance", "comedy", "drama", "family"],
    themes: ["intergenerational-romance", "divorce-and-new-love", "mother-daughter-dynamics", "female-friendship", "second-chances", "overlapping-lives"],
    tropes: ["mother-daughter-dating-parallel", "second-chance-romance", "family-comedy", "unexpected-love", "warm-ensemble"],
    tone: ["warm", "comedic", "light-hearted", "romantic", "family-focused"],
    setting: ["modern", "urban", "family-home", "everyday-seoul"],
    characterTypes: ["divorced-mother-dating-again", "adult-daughter-dating", "warm-male-leads", "family-ensemble", "meddling-extended-family"],
    streaming: { viki: true },
    network: "MBC",
    actors: [
      { name: "Kim Hye-ja", role: "Yoo Hye-young", isLead: true },
      { name: "Han Hye-jin", role: "Noh Ji-young", isLead: true }
    ],
    matchReasoningHints: [
      "Grace and Frankie's 'women at different life stages navigating dating after a long-term relationship ends' emotional territory, in a Korean family drama format with more ensemble warmth",
      "Gilmore Girls: A Year in the Life's mother-daughter-equal dynamic: the show genuinely treats both women's romantic lives with the same weight and is interested in the specific ways they're both the same and different",
      "The Kominsky Method energy: older adults navigating the same romantic territory as younger people and the show treating that as funny and moving rather than either inspirational or pathetic",
      "The intergenerational structure creates an unusual comedic situation where the same relationship dynamics play out in completely different registers simultaneously — and the comedy comes from the overlap",
      "Kim Hye-ja doing warm comedy: she is one of the finest actresses in Korean drama history and watching her do a late-life romance with full investment is its own argument for the premise"
    ]
  },

  // ─── Trending Viki — Historical / Romance ────────────────────────────────
  {
    id: "all-of-us-are-dead",
    title: "All of Us Are Dead",
    year: 2022,
    episodes: 12,
    synopsis: "A zombie virus originates at a high school in Hyosan and spreads faster than anyone can contain. The students trapped inside are not just trying to survive — they are trying to survive together, which is harder, and doing it while all the normal teenage catastrophes of their lives continue happening because love and jealousy and heartbreak don't pause for apocalypses. A Korean zombie thriller that takes its high school setting as seriously as its horror premise, and cares about its characters enough to make the deaths cost something.",
    genres: ["horror", "thriller", "drama", "action"],
    themes: ["survival", "found-family", "loyalty", "first-love", "class-disparity", "humanity-in-crisis"],
    tropes: ["zombie-apocalypse", "trapped-in-school", "found-family", "first-love-in-crisis", "class-dynamics", "ensemble-survival"],
    tone: ["tense", "dark", "emotional", "action-packed", "occasionally-heartbreaking"],
    setting: ["modern", "high-school", "small-city", "zombie-apocalypse", "korea"],
    characterTypes: ["brave-female-lead", "self-sacrificing-male-lead", "class-bully-redeemed", "complex-morally-grey-character", "teacher-who-fails-them"],
    streaming: { viki: false, netflix: true },
    network: "Netflix",
    actors: [
      { name: "Park Ji-hu", role: "Nam On-jo", isLead: true },
      { name: "Yoon Chan-young", role: "Lee Cheong-san", isLead: true },
      { name: "Park Solomon", role: "Lee Su-hyeok", isLead: false }
    ],
    matchReasoningHints: [
      "The Walking Dead Season 1 DNA but set in a high school where you've already invested in the social dynamics before anyone becomes a zombie — the loss is therefore more specific and more devastating",
      "Battle Royale meets a K-drama ensemble: the class dynamics that structured everyone's lives become life-or-death stakes, and the show knows which character dynamics to stress-test",
      "Stranger Things' 'teenagers in supernatural crisis who save each other because adults have completely failed them' emotional register — Korean, zombie-adjacent, and willing to be darker",
      "World War Z's first-act city-level zombie mechanics, applied to a single building over twelve episodes — the structural constraint generates more tension than the expanded scale",
      "For viewers who watch zombie content and want it to mean something: the characters here are drawn specifically enough that when they die it is grief rather than plot resolution"
    ]
  },

  {
    id: "our-beloved-summer",
    title: "Our Beloved Summer",
    year: 2022,
    episodes: 16,
    synopsis: "Ten years ago, Kook Yeon-soo and Choi Ung filmed a documentary as high school students — she the most driven student, he the least. The documentary went viral. They also dated, broke up badly, and promised never to see each other again. The documentary is going viral again, the production wants a sequel, and suddenly they are in each other's lives and neither of them is ready for what gets unearthed. A romance that uses the documentary-making frame to examine what two people were to each other and what they've become, told with specificity and warmth.",
    genres: ["romance", "drama", "comedy"],
    themes: ["first-love", "second-chances", "growing-up", "artistic-identity", "ex-lovers-reconnect", "what-we-were"],
    tropes: ["ex-lovers-reconnect", "forced-proximity", "slow-burn", "documentary-making", "coming-of-age-past", "bittersweet-romance"],
    tone: ["warm", "nostalgic", "romantic", "emotional", "gentle", "slice-of-life"],
    setting: ["modern", "urban", "documentary-world", "school-flashbacks", "everyday-seoul"],
    characterTypes: ["driven-overachiever", "laid-back-artist", "loyal-friends", "documentary-crew", "warm-family"],
    streaming: { viki: true, netflix: true },
    network: "SBS",
    actors: [
      { name: "Kim Da-mi", role: "Kook Yeon-soo", isLead: true },
      { name: "Choi Woo-shik", role: "Choi Ung", isLead: true }
    ],
    matchReasoningHints: [
      "High Fidelity's 'examining a relationship from both sides after it ends' emotional structure — the show is honest about how both people contributed to the failure and what it cost each of them",
      "Normal People energy, specifically the first-love-that-ends structure: the show is interested in what these two people were to each other at 18 and what the distance between then and now means",
      "When Harry Met Sally's 'these two people who broke up don't make sense with anyone else' emotional logic, played in a Korean slice-of-life register rather than a comedy one",
      "The documentary-within-the-drama device is doing real work: we're watching two people be observed by cameras while simultaneously being observed by us, and the layers of self-consciousness are used rather than just indicated",
      "Choi Woo-shik and Kim Da-mi have a documented chemistry from other projects and the show makes full use of it — the ease between them carries scenes the writing might not have sustained alone"
    ]
  }

];
