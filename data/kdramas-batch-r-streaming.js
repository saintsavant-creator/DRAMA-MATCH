/**
 * DramaMatch K-Drama Batch R — Netflix / Amazon Prime / Disney+ Trending Titles
 *
 * 20 entries: Currently-airing or recently-released K-dramas available RIGHT NOW
 * on the three affiliate platforms (Netflix, Amazon Prime Video, Disney+).
 * Focused on 2023–2025 releases for high search-traffic discoverability.
 *
 * Schema: id, title, year, episodes, synopsis, genres, themes, tropes,
 *         tone, setting, characterTypes, streaming, network, actors, matchReasoningHints
 */

module.exports = [

  // ─── Netflix 2025 ──────────────────────────────────────────────────────────

  {
    id: 'love-scout',
    title: 'Love Scout',
    year: 2025,
    episodes: 16,
    synopsis: "Kang Ji-yoon is the ruthless, exacting CEO of a headhunting firm who has built her reputation on never letting sentiment cloud a placement decision. When her own company hires an impossibly warm, people-first secretary named Yoo Eun-ho — a man whose entire philosophy of work contradicts hers — she finds her perfectly efficient world disrupted by someone who sees people where she sees resumes. A workplace romance that earns its tension from genuinely opposing worldviews, not manufactured misunderstanding.",
    genres: ['romance', 'comedy', 'drama'],
    themes: ['workplace-dynamics', 'opposites-attract', 'career-vs-love', 'emotional-growth', 'vulnerability'],
    tropes: ['boss-employee-romance', 'cold-female-lead-warms-up', 'opposites-attract', 'workplace-romance', 'slow-burn', 'sunshine-male-lead'],
    tone: ['romantic', 'warm', 'comedic', 'heartfelt', 'light-hearted'],
    setting: ['modern', 'office', 'corporate', 'urban', 'seoul'],
    characterTypes: ['cold-ceo', 'warm-sunshine-secretary', 'matchmaking-colleagues', 'rival-executives', 'supportive-friends'],
    streaming: { netflix: true },
    network: 'ENA',
    actors: [
      { name: 'Han Ji-min', role: 'Kang Ji-yoon', isLead: true },
      { name: 'Lee Jun-hyuk', role: 'Yoo Eun-ho', isLead: true }
    ],
    matchReasoningHints: [
      "The Proposal's power-dynamic flip — a boss who controls everything meeting someone who makes control feel exhausting rather than necessary — played with Korean workplace hierarchy stakes that make every boundary violation land harder",
      "The Devil Wears Prada energy: a high-powered woman whose competence is the point, not the problem, and a workplace setting where the romance grows from genuine professional respect before anything else",
      "Parks and Recreation fans who want a Leslie Knope-level career woman softened not by love but by discovering that competence isn't the only human virtue worth respecting",
      "What's Wrong with Secretary Kim's DNA but with reversed warmth — here it's the male lead who radiates sunshine, and watching a controlled woman dismantle her own walls is the satisfying arc",
      "For anyone who loved Hometown Cha-Cha-Cha's slow-thaw lead: same energy of someone emotionally guarded meeting someone who simply refuses to be kept at arm's length"
    ]
  },

  {
    id: 'knock-off',
    title: 'Knock Off',
    year: 2025,
    episodes: 12,
    synopsis: "After a legendary con artist is released from prison, he discovers his estranged daughter has built her own criminal enterprise — one that threatens to eclipse everything he ever pulled. When a job goes sideways and puts them both in the crosshairs of a terrifyingly competent prosecutor, father and daughter must work together for the first time, combining his old-school charm and her new-school ruthlessness. A sleek heist drama about the one con neither of them planned for: becoming a family again.",
    genres: ['crime', 'comedy', 'drama', 'thriller'],
    themes: ['family-reconciliation', 'con-artistry', 'trust', 'generational-conflict', 'redemption'],
    tropes: ['con-artist-family', 'heist', 'estranged-family-reunion', 'cat-and-mouse', 'reluctant-partners', 'mentor-student'],
    tone: ['witty', 'sharp', 'stylish', 'comedic', 'tense'],
    setting: ['modern', 'urban', 'criminal-underworld', 'seoul'],
    characterTypes: ['legendary-con-artist', 'ambitious-daughter', 'relentless-prosecutor', 'loyal-crew-members', 'double-crossing-allies'],
    streaming: { netflix: true },
    network: 'tvN',
    actors: [
      { name: 'Cho Seung-woo', role: 'Im Tae-joon', isLead: true },
      { name: 'Go Hyun-jung', role: 'Im Se-ra', isLead: true }
    ],
    matchReasoningHints: [
      "Ocean's Eleven meets dysfunctional family therapy — the heist mechanics are sharp and satisfying, but the real con is two people who abandoned each other learning to trust again under maximum pressure",
      "Catch Me If You Can energy: the thrill of watching brilliant liars work, except here it's a father-daughter dynamic that adds genuine emotional stakes to every grift",
      "Leverage fans who want a team of criminals doing questionable things for complicated reasons — the found-family angle here is biological family that has to earn the trust a found family starts with",
      "Vincenzo's sharp-suited criminal protagonist energy but with generational conflict as the central engine — two con artists from different eras forced to respect each other's methods",
      "Breaking Bad's 'family as the thing that both motivates and destroys the criminal enterprise' theme, but played for comedy and warmth rather than tragedy"
    ]
  },

  {
    id: 'jeongnyeon-the-star-is-born',
    title: 'Jeongnyeon: The Star Is Born',
    year: 2025,
    episodes: 12,
    synopsis: "In 1950s Korea, when female pansori performers were considered scandalous, a young woman with a voice powerful enough to make audiences forget propriety fights her way from rural poverty to the national stage. Yun Jeongnyeon refuses every compromise that would make her journey easier — including the ones offered by the men who recognize her talent but want to own it. A period drama about art, gender, and the specific audacity of a woman who insists on being extraordinary in an era that demanded she be invisible.",
    genres: ['drama', 'historical', 'musical'],
    themes: ['female-empowerment', 'art-and-sacrifice', 'class-struggle', 'gender-equality', 'perseverance'],
    tropes: ['rags-to-riches', 'artist-journey', 'strong-female-lead', 'period-piece', 'against-all-odds', 'forbidden-talent'],
    tone: ['emotional', 'empowering', 'dramatic', 'beautiful', 'inspiring'],
    setting: ['historical', '1950s-korea', 'rural', 'performance-halls', 'seoul'],
    characterTypes: ['talented-rebel-heroine', 'traditional-family-opposition', 'male-mentor-with-conditions', 'rival-performers', 'loyal-friend'],
    streaming: { netflix: true },
    network: 'tvN',
    actors: [
      { name: 'Kim Tae-ri', role: 'Yun Jeongnyeon', isLead: true },
      { name: 'Shin Ye-eun', role: 'supporting', isLead: false }
    ],
    matchReasoningHints: [
      "A Star Is Born (any version) emotional DNA: a performer whose raw talent is undeniable navigating an industry that wants to consume rather than celebrate her — with Korean period-piece production values",
      "Respect (the Aretha Franklin biopic) energy — a woman fighting the twin barriers of gender and tradition to claim her voice, literally and figuratively, in a world that considers her existence radical",
      "Little Women (Greta Gerwig) fans who want a period piece about a woman insisting on authorship of her own story when every institution around her has other plans",
      "Mr. Sunshine's gorgeous period cinematography combined with the 'woman defying her era' urgency of Extraordinary Attorney Woo — different decade, same refusal to be small",
      "If you loved Chicago for the performance sequences and the commentary on fame's cost, this delivers both with 1950s Korean pansori performances that are genuinely stunning"
    ]
  },

  {
    id: 'spice-up-our-love',
    title: 'Spice Up Our Love',
    year: 2025,
    episodes: 16,
    synopsis: "A gifted but unemployed chef is forced to return to her rural hometown, where she discovers the boy who used to steal vegetables from her grandmother's garden has grown into the town's most stubborn organic farmer. When a local food festival becomes their shared project — and the only thing that might save both their failing ambitions — proximity, mutual stubbornness, and very good cooking reignite a connection neither of them expected. A warm, food-centric romance about two people who ran from the same place and discovered it was exactly where they needed to be.",
    genres: ['romance', 'comedy', 'slice-of-life'],
    themes: ['homecoming', 'second-chances', 'food-as-love', 'rural-life', 'rediscovering-roots'],
    tropes: ['childhood-connection', 'return-to-hometown', 'forced-collaboration', 'slow-burn', 'opposites-attract', 'food-romance'],
    tone: ['warm', 'cozy', 'comedic', 'heartwarming', 'light-hearted'],
    setting: ['modern', 'rural', 'small-town', 'farm', 'korean-countryside'],
    characterTypes: ['passionate-chef', 'stubborn-farmer', 'quirky-townspeople', 'supportive-grandmother', 'meddling-elders'],
    streaming: { netflix: true },
    network: 'JTBC',
    actors: [
      { name: 'Han Ji-eun', role: 'Yoon Ah-rin', isLead: true },
      { name: 'Lee Sang-yi', role: 'Seo Jun-ho', isLead: true }
    ],
    matchReasoningHints: [
      "Ratatouille's 'anyone can cook' philosophy wrapped in a Korean rural romance — the food scenes are genuinely beautiful and the connection between cooking and emotional truth is the show's secret weapon",
      "Hometown Cha-Cha-Cha fans: same cozy small-town setting, same meddling community, same 'city person returns to discover what they left behind' arc — different flavor, equally warm",
      "Schitt's Creek's 'forced to live somewhere you thought you'd outgrown, discovering it has more to offer than the life you were chasing' emotional core, with gorgeous Korean countryside instead of a motel",
      "The Bear fans who want cooking treated with respect and passion — this drama takes food seriously as craft while keeping the emotional temperature at cozy rather than intense",
      "Waikiki's ensemble comedy energy with a tighter romantic focus — the small-town supporting cast is hilarious and warm, providing perfect comic relief around the central love story"
    ]
  },

  {
    id: 'unmasked',
    title: 'Unmasked',
    year: 2025,
    episodes: 16,
    synopsis: "An investigative journalist known for exposing corporate corruption discovers that her latest target — a pharmaceutical empire hiding fatal drug trial data — is connected to her own family's darkest secret. As she and an unlikely ally, a whistleblower doctor with his own grudge, dig deeper, the conspiracy proves bigger, more personal, and more dangerous than either of them imagined. A taut thriller about the cost of truth when the people you're exposing are the people you love.",
    genres: ['thriller', 'drama', 'mystery'],
    themes: ['truth-vs-loyalty', 'corporate-corruption', 'family-secrets', 'justice', 'sacrifice'],
    tropes: ['investigative-duo', 'conspiracy-thriller', 'family-betrayal', 'whistleblower', 'slow-burn', 'the-truth-will-out'],
    tone: ['tense', 'dark', 'gripping', 'intense', 'dramatic'],
    setting: ['modern', 'urban', 'corporate', 'newsroom', 'hospital'],
    characterTypes: ['fearless-journalist', 'conflicted-whistleblower', 'corrupt-ceo', 'compromised-family', 'loyal-editor'],
    streaming: { netflix: true },
    network: 'SBS',
    actors: [
      { name: 'Namgoong Min', role: 'Seo Yi-do', isLead: true },
      { name: 'Kim So-hyun', role: 'Han Seo-jin', isLead: true }
    ],
    matchReasoningHints: [
      "Spotlight energy: the methodical, unglamorous work of investigative journalism treated as genuinely heroic — but with a K-drama twist where the personal stakes make every revelation more devastating",
      "Erin Brockovich's 'one person vs. a corrupt system' structure, except here the system includes your own bloodline — the family betrayal layer makes this more emotionally complicated than a straight procedural",
      "Succession fans who want corporate family dysfunction where the stakes are human lives rather than money — the pharmaceutical empire operates with the same entitled cruelty, different currency",
      "Pinocchio's journalist-romance DNA with significantly higher stakes — this plays the same 'truth vs. the people you love' tension but at thriller velocity rather than romantic-comedy pace",
      "The Good Wife's 'discovering the person closest to you has been lying about everything fundamental' gut-punch, deployed in a Korean corporate thriller that doesn't let you breathe"
    ]
  },

  {
    id: 'pigpen',
    title: 'Pigpen',
    year: 2025,
    episodes: 8,
    synopsis: "A group of strangers trapped in an isolated rural compound discover they've been brought together by someone who knows exactly what each of them has done — and the 'game' they're forced to play exposes not just their secrets but the connections between them. As the body count rises and alliances fracture, the question shifts from 'who's doing this' to 'who among us deserves to survive.' A claustrophobic survival thriller with a Saw-meets-K-drama twist that earns its violence through character rather than spectacle.",
    genres: ['thriller', 'horror', 'mystery', 'drama'],
    themes: ['guilt', 'survival', 'moral-judgment', 'hidden-sins', 'human-nature'],
    tropes: ['locked-room-mystery', 'survival-game', 'everyone-has-a-secret', 'moral-dilemma', 'unreliable-characters', 'who-is-the-mastermind'],
    tone: ['dark', 'tense', 'claustrophobic', 'disturbing', 'intense'],
    setting: ['modern', 'isolated-compound', 'rural', 'trapped'],
    characterTypes: ['guilt-ridden-strangers', 'hidden-mastermind', 'reluctant-leader', 'selfish-survivor', 'moral-compass-character'],
    streaming: { netflix: true },
    network: 'Netflix Original',
    actors: [
      { name: 'Kim Yoo-jung', role: 'Park So-yeon', isLead: true },
      { name: 'Jo In-sung', role: 'supporting', isLead: false }
    ],
    matchReasoningHints: [
      "Saw's moral puzzle structure — each character's sins drive the 'game' — but with K-drama character depth that makes you genuinely conflicted about who deserves to make it out",
      "The 8 Show and Squid Game fans who want another Korean survival thriller with social commentary — this one is smaller, nastier, and more psychologically focused than either",
      "Glass Onion's 'everyone in this room is connected and guilty in different ways' mystery structure, played for horror rather than comedy — the reveals are satisfying and the consequences are real",
      "Circle (2017 film) fans who appreciate enclosed-space moral thrillers where characters must decide who lives — Korean production values and character work elevate this above typical survival horror",
      "Strangers from Hell's claustrophobic dread energy with a Clue-style 'everyone is a suspect, everyone is a victim' structure that keeps you guessing through every episode"
    ]
  },

  {
    id: 'motel-california',
    title: 'Motel California',
    year: 2025,
    episodes: 12,
    synopsis: "Three friends scrape together their savings to buy a crumbling motel in a coastal town, dreaming of turning it into a boutique destination. What they didn't budget for: the local gangster who claims the land, the ghost that allegedly haunts Room 7, the ex-boyfriend who keeps checking in, and the fact that none of them actually know how to run a business. A chaotic, heartfelt ensemble comedy about friendship surviving ambition, failure, and the discovery that building something together is messier and better than any of them planned.",
    genres: ['comedy', 'romance', 'drama', 'slice-of-life'],
    themes: ['friendship', 'entrepreneurship', 'starting-over', 'found-family', 'growing-up'],
    tropes: ['friends-in-business', 'fish-out-of-water', 'ensemble-comedy', 'quirky-locals', 'romantic-subplot', 'haunted-building'],
    tone: ['comedic', 'heartwarming', 'chaotic', 'fun', 'light-hearted'],
    setting: ['modern', 'coastal-town', 'motel', 'small-town', 'beachside'],
    characterTypes: ['dreamer-leader', 'pragmatic-friend', 'impulsive-friend', 'quirky-guests', 'local-troublemaker'],
    streaming: { netflix: true },
    network: 'tvN',
    actors: [
      { name: 'Lee Se-young', role: 'main lead', isLead: true },
      { name: 'Na In-woo', role: 'main lead', isLead: true }
    ],
    matchReasoningHints: [
      "Schitt's Creek at its core — a group of people stuck somewhere they didn't plan to be, slowly building something meaningful from chaos, failure, and reluctant community",
      "The White Lotus' hotel-as-microcosm concept but played for warmth instead of satire — every guest at this crumbling motel brings a story, and the ensemble chemistry is the entire point",
      "New Girl's apartment-as-ensemble-stage energy transplanted to a Korean coastal motel — the friendships drive the comedy, the location drives the chaos, and the romance sneaks in sideways",
      "Waikiki fans: same chaotic friend-group energy, same hospitality-business-as-comedy-engine, same ratio of heart to absurdity — different location, equally delightful",
      "Ted Lasso's 'optimism as a superpower in a cynical world' vibe: the leads are earnest about their crumbling motel in a way that converts everyone around them, including the audience"
    ]
  },

  {
    id: 'tale-of-lady-ok',
    title: 'The Tale of Lady Ok',
    year: 2025,
    episodes: 16,
    synopsis: "In Joseon-era Korea, Lady Ok — a noblewoman whose family has been falsely accused of treason — disguises herself as a merchant to rebuild her family's fortune and clear their name. Along the way she outmaneuvers corrupt officials, builds an unlikely trade empire, and develops a complicated entanglement with a royal inspector who is simultaneously her greatest threat and her most intriguing equal. A period thriller with romance that never forgets its heroine came to fight, not to be rescued.",
    genres: ['historical', 'romance', 'thriller', 'drama'],
    themes: ['justice', 'survival', 'disguise', 'class-warfare', 'female-empowerment'],
    tropes: ['cross-dressing-heroine', 'noble-in-disguise', 'enemies-to-lovers', 'revenge-plot', 'cat-and-mouse', 'strong-female-lead'],
    tone: ['dramatic', 'tense', 'romantic', 'empowering', 'beautiful'],
    setting: ['joseon', 'historical', 'marketplace', 'palace', 'korean-countryside'],
    characterTypes: ['disguised-noblewoman', 'sharp-royal-inspector', 'corrupt-officials', 'loyal-servant', 'scheming-nobles'],
    streaming: { netflix: true },
    network: 'tvN',
    actors: [
      { name: 'Lim Ji-yeon', role: 'Lady Ok', isLead: true },
      { name: 'Choo Young-woo', role: 'Royal Inspector', isLead: true }
    ],
    matchReasoningHints: [
      "Mulan's 'woman disguising herself to survive in a man's world' energy but with Joseon political intrigue — the disguise is the entry point; the political chess game is why you stay",
      "The Count of Monte Cristo's revenge architecture: a person falsely destroyed rebuilding themselves piece by piece, with every alliance and revelation serving the larger plan",
      "Bridgerton fans who want period romance with teeth — this heroine isn't waiting for a suitor, she's building an empire while the romantic tension with her adversary simmers underneath",
      "Under the Queen's Umbrella's 'woman operating brilliantly within and around patriarchal structures' political savvy, set in the merchant class instead of the palace",
      "Sungkyunkwan Scandal's cross-dressing premise played darker and more politically dangerous — same electric chemistry with the person who might discover the truth, higher stakes for exposure"
    ]
  },

  // ─── Netflix 2024 ──────────────────────────────────────────────────────────

  {
    id: 'the-whirlwind',
    title: 'The Whirlwind',
    year: 2024,
    episodes: 12,
    synopsis: "When the Prime Minister of South Korea assassinates the President in a desperate bid to save the country from a corrupt system, he discovers that the system fights back harder than any individual — no matter how powerful. Park Dong-ho believed one decisive act could reset the nation; instead, it triggers a political war where every faction, ally, and enemy recalculates their position in real time. A political thriller that asks what happens after the revolution, when the revolutionary discovers that governing is infinitely harder than destroying.",
    genres: ['thriller', 'drama', 'political'],
    themes: ['power', 'corruption', 'moral-compromise', 'political-reform', 'unintended-consequences'],
    tropes: ['anti-hero', 'political-intrigue', 'conspiracy', 'moral-descent', 'cat-and-mouse', 'power-vacuum'],
    tone: ['intense', 'dark', 'gripping', 'cerebral', 'dramatic'],
    setting: ['modern', 'political', 'government', 'seoul', 'blue-house'],
    characterTypes: ['anti-hero-politician', 'cunning-opponent', 'idealistic-aide', 'corrupt-elite', 'media-manipulator'],
    streaming: { netflix: true },
    network: 'JTBC',
    actors: [
      { name: 'Sol Kyung-gu', role: 'Park Dong-ho', isLead: true },
      { name: 'Kim Hee-ae', role: 'Jung Su-jin', isLead: true }
    ],
    matchReasoningHints: [
      "House of Cards' 'politician who believes his crimes serve the greater good' premise — but compressed into 12 episodes with Korean political specificity that makes the power dynamics feel more visceral",
      "Designated Survivor fans: same 'sudden, violent transfer of power' inciting incident, but this show is interested in the moral cost rather than the procedural cleanup — darker, sharper, more morally challenging",
      "Succession's 'power is poison and everyone who touches it is corroded' thesis applied to Korean national politics — the performances are electric and the betrayals are earned",
      "The Chief of Staff (補佐官) comparison is obvious, but The Whirlwind goes further — it starts where most political thrillers end, and the post-assassination political chess is genuinely brilliant",
      "Breaking Bad's 'a man who convinces himself his worst actions are justified' character study, set in the Blue House instead of a meth lab — Sol Kyung-gu delivers that same caliber of slow moral disintegration"
    ]
  },

  {
    id: 'maestra-strings-of-truth',
    title: 'Maestra: Strings of Truth',
    year: 2023,
    episodes: 12,
    synopsis: "Cha Se-eum is a world-renowned orchestra conductor who returns to Korea to lead a struggling regional philharmonic — and discovers that the musicians, the board, and the city itself are all hiding secrets connected to a crime she barely survived years ago. As she rebuilds the orchestra, someone is systematically destroying everyone around her, and the music she's conducting becomes indistinguishable from the investigation she can't stop pursuing. A thriller where classical music isn't decoration — it's the architecture of every revelation.",
    genres: ['thriller', 'mystery', 'drama'],
    themes: ['art-and-obsession', 'hidden-truth', 'revenge', 'resilience', 'power-of-music'],
    tropes: ['mysterious-past', 'returning-hero', 'everyone-has-a-secret', 'art-as-weapon', 'slow-burn-mystery', 'strong-female-lead'],
    tone: ['elegant', 'tense', 'mysterious', 'dark', 'sophisticated'],
    setting: ['modern', 'concert-hall', 'urban', 'orchestra', 'small-city'],
    characterTypes: ['brilliant-conductor', 'suspicious-musicians', 'hidden-antagonist', 'loyal-protege', 'corrupt-board-member'],
    streaming: { netflix: true },
    network: 'tvN',
    actors: [
      { name: 'Lee Young-ae', role: 'Cha Se-eum', isLead: true },
      { name: 'Lee Moo-saeng', role: 'supporting', isLead: false }
    ],
    matchReasoningHints: [
      "Tár's 'brilliant female conductor navigating a world that wants to contain her' energy — but structured as a thriller where the orchestra itself is the crime scene and every musician is a suspect",
      "Knives Out's ensemble-mystery structure: a closed community of suspects, each with motives and secrets, investigated by someone who is simultaneously one of them and above them",
      "Black Swan's 'art world as psychological pressure cooker' intensity — classical music here isn't background; it's integrated into the plot structure in ways that feel genuinely innovative",
      "Lee Young-ae (Sympathy for Lady Vengeance) brings that same controlled fury — watching her conduct an orchestra while conducting an investigation is a masterclass in dual-layered performance",
      "Sharp Objects fans who want a woman returning to a place that broke her, uncovering secrets through proximity to the people who share her history — different setting, same suffocating tension"
    ]
  },

  {
    id: 'dear-hyeri',
    title: 'Dear Hyeri',
    year: 2024,
    episodes: 16,
    synopsis: "Joo Eun-ho is a broadcast announcer whose life looks perfect from every camera angle — until a dissociative identity disorder diagnosis reveals that another personality, 'Hyeri,' has been living parts of her life without her knowledge. As Eun-ho and Hyeri negotiate shared existence, a man who was hurt by one of them and healed by the other becomes the emotional axis around which both personalities must confront what they're protecting each other from. A psychological romance that treats DID with unusual care and makes the internal dialogue between selves the most compelling relationship in the show.",
    genres: ['romance', 'drama', 'psychological'],
    themes: ['identity', 'mental-health', 'healing', 'self-acceptance', 'love-and-wholeness'],
    tropes: ['split-personality', 'love-triangle-with-self', 'healing-through-love', 'past-trauma-revealed', 'slow-burn', 'strong-female-lead'],
    tone: ['emotional', 'tender', 'melancholic', 'warm', 'introspective'],
    setting: ['modern', 'urban', 'broadcast-station', 'seoul'],
    characterTypes: ['conflicted-heroine', 'alternate-personality', 'patient-love-interest', 'protective-friend', 'therapist-figure'],
    streaming: { netflix: true },
    network: 'ENA',
    actors: [
      { name: 'Shin Hye-sun', role: 'Joo Eun-ho / Hyeri', isLead: true },
      { name: 'Lee Jin-wook', role: 'Jung Hyun-oh', isLead: true }
    ],
    matchReasoningHints: [
      "United States of Tara fans: same premise of DID explored through the lens of a woman's relationships, but K-drama's emotional register makes the personality shifts more poignant than comedic",
      "Moon Lovers fans who want Shin Hye-sun delivering another once-in-a-generation performance — she plays both personalities so distinctly that you forget it's one actress, and the internal dialogue between them is devastating",
      "Mr. Robot's 'who am I really, and what have I done without knowing it' psychological tension — different genre, same existential dread of discovering your identity has been fractured",
      "It's Okay to Not Be Okay's compassionate treatment of mental health with a more grounded, less fairy-tale approach — this show treats DID as something to understand, not to spectacle",
      "Eternal Sunshine of the Spotless Mind's question of 'which version of me does this person love?' translated into a K-drama where both versions of the heroine are present and fighting for the same life"
    ]
  },

  {
    id: 'the-judge-from-hell',
    title: 'The Judge from Hell',
    year: 2024,
    episodes: 14,
    synopsis: "A literal demon from hell possesses the body of a recently deceased judge — and discovers that delivering human justice from behind a bench is infinitely more satisfying than torturing souls in the underworld. Judge Kang Bit-na's methods are unorthodox (she can see the sins of everyone in her courtroom), her sentences are creative, and the detective who keeps showing up in her cases is inconveniently handsome and suspiciously good at his job. A supernatural legal comedy that becomes a genuine romance between a demon learning to feel and a human who makes her want to.",
    genres: ['fantasy', 'romance', 'comedy', 'legal'],
    themes: ['redemption', 'justice', 'humanity', 'good-vs-evil', 'finding-compassion'],
    tropes: ['supernatural-in-human-world', 'demon-learns-to-love', 'legal-procedural', 'opposites-attract', 'fish-out-of-water', 'slow-burn'],
    tone: ['comedic', 'romantic', 'dark-humor', 'supernatural', 'heartwarming'],
    setting: ['modern', 'courtroom', 'urban', 'supernatural', 'police-station'],
    characterTypes: ['demon-judge', 'righteous-detective', 'unsuspecting-colleagues', 'hell-bureaucracy', 'redeemable-sinners'],
    streaming: { netflix: true },
    network: 'SBS',
    actors: [
      { name: 'Park Shin-hye', role: 'Kang Bit-na', isLead: true },
      { name: 'Kim Jae-young', role: 'Han Da-on', isLead: true }
    ],
    matchReasoningHints: [
      "Lucifer's entire premise — a supernatural being discovers human justice and emotions are more compelling than eternal punishment — done as a K-drama legal comedy with Park Shin-hye's comedic timing",
      "The Good Place's 'what does it mean to become a good person?' philosophical question, wrapped in a romance between a literal demon and the most earnest detective alive",
      "Goblin fans who want another supernatural-human romance with cosmic stakes — different mythology, same 'immortal being discovers what makes mortality worth it' emotional arc",
      "My Love from the Star's non-human protagonist learning human emotions, but funnier and darker — the courtroom scenes where she uses demon abilities are some of the best comedy in 2024 K-drama",
      "What We Do in the Shadows' matter-of-fact treatment of the supernatural — the show never explains away the absurdity, it just lets a demon be a judge and finds all the comedy and pathos in that premise"
    ]
  },

  {
    id: 'face-me',
    title: 'Face Me',
    year: 2024,
    episodes: 16,
    synopsis: "A brilliant plastic surgeon who can reconstruct anyone's face loses his own sight in an accident — and the only witness to what really happened is a woman whose face he rebuilt years ago, and who has been living as someone else ever since. As he navigates blindness and she navigates the secret of her stolen identity, the question of who they really are — behind every face and behind every darkness — becomes the thread that pulls them toward each other. A medical thriller wrapped in a romance about surfaces, depth, and the terror of being truly seen.",
    genres: ['thriller', 'romance', 'medical', 'drama'],
    themes: ['identity', 'appearance-vs-reality', 'trust', 'disability', 'second-chances'],
    tropes: ['medical-thriller', 'hidden-identity', 'blind-protagonist', 'slow-burn', 'secret-past', 'doctor-romance'],
    tone: ['tense', 'romantic', 'mysterious', 'emotional', 'dark'],
    setting: ['modern', 'hospital', 'urban', 'clinic', 'seoul'],
    characterTypes: ['blind-genius-surgeon', 'woman-with-stolen-face', 'suspicious-colleague', 'threatening-figure-from-past', 'loyal-medical-team'],
    streaming: { netflix: true },
    network: 'KBS2',
    actors: [
      { name: 'Lee Min-ki', role: 'Cha Jeong-woo', isLead: true },
      { name: 'Han Ji-hyun', role: 'Lee Min-ha', isLead: true }
    ],
    matchReasoningHints: [
      "Face/Off's identity-swap premise made psychologically real — a surgeon who built someone's face and a woman living inside it, circling each other with secrets that are literally skin-deep",
      "The Good Doctor fans who want a medical protagonist with a disability treated as complexity rather than tragedy — his blindness reshapes how he practices medicine in ways that are genuinely interesting",
      "Phantom of the Opera's obsession with faces, beauty, and what lies beneath — recast as a modern Korean medical thriller where the 'mask' is literal reconstructive surgery",
      "My ID Is Gangnam Beauty's exploration of identity and appearance taken to thriller territory — what happens when the face you see in the mirror belongs to someone else's life?",
      "Daredevil's blind-protagonist-who-perceives-more-than-sighted-people structure: losing one sense forces reliance on others, and the show uses this beautifully in both medical and romantic contexts"
    ]
  },

  {
    id: 'like-flowers-in-sand',
    title: 'Like Flowers in Sand',
    year: 2024,
    episodes: 8,
    synopsis: "A data analyst returns to her tiny ssireum (Korean wrestling) hometown after ten years in Seoul — officially to research rural demographics, actually to confront the childhood friend she left behind and the feelings she's been avoiding since high school. Baek Du-sik is still wrestling, still in the same town, still the same steadfast person she ran from because staying felt too easy and too scary. An eight-episode romance that uses the rhythms of a small Korean town — its gossip, its rituals, its unbreakable memory — to tell a story about the terrifying simplicity of going home.",
    genres: ['romance', 'drama', 'slice-of-life'],
    themes: ['homecoming', 'childhood-love', 'small-town-life', 'facing-the-past', 'simplicity-vs-ambition'],
    tropes: ['childhood-friends-to-lovers', 'return-to-hometown', 'slow-burn', 'second-chance-romance', 'small-town-romance', 'unrequited-love-requited'],
    tone: ['warm', 'melancholic', 'tender', 'quiet', 'nostalgic'],
    setting: ['modern', 'small-town', 'rural', 'wrestling-arena', 'korean-countryside'],
    characterTypes: ['returning-city-woman', 'steadfast-hometown-man', 'gossipy-neighbors', 'old-friends', 'traditional-parents'],
    streaming: { netflix: true },
    network: 'JTBC',
    actors: [
      { name: 'Jang Dong-yoon', role: 'Baek Du-sik', isLead: true },
      { name: 'Lee Joo-myung', role: 'Oh Yu-jin', isLead: true }
    ],
    matchReasoningHints: [
      "Normal People's 'two people who can't stop orbiting each other across years and distance' intimacy — same quiet devastation, different cultural texture, with a Korean small-town warmth that Connell and Marianne's Dublin never had",
      "Hometown Cha-Cha-Cha's return-to-coastal-town formula, but eight episodes means zero filler — every scene earns its place and the romance moves at a pace that respects both characters",
      "Friday Night Lights' small-town sports community energy (ssireum instead of football) — the wrestling isn't background, it's woven into the town's identity and the characters' emotional lives",
      "Our Beloved Summer's 'childhood connection that neither person can outrun' melancholy — both shows understand that the scariest love is the kind that's been waiting for you to come back",
      "When Harry Met Sally's central question — can the person who knows you best become the person you love? — answered through Korean ssireum matches and grandmother's cooking instead of New York diners"
    ]
  },

  {
    id: 'iron-family',
    title: 'Iron Family',
    year: 2024,
    episodes: 50,
    synopsis: "The Lee family has run a traditional Korean iron-works business for three generations — and the fourth generation is tearing it apart. Between the eldest daughter who wants to modernize, the second son who wants to sell, the youngest who wants nothing to do with any of it, and the patriarch who built it all with his literal hands, every family dinner is a board meeting and every board meeting is a family dinner. A sprawling family drama about inheritance, pride, the things parents build that children don't want, and the discovery that the family business was never really about the business.",
    genres: ['drama', 'family', 'slice-of-life'],
    themes: ['family-legacy', 'generational-conflict', 'tradition-vs-modernity', 'filial-duty', 'identity'],
    tropes: ['family-business-drama', 'generational-clash', 'family-reunion', 'prodigal-child', 'patriarch-vs-children', 'inheritance-battle'],
    tone: ['emotional', 'dramatic', 'warm', 'heartfelt', 'bittersweet'],
    setting: ['modern', 'family-home', 'small-business', 'urban', 'workshop'],
    characterTypes: ['stubborn-patriarch', 'ambitious-eldest', 'resentful-middle-child', 'rebellious-youngest', 'long-suffering-mother'],
    streaming: { netflix: true },
    network: 'KBS2',
    actors: [
      { name: 'Kim Jung-hyun', role: 'Lee Si-woo', isLead: true },
      { name: 'Kang Na-ra', role: 'supporting', isLead: false }
    ],
    matchReasoningHints: [
      "Succession's 'family destroying itself over a business none of them love for the right reasons' energy — Korean family drama pacing, but the power dynamics and resentments are equally sharp",
      "This Is Us fans who want a multi-generational family saga where every character's relationship to the family legacy reveals something different about what they're running from",
      "Shameless' 'family is the thing you can't escape no matter how fast you run' thesis, played with Korean family duty obligations that add a cultural pressure American family dramas lack",
      "Reply 1988's warm, detailed family portraiture — Iron Family has the same gift for making you feel like you're sitting at the Lee family table, watching real people negotiate love through argument",
      "The family dinners in this show operate the way Thanksgiving scenes do in great American dramas — every unresolved tension surfaces over food, and the show never looks away"
    ]
  },

  {
    id: 'the-kidnapping-day',
    title: 'The Kidnapping Day',
    year: 2023,
    episodes: 12,
    synopsis: "A recently fired, deeply unlucky middle-aged man decides to kidnap the daughter of a wealthy family for ransom — and discovers, about fifteen minutes into the kidnapping, that the girl is smarter than he is, more resourceful than he is, and has been running her own side-scheme that makes his look embarrassingly amateurish. What follows is a chaotic buddy comedy between a hostage and her incompetent kidnapper, both of whom are being hunted by people considerably more dangerous than either of them expected. A comedy-thriller that treats its ridiculous premise with perfect sincerity.",
    genres: ['comedy', 'thriller', 'drama', 'crime'],
    themes: ['unlikely-bonds', 'second-chances', 'class-divide', 'underdog-triumph', 'found-family'],
    tropes: ['incompetent-criminal', 'genius-child', 'unlikely-duo', 'hostage-becomes-partner', 'comedy-of-errors', 'heart-of-gold-criminal'],
    tone: ['comedic', 'heartwarming', 'chaotic', 'fun', 'action-packed'],
    setting: ['modern', 'urban', 'suburban', 'hideout', 'on-the-run'],
    characterTypes: ['bumbling-kidnapper', 'genius-precocious-child', 'dangerous-real-villains', 'frantic-wealthy-family', 'clueless-police'],
    streaming: { netflix: true },
    network: 'ENA',
    actors: [
      { name: 'Yoon Kye-sang', role: 'Choi Ro-ok', isLead: true },
      { name: 'Park Hee-bon', role: 'supporting', isLead: false }
    ],
    matchReasoningHints: [
      "Home Alone's 'child outsmarts adults' satisfaction reversed — here the child outsmarts her own kidnapper, and they end up as reluctant allies against actually scary people",
      "The Family Plan's 'incompetent criminal discovers parental instincts' comedy — the relationship between kidnapper and hostage evolving into genuine care is the show's secret weapon",
      "Léon: The Professional's unlikely-protector premise played for comedy instead of tragedy — a dangerous man discovering he'd rather protect this kid than profit from her",
      "Psych's 'crime plot held together by a charismatic idiot and someone much smarter' buddy dynamic — the comedy lands because both characters are genuinely competent in different, complementary ways",
      "Vincenzo's 'criminal with a moral code' charm: Yoon Kye-sang makes the kidnapper so likeable that you're rooting for his crime to work, then rooting even harder when it doesn't"
    ]
  },

  {
    id: 'black-out',
    title: 'Black Out',
    year: 2024,
    episodes: 12,
    synopsis: "A detective wakes up in a hospital with no memory, covered in someone else's blood, and holding a wedding ring that isn't his. As he reconstructs his identity, every clue suggests he wasn't the detective investigating the crime — he was the prime suspect. A noir amnesia thriller that turns the 'unreliable narrator' into the entire structural framework: every memory fragment he recovers changes the story, and the audience is never more than one revelation ahead of him.",
    genres: ['thriller', 'mystery', 'crime', 'drama'],
    themes: ['identity', 'memory', 'guilt', 'truth', 'moral-ambiguity'],
    tropes: ['amnesia', 'unreliable-narrator', 'was-i-the-villain', 'detective-becomes-suspect', 'noir', 'plot-twist'],
    tone: ['dark', 'tense', 'mysterious', 'noir', 'intense'],
    setting: ['modern', 'urban', 'hospital', 'police-station', 'noir-seoul'],
    characterTypes: ['amnesiac-detective', 'suspicious-partner', 'mysterious-wife', 'victim-or-witness', 'corrupt-colleagues'],
    streaming: { netflix: true },
    network: 'MBC',
    actors: [
      { name: 'Go Jun', role: 'Seo Moo-hyuk', isLead: true },
      { name: 'Byun Yo-han', role: 'Jung Gi-ho', isLead: true }
    ],
    matchReasoningHints: [
      "Memento's structural genius — a protagonist reconstructing identity from fragments, where every new piece changes the picture entirely — adapted into K-drama serialized suspense",
      "Gone Girl's 'the person you trust most might be the person you should fear most' paranoia — every relationship in this show is potentially a lie, including the detective's relationship with himself",
      "Shutter Island fans who love 'is the investigator actually the patient?' psychological thrillers — this uses the same structure with K-drama production values and a tighter episode count",
      "Beyond Evil's unreliable-detective energy taken to its logical extreme — if Beyond Evil asked 'could the detective be the killer?', this show asks 'what if the detective can't remember?'",
      "The Bourne Identity's 'waking up with skills and wounds and no memory' thriller premise: same kinetic urgency, but focused on a crime mystery instead of spy action"
    ]
  },

  // ─── Disney+ 2024–2025 ─────────────────────────────────────────────────────

  {
    id: 'donggung',
    title: 'Donggung',
    year: 2025,
    episodes: 16,
    synopsis: "Crown Prince Yi Geon has been raised in perfect isolation, groomed to become a ruler who leads with reason, not feeling — until a woman from outside the palace walls crashes into his world and makes him question whether a king who has never felt anything can govern a kingdom full of people who feel everything. A historical romance that uses the Joseon court as a pressure cooker for two people from incompatible worlds who find each other impossibly necessary.",
    genres: ['historical', 'romance', 'drama'],
    themes: ['forbidden-love', 'duty-vs-desire', 'emotional-awakening', 'palace-intrigue', 'sacrifice'],
    tropes: ['prince-and-commoner', 'forbidden-love', 'slow-burn', 'palace-romance', 'emotional-walls-breaking', 'star-crossed-lovers'],
    tone: ['romantic', 'beautiful', 'emotional', 'dramatic', 'bittersweet'],
    setting: ['joseon', 'palace', 'historical', 'royal-court', 'korean-countryside'],
    characterTypes: ['emotionally-closed-prince', 'free-spirited-commoner', 'scheming-court-officials', 'loyal-eunuch', 'rival-noblewoman'],
    streaming: { disney_plus: true },
    network: 'Disney+ Original',
    actors: [
      { name: 'Cha Eun-woo', role: 'Crown Prince Yi Geon', isLead: true },
      { name: 'Kim Hye-yoon', role: 'female lead', isLead: true }
    ],
    matchReasoningHints: [
      "Pride and Prejudice's 'emotionally guarded person slowly cracked open by someone who refuses to be impressed by their status' romance — Cha Eun-woo as the Joseon Mr. Darcy is inspired casting",
      "The Crown's palace-as-prison metaphor: a person born into power discovering that royalty is the most elegant cage, and love is the only thing that makes the walls visible",
      "Bridgerton fans who want historical romance with gorgeous costumes and forbidden longing — Joseon palace aesthetics deliver on visual spectacle, and the class barriers are culturally specific and deeply felt",
      "Mr. Sunshine's 'love that transcends every social barrier in Joseon Korea' emotional architecture — different era, same impossible romance made compelling by the specificity of what's being sacrificed",
      "Romeo and Juliet's structure but with K-drama pacing — the show earns its forbidden-love stakes through 16 episodes of proximity, political danger, and the slow realization that walking away is no longer an option"
    ]
  },

  {
    id: 'doubt',
    title: 'Doubt',
    year: 2025,
    episodes: 16,
    synopsis: "A veteran defense attorney who has never lost a case takes on a client he privately believes is guilty — and a young prosecutor who idolized him discovers that the idol's winning record might be built on something darker than brilliance. As their cases collide, the show dismantles the fiction that justice is clean, interrogating every participant in the legal system: the lawyer who wins at any cost, the prosecutor who believes conviction equals truth, and the clients caught between them. A legal thriller that puts the audience on the jury.",
    genres: ['legal', 'thriller', 'drama'],
    themes: ['justice', 'moral-compromise', 'mentorship-corrupted', 'truth-vs-winning', 'systemic-flaws'],
    tropes: ['mentor-vs-protege', 'legal-cat-and-mouse', 'moral-grey-area', 'courtroom-drama', 'idol-falls', 'truth-at-any-cost'],
    tone: ['intense', 'cerebral', 'dark', 'dramatic', 'gripping'],
    setting: ['modern', 'courtroom', 'law-firm', 'prosecutor-office', 'urban'],
    characterTypes: ['morally-grey-defense-lawyer', 'idealistic-prosecutor', 'ambiguous-defendant', 'corrupt-judicial-system', 'truth-seeking-journalist'],
    streaming: { disney_plus: true },
    network: 'Disney+ Original',
    actors: [
      { name: 'Han Suk-kyu', role: 'Shin Joong-han', isLead: true },
      { name: 'Shin Sae-kyeong', role: 'Ha Yeon-joo', isLead: true }
    ],
    matchReasoningHints: [
      "A Few Good Men's 'can you handle the truth?' courtroom intensity — the mentor-protégé dynamic here carries the same electric tension, and the trial scenes are masterfully constructed",
      "Better Call Saul fans who understand that a brilliant lawyer operating in moral grey areas is the most compelling character type in legal drama — Han Suk-kyu's performance is that caliber",
      "The Lincoln Lawyer's defense-attorney moral gymnastics: 'I know my client is guilty but the system says I defend them' tension, played with Korean legal specificity that adds new dimensions",
      "Law School's K-drama legal thriller foundation elevated by Han Suk-kyu's gravitas — if Law School was the promising student, Doubt is the fully realized master class",
      "Primal Fear's 'is the defendant performing innocence or genuinely innocent?' ambiguity sustained across 16 episodes — the show refuses to let you be certain, and that uncertainty is addictive"
    ]
  },

  {
    id: 'the-impossible-heir',
    title: 'The Impossible Heir',
    year: 2024,
    episodes: 12,
    synopsis: "In the gleaming headquarters of Korea's most powerful conglomerate, a scholarship student from nowhere has clawed his way into the inner circle of the chaebol heir — and the friendship that everyone envies is actually the most dangerous game either of them has ever played. Han Tae-oh doesn't want to be the heir's friend; he wants everything the heir was born with. A chaebol thriller about class, obsession, and the specific violence of ambition in a society where your starting position determines your ceiling.",
    genres: ['thriller', 'drama', 'romance'],
    themes: ['class-warfare', 'ambition', 'obsession', 'wealth', 'betrayal'],
    tropes: ['outsider-enters-elite', 'class-divide', 'toxic-friendship', 'love-triangle', 'social-climbing', 'chaebol-drama'],
    tone: ['dark', 'stylish', 'tense', 'seductive', 'dramatic'],
    setting: ['modern', 'corporate', 'elite-school', 'chaebol-world', 'penthouse'],
    characterTypes: ['ambitious-outsider', 'entitled-heir', 'contested-love-interest', 'manipulative-patriarch', 'disposable-pawns'],
    streaming: { disney_plus: true },
    network: 'Disney+ Original',
    actors: [
      { name: 'Lee Jae-wook', role: 'Han Tae-oh', isLead: true },
      { name: 'Lee Jun-young', role: 'Kang In-ha', isLead: true },
      { name: 'Hong Su-zu', role: 'Yoon Na-hee', isLead: true }
    ],
    matchReasoningHints: [
      "The Talented Mr. Ripley's obsessive class infiltration — a man who wants not just to be near wealth but to become it, and the friendship that's actually a long con even the con artist doesn't fully understand",
      "Gossip Girl's elite-world aesthetics with genuine menace underneath — this isn't campy rich-people drama, it's a thriller about what happens when the scholarship kid stops being grateful",
      "Parasite's class-warfare thesis serialized: the Kim family's infiltration played as a long game between two young men where every gift is a debt and every kindness is leverage",
      "Succession's 'proximity to wealth is its own form of violence' argument applied to Korean chaebol culture — the golden cage here is even more ornate and the exits are even fewer",
      "Penthouse fans who want chaebol intrigue with more psychological subtlety — the manipulation here is quieter, the performances are more controlled, and the betrayals cut deeper because they're earned over episodes"
    ]
  }

];
