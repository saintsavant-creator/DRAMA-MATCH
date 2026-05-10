/**
 * Batch P — 15 new Western shows/movies (2024–2026 trending, Netflix/Amazon/Disney+ only)
 * All titles verified streaming on Netflix, Amazon Prime Video, or Disney+
 */
module.exports = [
  {
    id: 'toxic-town',
    title: 'Toxic Town',
    year: 2025,
    type: 'show',
    genres: ['drama', 'true-crime', 'thriller'],
    themes: ['corporate-corruption', 'community', 'justice', 'environmental-disaster', 'class'],
    tropes: ['true-story', 'david-vs-goliath', 'community-fight', 'institutional-corruption', 'determined-hero'],
    tone: ['tense', 'emotional', 'angry', 'inspiring'],
    setting: ['modern', 'uk', 'small-town'],
    characterTypes: ['determined-locals', 'corporate-villains', 'reluctant-lawyers', 'affected-families'],
    streaming: { netflix: true },
    actors: [
      { name: 'Robert Carlyle', role: 'Alan', isLead: true },
      { name: 'Jodie Whittaker', role: 'Jackie', isLead: true }
    ],
    matchReasoningHints: [
      "Queenmaker\'s \'ordinary people vs. powerful corporate interests fighting a rigged system\' David-vs-Goliath structure — both shows are about what happens when a community decides to stop asking nicely",
      "Misaeng\'s \'institutional systems that grind individuals down\' critique delivered through a legal battle rather than a corporate office — the enemy is impersonal and enormous and that\'s exactly the point",
      "The Glory\'s long-game justice satisfaction — watching a community systematically dismantle the defenses of the people who hurt them is the same cathartic engine, just without the single protagonist",
      "Life on Mars (Korean) fans: both shows are about institutional failure at a systemic level, where the individual human cost is made visible through specific stories",
      "Signal fans who love \'what if justice were actually possible\' counterfactual energy — Toxic Town is a true story where the answer is \'it took twenty years and enormous pain, but yes\'"
    ]
  },
  {
    id: 'american-primeval',
    title: 'American Primeval',
    year: 2025,
    type: 'show',
    genres: ['western', 'action', 'drama', 'historical'],
    themes: ['survival', 'violence', 'manifest-destiny', 'identity', 'morality'],
    tropes: ['brutal-frontier', 'survival-odyssey', 'moral-ambiguity', 'unlikely-companions', 'historical-violence'],
    tone: ['brutal', 'immersive', 'visceral', 'bleak', 'beautiful'],
    setting: ['historical', 'american-west', '1850s', 'frontier'],
    characterTypes: ['desperate-mother', 'haunted-mountain-man', 'native-warrior', 'settler-families'],
    streaming: { netflix: true },
    actors: [
      { name: 'Taylor Kitsch', role: 'Isaac Reed', isLead: true },
      { name: 'Betty Gilpin', role: 'Sara Rowell', isLead: true }
    ],
    matchReasoningHints: [
      "Song of the Bandits\' brutal frontier survival drama energy with American mythology instead of Korean — both shows refuse to romanticize the violence that built their respective nations",
      "Mr. Sunshine fans who love historical dramas that put ordinary people in the machinery of history — the American frontier has the same 'empire consuming individuals' dynamic as Joseon-era Korea",
      "Pachinko\'s \'multigenerational cost of building something on someone else\'s land\' moral weight, compressed into a six-episode survival odyssey",
      "Kingdom fans who love period action with genuine horror elements and a willingness to kill anyone — American Primeval has the same \'no one is safe\' tension that makes Kingdom so relentless",
      "Shogun fans who wanted a Western that takes indigenous perspectives as seriously as it takes settler perspectives — American Primeval doesn\'t pretend the frontier violence was simple"
    ]
  },
  {
    id: 'black-doves',
    title: 'Black Doves',
    year: 2024,
    type: 'show',
    genres: ['thriller', 'action', 'drama'],
    themes: ['loyalty', 'identity', 'love', 'betrayal', 'espionage'],
    tropes: ['spy-thriller', 'found-family', 'assassin-protagonist', 'love-triangle', 'london-setting'],
    tone: ['tense', 'stylish', 'dark', 'emotionally-grounded', 'action-packed'],
    setting: ['modern', 'london', 'espionage', 'christmas'],
    characterTypes: ['sleeper-spy', 'protective-assassin', 'politician-husband', 'intelligence-handlers'],
    streaming: { netflix: true },
    actors: [
      { name: 'Keira Knightley', role: 'Helen', isLead: true },
      { name: 'Ben Whishaw', role: 'Sam', isLead: true }
    ],
    matchReasoningHints: [
      "My Name\'s \'woman who has been living a secret violent life and must now choose between the life and the person\' emotional crisis — Black Doves wraps the same dilemma in a London Christmas aesthetic",
      "Killing Eve fans who missed Villanelle — Black Doves has the same \'flamboyant professional killer with genuine emotional depth\' energy, this time attached to a spy premise",
      "The Americans\' \'what does it cost to live as someone you\'re not indefinitely\' question, answered through Ben Whishaw\'s performance — the emotional price of the cover is the show\'s real subject",
      "Nine Puzzle fans: same \'a spy\'s cover is blown and they must survive with the help of someone who shouldn\'t trust them\' survival dynamic with better costuming",
      "Vagabond fans who want a spy-adjacent action thriller with a female protagonist whose feelings complicate her mission in interesting rather than annoying ways"
    ]
  },
  {
    id: 'the-diplomat-s2',
    title: 'The Diplomat Season 2',
    year: 2024,
    type: 'show',
    genres: ['drama', 'political-thriller', 'comedy'],
    themes: ['power', 'marriage', 'ambition', 'geopolitics', 'identity'],
    tropes: ['political-intrigue', 'dysfunctional-marriage', 'fish-out-of-water', 'conspiracy', 'sharp-dialogue'],
    tone: ['sharp', 'witty', 'tense', 'sophisticated', 'fast-paced'],
    setting: ['modern', 'london', 'washington-dc', 'geopolitical'],
    characterTypes: ['brilliant-diplomat', 'charismatic-politician-husband', 'british-pm', 'intelligence-officials'],
    streaming: { netflix: true },
    actors: [
      { name: 'Keri Russell', role: 'Kate Wyler', isLead: true },
      { name: 'Rufus Sewell', role: 'Hal Wyler', isLead: false }
    ],
    matchReasoningHints: [
      "Designated Survivor\'s \'ordinary person thrust into extraordinary political circumstances\' premise but smarter and funnier — Kate Wyler is as unwilling to play the game as Tom Kirkman, but for better reasons",
      "Misaeng fans who love watching someone who is genuinely better at their job than everyone around them navigate institutions that reward conformity over competence",
      "The Good Wife\'s \'brilliant woman navigating an impossible situation with wit and strategic intelligence\' energy — Kate Wyler and Alicia Florrick share the same \'I didn\'t ask to be here but I\'m going to win anyway\' frequency",
      "Crash Landing on You fans who love romantic tension between people who respect each other professionally and can\'t decide if they like each other personally — the Wyler marriage has the same impossible chemistry",
      "Slow Horses fans who love British intelligence shows where everyone is extremely competent and extremely compromised — The Diplomat reveals that competence and chaos are not mutually exclusive"
    ]
  },
  {
    id: 'the-way-home-s3',
    title: 'The Way Home Season 3',
    year: 2025,
    type: 'show',
    genres: ['drama', 'fantasy', 'family'],
    themes: ['family-bonds', 'time-travel', 'healing', 'second-chances', 'forgiveness'],
    tropes: ['time-travel', 'multigenerational-family', 'healing-the-past', 'small-town', 'bittersweet'],
    tone: ['emotional', 'warm', 'bittersweet', 'healing', 'heartwarming'],
    setting: ['small-town', 'canada', 'time-travel', 'farm'],
    characterTypes: ['estranged-mother-daughter', 'grandmother', 'time-traveling-granddaughter', 'small-town-community'],
    streaming: { amazon_prime: true },
    actors: [
      { name: 'Andie MacDowell', role: 'Del Landry', isLead: true },
      { name: 'Chyler Leigh', role: 'Kat Landry', isLead: true },
      { name: 'Sadie Laflamme-Snow', role: 'Alice', isLead: true }
    ],
    matchReasoningHints: [
      "Reply 1988\'s \'multigenerational community warmth filtered through the lens of what we understand only in retrospect\' emotional architecture — the time travel makes the nostalgia literal",
      "When Life Gives You Tangerines fans: same \'family bonds across generations, revealed slowly\' structure — both shows understand that a family\'s real story takes decades to understand",
      "Virgin River\'s small-town-as-emotional-anchor warmth with added time travel stakes — the community is the constant that makes the family drama feel grounded",
      "This Is Us fans who love non-linear emotional family storytelling where the present-day drama is deepened by what we learn about the past — The Way Home makes that structure literal through time travel",
      "Outlander fans who love \'someone from the present goes to the past and has to navigate the emotional reality of meeting their ancestors as contemporaries\' — the grandma-granddaughter dynamic here is extraordinary"
    ]
  },
  {
    id: 'the-pitt',
    title: 'The Pitt',
    year: 2025,
    type: 'show',
    genres: ['medical', 'drama'],
    themes: ['healthcare-crisis', 'trauma', 'vocation', 'sacrifice', 'systems-failure'],
    tropes: ['real-time-storytelling', 'ensemble-medical', 'systemic-critique', 'moral-dilemmas', 'trauma-response'],
    tone: ['intense', 'immersive', 'harrowing', 'emotional', 'urgent'],
    setting: ['hospital', 'pittsburgh', 'modern', 'emergency-room'],
    characterTypes: ['exhausted-attending', 'dedicated-residents', 'overwhelmed-nurses', 'desperate-patients'],
    streaming: { amazon_prime: true },
    actors: [
      { name: 'Noah Wyle', role: 'Dr. Robby', isLead: true }
    ],
    matchReasoningHints: [
      "Hospital Playlist\'s \'medicine as vocation, not career\' emotional core, applied to the American healthcare crisis — The Pitt asks the same question Hospital Playlist does: what does this job cost the people who love it?",
      "Doctor Romantic fans who love medical dramas that refuse to treat medicine as background for romance — both shows are first and foremost about what it means to try to be a good doctor",
      "Trauma Code: Heroes on Call fans — The Pitt is the Western equivalent: real-time, immersive, brutal in its insistence that emergency medicine is organized chaos held together by human will",
      "Resident Playbook fans: Noah Wyle\'s attending plays the same \'this is what you\'re becoming\' mentor function as the veteran doctors in Korean medical dramas — wisdom through demonstrated cost",
      "The Bear fans who love \'professional excellence under impossible conditions\' as the premise — The Pitt translates the kitchen energy entirely into an ER: same pressure, same team dynamics, higher stakes"
    ]
  },
  {
    id: 'nine-perfect-strangers-s2',
    title: 'Nine Perfect Strangers Season 2',
    year: 2025,
    type: 'show',
    genres: ['drama', 'thriller', 'comedy'],
    themes: ['healing', 'trauma', 'identity', 'self-deception', 'transformation'],
    tropes: ['isolated-setting', 'ensemble-cast', 'unreliable-guide', 'dark-therapy', 'unexpected-connection'],
    tone: ['darkly-comedic', 'tense', 'emotional', 'satirical', 'surprising'],
    setting: ['wellness-retreat', 'isolated', 'modern'],
    characterTypes: ['eccentric-guru', 'damaged-strangers', 'reluctant-truth-tellers', 'transformed-survivors'],
    streaming: { amazon_prime: true },
    actors: [
      { name: 'Nicole Kidman', role: 'Masha', isLead: true }
    ],
    matchReasoningHints: [
      "It\'s Okay That\'s Love\'s \'people using unconventional treatment to heal profound wounds\' premise — both shows treat mental health with the same specific, unsentimental attention that makes the healing feel real",
      "Daily Dose of Sunshine fans who want something darker: the therapeutic setting is the same, but Nine Perfect Strangers refuses the warmth, opting for discomfort as the vehicle for growth",
      "Sky Castle\'s \'wealthy people whose curated lives are collapsing from internal contradictions\' premise — the retreat setting strips away the financial armor and forces the same confrontation",
      "Dear Child fans who love controlled settings where psychological pressure makes people reveal what they\'ve been hiding — isolation as both metaphor and mechanism",
      "The White Lotus fans who love \'pampered people forced to confront themselves in an exotic location\' satire — same class critique, same ensemble cast, same growing sense that something is very wrong"
    ]
  },
  {
    id: 'apple-tv-shrinking-s2',
    title: 'Shrinking Season 2',
    year: 2024,
    type: 'show',
    genres: ['comedy', 'drama', 'romance'],
    themes: ['grief', 'healing', 'friendship', 'therapy', 'new-beginnings'],
    tropes: ['found-family', 'grief-as-comedy', 'unconventional-therapy', 'workplace-romance', 'bromance'],
    tone: ['warm', 'comedic', 'emotional', 'healing', 'heartwarming'],
    setting: ['modern', 'los-angeles', 'therapy', 'suburb'],
    characterTypes: ['grieving-therapist', 'wise-mentor', 'chaotic-patient', 'supportive-friends'],
    streaming: { amazon_prime: true },
    actors: [
      { name: 'Jason Segel', role: 'Jimmy Laird', isLead: true },
      { name: 'Harrison Ford', role: 'Paul Rhoades', isLead: false },
      { name: 'Jessica Williams', role: 'Gaby', isLead: false }
    ],
    matchReasoningHints: [
      "It\'s Okay That\'s Love\'s \'therapist whose patients\' issues mirror their own unresolved trauma\' premise played for warmth instead of tragedy — both shows insist that healing requires community",
      "My Mister fans who love \'profoundly sad story about a profoundly sad person finding their people\' emotional architecture — Shrinking takes the same premise and makes it actively funny without losing the weight",
      "Hospital Playlist\'s \'friend group as primary emotional support structure\' warmth — the Shrinking ensemble operates with the same \'these people don\'t need to be family, they chose to be\' found-family energy",
      "Schitt\'s Creek fans who love shows that are about nothing except how people gradually become essential to each other — Shrinking earns every emotional beat by refusing to rush the relationships",
      "Be Melodramatic fans: same \'thirtysomethings navigating friendship, grief, and career\' emotional register with California sunshine instead of Seoul apartments"
    ]
  },
  {
    id: 'paradise-2025',
    title: 'Paradise (2025)',
    year: 2025,
    type: 'show',
    genres: ['thriller', 'sci-fi', 'mystery'],
    themes: ['survival', 'power', 'utopia-vs-dystopia', 'identity', 'class'],
    tropes: ['bunker-society', 'dystopian-thriller', 'murder-mystery', 'class-divide', 'conspiracy'],
    tone: ['tense', 'cerebral', 'dark', 'suspenseful', 'claustrophobic'],
    setting: ['near-future', 'bunker', 'isolated', 'post-apocalyptic-adjacent'],
    characterTypes: ['secret-service-agent', 'tech-billionaire', 'bunker-residents', 'hidden-killer'],
    streaming: { disney_plus: true },
    actors: [
      { name: 'Sterling K. Brown', role: 'Xavier Collins', isLead: true },
      { name: 'Julianne Nicholson', role: 'Sinead', isLead: false }
    ],
    matchReasoningHints: [
      "Silo fans who love \'sealed environment as both literal and metaphorical prison\' premises — Paradise operates in the same claustrophobic thriller register but adds a murder mystery layer",
      "Squid Game\'s \'beautiful environment designed to make people comfortable while they\'re controlled\' irony — the utopia here is as deliberately constructed as the island games",
      "Black Knight\'s post-apocalyptic \'who controls the resources controls the people\' thematic concern — Paradise makes it explicit: the bunker is a microcosm of everything that went wrong outside",
      "Goodbye Earth fans who love stories about a small community of people forced to confront their values when civilization is ending — Paradise asks the same questions from inside the ark",
      "Designated Survivor fans who love \'government/power conspiracy at the end of the world\' premises — the political machinations inside the bunker mirror the outside world\'s failures that got everyone there"
    ]
  },
  {
    id: 'the-residence-2025',
    title: 'The Residence',
    year: 2025,
    type: 'show',
    genres: ['mystery', 'comedy', 'drama'],
    themes: ['truth', 'institutional-secrets', 'class', 'power', 'justice'],
    tropes: ['eccentric-detective', 'locked-room-mystery', 'high-society', 'whodunit', 'comic-investigation'],
    tone: ['comedic', 'sharp', 'witty', 'surprising', 'engaging'],
    setting: ['modern', 'white-house', 'washington-dc'],
    characterTypes: ['eccentric-genius-detective', 'political-staff', 'red-herrings', 'reluctant-witnesses'],
    streaming: { netflix: true },
    actors: [
      { name: 'Uzo Aduba', role: 'Cordelia Cupp', isLead: true }
    ],
    matchReasoningHints: [
      "Inspector Koo\'s \'eccentric female detective who runs circles around everyone else\' character energy — both Cordelia Cupp and Koo K-young are defined by the gap between how people perceive them and what they\'re actually capable of",
      "Only Murders in the Building fans who love investigative comedy that takes the whodunit mechanics seriously even while being deliberately silly — the mystery is satisfying even when the delivery is absurd",
      "Extraordinary Attorney Woo fans who love protagonists who process the world differently and are correct precisely because of it — Cordelia Cupp\'s unusual cognitive approach is her investigative superpower",
      "Poker Face fans who want episodic mystery with a recurring larger canvas — each episode has a satisfying contained investigation that fits into a larger portrait of power and secrets",
      "Cafe Minamdang fans who love \'fake/unconventional detective with genuine skills\' premises — the comedy comes from the gap between the protagonist\'s methods and the institution\'s expectations"
    ]
  },
  {
    id: 'lockerbie-a-search-for-truth',
    title: 'Lockerbie: A Search for Truth',
    year: 2024,
    type: 'show',
    genres: ['drama', 'true-crime', 'thriller'],
    themes: ['grief', 'justice', 'government-corruption', 'perseverance', 'truth'],
    tropes: ['true-story', 'bereaved-parent', 'fighting-the-system', 'conspiracy', 'decades-long-quest'],
    tone: ['devastating', 'tense', 'emotional', 'inspiring', 'angry'],
    setting: ['historical', 'modern', 'international', 'uk-us-libya'],
    characterTypes: ['grieving-father', 'corrupt-officials', 'reluctant-truth-tellers', 'investigators'],
    streaming: { amazon_prime: true },
    actors: [
      { name: 'Colin Firth', role: 'Dr. Jim Swire', isLead: true }
    ],
    matchReasoningHints: [
      "Signal\'s \'what if the official account of a terrible crime was a lie, and what if exposing the lie costs more than the crime itself\' horror — the procedural and the emotional devastation are inseparable",
      "Through the Darkness\' \'understanding criminal systems from the inside\' framework applied to international terrorism and state-sponsored cover-ups — both shows treat truth as a scarce, dangerous resource",
      "D.P.\'s \'institutional failure examined through its human cost\' structure — Lockerbie shows what happens when the institution responsible for justice is the institution that needs to be prosecuted",
      "Reacher fans who love stories where the official story is completely wrong and the truth is being protected by people with power — Lockerbie is the real-world version of every Reacher cover-up",
      "The Outlaws\' \'justice system operating outside its own rules\' critique, elevated by Colin Firth\'s performance into something genuinely harrowing — the father as protagonist makes it personal in a way systemic critiques usually aren\'t"
    ]
  },
  {
    id: 'poker-face-s2',
    title: 'Poker Face Season 2',
    year: 2025,
    type: 'show',
    genres: ['mystery', 'comedy', 'drama'],
    themes: ['truth', 'justice', 'identity', 'outsider', 'moral-code'],
    tropes: ['episodic-mystery', 'road-show', 'human-lie-detector', 'reluctant-hero', 'howcatchem'],
    tone: ['comedic', 'sharp', 'nostalgic', 'fun', 'satisfying'],
    setting: ['modern', 'road-show', 'various-american-settings'],
    characterTypes: ['truth-detector-protagonist', 'episodic-villains', 'ordinary-people-in-bad-situations', 'celebrity-cameos'],
    streaming: { amazon_prime: true },
    actors: [
      { name: 'Natasha Lyonne', role: 'Charlie Cale', isLead: true }
    ],
    matchReasoningHints: [
      "Vincenzo\'s \'protagonist who is on the wrong side of the law but operates with a private moral code that the audience entirely endorses\' satisfaction — both characters make us complicit in their vigilante justice",
      "Extraordinary Attorney Woo fans: same \'protagonist with an unusual perceptual ability that gives them access to truths other people miss\' premise — Charlie Cale and Woo Young-woo are on opposite ends of the tone spectrum but the same conceptual DNA",
      "Catch Me If You Can fans who love \'effortlessly compelling protagonists who are always ten steps ahead\' — Lyonne\'s Charlie has the same \'watch her work\' pleasure as Lee Je-hoon\'s chameleon performances",
      "Inspector Koo fans who want the same \'eccentric female detective who is always right\' satisfaction in an American format — both shows understand that competence is the most entertaining character trait",
      "Itaewon Class\' \'person running from their past while operating with an iron moral code\' emotional undertow — Charlie Cale\'s rootlessness is the same restless conscience, just expressed through Columbo homage"
    ]
  },
  {
    id: 'mid-century-modern',
    title: 'Mid-Century Modern',
    year: 2025,
    type: 'show',
    genres: ['comedy', 'drama'],
    themes: ['friendship', 'aging', 'identity', 'found-family', 'reinvention'],
    tropes: ['found-family', 'unlikely-roommates', 'aging', 'comedy-of-errors', 'lgbtq-representation'],
    tone: ['warm', 'comedic', 'bittersweet', 'heartwarming'],
    setting: ['modern', 'palm-springs', 'retiree-community'],
    characterTypes: ['grieving-friends', 'judgmental-mother', 'reluctant-housemates', 'community-of-characters'],
    streaming: { disney_plus: true },
    actors: [
      { name: 'Nathan Lane', role: 'Jerry Rosenfeld', isLead: true },
      { name: 'Matt Bomer', role: 'Bunny Buttons', isLead: true },
      { name: 'Linda Lavin', role: 'Sybil Buttons', isLead: false }
    ],
    matchReasoningHints: [
      "Be Melodramatic\'s \'friendship as the primary love story\' emotional architecture — the three men in Mid-Century Modern have the same \'choosing each other every day\' depth that makes K-drama friendship dramas so moving",
      "Work Later Drink Now\'s \'friends processing life\'s hard turns together over drinks\' warmth — Palm Springs is just Seoul with better weather and more sequins",
      "Welcome to Waikiki\'s \'found-family-of-roommates-making-it-work\' energy applied to a generation that had more time to construct who they wanted to be — the warmth is the same, the wisdom is deeper",
      "Schitt\'s Creek fans who love shows where the comedy comes from genuine character specificity rather than situation — every character in Mid-Century Modern is precisely, lovingly drawn",
      "Golden Girls for the K-drama audience: if you love \'group of friends in middle-to-late life building a home together\' found-family warmth, this is exactly that, with better production values"
    ]
  },
  {
    id: 'the-old-guard-2',
    title: 'The Old Guard 2',
    year: 2025,
    type: 'movie',
    genres: ['action', 'fantasy', 'thriller'],
    themes: ['immortality', 'sacrifice', 'loyalty', 'purpose', 'cost-of-power'],
    tropes: ['immortal-warriors', 'team-dynamics', 'new-member', 'greater-threat', 'chosen-family'],
    tone: ['action-packed', 'emotional', 'intense', 'grounded-fantasy'],
    setting: ['global', 'modern', 'action', 'historical-flashbacks'],
    characterTypes: ['immortal-warriors', 'new-immortal', 'ancient-enemies', 'corporate-villains'],
    streaming: { netflix: true },
    actors: [
      { name: 'Charlize Theron', role: 'Andy', isLead: true },
      { name: 'KiKi Layne', role: 'Nile Freeman', isLead: true },
      { name: 'Uma Thurman', role: 'new antagonist', isLead: false }
    ],
    matchReasoningHints: [
      "Goblin\'s \'what does immortality cost when love is impossible to keep\' emotional question — The Old Guard asks the same thing through action instead of fantasy romance, but the grief is identical",
      "Arthdal Chronicles\' \'mythic-scale warriors navigating the cost of extraordinary power\' epic ambition — The Old Guard delivers the same emotional weight in two-hour packages instead of 40 episodes",
      "Along with the Gods fans who love action-fantasy that takes the metaphysics seriously and refuses to treat immortality as a power fantasy — both texts insist immortality is a wound, not a gift",
      "Kingdom fans who love action sequences where the choreography and the emotional stakes are equally precise — every fight in The Old Guard means something because we know exactly what each warrior has lost",
      "Vagabond fans who love \'elite team vs. shadowy institutional power\' action thrillers — The Old Guard escalates the stakes to literal immortality while keeping the found-family emotional core"
    ]
  },
  {
    id: 'wolf',
    title: 'Wolf (2024)',
    year: 2024,
    type: 'show',
    genres: ['thriller', 'mystery', 'drama'],
    themes: ['family-secrets', 'obsession', 'truth', 'class', 'grief'],
    tropes: ['detective-obsession', 'family-drama', 'cold-case', 'welsh-setting', 'psychological-thriller'],
    tone: ['tense', 'atmospheric', 'dark', 'suspenseful', 'emotional'],
    setting: ['modern', 'wales', 'isolated-house', 'rural'],
    characterTypes: ['obsessed-detective', 'troubled-family', 'unreliable-witnesses', 'cold-case-investigator'],
    streaming: { amazon_prime: true },
    actors: [
      { name: 'Ukweli Roach', role: 'Jack Caffery', isLead: true },
      { name: 'Juliet Stevenson', role: 'Jacqui Moon', isLead: true }
    ],
    matchReasoningHints: [
      "Beyond Evil\'s \'detective with a damaged psychology investigating crimes that mirror his own wounds\' architecture — Wolf operates in the same \'investigation as self-excavation\' register with Welsh countryside instead of Korean countryside",
      "Signal\'s \'cold case that becomes present danger\' structure — the past and present contaminate each other in exactly the way Signal pioneered for Korean crime TV",
      "Dark Winds\' \'isolated landscape as psychological mirror for the detective\' atmosphere — Wales does the same work for Wolf that the Navajo reservation does for Dark Winds",
      "Through the Darkness fans who love procedurals that take the psychological architecture of violence seriously — Wolf\'s profiling methodology has the same forensic-psychology-as-character-study quality",
      "Happy Valley Season 3 fans who wanted to stay in a dark British crime drama set in dramatic northern landscape with a flawed protagonist — Wolf delivers the same \'this place will break you if you love it\' atmosphere"
    ]
  }
];
