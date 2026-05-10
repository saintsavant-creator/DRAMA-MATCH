/**
 * DramaMatch Western Shows Batch S — Romance & Drama Expansion (35 shows)
 *
 * Focus: Western romance/drama shows with strong K-drama/C-drama crossover appeal.
 * Includes: Heartland, Hart of Dixie, Brothers & Sisters, The Bold Type,
 *   and 31 more titles across streaming platforms.
 *
 * All entries are NEW (not in existing catalog) with full metadata:
 *   streaming platform badges, actors, matchReasoningHints
 */

module.exports = [

  // ─── 1 ───────────────────────────────────────────────────────────────────
  {
    id: 'heartland',
    title: 'Heartland',
    year: 2007,
    type: 'show',
    genres: ['drama', 'romance', 'family'],
    themes: ['healing', 'family-bonds', 'loss', 'resilience', 'love', 'community'],
    tropes: ['slow-burn-romance', 'found-family', 'small-town-life', 'horse-farm', 'grief-and-healing', 'multigenerational-family'],
    tone: ['heartwarming', 'emotional', 'wholesome', 'cozy', 'uplifting'],
    setting: ['small-town', 'rural', 'canada', 'modern', 'farm'],
    characterTypes: ['spirited-heroine', 'stoic-love-interest', 'wise-grandfather', 'devoted-sister', 'quirky-townspeople'],
    streaming: { amazon_prime: true },
    actors: [
      { name: 'Amber Marshall', role: 'Amy Fleming', isLead: true },
      { name: 'Graham Wardle', role: 'Ty Borden', isLead: true },
      { name: 'Shaun Johnston', role: 'Jack Bartlett', isLead: false }
    ],
    matchReasoningHints: [
      "When the Camellia Blooms' slow-burn romance between a warm-hearted woman running a small business and the stoic man who quietly falls for her — Heartland has the exact same patient, earned emotional arc",
      "Reply 1988's multigenerational family warmth and the feeling that watching a long-running show is like spending time with a family you love — Heartland delivers that same comfort across 18+ seasons",
      "Hometown Cha-Cha-Cha's rural community where romance develops through years of small moments, quiet gestures, and consistent showing up",
      "Oh My Venus fans who want a healing romance about someone rebuilding themselves after pain — Amy's journey with horses mirrors the K-drama pattern of using a shared passion as the language of emotional recovery",
      "Missing You's theme of grief as the foundation of a love story: two people who have lost something enormous finding in each other the possibility of choosing life again"
    ]
  },

  // ─── 2 ───────────────────────────────────────────────────────────────────
  {
    id: 'hart-of-dixie',
    title: 'Hart of Dixie',
    year: 2011,
    type: 'show',
    genres: ['romance', 'drama', 'comedy'],
    themes: ['new-beginnings', 'small-town-life', 'love-triangle', 'belonging', 'identity'],
    tropes: ['fish-out-of-water', 'small-town-romance', 'love-triangle', 'slow-burn-romance', 'enemies-to-lovers'],
    tone: ['romantic', 'charming', 'witty', 'heartwarming', 'cozy'],
    setting: ['small-town', 'modern', 'american-south', 'rural'],
    characterTypes: ['city-girl-displaced', 'charming-southern-rival', 'steadfast-love-interest', 'eccentric-townspeople'],
    streaming: { hulu: true },
    actors: [
      { name: 'Rachel Bilson', role: 'Zoe Hart', isLead: true },
      { name: 'Wilson Bethel', role: 'Wade Kinsella', isLead: true },
      { name: 'Scott Porter', role: 'George Tucker', isLead: false }
    ],
    matchReasoningHints: [
      "Hometown Cha-Cha-Cha's city professional dropped into a quirky small town, gradually falling for the community and one specific infuriating resident — Hart of Dixie is the American blueprint for this exact premise",
      "Strong Girl Nam-soon's fish-out-of-water heroine who thinks she's above her circumstances and slowly realizes she's been wrong about what she needs",
      "My Love from the Star fans who love triangles where one option is clearly right but the show makes you doubt it for four seasons — the George vs. Wade tension runs on the same ambiguity engine",
      "Welcome to Samdalri's premise of arriving somewhere and unexpectedly falling for a rival while building community roots",
      "Coffee Prince's enemies-to-lovers slow burn: two people who start by annoying each other, then competing, then grudgingly respecting, then realizing too late what they're feeling"
    ]
  },

  // ─── 3 ───────────────────────────────────────────────────────────────────
  {
    id: 'brothers-and-sisters',
    title: 'Brothers & Sisters',
    year: 2006,
    type: 'show',
    genres: ['drama', 'romance', 'family'],
    themes: ['family-secrets', 'sibling-bonds', 'grief', 'love', 'identity', 'political-drama'],
    tropes: ['family-ensemble', 'secrets-and-revelations', 'forbidden-love', 'political-intrigue', 'sibling-rivalry'],
    tone: ['emotional', 'dramatic', 'warm', 'intense', 'romantic'],
    setting: ['modern', 'california', 'upper-class', 'family-home'],
    characterTypes: ['matriarch', 'conflicted-patriarch', 'star-crossed-lovers', 'ambitious-sibling', 'black-sheep-sibling'],
    streaming: { hulu: true },
    actors: [
      { name: 'Sally Field', role: 'Nora Walker', isLead: true },
      { name: 'Matthew Rhys', role: 'Kevin Walker', isLead: true },
      { name: 'Rachel Griffiths', role: 'Sarah Walker', isLead: true }
    ],
    matchReasoningHints: [
      "Reply 1997's portrait of a family as the emotional bedrock of every individual story — Brothers & Sisters does the same thing at American scale, making the Walker family gatherings feel like a place you genuinely want to return to",
      "My Mister's theme of adults carrying the accumulated weight of family obligation and personal failure — the Walker siblings are all quietly drowning in ways they'll never admit to each other",
      "Misaeng fans who love watching competent people navigate institutional and family power dynamics simultaneously",
      "Secret Garden's class and family expectation themes: love that develops in spite of and because of everything a family represents and demands",
      "Reply 1994's ensemble energy where the personal histories between characters accumulate into something genuinely epic over multiple seasons"
    ]
  },

  // ─── 4 ───────────────────────────────────────────────────────────────────
  {
    id: 'the-bold-type',
    title: 'The Bold Type',
    year: 2017,
    type: 'show',
    genres: ['drama', 'romance', 'comedy'],
    themes: ['female-friendship', 'career-ambition', 'identity', 'love', 'modern-womanhood'],
    tropes: ['workplace-romance', 'female-friendship', 'career-vs-love', 'self-discovery', 'mentor-mentee'],
    tone: ['empowering', 'fun', 'romantic', 'witty', 'feel-good'],
    setting: ['modern', 'new-york-city', 'fashion-media', 'professional'],
    characterTypes: ['ambitious-writer', 'driven-editor', 'fashion-obsessed-stylist', 'wise-mentor-boss', 'love-interests'],
    streaming: { hulu: true, amazon_prime: true },
    actors: [
      { name: 'Katie Stevens', role: 'Jane Sloan', isLead: true },
      { name: 'Aisha Dee', role: 'Kat Edison', isLead: true },
      { name: 'Meghann Fahy', role: 'Sutton Brady', isLead: true },
      { name: 'Melora Hardin', role: 'Jacqueline Carlyle', isLead: false }
    ],
    matchReasoningHints: [
      "Search WWW's female friendship at the center of a high-pressure media workplace — three women navigating ambition, love, and identity in an industry that demands everything from them",
      "My ID Is Gangnam Beauty's self-discovery arc about a young woman figuring out who she is when external validation stops being enough — Jane's journalism journey runs on the same engine",
      "Her Private Life fans who love workplace romance wrapped in female friendship warmth — The Bold Type delivers both the love story and the sisterhood simultaneously",
      "Run On's theme of two people from different worlds falling in love while figuring out what they actually want from life",
      "What's Wrong With Secretary Kim fans of mentor-mentee slow burn with a workplace setting — Jacqueline and her three young journalists have the same dynamic of wisdom passed down through challenge"
    ]
  },

  // ─── 5 ───────────────────────────────────────────────────────────────────
  {
    id: 'a-discovery-of-witches',
    title: 'A Discovery of Witches',
    year: 2018,
    type: 'show',
    genres: ['romance', 'fantasy', 'drama'],
    themes: ['forbidden-love', 'destiny', 'identity', 'magic', 'ancient-rivalry', 'power'],
    tropes: ['forbidden-love', 'supernatural-romance', 'chosen-one', 'slow-burn-romance', 'destined-lovers'],
    tone: ['atmospheric', 'romantic', 'mysterious', 'lush', 'intense'],
    setting: ['modern', 'oxford-uk', 'historical-flashbacks', 'supernatural-world'],
    characterTypes: ['reluctant-witch-scholar', 'ancient-vampire', 'powerful-mentor', 'villainous-council'],
    streaming: { amazon_prime: true },
    actors: [
      { name: 'Teresa Palmer', role: 'Diana Bishop', isLead: true },
      { name: 'Matthew Goode', role: 'Matthew Clairmont', isLead: true }
    ],
    matchReasoningHints: [
      "Goblin's forbidden love between a supernatural being who has lived centuries and an ordinary human whose existence upends his entire world — the vampire-witch premise plays out with the same aching inevitability",
      "Tale of the Nine-Tailed's ancient-being-falling-for-a-human dynamic: Matthew's centuries of isolation ending when Diana arrives mirrors Lee Yeon waiting through lifetimes for someone worth protecting",
      "Hotel del Luna fans of atmospheric supernatural romance where the love story unfolds against a backdrop of old power, ancient grudges, and a world humans don't know exists",
      "Black's forbidden-love tension where the rules of two worlds make the relationship impossible, and refusing to accept that is exactly the point",
      "My Love from the Star fans of an immortal being who has carefully avoided attachment finally encountering someone he cannot walk away from"
    ]
  },

  // ─── 6 ───────────────────────────────────────────────────────────────────
  {
    id: 'good-witch',
    title: 'Good Witch',
    year: 2015,
    type: 'show',
    genres: ['romance', 'drama', 'fantasy'],
    themes: ['healing', 'community', 'love', 'magic', 'new-beginnings', 'family'],
    tropes: ['small-town-romance', 'magical-heroine', 'slow-burn-romance', 'found-family', 'cozy-mystery'],
    tone: ['cozy', 'warm', 'romantic', 'magical', 'heartwarming'],
    setting: ['small-town', 'modern', 'magical', 'community'],
    characterTypes: ['warm-magical-heroine', 'skeptical-doctor-love-interest', 'quirky-townspeople', 'devoted-family'],
    streaming: { netflix: true },
    actors: [
      { name: 'Catherine Bell', role: 'Cassie Nightingale', isLead: true },
      { name: 'James Denton', role: 'Sam Radford', isLead: true }
    ],
    matchReasoningHints: [
      "When the Camellia Blooms' warmth — Cassie Nightingale has the same luminous quality as Dong-baek, a woman who radiates kindness and whose goodness is her strength",
      "Hometown Cha-Cha-Cha fans of slow-burn romance between two people who orbit each other's lives in a small community until the feelings become undeniable",
      "My Girlfriend Is a Gumiho fans of a supernatural heroine in a grounded small-town setting — the magic in Good Witch is subtle and warm rather than dramatic, creating the same cozy atmospheric effect",
      "Oh My Ghost fans of a heroine whose connection to something beyond the normal world sets her apart and makes her more empathetic, not less human",
      "Legend of the Blue Sea fans who appreciate romantic leads who are fundamentally good and healing rather than tortured and complex"
    ]
  },

  // ─── 7 ───────────────────────────────────────────────────────────────────
  {
    id: 'chesapeake-shores',
    title: 'Chesapeake Shores',
    year: 2016,
    type: 'show',
    genres: ['romance', 'drama', 'family'],
    themes: ['second-chances', 'family', 'love', 'hometown', 'healing', 'belonging'],
    tropes: ['returning-home', 'second-chance-romance', 'family-drama', 'small-town-romance', 'slow-burn-romance'],
    tone: ['heartwarming', 'romantic', 'cozy', 'emotional', 'warm'],
    setting: ['small-town', 'chesapeake-bay', 'modern', 'family-home'],
    characterTypes: ['returning-heroine', 'patient-love-interest', 'multigenerational-family', 'quirky-townspeople'],
    streaming: { netflix: true },
    actors: [
      { name: 'Meghan Ory', role: "Abby O'Brien Winters", isLead: true },
      { name: 'Jesse Metcalfe', role: 'Trace Riley', isLead: true }
    ],
    matchReasoningHints: [
      "Welcome to Samdalri's returning-home second-chance romance — going back to a place you left, finding that the person you hurt most is still there, and having to reckon with who you've become",
      "Reply 1994's theme of home as something you have to leave before you understand it — Chesapeake Shores uses the O'Brien family home the way Reply uses the boarding house, as an emotional anchor",
      "Hometown Cha-Cha-Cha fans of a woman who built a career far from home discovering that what she actually needs has been waiting in the place she fled",
      "One Spring Night's second-chance romance energy: two people with a complicated history deciding whether to try again knowing everything that went wrong before",
      "When the Camellia Blooms' community warmth and the feeling that a small town is not a consolation prize but the actual destination"
    ]
  },

  // ─── 8 ───────────────────────────────────────────────────────────────────
  {
    id: 'the-time-travelers-wife',
    title: "The Time Traveler's Wife",
    year: 2022,
    type: 'show',
    genres: ['romance', 'drama', 'sci-fi'],
    themes: ['fate', 'love', 'loss', 'time', 'sacrifice', 'destiny'],
    tropes: ['destined-lovers', 'time-travel-romance', 'supernatural-love', 'star-crossed', 'non-linear-storytelling'],
    tone: ['romantic', 'emotional', 'melancholic', 'dramatic', 'lush'],
    setting: ['modern', 'time-traveling', 'chicago', 'non-linear'],
    characterTypes: ['time-traveling-hero', 'devoted-heroine', 'star-crossed-lovers'],
    streaming: { hulu: true },
    actors: [
      { name: 'Theo James', role: 'Henry DeTamble', isLead: true },
      { name: 'Rose Leslie', role: 'Clare Abshire', isLead: true }
    ],
    matchReasoningHints: [
      "Signal's non-linear love story where time is not an obstacle but the very substance of the relationship — this explores what it costs to love someone whose presence you can never count on",
      "About Time (Korean movie) fans who want that aching quality of a love story where every moment together has to be held more tightly because it might be the last one",
      "Goblin's destined-lovers tragedy: two people whose love is real and enormous, being destroyed by the same supernatural force that brought them together",
      "My Love from the Star fans of a romance where the supernatural element isn't wish-fulfillment but genuine pain — loving someone who can disappear at any moment",
      "Queen In-hyun's Man time-travel romance: a man unstuck in time who keeps returning to the same woman, and whether love can survive the impossibility of being fully present"
    ]
  },

  // ─── 9 ───────────────────────────────────────────────────────────────────
  {
    id: 'a-million-little-things',
    title: 'A Million Little Things',
    year: 2018,
    type: 'show',
    genres: ['drama', 'romance', 'family'],
    themes: ['friendship', 'grief', 'mental-health', 'love', 'secrets', 'healing'],
    tropes: ['friendship-ensemble', 'grief-and-healing', 'hidden-secrets', 'slow-burn-romance', 'found-family'],
    tone: ['emotional', 'heartfelt', 'dramatic', 'warm', 'tearjerker'],
    setting: ['modern', 'boston', 'suburban', 'middle-class'],
    characterTypes: ['grieving-friends', 'devoted-spouses', 'struggling-parents', 'unlikely-confidants'],
    streaming: { hulu: true },
    actors: [
      { name: 'David Giuntoli', role: 'Eddie Saville', isLead: true },
      { name: 'Romany Malco', role: 'Rome Howard', isLead: true },
      { name: 'Allison Miller', role: 'Maggie Bloom', isLead: true }
    ],
    matchReasoningHints: [
      "Reply 1988's portrait of a friend group as a chosen family whose bonds are tested and deepened by crisis — A Million Little Things uses a suicide to examine how well we really know the people we love",
      "My Mister's meditation on people who look fine from the outside and are quietly falling apart — every character is managing something enormous in private",
      "Hospital Playlist fans of a long-running ensemble about friends who've known each other for decades and still surprise each other",
      "It's Okay to Not Be Okay's willingness to make mental health the actual subject rather than a background detail",
      "Be Melodramatic's honest look at adult friendships in your thirties where careers, relationships, and grief all collide at once"
    ]
  },

  // ─── 10 ──────────────────────────────────────────────────────────────────
  {
    id: 'grace-and-frankie',
    title: 'Grace and Frankie',
    year: 2015,
    type: 'show',
    genres: ['comedy', 'drama', 'romance'],
    themes: ['new-beginnings', 'female-friendship', 'aging', 'second-chances', 'family', 'self-discovery'],
    tropes: ['unlikely-friends', 'second-chance-romance', 'female-friendship', 'later-in-life-love', 'found-family'],
    tone: ['comedic', 'heartfelt', 'witty', 'warm', 'empowering'],
    setting: ['modern', 'california', 'beach-house', 'family-drama'],
    characterTypes: ['uptight-sophisticate', 'free-spirited-bohemian', 'ex-husbands', 'adult-children'],
    streaming: { netflix: true },
    actors: [
      { name: 'Jane Fonda', role: 'Grace Hanson', isLead: true },
      { name: 'Lily Tomlin', role: 'Frankie Bergstein', isLead: true }
    ],
    matchReasoningHints: [
      "My Mister's theme that people in their fifties and sixties have as much emotional life as anyone younger — Grace and Frankie takes that seriously as a comedy drama",
      "Hospital Playlist's friendship between two people who shouldn't work together and work perfectly — their unlikely bond is the heart of the whole show",
      "Something in the Rain fans of female relationships that are more interesting than the romance — the show trusts that women's friendships are compelling television",
      "Oh My Lady fans of later-in-life love — the show handles romance for people in their seventies with the same casualness most shows handle twentysomethings",
      "Misaeng fans of watching competent professionals humbled by a world that has changed around them"
    ]
  },

  // ─── 11 ──────────────────────────────────────────────────────────────────
  {
    id: 'daisy-jones-and-the-six',
    title: 'Daisy Jones & The Six',
    year: 2023,
    type: 'show',
    genres: ['romance', 'drama', 'music'],
    themes: ['love', 'ambition', 'art', 'self-destruction', 'friendship', 'regret'],
    tropes: ['will-they-wont-they', 'creative-partners', 'star-crossed-lovers', 'rockstar-romance', 'tragic-love'],
    tone: ['romantic', 'melancholic', 'nostalgic', 'electric', 'emotional'],
    setting: ['1970s', 'music-industry', 'los-angeles', 'historical'],
    characterTypes: ['tortured-artist', 'devoted-partner', 'rock-band-ensemble', 'creative-rivals'],
    streaming: { amazon_prime: true },
    actors: [
      { name: 'Riley Keough', role: 'Daisy Jones', isLead: true },
      { name: 'Sam Claflin', role: 'Billy Dunne', isLead: true }
    ],
    matchReasoningHints: [
      "One Spring Night's aching quality of a love that is completely real and completely impossible — Daisy and Billy know exactly what they feel and can't act on it, and the restraint is electric",
      "Do You Like Brahms fans of a creative partnership that becomes emotional intimacy that becomes the most important relationship of two people's lives whether or not it ever becomes romantic",
      "Melancholia's willingness to let love be tragic rather than wrapping it up — Daisy Jones presents a love story as retrospective tragedy rather than happy ending",
      "Nevertheless fans of a show that doesn't pretend complicated feelings have simple resolutions — Billy's love for his wife and what he feels for Daisy are both real",
      "It's Okay to Not Be Okay's use of creative work as both a symptom and an attempt at healing — Daisy's music is her trauma management system"
    ]
  },

  // ─── 12 ──────────────────────────────────────────────────────────────────
  {
    id: 'the-summer-i-turned-pretty',
    title: 'The Summer I Turned Pretty',
    year: 2022,
    type: 'show',
    genres: ['romance', 'drama'],
    themes: ['coming-of-age', 'love-triangle', 'first-love', 'grief', 'family', 'summer'],
    tropes: ['love-triangle', 'first-love', 'summer-romance', 'childhood-friends', 'growing-up'],
    tone: ['romantic', 'emotional', 'nostalgic', 'bittersweet', 'heartfelt'],
    setting: ['beach-house', 'summer', 'modern', 'suburban'],
    characterTypes: ['girl-next-door', 'brooding-love-interest', 'sunny-love-interest', 'protective-older-brother'],
    streaming: { amazon_prime: true },
    actors: [
      { name: 'Lola Tung', role: 'Belly Conklin', isLead: true },
      { name: 'Christopher Briney', role: 'Conrad Fisher', isLead: true },
      { name: 'Gavin Casalegno', role: 'Jeremiah Fisher', isLead: false }
    ],
    matchReasoningHints: [
      "Reply series fans of a love triangle that is genuinely painful because both options are good — the Conrad vs. Jeremiah debate runs the same 'choose the person, not the safer choice' engine as K-drama husband speculation",
      "A Love So Beautiful fans of first love as the emotional education of an entire life",
      "Nevertheless fans of romantic ambiguity where you understand completely why someone keeps going back to the person who is not quite giving them what they need",
      "Our Beloved Summer's coming-of-age romance energy: a summer that becomes the reference point by which everything afterward is measured",
      "Soundtrack #1 fans of seasonal romance — the specificity of summer as the container for these feelings makes every moment more intense"
    ]
  },

  // ─── 13 ──────────────────────────────────────────────────────────────────
  {
    id: 'grease-rise-of-the-pink-ladies',
    title: 'Anne with an E',
    year: 2017,
    type: 'show',
    genres: ['drama', 'romance', 'historical', 'coming-of-age'],
    themes: ['identity', 'belonging', 'first-love', 'imagination', 'resilience', 'found-family'],
    tropes: ['found-family', 'first-love', 'coming-of-age', 'childhood-romance', 'outsider-finding-home'],
    tone: ['heartwarming', 'emotional', 'atmospheric', 'bittersweet', 'beautiful'],
    setting: ['late-1800s', 'prince-edward-island', 'rural', 'historical'],
    characterTypes: ['spirited-orphan', 'devoted-family', 'best-friend', 'first-love'],
    streaming: { netflix: true },
    actors: [
      { name: 'Amybeth McNulty', role: 'Anne Shirley', isLead: true },
      { name: 'Lucas Jade Zumann', role: 'Gilbert Blythe', isLead: false }
    ],
    matchReasoningHints: [
      "Reply series fans of a love story that grows slowly through childhood friendship and rivalry — Anne and Gilbert's relationship is the Canadian foundational text for the slow-burn childhood-friends-to-lovers arc",
      "My Mister's found-family warmth: an isolated person who learns that family is not something you're born into but something people choose for you",
      "It's Okay to Not Be Okay's exploration of childhood trauma and imagination as a coping mechanism — Anne's relentless optimism is explicitly built on top of genuine wounds",
      "Goblin's destined-lovers energy where the audience knows before the characters do — Gilbert's feelings for Anne develop in the background of her entire adolescence",
      "Extraordinary Attorney Woo fans of a protagonist who experiences the world differently than everyone around her and refuses to apologize for it"
    ]
  },

  // ─── 14 ──────────────────────────────────────────────────────────────────
  {
    id: 'tell-me-lies',
    title: 'Tell Me Lies',
    year: 2022,
    type: 'show',
    genres: ['drama', 'romance', 'thriller'],
    themes: ['obsessive-love', 'manipulation', 'secrets', 'toxic-attraction', 'self-destruction'],
    tropes: ['toxic-romance', 'obsessive-love', 'dark-secrets', 'dual-timeline', 'unreliable-narrator'],
    tone: ['dark', 'intense', 'addictive', 'romantic', 'disturbing'],
    setting: ['modern', 'college', 'multi-timeline', 'upper-class'],
    characterTypes: ['obsessive-heroine', 'charming-manipulator', 'supportive-friends', 'collateral-damage'],
    streaming: { hulu: true },
    actors: [
      { name: 'Grace Van Patten', role: 'Lucy Albright', isLead: true },
      { name: 'Jackson White', role: 'Stephen DeMarco', isLead: true }
    ],
    matchReasoningHints: [
      "Nevertheless fans of a show that captures the specific madness of wanting someone who is genuinely bad for you — Tell Me Lies doesn't rescue you from the feeling, it shows you exactly what you're doing",
      "Flower of Evil's dual-timeline structure that makes you reassess what you thought you knew — the flash-forwards keep recontextualizing the college romance",
      "Love in Contract's exploration of romantic fixation — the show asks how much of love is attachment versus need, and doesn't give you a comfortable answer",
      "My Liberation Notes fans of a show honest about people choosing their own unhappiness — Lucy knows Stephen is wrong for her and chooses him anyway, repeatedly",
      "Mine's examination of obsession in a relationship of unequal power — Stephen's charm is a weapon and the show is unflinching about how effectively it works"
    ]
  },

  // ─── 15 ──────────────────────────────────────────────────────────────────
  {
    id: 'the-way-home',
    title: 'The Way Home',
    year: 2023,
    type: 'show',
    genres: ['drama', 'romance', 'family', 'fantasy'],
    themes: ['family-healing', 'second-chances', 'grief', 'time', 'belonging', 'love'],
    tropes: ['time-travel', 'family-drama', 'second-chance-romance', 'returning-home', 'generational-healing'],
    tone: ['emotional', 'heartwarming', 'mysterious', 'cozy', 'tearjerker'],
    setting: ['small-town', 'canada', 'multi-timeline', 'modern', 'historical'],
    characterTypes: ['grieving-mother', 'determined-daughter', 'wise-grandmother', 'patient-love-interest'],
    streaming: { amazon_prime: true },
    actors: [
      { name: 'Chyler Leigh', role: 'Kat Landry', isLead: true },
      { name: 'Andie MacDowell', role: 'Del Landry', isLead: true },
      { name: 'Sadie Laflamme-Snow', role: 'Alice Landry', isLead: true }
    ],
    matchReasoningHints: [
      "Signal's time-travel family drama — The Way Home uses communication across time not as spectacle but as a mechanism for processing grief and asking what if we could fix what broke",
      "Reply 1988's multigenerational family warmth: three generations of women sharing a house and slowly healing the wounds between them through ordinary daily life",
      "My Mister's quiet, earned emotional catharsis — the show builds its emotional architecture slowly and delivers it in moments that feel completely inevitable",
      "Goblin fans of a time-travel element that serves the love story rather than replacing it — the supernatural conceit deepens the emotional stakes",
      "When the Camellia Blooms fans of a show that believes in small-town community as a healing force and earns that belief"
    ]
  },

  // ─── 16 ──────────────────────────────────────────────────────────────────
  {
    id: 'when-hope-calls',
    title: 'When Hope Calls',
    year: 2019,
    type: 'show',
    genres: ['romance', 'drama', 'family'],
    themes: ['new-beginnings', 'family', 'healing', 'love', 'small-town-life', 'found-family'],
    tropes: ['fresh-start', 'small-town-romance', 'found-family', 'slow-burn-romance', 'community-warmth'],
    tone: ['heartwarming', 'wholesome', 'romantic', 'cozy', 'uplifting'],
    setting: ['small-town', 'canada', 'modern', 'rural'],
    characterTypes: ['spirited-orphan-turned-adult', 'warm-community', 'love-interest', 'found-family-members'],
    streaming: { amazon_prime: true },
    actors: [
      { name: 'Morgan Kohan', role: 'Lillian Walsh', isLead: true },
      { name: 'Ryan-James Hatanaka', role: 'Gabriel Walsh', isLead: true }
    ],
    matchReasoningHints: [
      "Warm and Cozy's small-town romance where a woman from the city discovers that the life she's been running toward has been waiting somewhere quieter",
      "When the Camellia Blooms' found-family warmth: a woman building her life in a community where she wasn't born and slowly becoming essential to everyone around her",
      "Because This Is My First Life fans of modest, heartfelt romance — both shows are about people making unconventional life choices and finding unexpected happiness",
      "Sunny My Dear fans of gentle romance in a beautiful rural setting where the pacing is slow and intentional",
      "Hometown Cha-Cha-Cha fans of a community where everyone cares too much about everyone else's business and that nosiness is actually love"
    ]
  },

  // ─── 17 ──────────────────────────────────────────────────────────────────
  {
    id: 'little-fires-everywhere',
    title: 'Little Fires Everywhere',
    year: 2020,
    type: 'show',
    genres: ['drama', 'mystery', 'romance'],
    themes: ['class', 'motherhood', 'identity', 'secrets', 'race', 'privilege'],
    tropes: ['class-conflict', 'hidden-past', 'unlikely-friendship', 'secrets-and-revelations', 'suburban-drama'],
    tone: ['intense', 'emotional', 'suspenseful', 'thought-provoking', 'dramatic'],
    setting: ['1990s', 'suburban-ohio', 'upper-middle-class', 'modern'],
    characterTypes: ['privileged-matriarch', 'mysterious-artist', 'teenage-rebels', 'children-caught-between'],
    streaming: { hulu: true },
    actors: [
      { name: 'Reese Witherspoon', role: 'Elena Richardson', isLead: true },
      { name: 'Kerry Washington', role: 'Mia Warren', isLead: true }
    ],
    matchReasoningHints: [
      "Sky Castle's explosive class drama about what privileged parents do to protect the lives they've built — Little Fires Everywhere has the same suffocating bubble of upper-class anxiety",
      "Mine's theme of wealth as a cage — the Richardson family's perfect life is exposed as a prison of performance that Mia's arrival makes impossible to maintain",
      "Mother's secret past as the engine of the entire drama: both shows are built around what a mother has done to protect her child and the destruction that follows",
      "The Glory's examination of how socioeconomic privilege insulates abusers and isolates victims",
      "Penthouse's willingness to make its wealthy characters genuinely monstrous while still making them understandable"
    ]
  },

  // ─── 18 ──────────────────────────────────────────────────────────────────
  {
    id: 'the-affair-us',
    title: 'The Affair',
    year: 2014,
    type: 'show',
    genres: ['drama', 'romance', 'mystery'],
    themes: ['infidelity', 'perspective', 'grief', 'identity', 'love', 'memory'],
    tropes: ['unreliable-narrator', 'forbidden-love', 'marriage-drama', 'dual-perspective', 'psychological-drama'],
    tone: ['intense', 'mysterious', 'emotional', 'literary', 'complex'],
    setting: ['modern', 'new-york', 'hamptons', 'multi-timeline'],
    characterTypes: ['conflicted-writer', 'haunted-waitress', 'wronged-spouse', 'complicated-children'],
    streaming: { paramount: true },
    actors: [
      { name: 'Dominic West', role: 'Noah Solloway', isLead: true },
      { name: 'Ruth Wilson', role: 'Alison Bailey', isLead: true }
    ],
    matchReasoningHints: [
      "Misty's dual perspective that makes the same events look completely different depending on whose eyes you're watching through — The Affair built an entire structural conceit around this idea",
      "Nevertheless fans who appreciate a show that refuses to make infidelity simple — both shows look at desire and attachment with real complexity rather than moral condemnation",
      "Just Between Lovers' exploration of grief as the foundation of a relationship — both Alison and Noah are destroyed people and their relationship is partly about the destruction",
      "My Unfamiliar Family's marriage drama where the relationship has become so layered with resentment and old wounds that love and damage are completely inseparable",
      "Secret Love Affair's willingness to portray a genuinely complicated extramarital relationship with intelligence rather than reducing it to either romance or moral lesson"
    ]
  },

  // ─── 19 ──────────────────────────────────────────────────────────────────
  {
    id: 'dickinson',
    title: 'Dickinson',
    year: 2019,
    type: 'show',
    genres: ['drama', 'comedy', 'romance', 'historical'],
    themes: ['female-ambition', 'forbidden-love', 'identity', 'art', 'death', 'freedom'],
    tropes: ['forbidden-love', 'feminist-heroine', 'historical-revisionism', 'queer-love', 'artist-protagonist'],
    tone: ['subversive', 'witty', 'emotional', 'darkly-comedic', 'poetic'],
    setting: ['19th-century', 'amherst', 'historical-fantastical'],
    characterTypes: ['rebellious-poet-heroine', 'forbidden-female-love', 'controlling-family', 'death-as-guide'],
    streaming: { apple_tv: true },
    actors: [
      { name: 'Hailee Steinfeld', role: 'Emily Dickinson', isLead: true },
      { name: 'Ella Hunt', role: 'Sue Gilbert', isLead: true }
    ],
    matchReasoningHints: [
      "Alchemy of Souls' heroine who refuses to be what her world expects — Emily Dickinson's war against nineteenth-century expectations has the same fire as Naksu's refusal to accept limits",
      "Mr. Queen fans of irreverent historical revisionism that uses a period setting to ask modern questions about identity, ambition, and who gets to create art",
      "My Mister's theme of genius being invisible because society refuses to look — Dickinson dramatizes what it costs to know your work matters when no one will ever tell you",
      "Nevertheless fans who want a love story between two women as emotionally devastating as any K-drama romantic lead relationship",
      "Rookie Historian Goo Hae-ryung fans of a woman who refuses to do what her historical moment demands of her and pays an enormous price for that refusal"
    ]
  },

  // ─── 20 ──────────────────────────────────────────────────────────────────
  {
    id: 'the-diplomat-us',
    title: 'The Diplomat',
    year: 2023,
    type: 'show',
    genres: ['drama', 'romance', 'political'],
    themes: ['marriage', 'ambition', 'power', 'identity', 'international-politics', 'trust'],
    tropes: ['political-drama', 'complicated-marriage', 'fish-out-of-water', 'power-couple', 'twists'],
    tone: ['sharp', 'sophisticated', 'witty', 'tense', 'romantic'],
    setting: ['modern', 'london', 'political', 'international'],
    characterTypes: ['reluctant-ambassador', 'brilliant-manipulative-husband', 'british-allies', 'political-rivals'],
    streaming: { netflix: true },
    actors: [
      { name: 'Keri Russell', role: 'Kate Wyler', isLead: true },
      { name: 'Rufus Sewell', role: 'Hal Wyler', isLead: true }
    ],
    matchReasoningHints: [
      "Mr. Sunshine's examination of how much love can survive when two people want fundamentally incompatible things — Kate and Hal's marriage is the most interesting political drama in the show",
      "Kingdom fans who want political conspiracy with the same 'everything is bigger than one person and someone will get destroyed' inevitability",
      "Sky Castle's power couple dynamic: two brilliant people in a shared life where the question is whether they're a team or two people competing using each other",
      "Designated Survivor fans of political drama where the protagonist is always slightly out of their depth and that vulnerability is what makes them compelling",
      "Misaeng fans of watching someone incredibly competent struggle in an environment that operates by different rules than anything they've been trained for"
    ]
  },

  // ─── 21 ──────────────────────────────────────────────────────────────────
  {
    id: 'ginny-and-georgia',
    title: 'Ginny & Georgia',
    year: 2021,
    type: 'show',
    genres: ['drama', 'comedy', 'romance'],
    themes: ['mother-daughter', 'secrets', 'identity', 'small-town-life', 'first-love', 'survival'],
    tropes: ['mother-daughter-dynamic', 'small-town-romance', 'hidden-past', 'coming-of-age', 'love-triangle'],
    tone: ['witty', 'dramatic', 'heartfelt', 'entertaining', 'emotional'],
    setting: ['small-town', 'new-england', 'modern', 'high-school'],
    characterTypes: ['free-spirited-mother', 'earnest-daughter', 'privileged-love-interest', 'complicated-family'],
    streaming: { netflix: true },
    actors: [
      { name: 'Brianne Howey', role: 'Georgia Miller', isLead: true },
      { name: 'Antonia Gentry', role: 'Ginny Miller', isLead: true }
    ],
    matchReasoningHints: [
      "Crash Course in Romance fans of a mother-daughter relationship as the central drama — Georgia and Ginny's dynamic has the same push-pull of deep love and fundamental incompatibility",
      "Twenty-Five Twenty-One's coming-of-age romance where first love is genuinely transformative and the show takes adolescent emotions as seriously as adult ones",
      "Sky Castle's 'what has this parent actually done to give their child this life' mystery — Ginny & Georgia slowly reveals Georgia's methods and makes you reassess everything you assumed",
      "Gilmore Girls fans of a witty single mother building a new life in a New England small town — this is the darker, messier version of that premise",
      "It's Okay to Not Be Okay's theme of generational trauma transmitted from parent to child without either of them understanding what's happening"
    ]
  },

  // ─── 22 ──────────────────────────────────────────────────────────────────
  {
    id: 'everything-now',
    title: 'Everything Now',
    year: 2023,
    type: 'show',
    genres: ['drama', 'romance', 'coming-of-age'],
    themes: ['recovery', 'identity', 'friendship', 'first-love', 'mental-health', 'belonging'],
    tropes: ['recovery-arc', 'first-love', 'female-friendship', 'coming-of-age', 'self-discovery'],
    tone: ['heartfelt', 'emotional', 'funny', 'honest', 'hopeful'],
    setting: ['modern', 'london', 'school', 'teen'],
    characterTypes: ['recovering-heroine', 'devoted-best-friends', 'complicated-love-interest', 'struggling-family'],
    streaming: { netflix: true },
    actors: [
      { name: 'Sophie Wilde', role: 'Mia Polanco', isLead: true },
      { name: 'Lauryn Ajufo', role: 'Carli Thomas', isLead: false }
    ],
    matchReasoningHints: [
      "It's Okay to Not Be Okay's willingness to put mental health recovery at the center of a story without making it inspirational porn — Mia's eating disorder recovery is the actual subject, not a backdrop",
      "Twenty-Five Twenty-One fans of teenage energy done right: the show captures the specific feeling of being a teenager who knows something is wrong but doesn't have the language to say what",
      "Heartstopper's sensitivity toward young people navigating identity and mental health simultaneously — Everything Now has the same compassion but a darker subject",
      "Hello, My Twenties fans of a female-centered coming-of-age story where the friendship between girls is as important as any romance",
      "My Mister's theme that recovery isn't linear and healing looks different from the outside than it feels from the inside"
    ]
  },

  // ─── 23 ──────────────────────────────────────────────────────────────────
  {
    id: 'queen-charlotte',
    title: 'Queen Charlotte: A Bridgerton Story',
    year: 2023,
    type: 'show',
    genres: ['romance', 'drama', 'historical'],
    themes: ['love', 'duty', 'loneliness', 'sacrifice', 'mental-health', 'race', 'power'],
    tropes: ['slow-burn-romance', 'royal-marriage', 'forbidden-feelings', 'destined-lovers', 'tragedy-and-hope'],
    tone: ['lush', 'romantic', 'emotional', 'atmospheric', 'dramatic'],
    setting: ['regency-era', 'london', 'historical', 'royalty'],
    characterTypes: ['young-queen', 'troubled-king', 'supportive-ladies-in-waiting', 'scheming-court'],
    streaming: { netflix: true },
    actors: [
      { name: 'India Amarteifio', role: 'Young Charlotte', isLead: true },
      { name: 'Corey Mylchreest', role: 'Young King George', isLead: true }
    ],
    matchReasoningHints: [
      "Moon Lovers' tragic love between a queen and a broken king — Charlotte loving George through his illness has the same heartbreaking quality as Hae-soo loving Wang So through his pain",
      "Goblin's love that exists despite and because of an enormous tragedy — Charlotte's devotion to George is defined by what she's willing to accept",
      "Snowdrop fans of a love story set against historical forces that make the relationship both essential and impossible — race and empire make Charlotte and George's love a political act",
      "Flower of Evil's 'loving someone who is not quite what you thought' theme — Charlotte's discovery of George's mental illness recasts everything she believed about her marriage",
      "Mr. Sunshine's examination of what it costs to love someone whose situation makes love inadequate as a solution"
    ]
  },

  // ─── 24 ──────────────────────────────────────────────────────────────────
  {
    id: 'sullivan-s-crossing-s2',
    title: "Sullivan's Crossing Season 2",
    year: 2024,
    type: 'show',
    genres: ['romance', 'drama', 'family'],
    themes: ['healing', 'new-beginnings', 'family-secrets', 'love', 'small-town-life', 'identity'],
    tropes: ['fresh-start', 'small-town-romance', 'slow-burn-romance', 'past-trauma', 'found-family'],
    tone: ['heartwarming', 'emotional', 'romantic', 'cozy', 'uplifting'],
    setting: ['small-town', 'rural', 'canada', 'modern', 'wilderness'],
    characterTypes: ['runaway-heroine', 'stoic-love-interest', 'warm-father-figure', 'quirky-community'],
    streaming: { amazon_prime: true },
    actors: [
      { name: 'Morgan Kohan', role: 'Maggie Sullivan', isLead: true },
      { name: 'Chad Michael Murray', role: 'Cal Jones', isLead: true }
    ],
    matchReasoningHints: [
      "Hometown Cha-Cha-Cha's city professional fleeing her life ending up in a small community that becomes more real than anything she left behind",
      "Hospital Playlist's found-family warmth: a group of people who didn't choose each other becoming the people who matter most",
      "When the Camellia Blooms fans who want a single woman finding her footing in a community that slowly becomes home",
      "My Mister's quiet healing romance: two damaged people who recognize something in each other and slowly, without announcement, become necessary to one another",
      "Warm and Cozy fans of slow-burn romance in a beautiful rural setting where the show takes its time letting the relationship develop naturally"
    ]
  },

  // ─── 25 ──────────────────────────────────────────────────────────────────
  {
    id: 'the-great-s2',
    title: 'The Great',
    year: 2020,
    type: 'show',
    genres: ['drama', 'comedy', 'historical', 'romance'],
    themes: ['ambition', 'power', 'forbidden-love', 'feminism', 'manipulation', 'identity'],
    tropes: ['enemies-to-lovers', 'royal-court', 'political-scheming', 'feminist-heroine', 'dark-comedy'],
    tone: ['darkly-comedic', 'sharp', 'irreverent', 'lush', 'subversive'],
    setting: ['18th-century', 'russian-court', 'historical', 'royalty'],
    characterTypes: ['ambitious-empress', 'ridiculous-emperor', 'scheming-allies', 'sacrificed-pawns'],
    streaming: { hulu: true },
    actors: [
      { name: 'Elle Fanning', role: 'Catherine the Great', isLead: true },
      { name: 'Nicholas Hoult', role: 'Emperor Peter III', isLead: true }
    ],
    matchReasoningHints: [
      "Mr. Queen's brilliant satirical approach to historical court drama — both shows use comedy to expose the absurdity of royal institutions while smuggling in genuinely sharp political commentary",
      "Under the Queen's Umbrella fans of a court where every relationship is a chess game and the heroine has to be smarter than everyone around her just to survive",
      "Rookie Historian Goo Hae-ryung's feminist heroine in a historical setting who refuses to be reduced to what society expects of her",
      "Alchemy of Souls fans of enemies-to-lovers where the hostility is completely genuine and the eventual surrender is all the more satisfying",
      "100 Days My Prince's dark comedy approach to royal marriage — The Great takes the same premise and plays it as satire rather than romance"
    ]
  },

  // ─── 26 ──────────────────────────────────────────────────────────────────
  {
    id: 'call-the-midwife-drama',
    title: 'Call the Midwife',
    year: 2012,
    type: 'show',
    genres: ['drama', 'romance', 'historical'],
    themes: ['community', 'women-supporting-women', 'social-change', 'love', 'sacrifice', 'faith'],
    tropes: ['ensemble-cast', 'historical-drama', 'female-community', 'slice-of-life', 'social-issues'],
    tone: ['heartwarming', 'emotional', 'uplifting', 'tearjerker', 'warm'],
    setting: ['1950s-60s', 'east-london', 'historical', 'community-nursing'],
    characterTypes: ['dedicated-midwives', 'religious-sisters', 'community-mothers', 'love-interests', 'steadfast-nurses'],
    streaming: { netflix: true },
    actors: [
      { name: 'Jenny Agutter', role: 'Sister Julienne', isLead: false },
      { name: 'Laura Main', role: 'Shelagh Turner', isLead: true },
      { name: 'Helen George', role: 'Trixie Franklin', isLead: true }
    ],
    matchReasoningHints: [
      "Hospital Playlist's warmth toward a community of caregivers where the medical work is never just medical — Call the Midwife treats birth and death and the ordinary moments between as equally sacred",
      "Dr. Romantic's theme that medicine is ultimately about connection and community — both shows use a healthcare setting to explore what it means to show up for people in their most vulnerable moments",
      "Be Melodramatic's female friendship at the center of everything: a group of women supporting each other through love, loss, career, and the quiet indignities of a society that undervalues them",
      "Reply 1988's ability to make you cry over characters living ordinary lives — Call the Midwife does the same thing with 1960s East London",
      "My Mister fans who appreciate a show that finds profound emotional weight in the everyday experiences of people society has decided aren't important enough to notice"
    ]
  },

  // ─── 27 ──────────────────────────────────────────────────────────────────
  {
    id: 'reign-s2',
    title: 'Reign',
    year: 2013,
    type: 'show',
    genres: ['romance', 'drama', 'historical'],
    themes: ['political-intrigue', 'forbidden-love', 'power', 'sacrifice', 'survival', 'loyalty'],
    tropes: ['forbidden-love', 'love-triangle', 'political-marriage', 'royal-court', 'scheming-rivals'],
    tone: ['romantic', 'dramatic', 'atmospheric', 'intense', 'lush'],
    setting: ['historical', 'french-court', '16th-century', 'royalty'],
    characterTypes: ['young-queen', 'prince-husband', 'bastard-love-interest', 'scheming-court-ladies', 'powerful-mother-figure'],
    streaming: { netflix: true },
    actors: [
      { name: 'Adelaide Kane', role: 'Mary Queen of Scots', isLead: true },
      { name: 'Toby Regbo', role: 'Francis', isLead: true },
      { name: 'Torrance Coombs', role: 'Sebastian', isLead: false }
    ],
    matchReasoningHints: [
      "Mr. Sunshine's historical heroine navigating love and political survival in a world where she has power but everything conspires to take it — Mary's position at the French court mirrors Go Ae-shin's in Joseon",
      "Moon Lovers fans of doomed love in a royal court where every relationship is a political liability",
      "Hwarang's young court full of beautiful rivals where romance and politics are completely inseparable and loyalty is the most dangerous thing you can offer",
      "Queen: Love and War fans of a heroine who must use all her intelligence to survive a court that views her as either an asset or a threat",
      "Sky Castle's theme of mothers doing monstrous things for their children's futures — Catherine de Medici is the most extreme version of this archetype in Western television"
    ]
  },

  // ─── 28 ──────────────────────────────────────────────────────────────────
  {
    id: 'the-last-kingdom-s5',
    title: 'The Last Kingdom',
    year: 2015,
    type: 'show',
    genres: ['drama', 'action', 'romance', 'historical'],
    themes: ['identity', 'loyalty', 'love', 'war', 'belonging', 'destiny'],
    tropes: ['torn-between-worlds', 'epic-romance', 'warrior-hero', 'forbidden-love', 'chosen-destiny'],
    tone: ['epic', 'dramatic', 'intense', 'romantic', 'atmospheric'],
    setting: ['9th-century', 'anglo-saxon-england', 'historical', 'war'],
    characterTypes: ['identity-torn-warrior', 'loyal-heroine', 'noble-king', 'treacherous-villain', 'spiritual-guide'],
    streaming: { netflix: true },
    actors: [
      { name: 'Alexander Dreymon', role: 'Uhtred of Bebbanburg', isLead: true },
      { name: 'Emily Cox', role: 'Brida', isLead: false },
      { name: 'Eliza Butterworth', role: 'Aelswith', isLead: false }
    ],
    matchReasoningHints: [
      "Arthdal Chronicles' epic historical drama about a warrior caught between two worlds with no clear home, whose identity is the central drama of the entire show",
      "Mr. Sunshine's theme of a man who belongs to a country he was not born into — Uhtred's divided loyalty between Saxon England and Danish culture runs on exactly the same existential pain",
      "Song of the Bandits's fierce loyalty to a cause that the world calls treason — both shows are about people who fight for what they believe in when everyone else has compromised",
      "Moon Lovers fans of epic historical romance where love is always secondary to duty but somehow becomes the most important thing",
      "Kingdom's ability to make historical action feel urgent and personal — The Last Kingdom never lets the macro history swallow the individual human stories"
    ]
  },

  // ─── 29 ──────────────────────────────────────────────────────────────────
  {
    id: 'the-split-bbc',
    title: 'The Split',
    year: 2018,
    type: 'show',
    genres: ['drama', 'romance', 'legal'],
    themes: ['marriage', 'divorce', 'identity', 'family', 'second-chances', 'career-vs-love'],
    tropes: ['professional-romance', 'marriage-drama', 'second-chance-romance', 'family-secrets', 'career-ambition'],
    tone: ['sophisticated', 'emotional', 'intense', 'romantic', 'literary'],
    setting: ['modern', 'london', 'legal-world', 'upper-class'],
    characterTypes: ['brilliant-divorce-lawyer', 'estranged-ex', 'loving-husband', 'formidable-matriarch'],
    streaming: { hulu: true, netflix: true },
    actors: [
      { name: 'Nicola Walker', role: 'Hannah Stern', isLead: true },
      { name: 'Barry Atsma', role: 'Christie Carmichael', isLead: false },
      { name: 'Stephen Mangan', role: 'Nathan', isLead: false }
    ],
    matchReasoningHints: [
      "My Mister's willingness to examine what happens inside a long marriage when connection has been replaced by habit — The Split is about the archaeology of love, digging through layers of a relationship to find what's still there",
      "Something in the Rain's love that existed before all the complications and the question of whether it can survive them",
      "Sky Castle's examination of professional ambition as both a protection mechanism and a cage — Hannah uses her divorce practice to control the emotional chaos she will not address in her own marriage",
      "Be Melodramatic's honest look at adult relationships where careers, families, and old feelings all pull in different directions at once",
      "Misaeng fans who love watching intelligent, accomplished people navigate the gap between what their professional lives tell them about themselves and what their personal lives reveal"
    ]
  },

  // ─── 30 ──────────────────────────────────────────────────────────────────
  {
    id: 'the-wilds-amazon',
    title: 'The Wilds',
    year: 2020,
    type: 'show',
    genres: ['drama', 'thriller', 'romance'],
    themes: ['survival', 'female-friendship', 'secrets', 'identity', 'trauma', 'conspiracy'],
    tropes: ['survival-ensemble', 'dark-secrets', 'female-bonding', 'unreliable-narrator', 'social-experiment'],
    tone: ['tense', 'emotional', 'gripping', 'dark', 'feminist'],
    setting: ['deserted-island', 'modern', 'survival', 'flashbacks'],
    characterTypes: ['diverse-teen-ensemble', 'hidden-manipulators', 'survivors-with-pasts', 'unlikely-allies'],
    streaming: { amazon_prime: true },
    actors: [
      { name: 'Sophia Ali', role: 'Fatin Jadmani', isLead: true },
      { name: 'Shannon Berry', role: 'Bo Shaw', isLead: true },
      { name: 'Rachel Griffiths', role: 'Gretchen Klein', isLead: false }
    ],
    matchReasoningHints: [
      "Juvenile Justice's willingness to look unflinchingly at young women in crisis without reducing them to victims or villains — The Wilds gives every character a full interior life",
      "All of Us Are Dead fans of a teen survival ensemble where the social dynamics of normal life become life-or-death stakes in an extreme environment",
      "My Mister's theme that everyone is carrying something enormous that the world doesn't know about — The Wilds uses the island to strip that away and reveal what's underneath",
      "Extracurricular fans of morally complex young women making terrible decisions for understandable reasons",
      "Sweet Home's survival drama where the real monster is what these people already were before the extraordinary circumstances arrived"
    ]
  },

  // ─── 31 ──────────────────────────────────────────────────────────────────
  {
    id: 'maid-netflix',
    title: 'Maid',
    year: 2021,
    type: 'show',
    genres: ['drama', 'romance'],
    themes: ['survival', 'domestic-abuse', 'motherhood', 'resilience', 'systemic-failure', 'healing'],
    tropes: ['survivor-heroine', 'escape-arc', 'mother-love', 'systemic-obstacles', 'support-system'],
    tone: ['intense', 'emotional', 'hopeful', 'heartbreaking', 'raw'],
    setting: ['modern', 'pacific-northwest', 'working-class', 'survival'],
    characterTypes: ['determined-single-mother', 'abusive-partner', 'complicated-mother', 'unlikely-allies'],
    streaming: { netflix: true },
    actors: [
      { name: 'Margaret Qualley', role: 'Alex', isLead: true },
      { name: 'Nick Robinson', role: 'Sean', isLead: false },
      { name: 'Andie MacDowell', role: 'Paula', isLead: false }
    ],
    matchReasoningHints: [
      "My Mister's portrait of someone surviving a life that has become unbearable one small indignity at a time — Maid understands poverty as a system the way My Mister understands institutional exploitation",
      "Mother's fierce mother love as the engine of an entire drama — Alex's love for Maddie is the only thing that makes the obstacles she faces survivable",
      "The Glory's long game of a woman deciding to survive and then deciding to do something beyond surviving",
      "It's Okay to Not Be Okay's multigenerational trauma: Alex's relationship with Paula shows how what happened to a parent becomes the prison a child is born into",
      "When the Camellia Blooms fans of a single mother rebuilding her life — Maid is the same premise without the warmth, showing what it actually costs when the community doesn't show up"
    ]
  },

  // ─── 32 ──────────────────────────────────────────────────────────────────
  {
    id: 'atypical-netflix',
    title: 'Atypical',
    year: 2017,
    type: 'show',
    genres: ['drama', 'comedy', 'romance'],
    themes: ['identity', 'family', 'love', 'growing-up', 'neurodiversity', 'independence'],
    tropes: ['coming-of-age', 'first-love', 'family-drama', 'neurodivergent-protagonist', 'found-self'],
    tone: ['heartwarming', 'comedic', 'emotional', 'honest', 'feel-good'],
    setting: ['modern', 'suburban', 'high-school-college', 'family-home'],
    characterTypes: ['autistic-protagonist', 'devoted-sister', 'complicated-parents', 'first-love-interest'],
    streaming: { netflix: true },
    actors: [
      { name: 'Keir Gilchrist', role: 'Sam Gardner', isLead: true },
      { name: 'Brigette Lundy-Paine', role: 'Casey Gardner', isLead: true },
      { name: 'Jennifer Jason Leigh', role: 'Elsa Gardner', isLead: false }
    ],
    matchReasoningHints: [
      "Extraordinary Attorney Woo fans of a neurodivergent protagonist navigating love and adulthood with the same combination of precision and emotional vulnerability",
      "Reply 1988's family warmth where the parents' struggles are as interesting as the children's coming-of-age — the Gardner family is as messy and loving as the Ssangmun-dong families",
      "Be Melodramatic fans of a show that takes its characters' emotional lives with complete seriousness regardless of whether those lives seem dramatic from the outside",
      "It's Okay Not to Be Okay's gentle but honest approach to neurodiversity — Atypical is warmer and less intense but treats Sam's experience with the same respect",
      "Hospital Playlist fans of found-family warmth and the sense that watching these people over time is a genuine privilege"
    ]
  },

  // ─── 33 ──────────────────────────────────────────────────────────────────
  {
    id: 'the-night-manager',
    title: 'The Night Manager',
    year: 2016,
    type: 'show',
    genres: ['thriller', 'romance', 'drama'],
    themes: ['undercover', 'betrayal', 'love', 'moral-ambiguity', 'arms-dealing', 'sacrifice'],
    tropes: ['undercover-romance', 'forbidden-love', 'spy-thriller', 'moral-compromise', 'impossible-mission'],
    tone: ['slick', 'tense', 'romantic', 'sophisticated', 'intense'],
    setting: ['modern', 'global', 'luxury-world', 'spy'],
    characterTypes: ['reluctant-spy', 'dangerous-antagonist', 'forbidden-love-interest', 'determined-intelligence-officer'],
    streaming: { amazon_prime: true },
    actors: [
      { name: 'Tom Hiddleston', role: 'Jonathan Pine', isLead: true },
      { name: 'Hugh Laurie', role: 'Richard Roper', isLead: false },
      { name: 'Olivia Colman', role: 'Angela Burr', isLead: false }
    ],
    matchReasoningHints: [
      "Healer's undercover identity romance — a man pretending to be someone else who falls for someone he should not, and the question of whether love built on deception can survive the truth",
      "Iris fans who want the same globe-trotting spy world with European production values and a love story that feels genuinely at risk",
      "City Hunter's reluctant spy arc: a man who didn't choose this life finding that the mission has changed from the inside because of one person he shouldn't care about",
      "My Name's theme of going so deep undercover that the line between the role and the person begins to dissolve",
      "Vagabond fans of high-stakes international thriller with a romantic subplot that earns its emotional weight through genuine danger"
    ]
  },

  // ─── 34 ──────────────────────────────────────────────────────────────────
  {
    id: 'the-english',
    title: 'The English',
    year: 2022,
    type: 'show',
    genres: ['western', 'romance', 'drama', 'action'],
    themes: ['revenge', 'love', 'identity', 'justice', 'frontier-violence', 'unlikely-partnership'],
    tropes: ['unlikely-partners', 'slow-burn-romance', 'revenge-quest', 'fish-out-of-water', 'destined-allies'],
    tone: ['atmospheric', 'tense', 'romantic', 'violent', 'beautiful'],
    setting: ['1890s', 'american-west', 'historical', 'frontier'],
    characterTypes: ['aristocratic-avenger', 'pawnee-tracker', 'frontier-criminals', 'corrupt-law'],
    streaming: { amazon_prime: true },
    actors: [
      { name: 'Emily Blunt', role: 'Lady Cornelia Locke', isLead: true },
      { name: 'Chaske Spencer', role: 'Eli Whipp', isLead: true }
    ],
    matchReasoningHints: [
      "Mr. Sunshine's star-crossed love between two people from radically different worlds who find in each other the only honest relationship either of them has — the Cornelia/Eli dynamic is the same profound outsider recognition",
      "Healer's unlikely-partners slow burn: two people who need each other for a shared mission and discover somewhere in the middle of surviving that the partnership has become something irreplaceable",
      "Song of the Bandits fans of a frontier survival story that refuses to romanticize the violence while making you feel every loss acutely",
      "My Mister's theme of two people who recognize something in each other that no one else can see — Cornelia and Eli understand each other in a way neither of them can fully explain",
      "Snowdrop fans of a love story that exists against a backdrop of colonial violence and whose beauty is inseparable from its tragedy"
    ]
  },

  // ─── 35 ──────────────────────────────────────────────────────────────────
  {
    id: 'the-marvelous-mrs-maisel',
    title: 'The Marvelous Mrs. Maisel',
    year: 2017,
    type: 'show',
    genres: ['comedy', 'drama', 'romance'],
    themes: ['female-ambition', 'identity', 'second-chances', 'love', 'family', 'liberation'],
    tropes: ['reinvention', 'second-chance-romance', 'feminist-heroine', 'period-drama', 'career-awakening'],
    tone: ['witty', 'charming', 'romantic', 'empowering', 'nostalgic'],
    setting: ['1950s-60s', 'new-york-city', 'upper-class', 'entertainment-world'],
    characterTypes: ['reinventing-heroine', 'devoted-manager', 'disapproving-family', 'ex-husband', 'mentor-figure'],
    streaming: { amazon_prime: true },
    actors: [
      { name: 'Rachel Brosnahan', role: 'Miriam "Midge" Maisel', isLead: true },
      { name: 'Alex Borstein', role: 'Susie Myerson', isLead: true },
      { name: 'Tony Shalhoub', role: 'Abe Weissman', isLead: false }
    ],
    matchReasoningHints: [
      "Crash Landing on You's woman who unexpectedly discovers what she's actually capable of when everything she thought defined her is stripped away — Midge's post-marriage awakening is the same engine",
      "My Mister's theme of someone living a life that isn't really theirs and the liberation that comes from naming it — Midge's stand-up is her way of finally saying what she's actually thinking",
      "Search WWW fans of women building careers in male-dominated industries on their own terms, using intelligence and personality as their capital",
      "Be Melodramatic's honest portrait of what it looks like when a woman in her thirties finally starts living for herself rather than for the story she's been assigned",
      "Rookie Historian Goo Hae-ryung fans of a female protagonist who insists on doing things on her own terms in a world that finds that insistence incomprehensible and threatening"
    ]
  }

];
