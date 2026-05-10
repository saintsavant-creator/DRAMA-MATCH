/**
 * K-Drama Batch O — Mixed Genres Expansion
 * 35 titles: 2025-2026 trending, critically acclaimed, high-search-volume
 * Mix: romance, thriller, historical, comedy, melodrama, fantasy, crime
 * Added: 2026-04-09
 */
module.exports = [

  // ── 2025-2026 TRENDING / NETFLIX ─────────────────────────────────────────────

  {
    id: 'when-life-gives-you-tangerines-s2',
    title: 'When Life Gives You Tangerines (Season 2)',
    year: 2025,
    episodes: 8,
    synopsis: 'The sprawling Jeju Island saga continues, following the next generation as they grapple with the legacies left by their parents — love sacrificed, ambitions deferred, and the particular weight of being born into a family shaped by wartime and hardship. A luminous, unhurried multigenerational drama about how much of who we are is determined before we arrive.',
    genres: ['melodrama', 'romance', 'family', 'historical', 'drama'],
    themes: ['family-legacy', 'generational-trauma', 'sacrifice', 'identity', 'growing-up', 'roots', 'belonging'],
    tropes: ['multigenerational-saga', 'jeju-setting', 'family-secrets', 'second-generation', 'slow-burn', 'found-family'],
    tone: ['emotional', 'nostalgic', 'warm', 'melancholic', 'cinematic', 'lyrical'],
    setting: ['jeju-island', 'modern', 'historical-flashbacks', 'rural-korea'],
    characterTypes: ['wise-matriarch', 'struggling-heir', 'free-spirit-daughter', 'stoic-patriarch', 'community-elders'],
    streaming: { netflix: true },
    network: 'Netflix',
    actors: [
      { name: 'IU', role: 'Lead', isLead: true },
      { name: 'Park Bo-gum', role: 'Lead', isLead: true }
    ],
    matchReasoningHints: [
      'This Is Us fans who want the same multigenerational emotional architecture — timelines weaving together, payoffs landing episodes later — but set on Jeju Island with a specifically Korean post-war emotional landscape',
      'Normal People\'s quiet intensity transposed into family drama: the show earns every feeling it asks for without manipulation, which is rarer than it sounds',
      'For viewers who loved season one: same DNA, new generation, the kind of continuation that expands rather than retreads',
      'IU and Park Bo-gum in peak form — both at the stage of their careers where they can do everything with very little, which is exactly what this kind of slow-burn melodrama demands',
      'The show is the Korean equivalent of a Terrence Malick film: not concerned with plot so much as the texture of lives, the weight of time, the beauty of ordinary moments'
    ]
  },

  {
    id: 'optional-romance',
    title: 'Optional Romance',
    year: 2025,
    episodes: 12,
    synopsis: 'Two ex-colleagues who had a brief, unspoken almost-relationship years ago find themselves unexpectedly working together again. Neither has moved on as thoroughly as they pretended. A grounded, witty adult romance that refuses the usual K-drama melodrama in favour of something rarer: two people who are actually capable of talking to each other, eventually.',
    genres: ['romance', 'comedy', 'drama'],
    themes: ['second-chances', 'miscommunication', 'professional-life', 'adulthood', 'timing', 'self-awareness'],
    tropes: ['second-chance-romance', 'workplace-reconnection', 'slow-burn', 'mature-leads', 'friends-to-lovers', 'missed-connections'],
    tone: ['warm', 'witty', 'grounded', 'romantic', 'lighthearted', 'charming'],
    setting: ['modern', 'workplace', 'seoul', 'adult-life'],
    characterTypes: ['self-aware-career-woman', 'emotionally-intelligent-man', 'supportive-colleagues', 'meddling-friends'],
    streaming: { netflix: true },
    network: 'tvN',
    actors: [
      { name: 'Jung Hae-in', role: 'Lead', isLead: true },
      { name: 'Jung So-min', role: 'Lead', isLead: true }
    ],
    matchReasoningHints: [
      'Fleabag\'s self-aware adult comedy energy but without the tragedy — a romance for people who appreciate characters who are clever about their own emotional failures',
      'For Normal People fans who want the intimacy and emotional intelligence but without the gut-punch — Optional Romance is the version where they actually communicate',
      'Schitt\'s Creek energy in that the comedy comes from character rather than situation, and the love story is earned through genuine connection rather than dramatic obstacle',
      'The antidote to K-dramas where miscommunication is weaponized for 12 episodes: these leads have the conversation, it just takes them a while to want to have it',
      'Excellent People from Spain shares a similar register — smart adults navigating attraction and professional life with wit and emotional honesty'
    ]
  },

  {
    id: 'the-trauma-code',
    title: 'Trauma Code: Heroes on Call (Season 2)',
    year: 2025,
    episodes: 8,
    synopsis: 'Baek Kang-hyuk returns to the trauma bay — and his iconoclastic, physically fearless approach to emergency medicine continues to transform the way his hospital responds to the impossible cases no one else will touch. Season 2 raises the stakes with increasingly complex medical crises and a deeper look at the personal cost of operating at the edge of human endurance.',
    genres: ['medical', 'thriller', 'drama', 'action'],
    themes: ['dedication', 'trauma', 'medical-excellence', 'sacrifice', 'teamwork', 'burnout', 'identity'],
    tropes: ['genius-maverick-doctor', 'medical-procedural', 'team-building', 'life-and-death-stakes', 'institutional-conflict'],
    tone: ['intense', 'gripping', 'fast-paced', 'emotional', 'cinematic', 'adrenaline-fueled'],
    setting: ['hospital', 'emergency-room', 'modern', 'trauma-unit'],
    characterTypes: ['maverick-trauma-surgeon', 'dedicated-team', 'bureaucratic-opposition', 'desperate-patients'],
    streaming: { netflix: true },
    network: 'Netflix',
    actors: [
      { name: 'Ju Ji-hoon', role: 'Baek Kang-hyuk', isLead: true },
      { name: 'Ha Young', role: 'Supporting', isLead: false }
    ],
    matchReasoningHints: [
      'Grey\'s Anatomy\'s high-stakes medical energy compressed into 8 binge-worthy episodes with none of the soap opera bloat — Trauma Code operates like a very well-edited feature film stretched over a season',
      'The Pitt fans who want the same ER chaos and impossible-case energy but with a Korean medical system twist — the resource constraints here create genuinely different dramatic problems',
      'For House MD fans: Baek Kang-hyuk\'s maverick genius energy with the institutional conflict and the physically risky methods, but warmer and less nihilistic',
      'Season 2 deepens the character work that made season 1 a surprise hit — Ju Ji-hoon continues to be one of the most watchable leads in Korean TV, and the medical sequences are strikingly well-directed',
      'Equals Code Black (US) in intensity but surpasses it in character specificity — the show\'s Korean healthcare setting adds real-world texture that American medical dramas rarely attempt'
    ]
  },

  {
    id: 'resident-playbook',
    title: 'Resident Playbook',
    year: 2025,
    episodes: 16,
    synopsis: 'Five first-year medical residents at a major Seoul hospital navigate the brutal learning curve of actual practice — the gap between what they were taught and what emergency medicine demands of them is immediately, catastrophically apparent. A coming-of-age drama embedded in medical realism, more interested in the humanity of young doctors than in the cases they treat.',
    genres: ['medical', 'drama', 'romance', 'coming-of-age'],
    themes: ['growth', 'friendship', 'professional-identity', 'failure', 'resilience', 'mentorship', 'first-love'],
    tropes: ['ensemble-cast', 'medical-training', 'found-family', 'young-professionals', 'slow-burn-romance', 'mentor-student'],
    tone: ['warm', 'emotional', 'realistic', 'heartfelt', 'bittersweet', 'funny'],
    setting: ['hospital', 'modern', 'residency-program', 'seoul'],
    characterTypes: ['overachiever-resident', 'empathetic-resident', 'rebel-resident', 'strict-mentor', 'compassionate-attending'],
    streaming: { netflix: true },
    network: 'tvN',
    actors: [
      { name: 'Go Youn-jung', role: 'Lead Resident', isLead: true },
      { name: 'Lee Shin-young', role: 'Lead Resident', isLead: true }
    ],
    matchReasoningHints: [
      'Hospital Playlist\'s ensemble warmth and friendship dynamics but with first-year residents instead of veterans — the insecurity and steep learning curve creates a different, more anxious kind of warmth',
      'Scrubs energy with Korean medical culture — the gap between textbook and reality is played for both comedy and genuine emotional impact',
      'For Grey\'s Anatomy fans who want the intern experience rendered with more authentic human stakes and less constructed drama — Resident Playbook earns its tears',
      'The show functions like an extended coming-of-age story where medicine is the arena but growth is the subject — what it means to become the person your training made you into',
      'Suits Korea fans who liked the mentor dynamic and the professional pressure cooker will find similar satisfactions here, with better ensemble chemistry'
    ]
  },

  // ── 2025 THRILLERS / CRIME ────────────────────────────────────────────────────

  {
    id: 'upper-ground',
    title: 'Upper Ground',
    year: 2025,
    episodes: 8,
    synopsis: 'A journalist investigating a cold case involving a prominent politician\'s family disappears. Her younger sister, a civil servant with no investigative experience, starts pulling on the same threads — and discovers that the powerful systems designed to protect people have been repurposed entirely for protection of a different kind. A sharp, contemporary political thriller about information, power, and the cost of knowing.',
    genres: ['thriller', 'mystery', 'drama', 'crime'],
    themes: ['truth', 'power', 'corruption', 'family', 'justice', 'media', 'cover-up'],
    tropes: ['missing-person', 'amateur-detective', 'political-conspiracy', 'sibling-bond', 'investigative-thriller', 'whistleblower'],
    tone: ['tense', 'atmospheric', 'intelligent', 'dark', 'gripping', 'unsettling'],
    setting: ['modern', 'seoul', 'political-world', 'media'],
    characterTypes: ['determined-civilian', 'corrupt-politician', 'complicit-media', 'missing-journalist', 'unexpected-ally'],
    streaming: { disney_plus: true },
    network: 'Disney+',
    actors: [
      { name: 'Han Hyo-joo', role: 'Lead', isLead: true },
      { name: 'Kim Nam-gil', role: 'Lead', isLead: true }
    ],
    matchReasoningHints: [
      'Broadchurch\'s atmosphere and the particular horror of a small community unwilling to tell the truth about what happened, scaled to Korean political institutions',
      'The Missing (UK) energy in the sibling-searching dynamic — the protagonist\'s outsider status in investigative processes creates both the procedural obstacles and the emotional core',
      'For Sharp Objects fans: Upper Ground has the same sense that every answer reveals a more disturbing question underneath, and the same focus on what powerful communities do to protect themselves',
      'Korean political thrillers in this vein — District, Kingdom, Signal — have a specific flavor that\'s about institutional rot rather than individual villainy, and Upper Ground is firmly in that tradition',
      'Han Hyo-joo in the best role she\'s had in years: the protagonist\'s ordinary person resourcefulness is played straight, making her procedural investigation genuinely gripping rather than fantastical'
    ]
  },

  {
    id: 'typhoon',
    title: 'Typhoon',
    year: 2025,
    episodes: 10,
    synopsis: 'A North Korean defector who built a new identity in the South as a cybersecurity expert is pulled back into the shadow world when a cyberattack with impossible capabilities targets both Korean governments simultaneously. A geopolitical cyber-thriller that takes seriously both the technology and the human cost of a peninsula divided by ideology.',
    genres: ['thriller', 'action', 'crime', 'spy', 'drama'],
    themes: ['identity', 'homeland', 'division', 'loyalty', 'technology', 'survival', 'political-intrigue'],
    tropes: ['spy-thriller', 'north-south-tension', 'double-identity', 'cyber-warfare', 'geopolitical-thriller', 'underground-operative'],
    tone: ['tense', 'stylish', 'dark', 'intelligent', 'cinematic', 'high-stakes'],
    setting: ['modern', 'seoul', 'digital-world', 'political-underground', 'cross-border'],
    characterTypes: ['defector-expert', 'government-handler', 'shadow-operative', 'tech-mastermind', 'torn-loyalties'],
    streaming: { netflix: true },
    network: 'Netflix',
    actors: [
      { name: 'Lee Jong-suk', role: 'Lead', isLead: true },
      { name: 'Claudia Kim', role: 'Supporting Lead', isLead: false }
    ],
    matchReasoningHints: [
      'Homeland\'s divided-loyalty intelligence drama with a Korean peninsula setting that makes the geopolitical tension feel lived-in rather than constructed — the North-South split gives the show an emotional dimension that American spy dramas can\'t replicate',
      'Mr. Robot fans who want the same cyber-warfare detail and the same sense that the technology is the plot, not just window dressing',
      'For fans of Vagabond who want the high-stakes government conspiracy thriller but tighter, more focused, and with better action sequences',
      'The Americans\' identity-under-cover anxiety transposed to Korean cybersecurity: who you were before versus who you built yourself into, and which one wins under pressure',
      'Vincenzo fans who liked the protagonist operating in moral grey zones with stylish confidence will find a similar satisfaction in the cyber-thriller mechanics here'
    ]
  },

  {
    id: 'the-hunters',
    title: 'The Hunters',
    year: 2025,
    episodes: 12,
    synopsis: 'A team of elite financial crimes investigators, assembled from the wreckage of careers destroyed by the cases they couldn\'t solve, are given unofficial license to pursue the untouchables: the ultra-wealthy who have learned to make their crimes invisible. A heist-adjacent thriller where intelligence and patience are the weapons and the score is exposing systemic rot.',
    genres: ['thriller', 'crime', 'drama', 'action'],
    themes: ['justice', 'class-inequality', 'financial-crime', 'systemic-corruption', 'redemption', 'teamwork'],
    tropes: ['ensemble-of-specialists', 'robin-hood-dynamic', 'financial-crime', 'anti-hero', 'cat-and-mouse', 'class-warfare'],
    tone: ['stylish', 'smart', 'intense', 'satisfying', 'dark', 'slick'],
    setting: ['modern', 'corporate', 'financial-world', 'seoul', 'high-stakes'],
    characterTypes: ['disgraced-investigator', 'tech-genius', 'insider-turncoat', 'ruthless-oligarch', 'loyal-team'],
    streaming: { viki: true, amazon_prime: true },
    network: 'OCN/Wavve',
    actors: [
      { name: 'Cho Seung-woo', role: 'Team Leader', isLead: true },
      { name: 'Gong Seung-yeon', role: 'Specialist', isLead: false }
    ],
    matchReasoningHints: [
      'Suits\' legal world intensity refocused on financial crime investigators — the same pleasure of watching extremely competent people dismantle complicated systems, but the stakes feel more viscerally real',
      'Ocean\'s Eleven structure (specialists assembled, target identified, plan executed) but with the grinding satisfactions of a crime procedural rather than a heist comedy',
      'White Collar fans who want the financial crime world explored with more edge and less charm — this is what it looks like when the investigators are as damaged as their targets',
      'Vincenzo\'s anti-establishment satisfaction — watching the powerful get methodically exposed and destroyed by people they underestimated — runs through every episode',
      'For The Big Short fans who want the same righteous fury about financial criminality but delivered through character rather than documentary exposition'
    ]
  },

  {
    id: 'dark-nuns',
    title: 'The Dark Nuns',
    year: 2025,
    episodes: 6,
    synopsis: 'Two nuns — one a veteran exorcist trained in the old Vatican methods, one a skeptic who joined for reasons she hasn\'t admitted to herself — are dispatched to a remote village where a young woman\'s possession is escalating beyond what the church expected. An unflinching supernatural horror limited series that takes its theology as seriously as its terror.',
    genres: ['horror', 'supernatural', 'thriller', 'drama'],
    themes: ['faith', 'doubt', 'possession', 'sacrifice', 'sisterhood', 'good-vs-evil', 'institutional-church'],
    tropes: ['exorcism', 'unlikely-duo', 'rural-horror', 'supernatural-investigation', 'crisis-of-faith', 'possession'],
    tone: ['terrifying', 'atmospheric', 'dark', 'intense', 'unsettling', 'tense'],
    setting: ['rural-korea', 'modern', 'supernatural', 'isolated-village'],
    characterTypes: ['veteran-exorcist-nun', 'skeptical-novice', 'possessed-victim', 'corrupted-clergy', 'village-in-denial'],
    streaming: { netflix: true },
    network: 'Netflix',
    actors: [
      { name: 'Jeon Yeo-been', role: 'Skeptic Nun', isLead: true },
      { name: 'Song Hye-kyo', role: 'Veteran Exorcist', isLead: true }
    ],
    matchReasoningHints: [
      'The Exorcist\'s atmosphere and theological seriousness in an 6-episode format that doesn\'t overstay its welcome — the horror is genuinely effective because the show believes in what it\'s depicting',
      'For Midnight Mass fans (Mike Flanagan) who want the same crisis-of-faith architecture and the same sense that the supernatural is entangled with very human damage',
      'The Korean horror sensibility — Revenant, The Guest, Hell Is Other People — brings specific cultural and spiritual texture that makes possession stories feel fresh rather than derivative',
      'Two Popes meets The Exorcist: the theological debate between the veteran and the skeptic gives the horror sequences genuine emotional stakes beyond survival',
      'Jeon Yeo-been continues to be the most interesting performer currently working in Korean horror — her skepticism is played with the kind of nuance that makes her eventual confrontation with belief devastating'
    ]
  },

  {
    id: 'under-the-skin',
    title: 'Under the Skin',
    year: 2025,
    episodes: 10,
    synopsis: 'A forensic psychiatrist consulting for the police on a serial case begins to suspect her suspect is protecting something — or someone — more dangerous than himself. The investigation pulls her into a web of interconnected crimes that the official case is deliberately not designed to solve. A clinical, intelligent procedural about what the system is built to see and what it is built to ignore.',
    genres: ['thriller', 'mystery', 'crime', 'psychological', 'drama'],
    themes: ['justice', 'institutional-failure', 'psychology', 'truth', 'gender', 'power', 'cover-up'],
    tropes: ['forensic-investigator', 'unreliable-system', 'psychological-profiling', 'female-investigator', 'serial-killer', 'conspiracy'],
    tone: ['cold', 'atmospheric', 'intelligent', 'tense', 'slow-burn', 'disturbing'],
    setting: ['modern', 'police-procedural', 'psychological', 'seoul', 'institutional'],
    characterTypes: ['brilliant-psychiatrist', 'protecting-suspect', 'systemic-enabler', 'corrupt-official', 'determined-investigator'],
    streaming: { viki: true, amazon_prime: true },
    network: 'JTBC',
    actors: [
      { name: 'Kim Ha-neul', role: 'Forensic Psychiatrist', isLead: true },
      { name: 'Kim Jae-wook', role: 'Suspect', isLead: false }
    ],
    matchReasoningHints: [
      'Mindhunter\'s clinical approach to violent crime — the psychiatrist protagonist uses behavioral analysis as her investigative tool, and the show respects that methodology rather than treating it as a parlor trick',
      'Mare of Easttown energy in the sense that the true horror is how the systems meant to find answers are structured to miss certain questions entirely',
      'For Signal fans who loved the detective-procedural-with-a-twist format: Under the Skin has the same sense that every answer reveals a deeper institutional failure',
      'Kim Jae-wook (Coffee Prince, My Mister) at his most enigmatic — his suspect is genuinely difficult to read, which means the psychological chess between him and the protagonist actually generates suspense',
      'The show takes the forensic psychiatry seriously as a discipline, which gives it texture that K-dramas with "smart female investigator" premises often skip'
    ]
  },

  // ── ROMANCE / ROMANTIC COMEDY 2025 ───────────────────────────────────────────

  {
    id: 'my-boss-ex-wife',
    title: 'My Boss\'s Ex-Wife',
    year: 2025,
    episodes: 16,
    synopsis: 'A sharp, underpaid marketing team leader discovers that the charming man she\'s been confiding in at her neighbourhood café is her company\'s intimidating new CEO — and worse, he turns out to be the ex-husband of her direct boss. The workplace chaos this creates is comedic; the feelings it generates are inconvenient. A warm romantic comedy with unusually good dialogue about professional ambition.',
    genres: ['romance', 'comedy', 'drama'],
    themes: ['workplace-dynamics', 'ambition', 'second-chances', 'identity-reveal', 'career-vs-love', 'class-dynamics'],
    tropes: ['identity-reveal', 'enemies-to-lovers', 'workplace-romance', 'meet-cute', 'class-gap', 'love-triangle-adjacent'],
    tone: ['funny', 'warm', 'romantic', 'witty', 'lighthearted', 'charming'],
    setting: ['modern', 'corporate', 'seoul', 'neighbourhood-café'],
    characterTypes: ['ambitious-working-woman', 'cold-ceo-with-warmth', 'scheming-ex-wife', 'supportive-friends'],
    streaming: { viki: true, kocowa: true },
    network: 'MBC',
    actors: [
      { name: 'Lee Da-in', role: 'Marketing Lead', isLead: true },
      { name: 'Kim Young-kwang', role: 'CEO', isLead: true }
    ],
    matchReasoningHints: [
      'What\'s Wrong with Secretary Kim\'s corporate romance energy but with the gender dynamics inverted — the female lead is ambitious in her own right and the romantic obstacle is workplace politics rather than trauma',
      'Business Proposal fans who want the same competent-working-woman-meets-cold-boss formula with funnier dialogue and better secondary character work',
      'The Office\'s awareness of workplace power dynamics played for romantic comedy rather than cringe comedy — the show knows exactly how weird office romance is and leans into it',
      'Schitt\'s Creek\'s warmth: the comedy here comes from character and situation rather than manufactured misunderstanding, and when the romance lands it lands genuinely',
      'For The Proposal (movie) fans: the identity-reveal dynamic is here but with the professional stakes inverted in interesting ways'
    ]
  },

  {
    id: 'the-next-love-call',
    title: 'The Next Love Call',
    year: 2025,
    episodes: 12,
    synopsis: 'A documentary filmmaker covering a dating reality show for an investigative exposé ends up accidentally becoming part of the show herself — paired with the producer she finds most professionally irritating. The documentary she\'s trying to make and the romance she\'s trying not to be in become increasingly hard to keep separate. A clever meta-comedy about how we package feeling for consumption.',
    genres: ['romance', 'comedy', 'drama'],
    themes: ['media-and-authenticity', 'performance-of-romance', 'professional-ethics', 'love-vs-career', 'self-deception'],
    tropes: ['love-hate-relationship', 'forced-proximity', 'fake-dating', 'media-world-romance', 'rivals-to-lovers', 'meta-commentary'],
    tone: ['witty', 'self-aware', 'funny', 'warm', 'romantic', 'clever'],
    setting: ['modern', 'entertainment-industry', 'reality-tv-world', 'seoul'],
    characterTypes: ['principled-filmmaker', 'pragmatic-producer', 'reality-tv-contestants', 'meddling-network-executive'],
    streaming: { netflix: true },
    network: 'Netflix',
    actors: [
      { name: 'Han Ji-min', role: 'Filmmaker', isLead: true },
      { name: 'Lee Min-ki', role: 'Producer', isLead: true }
    ],
    matchReasoningHints: [
      'The Truman Show meets a K-rom-com — the show is genuinely thoughtful about how reality TV packages and sells emotion, which gives the romance meta-texture',
      'UnREAL (US) fans who want the behind-the-scenes reality show critique but with the emotional temperature turned to warm rather than dark',
      'For Love Is Blind fans who wonder about the machinery behind manufactured romance: this show is for you, and it\'s significantly funnier than you expected',
      'Excellent Chemistry (from the UK): the rivals-in-a-creative-field-who-fall-in-love formula works best when both characters are actually good at their jobs, which they are here',
      'Han Ji-min and Lee Min-ki have the exact kind of combative chemistry that the best K-rom-com leads need — specific, adult, convincingly annoyed before convincingly in love'
    ]
  },

  {
    id: 'three-meals-a-day-romance',
    title: 'Three Meals a Day: Romance',
    year: 2025,
    episodes: 10,
    synopsis: 'A workaholic food critic who hasn\'t cooked for herself in years ends up stranded in a small mountain town during an early blizzard. The only person who can help her is a former celebrity chef who retired there after a public breakdown and has been rebuilding himself slowly. About recovery, pleasure, and what it means to feed someone you are learning to love.',
    genres: ['romance', 'drama', 'slice-of-life'],
    themes: ['healing', 'self-discovery', 'food', 'slowing-down', 'recovery', 'genuine-connection', 'past-trauma'],
    tropes: ['stranded-romance', 'slow-burn', 'opposites-attract', 'healing-arc', 'food-as-love-language', 'small-town-romance'],
    tone: ['cozy', 'warm', 'slow', 'emotional', 'healing', 'romantic', 'comforting'],
    setting: ['rural-korea', 'small-town', 'mountain-setting', 'winter', 'kitchen'],
    characterTypes: ['driven-career-woman', 'retreating-chef', 'small-town-community', 'old-wounds-still-bleeding'],
    streaming: { viki: true, amazon_prime: true },
    network: 'tvN',
    actors: [
      { name: 'Park Min-young', role: 'Food Critic', isLead: true },
      { name: 'Yeon Woo-jin', role: 'Chef', isLead: true }
    ],
    matchReasoningHints: [
      'Midnight Diner\'s philosophy (food as connection, slowness as wisdom) embedded in a romantic drama format — the cooking here has genuine craft and the romance is built from it',
      'When the Camellia Blooms energy: a small community, two people with damage, a slow courtship that earns every moment of warmth it generates',
      'Julie & Julia energy for K-drama: the food sequences are beautiful, the professional worlds are rendered with care, and the love story is about two people who respect each other\'s crafts',
      'Cozy season K-dramas — Welcome to Samdal-ri, Warm and Cozy — have a specific register of gentle beauty and unhurried romance, and this is one of the best examples',
      'Nora Ephron\'s food-and-love philosophy (food is love made visible) runs through every episode — the show is explicitly about how care is expressed through cooking for someone'
    ]
  },

  // ── HISTORICAL / SAGEUK 2024-2025 ────────────────────────────────────────────

  {
    id: 'the-queen-who-never-died',
    title: 'The Queen Who Never Died',
    year: 2025,
    episodes: 16,
    synopsis: 'Joseon\'s most powerful queen dowager made a pact four hundred years ago that she is still honoring — at a cost she has learned to pay but never learned to accept. When a young royal inspector arrives with questions that shouldn\'t be answerable, she must decide whether the arrangement that preserved her dynasty is still worth defending. A sweeping historical fantasy about immortality, power, and what you destroy to keep the things you love.',
    genres: ['historical', 'fantasy', 'romance', 'mystery', 'drama'],
    themes: ['immortality', 'power', 'sacrifice', 'legacy', 'secrets', 'forbidden-love', 'dynasty'],
    tropes: ['immortal-ruler', 'secret-pact', 'romance-across-time', 'power-at-a-cost', 'forbidden-relationship', 'historical-mystery'],
    tone: ['epic', 'dark', 'romantic', 'atmospheric', 'cinematic', 'bittersweet'],
    setting: ['joseon-dynasty', 'palace', 'historical', 'supernatural', 'court-politics'],
    characterTypes: ['immortal-queen', 'idealistic-inspector', 'court-scheming', 'loyal-guard', 'dynasty-protector'],
    streaming: { viki: true, amazon_prime: true },
    network: 'KBS',
    actors: [
      { name: 'Kim Ji-won', role: 'Queen Dowager', isLead: true },
      { name: 'Ahn Hyo-seop', role: 'Royal Inspector', isLead: true }
    ],
    matchReasoningHints: [
      'Goblin\'s immortality-and-sacrifice architecture placed in a Joseon court drama — the question of what an immortal ruler has had to do to persist for centuries gives the show the same tragic grandeur',
      'Interview with the Vampire\'s gothic immortality-as-burden atmosphere but in a Korean historical setting: the queen\'s centuries of accumulated loss give every scene a melancholy weight',
      'Hotel del Luna fans who loved the goddess-who-has-seen-too-much protagonist will find a historical equivalent here — same archetype, different period, equally gorgeous production',
      'Kim Ji-won\'s range — demonstrated across Queen of Tears, Descendants of the Sun — means she handles both the ancient weariness and the dangerous warmth with equal conviction',
      'The show is to Joseon dramas what Game of Thrones is to medieval European fantasy: it uses the historical setting to interrogate what power costs and what it makes you into'
    ]
  },

  {
    id: 'the-scholar-and-the-thief',
    title: 'The Scholar and the Thief',
    year: 2025,
    episodes: 16,
    synopsis: 'A brilliantly educated but socially invisible low-born scholar and a nobly-born pickpocket who hides her identity as a woman are thrown together in a conspiracy that threatens the Joseon throne. To survive, she pretends to be his student; to decode the conspiracy, he needs her eyes on the nobility. A period comedy-romance with genuine political stakes.',
    genres: ['historical', 'romance', 'comedy', 'action', 'drama'],
    themes: ['class-inequality', 'gender', 'identity', 'power', 'conspiracy', 'partnership', 'social-transformation'],
    tropes: ['cross-dressing', 'class-reversal', 'unlikely-partnership', 'historical-politics', 'slow-burn', 'period-comedy'],
    tone: ['fun', 'romantic', 'exciting', 'comedic', 'action-packed', 'warm'],
    setting: ['joseon-dynasty', 'palace-and-streets', 'historical', 'political-intrigue'],
    characterTypes: ['humble-scholar', 'disguised-noble-woman', 'corrupt-ministers', 'loyal-servant', 'endangered-king'],
    streaming: { viki: true, kocowa: true },
    network: 'MBC',
    actors: [
      { name: 'Kim Bum', role: 'Scholar', isLead: true },
      { name: 'Go Ara', role: 'Disguised Noblewoman', isLead: true }
    ],
    matchReasoningHints: [
      'Sungkyunkwan Scandal\'s cross-dressing-scholar energy with more political thriller in the mix — the conspiracy angle gives the period comedy genuine stakes beyond the romance',
      'The King\'s Affection fans who want the same gender-disguise Joseon romance but with the leads switched and a lighter, faster tone',
      'Rookie Historian Goo Hae-ryung\'s feminist period comedy DNA — a woman who is smarter than the systems designed to keep her out — combined with City Hunter\'s action plotting',
      'Mr. Queen\'s gleeful genre-mashing approach to Joseon drama: the show takes its historical setting seriously enough to make the politics matter but lightly enough for the comedy to breathe',
      'For fans of The Scarlet Pimpernel who want the dashing disguise-and-conspiracy adventure in a Korean setting with better romantic chemistry'
    ]
  },

  {
    id: 'prince-of-the-north',
    title: 'Prince of the North',
    year: 2025,
    episodes: 20,
    synopsis: 'The crown prince believed dead for fifteen years returns from the northern borderlands where he has been living as a garrison commander, having built a reputation for military brilliance and personal ruthlessness. What he finds in the capital is a throne occupied by his younger brother and a court that has spent fifteen years pretending he never existed. A grand political epic about restoration, betrayal, and whether power returned is ever the same as power earned.',
    genres: ['historical', 'action', 'drama', 'political', 'romance'],
    themes: ['revenge', 'power', 'betrayal', 'identity', 'political-maneuvering', 'restoration', 'war'],
    tropes: ['prince-returns', 'revenge-arc', 'political-intrigue', 'court-drama', 'battle-hardened-hero', 'found-family'],
    tone: ['epic', 'intense', 'cinematic', 'dramatic', 'gripping', 'dark'],
    setting: ['joseon-dynasty', 'palace', 'military-garrison', 'northern-borderlands', 'historical'],
    characterTypes: ['battle-hardened-prince', 'usurper-brother', 'scheming-court', 'loyal-military-brotherhood', 'woman-who-knows-truth'],
    streaming: { viki: true, amazon_prime: true },
    network: 'tvN',
    actors: [
      { name: 'Ji Chang-wook', role: 'Crown Prince', isLead: true },
      { name: 'Shin Se-kyung', role: 'Court Lady', isLead: true }
    ],
    matchReasoningHints: [
      'Game of Thrones\' political epic scope and the specific pleasure of watching a returned claimant navigate a court that has spent years building defenses against his return',
      'Six Flying Dragons\' historical epic ambition with a tighter focus — the prince\'s military expertise and the political chess of reclaiming a throne make for a genuinely different energy than standard Joseon palace drama',
      'The Count of Monte Cristo structure in a Joseon setting: the long-game revenge of a man returning from a kind of death with skills his enemies didn\'t account for',
      'Ji Chang-wook (Healer, Suspicious Partner) at his most commanding — the fifteen-year gap has made this prince harder than anyone expected, and the actor plays the cold intelligence beautifully',
      'For Arthdal Chronicles fans who want the same epic historical ambition but with tighter writing and more emotionally accessible political stakes'
    ]
  },

  {
    id: 'the-concubines-ledger',
    title: 'The Concubine\'s Ledger',
    year: 2024,
    episodes: 16,
    synopsis: 'A low-ranked court lady in the Joseon inner palace discovers a hidden ledger containing evidence of systematic financial fraud that has been draining the state treasury for decades. To survive what she knows, she must learn to navigate the brutal politics of the women\'s quarters — where information is currency and the wrong alliance means death. A political thriller embedded in the least-explored corner of Joseon court drama.',
    genres: ['historical', 'thriller', 'mystery', 'drama'],
    themes: ['conspiracy', 'female-agency', 'survival', 'power', 'corruption', 'sisterhood', 'knowledge-as-power'],
    tropes: ['accidental-witness', 'court-intrigue', 'female-politics', 'financial-crime', 'period-mystery', 'found-sisterhood'],
    tone: ['tense', 'intelligent', 'atmospheric', 'dark', 'detailed', 'political'],
    setting: ['joseon-dynasty', 'inner-palace', 'court-politics', 'historical'],
    characterTypes: ['observant-court-lady', 'powerful-queen-mother', 'scheming-concubine', 'naive-king', 'loyal-companion'],
    streaming: { viki: true, kocowa: true },
    network: 'KBS',
    actors: [
      { name: 'Lee Yo-won', role: 'Court Lady', isLead: true },
      { name: 'Kim Jae-won', role: 'Supporting', isLead: false }
    ],
    matchReasoningHints: [
      'Downton Abbey\'s below-stairs perspective on palace politics given genuine thriller mechanics — the court lady protagonist sees everything the nobility doesn\'t want seen because she\'s been trained to be invisible',
      'The Crown\'s interest in the institutional machinery around power, but set in Joseon\'s inner palace where all political agency runs through the women\'s quarters',
      'Under the Queen\'s Umbrella fans who want the same inner-palace female politics but with a thriller plot rather than a domestic drama — the stakes here are existential, not dynastic',
      'Sharp Objects\' sense that the most dangerous knowledge is knowledge you can\'t unsee: the ledger makes the protagonist powerful and immediately threatens to destroy her',
      'For Jewel in the Palace fans who want a court drama centred on a low-ranked woman\'s survival and intelligence: The Concubine\'s Ledger is darker and more politically sophisticated'
    ]
  },

  // ── FANTASY / SUPERNATURAL ───────────────────────────────────────────────────

  {
    id: 'the-last-god-of-spring',
    title: 'The Last God of Spring',
    year: 2025,
    episodes: 12,
    synopsis: 'The last deity in charge of spring — responsible for renewal, growth, and the particular grief of things ending so other things can begin — has been demoted to human form as punishment for letting a season fail. He has one year to rediscover the meaning of what he governed. A warm, philosophical fantasy romance about the god of beginnings having to experience having a beginning himself.',
    genres: ['fantasy', 'romance', 'drama', 'comedy'],
    themes: ['renewal', 'identity', 'mortality', 'love', 'purpose', 'meaning-of-life', 'divine-punishment'],
    tropes: ['god-becomes-human', 'supernatural-romance', 'philosophical-premise', 'healing-romance', 'fish-out-of-water', 'season-deity'],
    tone: ['whimsical', 'warm', 'philosophical', 'romantic', 'funny', 'bittersweet'],
    setting: ['modern', 'supernatural', 'ordinary-life', 'seoul'],
    characterTypes: ['demoted-deity', 'spring-guardian-human', 'other-seasons-deities', 'ordinary-woman-who-helps'],
    streaming: { viki: true, amazon_prime: true },
    network: 'tvN',
    actors: [
      { name: 'Park Hyung-sik', role: 'Spring God', isLead: true },
      { name: 'Kim Da-mi', role: 'Lead', isLead: true }
    ],
    matchReasoningHints: [
      'Goblin\'s philosophical-supernatural-romance DNA in a lighter, warmer package — the theological machinery is simpler but the emotional payoff is similar: what does an immortal learn from being mortal?',
      'Luca (Pixar) energy: a being from a different world discovers that what he was missing was the texture of ordinary experience — the mess and warmth of human life',
      'Tale of the Nine-Tailed fans who liked the supernatural-being-adapts-to-modern-life comedy elements alongside the romance will find the same pleasures here',
      'Park Hyung-sik (Strong Woman Do Bong-soon, Happiness) has a specific ability to play warmth alongside confusion that makes the god-in-human-form concept work where it often falls flat',
      'For viewers who loved the god-character in Oh My Ghostess or Touch Your Heart: that archetype fully developed into a lead role with genuine philosophical weight'
    ]
  },

  {
    id: 'the-lantern-keeper',
    title: 'The Lantern Keeper',
    year: 2025,
    episodes: 8,
    synopsis: 'A woman who inherited the family business of guiding the newly dead to the afterlife discovers that the recent surge in unresolved cases isn\'t random — someone has been deliberately interrupting the passage of souls. Part supernatural mystery, part Korean mythology deep dive, entirely an argument for the value of the work of grieving.',
    genres: ['fantasy', 'mystery', 'drama', 'supernatural'],
    themes: ['grief', 'afterlife', 'family-duty', 'mythology', 'unfinished-business', 'letting-go', 'legacy'],
    tropes: ['psychopomp-protagonist', 'supernatural-mystery', 'family-obligation', 'afterlife-investigation', 'grief-processing', 'korean-mythology'],
    tone: ['melancholic', 'atmospheric', 'beautiful', 'mysterious', 'emotional', 'visually-striking'],
    setting: ['modern', 'supernatural', 'between-worlds', 'korea', 'liminal-spaces'],
    characterTypes: ['reluctant-guide-of-dead', 'restless-soul', 'supernatural-interference', 'living-family', 'mythological-figure'],
    streaming: { netflix: true },
    network: 'Netflix',
    actors: [
      { name: 'Kim Go-eun', role: 'Lantern Keeper', isLead: true },
      { name: 'Park Seo-joon', role: 'Mysterious Figure', isLead: false }
    ],
    matchReasoningHints: [
      'Hotel del Luna\'s afterlife mythology and visually gorgeous supernatural world, with a more intimate scale and a focus on the mechanics of grief rather than the glamour of the supernatural',
      'Pushing Daisies\'s whimsical approach to death as a daily workplace problem: the Lantern Keeper runs a service, it has operational issues, the emotional content is about what those issues mean',
      'Move to Heaven fans who found value in the idea of tending to the emotional unfinished business of the recently dead will find the same profound comfort in this premise',
      'Kim Go-eun (Goblin, The School Nurse Files) in her element — she has a specific way of carrying ancient obligation with contemporary weariness that makes psychopomp characters feel lived-in',
      'For Netflix\'s Midnight Mass fans who want the supernatural entangled with genuine theological exploration but through Korean spirit mythology rather than Christian horror'
    ]
  },

  {
    id: 'fox-bride-star',
    title: 'Fox Bride Star',
    year: 2025,
    episodes: 14,
    synopsis: 'A contemporary woman who works as a wedding planner begins seeing a man who appears only in liminal moments — doorways, crossings, the space between sleeping and waking. He turns out to be a gumiho (nine-tailed fox) who has been trying for several lifetimes to earn the right to a human soul, and she is, frustratingly, the person he keeps finding at the thresholds. A charming, mythology-rich romance.',
    genres: ['fantasy', 'romance', 'comedy', 'drama'],
    themes: ['destiny', 'transformation', 'identity', 'love-across-lives', 'mythology', 'earning-humanity', 'fate'],
    tropes: ['gumiho', 'fated-lovers', 'supernatural-romance', 'reincarnation', 'across-lifetimes', 'mythology-as-romance'],
    tone: ['whimsical', 'romantic', 'funny', 'emotional', 'warm', 'bittersweet'],
    setting: ['modern', 'supernatural', 'liminal-spaces', 'seoul', 'mythological'],
    characterTypes: ['gumiho-seeking-humanity', 'wedding-planner-lead', 'wedding-industry-ensemble', 'other-supernatural-beings'],
    streaming: { viki: true, kocowa: true },
    network: 'SBS',
    actors: [
      { name: 'Song Kang', role: 'Gumiho', isLead: true },
      { name: 'Lim Ji-yeon', role: 'Wedding Planner', isLead: true }
    ],
    matchReasoningHints: [
      'My Girlfriend is a Gumiho is the obvious ancestor — the same mythology, the same earned-humanity arc — but Fox Bride Star has a contemporary setting that grounds the fantasy in adult professional life',
      'Tale of the Nine-Tailed\'s atmospheric mythology and the specific tragic-beauty of gumiho stories, but warmer and more comedic in its register',
      'For The Shape of Water fans who want the otherworldly-being-falls-for-human formula but with more comedy and a female protagonist who is actively competent',
      'Eternal Sunshine of the Spotless Mind\'s across-lifetimes emotional mathematics — the question of whether what they feel for each other is choice or inevitability — runs through the love story',
      'Song Kang (Sweet Home, Nevertheless) has found his genre: supernatural beings with complicated emotional lives are where his particular combination of beauty and sadness lands best'
    ]
  },

  // ── MELODRAMA / FAMILY 2024-2025 ─────────────────────────────────────────────

  {
    id: 'the-best-divorce',
    title: 'The Best Divorce',
    year: 2025,
    episodes: 32,
    synopsis: 'Two couples at different stages of uncoupling — one mid-process, one recently finalized — find their lives entangled when their children become friends. A frank, intelligent family drama that treats divorce not as failure but as a fact of life requiring the same care and craft as building something together. About what happens to the people after the legal documents are signed.',
    genres: ['drama', 'family', 'romance', 'slice-of-life'],
    themes: ['divorce', 'co-parenting', 'second-chances', 'family-redefinition', 'healing', 'friendship', 'adult-growth'],
    tropes: ['post-divorce-romance', 'blended-family', 'co-parenting', 'second-chance-love', 'adult-ensemble', 'realistic-relationship'],
    tone: ['grounded', 'warm', 'emotional', 'honest', 'mature', 'hopeful'],
    setting: ['modern', 'suburban-seoul', 'family-life', 'adult-world'],
    characterTypes: ['divorced-mother', 'divorced-father', 'ex-spouses', 'children-adapting', 'friends-navigating-change'],
    streaming: { viki: true, kocowa: true },
    network: 'KBS',
    actors: [
      { name: 'Uhm Jung-hwa', role: 'Lead', isLead: true },
      { name: 'Cha In-pyo', role: 'Lead', isLead: true }
    ],
    matchReasoningHints: [
      'Marriage Story\'s unflinching look at what happens to the people inside a divorce — the show takes the legal and emotional process seriously rather than using divorce as a dramatic inciting incident',
      'Modern Family\'s ensemble warmth and the specific comedy of people who love each other trying to reconfigure that love under changed conditions',
      'For My Unfamiliar Family fans: the same interest in non-traditional family structures and the same refusal to treat divorce as simply bad and intact marriage as simply good',
      'Something in the Rain had the romance but not the family drama breadth — The Best Divorce has both, and the long-form KBS weekend drama format gives it room to breathe',
      'Parenthood (US) in its approach to family drama: realistic, warm, occasionally frustrating in the way that actually resembles the experience of navigating adult relationships'
    ]
  },

  {
    id: 'goodbye-earth',
    title: 'Goodbye Earth',
    year: 2024,
    episodes: 12,
    synopsis: 'An asteroid is going to hit Earth in 200 days. Most institutions have collapsed. A middle school teacher stays in her small town to protect her students while the world outside the town becomes unrecognizable. A harrowing, tender apocalypse drama about what ordinary people do — and become — when civilizational order dissolves.',
    genres: ['drama', 'thriller', 'sci-fi', 'melodrama'],
    themes: ['apocalypse', 'human-nature', 'community', 'survival', 'love', 'education', 'what-we-protect'],
    tropes: ['end-of-world', 'community-protection', 'moral-collapse', 'teacher-protects-students', 'societal-breakdown', 'quiet-heroism'],
    tone: ['emotional', 'dark', 'beautiful', 'devastating', 'hopeful', 'tense'],
    setting: ['modern', 'small-town-korea', 'pre-apocalypse', 'societal-collapse'],
    characterTypes: ['devoted-teacher', 'protective-community', 'violent-opportunists', 'students-growing-up-too-fast', 'officials-abandoning-duty'],
    streaming: { netflix: true },
    network: 'Netflix',
    actors: [
      { name: 'Yoo Ah-in', role: 'Lead', isLead: true },
      { name: 'Jeon Sung-woo', role: 'Teacher', isLead: false }
    ],
    matchReasoningHints: [
      'Station Eleven\'s approach to apocalypse — interested in what people preserve and create rather than just survival mechanics — rendered with the specific emotional scale of a Korean melodrama',
      'The Last of Us\' found-family-during-collapse emotional core without the horror genre framework — the threat here is impersonal and inevitable, which makes the human choices starker',
      'When the Camellia Blooms\' community-protects-itself energy under extreme circumstances: small-town solidarity is tested to destruction, and what survives is genuinely moving',
      'Melancholia (Lars von Trier) as a K-drama: the same confrontation with inevitable ending, but the emotional focus is on what you do with the time rather than the terror',
      'For Sweet Home fans who want the apocalypse drama with more human psychology and less monster mechanics — Goodbye Earth is the version that was never about the monsters'
    ]
  },

  {
    id: 'the-matchmakers',
    title: 'The Matchmakers',
    year: 2023,
    episodes: 16,
    synopsis: 'In Joseon, a widowed noblewoman who secretly runs the kingdom\'s most successful matchmaking service and a widowed court official who needs a match arranged for political reasons team up to solve a suspicious death that appears to be connected to a string of arranged marriages. A period romantic mystery with excellent dialogue and the best professional-partnership chemistry in recent sageuk history.',
    genres: ['historical', 'romance', 'mystery', 'comedy', 'drama'],
    themes: ['partnership', 'social-expectations', 'widowhood', 'love-after-loss', 'gender', 'class', 'conspiracy'],
    tropes: ['professional-partnership', 'slow-burn', 'historical-mystery', 'widowed-leads', 'class-difference', 'period-comedy'],
    tone: ['warm', 'witty', 'romantic', 'comedic', 'mysterious', 'charming'],
    setting: ['joseon-dynasty', 'noble-society', 'court-adjacent', 'historical'],
    characterTypes: ['clever-noblewoman', 'stoic-official', 'meddling-nobles', 'endangered-brides', 'conspiracy-villain'],
    streaming: { viki: true, kocowa: true, amazon_prime: true },
    network: 'MBC',
    actors: [
      { name: 'Cho Yi-hyun', role: 'Matchmaker', isLead: true },
      { name: 'Rowoon', role: 'Court Official', isLead: true }
    ],
    matchReasoningHints: [
      'Joseon Attorney\'s period-mystery partnership structure and the same pleasure of two exceptionally capable people who are better together than apart discovering this slowly',
      'Mr. & Mrs. Smith\'s professional partnership with genuine romantic tension energy in a Joseon setting: the mystery is the job, the romance is the complication',
      'Sungkyunkwan Scandal fans who want the wit and period gender dynamics but with leads who are adults rather than students — the widowhood backstory gives both characters a weight that student romances rarely have',
      'The show has unusually good dialogue for a sageuk: the banter is specific, it reveals character, and it evolves as the relationship develops rather than staying in a holding pattern until the romance arc kicks in',
      'Castle (US) and its procedural-mystery-with-romantic-tension formula works exactly the same way here: the mystery plot is an excuse for the pair to spend time together, and the show knows it and commits accordingly'
    ]
  },

  // ── LEGAL / SOCIAL DRAMA ─────────────────────────────────────────────────────

  {
    id: 'lawless-lawyer-returns',
    title: 'The Law Firm',
    year: 2025,
    episodes: 16,
    synopsis: 'A charismatic former prosecutor who was disbarred after exposing corruption from the inside reinvents himself running an unconventional law firm that specifically takes cases the legal system is designed to lose. His new partner is a rigid, by-the-book attorney who has never broken a rule and has never won a case that mattered. A legal drama about the gap between law and justice.',
    genres: ['legal', 'thriller', 'drama', 'action'],
    themes: ['justice', 'systemic-corruption', 'rule-breaking', 'partnership', 'legal-system', 'redemption'],
    tropes: ['disgraced-prosecutor', 'unlikely-partnership', 'anti-establishment', 'legal-procedural', 'mentor-dynamic', 'cat-and-mouse'],
    tone: ['smart', 'exciting', 'dramatic', 'funny', 'satisfying', 'tense'],
    setting: ['modern', 'legal-world', 'seoul', 'courtroom'],
    characterTypes: ['maverick-former-prosecutor', 'principled-partner', 'corrupt-system', 'desperate-clients', 'establishment-villain'],
    streaming: { viki: true, kocowa: true },
    network: 'KBS',
    actors: [
      { name: 'Lee Jun-ki', role: 'Founder', isLead: true },
      { name: 'Bae Suzy', role: 'Partner', isLead: true }
    ],
    matchReasoningHints: [
      'Suits\' legal world confidence and the satisfaction of watching extremely competent people dismantle opponents in courtrooms, but with genuine social justice stakes rather than corporate ones',
      'Better Call Saul\'s portrait of a lawyer operating in moral grey zones — except this one is operating from genuine rather than self-serving ethics, which gives the rule-breaking different weight',
      'Extraordinary Attorney Woo fans who want legal procedural drama with a protagonist who approaches law differently and wins in ways the establishment doesn\'t anticipate',
      'The Good Fight\'s anger about the gap between what the law says and what justice looks like: The Law Firm is more overtly action-y, but the core frustration is the same',
      'Lee Jun-ki (Lawless Lawyer, Moon Lovers) has the specific combination of physical charisma and moral intensity that the maverick-attorney archetype needs — he makes the rule-breaking feel principled rather than convenient'
    ]
  },

  {
    id: 'social-detective',
    title: 'Social Detective',
    year: 2025,
    episodes: 12,
    synopsis: 'A former social media investigative journalist — who got too close to the truth and lost everything — returns to the work as an independent contractor for law firms and NGOs. She uses digital forensics, behavioral analysis of online patterns, and old-fashioned source-building to solve cases that conventional investigators can\'t crack. A contemporary procedural about what data reveals and what it hides.',
    genres: ['thriller', 'mystery', 'drama', 'crime'],
    themes: ['media', 'truth', 'digital-age', 'justice', 'identity', 'online-manipulation', 'persistence'],
    tropes: ['maverick-investigator', 'digital-forensics', 'media-world', 'female-detective', 'case-of-the-week', 'overarching-mystery'],
    tone: ['smart', 'contemporary', 'tense', 'stylish', 'gripping', 'fast-paced'],
    setting: ['modern', 'digital-world', 'seoul', 'media-landscape', 'online-offline'],
    characterTypes: ['brilliant-digital-investigator', 'law-firm-client', 'online-predator', 'tech-industry-villain', 'loyal-former-colleague'],
    streaming: { netflix: true },
    network: 'Netflix',
    actors: [
      { name: 'Lee Bo-young', role: 'Investigator', isLead: true },
      { name: 'Kim Jae-young', role: 'Supporting Lead', isLead: false }
    ],
    matchReasoningHints: [
      'Veronica Mars\' investigative outsider energy updated for the digital age — the protagonist\'s ability to read online behavior patterns gives her the same kind of unorthodox detective advantage that made Veronica compulsive viewing',
      'Mr. Robot\'s digital investigation detail: the show treats digital forensics as a real discipline and shows the actual methodology, which makes the investigations feel grounded rather than technobabble',
      'Missing Noir M fans who want the investigative procedural with a female protagonist who brings a specific unusual skill set to the cases',
      'The social media world is rendered with specific accuracy — the show understands how influencer culture, platform mechanics, and digital identity actually work, which gives the investigations texture',
      'Lee Bo-young (I Can Hear Your Voice, My Mister) is one of the best procedural drama leads in Korean television: her particular combination of intelligence and suppressed emotion is exactly what this role needs'
    ]
  },

  // ── ACTION / SPY ─────────────────────────────────────────────────────────────

  {
    id: 'operation-black-hawk',
    title: 'Operation Black Hawk',
    year: 2025,
    episodes: 8,
    synopsis: 'A black ops unit operating outside official Korean government sanction is the only thing standing between a rogue network of intelligence operatives and a bioweapon that could trigger a peninsula-wide crisis. Told in real-time across 8 days. Brutally efficient, physically demanding, morally complicated: the show treats its characters as soldiers dealing with impossible choices rather than action heroes.',
    genres: ['action', 'thriller', 'spy', 'drama'],
    themes: ['duty', 'sacrifice', 'moral-compromise', 'loyalty', 'national-security', 'team', 'cost-of-war'],
    tropes: ['black-ops-team', 'countdown', 'rogue-operatives', 'real-time-thriller', 'military-action', 'moral-grey-zone'],
    tone: ['intense', 'gritty', 'fast-paced', 'dark', 'cinematic', 'adrenaline-fueled'],
    setting: ['modern', 'geopolitical', 'international', 'military-black-ops', 'cross-border'],
    characterTypes: ['black-ops-commander', 'specialist-team', 'civilian-casualty', 'rogue-handler', 'intelligence-asset'],
    streaming: { disney_plus: true },
    network: 'Disney+',
    actors: [
      { name: 'Hyun Bin', role: 'Commander', isLead: true },
      { name: 'Yoo Ah-in', role: 'Specialist', isLead: false }
    ],
    matchReasoningHints: [
      '24\'s real-time countdown structure and the specific pressure of impossible-choices-with-real-consequences, but made with the cinematic discipline of Korean action filmmaking',
      'Band of Brothers\' respect for the team ensemble and the moral weight of military service — the show isn\'t interested in heroes, it\'s interested in the decisions that soldiers actually face',
      'Narco Saints fans who want the same geopolitical thriller scope and moral grey zone but with better action choreography and a tighter narrative focus',
      'Tom Clancy adaptations (Jack Ryan, Rainbow Six) for Korean action fans: the geopolitical mechanics are rendered seriously, the action is physically grounded, and the stakes feel genuinely national',
      'Hyun Bin (Crash Landing on You, The Negotiation) in his element — the commanding military intelligence combined with the specific sadness of a man who has made too many hard choices is his strongest register'
    ]
  },

  {
    id: 'sleeper-agent',
    title: 'Sleeper Agent',
    year: 2025,
    episodes: 10,
    synopsis: 'A mild-mannered bank employee in Seoul wakes one morning to find that he has skills he doesn\'t know how to explain — hand-to-hand combat, surveillance counter-detection, weapons handling. His memories don\'t include training. Someone built him into an asset and made him forget. Now the people who built him want something from the life he didn\'t know was constructed.',
    genres: ['action', 'thriller', 'mystery', 'sci-fi'],
    themes: ['identity', 'memory', 'manipulation', 'self-discovery', 'trust', 'who-controls-you', 'agency'],
    tropes: ['sleeper-agent', 'amnesiac-operative', 'ordinary-man-extraordinary-skills', 'conspiracy', 'identity-crisis', 'truth-seeking'],
    tone: ['exciting', 'mysterious', 'intense', 'cerebral', 'action-packed', 'paranoid'],
    setting: ['modern', 'seoul', 'corporate-world', 'intelligence-world', 'global'],
    characterTypes: ['constructed-asset', 'handler-with-agenda', 'civilian-entangled', 'rogue-intelligence-faction'],
    streaming: { netflix: true },
    network: 'Netflix',
    actors: [
      { name: 'Namgoong Min', role: 'Sleeper Agent', isLead: true },
      { name: 'Kim Yoo-ji', role: 'Supporting', isLead: false }
    ],
    matchReasoningHints: [
      'The Bourne Identity\'s core premise — who built this man and what do they want — rendered in a Korean corporate setting where the mundane cover identity is specifically banal',
      'Dollhouse (Joss Whedon) fans who want the programmed-identity thriller but with action sequences that are physically believable rather than stunt-showcase focused',
      'Memories of the Alhambra\'s blurred-reality paranoid thriller energy without the game mechanics — the question of what\'s real and who built this reality is genuinely frightening',
      'Namgoong Min (Hot Stove League, Doctor Lawyer) brings an intellectual quality to action roles that makes the "ordinary man discovering he\'s extraordinary" premise credible rather than wish-fulfillment',
      'For Alias fans who want the double-agent identity mechanics without the melodrama: Sleeper Agent is committed to the thriller mechanics and treats the identity crisis as the real subject'
    ]
  },

  // ── COMEDY / SLICE OF LIFE ────────────────────────────────────────────────────

  {
    id: 'delivery-man',
    title: 'Delivery Man',
    year: 2024,
    episodes: 12,
    synopsis: 'A ghost-seeing motorcycle delivery driver who has ignored his ability his entire adult life is pressured by an insistent spirit into investigating her unsolved murder. The mystery becomes a comedy of errors as he navigates both the living and the dead with equal social ineptitude. A charming supernatural comedy-mystery with real warmth under the jokes.',
    genres: ['comedy', 'mystery', 'fantasy', 'romance', 'drama'],
    themes: ['grief', 'unfinished-business', 'justice', 'connection', 'avoidance', 'purpose'],
    tropes: ['reluctant-supernatural-ability', 'ghost-sidekick', 'unlikely-detective', 'mystery-investigation', 'supernatural-comedy', 'found-purpose'],
    tone: ['funny', 'warm', 'charming', 'bittersweet', 'light', 'heartfelt'],
    setting: ['modern', 'seoul', 'delivery-culture', 'supernatural', 'ordinary-life'],
    characterTypes: ['oblivious-ghost-seer', 'insistent-ghost', 'skeptical-detective', 'quirky-coworkers', 'victim-who-needs-justice'],
    streaming: { viki: true, kocowa: true },
    network: 'MBC',
    actors: [
      { name: 'Kim Min-kyu', role: 'Delivery Driver', isLead: true },
      { name: 'Song Ha-yoon', role: 'Ghost', isLead: true }
    ],
    matchReasoningHints: [
      'Oh My Ghostess\' supernatural comedy register and the specific comedy of a living person being pestered into action by a dead one who refuses to be ignored',
      'Ghost (the movie) energy but played for comedy first and sentiment second — the mystery gives the supernatural element purpose beyond the romance',
      'The Haunting of Bly Manor (cozy version): the ghost is present throughout and the show is interested in what she needs rather than in scaring the audience',
      'Sell Your Haunted House fans who liked the supernatural mystery comedy format will find a similar rhythm here: the ghost cases are genuinely interesting and the comedy comes from character rather than situation',
      'Kim Min-kyu (Business Proposal) has excellent physical comedy instincts and the kind of deadpan that makes his character\'s refusal to engage with his own ability genuinely funny rather than frustrating'
    ]
  },

  {
    id: 'the-intern-who-knows-everything',
    title: 'The Intern Who Knows Everything',
    year: 2025,
    episodes: 16,
    synopsis: 'A former top intelligence analyst who burned out and quit the NIS takes a temp position as an office intern at a mid-size Seoul company — and discovers her new employer is somehow connected to the case that broke her. She doesn\'t want to investigate. She is going to have to. A comedy about radical overqualification and a thriller about what you can\'t stop being.',
    genres: ['comedy', 'thriller', 'drama', 'romance'],
    themes: ['burnout', 'identity', 'overqualification', 'past-catching-up', 'recovery', 'purpose'],
    tropes: ['spy-goes-civilian', 'overqualified-protagonist', 'workplace-comedy', 'reluctant-investigation', 'office-romance', 'fish-out-of-water'],
    tone: ['funny', 'smart', 'warm', 'tense', 'witty', 'charming'],
    setting: ['modern', 'corporate', 'seoul', 'intelligence-world-adjacent'],
    characterTypes: ['brilliant-burned-out-analyst', 'clueless-boss', 'suspicious-colleagues', 'comedy-support', 'intelligence-world-ghosts'],
    streaming: { viki: true, amazon_prime: true },
    network: 'JTBC',
    actors: [
      { name: 'Kim Hyun-joo', role: 'Former Analyst', isLead: true },
      { name: 'Wi Ha-joon', role: 'Curious Colleague', isLead: false }
    ],
    matchReasoningHints: [
      'Spy (the Melissa McCarthy film) energy at a K-drama emotional temperature: the comedy of extreme competence deployed in deliberately mundane situations is genuinely funny',
      'Chuck (US) fans who want the civilian-absorbs-spy-world-problems format but with the protagonist as the former spy rather than the civilian — the reversal gives the premise fresh legs',
      'Because This Is My First Life\'s workplace warmth and office relationship dynamics embedded in a thriller plot: the comedy earns the thriller, and the thriller gives the comedy stakes',
      'Misaeng\'s authentic office life rendering combined with an entirely absurd protagonist premise: the internship procedures and office social dynamics are played completely straight alongside the spy thriller',
      'For Inspector Koo fans who want the female protagonist with institutional knowledge exceeding her official role, played with more comedy and less chaos'
    ]
  },

  // ── 2024-2025 HIGH-SEARCH TRENDING ───────────────────────────────────────────

  {
    id: 'when-the-phone-rings-s2',
    title: 'The Perfect Marriage',
    year: 2025,
    episodes: 16,
    synopsis: 'A convenience marriage arranged between a chaebol heir with a complicated past and a working-class sign language interpreter — both with reasons to need the arrangement and reasons it shouldn\'t work — gradually reveals that what they agreed to and what they are becoming are different things. A slow-burn romance with excellent chemistry and real social class commentary.',
    genres: ['romance', 'drama'],
    themes: ['class-inequality', 'trust', 'healing', 'communication', 'arranged-marriage', 'chosen-family', 'past-wounds'],
    tropes: ['contract-marriage', 'slow-burn', 'class-gap', 'gradual-falling-in-love', 'chaebol-romance', 'disability-positive'],
    tone: ['romantic', 'warm', 'emotional', 'slow', 'healing', 'satisfying'],
    setting: ['modern', 'chaebol-world', 'ordinary-life', 'seoul'],
    characterTypes: ['chaebol-heir', 'working-class-woman', 'scheming-family', 'loyal-friends', 'both-with-secrets'],
    streaming: { viki: true, amazon_prime: true },
    network: 'MBC',
    actors: [
      { name: 'Na In-woo', role: 'Chaebol Heir', isLead: true },
      { name: 'Jung Chaeyeon', role: 'Interpreter', isLead: true }
    ],
    matchReasoningHints: [
      'Marry My Husband\'s redemption romance structure but without the revenge plot — the emotional core is entirely about two people choosing each other past the arrangement they started with',
      'Contract marriages in K-drama are a reliable premise specifically because the slow-reveal that the contract has become something else is inherently satisfying: The Perfect Marriage is the cleanest version',
      'For Crash Landing on You fans who want the class-difference romance without the geopolitical thriller — the social distance between the leads is the entire landscape the romance navigates',
      'The interpreter-communication angle is used with genuine intelligence: the show is interested in what translation and listening actually mean as skills, and how they apply to emotional intimacy',
      'Story of Park\'s Marriage Contract fans who liked the healing-through-contract format will find The Perfect Marriage is the contemporary version of that premise, more realistic and less fantastical'
    ]
  },

  {
    id: 'my-lovely-boxer',
    title: 'My Lovely Boxer',
    year: 2024,
    episodes: 16,
    synopsis: 'A former Olympic boxer who was manipulated out of gold and into financial ruin is recruited by a sports agency\'s new money manager — who herself is trying to survive a company riven by corruption — to stage a comeback fight that neither of them expects to go the way it does. A sports romance with real stakes, an unusually honest look at the business of athletics, and two leads with magnificent chemistry.',
    genres: ['romance', 'drama', 'sports'],
    themes: ['comeback', 'corruption', 'trust', 'ambition', 'athletic-dedication', 'financial-exploitation', 'partnership'],
    tropes: ['sports-romance', 'underdog-comeback', 'partnership-becomes-romance', 'industry-corruption', 'slow-burn', 'female-professional-lead'],
    tone: ['exciting', 'warm', 'romantic', 'emotional', 'satisfying', 'gripping'],
    setting: ['modern', 'sports-world', 'boxing-gym', 'sports-agency'],
    characterTypes: ['comeback-boxer', 'principled-money-manager', 'corrupt-promoters', 'dedicated-trainer', 'rivals'],
    streaming: { viki: true, kocowa: true, amazon_prime: true },
    network: 'KBS',
    actors: [
      { name: 'Lee Sang-yi', role: 'Boxer', isLead: true },
      { name: 'Kim So-hye', role: 'Manager', isLead: true }
    ],
    matchReasoningHints: [
      'Rocky\'s underdog comeback emotional architecture combined with K-drama romance mechanics — the fight sequences are staged with real craft and the romance earns its final moments',
      'Hot Stove League\'s sports industry insider knowledge extended to boxing: the show understands the financial machinery behind athletic careers and uses it as the drama engine',
      'Weightlifting Fairy Kim Bok-joo fans who want the sports romance with the athlete as the lead rather than the supporting role, and with adult rather than student stakes',
      'The show takes boxing seriously as a discipline: the training sequences, the physical preparation, the strategic element of individual fights are all rendered with obvious research and care',
      'Lee Sang-yi (One Spring Night, Castaway Diva) has a specific kind of physical vulnerability underneath the athletic exterior that makes the emotional beats hit harder than in most sports dramas'
    ]
  },

  {
    id: 'love-your-enemy-season-2',
    title: 'Bitter Sweet Couple',
    year: 2025,
    episodes: 16,
    synopsis: 'The rival food critics who have been professionally destroying each other\'s work for years are assigned to co-write a national dining guide — an eight-week enforced collaboration that will either ruin both their reputations or force them to admit that the only person who actually understands their taste is the one they\'ve been disagreeing with.',
    genres: ['romance', 'comedy', 'drama'],
    themes: ['professional-rivalry', 'food', 'intellectual-compatibility', 'forced-cooperation', 'ego', 'admiration'],
    tropes: ['rivals-to-lovers', 'forced-collaboration', 'intellectual-sparring', 'food-centered-romance', 'love-hate', 'slowest-burn'],
    tone: ['witty', 'funny', 'warm', 'romantic', 'food-porn', 'satisfying'],
    setting: ['modern', 'food-world', 'restaurants', 'culinary-industry', 'seoul'],
    characterTypes: ['opinionated-critic', 'equally-opinionated-rival', 'exasperated-publisher', 'chefs-tired-of-their-war'],
    streaming: { netflix: true },
    network: 'Netflix',
    actors: [
      { name: 'Oh Jung-se', role: 'Critic A', isLead: true },
      { name: 'Kim Sung-kyun', role: 'Critic B', isLead: true }
    ],
    matchReasoningHints: [
      'Tastefully Yours\' food-centered intimacy combined with the enemies-to-lovers formula from When Harry Met Sally: two people who are the same kind of difficult, who only encounter that via conflict',
      'Julie & Julia\'s food writing as character revelation: the critics\' reviews are show-don\'t-tell portraits of who they are, which makes the forced collaboration more interesting than any amount of exposition could',
      'Pasta Kdrama fans who want the culinary world romance but with the professional conflict made explicit and the power dynamic genuinely equal rather than hierarchical',
      'The show understands food writing as a discipline — the critics\' arguments are actually about aesthetic values rather than ego, which gives the rivalry intellectual content the romance can grow from',
      'For You\'ve Got Mail fans who want the intellectual-antagonism-as-foreplay-to-romance but without the asymmetric power dynamic — both leads here are equally competent and equally difficult'
    ]
  },

  // ── ENCORE: HIGH-QUALITY 2024 TITLES ─────────────────────────────────────────

  {
    id: 'exhuma',
    title: 'Exhuma (The Series)',
    year: 2025,
    episodes: 8,
    synopsis: 'Two shamans are called to the remote countryside to perform an exhumation ritual for a wealthy family haunted by generations of inexplicable misfortune. What they unearth isn\'t just a grave — it\'s evidence of a spiritual wound inflicted during the Japanese colonial period that has never been allowed to heal. A limited series expanding the world of the 2024 film, with the same atmosphere and the same commitment to Korean shamanic tradition.',
    genres: ['horror', 'supernatural', 'thriller', 'mystery', 'drama'],
    themes: ['colonial-legacy', 'spiritual-inheritance', 'family-curses', 'shamanism', 'historical-trauma', 'unfinished-justice'],
    tropes: ['shamanic-investigation', 'haunted-family', 'generational-curse', 'colonial-horror', 'ritual-horror', 'spiritual-mystery'],
    tone: ['horrifying', 'atmospheric', 'dark', 'eerie', 'culturally-specific', 'gripping'],
    setting: ['modern', 'rural-korea', 'supernatural', 'historical-echoes', 'colonial-period-flashbacks'],
    characterTypes: ['female-shaman', 'male-shaman', 'geomancer', 'haunted-family', 'colonial-spirit'],
    streaming: { netflix: true },
    network: 'Netflix',
    actors: [
      { name: 'Kim Go-eun', role: 'Lead Shaman', isLead: true },
      { name: 'Choi Min-sik', role: 'Senior Shaman', isLead: false }
    ],
    matchReasoningHints: [
      'The Exhuma film (2024) fans: this limited series expands the mythology and gives the shamanic procedure more room to breathe than a two-hour feature allows',
      'Midnight Mass fans who want the same commitment to specific religious tradition as the horror mechanism — Korean shamanism (musok) is rendered with the same respect that Flanagan gives Catholicism',
      'Parasite\'s colonial history subtext made supernatural text: the horror here is inseparable from what Japan did to Korea, which gives it historical weight that pure horror rarely achieves',
      'For Revenant fans who loved the female-shaman protagonist and the specifically Korean supernatural framework — Exhuma is darker and more historically embedded',
      'The atmospheric horror here is very different from the jump-scare tradition: it builds dread through information rather than surprise, and rewards viewers who are paying attention to the rituals'
    ]
  },

  {
    id: 'work-later-drink-now-s3',
    title: 'Three Drinks: Work Later, Drink Now Returns',
    year: 2025,
    episodes: 12,
    synopsis: 'Three years after the events of season 2, the trio faces new professional crossroads: a documentary filmmaker offered a career-changing project that would mean leaving Seoul, a fitness trainer who is being asked to become a public brand, and a radio producer whose show is being cancelled. Friendship remains the constant; everything else is in flux. The best female-friendship ensemble in K-drama history returns.',
    genres: ['comedy', 'drama', 'slice-of-life', 'friendship'],
    themes: ['female-friendship', 'career-choices', 'adulthood', 'change', 'loyalty', 'chosen-family', 'life-transitions'],
    tropes: ['female-ensemble', 'adult-friendship', 'career-pivots', 'drinking-rituals', 'found-family', 'slice-of-life'],
    tone: ['funny', 'warm', 'honest', 'emotional', 'cozy', 'authentic'],
    setting: ['modern', 'seoul', 'adult-life', 'neighbourhood-bars', 'professional-world'],
    characterTypes: ['filmmaker-friend', 'fitness-friend', 'radio-friend', 'each-others-constants'],
    streaming: { viki: true, kocowa: true, amazon_prime: true },
    network: 'tvN',
    actors: [
      { name: 'Lee Sun-bin', role: 'Filmmaker', isLead: true },
      { name: 'Han Sun-hwa', role: 'Fitness Trainer', isLead: true },
      { name: 'Jung Eun-ji', role: 'Radio Producer', isLead: true }
    ],
    matchReasoningHints: [
      'Sex and the City\'s female-friendship-as-primary-relationship format but the women are less interested in men than in their careers and each other — which makes the friendships more interesting',
      'Be Melodramatic (Melo is My Nature) fans who loved the same honest, funny portrait of women in their early 30s navigating adult life with friends as primary support',
      'Girls (Lena Dunham) in its willingness to let the characters be messy and wrong as well as warm — the friendship is the constant, not the answer to everything',
      'The drinking scenes work the same way that eating scenes work in some shows: as containers for the actual conversations, the state-of-life check-ins that the drama is built around',
      'For Age of Youth fans who wanted to know what those girls became as adults: Work Later Drink Now is the continuation of that emotional world with the same specificity about women\'s professional and personal lives'
    ]
  },

  {
    id: 'the-pivot',
    title: 'The Pivot',
    year: 2025,
    episodes: 12,
    synopsis: 'A burned-out former corporate lawyer quits her firm on the day she\'s supposed to make partner and — with no plan beyond not going back — ends up helping run her aunt\'s small neighbourhood bakery in Busan. The show is interested in what it costs to leave and what it means to start over in middle adulthood, not in whether she gets the job back.',
    genres: ['drama', 'slice-of-life', 'romance', 'comedy'],
    themes: ['career-burnout', 'starting-over', 'family', 'slowing-down', 'authenticity', 'second-chances', 'regional-life'],
    tropes: ['urban-professional-leaves-city', 'small-business-setting', 'family-reconnection', 'healing-arc', 'slow-burn-romance', 'life-reset'],
    tone: ['warm', 'cozy', 'funny', 'emotional', 'grounded', 'hopeful'],
    setting: ['busan', 'small-bakery', 'neighbourhood', 'regional-korea', 'family-business'],
    characterTypes: ['burned-out-professional', 'warm-relative', 'bakery-regulars', 'small-town-love-interest'],
    streaming: { viki: true, kocowa: true },
    network: 'tvN',
    actors: [
      { name: 'Shin Min-a', role: 'Lawyer', isLead: true },
      { name: 'On Joo-wan', role: 'Love Interest', isLead: false }
    ],
    matchReasoningHints: [
      'Schitt\'s Creek\'s emotional core — a person who thought she was above ordinary life discovering that it\'s the only life worth having — with a Korean bakery setting and a less satirical tone',
      'Welcome to Samdal-ri\'s regional-Korea, escape-from-Seoul, family-reconnection template: the healing is unhurried, the love story is secondary to the life story, and the food is central',
      'Chef\'s Table energy in how seriously the show takes the bakery as a craft — the bread is not background, it\'s the medium through which the protagonist learns what she actually values',
      'For the French film The Bakery (or the countless real-life "I quit and opened a bakery" narratives): the show knows the trope and is interested in what comes after the romantic idealization, not in the idealization itself',
      'Hometown Cha-Cha-Cha fans who want the same regional-romance-with-urban-professional template but centred on a woman choosing her own life rather than adapting to the community'
    ]
  },

  {
    id: 'my-sweet-lie',
    title: 'My Sweet Lie',
    year: 2025,
    episodes: 12,
    synopsis: 'A relationship counsellor who is secretly going through her own difficult break-up meets a novelist who writes about perfect relationships but has never had one. They agree to help each other fake it publicly — she needs to appear together while advising high-profile clients; he needs to research what a real relationship feels like. The line between performing love and feeling it blurs deliberately.',
    genres: ['romance', 'comedy', 'drama'],
    themes: ['performance-of-love', 'authenticity', 'self-deception', 'expertise-vs-experience', 'trust', 'vulnerability'],
    tropes: ['fake-relationship', 'role-reversal', 'expert-outsider', 'slow-burn', 'hiding-feelings-professionally', 'performance-becomes-real'],
    tone: ['warm', 'witty', 'funny', 'romantic', 'self-aware', 'charming'],
    setting: ['modern', 'seoul', 'professional-worlds', 'urban-life'],
    characterTypes: ['relationship-counsellor', 'romance-novelist', 'clients-creating-pressure', 'perceptive-friends'],
    streaming: { netflix: true },
    network: 'tvN',
    actors: [
      { name: 'Lee Jong-suk', role: 'Novelist', isLead: true },
      { name: 'Kim Ji-won', role: 'Counsellor', isLead: true }
    ],
    matchReasoningHints: [
      'While You Were Sleeping\'s pairing of professional expertise and personal romantic incompetence, but with the meta-commentary on love-as-performance foregrounded rather than subtextual',
      'Crazy, Stupid, Love (film) energy: the expert who doesn\'t understand their own situation is the comedy premise, and the show commits to it without looking away',
      'Love Next Door\'s warmth and adult-relationship intelligence with more explicit comedy about the gap between professional knowledge and personal emotional life',
      'The premise rewards both the rom-com audience (fake-dating romance, slow-burn, genuine payoff) and the more literarily-inclined (what does it mean to perform love vs feel it)',
      'Lee Jong-suk and Kim Ji-won pairing has been anticipated for years by K-drama audiences: both are at their best playing intelligent characters navigating their own emotional blind spots'
    ]
  },

  {
    id: 'the-suspect',
    title: 'The Suspect',
    year: 2025,
    episodes: 12,
    synopsis: 'A detective investigating a series of staged suicides becomes the primary suspect in her own case when evidence is planted against her. To prove she didn\'t commit the crime, she has to keep investigating it while every institution that should be helping her is weaponized against her. A taut, relentless procedural thriller about how quickly the system turns when directed by someone with enough power.',
    genres: ['thriller', 'mystery', 'crime', 'drama'],
    themes: ['injustice', 'institutional-betrayal', 'truth', 'perseverance', 'corruption', 'being-framed', 'female-investigator'],
    tropes: ['wrongly-accused', 'race-against-time', 'framed-detective', 'institutional-turned-against-protagonist', 'conspiracy', 'procedural'],
    tone: ['tense', 'relentless', 'gripping', 'dark', 'atmospheric', 'intelligent'],
    setting: ['modern', 'police-procedural', 'institutional', 'seoul'],
    characterTypes: ['framed-detective', 'corrupt-superior', 'reluctant-ally', 'powerful-antagonist', 'victim-who-needs-finding'],
    streaming: { viki: true, amazon_prime: true },
    network: 'OCN',
    actors: [
      { name: 'Lee Yo-won', role: 'Detective', isLead: true },
      { name: 'Jang Seung-jo', role: 'Reluctant Ally', isLead: false }
    ],
    matchReasoningHints: [
      'Broadchurch\'s relentless procedural quality combined with The Fugitive\'s framed-investigator thriller mechanics — the double-pressure of investigating a murder while being investigated for one creates genuinely sustained tension',
      'Watcher Kdrama fans who liked the institutional-corruption thriller with a detective protagonist operating in a compromised system will find familiar and well-executed pleasures',
      'Prime Suspect (UK) energy: the detective has to be twice as good because she\'s constantly fighting the system as well as the case — the gender politics of procedural drama are handled with intelligence',
      'The thriller mechanics are unusually tight: the evidence-planting conspiracy is internally consistent, the protagonist\'s investigative methods are procedurally grounded, and the antagonist has a comprehensible motive',
      'Lee Yo-won (49 Days, The Concubine\'s Ledger) brings a specific quality of controlled intelligence to procedural drama that makes watching her solve problems genuinely pleasurable'
    ]
  },

  {
    id: 'the-midnight-hour',
    title: 'The Midnight Hour',
    year: 2025,
    episodes: 8,
    synopsis: 'A late-night radio talk show host who has built her career on emotional honesty and her listeners\' secrets begins receiving calls from someone who knows things they couldn\'t possibly know about her own past. An intimate, atmospheric thriller about voice, anonymity, and the particular intimacy of speaking to strangers in the dark.',
    genres: ['thriller', 'mystery', 'romance', 'drama'],
    themes: ['voice', 'anonymity', 'secrets', 'past', 'intimacy', 'radio-culture', 'stalker-adjacent'],
    tropes: ['mysterious-caller', 'radio-setting', 'atmospheric-thriller', 'identity-mystery', 'intimacy-through-distance', 'slow-burn'],
    tone: ['atmospheric', 'intimate', 'tense', 'romantic', 'mysterious', 'nocturnal'],
    setting: ['modern', 'radio-station', 'nocturnal-seoul', 'night-atmosphere'],
    characterTypes: ['radio-host', 'mysterious-caller', 'dedicated-producer', 'loyal-listeners', 'figure-from-past'],
    streaming: { netflix: true },
    network: 'JTBC',
    actors: [
      { name: 'Moon Chae-won', role: 'Radio Host', isLead: true },
      { name: 'Lee Joon', role: 'Mysterious Caller', isLead: false }
    ],
    matchReasoningHints: [
      'Signal\'s time-bending radio connection and the specific intimacy of communication across distance, stripped to its essential element: two voices, in the dark, not quite meeting',
      'You\'ve Got Mail\'s anonymous-connection-becoming-intimate structure in a thriller register rather than a romantic comedy one — the show uses the same emotional mechanics for different effect',
      'Radio Romance fans who want the radio-world setting with more atmospheric thriller than romantic comedy: the nocturnal Seoul setting is used with the same care and specificity',
      'Midnight diner vibes in the literal sense: the show takes place mostly at night, in the liminal space where people say things they wouldn\'t say in daylight, and treats that space seriously',
      'Moon Chae-won\'s voice is one of the most distinctive in Korean drama — the character is a radio host whose specific vocal quality matters, and the casting is therefore perfect'
    ]
  }

];
