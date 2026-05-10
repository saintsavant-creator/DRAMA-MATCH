/**
 * DramaMatch Western Shows Catalog — Batch AA
 *
 * 5 titles: Beef, The White Lotus, From Scratch,
 *           You, One Day
 *
 * Added: 2026-04-15
 */

module.exports = [

  {
    id: "beef-netflix",
    title: "Beef",
    year: 2023,
    episodes: 10,
    synopsis: "Danny Cho and Amy Lau are strangers who engage in a road rage incident in a Los Angeles parking lot. What follows is a sustained, escalating campaign of mutual destruction: two people who've been holding a particular kind of pressure for their entire lives finding the one person they can completely, freely rage at. A dark comedy about class, family expectations, and the specific shape of the American immigrant experience — delivered through increasingly unhinged acts of petty revenge.",
    genres: ["dark-comedy", "drama", "thriller"],
    themes: ["rage", "class", "family-expectations", "Asian-American-identity", "mental-health", "obsession"],
    tropes: ["enemies-locked-together", "spiral", "dark-comedy-escalation", "road-rage", "mutual-destruction"],
    tone: ["dark", "comedic", "intense", "cathartic", "unhinged"],
    setting: ["modern", "los-angeles", "suburban"],
    characterTypes: ["frustrated-contractor", "successful-entrepreneur", "two-people-finding-each-other"],
    streaming: { netflix: true },
    network: "Netflix",
    actors: [
      { name: "Steven Yeun", role: "Danny Cho", isLead: true },
      { name: "Ali Wong", role: "Amy Lau", isLead: true }
    ],
    matchReasoningHints: [
      "My Mister fans of Korean dramas that take the specific exhaustion of holding everything together for everyone else and let it collapse into something honest — Beef is what happens when two people who've been doing that finally find someone to direct it at",
      "The Devil Judge fans of K-dramas built on an escalating dynamic between two people who are destroying each other and cannot stop — Beef is that as dark comedy, in ten episodes",
      "It's Okay to Not Be Okay fans of Korean shows that take the full weight of mental health and family trauma seriously without reducing it to a neat resolution — Beef doesn't give you easy catharsis and means it",
      "Move to Heaven fans of shows that use individual characters as windows into specific immigrant/first-generation family experiences — Beef is built entirely on the textures of the Korean-American experience in ways that feel specific rather than representative",
      "Squid Game fans who noticed that the show was fundamentally about economic desperation and wanted something that keeps that theme but sets it inside ordinary American small-business capitalism instead"
    ]
  },

  {
    id: "the-white-lotus",
    title: "The White Lotus",
    year: 2021,
    episodes: 12,
    synopsis: "Guests and staff at a luxury Hawaiian and later Sicilian resort over two anthology seasons: wealthy vacationers who cannot help revealing themselves under the pressure of leisure and money and proximity to people whose job it is to be invisible. A dark satire of privilege that is simultaneously funny, uncomfortable, and occasionally genuinely touching — built around ensemble casts who are all, in different ways, having the worst vacation of their lives.",
    genres: ["dark-comedy", "drama", "satire", "mystery"],
    themes: ["class", "privilege", "desire", "mortality", "power", "self-deception"],
    tropes: ["ensemble-cast", "dark-satire", "vacation-setting", "murder-mystery", "class-collision"],
    tone: ["darkly-comedic", "satirical", "tense", "addictive", "uncomfortable"],
    setting: ["hawaii", "sicily", "luxury-resort"],
    characterTypes: ["oblivious-wealthy-guests", "service-worker-observers", "privilege-as-pathology-ensemble"],
    streaming: { max: true },
    network: "HBO",
    actors: [
      { name: "Jennifer Coolidge", role: "Tanya McQuoid", isLead: true },
      { name: "Murray Bartlett", role: "Armond", isLead: true },
      { name: "Natasha Rothwell", role: "Belinda", isLead: false }
    ],
    matchReasoningHints: [
      "SKY Castle fans of Korean dramas that treat upper-class status anxiety and self-deception as their entire subject — The White Lotus is the American version of that premise, with more poolside time and less study room surveillance",
      "Penthouse fans of shows built on the premise that wealthy people, under sufficient pressure, reveal something much worse than their curated exteriors — The White Lotus delivers this in compressed vacation format",
      "Fleabag fans of shows that are simultaneously very funny and genuinely disturbing about the human capacity for self-delusion — both shows use their comedic surface as a delivery mechanism for something more devastating",
      "Vincenzo fans of shows with aesthetically beautiful surfaces containing genuinely dark material — The White Lotus makes paradise look like a trap and the editing makes you feel it",
      "Tale of the Nine-Tailed fans of anthology-style storytelling where the location and core premise persist across different character configurations — White Lotus season 2 with the Sicily setting rewards viewers who bring the framework from season 1"
    ]
  },

  {
    id: "from-scratch-netflix",
    title: "From Scratch",
    year: 2022,
    episodes: 8,
    synopsis: "Amahle 'Amy' Wheeler, an American art student in Florence, meets Lino Ferrara, a Sicilian chef. They fall in love across cultures, languages, and families. They build a life. Then Lino gets sick. Based on the memoir by Tembi Locke, it's a love story that earns its grief by spending most of its runtime actually building the relationship it's about to lose — and following a Black American woman through the specific experience of loving and losing someone from a culture not her own.",
    genres: ["romance", "drama"],
    themes: ["cross-cultural-love", "illness", "loss", "multicultural-family", "grief"],
    tropes: ["international-romance", "terminal-illness", "interracial-relationship", "cultural-clash", "true-story"],
    tone: ["emotional", "romantic", "tearjerker", "warm", "devastating"],
    setting: ["florence", "los-angeles", "sicily", "modern"],
    characterTypes: ["american-woman-abroad", "devoted-italian-partner", "complex-in-laws", "supportive-family"],
    streaming: { netflix: true },
    network: "Netflix",
    actors: [
      { name: "Zoe Saldana", role: "Amahle Wheeler", isLead: true },
      { name: "Eugenio Mastrandrea", role: "Lino Ferrara", isLead: true }
    ],
    matchReasoningHints: [
      "Thirty-Nine fans of Korean dramas that take love in the shadow of terminal illness completely seriously and let the grief be proportional to the love — From Scratch earns its tears by making you believe the relationship first",
      "Something in the Rain fans of slow-burn international romances where the cultural context is an active part of the story, not just backdrop — the Florence/Sicily setting in From Scratch does the same work as the Korea/Japan divide in Something",
      "My Mister fans of shows willing to sit in grief without immediately resolving it into something hopeful — the back half of From Scratch has the same emotional weight as the quietest, heaviest sections of that show",
      "Crash Landing on You fans of international romance dramas where family and cultural difference are real obstacles and the love story requires navigating them seriously, not just surviving them",
      "Our Blues fans of Korean dramas built around loss that refuse to be sentimental about it — From Scratch has the same quality of being genuinely kind to its characters while also being honest about what happens to them"
    ]
  },

  {
    id: "you-netflix",
    title: "You",
    year: 2018,
    episodes: 40,
    synopsis: "Joe Goldberg works in a bookstore. He also narrates his own stalking behavior toward the women he becomes obsessed with — in a voice so self-justifying and self-aware that it's easy to forget, for entire episodes, that you're in the head of someone very dangerous. A darkly romantic thriller that exploits the gap between how Joe sees himself (romantic, protective, literary) and what he actually is — and interrogates how much the audience wants to root for him.",
    genres: ["thriller", "romance", "drama", "psychological"],
    themes: ["obsession", "manipulation", "toxic-love", "self-deception", "surveillance"],
    tropes: ["unreliable-narrator", "stalker-protagonist", "dark-romance", "psychological-thriller", "point-of-view-horror"],
    tone: ["darkly-romantic", "suspenseful", "addictive", "disturbing", "self-aware"],
    setting: ["modern", "new-york", "los-angeles", "paris"],
    characterTypes: ["charming-dangerous-male-lead", "idealized-love-interest", "stalker-as-protagonist"],
    streaming: { netflix: true },
    network: "Netflix",
    actors: [
      { name: "Penn Badgley", role: "Joe Goldberg", isLead: true },
      { name: "Elizabeth Lail", role: "Guinevere Beck (S1)", isLead: true },
      { name: "Victoria Pedretti", role: "Love Quinn (S2)", isLead: true }
    ],
    matchReasoningHints: [
      "Nevertheless fans of K-dramas willing to let the romantic lead be genuinely dangerous rather than just emotionally unavailable — You is what happens when you take that energy to its logical extreme and make the audience narrate it from inside his head",
      "My Name fans of Korean dramas where the protagonist is operating inside a false identity while committed to a purpose that might destroy them — Joe's entire performance of normality has the same desperate quality as Oh Hye-jin's undercover work",
      "The Devil Judge fans of K-dramas built on a charismatic protagonist who believes they're serving justice while committing it — Yo Han and Joe Goldberg are separated by a courtroom and a sense of humor about themselves",
      "Itaewon Class fans of shows where a driven, obsessive protagonist's intensity is both their superpower and the thing that makes them frightening — Joe and Park Saeroyi share the quality of focused relentlessness in pursuit of their specific person/goal",
      "Black fans of K-dramas built on a romance that the narrative keeps signaling is going to cost someone everything — You makes that cost visible from episode one and dares you to keep watching anyway"
    ]
  },

  {
    id: "one-day-netflix",
    title: "One Day",
    year: 2024,
    episodes: 14,
    synopsis: "On July 15th, Emma and Dexter meet at their Edinburgh graduation party. For the next twenty years, the show checks in on them every year on that same date. Sometimes they're together. Sometimes they're not. They are always, somehow, each other's most important person. Adapted from David Nicholls's beloved novel, the series commits to the slow accumulation of time as a romantic device — and to the specific pain of loving someone at the wrong moment for so long that you can't imagine them at the right one.",
    genres: ["romance", "drama"],
    themes: ["slow-burn", "missed-timing", "lifelong-connection", "growing-up", "what-if"],
    tropes: ["will-they-wont-they", "childhood-friends-to-lovers", "same-day-structure", "years-apart", "almost"],
    tone: ["slow-burn", "romantic", "bittersweet", "emotional", "nostalgic"],
    setting: ["edinburgh", "london", "europe", "modern"],
    characterTypes: ["ambitious-working-class-woman", "charming-privileged-man", "twenty-years-of-each-other"],
    streaming: { netflix: true },
    network: "Netflix",
    actors: [
      { name: "Ambika Mod", role: "Emma Morley", isLead: true },
      { name: "Leo Woodall", role: "Dexter Mayhew", isLead: true }
    ],
    matchReasoningHints: [
      "Our Beloved Summer fans of K-dramas built on two people who were important to each other in youth, parted, and return — One Day runs that timeline across two decades instead of years and the structure is the same: what do you do with the person you can't stop coming back to",
      "A Time Called You fans of K-drama time-structure romances — One Day's annual-check-in format creates the same formal tension as the time mechanics in K-drama romantic fantasies, just in a realist register",
      "Reply 1988 fans of shows that take time seriously as a subject — watching twenty years go by with these two characters has the same weight as watching Ssangmundong in the 80s knowing the show is also about the future",
      "Something in the Rain fans of romances where the class and circumstance gap between two people is real and the show doesn't pretend it isn't — Emma's trajectory vs. Dexter's is built on the same social material as the K-drama",
      "Goblin fans of shows that build their romance on repeated separation and reunion across time — the missed-timing structure of One Day has the same ache as the immortal's wait for his bride: they keep finding each other at the wrong moment"
    ]
  }

];
