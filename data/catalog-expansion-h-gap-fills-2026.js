/**
 * Catalog Expansion H — Search Gap Fills
 * 14 titles filling high-search-volume "shows like [X]" gaps.
 * All titles verified NOT present in 2,015-title catalog as of 2026-04-22.
 *
 * Western (10): Young Sheldon, Chuck, Jack Ryan, iZombie, Crazy Ex-Girlfriend,
 * Blindspot, Madam Secretary, Dexter: Original Sin, Under the Bridge, Sugar.
 * Anime (4): Sakamoto Days, The Elusive Samurai, Wind Breaker, Scavengers Reign.
 */

const newWesternShows = [

  // ─── 1. Young Sheldon (CBS, 2017–2024) ────────────────────────────────────
  {
    id: 'young-sheldon',
    title: 'Young Sheldon',
    year: 2017,
    episodes: 141,
    synopsis: "Nine-year-old Sheldon Cooper navigates life in East Texas as a child prodigy surrounded by a family that loves him and a community that doesn't quite know what to do with him. A spin-off prequel to The Big Bang Theory that surpasses it by trading laugh-track sitcom mechanics for genuine family drama. The show's secret weapon is that it's not really about Sheldon at all — it's about a working-class family in the late 1980s and early '90s dealing with a child who makes their already complicated lives exponentially more so.",
    genres: ['comedy', 'drama', 'family'],
    themes: ['family', 'genius', 'growing-up', 'class', 'faith', 'small-town-life'],
    tropes: ['child-prodigy', 'fish-out-of-water', 'family-comedy', 'coming-of-age', 'narrator-from-the-future'],
    tone: ['warm', 'funny', 'heartfelt', 'nostalgic', 'bittersweet'],
    setting: ['1980s-90s', 'east-texas', 'small-town', 'school'],
    characterTypes: ['child-prodigy', 'loving-but-overwhelmed-parents', 'colorful-siblings', 'church-community'],
    streaming: { netflix: true, amazon_prime: true },
    network: 'CBS',
    actors: [
      { name: 'Iain Armitage', role: 'Sheldon Cooper', isLead: true },
      { name: 'Zoe Perry', role: 'Mary Cooper', isLead: true },
      { name: 'Lance Barber', role: 'George Cooper Sr.', isLead: false },
      { name: 'Montana Jordan', role: 'Georgie Cooper', isLead: false }
    ],
    matchReasoningHints: [
      "Reply 1988 (K-drama) fans of period family dramas where the era is a character and the real story is a family navigating life together with more love than resources — Young Sheldon captures the same texture of specificity",
      "Extraordinary Attorney Woo fans of stories about a brilliant person whose intelligence creates as many social obstacles as it solves — Sheldon's genius is both gift and burden in a community that values conformity",
      "Hospital Playlist fans of ensemble stories where the relationships between family members carry more emotional weight than any individual plot — Young Sheldon's Cooper family has the same gravitational pull",
      "When the Camellia Blooms fans of stories set in small communities where everyone has opinions about everyone else and privacy is a foreign concept",
      "My Father Is Strange (K-drama) fans of family comedies that are secretly devastating dramas about parents trying their best and failing in specific, recognizable ways"
    ]
  },

  // ─── 2. Chuck (NBC, 2007–2012) ────────────────────────────────────────────
  {
    id: 'chuck',
    title: 'Chuck',
    year: 2007,
    episodes: 91,
    synopsis: "Chuck Bartowski is a lovable computer nerd working at the Nerd Herd desk of a big-box electronics store when a rogue CIA agent emails him the Intersect — the government's most valuable intelligence database, which downloads directly into his brain. Now the most important intelligence asset in America works at the equivalent of Best Buy, protected by a gruff NSA agent and a beautiful CIA handler who he is absolutely not supposed to fall in love with. A spy comedy that never pretends to be anything other than fun.",
    genres: ['action', 'comedy', 'romance', 'spy'],
    themes: ['heroism', 'friendship', 'identity', 'duty', 'love', 'nerd-culture'],
    tropes: ['ordinary-person-as-spy', 'will-they-wont-they', 'secret-identity', 'nerd-hero', 'found-family'],
    tone: ['fun', 'action-packed', 'romantic', 'geeky', 'heartfelt'],
    setting: ['los-angeles', 'buy-more-store', 'spy-world', '2000s'],
    characterTypes: ['lovable-nerd', 'badass-spy-love-interest', 'gruff-partner', 'quirky-coworkers'],
    streaming: { amazon_prime: true },
    network: 'NBC',
    actors: [
      { name: 'Zachary Levi', role: 'Chuck Bartowski', isLead: true },
      { name: 'Yvonne Strahovski', role: 'Sarah Walker', isLead: true },
      { name: 'Adam Baldwin', role: 'John Casey', isLead: false }
    ],
    matchReasoningHints: [
      "City Hunter (K-drama) fans of action-romance shows where the lead maintains a double life and the romance is complicated by the spy work rather than just decorated by it",
      "Vincenzo fans of shows where an ordinary-seeming person turns out to be unexpectedly dangerous and the tonal whiplash between comedy and action is the whole point",
      "K2 (K-drama) fans of action dramas with a strong romance thread where the bodyguard/protector dynamic creates genuine tension",
      "Healer (K-drama) fans of secret-identity action romances where the nerd persona and the action-hero persona belong to the same person and the love interest complicates both",
      "Psych fans who loved the combination of genuine mystery-solving and constant humor — Chuck runs the same engine with espionage instead of detective work"
    ]
  },

  // ─── 3. Jack Ryan (Amazon, 2018–2023) ─────────────────────────────────────
  {
    id: 'jack-ryan',
    title: 'Jack Ryan',
    year: 2018,
    episodes: 32,
    synopsis: "CIA analyst Jack Ryan follows a suspicious string of bank transfers that leads him from his desk at Langley into the field, where the intelligence is messier, the morality is grayer, and the consequences are measured in bodies rather than spreadsheets. Based on Tom Clancy's iconic character, the show treats geopolitics as a puzzle and Ryan as the kind of person who can't stop solving it even when solving it means becoming a target. Smart, tense, and more thoughtful about the mechanics of modern terrorism than most action shows.",
    genres: ['action', 'thriller', 'spy', 'political'],
    themes: ['terrorism', 'intelligence', 'duty', 'morality', 'geopolitics', 'sacrifice'],
    tropes: ['analyst-in-the-field', 'globe-trotting-thriller', 'reluctant-action-hero', 'conspiracy', 'political-thriller'],
    tone: ['tense', 'intelligent', 'cinematic', 'gripping', 'morally-complex'],
    setting: ['washington-dc', 'middle-east', 'europe', 'global'],
    characterTypes: ['brilliant-analyst', 'field-operatives', 'political-leaders', 'complex-antagonists'],
    streaming: { amazon_prime: true },
    network: 'Amazon Prime',
    actors: [
      { name: 'John Krasinski', role: 'Jack Ryan', isLead: true },
      { name: 'Wendell Pierce', role: 'James Greer', isLead: false }
    ],
    matchReasoningHints: [
      "Vagabond (K-drama) fans of globe-trotting conspiracy thrillers where an ordinary person gets pulled into a web of international intrigue and government cover-ups",
      "Iris (K-drama) fans of Korean spy thrillers with high production values and a protagonist torn between duty and personal stakes",
      "The Veil (K-drama) fans of intelligence agency dramas where the analyst becomes the operative and discovers that field work requires a different kind of intelligence than desk work",
      "Homeland fans who want the same geopolitical complexity with more action and a protagonist who maintains his moral center rather than losing it",
      "Nirvana in Fire (C-drama) fans of stories about a brilliant strategist who operates behind the scenes until circumstances force him to become the weapon rather than the wielder"
    ]
  },

  // ─── 4. iZombie (CW, 2015–2019) ──────────────────────────────────────────
  {
    id: 'izombie',
    title: 'iZombie',
    year: 2015,
    episodes: 71,
    synopsis: "Liv Moore — yes, that's her name — is an overachieving medical resident who becomes a zombie at a boat party. Rather than eat innocent people, she takes a job at the morgue where she can eat the brains of the already dead. Side effect: she absorbs their memories, which she uses to help solve their murders. From the creator of Veronica Mars, iZombie is a detective show, a zombie show, a workplace comedy, and a romance that somehow makes all four genres work simultaneously.",
    genres: ['comedy', 'crime', 'horror', 'romance', 'sci-fi'],
    themes: ['identity', 'mortality', 'justice', 'adaptation', 'community', 'secrecy'],
    tropes: ['zombie-detective', 'secret-identity', 'case-of-the-week', 'personality-absorption', 'workplace-comedy'],
    tone: ['witty', 'fun', 'quirky', 'charming', 'clever'],
    setting: ['seattle', 'morgue', 'police-station', 'modern'],
    characterTypes: ['zombie-detective', 'skeptical-partner', 'mad-scientist-boss', 'love-interest'],
    streaming: { netflix: true },
    network: 'The CW',
    actors: [
      { name: 'Rose McIver', role: 'Liv Moore', isLead: true },
      { name: 'Malcolm Goodwin', role: 'Clive Babineaux', isLead: false },
      { name: 'Rahul Kohli', role: 'Dr. Ravi Chakrabarti', isLead: false }
    ],
    matchReasoningHints: [
      "Mystic Pop-Up Bar (K-drama) fans of supernatural-premise shows where the dead and the living coexist and the humor comes from treating the supernatural as mundane",
      "Zombie Detective (K-drama) fans of Korean zombie comedies that use the premise for humor and mystery rather than horror",
      "Sell Your Haunted House fans of shows where supernatural abilities are used to solve mysteries and the detective is the most unusual element of the procedural",
      "Veronica Mars fans who missed the sharp dialogue and the case-of-the-week structure — the same creator brings the same sensibility to a very different genre",
      "The Apothecary Diaries fans of mystery shows where the detective's unusual knowledge base gives them insights that conventional investigators can't access"
    ]
  },

  // ─── 5. Crazy Ex-Girlfriend (CW, 2015–2019) ──────────────────────────────
  {
    id: 'crazy-ex-girlfriend',
    title: 'Crazy Ex-Girlfriend',
    year: 2015,
    episodes: 62,
    synopsis: "Rebecca Bunch, a successful but miserable New York lawyer, impulsively moves to West Covina, California — which happens to be where her summer-camp ex-boyfriend lives. What starts as a romantic comedy about a woman chasing a man evolves over four seasons into a musical drama about mental illness, self-destructive patterns, and the difference between love and obsession. The show's original musical numbers (over 150) are Broadway-quality, and its willingness to make its protagonist genuinely flawed rather than adorably quirky is what makes it one of the most underrated shows of its era.",
    genres: ['comedy', 'musical', 'drama', 'romance'],
    themes: ['mental-health', 'obsession', 'self-discovery', 'friendship', 'identity', 'toxic-patterns'],
    tropes: ['unreliable-protagonist', 'musical-fantasy-sequences', 'rom-com-deconstruction', 'therapy-journey', 'found-family'],
    tone: ['hilarious', 'brutally-honest', 'musical', 'heartbreaking', 'satirical'],
    setting: ['west-covina', 'california', 'law-firm', 'suburban'],
    characterTypes: ['brilliant-mess', 'oblivious-ex', 'loyal-best-friend', 'ensemble'],
    streaming: { netflix: true },
    network: 'The CW',
    actors: [
      { name: 'Rachel Bloom', role: 'Rebecca Bunch', isLead: true },
      { name: 'Vincent Rodriguez III', role: 'Josh Chan', isLead: false },
      { name: 'Donna Lynne Champlin', role: 'Paula Proctor', isLead: false }
    ],
    matchReasoningHints: [
      "It's Okay to Not Be Okay (K-drama) fans of stories that treat mental illness as a character trait rather than a plot device, where the protagonist's journey to self-understanding IS the story",
      "Work Later, Drink Now fans of shows about female friendship that are actually about women figuring out who they are when they stop performing for other people",
      "Extraordinary You (K-drama) fans of shows that deconstruct romantic tropes by having a protagonist who is aware of the genre conventions and still can't stop following them",
      "Fleabag fans of brutally honest comedies about women who know exactly what they're doing wrong and do it anyway, then break the fourth wall to acknowledge it",
      "Be Melodramatic (K-drama) fans of ensemble comedies that use humor as a vehicle for surprisingly deep exploration of what women want when they stop wanting what they think they should want"
    ]
  },

  // ─── 6. Blindspot (NBC, 2015–2020) ────────────────────────────────────────
  {
    id: 'blindspot',
    title: 'Blindspot',
    year: 2015,
    episodes: 100,
    synopsis: "A woman is found naked in Times Square inside a duffel bag, her body covered in fresh tattoos and her memory completely erased. The tattoos turn out to be a complex map of crimes — each one a clue to a different case, and together they form a conspiracy that connects to the highest levels of government. An FBI team must decode the tattoos, solve the cases, and figure out who this woman is and why she was sent to them. A puzzle-box thriller that keeps generating new questions faster than it answers the old ones.",
    genres: ['action', 'thriller', 'mystery', 'crime'],
    themes: ['identity', 'conspiracy', 'memory', 'trust', 'justice', 'betrayal'],
    tropes: ['amnesia', 'tattooed-mystery', 'conspiracy-thriller', 'FBI-team', 'puzzle-box'],
    tone: ['intense', 'twisty', 'action-packed', 'suspenseful', 'fast-paced'],
    setting: ['new-york-city', 'FBI-headquarters', 'global'],
    characterTypes: ['amnesiac-warrior-woman', 'driven-FBI-agent', 'tech-genius', 'team-ensemble'],
    streaming: { amazon_prime: true },
    network: 'NBC',
    actors: [
      { name: 'Jaimie Alexander', role: 'Jane Doe / Remi Briggs', isLead: true },
      { name: 'Sullivan Stapleton', role: 'Kurt Weller', isLead: true }
    ],
    matchReasoningHints: [
      "Vagabond (K-drama) fans of conspiracy thrillers where every answer generates three new questions and the protagonist can't trust anyone, including themselves",
      "Healer (K-drama) fans of action dramas where the mystery of the protagonist's identity is as compelling as the cases they're solving",
      "Signal (K-drama) fans of shows built around a central mystery that unfolds across the entire series while individual episodes solve discrete cases",
      "My Name (K-drama) fans of action-identity thrillers about a woman operating under a false identity inside a law enforcement agency with a hidden agenda",
      "Alice in Borderland fans of shows that present an ever-expanding puzzle where solving one layer reveals another"
    ]
  },

  // ─── 7. Madam Secretary (CBS, 2014–2019) ──────────────────────────────────
  {
    id: 'madam-secretary',
    title: 'Madam Secretary',
    year: 2014,
    episodes: 120,
    synopsis: "Elizabeth McCord, a former CIA analyst turned university professor, is recruited to serve as Secretary of State. Each episode navigates a foreign policy crisis — hostage situations, diplomatic standoffs, rogue states — while she balances the demands of governance with a marriage and family that refuse to be secondary. Téa Leoni brings a rare combination of intelligence and warmth to a character who is competent without being cold and political without being cynical.",
    genres: ['political', 'drama', 'thriller'],
    themes: ['diplomacy', 'leadership', 'family', 'ethics', 'power', 'service'],
    tropes: ['competent-female-lead', 'political-crisis-of-the-week', 'work-life-balance', 'idealist-in-politics', 'team-ensemble'],
    tone: ['smart', 'hopeful', 'dramatic', 'thoughtful', 'warm'],
    setting: ['washington-dc', 'state-department', 'global-locations', 'family-home'],
    characterTypes: ['brilliant-diplomat', 'supportive-spouse', 'political-rivals', 'loyal-staff'],
    streaming: { netflix: true, amazon_prime: true },
    network: 'CBS',
    actors: [
      { name: 'Téa Leoni', role: 'Elizabeth McCord', isLead: true },
      { name: 'Tim Daly', role: 'Henry McCord', isLead: false }
    ],
    matchReasoningHints: [
      "Queenmaker (K-drama) fans of political dramas about a woman navigating the corridors of power with intelligence and principle in a system designed for neither",
      "The King: Eternal Monarch fans of dramas about leadership and the personal cost of being the person everyone expects to solve impossible problems",
      "Designated Survivor fans of political dramas that treat governance as a series of difficult choices made by imperfect people trying to do right",
      "Doctor Cha fans of shows about a woman who reenters a high-stakes career and proves she's extraordinary while also being a mother, wife, and flawed human",
      "Nirvana in Fire (C-drama) fans of stories about a brilliant strategist who must navigate multiple factions simultaneously while maintaining personal loyalty"
    ]
  },

  // ─── 8. Dexter: Original Sin (Paramount+, 2024) ──────────────────────────
  {
    id: 'dexter-original-sin',
    title: 'Dexter: Original Sin',
    year: 2024,
    episodes: 10,
    synopsis: "Before he became Miami Metro's most prolific serial-killing blood spatter analyst, Dexter Morgan was a college student learning to manage urges he barely understood. The prequel follows young Dexter as Harry teaches him 'the Code' — the system of rules that channels his compulsion into something that resembles justice. Patrick Gibson captures Michael C. Hall's studied blankness while adding the uncertainty of someone who hasn't yet decided what he is. The origin story the franchise always implied but never showed.",
    genres: ['thriller', 'crime', 'drama', 'horror'],
    themes: ['morality', 'identity', 'control', 'nature-vs-nurture', 'justice', 'masks'],
    tropes: ['origin-story', 'serial-killer-protagonist', 'mentor-student', 'dark-passenger', 'dual-life'],
    tone: ['dark', 'suspenseful', 'psychological', 'compelling', 'noir'],
    setting: ['miami', '1990s', 'university', 'police-department'],
    characterTypes: ['young-psychopath-in-training', 'morally-complex-mentor', 'unsuspecting-friends'],
    streaming: { amazon_prime: true },
    network: 'Paramount+',
    actors: [
      { name: 'Patrick Gibson', role: 'Young Dexter Morgan', isLead: true },
      { name: 'Christian Slater', role: 'Harry Morgan', isLead: false }
    ],
    matchReasoningHints: [
      "Flower of Evil (K-drama) fans of stories about someone who may be a psychopath trying to perform normalcy — Dexter's origin story is the American version of the same tension between mask and face",
      "Mouse (K-drama) fans of Korean thrillers that explore the nature-vs-nurture question through a character whose capacity for violence is treated as a condition to be managed rather than a simple evil",
      "Beyond Evil (K-drama) fans of psychological thrillers about characters who walk the line between justice and darkness and the mentor relationships that determine which side they land on",
      "The Smile Has Left Your Eyes fans of K-dramas about characters whose emotional lives are genuinely different from normal people's and the shows that take that difference seriously",
      "Stranger (K-drama) fans of stories about a protagonist whose emotional processing is atypical and whose competence depends on maintaining the mask"
    ]
  },

  // ─── 9. Under the Bridge (Hulu, 2024) ────────────────────────────────────
  {
    id: 'under-the-bridge',
    title: 'Under the Bridge',
    year: 2024,
    episodes: 8,
    synopsis: "Based on Rebecca Godfrey's true-crime book about the 1997 murder of fourteen-year-old Reena Virk in Victoria, British Columbia. The series follows both the investigation and the social dynamics among the group of teenagers involved, exploring how bullying, racism, peer pressure, and the desperate adolescent need to belong created conditions for an act of violence that shocked a country. Lily Gladstone and Riley Keough anchor a show that refuses to sensationalize while also refusing to look away.",
    genres: ['crime', 'drama', 'true-crime'],
    themes: ['bullying', 'racism', 'adolescence', 'justice', 'community', 'peer-pressure'],
    tropes: ['true-crime-adaptation', 'dual-timeline', 'community-investigation', 'teen-violence', 'loss-of-innocence'],
    tone: ['haunting', 'empathetic', 'disturbing', 'thoughtful', 'restrained'],
    setting: ['victoria-bc', 'canada', '1990s', 'small-town'],
    characterTypes: ['investigative-journalist', 'detective', 'troubled-teenagers', 'grieving-family'],
    streaming: { hulu: true },
    network: 'Hulu',
    actors: [
      { name: 'Riley Keough', role: 'Rebecca Godfrey', isLead: true },
      { name: 'Lily Gladstone', role: 'Cam Bentland', isLead: true }
    ],
    matchReasoningHints: [
      "Extracurricular (K-drama) fans of shows that examine how ordinary teenagers become capable of extraordinary violence — Under the Bridge shares the same unflinching gaze at the gap between who teens present as and what they're capable of",
      "Adolescence fans of shows that trace the social dynamics leading to youth violence with meticulous attention to the systems that failed",
      "Night Has Come (K-drama) fans of teen thriller dramas where the group dynamics among adolescents become genuinely dangerous",
      "Mare of Easttown fans of investigation dramas set in small communities where the detective's personal connection to the place complicates the case",
      "The Glory (K-drama) fans of stories about the long-term consequences of bullying that treat the subject with the gravity it deserves rather than as a plot device"
    ]
  },

  // ─── 10. Sugar (Apple TV+, 2024) ──────────────────────────────────────────
  {
    id: 'sugar-appletv',
    title: 'Sugar',
    year: 2024,
    episodes: 8,
    synopsis: "John Sugar is a private detective in Los Angeles hired to find the missing granddaughter of a legendary Hollywood producer. The case pulls him through the city's entertainment industry, from studio lots to shady clubs, in what initially appears to be a classic noir detective story. Colin Farrell plays Sugar with the specific melancholy of someone who loves humanity deeply and observes it from a distance that turns out to be more literal than metaphorical. The show's mid-season twist recontextualizes everything you've watched.",
    genres: ['mystery', 'thriller', 'drama', 'noir', 'sci-fi'],
    themes: ['identity', 'observation', 'empathy', 'alienation', 'hollywood', 'secrets'],
    tropes: ['private-detective', 'noir', 'genre-twist', 'outsider-protagonist', 'missing-person'],
    tone: ['moody', 'stylish', 'mysterious', 'melancholic', 'surprising'],
    setting: ['los-angeles', 'hollywood', 'noir-aesthetic', 'modern'],
    characterTypes: ['melancholic-detective', 'hollywood-dynasty', 'femme-fatale', 'mysterious-protagonist'],
    streaming: { apple_tv: true },
    network: 'Apple TV+',
    actors: [
      { name: 'Colin Farrell', role: 'John Sugar', isLead: true }
    ],
    matchReasoningHints: [
      "My Love from the Star (K-drama) fans of stories about someone who observes humanity from the outside with genuine affection — Sugar's relationship to the people around him has the same bittersweet distance",
      "Goblin fans of K-dramas about an immortal being who has watched humanity for so long that their love for it is tinged with exhaustion",
      "Inspector Koo (K-drama) fans of detective stories with an unconventional protagonist whose observation skills come from being fundamentally different from the people they're investigating",
      "Altered Carbon fans of noir detective stories that use a sci-fi premise to reframe the genre's traditional themes of alienation and identity",
      "Hotel Del Luna fans of stories about a character who occupies a liminal space between two worlds and whose empathy for one world creates complications in the other"
    ]
  }
];

const newAnime = [

  // ─── 11. Sakamoto Days (Netflix/Crunchyroll, 2025) ────────────────────────
  {
    id: 'sakamoto-days',
    title: 'Sakamoto Days',
    year: 2025,
    episodes: 11,
    synopsis: "Taro Sakamoto was once the greatest hitman in the world — feared by every assassin alive, legendary for kills that bordered on supernatural. Then he fell in love with a convenience store clerk, retired, gained weight, and now runs a small shop with his wife and daughter. His former life comes looking for him, and the joke that powers the entire series is that retirement hasn't diminished him at all — he's just as lethally skilled, just considerably rounder. The action sequences are genuinely spectacular and the comedy is relentless.",
    genres: ['action', 'comedy', 'thriller'],
    themes: ['retirement', 'family', 'identity', 'legacy', 'friendship', 'found-purpose'],
    tropes: ['retired-badass', 'one-man-army', 'comedy-action', 'unlikely-hero', 'protecting-family'],
    tone: ['hilarious', 'action-packed', 'heartfelt', 'over-the-top', 'fun'],
    setting: ['modern-japan', 'convenience-store', 'assassin-underworld'],
    characterTypes: ['retired-legendary-hitman', 'devoted-family-man', 'loyal-companions', 'persistent-enemies'],
    streaming: { netflix: true },
    countryOfOrigin: 'Japan',
    actors: [],
    matchReasoningHints: [
      "Vincenzo (K-drama) fans of stories about a retired criminal mastermind who is dragged back into action and turns out to be exactly as dangerous as the legends suggested",
      "Spy x Family fans of anime about found families where the parent's secret violent career creates comedic situations that the family remains oblivious to",
      "A Shop for Killers (K-drama) fans of action stories where a seemingly normal business is actually connected to an underground world of professional killers",
      "Extreme Job (K-movie) fans of Korean action comedies where the premise is absurd and the execution is genuinely impressive — Sakamoto Days runs the same engine",
      "One Punch Man fans of anime that pair overwhelming power with mundane daily life and mine the contrast for both comedy and genuine emotion"
    ]
  },

  // ─── 12. The Elusive Samurai (Crunchyroll, 2024) ─────────────────────────
  {
    id: 'the-elusive-samurai',
    title: 'The Elusive Samurai',
    year: 2024,
    episodes: 12,
    synopsis: "Hojo Tokiyuki, a young lord whose clan is destroyed in a betrayal, has no talent for swordsmanship. What he does have is an almost supernatural ability to run away. In a world where warriors are valued for their ability to fight, Tokiyuki's genius for evasion — reading terrain, anticipating movements, disappearing at the perfect moment — becomes the foundation of a rebellion. Based on real historical events, the anime turns cowardice into strategy and running away into the most entertaining martial art you've never seen.",
    genres: ['action', 'historical', 'comedy', 'adventure'],
    themes: ['survival', 'unconventional-strength', 'loyalty', 'rebellion', 'growing-up', 'strategy'],
    tropes: ['weak-to-strong', 'unconventional-fighter', 'historical-rebellion', 'gathering-allies', 'underestimated-hero'],
    tone: ['energetic', 'funny', 'inspirational', 'colorful', 'strategic'],
    setting: ['kamakura-period', 'medieval-japan', 'countryside', 'battlefields'],
    characterTypes: ['cowardly-genius-hero', 'loyal-followers', 'mentor-priest', 'tyrannical-usurper'],
    streaming: { netflix: true },
    countryOfOrigin: 'Japan',
    actors: [],
    matchReasoningHints: [
      "Tale of Nokdu (K-drama) fans of historical stories about a protagonist who survives not through fighting but through cleverness, disguise, and an unwillingness to play by the expected rules",
      "Kingdom (K-drama) fans of action-packed historical Korean dramas about a young lord who must reclaim what was taken from him — The Elusive Samurai runs the same premise with humor instead of zombies",
      "Ranking of Kings fans of anime about a physically weak protagonist whose intelligence and empathy become genuine superpowers in a world that respects only strength",
      "Avatar: The Last Airbender fans of adventure anime about a young person gathering allies while being hunted, where each new companion adds a skill the group needs",
      "Joy of Life (C-drama) fans of historical stories where the protagonist's greatest weapon is being underestimated by everyone who mistakes gentleness for weakness"
    ]
  },

  // ─── 13. Wind Breaker (Crunchyroll, 2024) ────────────────────────────────
  {
    id: 'wind-breaker-anime',
    title: 'Wind Breaker',
    year: 2024,
    episodes: 13,
    synopsis: "Haruka Sakura enrolls at Furin High School — famous not for academics but for its students who protect the surrounding town from gangs and troublemakers. Sakura, who has spent his entire life alone and fighting, discovers something he never expected: a community that fights for others rather than for themselves. The show is a high-school action anime that's secretly about what happens when someone who has never belonged finds a place worth defending.",
    genres: ['action', 'drama', 'school'],
    themes: ['belonging', 'community', 'strength', 'loyalty', 'found-family', 'redemption'],
    tropes: ['delinquent-school', 'new-kid', 'tournament-arc', 'found-family', 'protecting-the-town'],
    tone: ['energetic', 'emotional', 'action-packed', 'hopeful', 'heartfelt'],
    setting: ['modern-japan', 'high-school', 'town', 'streets'],
    characterTypes: ['lonely-fighter', 'charismatic-leader', 'loyal-delinquents', 'town-residents'],
    streaming: { netflix: true },
    countryOfOrigin: 'Japan',
    actors: [],
    matchReasoningHints: [
      "Weak Hero Class 1 (K-drama) fans of high-school action dramas about students who fight back against bullies and discover that strength means something different when you're protecting others",
      "Bloodhounds (K-drama) fans of action stories about young fighters who discover a larger world of violence and choose to fight for justice rather than money",
      "D.P. (K-drama) fans of stories about young men in institutional settings who form bonds through shared adversity",
      "Haikyuu fans of anime where the protagonist joins a team and discovers that belonging to something changes everything about how they fight",
      "My Hero Academia fans of action anime about a school where the students learn to use their abilities for the greater good"
    ]
  },

  // ─── 14. Scavengers Reign (Max, 2023) ────────────────────────────────────
  {
    id: 'scavengers-reign',
    title: 'Scavengers Reign',
    year: 2023,
    episodes: 12,
    synopsis: "After their ship is damaged, the surviving crew of a deep space freighter are scattered across Vesta, an alien planet with an ecosystem so complex and alien it makes Earth look like a parking lot. Each group of survivors must navigate a world where the flora and fauna operate on biological logic that is internally consistent and completely unlike anything on Earth. No ray guns, no evil aliens — just the slow, beautiful, terrifying process of learning the rules of a world that doesn't know you exist. The most visually inventive animated series in years.",
    genres: ['sci-fi', 'animation', 'drama', 'horror'],
    themes: ['survival', 'adaptation', 'alien-biology', 'isolation', 'coexistence', 'nature'],
    tropes: ['stranded-on-alien-planet', 'survival-story', 'alien-ecosystem', 'hard-sci-fi', 'body-horror'],
    tone: ['beautiful', 'unsettling', 'contemplative', 'alien', 'immersive'],
    setting: ['alien-planet', 'deep-space', 'alien-jungle', 'crashed-ship'],
    characterTypes: ['stranded-crew', 'damaged-AI', 'alien-symbiotes'],
    streaming: { hbo_max: true, netflix: true },
    network: 'Max',
    actors: [],
    matchReasoningHints: [
      "Made in Abyss fans of animated survival stories where the world's beauty and its danger are the same thing — Scavengers Reign's alien planet operates on the same principle of gorgeous lethality",
      "Frieren fans of animated storytelling that trusts the audience to absorb worldbuilding through observation rather than exposition",
      "Sweet Home (K-drama) fans of survival stories where the environment itself is the antagonist and adaptation is the only weapon",
      "Pluto (anime) fans of animated sci-fi that prioritizes atmosphere and ethical questions over action sequences",
      "Nausicaä of the Valley of the Wind fans of stories about humans learning to coexist with an alien ecosystem rather than conquering it"
    ]
  }
];

module.exports = { newWesternShows, newAnime };
