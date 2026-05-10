/**
 * K-Drama Batch C — Mixed Genres Expansion
 * 30 titles: fantasy, historical/sageuk, comedy, slice-of-life, horror, sci-fi, medical, legal, workplace
 * Added: 2026-03-23
 */
module.exports = [

  // ── FANTASY ─────────────────────────────────────────────────────────────────

  {
    id: 'bulgasal-immortal-souls',
    title: 'Bulgasal: Immortal Souls',
    year: 2021,
    episodes: 16,
    synopsis: 'Bulgasal is an immortal creature that cannot be killed — but 600 years ago, a human woman took his ability to feel and his humanity with her when she died. Now she has been reborn, and he hunts her across lifetimes to reclaim what is his. A dark, sweeping fantasy spanning centuries of reincarnation, trauma, and broken souls trying to become whole again.',
    genres: ['fantasy', 'horror', 'drama', 'thriller'],
    themes: ['immortality', 'reincarnation', 'trauma', 'revenge', 'redemption', 'identity'],
    tropes: ['immortal-being', 'fated-lovers', 'dark-past', 'monster-with-humanity', 'supernatural-romance', 'past-life-connection'],
    tone: ['dark', 'atmospheric', 'emotional', 'haunting', 'epic'],
    setting: ['supernatural', 'modern', 'historical', 'multi-era'],
    characterTypes: ['immortal-monster', 'reincarnated-soul', 'mysterious-villain', 'traumatized-hero'],
    streaming: { netflix: true },
    network: 'tvN',
    actors: [
      { name: 'Lee Jin-wook', role: 'Dan Hwal', isLead: true },
      { name: 'Kwon Nara', role: 'Min Sang-un', isLead: true },
      { name: 'Lee Joon', role: 'Ok Eul-tae', isLead: false }
    ],
    matchReasoningHints: [
      'Dark immortal mythology like Interview with the Vampire filtered through Korean folklore',
      'Reincarnation revenge arc mirrors Outlander\'s multi-era emotional weight',
      'Monster learning to love again like Beauty and the Beast but genuinely frightening',
      'Sweeping centuries-long grudge with the gothic atmosphere of The Originals',
      'For fans of Goblin who want a darker, more horror-forward supernatural romance'
    ]
  },

  {
    id: 'arthdal-chronicles',
    title: 'Arthdal Chronicles',
    year: 2019,
    episodes: 18,
    synopsis: 'In the ancient land of Arth, warring tribes, prophesied heroes, and political power struggles play out on an epic scale. Eun-seom, born under a cursed star, rises from slavery to lead a rebellion. Tanya, a woman of mysterious heritage, becomes entangled in palace politics. A sweeping Korean answer to Game of Thrones — myth-making, betrayal, and the birth of civilization itself.',
    genres: ['fantasy', 'historical', 'drama', 'action'],
    themes: ['power', 'destiny', 'civilization', 'rebellion', 'identity', 'sacrifice'],
    tropes: ['chosen-one', 'epic-fantasy', 'political-intrigue', 'reluctant-hero', 'power-struggle', 'prophecy'],
    tone: ['epic', 'dramatic', 'intense', 'adventurous', 'dark'],
    setting: ['ancient', 'fantasy-world', 'tribal', 'palace'],
    characterTypes: ['prophesied-hero', 'scheming-queen', 'tribal-warrior', 'political-mastermind'],
    streaming: { netflix: true },
    network: 'tvN',
    actors: [
      { name: 'Song Joong-ki', role: 'Eun-seom / Saya', isLead: true },
      { name: 'Kim Ji-won', role: 'Tanya', isLead: true },
      { name: 'Jang Dong-gun', role: 'Tagon', isLead: false }
    ],
    matchReasoningHints: [
      'Korea\'s answer to Game of Thrones — ancient civilization, prophecy, and brutal power games',
      'Song Joong-ki playing twin roles mirrors Game of Thrones\' complex character writing',
      'Fantasy world-building with the epic scope of The Lord of the Rings',
      'Palace intrigue and betrayal on par with Rome or Shogun\'s political chess',
      'For Vikings fans craving a non-European ancient world with the same mythic energy'
    ]
  },

  {
    id: 'bride-of-habaek',
    title: 'The Bride of Habaek',
    year: 2017,
    episodes: 16,
    synopsis: 'The water god Habaek descends to the human world to retrieve divine stones — and by ancient prophecy, a human woman named So-ah is destined to serve as his guide. The problem: she\'s a pragmatic psychiatrist drowning in debt who has no patience for gods. A breezy fantasy romance about divine ego clashing with modern cynicism, and the love that sneaks in between.',
    genres: ['fantasy', 'romance', 'comedy', 'drama'],
    themes: ['divine-vs-mortal', 'destiny', 'healing', 'class-divide', 'self-worth'],
    tropes: ['god-meets-human', 'enemies-to-lovers', 'cold-male-lead-warms-up', 'fated-lovers', 'fish-out-of-water'],
    tone: ['lighthearted', 'romantic', 'comedic', 'whimsical', 'bittersweet'],
    setting: ['modern', 'urban', 'supernatural', 'divine-realm'],
    characterTypes: ['arrogant-god', 'pragmatic-female-lead', 'divine-servants', 'mortal-love-interest'],
    streaming: { viki: true, kocowa: true },
    network: 'tvN',
    actors: [
      { name: 'Nam Joo-hyuk', role: 'Habaek', isLead: true },
      { name: 'Shin Se-kyung', role: 'Yoon So-ah', isLead: true },
      { name: 'Im Ju-hwan', role: 'Shin Hoo-ye', isLead: false }
    ],
    matchReasoningHints: [
      'Percy Jackson meets a K-drama — water god discovers modern Seoul is more confusing than ancient wars',
      'Arrogant supernatural being humbled by real life like Thor\'s fish-out-of-water arc',
      'Fated romance with divine mythology, perfect pairing for Goblin and My Love from the Star fans',
      'Slow-burn romance between a god learning humility and a human learning self-worth',
      'Same bittersweet divine-mortal love energy as Touched by an Angel with K-drama charm'
    ]
  },

  {
    id: 'abyss-kdrama',
    title: 'Abyss',
    year: 2019,
    episodes: 16,
    synopsis: 'When two people are murdered on the same night, a magical marble resurrects them — but in new bodies. A lonely prosecutor wakes up as an averagely-looking man. His beautiful neighbor wakes up as a stunning woman. Now she must navigate her new identity while they both investigate who killed them, falling in love along the way despite not recognizing each other at first.',
    genres: ['fantasy', 'mystery', 'romance', 'comedy'],
    themes: ['identity', 'beauty-standards', 'second-chances', 'justice', 'self-discovery'],
    tropes: ['body-swap-adjacent', 'second-chance', 'mystery-couple', 'opposites-attract', 'hidden-identity'],
    tone: ['comedic', 'romantic', 'mysterious', 'lighthearted', 'suspenseful'],
    setting: ['modern', 'urban', 'supernatural'],
    characterTypes: ['awkward-prosecutor', 'transformed-heroine', 'scheming-villain', 'loyal-friend'],
    streaming: { netflix: true, viki: true },
    network: 'OCN',
    actors: [
      { name: 'Park Bo-young', role: 'Cha Min / Go Se-yeon', isLead: true },
      { name: 'Ahn Hyo-seop', role: 'Cha Min', isLead: true }
    ],
    matchReasoningHints: [
      'Identity and beauty explored like Ugly Betty but with a murder mystery spine',
      'Body transformation romance with the warmth of While You Were Sleeping',
      'Mystery-couple dynamic where solving the crime IS the love story',
      'Park Bo-young bringing the same magic as her role in Strong Woman Do Bong-soon',
      'Fantasy premise with real emotional stakes — who are we when our appearance changes?'
    ]
  },

  {
    id: 'jinxed-at-first',
    title: 'Jinxed at First',
    year: 2022,
    episodes: 16,
    synopsis: 'Seul-bi is a woman who brings miraculous good fortune to anyone she touches — but has been locked away from the world by the powerful family that exploits her gift. When she escapes and collides with Gong Soo-kwang, a perpetually unlucky fish vendor, his luck turns around instantly. But freeing her from her gilded cage means going up against the forces that built it.',
    genres: ['fantasy', 'romance', 'comedy'],
    themes: ['freedom', 'fate', 'exploitation', 'healing', 'family'],
    tropes: ['supernatural-ability', 'enemies-to-lovers', 'fish-out-of-water', 'forbidden-connection', 'poor-boy-rich-girl'],
    tone: ['warm', 'comedic', 'romantic', 'lighthearted', 'emotional'],
    setting: ['modern', 'urban', 'supernatural'],
    characterTypes: ['gifted-outcast', 'unlucky-everyman', 'scheming-family', 'loyal-friend'],
    streaming: { netflix: true },
    network: 'KBS',
    actors: [
      { name: 'Na In-woo', role: 'Gong Soo-kwang', isLead: true },
      { name: 'Seohyun', role: 'Seul-bi', isLead: true }
    ],
    matchReasoningHints: [
      'Enchanted-girl-meets-real-world energy like Enchanted but grounded in Korean family dynamics',
      'Supernatural gift as metaphor for exploitation — freeing someone who\'s been used their whole life',
      'Warm rom-com with a Cinderella-escape arc and genuine emotional depth',
      'Luck manipulation premise as fresh as Pushing Daisies\' touch-of-death concept',
      'For Strong Woman Do Bong-soon fans — supernatural ability + sweet romance + comedy'
    ]
  },

  // ── HISTORICAL / SAGEUK ──────────────────────────────────────────────────────

  {
    id: 'six-flying-dragons',
    title: 'Six Flying Dragons',
    year: 2015,
    episodes: 50,
    synopsis: 'Set during the fall of Goryeo and the founding of the Joseon Dynasty, six individuals — idealists, warriors, scholars, and schemers — each pursue their vision of what a new nation should be. Yi Bang-won, the brilliant and ruthless prince who will become Korea\'s Taejong, anchors an epic about power, ideology, and the brutal cost of building a nation from scratch.',
    genres: ['historical', 'drama', 'action', 'politics'],
    themes: ['nation-building', 'power', 'ideology', 'loyalty', 'betrayal', 'sacrifice'],
    tropes: ['epic-scope', 'political-intrigue', 'rival-idealists', 'anti-hero-protagonist', 'dynasty-founding'],
    tone: ['epic', 'intense', 'philosophical', 'dramatic', 'action-packed'],
    setting: ['joseon-founding', 'palace', 'battlefield', '14th-century-korea'],
    characterTypes: ['brilliant-anti-hero', 'idealistic-reformer', 'scheming-strategist', 'loyal-warrior'],
    streaming: { viki: true },
    network: 'SBS',
    actors: [
      { name: 'Yoo Ah-in', role: 'Yi Bang-won', isLead: true },
      { name: 'Kim Myung-min', role: 'Jeong Do-jeon', isLead: true },
      { name: 'Shin Se-kyung', role: 'Boon-yi', isLead: false }
    ],
    matchReasoningHints: [
      'The Crown or Game of Thrones level of political ambition compressed into the founding of Korea',
      'Yi Bang-won is the Korean Richard III — brilliant, ruthless, and utterly riveting',
      'Nation-building ideology battles like Rome or Shogun with real historical weight',
      'Epic 50-episode canvas lets character development breathe like no other sageuk',
      'For fans of Mr. Sunshine and Niall Ferguson\'s empire histories — politics plus sword'
    ]
  },

  {
    id: 'tree-with-deep-roots',
    title: 'Tree with Deep Roots',
    year: 2011,
    episodes: 24,
    synopsis: 'King Sejong the Great is on the verge of completing Hangul — Korea\'s indigenous alphabet that will let commoners read and write for the first time. But someone is assassinating the scholars who helped him create it. A former slave-turned-royal guard investigates the murders while the king races to save his life\'s work and the secret society trying to destroy it.',
    genres: ['historical', 'thriller', 'drama', 'mystery'],
    themes: ['literacy', 'power-of-knowledge', 'justice', 'reform', 'legacy'],
    tropes: ['king-on-a-mission', 'reluctant-hero', 'secret-society', 'conspiracy', 'historical-mystery'],
    tone: ['intense', 'dramatic', 'suspenseful', 'philosophical', 'gripping'],
    setting: ['joseon-era', 'palace', 'urban-hanyang', '15th-century-korea'],
    characterTypes: ['determined-king', 'loyal-guard', 'shadow-organization', 'idealistic-scholars'],
    streaming: { viki: true },
    network: 'SBS',
    actors: [
      { name: 'Han Suk-kyu', role: 'King Sejong', isLead: true },
      { name: 'Jang Hyuk', role: 'Ddol-bok', isLead: true },
      { name: 'Shin Se-kyung', role: 'Dam', isLead: false }
    ],
    matchReasoningHints: [
      'The Da Vinci Code energy — secret society racing to destroy a civilization-changing idea',
      'Real history as thriller: creating the Korean alphabet is a bigger rebellion than any sword fight',
      'King Sejong as a detective king pairs perfectly with fans of The Name of the Rose or Umberto Eco',
      'Power-of-literacy theme makes it resonate like Freedom Writers compressed into palace drama',
      'Perfect gateway sageuk for Western viewers — thriller pacing, real stakes, no required history knowledge'
    ]
  },

  {
    id: 'joseon-attorney',
    title: 'Joseon Attorney: A Morality',
    year: 2023,
    episodes: 16,
    synopsis: 'Kang Han-soo is a sharp-tongued, morally fluid attorney in Joseon who will take any case that pays — until a woman with a grudge against the corrupt official who destroyed her family forces him to reconsider what justice actually means. A slick, witty legal drama in Joseon period dress that plays more like a modern courtroom procedural than a traditional sageuk.',
    genres: ['historical', 'legal', 'comedy', 'drama'],
    themes: ['justice', 'corruption', 'redemption', 'class', 'morality'],
    tropes: ['morally-grey-protagonist', 'enemy-becomes-ally', 'legal-procedural', 'revenge', 'idealism-vs-pragmatism'],
    tone: ['witty', 'dramatic', 'suspenseful', 'warm', 'intense'],
    setting: ['joseon-era', 'court', 'marketplace', 'palace-adjacent'],
    characterTypes: ['roguish-attorney', 'determined-avenger', 'corrupt-noble', 'idealistic-junior'],
    streaming: { viki: true },
    network: 'MBC',
    actors: [
      { name: 'Woo Do-hwan', role: 'Kang Han-soo', isLead: true },
      { name: 'Bona', role: 'Yoo Ji-sun', isLead: true }
    ],
    matchReasoningHints: [
      'Suits in Joseon robes — morally flexible lawyer meets a case that makes him care',
      'Legal wit and repartee like The Good Wife but set in 18th-century Korea',
      'Corruption-fighting legal underdog energy like To Kill a Mockingbird in Korean historical dress',
      'Woo Do-hwan\'s charming rogue is the Joseon answer to Harvey Specter',
      'Perfect for Extraordinary Attorney Woo fans wanting the same sharp legal drama in a historical setting'
    ]
  },

  {
    id: 'my-dearest',
    title: 'My Dearest',
    year: 2023,
    episodes: 20,
    synopsis: 'Set during the Manchu invasion of 1636, Gil Chae is a noblewoman obsessed with marrying well — until she crosses paths with Jang Hyun, an enigmatic man of mysterious origins who saves her life and ruins all her plans. Separated by war, they find their way back to each other across a peninsula torn apart by conquest. One of the most acclaimed historical romances of the decade.',
    genres: ['historical', 'romance', 'drama', 'war'],
    themes: ['war', 'survival', 'love', 'identity', 'sacrifice', 'separation'],
    tropes: ['wartime-romance', 'reluctant-lovers', 'separation-reunion', 'mysterious-male-lead', 'forbidden-love'],
    tone: ['epic', 'romantic', 'emotional', 'dramatic', 'bittersweet'],
    setting: ['joseon-era', 'war', 'manchu-invasion', '17th-century-korea'],
    characterTypes: ['spirited-noblewoman', 'mysterious-protector', 'steadfast-husband', 'scheming-nobles'],
    streaming: { amazon_prime: true },
    network: 'MBC',
    actors: [
      { name: 'Nam Goong-min', role: 'Jang Hyun', isLead: true },
      { name: 'Ahn Eun-jin', role: 'Gil Chae', isLead: true }
    ],
    matchReasoningHints: [
      'Outlander\'s wartime separation and reunion arc transplanted to 17th-century Korea',
      'Beautifully shot historical epic with the emotional devastation of Atonement',
      'Nam Goong-min\'s performance is a career-best — complex, protective, and heartbreaking',
      'War romance with the scope of The English Patient and the warmth of a Korean epic',
      'For Moon Lovers: Scarlet Heart Ryeo fans who want the same emotional ambition with a satisfying story'
    ]
  },

  {
    id: 'rookie-historian',
    title: 'Rookie Historian Goo Hae-ryung',
    year: 2019,
    episodes: 40,
    synopsis: 'Goo Hae-ryung becomes one of the first female royal historians in Joseon — a role so scandalous that the king\'s advisors lose their minds over it. She\'s assigned to chronicle the reclusive prince who secretly writes romance novels under a pen name. Breezy and witty, this sageuk is as much about the absurdity of institutional sexism as it is about the slow-burn romance between two people who discover they\'ve been reading each other\'s writing for years.',
    genres: ['historical', 'romance', 'comedy', 'drama'],
    themes: ['gender-equality', 'intellectual-freedom', 'identity', 'bureaucracy', 'love'],
    tropes: ['slow-burn', 'first-female-lead', 'secret-identity', 'enemies-to-lovers', 'pen-pal-romance'],
    tone: ['comedic', 'warm', 'romantic', 'witty', 'lighthearted'],
    setting: ['joseon-era', 'palace', 'royal-archive'],
    characterTypes: ['pioneering-female-scholar', 'reclusive-prince', 'conservative-officials', 'loyal-female-colleagues'],
    streaming: { netflix: true },
    network: 'MBC',
    actors: [
      { name: 'Shin Se-kyung', role: 'Goo Hae-ryung', isLead: true },
      { name: 'Cha Eun-woo', role: 'Yi Rim', isLead: true }
    ],
    matchReasoningHints: [
      'The Crown meets a workplace comedy — first woman in a royal boys\' club',
      'Secret pen-pal romance like You\'ve Got Mail but set in Joseon with period-appropriate stakes',
      'Smart feminist historical drama that dismantles sexism with wit rather than speeches',
      'Cha Eun-woo as a romance-novel-writing prince is the best character premise in recent sageuk',
      'For fans of Coffee Prince who want the same gender-convention-breaking dynamic in a historical setting'
    ]
  },

  // ── COMEDY ──────────────────────────────────────────────────────────────────

  {
    id: 'one-dollar-lawyer',
    title: 'One Dollar Lawyer',
    year: 2022,
    episodes: 12,
    synopsis: 'Cheon Ji-hoon is a hotshot attorney who takes cases for exactly one dollar — representing poor clients big law firms ignore. His signature moves: sunglasses, attitude, and a courtroom style so unorthodox it should be illegal. When a rookie attorney with sharp instincts joins forces with him, they take on corruption that the establishment desperately wants buried. Legal drama that doesn\'t take itself seriously and wins because of it.',
    genres: ['legal', 'comedy', 'drama'],
    themes: ['justice-for-the-little-guy', 'corruption', 'mentorship', 'legal-system'],
    tropes: ['eccentric-genius', 'mentor-mentee', 'underdog-lawyer', 'corruption-buster', 'odd-couple'],
    tone: ['witty', 'comedic', 'exciting', 'action-packed', 'fun'],
    setting: ['modern', 'courtroom', 'urban'],
    characterTypes: ['flamboyant-genius-lawyer', 'earnest-rookie', 'corrupt-establishment', 'underdog-clients'],
    streaming: { netflix: true },
    network: 'SBS',
    actors: [
      { name: 'Namkoong Min', role: 'Cheon Ji-hoon', isLead: true },
      { name: 'Kim Ji-eun', role: 'Baek Mari', isLead: true }
    ],
    matchReasoningHints: [
      'Better Call Saul if Saul was actually the hero and the show embraced the absurdity fully',
      'The Good Fight\'s righteous fire meets the slapstick energy of Brooklyn Nine-Nine',
      'One-dollar fee as anti-capitalist legal rebellion — fresh concept executed brilliantly',
      'Namkoong Min is magnetic in a role that could only exist in K-drama',
      'For Extraordinary Attorney Woo fans who want the same underdogs-winning energy with more laughs'
    ]
  },

  {
    id: 'work-later-drink-now',
    title: 'Work Later, Drink Now',
    year: 2021,
    episodes: 12,
    synopsis: 'Three women with completely different careers and personalities have one thing in common: they need a drink at the end of the day. Ahn So-hee is a fitness influencer keeping secrets, Han Ji-yeon is a documentary PD burning out fast, and Kang Buk-soon is a cheerful screenwriter navigating chaotic relationships. Their friendship — built around midnight drinking sessions — is the warmth that makes everything else survivable.',
    genres: ['comedy', 'drama', 'romance', 'slice-of-life'],
    themes: ['female-friendship', 'work-life-balance', 'self-discovery', 'burnout', 'career'],
    tropes: ['found-family', 'girl-squad', 'workplace-stress', 'slice-of-life-friendship', 'drinking-bonding'],
    tone: ['warm', 'comedic', 'heartfelt', 'relatable', 'feel-good'],
    setting: ['modern', 'urban', 'workplace', 'neighborhood-bar'],
    characterTypes: ['burned-out-professional', 'successful-but-hollow', 'cheerful-disaster', 'loyal-friend-group'],
    streaming: { viki: true },
    network: 'JTBC',
    actors: [
      { name: 'Lee Sun-bin', role: 'Ahn So-hee', isLead: true },
      { name: 'Han Sun-hwa', role: 'Han Ji-yeon', isLead: true },
      { name: 'Jung Eun-ji', role: 'Kang Buk-soon', isLead: true }
    ],
    matchReasoningHints: [
      'Sex and the City energy but they talk about work stress instead of dating — equally honest',
      'Broad City\'s friendship-first comedy DNA in a Korean professional setting',
      'Female friendship drama like Fleabag in that it\'s funny and real and occasionally devastating',
      'The drinking scenes are the emotional core — vulnerability unlocked one glass at a time',
      'Perfect for fans of Hospital Playlist who loved the group dynamic more than the hospital plots'
    ]
  },

  {
    id: 'a-good-day-to-be-a-dog',
    title: 'A Good Day to Be a Dog',
    year: 2023,
    episodes: 16,
    synopsis: 'Han Hae-na has a family curse: if she kisses someone, she transforms into a dog until she gets another kiss from the same person to break the spell. This is a problem when she accidentally kisses the one teacher at school who is absolutely terrified of dogs. A delightfully absurd fantasy premise executed with charm and genuine heart.',
    genres: ['fantasy', 'romance', 'comedy'],
    themes: ['family-curse', 'fear', 'trust', 'identity', 'acceptance'],
    tropes: ['magical-curse', 'enemies-to-lovers', 'body-transformation', 'reluctant-partnership', 'cute-fantasy-premise'],
    tone: ['comedic', 'warm', 'lighthearted', 'romantic', 'whimsical'],
    setting: ['modern', 'school', 'supernatural'],
    characterTypes: ['cursed-heroine', 'dog-phobic-hero', 'supportive-ghost-friend', 'scheming-rival'],
    streaming: { disney_plus: true },
    network: 'MBC',
    actors: [
      { name: 'Park Gyu-young', role: 'Han Hae-na', isLead: true },
      { name: 'Cha Eun-woo', role: 'Jin Seo-won', isLead: true }
    ],
    matchReasoningHints: [
      'Enchanted\'s silly premise with genuine romantic chemistry — impossible not to smile',
      'The transformation curse creates actual comedy stakes that most rom-coms lack',
      'School workplace romance with a supernatural twist that pairs perfectly with Touch Your Heart',
      'Cha Eun-woo plays fear-of-dogs with such commitment it elevates a comedy into something sweet',
      'For My Roommate Is a Gumiho fans who want fantasy rom-com with a brand-new creature premise'
    ]
  },

  {
    id: 'delightfully-deceitful',
    title: 'Delightfully Deceitful',
    year: 2023,
    episodes: 16,
    synopsis: 'Lee Ro-um is a talented con artist with zero empathy — it\'s not a choice, it\'s a neurological condition. Han Moo-young is a hot-headed defense attorney who hires her to help him take down a corrupt prosecutor. Together they run elaborate cons on the people who deserve it, while something uncomfortable and unexpected grows between them. K-drama\'s sharpest exploration of empathy, manipulation, and what it means to feel.',
    genres: ['drama', 'comedy', 'romance', 'crime'],
    themes: ['empathy', 'manipulation', 'justice', 'self-discovery', 'moral-ambiguity'],
    tropes: ['con-artist', 'odd-couple', 'morally-grey-female-lead', 'reluctant-partnership', 'enemies-to-lovers'],
    tone: ['witty', 'sharp', 'comedic', 'dramatic', 'emotionally-complex'],
    setting: ['modern', 'urban', 'legal-world', 'underground'],
    characterTypes: ['empathy-free-con-artist', 'passionate-attorney', 'corrupt-authority', 'unlikely-team'],
    streaming: { amazon_prime: true },
    network: 'MBC',
    actors: [
      { name: 'Chun Woo-hee', role: 'Lee Ro-um', isLead: true },
      { name: 'Kim Dong-wook', role: 'Han Moo-young', isLead: true }
    ],
    matchReasoningHints: [
      'Hustle meets K-drama — elaborate cons with emotional consequences',
      'White Collar\'s charming criminal energy with Fleabag\'s unsettling emotional honesty',
      'The Catch\'s con-artist-meets-investigator dynamic elevated by Korean emotional depth',
      'Chun Woo-hee\'s zero-empathy performance is career-defining — terrifying and sympathetic at once',
      'For fans of Vincenzo who want the same morally-complex protagonist but with more psychological edge'
    ]
  },

  {
    id: 'good-casting',
    title: 'Good Casting',
    year: 2020,
    episodes: 16,
    synopsis: 'Three female NIS agents who\'ve been sidelined for various embarrassing failures are given one last shot at redemption: go undercover at a tech company suspected of leaking national secrets. They\'re not exactly top-tier spies anymore — one hasn\'t been in the field in years, another can\'t stop being a mother first — but what they lack in polish they make up for in sheer determination and deeply inconvenient feelings for their targets.',
    genres: ['action', 'comedy', 'romance', 'drama'],
    themes: ['female-empowerment', 'second-chances', 'teamwork', 'espionage', 'work-life-balance'],
    tropes: ['female-spy-team', 'undercover-romance', 'fish-out-of-water', 'found-family', 'spy-comedy'],
    tone: ['comedic', 'action-packed', 'warm', 'fun', 'lighthearted'],
    setting: ['modern', 'undercover', 'corporate', 'spy'],
    characterTypes: ['sidelined-agents', 'corporate-targets', 'female-spy-trio', 'oblivious-love-interest'],
    streaming: { viki: true },
    network: 'MBC',
    actors: [
      { name: 'Choi Kang-hee', role: 'Baek Chan-mi', isLead: true },
      { name: 'Kim Ji-young', role: 'Im Ae-ryun', isLead: true },
      { name: 'Yoo In-young', role: 'Hwang Mi-soon', isLead: true }
    ],
    matchReasoningHints: [
      'Spy Girls meets The Heat — female agents who are gloriously imperfect at their jobs',
      'Spy comedy with the warm ensemble energy of Brooklyn Nine-Nine\'s precinct team',
      'Undercover romance where the mission keeps getting derailed by actual human feelings',
      'Spy Kids for adults who miss the Cold War comedy of The Americans',
      'For Strong Woman Do Bong-soon fans who want an ensemble female-led action-comedy'
    ]
  },

  // ── SLICE-OF-LIFE ────────────────────────────────────────────────────────────

  {
    id: 'midnight-romance-in-hagwon',
    title: 'Midnight Romance in Hagwon',
    year: 2024,
    episodes: 12,
    synopsis: 'Seo Hye-jin is a legendary test-prep English instructor at Korea\'s most prestigious cram school. When a younger, talented male instructor joins the faculty and they start collaborating on midnight lectures, what begins as professional respect becomes something harder to categorize. A quiet, adult romance about people who are very good at their jobs finding someone who sees them clearly.',
    genres: ['romance', 'drama', 'slice-of-life'],
    themes: ['professional-respect', 'adult-romance', 'ambition', 'burnout', 'being-seen'],
    tropes: ['workplace-romance', 'slow-burn', 'older-woman-younger-man', 'professional-rivals', 'quiet-love-story'],
    tone: ['warm', 'quiet', 'romantic', 'mature', 'grounded'],
    setting: ['modern', 'cram-school', 'urban', 'late-night-workplace'],
    characterTypes: ['accomplished-female-lead', 'earnest-younger-colleague', 'driven-perfectionist', 'loyal-support-staff'],
    streaming: { netflix: true },
    network: 'ENA',
    actors: [
      { name: 'Jung Ryeo-won', role: 'Seo Hye-jin', isLead: true },
      { name: 'Wi Ha-jun', role: 'Lee Joon-ho', isLead: true }
    ],
    matchReasoningHints: [
      'Normal People\'s quiet intensity of two smart people slowly, inevitably falling for each other',
      'Adult workplace romance with the texture of real professional life — no melodrama, just feels',
      'Wi Ha-jun following Squid Game with a role that proves he\'s a leading man',
      'Cram school setting is a window into Korean education pressure that makes the romance feel earned',
      'For My Mister fans who want the same emotional maturity and workplace realism in romance form'
    ]
  },

  {
    id: 'hello-me-kdrama',
    title: 'Hello, Me!',
    year: 2021,
    episodes: 16,
    synopsis: 'Han Yoo-hyun is 37, broke, exhausted, and completely adrift — her bright, ambitious 17-year-old self would be horrified. When that 17-year-old actually shows up from the past, they must coexist in the present while older Yoo-hyun rediscovers what she actually wants from her life. A gentle, funny, often tearful letter to the younger version of yourself you left behind.',
    genres: ['fantasy', 'comedy', 'drama', 'slice-of-life'],
    themes: ['self-discovery', 'regret', 'second-chances', 'identity', 'adulthood'],
    tropes: ['time-travel', 'younger-self', 'slice-of-life', 'rediscovery', 'workplace-comedy'],
    tone: ['warm', 'comedic', 'heartfelt', 'nostalgic', 'emotional'],
    setting: ['modern', 'urban', 'workplace', 'supernatural'],
    characterTypes: ['burnt-out-adult', 'energetic-teen-self', 'supportive-neighbor', 'workplace-cast'],
    streaming: { netflix: true },
    network: 'KBS',
    actors: [
      { name: 'Choi Kang-hee', role: 'Han Yoo-hyun (37)', isLead: true },
      { name: 'Lee Re', role: 'Han Yoo-hyun (17)', isLead: true },
      { name: 'Kim Young-kwang', role: 'Anthony', isLead: false }
    ],
    matchReasoningHints: [
      'Big\'s emotional premise (body/time dislocation) as a letter to your younger self',
      'About Time\'s bittersweet time-travel reflections grounded in Korean work-life reality',
      'What would you tell 17-year-old you? The answer gets funnier and sadder than you expect',
      'Slice-of-life warmth like Reply 1988 but pointed at the present, not nostalgia',
      'For Twenty-Five Twenty-One fans who want the same bittersweet idealism-vs-reality tension'
    ]
  },

  {
    id: 'oh-my-ghostess',
    title: 'Oh My Ghostess',
    year: 2015,
    episodes: 16,
    synopsis: 'Bong-sun is a timid sous chef who can barely speak to her celebrity chef boss, let alone confess her feelings. When a lusty virgin ghost possesses her body to resolve her unfinished earthly business, suddenly Bong-sun is bold, flirtatious, and completely transformed. A warm, funny show about confidence, identity, and the complicated question of who exactly is falling in love with whom.',
    genres: ['fantasy', 'romance', 'comedy', 'drama'],
    themes: ['confidence', 'identity', 'possession', 'self-worth', 'desire', 'unfinished-business'],
    tropes: ['ghost-possession', 'body-swap-adjacent', 'workplace-romance', 'shy-female-lead', 'love-triangle-within-one-body'],
    tone: ['comedic', 'romantic', 'warm', 'lighthearted', 'emotionally-surprising'],
    setting: ['modern', 'restaurant', 'urban', 'supernatural'],
    characterTypes: ['shy-cook', 'brash-ghost', 'celebrity-chef', 'earnest-police-ghost-detective'],
    streaming: { netflix: true, viki: true },
    network: 'tvN',
    actors: [
      { name: 'Park Bo-young', role: 'Na Bong-sun / Soon-ae', isLead: true },
      { name: 'Jo Jung-suk', role: 'Kang Sun-woo', isLead: true },
      { name: 'Kim Seul-gi', role: 'Lee Soon-ae (Ghost)', isLead: false }
    ],
    matchReasoningHints: [
      'Romy and Michele meets Ghost — but funnier and with better food photography',
      'The possession premise creates a love triangle within one body that pays off emotionally',
      'Park Bo-young playing two opposite personalities is a master class in comedic range',
      'Restaurant setting with the warm food-as-love energy of Chef\'s Table plus romance',
      'For Because This Is My First Life fans who want the same character depth with more supernatural fun'
    ]
  },

  {
    id: 'warm-and-cozy',
    title: 'Warm and Cozy',
    year: 2015,
    episodes: 16,
    synopsis: 'Lee Jung-joo moves to Jeju Island after her life in Seoul falls apart and, through a series of improbable events, ends up co-owning a seaside restaurant with Baek Gun-woo — a grumpy man who didn\'t ask for a business partner and makes sure she knows it. A breezy, sun-soaked slice-of-life romance about starting over somewhere beautiful with someone who drives you crazy.',
    genres: ['romance', 'comedy', 'slice-of-life', 'drama'],
    themes: ['new-beginnings', 'rural-life', 'healing', 'community', 'unexpected-partnership'],
    tropes: ['enemies-to-lovers', 'reluctant-business-partners', 'small-town-romance', 'healing-love', 'quirky-community'],
    tone: ['warm', 'cozy', 'lighthearted', 'romantic', 'slow-paced'],
    setting: ['jeju-island', 'seaside', 'restaurant', 'rural'],
    characterTypes: ['fish-out-of-water-heroine', 'grumpy-local', 'quirky-islanders', 'supportive-community'],
    streaming: { viki: true },
    network: 'MBC',
    actors: [
      { name: 'Yoo Yeon-seok', role: 'Baek Gun-woo', isLead: true },
      { name: 'Kang Sora', role: 'Lee Jung-joo', isLead: true }
    ],
    matchReasoningHints: [
      'Schitt\'s Creek\'s "city person discovers warmth in a small community" arc — same cozy energy',
      'Jeju Island is one of the most beautiful settings in K-drama history, shot like a travel film',
      'Enemies-to-lovers with the leisurely pacing of a Sunday afternoon — no rush, all warmth',
      'Business-partners-become-lovers dynamics like Northern Exposure or Hart of Dixie',
      'Perfect comfort watch after a heavy show — Warm and Cozy delivers exactly what the title promises'
    ]
  },

  {
    id: 'record-of-youth',
    title: 'Record of Youth',
    year: 2020,
    episodes: 16,
    synopsis: 'Sa Hye-jun is a model grinding to become an actor while his wealthy family expects him to give up. Ahn Jeong-ha is a makeup artist who pours everything into her craft. When their worlds collide, their relationship unfolds in real-time against the backdrop of the Korean entertainment industry — a nuanced, low-key portrait of ambition, compromise, and the gap between who you want to be and who you are at 25.',
    genres: ['drama', 'romance', 'slice-of-life'],
    themes: ['ambition', 'youth', 'entertainment-industry', 'family-pressure', 'self-actualization', 'class'],
    tropes: ['slow-burn', 'celebrity-romance', 'coming-of-age', 'industry-insider', 'realistic-relationship'],
    tone: ['grounded', 'quiet', 'romantic', 'bittersweet', 'hopeful'],
    setting: ['modern', 'entertainment-industry', 'urban', 'behind-the-scenes'],
    characterTypes: ['aspiring-actor', 'dedicated-makeup-artist', 'difficult-family', 'industry-rivals'],
    streaming: { netflix: true },
    network: 'tvN',
    actors: [
      { name: 'Park Bo-gum', role: 'Sa Hye-jun', isLead: true },
      { name: 'Park So-dam', role: 'Ahn Jeong-ha', isLead: true },
      { name: 'Byeon Woo-seok', role: 'Won Hae-hyo', isLead: false }
    ],
    matchReasoningHints: [
      'La La Land\'s honest take on artistic ambition and what love costs when careers compete',
      'Behind the Candelabra-level industry honesty about what fame actually requires to build',
      'Romance between two creatives trying to make it — real and unromantic in all the right ways',
      'Park Bo-gum and Park So-dam bring understated chemistry that rewards patient viewers',
      'For Start-Up fans who want the same industry-ambition backdrop with a quieter, more grounded romance'
    ]
  },

  // ── HORROR ───────────────────────────────────────────────────────────────────

  {
    id: 'strangers-from-hell',
    title: 'Strangers from Hell',
    year: 2019,
    episodes: 10,
    synopsis: 'Jong-woo moves from his hometown to Seoul on a budget and takes the only room he can afford: a goshiwon (cramped boarding house) where the residents are deeply, unsettlingly strange. His dentist neighbor is too friendly. Someone keeps leaving disturbing notes. And the walls between rooms are very, very thin. A slow-burn psychological horror that weaponizes Seoul\'s housing crisis into pure dread.',
    genres: ['horror', 'thriller', 'psychological'],
    themes: ['isolation', 'paranoia', 'urban-anxiety', 'poverty', 'predatory-kindness'],
    tropes: ['unreliable-environment', 'too-friendly-neighbor', 'urban-horror', 'slow-reveal', 'psychological-deterioration'],
    tone: ['unsettling', 'claustrophobic', 'dark', 'tense', 'deeply-disturbing'],
    setting: ['modern', 'goshiwon', 'urban-seoul', 'claustrophobic'],
    characterTypes: ['ordinary-man-in-wrong-place', 'charming-predator', 'suspicious-residents', 'unraveling-mind'],
    streaming: { netflix: true },
    network: 'OCN',
    actors: [
      { name: 'Im Si-wan', role: 'Yoon Jong-woo', isLead: true },
      { name: 'Lee Dong-wook', role: 'Seo Moon-jo', isLead: true }
    ],
    matchReasoningHints: [
      'Rosemary\'s Baby\'s building-horror anxiety in modern Seoul, played with utter commitment',
      'Lee Dong-wook as a charming dentist-predator is the most unsettling villain in K-drama',
      'Hannibal\'s intelligent-monster energy compressed into 10 episodes of pure dread',
      'Housing crisis horror — goshiwon as psychological pressure chamber, not haunted house',
      'Perfect for fans of The Haunting of Hill House who want isolated human horror over ghosts'
    ]
  },

  {
    id: 'the-guest-kdrama',
    title: 'The Guest',
    year: 2018,
    episodes: 16,
    synopsis: 'Twenty years ago, a demonic entity called Park Il-do possessed a man and committed a massacre. Three survivors — a shaman woman, a priest, and a detective — each carry the demon\'s mark without knowing it. When the possessions begin again, they must find each other and stop a force that has been biding its time for two decades. K-drama\'s most viscerally frightening supernatural horror series.',
    genres: ['horror', 'thriller', 'supernatural', 'mystery'],
    themes: ['possession', 'trauma', 'faith', 'family', 'demonic-evil', 'survivor-guilt'],
    tropes: ['possession-horror', 'three-linked-strangers', 'detective-shaman-priest-trio', 'generational-horror', 'reluctant-alliance'],
    tone: ['terrifying', 'dark', 'atmospheric', 'intense', 'devastating'],
    setting: ['modern', 'supernatural', 'urban', 'dark-korean-underbelly'],
    characterTypes: ['powerful-shaman', 'conflicted-priest', 'haunted-detective', 'demonic-entity'],
    streaming: { viki: true },
    network: 'OCN',
    actors: [
      { name: 'Kim Dong-wook', role: 'Choi Yoon', isLead: true },
      { name: 'Kim Jae-wook', role: 'Father Gil', isLead: true },
      { name: 'Jung Eun-chae', role: 'Kang Ki-hee', isLead: true }
    ],
    matchReasoningHints: [
      'The Exorcist meets True Detective — possession horror with a procedural detective spine',
      'Shaman-priest-detective trinity is the most original monster-hunting team in K-drama',
      'Hereditary-level family horror woven into the supernatural thriller format',
      'Kim Jae-wook playing a conflicted priest is a masterclass in restrained horror acting',
      'For Kingdom fans who want K-drama horror without zombies — pure supernatural dread'
    ]
  },

  {
    id: 'the-silent-sea',
    title: 'The Silent Sea',
    year: 2021,
    episodes: 8,
    synopsis: 'In a future where Earth\'s water supply has almost completely dried up, an elite team is dispatched to retrieve a mysterious sample from an abandoned lunar research station. What they find there — the reason the station was abandoned — is more dangerous than anything they were briefed on. Eight tight episodes of space sci-fi horror with a deeply human question at its center: how far will humanity go to survive?',
    genres: ['sci-fi', 'horror', 'thriller'],
    themes: ['survival', 'water-scarcity', 'ethics-of-science', 'sacrifice', 'cover-up'],
    tropes: ['abandoned-facility', 'found-horror', 'mystery-sample', 'dysfunctional-team', 'government-conspiracy'],
    tone: ['tense', 'atmospheric', 'dark', 'claustrophobic', 'scientific'],
    setting: ['moon', 'space', 'research-station', 'dystopian-near-future'],
    characterTypes: ['scientist-heroine', 'conflicted-military-leader', 'disposable-crew', 'horrifying-discovery'],
    streaming: { netflix: true },
    network: 'Netflix',
    actors: [
      { name: 'Bae Doona', role: 'Dr. Song Ji-an', isLead: true },
      { name: 'Gong Yoo', role: 'Han Yoon-jae', isLead: true },
      { name: 'Lee Joon', role: 'Ryoo Tae-seok', isLead: false }
    ],
    matchReasoningHints: [
      'Alien\'s abandoned-facility horror + Arrival\'s scientific mystery on the moon',
      'Interstellar\'s water-scarcity Earth context with the claustrophobic tension of The Thing',
      'Bae Doona and Gong Yoo together is the K-drama equivalent of a prestige HBO sci-fi casting',
      'Eight-episode format means zero fat — pure tension from first scene to devastating finale',
      'For Kingdom fans who want the same K-drama production quality and genre ambition, now in space'
    ]
  },

  // ── SCI-FI ───────────────────────────────────────────────────────────────────

  {
    id: 'tunnel-kdrama',
    title: 'Tunnel',
    year: 2017,
    episodes: 16,
    synopsis: 'Detective Park Gwang-ho is chasing a serial killer in 1986 when he stumbles through a tunnel and emerges in 2017. The serial killer\'s case is still open. His daughter — who was just born — is now a criminology professor. He must adapt to an incomprehensible present while solving a decades-old case alongside a detective who was his friend\'s son and a professor who is somehow his little girl. Time-travel crime with real emotional stakes.',
    genres: ['sci-fi', 'crime', 'thriller', 'drama'],
    themes: ['time-travel', 'father-daughter', 'justice', 'serial-killer', 'generational-mystery'],
    tropes: ['time-travel', 'fish-out-of-water', 'cold-case', 'detective-from-the-past', 'family-reunion'],
    tone: ['gripping', 'emotional', 'tense', 'dramatic', 'bittersweet'],
    setting: ['1986-korea', '2017-korea', 'police', 'modern-vs-past'],
    characterTypes: ['detective-out-of-time', 'modern-detective-son-figure', 'criminology-professor-daughter', 'cold-case-killer'],
    streaming: { viki: true, amazon_prime: true },
    network: 'OCN',
    actors: [
      { name: 'Choi Jin-hyuk', role: 'Park Gwang-ho', isLead: true },
      { name: 'Yoon Hyun-min', role: 'Kim Sun-jae', isLead: true },
      { name: 'Lee Yoo-young', role: 'Shin Jae-yi', isLead: true }
    ],
    matchReasoningHints: [
      'Life on Mars\' detective-out-of-time premise executed with Korean crime drama precision',
      'Father accidentally meets his grown daughter in the future — the emotional devastation hits hard',
      'Cold case across 30 years mirrors True Detective Season 1\'s multigenerational crime structure',
      'Time travel that\'s about family grief, not paradoxes — refreshingly human sci-fi',
      'For Signal fans who loved the time-bridging detective drama but want the emotional stakes even higher'
    ]
  },

  {
    id: 'dr-brain',
    title: 'Dr. Brain',
    year: 2021,
    episodes: 6,
    synopsis: 'Ko Sewon is a neuroscientist who developed the technology to sync his brain with the recently deceased — absorbing their memories and emotions to solve mysteries. When his own family is killed in what appears to be a random accident, he uses his own technology to find the truth. Six technically audacious episodes that blur the line between memory, identity, and grief in ways no other show has attempted.',
    genres: ['sci-fi', 'mystery', 'thriller', 'drama'],
    themes: ['grief', 'memory', 'identity', 'ethics-of-science', 'family', 'truth'],
    tropes: ['brain-sync', 'grieving-scientist', 'unreliable-memory', 'personal-case', 'technology-as-horror'],
    tone: ['cerebral', 'dark', 'emotional', 'visually-inventive', 'intense'],
    setting: ['near-future', 'laboratory', 'urban-korea', 'inside-the-mind'],
    characterTypes: ['genius-grieving-scientist', 'dead-wife', 'investigator', 'corporate-conspiracy'],
    streaming: { apple_tv: true },
    network: 'Apple TV+',
    actors: [
      { name: 'Lee Sun-kyun', role: 'Ko Sewon', isLead: true },
      { name: 'Lee Yoo-young', role: 'Lim Jae-yi', isLead: true }
    ],
    matchReasoningHints: [
      'Eternal Sunshine of the Spotless Mind meets Black Mirror — memory-tech as grief processing',
      'Inception-style visual inventiveness channeled into a personal murder mystery',
      'Lee Sun-kyun (Parasite) carries the entire show on his grief in a landmark performance',
      'Apple TV+ production quality — this looks and sounds like a feature film in six chapters',
      'For Memories of the Alhambra fans who want tech-mystery with raw emotional devastation instead of romance'
    ]
  },

  // ── MEDICAL ──────────────────────────────────────────────────────────────────

  {
    id: 'good-doctor-kdrama',
    title: 'Good Doctor',
    year: 2013,
    episodes: 20,
    synopsis: 'Park Si-on is a surgical resident with autism and savant syndrome — an extraordinary visual memory and surgical instinct that should make him a brilliant doctor, except that the hospital board would rather he didn\'t exist. A warm, quietly devastating drama about a man who has to fight every day just to be allowed to help people, adapted into a US series (ABC\'s The Good Doctor) that ran for eight seasons.',
    genres: ['medical', 'drama'],
    themes: ['disability', 'inclusion', 'medicine', 'bureaucracy', 'empathy', 'belonging'],
    tropes: ['savant-protagonist', 'institutional-obstacles', 'found-family-at-work', 'mentor-defender', 'proving-yourself'],
    tone: ['warm', 'emotional', 'inspirational', 'sometimes-heartbreaking', 'hopeful'],
    setting: ['hospital', 'modern', 'surgical-ward'],
    characterTypes: ['savant-doctor', 'protective-mentor', 'resistant-establishment', 'empathetic-colleague'],
    streaming: { amazon_prime: true, viki: true },
    network: 'KBS',
    actors: [
      { name: 'Joo Won', role: 'Park Si-on', isLead: true },
      { name: 'Moon Chae-won', role: 'Cha Yoon-seo', isLead: true },
      { name: 'Joo Sang-wook', role: 'Kim Do-han', isLead: false }
    ],
    matchReasoningHints: [
      'The original Good Doctor — this is what ABC adapted into 8 seasons; see where it started',
      'House M.D.\'s diagnosis intensity with the emotional warmth of Call the Midwife',
      'Neurodiversity representation that respects both the gift and the difficulty without sentimentality',
      'Surgical precision scenes that rival Grey\'s Anatomy\'s OR drama at its best',
      'For Hospital Playlist fans who want the same found-family medical warmth with a more dramatic spine'
    ]
  },

  {
    id: 'hospital-ship',
    title: 'Hospital Ship',
    year: 2017,
    episodes: 40,
    synopsis: 'Song Eun-jae is a brilliant but arrogant Seoul surgeon reassigned to a hospital ship serving remote island communities — patients who have no other access to medical care. Kwon Hyuk-chan is the kind, experienced general practitioner who has given years of his life to this work. A slow-burn medical romance that takes the "doctor who learns humility" trope seriously, set against the stunning Korean coastline.',
    genres: ['medical', 'romance', 'drama'],
    themes: ['rural-medicine', 'humility', 'service', 'healing', 'community'],
    tropes: ['arrogant-doctor-learns-humility', 'workplace-romance', 'fish-out-of-water', 'slow-burn', 'mentor-romance'],
    tone: ['warm', 'romantic', 'emotional', 'grounded', 'heartfelt'],
    setting: ['hospital-ship', 'island-communities', 'coastal-korea', 'remote-medicine'],
    characterTypes: ['arrogant-city-surgeon', 'dedicated-rural-doctor', 'island-patients', 'ship-crew-family'],
    streaming: { viki: true },
    network: 'MBC',
    actors: [
      { name: 'Ha Ji-won', role: 'Song Eun-jae', isLead: true },
      { name: 'Kang Min-hyuk', role: 'Kwon Hyuk-chan', isLead: true }
    ],
    matchReasoningHints: [
      'Doc Martin\'s reluctant-city-doctor-in-rural-community premise with K-drama romance warmth',
      'Northern Exposure\'s outsider-finds-community arc set on a hospital ship with gorgeous coastal scenery',
      'Ha Ji-won proves she\'s as good at quiet medicine drama as she is at historical action',
      'Remote island medicine gives every case stakes you don\'t get in a Seoul hospital drama',
      'For Hometown Cha-Cha-Cha fans who want the same community warmth with a medical procedural layer'
    ]
  },

  {
    id: 'emergency-couple',
    title: 'Emergency Couple',
    year: 2014,
    episodes: 21,
    synopsis: 'Oh Chang-min and Oh Jin-hee were married, had a spectacular implosion, and divorced. Six years later, they\'re both starting medical residencies at the same hospital. In the same ER. Under the same supervising doctor. A comedy of compulsory coexistence that slowly, reluctantly excavates why they fell apart — and whether the people they\'ve become can actually make it work this time.',
    genres: ['medical', 'comedy', 'romance', 'drama'],
    themes: ['second-chances', 'divorce', 'regret', 'professional-growth', 'forgiveness'],
    tropes: ['second-chance-romance', 'forced-proximity', 'divorced-couple-reunited', 'workplace-rivals', 'slow-rekindling'],
    tone: ['comedic', 'romantic', 'warm', 'dramatic', 'emotionally-complex'],
    setting: ['hospital', 'ER', 'modern', 'residency-program'],
    characterTypes: ['competitive-ex-spouses', 'stern-chief-resident', 'hospital-ensemble', 'charming-rival-love-interest'],
    streaming: { viki: true },
    network: 'tvN',
    actors: [
      { name: 'Choi Jin-hyuk', role: 'Oh Chang-min', isLead: true },
      { name: 'Song Ji-hyo', role: 'Oh Jin-hee', isLead: true }
    ],
    matchReasoningHints: [
      'Grey\'s Anatomy\'s residency chaos + a second-chance romance nobody asked for but everyone roots for',
      'Divorced couple forced to be colleagues is the most effective enemies-to-lovers reset in K-drama',
      'ER medicine creates constant life-or-death pressure that exposes exactly why relationships fail',
      'The comedy of two people who hate that they still understand each other so well',
      'For Forecasting Love and Weather fans who love workplace romance with professional competence as foreplay'
    ]
  },

  // ── LEGAL ────────────────────────────────────────────────────────────────────

  {
    id: 'divorce-attorney-shin',
    title: 'Divorce Attorney Shin',
    year: 2023,
    episodes: 12,
    synopsis: 'Shin Sung-han is the best divorce attorney in Korea, a man who approaches the end of marriages with the precision and compassion of a surgeon. When a musician he\'s drawn to becomes entangled in a case, the line between professional and personal begins to blur. A mature, beautifully acted series that treats divorce not as failure but as the complicated human act it actually is.',
    genres: ['legal', 'drama', 'romance'],
    themes: ['divorce', 'healing', 'professional-ethics', 'second-chances', 'family'],
    tropes: ['morally-upright-lawyer', 'slow-burn', 'workplace-ethics', 'adult-romance', 'cases-as-character-study'],
    tone: ['mature', 'warm', 'emotionally-resonant', 'grounded', 'quiet'],
    setting: ['modern', 'legal-office', 'urban', 'courtroom'],
    characterTypes: ['empathetic-attorney', 'creative-love-interest', 'clients-with-complex-stories', 'loyal-assistant'],
    streaming: { netflix: true },
    network: 'JTBC',
    actors: [
      { name: 'Cho Seung-woo', role: 'Shin Sung-han', isLead: true },
      { name: 'Jeon Hye-jin', role: 'Seo Jin-beom', isLead: true }
    ],
    matchReasoningHints: [
      'The Good Wife\'s legal procedural maturity applied to divorce — every case is a window into a marriage',
      'Succession-level character acting: Cho Seung-woo makes listening look like performance art',
      'Treats the end of love with more dignity than most shows treat falling into it',
      'Adult romance with the quiet confidence of a show that knows it doesn\'t need melodrama',
      'For Extraordinary Attorney Woo fans who want legal drama with the same emotional intelligence but for grown-ups'
    ]
  },

  // ── WORKPLACE ────────────────────────────────────────────────────────────────

  {
    id: 'behind-every-star',
    title: 'Behind Every Star',
    year: 2022,
    episodes: 12,
    synopsis: 'Inside a major Korean celebrity talent agency, agents manage egos the size of stadiums, last-minute crises before live broadcasts, and the industry\'s most unspoken rule: the talent gets the glory, everyone else gets the ulcer. A bracingly honest workplace comedy-drama about the people behind the stars — their ambitions, their burnout, and the question of whether any of this is worth it.',
    genres: ['drama', 'comedy', 'workplace'],
    themes: ['entertainment-industry', 'burnout', 'ambition', 'behind-the-scenes', 'self-worth'],
    tropes: ['ensemble-workplace', 'industry-insider', 'celebrity-management', 'workplace-found-family', 'thankless-job'],
    tone: ['witty', 'sharp', 'warm', 'bittersweet', 'satirical'],
    setting: ['modern', 'entertainment-industry', 'agency', 'backstage'],
    characterTypes: ['overworked-agents', 'demanding-celebrities', 'industry-veterans', 'idealistic-newcomers'],
    streaming: { netflix: true },
    network: 'tvN',
    actors: [
      { name: 'Oh Jung-se', role: 'Eok-chil', isLead: true },
      { name: 'Ok Ja-yeon', role: 'Ji-yeong', isLead: true },
      { name: 'Kim Dong-hwi', role: 'Ju-young', isLead: false }
    ],
    matchReasoningHints: [
      'Entourage\'s entertainment industry chaos from the perspective of the agents who make it run',
      'The Bear\'s workplace pressure in celebrity management — every episode is a controlled crisis',
      'Industry insiders who love K-drama will recognize every trope being lovingly skewered',
      'Episodes move like the industry itself — fast, funny, and occasionally heartbreaking',
      'For Record of Youth fans who want the same entertainment-industry setting from behind the curtain'
    ]
  }

];
