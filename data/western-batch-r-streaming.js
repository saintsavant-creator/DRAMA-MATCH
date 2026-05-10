/**
 * DramaMatch Western Shows + Movies Batch R — Netflix / Amazon Prime / Disney+
 *
 * 15 entries: Currently-streaming Western shows and movies on the three
 * affiliate platforms. High match potential with K-dramas for cross-cultural
 * recommendations. Focused on 2022–2025 releases.
 *
 * Shows: 12 entries (go into western-shows.js)
 * Movies: 3 entries (go into western-movies.js)
 */

// ─── Western Shows (12) ─────────────────────────────────────────────────────

const westernShows = [

  {
    id: 'the-night-agent',
    title: 'The Night Agent',
    year: 2023,
    genres: ['thriller', 'action', 'drama'],
    themes: ['conspiracy', 'trust', 'patriotism', 'betrayal', 'survival'],
    tropes: ['wrong-man', 'conspiracy-thriller', 'unlikely-partners', 'race-against-time', 'government-corruption', 'spy-action'],
    tone: ['tense', 'action-packed', 'gripping', 'fast-paced', 'intense'],
    setting: ['modern', 'washington-dc', 'political', 'government'],
    characterTypes: ['low-level-agent-thrust-into-danger', 'civilian-witness', 'corrupt-officials', 'shadowy-conspirators', 'mentor-figure'],
    streaming: { netflix: true },
    actors: [
      { name: 'Gabriel Basso', role: 'Peter Sutherland', isLead: true },
      { name: 'Luciane Buchanan', role: 'Rose Larkin', isLead: true }
    ],
    matchReasoningHints: [
      "Vagabond's conspiracy-thriller DNA — a low-level nobody discovers government corruption and gets hunted for it, with the same relentless pacing and 'trust no one' paranoia",
      "Healer's civilian-meets-protector chemistry: an ordinary person thrust into a dangerous world alongside someone trained for it, and the trust they build under fire becomes the show's emotional core",
      "K2's bodyguard-protects-innocent-target premise — the dynamic of a capable agent keeping someone alive while unraveling a conspiracy bigger than both of them",
      "Iris fans who want globe-trotting spy action with a tighter narrative — same betrayal-within-the-agency tension, modernized production values, comparable romantic B-plot",
      "City Hunter's righteous-agent-vs-corrupt-system structure: a man who believed in his government discovering that the government doesn't believe in him"
    ]
  },

  {
    id: 'fallout',
    title: 'Fallout',
    year: 2024,
    genres: ['sci-fi', 'action', 'drama', 'comedy'],
    themes: ['survival', 'moral-ambiguity', 'post-apocalyptic', 'class-divide', 'human-nature'],
    tropes: ['post-apocalyptic-journey', 'fish-out-of-water', 'ensemble-perspectives', 'dark-humor', 'world-building', 'anti-hero'],
    tone: ['dark-humor', 'violent', 'satirical', 'adventurous', 'stylish'],
    setting: ['post-apocalyptic', 'wasteland', 'underground-vault', 'retro-futuristic'],
    characterTypes: ['naive-vault-dweller', 'ruthless-bounty-hunter', 'morally-grey-soldier', 'eccentric-survivors'],
    streaming: { amazon_prime: true },
    actors: [
      { name: 'Ella Purnell', role: 'Lucy MacLean', isLead: true },
      { name: 'Walton Goggins', role: 'The Ghoul', isLead: true },
      { name: 'Aaron Moten', role: 'Maximus', isLead: true }
    ],
    matchReasoningHints: [
      "Sweet Home's post-apocalyptic survival with moral complexity — both shows force characters to decide what kind of person they'll be when civilization's rules stop applying",
      "All of Us Are Dead's 'innocent person learns to survive in a world that collapsed overnight' arc — Lucy's vault-to-wasteland journey mirrors the students' school-to-apocalypse transformation",
      "Squid Game's class-commentary wrapped in genre entertainment: the vault system is literally a class metaphor, and the show never lets you forget who gets to hide underground while the world burns",
      "The 8 Show fans who appreciate social stratification played as both dark comedy and genuine horror — Fallout builds its entire world on the gap between the protected and the exposed",
      "D.P.'s dark-humor-meets-institutional-critique tone: Fallout is funny in the way that systems of power are funny — absurdly, cruelly, with a satirical edge that draws blood"
    ]
  },

  {
    id: 'citadel',
    title: 'Citadel',
    year: 2023,
    genres: ['action', 'thriller', 'sci-fi', 'spy'],
    themes: ['memory', 'identity', 'trust', 'global-conspiracy', 'partnership'],
    tropes: ['amnesiac-spy', 'global-spy-network', 'partners-reunited', 'memory-recovery', 'high-tech-thriller', 'double-agents'],
    tone: ['slick', 'action-packed', 'mysterious', 'intense', 'stylish'],
    setting: ['modern', 'global', 'high-tech', 'multiple-countries'],
    characterTypes: ['amnesiac-agent', 'former-partner', 'shadowy-organization', 'tech-genius-support', 'double-agent'],
    streaming: { amazon_prime: true },
    actors: [
      { name: 'Richard Madden', role: 'Mason Kane', isLead: true },
      { name: 'Priyanka Chopra Jonas', role: 'Nadia Sinh', isLead: true }
    ],
    matchReasoningHints: [
      "Vagabond's globe-trotting spy action and conspiracy paranoia — both shows span multiple countries with a pair of agents uncovering institutional betrayal at every level",
      "The K2's amnesiac-agent-rediscovering-identity structure: a spy who doesn't remember what they've done or who they were, slowly recovering fragments that change everything",
      "Healer's 'two people with erased histories finding each other again' romance-within-action framework — the relationship between the leads is the emotional engine that makes the spy stuff matter",
      "Iris' betrayal-within-the-agency DNA taken global: the conspiracy isn't local, and the action sequences span continents with a budget K-drama spy thrillers can only dream of",
      "My Love from the Star fans who want Priyanka Chopra and Richard Madden's chemistry: different genre, but the 'two extraordinary people recognizing each other' spark is the same"
    ]
  },

  {
    id: 'three-body-problem',
    title: '3 Body Problem',
    year: 2024,
    genres: ['sci-fi', 'thriller', 'drama', 'mystery'],
    themes: ['existential-threat', 'scientific-discovery', 'faith-vs-reason', 'humanity', 'sacrifice'],
    tropes: ['alien-contact', 'ensemble-scientists', 'countdown', 'mystery-puzzle', 'civilization-threat', 'decades-spanning'],
    tone: ['cerebral', 'epic', 'tense', 'mysterious', 'awe-inspiring'],
    setting: ['modern', 'global', 'scientific-labs', 'virtual-reality', 'historical-china'],
    characterTypes: ['brilliant-scientists', 'traumatized-survivor', 'military-strategist', 'alien-entity', 'idealistic-physicist'],
    streaming: { netflix: true },
    actors: [
      { name: 'Jess Hong', role: 'Jin Cheng', isLead: true },
      { name: 'Benedict Wong', role: 'Da Shi', isLead: true },
      { name: 'John Bradley', role: 'Jack Rooney', isLead: true }
    ],
    matchReasoningHints: [
      "Circle's 'mysterious force that connects present-day and future humanity' sci-fi structure — both shows span timelines, use mystery-box reveals, and force characters to confront existential questions about human survival",
      "Memories of the Alhambra fans who want a show where virtual/alternate reality intersects with real-world danger — the VR game sequences in 3 Body share that same 'is this real?' unsettling energy",
      "Sisyphus: The Myth's time-spanning conspiracy about an existential threat to humanity — same 'scientists racing against an impossibly large problem' energy, bigger scale, more cerebral",
      "Signal's 'communication across time' premise scaled to cosmic proportions: instead of a walkie-talkie connecting two detectives, it's an alien civilization communicating across light-years",
      "Hellbound's 'humanity facing an incomprehensible supernatural threat and fracturing over how to respond' social dynamics — 3 Body replaces the supernatural with aliens but the human response is identically chaotic"
    ]
  },

  {
    id: 'zero-day',
    title: 'Zero Day',
    year: 2025,
    genres: ['thriller', 'political', 'drama'],
    themes: ['political-conspiracy', 'truth', 'power', 'technology', 'national-security'],
    tropes: ['political-thriller', 'former-leader-returns', 'conspiracy', 'race-against-time', 'government-corruption'],
    tone: ['tense', 'cerebral', 'dark', 'gripping', 'dramatic'],
    setting: ['modern', 'washington-dc', 'political', 'government', 'tech-world'],
    characterTypes: ['former-president', 'intelligence-operatives', 'political-insiders', 'tech-moguls', 'investigative-journalist'],
    streaming: { netflix: true },
    actors: [
      { name: 'Robert De Niro', role: 'George Mullen', isLead: true },
      { name: 'Jesse Plemons', role: 'supporting', isLead: false },
      { name: 'Lizzy Caplan', role: 'supporting', isLead: false }
    ],
    matchReasoningHints: [
      "The Whirlwind's political-conspiracy-at-the-highest-level intensity — both shows feature a political figure navigating impossible moral choices while the system fights to protect itself",
      "Designated Survivor's 'catastrophic event reshapes the political landscape' premise but played with De Niro's gravitas and a darker, more cynical worldview",
      "Chief of Staff fans who want American political machinery examined with the same forensic detail K-dramas bring to Korean politics — different system, same institutional rot",
      "Stranger's 'one honest person trying to find truth within a corrupt institution' structure scaled to the American presidency — the isolation of being principled in an unprincipled world is universal",
      "Money Game's 'government officials making impossible economic decisions under catastrophic pressure' tension: Zero Day transposes that urgency to a cyber-security crisis"
    ]
  },

  {
    id: 'man-on-the-inside',
    title: 'Man on the Inside',
    year: 2024,
    genres: ['comedy', 'drama', 'mystery'],
    themes: ['aging', 'loneliness', 'purpose', 'community', 'family'],
    tropes: ['undercover-in-plain-sight', 'unlikely-detective', 'ensemble-elderly', 'heartwarming-comedy', 'fish-out-of-water'],
    tone: ['heartwarming', 'comedic', 'gentle', 'warm', 'touching'],
    setting: ['modern', 'retirement-home', 'suburban'],
    characterTypes: ['widowed-retiree', 'quirky-residents', 'private-investigator', 'supportive-daughter', 'retirement-home-staff'],
    streaming: { netflix: true },
    actors: [
      { name: 'Ted Danson', role: 'Charles', isLead: true },
      { name: 'Lilah Richcreek Estrada', role: 'supporting', isLead: false }
    ],
    matchReasoningHints: [
      "Navillera's 'elderly person discovering they have chapters left to write' emotional core — both shows treat aging as the beginning of a new story rather than the end of one",
      "Dear My Friends' warm, unflinching look at elderly community and the friendships that sustain people after their 'main' life events are over — same generational warmth, different cultural context",
      "Hometown Cha-Cha-Cha's community-as-character energy: the retirement home here functions like Gongjin — a tight-knit group where everyone knows everyone and every quirk is beloved",
      "Our Blues' anthology-style character studies of people at a particular life stage — Man on the Inside finds the same depth and humor in its ensemble of seniors",
      "It's Okay to Not Be Okay fans who appreciate mental health treated with warmth — this show addresses loneliness, grief, and purpose in aging with the same compassionate gaze"
    ]
  },

  {
    id: 'the-residence',
    title: 'The Residence',
    year: 2025,
    genres: ['mystery', 'comedy', 'drama'],
    themes: ['power', 'secrets', 'class-divide', 'justice', 'hidden-lives'],
    tropes: ['murder-mystery', 'eccentric-detective', 'ensemble-suspects', 'locked-location', 'dark-comedy', 'upstairs-downstairs'],
    tone: ['witty', 'mysterious', 'dark-humor', 'stylish', 'eccentric'],
    setting: ['modern', 'white-house', 'political', 'behind-the-scenes'],
    characterTypes: ['eccentric-investigator', 'white-house-staff', 'political-elite', 'hidden-lovers', 'loyal-servants'],
    streaming: { netflix: true },
    actors: [
      { name: 'Uzo Aduba', role: 'Cordelia Cupp', isLead: true },
      { name: 'Randall Park', role: 'supporting', isLead: false }
    ],
    matchReasoningHints: [
      "Inspector Koo's eccentric-detective energy: a brilliantly odd investigator in a setting full of people with secrets — both shows let their lead's weirdness drive the comedy and the deduction",
      "The Penthouse's 'glamorous location full of people who are all lying about something' ensemble mystery — the White House staff quarters function like the Hera Palace, with nicer wallpaper",
      "Knives Out's murder-mystery-as-class-commentary structure: the victim, the suspects, and the investigator all occupy different social strata, and the mystery is inseparable from the hierarchy",
      "Behind Every Star's 'the real drama happens behind the scenes' workplace energy — the show's interest in the staff who make powerful people's lives run smoothly mirrors K-drama's love of unseen workers",
      "Flower of Evil's 'everyone in this household is keeping a secret that could destroy everything' domestic tension — different scale (White House vs. suburb), same claustrophobic suspicion"
    ]
  },

  {
    id: 'running-point',
    title: 'Running Point',
    year: 2025,
    genres: ['comedy', 'drama', 'sports'],
    themes: ['family-business', 'gender-barriers', 'leadership', 'legacy', 'proving-yourself'],
    tropes: ['woman-in-mens-world', 'family-dynasty', 'underdog', 'sports-drama', 'sibling-rivalry', 'prove-yourself'],
    tone: ['comedic', 'sharp', 'energetic', 'warm', 'empowering'],
    setting: ['modern', 'sports-world', 'los-angeles', 'corporate'],
    characterTypes: ['ambitious-daughter', 'dismissive-brothers', 'traditional-patriarch', 'loyal-allies', 'scheming-rivals'],
    streaming: { netflix: true },
    actors: [
      { name: 'Kate Hudson', role: 'Isla Gordon', isLead: true },
      { name: 'Drew Tarver', role: 'supporting', isLead: false }
    ],
    matchReasoningHints: [
      "Queenmaker's woman-breaking-through-institutional-resistance energy — both leads face systems designed to exclude them and win through competence, strategy, and refusing to flinch",
      "Agency K-Drama's first-female-CEO-in-a-male-industry premise — Running Point transposes the gender-barrier-in-corporate-leadership story to professional basketball with the same sharp observations",
      "Succession's family-business-as-battleground dynamics: siblings competing for control of a sports empire, with every family dinner doubling as a board meeting",
      "Start-Up's 'woman proving she belongs in a male-dominated industry' ambition arc — different industry (sports vs. tech), same satisfaction of watching competence triumph over prejudice",
      "Stove League's sports-business drama energy: the show is as interested in the business of basketball as the game itself — trades, contracts, and power plays are the real competition"
    ]
  },

  {
    id: 'ad-vitam',
    title: 'Ad Vitam',
    year: 2025,
    genres: ['action', 'thriller', 'drama'],
    themes: ['survival', 'conspiracy', 'family', 'trust', 'past-sins'],
    tropes: ['on-the-run', 'couple-in-danger', 'conspiracy-thriller', 'trust-no-one', 'action-thriller', 'family-under-threat'],
    tone: ['intense', 'tense', 'action-packed', 'dark', 'relentless'],
    setting: ['modern', 'france', 'european', 'urban', 'on-the-run'],
    characterTypes: ['former-agent', 'pregnant-wife', 'mysterious-pursuers', 'old-colleagues', 'hidden-enemies'],
    streaming: { netflix: true },
    actors: [
      { name: 'Guillaume Canet', role: 'Franck Lazareff', isLead: true },
      { name: 'Stéphane Caillard', role: 'Léo', isLead: true }
    ],
    matchReasoningHints: [
      "The K2's retired-agent-protecting-someone-while-running-from-his-past structure — both shows combine tight action sequences with a romantic B-plot that humanizes the violence",
      "Man to Man's espionage-meets-domestic-life tension: a spy whose past catches up to his present family, forcing impossible choices between the people he loves and the life he left behind",
      "Taken (Liam Neeson) urgency: a father with a very particular set of skills protecting his family from a conspiracy — French production values, K-drama emotional stakes",
      "Vagabond fans who want international spy action with European locations — Paris substitutes for Budapest, the conspiracy is similarly institutional, and the action choreography is comparable",
      "Healer's 'dangerous man trying to live a normal life but his past won't let him' premise played in a European noir setting — different aesthetic, same emotional core of a protector who can't stop protecting"
    ]
  },

  {
    id: 'black-rabbit',
    title: 'Black Rabbit',
    year: 2025,
    genres: ['comedy', 'drama', 'thriller'],
    themes: ['family-secrets', 'class-divide', 'identity', 'deception', 'sibling-bonds'],
    tropes: ['dark-family-comedy', 'class-collision', 'secrets-revealed', 'ensemble-comedy', 'fish-out-of-water', 'con-within-family'],
    tone: ['dark-humor', 'comedic', 'sharp', 'witty', 'dramatic'],
    setting: ['modern', 'urban', 'affluent-community', 'suburban'],
    characterTypes: ['mismatched-twins', 'suspicious-spouse', 'eccentric-family', 'outsider-infiltrating', 'oblivious-elite'],
    streaming: { netflix: true },
    actors: [
      { name: 'Jason Bateman', role: 'lead', isLead: true },
      { name: 'Jude Law', role: 'lead', isLead: true }
    ],
    matchReasoningHints: [
      "Penthouse's family-secrets-in-high-society DNA: wealthy families with carefully curated images hiding devastating truths — Black Rabbit uses dark comedy where Penthouse uses melodrama, same explosive revelations",
      "Vincenzo's stylish-criminal-infiltrating-an-institution energy: someone who doesn't belong inserting themselves into a world of privilege, with the comedy coming from the collision of sensibilities",
      "Parasite's class-commentary through infiltration — the gap between how different economic classes live, made visible when one enters the other's world, played for dark laughs",
      "Schitt's Creek's 'wealthy people confronting a reality they've been insulated from' premise, but sharper and darker — the comedy here has teeth",
      "The Impossible Heir's class-infiltration dynamics: an outsider in an elite world learning the rules while planning to break them — different continent, same satisfying tension"
    ]
  },

  {
    id: 'the-lincoln-lawyer',
    title: 'The Lincoln Lawyer',
    year: 2022,
    genres: ['legal', 'thriller', 'drama', 'crime'],
    themes: ['justice', 'redemption', 'moral-grey-areas', 'addiction', 'defending-the-guilty'],
    tropes: ['defense-attorney', 'legal-procedural', 'client-secrets', 'courtroom-drama', 'comeback-story', 'morally-grey-protagonist'],
    tone: ['gripping', 'sharp', 'dramatic', 'tense', 'stylish'],
    setting: ['modern', 'los-angeles', 'courtroom', 'legal-world'],
    characterTypes: ['charismatic-lawyer', 'complicated-clients', 'rival-prosecutor', 'loyal-driver', 'ex-wife-ally'],
    streaming: { netflix: true },
    actors: [
      { name: 'Manuel Garcia-Rulfo', role: 'Mickey Haller', isLead: true },
      { name: 'Neve Campbell', role: 'Maggie McPherson', isLead: false }
    ],
    matchReasoningHints: [
      "Vincenzo's charismatic-lawyer-who-bends-rules energy — Mickey Haller operates in the same moral grey zone, defending questionable clients with style and street smarts",
      "Law School's legal-thriller structure with more courtroom action — both shows make the trial sequences genuinely exciting and the legal strategy feel like chess",
      "While You Were Sleeping fans: same 'legal system as both protection and weapon' thematic concern, with a protagonist who genuinely cares about justice underneath the mercenary exterior",
      "Lawless Lawyer's swagger: a defense attorney who fights dirty for his clients but has an iron moral code underneath — the Lincoln runs on charm, bluff, and genuine legal brilliance",
      "Extraordinary Attorney Woo fans who love courtroom scenes where the audience learns real legal strategy — Haller's defense tactics are inventive, specific, and satisfying to watch unfold"
    ]
  },

  {
    id: 'apple-cider-vinegar',
    title: 'Apple Cider Vinegar',
    year: 2025,
    genres: ['drama', 'thriller', 'true-crime'],
    themes: ['deception', 'wellness-culture', 'social-media', 'identity', 'desperation'],
    tropes: ['true-story', 'con-artist', 'social-media-fame', 'house-of-cards-collapse', 'dual-timelines', 'unreliable-narrator'],
    tone: ['satirical', 'tense', 'dark', 'empathetic', 'sharp'],
    setting: ['modern', 'australia', 'social-media', 'wellness-industry'],
    characterTypes: ['wellness-influencer', 'desperate-follower', 'investigative-journalist', 'complicit-community', 'true-believer'],
    streaming: { netflix: true },
    actors: [
      { name: 'Kaitlyn Dever', role: 'Belle Gibson', isLead: true },
      { name: 'Alycia Debnam-Carey', role: 'supporting', isLead: false }
    ],
    matchReasoningHints: [
      "Mask Girl's 'person constructing a false identity online with increasingly dangerous consequences' premise — both shows explore what happens when the persona you built becomes the prison you live in",
      "Anna (2022 K-drama) fans: same con-artist-in-plain-sight structure, same fascination with a woman building an elaborate lie and the moment it starts to crack",
      "Celebrity's toxic social-media-fame commentary — Apple Cider Vinegar takes the same 'what we'll do for followers' theme and pushes it into true-crime territory",
      "Extraordinary Attorney Woo's 'institutional systems that fail vulnerable people' critique, applied to the wellness industry — different institution, same structural failure",
      "The Glory's methodical-unraveling-of-a-lie structure: watching someone's carefully constructed world get dismantled piece by piece is equally satisfying whether it's revenge or investigation"
    ]
  }

];

// ─── Western Movies (3) ──────────────────────────────────────────────────────

const westernMovies = [

  {
    id: 'carry-on',
    title: 'Carry-On',
    year: 2024,
    runtime: 119,
    synopsis: "A young TSA agent on Christmas Eve discovers that a mysterious traveler has placed a bomb in a bag — and is blackmailing him to let it through security. With his girlfriend, his career, and hundreds of lives on the line, he has one night to outwit a professional killer without anyone knowing what's happening. A Die Hard-meets-airport-security thriller that turns the most mundane workplace into the most tense location in cinema.",
    genres: ['action', 'thriller'],
    themes: ['courage', 'sacrifice', 'ordinary-hero', 'time-pressure', 'christmas'],
    tropes: ['die-hard-in-a', 'race-against-time', 'ordinary-person-hero', 'cat-and-mouse', 'one-night-thriller', 'christmas-setting'],
    tone: ['tense', 'action-packed', 'thrilling', 'fun', 'intense'],
    setting: ['modern', 'airport', 'christmas-eve', 'confined-space'],
    characterTypes: ['everyday-hero', 'sophisticated-villain', 'supportive-partner', 'oblivious-crowds', 'suspicious-colleague'],
    streaming: { netflix: true },
    director: 'Jaume Collet-Serra',
    actors: [
      { name: 'Taron Egerton', role: 'Ethan Kopek', isLead: true },
      { name: 'Jason Bateman', role: 'The Traveler', isLead: true }
    ],
    matchReasoningHints: [
      "Healer's ordinary-person-thrust-into-danger-and-discovering-they're-capable energy — both heroes are underestimated people who rise to impossible situations through intelligence rather than combat training",
      "Squid Game's 'one person against an impossible system' adrenaline: the TSA agent is as trapped as any contestant, and the stakes escalate with the same relentless pacing",
      "Taxi Driver (K-drama) fans who love an underdog hero using a humble profession as the stage for extraordinary courage — a TSA agent saving hundreds is the same energy as a taxi driver fighting crime",
      "The K2's confined-space-action-sequence mastery applied to an airport: the best K-drama action shows understand that limitation creates tension, and this movie does too",
      "Die Hard's DNA is obvious, but the emotional core is closer to A Shop for Killers: an ordinary person in a mundane setting discovering they have survival instincts they never knew about"
    ]
  },

  {
    id: 'atlas',
    title: 'Atlas',
    year: 2024,
    runtime: 118,
    synopsis: "In a future where AI nearly destroyed humanity, the one person who understands the rogue AI's creator — because she grew up with him — must partner with an AI-powered mech suit to hunt him across the galaxy. Atlas Shepherd trusts no AI, no machine, and no system, which makes her bond with her mech's AI companion the movie's unlikely emotional center. A sci-fi action film about the person who hates technology most being the only one who can save a tech-dependent world.",
    genres: ['sci-fi', 'action', 'thriller'],
    themes: ['trust', 'AI-and-humanity', 'trauma', 'partnership', 'redemption'],
    tropes: ['reluctant-hero', 'human-AI-partnership', 'save-the-world', 'trust-issues', 'unlikely-bond', 'rogue-AI'],
    tone: ['action-packed', 'emotional', 'sci-fi', 'intense', 'fun'],
    setting: ['future', 'space', 'alien-planet', 'military-base', 'tech-world'],
    characterTypes: ['distrustful-heroine', 'AI-companion', 'rogue-AI-villain', 'military-commanders', 'sacrificial-soldiers'],
    streaming: { netflix: true },
    director: 'Brad Peyton',
    actors: [
      { name: 'Jennifer Lopez', role: 'Atlas Shepherd', isLead: true },
      { name: 'Simu Liu', role: 'Harlan (voice)', isLead: false }
    ],
    matchReasoningHints: [
      "Are You Human Too? fans: same 'human learning to trust an AI that seems more human than humans' emotional journey — the human-AI bond is surprisingly moving in both",
      "Circle's AI-and-humanity philosophical questions but delivered through action-movie spectacle — both explore what happens when the line between human and machine becomes meaningless",
      "Memories of the Alhambra's tech-driven action: a protagonist trapped in a technology-mediated reality where trust in the system is literally life-or-death",
      "Moving's parent-protecting-child-at-any-cost emotional core, repackaged in sci-fi: Atlas's backstory with the AI creator adds a personal dimension that elevates standard action fare",
      "My Love from the Star's 'learning to trust someone fundamentally different from you' romance structure — here the 'romance' is between human and AI, but the trust arc is identical"
    ]
  },

  {
    id: 'the-union',
    title: 'The Union',
    year: 2024,
    runtime: 107,
    synopsis: "A New Jersey construction worker is recruited by his high-school-sweetheart-turned-spy for a dangerous intelligence mission — and discovers that the girl who ghosted him after prom has spent the last two decades becoming one of the most capable operatives alive. A spy-comedy-romance about the collision of two completely different adult lives and the high school chemistry that somehow survived both of them.",
    genres: ['action', 'comedy', 'romance', 'spy'],
    themes: ['second-chances', 'ordinary-meets-extraordinary', 'trust', 'partnership', 'nostalgia'],
    tropes: ['high-school-reunion-romance', 'civilian-recruited-as-spy', 'comedy-of-errors', 'fish-out-of-water', 'action-comedy', 'second-chance-romance'],
    tone: ['fun', 'comedic', 'action-packed', 'romantic', 'light-hearted'],
    setting: ['modern', 'urban', 'european', 'spy-world'],
    characterTypes: ['everyman-hero', 'competent-spy-love-interest', 'quirky-spy-team', 'menacing-villain', 'bewildered-civilian'],
    streaming: { netflix: true },
    director: 'Julian Farino',
    actors: [
      { name: 'Mark Wahlberg', role: 'Mike McKenna', isLead: true },
      { name: 'Halle Berry', role: 'Roxanne Hall', isLead: true }
    ],
    matchReasoningHints: [
      "Healer's civilian-meets-secret-operative chemistry — the gap between a normal person's life and a spy's world creates the same comedy, danger, and unexpected romance",
      "Man to Man's spy-comedy energy: espionage played for laughs and heart rather than darkness, with a civilian caught in the middle providing the audience's 'wait, what?' perspective",
      "Hometown Cha-Cha-Cha's high-school-connection-reignited romance structure — two people who knew each other as teenagers meeting again as adults with completely different lives",
      "Strong Woman Do Bong-soon's female-lead-who-is-secretly-incredibly-dangerous charm: Roxanne's competence is the movie's biggest delight, and the male lead's awed reaction is the comedy",
      "My Love from the Star's 'extraordinary person + ordinary person = chemistry' formula: the gap between their worlds is the joke, the bridge between them is the romance"
    ]
  }

];

module.exports = { westernShows, westernMovies };
