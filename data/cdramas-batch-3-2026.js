/**
 * C-Drama Batch 3 — 2026 Catalog Expansion
 * 8 titles: classic epics, spy thrillers, modern ensemble drama, fantasy romance
 * Added: 2026-04-15
 */
module.exports = [

  // ── XIANXIA SEQUEL / FANTASY ROMANCE ─────────────────────────────────────────

  {
    id: 'the-pillow-book',
    title: 'The Pillow Book',
    year: 2020,
    episodes: 40,
    synopsis: 'Ten thousand years after the events of Eternal Love (Ten Miles of Peach Blossoms), Feng Jiu — the granddaughter of Bai Qian — pursues the God of War Dong Hua through multiple lifetimes in a romance that refuses to be uncomplicated. Dilraba Dilmurat and Vengo Gao make this the rare xianxia sequel that expands the emotional register of the original rather than diluting it.',
    genres: ['fantasy', 'romance', 'drama', 'historical'],
    themes: ['fate', 'reincarnation', 'sacrifice', 'persistence', 'immortality', 'love-across-lifetimes', 'self-worth'],
    tropes: ['mortal-pursuing-god', 'multiple-lifetimes', 'cold-male-lead', 'determined-female-lead', 'slow-burn-immortal'],
    tone: ['romantic', 'dramatic', 'fantastical', 'bittersweet', 'visually-sumptuous'],
    setting: ['celestial-realm', 'ancient-china', 'immortal-world', 'multiple-realms'],
    characterTypes: ['determined-fox-spirit', 'cold-immortal-god', 'ancient-celestial-court', 'reincarnating-lovers'],
    streaming: { viki: true, amazon_prime: true },
    network: 'Dragon Television',
    actors: [
      { name: 'Dilraba Dilmurat', role: 'Feng Jiu', isLead: true },
      { name: 'Vengo Gao', role: 'Dong Hua Dijun', isLead: true }
    ],
    matchReasoningHints: [
      'Eternal Love (Ten Miles of Peach Blossoms) fans who want more of the same celestial-world emotional logic but with a female lead who is the one doing the pursuing rather than being pursued — Feng Jiu\'s determination across multiple lifetimes is a genuinely different romantic experience',
      'Ashes of Love fans of xianxia romance where the female lead\'s devotion is tested by a male lead who is constitutionally incapable of recognizing what he feels — Dong Hua\'s emotional unavailability is the most fully developed version of this trope in the genre',
      'Love Between Fairy and Devil fans of fantasy romance where the power dynamic between a mortal/lower deity and a powerful god generates romantic tension that the show takes seriously — the mythological stakes here are as high as anything in the genre',
      'Ancient Love Poetry fans who want multiple-lifetime romance where each life is a distinct emotional study rather than a repeat of the same scenario — The Pillow Book gives each incarnation a different quality of longing',
      'Till the End of the Moon fans of Chinese fantasy romance where the female lead\'s emotional journey is the real subject and the world-building exists to illuminate her character rather than distract from it'
    ]
  },

  // ── EPIC FANTASY / ICE REALM ──────────────────────────────────────────────────

  {
    id: 'ice-fantasy',
    title: 'Ice Fantasy (幻城)',
    year: 2016,
    episodes: 62,
    synopsis: 'In a world divided between the Ice Tribe and the Fire Tribe, the Ice Prince Ka Suo must prevent a war that would destroy both realms while navigating his feelings for a mortal girl and a destiny that may require him to sacrifice everything he loves. A landmark Chinese fantasy production that pioneered the epic palace-fantasy aesthetic that dominated Chinese dramas for a decade.',
    genres: ['fantasy', 'romance', 'drama', 'action'],
    themes: ['sacrifice', 'fate', 'war', 'tribal-conflict', 'immortality', 'forbidden-love', 'destiny'],
    tropes: ['ice-prince', 'tribal-war', 'forbidden-love', 'destined-sacrifice', 'mortal-immortal-divide'],
    tone: ['epic', 'romantic', 'dramatic', 'visually-spectacular', 'melancholic'],
    setting: ['fantasy-realm', 'ice-kingdom', 'celestial', 'ancient'],
    characterTypes: ['noble-ice-prince', 'mortal-heroine', 'fire-tribe-enemies', 'loyal-brother'],
    streaming: { viki: true },
    network: 'Dragon Television / Zhejiang Satellite TV',
    actors: [
      { name: 'Feng Shaofeng', role: 'Ka Suo', isLead: true },
      { name: 'Victoria Song', role: 'Lan Shang', isLead: true },
      { name: 'Ma Tianyu', role: 'Ying Kong Shi', isLead: false }
    ],
    matchReasoningHints: [
      'Eternal Love fans of ambitious Chinese palace fantasy with warring celestial factions, a prince who must sacrifice love for duty, and the specific aesthetic of elaborate costumes and CGI worlds that feel genuinely mythological',
      'Goblin fans of fantasy romance where a powerful supernatural male lead is destined for sacrifice and the romance is conducted under the shadow of an ending they are both trying to prevent or accept',
      'Legend of Fuyao fans of large-scale Chinese fantasy productions from the mid-2010s peak of the genre where the world-building ambition is genuine and the leads carry enough charisma to anchor 60+ episodes',
      'Shadow and Bone fans of Western fantasy who want to understand why Chinese palace fantasy took over streaming platforms — Ice Fantasy is the historical reference point that most of the modern xianxia aesthetic traces back to',
      'The Last Kingdom fans of epic dramas where tribal/political conflict is the backdrop for personal love stories and the question of whether a leader can have a private life is always answered the same way'
    ]
  },

  // ── MODERN FEMALE ENSEMBLE ────────────────────────────────────────────────────

  {
    id: 'ode-to-joy',
    title: 'Ode to Joy (欢乐颂)',
    year: 2016,
    episodes: 42,
    synopsis: 'Five women living in the same Shanghai apartment complex — from a razor-sharp investment banker to a working-class girl new to the city — navigate careers, relationships, and each other across two seasons of the most watched Chinese drama of its decade. A genuine ensemble piece that refuses to make any of its five leads simply good or bad, successful or failed.',
    genres: ['drama', 'romance', 'comedy', 'slice-of-life'],
    themes: ['female-friendship', 'class', 'ambition', 'modern-womanhood', 'career-vs-love', 'urban-life', 'sisterhood'],
    tropes: ['female-ensemble', 'apartment-neighbors', 'five-leads', 'class-diversity', 'modern-workplace'],
    tone: ['warm', 'dramatic', 'comedic', 'insightful', 'slice-of-life'],
    setting: ['modern', 'shanghai', 'urban', 'apartment', 'corporate'],
    characterTypes: ['high-powered-banker', 'small-town-newcomer', 'sheltered-rich-girl', 'pragmatic-pragmatist', 'ordinary-worker'],
    streaming: { viki: true },
    network: 'Dragon Television / Eastern Television',
    actors: [
      { name: 'Liu Tao', role: 'An Di', isLead: true },
      { name: 'Wang Zi-wen', role: 'Qiu Ying-ying', isLead: true },
      { name: 'Jiang Xin', role: 'Fan Sheng-mei', isLead: true }
    ],
    matchReasoningHints: [
      'Nothing But Thirty fans of modern Chinese dramas about women in their thirties navigating career and romance without the patronizing framing that usually accompanies that premise — Ode to Joy does for twenty-somethings what Nothing But Thirty does for their older counterparts',
      'Age of Youth fans of K-dramas about multiple women sharing a living space whose very different backgrounds become the mechanism for examining class, ambition, and urban loneliness with real complexity',
      'Sex and the City fans who want a Chinese version of the ensemble female friendship drama with all the class and career tensions that show avoided — Ode to Joy is more honest about money and what it actually determines',
      'Big Little Lies fans of prestige drama about women whose social surfaces conceal genuinely complicated interior lives — the Shanghai apartment building is the Monterey of Chinese television',
      'Reply 1988 fans of shows that use a contained physical space (apartment building vs. alleyway) to create a community of characters whose overlapping lives illuminate something true about how people actually live'
    ]
  },

  // ── BUSINESS PERIOD DRAMA ─────────────────────────────────────────────────────

  {
    id: 'nothing-gold-can-stay',
    title: 'Nothing Gold Can Stay (那年花开月正圆)',
    year: 2017,
    episodes: 74,
    synopsis: 'Based on a true story: in late Qing dynasty China, a woman rises from poverty to become the first female merchant in Shaanxi province by outmaneuvering everyone who underestimates her. A period drama about business, survival, and a woman building an empire in a world that was designed to prevent her from having one. Sun Li\'s performance is one of the great C-drama lead turns.',
    genres: ['historical', 'drama', 'romance', 'business'],
    themes: ['female-resilience', 'business', 'survival', 'class-ascent', 'betrayal', 'justice', 'empire-building'],
    tropes: ['rags-to-riches', 'female-merchant', 'historical-figure', 'business-rivalry', 'love-triangle'],
    tone: ['epic', 'dramatic', 'empowering', 'emotional', 'historical'],
    setting: ['qing-dynasty', 'shaanxi', 'historical', 'merchant-class'],
    characterTypes: ['self-made-merchant', 'historical-businesswoman', 'complex-rivals', 'political-players'],
    streaming: { viki: true },
    network: 'Hunan Satellite TV',
    actors: [
      { name: 'Sun Li', role: 'Zhou Ying', isLead: true },
      { name: 'Peter Ho', role: 'Wu Pin', isLead: true }
    ],
    matchReasoningHints: [
      'Story of Yanxi Palace fans of Chinese period dramas where a determined woman navigates a hostile environment through intelligence and strategic patience rather than luck or connections — Zhou Ying\'s merchant empire-building is the business equivalent of Wei Ying-luo\'s palace ascent',
      'The Rebel Princess fans of epic historical C-dramas where the female lead\'s journey is explicitly about building something in a world that was designed to exclude her — the Qing merchant world here is as hostile as the imperial court',
      'Mr. Sunshine fans of East Asian period dramas that use a historical transition period (here, the dying Qing empire) to ground a story about one person\'s determination to survive and build something meaningful',
      'Nirvana in Fire fans of Chinese historical dramas that take their political and commercial mechanics seriously rather than using them as backdrop — the business rivalries here are as complex as the court factions in NIF',
      'Pachinko fans who want the same multigenerational female resilience narrative in Chinese historical form — Nothing Gold Can Stay covers a shorter timeframe but the same quality of watching someone refuse to be destroyed by forces that have every structural advantage'
    ]
  },

  // ── WWII SPY THRILLER ─────────────────────────────────────────────────────────

  {
    id: 'the-disguiser',
    title: 'The Disguiser (伪装者)',
    year: 2015,
    episodes: 49,
    synopsis: 'Set during the Japanese occupation of Shanghai, the privileged Ming family sends its youngest son undercover into the collaborationist government as a spy for the resistance. What follows is one of the finest ensemble spy dramas in Chinese television history, with Hu Ge and Wang Kai at the top of their respective powers and a plot that earns every twist. The spiritual predecessor to Nirvana in Fire — same director, same intelligence.',
    genres: ['thriller', 'drama', 'action', 'historical', 'spy'],
    themes: ['resistance', 'sacrifice', 'family', 'loyalty', 'identity', 'occupation', 'patriotism'],
    tropes: ['undercover-spy', 'family-as-cover', 'double-agent', 'wartime-resistance', 'brotherhood'],
    tone: ['tense', 'dramatic', 'intense', 'patriotic', 'sophisticated'],
    setting: ['1940s-shanghai', 'wwii-occupation', 'historical', 'underground-resistance'],
    characterTypes: ['playboy-spy', 'communist-operative', 'nationalist-family', 'resistance-fighter'],
    streaming: { viki: true },
    network: 'Hunan Satellite TV',
    actors: [
      { name: 'Hu Ge', role: 'Ming Tai', isLead: true },
      { name: 'Wang Kai', role: 'Ming Lou', isLead: true },
      { name: 'Jin Dong', role: 'Jin Yun Hui', isLead: false },
      { name: 'Liu Min-tao', role: 'Ming Jing', isLead: false }
    ],
    matchReasoningHints: [
      'Nirvana in Fire fans who have already watched NIF and want more from the same creative team — The Disguiser shares the director, several actors, and the same meticulous approach to plot architecture, just set in WWII Shanghai rather than fictional ancient China',
      'Healer fans of ensemble action-thriller dramas where the competence of the entire team is as important as the central lead and the relationships between agents create the emotional core — The Disguiser has the same brotherhood DNA in a wartime register',
      'Mr. Sunshine fans of East Asian period dramas set during occupation where the political stakes are as personal as they are historical and the resistance is conducted by people with everything to lose',
      'Killing Eve fans of spy drama that uses intelligence operations to illuminate character psychology rather than just generate action — both shows are fundamentally about how much of yourself you can lose to the cover before the cover becomes you',
      'Band of Brothers fans who want the same sense of a team under impossible pressure whose relationships are the emotional infrastructure that keeps them functional — The Disguiser applies that to a spy network in occupied Shanghai with equal rigor'
    ]
  },

  // ── EPIC FANTASY ROMANCE ──────────────────────────────────────────────────────

  {
    id: 'legend-of-fuyao',
    title: 'Legend of Fuyao (扶摇)',
    year: 2018,
    episodes: 66,
    synopsis: 'Born a slave girl with mysterious origins, Fuyao refuses every fate assigned to her and fights her way across five kingdoms to uncover the truth of who she really is while navigating a love story with a prince who has secrets as large as hers. Yang Mi carries 66 episodes of large-scale wuxia fantasy on the strength of her physicality and comic timing — one of the most kinetic female leads in the genre.',
    genres: ['fantasy', 'romance', 'action', 'adventure', 'drama'],
    themes: ['self-determination', 'identity', 'destiny', 'resistance', 'sacrifice', 'empire', 'found-family'],
    tropes: ['slave-to-hero', 'five-kingdom-quest', 'disguised-prince', 'wuxia-action', 'strong-female-lead'],
    tone: ['adventurous', 'romantic', 'action-packed', 'fun', 'epic'],
    setting: ['ancient-china', 'wuxia', 'five-kingdoms', 'fantasy'],
    characterTypes: ['defiant-slave-girl', 'incognito-prince', 'powerful-antagonists', 'found-family-companions'],
    streaming: { viki: true, amazon_prime: true },
    network: 'Dragon Television',
    actors: [
      { name: 'Yang Mi', role: 'Fuyao', isLead: true },
      { name: 'Ethan Juan', role: 'Zhangsun Wuji', isLead: true }
    ],
    matchReasoningHints: [
      'Princess Agents fans of Chinese fantasy dramas about a slave girl who refuses her assigned position and fights across multiple kingdoms — Fuyao is the more fully realized version of that premise with better production values and Yang Mi at her most physically committed',
      'The Long Ballad fans of large-scale wuxia historical dramas where a woman of unknown origins navigates political war between powerful factions using cunning, skill, and the kind of refusal to give up that other shows call stubbornness',
      'Ashes of Love fans of large-scale Chinese fantasy romance where the world-building is genuinely immersive and the central couple\'s chemistry makes the 60+ episode investment feel like not enough',
      'Legend of the Blue Sea fans of K-drama fantasy where the female lead is both extraordinary and ordinary in specific ways that make her relatable despite the mythological context — Fuyao carries this same paradox with enormous physical energy',
      'Goblin fans of fantasy romance where the male lead\'s hidden status creates romantic tension — the prince-in-disguise dynamic here is a sustained comic pleasure as well as a genuine source of emotional stakes'
    ]
  },

  // ── MING DYNASTY PROCEDURAL ROMANCE ──────────────────────────────────────────

  {
    id: 'under-the-power',
    title: 'Under the Power (锦衣之下)',
    year: 2019,
    episodes: 48,
    synopsis: 'A female detective from the Imperial Judiciary is partnered with an arrogant chief agent of the Jinyiwei — the Emperor\'s secret police — to solve a series of cases that keep escalating toward a political conspiracy neither expected. A procedural romance set in the Ming dynasty where the case-of-the-week format masks a slow burn that arrives at genuine emotional heat.',
    genres: ['romance', 'historical', 'mystery', 'drama', 'comedy'],
    themes: ['justice', 'corruption', 'partnership', 'trust', 'hidden-identity', 'loyalty'],
    tropes: ['detective-duo', 'enemies-to-lovers', 'procedural-cases', 'forced-partnership', 'slow-burn'],
    tone: ['romantic', 'comedic', 'dramatic', 'mystery', 'historical'],
    setting: ['ming-dynasty', 'imperial-china', 'historical', 'investigation'],
    characterTypes: ['female-detective', 'arrogant-imperial-agent', 'crime-solving-duo', 'political-conspirators'],
    streaming: { viki: true },
    network: 'iQiyi',
    actors: [
      { name: 'Alan Yu', role: 'Lu Yi', isLead: true },
      { name: 'Rachel Momo', role: 'Yuan Jin-xia', isLead: true }
    ],
    matchReasoningHints: [
      'Nirvana in Fire fans who want Ming dynasty political intrigue in a lighter format — Under the Power uses the Jinyiwei as the investigation mechanism in a way that makes the political corruption feel genuinely dangerous without overwhelming the romance',
      'The Imperial Coroner fans of historical C-drama procedurals where the mystery format serves as the container for a slow-burn romance and the female lead\'s professional competence is the show\'s primary source of pleasure',
      'Sleuth of the Ming Dynasty fans of Ming-era detective partnership C-dramas where the mystery of the week is less important than the central duo\'s adversarial chemistry gradually becoming something else',
      'Signal fans who want their detective partnership drama with historical costumes — the investigative energy and the slow trust-building between two professionals with very different institutional loyalties translates perfectly across cultures',
      'Inspector Koo fans of crime procedurals where the central duo bicker constantly but the audience can see from episode one that their friction is covering admiration — Under the Power is the Chinese historical version of that formula'
    ]
  },

  // ── FAMILY SAGA / SOCIALIST REALISM ──────────────────────────────────────────

  {
    id: 'a-lifelong-journey',
    title: 'A Lifelong Journey (人世间)',
    year: 2022,
    episodes: 52,
    synopsis: 'Spanning fifty years of Chinese history from the Cultural Revolution to the present, the story of the Zhou family in Changchun — three siblings navigating dramatically different lives as China industrializes, reforms, and modernizes around them. One of China\'s most critically acclaimed dramas of the decade, built on the premise that ordinary working-class lives are as worthy of epic treatment as any dynasty.',
    genres: ['drama', 'family', 'historical', 'slice-of-life'],
    themes: ['family', 'sacrifice', 'generational-change', 'class', 'love', 'china-history', 'ordinary-heroism'],
    tropes: ['generational-saga', 'three-siblings', 'working-class-hero', 'historical-span', 'family-sacrifice'],
    tone: ['epic', 'emotional', 'warm', 'melancholic', 'historical'],
    setting: ['1970s-china', 'changchun', 'working-class', 'spanning-decades'],
    characterTypes: ['youngest-son-sacrifice', 'intellectual-siblings', 'working-class-family', 'era-witnesses'],
    streaming: { viki: true },
    network: 'CCTV-1 / Tencent Video',
    actors: [
      { name: 'Lei Jia-yin', role: 'Zhou Bingkun', isLead: true },
      { name: 'Song Jia', role: 'Zheng Juan', isLead: true },
      { name: 'Yin Tao', role: 'Zhou Bingyi', isLead: false }
    ],
    matchReasoningHints: [
      'Pachinko fans of multigenerational East Asian family sagas that span historical upheavals and focus on how ordinary families absorb the cost of extraordinary historical forces — A Lifelong Journey covers the same temporal and emotional territory but from a mainland Chinese working-class perspective',
      'My Mister fans of dramas that take the inner life of working-class characters with full seriousness and refuse to make poverty a backdrop for someone else\'s growth story — Zhou Bingkun\'s quiet endurance is the entire moral argument of the show',
      'Reply 1988 fans of warm ensemble family dramas set in a specific historical moment that is reconstructed through memory with enormous affection — A Lifelong Journey scales that up from a Seoulite alley to fifty years of Chinese history',
      'This Is Us fans of multigenerational family drama where the emotional architecture of the show is how the past shapes the present and the choices of parents are legible in the lives of children — this is the Chinese version of that formal intelligence',
      'Downton Abbey fans who want to see the same temporal sweep of historical change as filtered through one household but from the bottom of the class system rather than the top'
    ]
  }

];
