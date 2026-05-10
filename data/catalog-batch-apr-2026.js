/**
 * Catalog Batch — April 2026
 * 4 genuinely new titles from a 35-title prescriptive list.
 * The remaining 31 titles were already present in the catalog (dedup verified).
 *
 * New titles:
 *   K-Drama:  save-me
 *   Western:  the-vampire-diaries, chuck
 *   C-Drama:  the-double
 *
 * Skipped (already in catalog):
 *   K-Dramas: my-mister, sky-castle, its-okay-to-not-be-okay, mr-sunshine,
 *             beyond-evil, hospital-playlist, prison-playbook, misaeng,
 *             strangers-from-hell, romance-is-a-bonus-book, when-the-camellia-blooms,
 *             move-to-heaven, navillera, the-light-in-your-eyes
 *   Western:  suits, gossip-girl, orphan-black, veronica-mars, how-i-met-your-mother,
 *             the-100, fringe, person-of-interest, the-mentalist, white-collar
 *   C-Drama:  hidden-love, love-like-the-galaxy, go-ahead
 *   J-Drama:  alice-in-borderland, my-happy-marriage, first-love-hatsukoi,
 *             midnight-diner
 */

// ─────────────────────────────────────────────────────────────────────────────
// K-DRAMAS
// ─────────────────────────────────────────────────────────────────────────────
const newKdramas = [

  // ─── 1. Save Me (2017) ────────────────────────────────────────────────────
  {
    id: 'save-me',
    title: 'Save Me',
    year: 2017,
    episodes: 16,
    synopsis: "A young woman named Im Sang-mi finds herself and her family completely trapped inside a dangerous religious cult operating in a small town, her one silent cry for help witnessed by four childhood friends who left years ago. When those friends return and see what she has become — hollowed out, compliant, watched at every moment — they risk everything to extract her from an organization that has systematically destroyed her family. Save Me is a slow-burn thriller that treats cult mechanics with unsettling seriousness, building suffocating dread as the group's grip tightens around everyone who tries to help.",
    genres: ['thriller', 'drama'],
    themes: ['cult', 'rescue', 'small-town', 'trauma', 'friendship', 'survival'],
    tropes: ['cult-survivor', 'rescue-mission', 'small-town-secrets', 'religious-manipulation', 'childhood-friends-reunite'],
    tone: ['dark', 'tense', 'disturbing', 'oppressive', 'slow-burn'],
    setting: ['small-town-korea', 'religious-compound', 'modern-korea'],
    characterTypes: ['traumatized-female-lead', 'ordinary-hero', 'charismatic-cult-villain', 'complicit-community'],
    streaming: { netflix: true, viki: true },
    network: 'OCN',
    countryOfOrigin: 'South Korea',
    actors: [
      { name: 'Ok Taecyeon', role: 'Han Sang-hwan', isLead: true },
      { name: 'Seo Ye-ji', role: 'Im Sang-mi', isLead: true },
      { name: 'Jo Sung-ha', role: 'Apostle Jo', isLead: false }
    ],
    matchReasoningHints: [
      "Watcher fans of K-thrillers where an ordinary person discovers something genuinely dangerous that an entire community is complicit in hiding — Save Me operates on the same logic that the most terrifying threat is one with institutional authority behind it",
      "Beyond Evil fans of Korean thrillers that build dread through community complicity and the way evil operates openly when everyone around it is either afraid or invested in its survival",
      "The Handmaid's Tale fans who want the Korean drama equivalent of a show about institutional control dismantling a person from the inside — Save Me is more intimate and less allegorical, but the horror of watching someone lose the ability to ask for help is the same",
      "My Mister fans of shows that take their time to establish exactly how trapped someone is before allowing any movement toward rescue — Save Me has the same patience and the same commitment to not offering easy comfort",
      "Strangers from Hell fans of OCN thrillers where the horror is about what humans do to each other in sealed-off communities — Save Me extends that premise from a single building to an entire town that has been spiritually captured"
    ]
  },

];

// ─────────────────────────────────────────────────────────────────────────────
// WESTERN SHOWS
// ─────────────────────────────────────────────────────────────────────────────
const newWesternShows = [

  // ─── 1. The Vampire Diaries (2009) ────────────────────────────────────────
  {
    id: 'the-vampire-diaries',
    title: 'The Vampire Diaries',
    year: 2009,
    episodes: 171,
    synopsis: "When Elena Gilbert falls for the mysterious Stefan Salvatore at the start of junior year, she discovers he and his dangerous brother Damon are centuries-old vampires with deep ties to her small Virginia town's dark history. What follows is six seasons of tangled loyalties, a love triangle that genuinely earns its conflict, and stakes that keep escalating as the supernatural world of Mystic Falls expands to include witches, werewolves, and the ancient originals. The Vampire Diaries redefined supernatural romance for a generation, with Nina Dobrev's triple performance and Ian Somerhalder's Damon becoming one of TV's most compelling anti-heroes.",
    genres: ['drama', 'fantasy', 'romance'],
    themes: ['vampires', 'love-triangle', 'supernatural', 'forbidden-love', 'sacrifice', 'loyalty'],
    tropes: ['supernatural-romance', 'love-triangle', 'bad-boy-redemption', 'forbidden-love', 'found-family', 'enemies-to-lovers'],
    tone: ['dramatic', 'romantic', 'dark', 'intense', 'addictive'],
    setting: ['small-town-america', 'supernatural-world', 'high-school', 'historical-flashbacks'],
    characterTypes: ['ordinary-girl-in-extraordinary-circumstances', 'brooding-protective-vampire', 'charismatic-dangerous-vampire', 'loyal-witch-best-friend'],
    streaming: { amazon_prime: true },
    network: 'The CW',
    countryOfOrigin: 'United States',
    actors: [
      { name: 'Nina Dobrev', role: 'Elena Gilbert / Katherine Pierce', isLead: true },
      { name: 'Paul Wesley', role: 'Stefan Salvatore', isLead: true },
      { name: 'Ian Somerhalder', role: 'Damon Salvatore', isLead: true }
    ],
    matchReasoningHints: [
      "Tale of the Nine-Tailed fans of supernatural romance dramas with a brooding, ancient male lead who has done terrible things and is slowly undone by his feelings for a human woman — TVD runs on the same emotional logic and delivers 171 episodes of it",
      "Hotel del Luna fans who loved K-dramas where centuries of history and longing are embedded in the romance, and the supernatural backstory reveals itself in painful flashback layers — The Vampire Diaries structures its reveals the same way",
      "Goblin fans of supernatural romance where immortality and loss are the emotional center and the love story is inseparable from grief — Damon and Stefan have both been carrying centuries of damage, and Elena is the catalyst for reckoning with it",
      "Guardian (The Lonely and Great God) fans who want a Western show where the mythology is rich, the male lead is simultaneously the most dangerous and most devoted person in the protagonist's orbit, and the romance earns its intensity",
      "True Beauty fans who enjoyed the dynamic of dangerous high-school boys falling genuinely hard for an ordinary girl — The Vampire Diaries was doing this at scale years earlier, with the added layer that the danger is literal and the stakes are life and death"
    ]
  },

  // ─── 2. Chuck (2007) ──────────────────────────────────────────────────────
  {
    id: 'chuck',
    title: 'Chuck',
    year: 2007,
    episodes: 91,
    synopsis: "Chuck Bartowski is a lovable underachiever fixing computers at a Buy More electronics store in Burbank when he accidentally downloads the entire Intersect — the US government's consolidated intelligence database — directly into his brain. Overnight he becomes the CIA's most valuable and most vulnerable asset, paired with the deadly Sarah Walker as his handler and the intimidating John Casey as his NSA watchdog. What Chuck does brilliantly is use the spy premise as a delivery mechanism for one of television's most earnest slow-burn romances, a tight ensemble of workplace comedic relationships, and the recurring theme that an ordinary person's capacity for loyalty and heart can be as powerful as any weapon.",
    genres: ['action', 'comedy'],
    themes: ['spy', 'nerd', 'romance', 'loyalty', 'found-family', 'self-discovery'],
    tropes: ['unlikely-spy', 'slow-burn', 'forced-proximity', 'will-they-wont-they', 'nerd-hero', 'secret-identity'],
    tone: ['fun', 'warm', 'action-packed', 'romantic', 'comedic', 'earnest'],
    setting: ['modern-los-angeles', 'electronics-store', 'spy-missions-worldwide'],
    characterTypes: ['nerdy-everyman-hero', 'deadly-competent-female-spy', 'gruff-handler', 'loyal-best-friend-sidekick'],
    streaming: { amazon_prime: true },
    network: 'NBC',
    countryOfOrigin: 'United States',
    actors: [
      { name: 'Zachary Levi', role: 'Chuck Bartowski', isLead: true },
      { name: 'Yvonne Strahovski', role: 'Sarah Walker', isLead: true },
      { name: 'Adam Baldwin', role: 'John Casey', isLead: false }
    ],
    matchReasoningHints: [
      "W: Two Worlds fans who loved the dynamic of an ordinary person suddenly pulled into an extraordinary world they didn't ask for, navigating impossible situations alongside someone dramatically more competent — Chuck lives in that exact space for five seasons",
      "Strong Girl Nam-soon fans of shows where the female lead is dramatically more capable than the male lead in the action department, and the show treats this as a feature rather than a problem to be resolved",
      "My Love from the Star fans who enjoyed the premise of a person with extraordinary abilities hiding their nature in plain sight while falling for someone completely ordinary — Chuck reverses the direction but the emotional tension of that secret is the same",
      "Healer fans of action-romance dramas where the female protagonist is protected by a man with extraordinary skills, except Chuck flips it — Sarah is the Healer, Chuck is the ordinary person she can't stop caring about, and the reversal makes the romance more interesting",
      "The K2 fans of action-romance dramas where the male lead is involuntarily embedded in a dangerous world and a beautiful, highly trained woman is simultaneously his protector and the person he's falling for — Chuck is warmer and funnier than The K2, but the romantic architecture is the same"
    ]
  },

];

// ─────────────────────────────────────────────────────────────────────────────
// C-DRAMAS
// ─────────────────────────────────────────────────────────────────────────────
const newCdramas = [

  // ─── 1. The Double (2024) ─────────────────────────────────────────────────
  {
    id: 'the-double',
    title: 'The Double',
    year: 2024,
    episodes: 40,
    synopsis: "Jiang Li has spent years serving as a secret body double for a powerful noblewoman, trained in her mannerisms, used for her dangerous situations, and discarded whenever convenience demands it. When a political upheaval gives her the chance to assume a new identity entirely, she seizes it — and uses her years of observation, her knowledge of every court secret, and her hard-won understanding of how power actually works to methodically build her own position while dismantling the people who destroyed her family. The Double is a sophisticated revenge drama with a quietly brilliant female lead who never loses control of the board.",
    genres: ['drama', 'historical'],
    themes: ['revenge', 'identity', 'court-intrigue', 'survival', 'justice', 'power'],
    tropes: ['identity-swap', 'long-game-revenge', 'strong-female-lead', 'court-politics', 'slow-burn', 'rags-to-power'],
    tone: ['strategic', 'dark', 'tense', 'satisfying', 'dramatic', 'slow-burn'],
    setting: ['historical-china', 'imperial-court', 'aristocratic-households'],
    characterTypes: ['strategic-female-lead', 'loyal-male-ally', 'corrupt-noble-antagonists', 'scheming-court-rivals'],
    streaming: { viki: true, netflix: true },
    network: 'iQIYI',
    countryOfOrigin: 'China',
    actors: [
      { name: 'Wu Jinyan', role: 'Jiang Li / Shao Nianhua', isLead: true },
      { name: 'Wang Xingyue', role: 'Xiao Heng', isLead: true },
      { name: 'Liu Xueyi', role: 'Xie Wei', isLead: false }
    ],
    matchReasoningHints: [
      "The Story of Ming Lan fans of historical C-dramas with a brilliantly strategic female lead who uses apparent compliance to conceal her actual intelligence — The Double is more explicitly a revenge story, but the core pleasure of watching an underestimated woman outmaneuver everyone is identical",
      "Nirvana in Fire fans who want the same level of intricate court politics and long-game revenge strategy, this time with a female protagonist at the center of every scheme rather than operating from the shadows",
      "Vincenzo fans of revenge dramas where the satisfaction comes from watching a methodical protagonist dismantle the people who wronged them one move at a time, with the audience always slightly ahead of the villains but never fully sure how far the plan goes",
      "My Mister fans of slow, meticulous shows about a person who has been used and underestimated by everyone they know who builds — quietly and without broadcasting it — the power and position that was taken from them",
      "Moon Lovers: Scarlet Heart Ryeo fans of historical court dramas where survival requires the heroine to become something harder and more calculating than she started, and the romance is complicated rather than simplified by that transformation"
    ]
  },

];

module.exports = { newKdramas, newWesternShows, newCdramas };
