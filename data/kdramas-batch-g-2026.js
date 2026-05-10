/**
 * K-Drama Catalog Expansion Batch G — 2026
 * 11 high-demand K-dramas filling search gaps.
 * Covers: Fight My Way, Moon Lovers, Under the Queen's Umbrella, I Miss You,
 * Strong Woman Nam-soon, Lovers of the Red Sky, Alchemy of Souls Part 2,
 * The Killer's Shopping List, Eve, Grid, Legal High (Korean remake).
 * Dedup verified against 1,910 existing catalog IDs before merge.
 */
module.exports = [

  // ─── 1. Fight My Way (2017) ─────────────────────────────────────────────
  {
    id: 'fight-my-way',
    title: 'Fight My Way',
    year: 2017,
    episodes: 16,
    synopsis: "Four friends in their late twenties share an apartment building and the sinking feeling that the futures they dreamed of aren't happening. Dong-man wanted to be a Taekwondo champion; now he fixes refrigerators. Ae-ra wanted to be a TV anchor; now she works the mall information desk. They've been best friends their whole lives, and neither has noticed they're also in love. Fight My Way is the rare K-drama that earns its romance by letting the friendship run long enough to be real — sixteen episodes of two people practicing for the thing they both actually want.",
    genres: ['romance', 'comedy', 'drama'],
    themes: ['friendship', 'ambition', 'self-worth', 'found-family', 'first-love', 'class-divide'],
    tropes: ['friends-to-lovers', 'neighbors', 'childhood-friends', 'rival-love-interests', 'slice-of-life'],
    tone: ['warm', 'funny', 'bittersweet', 'heartfelt', 'grounded'],
    setting: ['modern-Seoul', 'apartment-complex', 'sports-gym', 'shopping-mall'],
    characterTypes: ['underachiever-with-heart', 'fierce-ambitious-female-lead', 'loyal-childhood-friend', 'competitive-athlete'],
    streaming: { viki: true, amazon_prime: true },
    network: 'KBS2',
    actors: [
      { name: 'Park Seo-joon', role: 'Ko Dong-man', isLead: true },
      { name: 'Kim Ji-won', role: 'Choi Ae-ra', isLead: true },
      { name: 'Ahn Jae-hong', role: 'Kim Joo-man', isLead: false }
    ],
    matchReasoningHints: [
      "New Girl fans of ensemble comedies about a group of friends who are all struggling to figure out adulthood and covering for each other's failures — Fight My Way has the same texture of people who know each other so well they can't see what's obvious to everyone else",
      "Schitt's Creek fans of shows where the warmth comes from how much the characters genuinely like each other underneath all the bickering — Dong-man and Ae-ra have a fifteen-year friendship before the romance starts and the show lets you feel all of it",
      "Brooklyn Nine-Nine fans of workplace comedies where the romantic tension is secondary to the fact that the two leads are genuinely the best people to be around each other — Fight My Way runs on that same chemistry",
      "Normal People fans of slow-burn romances between two people who have all the right feelings and all the wrong timing, and the show trusts you to be patient with them",
      "Fleabag fans of stories about people in their late twenties whose dreams have quietly outpaced their circumstances, and who deal with it through humor that occasionally cracks open into something more honest"
    ]
  },

  // ─── 2. Moon Lovers: Scarlet Heart Ryeo (2016) ───────────────────────────
  {
    id: 'scarlet-heart-ryeo',
    title: 'Moon Lovers: Scarlet Heart Ryeo',
    year: 2016,
    episodes: 20,
    synopsis: "A 21st century woman is transported back to the Goryeo Dynasty during a solar eclipse and wakes up in the body of a court lady. She is drawn into the succession struggle among the King's many sons — especially the scarred, cold-hearted Fourth Prince who is feared by everyone at court, and who she alone manages to see differently. Based on a popular Chinese novel already adapted in China, the Korean version is more cinematic and emotionally brutal, with a finale that destroyed a generation of K-drama watchers and an IU performance that proved she was a genuine dramatic actress.",
    genres: ['historical', 'romance', 'political', 'fantasy', 'drama'],
    themes: ['time-travel', 'fate', 'forbidden-love', 'political-intrigue', 'sacrifice', 'identity'],
    tropes: ['time-travel-romance', 'cold-male-lead', 'rival-princes', 'star-crossed-lovers', 'tragic-ending'],
    tone: ['epic', 'romantic', 'devastating', 'cinematic', 'atmospheric'],
    setting: ['historical', 'goryeo-dynasty', 'royal-court', 'ancient-korea'],
    characterTypes: ['modern-woman-in-past', 'scarred-cold-prince', 'rival-princes', 'manipulative-court'],
    streaming: { viki: true, amazon_prime: true },
    network: 'MBC',
    actors: [
      { name: 'Lee Jun-ki', role: '4th Prince Wang So', isLead: true },
      { name: 'IU', role: 'Hae Soo', isLead: true },
      { name: 'Kang Ha-neul', role: '8th Prince Wang Wook', isLead: false },
      { name: 'Nam Joo-hyuk', role: '14th Prince Wang Jung', isLead: false }
    ],
    matchReasoningHints: [
      "Outlander fans of time-travel romance where the fish-out-of-water premise is treated seriously rather than played for comedy — Hae Soo's knowledge of the future is a curse as often as it is an advantage",
      "Game of Thrones fans of historical political dramas where the romance is real but entirely at the mercy of dynastic power struggles and everyone you love is expendable",
      "The Tudors fans of court dramas where physical desire and political survival are the same calculation, and beauty is never just beauty when there's a throne at stake",
      "Goblin fans of K-dramas where the love story is grand and the price the universe extracts for that love is genuinely terrible — Scarlet Heart runs the same emotional algorithm",
      "Downton Abbey fans of ensemble period dramas where you become invested in the fates of many characters simultaneously and the show earns each grief by first earning the affection"
    ]
  },

  // ─── 3. Under the Queen's Umbrella (2022) ────────────────────────────────────
  {
    id: 'under-the-queen-umbrella',
    title: "Under the Queen's Umbrella",
    year: 2022,
    episodes: 16,
    synopsis: "The Queen of Joseon is surrounded on all sides: a husband with a favored concubine, court factions maneuvering against her sons, and her own children who are each spectacularly unsuited for the throne in different ways. Where other queens might play elegant court politics, this one operates like a general who has accepted that she will win every battle or die in the attempt. Kim Hye-soo commands the screen with the certainty of someone who has been doing this for thirty years — because she has — and the show is the best historical K-drama in years about the specific competence it takes to survive and protect the people you love.",
    genres: ['historical', 'political', 'drama', 'thriller'],
    themes: ['motherhood', 'political-intrigue', 'court-survival', 'loyalty', 'sacrifice', 'power'],
    tropes: ['powerful-female-lead', 'palace-politics', 'succession-struggle', 'mother-protector', 'court-intrigue'],
    tone: ['intense', 'strategic', 'dramatic', 'occasionally-darkly-funny', 'satisfying'],
    setting: ['historical', 'joseon', 'royal-palace', 'court'],
    characterTypes: ['strategic-queen', 'flawed-princes', 'scheming-court-factions', 'ruthless-king'],
    streaming: { netflix: true },
    network: 'tvN',
    actors: [
      { name: 'Kim Hye-soo', role: 'Queen Im Hwa-ryeong', isLead: true },
      { name: 'Kim Hae-sook', role: 'Queen Dowager', isLead: false },
      { name: 'Choi Won-young', role: 'King', isLead: false }
    ],
    matchReasoningHints: [
      "The Crown fans of political dramas that center on a woman whose intelligence is equal to any man's in the room and who must operate through indirect power because direct power is structurally denied to her",
      "Succession fans of dramas where the central question is which flawed child is least unfit to inherit power, and the parent engineering the outcome is the most interesting person in every room",
      "Downton Abbey fans of ensemble period pieces where multiple storylines converge on the same household and the mother figure is the load-bearing wall the whole structure rests on",
      "Mr. Sunshine fans of Joseon-era K-dramas with a genuinely cinematic visual grammar and a female lead who isn't a love interest — she is the protagonist, full stop",
      "The Great fans of court dramas where the humor is dark, the violence is real, and the female lead's competence makes everyone around her look slightly ridiculous by comparison"
    ]
  },

  // ─── 4. I Miss You (2012) ────────────────────────────────────────────────────────
  {
    id: 'i-miss-you',
    title: 'I Miss You',
    year: 2012,
    episodes: 21,
    synopsis: "Two fifteen-year-olds find each other and fall in love, then are separated by violence and circumstance. Fifteen years later, they find each other again — but the girl who survived is now a detective, the boy who survived is now a man with secrets, and there is a third person who witnessed everything and has been carrying the weight of it alone since childhood. A melodrama that takes trauma seriously, refuses to let the romance overwhelm what the characters actually went through, and trusts its adult cast enough to let the childhood tragedy remain the center.",
    genres: ['melodrama', 'romance', 'mystery', 'crime'],
    themes: ['childhood-trauma', 'separation', 'reunion', 'memory', 'identity', 'survival'],
    tropes: ['childhood-friends-reunited', 'star-crossed-lovers', 'dark-secret', 'love-triangle', 'fate'],
    tone: ['melancholic', 'romantic', 'intense', 'emotional', 'atmospheric'],
    setting: ['modern-Seoul', 'flashbacks-to-past', 'detective-office', 'crime-world'],
    characterTypes: ['trauma-survivor-detective', 'man-with-hidden-past', 'third-person-carrying-guilt'],
    streaming: { viki: true },
    network: 'MBC',
    actors: [
      { name: 'Yoon Eun-hye', role: 'Lee Soo-yeon / Zoe', isLead: true },
      { name: 'Park Yoo-chun', role: 'Han Jung-woo', isLead: true },
      { name: 'Yoo Seung-ho', role: 'Kang Hyung-joon', isLead: false }
    ],
    matchReasoningHints: [
      "Goblin fans of K-dramas where the central romance is inseparable from grief — where the couple has to survive not just separation but the specific damage that separation caused",
      "It's Okay to Not Be Okay fans of melodramas that take childhood trauma seriously as a structuring force in adult relationships rather than backstory to explain away",
      "Missing: The Other Side fans of crime dramas that double as emotional investigations into how people survive what happened to them as children",
      "Signal fans of shows where the past and present are running simultaneously and the present can only be understood by fully reckoning with what happened in the past",
      "Something in the Rain fans of slow, aching K-dramas where the romance is real but the circumstances surrounding it are genuinely painful and the show doesn't rush toward resolution"
    ]
  },

  // ─── 5. Strong Woman Nam-soon (2023) ─────────────────────────────────────────
  {
    id: 'strong-woman-namsoon',
    title: 'Strong Woman Nam-soon',
    year: 2023,
    episodes: 16,
    synopsis: "Nam-soon has superhuman strength — which was fine when she was growing up in Mongolia, but becomes a problem when she returns to Korea to find her mother and grandmother, both of whom also have superhuman strength and have been living entirely differently with it. The spiritual sequel to Strong Woman Do Bong-soon takes the same premise and scales it up: three generations of physically impossible women, a drug trafficking syndicate, and a rookie detective who keeps getting saved by the woman he's trying to protect. Lighter than its predecessor but consistently delightful.",
    genres: ['romance', 'comedy', 'action', 'fantasy'],
    themes: ['family', 'identity', 'self-acceptance', 'generational-strength', 'belonging'],
    tropes: ['supernatural-female-lead', 'found-family', 'action-comedy', 'crime-fighting', 'multi-generational'],
    tone: ['fun', 'action-packed', 'warm', 'comedic', 'fast-paced'],
    setting: ['modern-Seoul', 'mongolia-flashbacks', 'neighborhood', 'crime-world'],
    characterTypes: ['super-strong-female-lead', 'comedy-relief-detective', 'equally-strong-grandmother', 'drug-syndicate-villains'],
    streaming: { netflix: true },
    network: 'JTBC',
    actors: [
      { name: 'Lee Yoo-mi', role: 'Gang Nam-soon', isLead: true },
      { name: 'Ong Seong-wu', role: 'Ryu Shi-oh', isLead: true },
      { name: 'Kim Jung-eun', role: 'Gil Joong-gan', isLead: false }
    ],
    matchReasoningHints: [
      "Strong Woman Do Bong-soon fans who want more of the same energy — same premise of a small woman with cartoonish physical strength, same neighborhood crime subplot, same warm found-family structure",
      "Extraordinary Attorney Woo fans of K-dramas that use a protagonist with an unusual trait to ask genuinely warm questions about belonging rather than exploiting the trait for comedy",
      "My Hero Academia fans of the 'person with a power that should make life easy but actually complicates everything' premise treated with more heart than edge",
      "Abbott Elementary fans of workplace comedies that run entirely on character warmth and ensemble chemistry — Strong Woman Nam-soon has the same quality of people who just enjoy being around each other",
      "Lupin fans of crime comedies where the protagonist is more competent than the criminals chasing them and the fun is watching incompetence collide with an opponent who doesn't have that problem"
    ]
  },

  // ─── 6. Lovers of the Red Sky (2021) ─────────────────────────────────────────
  {
    id: 'hong-cheon-gi',
    title: 'Lovers of the Red Sky',
    year: 2021,
    episodes: 16,
    synopsis: "Hong Cheon-gi is the only female royal painter in Joseon, with an unusual talent for capturing color that borders on supernatural. Ha Ram is an astronomer and the crown prince's aide who has been blind since childhood — yet can perceive things ordinary sight cannot. Their paths keep crossing as both become entangled in a conspiracy involving a demon sealed inside a painting that someone powerful wants to release. A fantasy romance that takes its mythology seriously, with Kim Yoo-jung doing some of the finest historical work of her career.",
    genres: ['historical', 'fantasy', 'romance', 'drama'],
    themes: ['fate', 'art', 'forbidden-love', 'perception', 'sacrifice', 'identity'],
    tropes: ['supernatural-powers', 'slow-burn', 'destined-lovers', 'forbidden-romance', 'political-conspiracy'],
    tone: ['atmospheric', 'romantic', 'mysterious', 'beautiful', 'bittersweet'],
    setting: ['historical', 'joseon', 'royal-court', 'supernatural'],
    characterTypes: ['gifted-female-painter', 'blind-visionary-astronomer', 'scheming-prince', 'supernatural-entity'],
    streaming: { viki: true, amazon_prime: true },
    network: 'MBC',
    actors: [
      { name: 'Kim Yoo-jung', role: 'Hong Cheon-gi', isLead: true },
      { name: 'Ahn Hyo-seop', role: 'Ha Ram', isLead: true },
      { name: 'Gong Myung', role: 'Crown Prince Yang Myung', isLead: false }
    ],
    matchReasoningHints: [
      "Alchemy of Souls fans of Korean historical fantasy dramas where the magic system is intrinsic to the plot rather than decorative and the romance develops slowly enough to feel earned",
      "Mr. Queen fans of Joseon-era fantasy dramas with a female lead who occupies an unusual position in society and the humor that comes from navigating it with confidence",
      "The Red Sleeve fans of historical K-dramas that pair genuine period detail with a central romance that has real costs — the lovers here are also caught in forces bigger than their feelings",
      "Shadow Beauty fans of Kim Yoo-jung's range — this is her in full historical mode, a performance that carries an entire production on quiet, consistent conviction",
      "Goblin fans of Korean supernatural romance where the magical premise generates genuine dramatic stakes rather than just visual spectacle — the demon mythology here has consequences"
    ]
  },

  // ─── 7. Alchemy of Souls: Light and Shadow (2022) ────────────────────────────
  {
    id: 'alchemy-of-souls-part2',
    title: 'Alchemy of Souls: Light and Shadow',
    year: 2022,
    episodes: 10,
    synopsis: "The second season of Alchemy of Souls — a direct continuation, not a reboot — follows Jang Uk in the aftermath of a devastating loss. A new woman carries the soul he loved, but in a different body, with no memory of their life together. The show asks whether love is for the person or the soul, and whether Jang Uk can love someone who is and is not the woman he knew. Where Season 1 was an adventure, Season 2 is a grief story — quieter, stranger, and the ending that the Hong sisters built the entire world to deliver.",
    genres: ['fantasy', 'romance', 'historical', 'drama'],
    themes: ['identity', 'soul', 'grief', 'love-and-loss', 'sacrifice', 'destiny'],
    tropes: ['soul-swap', 'memory-loss', 'second-chance-romance', 'star-crossed-lovers', 'tragic-destiny'],
    tone: ['melancholic', 'romantic', 'atmospheric', 'devastating', 'ethereal'],
    setting: ['historical', 'fictional-joseon', 'mages-world', 'magical-realm'],
    characterTypes: ['grieving-mage', 'woman-with-borrowed-soul', 'loyal-allies', 'sinister-elder'],
    streaming: { netflix: true },
    network: 'tvN',
    actors: [
      { name: 'Lee Jae-wook', role: 'Jang Uk', isLead: true },
      { name: 'Go Youn-jung', role: 'Naksu / Jin Bu-yeon', isLead: true },
      { name: 'Hwang Minhyun', role: 'Seo Yul', isLead: false }
    ],
    matchReasoningHints: [
      "Alchemy of Souls Season 1 fans — watch this immediately after. The two seasons are one story and Season 2 is the payoff the Hong Sisters spent 30 episodes building toward",
      "Your Name fans of supernatural romance structured around the question of whether love survives the dissolution of the circumstances that created it — Season 2 asks this the hard way",
      "Lost fans of serialized fantasy where the mythology keeps revealing new layers and the emotional resonance of the final episodes depends on how much the earlier work earned it",
      "The OA fans of surreal, mythology-heavy narratives that are fundamentally grief stories — Alchemy of Souls Part 2 is about a man trying to reach someone who is gone and what that reaching costs him",
      "Goblin fans of K-drama fantasy where the supernatural architecture of the world is designed specifically to create the most painful possible version of a love story"
    ]
  },

  // ─── 8. The Killer's Shopping List (2022) ────────────────────────────────────────────────────────────────
  {
    id: 'the-killers-shopping-list',
    title: "The Killer's Shopping List",
    year: 2022,
    episodes: 12,
    synopsis: "A part-time convenience store worker discovers that a series of neighborhood murders are connected by a pattern visible only to someone who knows what people buy — and Ahn Dae-sung knows exactly what everyone buys. He has been memorizing shopping lists for years. His girlfriend is a detective. His mother is the local gossip who has information about everything. The Killer's Shopping List is a mystery comedy that trusts its comedic setup while still delivering a genuine thriller, with a supporting cast that turns the neighborhood into a fully inhabited world.",
    genres: ['mystery', 'comedy', 'thriller', 'crime'],
    themes: ['observation', 'neighborhood', 'memory', 'unlikely-detective', 'family'],
    tropes: ['amateur-detective', 'couple-investigate-together', 'neighborhood-mystery', 'quirky-ensemble', 'serial-killer'],
    tone: ['comedic', 'charming', 'suspenseful', 'warm', 'light'],
    setting: ['modern-Korea', 'convenience-store', 'neighborhood', 'detective-office'],
    characterTypes: ['photographic-memory-part-timer', 'detective-girlfriend', 'gossipy-mother', 'unassuming-neighbors'],
    streaming: { viki: true },
    network: 'tvN',
    actors: [
      { name: 'Lee Kwang-soo', role: 'Ahn Dae-sung', isLead: true },
      { name: 'Seohyun', role: 'Do-ah', isLead: true },
      { name: 'Kim Seul-gi', role: 'Ma Ae-ri', isLead: false }
    ],
    matchReasoningHints: [
      "Psych fans of detective comedies where the investigative skill comes from an unusual way of perceiving the world rather than formal training, and the comedy comes from the gap between that skill and the hero's general life situation",
      "Extraordinary Attorney Woo fans of K-dramas where the protagonist's unusual cognitive style is both the asset and the personality — shopping list memory turns out to be more forensically useful than a law degree",
      "The Good Place fans of comedies that are brighter and funnier than the plot should allow, where the ensemble carries things that the premise alone couldn't sustain",
      "Inspector Koo fans of mystery K-dramas that lean hard into comedy without losing the thriller structure — the neighborhood setting creates the same texture of everyone being slightly more complicated than they look",
      "Shoplifters fans of films that use ordinary commercial transactions and shopping patterns as a lens for examining the interior lives of people who look unremarkable from the outside"
    ]
  },

  // ─── 9. Eve (2022) ─────────────────────────────────────────────────────────────────────────────────────────
  {
    id: 'eve-kdrama',
    title: 'Eve',
    year: 2022,
    episodes: 16,
    synopsis: "Lee La-el has been preparing for one thing her entire adult life: to destroy the family responsible for her father's death. Her plan is total, patient, and cruel — seduce the heir to the family empire, become his mistress, then engineer a divorce scandal that will collapse the company and everything it built. The K-drama genre calls this 'revenge melodrama' but Eve operates at a higher emotional temperature: the revenge is real, the people it targets are genuinely monstrous, and Seo Ye-ji plays La-el with a focus that makes every scene feel like the one where she finally wins.",
    genres: ['melodrama', 'romance', 'thriller', 'revenge'],
    themes: ['revenge', 'manipulation', 'corruption', 'sacrifice', 'obsession', 'class-divide'],
    tropes: ['revenge-plot', 'seduction', 'chaebol', 'cold-female-lead', 'long-game'],
    tone: ['dark', 'intense', 'seductive', 'dramatic', 'atmospheric'],
    setting: ['modern-Seoul', 'chaebol-world', 'luxury', 'high-society'],
    characterTypes: ['cold-strategic-female-lead', 'conflicted-love-interest', 'monstrous-chaebol-family', 'loyal-allies'],
    streaming: { viki: true, amazon_prime: true },
    network: 'tvN',
    actors: [
      { name: 'Seo Ye-ji', role: 'Lee La-el', isLead: true },
      { name: 'Park Byung-eun', role: 'Han So-ra', isLead: true },
      { name: 'Yoo Sun', role: 'Seo Eun-pyeong', isLead: false }
    ],
    matchReasoningHints: [
      "Revenge (ABC) fans of melodramas structured around a woman who has built her entire adult life around destroying a specific family — La-el is Emily Thorne with a K-drama budget and Seo Ye-ji's precise, glacial focus",
      "Kill Eve fans of narratives centered on a woman of uncommon intelligence doing something completely amoral with complete commitment — Eve is structured around the same kind of fascination with controlled female danger",
      "My Name fans of K-dramas where the female lead's goal is singular, the violence is real, and the romance complicates a plan that was supposed to be without complications",
      "Penthouse fans of K-melodrama that operates at maximum emotional intensity with zero apologies for its genre — Eve is Penthouse with a cleaner throughline and a more controlled central performance",
      "Gone Girl fans of psychological thrillers where the female lead is always three moves ahead of everyone else in the room and the pleasure is watching the plan execute"
    ]
  },

  // ─── 10. Grid (2022) ────────────────────────────────────────────────────────────────────────────────────────
  {
    id: 'grid-kdrama',
    title: 'Grid',
    year: 2022,
    episodes: 10,
    synopsis: "In 1997, a mysterious woman appeared from nowhere and saved Earth from solar flares by installing a device called the Grid. Then she vanished. Twenty-four years later, a detective and a prosecutor from the Bureau of Meteorological Management are simultaneously investigating a new Grid anomaly and tracking a serial murderer who can disappear from crime scenes — and both leads converge on the same impossible person. A Disney+ Korean sci-fi thriller that is genuinely strange and genuinely interested in its own mythology, with a time-travel architecture that holds up to inspection.",
    genres: ['science-fiction', 'thriller', 'mystery', 'crime'],
    themes: ['time-travel', 'sacrifice', 'fate', 'moral-ambiguity', 'survival', 'justice-vs-law'],
    tropes: ['time-travel', 'mystery-savior', 'detective-duo', 'cat-and-mouse', 'impossible-person'],
    tone: ['mysterious', 'tense', 'cerebral', 'cold', 'atmospheric'],
    setting: ['modern-Korea', 'government-bureau', 'alternate-timeline', 'supernatural'],
    characterTypes: ['methodical-detective', 'principled-prosecutor', 'mysterious-savior', 'unpredictable-criminal'],
    streaming: { disney_plus: true },
    network: 'Disney+',
    actors: [
      { name: 'Seo Kang-joon', role: 'Seo Jun-hyeok', isLead: true },
      { name: 'Kim Ah-joong', role: 'Moon Do-hae', isLead: true },
      { name: 'Kim Sung-kyun', role: 'Kim Sae-ha', isLead: false }
    ],
    matchReasoningHints: [
      "Dark (Netflix) fans of time-travel thrillers that take their own mythology seriously enough to make the paradoxes intellectually satisfying rather than hand-wavy — Grid builds its rules carefully and the climax depends on them",
      "Signal fans of Korean crime procedurals that use a supernatural communication mechanism to explore how much the past determines the present — Grid asks the same question from a harder angle",
      "Westworld fans of high-concept sci-fi that is comfortable leaving you confused for several episodes before the structure reveals itself — Grid rewards patience and inference",
      "Minority Report fans of sci-fi procedurals where the investigation structure and the philosophical question about determinism are the same problem",
      "Severance fans of workplace-based sci-fi thrillers where an institutional setting conceals something much stranger — the Bureau of Meteorological Management is one of the more unsettling government buildings in Korean drama"
    ]
  },

  // ─── 11. Legal High (2022) ──────────────────────────────────────────────────────────────────────────────────────
  {
    id: 'legal-high-kdrama',
    title: 'Legal High',
    year: 2022,
    episodes: 12,
    synopsis: "Go Tae-rim has never lost a case. He is also vain, mercenary, constitutionally incapable of sympathy, and the most entertaining person in any room he enters. The Korean remake of the Japanese legal comedy imports the premise — an undefeated defense lawyer who cares only about winning pairs with a young idealist who cares only about justice — and runs it with Jin Goo at full charismatic swagger. The show's thesis is that the legal system is a game and the only honest thing is to admit it, which makes the arguments against that thesis more interesting than the arguments for it.",
    genres: ['legal', 'comedy', 'drama'],
    themes: ['justice-vs-law', 'winning', 'idealism', 'cynicism', 'moral-flexibility', 'truth'],
    tropes: ['undefeated-lawyer', 'odd-couple', 'idealist-meets-cynic', 'courtroom-comedy', 'rivals-to-allies'],
    tone: ['sharp', 'funny', 'fast-paced', 'irreverent', 'satisfying'],
    setting: ['modern-Korea', 'law-firm', 'courtroom', 'urban'],
    characterTypes: ['amoral-genius-lawyer', 'principled-idealist-lawyer', 'parade-of-clients', 'rival-prosecutor'],
    streaming: { viki: true },
    network: 'ENA',
    actors: [
      { name: 'Jin Goo', role: 'Go Tae-rim', isLead: true },
      { name: 'Seo Eun-soo', role: 'Shin Ha-young', isLead: true },
      { name: 'Kim Byung-chul', role: 'Oh Seung-jae', isLead: false }
    ],
    matchReasoningHints: [
      "Suits fans of legal dramas where the protagonist's relationship to winning is more interesting than their relationship to justice — Go Tae-rim is Harvey Specter without the moral window-dressing",
      "The Good Wife fans of legal dramas that take the procedural mechanics seriously while also being interested in what it does to a person to be very good at a morally flexible profession",
      "The Mentalist fans of shows built around a charming, infuriating lead whose competence gives him enough rope to behave badly and whose badness is part of what makes him effective",
      "Better Call Saul fans of legal dramas that treat the law as a system to be gamed rather than a source of moral guidance, and find the honesty in that admission",
      "Legal High (Japanese original) fans who want to see the premise transplanted into a Korean context — the remake keeps the structure and the irreverence and finds Korean-specific material to play with"
    ]
  },

];
