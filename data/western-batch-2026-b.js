/**
 * DramaMatch Western Catalog Expansion — Batch 2026-B (11 titles)
 *
 * Shows (7): The Gentlemen, Eric, Ripley, Bodies, 3 Body Problem,
 * All the Light We Cannot See, Avatar: The Last Airbender (2024).
 * Movies (4): The Banshees of Inisherin, Society of the Snow,
 * All Quiet on the Western Front (2022), The Zone of Interest.
 *
 * Each entry: full metadata, streaming badges, affiliate links, 5 cross-cultural hints.
 * Added: 2026-04-15
 */
module.exports = [

  // ─────────────────────────────────────────
  // SHOWS
  // ─────────────────────────────────────────

  // ─── 1 ───
  {
    id: 'the-gentlemen-netflix',
    title: 'The Gentlemen',
    year: 2024,
    type: 'show',
    episodes: 8,
    synopsis: "Eddie Horniman inherits his father's English estate and discovers it's secretly hosting a massive cannabis empire operated by an American drug lord named Bobby Glass. Eddie has no interest in crime. Bobby Glass has no interest in losing his best real estate. A Guy Ritchie Netflix series that takes the energy of the 2019 film — overlapping criminal factions, sharp dialogue, escalating complications — and expands it into a deeply satisfying puzzle box about a very polite man discovering he's much better at crime than he expected.",
    genres: ['crime', 'comedy', 'thriller', 'drama'],
    themes: ['inheritance', 'class', 'loyalty', 'crime-underworld', 'identity', 'power'],
    tropes: ['fish-out-of-water', 'criminal-underworld', 'ensemble-crime', 'British-class-comedy', 'unlikely-criminal', 'intricate-plot'],
    tone: ['stylish', 'funny', 'tense', 'slick', 'witty'],
    setting: ['england', 'london', 'rural-estate', 'modern', 'crime-world'],
    characterTypes: ['reluctant-aristocrat', 'charming-crime-lord', 'loyal-advisor', 'rival-gangs'],
    streaming: { netflix: true },
    actors: [
      { name: 'Theo James', role: 'Eddie Horniman', isLead: true },
      { name: 'Kaya Scodelario', role: 'Susie Glass', isLead: true },
      { name: 'Giancarlo Esposito', role: 'Bobby Glass', isLead: false }
    ],
    matchReasoningHints: [
      "Vincenzo fans of crime comedies where an unexpected protagonist discovers they're disturbingly good at the criminal world, and the show enjoys that contradiction without resolving it tidily",
      "My Liberation Notes fans of shows about people trapped by their circumstances who gradually build a complex relationship with the constraints around them — Eddie's situation is a comic inversion of that pressure",
      "Reborn Rich fans of Korean class dramas — The Gentlemen is the British equivalent: old money, new money, and the way criminal enterprise disrupts inherited social order in ways that are both funny and pointed",
      "Big Mouth K-drama fans who love crime comedies where the protagonist is clearly out of his depth but keeps stumbling onto the right moves — Eddie's aristocratic confidence is functionally similar to the accidental crime boss energy",
      "Suits fans of stylish professional dramas built around intricate maneuvering — The Gentlemen has the same aesthetic pleasure and the same satisfaction of watching someone construct an argument out of nothing"
    ]
  },

  // ─── 2 ───
  {
    id: 'eric-netflix',
    title: 'Eric',
    year: 2024,
    type: 'show',
    episodes: 6,
    synopsis: "Vincent Anderson is a celebrated puppeteer in 1980s New York. His show is struggling. His marriage is collapsing. Then his nine-year-old son Edgar disappears on the way to school. As the search for Edgar spirals, Vincent becomes increasingly convinced that building a monster puppet called Eric — a creation Edgar designed — will somehow bring his son home. A limited series about a man whose creative genius and spectacular dysfunction are completely inseparable, set in a New York that is both gorgeous and genuinely dark.",
    genres: ['drama', 'mystery', 'psychological', 'crime'],
    themes: ['grief', 'addiction', 'family', 'guilt', 'class', 'missing-child'],
    tropes: ['missing-child', 'fractured-family', 'unreliable-protagonist', 'police-investigation', 'psychological-spiral', 'creative-obsession'],
    tone: ['dark', 'intense', 'emotional', 'atmospheric', 'bittersweet'],
    setting: ['1980s-new-york', 'urban', 'historical', 'gritty'],
    characterTypes: ['brilliant-troubled-father', 'determined-detective', 'estranged-wife', 'child-in-danger'],
    streaming: { netflix: true },
    actors: [
      { name: 'Benedict Cumberbatch', role: 'Vincent Anderson', isLead: true },
      { name: 'Gaby Hoffmann', role: 'Cassie Anderson', isLead: false },
      { name: 'McKinley Belcher III', role: 'Detective Ledroit', isLead: false }
    ],
    matchReasoningHints: [
      "My Mister fans of shows about brilliant, broken adults being ground down by circumstances of their own making — Vincent's self-destruction is as compelling as it is painful, and the show refuses to simplify him",
      "Through the Darkness fans of crime investigations that are really explorations of the investigator's psychology — Detective Ledroit's parallel story is as carefully constructed as the missing-child case",
      "Signal fans of procedural dramas where a child's disappearance exposes layers of systemic failure in the institutions meant to protect people",
      "It's Okay to Not Be Okay fans of shows that center a protagonist whose creative genius and emotional damage are completely intertwined — Vincent's inability to separate his art from his grief is the show's central tragedy",
      "Happiness K-drama fans of shows set in a contained world under pressure — 1980s New York in Eric is a character in itself, and the city's specific problems (homelessness, AIDS crisis, police corruption) are threaded throughout"
    ]
  },

  // ─── 3 ───
  {
    id: 'ripley-netflix',
    title: 'Ripley',
    year: 2024,
    type: 'show',
    episodes: 8,
    synopsis: "Tom Ripley is a small-time New York con man hired by a wealthy American to travel to Italy and convince his son Dickie Greenleaf to come home. What he finds instead is Dickie's life — the villa, the lifestyle, the girlfriend, the ease of being rich — and decides he wants it. Beautiful black-and-white cinematography, surgical pacing, and Andrew Scott's performance combine to make this the definitive screen adaptation of Patricia Highsmith's novel. A portrait of a liar so complete it becomes a meditation on identity itself.",
    genres: ['thriller', 'drama', 'crime', 'psychological'],
    themes: ['identity', 'ambition', 'class', 'deception', 'obsession', 'art'],
    tropes: ['con-man', 'hidden-identity', 'murder-mystery', 'class-aspiration', 'italy', 'psychological-portrait'],
    tone: ['tense', 'beautiful', 'cold', 'precise', 'psychological'],
    setting: ['1960s-italy', 'rome', 'naples', 'amalfi-coast', 'historical'],
    characterTypes: ['cold-calculating-con-man', 'wealthy-expat', 'suspicious-detective', 'naive-socialite'],
    streaming: { netflix: true },
    actors: [
      { name: 'Andrew Scott', role: 'Tom Ripley', isLead: true },
      { name: 'Johnny Flynn', role: 'Dickie Greenleaf', isLead: false },
      { name: 'Dakota Fanning', role: 'Marge Sherwood', isLead: false }
    ],
    matchReasoningHints: [
      "Vincenzo fans of shows about a man operating entirely outside normal moral categories — Ripley, like Vincenzo, never apologizes and never explains, and the show asks you to watch without needing to endorse",
      "Nobody fans of crime thrillers where the protagonist's true nature is gradually revealed through escalating situations — Ripley's cool escalation is the Western equivalent",
      "Crash Landing on You fans who appreciate when a show uses its location as a full character — Italy in Ripley is photographed like a fever dream, and the beauty is inseparable from the menace",
      "Reborn Rich / Big Mouth fans of shows about someone stealing their way into a class position they were born outside — Ripley is the archetype that all imposter-rises dramas are working from",
      "Dark (Netflix) fans of shows where every scene contains dread beneath a surface of beauty, and the unraveling is as meticulously constructed as the lie"
    ]
  },

  // ─── 4 ───
  {
    id: 'bodies-netflix',
    title: 'Bodies',
    year: 2023,
    type: 'show',
    episodes: 8,
    synopsis: "A body is found in the same alleyway in London in 1890, 1941, 2023, and 2053. Four detectives — a Victorian woman in a man's world, a Jewish man in Nazi-occupied London, a contemporary detective, and a woman from a surveillance state — each investigate the same corpse across different eras. As each thread closes in on the truth, it becomes clear that someone has arranged for this to happen, and that the answer to why touches something fundamental about how power chooses its future. A fiendishly plotted mystery that becomes something genuinely strange.",
    genres: ['mystery', 'sci-fi', 'thriller', 'drama'],
    themes: ['time', 'power', 'justice', 'identity', 'fate', 'truth'],
    tropes: ['time-mystery', 'parallel-narratives', 'conspiracy', 'police-procedural', 'dystopian-future', 'historical'],
    tone: ['mysterious', 'tense', 'clever', 'dark', 'atmospheric'],
    setting: ['london', 'multi-era', '1890s', 'wwii', 'modern', 'dystopian-future'],
    characterTypes: ['detective-across-eras', 'mysterious-victim', 'architect-of-conspiracy', 'parallel-investigators'],
    streaming: { netflix: true },
    actors: [
      { name: 'Amaka Okafor', role: 'Detective Hasan (2023)', isLead: true },
      { name: 'Shira Haas', role: 'Detective Whiteman (1941)', isLead: true },
      { name: 'Kyle Soller', role: 'Detective Whiteman (2053)', isLead: false }
    ],
    matchReasoningHints: [
      "Signal fans of mysteries that span time and use a thread across eras to expose a crime that couldn't be solved in any single period — Bodies has the same temporal detective structure with more existential weight",
      "Dark (Netflix) fans of shows built around a time-spanning conspiracy that rewards careful attention and punishes passive viewing — Bodies is similarly confident that its audience will keep up",
      "Tunnel / Stranger K-drama fans of dual-timeline mysteries where parallel investigations slowly converge on a shared truth — Bodies does this across four timelines simultaneously with remarkable clarity",
      "The Glory fans of stories about elaborate plans that were constructed across impossible timescales — the conspiracy in Bodies was designed on a scale that makes most K-drama villain plans look modest",
      "Nirvana in Fire fans of mysteries where uncovering the truth requires understanding how power has shaped the record of the past — Bodies is fundamentally about who gets to write history"
    ]
  },

  // ─── 5 ───
  {
    id: 'three-body-problem-netflix',
    title: '3 Body Problem',
    year: 2024,
    type: 'show',
    episodes: 8,
    synopsis: "A scientist is executed during China's Cultural Revolution for defending Western physics. Her daughter, raised to be loyal to the revolution, instead sends humanity's location to a distant star system. Now, in the present, physicists are dying. A game is being played across virtual reality that simulates an alien civilization. Five scientists who knew each other at Oxford find themselves at the center of something that started decades ago and won't resolve for four centuries. David Benioff and D.B. Weiss adapt Liu Cixin's trilogy with enormous scale and genuine fidelity to the book's most radical ideas.",
    genres: ['sci-fi', 'thriller', 'drama', 'mystery'],
    themes: ['civilizational-stakes', 'science', 'betrayal', 'survival', 'history', 'first-contact'],
    tropes: ['alien-invasion', 'ensemble-cast', 'conspiracy', 'science-as-salvation', 'historical-scope', 'game-within-story'],
    tone: ['epic', 'tense', 'intellectual', 'dark', 'atmospheric'],
    setting: ['modern-london', 'historical-china', 'virtual-reality', 'global'],
    characterTypes: ['physicist-protagonist', 'determined-investigator', 'alien-civilization', 'oxford-ensemble'],
    streaming: { netflix: true },
    actors: [
      { name: 'Eiza González', role: 'Auggie Salazar', isLead: true },
      { name: 'John Bradley', role: 'Jack Rooney', isLead: false },
      { name: 'Jess Hong', role: 'Jin Cheng', isLead: false }
    ],
    matchReasoningHints: [
      "Kingdom fans of K-drama with enormous civilizational stakes — 3 Body Problem operates at the scale where the survival of the human species is the actual subject, not a backdrop, which gives it the same 'everything hangs on this' urgency",
      "Signal / Tunnel fans of stories where an event in the past creates consequences in the present that require investigation across time — the Cultural Revolution prologue and its modern consequences are handled with the same structural clarity",
      "The Glory fans of stories about decisions made under extreme duress that propagate through time with devastating consequences for people who didn't make them",
      "Dark (Netflix) fans of science fiction built on a cosmological scale where understanding the situation requires understanding physics, game theory, and history simultaneously",
      "All of Us Are Dead fans of shows that ask what humans do when confronted with extinction — 3 Body Problem takes that question seriously and refuses to offer easy heroism as an answer"
    ]
  },

  // ─── 6 ───
  {
    id: 'all-the-light-we-cannot-see',
    title: 'All the Light We Cannot See',
    year: 2023,
    type: 'show',
    episodes: 4,
    synopsis: "Based on Anthony Doerr's Pulitzer Prize-winning novel. Marie-Laure, a blind French girl, has been raised by her father among the wonders of a Paris natural history museum. Werner, a German orphan, has been drafted into the Wehrmacht because of his uncanny ability with radio technology. Both are converging on the occupied city of Saint-Malo, 1944, where a legendary diamond called the Sea of Flames is hidden, and where German officer Von Rumpel will stop at nothing to find it. A visually ravishing, emotionally devastating war love story.",
    genres: ['drama', 'romance', 'war', 'historical'],
    themes: ['war', 'hope', 'love', 'survival', 'humanity', 'loss', 'music'],
    tropes: ['war-romance', 'star-crossed-lovers', 'forbidden-love', 'occupation', 'radio-as-connection', 'coming-of-age'],
    tone: ['beautiful', 'devastating', 'emotional', 'romantic', 'bittersweet'],
    setting: ['wwii-france', 'saint-malo', 'paris', 'historical', 'war'],
    characterTypes: ['blind-french-heroine', 'conflicted-german-soldier', 'obsessive-villain', 'heroic-father'],
    streaming: { netflix: true },
    actors: [
      { name: 'Aria Mia Loberti', role: 'Marie-Laure LeBlanc', isLead: true },
      { name: 'Louis Hofmann', role: 'Werner Pfennig', isLead: true },
      { name: 'Mark Ruffalo', role: 'Daniel LeBlanc', isLead: false }
    ],
    matchReasoningHints: [
      "When the Camellia Blooms fans of war-era romances where two people from impossible circumstances connect through something fragile — the radio as a thread between Marie-Laure and Werner is one of the more beautiful structural devices in recent war drama",
      "Youth of May fans of wartime romance where the political catastrophe is inseparable from the personal tragedy — both shows make the occupation not the backdrop but the force that makes everything impossible",
      "Pachinko fans of multigenerational stories where a single choice in the past determines everything that follows — the novel's structure and Netflix's adaptation share that sense of fate as accumulated consequence",
      "My Love from the Star fans of shows built on an impossible connection across categorical difference — French civilian and German soldier is as structurally impossible as a star and a mortal human",
      "Hotel Del Luna fans of beautiful visual storytelling where the setting is as carefully constructed as any character — Saint-Malo under occupation is rendered with the same obsessive period precision"
    ]
  },

  // ─── 7 ───
  {
    id: 'avatar-the-last-airbender-live',
    title: 'Avatar: The Last Airbender',
    year: 2024,
    type: 'show',
    episodes: 8,
    synopsis: "Aang is a twelve-year-old boy who was frozen in ice for a hundred years and woke up to find that the Fire Nation has conquered almost everything. He's also the Avatar — the one person who can bend all four elements and the only person who can stop the war. He doesn't feel ready. He's twelve. A live-action adaptation of the beloved animated series that honors the original's most important commitment: taking its child characters seriously as moral agents navigating a world that has failed them.",
    genres: ['fantasy', 'action', 'adventure', 'drama'],
    themes: ['responsibility', 'friendship', 'war', 'identity', 'chosen-destiny', 'hope'],
    tropes: ['chosen-one', 'ensemble-heroes', 'found-family', 'enemy-redemption-arc', 'mentor-figures', 'elemental-powers'],
    tone: ['adventurous', 'heartwarming', 'action-packed', 'funny', 'emotional'],
    setting: ['fantasy-world', 'asia-inspired', 'elemental-nations', 'epic'],
    characterTypes: ['reluctant-chosen-one', 'fierce-warrior-companion', 'conflicted-villain', 'mentor-masters'],
    streaming: { netflix: true },
    actors: [
      { name: 'Gordon Cormier', role: 'Aang', isLead: true },
      { name: 'Kiawentiio', role: 'Katara', isLead: false },
      { name: 'Ian Ousley', role: 'Sokka', isLead: false }
    ],
    matchReasoningHints: [
      "Alchemy of Souls fans of fantasy worlds with a fully developed elemental magic system and a chosen protagonist who must master powers they didn't ask for — Avatar's bending system is the Western prototype for xianxia cultivation arcs",
      "The Untamed fans of ensemble casts where the found-family dynamic is the emotional spine — Aang and his friends develop the same fierce loyalty that makes C-drama ensemble shows so addictive",
      "Naruto fans who want the same 'reluctant child hero carrying adult weight' energy in live-action — Gordon Cormier's Aang captures the original's specific combination of grief and joy",
      "Zuko's arc speaks directly to Signal / My Liberation Notes fans who are drawn to redemption stories — his journey from villain to antihero to hero is one of the more carefully constructed character arcs in fantasy",
      "Reply 1988 fans of shows that are fundamentally about a group of young people facing the hardest years of their lives together — the Fire Nation war is the backdrop, but the show is really about what Aang, Katara, and Sokka mean to each other"
    ]
  },

  // ─────────────────────────────────────────
  // MOVIES
  // ─────────────────────────────────────────

  // ─── 8 ───
  {
    id: 'the-banshees-of-inisherin',
    title: 'The Banshees of Inisherin',
    year: 2022,
    type: 'movie',
    runtime: 114,
    synopsis: "On a small island off the coast of Ireland, 1923, Pádraic Súilleabháin's best friend Colm Doherty tells him, with no explanation, that he no longer wishes to speak to him. That's it. That's the problem. Except the island is small, the civil war on the mainland is audible in the distance, and Colm has made clear that if Pádraic continues to bother him, he will cut off his own fingers. Martin McDonagh's masterpiece about the specific violence of withdrawal, the impossibility of indifference, and what a friendship means when it ends.",
    genres: ['drama', 'dark-comedy', 'tragedy'],
    themes: ['friendship', 'isolation', 'meaning', 'cruelty', 'community', 'grief', 'self-destruction'],
    tropes: ['friendship-tragedy', 'community-pressure', 'dark-comedy', 'irish-setting', 'isolation', 'pride-and-stubbornness'],
    tone: ['melancholic', 'darkly-funny', 'devastating', 'beautiful', 'quiet'],
    setting: ['1920s-ireland', 'small-island', 'historical', 'rural'],
    characterTypes: ['sweet-confused-ordinary-man', 'self-destructive-artist', 'lonely-sister', 'callous-policeman'],
    streaming: { max: true, amazon_prime: true },
    actors: [
      { name: 'Colin Farrell', role: 'Pádraic Súilleabháin', isLead: true },
      { name: 'Brendan Gleeson', role: 'Colm Doherty', isLead: true },
      { name: 'Kerry Condon', role: 'Siobhán Súilleabháin', isLead: false }
    ],
    matchReasoningHints: [
      "My Liberation Notes fans — this film is My Liberation Notes from the other direction: what happens to the Pádraic of the world, the person who needed connection and found it withdrawn without warning or explanation",
      "My Mister fans of films that ask what a person does when they're kind but the world doesn't have a place for kindness — Pádraic's goodness is treated as both his most valuable and most useless quality",
      "Our Beloved Summer fans of stories about a friendship/relationship that ends, and the quiet devastation of learning that something you thought was mutual was experienced entirely differently by the other person",
      "Decision to Leave fans of films where the emotional architecture is more interesting than the plot — Banshees is about a feeling that can't be resolved, and McDonagh is content to let that stand",
      "Along with the Gods fans of films that are really about the weight of what we owe each other — the island community's response to Colm and Pádraic's situation reveals how precarious all social bonds actually are"
    ]
  },

  // ─── 9 ───
  {
    id: 'society-of-the-snow',
    title: 'Society of the Snow',
    year: 2023,
    type: 'movie',
    runtime: 144,
    synopsis: "In October 1972, a Uruguayan rugby team's flight crashes into the Andes mountains. Of the 45 passengers, 16 survived for 72 days in conditions that should have been unsurvivable. J.A. Bayona's film is faithful, precise, and refuses to sentimentalize the choices the survivors made. The most acclaimed survival film in decades, and the definitive screen treatment of a true story that asked something of the people involved that no one should have to answer.",
    genres: ['drama', 'survival', 'historical', 'biography'],
    themes: ['survival', 'community', 'sacrifice', 'faith', 'resilience', 'moral-extremity'],
    tropes: ['survival-story', 'based-on-true-events', 'ensemble-survival', 'moral-dilemma', 'faith-vs-survival', 'brotherhood'],
    tone: ['devastating', 'beautiful', 'intense', 'honest', 'emotional'],
    setting: ['1970s', 'andes-mountains', 'survival', 'historical'],
    characterTypes: ['crash-survivors', 'team-leader', 'faith-holder', 'pragmatist', 'lost-souls'],
    streaming: { netflix: true },
    actors: [
      { name: 'Agustín Pardella', role: 'Nando Parrado', isLead: true },
      { name: 'Enzo Vogrincic', role: 'Numa Turcatti', isLead: false },
      { name: 'Matthias Khaner', role: 'Roberto Canessa', isLead: false }
    ],
    matchReasoningHints: [
      "Squid Game fans of survival narratives that refuse to let physical survival be the only question — Society of the Snow asks what you owe each other when survival itself requires compromising what you owe each other",
      "Along with the Gods fans of stories where the afterlife question is whether the dead can forgive the choices the living had to make — this film treats that question with complete moral seriousness",
      "Kingdom fans of survival stories set in beautiful, deadly environments where every decision has irreversible consequences and leadership becomes genuinely agonizing",
      "Youth of May fans of films that honor the specific historical experience rather than sentimentalizing it — Society of the Snow refuses easy heroism in the same way that Youth of May refuses easy tragedy",
      "Hellbound fans of stories about extreme situations that force ordinary people to confront what they actually believe about God, survival, and the value of individual life"
    ]
  },

  // ─── 10 ───
  {
    id: 'all-quiet-western-front',
    title: 'All Quiet on the Western Front',
    year: 2022,
    type: 'movie',
    runtime: 148,
    synopsis: "Paul Bäumer enlists enthusiastically in the German army in 1917, full of patriotic certainty. Within months, the certainty is gone — replaced by mud, gas, and a system that processes young men as raw material and returns them as corpses or ghosts. Edward Berger's adaptation of Erich Maria Remarque's novel won four Academy Awards and became the highest-grossing German film on Netflix. A war film that refuses to produce heroism from suffering.",
    genres: ['war', 'drama', 'historical'],
    themes: ['war', 'disillusionment', 'survival', 'friendship', 'loss', 'futility'],
    tropes: ['coming-of-age-in-war', 'idealism-to-realism', 'soldier-brotherhood', 'anti-war', 'survival', 'young-soldier'],
    tone: ['devastating', 'brutal', 'beautiful', 'anti-heroic', 'honest'],
    setting: ['wwi', 'western-front', 'trenches', 'historical', 'europe'],
    characterTypes: ['idealistic-young-soldier', 'veteran-guide', 'bureaucratic-general', 'enemy-soldiers'],
    streaming: { netflix: true },
    actors: [
      { name: 'Felix Kammerer', role: 'Paul Bäumer', isLead: true },
      { name: 'Albrecht Schuch', role: 'Stanislaus Katczinsky', isLead: false },
      { name: 'Daniel Brühl', role: 'Matthias Erzberger', isLead: false }
    ],
    matchReasoningHints: [
      "Pachinko fans of multigenerational stories about how war destroys generations of people who had nothing to do with starting it — Paul's arc is the template for every young man in Pachinko who was processed by the war machine",
      "Kingdom fans of historical settings where beautiful photography is used to make violence more visible rather than less — All Quiet's cinematography makes the trenches simultaneously gorgeous and catastrophic",
      "Youth of May fans of wartime dramas that treat idealism as the first casualty — Paul's enthusiastic enlistment and its immediate aftermath is one of cinema's most efficient demolitions of propaganda",
      "Vagabond fans of stories about young men who entered a conflict believing in something and emerged unable to locate what they believed — the psychological parallel to K-drama military trauma dramas is exact",
      "The Wailing fans of films where horror is not supernatural but purely human, and the most terrifying scenes are ones where ordinary institutional processes produce mass death with complete indifference"
    ]
  },

  // ─── 11 ───
  {
    id: 'the-zone-of-interest',
    title: 'The Zone of Interest',
    year: 2023,
    type: 'movie',
    runtime: 105,
    synopsis: "Rudolf Höss is the commandant of Auschwitz. His wife Hedwig has built a beautiful garden beside the camp wall. Their children play. They receive promotions. They argue about moving. Jonathan Glazer's film observes this family in their home — and almost never shows what is happening on the other side of the wall. An unprecedented and devastating film about how ordinary people maintained normalcy while participating in genocide, and the complete sufficiency of implication. Winner of the Academy Award for Best International Feature Film.",
    genres: ['drama', 'historical', 'war'],
    themes: ['evil', 'complicity', 'normalcy', 'dehumanization', 'ambition', 'family'],
    tropes: ['historical-horror', 'mundane-evil', 'implied-atrocity', 'domestic-drama', 'family-life', 'moral-blindness'],
    tone: ['cold', 'disturbing', 'precise', 'clinical', 'devastating'],
    setting: ['wwii', 'auschwitz', 'poland', 'historical', 'suburban-horror'],
    characterTypes: ['ordinary-perpetrator', 'ambitious-wife', 'oblivious-children', 'household-staff'],
    streaming: { amazon_prime: true },
    actors: [
      { name: 'Christian Friedel', role: 'Rudolf Höss', isLead: true },
      { name: 'Sandra Hüller', role: 'Hedwig Höss', isLead: true },
      { name: 'Johann Karthaus', role: 'supporting', isLead: false }
    ],
    matchReasoningHints: [
      "Pachinko fans of films that examine how people find ways to normalize their participation in catastrophic systems — Zone of Interest is the most extreme version of that question, stripped of all narrative comfort",
      "Sky Castle fans who are drawn to domestic dramas about family ambition that conceal something deeply wrong — Zone of Interest is that premise turned into something genuinely harrowing by its historical specificity",
      "The Wailing fans of films where horror exists entirely off-screen but permeates every frame — the wall between the garden and the camp is one of cinema's great formal choices",
      "Juvenile Justice fans of content that implicates the audience in what ordinary systems produce — Glazer's film asks who is responsible for the ordinary life of the Höss household, and the question has no comfortable answer",
      "It's Okay to Not Be Okay fans who are drawn to stories about what happens when someone has no capacity for the suffering of others — Hedwig's satisfaction with her garden is one of cinema's more chilling characterizations of dissociation as survival strategy"
    ]
  },

];
