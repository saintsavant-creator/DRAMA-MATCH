/**
 * Western Movies Batch 3 — 2026 Catalog Expansion
 * 5 titles: time-loop romance, boarding school drama, political rom-com, literary satire, psychological drama
 * Added: 2026-04-15
 */
module.exports = [

  // ── TIME-LOOP ROM-COM ─────────────────────────────────────────────────────────

  {
    id: 'palm-springs',
    title: 'Palm Springs',
    year: 2020,
    runtime: 90,
    synopsis: 'Nyles is trapped in a Groundhog Day time loop at a wedding in Palm Springs — a situation he has long since accepted into numb passivity. When Sarah accidentally follows him into the loop, they are stuck with each other for what feels like eternity. The funniest and most philosophically interesting time-loop comedy in years, built on the premise that it takes finding someone to make even infinite time worth living.',
    genres: ['romance', 'comedy', 'sci-fi'],
    themes: ['existentialism', 'meaning', 'love', 'time-loop', 'second-chance', 'acceptance', 'finding-purpose'],
    tropes: ['time-loop', 'forced-proximity', 'nihilistic-male-lead', 'unexpected-companion', 'philosophical-comedy'],
    tone: ['comedic', 'philosophical', 'romantic', 'fun', 'thoughtful'],
    setting: ['palm-springs-desert', 'wedding', 'modern'],
    characterTypes: ['nihilistic-looper', 'angry-new-looper', 'carefree-acceptance', 'trapped-together'],
    streaming: { hulu: true, amazon_prime: true },
    actors: [
      { name: 'Andy Samberg', role: 'Nyles', isLead: true },
      { name: 'Cristin Milioti', role: 'Sarah', isLead: true }
    ],
    matchReasoningHints: [
      'About Time fans of romantically intelligent time-mechanics films that use their sci-fi premise to ask a genuinely interesting question about love and meaning — Palm Springs is more acidic and less sentimental but reaches the same destination',
      'A Time Called You fans of Korean time-loop romance where being trapped in repeated time is explored both for its comedy and its deeper implications about what makes life worth repeating',
      'My Love from the Star fans of romance where an extraordinary circumstance — an alien, a time loop — forces two people to be honest with each other in ways they would never choose freely',
      'Run On fans of K-dramas about two people who both seem to not need other people and discover, gradually, that they do — the time loop is the device that creates the forced honesty that Run On builds through character',
      'Russian Doll fans of time-loop narratives that use the mechanism as a vehicle for genuine psychological and philosophical excavation — Palm Springs is lighter but equally interested in why Nyles stopped caring about being trapped'
    ]
  },

  // ── BOARDING SCHOOL DRAMA ─────────────────────────────────────────────────────

  {
    id: 'the-holdovers',
    title: 'The Holdovers',
    year: 2023,
    runtime: 133,
    synopsis: 'Christmas break at a New England prep school, 1970. A curmudgeonly classics teacher is stuck supervising the boys who have nowhere to go home to — including a wealthy, difficult student who is hiding a devastating secret. What develops between them, mediated by the school\'s grieving head cook, is one of the most humane portrait-of-unlikely-friendship films in years. Paul Giamatti gives the performance of his career.',
    genres: ['drama', 'comedy', 'coming-of-age'],
    themes: ['unlikely-friendship', 'grief', 'social-class', 'isolation', 'coming-of-age', 'mentorship', 'belonging'],
    tropes: ['unlikely-mentor', 'trapped-together', 'prep-school', 'found-family', 'class-resentment'],
    tone: ['heartwarming', 'comedic', 'melancholic', 'humane', 'character-driven'],
    setting: ['1970s-new-england', 'boarding-school', 'winter', 'isolated'],
    characterTypes: ['curmudgeon-teacher', 'troubled-student', 'grieving-cook', 'found-family-trio'],
    streaming: { peacock: true, amazon_prime: true },
    actors: [
      { name: 'Paul Giamatti', role: 'Mr. Hunham', isLead: true },
      { name: 'Dominic Sessa', role: 'Angus Tully', isLead: true },
      { name: 'Da\'Vine Joy Randolph', role: 'Mary Lamb', isLead: false }
    ],
    matchReasoningHints: [
      'Dead Poets Society fans of prep school drama about the relationship between an unconventional teacher and students who are being destroyed by institutional expectations — The Holdovers takes the same setting and refuses the inspirational-teacher framing, which makes it more honest',
      'My Mister fans of Korean drama where an unlikely protective relationship between two damaged people in an institution that is failing them becomes the most honest relationship either of them has — the teacher-student dynamic here has the same quality of grudging mutual recognition',
      'Navillera fans of K-dramas about mentorship between people from very different life stages who both need something the other has without quite being able to ask for it',
      'Move to Heaven fans of dramas built around found family in grief — the cook\'s loss runs parallel to both Hunham\'s and Tully\'s in a way that makes the trio\'s Thanksgiving table one of the most emotionally loaded scenes in recent film',
      'Schitt\'s Creek fans of character-driven comedy-drama about three people who did not choose to be stuck with each other and discover that the unchosen proximity was actually what they needed'
    ]
  },

  // ── POLITICAL ROM-COM ─────────────────────────────────────────────────────────

  {
    id: 'long-shot',
    title: 'Long Shot',
    year: 2019,
    runtime: 125,
    synopsis: 'The U.S. Secretary of State — competent, polished, running for president — hires her childhood crush as a speechwriter. He is a scruffy journalist who just quit over journalistic ethics. She is rigidly composed. What follows is an unexpectedly sharp rom-com that treats female political ambition seriously while being genuinely funny about what it costs.',
    genres: ['romance', 'comedy', 'political'],
    themes: ['female-ambition', 'class-mismatch', 'political-compromise', 'media', 'love-and-career'],
    tropes: ['opposites-attract', 'childhood-crush-reunion', 'class-mismatch', 'political-backdrop', 'role-reversal'],
    tone: ['comedic', 'romantic', 'political', 'sharp', 'fun'],
    setting: ['washington-dc', 'modern', 'political', 'global'],
    characterTypes: ['powerful-female-politician', 'scruffy-journalist', 'childhood-friends', 'professional-team'],
    streaming: { hulu: true, peacock: true },
    actors: [
      { name: 'Charlize Theron', role: 'Charlotte Field', isLead: true },
      { name: 'Seth Rogen', role: 'Fred Flarsky', isLead: true }
    ],
    matchReasoningHints: [
      'Crash Course in Romance fans of K-dramas where a professional woman at the top of her field meets a chaotic but genuine man who refuses to pretend her competence is threatening — Long Shot runs exactly this dynamic in a political setting',
      'Secretary Kim fans of Korean romantic comedies about competent professional women navigating relationships with men who are simultaneously less polished and more emotionally available than their public-facing identity suggests',
      'The Diplomat fans of shows about women doing serious political work who also have romantic lives that the show takes seriously as a second track rather than reducing the politics to backdrop',
      'One the Woman fans of Korean dramedies about powerful women and their complicated relationships with men who find their power either attractive or threatening — Long Shot plays these dynamics for comedy but the stakes are real',
      'Forecasting Love and Weather fans of romantic comedies where the female professional\'s career is the emotional backbone and the romance is the variable being tested against it rather than the other way around'
    ]
  },

  // ── LITERARY SATIRE ───────────────────────────────────────────────────────────

  {
    id: 'american-fiction',
    title: 'American Fiction',
    year: 2023,
    runtime: 117,
    synopsis: 'A Black novelist who hates how Black stories are marketed to white audiences writes a deliberately terrible "hood" novel under a pseudonym — and it becomes a massive bestseller. A razor-sharp satire about publishing, race, performance, and what it means to make art within a market that has already decided what you are allowed to say. Jeffrey Wright has never been better.',
    genres: ['comedy', 'drama', 'satire'],
    themes: ['racial-identity', 'artistic-integrity', 'publishing', 'family', 'satire', 'performance-of-blackness'],
    tropes: ['literary-satire', 'pseudonym-bestseller', 'art-vs-commerce', 'family-drama', 'racial-commentary'],
    tone: ['darkly-comedic', 'satirical', 'sharp', 'emotional', 'intelligent'],
    setting: ['modern-boston', 'publishing-world', 'academic', 'family-home'],
    characterTypes: ['uncompromising-artist', 'commercial-publishing', 'complicated-family', 'satirist-hero'],
    streaming: { amazon_prime: true },
    actors: [
      { name: 'Jeffrey Wright', role: 'Monk Ellison', isLead: true },
      { name: 'Tracee Ellis Ross', role: 'Lisa Ellison', isLead: false },
      { name: 'Erika Alexander', role: 'Coraline', isLead: false }
    ],
    matchReasoningHints: [
      'On the Verge of Insanity fans of Korean workplace satire about someone whose professional integrity puts them at constant war with the institutional incentives that demand they compromise it — Monk\'s battle with the publishing market has the same bitter comedy',
      'Misaeng fans of Korean dramas about talented people trapped inside systems that reward the wrong things and the specific psychology of someone who knows the game is rigged but has to play it anyway',
      'Triangle of Sadness fans of comedic films that use class satire to illuminate something uncomfortable about how markets determine what gets valued — American Fiction does for the literary publishing world what Triangle of Sadness does for luxury tourism',
      'The Glory fans of narratives about someone who builds a perfectly calibrated revenge against a system that has wronged them — the novel-as-revenge here has the same precision and dark satisfaction as Dong-eun\'s school bullying payback',
      'Parasite fans of satirical comedy-drama about how class determines which stories get told and who gets to tell them — American Fiction is the publishing-world version of that analysis'
    ]
  },

  // ── PSYCHOLOGICAL DRAMA ───────────────────────────────────────────────────────

  {
    id: 'may-december',
    title: 'May December',
    year: 2023,
    runtime: 117,
    synopsis: 'An actress preparing to play a woman who had an affair with a thirteen-year-old boy — and then married him — visits the now-grown-up couple to research the role. A Todd Haynes film that uses the actress\'s research process as a way to excavate the ongoing psychological damage of the relationship while everyone maintains the fiction that the story has a normal ending.',
    genres: ['drama', 'psychological', 'comedy', 'thriller'],
    themes: ['predatory-relationships', 'performance', 'identity', 'trauma', 'media-representation', 'truth-vs-fiction'],
    tropes: ['actress-researching-real-person', 'examination-of-trauma', 'suburban-secrets', 'layered-identity'],
    tone: ['psychological', 'darkly-comedic', 'unsettling', 'sophisticated', 'layered'],
    setting: ['modern-savannah', 'suburban', 'contemporary'],
    characterTypes: ['method-actress', 'traumatized-man', 'predatory-wife', 'complicated-truth'],
    streaming: { netflix: true },
    actors: [
      { name: 'Natalie Portman', role: 'Elizabeth Berry', isLead: true },
      { name: 'Julianne Moore', role: 'Gracie Atherton-Yoo', isLead: true },
      { name: 'Charles Melton', role: 'Joe Yoo', isLead: false }
    ],
    matchReasoningHints: [
      'Mask Girl fans of psychological K-dramas about performance, identity, and the way media attention shapes and distorts a real story — May December is about what happens when someone\'s life becomes a narrative that other people own',
      'Mother fans of K-dramas that examine the psychology of predatory relationships and the long aftermath of a harm that everyone around the victim refuses to name correctly — May December takes the same quiet rage to a different subject',
      'The Handmaiden fans of films where performance and reality blur and the question of who is manipulating whom is genuinely uncertain to the end — Todd Haynes and Park Chan-wook share an interest in feminine performance as a survival strategy',
      'Big Little Lies fans of prestige drama about women whose glamorous surfaces contain damage they have organized their entire lives around not examining — May December excavates that same structure in a more clinical register',
      'Behind Her Eyes fans of psychologically twisty narratives where you are never entirely sure which character is the most dangerous — the actress/subject dynamic here generates the same productive uncertainty'
    ]
  }

];
