/**
 * Western Shows — Batch 8 (2026)
 * 25 hot/trending shows dominating streaming charts in 2025–2026
 * Added: 2026-04-15
 *
 * Dedup verified against all 754+ existing western IDs before adding.
 * Zero duplicates confirmed.
 */

module.exports = [
  {
    id: "high-potential",
    title: "High Potential",
    type: "show",
    year: 2024,
    seasons: 2,
    synopsis: "Morgan, a brilliant single mother working as a cleaning woman at a police precinct, has an uncanny ability to see patterns no one else can spot. When she helps crack a cold case that stumped seasoned detectives, she's recruited as an unconventional consultant — and becomes the department's most indispensable, chaotic asset. A megahit procedural that dominated ABC's fall 2024 season.",
    genres: ["Crime", "Comedy", "Drama", "Procedural"],
    themes: ["underdog", "female-genius", "class-divide", "found-family", "justice", "motherhood", "proving-yourself"],
    tropes: ["fish-out-of-water", "hidden-genius", "reluctant-partnership", "single-parent-hero", "workplace-comedy", "procedural-of-the-week"],
    tone: ["charming", "funny", "heartfelt", "fast-paced"],
    setting: ["police-precinct", "urban-america", "working-class"],
    characterTypes: ["overlooked-genius", "by-the-book-detective", "found-family-team", "doting-boss", "scrappy-outsider"],
    network: "ABC",
    streaming: { hulu: true, disney_plus: true },
    actors: [
      { name: "Kaitlin Olson", role: "Morgan", isLead: true },
      { name: "Daniel Sunjata", role: "Detective Karadec", isLead: true },
      { name: "Javicia Leslie", role: "Detective Selena Soto", isLead: false }
    ],
    matchReasoningHints: [
      "An underestimated genius from a working-class background who out-thinks elite professionals is the exact premise of beloved K-dramas like 'Strong Girl Bong-soon', 'Extraordinary Attorney Woo', and 'Weightlifting Fairy Kim Bok-joo'",
      "The reluctant partnership between a chaotic outsider and a rigid detective maps to classic K-drama odd-couple dynamics in 'Two Cops', 'Chief Kim', and 'Partners for Justice'",
      "High Potential's found-family police team that rallies around a single mother echoes the workplace warmth of 'Hospital Playlist' and 'Reply 1988'",
      "Fans who love seeing a brilliant, unconventional woman prove herself in a male-dominated institution will adore K-dramas like 'Juvenile Justice' and 'Pinocchio'",
      "The show's blend of genuinely clever procedural mysteries with warm comedy bridges to Korean hits 'The Uncanny Counter' and 'The Fiery Priest'"
    ]
  },

  {
    id: "brilliant-minds",
    title: "Brilliant Minds",
    type: "show",
    year: 2024,
    seasons: 1,
    synopsis: "Dr. Oliver Wolf is a visionary and unconventional neurologist at a prestigious New York hospital. His extraordinary insight into the mysteries of the human mind — and his refusal to follow the rules — helps him crack cases that baffle his colleagues. But his greatest mystery is managing his own extraordinary, difficult brain.",
    genres: ["Medical Drama", "Mystery", "Drama", "Procedural"],
    themes: ["genius", "neuroscience", "mental-health", "mentorship", "teamwork", "unconventional-thinking", "self-discovery"],
    tropes: ["maverick-doctor", "brilliant-eccentric", "diagnostic-puzzle", "mentor-teaching", "workplace-drama", "procedural-of-the-week"],
    tone: ["smart", "emotional", "inspiring", "fast-paced"],
    setting: ["new-york-hospital", "neurology-ward", "urban"],
    characterTypes: ["eccentric-genius", "skeptical-superior", "loyal-resident", "difficult-patient", "wise-mentor"],
    network: "NBC",
    streaming: { peacock: true, amazon_prime: true },
    actors: [
      { name: "Zachary Quinto", role: "Dr. Oliver Wolf", isLead: true },
      { name: "Teddy Sears", role: "Dr. Quinn", isLead: false },
      { name: "Ashleigh LaThrop", role: "Dr. Dana Carrera", isLead: false }
    ],
    matchReasoningHints: [
      "An unconventional genius doctor who solves neurological mysteries through unorthodox thinking is the direct Western cousin of K-dramas like 'Good Doctor', 'Dr. Romantic', and 'Ghost Doctor'",
      "Brilliant Minds' maverick who struggles to fit conventional structures while saving lives resonates with Korean medical heroes in 'Dr. Romantic 2' and 'Hospital Playlist'",
      "Fans drawn to the 'difficult genius with emotional depth' archetype will find perfect matches in K-dramas like 'It's Okay to Not Be Okay' and 'Psychopath Diary'",
      "The mentor-student dynamic and team of sharp residents learning from a brilliant eccentric mirrors beloved workplace dynamics in 'Misaeng' and 'Dr. Romantic'",
      "The show's exploration of neuroscience and consciousness bridges to Korean thrillers that explore the human mind like 'Kill Me, Heal Me' and 'Doctor John'"
    ]
  },

  {
    id: "dexter-resurrection",
    title: "Dexter: Resurrection",
    type: "show",
    year: 2025,
    seasons: 1,
    synopsis: "Dexter Morgan — the charming serial killer who only murders murderers — is back. Having faked his death and disappeared into the wilderness, Dexter is drawn back into civilization when a new threat forces him to use his darkest talents one more time. Michael C. Hall reprises his iconic role in a new chapter that explores whether a monster can ever truly change.",
    genres: ["Crime", "Thriller", "Drama", "Dark Comedy"],
    themes: ["moral-ambiguity", "identity", "redemption", "dark-psychology", "justice-vs-law", "double-life", "monster-within"],
    tropes: ["vigilante-antihero", "double-life", "serial-killer-protagonist", "dark-secret", "cat-and-mouse", "comeback-story"],
    tone: ["dark", "intense", "psychologically-complex", "gripping"],
    setting: ["urban-america", "wilderness", "domestic-normalcy", "criminal-underworld"],
    characterTypes: ["darkly-charming-antihero", "morally-grey-hero", "obsessive-pursuer", "dark-passenger", "innocent-in-danger"],
    network: "Paramount+",
    streaming: { paramount_plus: true },
    actors: [
      { name: "Michael C. Hall", role: "Dexter Morgan", isLead: true },
      { name: "Patrick Gibson", role: "Harrison Morgan", isLead: false }
    ],
    matchReasoningHints: [
      "A charming antihero with a monster inside who only kills 'deserving' victims is the exact psychology of beloved K-drama antiheroes in 'Strangers from Hell', 'Flower of Evil', and 'Bad Guys'",
      "Dexter's double life — the perfect civilian facade hiding a killer's truth — mirrors K-dramas like 'Flower of Evil' and 'The Liar and His Lover' that explore identity and performance",
      "The 'monster who loves' character archetype is deeply embedded in Korean thriller DNA — 'My Name', 'Beyond Evil', and 'Psychopath Diary' all live here",
      "Fans drawn to Dexter's moral complexity and dark justice will find rich veins in K-dramas that interrogate whether ends justify means: 'Voice', 'The Glory', 'Revenge of Others'",
      "Dexter's stylish blend of dark psychology and wry humor maps to Korean crime dramas that play with genre conventions like 'Vincenzo' and 'The Fiery Priest'"
    ]
  },

  {
    id: "suits-la",
    title: "Suits: L.A.",
    type: "show",
    year: 2025,
    seasons: 1,
    synopsis: "Ted Black, a former federal prosecutor who made a morally compromised deal years ago, now runs a powerhouse criminal defense firm in Los Angeles. As he navigates Hollywood royalty, Silicon Valley titans, and political powerbrokers, his past threatens to catch up with him — and his brilliant associates must decide how far they'll bend the rules for a boss they believe in.",
    genres: ["Legal Drama", "Drama", "Thriller"],
    themes: ["moral-compromise", "loyalty", "power", "redemption", "secrets-from-the-past", "legal-ethics", "ambition"],
    tropes: ["flawed-mentor", "brilliant-associates", "high-stakes-courtroom", "dark-past", "powerful-client", "ethical-dilemma"],
    tone: ["slick", "intense", "witty", "glamorous"],
    setting: ["los-angeles", "law-firm", "courtroom", "celebrity-world"],
    characterTypes: ["morally-grey-mentor", "driven-young-associate", "powerful-client", "ruthless-rival", "loyal-colleague"],
    network: "Peacock",
    streaming: { peacock: true },
    actors: [
      { name: "Stephen Amell", role: "Ted Black", isLead: true },
      { name: "Lex Scott Davis", role: "Erica Rollins", isLead: true },
      { name: "Josh McDermitt", role: "Stuart Lane", isLead: false }
    ],
    matchReasoningHints: [
      "A brilliant, morally compromised lawyer mentoring younger associates in a high-stakes firm is the DNA of Korean legal dramas like 'Vincenzo', 'Lawless Lawyer', and 'Mr. Sunshine'",
      "Suits: L.A.'s exploration of moral compromise under institutional pressure echoes K-dramas about lawyers forced to bend the rules: 'Extraordinary Attorney Woo', 'Chief Kim'",
      "The Los Angeles power landscape — Hollywood, tech, politics — mirrors the chaebol-world dynamics of K-dramas like 'Sky Castle' and 'Mine'",
      "Fans of the original Suits who love charismatic mentors with complicated ethics will find Korean mirror characters in 'Vincenzo' and 'The Good Wife' Korean adaptation",
      "The show's glamorous, fast-talking world of powerful deals and dangerous secrets bridges to K-dramas about high-society crime like 'Money Flower' and 'Graceful Family'"
    ]
  },

  {
    id: "ironheart",
    title: "Ironheart",
    type: "show",
    year: 2025,
    seasons: 1,
    synopsis: "Riri Williams, a prodigious 19-year-old MIT engineering student from Chicago, builds her own state-of-the-art iron suit — surpassing even Tony Stark's early designs. When her hometown is threatened by an ancient and powerful magical criminal known as the Hood, Riri is forced to choose between staying safe and becoming the hero only she can be.",
    genres: ["Sci-Fi", "Action", "Fantasy", "Drama", "Superhero"],
    themes: ["genius", "responsibility", "grief", "identity", "race", "coming-of-age", "legacy", "community"],
    tropes: ["young-hero-origin", "genius-inventor", "supernatural-villain", "home-vs-destiny", "mentor-figures", "found-power"],
    tone: ["exciting", "emotional", "stylish", "urban"],
    setting: ["chicago", "mit-campus", "magical-underground", "urban-community"],
    characterTypes: ["prodigal-young-hero", "ancient-magical-villain", "loyal-friend", "grieving-inventor", "powerful-mentor"],
    network: "Disney+",
    streaming: { disney_plus: true },
    actors: [
      { name: "Dominique Thorne", role: "Riri Williams / Ironheart", isLead: true },
      { name: "Anthony Ramos", role: "The Hood", isLead: true },
      { name: "Lyric Ross", role: "Natalie Washington", isLead: false }
    ],
    matchReasoningHints: [
      "A young genius from a marginalized background who builds something extraordinary to protect her community maps to Korean underdog-hero stories like 'Strong Girl Bong-soon' and 'Extraordinary Attorney Woo'",
      "Ironheart's blend of science and magic, and a young woman carrying the weight of a community's survival, resonates with K-dramas like 'Arthdal Chronicles' and 'The Uncanny Counter'",
      "The coming-of-age origin story of a reluctant hero forced to grow up fast bridges to K-drama youth narratives in 'Crash' and 'My Love from the Star'",
      "Fans of superhero stories with deep emotional and social grounding will love Korean genre-blenders like 'Doom at Your Service' and 'The Uncanny Counter'",
      "Riri's grief-driven genius and determination to honor those she lost echoes K-drama heroines in 'My Mister' and 'It's Okay to Not Be Okay'"
    ]
  },

  {
    id: "the-four-seasons",
    title: "The Four Seasons",
    type: "show",
    year: 2025,
    seasons: 1,
    synopsis: "Three middle-aged couples — longtime friends — take their traditional annual vacation together, only to discover that one couple's surprise divorce is about to fracture the entire group. Over four seasons of the year, they navigate new partners, old wounds, and the terrifying question of whether adult friendships can survive the changes that life inevitably brings.",
    genres: ["Comedy", "Drama", "Romance"],
    themes: ["adult-friendship", "marriage", "change", "loyalty", "grief", "second-chances", "growing-apart", "found-family"],
    tropes: ["ensemble-friends", "divorce-plot", "midlife-crisis", "love-triangle", "will-they-wont-they", "group-vacation-chaos"],
    tone: ["warm", "funny", "bittersweet", "emotionally-honest"],
    setting: ["vacation-retreats", "suburban-america", "seasonal-backdrop"],
    characterTypes: ["long-married-couple", "newly-single-friend", "loyal-third-wheel", "new-love-interest", "group-diplomat"],
    network: "Netflix Original",
    streaming: { netflix: true },
    actors: [
      { name: "Steve Carell", role: "Jack", isLead: true },
      { name: "Tina Fey", role: "Kate", isLead: true },
      { name: "Will Forte", role: "Danny", isLead: true },
      { name: "Kerri Russell", role: "Anne", isLead: true }
    ],
    matchReasoningHints: [
      "An ensemble of adult friends navigating marriage, divorce, and changing relationships is the beating heart of K-dramas like 'Hospital Playlist', 'Reply 1988', and 'Because This Is My First Life'",
      "The Four Seasons' exploration of how adult friendship survives life's upheavals maps to Korean dramas that follow groups of old friends: 'My Liberation Notes', 'Something in the Rain'",
      "Fans drawn to warm ensemble comedies where genuine emotional pain hides beneath the laughs will love K-dramas like 'Racket Boys' and 'Crash Course in Romance'",
      "The divorce destabilizing a long-stable friend group echoes K-drama family disruption narratives in 'My Unfamiliar Family' and 'Go Back Couple'",
      "Seasonal storytelling with shifting emotional registers bridges to K-dramas that follow characters through time like 'Reply 1988' and 'My Mister'"
    ]
  },

  {
    id: "duster",
    title: "Duster",
    type: "show",
    year: 2025,
    seasons: 1,
    synopsis: "Set in the American Southwest in the 1970s, Duster follows Jim Ellis — a charismatic, reckless getaway driver who works for a ruthless crime syndicate. When an FBI agent arrives to dismantle the operation, Jim finds himself caught between his criminal loyalty and the chance to finally build a real life. A sun-baked crime thriller dripping with muscle cars and moral dilemmas.",
    genres: ["Crime", "Thriller", "Drama", "Action"],
    themes: ["loyalty", "redemption", "freedom", "crime-vs-legitimacy", "cat-and-mouse", "1970s-americana", "moral-choice"],
    tropes: ["getaway-driver", "crime-syndicate", "reluctant-criminal", "cat-and-mouse", "period-thriller", "possible-redemption"],
    tone: ["gritty", "stylish", "retro", "tense"],
    setting: ["1970s-southwest", "desert", "small-towns", "crime-world"],
    characterTypes: ["charismatic-criminal", "determined-fed", "ruthless-boss", "loyal-partner", "woman-with-her-own-plan"],
    network: "Max Original",
    streaming: { max: true },
    actors: [
      { name: "Josh Holloway", role: "Jim Ellis", isLead: true },
      { name: "Rachel Hilson", role: "Nina", isLead: true }
    ],
    matchReasoningHints: [
      "A charming rogue trapped between criminal loyalty and his desire for redemption is a beloved K-drama archetype — 'Vincenzo', 'Lawless Lawyer', and 'The Fiery Priest' all live here",
      "Duster's 1970s Southwest period setting and moral cat-and-mouse between a criminal and a fed echoes the historical crime energy of 'Mr. Sunshine' and 'Signal'",
      "The getaway driver who's too good at his job to quit but too human to ignore what it costs him resonates with K-dramas like 'Bad Guys' and 'My Name'",
      "Fans of the retro Americana aesthetic and morally complex crime ensemble will find Korean counterparts in 'Stranger' and 'Money Flower'",
      "The show's blue-collar outlaw romance with dust and danger mirrors the spirit of K-dramas about characters trapped between worlds: 'Healer', 'The K2'"
    ]
  },

  {
    id: "mobland",
    title: "Mobland",
    type: "show",
    year: 2025,
    seasons: 1,
    synopsis: "Harry Da Souza is a fixer for one of London's most powerful criminal dynasties — a man who solves problems no one else can, with methods no one else would approve. When a volatile gang war threatens to tear apart everything the family has built, Harry must use every dark skill he possesses to keep peace — while a relentless detective edges closer to exposing the entire operation.",
    genres: ["Crime", "Drama", "Thriller", "Action"],
    themes: ["loyalty", "family-obligation", "power", "violence-cycle", "moral-cost", "honor-among-criminals", "class-and-crime"],
    tropes: ["loyal-fixer", "crime-family", "gang-war", "double-game", "relentless-detective", "underworld-politics"],
    tone: ["intense", "gritty", "cinematic", "atmospheric"],
    setting: ["london-underworld", "criminal-empire", "urban", "aristocratic-criminal-world"],
    characterTypes: ["dangerous-fixer", "crime-family-patriarch", "ambitious-rival", "relentless-detective", "loyal-enforcer"],
    network: "Paramount+",
    streaming: { paramount_plus: true, amazon_prime: true },
    actors: [
      { name: "Tom Hardy", role: "Harry Da Souza", isLead: true },
      { name: "Helen Mirren", role: "Grace Harlow", isLead: true },
      { name: "Pierce Brosnan", role: "Conrad Harlow", isLead: true }
    ],
    matchReasoningHints: [
      "A brilliant criminal fixer maintaining order in a dangerous underworld maps directly to K-drama antiheroes in 'Vincenzo', 'Bad Guys', and 'The Gangster, the Cop, the Devil'",
      "Mobland's London criminal dynasty with aristocratic roots echoes the chaebol crime families of K-dramas like 'Money Flower', 'Graceful Family', and 'Sky Castle'",
      "Tom Hardy's physically imposing, emotionally contained fixer resonates with the stoic-yet-soulful Korean crime heroes of 'Lawless Lawyer' and 'Healer'",
      "The gang war threatening a criminal empire and the fixer caught in the middle maps to K-drama power struggles in 'Watcher', 'Stranger', and 'Narco-Saints'",
      "Fans who love stylish British crime dramas will find their Korean match in 'Vincenzo' — both revel in the elaborate chess game of criminal loyalty and betrayal"
    ]
  },

  {
    id: "outlander-blood-of-my-blood",
    title: "Outlander: Blood of My Blood",
    type: "show",
    year: 2025,
    seasons: 1,
    synopsis: "A prequel to the beloved Outlander saga, this series follows the intertwined love stories of Jamie Fraser's parents — young Scottish warrior Brian Fraser and the English noblewoman Julia Moriston — alongside Claire's parents, Henry and Julia Beauchamp. Set across 1700s Scotland and 1930s England, two great love stories from different eras reveal the blood and bone that made Outlander's iconic couple possible.",
    genres: ["Historical Drama", "Romance", "Drama", "Period Drama"],
    themes: ["forbidden-love", "war", "sacrifice", "destiny", "family-legacy", "cultural-clash", "star-crossed-lovers"],
    tropes: ["forbidden-romance", "historical-star-crossed-love", "dual-timeline", "epic-romance", "cultural-divide", "war-torn-love"],
    tone: ["sweeping", "romantic", "emotional", "cinematic"],
    setting: ["18th-century-scotland", "1930s-england", "war-backdrop", "historical-estates"],
    characterTypes: ["passionate-warrior", "devoted-noblewoman", "loyal-family", "scheming-enemy", "doomed-lovers"],
    network: "Starz",
    streaming: { amazon_prime: true },
    actors: [
      { name: "Jordi Molla", role: "Henry Beauchamp", isLead: true },
      { name: "Hermione Norris", role: "Julia Moriston", isLead: true }
    ],
    matchReasoningHints: [
      "Dual-timeline epic romance following two doomed love stories across centuries is the exact DNA of K-dramas like 'Moon Lovers: Scarlet Heart Ryeo', 'Mr. Sunshine', and 'The Red Sleeve'",
      "A Scottish warrior and English noblewoman separated by war and class is a formula that Korean historical romance fans adore — 'Mr. Sunshine' and 'The Legend of the Blue Sea' serve it perfectly",
      "Prequel storytelling that deepens beloved characters' family origins resonates with K-drama spin-offs and prequels that expand beloved worlds",
      "Outlander: Blood of My Blood's grand emotional sweep and war-torn romance bridges to Korean period epics like 'Six Flying Dragons' and 'Kingdom'",
      "Fans who love forbidden historical love stories with genuine tragic stakes will find their perfect Korean matches in 'Scarlet Heart Ryeo' and 'Rookie Historian Goo Hae-ryung'"
    ]
  },

  {
    id: "the-madness",
    title: "The Madness",
    type: "show",
    year: 2024,
    seasons: 1,
    synopsis: "Muncie Daniels, a prominent Black media personality, retreats to a remote cabin to clear his head — and accidentally witnesses a murder. When he's identified by the killer, Muncie becomes a man on the run, hunted by a shadowy conspiracy that reaches deep into American political and media power structures. A relentless thriller about race, truth, and who gets to be believed.",
    genres: ["Thriller", "Mystery", "Drama", "Action"],
    themes: ["racial-injustice", "media-power", "conspiracy", "survival", "truth", "credibility", "paranoia"],
    tropes: ["accidental-witness", "man-on-the-run", "government-conspiracy", "wrongly-accused", "ticking-clock", "trust-no-one"],
    tone: ["intense", "paranoid", "gripping", "socially-charged"],
    setting: ["rural-america", "washington-dc", "media-world", "chase-thriller"],
    characterTypes: ["wrongly-accused-hero", "shadowy-conspirator", "determined-investigator", "corrupt-official", "loyal-ally"],
    network: "Netflix Original",
    streaming: { netflix: true },
    actors: [
      { name: "Colman Domingo", role: "Muncie Daniels", isLead: true },
      { name: "Marsha Stephanie Blake", role: "Micheline Daniels", isLead: true },
      { name: "John Ortiz", role: "Agent Ortiz", isLead: false }
    ],
    matchReasoningHints: [
      "A wrongly accused man on the run from a powerful conspiracy he accidentally discovered is the premise of K-drama thrillers like 'Vagabond', 'Tunnel', and 'Designated Survivor: 60 Days'",
      "The Madness's exploration of who gets believed and whose truth is suppressed resonates with Korean dramas that interrogate institutional power: 'Stranger', 'Pinocchio', 'Signal'",
      "Fans of Colman Domingo's intense performance will find mirror energy in Korean thriller leads from 'Bad Guys', 'Healer', and 'Voice'",
      "A media figure forced off-screen and into physical danger echoes the entertainment-world thriller dynamics of K-dramas like 'Sponsor' and 'The World of the Married'",
      "The show's relentless pace and 'trust no one' conspiracy paranoia bridge to Korean thrillers that keep viewers questioning every character: 'Mouse', 'Signal', 'Flower of Evil'"
    ]
  },

  {
    id: "after-the-hunt",
    title: "After the Hunt",
    type: "show",
    year: 2025,
    seasons: 1,
    synopsis: "Jodi Fisher, a respected college sports director, faces a career crisis when a star coach at her institution is accused of misconduct by a young female athlete. As Jodi investigates the claims — and the accused coach is someone she's personally entangled with — she discovers that power, loyalty, and truth are rarely on the same side. A razor-sharp institutional thriller about who we protect and why.",
    genres: ["Drama", "Thriller", "Workplace"],
    themes: ["institutional-power", "sexual-misconduct", "loyalty-vs-truth", "career", "moral-compromise", "female-solidarity", "accountability"],
    tropes: ["institutional-cover-up", "moral-dilemma", "professional-entanglement", "power-abuse", "reckoning-with-truth", "workplace-thriller"],
    tone: ["tense", "morally-complex", "timely", "intense"],
    setting: ["university-sports-world", "institutional-america", "corporate-politics"],
    characterTypes: ["morally-conflicted-leader", "accused-mentor", "young-victim", "loyal-colleague", "investigator"],
    network: "Hulu",
    streaming: { hulu: true, disney_plus: true },
    actors: [
      { name: "Julia Roberts", role: "Jodi Fisher", isLead: true },
      { name: "Abby Corrigan", role: "Kelly", isLead: true },
      { name: "Andrew Garfield", role: "Coach Wes Ramsey", isLead: true }
    ],
    matchReasoningHints: [
      "An institutional power struggle where a morally compromised leader must choose between loyalty and truth maps to K-dramas like 'Juvenile Justice', 'Chief of Staff', and 'Misaeng'",
      "After the Hunt's examination of who gets believed inside powerful institutions echoes Korean dramas about systemic injustice: 'Stranger', 'Pinocchio', and 'Beyond Evil'",
      "Fans drawn to complex women navigating impossible choices within male-dominated power structures will love K-dramas like 'The World of the Married' and 'Mine'",
      "The show's slow unraveling of a respected figure's true character mirrors the reveal structure of K-drama psychological thrillers like 'Flower of Evil' and 'The Lies Within'",
      "Julia Roberts as a powerful woman wrestling with complicity resonates with the moral-complexity heroines of K-dramas like 'Sky Castle' and 'Penthouse'"
    ]
  },

  {
    id: "from-s4",
    title: "From Season 4",
    type: "show",
    year: 2025,
    seasons: 4,
    synopsis: "The survivors trapped in the mysterious town continue their desperate search for escape as devastating new revelations crack open the show's mythology. Season 4 answers questions fans have agonized over for years while raising even darker ones — and delivers the most terrifying creature encounters yet. The endgame begins.",
    genres: ["Horror", "Mystery", "Sci-Fi", "Drama"],
    themes: ["survival", "hidden-truth", "hope", "sacrifice", "mythology-unravelling", "community-fracture", "escape"],
    tropes: ["mythology-payoff", "community-in-crisis", "dark-revelation", "monster-survival", "mystery-box-answers", "desperate-gambit"],
    tone: ["terrifying", "gripping", "emotionally-devastating", "revelatory"],
    setting: ["mysterious-small-town", "isolated", "supernatural", "liminal-space"],
    characterTypes: ["fractured-leader", "traumatized-survivors", "monster-child", "truth-seeker", "sacrifice-figure"],
    network: "MGM+",
    streaming: { amazon_prime: true },
    actors: [
      { name: "Harold Perrineau", role: "Boyd Stevens", isLead: true },
      { name: "Catalina Sandino Moreno", role: "Jade", isLead: true },
      { name: "Eion Bailey", role: "Jim Matthews", isLead: false }
    ],
    matchReasoningHints: [
      "A trapped community finally getting answers to their impossible prison matches the mythology-payoff energy of K-dramas like 'Signal', 'Tunnel', and 'Sisyphus: The Myth'",
      "Season 4's promised revelations and community fracture resonate with Korean survival dramas where the truth is more terrifying than the monsters: 'All of Us Are Dead', 'Sweet Home'",
      "Fans hooked on From's mystery-box format will feel the same satisfaction as K-dramas that finally deliver on their impossible mysteries: 'Eternal Monarch', 'Circle'",
      "The show's blend of genuine horror with emotionally complex character arcs mirrors the genre-blending DNA of 'The Uncanny Counter' and 'Kingdom'",
      "Harold Perrineau's quiet authority as a leader under impossible pressure echoes the stoic-hero energy Korean audiences adore in 'Signal' and 'Bad Guys'"
    ]
  },

  {
    id: "white-lotus-s4",
    title: "The White Lotus Season 4",
    type: "show",
    year: 2026,
    seasons: 4,
    synopsis: "The White Lotus checks in to a new resort in a new international locale, welcoming a fresh set of privileged, fragile, and dangerously self-deluded guests. As the staff navigates impossible demands and the guests' private lives spiral into barely concealed chaos, another vacation ends in tragedy — but who, and why, won't be clear until the final moments.",
    genres: ["Drama", "Dark Comedy", "Mystery", "Anthology"],
    themes: ["class", "privilege", "desire", "colonialism", "self-deception", "power", "sexuality", "grief"],
    tropes: ["unreliable-ensemble", "class-satire", "resort-mystery", "slow-burn-reveal", "anthology-format", "character-study"],
    tone: ["dark-comedy", "lavish", "satirical", "suspenseful"],
    setting: ["luxury-resort", "international-exotic", "paradise-with-darkness"],
    characterTypes: ["deluded-wealthy-guest", "quietly-suffering-staff", "scheming-traveller", "naive-outsider", "tragic-figure"],
    network: "HBO Max",
    streaming: { max: true },
    matchReasoningHints: [
      "The White Lotus's exploration of how the wealthy destroy everything they touch, including each other, maps to K-dramas about elite class dysfunction like 'Sky Castle', 'Penthouse', and 'Mine'",
      "An anthology of privileged characters on vacation who can't escape their worst selves resonates with Korean studies of the chaebol world: 'Graceful Family', 'Itaewon Class'",
      "The show's slow-burn mystery structure — who died, and why — is the exact format of K-dramas like 'Flower of Evil', 'The World of the Married', and 'The Lies Within'",
      "International resort settings as mirrors for Western entitlement bridge to Korean dramas that place characters in unfamiliar settings: 'Crash Landing on You', 'Hometown Cha-Cha-Cha'",
      "White Lotus's darkly funny class satire finds its Korean match in shows that skewer the ultra-wealthy with sharp precision: 'Sky Castle' and 'Money Flower'"
    ]
  },

  {
    id: "hacks-s4",
    title: "Hacks Season 4",
    type: "show",
    year: 2025,
    seasons: 4,
    synopsis: "Deborah Vance and Ava Daniels' working relationship has never been more complicated — or more creatively explosive. Season 4 finds Deborah reaching a new pinnacle of success while Ava confronts the cost of her proximity to that star. A wickedly funny, emotionally devastating portrait of two brilliant women in a love-hate creative partnership that's also the most important relationship of both their lives.",
    genres: ["Comedy", "Drama", "Workplace"],
    themes: ["female-ambition", "creative-partnership", "mentorship", "power-dynamics", "aging", "reinvention", "love-hate-relationship"],
    tropes: ["unlikely-partnership", "generation-gap", "frenemies", "mentor-protege", "female-driven", "career-vs-heart"],
    tone: ["witty", "emotional", "sharp", "award-worthy"],
    setting: ["las-vegas", "comedy-world", "hollywood"],
    characterTypes: ["ruthless-diva", "scrappy-writer", "loyal-entourage", "ruthless-producer", "reluctant-mentor"],
    network: "Max Original",
    streaming: { max: true },
    actors: [
      { name: "Jean Smart", role: "Deborah Vance", isLead: true },
      { name: "Hannah Einbinder", role: "Ava Daniels", isLead: true },
      { name: "Carl Clemons-Hopkins", role: "Marcus", isLead: false }
    ],
    matchReasoningHints: [
      "A brilliant, difficult older woman and a sharp younger woman in a volatile creative partnership that's also a surrogate mother-daughter dynamic is the exact formula of beloved K-dramas like 'My Mister' and 'Strong Girl Bong-soon'",
      "Hacks' exploration of female mentorship across generational lines resonates with Korean drama pairs like the women in 'Chief of Staff', 'Mine', and 'The World of the Married'",
      "Fans of complicated love-hate female partnerships where both sides are equally brilliant will find their Korean matches in 'The Glory', 'Sky Castle', and 'Penthouse'",
      "Deborah Vance's iron determination and the price of her success mirrors K-drama heroines who sacrificed everything for their ambition — 'Doctor Slump', 'My Liberation Notes'",
      "Hacks' dark comedy about aging, power, and reinvention bridges to Korean dramas that refuse to sentimentalize women's ambition: 'Juvenile Justice', 'My Mister'"
    ]
  },

  {
    id: "the-diplomat-s3",
    title: "The Diplomat Season 3",
    type: "show",
    year: 2025,
    seasons: 3,
    synopsis: "Ambassador Kate Wyler faces her most dangerous mission yet as the political fallout from Season 2's explosive finale reshapes the transatlantic alliance. With her marriage to Hal in crisis, a rogue intelligence operation threatening to destabilize Europe, and a political path opening toward an unimaginable promotion, Kate must navigate personal devastation and professional triumph simultaneously.",
    genres: ["Political Thriller", "Drama", "Spy Thriller", "Romance"],
    themes: ["political-intrigue", "marriage-under-pressure", "female-ambition", "espionage", "international-crisis", "power", "loyalty"],
    tropes: ["political-chess", "marriage-in-crisis", "female-powerhouse", "international-intrigue", "trust-issues", "power-couple"],
    tone: ["slick", "intense", "romantic", "intelligent"],
    setting: ["london", "washington-dc", "european-capitals", "diplomatic-world"],
    characterTypes: ["brilliant-female-diplomat", "charming-rogue-husband", "scheming-ally", "ruthless-intelligence-figure", "political-boss"],
    network: "Netflix Original",
    streaming: { netflix: true },
    actors: [
      { name: "Keri Russell", role: "Kate Wyler", isLead: true },
      { name: "Rufus Sewell", role: "Hal Wyler", isLead: true },
      { name: "David Gyasi", role: "Austin Dennison", isLead: true }
    ],
    matchReasoningHints: [
      "A brilliant female diplomat navigating international crises while managing a complicated marriage with a charming, equally brilliant spouse maps to K-drama power couples in 'The K2', 'Vagabond', and 'Mr. Sunshine'",
      "The political intrigue, intelligence operations, and transatlantic chess-playing resonate with Korean political thrillers like 'Designated Survivor: 60 Days', 'Chief of Staff', and 'Stranger'",
      "Fans of Keri Russell's quietly fierce Kate Wyler will adore Korean drama heroines who carry entire worlds with effortless composure: 'Money Flower', 'Mine'",
      "The Diplomat's fast, witty dialogue and romantic undercurrent beneath high-stakes politics bridges to K-dramas that blend romance and political intrigue: 'Crash Landing on You', 'The Legend of the Blue Sea'",
      "The marriage-as-strategic-partnership-turned-genuine-love dynamic is a beloved K-drama formula perfected in 'Flower of Evil' and 'Because This Is My First Life'"
    ]
  },

  {
    id: "yellowjackets-s4",
    title: "Yellowjackets Season 4",
    type: "show",
    year: 2026,
    seasons: 4,
    synopsis: "The dark secrets from the wilderness finally collide catastrophically with the present day as the adult Yellowjackets face irreversible reckoning. In the final season, the show delivers the answers audiences have been demanding while raising the emotional and moral stakes to devastating new heights. Who survives — and what survival has cost them — is the question the finale must answer.",
    genres: ["Thriller", "Drama", "Horror", "Survival", "Mystery"],
    themes: ["survival-trauma", "guilt", "reckoning", "female-bond", "dark-rituals", "secrets", "final-answers", "identity-cost"],
    tropes: ["dual-timeline-convergence", "long-game-payoff", "dark-secret-revealed", "female-ensemble", "survival-reckoning", "mythology-finale"],
    tone: ["devastating", "intense", "cathartic", "dark"],
    setting: ["wilderness-flashbacks", "present-day-reckoning", "dual-timeline"],
    characterTypes: ["traumatized-survivor", "dark-secret-keeper", "reluctant-leader", "cult-figure", "sacrifice-required"],
    network: "Paramount+ / Showtime",
    streaming: { paramount_plus: true },
    actors: [
      { name: "Melanie Lynskey", role: "Shauna (adult)", isLead: true },
      { name: "Christina Ricci", role: "Misty (adult)", isLead: true },
      { name: "Tawny Cypress", role: "Taissa (adult)", isLead: true }
    ],
    matchReasoningHints: [
      "A final season delivering the long-awaited collision of past trauma and present reckoning matches the cathartic payoff energy of K-drama finales in 'Signal', 'Flower of Evil', and 'Beyond Evil'",
      "Yellowjackets Season 4's female ensemble confronting what they did to survive mirrors Korean survival dramas where the real horror is human nature: 'All of Us Are Dead', 'Sweet Home'",
      "Fans of long-game mystery reveals will find the same satisfaction in K-dramas that took seasons to deliver their truth: 'Mouse', 'Tunnel', 'Sisyphus: The Myth'",
      "The show's reckoning with the moral cost of survival resonates with Korean dramas that ask how far is too far: 'The Glory', 'My Name', 'Revenge of Others'",
      "A female-led survival story that is simultaneously about feminine power and feminine darkness is a rare and precious genre that K-dramas like 'The Silent Sea' and 'Extracurricular' explore"
    ]
  },

  {
    id: "cobra-kai-s7",
    title: "Cobra Kai Season 7",
    type: "show",
    year: 2025,
    seasons: 7,
    synopsis: "The final season of the beloved Karate Kid sequel series. Johnny Lawrence and Daniel LaRusso must set aside their complicated history to face the greatest threat their Valley has ever seen. As their students and children find their own paths in and out of karate, the original rivals discover that their greatest enemy was always unfinished business — and the only way to end it is together.",
    genres: ["Drama", "Action", "Coming-of-Age", "Martial Arts"],
    themes: ["rivalry", "redemption", "mentorship", "forgiveness", "coming-of-age", "legacy", "found-family", "second-chances"],
    tropes: ["rivals-become-allies", "mentor-student", "final-showdown", "coming-of-age", "redemption-arc", "legacy-sequel"],
    tone: ["nostalgic", "emotional", "action-packed", "heartfelt"],
    setting: ["san-fernando-valley", "dojo", "tournament", "suburban-america"],
    characterTypes: ["reformed-bully", "noble-hero", "young-students", "unstoppable-villain", "wise-elder"],
    network: "Netflix Original",
    streaming: { netflix: true },
    actors: [
      { name: "William Zabka", role: "Johnny Lawrence", isLead: true },
      { name: "Ralph Macchio", role: "Daniel LaRusso", isLead: true },
      { name: "Martin Kove", role: "John Kreese", isLead: true }
    ],
    matchReasoningHints: [
      "Rivals who become reluctant allies to fight a greater enemy is one of the most beloved K-drama formulas — 'The Fiery Priest', 'Lawless Lawyer', and 'Vincenzo' all nail this",
      "Cobra Kai's redemption arcs that ask whether people can genuinely change map to Korean character journeys in 'Prison Playbook', 'Reply 1988', and 'My Mister'",
      "Martial arts mentorship and the student surpassing the master is a cornerstone of Korean pop culture from dramas like 'Hwarang' to films like 'The Gangster, the Cop, the Devil'",
      "The show's nostalgia-wrapped emotional reckoning with the past resonates with K-dramas that revisit old relationships with new understanding: 'Go Back Couple', 'Reply 1994'",
      "Fans who love found-family stories where former enemies become each other's most important support will adore K-dramas like 'The Uncanny Counter' and 'Bad Guys'"
    ]
  },

  {
    id: "the-bear-s4",
    title: "The Bear Season 4",
    type: "show",
    year: 2025,
    seasons: 4,
    synopsis: "Carmy Berzatto earned his Michelin star — now comes the crushing weight of maintaining it. Season 4 finds The Bear at its most successful and most fractured, as the recognition they fought for changes relationships they couldn't afford to lose. Sydney must make a decision that will define her career, Richie continues his own journey of reinvention, and Carmy wonders if winning was supposed to feel like this.",
    genres: ["Drama", "Comedy", "Culinary"],
    themes: ["success-vs-happiness", "team-fracture", "found-family", "perfectionism", "identity", "what-now", "creative-cost"],
    tropes: ["hard-won-success", "found-family-tested", "perfectionist-lead", "identity-post-achievement", "workplace-evolution"],
    tone: ["intense", "emotionally-raw", "literary", "kitchen-pressure"],
    setting: ["chicago-restaurant", "michelin-star-kitchen", "urban"],
    characterTypes: ["traumatized-genius", "loyal-second", "loveable-wild-card", "chef-in-crisis", "team-in-flux"],
    network: "Hulu / FX",
    streaming: { hulu: true, disney_plus: true },
    actors: [
      { name: "Jeremy Allen White", role: "Carmen 'Carmy' Berzatto", isLead: true },
      { name: "Ayo Edebiri", role: "Sydney Adamu", isLead: true },
      { name: "Ebon Moss-Bachrach", role: "Richie Jerimovich", isLead: true }
    ],
    matchReasoningHints: [
      "A Michelin star achieved, and the question of whether it was worth the cost, maps to K-dramas about the hollow victory of ambition: 'Doctor Slump', 'My Mister', 'It's Okay to Not Be Okay'",
      "The Bear Season 4's found-family tested by success resonates with K-dramas where the team that fought together must now survive winning: 'Hospital Playlist', 'Reply 1988'",
      "Sydney Adamu's crossroads moment echoes the career-defining choices faced by K-drama heroines in 'Weightlifting Fairy Kim Bok-joo' and 'Her Private Life'",
      "Culinary perfectionism as a mirror for psychological survival has a devoted K-drama tradition in 'Wok of Love', 'Dr. Romantic', and 'Pasta'",
      "The show's unflinching portrait of what genius actually costs — relationships, health, joy — resonates with Korean dramas that don't let their heroes off the hook"
    ]
  },

  {
    id: "landman-s2",
    title: "Landman Season 2",
    type: "show",
    year: 2025,
    seasons: 2,
    synopsis: "Tommy Norris continues navigating the lawless, high-stakes world of West Texas oil — managing volatile roughnecks, corrupt local officials, and the billionaire dynasty that controls everything. Season 2 deepens the dynastic politics as a new threat from international oil interests forces Tommy to play a much more dangerous game.",
    genres: ["Drama", "Crime", "Western", "Thriller"],
    themes: ["power", "loyalty", "family-empire", "corruption", "working-class-vs-wealthy", "moral-compromise", "texas-oil"],
    tropes: ["fixer-for-the-powerful", "dynasty-politics", "corrupt-system", "blue-collar-hero", "corporate-crime", "dangerous-work"],
    tone: ["gritty", "masculine", "tense", "cinematic"],
    setting: ["west-texas", "oil-fields", "corporate-boardrooms", "small-town-power"],
    characterTypes: ["tough-fixer", "billionaire-patriarch", "ambitious-scion", "dangerous-rival", "loyal-roughneck"],
    network: "Paramount+",
    streaming: { paramount_plus: true },
    actors: [
      { name: "Billy Bob Thornton", role: "Tommy Norris", isLead: true },
      { name: "Jon Hamm", role: "Monty Miller", isLead: true },
      { name: "Demi Moore", role: "Cami Miller", isLead: true }
    ],
    matchReasoningHints: [
      "A battle-hardened fixer navigating the lawless gap between industry power and working-class reality maps to K-dramas like 'Vincenzo', 'Money Flower', and 'Misaeng'",
      "Landman's oil dynasty politics and the complicated loyalty of a man who serves a powerful family echo Korean chaebol dramas like 'Sky Castle', 'Graceful Family', and 'Mine'",
      "Billy Bob Thornton's Tommy Norris — competent, morally complex, keeping everything from falling apart — resonates with the quiet Korean drama hero type of 'My Mister' and 'Stranger'",
      "Season 2's international threat escalating a regional power struggle mirrors the expanding stakes of K-dramas like 'Narco-Saints' and 'Watcher'",
      "Fans who love Taylor Sheridan's world of flawed men navigating impossible loyalties will find their Korean match in 'Healer', 'The K2', and 'Bad Guys'"
    ]
  },

  {
    id: "severance-s3",
    title: "Severance Season 3",
    type: "show",
    year: 2026,
    seasons: 3,
    synopsis: "The innies and outies of Lumon Industries have shattered the wall between their severed lives — and the consequences are catastrophic. Season 3 follows both versions of Mark, Helly, Dylan, and Irving as the truth about Lumon's darkest projects comes fully into the light. The finale of one of television's most thrillingly original sci-fi dramas.",
    genres: ["Sci-Fi", "Thriller", "Drama", "Mystery"],
    themes: ["identity", "corporate-control", "autonomy", "memory", "resistance", "self-discovery", "what-makes-us-human"],
    tropes: ["dual-identity-collision", "corporate-dystopia", "resistance-movement", "final-truth", "identity-crisis", "sci-fi-thriller"],
    tone: ["chilling", "darkly-funny", "existential", "gripping"],
    setting: ["lumon-corporate-campus", "suburban-reality", "dystopian-office", "liminal-spaces"],
    characterTypes: ["fractured-hero", "loyal-innie", "corporate-villain", "resistance-figure", "truth-seeker"],
    network: "Apple TV+",
    streaming: { apple_tv: true },
    actors: [
      { name: "Adam Scott", role: "Mark Scout", isLead: true },
      { name: "Britt Lower", role: "Helly R./Helena Eagan", isLead: true },
      { name: "John Turturro", role: "Irving", isLead: true },
      { name: "Zach Cherry", role: "Dylan G.", isLead: false }
    ],
    matchReasoningHints: [
      "A fractured self seeking to become whole while fighting the corporation that split them apart maps to K-drama identity narratives in 'Kill Me, Heal Me', 'Hyde, Jekyll, Me', and 'Sisyphus: The Myth'",
      "Severance S3's corporate dystopia and the innie resistance resonate with Korean dramas that pit individuals against all-powerful institutions: 'Stranger', 'Misaeng', 'Chief of Staff'",
      "The show's exploration of what makes a self — and whether a partial life counts as living — bridges to K-dramas that ask big philosophical questions: 'My Liberation Notes', 'Circle'",
      "Fans obsessed with the innie-outie dynamic will find Korean counterparts in dual-identity dramas like 'Kill Me, Heal Me' and 'I'm Not a Robot'",
      "Severance's pitch-black corporate satire and the joy of watching small people resist monolithic power maps to K-dramas like 'Vincenzo' and 'Arthdal Chronicles'"
    ]
  },

  {
    id: "slow-horses-s6",
    title: "Slow Horses Season 6",
    type: "show",
    year: 2026,
    seasons: 6,
    synopsis: "Jackson Lamb and his team of Slough House rejects find themselves entangled in a conspiracy that reaches the very top of British intelligence — and possibly the government itself. Season 6 forces Lamb into his most personal mission yet as ghosts from his Cold War past threaten to consume everything he's built (and everyone he's failed to care about admitting he cares about).",
    genres: ["Spy Thriller", "Crime", "Drama", "Black Comedy"],
    themes: ["loyalty", "institutional-betrayal", "cold-war-legacy", "found-family", "redemption", "cynicism-vs-belief", "truth-within-lies"],
    tropes: ["misfit-spy-team", "cold-war-ghost", "conspiracy-at-the-top", "reluctant-father-figure", "institutional-corruption", "dark-comedy"],
    tone: ["sardonic", "tense", "emotionally-surprising", "intelligent"],
    setting: ["london-intelligence-world", "slough-house", "european-cold-war-echoes"],
    characterTypes: ["brilliant-cynical-mentor", "damaged-but-devoted-agents", "ruthless-establishment", "cold-war-ghost", "unexpected-loyalty"],
    network: "Apple TV+",
    streaming: { apple_tv: true },
    actors: [
      { name: "Gary Oldman", role: "Jackson Lamb", isLead: true },
      { name: "Jack Lowden", role: "River Cartwright", isLead: true },
      { name: "Kristin Scott Thomas", role: "Diana Taverner", isLead: true }
    ],
    matchReasoningHints: [
      "A gruff, brilliant mentor who claims not to care about his misfit team but would die for them is the exact Korean drama archetype beloved in 'My Mister', 'Signal', and 'Prison Playbook'",
      "Slow Horses' misfit rejects who prove the establishment wrong is the British answer to K-dramas about underdog teams like 'Bad Guys', 'Voice', and 'Department Q'",
      "Jackson Lamb's Cold War ghosts and personal history contaminating a new mission echoes K-drama backstory reveals in 'Flower of Evil', 'Tunnel', and 'Signal'",
      "The show's institutional corruption reaching the highest levels of government bridges to Korean political dramas like 'Stranger', 'Designated Survivor: 60 Days', and 'Chief of Staff'",
      "Fans of Gary Oldman's masterclass in making a seemingly unlikeable character the most compelling person onscreen will love the same trick in 'My Mister's' Lee Sun-kyun"
    ]
  },

  {
    id: "true-detective-s5",
    title: "True Detective Season 5",
    type: "show",
    year: 2026,
    seasons: 5,
    synopsis: "The acclaimed anthology crime series returns with a new case, new detectives, and a new geography. Two detectives from vastly different worlds are paired to investigate a baffling series of crimes that seem to follow a pattern no living person should know. As they dig deeper, the investigation forces each of them to confront the darkest corners of their own pasts — and the question of whether justice is even possible.",
    genres: ["Crime", "Drama", "Mystery", "Thriller"],
    themes: ["dark-truth", "institutional-failure", "partnership", "trauma", "justice", "past-haunting-present", "moral-ambiguity"],
    tropes: ["mismatched-detectives", "conspiracy-thriller", "past-haunting-present", "anthology-format", "slow-burn-mystery", "dark-revelation"],
    tone: ["bleak", "atmospheric", "morally-complex", "cinematic"],
    setting: ["new-american-noir", "deep-investigation", "layered-mystery"],
    characterTypes: ["damaged-detective", "idealistic-partner", "institutional-corruption", "hidden-truth", "reluctant-witness"],
    network: "HBO Max",
    streaming: { max: true },
    matchReasoningHints: [
      "Two mismatched detectives whose personal traumas shape a case larger than either of them is the exact DNA of Korean crime masterpieces 'Signal', 'Stranger', and 'Beyond Evil'",
      "True Detective Season 5's anthology format and atmospheric slow-burn resonates with Korean crime dramas that trust their audience enough to take their time: 'Mouse', 'Tunnel'",
      "The investigation that exposes something deeply wrong with the system that's supposed to provide justice echoes K-dramas like 'Juvenile Justice' and 'Voice'",
      "Fans of True Detective's morally ambiguous detectives carrying the weight of failure will find their Korean counterparts in 'Signal's Lee Je-hoon and 'Stranger's Cho Seung-woo",
      "The show's atmospheric dread and the sense that the truth is worse than the mystery maps to Korean psychological thrillers like 'Flower of Evil', 'Mouse', and 'The Watcher'"
    ]
  },

  {
    id: "the-girls-on-the-bus",
    title: "The Girls on the Bus",
    type: "show",
    year: 2024,
    seasons: 1,
    synopsis: "Four very different women — a veteran political reporter, an ambitious online journalist, a podcast star, and a society blogger — cover the same presidential campaign from the press bus, forming an unlikely sisterhood. Inspired by Amy Chozick's memoir, it's a fast, funny, and surprisingly moving portrait of women navigating a male-dominated world with wit, ambition, and complicated alliances.",
    genres: ["Drama", "Comedy", "Political Drama"],
    themes: ["female-ambition", "journalism-ethics", "political-world", "unlikely-friendship", "career-vs-integrity", "media", "sisterhood"],
    tropes: ["unlikely-female-quartet", "road-trip-bonds", "political-intrigue", "career-rivalry-becomes-friendship", "media-ethics", "sisterhood"],
    tone: ["sharp", "funny", "warm", "politically-charged"],
    setting: ["presidential-campaign", "press-bus", "political-america", "road"],
    characterTypes: ["veteran-reporter", "ambitious-digital-journalist", "media-star", "unlikely-ally", "powerful-candidate"],
    network: "Max Original",
    streaming: { max: true },
    actors: [
      { name: "Melissa Benoist", role: "Sadie McCarthy", isLead: true },
      { name: "Carla Gugino", role: "Felicity Walker", isLead: true },
      { name: "Christina Elmore", role: "Kimberlyn", isLead: true },
      { name: "Natasha Behnam", role: "Lola", isLead: true }
    ],
    matchReasoningHints: [
      "Four women with clashing personalities and professional rivalries forming a genuine sisterhood on a shared mission maps to K-drama female ensemble chemistry in 'Age of Youth', 'Misaeng', and 'Because This Is My First Life'",
      "The political campaign setting and the female journalists trying to tell truth in a world that underestimates them resonates with K-dramas about women in male-dominated workplaces: 'Pinocchio', 'Chief of Staff'",
      "Fans of fast, witty workplace dramas where the ensemble becomes the real romance will love K-dramas like 'Hospital Playlist' and 'Reply 1988' — different setting, same warmth",
      "The show's road-trip-bonds premise — strangers thrown together, learning each other's depth — mirrors the forced-proximity relationship dynamics K-drama fans adore",
      "Sharp, ambitious women navigating both sisterhood and professional competition bridges to K-dramas like 'My Liberation Notes' and 'Something in the Rain' that center women's inner lives"
    ]
  },

  {
    id: "tulsa-king-s2",
    title: "Tulsa King Season 2",
    type: "show",
    year: 2024,
    seasons: 2,
    synopsis: "Dwight 'The General' Manfredi continues building his unlikely crime empire in Tulsa, Oklahoma — balancing the Mafia's expectations back in New York, a growing found-family of local misfits, and a city that's starting to feel like home. Season 2 deepens the stakes as a dangerous new rival threatens everything Dwight has built, forcing him to choose between the world that made him and the world he's chosen.",
    genres: ["Crime", "Comedy", "Drama", "Western"],
    themes: ["fish-out-of-water", "found-family", "loyalty", "reinvention", "crime-world", "belonging", "aging-antihero"],
    tropes: ["fish-out-of-water", "crime-boss-in-new-territory", "reluctant-mentor", "found-family", "aging-gangster", "culture-clash"],
    tone: ["warm", "funny", "tense", "charming"],
    setting: ["tulsa-oklahoma", "criminal-underworld", "heartland-america", "mob-world"],
    characterTypes: ["aging-mob-boss", "unlikely-crew", "dangerous-rival", "charming-fixer", "loyal-misfit-team"],
    network: "Paramount+",
    streaming: { paramount_plus: true, amazon_prime: true },
    actors: [
      { name: "Sylvester Stallone", role: "Dwight Manfredi", isLead: true },
      { name: "Andrea Savage", role: "Stacy Beale", isLead: true },
      { name: "Jay Will", role: "Tyson", isLead: false }
    ],
    matchReasoningHints: [
      "A tough outsider building an unlikely chosen family in unfamiliar territory is the exact formula of beloved K-dramas 'Vincenzo', 'Itaewon Class', and 'My Mister'",
      "Dwight's fish-out-of-water journey from Mafia capo to Tulsa's unlikely patriarch resonates with K-drama culture-clash found families in 'Hometown Cha-Cha-Cha' and 'Dr. Romantic'",
      "An aging antihero who discovers a capacity for genuine connection late in life echoes K-drama redemption arcs in 'Prison Playbook', 'My Mister', and 'Go Back Couple'",
      "Season 2's escalating rival threat and Dwight's impossible loyalties map to Korean crime dramas about men caught between two worlds: 'Lawless Lawyer', 'Money Flower'",
      "Tulsa King's warm, funny found-family ensemble in a crime setting bridges perfectly to K-dramas like 'The Fiery Priest' and 'The Uncanny Counter'"
    ]
  },

  {
    id: "the-listeners",
    title: "The Listeners",
    type: "show",
    year: 2025,
    seasons: 1,
    synopsis: "Ordinary people across a small American town begin hearing the same inexplicable sound — a low hum only they can hear. As the sound drives some to madness and others to revelation, a music teacher becomes the reluctant center of an investigation that straddles the line between supernatural phenomenon and mass psychological event. An eerie, haunting drama about what we hear when we truly listen.",
    genres: ["Mystery", "Drama", "Supernatural", "Sci-Fi"],
    themes: ["isolation", "community", "supernatural", "mental-health", "truth-vs-madness", "chosen-few", "mystery-of-consciousness"],
    tropes: ["small-town-mystery", "supernatural-phenomenon", "reluctant-chosen-one", "skeptic-vs-believer", "community-fracture", "mysterious-sound"],
    tone: ["eerie", "atmospheric", "contemplative", "unsettling"],
    setting: ["small-american-town", "suburban", "supernatural-mystery"],
    characterTypes: ["reluctant-investigator", "true-believer", "skeptical-authority", "community-fractured", "mysterious-figure"],
    network: "AMC",
    streaming: { amc_plus: true, amazon_prime: true },
    actors: [
      { name: "Rebecca Ferguson", role: "Claire", isLead: true },
      { name: "F. Murray Abraham", role: "Dr. Overy", isLead: false }
    ],
    matchReasoningHints: [
      "Ordinary people hearing something supernatural that links them across a community is the premise of beloved K-dramas like 'Signal', 'Circle', and 'Sisyphus: The Myth'",
      "The Listeners' small-town fracture around a supernatural mystery resonates with Korean supernatural dramas that use the eerie to explore community trauma: 'Kingdom', 'The Uncanny Counter'",
      "A reluctant woman at the center of a phenomenon she didn't choose bridges to K-drama heroines thrust into supernatural circumstances: 'Master's Sun', 'Hotel Del Luna', 'Oh My Ghost'",
      "The show's exploration of whether the supernatural sound is real or mass hysteria mirrors K-drama psychological thrillers that keep audiences questioning reality: 'Mouse', 'Beyond Evil'",
      "Fans drawn to atmospheric mysteries about what connects us beneath the visible world will love K-dramas like 'Signal' and 'Tunnel' that use the unexplained to reveal deep human truths"
    ]
  }
];
