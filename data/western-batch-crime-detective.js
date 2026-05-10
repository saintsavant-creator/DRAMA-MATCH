/**
 * Batch — 35 Western Crime/Detective Shows
 * Covers NCIS franchise, Law & Order franchise, CSI franchise,
 * and classic/modern crime procedurals not yet in catalog.
 * Each entry includes streaming badges and cross-cultural K-drama/C-drama match reasoning.
 */
module.exports = [
  // ─────────────────────────────────────────
  // NCIS FRANCHISE
  // ─────────────────────────────────────────
  {
    id: 'ncis',
    title: 'NCIS',
    year: 2003,
    type: 'show',
    genres: ['crime', 'drama', 'procedural', 'mystery'],
    themes: ['justice', 'teamwork', 'loyalty', 'mentorship', 'family', 'military'],
    tropes: ['found-family', 'eccentric-genius', 'mentor-protege', 'case-of-the-week', 'will-they-wont-they', 'forensic-detective'],
    tone: ['engaging', 'witty', 'tense', 'warm', 'procedural'],
    setting: ['modern', 'washington-dc', 'military', 'government'],
    characterTypes: ['veteran-investigator', 'forensic-genius', 'medical-examiner', 'tech-expert', 'team-leader'],
    streaming: { paramount: true, amazon_prime: true },
    actors: [
      { name: 'Mark Harmon', role: 'Leroy Jethro Gibbs', isLead: true },
      { name: 'David McCallum', role: 'Dr. Ducky Mallard', isLead: false },
      { name: 'Pauley Perrette', role: 'Abby Sciuto', isLead: false }
    ],
    matchReasoningHints: [
      "Partners for Justice fans: NCIS is the template — a brilliant forensic scientist and a seasoned investigator solving murders where physical evidence tells the story, with the same warm found-family dynamic that makes Partners for Justice feel like home",
      "Signal's 'a team that operates by its own moral code and refuses to let cases go cold' energy without the supernatural element — Gibbs is Lee Je-hoon minus the walkie-talkie, same dogged refusal to accept institutional limits",
      "Bad Guys fans who love 'a gruff veteran investigator who assembles unusual specialists for impossible cases' structure — NCIS has been running that premise for 20 seasons and the team chemistry is why",
      "Three Days / Stranger fans of procedurals where the real drama is how the protagonist navigates institutional loyalty versus personal ethics — Gibbs has been having that internal argument since season one",
      "Mouse fans of crime shows where the forensic pathology is taken seriously and the medical examiner is a beloved character whose expertise actually drives the plot, not just explains it"
    ]
  },
  {
    id: 'ncis-los-angeles',
    title: 'NCIS: Los Angeles',
    year: 2009,
    type: 'show',
    genres: ['crime', 'action', 'drama', 'procedural'],
    themes: ['identity', 'loyalty', 'undercover', 'teamwork', 'sacrifice', 'found-family'],
    tropes: ['undercover-operations', 'found-family', 'covert-ops', 'buddy-cop', 'action-procedural', 'deep-cover'],
    tone: ['action-packed', 'witty', 'tense', 'warm', 'sleek'],
    setting: ['modern', 'los-angeles', 'undercover', 'covert-ops'],
    characterTypes: ['deep-cover-agent', 'ex-spy', 'tech-genius', 'team-leader', 'field-agents'],
    streaming: { paramount: true, amazon_prime: true },
    actors: [
      { name: 'Chris O\'Donnell', role: 'G. Callen', isLead: true },
      { name: 'LL Cool J', role: 'Sam Hanna', isLead: true },
      { name: 'Linda Hunt', role: 'Hetty Lange', isLead: false }
    ],
    matchReasoningHints: [
      "Vagabond fans who want undercover operations and covert teams in a sunny California setting — NCIS: LA runs the same 'identities are always provisional, loyalty is always tested' premise with better weather and a legendary team boss",
      "City Hunter's 'a protagonist who operates in the shadows and whose past makes him perfectly suited for work that would destroy a normal person' energy applied to a procedural structure",
      "The K2 fans of action-heavy shows where the characters have multiple cover identities and nothing about their personal history is what it seems — Callen has been finding out who he really is for 14 seasons",
      "Healer fans who love a found-family team of specialists where the banter is as important as the action and the relationships deepen in exactly the ratio you want",
      "My Secret Terrius fans of shows where intelligence work intersects with genuine emotional bonds and a beloved eccentric commander who clearly knows more than she's ever said"
    ]
  },
  {
    id: 'ncis-hawaii',
    title: "NCIS: Hawai'i",
    year: 2021,
    type: 'show',
    genres: ['crime', 'drama', 'procedural', 'action'],
    themes: ['identity', 'family', 'military', 'loyalty', 'justice', 'community'],
    tropes: ['found-family', 'female-lead', 'diverse-team', 'military-mystery', 'island-setting', 'case-of-the-week'],
    tone: ['warm', 'engaging', 'tense', 'modern', 'inclusive'],
    setting: ['modern', 'hawaii', 'military', 'island'],
    characterTypes: ['first-female-director', 'diverse-team', 'military-intelligence', 'forensic-experts'],
    streaming: { paramount: true },
    actors: [
      { name: 'Vanessa Lachey', role: 'Jane Tennant', isLead: true },
      { name: 'Alex Tarrant', role: 'Ernie Malik', isLead: false }
    ],
    matchReasoningHints: [
      "Crash Landing on You fans who love shows where military operations intersect with personal loyalty and the setting itself is a character — Hawaii is as atmospherically distinctive as the North Korean countryside",
      "Strong Woman Do Bong-soon fans of female leads who earned their authority the hard way and now command with a mix of tactical intelligence and genuine warmth for their team",
      "Signal fans of military-adjacent crime shows where past operations keep surfacing to complicate present investigations — NCIS: Hawai'i has that same sense of cases with long institutional shadows",
      "Watcher fans who love a meticulous investigator who reads people rather than just evidence, and whose team learns to trust that the instinct that looks wrong is usually right",
      "Racket Boys / Reply 1988 fans who love ensemble shows where the joy is in watching a community of genuinely different people become family through shared stakes"
    ]
  },
  {
    id: 'ncis-new-orleans',
    title: 'NCIS: New Orleans',
    year: 2014,
    type: 'show',
    genres: ['crime', 'drama', 'procedural'],
    themes: ['culture', 'loyalty', 'justice', 'community', 'identity', 'family'],
    tropes: ['regional-flavor', 'found-family', 'charismatic-leader', 'case-of-the-week', 'southern-gothic'],
    tone: ['warm', 'engaging', 'atmospheric', 'tense', 'character-driven'],
    setting: ['modern', 'new-orleans', 'southern', 'bayou', 'jazz'],
    characterTypes: ['charismatic-team-leader', 'local-expert', 'forensic-specialist', 'tech-analyst'],
    streaming: { paramount: true, amazon_prime: true },
    actors: [
      { name: 'Scott Bakula', role: 'Dwayne "King" Pride', isLead: true },
      { name: 'Lucas Black', role: 'Christopher LaSalle', isLead: false }
    ],
    matchReasoningHints: [
      "Fiery Priest fans who love a charismatic, rule-bending protagonist who operates from deep personal ethics rather than institutional loyalty and builds loyalty through that authenticity",
      "Signal fans of procedurals where the city is as much a character as the investigators — New Orleans' culture, music, and community are built into every episode the way Seoul's specific neighborhoods shape Signal",
      "38 Task Force fans of teams that operate in moral gray zones because the city's corruption has made strict proceduralism impossible — Pride bends rules the way Yang Jung-do does, from principle not self-interest",
      "Hello My Twenties fans who love ensemble shows where the depth of individual relationships develops across seasons with genuine payoff",
      "Stranger (Forest of Secrets) fans of crime shows where institutional corruption is a structural backdrop and the protagonist has to constantly navigate who can actually be trusted"
    ]
  },

  // ─────────────────────────────────────────
  // LAW & ORDER FRANCHISE
  // ─────────────────────────────────────────
  {
    id: 'law-and-order',
    title: 'Law & Order',
    year: 1990,
    type: 'show',
    genres: ['crime', 'drama', 'legal', 'procedural'],
    themes: ['justice', 'morality', 'law', 'society', 'ambition', 'institutional-corruption'],
    tropes: ['two-act-structure', 'ripped-from-headlines', 'moral-gray-area', 'courtroom-drama', 'procedural', 'DA-prosecutor'],
    tone: ['serious', 'procedural', 'smart', 'morally-complex', 'iconic'],
    setting: ['modern', 'new-york-city', 'courtroom', 'police-precinct'],
    characterTypes: ['veteran-detective', 'idealistic-da', 'crafty-defense-attorney', 'lieutenant', 'precinct-captain'],
    streaming: { paramount: true, hulu: true },
    actors: [
      { name: 'Jerry Orbach', role: 'Lennie Briscoe', isLead: true },
      { name: 'Sam Waterston', role: 'Jack McCoy', isLead: true }
    ],
    matchReasoningHints: [
      "Stranger (Forest of Secrets) fans who want the 'procedural integrity vs. institutional corruption' tension with a literal split between police work and prosecution — Law & Order invented this structure and Stranger perfected it",
      "Juvenile Justice fans who love courtroom dramas that force you to hold two genuinely conflicting views simultaneously — Law & Order's two-act structure is designed to make the case feel winnable from both sides",
      "Punch fans of prosecutor dramas where the battle is won or lost in preparation, argument, and the moral clarity to know what you're actually fighting for",
      "The Good Wife (Korean) fans of procedurals where the case of the week illuminates something true about how power works in a modern city",
      "Signal fans who love crime shows that feel like they're in conversation with contemporary social reality — Law & Order has been 'ripping from headlines' for 30+ years and the rip marks are part of why it works"
    ]
  },
  {
    id: 'law-and-order-svu',
    title: 'Law & Order: Special Victims Unit',
    year: 1999,
    type: 'show',
    genres: ['crime', 'drama', 'procedural', 'legal'],
    themes: ['justice', 'trauma', 'survival', 'institutional-failure', 'advocacy', 'healing'],
    tropes: ['survivor-justice', 'female-detective-lead', 'ripped-from-headlines', 'victim-centered', 'long-running-institution'],
    tone: ['intense', 'emotionally-charged', 'serious', 'procedural', 'compassionate'],
    setting: ['modern', 'new-york-city', 'police-precinct', 'courtroom'],
    characterTypes: ['tenacious-detective', 'sex-crimes-prosecutor', 'sympathetic-medical-examiner', 'defense-attorney'],
    streaming: { paramount: true, hulu: true },
    actors: [
      { name: 'Mariska Hargitay', role: 'Olivia Benson', isLead: true },
      { name: 'Christopher Meloni', role: 'Elliot Stabler', isLead: true }
    ],
    matchReasoningHints: [
      "Through the Darkness fans who love crime procedurals that center survivor experience and the psychological cost of working cases that never really leave you",
      "Juvenile Justice fans of legal dramas that put institutional failure to protect victims at the center — SVU has been documenting that failure and the people fighting it for 25 seasons",
      "Signal fans of the 'a case you can't let go' emotional engine where the investigator's personal history with trauma makes them uniquely positioned to understand what victims need",
      "Beyond Evil fans who love shows where the horror of the crime is never sensationalized but the systemic failure enabling it is made unflinchingly visible",
      "Good Detective fans who want a female-led police procedural where the personal relationships between team members deepen meaningfully over many seasons"
    ]
  },
  {
    id: 'law-and-order-organized-crime',
    title: 'Law & Order: Organized Crime',
    year: 2021,
    type: 'show',
    genres: ['crime', 'drama', 'thriller', 'procedural'],
    themes: ['revenge', 'justice', 'corruption', 'grief', 'undercover', 'obsession'],
    tropes: ['long-con-undercover', 'revenge-motivation', 'grief-driven-protagonist', 'organized-crime', 'institutional-corruption'],
    tone: ['dark', 'tense', 'intense', 'gritty', 'obsessive'],
    setting: ['modern', 'new-york-city', 'undercover', 'organized-crime'],
    characterTypes: ['grief-driven-detective', 'organized-crime-boss', 'deep-cover-operator', 'elite-task-force'],
    streaming: { paramount: true },
    actors: [
      { name: 'Christopher Meloni', role: 'Elliot Stabler', isLead: true },
      { name: 'Dylan McDermott', role: 'Richard Wheatley', isLead: false }
    ],
    matchReasoningHints: [
      "Rugal fans who love a protagonist whose grief has reshaped their entire purpose — Stabler's return to law enforcement after personal tragedy is the same 'loss as mission fuel' engine that drives Rugal's Kang Ki-bum",
      "Black fans of organized crime investigations where the detective goes so deep undercover that the question of who they're pretending to be becomes genuinely complicated",
      "Bad Guys fans who love a task force assembled specifically for cases that regular policing can't touch — Organized Crime's Stabler has the same 'unconventional methods, undeniable results' energy as Oh Goo-tak",
      "The K2 fans of action-driven shows where a protagonist's devastating personal loss is what qualifies them for the specific kind of danger the show requires",
      "Confession fans who love the 'what are you willing to become to get justice' moral question applied to a procedural structure where the system and the individual are both being tested"
    ]
  },

  // ─────────────────────────────────────────
  // CSI FRANCHISE
  // ─────────────────────────────────────────
  {
    id: 'csi',
    title: 'CSI: Crime Scene Investigation',
    year: 2000,
    type: 'show',
    genres: ['crime', 'drama', 'procedural', 'mystery'],
    themes: ['justice', 'science', 'truth', 'teamwork', 'evidence'],
    tropes: ['forensic-science', 'evidence-led', 'case-of-the-week', 'eccentric-genius', 'night-shift-crew'],
    tone: ['cool', 'procedural', 'stylish', 'tense', 'methodical'],
    setting: ['modern', 'las-vegas', 'forensic-lab', 'crime-scenes'],
    characterTypes: ['forensic-genius', 'entomology-expert', 'dna-analyst', 'crime-scene-investigators'],
    streaming: { paramount: true },
    actors: [
      { name: 'William Petersen', role: 'Gil Grissom', isLead: true },
      { name: 'Marg Helgenberger', role: 'Catherine Willows', isLead: true },
      { name: 'Jorja Fox', role: 'Sara Sidle', isLead: false }
    ],
    matchReasoningHints: [
      "Partners for Justice fans: CSI is the template that Partners for Justice was riffing on — forensic science as the hero's superpower, physical evidence as the ultimate truth-teller, and the lab as sanctuary",
      "DNA Lover fans who love shows where the science itself is romantic — CSI made forensics feel like philosophical inquiry, and the best episodes are about what evidence reveals about the human condition",
      "Mouse fans of crime procedurals where the forensic methodology is taken seriously and the medical/scientific experts are full characters with their own arcs, not just exposition delivery systems",
      "Good Detective fans who love procedurals where a specific methodological approach to evidence distinguishes the investigator — Grissom's entomology-first approach is as distinctive as any K-drama detective's signature method",
      "Signal fans who love crime shows where the physical details of cases become almost mythological over time — CSI built an entire aesthetic language around the idea that evidence doesn't lie, people do"
    ]
  },
  {
    id: 'csi-miami',
    title: 'CSI: Miami',
    year: 2002,
    type: 'show',
    genres: ['crime', 'drama', 'procedural', 'action'],
    themes: ['justice', 'corruption', 'truth', 'redemption', 'teamwork'],
    tropes: ['charismatic-leader', 'forensic-science', 'one-liner-specialist', 'case-of-the-week', 'sun-and-crime'],
    tone: ['stylish', 'sun-drenched', 'intense', 'dramatic', 'iconic'],
    setting: ['modern', 'miami', 'forensic-lab', 'south-beach'],
    characterTypes: ['iconic-team-leader', 'forensic-investigators', 'crime-scene-experts'],
    streaming: { paramount: true },
    actors: [
      { name: 'David Caruso', role: 'Horatio Caine', isLead: true },
      { name: 'Emily Procter', role: 'Calleigh Duquesne', isLead: false }
    ],
    matchReasoningHints: [
      "Partners for Justice fans who want the forensic procedural structure with maximum visual style — CSI: Miami is the show that turned putting-on-sunglasses-at-a-crime-scene into an artform",
      "City Hunter fans who love a charismatic, morally certain protagonist whose signature style is as much a character trait as their competence — Horatio Caine's sunglasses ARE a personality",
      "Good Detective fans who want a procedural where the team leader's absolute moral certainty provides the emotional anchor even when the cases get philosophically murky",
      "Watcher fans of crime shows with a strong visual identity that makes every episode feel cinematic rather than televisual — CSI: Miami's aesthetic is aggressively specific in exactly this way",
      "The Fiery Priest fans who love a protagonist who delivers justice with flair and absolutely refuses to leave a crime unpunished regardless of who the criminal is connected to"
    ]
  },
  {
    id: 'csi-ny',
    title: 'CSI: NY',
    year: 2004,
    type: 'show',
    genres: ['crime', 'drama', 'procedural', 'mystery'],
    themes: ['justice', 'grief', 'teamwork', 'loyalty', 'truth', 'urban-crime'],
    tropes: ['grief-driven-protagonist', 'forensic-science', 'new-york-grit', 'case-of-the-week', 'found-family'],
    tone: ['gritty', 'serious', 'procedural', 'emotional', 'urban'],
    setting: ['modern', 'new-york-city', 'forensic-lab', 'urban'],
    characterTypes: ['grieving-team-leader', 'forensic-investigators', 'trace-evidence-expert', 'crime-scene-analysts'],
    streaming: { paramount: true },
    actors: [
      { name: 'Gary Sinise', role: 'Mac Taylor', isLead: true },
      { name: 'Melina Kanakaredes', role: 'Stella Bonasera', isLead: true }
    ],
    matchReasoningHints: [
      "Signal fans of crime procedurals set against a city's specific texture where past trauma shapes the present investigation — Mac Taylor's 9/11 loss gives CSI: NY an emotional undertow Signal fans will recognize",
      "Mouse fans who love forensic procedurals where the team leader has a haunted quality that makes every solved case feel like partial atonement for something that couldn't be saved",
      "Partners for Justice fans who want the forensic chemistry template with New York's specific grit and a more subdued, grief-forward emotional register",
      "Beyond Evil fans who appreciate procedurals where the team leader is defined by what they couldn't prevent as much as what they can solve",
      "Watcher fans of crime shows where the city itself — its boroughs, its density, its specific violences — is as important as any individual case"
    ]
  },
  {
    id: 'csi-vegas',
    title: 'CSI: Vegas',
    year: 2021,
    type: 'show',
    genres: ['crime', 'drama', 'procedural'],
    themes: ['legacy', 'truth', 'institutional-corruption', 'justice', 'evidence'],
    tropes: ['legacy-sequel', 'forensic-science', 'institutional-corruption', 'evidence-tampering', 'next-generation'],
    tone: ['modern', 'tense', 'nostalgic', 'smart', 'procedural'],
    setting: ['modern', 'las-vegas', 'forensic-lab', 'reboot-era'],
    characterTypes: ['next-gen-investigators', 'forensic-scientists', 'legacy-characters', 'new-team-leads'],
    streaming: { paramount: true },
    actors: [
      { name: 'Paula Newsome', role: 'Maxine Roby', isLead: true },
      { name: 'Matt Lauria', role: 'Josh Folsom', isLead: false },
      { name: 'William Petersen', role: 'Gil Grissom', isLead: false }
    ],
    matchReasoningHints: [
      "Signal fans who love revivals where the stakes are about saving the reputation of the institution that originally produced the heroes — CSI: Vegas centers on evidence tampering that threatens every case the lab ever solved",
      "Partners for Justice fans who want modern forensic science with the added dimension of having to re-examine everything the institution thought was certain",
      "Good Detective 2 fans of sequels that successfully recapture what made the original special while adding new character dynamics that justify the continuation",
      "Beyond Evil fans who appreciate procedurals where the corruption being uncovered is specifically institutional — the threat isn't one bad actor but a systemic failure that implicates the whole machine",
      "Mouse fans of crime shows where forensic truth is both the weapon and the target — CSI: Vegas makes the lab itself the victim and the detective at once"
    ]
  },

  // ─────────────────────────────────────────
  // TASK-REQUIRED ADDITIONS
  // ─────────────────────────────────────────
  {
    id: 'bones',
    title: 'Bones',
    year: 2005,
    type: 'show',
    genres: ['crime', 'drama', 'procedural', 'comedy', 'romance'],
    themes: ['partnership', 'science-vs-intuition', 'love', 'family', 'identity', 'justice'],
    tropes: ['opposites-attract', 'forensic-scientist-detective-duo', 'slow-burn-romance', 'eccentric-genius', 'found-family', 'will-they-wont-they'],
    tone: ['witty', 'warm', 'engaging', 'light-procedural', 'character-driven'],
    setting: ['modern', 'washington-dc', 'forensic-lab', 'fbi'],
    characterTypes: ['brilliant-forensic-anthropologist', 'charismatic-fbi-agent', 'lab-team', 'social-intuitive-vs-scientific-logical'],
    streaming: { disney_plus: true, hulu: true },
    actors: [
      { name: 'Emily Deschanel', role: 'Temperance "Bones" Brennan', isLead: true },
      { name: 'David Boreanaz', role: 'Seeley Booth', isLead: true }
    ],
    matchReasoningHints: [
      "Partners for Justice is the K-drama Bones — forensic expert + investigator partnership, slow-burn workplace romance, a lab full of lovable eccentrics, and cases that are really about what the partnership is becoming",
      "Crash Landing on You fans who love slow burns where two people who operate completely differently find their incompatibility is actually what makes them work — Brennan and Booth are Seri and Ri as colleagues who solve murders",
      "Hello Monster / I Remember You fans of procedurals where the forensic analysis is as much about understanding the killer's psychology as identifying the physical evidence",
      "Oh My Venus fans who love the 'cerebrally superior woman meets emotionally intelligent man who sees something in her she doesn't yet see in herself' slow burn with genuine wit",
      "Strong Woman Do Bong-soon fans of female protagonists whose unusual abilities make them both more and less than human in the eyes of the people around them — Brennan's hyper-rationality is her superpower and her isolation"
    ]
  },
  {
    id: 'blue-bloods',
    title: 'Blue Bloods',
    year: 2010,
    type: 'show',
    genres: ['crime', 'drama', 'procedural', 'family'],
    themes: ['family', 'duty', 'justice', 'legacy', 'ethics', 'loyalty', 'tradition'],
    tropes: ['multi-generational-family', 'family-dinner-as-debate', 'police-family', 'ethical-dilemmas', 'institutional-loyalty', 'found-vs-born-family'],
    tone: ['warm', 'serious', 'traditional', 'morally-engaged', 'character-driven'],
    setting: ['modern', 'new-york-city', 'police', 'irish-catholic-family'],
    characterTypes: ['police-commissioner-patriarch', 'detective-son', 'ame-son', 'da-daughter', 'beat-cop-grandson'],
    streaming: { paramount: true },
    actors: [
      { name: 'Tom Selleck', role: 'Frank Reagan', isLead: true },
      { name: 'Donnie Wahlberg', role: 'Danny Reagan', isLead: true },
      { name: 'Bridget Moynahan', role: 'Erin Reagan', isLead: true }
    ],
    matchReasoningHints: [
      "Reply 1988 fans who love multi-generational family dramas where Sunday dinner is a battleground for genuinely held competing values — Blue Bloods built an entire show around the Reagan family dinner table argument",
      "Liver or Die fans of family dramas where the family's professional identity (medicine/law enforcement) creates the structural context for every moral dilemma they have to navigate together",
      "My Mister fans who love shows about duty — the weight of it, the cost of it, and what it looks like when a family has made duty the center of its identity across three generations",
      "Misaeng fans who love procedurals about institutional loyalty and the tension between following the rules and doing what's right when those aren't the same thing",
      "Stranger (Forest of Secrets) fans of procedurals where the police commissioner as a character represents the entire question of whether institutions can be trusted to self-police"
    ]
  },

  // ─────────────────────────────────────────
  // CLASSIC CRIME PROCEDURALS
  // ─────────────────────────────────────────
  {
    id: 'the-shield',
    title: 'The Shield',
    year: 2002,
    type: 'show',
    genres: ['crime', 'drama', 'thriller'],
    themes: ['corruption', 'loyalty', 'moral-descent', 'power', 'consequences', 'survival'],
    tropes: ['corrupt-protagonist', 'moral-descent', 'ensemble-antihero', 'institutional-rot', 'consequences-catching-up'],
    tone: ['brutal', 'tense', 'morally-complex', 'relentless', 'dark'],
    setting: ['modern', 'los-angeles', 'police-precinct', 'inner-city'],
    characterTypes: ['corrupt-strike-team-leader', 'idealistic-precinct-captain', 'dirty-cops', 'internal-affairs'],
    streaming: { hulu: true },
    actors: [
      { name: 'Michael Chiklis', role: 'Vic Mackey', isLead: true },
      { name: 'Glenn Close', role: 'Monica Rawling', isLead: false }
    ],
    matchReasoningHints: [
      "Mouse fans who want the corrupt-investigator premise taken to its absolute limit — Vic Mackey is what happens when a Bad Guys protagonist with no ethical governor gets seven seasons to fully become what he is",
      "Bad Guys fans of morally compromised cop shows where the protagonist's effectiveness is inseparable from their willingness to do what official policing can't — but The Shield never lets Mackey off the hook the way Bad Guys sometimes does",
      "Rugal fans who love crime shows where institutional corruption is structural, not exceptional, and the horror is watching good people either accommodate it or be destroyed by it",
      "Beyond Evil fans of crime dramas where the most frightening thing isn't the criminals but the law enforcement officers who have given themselves permission to become something worse",
      "Confession fans who love the 'what does it cost to live with what you've done' moral accounting — The Shield's final season is one of the most devastating reckoning narratives in American television"
    ]
  },
  {
    id: 'cold-case',
    title: 'Cold Case',
    year: 2003,
    type: 'show',
    genres: ['crime', 'drama', 'procedural', 'mystery'],
    themes: ['justice', 'memory', 'grief', 'truth', 'historical-injustice', 'closure'],
    tropes: ['cold-case-reopening', 'period-flashbacks', 'unresolved-injustice', 'empathetic-detective', 'historical-lens'],
    tone: ['melancholic', 'nostalgic', 'emotional', 'haunting', 'procedural'],
    setting: ['modern', 'philadelphia', 'historic-cases', 'multi-era'],
    characterTypes: ['empathetic-detective', 'cold-case-specialist', 'witnesses-across-time', 'justice-for-forgotten-victims'],
    streaming: { hulu: true, amazon_prime: true },
    actors: [
      { name: 'Kathryn Morris', role: 'Lilly Rush', isLead: true }
    ],
    matchReasoningHints: [
      "Signal is the K-drama Cold Case — time-spanning investigations into historical injustice, a protagonist who refuses to let unsolved cases stay unsolved, and the emotional weight of giving voice to forgotten victims",
      "Beyond Evil fans who love crime procedurals where the past is not past — where crimes that should have been solved decades ago are still shaping the present and demanding witnesses who refused to stay silent",
      "Through the Darkness fans who love procedurals where the detective's empathy for victims is their primary investigative tool, not just a character trait",
      "Missing: The Other Side fans of shows built around the premise that everyone who was lost deserves to be found and remembered — Cold Case's emotional register is exactly that of someone refusing to give up",
      "Watcher fans of detective shows that take historical social context seriously — Cold Case episodes are mini time-capsules of American social history, with the injustice of each era made visible through the crime"
    ]
  },
  {
    id: 'the-killing',
    title: 'The Killing',
    year: 2011,
    type: 'show',
    genres: ['crime', 'drama', 'mystery', 'thriller'],
    themes: ['grief', 'obsession', 'justice', 'political-corruption', 'truth', 'family-devastation'],
    tropes: ['season-long-mystery', 'grieving-family', 'political-corruption', 'female-detective', 'seattle-rain', 'obsessive-investigator'],
    tone: ['bleak', 'atmospheric', 'slow-burn', 'emotionally-devastating', 'haunting'],
    setting: ['modern', 'seattle', 'political-world', 'rain-soaked'],
    characterTypes: ['obsessive-detective', 'grieving-parents', 'corrupt-politician', 'dedicated-investigator'],
    streaming: { netflix: true, amazon_prime: true },
    actors: [
      { name: 'Mireille Enos', role: 'Sarah Linden', isLead: true },
      { name: 'Joel Kinnaman', role: 'Stephen Holder', isLead: true }
    ],
    matchReasoningHints: [
      "Beyond Evil fans who love the slow dissolution of certainty in a murder investigation — The Killing is eleven episodes of everything you thought you knew being systematically dismantled",
      "Mouse fans who love crime shows where the detective's obsession becomes inseparable from their identity — Sarah Linden is what happens when a detective can no longer tell where the case ends and they begin",
      "Save Me fans of atmospheric crime dramas where grief is the structural emotion and the investigation is as much about processing loss as solving a murder",
      "Signal fans of crime shows where political corruption is woven into the fabric of the investigation and the people who should help the detective are often the biggest obstacles",
      "Watcher fans who love rain-soaked atmospheric procedurals where the landscape itself reflects the emotional state of the investigation — Seattle in The Killing is as deliberately oppressive as any K-drama city setting"
    ]
  },
  {
    id: 'rizzoli-and-isles',
    title: 'Rizzoli & Isles',
    year: 2010,
    type: 'show',
    genres: ['crime', 'drama', 'procedural', 'comedy'],
    themes: ['friendship', 'partnership', 'justice', 'family', 'identity', 'career'],
    tropes: ['female-friendship', 'opposites-complement', 'detective-medical-examiner-duo', 'workplace-family', 'found-family'],
    tone: ['warm', 'witty', 'engaging', 'emotional', 'fun-procedural'],
    setting: ['modern', 'boston', 'forensic-lab', 'police-department'],
    characterTypes: ['street-smart-detective', 'brilliant-medical-examiner', 'found-family-team', 'dysfunctional-personal-lives'],
    streaming: { amazon_prime: true, hulu: true },
    actors: [
      { name: 'Angie Harmon', role: 'Jane Rizzoli', isLead: true },
      { name: 'Sasha Alexander', role: 'Maura Isles', isLead: true }
    ],
    matchReasoningHints: [
      "Partners for Justice is the K-drama Rizzoli & Isles — the detective/medical-examiner partnership is the template, but what the show is really about is the most important relationship in both women's lives",
      "Hello My Twenties fans who love ensemble shows built around a central female friendship that survives professional pressure, personal crises, and the occasional murder investigation",
      "Strong Girl Do Bong-soon fans of female leads who are formidable in their respective fields and whose friendship is the emotional engine that makes the show worth watching",
      "The Good Witch (Korean) fans who love warm procedurals where the relationships are as satisfying as the mystery resolutions — Rizzoli and Isles made 'Boston crime drama' feel like comfort television",
      "Watcher fans who love a detective show with genuine chemistry between leads that never quite becomes what you expect because the friendship is the more interesting relationship"
    ]
  },
  {
    id: 'murdoch-mysteries',
    title: 'Murdoch Mysteries',
    year: 2008,
    type: 'show',
    genres: ['crime', 'mystery', 'historical', 'drama'],
    themes: ['science', 'innovation', 'justice', 'social-progress', 'identity', 'love'],
    tropes: ['victorian-detective', 'proto-forensics', 'slow-burn-romance', 'historical-cameos', 'eccentric-genius', 'period-detail'],
    tone: ['warm', 'witty', 'charming', 'cozy', 'intelligent'],
    setting: ['historical', 'toronto-1890s', 'victorian-era', 'early-forensics'],
    characterTypes: ['scientific-detective', 'progressive-medical-examiner', 'gruff-inspector', 'pioneering-inventor'],
    streaming: { netflix: true, amazon_prime: true },
    actors: [
      { name: 'Yannick Bisson', role: 'William Murdoch', isLead: true },
      { name: 'Hélène Joy', role: 'Dr. Julia Ogden', isLead: true }
    ],
    matchReasoningHints: [
      "Mr. Queen fans who love historical detective mysteries with anachronistically modern sensibilities — Murdoch thinks in 20th century forensics while operating in the 19th century, which is the same productive anachronism",
      "Moonlight Drawn by Clouds fans who love period slow burns where the romance develops over many seasons in a historical setting that makes every small connection feel significant",
      "Under the Queen's Umbrella fans of historical dramas with genuine warmth and wit, where the social politics of the era are present but never crushing",
      "Signal fans of procedurals that take the history of investigative technique seriously — Murdoch inventing forensic methods episode by episode is a lovely parallel to how Signal treats the history of Korean policing",
      "Extraordinary Attorney Woo fans of neurodivergent protagonists who are brilliant in their field and navigating a world that wasn't designed for how their mind works — Murdoch's proto-forensic approach is equally singular"
    ]
  },
  {
    id: 'inspector-morse',
    title: 'Inspector Morse',
    year: 1987,
    type: 'show',
    genres: ['crime', 'mystery', 'drama'],
    themes: ['intellectual-pursuit', 'justice', 'loneliness', 'culture', 'truth', 'mortality'],
    tropes: ['lone-genius-detective', 'classical-music-and-crosswords', 'oxford-setting', 'grumpy-mentor', 'british-procedural', 'bittersweet-endings'],
    tone: ['contemplative', 'melancholic', 'intelligent', 'classic', 'literary'],
    setting: ['modern', 'oxford', 'english-countryside', 'academic'],
    characterTypes: ['brilliant-melancholic-detective', 'loyal-sergeant', 'academic-community', 'opera-loving-drinker'],
    streaming: { amazon_prime: true },
    actors: [
      { name: 'John Thaw', role: 'Inspector Morse', isLead: true },
      { name: 'Kevin Whately', role: 'Sergeant Lewis', isLead: false }
    ],
    matchReasoningHints: [
      "Signal fans who love procedurals with a melancholic undertone — Morse is a detective who solves murders but is never quite sure the world is better for having been right, which is exactly Signal's emotional register",
      "My Mister fans who love shows about brilliant, lonely people whose intelligence has separated them from ordinary human connection — Morse's isolation is as quietly devastating as Park Dong-hoon's",
      "Good Detective fans who love mentor-protege relationships where the senior detective's worldview is as much transmitted as any investigative technique",
      "Watcher fans of British detective shows where the setting (Oxford's dreaming spires) functions as an ironic backdrop — all this beauty and culture, all these unsolved murders",
      "Pachinko fans of stories where a person's entire character was formed by specific cultural tastes — crosswords, opera, real ale — and that particularity IS the story, not incidental to it"
    ]
  },
  {
    id: 'numb3rs',
    title: 'Numb3rs',
    year: 2005,
    type: 'show',
    genres: ['crime', 'drama', 'procedural', 'mystery'],
    themes: ['brotherhood', 'family', 'science', 'justice', 'teamwork', 'intellect-vs-intuition'],
    tropes: ['genius-sibling-helps-agent', 'brother-dynamic', 'math-as-superpower', 'academic-meets-field-work', 'found-family'],
    tone: ['smart', 'warm', 'engaging', 'procedural', 'optimistic'],
    setting: ['modern', 'los-angeles', 'fbi', 'university'],
    characterTypes: ['math-genius-professor', 'fbi-agent-brother', 'academic-mentors', 'field-team'],
    streaming: { paramount: true, amazon_prime: true },
    actors: [
      { name: 'Rob Morrow', role: 'Don Eppes', isLead: true },
      { name: 'David Krumholtz', role: 'Charlie Eppes', isLead: true }
    ],
    matchReasoningHints: [
      "Alice fans of shows that use a hard science conceit (time loops/mathematics) as the lens through which to explore what feels like emotion and intuition — Charlie's equations are doing the same thing as Alice's time-physics",
      "Hi Bye Mama fans of shows where sibling bonds are structurally central and the relationship between the brothers is as emotionally primary as any case they're solving",
      "Extraordinary Attorney Woo fans of procedurals where a protagonist's unusual cognitive approach to problems is both the show's hook and its heart — Charlie's math brain is as distinctive as Woo Young-woo's whale metaphors",
      "Misaeng fans who love workplace dramas where someone brilliant in one domain has to learn a completely different set of social rules to operate in a new environment",
      "Partners for Justice fans who love shows built around a complementary-abilities partnership — the FBI/mathematician dynamic has the same structural elegance as the forensic scientist/detective pairing"
    ]
  },
  {
    id: 'without-a-trace',
    title: 'Without a Trace',
    year: 2002,
    type: 'show',
    genres: ['crime', 'drama', 'procedural', 'mystery'],
    themes: ['identity', 'disappearance', 'truth', 'family', 'hope', 'justice'],
    tropes: ['missing-persons', 'FBI-task-force', 'timeline-reconstruction', 'psychological-profiling', 'found-families-broken'],
    tone: ['tense', 'emotional', 'procedural', 'hopeful-and-dark', 'character-driven'],
    setting: ['modern', 'new-york-city', 'fbi', 'missing-persons'],
    characterTypes: ['fbi-missing-persons-leader', 'elite-task-force', 'psychological-profiler', 'investigators'],
    streaming: { amazon_prime: true },
    actors: [
      { name: 'Anthony LaPaglia', role: 'Jack Malone', isLead: true },
      { name: 'Poppy Montgomery', role: 'Samantha Spade', isLead: false }
    ],
    matchReasoningHints: [
      "Missing: The Other Side fans who love missing persons investigations where the show takes seriously the experience of families left behind — Without a Trace builds each episode around who the missing person was to the people who loved them",
      "Signal fans of procedurals where reconstructing a timeline is the core investigative method — the show essentially teaches you to read a life through its absence",
      "Through the Darkness fans who love FBI procedurals where psychological insight into both victims and investigators is taken as seriously as physical evidence",
      "Save Me fans of crime dramas where a disappearance is both the mystery and the emotional anchor — the family's search for their missing person is always the emotional backbone regardless of where the investigation leads",
      "Watcher fans who love crime procedurals that ask: who was this person to the people who loved them, and what does their disappearance reveal about all of us"
    ]
  },
  {
    id: 'hawaii-five-0',
    title: 'Hawaii Five-0',
    year: 2010,
    type: 'show',
    genres: ['crime', 'action', 'drama', 'procedural'],
    themes: ['loyalty', 'family', 'justice', 'teamwork', 'sacrifice', 'identity'],
    tropes: ['elite-task-force', 'buddy-cop', 'found-family', 'action-procedural', 'island-setting', 'military-ops'],
    tone: ['action-packed', 'warm', 'fun', 'tense', 'tropical'],
    setting: ['modern', 'hawaii', 'task-force', 'island'],
    characterTypes: ['navy-seal-team-leader', 'ex-cop-partner', 'local-detective', 'tech-expert', 'beloved-team'],
    streaming: { paramount: true, amazon_prime: true },
    actors: [
      { name: 'Alex O\'Loughlin', role: 'Steve McGarrett', isLead: true },
      { name: 'Scott Caan', role: 'Danny Williams', isLead: true }
    ],
    matchReasoningHints: [
      "Vagabond fans who love action-procedurals where the protagonist is former special forces and brings a military operational approach to law enforcement — McGarrett's SEAL background shapes every arrest and interrogation",
      "City Hunter fans of action procedurals with a found-family team dynamic and a protagonist whose specific skill set makes them perfect for the danger their job requires",
      "The K2 fans who love shows where the action is frequent, polished, and serves a deeper character story about someone who has been shaped by service into someone who can't stop serving",
      "Two Cops fans of buddy-cop procedurals where the central partnership banter is as satisfying as any case resolution — Danny's permanent exasperation with Steve is its own reward",
      "Signal fans who love shows where the past (McGarrett's father's murder) drives the present investigation across multiple seasons with genuine payoff"
    ]
  },
  {
    id: 'major-crimes',
    title: 'Major Crimes',
    year: 2012,
    type: 'show',
    genres: ['crime', 'drama', 'procedural'],
    themes: ['justice', 'pragmatism', 'team-dynamics', 'institutional-change', 'morality', 'family'],
    tropes: ['deal-making-detective', 'inherited-team', 'procedural-sequel', 'found-family', 'unexpected-custody'],
    tone: ['smart', 'warm', 'procedural', 'morally-engaged', 'character-driven'],
    setting: ['modern', 'los-angeles', 'lapd', 'major-crimes-division'],
    characterTypes: ['pragmatic-captain', 'inherited-team', 'foster-teenage-informant', 'da-liaison'],
    streaming: { amazon_prime: true, hulu: true },
    actors: [
      { name: 'Mary McDonnell', role: 'Sharon Raydor', isLead: true },
      { name: 'G. W. Bailey', role: 'Lt. Louie Provenza', isLead: false }
    ],
    matchReasoningHints: [
      "Stranger (Forest of Secrets) fans who love procedurals where the central tension is between getting a conviction and finding the truth — Captain Raydor's deal-making approach creates the same productive moral friction",
      "Misaeng fans who love shows about a new leader who inherits a team that initially resists her and wins them over through demonstrated competence rather than authority",
      "38 Task Force fans of crime dramas where the protagonist uses unconventional methods that make traditionalists uncomfortable but consistently produce results",
      "Juvenile Justice fans who love legal procedurals that take seriously the question of what justice actually requires in each specific case rather than applying a formula",
      "Good Detective fans of procedurals with an ensemble that becomes genuinely beloved over multiple seasons — Major Crimes is comfort TV for people who miss The Closer"
    ]
  },
  {
    id: 'the-closer',
    title: 'The Closer',
    year: 2005,
    type: 'show',
    genres: ['crime', 'drama', 'procedural', 'comedy'],
    themes: ['interrogation', 'justice', 'ambition', 'gender-politics', 'southern-charm', 'institutional-dynamics'],
    tropes: ['interrogation-genius', 'southern-fish-out-of-water', 'female-division-chief', 'aw-shucks-genius', 'closure-confession'],
    tone: ['sharp', 'witty', 'character-driven', 'warm', 'smart-procedural'],
    setting: ['modern', 'los-angeles', 'lapd', 'priority-homicide'],
    characterTypes: ['brilliant-interrogator', 'disgruntled-team', 'deputy-chief', 'fbi-husband'],
    streaming: { amazon_prime: true, hulu: true },
    actors: [
      { name: 'Kyra Sedgwick', role: 'Brenda Leigh Johnson', isLead: true },
      { name: 'J. K. Simmons', role: 'Assistant Chief Pope', isLead: false }
    ],
    matchReasoningHints: [
      "Criminal Minds (Korean) fans who love a female protagonist whose interrogation skills are supernatural in their precision — Brenda reads people the way behavioral analysts read crime scenes",
      "Watcher fans of detective shows where the protagonist's methodology is so distinct it becomes a genre unto itself — Brenda's aw-shucks Georgia charm is a weapon as precise as any K-drama detective's signature technique",
      "Strong Woman Do Bong-soon fans who love female leads who are genuinely formidable but navigating a workplace that keeps trying to manage their effectiveness",
      "The Good Wife (Korean) fans of procedurals about a woman who is the best at what she does operating in a system that keeps finding new ways to undermine that fact",
      "Good Detective fans who love a slow burn ensemble dynamic — The Closer's team resists Brenda for seasons and the gradual conversion is deeply satisfying"
    ]
  },
  {
    id: 'columbo',
    title: 'Columbo',
    year: 1971,
    type: 'show',
    genres: ['crime', 'mystery', 'drama', 'classic'],
    themes: ['justice', 'intellectual-cat-and-mouse', 'class', 'humility-as-weapon', 'truth'],
    tropes: ['inverted-mystery', 'oh-one-more-thing', 'disarming-detective', 'cat-and-mouse', 'class-warfare', 'genius-disguise'],
    tone: ['charming', 'witty', 'cerebral', 'classic', 'cat-and-mouse'],
    setting: ['modern', 'los-angeles', 'upper-class-los-angeles', '1970s'],
    characterTypes: ['seemingly-bumbling-detective', 'upper-class-murderer', 'genius-in-disguise', 'one-more-thing'],
    streaming: { paramount: true },
    actors: [
      { name: 'Peter Falk', role: 'Lieutenant Columbo', isLead: true }
    ],
    matchReasoningHints: [
      "Hello Monster / I Remember You fans who love the cat-and-mouse between detective and killer as an intellectual romance — Columbo knows who did it in the first five minutes and the rest is the dance",
      "Lookout fans of detective shows where the protagonist uses apparent weakness as a strategic tool — Columbo's rumpled suit and apparent confusion are as deliberate as any calculated deception",
      "Two Cops fans who love the comedy inherent in a detective who seems to be everyone's least threatening possible adversary being the most dangerous person in the room",
      "My Mister fans who love shows about class consciousness — Columbo is fundamentally a working-class detective outwitting upper-class murderers, and the pleasure is in watching privilege undone by underestimation",
      "Signal fans who love detective shows that are as interested in the killer's psychology as the method of the crime — Columbo episodes are character studies wearing the clothes of procedural mysteries"
    ]
  },
  {
    id: 'southland',
    title: 'Southland',
    year: 2009,
    type: 'show',
    genres: ['crime', 'drama', 'procedural'],
    themes: ['duty', 'trauma', 'institutional-pressure', 'survival', 'honor', 'cost-of-service'],
    tropes: ['realistic-police-drama', 'documentary-style', 'rookie-veteran-pairing', 'cost-of-the-job', 'no-easy-answers'],
    tone: ['gritty', 'realistic', 'emotionally-raw', 'tense', 'authentic'],
    setting: ['modern', 'los-angeles', 'street-level', 'patrol-officers'],
    characterTypes: ['veteran-patrol-officer', 'rookie-detective', 'street-level-cops', 'detectives'],
    streaming: { amazon_prime: true, hulu: true },
    actors: [
      { name: 'Michael Cudlitz', role: 'John Cooper', isLead: true },
      { name: 'Ben McKenzie', role: 'Ben Sherman', isLead: true }
    ],
    matchReasoningHints: [
      "Good Detective fans who want a police procedural with maximum realism and minimum glamour — Southland is what it actually costs to do this job every day, stripped of every procedural convention",
      "Confession fans of crime dramas that take institutional pressure and personal trauma as seriously as any individual case — Southland is a show about what the job does to people",
      "Bad Guys fans who want the authentic version of what Bad Guys stylizes — street-level policing in Los Angeles as it is, not as it appears on shows that have network notes",
      "Beyond Evil fans who love police dramas that don't flinch from the gap between what the institution promises and what it actually delivers",
      "My Mister fans who love shows about the cost of doing your job honestly in a system that doesn't always reward honesty — Southland's officers are people who chose this and live with all of it"
    ]
  },
  {
    id: 'magnum-pi',
    title: 'Magnum P.I.',
    year: 2018,
    type: 'show',
    genres: ['crime', 'action', 'drama', 'comedy'],
    themes: ['loyalty', 'friendship', 'identity', 'service', 'found-family', 'past-and-present'],
    tropes: ['ex-military-pi', 'buddy-cop', 'found-family', 'hawaii-setting', 'veteran-trauma', 'action-comedy'],
    tone: ['fun', 'warm', 'action-packed', 'charming', 'light-tense'],
    setting: ['modern', 'hawaii', 'private-investigation', 'military-vet'],
    characterTypes: ['ex-seal-pi', 'ex-military-team', 'english-estate-manager', 'found-family-crew'],
    streaming: { paramount: true, amazon_prime: true },
    actors: [
      { name: 'Jay Hernandez', role: 'Thomas Magnum', isLead: true },
      { name: 'Zachary Knighton', role: 'Orville Wright', isLead: false }
    ],
    matchReasoningHints: [
      "Healer fans who love a competent, charming private investigator who operates outside official channels and whose cases are usually more complicated than they first appear",
      "City Hunter fans of action-adventure shows where the hero is enormously capable and perpetually underestimated — Magnum's combination of military skill and affable charm is pure City Hunter energy",
      "Running Man fans of action-comedy shows where the banter between the team is as entertaining as any case they're solving and the friendships are clearly the show's real subject",
      "Vagabond fans who love shows where a military veteran's specific skill set from their service life becomes the exact qualification their civilian work requires",
      "Two Cops fans of shows where the partnership dynamic is as much comedy as it is action — Magnum and TC have the same rhythm as any great buddy-cop K-drama pairing"
    ]
  },
  {
    id: 'bosch-legacy',
    title: 'Bosch: Legacy',
    year: 2022,
    type: 'show',
    genres: ['crime', 'drama', 'thriller', 'mystery'],
    themes: ['justice', 'retirement', 'identity', 'legacy', 'moral-code', 'father-daughter'],
    tropes: ['retired-detective-reinvented', 'private-investigator', 'father-daughter-bond', 'moral-absolutism', 'legal-gray-areas'],
    tone: ['gritty', 'atmospheric', 'smart', 'tense', 'noir-adjacent'],
    setting: ['modern', 'los-angeles', 'private-investigation', 'legal-world'],
    characterTypes: ['retired-detective-turned-pi', 'defense-attorney-daughter', 'fbi-contact', 'moral-absolutist'],
    streaming: { amazon_prime: true },
    actors: [
      { name: 'Titus Welliver', role: 'Harry Bosch', isLead: true },
      { name: 'Mimi Rogers', role: 'Honey Chandler', isLead: false },
      { name: 'Madison Lintz', role: 'Maddie Bosch', isLead: false }
    ],
    matchReasoningHints: [
      "Signal fans who love the 'retired detective who can't stop solving crimes because justice isn't done' premise — Bosch leaving the LAPD doesn't change his fundamental nature, the way Lee Je-hoon's detective couldn't stop even after the case closed",
      "Good Detective 2 fans of sequel shows that successfully deepen the protagonist by putting them in a new context — Bosch as a private investigator lets the character explore what his moral code means without institutional cover",
      "My Mister fans who love a protagonist defined by their own internal standard of conduct — Bosch's 'everybody counts or nobody counts' philosophy is the same absolute ethics that defines Park Dong-hoon",
      "Partners for Justice fans who love the forensic investigator crossing institutional lines to pursue truth — Bosch: Legacy gives him a defense attorney daughter whose job requires him to protect the system he spent his career fighting",
      "Stranger (Forest of Secrets) fans of crime shows where the most interesting dynamic is between law enforcement and defense lawyers who share a commitment to justice while occupying adversarial roles"
    ]
  },
  {
    id: 'life',
    title: 'Life',
    year: 2007,
    type: 'show',
    genres: ['crime', 'drama', 'procedural', 'mystery'],
    themes: ['wrongful-conviction', 'zen-philosophy', 'justice', 'redemption', 'truth', 'equanimity'],
    tropes: ['wrongfully-convicted-detective', 'zen-protagonist', 'revenge-arc', 'comeback-story', 'unlikely-partnership'],
    tone: ['philosophical', 'contemplative', 'smart', 'tense', 'unusual'],
    setting: ['modern', 'los-angeles', 'police', 'post-prison'],
    characterTypes: ['zen-returned-detective', 'ex-con-partner', 'investigating-own-framing', 'meditative-antihero'],
    streaming: { amazon_prime: true },
    actors: [
      { name: 'Damian Lewis', role: 'Charlie Crews', isLead: true },
      { name: 'Sarah Shahi', role: 'Dani Reese', isLead: true }
    ],
    matchReasoningHints: [
      "Innocent Man fans who love wrongful conviction stories that follow the aftermath — what do you become after 12 years in prison for something you didn't do, and can that person actually return to the job that failed them",
      "Falsify fans who love crime shows built around a journalist/detective investigating their own institutional betrayal — Crews is doing that while also solving the murder of the week, which is an impressive amount to carry",
      "Signal fans who love procedurals with a long-game conspiracy arc running beneath the case-of-the-week structure — Crews's investigation into his own framing is the Signal arc, the procedural is the texture",
      "My Mister fans of shows built around a protagonist who developed their philosophy of life through suffering and now applies it with disarming serenity to a world that doesn't understand them",
      "Two Cops fans of detective procedurals where the lead's unusual approach (zen equanimity instead of aggression) creates constant friction and comedy that deepens into genuine admiration"
    ]
  },
  {
    id: 'body-of-proof',
    title: 'Body of Proof',
    year: 2011,
    type: 'show',
    genres: ['crime', 'drama', 'procedural', 'mystery'],
    themes: ['identity', 'redemption', 'justice', 'truth', 'expertise', 'family'],
    tropes: ['brilliant-flawed-protagonist', 'medical-examiner-as-detective', 'career-change', 'difficult-female-genius', 'forensic-pathology'],
    tone: ['smart', 'engaging', 'tense', 'character-driven', 'slightly-dark'],
    setting: ['modern', 'philadelphia', 'medical-examiner-office', 'forensic'],
    characterTypes: ['brilliant-arrogant-medical-examiner', 'police-investigative-partner', 'forensic-pathologist', 'complicated-personal-life'],
    streaming: { hulu: true },
    actors: [
      { name: 'Dana Delany', role: 'Dr. Megan Hunt', isLead: true }
    ],
    matchReasoningHints: [
      "Partners for Justice fans of shows where the medical examiner is the protagonist, not the supporting character — Dr. Hunt speaks for the dead the way all good forensic examiners do, but she does it louder",
      "Doctor Romantic fans of brilliant, difficult protagonists who are in the process of becoming less isolated and more human through the cases they take and the team they build",
      "Strong Girl Do Bong-soon fans of female protagonists who are genuinely better at their job than nearly everyone and haven't quite figured out how to make that not create friction",
      "Good Detective fans of procedurals where the forensic science is genuinely explained and the medical examiner's expertise is what cracks the case rather than a convenient revelation",
      "Hello My Twenties fans who love shows about a brilliant woman rebuilding her life and professional relationships after a crisis that cost her the world she thought she had"
    ]
  },
  {
    id: 'saving-grace',
    title: 'Saving Grace',
    year: 2007,
    type: 'show',
    genres: ['crime', 'drama', 'supernatural', 'procedural'],
    themes: ['redemption', 'faith', 'justice', 'self-destruction', 'grace', 'morality'],
    tropes: ['morally-complex-detective', 'guardian-angel', 'last-chance-redemption', 'supernatural-intervention', 'unflinching-realism'],
    tone: ['dark', 'raw', 'spiritual', 'tense', 'emotionally-complex'],
    setting: ['modern', 'oklahoma-city', 'police', 'supernatural'],
    characterTypes: ['self-destructive-detective', 'guardian-angel', 'friends-and-colleagues', 'crime-victims'],
    streaming: { amazon_prime: true },
    actors: [
      { name: 'Holly Hunter', role: 'Grace Hanadarko', isLead: true },
      { name: 'Leon Rippy', role: 'Earl', isLead: false }
    ],
    matchReasoningHints: [
      "Doom at Your Service fans of supernatural elements integrated into a contemporary crime/character drama — the guardian angel premise is as structurally functional as any K-drama supernatural mechanic",
      "Oh My Ghost fans who love stories about a charismatic, complicated woman who is given an unexpected supernatural second chance to sort out what she actually is",
      "Rugal fans who love crime shows where a detective's own moral damage makes them simultaneously their worst enemy and uniquely qualified for the worst cases",
      "The Uncanny Counter fans of shows that blend crime-solving with supernatural intervention where the supernatural element reveals something true about the character's inner life",
      "Signal fans who love crime procedurals with a metaphysical dimension that makes the question of justice more complex — Saving Grace asks whether being good at catching criminals is enough to count as a good person"
    ]
  },
  {
    id: 'chicago-pd',
    title: 'Chicago P.D.',
    year: 2014,
    type: 'show',
    genres: ['crime', 'drama', 'procedural', 'action'],
    themes: ['justice', 'corruption', 'loyalty', 'moral-gray-area', 'institutional-pressure', 'team-bonds'],
    tropes: ['morally-gray-protagonist', 'intelligence-unit', 'ends-justify-means', 'street-justice', 'found-family', 'chicago-crime'],
    tone: ['gritty', 'tense', 'morally-complex', 'action-driven', 'emotionally-charged'],
    setting: ['modern', 'chicago', 'police-intelligence-unit', 'urban-crime'],
    characterTypes: ['tough-intelligence-sergeant', 'undercover-specialist', 'diverse-unit', 'morally-tested-officers'],
    streaming: { hulu: true, paramount: true },
    actors: [
      { name: 'Jason Beghe', role: 'Hank Voight', isLead: true },
      { name: 'Tracy Spiridakos', role: 'Hailey Upton', isLead: false }
    ],
    matchReasoningHints: [
      "Bad Guys fans who love morally gray police units that operate outside standard procedure because the crimes they pursue require it — Voight runs his intelligence unit the way Oh Goo-tak runs his team: on results and loyalty",
      "38 Task Force fans of shows where the gap between legal and just is where all the interesting drama lives — Chicago P.D. puts its team in that gap every episode",
      "Mouse fans who love crime dramas that take seriously the question of whether ends justify means — Voight always believes they do, and the show is always questioning whether he's right",
      "Signal fans of crime procedurals where Chicago's specific corruption landscape is as textured and historically specific as Seoul's — Voight knows the city's shadow system the way Signal's characters know theirs",
      "Stranger (Forest of Secrets) fans of crime shows where the intelligence unit's methods are constantly under institutional scrutiny and the tension between effectiveness and accountability never resolves"
    ]
  },
  {
    id: 'forever',
    title: 'Forever',
    year: 2014,
    type: 'show',
    genres: ['crime', 'drama', 'mystery', 'fantasy'],
    themes: ['immortality', 'death', 'grief', 'identity', 'justice', 'past-haunting-present'],
    tropes: ['immortal-protagonist', 'medical-examiner-detective', 'centuries-of-grief', 'time-spanning-memories', 'unlikely-partner'],
    tone: ['charming', 'melancholic', 'witty', 'engaging', 'bittersweet'],
    setting: ['modern', 'new-york-city', 'medical-examiner', 'supernatural'],
    characterTypes: ['immortal-medical-examiner', 'nypd-partner', 'eternal-friend', 'ancient-nemesis'],
    streaming: { hulu: true, amazon_prime: true },
    actors: [
      { name: 'Ioan Gruffudd', role: 'Dr. Henry Morgan', isLead: true },
      { name: 'Alana de la Garza', role: 'Detective Jo Martinez', isLead: true }
    ],
    matchReasoningHints: [
      "Alice (2020) fans who love time-spanning mystery dramas where a protagonist's unusual relationship with time gives them insights that ordinary investigators can't access — Henry's centuries of experience are Alice's time-physics",
      "The Age of Shadows fans of characters who have survived too long and accumulated too much grief — Henry has watched everyone he loved die for 200 years and the show is about what that costs",
      "Hello Monster / I Remember You fans of charming, brilliant protagonists whose apparent ease conceals a deep reserve of tragedy that the show slowly reveals",
      "Signal fans who love crime procedurals where historical knowledge illuminates present crimes — Henry recognizes patterns across centuries the way Signal's detectives recognize patterns across decades",
      "Doom at Your Service fans of supernatural premises that are really just emotionally elegant metaphors for grief, loss, and whether someone who has lived too long can learn to feel alive again"
    ]
  },
  {
    id: 'covert-affairs',
    title: 'Covert Affairs',
    year: 2010,
    type: 'show',
    genres: ['spy', 'drama', 'action', 'thriller'],
    themes: ['identity', 'loyalty', 'love', 'espionage', 'trust', 'sacrifice'],
    tropes: ['new-cia-recruit', 'blind-mentor', 'forbidden-romance', 'spy-thriller', 'agency-politics', 'field-operative'],
    tone: ['action-packed', 'romantic', 'tense', 'stylish', 'engaging'],
    setting: ['modern', 'washington-dc', 'global-espionage', 'cia'],
    characterTypes: ['rookie-cia-operative', 'blind-analyst-mentor', 'clandestine-service', 'intelligence-handlers'],
    streaming: { amazon_prime: true },
    actors: [
      { name: 'Piper Perabo', role: 'Annie Walker', isLead: true },
      { name: 'Christopher Gorham', role: 'Auggie Anderson', isLead: true }
    ],
    matchReasoningHints: [
      "Vagabond fans who love spy thrillers where a protagonist's field capability is complemented by an analyst partner whose intelligence is their primary weapon",
      "My Secret Terrius fans of intelligence dramas where the romantic tension is built into the professional relationship and the spy premise is as much about trust as tradecraft",
      "Healer fans of shows where the partnership between field operative and handler/analyst is the emotional center — Annie and Auggie have the same dynamic as every great K-drama operative/support pairing",
      "City Hunter fans of action-romance spy shows where the protagonist is in over their head at first and grows into the role across multiple seasons",
      "Nine Puzzle fans who love intelligence dramas where the romantic subplot and the spy plot are genuinely intertwined rather than competing for screen time"
    ]
  },
  {
    id: 'perception',
    title: 'Perception',
    year: 2012,
    type: 'show',
    genres: ['crime', 'drama', 'procedural', 'mystery'],
    themes: ['mental-illness', 'perception-vs-reality', 'genius', 'justice', 'friendship', 'truth'],
    tropes: ['mentally-ill-genius', 'fbi-partner', 'hallucinations-as-insight', 'professor-consultant', 'unreliable-perception'],
    tone: ['smart', 'engaging', 'witty', 'tense', 'psychological'],
    setting: ['modern', 'chicago', 'university', 'fbi-consulting'],
    characterTypes: ['schizophrenic-neuroscience-professor', 'fbi-agent-partner', 'hallucinated-confidants', 'university-students'],
    streaming: { amazon_prime: true },
    actors: [
      { name: 'Eric McCormack', role: 'Dr. Daniel Pierce', isLead: true },
      { name: 'Rachael Leigh Cook', role: 'FBI Agent Kate Moretti', isLead: true }
    ],
    matchReasoningHints: [
      "Hello Monster / I Remember You fans of crime shows where the protagonist's psychological insight into criminal behavior is as much a gift as a curse — Pierce's hallucinations are the show's way of externalizing how pattern recognition works in a mind that never stops",
      "Alice fans of shows that use a neuroscience premise to explore the same questions about perception, reality, and what we can know that physics-based K-dramas use their science to approach",
      "Extraordinary Attorney Woo fans of procedurals with a neurodivergent protagonist whose unusual cognition is both the show's hook and its heart — Pierce's schizophrenia gives him access to pattern recognition unavailable to neurotypical investigators",
      "Two Cops fans of crime comedies where the unusual nature of the protagonist's insight creates constant friction with the institutional partner who has to explain the inexplicable to colleagues",
      "Signal fans who love crime shows where the detective's most powerful tool is their ability to inhabit the perspective of people experiencing reality very differently — Pierce takes that literally"
    ]
  }
];
