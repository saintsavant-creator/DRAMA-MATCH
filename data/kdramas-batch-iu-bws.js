/**
 * BATCH IU + BWS — Actor Deep-Dive Catalog Expansion
 * 5 titles for IU (Lee Ji-eun) and Byeon Woo-seok actor pages
 * Added: 2026-04-15
 */
module.exports = [
  // ===================================================================
  // IU (LEE JI-EUN) — SIGNATURE WORKS
  // ===================================================================
  {
    id: 'my-mister',
    title: 'My Mister',
    year: 2018,
    episodes: 16,
    nativeTitle: '나의 아저씨',
    synopsis: 'A middle-aged civil engineer living under the weight of debt, a failing marriage, and silent family obligation crosses paths with a young woman hardened by poverty, debt collectors, and a lifetime of surviving alone. Neither is looking for connection — but over months of quiet observation and small acts of unexpected care, something shifts. My Mister is the most emotionally precise K-drama ever made: a study in dignity, loneliness, and the grace of being truly seen by another person.',
    genres: ['drama', 'slice-of-life'],
    themes: ['loneliness', 'healing', 'dignity', 'class-divide', 'found-family', 'redemption', 'compassion', 'silence'],
    tropes: ['unlikely-friendship', 'healing-relationship', 'mentor-protégé', 'quiet-love', 'slice-of-life', 'workplace-drama'],
    tone: ['melancholic', 'quiet', 'profound', 'healing', 'emotional', 'understated', 'warm'],
    setting: ['modern', 'urban', 'workplace', 'family'],
    characterTypes: ['worn-down-good-man', 'hardened-survivor', 'family-unit', 'office-ensemble'],
    streaming: { viki: true, amazon_prime: true },
    network: 'tvN',
    actors: [
      { name: 'Lee Sun-kyun', role: 'Park Dong-hoon', isLead: true },
      { name: 'IU', role: 'Lee Ji-an', isLead: true },
      { name: 'Oh Na-ra', role: 'Yoon Yi-ji', isLead: false },
      { name: 'Park Ho-san', role: 'Park Sang-hoon', isLead: false }
    ],
    matchReasoningHints: [
      'Normal People fans of emotionally precise adult dramas where love is expressed through proximity and attention rather than grand gestures',
      'After Life fans of quietly devastating character studies where grief and loneliness reshape two very different people who help each other survive',
      'Fleabag fans of dark-comedy-adjacent drama where a sharp, guarded protagonist slowly lets their walls come down over one unexpected friendship',
      'The Bear fans of slice-of-life workplace dramas that trust the audience with silence and subtext — emotional detonations packed into ordinary moments',
      'Succession fans of class tension and the quiet humiliations of corporate hierarchy, but with the warmth and healing that Succession refuses to offer'
    ]
  },
  {
    id: 'hotel-del-luna',
    title: 'Hotel del Luna',
    year: 2019,
    episodes: 16,
    nativeTitle: '호텔 델루나',
    synopsis: 'A thousand-year-old hotel hosts the recently deceased before they pass on — run by Jang Man-wol, a woman who has been trapped in this half-world for thirteen centuries as punishment for a sin she cannot forgive herself for. When a young hotelier with a destiny tied to the hotel becomes its new manager, the centuries of bitterness begin to crack. A visually spectacular fantasy romance about guilt, grief, and what it costs to finally let go. IU is extraordinary — the performance that confirmed she was never just a pop star.',
    genres: ['fantasy', 'romance', 'drama'],
    themes: ['redemption', 'afterlife', 'guilt', 'grief', 'love-and-sacrifice', 'letting-go', 'centuries-long-love'],
    tropes: ['supernatural-romance', 'ancient-trauma', 'grumpy-female-lead', 'soft-male-lead', 'destined-love', 'hurt-comfort', 'tragic-backstory'],
    tone: ['ethereal', 'romantic', 'bittersweet', 'beautiful', 'melancholic', 'opulent', 'emotional'],
    setting: ['fantasy', 'hotel', 'supernatural', 'historical-flashbacks', 'modern'],
    characterTypes: ['century-old-female-lead', 'earnest-male-lead', 'ghost-guests', 'ancient-antagonist'],
    streaming: { viki: true, netflix: true },
    network: 'tvN',
    actors: [
      { name: 'IU', role: 'Jang Man-wol', isLead: true },
      { name: 'Yeo Jin-goo', role: 'Gu Chan-sung', isLead: true },
      { name: 'Shin Jung-geun', role: 'Choi Seo-hee', isLead: false }
    ],
    matchReasoningHints: [
      'Good Omens fans of supernatural duos bound by an ancient arrangement who slowly realize the arrangement has become something much more personal',
      'Pushing Daisies fans of stylized fantasy romance set in a workplace that bridges the living and the dead — same lush visual language and bittersweet love story',
      'Constantine fans of supernatural dramas where the protagonist has been in the dark too long and an unexpected human connection begins to pull them back',
      'Goblin fans looking for another tvN fantasy romance with spectacular production, an ancient female tragedy, and a love story that earns its tears',
      'Over the Moon (Netflix) fans of visually gorgeous fantasy where grief and love for the departed are the emotional engine driving everything'
    ]
  },
  {
    id: 'moon-lovers-scarlet-heart-ryeo',
    title: 'Moon Lovers: Scarlet Heart Ryeo',
    year: 2016,
    episodes: 20,
    nativeTitle: '달의 연인 - 보보경심 려',
    synopsis: 'A modern Korean woman is transported back to the Goryeo dynasty during a solar eclipse, finding herself entangled with the princes competing for the throne. She falls for Wang So — the scarred, feared fourth prince who the palace sees as a monster — and realizes too late that history cannot be changed, only survived. A sweeping historical fantasy romance with one of the most painful finales in K-drama history. Adapted from the wildly popular Chinese novel "Bu Bu Jing Xin."',
    genres: ['historical', 'romance', 'fantasy', 'drama'],
    themes: ['time-travel', 'fate', 'power-struggle', 'sacrifice', 'forbidden-love', 'destiny', 'love-vs-ambition'],
    tropes: ['time-travel', 'historical-romance', 'love-polygon', 'tragic-ending', 'outsider-prince', 'modern-woman-in-historical-setting', 'enemies-to-lovers'],
    tone: ['epic', 'tragic', 'romantic', 'intense', 'sweeping', 'emotional', 'heartbreaking'],
    setting: ['historical', 'palace', 'Goryeo-dynasty', 'fantasy'],
    characterTypes: ['modern-woman-transported-to-past', 'feared-scarred-prince', 'tragic-villain-prince', 'good-king-prince'],
    streaming: { viki: true, netflix: true },
    network: 'MBC',
    actors: [
      { name: 'IU', role: 'Hae Soo (Go Ha-jin)', isLead: true },
      { name: 'Lee Jun-ki', role: 'Wang So (4th Prince)', isLead: true },
      { name: 'Kang Ha-neul', role: 'Wang Wook (8th Prince)', isLead: true },
      { name: 'Nam Joo-hyuk', role: 'Wang Jung (13th Prince)', isLead: false },
      { name: 'Hong Jong-hyun', role: 'Wang Yo (3rd Prince)', isLead: false }
    ],
    matchReasoningHints: [
      'Outlander fans of historical time-travel romance where the protagonist is a modern woman rebuilding herself inside a dangerous historical world she cannot control',
      'Game of Thrones fans of palace intrigue and sibling power struggles where everyone you love is one political miscalculation away from destruction',
      'Reign (CW) fans of historical romance set inside royal courts where love and survival are in constant brutal tension',
      'Goblin fans who want another massive historical fantasy heartbreaker from the same cultural moment — equally beautiful, equally devastating',
      'Bu Bu Jing Xin (C-drama original) fans who want the Korean adaptation — this version expands the romance and is equally unforgettable'
    ]
  },

  // ===================================================================
  // BYEON WOO-SEOK — SIGNATURE WORKS
  // ===================================================================
  {
    id: 'lovely-runner',
    title: 'Lovely Runner',
    year: 2024,
    episodes: 16,
    nativeTitle: '선재 업고 튀어',
    synopsis: 'Im Sol has been physically limited since childhood, and the one thing that kept her going was the music of pop star Ryu Sun-jae. When she discovers Sun-jae died young, she finds herself somehow sent back in time — and uses every chance she has to keep him alive. But the boy she\'s been saving starts to notice her, and the line between fixing the timeline and falling in love collapses completely. Byeon Woo-seok\'s breakout role: every frame confirms he was born to play this.',
    genres: ['romance', 'fantasy', 'drama'],
    themes: ['time-travel', 'fandom', 'music', 'sacrifice', 'fate', 'second-chance', 'devotion'],
    tropes: ['time-travel', 'saving-the-hero', 'devoted-female-lead', 'idol-romance', 'second-chance-romance', 'fated-love', 'sweet-male-lead'],
    tone: ['heartwarming', 'romantic', 'bittersweet', 'joyful', 'emotional', 'nostalgic', 'tender'],
    setting: ['modern', 'high-school', 'music-industry', 'urban'],
    characterTypes: ['devoted-fangirl', 'warm-male-idol', 'supportive-friends', 'music-industry-ensemble'],
    streaming: { viki: true },
    network: 'tvN',
    actors: [
      { name: 'Byeon Woo-seok', role: 'Ryu Sun-jae', isLead: true },
      { name: 'Kim Hye-yoon', role: 'Im Sol', isLead: true }
    ],
    matchReasoningHints: [
      'About Time fans of time-travel romance where one character has the power to change everything but the cost is almost too high — same tender energy',
      'Queen In-hyun\'s Man fans of K-drama time-travel romance where the mechanics of the time travel matter less than the emotional cost of being separated across time',
      'Eternal Sunshine fans of love stories that ask: if you could go back and change things, would the love still find its way?',
      'Taylor Swift\'s "Bejeweled" / Music video era fans — this show has the same nostalgic, glittery, devoted-love energy that is pure serotonin',
      'Run BTS (content) fans of Byeon Woo-seok who want to see where his enormous charm was first fully realized'
    ]
  },
  {
    id: 'record-of-youth',
    title: 'Record of Youth',
    year: 2020,
    episodes: 16,
    nativeTitle: '청춘기록',
    synopsis: 'Three young people in Seoul — a model with genuine talent navigating an industry that runs on connections he refuses to make, his best friend from a wealthy family for whom doors open easily, and a makeup artist who loves quietly and works hard — grow up in parallel. It\'s a drama about the specific loneliness of ambition, and the gap between who you are and what success asks you to become. Park Bo-gum and Byeon Woo-seok are perfect as best friends navigating the same industry from opposite starting lines.',
    genres: ['romance', 'drama', 'youth'],
    themes: ['dreams', 'friendship', 'success', 'industry-realities', 'growing-up', 'love', 'class-privilege', 'sacrifice'],
    tropes: ['entertainment-industry', 'friends-to-lovers', 'class-difference', 'pursuit-of-dreams', 'best-friend-rivalry', 'slow-burn'],
    tone: ['realistic', 'warm', 'melancholic', 'hopeful', 'bittersweet', 'understated'],
    setting: ['modern', 'urban', 'entertainment-industry', 'fashion', 'Seoul'],
    characterTypes: ['determined-model', 'privileged-best-friend', 'hardworking-makeup-artist', 'supportive-family'],
    streaming: { netflix: true },
    network: 'tvN',
    actors: [
      { name: 'Park Bo-gum', role: 'Sa Hye-jun', isLead: true },
      { name: 'Park So-dam', role: 'An Jeong-ha', isLead: true },
      { name: 'Byeon Woo-seok', role: 'Won Hae-hyo', isLead: true }
    ],
    matchReasoningHints: [
      'Succession fans of industry dramas that show how differently talent and privilege move through the same world — and what that costs friendships',
      'La La Land fans of bittersweet youth stories about two people navigating ambition and love — same honest ending energy',
      'Glee fans of entertainment-world youth drama, but grounded and more emotionally true about what careers actually cost',
      'Fight for My Way fans of K-dramas about ordinary young people chasing extraordinary dreams — same determination, same heartbreak',
      'Byeon Woo-seok fans should start here: he is luminous in this, even as the secondary lead — you understand immediately why he was always going to become a star'
    ]
  }
];
