/**
 * Western Search Gap Batch — 2026
 * 12 Western shows and movies missing from the catalog based on search gap analysis.
 * Mix of supernatural teen mystery, psychological thriller, alt-history romance,
 * crime procedurals, sci-fi, and acclaimed legal films.
 *
 * Routing for merge script:
 * Shows (10): school-spirits, dead-ringers-2023, my-lady-jane, justified-city-primeval,
 *             three-pines, the-crowded-room, doctor-odyssey, the-irrational,
 *             beacon-23, accused-fox
 * Movies (2): the-burial, pain-hustlers
 */
module.exports = [
  {
    "id": "school-spirits",
    "title": "School Spirits",
    "year": 2023,
    "episodes": 8,
    "synopsis": "A teenage girl wakes up as a ghost in her own high school — murdered, unable to leave the building, with no memory of how she died. With help from the other dead students stuck there, she has to figure out what happened to her before her body is found and whoever killed her escapes. A smart, surprisingly funny supernatural mystery that does both the mystery and the character work.",
    "genres": ["mystery", "supernatural", "drama", "thriller"],
    "themes": ["murder-mystery", "high-school", "afterlife", "identity", "friendship", "injustice"],
    "tropes": ["ghost-protagonist", "murder-mystery", "whodunit", "teen-drama", "supernatural-constraint"],
    "tone": ["mysterious", "darkly-comedic", "tense", "emotional"],
    "setting": ["modern", "high-school", "afterlife"],
    "characterTypes": ["ghost-protagonist", "still-living-suspects", "dead-student-ensemble", "grieving-family"],
    "streaming": {"paramount": true, "amazon_prime": true},
    "network": "Paramount+",
    "actors": [
      {"name": "Peyton List", "role": "Maddie Nears", "isLead": true},
      {"name": "Kristian Flores", "role": "Simon", "isLead": false},
      {"name": "Spencer MacPherson", "role": "Xavier", "isLead": false}
    ],
    "matchReasoningHints": [
      "Pretty Little Liars fans of teen supernatural mystery shows where the central mystery is the protagonist's own situation and every answer opens three more questions — School Spirits has the same 'the truth is worse than you thought' energy in a much tighter 8-episode package",
      "Haunting of Bly Manor fans who want the ghost story told from inside the ghost's perspective — School Spirits does this with more humor and a genuine whodunit plot that keeps the mystery engine running alongside the character work",
      "Veronica Mars fans of teen-detective premises where the female lead is smarter than everyone around her, navigating a community that has decided her story and is wrong — the ghost premise is just a Veronica Mars-style constraint on her investigation",
      "Atypical fans of Peyton List who want to see her carrying something more dramatically demanding — she's doing real work here, playing someone who has to discover the truth about herself while everyone else has moved on from her existence",
      "Wednesday fans of supernatural mystery shows set in schools where death is present but treated with some dark humor — School Spirits shares that tonal register but is considerably more interested in emotional authenticity than Wednesday"
    ]
  },
  {
    "id": "dead-ringers-2023",
    "title": "Dead Ringers",
    "year": 2023,
    "episodes": 6,
    "synopsis": "Twin gynecologists — one the brilliant risk-taker, one the careful stabilizer — open a radical women's health clinic together. Their codependency, mutual sabotage, and inability to be separate people is the horror, not any monster. Rachel Weisz plays both women with such total commitment that you forget they're the same person and feel the terrifying intimacy of their shared self.",
    "genres": ["psychological", "thriller", "drama", "horror"],
    "themes": ["identity", "codependency", "women-in-medicine", "sibling-rivalry", "body-autonomy", "institutional-power"],
    "tropes": ["twin-leads", "psychological-horror", "dark-doppelganger", "body-horror-adjacent", "women-destroying-each-other"],
    "tone": ["unsettling", "darkly-elegant", "intense", "claustrophobic"],
    "setting": ["modern", "medical", "new-york", "women's-clinic"],
    "characterTypes": ["brilliant-reckless-twin", "cautious-controlled-twin", "enabling-people-in-orbit", "institutional-forces"],
    "streaming": {"amazon_prime": true},
    "network": "Prime Video",
    "actors": [
      {"name": "Rachel Weisz", "role": "Beverly/Elliot Mantle", "isLead": true},
      {"name": "Britne Oldford", "role": "Genevieve", "isLead": false}
    ],
    "matchReasoningHints": [
      "Big Little Lies fans of prestige female-led dramas that are technically about a specific crime or mystery but are really about how women relate to each other and themselves under enormous social pressure",
      "Sharp Objects fans of psychological dramas where the horror is the relationship dynamics rather than any external threat — the twins' codependency is genuinely frightening in exactly the way Amy Adams' family relationships were",
      "Killing Eve fans of shows that use genre trappings (thriller, body horror-adjacent) to explore female identity and the specific violence of being the thing you simultaneously love and hate — Weisz's dual performance does what Villanelle and Eve's dynamic did differently",
      "Black Mirror fans of six-episode anthology-length explorations of a single disturbing premise — Dead Ringers has that same density, treating its premise as something to be excavated fully rather than used as backdrop",
      "The Knick fans of prestige medical dramas that are really about ambition and what professional excellence costs — the clinic setting here is the vehicle for examining what women had to become to be taken seriously in medicine"
    ]
  },
  {
    "id": "my-lady-jane",
    "title": "My Lady Jane",
    "year": 2024,
    "episodes": 8,
    "synopsis": "In an alternate Tudor England where some humans can transform into animals — and are persecuted for it — Lady Jane Grey is married off to a horse who can secretly become a man. He has his own political troubles. She has a crown being thrust at her. Together they accidentally become something rather inconveniently like partners. Gloriously absurd historical fantasy rom-com.",
    "genres": ["historical", "fantasy", "romance", "comedy"],
    "themes": ["political-intrigue", "shapeshifting", "alternate-history", "forced-marriage", "female-agency", "persecution"],
    "tropes": ["forced-marriage", "shapeshifting", "alternate-history", "enemies-to-lovers", "fish-out-of-water"],
    "tone": ["comedic", "romantic", "adventurous", "absurdist"],
    "setting": ["historical", "tudor-england", "alternate-history", "fantasy"],
    "characterTypes": ["reluctant-queen", "shapeshifting-husband", "scheming-nobles", "female-lead-with-agency"],
    "streaming": {"amazon_prime": true},
    "network": "Prime Video",
    "actors": [
      {"name": "Emily Bader", "role": "Lady Jane Grey", "isLead": true},
      {"name": "Edward Bluemel", "role": "Guildford Dudley", "isLead": true},
      {"name": "Jordan Peters", "role": "King Edward VI", "isLead": false}
    ],
    "matchReasoningHints": [
      "Outlander fans who want the Tudor political intrigue but with the romance dialed up and the bodily stakes replaced with something gleefully absurd — My Lady Jane is for people who loved Diana Gabaldon's interest in historical female agency but could do without the brutality",
      "Bridgerton fans of period fantasy romance that knows exactly what it is and commits fully to it — this has the same gorgeous production, the same unapologetically modern emotional intelligence in period costumes, and considerably more horse jokes",
      "The Great fans of historical comedies that are genuinely feminist without being anachronistic about it — Jane's refusal to be a passive figure in her own history is played with the same gleeful anachronism as Catherine's ambition",
      "Shadow and Bone fans of fantasy-adjacent period dramas with enemies-to-lovers dynamics and female protagonists who have abilities or positions that make them targets — Jane's throne-proximity is her supernatural threat and she has to navigate it with zero preparation",
      "What We Do in the Shadows fans who want period fantasy absurdism with genuine romantic heart — the horse-husband premise sounds like pure comedy but the show earns real emotional investment in these two very strange people"
    ]
  },
  {
    "id": "justified-city-primeval",
    "title": "Justified: City Primeval",
    "year": 2023,
    "episodes": 8,
    "synopsis": "Raylan Givens is now a U.S. Marshal in Miami — until a road trip with his teenage daughter leads him to Detroit, where he crosses paths with a charismatic, genuinely dangerous criminal who has been outwitting the city's legal system for years. The original Justified's signature pleasures — witty dialogue, moral complexity, Timothy Olyphant's effortless cool — all return, updated for a grittier urban setting.",
    "genres": ["crime", "thriller", "drama", "western"],
    "themes": ["cat-and-mouse", "moral-ambiguity", "justice-outside-the-law", "fatherhood", "urban-crime", "outlaw-ethos"],
    "tropes": ["lone-lawman", "charismatic-villain", "cat-and-mouse", "moral-gray-zone", "wisecracking-hero"],
    "tone": ["tense", "darkly-witty", "atmospheric", "cool"],
    "setting": ["modern", "detroit", "crime-world", "urban"],
    "characterTypes": ["charming-marshal", "dangerous-criminal", "complicated-daughter", "fragile-alliance-figures"],
    "streaming": {"hulu": true, "amazon_prime": true},
    "network": "FX / Hulu",
    "actors": [
      {"name": "Timothy Olyphant", "role": "Raylan Givens", "isLead": true},
      {"name": "Boyd Holbrook", "role": "Clement Mansell", "isLead": false},
      {"name": "Adelaide Clemens", "role": "Carolyn Wilder", "isLead": false}
    ],
    "matchReasoningHints": [
      "Justified fans who've been waiting — this is the direct sequel, same character, same voice, transplanted to Detroit with a new criminal equal to him, and if you loved the original you will be satisfied immediately from episode one",
      "Better Call Saul fans of prestige crime dramas that are really about a specific kind of American masculinity trying to be something better than what it is — Raylan Givens is Jimmy McGill without the tragic dimension, which makes him both easier and somehow sadder to watch",
      "The Americans fans of character-driven crime dramas where the show's politics are embedded in the specific atmosphere of a time and place rather than stated directly — City Primeval's Detroit is a portrait, not just a backdrop",
      "Tulsa King fans of crime shows that use their male lead's relationship to institutions as the primary tension — Raylan is law enforcement who operates just outside the law's patience, and that gap is where all the drama lives",
      "Reacher fans of efficient crime procedural vehicles for a physically imposing, morally clear protagonist who solves problems with a combination of violence and better thinking than the people around him — City Primeval is the literary version of that fantasy"
    ]
  },
  {
    "id": "three-pines",
    "title": "Three Pines",
    "year": 2022,
    "episodes": 8,
    "synopsis": "Chief Inspector Armand Gamache, a principled detective navigating the politics of the Sûreté du Québec, investigates murders in the idyllic but deceptively dark Québec village of Three Pines — while a parallel investigation explores the long-buried injustices done to Indigenous communities in the region. Based on Louise Penny's beloved novels, anchored by a warm, careful Alfred Molina performance.",
    "genres": ["mystery", "crime", "drama"],
    "themes": ["small-town-secrets", "indigenous-justice", "institutional-corruption", "compassionate-detective", "hidden-lives", "Quebec"],
    "tropes": ["small-town-mystery", "compassionate-detective", "anthology-cases", "social-commentary"],
    "tone": ["atmospheric", "warm", "thoughtful", "melancholic"],
    "setting": ["modern", "rural-quebec", "small-village", "canada"],
    "characterTypes": ["principled-senior-detective", "small-village-ensemble", "institutional-rivals", "indigenous-community"],
    "streaming": {"amazon_prime": true},
    "network": "Prime Video",
    "actors": [
      {"name": "Alfred Molina", "role": "Armand Gamache", "isLead": true},
      {"name": "Elle-Máijá Tailfeathers", "role": "Isabelle Lacoste", "isLead": false}
    ],
    "matchReasoningHints": [
      "Broadchurch fans of British-paced mysteries where the detective's humanity is as important as his cleverness and the small community he's investigating feels like a fully realized world with layers predating the crime",
      "Murdoch Mysteries fans of procedural crime dramas rooted in a specific cultural geography — Three Pines is as much about what Québec is as it is about solving murders, and that regional specificity gives it texture that generic procedurals lack",
      "All Creatures Great and Small fans of warm ensemble dramas set in communities where people have known each other long enough for secrets to have calcified — the Three Pines village has exactly that worn-in quality",
      "Inspector Gamache fans of Louise Penny who want to finally see the books adapted with genuine care — Molina's casting is the definitive version of the character for many readers, and the parallel Indigenous storyline adds a weight the books always implied",
      "Father Brown fans of cozy mysteries with a detective whose moral compass is the true instrument of detection — Gamache's compassion is the thing that catches killers because most of them aren't prepared for someone who actually wants to understand them"
    ]
  },
  {
    "id": "the-crowded-room",
    "title": "The Crowded Room",
    "year": 2023,
    "episodes": 10,
    "synopsis": "A young man is arrested for a 1979 New York City shooting and insists he has no memory of it. The psychologist assigned to evaluate him listens across sessions as he reveals a childhood of horror and a inner world far more complex — and fractured — than anyone anticipated. Based on the true story of Billy Milligan, this is a patient, empathetic portrait of dissociative identity disorder.",
    "genres": ["psychological", "thriller", "drama"],
    "themes": ["mental-health", "dissociative-identity", "childhood-trauma", "criminal-justice", "empathy", "true-crime"],
    "tropes": ["unreliable-narrator", "mental-illness", "twist-reveal", "trauma-backstory", "psychological-examination"],
    "tone": ["intense", "emotionally-complex", "slow-burn", "compassionate"],
    "setting": ["historical", "1979", "new-york", "psychiatric-evaluation"],
    "characterTypes": ["fractured-male-protagonist", "empathetic-psychologist", "traumatic-past-figures", "institutional-authorities"],
    "streaming": {"apple_tv": true},
    "network": "Apple TV+",
    "actors": [
      {"name": "Tom Holland", "role": "Danny Sullivan", "isLead": true},
      {"name": "Amanda Seyfried", "role": "Rya Goodwin", "isLead": true}
    ],
    "matchReasoningHints": [
      "Maniac fans of shows that take psychological fragmentation seriously as a narrative structure — The Crowded Room uses the session-by-session revelation format to mirror what it feels like to experience rather than observe a fractured identity",
      "Kill Me Heal Me fans who want to see the Western prestige television version of a DID narrative — this is the true-story, psychologically rigorous version of what Korean melodrama treats as romantic premise",
      "Euphoria fans of Tom Holland who want to see him fully commit to something difficult and painful — his performance here is the farthest thing from Spider-Man and it asks more of him emotionally than anything he'd done before",
      "Mindhunter fans of procedural dramas that use a formal interview structure to excavate a person layer by layer — the therapy session format creates the same gradual revelation rhythm, but from inside the subject's experience rather than an investigator's",
      "Daisy Jones and the Six fans of limited series that use a specific period and specific true story to examine how personality is constructed under pressure — the 1979 setting here does the same work that the 70s rock world did there"
    ]
  },
  {
    "id": "doctor-odyssey",
    "title": "Doctor Odyssey",
    "year": 2024,
    "episodes": 13,
    "synopsis": "A new chief medical officer takes his first posting on a luxury cruise ship — bringing order, competence, and a complicated romantic history into a world where the only rule is that the ship keeps moving and the guests can't leave. Every week brings a new medical crisis, a new cast of passengers with secrets, and the ongoing question of which of two very different people is going to end up in his cabin.",
    "genres": ["drama", "romance", "medical", "comedy"],
    "themes": ["workplace-romance", "medical-emergencies", "enclosed-environment", "love-triangle", "professional-competence"],
    "tropes": ["love-triangle", "workplace-romance", "medical-drama", "enclosed-setting", "slow-burn"],
    "tone": ["warm", "comedic", "dramatic", "escapist"],
    "setting": ["modern", "cruise-ship", "international-waters"],
    "characterTypes": ["competent-new-doctor", "charming-rival", "grounded-female-lead", "rotating-patient-cases"],
    "streaming": {"hulu": true, "amazon_prime": true},
    "network": "ABC / Hulu",
    "actors": [
      {"name": "Joshua Jackson", "role": "Max", "isLead": true},
      {"name": "Sean Teale", "role": "Tristan", "isLead": false},
      {"name": "Phillipa Soo", "role": "Avery", "isLead": true}
    ],
    "matchReasoningHints": [
      "Grey's Anatomy fans who want the medical-drama-with-romantic-subplots formula in a contained, aesthetically beautiful setting where the geography itself creates the ensemble intimacy that hospitals usually supply",
      "Emily in Paris fans of glossy, unabashedly escapist drama that commits fully to its romantic premise and its gorgeous setting and doesn't apologize for being entertainment rather than art",
      "Station 19 fans who want the 'professional colleagues in an enclosed environment with romantic tension' format but with more sunlight and international ports of call and less firefighting tragedy",
      "Crash Landing on You fans who love the comedy of an extremely competent person dropped into an environment that has entirely different rules and having to negotiate both their professional authority and their personal confusion simultaneously",
      "Ted Lasso fans of genuinely warm ensemble workplace dramas where the new authority figure wins people over through competence and emotional intelligence and the romantic subplot is a slow payoff rather than the main event"
    ]
  },
  {
    "id": "the-irrational",
    "title": "The Irrational",
    "year": 2023,
    "episodes": 22,
    "synopsis": "A behavioral science professor whose research focuses on human irrationality consults for law enforcement on cases that stumped conventional investigation. He himself was a victim of an unsolved church bombing years ago, and each season brings him closer to understanding who did it. Procedural pleasures with genuine intellectual content, anchored by Jesse L. Martin's easy warmth.",
    "genres": ["crime", "mystery", "drama", "procedural"],
    "themes": ["behavioral-science", "human-irrationality", "cold-case", "trauma", "intellectual-detective", "justice"],
    "tropes": ["genius-consultant", "procedural-case-of-the-week", "cold-case-personal-connection", "intellectual-approach-to-crime"],
    "tone": ["warm", "intelligent", "procedural", "accessible"],
    "setting": ["modern", "academic", "crime-investigation", "urban"],
    "characterTypes": ["behavioral-scientist-lead", "law-enforcement-colleagues", "diverse-case-subjects", "cold-case-antagonist"],
    "streaming": {"peacock": true, "amazon_prime": true},
    "network": "NBC / Peacock",
    "actors": [
      {"name": "Jesse L. Martin", "role": "Alec Mercer", "isLead": true},
      {"name": "Maahra Hill", "role": "Phoebe", "isLead": false},
      {"name": "Travina Springer", "role": "Rizwan Salim", "isLead": false}
    ],
    "matchReasoningHints": [
      "Psych fans of procedurals where the investigator's unusual perceptual gift is the show's hook — The Irrational replaces hyper-observation with applied behavioral economics, and the weekly demonstrations of how human biases lead to crime are genuinely educational",
      "Monk fans of charming procedural leads who have a complicated relationship with their own past trauma and whose professional genius is inseparable from personal damage — Martin plays this with much more warmth and less neurosis than Shal does",
      "Elementary fans of procedurals that use their consulting-detective premise to introduce accessible versions of real academic frameworks — behavioral science is as well-adapted to crime investigation as Holmesian deduction",
      "Castle fans of light-procedural-plus-charismatic-lead comfort viewing where the case of the week is genuinely engaging and the personal arc is satisfying without being consuming — The Irrational sits exactly in that sweet spot",
      "Columbo fans of detective shows where the investigator's apparent harmlessness is the weapon — Mercer is underestimated because he's an academic, and watching him use that to dismantle people who thought they were too smart to get caught is satisfying"
    ]
  },
  {
    "id": "beacon-23",
    "title": "Beacon 23",
    "year": 2023,
    "episodes": 8,
    "synopsis": "A lighthouse keeper in deep space maintains a beacon that guides ships through a dangerous sector — until a stranger arrives claiming the beacon is more important than either of them knows. What begins as an isolated-person psychological character study gradually reveals itself as something larger and stranger, with Lena Headey and Stephan James spending the first episodes alone with their damage before things explode.",
    "genres": ["sci-fi", "thriller", "drama"],
    "themes": ["isolation", "trauma", "space", "conspiracy", "identity", "sacrifice"],
    "tropes": ["isolated-setting", "mysterious-stranger", "psychological-pressure", "slow-burn-reveal", "unlikely-alliance"],
    "tone": ["atmospheric", "tense", "slow-burn", "emotionally-complex"],
    "setting": ["sci-fi", "space-station", "deep-space", "isolated"],
    "characterTypes": ["damaged-lighthouse-keeper", "mysterious-arrival", "institutional-antagonists"],
    "streaming": {"amazon_prime": true},
    "network": "MGM+",
    "actors": [
      {"name": "Lena Headey", "role": "Aster Calyx", "isLead": true},
      {"name": "Stephan James", "role": "Halan", "isLead": true}
    ],
    "matchReasoningHints": [
      "Severance fans of sci-fi shows that use an unusual workplace as the lens for examining psychological damage and institutional power — the space lighthouse is as strange and loaded a setting as Lumon Industries",
      "Station Eleven fans of quiet, character-focused sci-fi that is more interested in what people carry with them than in action or spectacle — Beacon 23 spends its first episodes almost entirely on what these two people have survived",
      "Raised by Wolves fans of prestige sci-fi that refuses to explain itself quickly, trusting the audience to stay patient for payoffs that arrive at the show's own pace rather than a commercial schedule's",
      "Silo fans of high-concept sci-fi with a deliberately constrained physical space — the beacon is as tight and loaded as the silo, and the slow revelation of what's actually happening gives the show the same satisfaction of a mystery revealing itself on its own terms",
      "The OA fans of sci-fi dramas that are really about grief and survival and use their speculative framework to ask what it means to be present in your own life after something has broken you"
    ]
  },
  {
    "id": "accused-fox",
    "title": "Accused",
    "year": 2023,
    "episodes": 15,
    "synopsis": "An anthology series: each episode begins with someone sitting in a courtroom, accused of a crime, and then rewinds to show exactly how they got there. Each subject is sympathetic. Each crime is understandable. Each legal system interaction is shown as something that decent people can be destroyed by. The best episode of any given season might be the best hour of TV in that year.",
    "genres": ["legal", "thriller", "drama", "anthology"],
    "themes": ["justice", "circumstance", "ordinary-people-in-crisis", "legal-system", "moral-complexity", "social-commentary"],
    "tropes": ["anthology-format", "unreliable-system", "sympathetic-criminal", "reverse-chronology", "moral-gray-zone"],
    "tone": ["tense", "compassionate", "socially-conscious", "emotionally-devastating"],
    "setting": ["modern", "legal", "multiple-locations"],
    "characterTypes": ["ordinary-people-in-extraordinary-situations", "defense-attorneys", "institutional-forces", "families"],
    "streaming": {"hulu": true, "amazon_prime": true},
    "network": "Fox / Hulu",
    "actors": [
      {"name": "Michael Chiklis", "role": "Multiple (Anthology)", "isLead": false},
      {"name": "Jack Quaid", "role": "Multiple (Anthology)", "isLead": false}
    ],
    "matchReasoningHints": [
      "Black Mirror fans of anthology series where each episode is a completely self-contained story built around a single disturbing premise — Accused is Black Mirror with the supernatural removed and the legal system as the technology that amplifies ordinary human failure",
      "Broadchurch fans of crime dramas that are more interested in the community around the crime than the investigative procedure — Accused asks who these people were before the worst moment of their life, and the answer is always 'someone you could recognize'",
      "People v. O.J. Simpson fans of legal dramas that use specific cases to examine how the justice system interacts with race, class, and power — each Accused episode is a contained version of that analysis applied to a different social context",
      "Boston Legal fans of legal drama with emotional intelligence and genuine moral ambiguity about whether law and justice are the same thing — Accused is darker and less comedic but shares that fundamental skepticism about whether the system produces the outcomes it claims to",
      "The Fall fans of crime dramas that consistently ask whether the perpetrator's humanity changes the moral calculus of their crime — Accused takes that question and runs 15 different experiments with it, each with a different answer"
    ]
  },
  {
    "id": "the-burial",
    "title": "The Burial",
    "year": 2023,
    "episodes": 1,
    "synopsis": "A Mississippi funeral home owner facing bankruptcy enlists a flamboyant personal injury lawyer to sue the corporation that broke an oral agreement with him. The case becomes a study in how institutions swallow people, how Southern courtroom theatrics can be real justice, and how an unlikely alliance between a dignified Black businessman and a streetfighting white attorney reshapes how each of them sees the law.",
    "genres": ["legal", "drama", "comedy"],
    "themes": ["race", "justice", "class", "institutional-power", "unlikely-alliance", "true-story"],
    "tropes": ["courtroom-drama", "unlikely-allies", "david-vs-goliath", "true-story", "mismatched-partners"],
    "tone": ["warm", "triumphant", "dramatic", "comedic"],
    "setting": ["modern", "mississippi", "courtroom"],
    "characterTypes": ["charismatic-plaintiff-attorney", "dignified-business-owner", "corporate-antagonist"],
    "streaming": {"amazon_prime": true},
    "network": "Prime Video",
    "actors": [
      {"name": "Jamie Foxx", "role": "Willie Gary", "isLead": true},
      {"name": "Tommy Lee Jones", "role": "Jeremiah O'Keefe", "isLead": true}
    ],
    "matchReasoningHints": [
      "The Good Fight fans of legal dramas that are genuinely interested in how race and class operate inside the legal system — The Burial uses its Mississippi setting and true-story basis to make those dynamics visceral rather than theoretical",
      "Lincoln Lawyer fans of legal dramas where the attorney's charisma is the weapon and the courtroom is a performance space — Jamie Foxx's Willie Gary is one of the great legal showman characters in recent film, operating at full theatrical intensity",
      "Just Mercy fans of true-story legal dramas about race and the American justice system where the moral stakes are clearly drawn without the film being preachy — The Burial has the same conviction but with more comedy and more joy in the actual legal performance",
      "Philadelphia fans of legal dramas built on an unlikely alliance between people of different backgrounds who gradually realize they're fighting the same battle from different positions and that their differences are assets rather than problems",
      "Knives Out fans of mysteries where the pleasure is in the legal or procedural architecture — watching Willie Gary construct the argument against a corporate giant is the same satisfaction as watching Blanc take apart a mystery, with higher social stakes"
    ]
  },
  {
    "id": "pain-hustlers",
    "title": "Pain Hustlers",
    "year": 2023,
    "episodes": 1,
    "synopsis": "A single mother with no college degree lands a job at a small pharmaceutical company and discovers a talent for sales that makes her a fortune — until she realizes the drug she's been selling is destroying people. Based on the true story of the opioid crisis's lesser-known accelerants, anchored by Emily Blunt playing a woman who wanted to be good at something and was, for a while.",
    "genres": ["drama", "crime", "thriller"],
    "themes": ["opioid-crisis", "female-ambition", "moral-compromise", "class-mobility", "corporate-crime", "motherhood"],
    "tropes": ["rise-and-fall", "morally-compromised-protagonist", "corporate-crime", "true-story", "ambitious-female-lead"],
    "tone": ["tense", "darkly-comedic", "character-driven", "morally-complex"],
    "setting": ["modern", "pharmaceutical-industry", "florida"],
    "characterTypes": ["ambitious-single-mother", "charismatic-corrupt-boss", "corporate-enablers", "opioid-victims"],
    "streaming": {"netflix": true},
    "network": "Netflix",
    "actors": [
      {"name": "Emily Blunt", "role": "Liza Drake", "isLead": true},
      {"name": "Chris Evans", "role": "Pete Brennan", "isLead": false},
      {"name": "Andy Garcia", "role": "Dr. Jack Neel", "isLead": false}
    ],
    "matchReasoningHints": [
      "Dopesick fans of opioid crisis narratives told from inside the machine — Pain Hustlers is the view from the sales floor rather than the executive suite, and Emily Blunt makes you understand exactly how ordinary people became complicit",
      "The Dropout fans of rise-and-fall true-story films about ambitious women who were failed by the institutions that used their ambition and then blamed them for it — Blunt's performance shares the DNA of Amanda Seyfried's Elizabeth Holmes",
      "Breaking Bad fans of stories about people who discover a talent for something morally indefensible and the specific psychology of how you justify continuing once you know — Liza is Walter White with a daughter to feed and less chemistry",
      "Inventing Anna fans of true-crime dramas that are interested in the social ecosystem that makes a certain kind of fraud possible — Pain Hustlers is the opioid version of that analysis, looking at how a broken healthcare economy created the conditions",
      "Big Short fans of corporate crime films that use the mechanics of an industry as the horror — understanding how pharmaceutical sales incentives work is as disturbing as understanding CDO tranching, and this film teaches you both"
    ]
  }
];
