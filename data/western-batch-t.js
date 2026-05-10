/**
 * Western Batch T — High-Value Cross-Cultural Matches
 * 5 titles: Ripley (noir), Friday Night Lights (sports drama),
 *           Shining Girls (time-jump thriller), True Detective: Night Country (arctic noir),
 *           Dark Matter (multiverse sci-fi thriller)
 * Added: 2026-04-12
 * Focus: Strong cross-cultural match reasoning for K-drama fans
 */
module.exports = [

  // ─────────────────────────────────────────
  // SLOW-BURN PSYCHOLOGICAL NOIR
  // ─────────────────────────────────────────
  {
    id: 'ripley-2024',
    title: 'Ripley',
    year: 2024,
    type: 'show',
    genres: ['thriller', 'crime', 'psychological', 'noir', 'drama'],
    themes: ['identity', 'deception', 'ambition', 'art', 'class-envy', 'consequence', 'cold-calculation'],
    tropes: ['con-artist-protagonist', 'slow-burn-tension', 'identity-theft', 'beautiful-settings-dark-deeds', 'unreliable-sociopath', 'aesthetic-noir'],
    tone: ['cold', 'slow-burn', 'atmospheric', 'stylish', 'unsettling', 'methodical'],
    setting: ['1960s', 'italy', 'europe', 'art-world'],
    characterTypes: ['calculating-con-artist', 'oblivious-targets', 'pursuing-detective', 'wealthy-marks'],
    streaming: { netflix: true },
    actors: [
      { name: 'Andrew Scott', role: 'Tom Ripley', isLead: true },
      { name: 'Dakota Fanning', role: 'Marge Sherwood', isLead: false },
      { name: 'Johnny Flynn', role: 'Dickie Greenleaf', isLead: false }
    ],
    matchReasoningHints: [
      "Stranger fans of slow, methodical thrillers where the most dangerous person in the room is always the quietest — Ripley has the same cold intelligence running under every scene, and the same refusal to rush",
      "My Name fans of shows built around a protagonist who inhabits false identities so completely that you begin to question whether a real person exists underneath — Ripley takes that premise to its most aesthetically extreme conclusion",
      "The Penthouse fans of elaborately constructed deceptions where one calculating person pulls strings that tangle everyone around them — Ripley is that premise stripped of melodrama and rendered in gorgeous black and white",
      "Vincenzo fans of anti-heroes who operate by a completely different moral code and are somehow more compelling for it — Ripley has none of Vincenzo's warmth but the same magnetic amorality",
      "Signal fans of shows where the past is always threatening to surface and destroy the carefully constructed present — Ripley spends eight episodes in the specific anxiety of someone outrunning their own shadow"
    ]
  },

  // ─────────────────────────────────────────
  // INSPIRATIONAL SPORTS DRAMA
  // ─────────────────────────────────────────
  {
    id: 'friday-night-lights',
    title: 'Friday Night Lights',
    year: 2006,
    type: 'show',
    genres: ['drama', 'sports', 'family', 'romance'],
    themes: ['community', 'redemption', 'pressure', 'teamwork', 'ambition', 'class', 'sacrifice', 'small-town-dreams'],
    tropes: ['underdog-team', 'inspiring-coach', 'small-town-pride', 'romantic-relationships', 'pressure-to-win', 'growing-up'],
    tone: ['heartwarming', 'emotional', 'inspiring', 'real', 'warm', 'dramatic'],
    setting: ['small-town', 'texas', 'high-school', 'sports'],
    characterTypes: ['humble-coach', 'star-quarterback', 'loyal-wives', 'pressured-teens', 'entire-town-as-character'],
    streaming: { peacock: true, amazon_prime: true },
    actors: [
      { name: 'Kyle Chandler', role: 'Eric Taylor', isLead: true },
      { name: 'Connie Britton', role: 'Tami Taylor', isLead: true },
      { name: 'Taylor Kitsch', role: 'Tim Riggins', isLead: false }
    ],
    matchReasoningHints: [
      "Reply 1988 fans who love ensemble dramas where a neighborhood is the real protagonist — Dillon, Texas has the same fully inhabited community energy, and the relationships across the ensemble accumulate with the same patient warmth",
      "Weightlifting Fairy Kim Bok-joo fans of sports dramas where the competition is secondary to the character arcs and the emotional weight comes from the pressure young people carry — FNL has the same combination in football",
      "Dream High fans of shows where the pressure to achieve intersects with first love, coming-of-age, and an institution that both enables and constrains — the high school as microcosm framework is identical",
      "Hospital Playlist fans of ensemble shows built around a place that becomes a world — if you want that same sense of a community you care about deeply, Friday Night Lights is the Western series that earns it",
      "All American fans who want to see where the 'high school sports as social microcosm' genre started — FNL is the template, set in a small Texas town, and the Kyle Chandler/Connie Britton marriage is genuinely one of TV's best"
    ]
  },

  // ─────────────────────────────────────────
  // TIME-JUMP PSYCHOLOGICAL THRILLER
  // ─────────────────────────────────────────
  {
    id: 'shining-girls',
    title: 'Shining Girls',
    year: 2022,
    type: 'show',
    genres: ['thriller', 'mystery', 'sci-fi', 'psychological', 'drama'],
    themes: ['identity', 'memory', 'survival', 'gaslighting', 'trauma', 'time', 'obsession'],
    tropes: ['unreliable-protagonist', 'time-manipulation', 'serial-killer-hunt', 'shifting-reality', 'female-survivor', 'mystery-unraveling'],
    tone: ['unsettling', 'tense', 'psychological', 'atmospheric', 'slow-burn', 'disturbing'],
    setting: ['1990s', 'chicago', 'shifting-timeline', 'newspaper'],
    characterTypes: ['reality-shifting-survivor', 'time-jumping-killer', 'persistent-investigator', 'unreliable-narrator'],
    streaming: { apple_tv: true },
    actors: [
      { name: 'Elisabeth Moss', role: 'Kirby Mazroski', isLead: true },
      { name: 'Wagner Moura', role: 'Dan Velazquez', isLead: false },
      { name: 'Jamie Bell', role: 'Harper Curtis', isLead: false }
    ],
    matchReasoningHints: [
      "Signal fans: Shining Girls is the Western equivalent — a crime thriller where time is not fixed, the investigation keeps shifting beneath the investigator's feet, and the mechanics are genuinely disorienting in exactly the right way",
      "Tunnel fans who love crime procedurals built around a time anomaly that gives the mystery its specific shape — Shining Girls uses its time mechanic with the same precision and the same payoff",
      "Dark fans who want psychological thriller time-manipulation without the complex family tree — Shining Girls is cleaner, tighter, and centers a female protagonist navigating shifting reality with impressive authority",
      "Reset (C-drama) fans of shows where a character's memory and identity keep changing and the investigation is also a fight for the protagonist's grip on who she is — this is that premise in 1990s Chicago",
      "Mouse fans of crime thrillers where the killer's perspective is granted in a way that makes the horror more disturbing, not less — Shining Girls has the same unsettling dual-narrative structure"
    ]
  },

  // ─────────────────────────────────────────
  // ARCTIC NOIR / FEMALE-LED CRIME THRILLER
  // ─────────────────────────────────────────
  {
    id: 'true-detective-night-country',
    title: 'True Detective: Night Country',
    year: 2024,
    type: 'show',
    genres: ['thriller', 'crime', 'mystery', 'drama', 'horror'],
    themes: ['justice', 'indigenous-rights', 'isolation', 'truth', 'power', 'haunting', 'institutional-failure'],
    tropes: ['female-detective-duo', 'remote-setting', 'cold-case', 'supernatural-adjacent', 'institutional-corruption', 'atmospheric-dread'],
    tone: ['dark', 'atmospheric', 'tense', 'bleak', 'mysterious', 'haunting'],
    setting: ['arctic', 'alaska', 'remote-town', 'polar-night'],
    characterTypes: ['jaded-detective', 'younger-partner', 'indigenous-community', 'corporate-targets'],
    streaming: { max: true },
    actors: [
      { name: 'Jodie Foster', role: 'Liz Danvers', isLead: true },
      { name: 'Kali Reis', role: 'Evangeline Navarro', isLead: true }
    ],
    matchReasoningHints: [
      "Jirisan fans who want the same 'remote landscape as psychological extension of the mystery' energy — the perpetual Arctic night here does the same atmospheric work as the mountain, generating dread from the landscape itself",
      "Stranger fans of female detectives in conflict with their institutions who solve what no one else will — Danvers and Navarro have the same 'we are the only people who will fight for these victims' energy",
      "Signal fans of crime shows where the supernatural seems to be pressing in on the edges of a realistic procedural — Night Country maintains that productive ambiguity across all six episodes",
      "Black fans of shows where the investigation is also the protagonist's reckoning with her own past failures — the mystery of the missing scientists is inseparable from what these two women need to resolve about themselves",
      "Watcher fans of shows with an isolated setting that becomes existentially claustrophobic and a female protagonist whose perception is constantly tested against the reality she's being told to accept"
    ]
  },

  // ─────────────────────────────────────────
  // MULTIVERSE SCI-FI THRILLER
  // ─────────────────────────────────────────
  {
    id: 'dark-matter-apple',
    title: 'Dark Matter',
    year: 2024,
    type: 'show',
    genres: ['sci-fi', 'thriller', 'mystery', 'drama'],
    themes: ['identity', 'love', 'parallel-worlds', 'choices', 'obsession', 'sacrifice', 'family'],
    tropes: ['parallel-universe', 'identity-crisis', 'obsessive-villain', 'wrong-version-of-yourself', 'scientific-horror', 'love-conquers-multiverse'],
    tone: ['tense', 'emotional', 'mind-bending', 'exciting', 'romantic'],
    setting: ['modern', 'chicago', 'multiverse', 'parallel-worlds'],
    characterTypes: ['displaced-physicist', 'obsessed-alternate-self', 'devoted-partner', 'alternate-versions'],
    streaming: { apple_tv: true },
    actors: [
      { name: 'Joel Edgerton', role: 'Jason Dessen', isLead: true },
      { name: 'Jennifer Connelly', role: 'Daniela Dessen', isLead: true },
      { name: 'Alice Braga', role: 'Amanda Lucas', isLead: false }
    ],
    matchReasoningHints: [
      "Signal fans who can't get enough of shows where the mechanics of time/space disruption are both scientifically grounded and deeply emotional — Dark Matter replaces the walkie-talkie with a box that opens parallel worlds and hits just as hard",
      "Black (K-drama, 2017) fans of sci-fi thrillers where an unusual premise generates genuine romantic and existential stakes — the multiverse concept here produces the same 'what version of this person do I actually love?' tension",
      "W: Two Worlds Apart fans of shows that use reality-bending premises to explore identity and romantic obsession — Dark Matter asks the same questions with quantum physics instead of manhwa",
      "Tunnel fans of shows where a man is separated from his life and has to navigate a version of the world that looks like his but has been made wrong — the specific horror of almost-home is identical",
      "Reset (C-drama) fans of thriller sci-fi where parallel-world logic drives investigation and the personal stakes are inextricably linked to the mechanics — Dark Matter delivers the same tightly plotted reality-puzzle with higher production values"
    ]
  }

];
