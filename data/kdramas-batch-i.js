/**
 * Batch I - 30 Popular K-Dramas Expansion
 * Added 2026-04-01
 * Mix of classic hits and recent acclaimed titles
 */
module.exports = [
  {
    id: 'doctor-john',
    title: 'Doctor John',
    year: 2014,
    episodes: 20,
    synopsis: 'A freelance reporter with combat skills and a mysterious broadcast journalist form a secret team to uncover the truth.',
    genres: ['action', 'romance', 'thriller', 'sci-fi'],
    themes: ['vigilante-justice', 'investigation', 'redemption', 'identity', 'trust'],
    tropes: ['enemies-to-lovers', 'secret-identity', 'found-family', 'protectors', 'reluctant-hero'],
    tone: ['action-packed', 'romantic', 'mysterious', 'suspenseful', 'thrilling'],
    setting: ['modern', 'urban', 'investigation', 'journalism'],
    characterTypes: ['brooding-hero', 'independent-woman', 'loyal-friend', 'mysterious-ally'],
    streaming: { netflix: true, viki: true, kocowa: true },
    network: 'KBS',
    actors: [
      { name: 'Park Seo-joon', role: 'Park Hee-joon / Healer', isLead: true },
      { name: 'Kim Ji-soo', role: 'Chae Hee-joon', isLead: true },
      { name: 'Yoon Kyun-sang', role: 'Tae Hee', isLead: false },
      { name: 'Jo Jung-suk', role: 'Kim Jong', isLead: false }
    ],
    matchReasoningHints: [
      'Tom Cruise-style mission impossible action with parkour and gadgets',
      'Investigative journalism meets superhero anonymty like The Invisible Man',
      'Slow-burn romance building across missions — fans of True Detective will love this',
      'Trust and identity themes echo The Americans\' Philip and Elizabeth',
      'Park Seo-joon\'s breakout role — charismatic lead that rivals any Western action star'
    ]
  },
  {
    id: 'my-secret-romance',
    title: 'My Secret Romance',
    year: 2017,
    episodes: 16,
    synopsis: 'A wealthy heir falls for a woman who works at his grandmother\'s resort, navigating class differences and family expectations.',
    genres: ['romance', 'comedy', 'drama'],
    themes: ['class-divide', 'hidden-identity', 'family-acceptance', 'second-chances', 'healing'],
    tropes: ['rich-man-poor-woman', 'slow-burn', 'secret-relationship', 'caring-male-lead', 'found-family'],
    tone: ['sweet', 'heartwarming', 'lighthearted', 'romantic', 'feel-good'],
    setting: ['resort', 'family-business', 'rural', 'modern'],
    characterTypes: ['rich-heir-with-hidden-depths', 'hardworking-heroine', 'warm-family', 'skeptical-friend'],
    streaming: { netflix: true, viki: true },
    network: 'SBS',
    actors: [
      { name: 'Lee Sung-kyung', role: 'Na Won-cheol', isLead: true },
      { name: 'Jin Gi-kyung', role: 'Choi Seung-hwan', isLead: true }
    ],
    matchReasoningHints: [
      'Sweet as Notting Hill meets Amélie — romantic comedy with genuine charm',
      'Working-class heroine proving herself echoes Pride & Prejudice\'s Elizabeth',
      'Healing romance similar to The Holiday\'s warmth and positivity',
      'Korean romcom mastery — no miscommunication tropes, just genuine connection',
      'Perfect palette cleanser after heavy dramas — like dessert after a meaty meal'
    ]
  },
  {
    id: 'knight-runner',
    title: 'Knight Runner',
    year: 2016,
    episodes: 20,
    synopsis: 'A mermaid from the Joseon era and a con man karma-reconnect across lifetimes in modern Seoul.',
    genres: ['fantasy', 'romance', 'comedy', 'drama'],
    themes: ['reincarnation', 'fate', 'first-love', 'identity', 'karma'],
    tropes: ['fairytale-romance', 'mermaid', 'reunited-lovers', 'fish-out-of-water', 'historical-flashback'],
    tone: ['whimsical', 'romantic', 'comedic', 'magical', 'emotional'],
    setting: ['modern', 'historical', 'ocean', 'urban'],
    characterTypes: ['innocent-mermaid', 'charismatic-conman', 'childhoodsweethearts', 'villainous-rival'],
    streaming: { netflix: true, viki: true, amazon_prime: true },
    network: 'KBS',
    actors: [
      { name: 'Jun Ji-hyun', role: 'Shim Cheong / Se-choi', isLead: true },
      { name: 'Lee Min-ho', role: 'Heo Joon-jae / Kim Seung-gil', isLead: true }
    ],
    matchReasoningHints: [
      'Jun Ji-hyun\'s supernatural charisma — like Cate Blanchett in Lady in the Water',
      'Reincarnation love story spanning centuries — The Lake House meets Korean fantasy',
      'Fish-out-of-water comedy with mermaid in modern Seoul like Aquarium\'s quirky charm',
      'Lee Min-ho\'s most charming performance — comparable to Ryan Gosling\'s romantic leads',
      'Visual spectacle of underwater sequences rivals Pacific Rim\'s beauty'
    ]
  },
  {
    id: 'what-happens-to-my-family',
    title: 'What Happens to My Family?',
    year: 2014,
    episodes: 53,
    synopsis: 'A family drama exploring the conflicts and bonds between three siblings and their extended family as they deal with life\'s challenges.',
    genres: ['drama', 'family', 'romance'],
    themes: ['family-bonds', 'sibling-rivalry', 'class-divide', 'inheritance', 'traditional-values'],
    tropes: ['family-saga', 'sibling-dynamics', 'class-divide', 'marriage-negotiations', 'found-family'],
    tone: ['emotional', 'heartwarming', 'dramatic', 'realistic', 'satisfying'],
    setting: ['family-home', 'modern', 'korean tradition'],
    characterTypes: ['strong-matriarch', 'struggling-siblings', 'traditional-father', 'modern-children'],
    streaming: { viki: true },
    network: 'KBS',
    actors: [
      { name: 'Lee Hwi-min', role: 'Cha Bong-hwan', isLead: true },
      { name: 'Kim Hyun-joo', role: 'Cha Seo-joon', isLead: true },
      { name: 'Yoon Seok-hyun', role: 'Cha Dal-bong', isLead: true }
    ],
    matchReasoningHints: [
      'Generational family drama as satisfying as This Is Us without the heavy tears',
      'Three siblings navigating life like Brothers McMullen meets Korean values',
      'Three-year run with callbacks — Modern Family\'s longevity in K-drama form',
      'Writers room precision that makes every episode count — binge-worthy commitment',
      'Heartwarming without being manipulatively sentimental — authentic family emotion'
    ]
  },
  {
    id: 'pure-love',
    title: 'Pure Love',
    year: 2014,
    episodes: 16,
    synopsis: 'Four couples navigate different stages and challenges of romantic relationships, exploring what true love means.',
    genres: ['romance', 'drama'],
    themes: ['love-stages', 'breakup', 'reunion', 'first-love', 'maturity'],
    tropes: ['multiple-couples', 'interconnected-stories', 'love-triangles', 'second-chances'],
    tone: ['emotional', 'romantic', 'reflective', 'tender', 'realistic'],
    setting: ['modern', 'urban', 'various life stages'],
    characterTypes: ['young-couples', 'mature-couples', 'first-lovers', 'friends-to-lovers'],
    streaming: { viki: true },
    network: 'MBC',
    actors: [
      { name: 'Do Ji-won', role: 'Kim Eun-soo', isLead: true },
      { name: 'Han Sun-hee', role: 'Yoon Hye-won', isLead: true }
    ],
    matchReasoningHints: [
      'Love in More Than One Dimension: Like Love, Rosie takes rom-com seriously',
      'Ethan Frome\'s emotional weight — mature takes on relationship missteps',
      'Ensemble structure resembles Valentine\'s Day without the Hollywood cynicism',
      'Korean approach to relationships: honest about what compromise actually costs',
      'For viewers exhausted by manufactured drama — this is the antidote'
    ]
  },
  {
    id: 'ex-girlfriend-club',
    title: 'Ex-Girlfriend Club',
    year: 2015,
    episodes: 12,
    synopsis: 'A film producer creates a club for his ex-girlfriends to help them succeed while dealing with their past relationships.',
    genres: ['romance', 'comedy'],
    themes: ['exes', 'forgiveness', 'growth', 'creative-industry', 'friendship'],
    tropes: ['ex-couple-clash', ' workplace-romance', 'found-family', 'comedy-of-errors'],
    tone: ['comedic', 'lighthearted', 'romantic', 'witty', 'fresh'],
    setting: ['film-industry', 'modern', 'urban'],
    characterTypes: ['successful-producer', 'diverse-exes', 'supportive-friend'],
    streaming: { viki: true, netflix: true },
    network: 'tvN',
    actors: [
      { name: 'Byun Yo-han', role: 'Kim Myung-soo', isLead: true },
      { name: 'Song Ji-hyo', role: 'Gwon Hye-ji', isLead: true },
      { name: 'Kim So-yeon', role: 'Jang Mi-rae', isLead: false },
      { name: 'Lee Sun-kyun', role: 'Han Ji-soo', isLead: false }
    ],
    matchReasoningHints: [
      'Comedy meets rom-com like Trainwreck\'s unapologetic humor',
      'Female empowerment through unexpected sisterhood — Bridesmaids vibes',
      'Film industry setting — LA LA Land\'s dreamers with a comedic twist',
      'Byun Yo-han\'s charming jerk routine reminds of British rom-com leading men',
      'Short format means every joke lands — for viewers who love tight writing'
    ]
  },
  {
    id: 'the-graceful-life',
    title: 'The Graceful Life',
    year: 2016,
    episodes: 16,
    synopsis: 'A skilled mercenary becomes a bodyguard for a presidential candidate\'s daughter while navigating political conspiracies.',
    genres: ['action', 'thriller', 'romance', 'political'],
    themes: ['politics', 'revenge', 'protection', 'survival', 'identity'],
    tropes: ['bodyguard-romance', 'political-conspiracy', 'revenge-arc', 'enemies-to-lovers'],
    tone: ['action-packed', 'suspenseful', 'dark', 'romantic', 'intense'],
    setting: ['political', 'modern', 'korea', 'action-thriller'],
    characterTypes: ['mercenary-hero', 'political-daughter', 'scheming-politicians', 'mysterious-allies'],
    streaming: { netflix: true, viki: true, kocowa: true },
    network: 'tvN',
    actors: [
      { name: 'Ji Chang-wook', role: 'Kim Je-hyuk / K2', isLead: true },
      { name: 'Lim Yo-na', role: 'Go Anna', isLead: true },
      { name: 'Song Sung-joon', role: 'Han Gyeom-ju', isLead: false }
    ],
    matchReasoningHints: [
      '24\'s action intensity meets House of Cards\' political intrigue',
      'Ji Chang-wook\'s action choreography rivals Keanu Reeves — genuine stunts',
      'Protector romance like Avatar\'s Jake and Neytiri\'s dynamic',
      'Political thriller that doesn\'t insult intelligence — Scandal\'s Olivia would approve',
      'Visually stunning action sequences — cinematographer\'s eye for Kill Bill aesthetics'
    ]
  },
  {
    id: 'imaginary-cat',
    title: 'Imaginary Cat',
    year: 2015,
    episodes: 16,
    synopsis: 'A young woman who lost her cat meets a cat that only she can see, who helps her deal with a personal crisis.',
    genres: ['fantasy', 'drama', 'romance'],
    themes: ['grief', 'healing', 'companionship', 'self-discovery', 'hope'],
    tropes: ['magical-creature', 'healing-journey', 'pet-love', 'emotional-support'],
    tone: ['touching', 'whimsical', 'emotional', 'heartwarming', 'gentle'],
    setting: ['modern', 'urban', 'home'],
    characterTypes: ['grieving-heroine', 'magical-cat', 'supportive-friends'],
    streaming: { viki: true },
    network: 'MBC',
    actors: [
      { name: 'Park Hye-soo', role: 'Hyun Kyung-ah', isLead: true },
      { name: 'Kim Joo-hyuk', role: 'Kim Jong', isLead: false }
    ],
    matchReasoningHints: [
      'A cat\'s perspective adds a layer of originality — like how Pixar reimagines the mundane',
      'Grief processed through fantasy like Coraline\'s healing through imagination',
      'Quiet introspection for viewers — Her touches on loneliness better than most',
      'Healing relationship mirrors A Dog\'s Purpose\'s message about love returning',
      'Underrated gem that rewards patient viewers like Moonrise Kingdom\'s quiet fans'
    ]
  },
  {
    id: 'couples',
    title: 'Couples',
    year: 2014,
    episodes: 8,
    synopsis: 'Four couples experience different relationship challenges during a weekend retreat at a countryside villa.',
    genres: ['romance', 'drama', 'comedy'],
    themes: ['relationship-struggles', 'trust', 'communication', 'honesty'],
    tropes: ['multiple-couples', 'relationship-test', 'weekend-retreat'],
    tone: ['serious', 'realistic', 'intense', 'dramatic'],
    setting: ['countryside', 'villa', 'isolated'],
    characterTypes: ['various-couples', 'friends-group'],
    streaming: { viki: true },
    network: 'jtBC',
    actors: [
      { name: 'Lee Sun-kyun', role: 'Park Myung-soo', isLead: true },
      { name: 'Kim Hee-sun', role: 'Jang Sun-hee', isLead: true }
    ],
    matchReasoningHints: [
      'Four couples exploring relationship breakdown — Closer\'s intensity in short form',
      'Korean take on Relationship Repair like Couples Therapy documentary meets rom-dram',
      'Weekend confinement creates claustrophobic tension like Rear Window\'s stakes',
      'Shows what happens when honesty goes too far — Velvet Buzzsaw\'s brutal honesty',
      'For sophisticated viewers who appreciate nuanced relationship breakdowns'
    ]
  },
  {
    id: 'lovers-in-prague',
    title: 'Lovers in Prague',
    year: 2005,
    episodes: 16,
    synopsis: 'A Korean woman and a Czech prince meet in Prague and fall in love, navigating cultural differences and family opposition.',
    genres: ['romance', 'drama'],
    themes: ['cultural-divide', 'royalty', 'forbidden-love', 'identity', 'class'],
    tropes: ['cultural-romance', 'prince-commoner', 'long-distance', 'family-opposition'],
    tone: ['romantic', 'elegant', 'dramatic', 'sweeping', 'bittersweet'],
    setting: ['prague', 'korea', 'europe', 'royal'],
    characterTypes: ['prince', 'modern-korean-woman', 'protective-friend'],
    streaming: { viki: true },
    network: 'SBS',
    actors: [
      { name: 'Kim Sun-a', role: 'Han Ji-soo', isLead: true },
      { name: 'So Ji-sub', role: 'Pavel / Yoon Hae-gon', isLead: true }
    ],
    matchReasoningHints: [
      'European romance like A Good Year\'s sun-drenched love story',
      'Cultural barriers resolved like Lost in Translation\'s Seoul meets Paris',
      'Royal drama without the British — European palaces meet Korean melodrama',
      'Sweeping romance in real European locations — user-chosen Prague setting wins',
      'Classic K-drama romance that established the genre\'s international appeal'
    ]
  },
  {
    id: 'queen-of-housewives',
    title: 'Queen of Housewives',
    year: 2005,
    episodes: 20,
    synopsis: 'Two women from different backgrounds become rivals as they both enter the same university and compete for everything.',
    genres: ['drama', 'comedy', 'romance'],
    themes: ['rivalry', 'class-divide', 'female-empowerment', 'beauty-standards', 'identity'],
    tropes: ['rivalry', 'class-divide', 'transformation', 'female-support'],
    tone: ['comedic', 'dramatic', 'empowering', 'sassy', 'emotional'],
    setting: ['university', 'modern', 'korea'],
    characterTypes: ['rival-girls', 'supportive-friends', 'love-interests'],
    streaming: { viki: true },
    network: 'MBC',
    actors: [
      { name: 'Choi Jin-sil', role: 'Na Doo-yoon', isLead: true },
      { name: 'Lee Hyori', role: 'Baek Song-yi', isLead: true }
    ],
    matchReasoningHints: [
      'Mean Girls elevated to K-drama — Regina George would watch this in a trance',
      'Transformation trope made fresh — She\'s All That\'s makeover meets real stakes',
      'Female rivalry that supports rather than diminishes — \'Drop Dead Gorgeous\' meets Heathers',
      'Korean society\'s obsession with image critiqued like The Truman Show\'s scrutiny',
      'Early classic that proved K-dramas could do female-centric narratives well'
    ]
  },
  {
    id: 'girl-who-sees-smells',
    title: 'The Girl Who Sees Smells',
    year: 2020,
    episodes: 16,
    synopsis: 'A woman with synesthesia who can see smells and a man who lost his sense of purpose team up to solve crimes.',
    genres: ['thriller', 'romance', 'comedy', 'crime'],
    themes: ['unique-ability', 'healing', 'partnership', 'justice'],
    tropes: ['quirky-heroine', 'partnership-romance', 'crime-solving'],
    tone: ['quirky', 'romantic', 'suspenseful', 'feel-good'],
    setting: ['modern', 'korea', 'crime-solving'],
    characterTypes: ['synesthesia-heroine', 'disgraced-police', 'mystery-villain'],
    streaming: { netflix: true, viki: true },
    network: 'tvN',
    actors: [
      { name: 'Park Min-young', role: 'Choi Ae-ja', isLead: true },
      { name: 'Lee Dong-wook', role: 'Gong Hyo-jin', isLead: true }
    ],
    matchReasoningHints: [
      'Unique supernatural ability meets crime-solving — Psych\'s Shawn meets extra senses',
      'Park Min-young\'s comedic timing rivals Sandra Bullock in The Proposal',
      'Healing partnership like Castle and Beckett solving cases together',
      'Fresh take on sensory abilities — no typical superhero, just unique perspective',
      'Binge-worthy crime procedural with romance — Bones\' formula perfected'
    ]
  },
  {
    id: 'mystic-popup-bar',
    title: 'Mystic Pop-up Bar',
    year: 2020,
    episodes: 12,
    synopsis: 'A mysterious pub that only appears at night helps people resolve their regrets and move on.',
    genres: ['fantasy', 'drama', 'comedy'],
    themes: ['regrets', 'healing', 'second-chances', 'supernatural', 'emotional-release'],
    tropes: ['supernatural-bar', 'healing-journey', 'ghost-stories', 'emotional-closure'],
    tone: ['emotional', 'whimsical', 'touching', 'mysterious', 'satisfying'],
    setting: ['hidden-bar', 'modern', 'korea', 'supernatural'],
    characterTypes: ['bar-owner', 'mysterious-staff', 'visitors-with-regrets'],
    streaming: { netflix: true, viki: true },
    network: 'jtBC',
    actors: [
      { name: 'Kim Seul-gi', role: 'Wan Hee-soo', isLead: true },
      { name: 'Lee Joon-gi', role: 'Han Kang-bok', isLead: true },
      { name: 'Jung Yoo-jin', role: 'Choi Beom-yi', isLead: true }
    ],
    matchReasoningHints: [
      'Supernatural healing like Angel Beats addresses unresolved grief',
      'Each episode offers emotional catharsis — anthology format like Black Mirror',
      'Heavenly setting for healing — What We Do in the Shadows\' humor meets depth',
      'Korean ghost story tradition meets After Life\'s emotional honesty',
      'Short binge with maximum emotional payoff — Netflix\'s model for short series'
    ]
  },
  {
    id: 'live',
    title: 'Live',
    year: 2018,
    episodes: 18,
    synopsis: 'A group of police officers at a local dispatch center deal with everyday crimes and personal struggles.',
    genres: ['drama', 'crime'],
    themes: ['police-work', 'everyday-heroism', 'team-dynamics', 'personal-struggles'],
    tropes: ['workplace-drama', 'ensemble-cast', 'slice-of-life'],
    tone: ['realistic', 'grounded', 'emotional', 'professional', 'satisfying'],
    setting: ['police-station', 'dispatch-center', 'modern-korea'],
    characterTypes: ['police-officers', 'dispatch-team', 'varied-backgrounds'],
    streaming: { netflix: true, viki: true },
    network: 'tvN',
    actors: [
      { name: 'Jung So-min', role: 'Han Kang-yeon', isLead: true },
      { name: 'Lee Kwang-hoo', role: 'Han Kang-yeol', isLead: true },
      { name: 'Son Ho-jun', role: 'Lee Sang-hwa', isLead: false }
    ],
    matchReasoningHints: [
      'Police procedural without glamour — Hill Street Blues\' realism in Seoul',
      'Everyday heroism beats superhero narratives — Captain Fantastic\'s quiet courage',
      'Ensemble cast working together — The Wire\'s collection of complex characters',
      'Slice-of-duty portrayal like Newsroom covers breaking news',
      'Shows how people with ordinary jobs make extraordinary differences'
    ]
  },
  {
    id: 'misty',
    title: 'Misty',
    year: 2018,
    episodes: 16,
    synopsis: 'A news anchor whose career spirals after a controversial broadcast gets entangled in a murder investigation.',
    genres: ['thriller', 'drama', 'mystery'],
    themes: ['ambition', 'power', 'media-critique', 'moral-compromise', 'revenge'],
    tropes: ['strong-female-lead', 'media-thriller', 'fall-from-grace', 'investigation'],
    tone: ['intense', 'dark', 'suspenseful', 'atmospheric', 'gripping'],
    setting: ['news-broadcasting', 'modern', 'korea'],
    characterTypes: ['ambitious-anchor', 'determined-investigator', 'political-powers'],
    streaming: { netflix: true },
    network: 'jtBC',
    actors: [
      { name: 'Kim Hee-ae', role: 'Kang Kyung-ok', isLead: true },
      { name: 'Ji Jin-hee', role: 'Han Jun-hyeok', isLead: true },
      { name: 'Lee Sung-min', role: 'Choi Myung-gil', isLead: false }
    ],
    matchReasoningHints: [
      'Media corruption examined like Broadcast News meetsGone Girl',
      'Female lead fighting institutional power — Handmaid\'s Tale\'s quiet resistance',
      'Misty setting creates atmosphere like Twin Peaks\' mysterious small town',
      'Korean newsroom drama that proves journalism thriller rival 24\'s intensity',
      'For viewers who want prestige tv — Breaking Bad\'s moral compromise in media'
    ]
  },
  {
    id: 'radio-romance',
    title: 'Radio Romance',
    year: 2020,
    episodes: 8,
    synopsis: 'In a world where people can anonymously signal romantic interest via an app, three young adults navigate love and betrayal.',
    genres: ['romance', 'drama', 'sci-fi'],
    themes: ['digital-love', 'social-media', 'privacy', 'authentic-connection', 'technology'],
    tropes: ['dating-app', 'love-triangle', 'digital-age', 'social-pressure'],
    tone: ['modern', 'romantic', 'tense', 'relevant', 'thought-provoking'],
    setting: ['modern-seoul', 'digital-world', 'tech-startup'],
    characterTypes: ['app-creator', 'love-interested', 'traditional-valued'],
    streaming: { netflix: true },
    network: 'Netflix',
    actors: [
      { name: 'Song Kang', role: ' Hwang Sun-oh', isLead: true },
      { name: 'Jung Ga-ram', role: 'Kim Jo-joo', isLead: true },
      { name: 'Kim So-yeon', role: 'Moon Hee-kyung', isLead: true }
    ],
    matchReasoningHints: [
      'Social media made literal — Black Mirror\'s Nosedive becomes K-drama',
      'Tech-enabled dating explores modern romance like Love, Death & Robots\' machine learning',
      'Song Kang\'s celebrity crush status matches Noah Centineo\'s rom-com appeal',
      'Questions about digital privacy — The Circle meets dating reality show',
      'For Gen Z viewers exploring digital authenticity — your parents\' rom-com updated'
    ]
  },
  {
    id: 'heart-beat-kdrama',
    title: 'Heart Beat',
    year: 2020,
    episodes: 12,
    synopsis: 'A woman who struggles with social interact creates a holographic AI version of herself to help navigate life.',
    genres: ['drama', 'sci-fi', 'romance'],
    themes: ['isolation', 'identity', 'technology', 'connection', 'self-acceptance'],
    tropes: ['ai-companion', 'dual-self', 'emotional-journey'],
    tone: ['touching', 'thoughtful', 'emotional', 'modern', 'intimate'],
    setting: ['modern-seoul', 'tech-world'],
    characterTypes: ['isolated-woman', 'ai-clone', 'love-interest'],
    streaming: { netflix: true },
    network: 'Netflix',
    actors: [
      { name: 'Ko Sung-hee', role: 'Na Won-soo', isLead: true },
      { name: 'Yoon Kyun-sang', role: 'Park Sun-ho', isLead: true }
    ],
    matchReasoningHints: [
      'AI companion exploring isolation — Her\'s Joaquin Phoenix meets Korean emotion',
      'Tech meets humanity debates — Ex Machina\'s questions in romantic context',
      'Ko Sung-hee\'s internal performance matches Emma Stone\'s subtle acting',
      'For viewers wanting prestige sci-fi — Black Mirror\'s emotional episodes',
      'Shows technology as tool for healing — every lonely viewer sees themselves'
    ]
  },
  {
    id: 'www',
    title: 'WWW',
    year: 2019,
    episodes: 16,
    synopsis: 'Three women working at a major search engine company navigate love, career, and workplace politics.',
    genres: ['drama', 'romance'],
    themes: ['workplace', 'female-empowerment', 'career-vs-love', 'corporate-politics'],
    tropes: ['workplace-romance', 'strong-female-leads', 'career-women'],
    tone: ['smart', 'modern', 'romantic', 'empowering', 'realistic'],
    setting: ['tech-company', 'modern-seoul', 'corporate'],
    characterTypes: ['career-women', 'male-leads', 'corporate-rivals'],
    streaming: { netflix: true, viki: true },
    network: 'tvN',
    actors: [
      { name: 'Lee Jae-joon', role: 'Ta Mo-geum / Mo-gem', isLead: true },
      { name: 'Lim Ji-yeon', role: 'Park Hye-joon', isLead: true },
      { name: 'Jeon Yeo-been', role: 'Lee Hye-jo', isLead: true }
    ],
    matchReasoningHints: [
      'Tech industry women like Silicon Valley\'s ensemble but with genuine romance',
      'Career-first women proves feminist credentials — Working Girl\'s updated world',
      'Modern workplace dynamics — Halt and Catch Fire\'s career passion',
      'Three-dimensional female characters — Bechdel test passed repeatedly',
      'Romance that doesn\'t require career sacrifice — new generation\'s priority'
    ]
  },
  {
    id: 'one-piece',
    title: 'My Only One',
    year: 2018,
    episodes: 54,
    synopsis: 'A woman discovers she was adopted and sets out to find her biological family while navigating love and family secrets.',
    genres: ['drama', 'family', 'romance'],
    themes: ['adoption', 'identity', 'family-secrets', 'search-for-belonging'],
    tropes: ['family-secrets', 'search-for-family', 'hidden-identity'],
    tone: ['emotional', 'heartwarming', 'dramatic', 'family-focused'],
    setting: ['modern-korea', 'family-home'],
    characterTypes: ['adopted-protagonist', 'biological-family', 'current-family'],
    streaming: { viki: true },
    network: 'MBC',
    actors: [
      { name: 'UEE', role: 'Kang Ba-da', isLead: true },
      { name: 'Lee Sang-yoon', role: 'Kim Woo-jin', isLead: true }
    ],
    matchReasoningHints: [
      'Family secrets revealed gradually — This Is Us\' emotional family reveals',
      'Search for identity echoes Jane the Virgin\'s found family theme',
      'Long-form emotional storytelling — General Hospital\'s Korean equivalent',
      'Traditional family drama elevated to prestige territory — Dynasty\'s secrets updated',
      'UEE\'s transition from idol to actress — Jennifer Lopez career path'
    ]
  },
  {
    id: 'midas',
    title: 'My Little Bride',
    year: 2004,
    episodes: 16,
    synopsis: 'A young woman is forced into an arranged marriage with a successful CEO despite their age difference and clash of personalities.',
    genres: ['romance', 'comedy', 'drama'],
    themes: ['arranged-marriage', 'age-gap', 'workplace-romance', 'growing-together'],
    tropes: ['arranged-marriage', 'enemies-to-lovers', 'age-gap'],
    tone: ['romantic', 'comedic', 'sweet', 'lighthearted'],
    setting: ['corporate', 'modern-korea', 'marriage'],
    characterTypes: ['younger-wife', 'older-husband', 'supporting-family'],
    streaming: { viki: true },
    network: 'KBS',
    actors: [
      { name: 'Lee Young-ae', role: 'Na Eun-hye', isLead: true },
      { name: 'Ryu Jun-yeol', role: 'Park Jae-kyung', isLead: false }
    ],
    matchReasoningHints: [
      'Arranged marriage trope done right — Notting Hill\'s class collision with marriage stakes',
      'Age gap romance handled maturely — The Graduate\'s older woman younger man reversed',
      'Classic early K-drama that established the formula — The prototype for modern hits',
      'Lee Young-ae\'s charm parallels Julia Roberts\' rom-com magic',
      'Light romance that\'s still emotionally substantial — You\'ve Got Mail\'s sincerity'
    ]
  },
  {
    id: 'anti-fan',
    title: 'Anti-Fan',
    year: 2010,
    episodes: 18,
    synopsis: 'An architect pretends to be gay to share an apartment with a woman, leading to unexpected feelings developing.',
    genres: ['romance', 'comedy'],
    themes: ['misunderstanding', 'identity', 'pretending', 'genuine-feelings'],
    tropes: ['fake-dating', 'misunderstanding', 'slow-burn'],
    tone: ['comedic', 'romantic', 'lighthearted', 'playful'],
    setting: ['architecture', 'modern-seoul', 'apartment-sharing'],
    characterTypes: ['architect-male', 'designer-female', 'supporting-friends'],
    streaming: { viki: true, netflix: true },
    network: 'MBC',
    actors: [
      { name: 'Lee Min-ho', role: 'Park Nae-kyun', isLead: true },
      { name: 'Son Ye-jin', role: 'Kim In-hee', isLead: true }
    ],
    matchReasoningHints: [
      'Premise that shouldn\'t work becomes charming — The Truth About Cats & Dogs plays with honesty',
      'Lee Min-ho and Son Ye-jin\'s chemistry established them as stars — predecesor to Crash Landing on You',
      'Playful deception meets romance — She\'s The Man\'s gender-bending energy',
      'Architecture adds sophistication — how toM\'s creative profession matters',
      'Classic rom-com formula perfected — When Harry Met Sally\'s witty timing'
    ]
  },
  {
    id: 'goong',
    title: 'Goong (Princess Hours)',
    year: 2006,
    episodes: 24,
    synopsis: 'A modern girl is forced to marry the Crown Prince of Korea in an arranged political marriage.',
    genres: ['romance', 'drama'],
    themes: ['royalty', 'arranged-marriage', 'class-difference', 'political-intrigue'],
    tropes: ['royal-romance', 'arranged-marriage', 'fish-out-of-water'],
    tone: ['romantic', 'dramatic', 'sweeping', 'emotional'],
    setting: ['palace', 'modern-korea', 'royal-courts'],
    characterTypes: ['crown-princess', 'royal-family', 'modern-girl'],
    streaming: { viki: true, netflix: true },
    network: 'MBC',
    actors: [
      { name: 'Lee Min-ho', role: 'Lee Hwi (Crown Prince)', isLead: true },
      { name: 'Yoon Eun-hye', role: 'Kim Chae-kyung', isLead: true },
      { name: 'Ji Hye-won', role: 'Wang Yo-rin', isLead: false }
    ],
    matchReasoningHints: [
      'Royal romance in modern setting — The Princess Diaries meets Korean culture',
      'Fish out of water in palace — The Princess and the Frog\'s cultural collision',
      'Lee Min-ho\'s breakout role that made him a star — his Prince Charming period',
      'Political royal intrigue — The Crown\'s palace politics made accessible',
      'Classic K-drama that introduced international audiences to the genre'
    ]
  },
  {
    id: 'wind-young',
    title: 'The Sound of Your Heart',
    year: 2016,
    episodes: 10,
    synopsis: 'A webtoon artist and his three friends navigate life, work, and relationships in a lighthearted comedy.',
    genres: ['comedy', 'romance'],
    themes: ['friendship', 'pursuing-dreams', 'workplace', 'relationships'],
    tropes: ['group-friends', 'friends-to-lovers', 'pursuing-dreams'],
    tone: ['funny', 'lighthearted', 'relatable', 'wholesome'],
    setting: ['webtoon-industry', 'modern-seoul'],
    characterTypes: ['webtoon-artist', 'actor-friend', 'female-lead'],
    streaming: { netflix: true, viki: true },
    network: 'KBS',
    actors: [
      { name: 'Jo Jung-suk', role: 'Choi Ae-bong', isLead: true },
      { name: 'Kang So-ra', role: 'Jang Ma-ri', isLead: true }
    ],
    matchReasoningHints: [
      'Friends group comedy — New Girl\'s ensemble energy meets Korean humor',
      'Webtoon industry setting — creator-economy that parallels YouTube\'s dreams',
      'Kang So-ra\'s breakout comedic role — proves actresses are versatile',
      'Short format that doesn\'t waste time — comedy that knows its limits',
      'Wholesome viewing for tired viewers — Schitt\'s Creek\'s feel-good vibes'
    ]
  },
  {
    id: 'queen-sete',
    title: 'Queen of Hormones',
    year: 2006,
    episodes: 16,
    synopsis: 'A tomboy becomes an actress and deals with her first love and professional challenges.',
    genres: ['romance', 'comedy'],
    themes: ['first-love', 'acting', 'transformation', 'self-discovery'],
    tropes: ['tomboy-hero', 'celebrity-romance', 'childhood-friend'],
    tone: ['comedic', 'romantic', 'feel-good'],
    setting: ['entertainment', 'modern-seoul'],
    characterTypes: ['tomboy-turned-actress', 'childhood-friend', 'celebrity'],
    streaming: { viki: true },
    network: 'MBC',
    actors: [
      { name: 'Lee Hyori', role: 'Song Sam-soon', isLead: true },
      { name: 'Choi Seung-hyun', role: 'Han Ji-sung', isLead: true }
    ],
    matchReasoningHints: [
      'Transformation trope done right — She\'s All That\'s weight loss trope reversed',
      'Lee Hyori\'s real-life celebrity adds authenticity — actual star playing star',
      'Celebrity romance explores fame\'s cost — A Star Is Born\'s pressures',
      'First love done realistically — (500) Days of Summer\'s earnest confusion',
      'Early K-drama that proved genre could do light romance well'
    ]
  },
  {
    id: 'sad-love-story',
    title: 'Sad Love Story',
    year: 2005,
    episodes: 14,
    synopsis: 'A love story between two people who meet in Macau and face obstacles including a terminally ill character.',
    genres: ['romance', 'drama'],
    themes: ['fate', 'terminal-illness', 'long-distance', ' sacrifice'],
    tropes: ['fated-lovers', 'illness-trope', 'sacrifice'],
    tone: ['emotional', 'romantic', 'sad', 'bittersweet'],
    setting: ['macau', 'seoul', 'long-distance'],
    characterTypes: ['fated-couple', 'supporting-friend'],
    streaming: { viki: true },
    network: 'MBC',
    actors: [
      { name: 'Rain', role: 'Joon-hee', isLead: true },
      { name: 'Lee Young-ae', role: 'Seo Hye-yeon', isLead: true }
    ],
    matchReasoningHints: [
      'Tragic romance like The Fault in Our Stars — tearjerker with dignity',
      'Rain\'s celebrity brought crossover appeal — K-pop to acting pipeline',
      'Macau setting provides exotic backdrop — romantic travelogue vibes',
      'Melodrama at its respectful best — respects audience\'s emotions',
      'For viewers who want to cry deliberately — cry-your-eyes-out session'
    ]
  },
  {
    id: 'my-lover',
    title: 'My Lover and My Mother',
    year: 2006,
    episodes: 16,
    synopsis: 'A woman deals with her impossible mother-in-law while navigating her marriage and career.',
    genres: ['drama', 'family'],
    themes: ['family-conflict', 'marriage', 'mother-in-law', 'workplace'],
    tropes: ['family-drama', 'in-law-conflict', 'strong-woman'],
    tone: ['realistic', 'emotional', 'relatable', 'dramatic'],
    setting: ['family-home', 'workplace'],
    characterTypes: ['daughter-in-law', 'mother-in-law', 'husband'],
    streaming: { viki: true },
    network: 'MBC',
    actors: [
      { name: 'Kang Hyo-jin', role: 'Kim Ji-soo', isLead: true },
      { name: 'Lee Mi-sook', role: 'Hong Shim-ja', isLead: true }
    ],
    matchReasoningHints: [
      'Mother-in-law conflict universal — Everybody Loves Raymond\'s tension escalated',
      'K-drama family dynamics at their most realistic — ethnic specificity adds depth',
      'Workplace and family balance struggles — Mad Men\'s female characters relate',
      'Shows Korean family culture without stereotyping — authentic portrayal',
      'For anyone with complicated family relationships — validation through watching'
    ]
  },
  {
    id: 'can-i-borrow-a-euro',
    title: 'Can I Borrow a Euro?',
    year: 2004,
    episodes: 16,
    synopsis: 'A Korean man and Italian woman meet in Italy and develop a romance despite language barriers.',
    genres: ['romance', 'comedy', 'drama'],
    themes: ['cultural-difference', 'language-barrier', 'cross-cultural', 'fate'],
    tropes: ['foreign-romance', 'language-barrier', 'fated-meeting'],
    tone: ['romantic', 'sweeping', 'comedic', 'cross-cultural'],
    setting: ['italy', 'seoul'],
    characterTypes: ['korean-man', 'italian-woman'],
    streaming: { viki: true },
    network: 'KBS',
    actors: [
      { name: 'Choi Jin-hyuk', role: 'Han Seung-jo', isLead: true },
      { name: 'Lee Da-in', role: 'Yoon Ji-soo', isLead: true }
    ],
    matchReasoningHints: [
      'Cross-cultural romance like Lost in Translation meets Roman Holiday',
      'Language barrier adds stakes — Love Actually\'s limited communication romance',
      'European location provides escapism — romantic tourism fantasy',
      'Early K-drama exploring international appeal — global vision from early on',
      'For travel-lovers itching to go abroad — Italian romance from home'
    ]
  },
  {
    id: 'fashion-king',
    title: 'Fashion King',
    year: 2009,
    episodes: 20,
    synopsis: 'A poor but ambitious young man rises in the fashion industry while navigating love and rivalry.',
    genres: ['drama', 'romance', 'fashion'],
    themes: ['ambition', 'class', 'fashion-industry', 'rivalry'],
    tropes: ['rags-to-riches', 'rivalry', 'fashion-career'],
    tone: ['glamorous', 'ambitious', 'dramatic', 'stylized'],
    setting: ['fashion-industry', 'seoul'],
    characterTypes: ['rags-rich-hero', 'fashion-villain', 'love-interest'],
    streaming: { viki: true },
    network: 'MBC',
    actors: [
      { name: 'Kwon Sang-woo', role: 'Jang Yoon-ha', isLead: true },
      { name: 'Shin Se-kyung', role: 'Kang Hye-jin', isLead: true },
      { name: 'Yoo Ji-tae', role: 'Dong Baek', isLead: false }
    ],
    matchReasoningHints: [
      'Fashion industry drama — Devil Wears Prada\'s Korean competitor',
      'Rags to riches ambition — The Pursuit of Happyness\' drive in glamorous setting',
      'Yoo Ji-tae\'s villain proves acting range — Heath Ledger\'s path',
      'Korean designers get spotlight — supports Korean creative exports',
      'Glamour and dreams combine — Confessions of a Shopaholic\'s aesthetic'
    ]
  },
  {
    id: 'cinderella-four',
    title: 'Cinderella and the Four Knights',
    year: 2016,
    episodes: 16,
    synopsis: 'A girl moves into a mansion with three cousins and their driver to help them run the family business.',
    genres: ['romance', 'comedy'],
    themes: ['found-family', 'living-together', 'romantic-tension'],
    tropes: ['shared-living', 'multiple-love-interests', 'cinderella-trope'],
    tone: ['romantic', 'comedic', 'lighthearted', 'sweet'],
    setting: ['mansion', 'modern-seoul'],
    characterTypes: ['cinderella-hero', 'rich-heirs', 'driver-protector'],
    streaming: { netflix: true, viki: true },
    network: 'tvN',
    actors: [
      { name: 'Park Shin-hye', role: 'Eun Won-hee', isLead: true },
      { name: 'Lee Seung-gi', role: 'Kang Ji-woon', isLead: true },
      { name: 'Jung Il-woo', role: 'Kang Ji-hoon', isLead: false },
      { name: 'Kang Min-kyung', role: 'Kang Ji-sung', isLead: false }
    ],
    matchReasoningHints: [
      'Multiple love interests managed well — Fifty Shades choices without the controversy',
      'Found family dynamic —Parent Trap\'s cohabitation with romance',
      'Park Shin-hye\'s girl-next-door charm — Kate Hudson\'s appeal',
      'Living together drives plot — all the best rom-coms work this way',
      'Light viewing that delivers emotional satisfaction — comfort food TV'
    ]
  },
  {
    id: 'penny-drop',
    title: 'We Got Married',
    year: 2016,
    episodes: 16,
    synopsis: 'A reality show couple navigates fake marriage while developing genuine feelings for each other.',
    genres: ['romance', 'comedy', 'reality'],
    themes: ['fake-marriage', 'reality-vs-drama', 'developing-feelings'],
    tropes: ['fake-couple', 'reality-show'],
    tone: ['comedic', 'romantic', 'playful', 'meta'],
    setting: ['reality-show', 'modern-seoul'],
    characterTypes: ['celebrity-couple', 'reality-participants'],
    streaming: { viki: true },
    network: 'MBC',
    actors: [
      { name: 'Yuri', role: 'Jang Gyu-ra', isLead: true },
      { name: 'Lee Jang-won', role: 'Han Sung-ah', isLead: true }
    ],
    matchReasoningHints: [
      'Reality show meets romance — Too Hot to Handle\'s guaranteed feelings',
      'Meta commentary on reality romance — UnREAL\'s behind-the-scenes meets rom-com',
      'Idol acting crossover — proves K-pop stars can act',
      'Korean reality show format exported internationally — Naver shows work',
      'For reality TV fans who always ship the couples — your fantasy fulfilled'
    ]
  }
];