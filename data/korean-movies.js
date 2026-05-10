/**
 * Korean Movies Database
 * Used as recommendation outputs alongside K-dramas
 *
 * 18 acclaimed Korean films across thriller, romance, action, horror, and more.
 * Same 6 metadata dimensions as TV shows for Jaccard similarity matching.
 *
 * Additional fields:
 *   runtime (minutes) instead of episodes
 *   director (director name — essential for K-movies)
 */
module.exports = [
  {
    id: 'parasite-kmovie',
    title: 'Parasite',
    year: 2019,
    runtime: 132,
    synopsis: 'A poor family cons their way into employment with a wealthy household. When a dark secret is revealed beneath the mansion, the class war turns deadly.',
    genres: ['thriller', 'drama', 'dark-comedy', 'mystery'],
    themes: ['class-divide', 'deception', 'greed', 'family', 'desperation'],
    tropes: ['class-warfare', 'dark-secrets', 'twist-ending', 'con-artists', 'social-commentary'],
    tone: ['dark', 'tense', 'comedic', 'shocking'],
    setting: ['modern', 'urban', 'class-contrast'],
    characterTypes: ['desperate-family-unit', 'oblivious-wealthy-family', 'hidden-threat'],
    streaming: { amazon_prime: true },
    network: 'Bong Joon-ho',
    director: 'Bong Joon-ho',
    actors: [
      { name: 'Song Kang-ho', role: 'Ki-taek', isLead: true },
      { name: 'Choi Woo-shik', role: 'Ki-woo', isLead: true },
      { name: 'Park So-dam', role: 'Ki-jung', isLead: false }
    ]
  },
  {
    id: 'train-to-busan',
    title: 'Train to Busan',
    year: 2016,
    runtime: 118,
    synopsis: 'A father and daughter board a train to Busan as a zombie apocalypse sweeps South Korea, forcing passengers to fight for survival.',
    genres: ['horror', 'action', 'drama', 'thriller'],
    themes: ['family', 'sacrifice', 'survival', 'class-divide', 'redemption'],
    tropes: ['zombie-apocalypse', 'survival', 'father-daughter-bond', 'self-sacrifice', 'ensemble-survivors'],
    tone: ['tense', 'emotional', 'action-packed', 'dark'],
    setting: ['modern', 'train', 'apocalypse'],
    characterTypes: ['workaholic-father-redeemed', 'brave-strangers', 'selfish-villain'],
    streaming: { netflix: true, amazon_prime: true },
    network: 'Yeon Sang-ho',
    director: 'Yeon Sang-ho',
    actors: [
      { name: 'Gong Yoo', role: 'Seok-woo', isLead: true },
      { name: 'Ma Dong-seok', role: 'Sang-hwa', isLead: false }
    ]
  },
  {
    id: 'oldboy',
    title: 'Oldboy',
    year: 2003,
    runtime: 120,
    synopsis: 'A man is imprisoned without explanation for 15 years and released without reason. He has five days to uncover who imprisoned him and why.',
    genres: ['thriller', 'mystery', 'action', 'drama'],
    themes: ['revenge', 'identity', 'obsession', 'dark-secrets', 'fate'],
    tropes: ['revenge-quest', 'mystery-unraveling', 'twist-ending', 'anti-hero', 'psychological-torment'],
    tone: ['dark', 'intense', 'psychological', 'shocking'],
    setting: ['modern', 'urban', 'underground'],
    characterTypes: ['broken-anti-hero', 'mysterious-villain', 'unexpected-love'],
    streaming: { amazon_prime: true },
    network: 'Park Chan-wook',
    director: 'Park Chan-wook',
    actors: [
      { name: 'Choi Min-sik', role: 'Oh Dae-su', isLead: true },
      { name: 'Yoo Ji-tae', role: 'Lee Woo-jin', isLead: false }
    ]
  },
  {
    id: 'the-handmaiden',
    title: 'The Handmaiden',
    year: 2016,
    runtime: 145,
    synopsis: 'In colonial Korea, a con man devises a plot to defraud a Japanese heiress using her new handmaiden — but unexpected feelings change everything.',
    genres: ['thriller', 'romance', 'drama', 'mystery'],
    themes: ['deception', 'forbidden-love', 'freedom', 'control', 'identity'],
    tropes: ['con-gone-wrong', 'unexpected-romance', 'twist-ending', 'period-thriller', 'female-bond'],
    tone: ['dark', 'sensual', 'tense', 'elegant'],
    setting: ['colonial-era', 'historical', 'period', 'japan-occupied-korea'],
    characterTypes: ['naive-heiress', 'scheming-handmaiden', 'controlling-villain'],
    streaming: { amazon_prime: true },
    network: 'Park Chan-wook',
    director: 'Park Chan-wook',
    actors: [
      { name: 'Kim Tae-ri', role: 'Nam Sook-hee', isLead: true },
      { name: 'Kim Min-hee', role: 'Lady Hideko', isLead: true }
    ]
  },
  {
    id: 'my-sassy-girl-movie',
    title: 'My Sassy Girl',
    year: 2001,
    runtime: 137,
    synopsis: 'A college student meets a strange, unpredictable girl on a subway and falls into an unlikely, turbulent love.',
    genres: ['romance', 'comedy', 'drama'],
    themes: ['love', 'healing-from-heartbreak', 'fate', 'sacrifice', 'identity', 'ordinary-vs-extraordinary'],
    tropes: ['tsundere-female-lead', 'unexpected-romance', 'fated-meeting', 'mismatched-couple', 'second-chance-romance', 'push-and-pull', 'friends-meddling'],
    tone: ['comedic', 'romantic', 'emotional', 'heartwarming', 'charming'],
    setting: ['modern', 'urban', 'seoul', 'campus'],
    characterTypes: ['adorable-male-lead', 'spirited-female-lead', 'tragic-backstory'],
    streaming: { viki: true, amazon_prime: true },
    network: 'Kwak Jae-yong',
    director: 'Kwak Jae-yong',
    actors: [
      { name: 'Cha Tae-hyun', role: 'Gyeon-woo', isLead: true },
      { name: 'Jun Ji-hyun', role: 'The Girl', isLead: true }
    ]
  },
  {
    id: 'memories-of-murder',
    title: 'Memories of Murder',
    year: 2003,
    runtime: 132,
    synopsis: 'Two detectives investigate South Korea\'s first serial murders in the 1980s. Based on the true story of the Hwaseong serial murders.',
    genres: ['crime', 'thriller', 'drama', 'mystery'],
    themes: ['justice', 'failure', 'obsession', 'systemic-flaws', 'evil'],
    tropes: ['serial-killer-investigation', 'detective-duo', 'unsolved-mystery', 'based-on-true-crime', 'dark-ending'],
    tone: ['tense', 'dark', 'realistic', 'haunting'],
    setting: ['1980s', 'rural-korea', 'police'],
    characterTypes: ['contrasting-detective-partners', 'elusive-killer', 'flawed-system'],
    streaming: { netflix: true, amazon_prime: true },
    network: 'Bong Joon-ho',
    director: 'Bong Joon-ho',
    actors: [
      { name: 'Song Kang-ho', role: 'Park Doo-man', isLead: true },
      { name: 'Kim Sang-kyung', role: 'Seo Tae-yoon', isLead: true }
    ]
  },
  {
    id: 'the-man-from-nowhere',
    title: 'The Man from Nowhere',
    year: 2010,
    runtime: 119,
    synopsis: 'A quiet pawnshop owner with a mysterious past takes on a drug cartel to protect the one girl who befriended him.',
    genres: ['action', 'thriller', 'drama'],
    themes: ['redemption', 'sacrifice', 'fatherly-love', 'identity', 'loyalty'],
    tropes: ['protector-hero', 'found-family', 'dark-past-revealed', 'one-man-army', 'coming-out-of-retirement'],
    tone: ['action-packed', 'dark', 'intense', 'emotional'],
    setting: ['modern', 'urban', 'criminal-underworld'],
    characterTypes: ['stoic-protector', 'innocent-child', 'ruthless-villain'],
    streaming: { netflix: true, amazon_prime: true },
    network: 'Lee Jeong-beom',
    director: 'Lee Jeong-beom',
    actors: [
      { name: 'Won Bin', role: 'Cha Tae-sik', isLead: true },
      { name: 'Kim Sae-ron', role: 'So-mi', isLead: false }
    ]
  },
  {
    id: 'along-with-the-gods-two-worlds',
    title: 'Along With the Gods: The Two Worlds',
    year: 2017,
    runtime: 139,
    synopsis: 'A recently deceased firefighter is guided by three guardians through seven trials in the afterlife, revisiting his life choices.',
    genres: ['fantasy', 'action', 'drama', 'family'],
    themes: ['sacrifice', 'family', 'redemption', 'death', 'forgiveness'],
    tropes: ['afterlife-journey', 'self-sacrifice', 'family-bonds', 'supernatural-guardians', 'past-revealed'],
    tone: ['epic', 'emotional', 'action-packed', 'heartwarming'],
    setting: ['modern', 'afterlife', 'supernatural', 'fantasy-world'],
    characterTypes: ['noble-hero', 'loyal-guardians', 'grieving-family'],
    streaming: { netflix: true },
    network: 'Kim Yong-hwa',
    director: 'Kim Yong-hwa',
    actors: [
      { name: 'Ha Jung-woo', role: 'Gang-lim', isLead: true },
      { name: 'Cha Tae-hyun', role: 'Kim Ja-hong', isLead: true }
    ]
  },
  {
    id: 'a-bittersweet-life',
    title: 'A Bittersweet Life',
    year: 2005,
    runtime: 120,
    synopsis: 'A loyal crime boss enforcer refuses to kill his boss\'s girlfriend after discovering her affair — setting off a deadly chain of events.',
    genres: ['action', 'crime', 'thriller', 'drama'],
    themes: ['loyalty', 'betrayal', 'revenge', 'power', 'solitude', 'grief', 'underworld', 'identity'],
    tropes: ['betrayed-enforcer', 'revenge-quest', 'elegant-violence', 'one-man-army', 'anti-hero', 'assassin-hero', 'tragic-backstory'],
    tone: ['dark', 'stylish', 'intense', 'melancholic', 'action-packed'],
    setting: ['modern', 'urban', 'criminal-underworld'],
    characterTypes: ['stoic-anti-hero', 'ruthless-crime-boss', 'femme-fatale'],
    streaming: { amazon_prime: true },
    network: 'Kim Jee-woon',
    director: 'Kim Jee-woon',
    actors: [
      { name: 'Lee Byung-hun', role: 'Sun-woo', isLead: true }
    ]
  },
  {
    id: 'the-thieves',
    title: 'The Thieves',
    year: 2012,
    runtime: 136,
    synopsis: 'A team of Korean and Hong Kong thieves join forces to steal a priceless diamond from a Macau casino, but loyalties shift as secrets emerge.',
    genres: ['action', 'crime', 'comedy', 'thriller'],
    themes: ['deception', 'greed', 'loyalty', 'betrayal', 'heist'],
    tropes: ['heist', 'ensemble-team', 'double-cross', 'con-artists', 'style-over-substance'],
    tone: ['fun', 'stylish', 'action-packed', 'comedic'],
    setting: ['modern', 'macau', 'casino', 'criminal-underworld'],
    characterTypes: ['ensemble-criminals', 'femme-fatale', 'betraying-partner'],
    streaming: { netflix: true, viki: true },
    network: 'Choi Dong-hoon',
    director: 'Choi Dong-hoon',
    actors: [
      { name: 'Kim Yoon-seok', role: 'Macao Park', isLead: true },
      { name: 'Jun Ji-hyun', role: 'Yenicall', isLead: true },
      { name: 'Lee Jung-jae', role: 'Pepsee', isLead: false }
    ]
  },
  {
    id: 'ode-to-my-father',
    title: 'Ode to My Father',
    year: 2014,
    runtime: 126,
    synopsis: 'A man\'s life spans the Korean War, Vietnam, and the 1988 Olympics as he keeps his promise to find his lost sister.',
    genres: ['drama', 'historical', 'family', 'romance'],
    themes: ['sacrifice', 'family', 'promise', 'loss', 'survival'],
    tropes: ['epic-life-span', 'unfulfilled-promise', 'wartime-separation', 'bittersweet-ending', 'devoted-parent'],
    tone: ['emotional', 'heartwarming', 'dramatic', 'patriotic'],
    setting: ['historical', 'korean-war', 'modern', 'multi-era'],
    characterTypes: ['self-sacrificing-protagonist', 'devoted-wife', 'lost-family-member'],
    streaming: { netflix: true, viki: true },
    network: 'Yoon Je-kyoon',
    director: 'Yoon Je-kyoon',
    actors: [
      { name: 'Hwang Jung-min', role: 'Duk-soo (adult)', isLead: true },
      { name: 'Oh Dal-su', role: 'Dal-gu', isLead: false }
    ]
  },
  {
    id: 'architecture-101',
    title: 'Architecture 101',
    year: 2012,
    runtime: 118,
    synopsis: 'An architect reunites with his first love when she asks him to renovate her childhood home, stirring memories of their college days.',
    genres: ['romance', 'drama', 'coming-of-age'],
    themes: ['first-love', 'nostalgia', 'regret', 'second-chances', 'youth'],
    tropes: ['first-love-reconnection', 'second-chance-romance', 'parallel-timelines', 'bittersweet-nostalgia', 'coming-of-age'],
    tone: ['nostalgic', 'romantic', 'emotional', 'heartwarming'],
    setting: ['modern', 'university', 'seoul', 'dual-timeline'],
    characterTypes: ['awkward-young-man', 'first-love', 'grown-up-versions'],
    streaming: { netflix: true, viki: true },
    network: 'Eom Tae-hwa',
    director: 'Eom Tae-hwa',
    actors: [
      { name: 'Uhm Tae-woong', role: 'Seung-min (adult)', isLead: true },
      { name: 'Eom Tae-woong', role: 'Seung-min (young)', isLead: false },
      { name: 'Uhm Jung-hwa', role: 'Yang Seo-yeon (adult)', isLead: true }
    ]
  },
  {
    id: 'the-wailing',
    title: 'The Wailing',
    year: 2016,
    runtime: 156,
    synopsis: 'A bumbling policeman investigates mysterious deaths in a village after a Japanese stranger arrives, as the situation spirals into supernatural horror.',
    genres: ['horror', 'mystery', 'thriller', 'drama'],
    themes: ['evil', 'faith', 'family', 'identity', 'paranoia'],
    tropes: ['supernatural-mystery', 'unreliable-investigation', 'twist-ending', 'dark-forces', 'small-town-horror'],
    tone: ['dark', 'chilling', 'haunting', 'tense'],
    setting: ['modern', 'rural-korea', 'small-town', 'supernatural'],
    characterTypes: ['bumbling-protagonist', 'mysterious-stranger', 'desperate-father'],
    streaming: { netflix: true },
    network: 'Na Hong-jin',
    director: 'Na Hong-jin',
    actors: [
      { name: 'Kwak Do-won', role: 'Jong-goo', isLead: true },
      { name: 'Jun Kunimura', role: 'The Japanese Stranger', isLead: false }
    ]
  },
  {
    id: 'crash-course-in-romance-movie',
    title: 'My Love, My Bride',
    year: 2014,
    runtime: 105,
    synopsis: 'A newly married couple adjusts to life together, navigating the gap between romantic ideals and the hilarious reality of sharing a life.',
    genres: ['romance', 'comedy', 'drama'],
    themes: ['marriage', 'expectations-vs-reality', 'compromise', 'love', 'family'],
    tropes: ['newly-married-couple', 'romantic-comedy-conflicts', 'expectations-vs-reality', 'slice-of-life-romance', 'growing-together'],
    tone: ['comedic', 'heartwarming', 'romantic', 'fun'],
    setting: ['modern', 'urban', 'married-life'],
    characterTypes: ['romantic-husband', 'practical-wife', 'meddling-family'],
    streaming: { viki: true },
    network: 'Im Chan-sang',
    director: 'Im Chan-sang',
    actors: [
      { name: 'Jo Jung-suk', role: 'Min-woo', isLead: true },
      { name: 'Shin Min-a', role: 'Young-min', isLead: true }
    ]
  },
  {
    id: 'masquerade-movie',
    title: 'Masquerade',
    year: 2012,
    runtime: 131,
    synopsis: 'A jester who looks exactly like the Joseon king is brought in as a body double — and gradually wins the hearts of the court and people.',
    genres: ['historical', 'drama', 'comedy'],
    themes: ['identity', 'power', 'sacrifice', 'loyalty', 'class-divide'],
    tropes: ['doppelganger', 'identity-switch', 'political-intrigue', 'unlikely-hero', 'class-divide'],
    tone: ['comedic', 'dramatic', 'heartwarming', 'epic'],
    setting: ['joseon-era', 'historical', 'royal-court'],
    characterTypes: ['lookalike-commoner', 'absent-king', 'scheming-ministers'],
    streaming: { netflix: true, viki: true },
    network: 'Choo Chang-min',
    director: 'Choo Chang-min',
    actors: [
      { name: 'Lee Byung-hun', role: 'Ha-sun / King Gwanghae', isLead: true }
    ]
  },
  {
    id: 'extreme-job',
    title: 'Extreme Job',
    year: 2019,
    runtime: 111,
    synopsis: 'A narcotics team sets up a fried chicken joint as cover for a stakeout — but the restaurant accidentally becomes a hit, complicating their mission.',
    genres: ['comedy', 'action', 'crime'],
    themes: ['duty', 'friendship', 'unexpected-success', 'family', 'identity'],
    tropes: ['undercover-operation', 'comedy-of-errors', 'team-camaraderie', 'unexpected-twist', 'fish-out-of-water'],
    tone: ['comedic', 'action-packed', 'fun', 'lighthearted'],
    setting: ['modern', 'urban', 'restaurant', 'police'],
    characterTypes: ['misfit-cop-team', 'ruthless-drug-lord', 'unexpected-restaurateurs'],
    streaming: { netflix: true },
    network: 'Lee Byeong-heon',
    director: 'Lee Byeong-heon',
    actors: [
      { name: 'Ryu Seung-ryong', role: 'Ko', isLead: true },
      { name: 'Lee Hanee', role: 'Jang', isLead: false }
    ]
  },
  {
    id: 'her-private-life-movie',
    title: 'Tune in for Love',
    year: 2019,
    runtime: 122,
    synopsis: 'Two young people meet and keep missing each other over a decade as fate and circumstances keep them apart — until one radio show brings them back together.',
    genres: ['romance', 'drama'],
    themes: ['fate', 'timing', 'love', 'patience', 'longing'],
    tropes: ['fated-lovers', 'near-misses', 'slow-burn', 'second-chance-romance', 'radio-connection'],
    tone: ['romantic', 'nostalgic', 'emotional', 'bittersweet'],
    setting: ['1990s', 'modern', 'dual-timeline', 'urban'],
    characterTypes: ['patient-male-lead', 'resilient-female-lead', 'romantic-pen-pals'],
    streaming: { netflix: true },
    network: 'Jung Ji-woo',
    director: 'Jung Ji-woo',
    actors: [
      { name: 'Jung Hae-in', role: 'Hyun-woo', isLead: true },
      { name: 'Kim Go-eun', role: 'Mi-soo', isLead: true }
    ]
  },
  {
    id: 'i-saw-the-devil',
    title: 'I Saw the Devil',
    year: 2010,
    runtime: 144,
    synopsis: 'A secret agent relentlessly hunts the serial killer who murdered his pregnant fiancée, blurring the line between predator and prey.',
    genres: ['thriller', 'crime', 'action', 'drama'],
    themes: ['revenge', 'justice', 'moral-descent', 'obsession', 'evil'],
    tropes: ['revenge-quest', 'cat-and-mouse', 'moral-descent', 'anti-hero', 'dark-ending'],
    tone: ['dark', 'intense', 'disturbing', 'tense'],
    setting: ['modern', 'urban', 'rural-korea', 'criminal-underworld'],
    characterTypes: ['grieving-revenge-hero', 'sadistic-villain', 'obsessive-hunter'],
    streaming: { amazon_prime: true },
    network: 'Kim Jee-woon',
    director: 'Kim Jee-woon',
    actors: [
      { name: 'Lee Byung-hun', role: 'Kim Soo-hyun', isLead: true },
      { name: 'Choi Min-sik', role: 'Jang Kyung-chul', isLead: false }
    ]
  },
  {
    id: 'decision-to-leave',
    title: 'Decision to Leave',
    year: 2022,
    runtime: 138,
    synopsis: 'A detective investigating a suspicious mountain death becomes obsessed with the victim\'s wife — a Chinese immigrant who is simultaneously the most obvious suspect and the least explicable one. Park Chan-wook\'s most controlled and romantic film is also his most agonizing: a love story told entirely in the language of surveillance and suspicion, where intimacy and investigation are the same act.',
    genres: ['thriller', 'romance', 'mystery', 'drama'],
    themes: ['obsession', 'forbidden-love', 'guilt', 'surveillance', 'loss', 'desire', 'ambiguity'],
    tropes: ['detective-suspects-lover', 'obsessive-investigation', 'femme-fatale-subverted', 'unreliable-truth', 'tragic-romance'],
    tone: ['romantic', 'tense', 'melancholic', 'sophisticated', 'devastating'],
    setting: ['modern-korea', 'mountain-crime', 'busan', 'contemporary'],
    characterTypes: ['obsessed-detective', 'enigmatic-suspect', 'tragic-couple', 'complex-truth'],
    streaming: { mubi: true, amazon_prime: true },
    network: 'Film',
    director: 'Park Chan-wook',
    actors: [
      { name: 'Park Hae-il', role: 'Hae-joon', isLead: true },
      { name: 'Tang Wei', role: 'Seo-rae', isLead: true }
    ],
    matchReasoningHints: [
      'Flower of Evil fans of Korean crime romance where the investigation and the love story are the same narrative and the detective cannot keep professional distance from a suspect because the connection is too real — Decision to Leave takes this structure to its tragic logical conclusion',
      'Misty fans of Korean crime dramas where the question of whether the woman is guilty is less important than the question of what guilt and love have to do with each other when the investigator is also the person most affected',
      'Gone Girl fans of crime narratives that use the investigation structure to deconstruct a marriage/relationship and discover that the question of who did what is less interesting than why — Park Chan-wook is interested in the same territory',
      'The Handmaiden fans of Park Chan-wook\'s work who want to understand what he looks like when he is being genuinely romantic rather than ironic — Decision to Leave is his most sincere film and the romance is earned rather than subverted',
      'Mystery Queen fans of Korean crime dramas built around an unconventional central female character whose relationship to the detective is as much the subject as the crimes — Seo-rae\'s enigmatic quality is the whole emotional architecture'
    ]
  }
];
