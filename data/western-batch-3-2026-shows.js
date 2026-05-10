/**
 * Western Shows Batch 3 — 2026 Catalog Expansion
 * 8 titles: UK prestige dramas, coming-of-age, Australian, Palm Royale comedy
 * Added: 2026-04-15
 */
module.exports = [

  // ── LGBTQ+ PERIOD DRAMA ───────────────────────────────────────────────────────

  {
    id: 'its-a-sin',
    title: "It's a Sin",
    year: 2021,
    episodes: 5,
    synopsis: 'London, 1981. Five friends — gay men and their best friend — share a flat, build lives, and face the AIDS crisis as it dismantles everything they built. Russell T Davies wrote this as a love letter to the people he lost, and the result is one of the great ensemble dramas in British television history: devastating, hilarious, and completely unwilling to sentimentalize either the joy or the loss.',
    genres: ['drama', 'historical', 'comedy', 'romance'],
    themes: ['friendship', 'found-family', 'loss', 'epidemic', 'lgbtq', 'youth', 'coming-of-age', 'grief'],
    tropes: ['found-family', 'tragic-epidemic', 'youth-and-loss', 'ensemble-friends', 'lgbtq-history'],
    tone: ['devastating', 'joyful', 'emotional', 'warm', 'heartbreaking'],
    setting: ['1980s-london', 'historical', 'urban', 'flat-share'],
    characterTypes: ['found-family-group', 'best-friend-ally', 'supportive-mothers', 'young-gay-men'],
    streaming: { hbo: true, max: true, amazon_prime: true },
    network: 'Channel 4 / HBO Max',
    actors: [
      { name: 'Olly Alexander', role: 'Ritchie', isLead: true },
      { name: 'Nathaniel Curtis', role: 'Ash', isLead: true },
      { name: 'Neil Patrick Harris', role: 'Henry', isLead: false }
    ],
    matchReasoningHints: [
      'Age of Youth fans of ensemble dramas about young people sharing a flat who become a found family — the Channel 4 flat in It\'s a Sin has the same emotional architecture as the Belle Epoque boarding house but the historical stakes raise everything',
      'Our Blues fans of ensemble dramas where each character receives full attention and the tragedy is distributed across the group rather than concentrated on one protagonist — both shows trust that an audience can love eight people simultaneously',
      'Sense8 fans of found-family dramas about chosen family formed through shared marginality — It\'s a Sin is the historical document for what the Sense8 impulse looked like when a generation of gay men actually lived it',
      'My Mister fans of dramas that witness people carrying enormous weight with dignity — the way the mothers in It\'s a Sin respond to the crisis is one of the most emotionally complex portrayals of parental love in television',
      'Hospital Playlist fans of ensemble ensemble shows about a tight group of friends where the joy is as important as the grief and the friendships are the argument the show is making for how to live'
    ]
  },

  // ── NEAR-FUTURE POLITICAL DRAMA ───────────────────────────────────────────────

  {
    id: 'years-and-years',
    title: 'Years and Years',
    year: 2019,
    episodes: 6,
    synopsis: 'The Lyons family in Manchester navigates fifteen years of catastrophic but entirely plausible near-future Britain: rising populism, economic collapse, refugee crises, digital surveillance, and the specific grief of watching the world you thought was stable turn into something barely recognizable. Emma Thompson plays a demagogic politician; the Lyons family is the cost of her rise.',
    genres: ['drama', 'sci-fi', 'political', 'family'],
    themes: ['family', 'political-dystopia', 'technology', 'survival', 'hope', 'near-future', 'political-complicity'],
    tropes: ['near-future', 'family-saga', 'political-satire', 'technological-horror', 'ordinary-family-extraordinary-time'],
    tone: ['tense', 'emotional', 'political', 'prescient', 'devastating'],
    setting: ['near-future-uk', 'manchester', 'family-home', 'political-landscape'],
    characterTypes: ['ordinary-family', 'demagogue-politician', 'refugees', 'survivors'],
    streaming: { hbo: true, max: true },
    network: 'BBC One / HBO',
    actors: [
      { name: 'Emma Thompson', role: 'Vivienne Rook', isLead: false },
      { name: 'Russell Tovey', role: 'Daniel Lyons', isLead: true },
      { name: 'Jessica Hynes', role: 'Edith Lyons', isLead: true }
    ],
    matchReasoningHints: [
      'Black Mirror fans who want the anthology show\'s technology-horror premise applied longitudinally to a single family across fifteen years — Years and Years is what happens when you take all of Black Mirror\'s premises and run them simultaneously through one household',
      'Station Eleven fans of near-future dramas that are fundamentally optimistic about human beings while being completely honest about the forces trying to destroy them — Years and Years reaches the same destination via political catastrophe rather than viral collapse',
      'Succession fans of prestige drama about power and complicity that watches ordinary people enable the forces that ultimately destroy them — the Lyons family\'s relationship to Vivienne Rook mirrors what Succession does with the media ecosystem',
      'Pinocchio fans of K-dramas about media, truth, and the political cost of misinformation — Years and Years is the British near-future version of asking what society looks like when lies have structural advantages',
      'Tomorrow fans of Korean near-future drama that uses speculative elements to ground an emotional story about people trying to survive within systems that are failing them — Years and Years operates in the same register without the supernatural safety valve'
    ]
  },

  // ── COMMUNITY CRIME DRAMA ─────────────────────────────────────────────────────

  {
    id: 'sherwood-bbc',
    title: 'Sherwood',
    year: 2022,
    episodes: 6,
    synopsis: 'A murder in a former mining community in Nottinghamshire reopens wounds from the 1984-85 miners\' strike — and the undercover police operations that infiltrated the unions. A crime drama that uses its detective plot to excavate forty years of institutional betrayal and community division, with David Morrissey and Lesley Manville in the kind of performances that the BBC does better than anyone.',
    genres: ['crime', 'drama', 'thriller', 'mystery'],
    themes: ['community-division', 'institutional-betrayal', 'working-class', 'secrets', 'justice', 'history-and-present'],
    tropes: ['community-murder', 'reopened-wounds', 'institutional-cover-up', 'small-town-crime', 'political-backstory'],
    tone: ['tense', 'political', 'emotional', 'atmospheric', 'slow-burn'],
    setting: ['nottinghamshire-village', 'contemporary-uk', 'mining-community', 'historical-echo'],
    characterTypes: ['weary-detective', 'grieving-community', 'institutional-criminal', 'divided-neighbors'],
    streaming: { netflix: true, amazon_prime: true },
    network: 'BBC One',
    actors: [
      { name: 'David Morrissey', role: 'DCS Ian St Clair', isLead: true },
      { name: 'Lesley Manville', role: 'Julie Jackson', isLead: true }
    ],
    matchReasoningHints: [
      'Broadchurch fans of British crime dramas where the murder investigation is less important than what the crime reveals about the community and the show is ultimately about grief, complicity, and the limits of justice',
      'Signal fans who want their cold-case-meets-present-crime structure applied to a British context where the political backstory is industrial history — Sherwood uses the 1984 miners\' strike the way Signal uses the Hwaseong murders',
      'Line of Duty fans who want the institutional corruption strand of that show without the procedural framework — Sherwood is interested in what happened to communities when police operations systematically betrayed them and how that shapes everything forty years later',
      'Happy Valley fans of Yorkshire and Nottinghamshire crime drama that uses a murder investigation to tell the emotional truth about communities held together by people who remember different versions of the same story',
      'The Wirral fans of British crime that treats working-class communities not as backdrop for middle-class detective psychology but as the actual subject — Sherwood is a drama about what labor politics does to neighborhoods and relationships'
    ]
  },

  // ── NORTHERN IRELAND THRILLER ─────────────────────────────────────────────────

  {
    id: 'bloodlands',
    title: 'Bloodlands',
    year: 2021,
    episodes: 8,
    synopsis: 'A Northern Ireland detective reopens a cold case linked to a legendary assassin known as "Goliath" — and discovers the investigation leads somewhere he cannot prepare for. A compact, atmospheric thriller that uses the geography and political history of post-Troubles Northern Ireland as both setting and atmosphere, with James Nesbitt carrying the ambiguity of a character who may be investigating himself.',
    genres: ['thriller', 'crime', 'mystery', 'drama'],
    themes: ['secrets', 'guilt', 'identity', 'justice', 'political-history', 'betrayal', 'investigation'],
    tropes: ['detective-investigating-himself', 'cold-case-reopened', 'political-backdrop', 'compact-thriller', 'moral-grey-zone'],
    tone: ['tense', 'atmospheric', 'slow-burn', 'dark', 'political'],
    setting: ['northern-ireland', 'post-troubles', 'contemporary', 'rural'],
    characterTypes: ['morally-compromised-detective', 'political-ghosts', 'cold-case-victim', 'investigative-partner'],
    streaming: { peacock: true, amazon_prime: true },
    network: 'BBC One',
    actors: [
      { name: 'James Nesbitt', role: 'Tom Brannick', isLead: true }
    ],
    matchReasoningHints: [
      'Through the Darkness fans of crime dramas where the detective\'s psychology is as much the subject as the crime — Bloodlands uses a morally compromised detective in the same way that Korean crime procedurals use profiler psychology to examine institutional violence',
      'Signal fans of crime dramas where a cold case from a politically turbulent era bleeds into the present and the detective discovers the investigation is about him in ways he cannot yet articulate',
      'Broadchurch fans of compact British crime drama that uses a police investigation to excavate a community\'s buried history — the Troubles backdrop in Bloodlands gives every scene a political texture that most UK crime drama avoids',
      'Bad Guys fans of crime drama where the detective\'s moral authority is genuinely compromised and the show refuses to resolve that ambiguity — Bloodlands asks what justice means when the investigator is also a perpetrator',
      'Slow Horses fans of British thriller where the institutional dimension of a crime is as important as the personal stakes and the political context is woven into the plot mechanics rather than just mentioned'
    ]
  },

  // ── TEEN ROMANCE / COMING-OF-AGE ─────────────────────────────────────────────

  {
    id: 'love-victor',
    title: 'Love, Victor',
    year: 2020,
    episodes: 30,
    synopsis: 'Victor Salazar is new to Creekwood High, navigating his family\'s expectations, the legacy of Simon Spier (Love, Simon), and his own slow realization about who he is. A teen romance series that earns its emotional register through genuine character work rather than coming-out narrative mechanics — three seasons that take Victor\'s story through complexity rather than settling for resolution.',
    genres: ['romance', 'drama', 'comedy', 'coming-of-age'],
    themes: ['identity', 'coming-of-age', 'lgbtq', 'family', 'first-love', 'acceptance', 'self-discovery'],
    tropes: ['new-kid', 'coming-out', 'first-love', 'teen-ensemble', 'family-conflict'],
    tone: ['heartwarming', 'emotional', 'funny', 'sincere', 'genuine'],
    setting: ['suburban-us', 'high-school', 'modern', 'family-home'],
    characterTypes: ['new-student', 'supportive-friends', 'complicated-parents', 'first-love'],
    streaming: { hulu: true, disney_plus: true },
    network: 'Hulu / Disney+',
    actors: [
      { name: 'Michael Cimino', role: 'Victor Salazar', isLead: true },
      { name: 'Rachel Hilson', role: 'Mia Brooks', isLead: true },
      { name: 'George Sear', role: 'Benji Campbell', isLead: false }
    ],
    matchReasoningHints: [
      'Heartstopper fans of queer coming-of-age romance that takes teen feelings seriously and refuses to flatten the complexity of first love into a simple coming-out narrative — Love, Victor runs three seasons and earns its complications',
      'Young Royals fans of teen romance that is willing to sit inside the messiness of a character who is figuring things out in real time rather than presenting a finished identity — Victor\'s uncertainty is the show\'s emotional engine',
      'A Moment at Eighteen fans of K-dramas about high school students navigating first love alongside family pressure — Love, Victor has the same careful attention to the domestic dimension of teen identity that makes those shows feel true',
      'Age of Youth fans of ensemble shows about a group of people in a specific life stage where each person\'s story illuminates a different aspect of the same questions — Creekwood High has the same ensemble intelligence as the Belle Epoque boarding house',
      'School 2015 fans of K-dramas about high school identity crises that take the emotional stakes of teenage life seriously rather than condescending to them — Love, Victor has the same respect for what first love actually costs'
    ]
  },

  // ── SATIRICAL PERIOD COMEDY ───────────────────────────────────────────────────

  {
    id: 'palm-royale',
    title: 'Palm Royale',
    year: 2024,
    episodes: 10,
    synopsis: 'Palm Beach, 1969. Maxine Dellacorte is determined to penetrate the impenetrable social world of Palm Royale\'s elite by any means necessary — including marrying into a comatose woman\'s estate and inheriting all her social obligations. A gloriously costume-heavy period satire about class ambition, the violence of social performance, and what a woman will do to belong somewhere that was never going to accept her.',
    genres: ['comedy', 'drama', 'historical', 'mystery'],
    themes: ['social-climbing', 'class', 'performance', 'female-ambition', 'belonging', 'wealth', 'satire'],
    tropes: ['social-climber', 'inherited-mansion', 'elite-society-infiltration', 'female-ensemble', 'period-satire'],
    tone: ['darkly-comedic', 'satirical', 'glamorous', 'colorful', 'sharp'],
    setting: ['1960s-palm-beach', 'luxury', 'social-elite', 'historical'],
    characterTypes: ['ambitious-social-climber', 'old-money-guard', 'sleeping-heiress', 'female-rivals'],
    streaming: { apple_tv: true },
    network: 'Apple TV+',
    actors: [
      { name: 'Kristen Wiig', role: 'Maxine Dellacorte', isLead: true },
      { name: 'Laura Dern', role: 'Evelyn', isLead: true },
      { name: 'Ricky Martin', role: 'Raul', isLead: false }
    ],
    matchReasoningHints: [
      'Heard It Through the Grapevine fans of satirical drama about class performance and the specific violence of trying to belong in a world that designed itself specifically to exclude you — Palm Royale is the American 1960s version of that analysis',
      'Minx fans of female-led period comedies that are primarily about what women had to do to build anything in an era that denied them structural access — Maxine\'s methods are extreme but the desperation is entirely legible',
      'Sky Castle fans of sharp satire about elite social performance where the comedy comes from how exhausting and absurd the maintenance of status actually is — the Palm Beach world is the Korean chaebol social circuit in pastel',
      'Emily in Paris fans of shows about an outsider trying to infiltrate an elite social world through sheer determination and style — Palm Royale is the darker, funnier, and more historically interesting version of that premise',
      'Schitt\'s Creek fans of comedy about a person of dubious background navigating a world that views their ambition as inherently vulgar — Maxine is Alexis Rose if Alexis had been desperate rather than oblivious'
    ]
  },

  // ── AUSTRALIAN TEEN DRAMA ─────────────────────────────────────────────────────

  {
    id: 'heartbreak-high-2022',
    title: 'Heartbreak High (2022)',
    year: 2022,
    episodes: 16,
    synopsis: 'A reboot of the iconic Australian teen drama, set at a contemporary Sydney high school where a friendship-destroying sex map incident forces the school to implement a relationships and sexuality class. What unfolds is a genuinely progressive and often brilliant teen drama that treats sexuality, identity, and neurodiversity with the same seriousness it brings to social media, class, and the way adolescent hierarchies are both ridiculous and crushing.',
    genres: ['drama', 'romance', 'comedy', 'teen'],
    themes: ['identity', 'sexuality', 'friendship', 'neurodiversity', 'coming-of-age', 'class', 'social-media'],
    tropes: ['high-school-ensemble', 'sex-map-incident', 'forced-friendship', 'neurodivergent-lead', 'lgbtq-teens'],
    tone: ['sharp', 'funny', 'emotional', 'progressive', 'authentic'],
    setting: ['sydney-high-school', 'contemporary-australia', 'suburban', 'school'],
    characterTypes: ['neurodivergent-lead', 'ensemble-teens', 'complex-adults', 'diverse-student-body'],
    streaming: { netflix: true },
    network: 'Netflix',
    actors: [
      { name: 'Ayesha Madon', role: 'Amerie', isLead: true },
      { name: 'James Majoos', role: 'Darren', isLead: true },
      { name: 'Asher Yasbincek', role: 'Harper', isLead: false }
    ],
    matchReasoningHints: [
      'Extraordinary Attorney Woo fans who want neurodiversity represented in a teen drama context with the same intelligence and specificity — the portrayal of autism in Heartbreak High refuses the usual tropes and centers the neurodivergent experience in genuinely new ways',
      'Extracurricular fans of teen dramas that refuse to let their young characters be simple — every student in Heartbreak High has a fully developed interior life and the show is interested in what adolescent hierarchies actually cost',
      'Skins fans of Australian/British teen drama that does not condescend to its characters and treats sexuality and identity as genuinely complex rather than reducible to coming-out beats — this show earns its progressive framing',
      'School 2017 fans of K-dramas about high school social dynamics that use the institutional structure of school as a pressure cooker for questions about identity, belonging, and injustice',
      'Heartstopper fans who want teen LGBTQ+ representation with more edge and less comfort — Heartbreak High is not soft-focused and its portrayal of teen sexuality is complex in ways that Heartstopper consciously avoids'
    ]
  },

  // ── ROY GRACE DETECTIVE ───────────────────────────────────────────────────────

  {
    id: 'grace-detective',
    title: 'Grace',
    year: 2021,
    episodes: 14,
    synopsis: 'Brighton detective Roy Grace investigates complex murders while personally haunted by the ten-year disappearance of his wife — and the growing suspicion that her fate was more complicated than abandonment. Based on Peter James\'s bestselling novels, this ITV crime series has the patient quality of the best British detective dramas: procedurally rigorous, psychologically rich, and permanently aware that the detective\'s private grief shapes every case.',
    genres: ['crime', 'mystery', 'drama', 'thriller'],
    themes: ['grief', 'obsession', 'justice', 'marriage', 'loss', 'investigation', 'Brighton'],
    tropes: ['haunted-detective', 'missing-wife-mystery', 'crime-procedural', 'team-dynamics', 'personal-stakes'],
    tone: ['atmospheric', 'tense', 'emotional', 'procedural', 'slow-burn'],
    setting: ['brighton-uk', 'contemporary', 'coastal', 'police-procedural'],
    characterTypes: ['grief-haunted-detective', 'loyal-partner', 'complex-victims', 'forensic-team'],
    streaming: { peacock: true, britbox: true },
    network: 'ITV',
    actors: [
      { name: 'John Simm', role: 'Roy Grace', isLead: true },
      { name: 'Richie Campbell', role: 'Glenn Branson', isLead: false }
    ],
    matchReasoningHints: [
      'Signal fans of crime procedurals where the detective\'s personal loss is structurally integrated into the case-of-the-week format rather than being backstory that occasionally intrudes — Roy Grace\'s missing wife is the emotional architecture the whole show is built on',
      'Unforgotten fans of ITV crime drama where the procedural competence of the detective team is matched by the emotional intelligence of how the show handles victims and perpetrators as fully realized human beings',
      'Broadchurch fans of British coastal crime drama where the setting is as important as the cases — Brighton is used with the same atmospheric specificity that Broadchurch brought to Dorset',
      'Through the Darkness fans of crime dramas where the detective\'s psychology is as interesting as the criminal\'s — Roy Grace\'s relationship to his missing wife parallels the way Korean crime dramas use profiler psychology to examine what cases do to investigators',
      'The Mentalist fans of procedural crime with a detective whose unusual personal damage (grief, obsession, missing person) drives an idiosyncratic investigative style that colleagues find both valuable and concerning'
    ]
  }

];
