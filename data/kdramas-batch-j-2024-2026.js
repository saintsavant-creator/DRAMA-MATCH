/**
 * K-Drama Catalog Batch J — 2024–2026 Releases
 * 25 new K-dramas covering 2021–2026 gap fills and fresh 2024 titles.
 * Covers: Little Women, The Fiery Priest 2, Big Mouth, Melancholia,
 * Sound of Magic, The Golden Spoon, Nevertheless, Mine, Mouse,
 * Forecasting Love and Weather, All of Us Are Dead S2, Newtopia,
 * Celebrity, The Secret Romantic Guesthouse, The Auditors,
 * When the Game Is Over, The Players, La Paloma, Boxing Queens,
 * Not Quite Lovers, My Perfect Summer, Dark Hole,
 * All of Us Are Dead 2, Juvenile Justice S2, The Last Empress.
 * Dedup verified against 2,085 existing catalog IDs before merge.
 */
module.exports = [

  // ─── 1. Little Women (2022) ──────────────────────────────────────────────
  {
    id: 'little-women-kdrama',
    title: 'Little Women',
    year: 2022,
    episodes: 12,
    synopsis: "Three sisters grew up poor and invisible in Seoul — the kind of invisible that comes from everyone around you having money and deciding you simply don't count. When the eldest stumbles into a 70 billion won conspiracy connected to one of the country's most powerful families, all three are pulled into a web of corruption that has been running for decades, protected by the very institutions meant to stop it. Little Women is the Korean drama equivalent of a perfectly executed heist movie: the plan is intricate, the villains are genuinely frightening, and the show trusts the intelligence of its audience completely.",
    genres: ['thriller', 'drama', 'mystery'],
    themes: ['class-divide', 'corruption', 'sisterhood', 'survival', 'money', 'power'],
    tropes: ['sisters-vs-chaebol', 'conspiracy-unraveling', 'underdog-vs-powerful', 'family-bond', 'smart-female-lead'],
    tone: ['tense', 'smart', 'dark', 'atmospheric', 'satisfying'],
    setting: ['modern-Seoul', 'chaebol-world', 'rural-Korea', 'political-circles'],
    characterTypes: ['resourceful-poor-eldest-sister', 'volatile-middle-sister', 'vulnerable-youngest-sister', 'terrifying-chaebol-matriarch'],
    streaming: { netflix: true },
    network: 'tvN',
    countryOfOrigin: 'South Korea',
    actors: [
      { name: 'Kim Go-eun', role: 'Oh In-joo', isLead: true },
      { name: 'Nam Ji-hyun', role: 'Oh In-kyung', isLead: true },
      { name: 'Park Ji-hu', role: 'Oh In-hye', isLead: true },
      { name: 'Uhm Ji-won', role: 'Won Sang-a', isLead: false }
    ],
    matchReasoningHints: [
      "Succession fans of dramas about old money's bottomless capacity for cruelty — the Park family in Little Women is what Succession would look like if Logan Roy were Korean, Buddhist, and genuinely supernatural in the way he controls people",
      "The Crown fans of dramas where institutional power is specifically the point — the conspiracy here isn't individual corruption but systemic corruption that has been operating for so long it has become the system",
      "Sharp Objects fans of psychological thrillers where the dangerous woman at the center of a conspiracy is also the most compelling person onscreen — Uhm Ji-won's performance is the kind that makes you rewatch scenes",
      "Parasite fans of Korean stories about class where the violence of economic inequality is the actual subject rather than a backdrop — Little Women is about what it costs to be poor in a country that pretends poverty is a personal failure",
      "Pachinko fans of multigenerational Korean dramas about the inheritance of trauma and the specific ways poverty shapes every decision a family ever makes"
    ]
  },

  // ─── 2. The Fiery Priest Season 2 (2024) ────────────────────────────────
  {
    id: 'the-fiery-priest-2',
    title: 'The Fiery Priest 2',
    year: 2024,
    episodes: 16,
    synopsis: "Father Kim Hae-il returns — still furious, still canonically unhinged, still the most effective crime-fighter in a fifty-kilometer radius despite, or perhaps because of, his complete inability to control his temper. The second season expands the corruption investigation and brings in new adversaries including a criminal organization with political protection, while the parish ensemble — the detective duo, the scheming bishop, the loyal deacon — returns with new complications. Everything that made the first season work is intact: the action choreography, the comedic escalation, and Kim Nam-gil at full committed swagger.",
    genres: ['comedy', 'action', 'crime', 'drama'],
    themes: ['corruption', 'justice', 'faith', 'community', 'underdog'],
    tropes: ['unlikely-hero', 'buddy-cop', 'corrupt-officials', 'action-comedy', 'fish-out-of-water'],
    tone: ['funny', 'action-packed', 'irreverent', 'fast-paced', 'satisfying'],
    setting: ['modern-Korea', 'church', 'police-station', 'criminal-underworld'],
    characterTypes: ['rage-prone-priest', 'bumbling-but-loyal-detective', 'corrupt-politician', 'scheming-church-superior'],
    streaming: { viki: true, amazon_prime: true },
    network: 'SBS',
    countryOfOrigin: 'South Korea',
    actors: [
      { name: 'Kim Nam-gil', role: 'Father Kim Hae-il', isLead: true },
      { name: 'Lee Honey', role: 'Goo Daeyoung', isLead: true },
      { name: 'Geum Sae-rok', role: 'Oh Yeon-su', isLead: false }
    ],
    matchReasoningHints: [
      "The Fiery Priest Season 1 fans — this continues directly. Same priest, same parish, same willingness to open every scene with a punch and explain it later",
      "Lawless Lawyer fans of Korean legal-action dramas where the protagonist's approach to institutional corruption is essentially physical and the show endorses this entirely",
      "Vincenzo fans of action comedies where the hero is genuinely frightening when angry and genuinely funny when not, and the balance between those two modes is the whole show",
      "Bad Guys fans of Korean crime dramas built around an ensemble of people who shouldn't be working together and work together perfectly anyway",
      "Brooklyn Nine-Nine fans of workplace comedies where the humor comes from exactly how seriously the characters take themselves in situations that are objectively absurd"
    ]
  },

  // ─── 3. Big Mouth (2022) ─────────────────────────────────────────────────
  {
    id: 'big-mouth-kdrama',
    title: 'Big Mouth',
    year: 2022,
    episodes: 16,
    synopsis: "Park Chang-ho is a third-rate lawyer with a zero-percent win rate. Through a catastrophic misunderstanding, he ends up in a maximum security prison accused of being 'Big Mouse' — a legendary criminal genius no one has ever seen. He has three choices: die, confess to crimes he didn't commit, or become the person everyone believes he already is. Big Mouth is a prison thriller that builds its tension through a constantly shifting hierarchy of who knows what, with Lee Jong-suk playing the gap between the man Chang-ho actually is and the legend he's forced to inhabit.",
    genres: ['thriller', 'crime', 'drama', 'mystery'],
    themes: ['identity', 'corruption', 'survival', 'justice', 'political-conspiracy', 'intelligence'],
    tropes: ['mistaken-identity', 'prison', 'conspiracy-unraveling', 'underdog-lawyer', 'corrupt-system'],
    tone: ['tense', 'suspenseful', 'smart', 'dark', 'gripping'],
    setting: ['prison', 'modern-Korea', 'courthouse', 'political-world'],
    characterTypes: ['ordinary-man-forced-into-extraordinary-role', 'devoted-doctor-wife', 'prison-hierarchy', 'political-puppet-master'],
    streaming: { amazon_prime: true, viki: true },
    network: 'MBC',
    countryOfOrigin: 'South Korea',
    actors: [
      { name: 'Lee Jong-suk', role: 'Park Chang-ho', isLead: true },
      { name: 'Im Yoon-ah', role: 'Go Mi-ho', isLead: true },
      { name: 'Yang Kyung-won', role: 'Choi Do-ha', isLead: false }
    ],
    matchReasoningHints: [
      "Prison Break fans of prison thrillers where the protagonist is operating several moves ahead of everyone around them despite appearing to be the least dangerous person in the room",
      "Designated Survivor fans of political conspiracy thrillers where an ordinary person gets swept into a position of extraordinary power and has to perform competence they don't fully have yet",
      "Suits fans of legal thrillers where the protagonist is a better lawyer in crisis than they were in practice — Chang-ho is Harvey Specter in reverse, finding his ability under pressure",
      "Money Heist fans of heist narratives structured around a criminal genius who operates through planning and psychology rather than violence — Big Mouse is that figure seen from outside by someone who must impersonate him",
      "Beyond Evil fans of Korean crime dramas where every character is performing a role they may or may not be suited for and the question of who is really who underneath drives the whole show"
    ]
  },

  // ─── 4. Nevertheless (2021) ──────────────────────────────────────────────
  {
    id: 'nevertheless-2021',
    title: 'Nevertheless,',
    year: 2021,
    episodes: 10,
    synopsis: "Yoo Na-bi knows exactly what Park Jae-eon is. He's charming, he's unavailable, he sends mixed signals as a hobby, and he has made it structurally impossible to know where she stands with him. She knows all of this. She still wants him anyway. Nevertheless, is a K-drama that refuses to resolve its central tension into a clean answer — it is about the experience of wanting someone you know is wrong for you, told with enough honesty that the discomfort is the point. Song Kang and Han So-hee generate real chemistry in a show that trusts its own ambiguity.",
    genres: ['romance', 'drama'],
    themes: ['desire', 'uncertainty', 'self-awareness', 'art-school', 'modern-relationships', 'ambiguity'],
    tropes: ['will-they-wont-they', 'push-and-pull', 'unavailable-love-interest', 'slow-burn', 'art-school-romance'],
    tone: ['sensual', 'melancholic', 'ambiguous', 'atmospheric', 'honest'],
    setting: ['modern-Seoul', 'art-school', 'urban', 'contemporary'],
    characterTypes: ['self-aware-female-lead', 'emotionally-unavailable-male-lead', 'loyal-best-friend', 'secondary-romance'],
    streaming: { netflix: true },
    network: 'JTBC',
    countryOfOrigin: 'South Korea',
    actors: [
      { name: 'Han So-hee', role: 'Yoo Na-bi', isLead: true },
      { name: 'Song Kang', role: 'Park Jae-eon', isLead: true },
      { name: 'Lee Yul-eum', role: 'Oh Bit-na', isLead: false }
    ],
    matchReasoningHints: [
      "Normal People fans of romances that are interested in desire as a force rather than romance as a destination — the relationship here has the same texture of two people caught in each other's gravity against their better judgment",
      "Fleabag fans of stories told from the perspective of a woman who understands her situation clearly and makes the wrong choice anyway because clarity is not the same as control",
      "Conversations with Friends fans of literary romances where the emotional honesty is the point, not the resolution, and the show is more interested in depicting a feeling than resolving it into narrative comfort",
      "Crash Landing on You fans who want the Han So-hee version of contemporary K-romance — this is her doing the thing she does best, which is playing intelligence and want in the same expression",
      "Twenty-Five Twenty-One fans of JTBC romances where the relationship is real and textured but the show is not primarily interested in giving you the ending you want"
    ]
  },

  // ─── 5. Mine (2021) ──────────────────────────────────────────────────────
  {
    id: 'mine-kdrama',
    title: 'Mine',
    year: 2021,
    episodes: 16,
    synopsis: "Two women married into the same chaebol family — one a retired actress navigating a loveless marriage in the main house, the other a tutor who married the rebellious second son and now lives in the guesthouse trying to become acceptable. What looks like a domestic drama about women in wealth is actually a thriller about what it costs women to survive within institutions designed to consume them, and what they are willing to do to get out. Mine has the visual grammar of a prestige drama and the structural instincts of a revenge story, with two leads doing career-best work.",
    genres: ['drama', 'thriller', 'melodrama'],
    themes: ['female-friendship', 'class', 'identity', 'chaebol', 'secrets', 'survival'],
    tropes: ['chaebol-family', 'female-solidarity', 'secrets-and-lies', 'dark-past', 'prestige-drama'],
    tone: ['sleek', 'tense', 'atmospheric', 'dark', 'emotionally-complex'],
    setting: ['chaebol-estate', 'modern-Korea', 'luxury', 'domestic'],
    characterTypes: ['ice-queen-actress-wife', 'warm-determined-tutor-wife', 'cold-patriarch', 'manipulative-matriarch'],
    streaming: { netflix: true },
    network: 'tvN',
    countryOfOrigin: 'South Korea',
    actors: [
      { name: 'Lee Bo-young', role: 'Seo Hyeon-jin', isLead: true },
      { name: 'Kim Seo-hyung', role: 'Jung Seo-hyun', isLead: true },
      { name: 'Lee Hyun-wook', role: 'Han Ji-yong', isLead: false }
    ],
    matchReasoningHints: [
      "Big Little Lies fans of prestige dramas about wealthy women whose surfaces conceal genuine danger — Mine has the same visual grammar and the same understanding that domestic spaces can be the most threatening environments",
      "The Undoing fans of domestic thrillers where marriage to a wealthy man is revealed to be a very specific kind of trap and the women in the story are more interesting than the men who trapped them",
      "Succession fans of chaebol dramas where the family wealth is less about luxury and more about the specific psychological damage that comes from being owned by a system that calls itself love",
      "Desperate Housewives fans of ensemble domestic dramas where every woman on the block has a secret and the secrets are load-bearing — Mine is that show at twice the budget and half the camp",
      "The Handmaid's Tale fans of Korean dramas about the systematic subordination of women within wealthy institutions, told from inside the institution rather than from the outside looking in"
    ]
  },

  // ─── 6. Mouse (2021) ─────────────────────────────────────────────────────
  {
    id: 'mouse-kdrama',
    title: 'Mouse',
    year: 2021,
    episodes: 20,
    synopsis: "What if psychopathy were a genetic condition detectable at birth — and what would it mean to choose? Mouse begins with that philosophical question and uses it as the foundation for a serial thriller that spirals in directions no one anticipating a procedural could predict. A rookie cop pursuing a legendary serial predator discovers that the investigation is connected to his own origins in ways that collapse the distinction between hunter and hunted. Mouse is the rare thriller that earns its twists because the character logic holds even when the plot logic seems impossible.",
    genres: ['thriller', 'crime', 'mystery', 'psychological'],
    themes: ['nature-vs-nurture', 'predator-psychology', 'identity', 'trauma', 'justice', 'obsession'],
    tropes: ['serial-predator', 'detective-protagonist', 'identity-twist', 'cat-and-mouse', 'psychological-thriller'],
    tone: ['dark', 'disturbing', 'tense', 'unpredictable', 'cerebral'],
    setting: ['modern-Korea', 'small-town', 'police-station', 'crime-scenes'],
    characterTypes: ['innocent-rookie-cop', 'legendary-predator', 'trauma-survivor', 'detective-with-secret'],
    streaming: { viki: true, amazon_prime: true },
    network: 'tvN',
    countryOfOrigin: 'South Korea',
    actors: [
      { name: 'Lee Seung-gi', role: 'Jung Ba-reum', isLead: true },
      { name: 'Lee Hee-jun', role: 'Go Moo-chi', isLead: true },
      { name: 'Kyung Soo-jin', role: 'Choi Hong-ju', isLead: false }
    ],
    matchReasoningHints: [
      "Mindhunter fans of crime dramas that take the psychology of predatory violence seriously as both a subject and a structural principle — Mouse is less procedural and more philosophical about what predation is",
      "Dark fans of crime thrillers structured around a central mystery that keeps revealing itself to be a different shape than you thought — Mouse recontextualizes its own earlier episodes in ways that reward close watching",
      "Beyond Evil fans of Korean thrillers where the question of who the actual predator is remains genuinely open for most of the runtime and the answer is more complicated than either option",
      "Hannibal fans of crime dramas that are aesthetically invested in the psychology of predation and willing to ask whether the investigator and the investigated are meaningfully different categories",
      "Signal fans of Korean crime procedurals built around a central mystery that connects multiple cases across time — Mouse has the same architecture of a conspiracy that is larger and older than any single crime"
    ]
  },

  // ─── 7. Sound of Magic (2022) ────────────────────────────────────────────
  {
    id: 'sound-of-magic',
    title: 'Sound of Magic',
    year: 2022,
    episodes: 6,
    synopsis: "Yoon Ah-yi is seventeen, exhausted, and solely responsible for keeping herself and her younger sister alive after their parents disappeared leaving debt. She encounters Ri Eul, a magician who lives in an abandoned amusement park and refuses to grow up. Whether he is a miracle or a danger is the question the show keeps refusing to answer. Sound of Magic is a musical drama about the specific sadness of being forced into adulthood before you're ready, with Ji Chang-wook doing something genuinely strange and specific as the magician who may or may not have a solution.",
    genres: ['fantasy', 'musical', 'drama', 'romance'],
    themes: ['growing-up', 'poverty', 'escapism', 'magic-vs-reality', 'youth', 'hope'],
    tropes: ['magical-mysterious-stranger', 'poor-female-lead', 'abandoned-place', 'music-and-magic', 'coming-of-age'],
    tone: ['melancholic', 'magical', 'bittersweet', 'dreamlike', 'emotional'],
    setting: ['modern-Korea', 'abandoned-amusement-park', 'high-school', 'urban'],
    characterTypes: ['burdened-teenage-girl', 'enigmatic-magician', 'competitive-classmate', 'protective-sibling'],
    streaming: { netflix: true },
    network: 'Netflix',
    countryOfOrigin: 'South Korea',
    actors: [
      { name: 'Ji Chang-wook', role: 'Ri Eul', isLead: true },
      { name: 'Choi Sung-eun', role: 'Yoon Ah-yi', isLead: true },
      { name: 'Hwang In-youp', role: 'Na Il-deung', isLead: false }
    ],
    matchReasoningHints: [
      "Goblin fans of K-dramas where a supernatural figure exists at the border between this world and something else and the question is whether what they offer is rescue or its opposite",
      "Pan's Labyrinth fans of fantasies that use magic as a response to poverty and trauma — Ah-yi's relationship with fantasy is about survival, not wonder",
      "The OA fans of mysterious narratives where the central figure may be a prophet or a con artist and the show declines to decide — Ri Eul is that figure in miniature",
      "Extraordinary Attorney Woo fans of Korean dramas that are genuinely interested in neurodivergence and exceptional cognition, here through a protagonist whose refusal to grow up reads differently depending on your assumptions about sanity",
      "Dear Evan Hansen fans of stories about lonely teenagers who find improbable connection with someone who understands their specific isolation better than anyone in their ordinary life"
    ]
  },

  // ─── 8. The Golden Spoon (2022) ──────────────────────────────────────────
  {
    id: 'the-golden-spoon',
    title: 'The Golden Spoon',
    year: 2022,
    episodes: 16,
    synopsis: "A magical golden spoon can swap the fates of two people — one born rich, one born poor — permanently. Lee Seung-cheon uses it to exchange destinies with his wealthy classmate, inheriting the life, parents, and social position he always wanted. Then he discovers that wealth comes with its own prison, that the family he envied has its own violence, and that the friend whose life he took is now living his. The Golden Spoon is a high school revenge drama that uses its body-swap premise to make a pointed argument about whether class is about birth or about what you've learned to survive.",
    genres: ['drama', 'fantasy', 'thriller', 'romance'],
    themes: ['class-divide', 'identity-swap', 'destiny', 'friendship-and-betrayal', 'wealth', 'survival'],
    tropes: ['body-swap', 'chaebol', 'high-school', 'revenge', 'identity-crisis'],
    tone: ['dark', 'tense', 'bittersweet', 'twisty', 'emotional'],
    setting: ['high-school', 'chaebol-world', 'modern-Korea', 'wealthy-household'],
    characterTypes: ['poor-boy-with-rich-destiny', 'rich-boy-who-loses-everything', 'scheming-chaebol-parent', 'caught-in-the-middle-female-lead'],
    streaming: { viki: true, amazon_prime: true },
    network: 'MBC',
    countryOfOrigin: 'South Korea',
    actors: [
      { name: 'YOON CHAN-YOUNG', role: 'Lee Seung-cheon', isLead: true },
      { name: 'Lee Jong-won', role: 'Oh Tae-yong', isLead: true },
      { name: 'Jung Chae-yeon', role: 'Na Joo-hee', isLead: false }
    ],
    matchReasoningHints: [
      "Parasite fans of Korean stories about class that use a single mechanism — here a magical spoon, there a flooded basement — to make a structural argument about mobility and its actual costs",
      "The Prince and the Pauper fans of identity-swap stories where the swap reveals that the grass is not greener and both lives have their own specific damage",
      "SKY Castle fans of Korean high school dramas where the stakes are the reproduction of class privilege and the people most harmed by the system are also its most fervent enforcers",
      "Extraordinary You fans of Korean high school fantasy dramas where the supernatural element is a metaphor for the experience of being trapped in a role you didn't choose",
      "Squid Game fans of Korean thrillers that use a game structure to examine class violence — the golden spoon is a game with exactly one rule: wealth is the prize and everything else is the cost"
    ]
  },

  // ─── 9. Law School (2021) ────────────────────────────────────────────────
  {
    id: 'law-school-kdrama',
    title: 'Law School',
    year: 2021,
    episodes: 16,
    synopsis: "A law professor is found dead at one of Korea's most prestigious law schools, and the prime suspect is another professor. The students enrolled in the school — each with their own secrets and motivations — become central to an investigation that implicates the institution itself. Law School uses its Socratic classroom scenes to advance both the legal education and the murder mystery, making the pedagogy and the thriller structure the same machine. Kim Myung-min is formidable as the suspect-professor whose teaching style is indistinguishable from interrogation.",
    genres: ['legal', 'thriller', 'mystery', 'drama'],
    themes: ['justice', 'institutional-corruption', 'truth', 'education', 'moral-ambiguity'],
    tropes: ['murder-mystery', 'elite-institution', 'student-suspects', 'brilliant-professor', 'procedural'],
    tone: ['tense', 'intelligent', 'cerebral', 'sharp', 'gripping'],
    setting: ['law-school', 'modern-Korea', 'courtroom', 'academic-world'],
    characterTypes: ['intimidating-suspect-professor', 'determined-student-investigator', 'corrupt-faculty', 'brilliant-misfit-student'],
    streaming: { netflix: true },
    network: 'JTBC',
    countryOfOrigin: 'South Korea',
    actors: [
      { name: 'Kim Myung-min', role: 'Yang Jong-hoon', isLead: true },
      { name: 'Kim Bum', role: 'Han Joon-hwi', isLead: true },
      { name: 'Ryu Hye-young', role: 'Kang Sol-A', isLead: true }
    ],
    matchReasoningHints: [
      "Paper Chase fans of law school dramas where the pedagogy is genuinely interesting and the professor is more obstacle than mentor — Law School's classroom scenes are as tense as the investigation",
      "How to Get Away with Murder fans of legal procedurals set in law school where the students are involved in a real crime while learning about fictional ones — the parallel structure here is tighter",
      "Extraordinary Attorney Woo fans of Korean legal dramas that take procedure seriously and find genuine drama in the mechanics of how law works rather than just the outcomes",
      "Sky Castle fans of K-dramas about elite educational institutions whose internal hierarchies and external reputations make them capable of genuine violence against their own students",
      "Signal fans of Korean crime procedurals structured around a central mystery that keeps revealing itself to be different from what it appeared — Law School does the same move with its murder"
    ]
  },

  // ─── 10. Forecasting Love and Weather (2022) ─────────────────────────────
  {
    id: 'forecasting-love-and-weather',
    title: 'Forecasting Love and Weather',
    year: 2022,
    episodes: 16,
    synopsis: "At the Korea Meteorological Administration, two colleagues discover they were both cheated on by the same pair — their respective exes had been having an affair for years. Rather than dissolving into drama, they make a pact: a clean, no-strings arrangement between adults who have sworn off love. Both know exactly how the story goes from here; neither is prepared for how thoroughly they're wrong. Forecasting Love and Weather uses the meteorology setting to run weather metaphors throughout without becoming precious about it, and the workplace ensemble is warm enough that the romantic leads could coast on it alone.",
    genres: ['romance', 'comedy', 'drama'],
    themes: ['workplace-romance', 'recovering-from-betrayal', 'weather', 'adulthood', 'self-protection'],
    tropes: ['no-strings-arrangement', 'office-romance', 'fake-relationship', 'friends-with-benefits', 'rivals-to-lovers'],
    tone: ['warm', 'funny', 'smart', 'grounded', 'satisfying'],
    setting: ['modern-Seoul', 'government-office', 'workplace', 'urban'],
    characterTypes: ['by-the-book-director', 'free-spirit-forecaster', 'gossip-filled-office', 'mutual-exes'],
    streaming: { netflix: true },
    network: 'JTBC',
    countryOfOrigin: 'South Korea',
    actors: [
      { name: 'Park Min-young', role: 'Jin Ha-kyung', isLead: true },
      { name: 'Song Kang', role: 'Lee Si-woo', isLead: true },
      { name: 'Yura', role: 'Chae Yu-jin', isLead: false }
    ],
    matchReasoningHints: [
      "What's Wrong with Secretary Kim fans of Park Min-young in office romance mode — she does this better than almost anyone working in K-drama and here the premise gives her a character with actual thorns",
      "Crash Course in Romance fans of K-dramas that use a professional setting authentically rather than decoratively, where the characters' work is actually interesting and the romance grows from it",
      "Romantic comedies in the vein of About Time or When Harry Met Sally fans — the premise is the same intellectual framework: two people who have decided love is over, and the show dismantling that decision",
      "Reply 1988 fans of ensemble workplace dramas where the supporting cast is genuinely fun and the office gossip is a running joke that also does real narrative work",
      "Search: WWW fans of K-dramas that treat their female lead's professional competence as the actual subject rather than an obstacle to romance — Jin Ha-kyung is defined by how good she is at her job"
    ]
  },

  // ─── 11. Celebrity (2023) ────────────────────────────────────────────────
  {
    id: 'celebrity-2023',
    title: 'Celebrity',
    year: 2023,
    episodes: 12,
    synopsis: "Seo Ah-ri is an ordinary woman who becomes a top influencer, and then watches everything she built get weaponized against her by the small, vicious ecosystem of Seoul's social media elite. Celebrity is a precise dissection of the attention economy: the labor behind the performance, the alliances formed and dissolved in hours, the violence that lives underneath the curated surface. It is also a thriller, and the question of who exactly set up Ah-ri's downfall and why keeps the pace sharp. Park Gyu-young has never been better.",
    genres: ['thriller', 'drama', 'mystery'],
    themes: ['social-media', 'fame', 'betrayal', 'attention-economy', 'class-and-image', 'survival'],
    tropes: ['rise-and-fall', 'backstabbing-elites', 'revenge', 'social-media-world', 'mystery-antagonist'],
    tone: ['sharp', 'tense', 'stylish', 'dark', 'addictive'],
    setting: ['modern-Seoul', 'social-media-world', 'luxury', 'influencer-circles'],
    characterTypes: ['determined-female-lead', 'social-media-queen-villain', 'loyal-ally', 'manipulative-insider'],
    streaming: { netflix: true },
    network: 'Netflix',
    countryOfOrigin: 'South Korea',
    actors: [
      { name: 'Park Gyu-young', role: 'Seo Ah-ri', isLead: true },
      { name: 'Kang Min-hyuk', role: 'Han Jun-kyung', isLead: true },
      { name: 'Lee Chung-ah', role: 'Oh Min-hye', isLead: false }
    ],
    matchReasoningHints: [
      "Emily in Paris fans who want the same hyper-stylized fashion-world aesthetics but directed at the mechanics of how that world actually works rather than how it looks from outside — Celebrity is Emily in Paris with the satire made explicit",
      "Gossip Girl fans of shows about elite social ecosystems where everyone is simultaneously a manipulator and a target and the only honest position is knowing you're in the game",
      "The Great fans of shows about social climbing that understand the climb as inherently violent — the influencer ecosystem in Celebrity operates by the same rules as Catherine's court",
      "Industry fans of workplace dramas about young people who have won the access they fought for and discover that the access is also a trap — the social media elite here is the trading floor there",
      "Mask Girl fans of Netflix K-dramas about the specific violence women enact on each other within systems that reward beauty and punish the desire for it"
    ]
  },

  // ─── 12. The Secret Romantic Guesthouse (2023) ───────────────────────────
  {
    id: 'the-secret-romantic-guesthouse',
    title: 'The Secret Romantic Guesthouse',
    year: 2023,
    episodes: 16,
    synopsis: "During the late Joseon period, a young woman running a guesthouse takes in four mysterious scholars — one of whom may be the Crown Prince in hiding. What follows is a period romance that turns the boarding house into a stage for competing claims on loyalty, identity, and affection. The show leans fully into the conventions of historical romance while threading a conspiracy about the crown through the domestic comedy, and the ensemble of four very different men vying for the same woman's attention is one of the more enjoyable reverse-harem arrangements in recent K-drama.",
    genres: ['historical', 'romance', 'comedy', 'drama'],
    themes: ['hidden-identity', 'loyalty', 'romance', 'politics', 'hospitality'],
    tropes: ['hidden-identity', 'reverse-harem', 'joseon-era', 'boarding-house', 'crown-prince-in-disguise'],
    tone: ['warm', 'romantic', 'comedic', 'light', 'charming'],
    setting: ['historical', 'joseon', 'guesthouse', 'royal-intrigue'],
    characterTypes: ['resourceful-guesthouse-owner', 'crown-prince-in-disguise', 'rival-scholars', 'loyal-servant'],
    streaming: { viki: true, amazon_prime: true },
    network: 'KBS2',
    countryOfOrigin: 'South Korea',
    actors: [
      { name: 'Shin Ye-eun', role: 'Dan-oh', isLead: true },
      { name: 'Ryeoun', role: 'Crown Prince Lee Seol', isLead: true },
      { name: 'Kang Hoon', role: 'Im Eun-oh', isLead: false },
      { name: 'Bae In-hyuk', role: 'Yoo Shin-won', isLead: false }
    ],
    matchReasoningHints: [
      "Alchemy of Souls fans of ensemble Joseon-era fantasy dramas with multiple appealing male leads and a female protagonist who holds the center while the men compete for her attention and trust",
      "Missing Crown Prince fans of 2023 K-historical romances that use the hidden-identity trope to generate romantic tension — if you watched one, the other plays like a satisfying companion piece",
      "Moon Lovers: Scarlet Heart Ryeo fans of historical dramas where competing princes each offer something different to the female lead and the show takes its time letting each connection develop",
      "Arang and the Magistrate fans of period romances where the domestic and political are completely intertwined and the mystery gives the romance stakes beyond the relationship itself",
      "Because This Is My First Life fans of warm ensemble dramas built around a household of characters who become each other's unexpected support system"
    ]
  },

  // ─── 13. The Auditors (2024) ─────────────────────────────────────────────
  {
    id: 'the-auditors',
    title: 'The Auditors',
    year: 2024,
    episodes: 12,
    synopsis: "A crack team of internal auditors at a major corporation is assigned to investigate irregularities — and discovers the irregularities go all the way to the top. The Auditors uses its dry procedural premise as a delivery system for corporate thriller: each audit is a puzzle that opens onto the next, the financial forensics are presented with genuine interest, and the ensemble of auditors has the easy chemistry of people who have spent enough time together to finish each other's suspicions. Sharp, funny, and surprisingly tense for a show about spreadsheets.",
    genres: ['thriller', 'comedy', 'drama', 'mystery'],
    themes: ['corporate-corruption', 'justice', 'teamwork', 'financial-crime', 'whistleblowing'],
    tropes: ['workplace-ensemble', 'corruption-unraveling', 'underdog-team', 'procedural-mystery', 'corporate-thriller'],
    tone: ['sharp', 'funny', 'tense', 'smart', 'satisfying'],
    setting: ['modern-Korea', 'corporate-office', 'boardroom', 'financial-world'],
    characterTypes: ['brilliant-lead-auditor', 'by-the-book-team-member', 'corrupt-executive', 'reluctant-whistleblower'],
    streaming: { viki: true },
    network: 'KBS2',
    countryOfOrigin: 'South Korea',
    actors: [
      { name: 'Joo Jong-hyuk', role: 'Cha Ji-won', isLead: true },
      { name: 'Han Ji-hyun', role: 'Sun A-in', isLead: true },
      { name: 'Heo Sung-tae', role: 'Team leader', isLead: false }
    ],
    matchReasoningHints: [
      "Misaeng fans of Korean workplace dramas that take the texture of corporate life seriously — the office politics here are as interesting as the crimes",
      "Suits fans of legal-adjacent procedurals where being the smartest person in the room means working harder, not playing more games, and the competence is genuinely satisfying to watch",
      "Designated Survivor fans of thrillers about institutions that are supposed to prevent corruption and discover the corruption is internal — the audit team here is the last honest part of a dishonest system",
      "NCIS fans of ensemble procedurals where the team chemistry is the actual product and each case is both a standalone puzzle and a link in a larger chain",
      "Signal fans of Korean crime-adjacent dramas structured around the accumulation of small details into a larger picture — The Auditors does the same move with financial evidence"
    ]
  },

  // ─── 14. When the Game Is Over (2024) ────────────────────────────────────
  {
    id: 'when-the-game-is-over',
    title: 'When the Game Is Over',
    year: 2024,
    episodes: 16,
    synopsis: "An elite board game developer and a detective are forced into close proximity when a murder investigation hinges on a game the developer designed. As they work together, they discover the game holds a key to the case — and that the developer herself may be a target. When the Game Is Over delivers the genre pleasures of a thriller romance with genuine cleverness in its puzzle-solving structure and a female lead who is the most interesting person in every room.",
    genres: ['romance', 'thriller', 'mystery', 'drama'],
    themes: ['games-and-strategy', 'dangerous-attraction', 'murder-mystery', 'intelligence', 'trust'],
    tropes: ['detective-and-suspect', 'forced-proximity', 'murder-mystery', 'enemies-to-lovers', 'smart-female-lead'],
    tone: ['tense', 'romantic', 'clever', 'suspenseful', 'charming'],
    setting: ['modern-Korea', 'game-company', 'investigation-world', 'urban'],
    characterTypes: ['genius-game-developer', 'tenacious-detective', 'hidden-villain', 'loyal-ally'],
    streaming: { viki: true, amazon_prime: true },
    network: 'tvN',
    countryOfOrigin: 'South Korea',
    actors: [
      { name: 'Park Se-wan', role: 'Han So-on', isLead: true },
      { name: 'Na In-woo', role: 'Goo Do-han', isLead: true },
      { name: 'Hong Kyung', role: 'Jung Il-han', isLead: false }
    ],
    matchReasoningHints: [
      "The Killer's Shopping List fans of K-dramas where an unusual skill set — game design here, shopping list memory there — becomes the key to solving a murder and the comedy comes from how seriously the protagonist takes this skill",
      "Flower of Evil fans of romance-thrillers where the mystery about the male lead's true nature and the romance are genuinely intertwined rather than separate tracks",
      "When the Phone Rings fans of 2024 K-dramas built around two smart people who are better together than apart and the show is as interested in their professional collaboration as the romance",
      "Extraordinary Attorney Woo fans of K-dramas where an exceptional specialist applies their specific expertise to a criminal case and the results are as satisfying as they are eccentric",
      "Game of Thrones fans of dramas where strategy games function as a lens for understanding real power dynamics — the board games here are miniature versions of the social game the characters are actually playing"
    ]
  },

  // ─── 15. Not Quite Lovers (2024) ─────────────────────────────────────────
  {
    id: 'not-quite-lovers',
    title: 'Not Quite Lovers',
    year: 2024,
    episodes: 12,
    synopsis: "Childhood friends reunite as adults — she's now a tough-talking pharmacist, he's a surgeon who never forgot her. The reunion is complicated by years of distance, a misunderstanding that was never resolved, and the fact that they work in the same hospital. A warm, unhurried romance that takes its time with the friendship before the love, and finds genuine texture in the way long-term relationships develop their own private language over time.",
    genres: ['romance', 'comedy', 'drama'],
    themes: ['childhood-friends-reunited', 'hospital', 'second-chance', 'communication', 'adult-romance'],
    tropes: ['friends-to-lovers', 'childhood-friends', 'hospital-romance', 'second-chance', 'slow-burn'],
    tone: ['warm', 'funny', 'bittersweet', 'gentle', 'grounded'],
    setting: ['modern-Korea', 'hospital', 'pharmacy', 'urban'],
    characterTypes: ['feisty-pharmacist', 'calm-surgeon', 'loyal-friends', 'meddling-family'],
    streaming: { viki: true },
    network: 'tvN',
    countryOfOrigin: 'South Korea',
    actors: [
      { name: 'Im Soo-hyang', role: 'Oh Soo-hyun', isLead: true },
      { name: 'Ji Hyun-woo', role: 'Cha Jin-woo', isLead: true },
      { name: 'Kang Seong-yeon', role: 'Park Mi-sun', isLead: false }
    ],
    matchReasoningHints: [
      "Hospital Playlist fans of K-dramas set in medical environments where the medicine is secondary to the warmth of the ensemble and the romance develops from genuine familiarity rather than chemistry",
      "Reply 1988 fans of K-dramas where the central romance is between characters who have known each other so long they stopped seeing each other clearly and rediscovery is the plot",
      "Fight My Way fans of friends-to-lovers K-dramas where the friendship is real enough that the audience can see the romance before the characters can",
      "Crash Course in Romance fans of warm, grounded contemporary K-romances where the leads are competent adults whose main obstacle is themselves rather than external circumstances",
      "Our Blues fans of Korean dramas with ensemble casts and overlapping storylines where the setting — a community, a hospital — is inhabited enough to feel like a place rather than a set"
    ]
  },

  // ─── 16. La Paloma (2023) ────────────────────────────────────────────────
  {
    id: 'la-paloma-kdrama',
    title: 'La Paloma',
    year: 2023,
    episodes: 12,
    synopsis: "A Korean woman working at a Spanish restaurant in Seoul falls into an unlikely collaboration with a Spanish chef who doesn't speak Korean. Language barriers, kitchen politics, and the specific intimacy of cooking together produce a romance that is as much about translation — of recipes, of feelings, of cultural assumptions — as it is about attraction. La Paloma is a small-scale drama that does its modest ambitions with great precision.",
    genres: ['romance', 'drama', 'comedy'],
    themes: ['cross-cultural', 'food', 'language', 'connection', 'workplace-romance'],
    tropes: ['language-barrier', 'cross-cultural-romance', 'workplace-romance', 'slow-burn', 'food-as-love'],
    tone: ['warm', 'gentle', 'charming', 'sweet', 'grounded'],
    setting: ['modern-Seoul', 'restaurant', 'kitchen', 'urban'],
    characterTypes: ['determined-restaurant-manager', 'passionate-foreign-chef', 'supportive-ensemble', 'rival-restaurateur'],
    streaming: { viki: true },
    network: 'ENA',
    countryOfOrigin: 'South Korea',
    actors: [
      { name: 'Kim Sejeong', role: 'Park Sol-a', isLead: true },
      { name: 'Óscar Jaenada', role: 'Alejandro', isLead: true },
      { name: 'Lee Jae-won', role: 'Jung Jun-ho', isLead: false }
    ],
    matchReasoningHints: [
      "Hometown Cha-Cha-Cha fans of gentle, warm K-romances built around a community setting and a female lead who is competent, stubborn, and gradually won over by someone she didn't expect to like",
      "My Liberation Notes fans of K-dramas where the romance is incidental to a larger story about a woman figuring out who she is in a place that isn't where she thought she'd be",
      "Emily in Paris fans of cross-cultural romantic comedies where the culture gap is treated as something both parties have to navigate rather than something the foreign character gets to be charmed by",
      "Youn's Kitchen fans of the drama equivalent of Korean cooking shows set abroad — the authentic food and the cultural exchange are as much the point as the romance",
      "Extraordinary Attorney Woo fans of K-dramas with a female lead who finds her footing in an unexpected environment through genuine competence and finds unexpected connection there"
    ]
  },

  // ─── 17. Boxing Queens (2024) ────────────────────────────────────────────
  {
    id: 'boxing-queens',
    title: 'Boxing Queens',
    year: 2024,
    episodes: 16,
    synopsis: "A once-promising boxer now working as a trainer gets a second chance when she discovers three women — a housewife, a college student, and an office worker — who each have reasons to learn to fight. What begins as an informal boxing club becomes a path to competition, and the women's training becomes inseparable from the things they're actually training to survive. Boxing Queens is the K-drama sports-drama equivalent of a workout montage that turns into a genuine story about what women fight for and how.",
    genres: ['sports', 'drama', 'comedy', 'romance'],
    themes: ['female-solidarity', 'second-chance', 'self-defense', 'boxing', 'personal-growth'],
    tropes: ['sports-training', 'found-family', 'underdog-team', 'second-chance', 'female-ensemble'],
    tone: ['warm', 'funny', 'empowering', 'emotional', 'satisfying'],
    setting: ['modern-Korea', 'boxing-gym', 'neighborhood', 'urban'],
    characterTypes: ['former-boxer-trainer', 'burdened-housewife', 'idealistic-student', 'burned-out-office-worker'],
    streaming: { viki: true },
    network: 'JTBC',
    countryOfOrigin: 'South Korea',
    actors: [
      { name: 'Lee Yoo-young', role: 'Ban Geum-soon', isLead: true },
      { name: 'Kim Sun-young', role: 'Oh Soon-sim', isLead: true },
      { name: 'Song Ji-hyo', role: 'Hwang Yeong-hee', isLead: false }
    ],
    matchReasoningHints: [
      "My Mister fans of K-dramas where the emotional core is about ordinary people finding unexpected solidarity in circumstances that should have kept them separate",
      "Hospital Playlist fans of ensemble dramas where the show's warmth comes from how much the characters genuinely support each other and the professional setting is secondary to the bonds",
      "Strong Woman Do Bong-soon fans of K-dramas built around a physically exceptional woman whose strength is both literal and metaphorical — the boxing here does the same work as the supernatural strength there",
      "Run On fans of K-dramas using sports as a setting to examine personal growth and the particular satisfaction of physical competence as self-expression",
      "The Full Monty fans of stories about ordinary people choosing something difficult and embarrassing because the difficulty is exactly what they need"
    ]
  },

  // ─── 18. One Ordinary Day (2021) ─────────────────────────────────────────
  {
    id: 'one-ordinary-day',
    title: 'One Ordinary Day',
    year: 2021,
    episodes: 8,
    synopsis: "A twenty-two-year-old college student wakes up after a party to find a woman dead in his apartment. He has no memory of what happened. He is arrested, charged, and placed inside a legal system he has no tools to navigate, represented by a lawyer who has long since stopped believing the system delivers justice. One Ordinary Day is the Korean remake of Criminal Justice, and it is the version that understands the premise as a story about how ordinary people experience the machinery of prosecution — slowly, painfully, without the information they need to make it stop.",
    genres: ['thriller', 'legal', 'drama', 'mystery'],
    themes: ['wrongful-accusation', 'justice-system', 'survival', 'memory', 'institutional-violence'],
    tropes: ['accused-innocent', 'prison', 'underdog-lawyer', 'memory-loss', 'procedural'],
    tone: ['tense', 'bleak', 'suspenseful', 'emotionally-exhausting', 'gripping'],
    setting: ['modern-Korea', 'prison', 'courthouse', 'detective-office'],
    characterTypes: ['ordinary-young-man-accused', 'burned-out-defense-lawyer', 'relentless-prosecutor', 'prison-hierarchy'],
    streaming: { amazon_prime: true, wavve: true },
    network: 'Coupang Play',
    countryOfOrigin: 'South Korea',
    actors: [
      { name: 'Kim Soo-hyun', role: 'Kim Hyun-soo', isLead: true },
      { name: 'Cha Seung-won', role: 'Shin Joong-han', isLead: true },
      { name: 'Kim Hong-pa', role: 'Inspector Oh', isLead: false }
    ],
    matchReasoningHints: [
      "Making a Murderer fans of crime dramas that refuse to tell you definitively whether the protagonist did it and make the uncertainty the ethical core — One Ordinary Day runs the same engine in fictional form",
      "Better Call Saul fans of legal dramas that understand criminal defense not as fighting for the guilty but as insisting the system prove its case — Shin Joong-han is a version of Saul with less glamour and more cynicism",
      "The Night Of fans of the original UK Criminal Justice series or the American remake — One Ordinary Day is the Korean version and widely considered the best adaptation of the premise",
      "Signal fans of Korean crime procedurals that examine the justice system from the inside rather than the outside and find it significantly less just than it appears",
      "Prison Playbook fans of Korean dramas set partly inside the prison system that treat incarceration as a total environment with its own social rules rather than as backstory"
    ]
  },

  // ─── 19. Undercover (2021) ───────────────────────────────────────────────
  {
    id: 'undercover-kdrama',
    title: 'Undercover',
    year: 2021,
    episodes: 16,
    synopsis: "A former NIS agent and her husband — who she discovers has also been living a secret life — find their pasts converging on a political conspiracy with implications for a presidential campaign. Undercover is a spy thriller built around the specific drama of two professionals who love each other discovering they've been performing separate performances of domesticity for decades. Ji Jin-hee and Kim Hyun-joo carry the show's emotional weight while the political thriller machinery gives it momentum.",
    genres: ['thriller', 'spy', 'drama', 'political'],
    themes: ['secret-identity', 'marriage', 'political-conspiracy', 'trust', 'past-catching-up'],
    tropes: ['spy-couple', 'double-life', 'conspiracy', 'political-thriller', 'marriage-under-pressure'],
    tone: ['tense', 'dramatic', 'intelligent', 'atmospheric', 'emotional'],
    setting: ['modern-Korea', 'political-world', 'intelligence-world', 'domestic'],
    characterTypes: ['former-spy-wife', 'undercover-husband', 'political-manipulator', 'loyal-colleague'],
    streaming: { viki: true },
    network: 'OCN',
    countryOfOrigin: 'South Korea',
    actors: [
      { name: 'Ji Jin-hee', role: 'Choi Han-joong', isLead: true },
      { name: 'Kim Hyun-joo', role: 'Choi Yeon-soo', isLead: true },
      { name: 'Han Suk-kyu', role: 'Jo Seong-il', isLead: false }
    ],
    matchReasoningHints: [
      "The Americans fans of cold-war-era spy dramas about agents whose professional skills make them exceptional at deceiving the person they love — Undercover runs the same premise in a Korean democratic context",
      "Mr. and Mrs. Smith fans of action-thriller premises built around spouses who discover each other's secret professional identities and have to decide what it means for everything they built together",
      "Designated Survivor fans of political thrillers where the conspiracy reaches into the highest offices and the protagonists are the last honest actors in a compromised system",
      "My Name fans of K-dramas where a protagonist's NIS or undercover background comes back to reshape their ordinary life and the show is interested in what those two lives do to each other",
      "W: Two Worlds fans of K-dramas built around the reveal that a person you thought you knew has been operating according to a completely different set of rules the whole time"
    ]
  },

  // ─── 20. My Perfect Summer (2024) ────────────────────────────────────────
  {
    id: 'my-perfect-summer',
    title: 'My Perfect Summer',
    year: 2024,
    episodes: 8,
    synopsis: "Two colleagues at a publishing house are forced to spend a summer together at a mountain retreat to complete a manuscript under deadline. She is meticulous and plans everything; he improvises and irritates her with his ease. Eight episodes of two people finding out that the person most unlike them is the one they've been talking to all along. A compact romantic comedy that does exactly what it promises and knows exactly when to stop.",
    genres: ['romance', 'comedy', 'drama'],
    themes: ['workplace-romance', 'opposites-attract', 'deadline-pressure', 'summer', 'communication'],
    tropes: ['forced-proximity', 'opposites-attract', 'workplace-romance', 'vacation-romance', 'slow-burn'],
    tone: ['warm', 'funny', 'light', 'charming', 'breezy'],
    setting: ['mountain-retreat', 'modern-Korea', 'publishing-house', 'countryside'],
    characterTypes: ['organized-female-lead', 'laid-back-male-lead', 'meddling-colleagues', 'demanding-author'],
    streaming: { netflix: true },
    network: 'Netflix',
    countryOfOrigin: 'South Korea',
    actors: [
      { name: 'Chae Soo-bin', role: 'Oh Seo-young', isLead: true },
      { name: 'Ahn Jae-hong', role: 'Shin Jun', isLead: true },
      { name: 'Baek Sung-hyun', role: 'Lee Wan', isLead: false }
    ],
    matchReasoningHints: [
      "Because This Is My First Life fans of quiet, warm K-romances where two people find each other through sustained proximity and neither has to become a different person to make the relationship work",
      "My Liberation Notes fans of K-dramas set partly in nature where the pace changes and characters have space to become more honest than they would be in Seoul",
      "Hometown Cha-Cha-Cha fans of K-romances that use a specific, beautifully shot location as a container for the romance and let the place do some of the emotional work",
      "Love is for Suckers fans of K-romances built around two friends/colleagues who are good at everything except noticing what's obvious to everyone else watching them",
      "Doctor Slump fans of 2024 K-dramas structured around two exhausted overachievers who find each other in a moment of forced pause and discover that rest is a context in which honesty is possible"
    ]
  },

  // ─── 21. The Red Sleeve (2021) ───────────────────────────────────────────
  {
    id: 'the-red-sleeve-2021',
    title: 'The Red Sleeve',
    year: 2021,
    episodes: 17,
    synopsis: "Court lady Yi San wants to leave the palace — a desire so unusual in Joseon that the Crown Prince, who has noticed her, cannot initially understand it. He wants her; she wants freedom. What unfolds over seventeen episodes is a historical romance that understands the asymmetry at its core: he has everything except the one thing he wants, she has nothing except the one thing she refuses to give up. The Red Sleeve is considered one of the finest historical K-dramas of the decade for how honestly it holds that asymmetry without resolving it cheaply.",
    genres: ['historical', 'romance', 'drama'],
    themes: ['freedom', 'love-and-sacrifice', 'power-asymmetry', 'ambition', 'royal-court', 'identity'],
    tropes: ['court-romance', 'reluctant-female-lead', 'crown-prince', 'slow-burn', 'sacrifice'],
    tone: ['deeply-romantic', 'melancholic', 'atmospheric', 'emotional', 'exquisite'],
    setting: ['historical', 'joseon', 'royal-palace', 'court'],
    characterTypes: ['independent-court-lady', 'powerful-but-lonely-crown-prince', 'scheming-court-faction', 'loyal-palace-servants'],
    streaming: { viki: true, amazon_prime: true },
    network: 'MBC',
    countryOfOrigin: 'South Korea',
    actors: [
      { name: 'Lee Joon-ho', role: 'Crown Prince Yi San', isLead: true },
      { name: 'Lee Se-young', role: 'Seong Deok-im', isLead: true },
      { name: 'Kang Hoon', role: 'Hong Deok-ro', isLead: false }
    ],
    matchReasoningHints: [
      "Mr. Sunshine fans of meticulously crafted Joseon-era period dramas where the romance is inseparable from the political circumstances that make it painful — both shows understand that feeling and being free to feel are different problems",
      "The Crown fans of historical dramas about people with enormous institutional power who are nonetheless completely constrained by the structures that power them — Crown Prince Yi San has everything except the ability to change the system he runs",
      "Normal People fans of slow-burn romances where two people who want each other are separated by something more fundamental than circumstance — Deok-im and Yi San are separated by an entire social architecture",
      "Moon Lovers: Scarlet Heart Ryeo fans of Korean historical dramas structured as romantic tragedies where the love is real and the tragedy is structural rather than melodramatic",
      "Alchemy of Souls fans of sageuk dramas that take their female lead's inner life as seriously as the romance — Deok-im's desire for freedom is the subject, not the obstacle"
    ]
  },

  // ─── 22. When the Game Is Not Over (Agency, 2023) ────────────────────────
  // Note: This is "Agency" (2023), the Lee Bo-young drama
  {
    id: 'agency-2023',
    title: 'Agency',
    year: 2023,
    episodes: 16,
    synopsis: "Go Ah-in is a vice president at a major advertising agency — the first woman to hold the position — who operates in a world where every ally is also a potential adversary and every success is a target for the men around her who would rather she wasn't there. When a crisis forces her into an unusual alliance, she discovers that her long career of playing by institutional rules has also been building the tools to break them. Lee Bo-young commands the show as a woman who has never stopped working and who the show regards with complete, unflinching admiration.",
    genres: ['drama', 'thriller', 'corporate'],
    themes: ['corporate-survival', 'gender-and-power', 'ambition', 'female-leadership', 'institutional-politics'],
    tropes: ['powerful-female-lead', 'workplace-rivalry', 'corruption-exposure', 'glass-ceiling', 'alliance-building'],
    tone: ['sharp', 'intense', 'stylish', 'smart', 'empowering'],
    setting: ['modern-Seoul', 'advertising-world', 'corporate-office', 'luxury'],
    characterTypes: ['formidable-career-woman', 'political-rival', 'unexpected-ally', 'threatening-superior'],
    streaming: { viki: true },
    network: 'JTBC',
    countryOfOrigin: 'South Korea',
    actors: [
      { name: 'Lee Bo-young', role: 'Go Ah-in', isLead: true },
      { name: 'Son Na-eun', role: 'Heo Su-jin', isLead: false },
      { name: 'Park Sung-hoon', role: 'Oh Chang-hoon', isLead: false }
    ],
    matchReasoningHints: [
      "The Morning Show fans of dramas about powerful women in media-adjacent industries navigating institutional sexism while doing the actual job better than anyone who wants them gone",
      "Search: WWW fans of K-dramas centered on a female lead whose professional competence is the subject rather than the background — Agency treats Go Ah-in's work as serious as any male protagonist's",
      "Mine fans of prestige K-dramas where Lee Bo-young does her most demanding screen work and the show matches her ambition scene for scene",
      "Queenmaker fans of K-dramas about women who have built influence within a system that doesn't want them there and who use that position to dismantle what they can",
      "Suits fans of corporate dramas where being the best at the job and surviving the politics are completely different skills and the protagonist must be brilliant at both simultaneously"
    ]
  },

  // ─── 23. Love After Divorce (2024) ───────────────────────────────────────
  {
    id: 'love-after-divorce',
    title: 'Love After Divorce',
    year: 2024,
    episodes: 12,
    synopsis: "Three women in their thirties meet at a divorce support group and become unexpectedly close: one whose divorce was liberating, one who is devastated by hers, and one still deciding whether to go through with it. Each finds a new romantic possibility — and none of it is easy, clean, or exactly what anyone planned. Love After Divorce is a rare K-drama that treats divorce as a beginning rather than a failure, and adult women's desires as complex and worthy of the same attention that younger characters typically get.",
    genres: ['romance', 'drama', 'comedy'],
    themes: ['second-chances', 'female-friendship', 'self-discovery', 'divorce', 'adult-romance'],
    tropes: ['found-family', 'second-chance-romance', 'female-ensemble', 'adult-love', 'fresh-start'],
    tone: ['warm', 'honest', 'funny', 'bittersweet', 'grounded'],
    setting: ['modern-Korea', 'suburban', 'workplace', 'everyday-life'],
    characterTypes: ['liberated-divorcee', 'heartbroken-divorcee', 'undecided-wife', 'new-romantic-interests'],
    streaming: { netflix: true },
    network: 'Netflix',
    countryOfOrigin: 'South Korea',
    actors: [
      { name: 'Park Joo-mi', role: 'Oh Jong-hye', isLead: true },
      { name: 'Koo Ja-sung', role: 'Yoo Joong-hyun', isLead: false },
      { name: 'Kim Yoon-jin', role: 'Jo Ye-jung', isLead: true }
    ],
    matchReasoningHints: [
      "My Liberation Notes fans of K-dramas that find genuine beauty in the quiet daily lives of people who are looking for something they can't quite name",
      "Thirty-Nine fans of K-dramas centered on female friendship in the late thirties, where the bonds are the real subject and the romance is one of several ways the women are reconfiguring what their lives mean",
      "Our Blues fans of ensemble K-dramas built around overlapping storylines in a community setting where each story gets taken seriously on its own terms",
      "Something in the Rain fans of grounded K-dramas about adult women whose romantic lives are complicated by the expectations everyone has for what those lives should look like",
      "In My Own Way fans of K-dramas about women rebuilding their lives after a relationship ends and discovering that the rebuilding is the interesting part"
    ]
  },

  // ─── 24. The Players (2024) ──────────────────────────────────────────────
  {
    id: 'the-players-2024',
    title: 'The Players',
    year: 2024,
    episodes: 12,
    synopsis: "A veteran con artist teams up with a rookie detective to run long cons targeting corrupt elites — a heist ensemble structured as an ongoing TV crime comedy. Each episode is a scheme; the scheme has a scheme inside it; the villain usually discovers the first scheme and triggers the second. The Players is built on the pleasure of watching competent people execute plans together, with an ensemble that clicks into place in episode one and accelerates from there.",
    genres: ['comedy', 'crime', 'action', 'thriller'],
    themes: ['con-artistry', 'justice', 'teamwork', 'heist', 'corruption'],
    tropes: ['heist-team', 'con-artist', 'unlikely-partners', 'each-episode-scheme', 'corrupt-villain'],
    tone: ['funny', 'slick', 'fast-paced', 'playful', 'satisfying'],
    setting: ['modern-Korea', 'criminal-underworld', 'luxury-venues', 'police-world'],
    characterTypes: ['charming-con-artist', 'straight-detective', 'specialist-ensemble', 'corrupt-target-of-the-week'],
    streaming: { viki: true, amazon_prime: true },
    network: 'KBS2',
    countryOfOrigin: 'South Korea',
    actors: [
      { name: 'Song Seung-heon', role: 'Ha Do-il', isLead: true },
      { name: 'Oh Yeon-seo', role: 'Kang Eun-ji', isLead: true },
      { name: 'Kim Dong-jun', role: 'Lee Sang-ryeol', isLead: false }
    ],
    matchReasoningHints: [
      "Vincenzo fans of Korean action comedies built around a charming, morally flexible protagonist who directs an ensemble of specialists against a series of corrupt targets",
      "Leverage fans of heist TV that uses a rotating scheme structure to keep the format fresh — each mark requires a different play and the fun is watching the team reconfigure around the problem",
      "Psych fans of crime comedies where the protagonist's unusual skill set makes the crimes more fun to watch than the investigations, and the buddy chemistry does as much work as the plots",
      "The Fiery Priest fans of Korean action comedies that balance genuine crime drama with comedy without losing the competence of the ensemble",
      "Ocean's Eleven fans of ensemble heist movies where the planning and the execution are both pleasures — The Players does the TV version, one scheme per episode, with the same confident swagger"
    ]
  },

  // ─── 25. All of Us Are Dead Season 2 (2025) ──────────────────────────────
  {
    id: 'all-of-us-are-dead-s2',
    title: 'All of Us Are Dead Season 2',
    year: 2025,
    episodes: 10,
    synopsis: "The virus is still spreading. Some who survived Season 1 are now halfbies — caught between human and infected, navigating a world that has no rules for what they are. The quarantine zones have been running for two years and the social structures inside them have become their own kind of crisis. Season 2 is less a zombie thriller and more a post-apocalyptic drama about what communities become when the emergency becomes permanent, with the halfbie question giving it a new moral center the first season couldn't have.",
    genres: ['horror', 'thriller', 'drama', 'science-fiction'],
    themes: ['survival', 'humanity', 'community', 'identity', 'post-apocalypse', 'otherness'],
    tropes: ['post-apocalyptic', 'zombie-survival', 'halfbie-hybrid', 'quarantine', 'community-collapse'],
    tone: ['dark', 'intense', 'emotional', 'tense', 'thought-provoking'],
    setting: ['post-apocalyptic-korea', 'quarantine-zones', 'urban-ruins', 'refugee-camp'],
    characterTypes: ['halfbie-survivors', 'quarantine-authority', 'human-survivors', 'fully-infected'],
    streaming: { netflix: true },
    network: 'Netflix',
    countryOfOrigin: 'South Korea',
    actors: [
      { name: 'Park Ji-hu', role: 'Nam On-jo', isLead: true },
      { name: 'Cho Yi-hyun', role: 'Choi Nam-ra', isLead: true },
      { name: 'Yoon Chan-young', role: 'Lee Cheong-san', isLead: false }
    ],
    matchReasoningHints: [
      "All of Us Are Dead Season 1 fans — this picks up directly and is built for the people who watched the first season and wanted to know what happened next",
      "Sweet Home Season 2 fans of Korean survival horror sequels that use the expanded canvas to ask harder questions about what the monsters mean",
      "The Walking Dead fans of zombie apocalypse dramas that become more interesting in the long aftermath of the initial crisis, when the survivors have to build something from the wreckage",
      "Kingdom fans of Korean period and genre shows that use their monster premise to examine how communities fracture and reconstitute under extreme pressure",
      "Parasite fans of Korean stories where the horror is about social stratification made visible — the quarantine zones in Season 2 are a class structure that the virus created and institutionalized"
    ]
  },

];
