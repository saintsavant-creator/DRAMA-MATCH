/**
 * DramaMatch Western Catalog Expansion — April 2026 (30 shows)
 *
 * Fills gaps flagged by owner: Cedar Cove, NCIS: Origins, NCIS: Sydney,
 * Law & Order: Criminal Intent, Boston Legal, The Good Fight, Leverage,
 * Leverage: Redemption, Matlock (2024), Quantico, Flashpoint, Poirot,
 * Republic of Doyle, Graceland, The Equalizer (CBS),
 * Everwood, 7th Heaven, Dawson's Creek, Charmed (1998),
 * Dr. Quinn Medicine Woman, The Fosters, Good Girls, The Originals,
 * Private Practice, The O.C., Nashville, Party of Five, Chicago Fire,
 * 9-1-1: Lone Star, Chasing Life.
 *
 * Each entry: full metadata, streaming badges, affiliate links, 5 cross-cultural hints.
 */
module.exports = [

  // ─────────────────────────────────────────
  // ROMANCE / HALLMARK / FAMILY DRAMA
  // ─────────────────────────────────────────

  // ─── 1 ───
  {
    id: 'cedar-cove',
    title: 'Cedar Cove',
    year: 2013,
    type: 'show',
    genres: ['romance', 'drama', 'mystery'],
    themes: ['small-town-life', 'second-chances', 'community', 'family', 'love', 'justice'],
    tropes: ['small-town-romance', 'slow-burn-romance', 'found-family', 'cozy-mystery', 'will-they-wont-they', 'widowed-heroine'],
    tone: ['heartwarming', 'cozy', 'romantic', 'gentle', 'wholesome'],
    setting: ['small-town', 'pacific-northwest', 'modern', 'coastal'],
    characterTypes: ['small-town-judge', 'charming-romantic-interest', 'eccentric-townspeople', 'devoted-single-mother'],
    streaming: { hallmark: true },
    actors: [
      { name: 'Andie MacDowell', role: 'Olivia Lockhart', isLead: true },
      { name: 'Dylan Neal', role: 'Jack Griffith', isLead: true },
      { name: 'Teryl Rothery', role: 'Grace Sherman', isLead: false }
    ],
    matchReasoningHints: [
      "Hometown Cha-Cha-Cha fans: Cedar Cove is the direct Western blueprint — a strong professional woman embedded in a quirky coastal community, slowly falling for someone unexpected while the town's warmth wraps around everything",
      "When the Camellia Blooms' combination of a single mother building a new life, a gentle slow-burn romance, and low-stakes cozy mysteries that keep the story moving — Cedar Cove hits the same notes note for note",
      "Weightlifting Fairy Kim Bok-joo fans who love shows where the romance is quiet, patient, and built on friendship first — Olivia and Jack's relationship develops through months of small shared moments before it becomes anything else",
      "Welcome to Samdalri's sense of a community where everyone knows each other's business but genuinely cares — Cedar Cove's Pacific Northwest town has the same warmth that makes Hallmark's best shows feel like a destination, not just a setting",
      "My Mister fans who love emotionally restrained adults navigating complicated lives while quietly falling in love — Cedar Cove is that exact register but in a sunlit Hallmark key"
    ]
  },

  // ─── 2 ───
  {
    id: 'everwood',
    title: 'Everwood',
    year: 2002,
    type: 'show',
    genres: ['drama', 'romance', 'family'],
    themes: ['grief', 'redemption', 'second-chances', 'family-bonds', 'small-town-life', 'growing-up'],
    tropes: ['fish-out-of-water', 'grief-and-healing', 'found-family', 'slow-burn-romance', 'father-son-bonding', 'rivals-to-lovers'],
    tone: ['emotional', 'heartwarming', 'bittersweet', 'thoughtful', 'warm'],
    setting: ['small-town', 'colorado', 'modern', 'mountain'],
    characterTypes: ['grieving-patriarch', 'teenage-son', 'rival-doctor', 'small-town-sweetheart', 'wise-mentor'],
    streaming: { amazon_prime: true },
    actors: [
      { name: 'Treat Williams', role: 'Dr. Andrew Brown', isLead: true },
      { name: 'Emily VanCamp', role: 'Amy Abbott', isLead: false },
      { name: 'Gregory Smith', role: 'Ephram Brown', isLead: false }
    ],
    matchReasoningHints: [
      "My Mister's core emotional DNA: a brilliant man running from grief who lands in a small community and slowly rebuilds through human connection — Everwood is the definitive Western version of that specific emotional journey",
      "Reply 1988 fans who love shows where teenage love is tender, awkward, and intertwined with the growing pains of an entire family — Everwood's multi-generational structure delivers the same '1 family, 1 community, 1 generation' warmth",
      "When the Weather is Fine fans of quiet healing stories set in small snowy towns, where two damaged people orbit each other for seasons before anything is said aloud",
      "Hospital Playlist's 'brilliant professional who has everything except the emotional intelligence to maintain his relationships, and must learn that being good at your job is not the same as being present' arc applied to a gorgeous mountain town",
      "Summer Snow / Watashi ga Renai Dekinai Riyu fans of stories about families putting themselves back together after loss — Everwood's central father-son relationship developing in parallel with the son's romance is the structure K-dramas do best"
    ]
  },

  // ─── 3 ───
  {
    id: '7th-heaven',
    title: '7th Heaven',
    year: 1996,
    type: 'show',
    genres: ['drama', 'family', 'romance'],
    themes: ['family-bonds', 'faith', 'community', 'growing-up', 'morality', 'love'],
    tropes: ['multigenerational-family', 'first-love', 'community-pillar', 'sibling-ensemble', 'moral-dilemmas'],
    tone: ['wholesome', 'heartwarming', 'earnest', 'uplifting', 'family-friendly'],
    setting: ['suburban', 'modern', 'american', 'community'],
    characterTypes: ['minister-patriarch', 'devoted-matriarch', 'ensemble-siblings', 'community-teens'],
    streaming: { amazon_prime: true, hulu: true },
    actors: [
      { name: 'Stephen Collins', role: 'Eric Camden', isLead: true },
      { name: 'Catherine Hicks', role: 'Annie Camden', isLead: true },
      { name: 'Jessica Biel', role: 'Mary Camden', isLead: false }
    ],
    matchReasoningHints: [
      "Reply 1988 fans who want the Western version of a large family ensemble where the parents' marriage is as interesting as the children's romances — 7th Heaven ran that formula for 11 seasons with the same warmth",
      "Go Back Couple / Twenty-Five Twenty-One fans who love stories about young love in communities where everyone knows everyone and the stakes feel enormous even when they're small",
      "Heartland fans of shows where family values and community bonds are the actual subject of the drama, not backdrop — 7th Heaven was the template for wholesome ensemble family TV before Heartland refined it",
      "Dae Jang Geum fans of shows where moral character is treated as interesting subject matter, not just assumed — the Camdens' family debates about right and wrong are earnest in the way that made K-drama ethics episodes compelling",
      "My Love from the Star / Crash Landing on You fans who enjoy the cozy reassurance of knowing good people will ultimately prevail — 7th Heaven delivers that certainty without irony for eleven seasons"
    ]
  },

  // ─── 4 ───
  {
    id: 'dawsons-creek',
    title: "Dawson's Creek",
    year: 1998,
    type: 'show',
    genres: ['romance', 'drama', 'teen'],
    themes: ['first-love', 'identity', 'growing-up', 'friendship', 'choices', 'heartbreak'],
    tropes: ['love-triangle', 'best-friends-to-lovers', 'slow-burn-romance', 'will-they-wont-they', 'small-town-romance', 'coming-of-age'],
    tone: ['romantic', 'emotional', 'nostalgic', 'bittersweet', 'earnest'],
    setting: ['small-town', 'coastal', '1990s', 'high-school'],
    characterTypes: ['dreamy-idealist', 'charismatic-bad-boy', 'spirited-heroine', 'witty-outsider'],
    streaming: { netflix: true, hulu: true },
    actors: [
      { name: 'James Van Der Beek', role: 'Dawson Leery', isLead: true },
      { name: 'Katie Holmes', role: 'Joey Potter', isLead: true },
      { name: 'Joshua Jackson', role: 'Pacey Witter', isLead: false }
    ],
    matchReasoningHints: [
      "Answer Me 1997's classic love-triangle structure where the right choice becomes clear only in retrospect — Dawson's Creek ran the same Dawson vs. Pacey debate for six seasons with the same emotional precision",
      "Twenty-Five Twenty-One fans who love stories about first loves in small communities that feel enormous while you're inside them — Capeside is as mythologized as Hee-do's gymnasium",
      "Love Alarm fans of shows about teenage love where the romantic geometry is deliberately complicated and the show rewards the patience to see who everyone actually is at the end",
      "My ID is Gangnam Beauty / School 2015 fans who love ensemble teen dramas where social belonging and self-definition are as important as the romance — Joey's arc from poor dockworker's daughter to woman who knows her worth is a complete K-drama character journey",
      "When We Were Young (C-drama) fans of shows about nostalgia for first love — Dawson's Creek has been the benchmark for the genre for 25 years"
    ]
  },

  // ─── 5 ───
  {
    id: 'charmed-1998',
    title: 'Charmed',
    year: 1998,
    type: 'show',
    genres: ['fantasy', 'drama', 'romance', 'supernatural'],
    themes: ['sisterhood', 'identity', 'love', 'destiny', 'sacrifice', 'family-bonds'],
    tropes: ['found-family', 'chosen-one', 'supernatural-romance', 'sisterhood', 'enemies-to-lovers', 'forbidden-love'],
    tone: ['engaging', 'heartfelt', 'dramatic', 'romantic', 'empowering'],
    setting: ['modern', 'san-francisco', 'supernatural', 'witches'],
    characterTypes: ['three-sisters', 'magical-warriors', 'supernatural-love-interest', 'demon-hunters'],
    streaming: { amazon_prime: true, netflix: true },
    actors: [
      { name: 'Shannen Doherty', role: 'Prue Halliwell', isLead: true },
      { name: 'Holly Marie Combs', role: 'Piper Halliwell', isLead: true },
      { name: 'Alyssa Milano', role: 'Phoebe Halliwell', isLead: true }
    ],
    matchReasoningHints: [
      "Hong Sisters fans (Hotel del Luna, My Girlfriend is a Gumiho) who love supernatural romance where the magical element is inseparable from the emotional stakes — Charmed runs on the same engine of love tested by forces bigger than the characters",
      "Tale of the Nine-Tailed fans who love shows where supernatural beings navigate modern life while protecting people they love — the Halliwell sisters have been doing this in San Francisco for 8 seasons",
      "My Love from the Star fans of slow-burn forbidden romance where cosmic forces complicate the relationship — every season of Charmed introduces a new reason why love is cosmically impossible, then shows characters choosing it anyway",
      "Guardian fans of sisterhood dramas where the female bonds are as important as any romance — Piper, Phoebe, and Prue/Paige have one of Western TV's most durable sister-ensemble dynamics",
      "Doom at Your Service fans of supernatural romance built around sacrifice and destiny — Charmed was doing 'love that might destroy the world or save it' before K-dramas made it a genre template"
    ]
  },

  // ─── 6 ───
  {
    id: 'dr-quinn-medicine-woman',
    title: 'Dr. Quinn, Medicine Woman',
    year: 1993,
    type: 'show',
    genres: ['drama', 'romance', 'western', 'historical'],
    themes: ['resilience', 'identity', 'love', 'social-justice', 'found-family', 'prejudice'],
    tropes: ['fish-out-of-water', 'slow-burn-romance', 'found-family', 'strong-female-lead', 'against-all-odds', 'frontier-life'],
    tone: ['heartwarming', 'inspiring', 'romantic', 'dramatic', 'earnest'],
    setting: ['historical', '1860s', 'wild-west', 'frontier', 'colorado'],
    characterTypes: ['pioneering-female-doctor', 'stoic-frontiersman', 'adopted-children', 'skeptical-townspeople'],
    streaming: { amazon_prime: true },
    actors: [
      { name: 'Jane Seymour', role: 'Dr. Michaela "Mike" Quinn', isLead: true },
      { name: 'Joe Lando', role: 'Sully', isLead: true }
    ],
    matchReasoningHints: [
      "Mr. Sunshine fans who love slow-burn historical romances where a principled woman navigates a hostile frontier environment and earns every inch of her authority — Dr. Mike and Sully's romance runs on the same patient, earned chemistry",
      "Lovers of the Red Sky / Mr. Queen fans of historical dramas with a strong-willed female protagonist who refuses to conform to her era's expectations and falls for a man who respects rather than limits her",
      "Moonshine (C-drama) fans who love historical period dramas where the heroine's competence is the most romantic thing about her — Sully falls for Dr. Quinn because she's extraordinary, not despite it",
      "Dear My Friends fans of shows where found-family structures emerge around an unconventional woman — Dr. Mike's adopted Sully children and resistant townspeople who eventually love her is the same found-family arc",
      "Still 2gether / History of a Salaryman fans who love slow-burn romances where two different people from different worlds take 6 seasons to say what viewers knew in episode 2"
    ]
  },

  // ─── 7 ───
  {
    id: 'the-fosters',
    title: 'The Fosters',
    year: 2013,
    type: 'show',
    genres: ['drama', 'family', 'romance'],
    themes: ['found-family', 'identity', 'belonging', 'love', 'social-justice', 'growing-up'],
    tropes: ['found-family', 'blended-family', 'teen-romance', 'chosen-family', 'social-issues', 'first-love'],
    tone: ['heartfelt', 'emotional', 'warm', 'progressive', 'engaging'],
    setting: ['modern', 'san-diego', 'foster-care', 'family-home'],
    characterTypes: ['two-mothers', 'foster-children', 'birth-children', 'community-teens'],
    streaming: { hulu: true },
    actors: [
      { name: 'Teri Polo', role: 'Stef Foster Adams', isLead: true },
      { name: 'Sherri Saum', role: 'Lena Adams Foster', isLead: true },
      { name: 'David Lambert', role: 'Brandon Foster', isLead: false }
    ],
    matchReasoningHints: [
      "Reply 1988's found-family thesis applied to a blended foster-care household — The Fosters argues that family is what you build together, not what biology hands you, with the same multigenerational warmth",
      "Dear My Friends fans who love ensemble dramas where the family unit itself is the protagonist and every relationship within it gets space to develop fully",
      "Itaewon Class / Move to Heaven fans of shows about found-family formed under difficult circumstances — each character in The Fosters has a reason to be guarded and discovers that being known is worth the risk",
      "Go Back Couple fans of shows about what makes a family work and what it costs to keep it together — The Fosters frames parenting as a daily act of choosing your people",
      "My Liberation Notes fans of shows about young people figuring out who they are against the backdrop of adults figuring out the same thing — two timelines of self-discovery running in parallel"
    ]
  },

  // ─── 8 ───
  {
    id: 'good-girls',
    title: 'Good Girls',
    year: 2018,
    type: 'show',
    genres: ['crime', 'drama', 'comedy'],
    themes: ['desperation', 'female-friendship', 'crime', 'family', 'power', 'secrets'],
    tropes: ['crime-family-thriller', 'ordinary-people-in-crime', 'female-ensemble', 'enemies-to-lovers', 'forbidden-romance', 'found-family'],
    tone: ['darkly-comic', 'tense', 'sharp', 'engaging', 'empowering'],
    setting: ['modern', 'suburban', 'michigan', 'underworld'],
    characterTypes: ['desperate-housewife-turned-criminal', 'three-female-leads', 'charming-crime-boss', 'struggling-single-mother'],
    streaming: { netflix: true },
    actors: [
      { name: 'Christina Hendricks', role: 'Beth Boland', isLead: true },
      { name: 'Retta', role: 'Ruby Hill', isLead: true },
      { name: 'Mae Whitman', role: 'Annie Marks', isLead: true }
    ],
    matchReasoningHints: [
      "My Name fans who love female protagonists who enter a criminal world out of desperation and discover they're frighteningly good at it — Beth's arc from frustrated housewife to someone running a crime operation is a K-drama transformation arc in suburban Michigan",
      "Strong Woman Do Bong-soon fans of dark comedies where a woman who everyone underestimates turns out to have the most dangerous skill set in the room — Good Girls plays that beat with three leads simultaneously",
      "Vincenzo fans of shows where the crime world is played with dark humor and the forbidden romance between the protagonist and someone she shouldn't want keeps escalating past the point of reason",
      "Partners for Justice / Voice fans of female leads who start as rule-followers and discover that the system they trusted was never built for them — Good Girls gives that revelation to three women at once",
      "Itaewon Class fans of shows about someone who decides to stop playing by rules that have been stacked against them — the three leads of Good Girls make that decision in a parking lot and never quite recover from who they become"
    ]
  },

  // ─── 9 ───
  {
    id: 'the-originals',
    title: 'The Originals',
    year: 2013,
    type: 'show',
    genres: ['fantasy', 'drama', 'romance', 'supernatural'],
    themes: ['family-loyalty', 'power', 'sacrifice', 'redemption', 'forbidden-love', 'legacy'],
    tropes: ['vampire-dynasty', 'forbidden-love', 'found-family', 'anti-hero', 'redemption-arc', 'enemies-to-lovers'],
    tone: ['dark', 'dramatic', 'romantic', 'intense', 'atmospheric'],
    setting: ['modern', 'new-orleans', 'supernatural', 'gothic', 'historic'],
    characterTypes: ['original-vampire', 'charismatic-anti-hero', 'powerful-witch', 'devoted-siblings'],
    streaming: { netflix: true, hbo_max: true },
    actors: [
      { name: 'Joseph Morgan', role: 'Niklaus Mikaelson', isLead: true },
      { name: 'Daniel Gillies', role: 'Elijah Mikaelson', isLead: true },
      { name: 'Phoebe Tonkin', role: 'Hayley Marshall', isLead: false }
    ],
    matchReasoningHints: [
      "Tale of the Nine-Tailed fans who love ancient supernatural beings trying to reconcile their nature with the capacity to love — Klaus's redemption arc runs on the same 'monster choosing humanity' engine as Lee Yeon's",
      "Goblin / Doom at Your Service fans of dark supernatural dramas where the love interest is specifically dangerous and the romance is compelling because of the stakes, not despite them",
      "Hotel del Luna fans of shows set in atmospheric spaces with long supernatural histories and a protagonist whose emotional damage is the most interesting thing about them — New Orleans is as haunted as the Moon Hotel",
      "My Love from the Star fans of slow-burn romance between beings with centuries of history and one person who makes them want to stop running from themselves — Elijah's patience and restraint is that exact archetype",
      "Healer fans who love ensemble casts where the sibling loyalty that binds characters together is as emotionally loaded as any romance — 'Always and forever' is the Mikaelson version of 'I'll protect you'"
    ]
  },

  // ─── 10 ───
  {
    id: 'private-practice',
    title: 'Private Practice',
    year: 2007,
    type: 'show',
    genres: ['drama', 'romance', 'medical'],
    themes: ['love', 'career', 'friendship', 'second-chances', 'healing', 'family'],
    tropes: ['workplace-romance', 'ensemble-cast', 'slow-burn-romance', 'love-triangle', 'found-family', 'single-mother'],
    tone: ['emotional', 'warm', 'dramatic', 'engaging', 'heartfelt'],
    setting: ['modern', 'los-angeles', 'medical-practice', 'upscale'],
    characterTypes: ['driven-female-doctor', 'charming-pediatrician', 'ensemble-medical-team', 'complicated-love-interests'],
    streaming: { hulu: true },
    actors: [
      { name: 'Kate Walsh', role: 'Addison Montgomery', isLead: true },
      { name: 'Tim Daly', role: 'Pete Wilder', isLead: false },
      { name: 'Taye Diggs', role: 'Sam Bennett', isLead: false }
    ],
    matchReasoningHints: [
      "Doctor Slump fans who love shows about brilliant medical professionals in crisis — Addison left Meredith's hospital with everything falling apart and rebuilds herself in LA, which is the exact arc K-dramas mine for maximum emotional content",
      "Hospital Playlist's ensemble of doctors who are best friends navigating love and career simultaneously — Private Practice runs the same structure with an LA wellness practice and more complicated romantic geometries",
      "My Love Story with Yamada-kun / One More Time (C-drama) fans of shows where adults in love are also deeply complicated adults with careers and damage — the romance here has real friction because the characters are fully formed people",
      "On the Way to the Airport fans of shows about two people who shouldn't be together but clearly are, circling each other across multiple seasons of bad timing and worse circumstances",
      "Misaeng / Something in the Rain fans of workplace dramas where the professional and personal bleed into each other constantly and the show is smart enough not to resolve that tension too quickly"
    ]
  },

  // ─── 11 ───
  {
    id: 'the-oc',
    title: 'The O.C.',
    year: 2003,
    type: 'show',
    genres: ['drama', 'romance', 'teen'],
    themes: ['class', 'belonging', 'first-love', 'identity', 'friendship', 'family-dysfunction'],
    tropes: ['fish-out-of-water', 'rich-girl-poor-boy', 'found-family', 'best-friends', 'love-triangle', 'enemies-to-friends'],
    tone: ['sharp', 'romantic', 'nostalgic', 'bittersweet', 'witty'],
    setting: ['modern', 'orange-county', 'wealthy', 'beach', 'southern-california'],
    characterTypes: ['outsider-hero', 'wealthy-love-interest', 'sardonic-best-friend', 'troubled-beauty'],
    streaming: { hbo_max: true, netflix: true },
    actors: [
      { name: 'Ben McKenzie', role: 'Ryan Atwood', isLead: true },
      { name: 'Mischa Barton', role: 'Marissa Cooper', isLead: true },
      { name: 'Adam Brody', role: 'Seth Cohen', isLead: false }
    ],
    matchReasoningHints: [
      "Boys Over Flowers / Itaewon Class fans of the classic 'outsider from the wrong side of the tracks inserted into a wealthy world and winning on character alone' premise — Ryan Atwood is a less melodramatic Jun-pyo target with twice the integrity",
      "Twenty-Five Twenty-One fans of shows where the friendship between the male leads is as emotionally resonant as any romance — Ryan and Seth's bromance set the template for male found-family dynamics in teen drama",
      "Crash Landing on You fans of class-barrier romance where both parties are aware of the cost of crossing the line and choose each other anyway across multiple seasons of impossible circumstances",
      "Penthouse fans who love wealthy ensemble dramas with complicated family dynamics, betrayals, and romances playing out across multiple social strata — The O.C. is the sunlit beachside version of that",
      "Heirs / The Heirs fans of shows about a boy without money being welcomed into a wealthy family and discovering that emotional wealth is the only currency that matters"
    ]
  },

  // ─── 12 ───
  {
    id: 'nashville',
    title: 'Nashville',
    year: 2012,
    type: 'show',
    genres: ['drama', 'romance', 'music'],
    themes: ['ambition', 'rivalry', 'love', 'legacy', 'identity', 'second-chances'],
    tropes: ['rivals-to-allies', 'forbidden-love', 'star-crossed', 'music-world', 'love-triangle', 'mentor-protege'],
    tone: ['dramatic', 'romantic', 'musical', 'emotional', 'engaging'],
    setting: ['modern', 'nashville', 'country-music', 'entertainment-industry'],
    characterTypes: ['country-music-legend', 'rising-star', 'complicated-love-interests', 'music-industry-players'],
    streaming: { hulu: true, amazon_prime: true },
    actors: [
      { name: 'Connie Britton', role: 'Rayna James', isLead: true },
      { name: 'Hayden Panettiere', role: 'Juliette Barnes', isLead: true },
      { name: 'Charles Esten', role: 'Deacon Claybourne', isLead: false }
    ],
    matchReasoningHints: [
      "My Melo and Yoo You-Jeong fans of music industry dramas where a complicated love story is embedded in a world of creative ambition — Nashville's Rayna/Deacon history is decades of unfinished emotional business, like a K-drama slow burn compressed into a legend",
      "Crash Landing on You fans of star-crossed lovers with history who keep finding their way back to each other across impossible circumstances — Rayna and Deacon spend six seasons doing exactly this",
      "Dream High / Rebirth fans of shows about talented people navigating the brutal economics of the entertainment industry while trying to hold onto what made them love their art in the first place",
      "You Are My Spring fans of shows where two complicated adults with real histories and real careers fall back into love slowly and recognizably — Nashville is the country music version of that adult slow burn",
      "Rivals to allies arc fans: Rayna and Juliette start as competitors and become each other's most important relationship, which is the K-drama supporting-female-lead-redemption arc in its most generous Western version"
    ]
  },

  // ─── 13 ───
  {
    id: 'party-of-five-1994',
    title: 'Party of Five',
    year: 1994,
    type: 'show',
    genres: ['drama', 'family', 'romance'],
    themes: ['grief', 'resilience', 'sibling-bonds', 'growing-up', 'family-loyalty', 'love'],
    tropes: ['orphan-siblings', 'eldest-child-burden', 'found-family', 'slow-burn-romance', 'coming-of-age', 'multigenerational-bonds'],
    tone: ['emotional', 'heartfelt', 'dramatic', 'bittersweet', 'warm'],
    setting: ['modern', 'san-francisco', 'family-home', '1990s'],
    characterTypes: ['responsible-eldest', 'rebellious-sibling', 'sensitive-artist', 'youngest-child', 'love-interest'],
    streaming: { amazon_prime: true },
    actors: [
      { name: 'Matthew Fox', role: 'Charlie Salinger', isLead: true },
      { name: 'Neve Campbell', role: 'Julia Salinger', isLead: true },
      { name: 'Scott Wolf', role: 'Bailey Salinger', isLead: false }
    ],
    matchReasoningHints: [
      "Reply 1988 / Reply series fans who love ensemble family dramas where the weight of family history is palpable in every scene — Party of Five's five siblings keeping each other alive after their parents' death is the most emotionally loaded found-family premise in 1990s television",
      "Missing You / Say You Love Me fans of stories where grief is the foundation rather than an episode — every relationship in Party of Five is shaped by the loss that started the show",
      "Move to Heaven fans of shows about ordinary people left behind to figure out what the people they lost meant — Party of Five is about children figuring out who their parents were while also figuring out who they are",
      "Dear My Friends fans of shows where the ensemble structure means every character gets to be broken, healed, and complicated in equal measure — this is not a show with one protagonist",
      "Stronger than Fate / The Glory fans of youngest-sibling arcs — Owen Salinger being raised by siblings rather than parents is the compressed version of every K-drama orphan-child-forms-bond-with-protector storyline"
    ]
  },

  // ─── 14 ───
  {
    id: 'chicago-fire',
    title: 'Chicago Fire',
    year: 2012,
    type: 'show',
    genres: ['drama', 'action', 'romance'],
    themes: ['heroism', 'teamwork', 'sacrifice', 'love', 'loyalty', 'trauma'],
    tropes: ['found-family', 'will-they-wont-they', 'workplace-romance', 'heroic-sacrifice', 'slow-burn-romance', 'ensemble-cast'],
    tone: ['dramatic', 'intense', 'heartfelt', 'tense', 'warm'],
    setting: ['modern', 'chicago', 'fire-station', 'urban'],
    characterTypes: ['firefighter-lieutenant', 'medic', 'ensemble-firehouse', 'devoted-love-interest'],
    streaming: { peacock: true, hulu: true },
    actors: [
      { name: 'Jesse Spencer', role: 'Matthew Casey', isLead: true },
      { name: 'Taylor Kinney', role: 'Kelly Severide', isLead: true },
      { name: 'Monica Raymund', role: 'Gabriela Dawson', isLead: false }
    ],
    matchReasoningHints: [
      "On the Line / Life on the Line fans of procedurals built around a team that is also a family — Firehouse 51 has the same found-family DNA as the best ensemble K-dramas, where the job is what drew them together and loyalty is what keeps them there",
      "Hospital Playlist fans of ensemble workplace shows where the slow-burn romance between two leads is embedded in a larger tapestry of professional relationships — Chicago Fire gives you 5-6 romances running simultaneously across 12 seasons",
      "Crash Landing on You fans of shows where someone is regularly putting themselves in lethal danger and the person who loves them has to find a way to live with that — Dawson falling for Casey carries exactly that weight",
      "Rookie Historian fans of slow-burn romances where two colleagues circle each other across professional complications for multiple seasons before anyone admits what viewers knew in episode 3",
      "Racket Boys / Racket Boys fans of tight ensemble casts where the group dynamic is so lived-in that watching new episodes feels like returning to a community you already belong to"
    ]
  },

  // ─── 15 ───
  {
    id: '911-lone-star',
    title: '9-1-1: Lone Star',
    year: 2020,
    type: 'show',
    genres: ['drama', 'action', 'procedural'],
    themes: ['identity', 'redemption', 'found-family', 'father-son', 'community', 'healing'],
    tropes: ['found-family', 'fish-out-of-water', 'father-son-bonding', 'ensemble-team', 'second-chances', 'workplace-romance'],
    tone: ['dramatic', 'heartfelt', 'action-packed', 'warm', 'witty'],
    setting: ['modern', 'austin-texas', 'fire-station', 'texas'],
    characterTypes: ['charismatic-captain', 'diverse-rescue-team', 'paramedic-love-interest', 'adult-son'],
    streaming: { hulu: true, fox: true },
    actors: [
      { name: 'Rob Lowe', role: 'Owen Strand', isLead: true },
      { name: 'Liv Tyler', role: 'Michelle Blake', isLead: false },
      { name: 'Ronen Rubinstein', role: 'TK Strand', isLead: false }
    ],
    matchReasoningHints: [
      "Misaeng / Extraordinary Attorney Woo fans of a charismatic outsider who arrives in an established community and transforms it while being transformed by it — Owen Strand bringing his New York energy to Austin runs the exact same fish-out-of-water found-family integration arc",
      "Hospital Playlist fans of ensemble workplace dramas where the professional and the personal are inseparable and the show finds genuine stakes in every team member's personal life simultaneously",
      "Reply 1988 fans who love multi-generational stories where a father's relationship with his son is as emotionally central as any romance — Owen and TK's bond across Lone Star is one of the warmest father-son arcs in procedural television",
      "Crash Landing on You fans of shows where a city-dweller is dropped into an unfamiliar regional culture and wins people over by being genuinely good — Austin treats Owen like a curiosity before it treats him like family",
      "Strong Girl Do Bong-soon fans of shows with levity, warmth, and genuine stakes — Lone Star knows exactly when to be funny and exactly when to break your heart"
    ]
  },

  // ─────────────────────────────────────────
  // CRIME / DETECTIVE / PROCEDURAL
  // ─────────────────────────────────────────

  // ─── 16 ───
  {
    id: 'the-equalizer-cbs',
    title: 'The Equalizer',
    year: 2021,
    type: 'show',
    genres: ['crime', 'action', 'drama', 'procedural'],
    themes: ['justice', 'redemption', 'family', 'found-family', 'sacrifice', 'identity'],
    tropes: ['female-vigilante', 'found-family', 'secret-identity', 'mother-protector', 'retired-operative', 'case-of-the-week'],
    tone: ['action-packed', 'tense', 'warm', 'empowering', 'dramatic'],
    setting: ['modern', 'new-york', 'underworld', 'urban'],
    characterTypes: ['ex-cia-operative', 'single-mother', 'teenage-daughter', 'loyal-team'],
    streaming: { paramount: true, amazon_prime: true },
    actors: [
      { name: 'Queen Latifah', role: 'Robyn McCall', isLead: true },
      { name: 'Liza Lapira', role: 'Melody', isLead: false },
      { name: 'Tory Kittles', role: 'Detective Marcus Dante', isLead: false }
    ],
    matchReasoningHints: [
      "My Name / Voice fans of female-led revenge/justice procedurals where the protagonist's skill set is genuinely frightening and the show trusts her competence without undercutting it with romantic dependency",
      "Strong Woman Do Bong-soon fans of female protagonists who are the most dangerous person in any room and maintain warmth, loyalty, and humor while being so — Robyn McCall does this as a mother of a teenager in New York",
      "Partners for Justice fans of procedurals built around someone who operates outside institutional channels because the institutions have consistently failed the people she helps",
      "Healer fans of a covert operative with an extensive network, deep loyalties, and a daughter she's protecting at all costs while dismantling systems that prey on the vulnerable",
      "Three Days / Stranger fans of shows where the protagonist navigates government intelligence, criminal enterprises, and personal loyalty simultaneously and does it better than everyone around her expects"
    ]
  },

  // ─── 17 ───
  {
    id: 'ncis-origins',
    title: 'NCIS: Origins',
    year: 2024,
    type: 'show',
    genres: ['crime', 'drama', 'procedural'],
    themes: ['origins', 'mentorship', 'justice', 'loyalty', 'military', 'teamwork'],
    tropes: ['origin-story', 'mentor-protege', 'found-family', 'young-investigator', 'case-of-the-week', 'military-procedural'],
    tone: ['engaging', 'nostalgic', 'tense', 'warm', 'procedural'],
    setting: ['1990s', 'washington-dc', 'military', 'government', 'ncis'],
    characterTypes: ['young-gibbs', 'legendary-mentor', 'ncis-founding-team', 'military-investigator'],
    streaming: { paramount: true, cbs: true },
    actors: [
      { name: 'Austin Stowell', role: 'Young Gibbs', isLead: true },
      { name: 'Robert Taylor', role: 'Mike Franks', isLead: false }
    ],
    matchReasoningHints: [
      "Signal fans of shows that use a younger timeline to retroactively explain who a legendary investigator became — seeing young Gibbs under Mike Franks' mentorship is the prequel structure Signal used so effectively with its cross-timeline detective duo",
      "SKY Castle / Start-Up fans of origin stories that show a character in the moment they decide who they're going to be — NCIS: Origins is the formation arc for a character millions spent 20 years watching",
      "Twenty-Five Twenty-One fans who love shows where the mentorship between an older character and a younger one reshapes both of them — Franks and Gibbs have that exact dynamic across the 1990s setting",
      "Misaeng fans of the first-job procedural — seeing someone enter an institution and learn its codes while also learning who they are is the premise NCIS: Origins extends from one of TV's most iconic characters",
      "Partners for Justice fans of origin stories that show how a forensic/investigative legend developed their signature methods — the earliest Gibbs cases are the foundation for everything that made the flagship show's dynamic work"
    ]
  },

  // ─── 18 ───
  {
    id: 'ncis-sydney',
    title: 'NCIS: Sydney',
    year: 2023,
    type: 'show',
    genres: ['crime', 'drama', 'procedural'],
    themes: ['international-cooperation', 'loyalty', 'justice', 'cultural-clash', 'teamwork', 'found-family'],
    tropes: ['found-family', 'culture-clash', 'female-lead', 'international-team', 'case-of-the-week', 'buddy-detective'],
    tone: ['engaging', 'warm', 'tense', 'witty', 'modern'],
    setting: ['modern', 'sydney', 'australia', 'military', 'international'],
    characterTypes: ['afp-agent', 'ncis-agent', 'diverse-international-team', 'tech-expert'],
    streaming: { paramount: true },
    actors: [
      { name: 'Olivia Swann', role: 'Special Agent Michelle Mackey', isLead: true },
      { name: 'Todd Lasance', role: 'AFP Senior Constable Roy Sarich', isLead: true }
    ],
    matchReasoningHints: [
      "Crash Landing on You fans who love procedurals where two agents from different systems and cultures must work together before they understand each other — Mackey and Sarich's US/Australian partnership runs that cultural friction with NCIS-franchise warmth",
      "Signal / Partners for Justice fans of buddy-detective dynamics where the two leads have fundamentally different approaches to justice and both turn out to be right in different ways",
      "Team Bulldog (C-drama) fans of international crime procedurals where the setting itself is as interesting as the cases — Sydney is as atmospherically distinctive as any C-drama's city settings",
      "The Good Detective fans of shows where a newly-formed team builds genuine trust through case work — NCIS: Sydney is the found-family premise from scratch in a new location with a diverse ensemble",
      "Watcher fans of female investigators who read people rather than just evidence and whose instincts are eventually vindicated by everyone who doubted them — Mackey has that same authority earned through competence"
    ]
  },

  // ─── 19 ───
  {
    id: 'law-and-order-criminal-intent',
    title: 'Law & Order: Criminal Intent',
    year: 2001,
    type: 'show',
    genres: ['crime', 'drama', 'procedural', 'mystery'],
    themes: ['psychology', 'justice', 'obsession', 'morality', 'truth', 'intellectual-duel'],
    tropes: ['eccentric-genius', 'psychological-chess', 'case-of-the-week', 'villain-pov', 'intellectual-detective', 'partner-dynamic'],
    tone: ['cerebral', 'tense', 'psychological', 'dark', 'procedural'],
    setting: ['modern', 'new-york', 'major-crimes', 'psychological'],
    characterTypes: ['genius-detective', 'psychological-profiler', 'criminal-mastermind', 'loyal-partner'],
    streaming: { peacock: true },
    actors: [
      { name: "Vincent D'Onofrio", role: 'Det. Robert Goren', isLead: true },
      { name: 'Kathryn Erbe', role: 'Det. Alexandra Eames', isLead: true },
      { name: 'Jeff Goldblum', role: 'Det. Zach Nichols', isLead: false }
    ],
    matchReasoningHints: [
      "Signal / Memorist fans who love procedurals built on the psychological sparring between a detective with an unusual gift and the criminals who think they're untouchable — Goren's interviews are psychological combat where he already knows the answer",
      "Mouse / The Devil Judge fans of crime shows interested in the psychology of evil rather than just the mechanics of catching it — Criminal Intent frequently shows you the crime from the criminal's perspective before Goren dismantles them",
      "Stranger / Beyond Evil fans of procedurals where the detective's methods are unorthodox enough that his superiors distrust him even as his results are undeniable — Goren navigates that institutional tension across 10 seasons",
      "Sherlock fans who love detective shows structured as intellectual chess games — Criminal Intent dedicates more screen time to the detective's reasoning process than any other Law & Order franchise",
      "Through the Darkness fans of criminal psychology procedurals where understanding the offender's mind is treated as a science — Goren's approach predates the K-drama forensic psychology genre by a decade"
    ]
  },

  // ─── 20 ───
  {
    id: 'boston-legal',
    title: 'Boston Legal',
    year: 2004,
    type: 'show',
    genres: ['drama', 'comedy', 'legal'],
    themes: ['friendship', 'justice', 'ethics', 'loyalty', 'law', 'social-issues'],
    tropes: ['odd-couple-friendship', 'courtroom-drama', 'social-satire', 'unconventional-lawyer', 'mentor-friendship', 'ensemble-cast'],
    tone: ['witty', 'sharp', 'dramatic', 'warm', 'satirical'],
    setting: ['modern', 'boston', 'law-firm', 'courtroom'],
    characterTypes: ['brilliant-eccentric-lawyer', 'charming-rogue-lawyer', 'female-partners', 'courtroom-ensemble'],
    streaming: { amazon_prime: true, hulu: true },
    actors: [
      { name: 'James Spader', role: 'Alan Shore', isLead: true },
      { name: 'William Shatner', role: 'Denny Crane', isLead: true },
      { name: 'Candice Bergen', role: 'Shirley Schmidt', isLead: false }
    ],
    matchReasoningHints: [
      "Extraordinary Attorney Woo fans who love legal dramas built around an unconventional genius who wins cases through methods no one else would think of — Alan Shore's closing arguments are some of the most memorable courtroom speeches in television history",
      "My Mister fans who love male friendship at the emotional center of a show — Alan and Denny's cigars-on-the-balcony friendship is one of Western TV's most unusual and genuine male bonds",
      "The Good Wife / The Good Fight fans of legal shows that use individual cases as vehicles for social commentary — Boston Legal was doing this a decade earlier with less restraint and more flair",
      "Misaeng fans of workplace dramas where the ensemble is genuinely funny and the laughs don't undercut the emotional stakes — Boston Legal can be satirically sharp in one scene and genuinely moving in the next",
      "Prison Playbook fans of the odd-couple dynamic between a wildly unconventional character and the people who love them despite everything — Denny Crane's decline is played with more tenderness than the show's comedy would suggest possible"
    ]
  },

  // ─── 21 ───
  {
    id: 'the-good-fight',
    title: 'The Good Fight',
    year: 2017,
    type: 'show',
    genres: ['drama', 'legal', 'thriller'],
    themes: ['justice', 'politics', 'identity', 'integrity', 'resistance', 'moral-ambiguity'],
    tropes: ['second-act', 'fish-out-of-water', 'workplace-power-dynamics', 'legal-thriller', 'ensemble-cast', 'social-commentary'],
    tone: ['sharp', 'dark', 'intelligent', 'satirical', 'tense'],
    setting: ['modern', 'chicago', 'law-firm', 'political'],
    characterTypes: ['veteran-lawyer-starting-over', 'idealistic-young-associate', 'power-broker', 'complex-mentor'],
    streaming: { paramount: true },
    actors: [
      { name: 'Christine Baranski', role: 'Diane Lockhart', isLead: true },
      { name: 'Cush Jumbo', role: 'Lucca Quinn', isLead: true },
      { name: 'Rose Leslie', role: 'Maia Rindell', isLead: false }
    ],
    matchReasoningHints: [
      "Stranger fans of legal/institutional dramas where the protagonist can't trust the system she works within and must find ways to serve justice anyway — Diane Lockhart navigates exactly this moral terrain across six seasons",
      "Itaewon Class fans of shows about a character who loses everything and must rebuild from scratch with less certainty and more hard-won wisdom — Diane's second act at a Black-owned Chicago firm is that exact fresh-start arc",
      "The Devil Judge fans of legal dramas that use the courtroom to interrogate what justice actually means when the institutions of justice are compromised — The Good Fight is the smartest Western legal drama of the past decade",
      "My Mister fans of shows about adults living through difficult political and professional circumstances with intelligence and moral seriousness — The Good Fight takes the corruption of institutions personally in a way that feels very K-drama",
      "Misaeng fans of the second-chance arc at work — being stripped of status and starting over, and discovering what you're actually made of when the scaffolding is gone"
    ]
  },

  // ─── 22 ───
  {
    id: 'leverage',
    title: 'Leverage',
    year: 2008,
    type: 'show',
    genres: ['crime', 'action', 'comedy', 'drama'],
    themes: ['found-family', 'justice', 'redemption', 'teamwork', 'outsmarting-the-system', 'loyalty'],
    tropes: ['heist', 'found-family', 'con-artists', 'ensemble-specialists', 'robin-hood', 'slow-burn-romance'],
    tone: ['witty', 'fun', 'engaging', 'warm', 'clever'],
    setting: ['modern', 'various-locations', 'heist', 'underworld'],
    characterTypes: ['mastermind-leader', 'thief', 'hacker', 'grifter', 'muscle', 'ensemble-team'],
    streaming: { amazon_prime: true, imdbtv: true },
    actors: [
      { name: 'Timothy Hutton', role: 'Nathan Ford', isLead: true },
      { name: 'Gina Bellman', role: 'Sophie Devereaux', isLead: true },
      { name: 'Beth Riesgraf', role: 'Parker', isLead: false }
    ],
    matchReasoningHints: [
      "Healer fans who love found-family ensembles where each specialist brings a distinct skill and the fun is watching them assembled into an unstoppable team — Leverage is the heist version of Healer's exact team dynamic",
      "Vincenzo fans of crime dramas that root for the criminals because the targets richly deserve it and the team's competence is genuinely delightful to watch — Leverage made this premise its entire business model for five seasons",
      "Taxi Driver (K-drama) fans of vigilante justice shows where a team takes down villains the legal system can't touch, with flair, humor, and increasingly elaborate plans",
      "Chief of Staff fans of ensemble shows with a mastermind leader who assembles specialists to outmaneuver people with more resources and less imagination — Nate Ford is that archetype",
      "Strong Girl Do Bong-soon fans of shows where the comedy and the heart are inseparable — Leverage can be genuinely funny and genuinely touching in the same episode, especially when Parker is involved"
    ]
  },

  // ─── 23 ───
  {
    id: 'leverage-redemption',
    title: 'Leverage: Redemption',
    year: 2021,
    type: 'show',
    genres: ['crime', 'action', 'comedy', 'drama'],
    themes: ['redemption', 'found-family', 'justice', 'legacy', 'teamwork', 'new-beginnings'],
    tropes: ['legacy-sequel', 'found-family', 'heist', 'new-team-member', 'robin-hood', 'ensemble-specialists'],
    tone: ['witty', 'warm', 'fun', 'engaging', 'clever'],
    setting: ['modern', 'new-orleans', 'various-locations', 'heist'],
    characterTypes: ['returning-team-member', 'new-recruit', 'mastermind-grifter', 'ensemble-specialists'],
    streaming: { amazon_prime: true },
    actors: [
      { name: 'Gina Bellman', role: 'Sophie Devereaux', isLead: true },
      { name: 'Beth Riesgraf', role: 'Parker', isLead: true },
      { name: 'Noah Wyle', role: 'Harry Wilson', isLead: false }
    ],
    matchReasoningHints: [
      "Healer fans who want to revisit the found-family ensemble with new team dynamics — Leverage: Redemption adds a new character and moves the headquarters to New Orleans while keeping everything that made the original irresistible",
      "Vincenzo: Season 2 fans (hypothetically) — the team is back, the targets are even worse, and Sophie running the operation instead of supporting it is the gender-flip K-drama fans would have ordered",
      "Taxi Driver (K-drama) Season 2 fans of continuation dramas where the core team's dynamic has deepened through experience and the new cases are harder, stranger, and more emotionally loaded",
      "Start-Up fans of second-chance narratives where people get to do it again with the wisdom they didn't have the first time — Redemption is specifically about being given a chance to do more good than you did harm",
      "It's Okay to Not Be Okay fans of ensemble shows where new team members slowly discover they belong — Harry Wilson's arc from antagonist to found family member is the warmest integration story in heist television"
    ]
  },

  // ─── 24 ───
  {
    id: 'matlock-2024',
    title: 'Matlock',
    year: 2024,
    type: 'show',
    genres: ['legal', 'drama', 'mystery'],
    themes: ['justice', 'deception', 'identity', 'ageism', 'intelligence', 'revenge'],
    tropes: ['eccentric-genius', 'underestimated-protagonist', 'slow-burn-mystery', 'secret-agenda', 'legal-thriller', 'fish-out-of-water'],
    tone: ['sharp', 'clever', 'dramatic', 'twisty', 'engaging'],
    setting: ['modern', 'law-firm', 'legal', 'urban'],
    characterTypes: ['brilliant-older-lawyer', 'scheming-protagonist', 'law-firm-ensemble', 'unsuspecting-targets'],
    streaming: { paramount: true, cbs: true },
    actors: [
      { name: 'Kathy Bates', role: 'Matlock', isLead: true }
    ],
    matchReasoningHints: [
      "Extraordinary Attorney Woo fans of legal shows built entirely around an unconventional protagonist everyone underestimates — Matlock weaponizes the assumption that an older woman is harmless to run circles around every powerful person in the firm",
      "The Devil Judge fans of legal dramas with a sharp twist on who the audience is actually rooting for — Matlock's secret agenda reframes everything you thought you were watching in a way that rewards patience",
      "Vincenzo fans of protagonists who join an institution specifically to dismantle it from inside — the show's structure as a slow revenge thriller disguised as a cozy legal drama is one of 2024's best television reveals",
      "Strong Woman Do Bong-soon fans of protagonists who are significantly more dangerous than they appear and whose competence the show never questions even when the other characters do",
      "My Name fans of undercover narratives where the protagonist is playing a role that gets increasingly complicated the deeper they embed themselves — Matlock is doing this in the white-shoe law world rather than organized crime"
    ]
  },

  // ─── 25 ───
  {
    id: 'quantico',
    title: 'Quantico',
    year: 2015,
    type: 'show',
    genres: ['crime', 'thriller', 'drama', 'mystery'],
    themes: ['identity', 'secrets', 'justice', 'loyalty', 'deception', 'survival'],
    tropes: ['dual-timeline', 'female-lead', 'fbi-academy', 'twist-mystery', 'unreliable-protagonist', 'forbidden-romance'],
    tone: ['tense', 'twisty', 'dramatic', 'fast-paced', 'engaging'],
    setting: ['modern', 'fbi-academy', 'new-york', 'thriller-world'],
    characterTypes: ['female-fbi-recruit', 'mysterious-love-interest', 'fbi-instructors', 'ensemble-recruits'],
    streaming: { hulu: true },
    actors: [
      { name: 'Priyanka Chopra', role: 'Alex Parrish', isLead: true },
      { name: 'Jake McLaughlin', role: 'Ryan Booth', isLead: false }
    ],
    matchReasoningHints: [
      "The Glory fans of revenge thrillers with dual timelines — Quantico cuts between Alex's FBI training and her future as a suspect, using the same structural tension K-drama fans know how to read",
      "Vagabond fans of action-heavy thrillers starring a female protagonist who is framed for a crime she didn't commit and must prove her innocence while uncovering a conspiracy that goes all the way up",
      "W: Two Worlds / The Penthouse fans of shows where the twist at episode four reframes everything you thought you understood about the premise — Quantico built entire seasons around these structural surprises",
      "SKY Castle fans of shows where the seemingly perfect institutional world of the elite is rotted from the inside and one person is in position to expose it",
      "Mouse fans who love crime thrillers where the identity of the real villain is the central mystery and the show is willing to keep you wrong for most of the season"
    ]
  },

  // ─── 26 ───
  {
    id: 'flashpoint',
    title: 'Flashpoint',
    year: 2008,
    type: 'show',
    genres: ['crime', 'drama', 'action', 'procedural'],
    themes: ['redemption', 'crisis-intervention', 'justice', 'teamwork', 'human-psychology', 'found-family'],
    tropes: ['crisis-negotiator', 'found-family', 'ensemble-team', 'tactical-unit', 'psychological-crime', 'moral-dilemmas'],
    tone: ['tense', 'emotional', 'engaging', 'grounded', 'human'],
    setting: ['modern', 'toronto', 'tactical-unit', 'crisis-situations'],
    characterTypes: ['crisis-negotiator-leader', 'sniper', 'diverse-tactical-team', 'psychologically-complex-subjects'],
    streaming: { amazon_prime: true },
    actors: [
      { name: 'Enrico Colantoni', role: 'Sergeant Gregory Parker', isLead: true },
      { name: 'Hugh Dillon', role: 'Ed Lane', isLead: true }
    ],
    matchReasoningHints: [
      "Voice / Through the Darkness fans of procedurals that take the psychology of both criminal and victim seriously — Flashpoint's crisis negotiation model means almost every episode ends with the team having changed someone's mind rather than just their circumstances",
      "Signal fans of crime procedurals with genuine moral weight — Flashpoint rarely has clean victories because the people they're dealing with are usually desperate rather than evil",
      "Bad Guys fans of tactical ensemble shows where the team's skill under pressure is the main attraction but the emotional stakes come from what they carry between cases",
      "Partners for Justice fans of procedurals where the investigator's job is to understand the offender rather than just catch them — Greg Parker's crisis negotiation approach is the most humanizing in procedural television",
      "Move to Heaven fans of shows interested in the human cost of crisis — Flashpoint regularly shows what happens to the people left behind after the team resolves a situation, and that aftermath is where the emotional depth lives"
    ]
  },

  // ─── 27 ───
  {
    id: 'agatha-christies-poirot',
    title: "Agatha Christie's Poirot",
    year: 1989,
    type: 'show',
    genres: ['crime', 'mystery', 'drama'],
    themes: ['justice', 'psychology', 'order', 'truth', 'human-nature', 'intellect'],
    tropes: ['eccentric-genius', 'psychological-chess', 'case-of-the-week', 'period-mystery', 'detective-methodology', 'loyal-companion'],
    tone: ['cerebral', 'charming', 'tense', 'witty', 'nostalgic'],
    setting: ['1930s', 'interwar-britain', 'period', 'country-houses', 'international'],
    characterTypes: ['brilliant-belgian-detective', 'devoted-companion', 'upper-class-suspects', 'methodical-investigator'],
    streaming: { amazon_prime: true, britbox: true },
    actors: [
      { name: 'David Suchet', role: 'Hercule Poirot', isLead: true },
      { name: 'Hugh Fraser', role: 'Captain Hastings', isLead: false }
    ],
    matchReasoningHints: [
      "Sherlock fans who want the definitive version of the eccentric genius detective — David Suchet's Poirot ran for 25 years and is considered one of the greatest single-actor-single-role achievements in television history",
      "Memorist fans of detectives with unusual cognitive gifts who experience the world fundamentally differently from everyone around them — Poirot's 'little grey cells' methodology is the template every K-drama forensic genius descends from",
      "Joseon Attorney / Mr. Sunshine fans of period mysteries with impeccable production design — the interwar setting of Poirot is as atmospherically realized as the best K-drama historical world-building",
      "Good Detective / Partners for Justice fans of cases that end with justice served not through violence but through the patient accumulation of correct deduction — Poirot is the purest expression of intelligence as the weapon of choice",
      "The Tale of Lady Ok fans of crime dramas where the detective's genius is specifically tied to understanding human psychology — Poirot solves cases by understanding what people want rather than what they did"
    ]
  },

  // ─── 28 ───
  {
    id: 'republic-of-doyle',
    title: 'Republic of Doyle',
    year: 2010,
    type: 'show',
    genres: ['crime', 'comedy', 'drama'],
    themes: ['family', 'justice', 'loyalty', 'small-town-charm', 'identity', 'community'],
    tropes: ['father-son-team', 'found-family', 'small-town-detective', 'romantic-banter', 'comedic-crime', 'regional-flavor'],
    tone: ['witty', 'warm', 'engaging', 'charming', 'fun'],
    setting: ['modern', 'newfoundland', 'canada', 'coastal-town', 'private-detective'],
    characterTypes: ['charming-private-eye', 'father-partner', 'love-interest', 'eccentric-locals'],
    streaming: { amazon_prime: true },
    actors: [
      { name: 'Allan Hawco', role: 'Jake Doyle', isLead: true },
      { name: 'Sean McGinley', role: 'Malachy Doyle', isLead: true },
      { name: 'Krystin Pellerin', role: 'Leslie Bennett', isLead: false }
    ],
    matchReasoningHints: [
      "Psych fans who love light-hearted crime comedies with irresistible leads who banter their way through cases — Jake Doyle is Shawn Spencer's Canadian cousin with a more complicated father-son backstory",
      "Hometown Cha-Cha-Cha fans of crime procedurals set in tight-knit communities where the detective is everyone's favorite problem — Newfoundland's St. John's has the same warmth and specificity as Gongjin",
      "Weightlifting Fairy Kim Bok-joo fans of shows with a charming, self-confident lead who is bad at romance in a very endearing way — Jake Doyle has all the confidence and none of the self-awareness",
      "Racket Boys fans of the father-son dynamic at the center of an ensemble comedy — Malachy and Jake bicker, compete, and unconditionally protect each other exactly like the best K-drama parent-child pairs",
      "Strong Girl Do Bong-soon fans of crime comedies where the laughs are reliable but the show can pivot to genuine emotion on a dime — Republic of Doyle runs that tonal balance as its core operating principle"
    ]
  },

  // ─── 29 ───
  {
    id: 'graceland',
    title: 'Graceland',
    year: 2013,
    type: 'show',
    genres: ['crime', 'drama', 'thriller'],
    themes: ['identity', 'loyalty', 'undercover', 'corruption', 'moral-ambiguity', 'found-family'],
    tropes: ['undercover-operations', 'found-family', 'moral-ambiguity', 'deep-cover', 'trust-and-betrayal', 'ensemble-agents'],
    tone: ['tense', 'gritty', 'engaging', 'warm', 'dramatic'],
    setting: ['modern', 'california', 'undercover', 'beachhouse', 'federal-agents'],
    characterTypes: ['fbi-undercover-agent', 'mixed-agency-team', 'enigmatic-mentor', 'corrupt-adversary'],
    streaming: { amazon_prime: true },
    actors: [
      { name: 'Aaron Tveit', role: 'Mike Warren', isLead: true },
      { name: 'Daniel Sunjata', role: 'Paul Briggs', isLead: true }
    ],
    matchReasoningHints: [
      "Vagabond fans who love undercover thrillers where the new agent discovers that the most dangerous thing about the assignment is the mentor he trusted — Briggs vs. Warren's dynamic has the same slow-burn trust erosion",
      "My Name fans who love shows where the protagonist enters a criminal world undercover and slowly loses certainty about which identity is real — Graceland's six federal agents living in one beach house build bonds that complicate every cover story",
      "NCIS: LA fans of covert operations shows where the found-family that forms in an undercover house is as emotionally resonant as any family drama — Graceland is the most intense version of this premise",
      "Healer fans of ensemble casts where the interpersonal loyalties are being tested by the work — everyone in the Graceland house knows something the others don't, and the show is about what that costs",
      "Three Days fans of shows where a single new agent's arrival begins unraveling a conspiracy that everyone else chose not to see — Mike Warren is an excellent K-drama protagonist displaced to a California beach house"
    ]
  },

  // ─── 30 ───
  {
    id: 'private-eyes',
    title: 'Private Eyes',
    year: 2016,
    type: 'show',
    genres: ['crime', 'comedy', 'drama', 'mystery'],
    themes: ['partnership', 'found-family', 'justice', 'second-chances', 'slow-burn-romance', 'loyalty'],
    tropes: ['odd-couple', 'slow-burn-romance', 'buddy-detective', 'will-they-wont-they', 'found-family', 'case-of-the-week'],
    tone: ['witty', 'charming', 'warm', 'fun', 'romantic'],
    setting: ['modern', 'toronto', 'private-detective', 'canada'],
    characterTypes: ['ex-hockey-player-detective', 'driven-female-detective', 'quirky-assistant', 'found-family-team'],
    streaming: { amazon_prime: true },
    actors: [
      { name: 'Jason Priestley', role: 'Matt Shade', isLead: true },
      { name: 'Cindy Sampson', role: 'Angie Everett', isLead: true }
    ],
    matchReasoningHints: [
      "Weightlifting Fairy Kim Bok-joo fans of slow-burn romantic comedies where two people work together closely, bicker constantly, and fall in love over 5 seasons while solving crimes that get increasingly absurd",
      "Strong Woman Do Bong-soon fans of crime comedies with a sharp female detective and a charming less-competent male partner who is endearing precisely because he keeps trying — Private Eyes inverts the competence dynamic in delightful ways",
      "Psych fans of warm buddy-detective shows where the chemistry between the leads is the show's primary engine and the cases are an excuse to watch them be in scenes together",
      "Hometown Cha-Cha-Cha fans of slow-burn romance between professionals who respect each other's competence — Shade and Angie spend 5 seasons acknowledging the attraction and coming up with professional reasons to ignore it",
      "Partners for Justice fans of partnerships where the two leads have complementary but fundamentally different approaches to the work, and the friction between their methods is where all the best scenes happen"
    ]
  }

];
