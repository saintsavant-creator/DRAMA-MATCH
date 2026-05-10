/**
 * Western Shows — Batch 6 (2026)
 * 25 trending/current shows with high cultural buzz
 * Added: 2026-04-15
 *
 * Dedup verified against all 719+ existing western IDs before adding.
 */

module.exports = [
  {
    id: "tracker",
    title: "Tracker",
    type: "show",
    year: 2024,
    seasons: 2,
    synopsis: "Colter Shaw is a lone-wolf survivalist who roams the country as a reward seeker, helping law enforcement and private clients solve crimes, locate missing persons, and untangle dangerous conspiracies. Using his extraordinary tracking skills and resilience, he takes on cases that leave no trail unturned — while wrestling with his own complicated past.",
    genres: ["Crime", "Thriller", "Drama", "Action"],
    themes: ["survival", "redemption", "found-family", "lone-wolf", "justice", "missing-persons", "secrets-from-the-past"],
    tropes: ["competent-loner", "reluctant-hero", "troubled-past", "one-man-army", "procedural-of-the-week", "trust-issues"],
    tone: ["gripping", "tense", "hopeful", "action-packed"],
    setting: ["rural-america", "small-town", "road-trip", "wilderness"],
    characterTypes: ["stoic-hero", "mentor-figure", "corrupt-official", "victim-in-need", "loyal-ally"],
    network: "CBS",
    streaming: { paramount_plus: true, amazon_prime: true },
    actors: [
      { name: "Justin Hartley", role: "Colter Shaw", isLead: true },
      { name: "Abby McEnany", role: "Velma Bruin", isLead: false },
      { name: "Robin Weigert", role: "Teddi Bruin", isLead: false }
    ],
    matchReasoningHints: [
      "The lone competent hero who solves impossible problems with wit and resilience maps perfectly onto K-drama protagonists like those in 'Signal' or 'Voice'",
      "Tracker's blend of procedural mystery with emotional backstory echoes beloved K-dramas that reveal hero trauma episode by episode",
      "Fans who love Tracker's 'outsider helps the helpless' formula will adore 'Stranger' (비밀의 숲) and 'Bad Guys'",
      "The rural American settings and survival stakes resonate with K-dramas like 'My Mister' where ordinary people navigate extraordinary pressure",
      "Colter Shaw's fractured family dynamics and quest for truth mirror the family-secret reveals that drive K-dramas like 'Sky Castle'"
    ]
  },

  {
    id: "dept-q",
    title: "Department Q",
    type: "show",
    year: 2024,
    seasons: 1,
    synopsis: "Copenhagen detective Carl Mørck is banished to Department Q — a basement cold-case unit staffed by misfits. With his resourceful Syrian-born partner Assad, Carl reopens cases the system abandoned, discovering that the most forgotten crimes often hide the darkest truths. Based on Jussi Adler-Olsen's bestselling novels.",
    genres: ["Crime", "Mystery", "Thriller", "Drama"],
    themes: ["cold-case", "justice", "class-divide", "redemption", "trauma", "systemic-corruption", "outsider-fighting-the-system"],
    tropes: ["mismatched-partners", "cold-case-mystery", "bureaucratic-obstacles", "dark-secret", "unlikely-friendship", "underdog-unit"],
    tone: ["dark", "atmospheric", "suspenseful", "dry-humor"],
    setting: ["nordic-noir", "urban", "government-office", "flashbacks"],
    characterTypes: ["cynical-detective", "loyal-partner", "corrupt-superior", "hidden-victim", "morally-grey-hero"],
    network: "Netflix Original",
    streaming: { netflix: true },
    actors: [
      { name: "Matthew Goode", role: "Carl Mørck", isLead: true },
      { name: "Darrell D'Silva", role: "Assad", isLead: true },
      { name: "Johanna Wokalek", role: "Rose Knudsen", isLead: false }
    ],
    matchReasoningHints: [
      "The cold-case detective partnership and slow-burn revelations are a direct gateway to Korean masterpieces like 'Signal' and 'Tunnel'",
      "Department Q's dark institutional setting and bureaucratic resistance echo the DNA of 'Stranger' (비밀의 숲) and 'Beyond Evil'",
      "Fans drawn to the mismatched duo chemistry will love Korean detective pairings in 'Voice' and 'Bad Guys: Vile Crime'",
      "The show's Nordic bleakness and emotional restraint mirror the tone of Korean thrillers like 'Mouse' and 'Flower of Evil'",
      "Rediscovering forgotten victims resonates with K-drama themes in 'Missing: The Other Side' and 'Signal'"
    ]
  },

  {
    id: "dune-prophecy",
    title: "Dune: Prophecy",
    type: "show",
    year: 2024,
    seasons: 1,
    synopsis: "Set 10,000 years before the rise of Paul Atreides, two Harkonnen sisters fight to establish the Bene Gesserit order across a dangerous universe. Navigating treacherous politics, religious power plays, and interstellar intrigue, they build the sisterhood that will one day shape the fate of the known universe.",
    genres: ["Sci-Fi", "Drama", "Fantasy", "Political Thriller"],
    themes: ["power", "sisterhood", "religion", "political-intrigue", "sacrifice", "destiny", "female-power", "long-game-manipulation"],
    tropes: ["secret-society", "chosen-one", "political-marriage", "revenge-plot", "hidden-identity", "prophecy"],
    tone: ["epic", "atmospheric", "mysterious", "dark"],
    setting: ["space-opera", "desert-world", "imperial-court", "ancient-civilization"],
    characterTypes: ["powerful-woman", "ruthless-schemer", "loyal-sister", "naive-heir", "wise-elder"],
    network: "Max Original",
    streaming: { max: true },
    actors: [
      { name: "Emily Watson", role: "Valya Harkonnen", isLead: true },
      { name: "Travis Fimmel", role: "Desmond Hart", isLead: true },
      { name: "Olivia Williams", role: "Tula Harkonnen", isLead: true }
    ],
    matchReasoningHints: [
      "The sisterhood's long-game political machinations and power behind the throne strongly echo the palace intrigue of 'Mr. Sunshine' and 'Arthdal Chronicles'",
      "Fans of complex power-hungry female leads will find perfect matches in K-dramas like 'The Glory' and 'My Love from the Star'",
      "The epic world-building and intertwined fates feel like the Korean fantasy drama 'Kingdom' or 'Arthdal Chronicles'",
      "The show's themes of sacrifice for a greater cause resonate with K-drama epics that put nation above self, like 'Six Flying Dragons'",
      "Two sisters at the center of a universe-spanning conspiracy maps to K-drama sibling rivalries in 'Sky Castle' and 'Juvenile Justice'"
    ]
  },

  {
    id: "lioness-s2",
    title: "Lioness Season 2",
    type: "show",
    year: 2024,
    seasons: 2,
    synopsis: "CIA operative Joe — leader of the clandestine Lioness Program — recruits a new asset to infiltrate a global terror network. As stakes rise and moral lines blur, Joe battles her own demons at home while running one of the most dangerous black ops programs in American intelligence history.",
    genres: ["Action", "Thriller", "Spy Drama", "Drama"],
    themes: ["espionage", "sacrifice", "moral-ambiguity", "female-strength", "family-vs-duty", "loyalty", "deception"],
    tropes: ["spy-recruits-asset", "double-life", "forbidden-mission", "strong-female-lead", "government-conspiracy", "undercover-op"],
    tone: ["intense", "gritty", "emotional", "action-packed"],
    setting: ["international", "middle-east", "america", "military-base"],
    characterTypes: ["hardened-spy", "rookie-operative", "morally-conflicted-boss", "loyal-team", "ruthless-villain"],
    network: "Paramount+",
    streaming: { paramount_plus: true },
    actors: [
      { name: "Zoe Saldaña", role: "Joe", isLead: true },
      { name: "Nicole Kidman", role: "Kaitlyn Meade", isLead: true },
      { name: "Morgan Freeman", role: "Secretary Mullins", isLead: false }
    ],
    matchReasoningHints: [
      "Lioness's strong female operative living a double life maps onto beloved K-drama heroines in 'Vagabond' and 'My Name'",
      "The moral cost of espionage and fractured family life echoes themes from 'The K2' and 'Designated Survivor: 60 Days'",
      "Fans of Taylor Sheridan's slow-burn intensity will find the same pacing in Korean action dramas like 'Lawless Lawyer' and 'Bad Guys'",
      "The female mentorship dynamic between Joe and her asset mirrors the nuanced relationships in K-dramas like 'Strong Girl Bong-soon' and 'Vincenzo'",
      "Lioness's blend of high-stakes action and domestic emotional cost resonates with K-dramas like 'Vagabond' and 'Healer'"
    ]
  },

  {
    id: "disclaimer-apple",
    title: "Disclaimer",
    type: "show",
    year: 2024,
    seasons: 1,
    synopsis: "Acclaimed documentary filmmaker Catherine Ravenscroft receives a novel in the mail — a story that exposes a terrible secret from her past she thought was buried forever. As the past and present collide across alternating timelines, lives are destroyed and the truth of what really happened that fateful summer emerges.",
    genres: ["Psychological Thriller", "Drama", "Mystery"],
    themes: ["secrets", "guilt", "truth-vs-perception", "marriage", "betrayal", "grief", "trauma", "obsession"],
    tropes: ["unreliable-narrator", "alternating-timelines", "buried-secret", "marriage-on-the-rocks", "past-returns", "obsessive-antagonist"],
    tone: ["tense", "unsettling", "atmospheric", "literary"],
    setting: ["london", "italian-coast", "domestic", "flashbacks"],
    characterTypes: ["flawed-heroine", "grieving-father", "damaged-marriage", "unreliable-witness", "manipulative-figure"],
    network: "Apple TV+",
    streaming: { apple_tv: true },
    actors: [
      { name: "Cate Blanchett", role: "Catherine Ravenscroft", isLead: true },
      { name: "Kevin Kline", role: "Robert Ravenscroft", isLead: true },
      { name: "Sacha Baron Cohen", role: "Nicholas Ravenscroft", isLead: true }
    ],
    matchReasoningHints: [
      "The past-vs-present dual timeline and buried trauma structure is the exact format of Korean masterpieces like 'Flower of Evil' and 'Mine'",
      "Disclaimer's gorgeous European settings and literary emotional weight mirror the cinematic sweep of 'One the Woman' and 'Something in the Rain'",
      "Fans of morally complex women keeping dangerous secrets will love K-dramas like 'The World of the Married' and 'My Unfamiliar Family'",
      "The obsessive antagonist rewriting reality through a novel maps to K-drama revenge plots in 'The Glory' and 'Revenge of Others'",
      "The crumbling of a perfect surface life to expose rot beneath resonates with K-drama classics like 'Sky Castle' and 'Penthouse'"
    ]
  },

  {
    id: "rivals-disney",
    title: "Rivals",
    type: "show",
    year: 2024,
    seasons: 1,
    synopsis: "Set in the glamorous and scandalous world of British show jumping and horse racing in the 1980s, 'Rivals' follows feuding tycoons, ambitious women, and irresistible lovers locked in a battle for power, passion, and prestige. Based on Jilly Cooper's beloved novel, it's a deliciously entertaining romp through privilege and desire.",
    genres: ["Drama", "Romance", "Comedy", "Period Drama"],
    themes: ["rivalry", "ambition", "forbidden-romance", "class-divide", "betrayal", "power", "desire", "social-climbing"],
    tropes: ["love-triangle", "enemies-to-lovers", "class-warfare", "scheming-villain", "scandalous-affair", "underdog-heroine"],
    tone: ["fun", "scandalous", "romantic", "satirical", "bingeable"],
    setting: ["1980s-britain", "countryside-estate", "horse-racing", "high-society"],
    characterTypes: ["charming-rogue", "ambitious-woman", "evil-villain", "naive-ingenue", "powerful-patriarch", "social-climber"],
    network: "Disney+",
    streaming: { disney_plus: true },
    actors: [
      { name: "David Tennant", role: "Rupert Campbell-Black", isLead: true },
      { name: "Aidan Turner", role: "Declan O'Hara", isLead: true },
      { name: "Emily Atack", role: "Taggie O'Hara", isLead: true }
    ],
    matchReasoningHints: [
      "The enemies-to-lovers slow burn between a charming rogue and a wholesome heroine is identical to beloved K-drama romantic formulas in 'Crash Landing on You' and 'Business Proposal'",
      "Rivals' scandalous upper-class world and scheming rivals map onto K-dramas about chaebol families like 'Boys Over Flowers' and 'Heirs'",
      "Fans of charismatic bad boys with hidden hearts will find their match in K-dramas like 'Goblin' and 'Mr. Queen'",
      "The 1980s period glamour and social intrigue feel like the Korean period romance 'Mr. Sunshine' with added British wit",
      "Rivals' ensemble of vivid characters entangled in overlapping love and rivalry echoes the ensemble romance of 'Hospital Playlist' and 'Because This Is My First Life'"
    ]
  },

  {
    id: "the-studio-apple",
    title: "The Studio",
    type: "show",
    year: 2025,
    seasons: 1,
    synopsis: "Matt Remick is the newly appointed head of Continental Studios, a legendary movie studio in existential crisis. Desperate to make movies that matter while also making money, Matt navigates impossibly demanding directors, studio politics, aging movie stars, and his own artistic insecurities in this sharp Hollywood satire.",
    genres: ["Comedy", "Satire", "Drama"],
    themes: ["ambition", "creative-compromise", "imposter-syndrome", "industry-politics", "art-vs-commerce", "male-ego", "friendship"],
    tropes: ["fish-out-of-water", "workplace-comedy", "self-deprecating-hero", "difficult-boss", "celebrity-cameos", "creative-crisis"],
    tone: ["witty", "sharp", "satirical", "cringe-comedy", "warm"],
    setting: ["hollywood", "movie-sets", "corporate-office", "los-angeles"],
    characterTypes: ["anxious-overachiever", "demanding-director", "loyal-assistant", "scheming-rival", "eccentric-artist"],
    network: "Apple TV+",
    streaming: { apple_tv: true },
    actors: [
      { name: "Seth Rogen", role: "Matt Remick", isLead: true },
      { name: "Catherine O'Hara", role: "Patty", isLead: true },
      { name: "Ike Barinholtz", role: "Sal Saperstein", isLead: false }
    ],
    matchReasoningHints: [
      "The anxious creative caught between artistic integrity and market pressure maps to K-dramas about the entertainment industry like 'My Mister' and 'Weightlifting Fairy Kim Bok-joo'",
      "Fans who loved 'The Bear's' hyper-authentic workplace pressure-cooker will find the same energy in Korean workplace dramas like 'Misaeng: Incomplete Life'",
      "The Studio's Hollywood industry drama finds its Korean twin in 'My Love from the Star' and 'Behind Your Touch' — shows that expose how the entertainment machine works",
      "Loveable protagonists with severe imposter syndrome are a K-drama staple — 'Weightlifting Fairy' and 'Fight My Way' nail this same energy",
      "Sharp ensemble comedies about workplace dysfunction bridge beautifully to K-dramas like 'Oh My Boss!' and 'Start-Up'"
    ]
  },

  {
    id: "your-friends-and-neighbors-apple",
    title: "Your Friends & Neighbors",
    type: "show",
    year: 2025,
    seasons: 1,
    synopsis: "Andrew Cooper, a wealthy hedge fund manager who appears to have it all, finds his life unraveling after a personal and professional crisis. As he scrambles to maintain his lifestyle in a wealthy New Jersey suburb, he discovers uncomfortable truths about the people he thought he knew — and himself.",
    genres: ["Drama", "Thriller", "Black Comedy"],
    themes: ["financial-ruin", "suburban-secrets", "identity-crisis", "class", "deception", "toxic-masculinity", "marriage"],
    tropes: ["fall-from-grace", "suburban-noir", "double-life", "desperate-man", "secrets-in-paradise", "dark-comedy"],
    tone: ["dark", "tense", "satirical", "suspenseful"],
    setting: ["wealthy-suburb", "new-jersey", "corporate-world", "domestic"],
    characterTypes: ["fallen-alpha", "scheming-neighbour", "suspicious-spouse", "morally-grey-antihero", "social-climber"],
    network: "Apple TV+",
    streaming: { apple_tv: true },
    actors: [
      { name: "Jon Hamm", role: "Andrew Cooper", isLead: true },
      { name: "Amanda Peet", role: "Mel", isLead: true },
      { name: "Olivia Munn", role: "Cate", isLead: true }
    ],
    matchReasoningHints: [
      "A wealthy man's perfect life unraveling is the exact premise of K-drama hits like 'Sky Castle', 'Mine', and 'World of the Married'",
      "The suburban secret-keeping and domestic deception map onto K-dramas' obsession with what hides behind polished family facades",
      "Fans who loved Jon Hamm in 'Mad Men' as a charming man hiding darkness will find mirror characters in 'Flower of Evil' and 'Strangers from Hell'",
      "The show's rich-people problems with genuine emotional stakes resonate with K-dramas like 'My Liberation Notes' and 'Something in the Rain'",
      "Suburban thriller dynamics with an ensemble of duplicitous neighbours echo 'Penthouse' and 'The Lies Within'"
    ]
  },

  {
    id: "prime-target",
    title: "Prime Target",
    type: "show",
    year: 2025,
    seasons: 1,
    synopsis: "Edward Brooks, a brilliant but arrogant mathematics PhD student, discovers a pattern that could crack every encryption on the internet — a discovery that puts him in the crosshairs of a terrifying conspiracy. A NSA agent races to protect him as powerful, shadowy forces close in from every side.",
    genres: ["Thriller", "Sci-Fi", "Mystery", "Drama"],
    themes: ["surveillance", "power", "paranoia", "genius", "government-conspiracy", "technology", "romance-under-pressure"],
    tropes: ["accidental-hero", "conspiracy-thriller", "genius-in-danger", "reluctant-partnership", "race-against-time", "trust-no-one"],
    tone: ["tense", "cerebral", "paranoid", "slick"],
    setting: ["cambridge", "tech-world", "government-agencies", "urban"],
    characterTypes: ["arrogant-genius", "determined-agent", "shadowy-villain", "mentor-figure", "unlikely-team"],
    network: "Apple TV+",
    streaming: { apple_tv: true },
    actors: [
      { name: "Leo Woodall", role: "Edward Brooks", isLead: true },
      { name: "Quintessa Swindell", role: "Taylah Sanders", isLead: true },
      { name: "Stephen Rea", role: "Ivan Groft", isLead: false }
    ],
    matchReasoningHints: [
      "A brilliant civilian thrust into a government conspiracy with a protective agent at his side is the precise formula of 'Healer', 'The K2', and 'Vagabond'",
      "Prime Target's tech-world paranoia and 'trust no one' conspiracy echoes K-dramas like 'Signal' and 'Sisyphus: The Myth'",
      "The slow-build romance between a genius and his protector under extreme pressure maps perfectly onto K-drama slow-burn pairings",
      "Fans of intellectual cat-and-mouse thrillers will love Korean shows like 'Tunnel', 'Voice', and 'Psychopath Diary'",
      "The show's Cambridge academic setting and moral stakes about technology echo themes from 'Start-Up' and 'Artificial City'"
    ]
  },

  {
    id: "yellowjackets-s3",
    title: "Yellowjackets Season 3",
    type: "show",
    year: 2025,
    seasons: 3,
    synopsis: "As the surviving Yellowjackets' dark present-day secrets grow more dangerous, the mysteries of what happened in the wilderness 25 years ago continue to unfold. The show's dual timeline delves deeper into ritualistic violence, female survival, fractured trust, and the haunting question: just how far did they go to survive?",
    genres: ["Thriller", "Drama", "Survival", "Mystery", "Horror"],
    themes: ["survival", "trauma", "female-bond", "dark-rituals", "secrets", "guilt", "past-haunting-present", "identity"],
    tropes: ["dual-timeline", "dark-secret", "female-ensemble", "unreliable-narrator", "survival-horror", "fractured-friendship"],
    tone: ["dark", "intense", "atmospheric", "unsettling", "addictive"],
    setting: ["wilderness", "90s-flashbacks", "suburban-present", "isolated"],
    characterTypes: ["traumatized-survivor", "charismatic-leader", "loyal-follower", "dark-secret-keeper", "cult-figure"],
    network: "Paramount+ / Showtime",
    streaming: { paramount_plus: true, netflix: true },
    actors: [
      { name: "Melanie Lynskey", role: "Shauna (adult)", isLead: true },
      { name: "Juliette Lewis", role: "Natalie (adult)", isLead: true },
      { name: "Christina Ricci", role: "Misty (adult)", isLead: true },
      { name: "Sophie Thatcher", role: "Natalie (teen)", isLead: true }
    ],
    matchReasoningHints: [
      "The dual timeline revealing past trauma that explains present-day chaos is the exact structural DNA of K-dramas like 'Flower of Evil' and 'Sweet Home'",
      "Female survival ensembles with fractured trust and dark rituals resonate with Korean thrillers like 'The Uncanny Counter' and 'All of Us Are Dead'",
      "Fans of Yellowjackets' 'what really happened?' slow-reveal will adore K-dramas like 'Tunnel', 'Signal', and 'Mouse'",
      "The show's themes of female solidarity under extreme pressure echo K-dramas like 'Extracurricular' and 'The Handmaiden'",
      "Yellowjackets' blend of survival horror with emotional character depth bridges to Korean genre-blenders like 'Kingdom' and 'Sweet Home'"
    ]
  },

  {
    id: "watson-cbs",
    title: "Watson",
    type: "show",
    year: 2025,
    seasons: 1,
    synopsis: "Dr. John Watson, Sherlock Holmes' legendary partner, sets up a pioneering medical practice after the detective's death. Using Holmes' deductive techniques in a hospital setting, Watson leads a team of brilliant doctors through baffling medical mysteries — while mourning his friend and questioning everything he thought he knew.",
    genres: ["Medical Drama", "Mystery", "Procedural"],
    themes: ["grief", "legacy", "deduction", "teamwork", "justice", "friendship", "moving-on"],
    tropes: ["procedural-of-the-week", "brilliant-detective-doctor", "grief-as-motivation", "mentor-teaching", "diagnostic-puzzle"],
    tone: ["warm", "intelligent", "emotional", "procedural"],
    setting: ["hospital", "modern-day", "urban"],
    characterTypes: ["brilliant-doctor", "loyal-team", "difficult-patient", "grieving-hero", "wise-mentor"],
    network: "CBS",
    streaming: { paramount_plus: true, amazon_prime: true },
    actors: [
      { name: "Morris Chestnut", role: "Dr. John Watson", isLead: true },
      { name: "Inga Schlingmann", role: "Dr. Ingrid Patel", isLead: false },
      { name: "Peter Mark Kendall", role: "Dr. Shinwell Johnson", isLead: false }
    ],
    matchReasoningHints: [
      "A brilliant doctor solving mysteries through unconventional thinking is the exact premise of beloved K-dramas 'Dr. Romantic', 'Good Doctor', and 'Ghost Doctor'",
      "Watson's grief-driven competence and warm team dynamics mirror the emotional-procedural blend of 'Hospital Playlist' and 'Dr. Romantic 2'",
      "Fans drawn to Watson's deductive medical cases will love Korean medical mysteries like 'Doctor Prisoner' and 'Romantic Doctor Teacher Kim'",
      "The show's emphasis on mentorship and team loyalty resonates with K-dramas' favorite workplace themes in 'Misaeng' and 'Hospital Playlist'",
      "Watson's literary roots give the show a prestigious feel that bridges to K-dramas adapted from beloved novels like 'My Mister' and 'The Red Sleeve'"
    ]
  },

  {
    id: "on-call-netflix",
    title: "On Call",
    type: "show",
    year: 2025,
    seasons: 1,
    synopsis: "Rookie cop Traci Harmon is paired with veteran Detective Asante, a jaded officer who has seen too much. Together they patrol the streets of Long Beach, navigating the chaos of police work while confronting systemic corruption, personal sacrifice, and the fine line between justice and the law.",
    genres: ["Crime", "Drama", "Procedural"],
    themes: ["police-corruption", "justice", "mentorship", "sacrifice", "race", "class", "street-level-crime"],
    tropes: ["rookie-meets-veteran", "mismatched-partners", "moral-dilemma", "corruption-exposed", "street-level-drama"],
    tone: ["gritty", "realistic", "intense", "emotional"],
    setting: ["los-angeles", "urban-streets", "police-precinct"],
    characterTypes: ["idealistic-rookie", "cynical-veteran", "corrupt-superior", "community-figure", "reluctant-mentor"],
    network: "Netflix Original",
    streaming: { netflix: true },
    actors: [
      { name: "Troian Bellisario", role: "Traci Harmon", isLead: true },
      { name: "Laz Alonso", role: "Detective Asante", isLead: true }
    ],
    matchReasoningHints: [
      "The idealistic rookie-meets-weary-veteran dynamic is a beloved K-drama trope perfected in 'Voice', 'Bad Guys', and 'Signal'",
      "On Call's police corruption themes and street-level justice echo Korean crime dramas like 'Strangers from Hell' and 'Nobody Knows'",
      "Fans of the mentor-student bond under institutional pressure will love K-dramas like 'Prison Playbook' and 'Chief of Staff'",
      "The show's emotional realism and social commentary bridge to K-dramas like 'My Mister' and 'Juvenile Justice' that treat systemic issues with depth",
      "Partner procedurals with deep trust-building resonate across both cultures — Korean versions include 'Partner for Justice' and 'Two Cops'"
    ]
  },

  {
    id: "found-s2",
    title: "Found Season 2",
    type: "show",
    year: 2024,
    seasons: 2,
    synopsis: "Gabi Mosely leads a crisis management firm that specializes in finding missing persons — especially those the system ignores. In Season 2, she continues her dangerous work while hiding a dark secret: the serial killer who once abducted her is now chained in her basement, and she uses him to catch other predators.",
    genres: ["Crime", "Thriller", "Drama", "Mystery"],
    themes: ["vigilante-justice", "trauma", "captivity", "obsession", "justice-vs-law", "dark-secret", "survivor-strength"],
    tropes: ["dark-secret", "captor-captive", "vigilante-hero", "trauma-survivor", "moral-ambiguity", "procedural-with-twist"],
    tone: ["dark", "intense", "twisty", "emotional"],
    setting: ["washington-dc", "urban", "corporate-office", "hidden-basement"],
    characterTypes: ["trauma-survivor-hero", "captive-villain", "loyal-team", "disappearing-victim", "morally-complex-lead"],
    network: "NBC",
    streaming: { peacock: true, netflix: true },
    actors: [
      { name: "Shanola Hampton", role: "Gabi Mosely", isLead: true },
      { name: "Mark-Paul Gosselaar", role: "Sir Broderick Trent Mosely", isLead: true },
      { name: "Gabrielle Walsh", role: "Lacey Quinn", isLead: false }
    ],
    matchReasoningHints: [
      "A survivor who keeps their captor prisoner and uses them against evil is the most original dark twist on the vigilante formula — K-dramas like 'Flower of Evil' and 'Bad Guys' thrive on exactly this moral complexity",
      "Found's missing persons focus and victim-first approach resonates with Korean hits 'Missing: The Other Side' and 'Signal'",
      "The trauma-informed hero hiding a dangerous secret maps to K-drama antiheroes in 'My Name', 'Revenge of Others', and 'Strangers from Hell'",
      "A team of outsiders working cases the system ignores is the premise of multiple beloved K-dramas including 'Voice' and 'Tunnel'",
      "Found Season 2's escalating moral stakes resonate with Korean dark thrillers that interrogate whether ends justify means"
    ]
  },

  {
    id: "dark-winds-s3",
    title: "Dark Winds Season 3",
    type: "show",
    year: 2024,
    seasons: 3,
    synopsis: "Navajo Tribal Police Lieutenant Joe Leaphorn and Sergeant Jim Chee investigate a series of brutal crimes on the Navajo Nation reservation. Set in 1970s New Mexico, the show blends procedural crime with rich indigenous culture, spiritual traditions, and the ongoing struggle for justice in a world that has always stacked the odds against them.",
    genres: ["Crime", "Mystery", "Drama", "Period Drama"],
    themes: ["indigenous-rights", "justice", "identity", "spirituality", "community", "corruption", "land-rights", "cultural-preservation"],
    tropes: ["unlikely-partners", "period-procedural", "cultural-clash", "outsider-within", "underdog-hero", "cold-case"],
    tone: ["atmospheric", "contemplative", "suspenseful", "richly-textured"],
    setting: ["1970s-new-mexico", "navajo-nation", "desert", "small-community"],
    characterTypes: ["stoic-veteran", "idealistic-newcomer", "corrupt-outsider", "community-elder", "spiritual-guide"],
    network: "AMC",
    streaming: { amc_plus: true, amazon_prime: true },
    actors: [
      { name: "Zahn McClarnon", role: "Joe Leaphorn", isLead: true },
      { name: "Kiowa Gordon", role: "Jim Chee", isLead: true },
      { name: "Jessica Matten", role: "Bernadette Manuelito", isLead: false }
    ],
    matchReasoningHints: [
      "A veteran and rookie detective partnership investigating crimes in a culturally rich, underrepresented community mirrors the setup of K-dramas like 'Signal' and 'Voice'",
      "Dark Winds' 1970s period setting and indigenous spirituality feel connected to K-dramas that blend historical justice with supernatural elements like 'Mr. Sunshine' and 'Rookie Historian'",
      "Fans who love procedurals with deep cultural texture will adore Korean crime dramas set in historical eras like 'The Crowned Clown' and 'Kingdom'",
      "The show's fight for justice within an unjust system resonates with Korean dramas like 'Juvenile Justice' and 'Stranger' (비밀의 숲)",
      "Zahn McClarnon's quiet authority mirrors the stoic detective energy that Korean audiences adore in shows like 'Signal' and 'Bad Guys'"
    ]
  },

  {
    id: "the-bear-s3",
    title: "The Bear Season 3",
    type: "show",
    year: 2024,
    seasons: 3,
    synopsis: "Carmen 'Carmy' Berzatto's fine dining restaurant The Bear chases the ultimate prize — a Michelin star. But the relentless pursuit of perfection fractures relationships, trauma resurfaces, and the question of what success actually costs becomes impossible to ignore. Season 3 pushes every character to their emotional breaking point.",
    genres: ["Drama", "Comedy", "Culinary"],
    themes: ["perfectionism", "trauma", "family", "ambition", "grief", "mental-health", "found-family", "sacrifice"],
    tropes: ["broken-family-business", "perfectionist-lead", "found-family", "grief-processing", "workplace-dysfunction", "artistic-pursuit"],
    tone: ["intense", "emotionally-raw", "authentic", "award-worthy"],
    setting: ["chicago-restaurant", "kitchen", "urban"],
    characterTypes: ["traumatized-genius", "loyal-team", "difficult-sibling", "mentor-ghost", "fierce-second-in-command"],
    network: "Hulu / FX",
    streaming: { hulu: true, disney_plus: true },
    actors: [
      { name: "Jeremy Allen White", role: "Carmen 'Carmy' Berzatto", isLead: true },
      { name: "Ayo Edebiri", role: "Sydney Adamu", isLead: true },
      { name: "Ebon Moss-Bachrach", role: "Richard 'Richie' Jerimovich", isLead: true }
    ],
    matchReasoningHints: [
      "The Bear's trauma-driven genius chasing perfection while rebuilding family bonds maps directly onto K-dramas like 'Dr. Romantic' and 'Wok of Love'",
      "Culinary dramas about professional obsession and emotional repair have a devoted K-drama tradition — 'Wok of Love', 'Jinxed at First', and 'My Mister' all share this DNA",
      "The show's found-family dynamics forged under intense professional pressure mirror the team bonds in 'Hospital Playlist' and 'Reply 1988'",
      "Fans drawn to Carmy's traumatized-genius archetype will recognise him in K-drama leads from 'It's Okay to Not Be Okay' and 'My Mister'",
      "The Bear's literary episode structure and emotional depth are a gateway to K-dramas that trust slow-burn character work: 'My Liberation Notes' and 'My Ahjussi'"
    ]
  },

  {
    id: "the-morning-show-s4",
    title: "The Morning Show Season 4",
    type: "show",
    year: 2025,
    seasons: 4,
    synopsis: "Alex Levy and Bradley Jackson continue to navigate the cutthroat world of morning television — this time confronting the impact of AI on journalism and the changing media landscape. As friendships fracture and new power plays emerge, the show asks what truth means in an era when reality itself is contested.",
    genres: ["Drama", "Workplace", "Thriller"],
    themes: ["media-ethics", "AI", "female-ambition", "friendship-vs-rivalry", "power", "truth", "cancel-culture", "reinvention"],
    tropes: ["workplace-rivalry", "female-frenemies", "power-struggle", "career-vs-integrity", "scandal", "reinvention-arc"],
    tone: ["slick", "intense", "witty", "timely"],
    setting: ["new-york", "tv-studio", "corporate-boardroom", "media-world"],
    characterTypes: ["ambitious-anchor", "ruthless-executive", "loyal-producer", "idealistic-journalist", "scheming-rival"],
    network: "Apple TV+",
    streaming: { apple_tv: true },
    actors: [
      { name: "Jennifer Aniston", role: "Alex Levy", isLead: true },
      { name: "Reese Witherspoon", role: "Bradley Jackson", isLead: true },
      { name: "Billy Crudup", role: "Cory Ellison", isLead: true }
    ],
    matchReasoningHints: [
      "Female rivals who are also each other's greatest allies maps onto K-dramas like 'Misaeng', 'Strong Girl Bong-soon', and 'What's Wrong with Secretary Kim'",
      "Power struggles between ambitious women in a male-dominated industry echo K-dramas 'Chief of Staff', 'The World of the Married', and 'Mine'",
      "The Morning Show's media ethics storylines resonate with Korean dramas that interrogate journalism and truth like 'Pinocchio' and 'Kill Me, Heal Me'",
      "Luxury workplace drama with emotional backstabs and surprising alliances is a K-drama staple — 'Sky Castle' and 'Penthouse' do this genre proud",
      "The frenemy dynamic between Alex and Bradley has a Korean mirror in 'My Love from the Star' and 'Flower of Evil's' complex duos"
    ]
  },

  {
    id: "only-murders-s4",
    title: "Only Murders in the Building Season 4",
    type: "show",
    year: 2024,
    seasons: 4,
    synopsis: "Charles, Oliver, and Mabel continue their amateur podcast detective work at the Arconia, this time facing a Hollywood adaptation of their own story — and a fresh murder that hits closer to home than ever. With celebrity guests and a mystery that twists the format on its head, Season 4 is the funniest and most surprising yet.",
    genres: ["Mystery", "Comedy", "Drama"],
    themes: ["friendship", "fame", "truth", "creative-obsession", "celebrity", "loneliness", "community"],
    tropes: ["amateur-detective", "unreliable-narrator", "celebrity-cameo", "podcast-format", "trio-dynamic", "meta-storytelling"],
    tone: ["warm", "witty", "cozy-mystery", "charming", "heartfelt"],
    setting: ["new-york-apartment-building", "upper-west-side", "podcast-studio"],
    characterTypes: ["loveable-trio", "eccentric-neighbour", "celebrity-suspect", "quirky-detective", "comic-relief"],
    network: "Hulu",
    streaming: { hulu: true, disney_plus: true },
    actors: [
      { name: "Steve Martin", role: "Charles-Haden Savage", isLead: true },
      { name: "Martin Short", role: "Oliver Putnam", isLead: true },
      { name: "Selena Gomez", role: "Mabel Mora", isLead: true }
    ],
    matchReasoningHints: [
      "The cozy found-family trio solving crimes together is a beloved K-drama template — 'You're All Surrounded', 'Partners for Justice', and 'The Fiery Priest' nail this",
      "Mystery-comedies that balance genuine emotion with laughs are a Korean specialty — 'The Uncanny Counter', 'Two Cops', and 'Chief Kim' are perfect matches",
      "Only Murders' exploration of loneliness cured by unexpected community mirrors K-dramas like 'Reply 1988' and 'My Mister'",
      "Fans of celebrity-filled whodunits will love Korean mysteries set in entertainment worlds like 'Behind Your Touch' and 'My Love from the Star'",
      "The show's warm New York apartment community energy translates into the tight-knit Korean neighbourhood energy of 'Reply' series"
    ]
  },

  {
    id: "shrinking-s2",
    title: "Shrinking Season 2",
    type: "show",
    year: 2024,
    seasons: 2,
    synopsis: "Grieving therapist Jimmy Laird continues breaking every rule of therapy by telling clients exactly what he thinks. As his unorthodox approach causes chaos and unexpected breakthroughs, Jimmy, his mentor Paul, and new patient Gaby navigate love, loss, and the messy work of actually getting better.",
    genres: ["Comedy", "Drama", "Romance"],
    themes: ["grief", "therapy", "found-family", "healing", "friendship", "love-after-loss", "mental-health", "second-chances"],
    tropes: ["found-family", "rule-breaking-hero", "mentor-relationship", "grief-journey", "slow-burn-romance", "workplace-comedy"],
    tone: ["warm", "funny", "heartfelt", "emotionally-honest"],
    setting: ["los-angeles", "suburban-neighbourhood", "therapy-office"],
    characterTypes: ["grieving-dad", "wise-mentor", "loyal-friend", "troubled-patient", "love-interest"],
    network: "Apple TV+",
    streaming: { apple_tv: true },
    actors: [
      { name: "Jason Segel", role: "Jimmy Laird", isLead: true },
      { name: "Harrison Ford", role: "Dr. Paul Rhodes", isLead: true },
      { name: "Jessica Williams", role: "Gaby", isLead: true }
    ],
    matchReasoningHints: [
      "Grief-driven found family that heals together is the premise of beloved K-dramas 'Hospital Playlist', 'Reply 1988', and 'My Mister'",
      "The slow-burn romance emerging from deep friendship and healing resonates with K-drama classics 'Something in the Rain' and 'Because This Is My First Life'",
      "Shrinking's warm ensemble dramedy about emotional repair maps perfectly to K-dramas that centre mental health like 'It's Okay to Not Be Okay'",
      "Fans of the Harrison Ford mentor energy will love elder-wisdom dynamics in K-dramas like 'My Mister' and 'Go Back Couple'",
      "Rule-breaking therapists who genuinely transform their patients echo the maverick-doctor trope in 'Dr. Romantic' and 'Good Doctor'"
    ]
  },

  {
    id: "before-netflix",
    title: "Before",
    type: "show",
    year: 2024,
    seasons: 1,
    synopsis: "Child psychiatrist Eli Whittaker is still grieving the sudden death of his wife Lynn when a troubled, mysterious boy named Noah enters his life. As Eli investigates who Noah really is and why he seems connected to Lynn, the boundaries between grief, memory, and supernatural reality begin to dissolve.",
    genres: ["Mystery", "Drama", "Supernatural", "Psychological Thriller"],
    themes: ["grief", "loss", "supernatural", "healing", "parenthood", "reincarnation", "trauma"],
    tropes: ["grieving-protagonist", "mysterious-child", "supernatural-mystery", "past-life", "slow-burn-reveal", "emotional-gut-punch"],
    tone: ["contemplative", "eerie", "emotionally-devastating", "atmospheric"],
    setting: ["modern-new-york", "family-home", "therapy-office"],
    characterTypes: ["grieving-father", "mysterious-child", "skeptical-detective", "concerned-friend", "ghost-of-the-past"],
    network: "Apple TV+",
    streaming: { apple_tv: true },
    actors: [
      { name: "Billy Crystal", role: "Eli Whittaker", isLead: true },
      { name: "Jacoby Lamar Abrams", role: "Noah", isLead: true },
      { name: "Judith Light", role: "Dr. Miriam Solomon", isLead: false }
    ],
    matchReasoningHints: [
      "A grieving protagonist encountering a supernatural connection to their lost love is the heart of K-drama classics like 'Goblin', 'While You Were Sleeping', and 'My Love from the Star'",
      "The mysterious child who may hold secrets to the past mirrors K-drama supernatural hooks in 'Hotel Del Luna' and 'Angel's Last Mission: Love'",
      "Before's quiet devastation and slow-burn grief resonate with the emotional pacing of 'My Mister' and 'My Liberation Notes'",
      "Fans who love supernatural K-dramas exploring love that transcends death will feel at home with 'Chicago Typewriter', 'Guardian', and 'Oh My Ghost'",
      "The show's intimate grief-with-a-twist premise is a gateway to Korean melodramas that blend heartbreak with wonder"
    ]
  },

  {
    id: "the-last-of-us-s2",
    title: "The Last of Us Season 2",
    type: "show",
    year: 2025,
    seasons: 2,
    synopsis: "Five years after their harrowing journey, Joel and Ellie's relationship is strained when they are violently pulled back into the brutal world of the Cordyceps pandemic. A new chapter begins as Ellie faces devastating consequences and a new cast of survivors forces her to confront who she has become.",
    genres: ["Drama", "Sci-Fi", "Horror", "Thriller", "Post-Apocalyptic"],
    themes: ["love", "survival", "revenge", "trauma", "father-daughter-bond", "moral-cost", "grief", "violence-cycle"],
    tropes: ["father-daughter-dynamic", "post-apocalypse", "revenge-arc", "chosen-one", "moral-complexity", "sacrifice"],
    tone: ["devastating", "intense", "emotional", "cinematic"],
    setting: ["post-apocalyptic-america", "wilderness", "ruined-cities", "isolated-communities"],
    characterTypes: ["traumatized-survivor", "fiercely-loyal-protector", "morally-complex-hero", "ruthless-antagonist", "found-family"],
    network: "HBO Max",
    streaming: { max: true },
    actors: [
      { name: "Pedro Pascal", role: "Joel Miller", isLead: true },
      { name: "Bella Ramsey", role: "Ellie Williams", isLead: true },
      { name: "Kaitlyn Dever", role: "Abby", isLead: true }
    ],
    matchReasoningHints: [
      "The devastating father-daughter bond at the heart of the apocalypse maps onto K-dramas like 'Sweet Home' and 'Kingdom' that blend survival with emotional depth",
      "Last of Us S2's revenge arc and moral complexity resonate with K-dramas like 'The Glory', 'My Name', and 'Revenge of Others'",
      "Post-apocalyptic community survival with chosen-family dynamics echoes Korean survival dramas 'All of Us Are Dead' and 'Sweet Home'",
      "Fans of the show's devastating emotional punches will find the same gut-wrenching pacing in Korean melodramas and thrillers like 'Flower of Evil'",
      "The show's exploration of whether love justifies violence bridges to K-drama moral dilemmas in 'Strangers from Hell' and 'Doctor John'"
    ]
  },

  {
    id: "from-s3",
    title: "From Season 3",
    type: "show",
    year: 2024,
    seasons: 3,
    synopsis: "Trapped in a mysterious American town with no escape, the survivors continue to battle terrifying nocturnal creatures while searching desperately for the truth behind their impossible prison. Season 3 deepens the mythology with devastating revelations as alliances fracture and hope becomes a dangerous luxury.",
    genres: ["Horror", "Mystery", "Sci-Fi", "Drama"],
    themes: ["survival", "mystery", "hope", "community", "paranoia", "sacrifice", "hidden-truth"],
    tropes: ["monster-survival", "trapped-community", "mythology-unravelling", "trust-issues", "dark-secret", "conspiracy"],
    tone: ["terrifying", "mysterious", "intense", "addictive"],
    setting: ["mysterious-small-town", "isolated", "supernatural"],
    characterTypes: ["reluctant-leader", "traumatized-survivor", "skeptical-scientist", "monster-child", "desperate-escapee"],
    network: "MGM+",
    streaming: { amazon_prime: true },
    actors: [
      { name: "Harold Perrineau", role: "Boyd Stevens", isLead: true },
      { name: "Catalina Sandino Moreno", role: "Jade", isLead: true },
      { name: "Eion Bailey", role: "Jim Matthews", isLead: false }
    ],
    matchReasoningHints: [
      "Trapped communities fighting monsters with no escape channel the same survival energy as Korean hits 'All of Us Are Dead', 'Sweet Home', and 'Kingdom'",
      "From's slow mythology unraveling and 'why are we here?' central mystery mirrors K-drama mystery-thriller structures in 'Signal' and 'Tunnel'",
      "The show's blend of horror and emotional character drama maps onto Korean genre-blenders like 'The Uncanny Counter' and 'Happiness'",
      "Community survival with paranoid internal conflict echoes 'All of Us Are Dead's' school setting where survivors turn on each other",
      "Fans hooked on From's mystery-box format will adore K-dramas like 'Sisyphus: The Myth' and 'Eternal Monarch' that layer myth onto present reality"
    ]
  },

  {
    id: "the-witcher-s4",
    title: "The Witcher Season 4",
    type: "show",
    year: 2025,
    seasons: 4,
    synopsis: "Liam Hemsworth steps in as Geralt of Rivia in the final season, as the monster hunter navigates a world fracturing under political upheaval, with Ciri's destiny reaching its crescendo. Season 4 delivers a grander vision of the Continent's dark magic, royal intrigue, and the cost of being the monster that kills monsters.",
    genres: ["Fantasy", "Action", "Drama", "Adventure"],
    themes: ["destiny", "family", "monster-within", "sacrifice", "political-intrigue", "coming-of-age", "found-family"],
    tropes: ["chosen-one", "monster-hunter", "political-chess", "sword-and-sorcery", "father-daughter-bond", "epic-quest"],
    tone: ["dark", "epic", "action-packed", "morally-complex"],
    setting: ["fantasy-medieval", "dark-world", "royal-court", "wilderness"],
    characterTypes: ["stoic-warrior", "powerful-mage", "destined-princess", "manipulative-ruler", "loyal-sidekick"],
    network: "Netflix Original",
    streaming: { netflix: true },
    actors: [
      { name: "Liam Hemsworth", role: "Geralt of Rivia", isLead: true },
      { name: "Anya Chalotra", role: "Yennefer of Vengerberg", isLead: true },
      { name: "Freya Allan", role: "Ciri", isLead: true }
    ],
    matchReasoningHints: [
      "A stoic monster-hunter with a found-family destiny maps directly onto Korean fantasy heroes in 'Arthdal Chronicles', 'The Crowned Clown', and 'Kingdom'",
      "Witcher's magical world, political betrayal, and father-daughter chosen-one arc resonate with K-drama fantasy like 'Goblin' and 'Guardian'",
      "Fans of the dark fantasy aesthetic will find their Korean match in 'Mr. Sunshine', 'Arthdal Chronicles', and 'Vincenzo'",
      "The conflicted hero who is part monster protecting the innocent is a trope K-dramas love — 'My Love from the Star' and 'The K2' do it beautifully",
      "Epic scope, prophecy-driven narratives, and morally grey heroes bridge to Korean historical epics like 'Six Flying Dragons'"
    ]
  },

  {
    id: "the-agency-paramount",
    title: "The Agency",
    type: "show",
    year: 2024,
    seasons: 1,
    synopsis: "CIA operative Martian has spent years deep undercover, his true identity buried to protect his mission. When ordered to resurface and abandon the life and love he's built, Martian must navigate the impossible collision between who he's become and who he was — while a deadly new threat looms over everything he loves.",
    genres: ["Spy Thriller", "Drama", "Action", "Romance"],
    themes: ["identity", "sacrifice", "love-under-threat", "duty-vs-heart", "double-life", "trust", "espionage"],
    tropes: ["deep-cover", "forbidden-love", "duty-vs-love", "double-identity", "spy-thriller", "action-romance"],
    tone: ["tense", "romantic", "sophisticated", "cinematic"],
    setting: ["international", "europe", "middle-east", "washington-dc"],
    characterTypes: ["deep-cover-agent", "forbidden-love-interest", "ruthless-handler", "loyal-colleague", "double-agent"],
    network: "Paramount+",
    streaming: { paramount_plus: true },
    actors: [
      { name: "Michael Fassbender", role: "Martian", isLead: true },
      { name: "Jodie Turner-Smith", role: "Cairo", isLead: true },
      { name: "Richard Gere", role: "Henry Voss", isLead: false }
    ],
    matchReasoningHints: [
      "A deep-cover operative torn between duty and forbidden love is the DNA of beloved K-dramas 'The K2', 'My Love from the Star', and 'Healer'",
      "The Agency's identity collapse under impossible choices resonates with K-drama themes in 'Flower of Evil' and 'Vagabond'",
      "Sophisticated spy romance with genuine emotional stakes maps to 'Crash Landing on You' and 'Encounter' — love between people who should never be together",
      "Fans of Michael Fassbender's restrained intensity will find mirror actors in Korean action dramas like 'Nirvana in Fire' and 'My Mister'",
      "The show's globe-spanning espionage and romantic sacrifice echo K-drama favourites 'Vagabond' and 'Designated Survivor: 60 Days'"
    ]
  },

  {
    id: "forever-netflix",
    title: "Forever",
    type: "show",
    year: 2025,
    seasons: 1,
    synopsis: "Two lonely strangers — a guarded fashion executive and a free-spirited chef — keep crossing paths in the most unexpected places and circumstances. As coincidences pile up into something that feels like fate, they must decide whether to surrender to a love neither of them planned for.",
    genres: ["Romance", "Comedy", "Drama"],
    themes: ["fate", "chance-encounters", "falling-in-love", "vulnerability", "career-vs-love", "second-chances", "unexpected-connection"],
    tropes: ["enemies-to-lovers", "fate-keeps-throwing-them-together", "opposites-attract", "will-they-wont-they", "slow-burn", "meet-cute"],
    tone: ["warm", "charming", "romantic", "funny", "feel-good"],
    setting: ["new-york", "paris", "restaurant", "fashion-world"],
    characterTypes: ["guarded-career-woman", "charming-optimist", "interfering-friends", "workaholic", "spontaneous-romantic"],
    network: "Netflix Original",
    streaming: { netflix: true },
    actors: [
      { name: "India Eisley", role: "Claudette", isLead: true },
      { name: "Noah Centineo", role: "Marco", isLead: true }
    ],
    matchReasoningHints: [
      "Fate-driven meet-cutes and 'the universe keeps pushing us together' romance is the beating heart of K-dramas like 'Crash Landing on You', 'Business Proposal', and 'Strong Girl Bong-soon'",
      "An ice-cold career woman melted by a warm optimistic man is a K-drama staple perfected in 'What's Wrong with Secretary Kim' and 'She Was Pretty'",
      "Forever's slow-burn international settings and emotional vulnerability mirror the sweep of 'Something in the Rain' and 'Encounter'",
      "Fans of light romantic comedies with genuine emotional stakes will find their library in Korean rom-coms like 'Because This Is My First Life' and 'Love in the Moonlight'",
      "Opposites-attract chemistry between a creative free spirit and a type-A professional is essential K-drama formula — 'My Lovely Liar' and 'The Bride of Habaek' serve it well"
    ]
  },

  {
    id: "the-gentlemen-s2",
    title: "The Gentlemen Season 2",
    type: "show",
    year: 2025,
    seasons: 2,
    synopsis: "Eddie Horniman returns as the reluctant lord of Britain's most elaborate cannabis empire. Season 2 expands the criminal universe with new enemies, new alliances, and deeper dives into the aristocratic underworld — as Eddie discovers that running from the criminal world only drags you further in.",
    genres: ["Crime", "Comedy", "Drama", "Action"],
    themes: ["crime-world", "loyalty", "class", "power", "reluctant-hero", "family-obligation", "british-underworld"],
    tropes: ["fish-out-of-water", "reluctant-crime-boss", "class-comedy", "ensemble-villains", "witty-dialogue", "stylish-violence"],
    tone: ["stylish", "witty", "dark-comedy", "fast-paced"],
    setting: ["british-countryside", "aristocratic-estate", "london-underworld"],
    characterTypes: ["reluctant-lord", "charming-criminal", "scheming-rival", "loyal-enforcer", "eccentric-ally"],
    network: "Netflix Original",
    streaming: { netflix: true },
    actors: [
      { name: "Theo James", role: "Eddie Horniman", isLead: true },
      { name: "Kaya Scodelario", role: "Susie Glass", isLead: true },
      { name: "Daniel Ings", role: "Freddy Horniman", isLead: false }
    ],
    matchReasoningHints: [
      "A nobleman dragged into criminal obligation who's smarter than anyone expected maps to K-drama antiheroes in 'Vincenzo', 'Lawless Lawyer', and 'Bad Guys'",
      "The Gentlemen's class-comedy — upper-crust aristocrats in grotesque criminal situations — mirrors the chaebol satire in K-dramas like 'My Mister' and 'Sky Castle'",
      "Reluctant heroes who refuse to play victim and instead out-manoeuvre criminals are beloved in Korean crime dramas like 'Vincenzo' and 'The Uncanny Counter'",
      "The witty ensemble of eccentric criminals and their tangled loyalties echoes Korean gang dramas like 'The Fiery Priest' and 'Bad Guys'",
      "Fans who love the first season's Guy Ritchie energy will find equally stylish Korean crime storytelling in 'Vincenzo' and 'The Gangster, the Cop, the Devil'"
    ]
  }
];
