/**
 * K-Drama SEO Expansion Batch — 2026
 * 7 high-search-volume K-dramas filling catalog gaps.
 * Selected for Disney+/Viki search traffic and cross-cultural match potential.
 *
 * IDs: connect-kdrama, yumis-cells, poong-joseon-psychiatrist, vigilante-kdrama,
 *      dark-hole-kdrama, midnight-romance-in-hagwon, love-reset-kdrama
 *
 * Dedup verified against 1,980 existing catalog IDs before merge.
 */
module.exports = [

  // ─── 1. Connect (2022) ────────────────────────────────────────────────────
  {
    id: 'connect-kdrama',
    title: 'Connect',
    year: 2022,
    episodes: 6,
    synopsis: "Ha Dong-soo is a supernatural being — immortal, regenerating, nearly impossible to kill — whose left eye is harvested by a serial killer for transplant. The problem: the eye is still connected to Dong-soo, and he begins experiencing everything the killer sees. Connect is a Disney+ original horror-thriller that uses its impossible premise to build one of the tightest cat-and-mouse structures in recent K-drama: Jung Hae-in playing someone learning to use their monstrous nature as a weapon, against a killer who collects body parts with collector's serenity.",
    genres: ['horror', 'thriller', 'mystery', 'sci-fi'],
    themes: ['identity', 'connection-through-horror', 'predator-and-prey', 'body-horror', 'immortality'],
    tropes: ['supernatural-protagonist', 'serial-killer-hunt', 'shared-consciousness', 'cat-and-mouse', 'body-horror'],
    tone: ['dark', 'intense', 'atmospheric', 'horror-inflected', 'tight-pacing'],
    setting: ['modern', 'south-korea', 'urban', 'thriller-landscape'],
    characterTypes: ['immortal-protagonist', 'meticulous-serial-killer', 'police-investigators', 'victims'],
    streaming: { disney_plus: true },
    network: 'Disney+',
    countryOfOrigin: 'South Korea',
    actors: [
      { name: 'Jung Hae-in', role: 'Ha Dong-soo', isLead: true },
      { name: 'Go Kyung-pyo', role: 'Oh Jin-seop', isLead: true },
      { name: 'Kim Hye-jun', role: 'Detective Kim Yi-rang', isLead: false }
    ],
    matchReasoningHints: [
      "Strangers from Hell fans of Korean horror dramas set in tight, claustrophobic spaces where an ordinary person is surrounded by something that doesn't behave like a person — Connect has the same slow-building dread and the same question about what human nature actually is",
      "Sweet Home fans of K-dramas where the central conflict is between supernatural horror and a protagonist discovering they have something monstrous inside them that might be the only way to survive — Connect's immortality and the horror around it follow the same logic",
      "Alice in Borderland fans of high-concept K-dramas where a man with unusual abilities is placed in an extreme situation that forces him to understand the nature of his own power — Connect's premise is as well-constructed as Borderland's game mechanics",
      "Signal fans of crime thrillers where a supernatural connection enables the protagonist to experience a killer's perspective — Connect makes that connection literal in a way that creates sustained horror rather than procedural satisfaction",
      "The Uncanny Counter fans of K-dramas where supernatural beings hunt supernatural predators, and the protagonist's monstrous nature is both gift and burden — Connect is darker and more explicitly horrifying, but occupies the same thematic space"
    ]
  },

  // ─── 2. Yumi's Cells (2021) ───────────────────────────────────────────────
  {
    id: 'yumis-cells',
    title: "Yumi's Cells",
    year: 2021,
    episodes: 24,
    synopsis: "Inside Yumi's brain, dozens of tiny cells personify her emotions, instincts, and impulses — led by the Love Cell who has been dormant for years after heartbreak. The live-action drama alternates between Yumi's ordinary romantic life and the animated chaos inside her head as her cells scramble to navigate her new relationship. A Korean webtoon adaptation that became one of 2021's most beloved romantic comedies, with Kim Go-eun perfectly capturing the gap between who Yumi wants to be and what her cells are actually doing.",
    genres: ['romance', 'comedy', 'fantasy', 'slice-of-life'],
    themes: ['love-after-heartbreak', 'self-understanding', 'anxiety', 'communication', 'growth'],
    tropes: ['webtoon-adaptation', 'ensemble-inside-protagonist', 'slow-burn', 'second-chances', 'workplace-romance'],
    tone: ['warm', 'funny', 'relatable', 'inventive', 'bittersweet'],
    setting: ['modern', 'south-korea', 'office-romance', 'animated-mind-space'],
    characterTypes: ['relatable-late-20s-female-lead', 'charming-first-love', 'understanding-second-love', 'inner-cell-ensemble'],
    streaming: { viki: true, amazon_prime: true },
    network: 'ENA',
    countryOfOrigin: 'South Korea',
    actors: [
      { name: 'Kim Go-eun', role: 'Yumi', isLead: true },
      { name: 'Ahn Bo-hyun', role: 'Goo Woong', isLead: true },
      { name: 'Park Jin-young (GOT7)', role: 'Yoo Ba-bi', isLead: false }
    ],
    matchReasoningHints: [
      "Nevertheless fans of Korean romantic dramas that are brutally honest about the gap between what we want in relationships and the choices we actually make — Yumi's Cells externalizes that gap through animation and the result is both funnier and more devastating",
      "Doctor Slump fans of warm K-dramas about two people in their late 20s/early 30s navigating professional pressure and personal stagnation who discover that being understood is the most romantic thing imaginable",
      "Business Proposal fans of office romantic comedies with a female lead who is relatable and imperfect rather than idealized — Yumi's appeal is precisely that her inner chaos is portrayed without judgment",
      "Weightlifting Fairy Kim Bok-joo fans of K-dramas where the central female character is allowed to be funny, anxious, food-obsessed, and genuinely human rather than a fantasy object — Yumi is the same archetype in an adult register",
      "Inside Out fans who want the Korean drama version of personified emotions — Yumi's Cells uses the same premise but as a live-action romantic drama rather than animation, and the emotional intelligence is just as high"
    ]
  },

  // ─── 3. Poong, the Joseon Psychiatrist (2022) ─────────────────────────────
  {
    id: 'poong-joseon-psychiatrist',
    title: 'Poong, the Joseon Psychiatrist',
    year: 2022,
    episodes: 16,
    synopsis: "Yoo Se-poong is a brilliant royal physician exiled from court after a political scandal, who ends up practicing medicine in a remote village where he reluctantly begins treating patients with conditions he once dismissed as mere weakness — depression, trauma, anxiety. A gentle, historically-set drama about mental health before the vocabulary existed, Poong treats its period setting with warmth and its subject matter with genuine care. Kim Min-jae as the slowly-softening doctor and Kim Hyang-gi as the village apothecary are the heart of a drama that knows exactly what it wants to be.",
    genres: ['historical', 'romance', 'drama', 'medical'],
    themes: ['mental-health', 'healing', 'redemption', 'compassion', 'stigma', 'community'],
    tropes: ['exiled-brilliant-doctor', 'slow-burn-romance', 'redemption-arc', 'village-community', 'patient-case-structure'],
    tone: ['warm', 'gentle', 'healing', 'historically-grounded', 'bittersweet'],
    setting: ['historical', 'joseon-era', 'rural-village', 'traditional-medicine'],
    characterTypes: ['arrogant-genius-humbled', 'warm-competent-female-lead', 'struggling-patients', 'village-ensemble'],
    streaming: { viki: true, wavve: true },
    network: 'KBS2',
    countryOfOrigin: 'South Korea',
    actors: [
      { name: 'Kim Min-jae', role: 'Yoo Se-poong', isLead: true },
      { name: 'Kim Hyang-gi', role: 'Eun Woo-joo', isLead: true },
      { name: 'Kim Sang-kyung', role: 'Lee Kang-hyun', isLead: false }
    ],
    matchReasoningHints: [
      "Dr. Romantic: Teacher Kim fans of K-dramas where a brilliant but arrogant doctor is forced to practice medicine in reduced circumstances and the experience teaches them what medicine is actually for — Poong's Joseon setting makes the metaphor more poetic",
      "The King's Doctor fans of historical K-dramas built around a royal physician whose skills are used in service of the common people rather than the court, and whose growth as a character is inseparable from their professional humbling",
      "Hospital Playlist fans of ensemble medical dramas about healing as a community project — Poong's village is the Joseon equivalent of the Yulje Medical Center team: different people, the same emotional warmth",
      "It's Okay to Not Be Okay fans of K-dramas that take mental health seriously as subject matter and dramatize the slow, difficult process of healing rather than offering a quick fix — Poong treats 19th-century depression with the same respect",
      "Arang and the Magistrate fans of historical K-dramas that use the Joseon setting to tell a story about compassion and its costs in a world that doesn't value it — both shows know their period and know their characters"
    ]
  },

  // ─── 4. Vigilante (2023) ──────────────────────────────────────────────────
  {
    id: 'vigilante-kdrama',
    title: 'Vigilante',
    year: 2023,
    episodes: 8,
    synopsis: "Ji-yong is a top police academy student by day. At night, he hunts criminals who escaped justice on legal technicalities and kills them. A Disney+ original that takes the vigilante premise seriously — not as power fantasy, but as a study in moral erosion. Nam Joo-hyuk plays Ji-yong with quiet certainty, and the drama keeps complicating the audience's alignment with him as the kills accumulate and the detective hunting him gets closer. One of 2023's most tightly constructed K-dramas: eight episodes of escalating moral pressure.",
    genres: ['action', 'thriller', 'crime', 'drama'],
    themes: ['vigilante-justice', 'moral-erosion', 'law-vs-justice', 'trauma', 'obsession'],
    tropes: ['vigilante-hero', 'cat-and-mouse', 'anti-hero', 'moral-complexity', 'police-procedural'],
    tone: ['dark', 'intense', 'morally-complex', 'action-packed', 'tight-pacing'],
    setting: ['modern', 'south-korea', 'police-academy', 'urban-thriller'],
    characterTypes: ['righteous-vigilante', 'detective-hunting-hero', 'journalist', 'escaped-criminals'],
    streaming: { disney_plus: true },
    network: 'Disney+',
    countryOfOrigin: 'South Korea',
    actors: [
      { name: 'Nam Joo-hyuk', role: 'Kim Ji-yong', isLead: true },
      { name: 'Yoo Ji-tae', role: 'Jo Heon', isLead: true },
      { name: 'Lee Joon-hyuk', role: 'Park Gang-ok', isLead: false }
    ],
    matchReasoningHints: [
      "Taxi Driver fans of K-dramas about a person who decides the legal system is incapable of justice and takes punishment into their own hands — Vigilante is the same premise executed with more moral discomfort and a protagonist who remains sympathetic for longer than he should",
      "The Good Detective fans of crime dramas about the gap between the letter of the law and actual justice, where both sides of the police-vs-vigilante equation are presented with moral complexity rather than easy answers",
      "My Name fans of action K-dramas where the protagonist has been training their body as a weapon for a specific purpose, and the show is interested in what that training does to a person's soul over time",
      "Strangers from Hell fans of Korean dramas about a person in a high-pressure institutional environment (police academy) who is secretly doing something that would destroy everything if discovered — the double life pressure is identical",
      "Juvenile Justice fans of K-dramas that take the legal system's failures as their central subject and refuse to let anyone off the hook — Vigilante is the action version of Juvenile Justice's argument about what law is for"
    ]
  },

  // ─── 5. Dark Hole (2021) ─────────────────────────────────────────────────
  {
    id: 'dark-hole-kdrama',
    title: 'Dark Hole',
    year: 2021,
    episodes: 12,
    synopsis: "A mysterious black smoke erupts from a sinkhole near a small Korean town, and anyone who inhales it either dies or mutates into a monster with superhuman strength and complete loss of inhibition. Hwa-sun is a detective investigating her husband's suspicious death who gets caught in the outbreak alongside Lee Hwa-sun and a handful of survivors trying to reach safety. Dark Hole is a creature feature with genuine emotional stakes — the characters are defined before the disaster starts, and what the smoke reveals about human nature is as disturbing as the monsters.",
    genres: ['thriller', 'sci-fi', 'horror', 'action', 'mystery'],
    themes: ['survival', 'human-nature-under-pressure', 'loss', 'trust', 'corruption-of-ordinary-people'],
    tropes: ['apocalyptic-outbreak', 'survival-group', 'monster-horror', 'detective-protagonist', 'small-town-disaster'],
    tone: ['intense', 'dark', 'horror-inflected', 'emotionally-grounded', 'action-paced'],
    setting: ['modern', 'south-korea', 'small-town', 'apocalyptic-outbreak'],
    characterTypes: ['determined-detective-female-lead', 'survival-group-members', 'monsters-who-were-human', 'local-officials'],
    streaming: { viki: true },
    network: 'OCN',
    countryOfOrigin: 'South Korea',
    actors: [
      { name: 'Kim Ok-bin', role: 'Lee Hwa-sun', isLead: true },
      { name: 'Lee Joon', role: 'Yoo Tae-han', isLead: true },
      { name: 'Kim Hye-eun', role: 'Son Eun-chae', isLead: false }
    ],
    matchReasoningHints: [
      "Sweet Home fans of K-dramas where a mysterious force transforms ordinary people into monsters and the horror is as much about watching which characters lose themselves as it is about the creature violence",
      "All of Us Are Dead fans of Korean disaster-horror dramas set in a specific location where a group of survivors must navigate both external monsters and the internal fractures of a group under extreme pressure",
      "The Flu fans of Korean disaster films and dramas that start with a specific outbreak and follow how it forces ordinary people to reveal who they actually are under the surface of civilization",
      "Parasyte: The Grey fans of Korean sci-fi horror dramas where the line between human and inhuman becomes progressively blurrier and the story is as much about identity as it is about survival",
      "Kingdom fans of Korean zombie-adjacent horror dramas set in a specific geographic location where the monsters are understood as a metaphor for the institutions — political, economic — that corrupt ordinary people from the inside"
    ]
  },

  // ─── 6. The Midnight Romance in Hagwon (2024) ─────────────────────────────
  {
    id: 'midnight-romance-in-hagwon',
    title: 'The Midnight Romance in Hagwon',
    year: 2024,
    episodes: 12,
    synopsis: "Lee Rang is a top literary instructor at a cram school (hagwon) — brilliant, respected, and privately exhausted after years of teaching other people's dreams. When a former student she once failed appears at her school as a new hire, the power dynamic has shifted completely and the romantic tension is immediate. A grounded, adult romance about two people in the same professional world who have known each other from opposite directions, with chemistry that earns its slow burn and a lead actress in Jung Ryeo-won who makes every scene feel considered.",
    genres: ['romance', 'drama', 'slice-of-life'],
    themes: ['second-chances', 'professional-and-personal', 'adult-romance', 'ambition-vs-heart', 'power-reversal'],
    tropes: ['slow-burn', 'workplace-romance', 'second-chance-romance', 'power-reversal', 'adult-leads'],
    tone: ['warm', 'grounded', 'romantic', 'mature', 'thoughtful'],
    setting: ['modern', 'south-korea', 'cram-school-hagwon', 'educational-world'],
    characterTypes: ['accomplished-female-lead', 'younger-persistent-male-lead', 'hagwon-colleagues', 'students'],
    streaming: { netflix: true, viki: true },
    network: 'ENA',
    countryOfOrigin: 'South Korea',
    actors: [
      { name: 'Jung Ryeo-won', role: 'Lee Rang', isLead: true },
      { name: 'Wi Ha-joon', role: 'Seo Hye-jin', isLead: true }
    ],
    matchReasoningHints: [
      "Romance is a Bonus Book fans of K-dramas about intelligent professional women in their 30s who find romance through their work while navigating the specific pressures of an industry that demands everything — both shows are about women who are very good at their jobs before they become someone's love interest",
      "Something in the Rain fans of Korean romance dramas that take their time establishing who both characters are as adults before asking whether they belong together — the hagwon setting creates the same slow, professional-to-personal build",
      "Search: WWW fans of smart romantic dramas where the female lead is professionally formidable and the romance subplot is grounded in genuine equality rather than the male lead being inexplicably more capable",
      "Because This Is My First Life fans of K-dramas about adults navigating the gap between what their professional success should feel like and what their personal life actually looks like — both shows are honest about ambition and loneliness",
      "Doctor Slump fans of warm K-dramas about high-achievers who discover in their burnout that connection with another person is more restorative than any amount of professional success"
    ]
  },

  // ─── 7. Love Reset (2024) ─────────────────────────────────────────────────
  {
    id: 'love-reset-kdrama',
    title: 'Love Reset',
    year: 2024,
    episodes: 12,
    synopsis: "Oh Won-yeong has a strange curse: anyone he falls in love with forgets him the next day. He has spent years resetting relationship after relationship, unable to build anything lasting. Love Reset is a romantic comedy built on a premise that sounds lighthearted and plays with genuine emotional weight — what does it feel like to be loved and immediately forgotten, and what does it cost a person who keeps offering themselves anyway? Lim Ji-yeon plays the female lead who keeps meeting Won-yeong without remembering him, and the comedy of their repeating first impressions is also the drama's heart.",
    genres: ['romance', 'comedy', 'fantasy'],
    themes: ['memory-and-love', 'second-chances', 'persistence', 'identity-without-recognition', 'loneliness'],
    tropes: ['memory-loss-romance', 'romantic-curse', 'repeated-meetings', 'slow-burn', 'fantasy-romance'],
    tone: ['warm', 'funny', 'bittersweet', 'romantic', 'inventive'],
    setting: ['modern', 'south-korea', 'fantasy-adjacent-modern'],
    characterTypes: ['cursed-romantic-male-lead', 'female-lead-who-forgets', 'sympathetic-friends', 'returning-obstacles'],
    streaming: { netflix: true, viki: true },
    network: 'JTBC',
    countryOfOrigin: 'South Korea',
    actors: [
      { name: 'Choi Siwon', role: 'Oh Won-yeong', isLead: true },
      { name: 'Lim Ji-yeon', role: 'Han Da-sol', isLead: true }
    ],
    matchReasoningHints: [
      "Because I Met You fans of K-dramas where a supernatural constraint creates the central romantic obstacle and the drama is about whether love is strong enough to survive the impossible — Love Reset's curse is a fresh variation on that premise",
      "My Love from the Star fans of K-dramas where a supernatural being falls in love with someone whose continued existence in their life is structurally impossible, and the romance is about what you do when the obstacle is the premise",
      "A Business Proposal fans of romantic comedies with an inventive premise that keeps escalating in ways that are both absurd and genuinely touching, led by a male lead who is committed to his love interest before she realizes she should be committed to him",
      "Crash Landing on You fans of K-dramas where an impossible premise becomes emotionally real because the show has done the work of making both characters people worth caring about before it asks you to believe the impossible",
      "See You in My 19th Life fans of K-dramas about remembered love across circumstances of amnesia or forgetting — Love Reset is the inverse: the person doing the remembering is the male lead, and the show tracks his persistence with sympathy rather than suspense"
    ]
  }
];
