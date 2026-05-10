/**
 * Western SEO Expansion Batch — 2026
 * 14 high-search-volume Western shows missing from the catalog.
 * Selected for "shows like [X]" Google search volume and cross-cultural match potential.
 *
 * IDs: house-md, castle-abc, scandal-abc, chicago-med, call-my-agent,
 *      mayor-of-kingstown, american-crime-story, blue-eye-samurai,
 *      ramy, barry-hbo, atlanta-fx, elementary-cbs, monk-detective, psych-usa
 *
 * Dedup verified against 1,980 existing catalog IDs before merge.
 */
module.exports = [

  // ─── 1. House M.D. (2004) ─────────────────────────────────────────────────
  {
    id: 'house-md',
    title: 'House M.D.',
    year: 2004,
    episodes: 177,
    synopsis: "Dr. Gregory House is a medical genius who is also a narcissist, a drug addict, and the most compelling character on American television in the 2000s. He runs a diagnostic department at Princeton-Plainsboro Teaching Hospital where every case is a mystery and the solution always says something about the human condition. His dynamic with oncologist James Wilson — the friendship that holds House together while he tries to destroy himself — is one of TV's great relationships. Eight seasons of watching a brilliant, broken person be brilliant and broken.",
    genres: ['medical', 'drama', 'mystery', 'procedural'],
    themes: ['genius-with-flaws', 'addiction', 'friendship', 'ethics', 'identity', 'chronic-pain'],
    tropes: ['brilliant-but-damaged', 'medical-mystery', 'reluctant-hero', 'mentor-figure', 'will-they-wont-they'],
    tone: ['dark', 'witty', 'dramatic', 'intense', 'character-driven'],
    setting: ['modern', 'hospital', 'princeton-new-jersey', 'procedural-cases'],
    characterTypes: ['genius-misanthrope', 'loyal-best-friend', 'straight-man-foil', 'idealistic-interns', 'morally-complex-patients'],
    streaming: { amazon_prime: true, peacock: true },
    network: 'FOX',
    actors: [
      { name: 'Hugh Laurie', role: 'Dr. Gregory House', isLead: true },
      { name: 'Robert Sean Leonard', role: 'Dr. James Wilson', isLead: true },
      { name: 'Lisa Edelstein', role: 'Dr. Lisa Cuddy', isLead: false }
    ],
    matchReasoningHints: [
      "Dr. Romantic: Teacher Kim fans of Korean medical dramas where an arrogant, genius doctor transforms everyone around him while refusing to admit he has a heart — House is the template for that archetype, only darker and more self-destructive",
      "Good Doctor fans of medical dramas where the central character sees the world differently from everyone else and that difference is both their greatest gift and their greatest wound — House is the Western origin of that premise",
      "Hospital Playlist fans who want the opposite energy: a medical drama that is cold, intellectual, and driven by character damage rather than warmth — House asks what happens when brilliance is never accompanied by kindness",
      "Signal fans of dramas where procedural mysteries are really asking deeper questions about justice, human nature, and why people do terrible things — House uses its medical cases the same way Signal uses cold cases: as moral philosophy disguised as genre",
      "My Mister fans of slow, meticulous character studies about deeply damaged people who cannot accept help even when they need it most — House and Park Dong-hoon share the same refusal to be saved, and the shows are equally patient about it"
    ]
  },

  // ─── 2. Castle (2009) ─────────────────────────────────────────────────────
  {
    id: 'castle-abc',
    title: 'Castle',
    year: 2009,
    episodes: 173,
    synopsis: "Famous crime novelist Richard Castle convinces the NYPD to let him shadow homicide detective Kate Beckett for 'research' — and the two end up forming the most reluctant, bickering, romantically-charged crime-solving partnership in American procedural TV. Eight seasons of will-they-won't-they wrapped around genuinely fun murder mysteries, with Nathan Fillion at peak charm and Stana Katic making Beckett one of the best female leads in the genre. The romance builds slowly and pays off.",
    genres: ['crime', 'mystery', 'romance', 'procedural', 'comedy'],
    themes: ['unlikely-partnership', 'will-they-wont-they', 'professional-vs-personal', 'family-legacy', 'redemption'],
    tropes: ['bickering-partners', 'will-they-wont-they', 'crime-solving-duo', 'charming-rogue', 'slow-burn'],
    tone: ['fun', 'romantic', 'witty', 'light-hearted', 'occasionally-intense'],
    setting: ['modern', 'new-york', 'nypd-precinct', 'crime-scenes'],
    characterTypes: ['charming-wildcard-male-lead', 'competent-serious-female-detective', 'loyal-precinct-team', 'crime-novelist-outsider'],
    streaming: { hulu: true, amazon_prime: true },
    network: 'ABC',
    actors: [
      { name: 'Nathan Fillion', role: 'Richard Castle', isLead: true },
      { name: 'Stana Katic', role: 'Kate Beckett', isLead: true },
      { name: 'Jon Huertas', role: 'Javier Esposito', isLead: false }
    ],
    matchReasoningHints: [
      "Suspicious Partner fans of crime dramas where the central couple starts with irritation and forced proximity and the tension between professional and personal becomes the emotional engine of the whole show — Castle is the American template for that structure",
      "Partners for Justice fans of investigative procedurals with genuine romantic chemistry between the leads that the show makes you wait for — Castle has 173 episodes of that wait and unlike some shows, it delivers on the promise",
      "Strong Girl Nam-soon fans of romances where the female lead is completely capable and doesn't need saving, and the male lead's primary role is to be charming, persistent, and emotionally available — Beckett and Castle have exactly that dynamic",
      "City Hunter fans of action-romance dramas where the male lead uses charisma and unconventional skills to get into places he shouldn't be, and the female lead spends multiple seasons both exasperated by and falling for him",
      "Two Cops fans of odd-couple crime comedies where the humor comes from two completely different personalities being forced to work together toward the same goal, with romantic tension as the subtext"
    ]
  },

  // ─── 3. Scandal (2012) ────────────────────────────────────────────────────
  {
    id: 'scandal-abc',
    title: 'Scandal',
    year: 2012,
    episodes: 124,
    synopsis: "Olivia Pope runs the most discreet crisis management firm in Washington D.C. — fixing problems for the powerful while having a secret affair with the President of the United States. Shonda Rhimes created one of the most propulsive, twisty political dramas American TV has produced: fast-talking, morally chaotic, and anchored by Kerry Washington delivering a performance of sustained intensity across seven seasons. Everyone is doing something terrible for reasons that make a kind of sense. The dialogue moves like a freight train.",
    genres: ['political', 'drama', 'thriller', 'romance'],
    themes: ['power-and-corruption', 'forbidden-love', 'loyalty', 'secrets', 'identity', 'moral-compromise'],
    tropes: ['forbidden-love', 'morally-grey-female-lead', 'power-dynamics', 'secret-affair', 'conspiracy'],
    tone: ['intense', 'fast-paced', 'glamorous', 'morally-complex', 'addictive'],
    setting: ['modern', 'washington-dc', 'political-world', 'power-corridors'],
    characterTypes: ['brilliant-fixer-female-lead', 'charismatic-powerful-men', 'loyal-gladiators', 'political-operatives'],
    streaming: { hulu: true, netflix: true },
    network: 'ABC',
    actors: [
      { name: 'Kerry Washington', role: 'Olivia Pope', isLead: true },
      { name: 'Tony Goldwyn', role: 'President Fitzgerald Grant', isLead: true },
      { name: 'Bellamy Young', role: 'Mellie Grant', isLead: false }
    ],
    matchReasoningHints: [
      "Chief of Staff fans of K-dramas set in the corridors of political power, where every person has leverage over every other person and the story is about who is willing to use it — Scandal operates in the same world of calculated loyalty and ruthless power",
      "Sky Castle fans of prestige dramas where high-status people do terrible things to protect their position and the show takes a clear-eyed view of their moral compromise — Scandal's political world has the same energy as Sky Castle's academic elite",
      "The Glory fans of dramas about a brilliant woman executing a long, meticulous plan for power in an environment where she has to be smarter than everyone else in the room just to stay even — Olivia Pope and Moon Dong-eun are cut from the same cloth",
      "Designated Survivor K-drama fans of political dramas where the central character is surrounded by people with competing agendas and the question is who is playing which angle — Scandal's plot architecture is a masterclass in that kind of layered intrigue",
      "Something in the Rain fans who want the other side: a drama about a woman who chooses power over love, complexity over comfort, and whose relationship with a man who holds power over her is both the best and worst thing in her life"
    ]
  },

  // ─── 4. Chicago Med (2015) ────────────────────────────────────────────────
  {
    id: 'chicago-med',
    title: 'Chicago Med',
    year: 2015,
    episodes: 120,
    synopsis: "The medical drama in Dick Wolf's Chicago franchise, set in the ED of Gaffney Chicago Medical Center. Chicago Med runs on character friction: nurses, doctors, and attendings with different philosophies about care, competing for resources, forming and breaking relationships, all while the city's crises land in their emergency department. Less prestige than House, more grounded than Grey's Anatomy, it's the show you watch for the ensemble dynamics and the ethical dilemmas that medicine surfaces every shift.",
    genres: ['medical', 'drama', 'procedural'],
    themes: ['medical-ethics', 'found-family', 'trauma', 'professional-loyalty', 'relationship-pressure'],
    tropes: ['ensemble-workplace', 'medical-procedural', 'found-family', 'professional-romance', 'ethical-dilemma'],
    tone: ['dramatic', 'intense', 'ensemble-driven', 'occasionally-heartbreaking'],
    setting: ['modern', 'chicago', 'emergency-department', 'urban-hospital'],
    characterTypes: ['idealistic-young-doctor', 'veteran-attending', 'fierce-nurse', 'pragmatic-administrator', 'trauma-patient'],
    streaming: { peacock: true, amazon_prime: true },
    network: 'NBC',
    actors: [
      { name: 'Nick Gehlfuss', role: 'Dr. Will Halstead', isLead: true },
      { name: 'Torrey DeVitto', role: 'Dr. Natalie Manning', isLead: true },
      { name: 'Oliver Platt', role: 'Dr. Daniel Charles', isLead: false }
    ],
    matchReasoningHints: [
      "Hospital Playlist fans of workplace medical dramas where the joy is watching an ensemble of differently-skilled people navigate both professional crises and personal relationships in an environment that demands everything from them",
      "Dr. Romantic: Teacher Kim fans who want a Western procedural with similar ethical stakes — doctors making impossible calls, a system that works against good medicine, and characters defined by how they respond to pressure",
      "Romantic Doctor Teacher Kim fans of medical dramas that take the hospital hierarchy seriously and use the power dynamics between attendings, residents, and nurses as a source of both drama and character development",
      "Good Doctor fans of medical procedurals where the cases are genuine moral dilemmas with no easy answer, and the characters disagree in good faith about what the right call is",
      "Reply 1988 fans of ensemble dramas where the warmth comes from watching a community of people who genuinely care about each other navigate the same external pressures together — Chicago Med's ED team has that same found-family energy"
    ]
  },

  // ─── 5. Call My Agent (2015) ──────────────────────────────────────────────
  {
    id: 'call-my-agent',
    title: 'Call My Agent (Dix pour cent)',
    year: 2015,
    episodes: 24,
    synopsis: "A Parisian talent agency is thrown into chaos when its founder dies suddenly, leaving four agents — each with their own talent, dysfunction, and clientele — to keep the business running while managing celebrity clients playing heightened versions of themselves. Call My Agent is the rare workplace comedy that is also a genuine character study: warm, funny, and quietly devastating about loneliness in a glamorous world. Four seasons of the best ensemble on French television, with every real celebrity cameo somehow making the fiction more true.",
    genres: ['comedy', 'drama', 'workplace', 'slice-of-life'],
    themes: ['found-family', 'professional-relationships', 'loneliness', 'ambition', 'loyalty', 'identity'],
    tropes: ['ensemble-workplace', 'will-they-wont-they', 'fish-out-of-water', 'found-family', 'professional-chaos'],
    tone: ['warm', 'funny', 'bittersweet', 'sophisticated', 'character-driven'],
    setting: ['modern', 'paris', 'entertainment-industry', 'talent-agency'],
    characterTypes: ['idealistic-junior-agent', 'sharp-experienced-agents', 'demanding-celebrity-clients', 'loyal-assistants'],
    streaming: { netflix: true },
    network: 'France 2 / Arte',
    actors: [
      { name: 'Camille Cottin', role: 'Andréa Martel', isLead: true },
      { name: 'Thibault de Montalembert', role: 'Mathias Barneville', isLead: true },
      { name: 'Liliane Rovère', role: 'Arlette Azémar', isLead: false }
    ],
    matchReasoningHints: [
      "Work Later Drink Now fans of workplace comedies about professional women navigating chaotic jobs and complicated personal lives with humor and mutual support — Call My Agent has the same warmth and the same honest treatment of adult friendship",
      "My Liberation Notes fans of dramas where the show's real subject is loneliness and how hard it is to connect across difference, disguised as a story about a specific workplace — both shows use their setting as a lens on emotional isolation",
      "Something in the Rain fans of character-driven dramas that are ostensibly about work and are actually about whether people can figure out what they want before it's too late — Call My Agent has the same slow, honest rhythm",
      "Behind the Mask fans of K-dramas set in the entertainment industry where the relationship between talent and handlers is the central dramatic engine and the celebrity world is presented with wry affection rather than glamour worship",
      "Thirty-Nine fans of ensemble dramas about professional women in their late 30s/40s navigating friendship, ambition, and the question of what their lives are actually for — Call My Agent's four leads are asking exactly that question across four seasons"
    ]
  },

  // ─── 6. Mayor of Kingstown (2021) ─────────────────────────────────────────
  {
    id: 'mayor-of-kingstown',
    title: 'Mayor of Kingstown',
    year: 2021,
    episodes: 30,
    synopsis: "The McLusky family has brokered the uneasy peace between law enforcement, prisoners, gangs, and politicians in Kingstown, Michigan — a town whose entire economy revolves around its prisons. When the family patriarch dies, the 'Mayor' role falls to Mike McLusky, played by Jeremy Renner at full intensity. Mayor of Kingstown is a brutal, system-level crime drama that asks who actually holds power in a carceral town and what it costs to be the person who maintains the balance. Relentlessly dark and genuinely ambitious.",
    genres: ['crime', 'drama', 'thriller'],
    themes: ['systemic-corruption', 'prison-politics', 'family-loyalty', 'moral-compromise', 'power-vacuum'],
    tropes: ['anti-hero', 'family-dynasty', 'broker-between-worlds', 'corrupt-system', 'reluctant-leader'],
    tone: ['dark', 'brutal', 'intense', 'morally-complex', 'slow-burn'],
    setting: ['modern', 'michigan', 'prison-town', 'criminal-underworld'],
    characterTypes: ['reluctant-power-broker', 'calculating-criminal-leaders', 'corrupt-officials', 'loyal-family-members'],
    streaming: { paramount_plus: true },
    network: 'Paramount+',
    actors: [
      { name: 'Jeremy Renner', role: 'Mike McLusky', isLead: true },
      { name: 'Kyle Chandler', role: 'Mitch McLusky', isLead: false },
      { name: 'Dianne Wiest', role: 'Miriam McLusky', isLead: false }
    ],
    matchReasoningHints: [
      "Narco Saints fans of crime dramas where a morally ordinary person gets pulled into a world of extreme violence and corruption and has to navigate it by becoming something they wouldn't have recognized in themselves — Mike McLusky's transformation has the same logic",
      "My Name fans of revenge-adjacent crime dramas where the protagonist operates inside the criminal world with full knowledge of its brutality and the show refuses to let them — or the audience — feel comfortable about it",
      "Vincenzo fans of dramas where the male lead is the mediator between violent factions and their particular skill is the ability to see all sides of a conflict that everyone else is too tribal to see clearly",
      "Bloodhounds fans of crime dramas about money, power, and the people at the bottom who get consumed by systems they can't control — Mayor of Kingstown makes the prison economy feel as visceral as Bloodhounds makes loan sharks",
      "Signal fans of crime dramas where the central question is systemic rather than individual — who built this broken system, who benefits from it, and what would it cost to fix it if anyone even wanted to"
    ]
  },

  // ─── 7. American Crime Story (2016) ───────────────────────────────────────
  {
    id: 'american-crime-story',
    title: 'American Crime Story',
    year: 2016,
    episodes: 30,
    synopsis: "Ryan Murphy's prestige anthology series recreates the most culturally significant criminal cases in American history. Season 1 (The People v. O.J. Simpson) is one of the finest TV seasons ever produced — a courtroom drama, a media analysis, and a treatise on race in America all in one. Season 2 (The Assassination of Gianni Versace) is quieter and more heartbreaking. Each season uses a famous case to examine something deep about American society. This is what true crime becomes when it's made by serious artists.",
    genres: ['crime', 'drama', 'anthology', 'legal', 'historical'],
    themes: ['race-and-justice', 'media-spectacle', 'truth-vs-perception', 'celebrity', 'identity', 'systemic-bias'],
    tropes: ['courtroom-drama', 'ensemble-cast', 'based-on-true-events', 'unreliable-perspectives', 'media-critique'],
    tone: ['prestige', 'intense', 'critically-acclaimed', 'historically-grounded', 'character-study'],
    setting: ['modern', '1990s-america', 'courtroom', 'los-angeles'],
    characterTypes: ['ambitious-prosecutor', 'brilliant-defense-attorneys', 'complex-suspect', 'media-figures'],
    streaming: { hulu: true, netflix: true },
    network: 'FX',
    actors: [
      { name: 'Sarah Paulson', role: 'Marcia Clark', isLead: true },
      { name: 'Courtney B. Vance', role: 'Johnnie Cochran', isLead: true },
      { name: 'Cuba Gooding Jr.', role: 'O.J. Simpson', isLead: true }
    ],
    matchReasoningHints: [
      "Through the Darkness fans of dramas that use real criminal cases to examine something deeper — about society, about bias, about the systems that produce violence — American Crime Story is the American version of that exact ambition",
      "The Innocent Man fans of K-dramas where the legal system is the antagonist and the drama comes from watching innocent or partially-innocent people get ground up by a process that cares about winning rather than truth",
      "Signal fans of crime dramas that use procedural mechanics to ask historical questions: why did this happen, who was responsible, and what would it take for society to give an honest answer",
      "Juvenile Justice fans of legal dramas where the central subject is the gap between what the justice system is supposed to do and what it actually does — American Crime Story's OJ season is the most rigorous examination of that gap in American TV",
      "Bloodhounds fans of crime dramas where the real villain is a system — financial, legal, racial — and the human antagonists are only as powerful as the system that enables them"
    ]
  },

  // ─── 8. Blue Eye Samurai (2023) ───────────────────────────────────────────
  {
    id: 'blue-eye-samurai',
    title: 'Blue Eye Samurai',
    year: 2023,
    episodes: 8,
    synopsis: "In Edo period Japan, a mixed-race swordsman with blue eyes — visible proof of forbidden parentage — walks a path of vengeance disguised behind a mask and a reputation for invincibility. Blue Eye Samurai is the most visually stunning animated series made for adults in years: gorgeous brushstroke-influenced action, a story about race, identity, and belonging told without sentimentality, and a lead character whose internal wound is as precise as their swordsmanship. Netflix's best 2023 release and a reminder that animation is a medium, not a genre.",
    genres: ['action', 'historical', 'thriller', 'drama', 'animated'],
    themes: ['identity', 'revenge', 'belonging', 'mixed-heritage', 'gender', 'sacrifice'],
    tropes: ['revenge-narrative', 'disguised-identity', 'samurai-warrior', 'found-family', 'tragic-backstory'],
    tone: ['dark', 'beautiful', 'intense', 'emotionally-complex', 'action-packed'],
    setting: ['historical', 'edo-japan', '17th-century', 'feudal-society'],
    characterTypes: ['masked-avenger-with-tragic-past', 'loyal-companion', 'charismatic-villain', 'unexpected-allies'],
    streaming: { netflix: true },
    network: 'Netflix',
    actors: [
      { name: 'Maya Erskine', role: 'Mizu (voice)', isLead: true },
      { name: 'Masi Oka', role: 'Heiji Shindo (voice)', isLead: false },
      { name: 'Brenda Song', role: 'Princess Akemi (voice)', isLead: false }
    ],
    matchReasoningHints: [
      "Mr. Sunshine fans of historical dramas set during the Meiji-adjacent era where a person of ambiguous origin navigates a society that refuses to fully accept them, and the violence they carry reflects the violence done to them — Blue Eye Samurai runs the same emotional logic",
      "Six Flying Dragons fans of Korean historical dramas where a single warrior's story is embedded in a much larger political transformation, and the action sequences are as ideologically charged as they are physically impressive",
      "The Untamed fans of Asian historical revenge narratives where the protagonist's true identity is hidden, their quest is fueled by a profound injustice, and the people they meet along the way become a chosen family they didn't expect to form",
      "Nirvana in Fire fans of historical dramas built around a meticulously planned revenge executed over years, where the protagonist's identity is a weapon and their pain is the source of their discipline",
      "Mask Girl fans of dramas about a person whose public identity and private reality are in complete opposition, where the mask is both protection and prison — Blue Eye Samurai is the historical action version of that psychological premise"
    ]
  },

  // ─── 9. Ramy (2019) ───────────────────────────────────────────────────────
  {
    id: 'ramy',
    title: 'Ramy',
    year: 2019,
    episodes: 30,
    synopsis: "Ramy Hassan is a first-generation Egyptian-American Muslim in New Jersey trying to reconcile his religious faith with his very imperfect everyday life. Created by and starring Ramy Youssef, the show is one of the most honest comedies about identity, spirituality, and the gap between who you want to be and who you actually are. It's also very funny. Ramy fails constantly, spiritually and personally, and the show treats those failures with the same curiosity it brings to his moments of genuine connection. Mahershala Ali in Season 2 is a revelation.",
    genres: ['comedy', 'drama', 'slice-of-life'],
    themes: ['identity', 'faith', 'family', 'belonging', 'self-deception', 'first-generation'],
    tropes: ['flawed-protagonist', 'family-pressure', 'cultural-identity', 'spiritual-searching', 'found-family'],
    tone: ['honest', 'funny', 'quietly-devastating', 'warm', 'character-driven'],
    setting: ['modern', 'new-jersey', 'muslim-american-community', 'first-generation'],
    characterTypes: ['spiritually-seeking-male-lead', 'traditional-immigrant-parents', 'first-gen-friends', 'religious-mentors'],
    streaming: { hulu: true },
    network: 'Hulu',
    actors: [
      { name: 'Ramy Youssef', role: 'Ramy Hassan', isLead: true },
      { name: 'Mahershala Ali', role: 'Sheikh Ali Malik', isLead: false },
      { name: 'May Calamawy', role: 'Dena Hassan', isLead: false }
    ],
    matchReasoningHints: [
      "My Liberation Notes fans of shows about people trying to find the part of themselves that isn't defined by what everyone expects from them — Ramy is doing the same searching in a completely different cultural context and with similar emotional honesty",
      "My Mister fans of slow, interior dramas where the central question is whether a fundamentally decent person can stop failing the people and principles they care about — Ramy and Park Dong-hoon are both men quietly at war with themselves",
      "Beautiful World fans of family dramas where the parent-child relationships are portrayed with real complexity — neither idealized nor villainized — and the source of pain is precisely how much everyone loves each other",
      "Pachinko fans of multigenerational dramas about the cost of immigration and the gap between first and second generation in terms of how they carry identity and expectation — Ramy's family dynamics are the American version of that theme",
      "Search: WWW fans of shows about professionally successful young adults who are quietly failing to figure out who they are outside of the role others have cast them in — Ramy's spiritual crisis is the same identity crisis in different clothing"
    ]
  },

  // ─── 10. Barry (2018) ────────────────────────────────────────────────────
  {
    id: 'barry-hbo',
    title: 'Barry',
    year: 2018,
    episodes: 32,
    synopsis: "Barry Berkman is a former marine turned hitman who stumbles into an acting class while on a job in Los Angeles and discovers, for the first time, something he might actually want. Bill Hader created, directed, and stars in one of the decade's finest TV achievements: a dark comedy that keeps breaking its own genre until it becomes something genuinely disturbing by Season 4. Barry wants to be good. Barry is very bad at being good. The show watches that contradiction with the same precision Barry brings to his work.",
    genres: ['dark-comedy', 'drama', 'crime', 'thriller'],
    themes: ['redemption', 'identity', 'violence', 'self-deception', 'art-as-escape', 'consequences'],
    tropes: ['anti-hero', 'found-family', 'dark-past', 'identity-transformation', 'morally-compromised-protagonist'],
    tone: ['darkly-comic', 'tense', 'brilliant', 'increasingly-disturbing', 'genre-breaking'],
    setting: ['modern', 'los-angeles', 'acting-world', 'criminal-underworld'],
    characterTypes: ['damaged-hitman-trying-to-reform', 'oblivious-acting-teacher', 'crime-boss', 'fellow-students'],
    streaming: { max: true },
    network: 'HBO',
    actors: [
      { name: 'Bill Hader', role: 'Barry Berkman', isLead: true },
      { name: 'Henry Winkler', role: 'Gene Cousineau', isLead: true },
      { name: 'Sarah Goldberg', role: 'Sally Reed', isLead: false }
    ],
    matchReasoningHints: [
      "My Name fans of crime dramas about a person who has become very good at violence and is trying to determine whether there's a version of themselves that doesn't require it — Barry and Yoon Ji-woo are both characters whose skill set has become their prison",
      "Taxi Driver fans of Korean dramas about someone using violence to solve problems while trying to convince themselves that the violence is justified — Barry's moral reasoning is as tortured as Taxi Driver's revenge mechanics",
      "It's Okay to Not Be Okay fans of shows about damaged people who encounter something genuinely warm in an unexpected place and have to decide whether to let themselves have it — Barry's experience in the acting class has the same emotional structure",
      "Vincenzo fans of dark comedies where a very dangerous person navigates a completely absurd situation, and the comedy comes from the gap between their genuine menace and the mundane world they're trying to participate in",
      "The Glory fans of stories about a person who has committed to a path of harm and keeps encountering evidence that they could have chosen differently — Barry's tragedy is that he can see the alternative and keeps choosing wrong anyway"
    ]
  },

  // ─── 11. Atlanta (2016) ──────────────────────────────────────────────────
  {
    id: 'atlanta-fx',
    title: 'Atlanta',
    year: 2016,
    episodes: 41,
    synopsis: "Earnest Marks is trying to manage his cousin Paper Boi's music career while barely managing his own life in Atlanta. Donald Glover created one of the most formally inventive shows in television history: episodes shift between social realism, absurdist comedy, horror, and documentary in a single season, but the emotional core is always clear — this is a show about Black American life, ambition, poverty, surreality, and the specific texture of Atlanta. Winner of two Emmy Awards for Outstanding Comedy Series. Genuinely unlike anything else.",
    genres: ['comedy', 'drama', 'surreal', 'slice-of-life'],
    themes: ['race-in-america', 'ambition', 'poverty', 'identity', 'friendship', 'absurdist-reality'],
    tropes: ['found-family', 'underdog', 'coming-of-age', 'surreal-reality', 'character-study'],
    tone: ['surreal', 'funny', 'sometimes-terrifying', 'compassionate', 'formally-experimental'],
    setting: ['modern', 'atlanta-georgia', 'music-industry', 'urban-poverty'],
    characterTypes: ['intelligent-underemployed-male-lead', 'rising-rapper', 'steadfast-partner', 'quirky-best-friend'],
    streaming: { hulu: true, amazon_prime: true },
    network: 'FX',
    actors: [
      { name: 'Donald Glover', role: 'Earnest Marks', isLead: true },
      { name: 'Brian Tyree Henry', role: 'Alfred Miles (Paper Boi)', isLead: true },
      { name: 'Zazie Beetz', role: 'Van', isLead: false }
    ],
    matchReasoningHints: [
      "My Liberation Notes fans of deeply quiet shows about unhappy people who are not sure what they want and are too honest to pretend — Atlanta has the same refusal to offer comfort and the same faith that watching ordinary, frustrated life is enough",
      "Hometown Cha-Cha-Cha fans who want the opposite tonal register: a show about the same themes (community, belonging, ambition vs. rootedness) that is strange and disturbing rather than warm and healing",
      "D.P. fans of dramas about the Korean military industrial complex where the surrealism of institutional life is used to examine something real about power — Atlanta uses surrealism the same way to examine race and class in America",
      "Move to Heaven fans of shows that take an apparently small, specific job or circumstance and use it as a lens on the full range of human experience — each Atlanta episode treats its premise the same way",
      "Extracurricular fans of dark dramas about young people navigating a system that was not built for them, where survival requires choices that transform you — Atlanta is funnier and stranger but operates on the same moral register"
    ]
  },

  // ─── 12. Elementary (2012) ────────────────────────────────────────────────
  {
    id: 'elementary-cbs',
    title: 'Elementary',
    year: 2012,
    episodes: 154,
    synopsis: "Sherlock Holmes, transplanted to modern New York after a drug relapse, works as a consultant for the NYPD with his sober companion-turned-partner Dr. Joan Watson, played brilliantly by Lucy Liu. Elementary's masterstroke is making Watson equally brilliant rather than a sidekick — the partnership is genuinely equal and the dynamic between them, across seven seasons, is one of TV's great platonic relationships. More interested in character consistency and genuine warmth than puzzle mechanics. The long-form friendship is the show.",
    genres: ['crime', 'mystery', 'procedural', 'drama'],
    themes: ['partnership', 'recovery', 'friendship', 'genius-and-connection', 'found-family'],
    tropes: ['genius-detective', 'equal-partnership', 'slow-burn-friendship', 'found-family', 'crime-solving-duo'],
    tone: ['smart', 'warm', 'procedural', 'character-driven', 'occasionally-dark'],
    setting: ['modern', 'new-york', 'nypd-consulting', 'brownstone'],
    characterTypes: ['brilliant-recovering-detective', 'equally-brilliant-partner', 'nypd-allies', 'classic-villains-reimagined'],
    streaming: { hulu: true, amazon_prime: true },
    network: 'CBS',
    actors: [
      { name: 'Jonny Lee Miller', role: 'Sherlock Holmes', isLead: true },
      { name: 'Lucy Liu', role: 'Joan Watson', isLead: true },
      { name: 'Aidan Quinn', role: 'Captain Tommy Gregson', isLead: false }
    ],
    matchReasoningHints: [
      "Partners for Justice fans of crime procedurals where the central relationship is a genuine intellectual partnership between two people with different but complementary skills, and the emotional story is their friendship evolving across cases",
      "Signal fans of crime dramas where the detective's relationship with their partner is as important as any individual case — Elementary's long-form Holmes-Watson dynamic is the Western equivalent of that kind of sustained partnership storytelling",
      "Criminal Minds Korea fans of procedural dramas about an elite investigative unit with distinct personalities, where the team dynamics are as compelling as the cases themselves",
      "Strong Girl Nam-soon fans of action-adjacent dramas where the female lead is completely the equal of her male partner, not his assistant — Joan Watson in Elementary is one of American TV's most complete female leads in a procedural format",
      "Hospital Playlist fans of ensemble shows where the emotional satisfaction comes from watching the same group of people grow and change over multiple seasons — Elementary's 154-episode run gives Holmes and Watson a full character arc that rivals any drama"
    ]
  },

  // ─── 13. Monk (2002) ──────────────────────────────────────────────────────
  {
    id: 'monk-detective',
    title: 'Monk',
    year: 2002,
    episodes: 125,
    synopsis: "Adrian Monk is a brilliant detective with severe OCD and 312 distinct phobias who solves crimes while being almost entirely unable to function in everyday life. Tony Shalhoub won three Emmy Awards for what is simultaneously a great comedic performance and a genuinely moving portrait of someone managing profound mental illness with the help of a loyal support system. Monk ran for eight seasons because it understood that its most emotional story wasn't the cases — it was the grief over Monk's murdered wife and the ongoing project of his recovery.",
    genres: ['comedy', 'mystery', 'procedural', 'drama'],
    themes: ['grief-and-recovery', 'mental-health', 'friendship', 'loyalty', 'found-family', 'obsession-as-gift'],
    tropes: ['eccentric-detective', 'found-family', 'reluctant-hero', 'grief-as-motivation', 'comedy-procedural'],
    tone: ['warm', 'funny', 'occasionally-moving', 'procedural', 'gentle'],
    setting: ['modern', 'san-francisco', 'episodic-cases', 'police-adjacent'],
    characterTypes: ['brilliant-obsessive-detective', 'loyal-nurse-companion', 'exasperated-police-captain', 'murder-of-the-week'],
    streaming: { peacock: true, amazon_prime: true },
    network: 'USA Network',
    actors: [
      { name: 'Tony Shalhoub', role: 'Adrian Monk', isLead: true },
      { name: 'Ted Levine', role: 'Captain Leland Stottlemeyer', isLead: false },
      { name: 'Traylor Howard', role: 'Natalie Teeger', isLead: false }
    ],
    matchReasoningHints: [
      "Partners for Justice fans of procedural comedies with a detective who has an unusual brain and a partner whose primary job is managing the detective's eccentricities while keeping the cases moving — Monk invented the template that Partners for Justice refines",
      "Two Cops fans of detective comedies where the humor comes from the extreme difference between the detective's extraordinary skills and their complete inability to handle ordinary situations — the gap between genius and daily life is the joke in both shows",
      "She Was Pretty fans of shows where a central character is underestimated because of surface oddness, and the emotional reward comes from watching the people around them slowly recognize what they actually are",
      "Crash Landing on You fans of comedies where the fundamental premise is absurd — a man terrified of everything solving murders, a South Korean heiress landing in North Korea — and the warmth comes from watching people adapt to impossible circumstances with good humor",
      "Hospital Playlist fans of ensemble shows built around the loyalty between a small group of people who know each other's flaws completely and choose to show up anyway — Monk's support system has the same unconditional quality"
    ]
  },

  // ─── 14. Psych (2006) ─────────────────────────────────────────────────────
  {
    id: 'psych-usa',
    title: 'Psych',
    year: 2006,
    episodes: 120,
    synopsis: "Shawn Spencer has an almost superhumanly observational brain — the result of an overbearing detective father who trained him from childhood — and absolutely no interest in doing anything serious with it, until he impulsively convinces the Santa Barbara police that he's a psychic consultant. Psych is a comedy procedural built on the friendship between Shawn and his deeply reluctant partner Gus, with enough pop culture references to stock a trivia night and a genuine romance arc that the show actually delivers on. Eight seasons of fun.",
    genres: ['comedy', 'mystery', 'procedural'],
    themes: ['friendship', 'father-son', 'reluctant-talent', 'will-they-wont-they', 'found-family'],
    tropes: ['fake-psychic-detective', 'best-friend-duo', 'will-they-wont-they', 'comedy-procedural', 'pop-culture-comedy'],
    tone: ['fun', 'witty', 'warm', 'lighthearted', 'nostalgic'],
    setting: ['modern', 'santa-barbara', 'police-consulting', 'episodic-mysteries'],
    characterTypes: ['naturally-gifted-slacker', 'straight-man-best-friend', 'skeptical-detective-love-interest', 'police-chief'],
    streaming: { peacock: true, amazon_prime: true },
    network: 'USA Network',
    actors: [
      { name: 'James Roday Rodriguez', role: 'Shawn Spencer', isLead: true },
      { name: 'Dulé Hill', role: 'Burton Guster', isLead: true },
      { name: 'Maggie Lawson', role: 'Juliet O\'Hara', isLead: false }
    ],
    matchReasoningHints: [
      "The Good Detective fans of procedural comedies where the detective is genuinely skilled but makes the work feel effortless and fun — Psych is the American version of that energy with an extra layer of absurdist friendship",
      "Suspicious Partner fans of crime comedies with a slow-burn romance between the detective and a love interest who is initially convinced the male lead is an idiot — Juliet O'Hara's relationship with Shawn mirrors that dynamic exactly",
      "Two Cops fans of buddy detective shows where the comedy comes entirely from the contrast between the two main characters' personalities and the show respects both enough to give them genuine growth",
      "Weightlifting Fairy Kim Bok-joo fans of light, warm shows built around a central friendship that is also a love story, where the joy is in watching two genuinely likable people spend time together regardless of the plot mechanics",
      "Hometown Cha-Cha-Cha fans of feel-good shows where the pleasure is in spending time with a specific community rather than in narrative tension — Psych's Santa Barbara setting and recurring ensemble create the same sense of returning to somewhere familiar"
    ]
  }
];
