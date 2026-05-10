/**
 * J-Drama Catalog Expansion Batch E — 2026
 * 5 high-demand J-dramas filling search gaps.
 * Covers: Good Morning Call, Switch Girl\!\!, Beautiful Bones: Sakurako's Investigation,
 * Life on Mars Japan, Dragon Zakura (2021).
 * Dedup verified against 1,910 existing catalog IDs before merge.
 */
module.exports = [

  // ─── 1. Good Morning Call (2016) ─────────────────────────────────────────
  {
    id: 'good-morning-call',
    title: 'Good Morning Call',
    nativeTitle: 'グッドモーニング・コール',
    year: 2016,
    episodes: 17,
    synopsis: "Uehara Nao signs a lease on her dream apartment and discovers the most popular, beautiful, and cold boy in school has signed the same lease on the same apartment due to a rental scam. Neither can afford to break the contract. They agree to keep the cohabitation secret from their classmates — which becomes increasingly difficult as the proximity that started as logistical becomes something neither of them expected. A Netflix Japan romcom adaptation of the classic manga that is lower-key than its premise suggests and runs on the specific comfort of two people slowly becoming essential to each other.",
    genres: ['romance', 'comedy', 'drama', 'school'],
    themes: ['cohabitation', 'friendship', 'first-love', 'growing-up', 'identity'],
    tropes: ['forced-cohabitation', 'popular-cold-boy', 'cheerful-female-lead', 'school-setting', 'secret-relationship'],
    tone: ['sweet', 'light', 'warm', 'slow-burn', 'charming'],
    setting: ['contemporary-japan', 'shared-apartment', 'high-school'],
    characterTypes: ['clumsy-cheerful-female-lead', 'cold-popular-male-lead', 'supportive-friend-group'],
    streaming: { netflix: true },
    network: 'Netflix Japan',
    countryOfOrigin: 'Japan',
    actors: [
      { name: 'Haruka Fukuhara', role: 'Nao Uehara', isLead: true },
      { name: 'Shunya Shiraishi', role: 'Hisashi Daichi', isLead: true }
    ],
    matchReasoningHints: [
      "Because This Is My First Life fans of forced-cohabitation romcoms where the living arrangement creates a slow-burn romance from two people who would not have found each other otherwise",
      "Strong Woman Do Bong-soon fans of K-drama-adjacent romcoms with a cheerful, chaotic female lead and a cold, controlled male lead who gradually becomes devoted — Good Morning Call runs the same formula in Japanese",
      "Itazura Na Kiss fans of classic manga adaptations featuring a persistent female lead and an initially uninterested male lead, who fans of the original will recognize as a gentler iteration of the archetype",
      "My Love From the Star fans of romcoms built on forced proximity where the male lead's coldness is gradually revealed to be protection rather than indifference",
      "Weightlifting Fairy Kim Bok-joo fans of coming-of-age romances where the relationship develops out of genuine friendship and the show treats high school as a space with real emotional stakes"
    ]
  },

  // ─── 2. Switch Girl\!\! (2012) ──────────────────────────────────────────────
  {
    id: 'switch-girl',
    title: 'Switch Girl\!\!',
    nativeTitle: 'スイッチガール\!\!',
    year: 2012,
    episodes: 10,
    synopsis: "Nika Tamiya is the perfect girl at school: beautiful, elegant, fashionable, beloved. At home, she is a complete disaster — slovenly, loud, eating whatever she wants in trackpants. Her 'switch' between these two modes is her most closely guarded secret. Then Arata Ichinose moves next door — and he has exactly the same switch. They become the only people who have ever seen each other's real face, and the comedy becomes a romance. A Fuji TV manga adaptation that runs briskly and earns its finale by taking the premise of authenticity more seriously than a comedy usually does.",
    genres: ['romance', 'comedy', 'school'],
    themes: ['authenticity', 'identity', 'first-love', 'self-acceptance', 'social-performance'],
    tropes: ['hidden-true-self', 'perfect-facade', 'neighbors', 'school-romance', 'unexpected-soulmate'],
    tone: ['comedic', 'sweet', 'fast-paced', 'charming', 'warm'],
    setting: ['contemporary-japan', 'high-school', 'neighborhood', 'home'],
    characterTypes: ['perfect-at-school-disaster-at-home-female-lead', 'equally-disguised-male-lead', 'oblivious-classmates'],
    streaming: { amazon_prime: true },
    network: 'Fuji TV',
    countryOfOrigin: 'Japan',
    actors: [
      { name: 'Takei Emi', role: 'Tamiya Nika', isLead: true },
      { name: 'Kiriyama Renn', role: 'Ichinose Arata', isLead: true }
    ],
    matchReasoningHints: [
      "She Was Pretty fans of romcoms built on the gap between public presentation and private reality — Switch Girl\!\! literalizes the metaphor and runs it as physical comedy",
      "My ID Is Gangnam Beauty fans of K-drama-adjacent stories about the performance of beauty and the specific exhaustion of maintaining a curated self — the Japanese version has the same insight with more slapstick",
      "Business Proposal fans of light, brisk romantic comedies where the misunderstanding is built into the premise and the resolution comes from the couple finding each other's actual selves",
      "Oh My Venus fans of transformation-premise romcoms where the comedy comes from the gap between how the lead appears in public versus who they actually are, and the romance is the person who likes the real version",
      "What's Wrong with Secretary Kim fans of office-adjacent romcoms where both leads are maintaining professional personas that require enormous effort — Switch Girl\!\! is the school version of that premise at maximum comedy"
    ]
  },

  // ─── 3. Beautiful Bones: Sakurako's Investigation (2015) ─────────────────
  {
    id: 'beautiful-bones-sakurako',
    title: "Beautiful Bones: Sakurako's Investigation",
    nativeTitle: '櫻子さんの足下には死体が埋まっている',
    year: 2015,
    episodes: 12,
    synopsis: "Sakurako Kujo is an osteologist — she studies bones — and her hobby is finding and reassembling skeletons she discovers in nature. She is accompanied on these expeditions by a high school boy named Shotaro, who has appointed himself her handler and spends most of their time together preventing her from taking human remains home. When they find suspicious bones, Sakurako reads them the way others read text: with total accuracy and zero social grace. A mystery drama that is visually stunning, animated with extraordinary care, and anchored by a protagonist who is the most unsettling version of the brilliant-detective archetype.",
    genres: ['mystery', 'thriller', 'drama'],
    themes: ['death', 'mortality', 'observation', 'beauty-in-bones', 'grief', 'unusual-friendship'],
    tropes: ['brilliant-detective', 'unusual-protagonist', 'mystery-of-the-week', 'odd-couple', 'forensic-expertise'],
    tone: ['atmospheric', 'gorgeous', 'melancholic', 'cerebral', 'mysterious'],
    setting: ['contemporary-japan', 'outdoor-locations', 'university', 'natural-settings'],
    characterTypes: ['brilliant-eccentric-protagonist', 'grounding-companion', 'crime-victims', 'curious-outsiders'],
    streaming: { crunchyroll: true, funimation: true },
    network: 'TV Tokyo',
    countryOfOrigin: 'Japan',
    actors: [
      { name: 'Shida Mirai', role: 'Sakurako Kujo', isLead: true },
      { name: 'Taishi Nakagawa', role: 'Tatewaki Shotaro', isLead: true }
    ],
    matchReasoningHints: [
      "Sherlock fans of procedural mystery dramas anchored by a protagonist whose genius makes them socially catastrophic and professionally indispensable — Sakurako is Sherlock with bones instead of deduction",
      "Bones fans of forensic procedurals where the expert's relationship to physical remains is the show's central emotional register — Sakurako's love of bones is an expression of her relationship to death that the show takes seriously",
      "Through the Darkness fans of crime procedurals anchored by someone who thinks about death differently from everyone around them and uses that difference to understand what ordinary investigators cannot",
      "Signal fans of Korean procedurals interested in how a dead body communicates the circumstances of its death to someone who knows how to listen — Sakurako reads bones the way Signal's detectives read cold case files",
      "Hannibal fans of psychological crime dramas where the expert's perspective on death is genuinely beautiful and genuinely disturbing, and the show holds both without apologizing for either"
    ]
  },

  // ─── 4. Life on Mars Japan (2018) ─────────────────────────────────────────
  {
    id: 'life-on-mars-japan',
    title: 'Life on Mars Japan',
    nativeTitle: 'ライフ・オン・マーズ～異世界の刑事～',
    year: 2018,
    episodes: 10,
    synopsis: "In 2018, a methodical, evidence-focused detective is chasing a serial killer when he's hit by a car — and wakes up in 1989, still a detective but surrounded by officers who use methods he considers illegal, brutal, and deeply effective. The Japanese adaptation of the British series drops the protagonist into the bubble economy era and makes the culture shock specifically about surveillance, evidence, and what 'proper procedure' means when the result is the same dead body either way. Tomoya Nagase carries the increasingly disoriented detective with complete commitment to the show's unresolved philosophical question.",
    genres: ['crime', 'thriller', 'mystery', 'science-fiction', 'drama'],
    themes: ['time-travel', 'justice-vs-law', 'past-vs-present', 'morality', 'identity', 'procedure'],
    tropes: ['time-travel', 'fish-out-of-water', 'detective-procedural', 'culture-clash', 'moral-ambiguity'],
    tone: ['gritty', 'cerebral', 'atmospheric', 'tense', 'philosophical'],
    setting: ['1989-japan', 'modern-japan', 'detective-office', 'urban'],
    characterTypes: ['modern-detective-in-past', 'old-school-brutal-cops', 'serial-killer', 'trapped-colleagues'],
    streaming: { amazon_prime: true },
    network: 'TV Asahi',
    countryOfOrigin: 'Japan',
    actors: [
      { name: 'Tomoya Nagase', role: 'Saeba Ikuo', isLead: true },
      { name: 'Kenichi Endo', role: 'Tomisaka', isLead: false }
    ],
    matchReasoningHints: [
      "Life on Mars (UK) fans who want to see the premise in a Japanese context — the bubble economy's specific optimism makes 1989 Japan a particularly disorienting destination, and the adaptation earns its version of the ending",
      "Signal fans of Korean crime procedurals that use temporal displacement to ask questions about justice that linear time would prevent — Life on Mars Japan runs the same philosophical investigation",
      "Dark fans of crime procedurals where the mystery structure and the time-travel structure are the same structure — both shows use time to ask when and where the right answer was possible",
      "Mindhunter fans of crime dramas interested in the methodology of investigation rather than just the resolution — the 1989 detective's methods are different from 2018 methods and both shows take those differences seriously",
      "The Bridge (Broen) fans of Scandinavian-style crime procedurals interested in how institutional and cultural context determines what police can and cannot do — the culture gap here is temporal rather than national"
    ]
  },

  // ─── 5. Dragon Zakura (2021) ──────────────────────────────────────────────
  {
    id: 'dragon-zakura',
    title: 'Dragon Zakura',
    nativeTitle: 'ドラゴン桜',
    year: 2021,
    episodes: 10,
    synopsis: "A lawyer with a failing practice takes a job at the worst-performing high school in Japan and makes a bet: he can get the students into Tokyo University — Japan's most elite school — in one year. The 2021 sequel to the beloved 2005 original follows a new generation of students who are as diverse in their reasons for failing as they are in what they discover about themselves when an adult starts believing they can actually do it. Yamazaki Kento anchors an ensemble drama about the specific violence that exam systems do to teenagers, and the equally specific power of a teacher who refuses to accept that score as the final word.",
    genres: ['drama', 'school', 'coming-of-age'],
    themes: ['education', 'class-divide', 'self-worth', 'ambition', 'social-mobility', 'mentorship'],
    tropes: ['inspirational-teacher', 'underdog-students', 'exam-pressure', 'found-family', 'social-commentary'],
    tone: ['inspirational', 'emotionally-resonant', 'sharp', 'sometimes-funny', 'warm'],
    setting: ['contemporary-japan', 'high-school', 'cram-school', 'examination-world'],
    characterTypes: ['unconventional-teacher', 'struggling-students', 'skeptical-faculty', 'divided-families'],
    streaming: { netflix: true },
    network: 'TBS',
    countryOfOrigin: 'Japan',
    actors: [
      { name: 'Abe Hiroshi', role: 'Sakuragi Kenji', isLead: true },
      { name: 'Yamazaki Kento', role: 'Kishi Yutaro', isLead: true },
      { name: 'Hashimoto Kanna', role: 'Mizuno Kishida', isLead: false }
    ],
    matchReasoningHints: [
      "Sky Castle fans of Korean dramas about the extreme pressure of elite academic admission and what it does to students and families — Dragon Zakura is the inverse: what happens when someone outside that system decides to enter it",
      "The Prime of Miss Jean Brodie fans of dramas about the transformative potential of a single teacher who treats students as capable before they believe it themselves",
      "Reply 1988 fans of ensemble coming-of-age dramas where the social pressure of youth is rendered with enough specificity that every scene is recognizable regardless of cultural context",
      "Extraordinary Attorney Woo fans of dramas where institutional systems (legal, educational) are interrogated through a protagonist who doesn't share the system's assumptions about who deserves to succeed",
      "Juvenile Justice fans of Japanese and Korean dramas that take the institutional processing of young people seriously as a subject — Dragon Zakura asks what education is actually for in the same spirit"
    ]
  },

];
