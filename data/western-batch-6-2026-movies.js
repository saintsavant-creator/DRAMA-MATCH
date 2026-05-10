/**
 * Western Movies — Batch 6 (2026)
 * 10 trending/acclaimed films with high cultural buzz
 * Added: 2026-04-15
 *
 * Dedup verified against all 719+ existing western IDs before adding.
 */

module.exports = [
  {
    id: "wicked-2024",
    title: "Wicked",
    year: 2024,
    runtime: 160,
    synopsis: "The untold story of the witches of Oz — before Dorothy's arrival. Elphaba, a misunderstood green-skinned girl with extraordinary magic, forms an unlikely friendship with Glinda, the popular and ambitious blonde. When Elphaba discovers the Wizard's dark corruption, their friendship is tested and a legend is born.",
    genres: ["Musical", "Fantasy", "Drama", "Romance"],
    themes: ["friendship", "prejudice", "identity", "power", "sacrifice", "coming-of-age", "truth-vs-propaganda"],
    tropes: ["unlikely-friendship", "enemies-become-allies", "chosen-one", "corruption-revealed", "first-love", "social-outcast"],
    tone: ["grand", "emotional", "spectacular", "bittersweet"],
    setting: ["fantasy-world", "magical-academy", "magical-kingdom"],
    characterTypes: ["misunderstood-heroine", "popular-girl-with-heart", "corrupt-ruler", "loyal-mentor", "naive-prince"],
    streaming: { peacock: true, amazon_prime: true },
    actors: [
      { name: "Cynthia Erivo", role: "Elphaba", isLead: true },
      { name: "Ariana Grande", role: "Glinda", isLead: true },
      { name: "Jonathan Bailey", role: "Fiyero", isLead: true }
    ],
    matchReasoningHints: [
      "The female friendship fractured by power, love, and truth is at the heart of K-dramas like 'The Glory', 'Mine', and 'Sky Castle'",
      "Wicked's outcasted heroine discovering systemic corruption maps to K-drama heroines in 'Extraordinary Attorney Woo' and 'Strong Girl Bong-soon'",
      "Fantasy worlds with corrupted authority and chosen heroines resonate with Korean fantasy like 'Arthdal Chronicles' and 'The Crowned Clown'",
      "The bittersweet first love triangle bridges to K-drama romances in 'Boys Over Flowers' and 'Goblin' where love can never be simple",
      "A misunderstood girl who becomes legend through sacrifice echoes the emotional arcs of 'Hotel Del Luna' and 'Moon Lovers: Scarlet Heart Ryeo'"
    ]
  },

  {
    id: "emilia-perez",
    title: "Emilia Pérez",
    year: 2024,
    runtime: 130,
    synopsis: "A Mexican cartel boss hires a sharp lawyer to help fake his own death and undergo gender transition surgery — becoming Emilia Pérez and starting a new life. Years later, Emilia wants to reconnect with the family she abandoned, creating a web of impossible complications. A bold, genre-defying musical crime drama.",
    genres: ["Musical", "Crime", "Drama", "Thriller"],
    themes: ["identity", "transformation", "family", "crime", "redemption", "gender", "secret-past", "love-and-loss"],
    tropes: ["identity-transformation", "hidden-past", "family-secrets", "crime-world-escape", "musical-storytelling", "dangerous-reunion"],
    tone: ["bold", "subversive", "emotional", "operatic"],
    setting: ["mexico-city", "underworld", "domestic", "international"],
    characterTypes: ["transformed-protagonist", "trapped-lawyer", "suspicious-wife", "loving-enemy", "dangerous-villain"],
    streaming: { netflix: true },
    actors: [
      { name: "Karla Sofía Gascón", role: "Emilia Pérez", isLead: true },
      { name: "Zoe Saldaña", role: "Rita Mora Castro", isLead: true },
      { name: "Selena Gomez", role: "Jessi Del Monte", isLead: true }
    ],
    matchReasoningHints: [
      "A powerful person faking death and reinventing themselves entirely maps to K-drama identity-switch plots in 'Kill Me, Heal Me' and 'Hyde, Jekyll, Me'",
      "The painful impossibility of reconnecting with a family you abandoned echoes K-drama tearjerkers like 'My Mister', 'Reply 1988', and 'Move to Heaven'",
      "Emilia Pérez's genre defiance — crime musical with tender family drama at its core — bridges to experimental K-dramas like 'It's Okay to Not Be Okay'",
      "The trapped lawyer serving a dangerous client mirrors K-drama setups in 'Vincenzo', 'Lawless Lawyer', and 'Bad Guys'",
      "The film's operatic emotional scale and identity themes resonate with K-dramas that take big swings — 'My Name', 'The Glory', 'Doctor John'"
    ]
  },

  {
    id: "anora",
    title: "Anora",
    year: 2024,
    runtime: 139,
    synopsis: "Anora, a young sex worker in New York, meets and impulsively marries the son of a Russian oligarch. When his parents find out, they send fixers to annul the marriage — and Anora must fight for her life, her love, and her dignity in a darkly comedic chase through New York that becomes about much more than a marriage.",
    genres: ["Drama", "Comedy", "Romance"],
    themes: ["class-divide", "love-vs-reality", "survival", "dignity", "exploitation", "fairy-tale-vs-truth", "self-worth"],
    tropes: ["cinderella-story-subverted", "class-conflict", "fake-fairytale", "survival-thriller", "unlikely-love", "reality-check"],
    tone: ["raw", "funny", "heartbreaking", "authentic"],
    setting: ["new-york", "russian-oligarch-world", "strip-club", "chase-across-city"],
    characterTypes: ["fierce-working-class-heroine", "naive-rich-boy", "ruthless-fixer", "manipulative-parent", "reluctant-ally"],
    streaming: { amazon_prime: true, neon: true },
    actors: [
      { name: "Yura Borisov", role: "Igor", isLead: true },
      { name: "Mikey Madison", role: "Anora", isLead: true },
      { name: "Yuriy Borisov", role: "Igor", isLead: true }
    ],
    matchReasoningHints: [
      "The Cinderella story that brutally exposes class reality is a K-drama obsession — 'Boys Over Flowers', 'My Love from the Star', and 'Crash Landing on You' all interrogate this",
      "A fierce, self-sufficient woman who refuses to be discarded by wealth maps to K-drama heroines in 'Strong Girl Bong-soon' and 'What's Wrong with Secretary Kim'",
      "Anora's class-conflict romance subversion resonates with Korean melodramas like 'Something in the Rain' where real-world obstacles crush love stories",
      "The unexpected kindness of a fixer toward his target echoes the morally grey ally dynamic of K-dramas like 'Vincenzo' and 'Bad Guys'",
      "Fans drawn to Anora's raw emotional authenticity will love K-films like 'Parasite' and K-dramas like 'My Liberation Notes' that refuse easy endings"
    ]
  },

  {
    id: "a-complete-unknown",
    title: "A Complete Unknown",
    year: 2025,
    runtime: 141,
    synopsis: "The story of Bob Dylan's meteoric rise in the New York folk music scene of the early 1960s, from his arrival as an unknown 19-year-old to his explosive decision to go electric at the Newport Folk Festival in 1965. An intimate portrait of genius, ambition, love, and the price of artistic revolution.",
    genres: ["Biographical Drama", "Music", "Historical Drama"],
    themes: ["artistic-integrity", "ambition", "love", "betrayal", "identity", "revolution", "sacrifice", "fame"],
    tropes: ["rise-to-fame", "tortured-artist", "love-triangle", "mentor-and-protégé", "artistic-betrayal", "genre-defining-moment"],
    tone: ["intimate", "electric", "bittersweet", "atmospheric"],
    setting: ["1960s-new-york", "folk-music-scene", "concert-halls", "greenwich-village"],
    characterTypes: ["visionary-artist", "devoted-mentor", "torn-love-interest", "establishment-figure", "loyal-friend"],
    streaming: { disney_plus: true, amazon_prime: true },
    actors: [
      { name: "Timothée Chalamet", role: "Bob Dylan", isLead: true },
      { name: "Elle Fanning", role: "Sylvie Russo", isLead: true },
      { name: "Monica Barbaro", role: "Joan Baez", isLead: true }
    ],
    matchReasoningHints: [
      "A tortured genius destroying relationships in pursuit of greatness is a beloved K-drama character type — 'It's Okay to Not Be Okay' and 'My Mister' live here",
      "The mentor-protégé musical relationship and eventual ideological split echo the emotional beats of Korean historical dramas about art and rebellion",
      "Period romantic triangles with artistic stakes resonate with K-drama historical romances in 'Mr. Sunshine' and 'The Red Sleeve'",
      "Fans of intimate portrait films about genius and its costs will adore K-dramas like 'Reply 1994' that capture era-defining cultural moments",
      "Dylan's identity evolution — shedding who he was to become who he must be — mirrors the identity transformation arcs in K-dramas like 'Kill Me, Heal Me'"
    ]
  },

  {
    id: "the-brutalist",
    title: "The Brutalist",
    year: 2024,
    runtime: 215,
    synopsis: "Hungarian-Jewish architect László Tóth emigrates to America after WWII, determined to rebuild his life and pursue his visionary architecture. But the American dream proves brutal — a wealthy patron's obsession, his wife's arrival from Hungary, and the slow erasure of his identity test everything he has survived for.",
    genres: ["Historical Drama", "Epic Drama", "Immigration"],
    themes: ["immigration", "ambition", "identity", "trauma", "exploitation", "artistic-vision", "love-and-sacrifice", "the-american-dream"],
    tropes: ["immigrant-story", "patron-exploitation", "long-separation", "artist-vs-patron", "survival", "epic-scope"],
    tone: ["epic", "devastating", "ambitious", "slow-burn"],
    setting: ["postwar-europe", "1950s-america", "pennsylvania", "european-flashbacks"],
    characterTypes: ["visionary-immigrant", "obsessive-patron", "devoted-wife", "survivor-hero", "naive-dreamer"],
    streaming: { peacock: true, amazon_prime: true },
    actors: [
      { name: "Adrien Brody", role: "László Tóth", isLead: true },
      { name: "Felicity Jones", role: "Erzsébet Tóth", isLead: true },
      { name: "Guy Pearce", role: "Harrison Lee Van Buren", isLead: true }
    ],
    matchReasoningHints: [
      "The immigrant genius exploited by a powerful patron is a story Korean melodrama understands deeply — 'My Mister', 'Misaeng', and 'Something in the Rain' all explore power imbalances that crush talent",
      "Long spousal separation followed by a difficult reunion resonates with K-drama heartbreaks in 'Crash Landing on You' and 'The K2'",
      "An artist forced to choose between his vision and survival mirrors K-drama creatives in 'Kill Me, Heal Me' and 'It's Okay to Not Be Okay'",
      "The Brutalist's epic three-hour scope and emotional devastation bridge to Korean epics like 'Mr. Sunshine' and 'Six Flying Dragons' that reward patience",
      "Fans of immigrant survival stories with romantic longing will find rich veins in Korean diaspora dramas and melodramas like 'Pachinko'"
    ]
  },

  {
    id: "nosferatu-2024",
    title: "Nosferatu",
    year: 2024,
    runtime: 132,
    synopsis: "A Gothic romance horror film retelling the classic vampire tale. Young estate agent Thomas Hutter travels to Transylvania to complete a land deal with the ancient Count Orlok — a being of pure darkness who has already become obsessed with Thomas's wife Ellen, whose haunted past connects her to the Count in ways that transcend the living.",
    genres: ["Horror", "Gothic Romance", "Historical Drama"],
    themes: ["obsession", "love-and-death", "sacrifice", "evil", "possession", "destiny", "dark-romance"],
    tropes: ["gothic-horror", "doomed-love", "supernatural-villain", "sacrificial-heroine", "dark-obsession", "period-setting"],
    tone: ["dark", "atmospheric", "terrifying", "romantic", "operatic"],
    setting: ["19th-century-germany", "transylvania", "gothic-castle", "fog-drenched-streets"],
    characterTypes: ["innocent-heroine", "devoted-husband", "ancient-evil", "wise-professor", "tragic-romantic"],
    streaming: { peacock: true },
    actors: [
      { name: "Bill Skarsgård", role: "Count Orlok", isLead: true },
      { name: "Lily-Rose Depp", role: "Ellen Hutter", isLead: true },
      { name: "Nicholas Hoult", role: "Thomas Hutter", isLead: true }
    ],
    matchReasoningHints: [
      "A supernatural entity's transcendent dark obsession with a human woman is a beloved K-drama trope in 'Goblin', 'Hotel Del Luna', and 'My Love from the Star'",
      "Gothic romance where a woman is the only one who can end an ancient curse mirrors K-drama fantasy heroines in 'Moon Lovers: Scarlet Heart Ryeo'",
      "Nosferatu's atmospheric period horror resonates with Korean period horror like 'Kingdom' and supernatural dramas like 'The Guest'",
      "The sacrificial heroine who knowingly walks into darkness to save her husband echoes K-drama female heroines in 'Guardian: The Lonely and Great God'",
      "Fans of dark, operatic love stories with inevitable tragic ends will find their Korean matches in 'Moon Lovers', 'Goblin', and 'Chicago Typewriter'"
    ]
  },

  {
    id: "the-wild-robot",
    title: "The Wild Robot",
    year: 2024,
    runtime: 102,
    synopsis: "Robot ROZZUM unit 7134 — Roz — is shipwrecked on a wild island. To survive, she adapts to her environment and accidentally becomes the mother to an orphaned gosling named Brightbill. As Roz raises Brightbill against all odds and the changing seasons, she discovers what it truly means to live, love, and belong.",
    genres: ["Animation", "Adventure", "Drama", "Family"],
    themes: ["motherhood", "belonging", "survival", "identity", "found-family", "nature", "grief", "love-transcending-nature"],
    tropes: ["found-family", "unlikely-parent", "outsider-in-new-world", "growing-up-story", "sacrifice", "heartwarming-ending"],
    tone: ["heartwarming", "emotional", "visually-stunning", "family-friendly", "tearjerker"],
    setting: ["wild-island", "nature", "animal-world", "seasons"],
    characterTypes: ["outsider-hero", "adopted-child", "loving-community", "gentle-giant", "growing-protagonist"],
    streaming: { peacock: true, amazon_prime: true },
    actors: [
      { name: "Lupita Nyong'o", role: "Roz (voice)", isLead: true },
      { name: "Kit Connor", role: "Brightbill (voice)", isLead: true },
      { name: "Pedro Pascal", role: "Fink (voice)", isLead: true }
    ],
    matchReasoningHints: [
      "An outsider who becomes an unexpected parent and builds a found-family through unconditional love is the exact premise of beloved K-dramas like 'My Mister' and 'It's Okay to Not Be Okay'",
      "The Wild Robot's emotional mother-child bond and sacrifice resonate with Korean melodramas about maternal love like 'Reply 1988' and 'My Liberation Notes'",
      "Fans drawn to stories about belonging for those who feel they don't fit will love K-dramas like 'Extraordinary Attorney Woo' and 'Strong Girl Bong-soon'",
      "The film's breathtaking natural beauty and slow seasons mirror the landscape-rich emotional pacing of Korean dramas like 'When the Camellia Blooms'",
      "Wild Robot's combination of found-family warmth and devastating emotional climax is the K-drama formula distilled to its purest form"
    ]
  },

  {
    id: "carry-on-netflix",
    title: "Carry On",
    year: 2024,
    runtime: 118,
    synopsis: "A young TSA agent at Los Angeles International Airport is coerced by a mysterious traveller to let a dangerous package through security on Christmas Eve. As he's blackmailed into betraying everything he stands for, a relentless Homeland Security agent closes in — setting the stage for an explosive airport thriller.",
    genres: ["Action", "Thriller", "Crime"],
    themes: ["moral-dilemma", "coercion", "justice", "sacrifice", "loyalty", "survival", "doing-the-right-thing"],
    tropes: ["ordinary-hero-in-crisis", "blackmail-plot", "ticking-clock", "reluctant-accomplice", "cat-and-mouse", "christmas-thriller"],
    tone: ["tense", "fast-paced", "suspenseful", "action-packed"],
    setting: ["los-angeles-airport", "christmas-eve", "urban-action"],
    characterTypes: ["ordinary-man-extraordinary-situation", "ruthless-villain", "relentless-detective", "unwilling-accomplice", "innocent-bystanders"],
    streaming: { netflix: true },
    actors: [
      { name: "Taron Egerton", role: "Ethan Kopek", isLead: true },
      { name: "Jason Bateman", role: "The Traveller", isLead: true },
      { name: "Sofia Carson", role: "Agent Nora Vásquez", isLead: true }
    ],
    matchReasoningHints: [
      "An ordinary man blackmailed into a terrorist plot with an innocent partner at stake is the premise of Korean thrillers like 'Tunnel', 'The Terror Live', and 'Midnight Runners'",
      "Carry On's ticking-clock airport action translates into Korean blockbusters like 'Train to Busan' and 'Emergency Declaration'",
      "The moral dilemma of complying with a villain to protect loved ones echoes K-drama setups in 'Voice', 'Missing: The Other Side', and 'Flower of Evil'",
      "The relentless agent on the wrong side of a conspiracy maps to Korean procedurals like 'Signal' and 'Stranger' where heroes fight against institutional blind spots",
      "Fans who loved Carry On's propulsive action and emotional stakes will devour Korean action thrillers like 'The Gangster, the Cop, the Devil'"
    ]
  },

  {
    id: "nickel-boys",
    title: "Nickel Boys",
    year: 2024,
    runtime: 140,
    synopsis: "Based on Colson Whitehead's Pulitzer Prize-winning novel. At a brutal reform school in Florida in the 1960s, two Black teenagers — idealistic Elwood and pragmatic Turner — forge a defining friendship that shapes everything that follows. Told through an immersive first-person visual perspective, the film is a shattering meditation on race, justice, and survival.",
    genres: ["Historical Drama", "Coming-of-Age", "Drama"],
    themes: ["racial-injustice", "survival", "friendship", "hope", "systemic-violence", "identity", "coming-of-age", "trauma"],
    tropes: ["unlikely-friendship", "institutional-abuse", "survival-story", "coming-of-age", "hope-vs-despair", "historical-injustice"],
    tone: ["devastating", "intimate", "hopeful", "formally-innovative"],
    setting: ["1960s-florida", "reform-school", "american-south", "institutional"],
    characterTypes: ["idealistic-young-hero", "pragmatic-survivor", "brutal-authority", "unlikely-ally", "traumatized-youth"],
    streaming: { amazon_prime: true },
    actors: [
      { name: "Ethan Herisse", role: "Elwood Curtis", isLead: true },
      { name: "Brandon Wilson", role: "Turner", isLead: true },
      { name: "Hamish Linklater", role: "Spencer", isLead: false }
    ],
    matchReasoningHints: [
      "Two young men with opposite philosophies forming a life-defining friendship under brutal circumstances maps to K-dramas like 'Prison Playbook' and 'D.P.'",
      "Institutional injustice and the fight for dignity against a corrupt system echo Korean dramas like 'Juvenile Justice', 'Extraordinary Attorney Woo', and 'D.P.'",
      "The coming-of-age survival story in a brutal setting resonates with Korean youth dramas like 'Extracurricular' and 'All of Us Are Dead'",
      "Nickel Boys' formally inventive storytelling and emotional devastation bridge to Korean cinematic dramas that prioritise feeling over plot",
      "Fans moved by stories of friendship that transcends trauma and defines identity will love K-dramas like 'Reply 1988' and 'Move to Heaven'"
    ]
  },

  {
    id: "black-bag-2025",
    title: "Black Bag",
    year: 2025,
    runtime: 94,
    synopsis: "Elite MI6 spy George Woodhouse is tasked with investigating a potential mole within British intelligence — only to discover that his own wife, fellow agent Kathryn, is among the suspects. A sleek, sophisticated espionage thriller about love, betrayal, and the terrifying cost of truly knowing another person.",
    genres: ["Spy Thriller", "Drama", "Mystery", "Romance"],
    themes: ["trust", "betrayal", "marriage", "espionage", "loyalty", "truth", "power"],
    tropes: ["spy-vs-spy", "marriage-under-threat", "mole-hunt", "betrayal-mystery", "sophisticated-espionage", "love-in-danger"],
    tone: ["sleek", "witty", "sophisticated", "tense"],
    setting: ["london", "intelligence-world", "europe", "high-society"],
    characterTypes: ["stoic-spy", "brilliant-wife", "suspicious-colleague", "ruthless-agency", "loyal-partner"],
    streaming: { peacock: true, amazon_prime: true },
    actors: [
      { name: "Michael Fassbender", role: "George Woodhouse", isLead: true },
      { name: "Cate Blanchett", role: "Kathryn St. Jean", isLead: true },
      { name: "Tom Burke", role: "Freddie Smalls", isLead: false }
    ],
    matchReasoningHints: [
      "Investigating whether your own spouse is a traitor while still in love is the most emotionally loaded spy premise — K-drama 'Flower of Evil' is the definitive Korean counterpart",
      "Sophisticated intelligence-world marriages under existential threat echo K-drama couples in 'The K2', 'Vagabond', and 'Mr. Sunshine'",
      "A husband and wife who are both brilliant operatives forced to distrust each other maps to 'My Love from the Star' and 'Crash Landing on You's' complicated partnership dynamics",
      "Black Bag's Soderbergh wit and emotional precision bridge to K-dramas that prioritise character intelligence over exposition — 'Stranger', 'Misaeng'",
      "Fans of suave espionage with genuine emotional stakes at the domestic level will adore Korean spy thrillers like 'Healer' and 'The K2'"
    ]
  }
];
