/**
 * DramaMatch K-Drama Catalog — Batch AA (Mixed)
 *
 * 10 titles: Nevertheless, Thirty-Nine, Law School, Bloodhounds,
 *            Yumi's Cells, One Ordinary Day, Under the Queen's Umbrella,
 *            Spring Night, Queen In-hyun's Man, Connect
 *
 * Added: 2026-04-15
 */

module.exports = [

  {
    id: "nevertheless-kdrama",
    title: "Nevertheless",
    nativeTitle: "알고있지만,",
    year: 2021,
    episodes: 10,
    synopsis: "Park Jae-eon collects people without truly wanting them. Yoo Na-bi knows exactly the kind of person he is — and falls for him anyway. A refreshingly honest K-drama about desire without clarity: what happens when you want someone who is everything they said they were upfront, and you keep choosing them regardless. Adapted from a popular webtoon, it leans into the morally ambiguous slow-burn rather than resolving it neatly.",
    genres: ["romance", "drama"],
    themes: ["desire", "emotional-unavailability", "self-deception", "ambiguity", "attraction-without-commitment"],
    tropes: ["will-they-wont-they", "toxic-attraction", "free-spirit-love-interest", "slow-burn", "webtoon-adaptation"],
    tone: ["sensual", "bittersweet", "melancholic", "romantic", "honest"],
    setting: ["modern", "urban", "campus", "art-school"],
    characterTypes: ["non-committal-male-lead", "self-aware-female-lead", "complicated-supporting-cast"],
    streaming: { netflix: true },
    network: "JTBC",
    actors: [
      { name: "Song Kang", role: "Park Jae-eon", isLead: true },
      { name: "Han So-hee", role: "Yoo Na-bi", isLead: true },
      { name: "Chae Jong-hyeop", role: "Yang Do-hyeok", isLead: false }
    ],
    matchReasoningHints: [
      "Normal People fans of stories about two people who are completely wrong for each other in every way they can name, and completely unable to stop — Nevertheless has the same raw, uncomfortable honesty about desire vs. wisdom",
      "Fleabag fans of female protagonists who are smart enough to see exactly what's happening to them and keep choosing it anyway — Na-bi narrates her own trap with the same clear-eyed self-knowledge",
      "Conversations with Friends fans of quiet, emotionally precise romantic dramas where the subtext is always more loaded than the dialogue and the ambiguity is the entire point",
      "Euphoria fans of shows that refuse to condemn or redeem their characters' bad romantic choices and instead just let the consequences land — Nevertheless has the same willingness to sit in discomfort",
      "It's Okay to Not Be Okay fans of K-dramas willing to let characters be messy and unresolved — this is what an art-school slow-burn looks like when the show doesn't want to fix anyone"
    ]
  },

  {
    id: "thirty-nine-kdrama",
    title: "Thirty-Nine",
    nativeTitle: "서른, 아홉",
    year: 2022,
    episodes: 12,
    synopsis: "Three women — a dermatologist, an acting teacher, and a department store manager — have been best friends since they sat next to each other by accident at age sixteen. Now they're approaching forty. One of them just got a terminal diagnosis. A drama about the specific weight of female friendship in the face of mortality, and what it means to love someone you know you're going to lose.",
    genres: ["romance", "drama", "friendship"],
    themes: ["female-friendship", "mortality", "adult-love", "loss", "facing-forty"],
    tropes: ["female-trio", "terminal-illness", "adult-romance", "friendship-as-love-story", "bittersweet-ending"],
    tone: ["emotional", "heartwarming", "melancholic", "mature", "tearjerker"],
    setting: ["modern", "urban", "seoul"],
    characterTypes: ["three-best-friends", "steady-male-partner", "imperfect-family"],
    streaming: { amazon_prime: true },
    network: "JTBC",
    actors: [
      { name: "Son Ye-jin", role: "Cha Mi-jo", isLead: true },
      { name: "Jeon Mi-do", role: "Jung Chan-young", isLead: true },
      { name: "Kim Ji-hyun", role: "Jang Joo-hee", isLead: true },
      { name: "Yeon Woo-jin", role: "Kim Sun-woo", isLead: false }
    ],
    matchReasoningHints: [
      "Our Blues fans of ensemble dramas built around the texture of adult friendship — Thirty-Nine is what Our Blues looks like when you narrow the focus to three women and push the stakes all the way to the terminal",
      "Big Little Lies fans of shows where the central relationship is between women and everything else — including the men — is peripheral context",
      "Fleabag fans of stories that take female interior life completely seriously and don't make any of it easier than it actually is",
      "Grace and Frankie fans of dramas built around a specific friendship between women navigating the second half of life — Thirty-Nine is the Korean version, warmer in tone and more emotionally direct",
      "Hospital Playlist fans of ensemble shows where the group dynamic is the emotional spine and individual romance is just one thread in a larger fabric of friendship and loyalty"
    ]
  },

  {
    id: "law-school-kdrama",
    title: "Law School",
    nativeTitle: "로스쿨",
    year: 2021,
    episodes: 16,
    synopsis: "A revered law professor at a prestigious university becomes the prime suspect in a murder that occurs on campus. His students — including a sharp investigative-journalism transfer and a morally rigid top student — begin their own investigation, discovering that everyone involved knows more than they're saying. A legal thriller that uses the classroom as a courtroom and asks whether justice and law are actually the same thing.",
    genres: ["thriller", "mystery", "drama", "legal"],
    themes: ["justice", "corruption", "truth", "academic-hierarchy", "legal-ethics"],
    tropes: ["professor-suspect", "student-investigators", "murder-mystery", "unreliable-narrator", "academic-pressure"],
    tone: ["suspenseful", "cerebral", "intense", "morally-complex"],
    setting: ["modern", "law-school", "campus", "courtroom"],
    characterTypes: ["brilliant-morally-gray-professor", "investigative-female-student", "rule-bound-male-student", "secretive-faculty"],
    streaming: { netflix: true },
    network: "JTBC",
    actors: [
      { name: "Kim Myung-min", role: "Yang Jong-hoon", isLead: true },
      { name: "Kim Bum", role: "Han Joon-hwi", isLead: true },
      { name: "Ryu Hye-young", role: "Kang Sol A", isLead: true }
    ],
    matchReasoningHints: [
      "Beyond Evil fans of K-dramas where the most interesting character might be the killer and the moral framework refuses to be simple — Law School has the same quality of making you interrogate what you actually believe about guilt and innocence",
      "The Good Wife fans of legal dramas where the cases matter but the institutional corruption underneath is the real subject — Law School uses the law school setting the way The Good Wife uses the firm: as a mirror for power",
      "Sky Castle fans of Korean dramas set in elite academic environments where the status games are vicious — Law School brings actual murder to the SKY Castle energy",
      "How to Get Away with Murder fans of legal thrillers where the protagonist teaching students about law is surrounded by secrets that implicate everyone — the premise is nearly identical, the tone is darker",
      "Vincenzo fans of K-dramas with a morally complicated protagonist who operates outside the conventional rules to achieve something that looks like justice from a certain angle"
    ]
  },

  {
    id: "bloodhounds-kdrama",
    title: "Bloodhounds",
    nativeTitle: "블러드하운드",
    year: 2023,
    episodes: 8,
    synopsis: "Two young boxers — Kim Gun-woo and Hong Woo-jin — take out a loan to help their families and end up entangled with a predatory lending syndicate that destroys people's lives. To pay it back, they'll have to fight their way through an entire criminal organization. Less a revenge thriller and more an action showcase built around two leads with genuine fighting capability and a script that doesn't slow down long enough to be questioned.",
    genres: ["action", "thriller", "crime"],
    themes: ["loyalty", "financial-desperation", "corruption", "brotherhood", "debt-trap"],
    tropes: ["action-hero-duo", "underdog-fighters", "crime-world", "unlikely-alliance", "one-against-many"],
    tone: ["intense", "gritty", "action-packed", "dark", "kinetic"],
    setting: ["modern", "urban", "criminal-underworld", "seoul"],
    characterTypes: ["skilled-fighter-hero", "loyal-partner", "predatory-villain", "underworld-matriarch"],
    streaming: { netflix: true },
    network: "Netflix",
    actors: [
      { name: "Woo Do-hwan", role: "Kim Gun-woo", isLead: true },
      { name: "Lee Sang-yi", role: "Hong Woo-jin", isLead: true },
      { name: "Heo Jun-ho", role: "Choi Tae-ho", isLead: false }
    ],
    matchReasoningHints: [
      "Roundup / The Outlaws fans of Korean crime-action films where the pleasure is watching a skilled protagonist move through enemies efficiently — Bloodhounds is that energy in 8-episode form with two leads instead of one",
      "Vincenzo fans who want more action and less boardroom chess — this is what Vincenzo looks like when it keeps its foot on the gas for an entire eight-episode run without stopping to explain the law",
      "Squid Game fans who want the survival-under-economic-pressure premise but with real physical combat rather than games — the loan shark system here is as viscerally predatory",
      "Money Heist fans of heist/crime shows where the team dynamic and clear villain structure make the action sequences land harder because you care who's fighting",
      "Kill Boksoon fans of Korean action content that takes the fights seriously as craft — Bloodhounds has the same commitment to choreographed combat as a legitimate visual language"
    ]
  },

  {
    id: "yumi-cells",
    title: "Yumi's Cells",
    nativeTitle: "유미의 세포들",
    year: 2021,
    episodes: 14,
    synopsis: "Ordinary office worker Kim Yumi navigates her career, friendships, and romantic relationships — narrated by the animated 'cells' inside her brain that represent emotion, hunger, reason, embarrassment, and love. A hybrid live-action/animation format that makes the inner experience of being anxious, hopeful, and romantically awkward both literally visible and surprisingly moving. Adapted from a beloved webtoon.",
    genres: ["romance", "comedy", "fantasy", "slice-of-life"],
    themes: ["self-discovery", "emotional-growth", "workplace-romance", "identity", "ordinary-life"],
    tropes: ["animated-inner-world", "workplace-romance", "accidental-cohabitation", "growth-through-relationships", "webtoon-adaptation"],
    tone: ["light-hearted", "sweet", "unique", "comedic", "warm"],
    setting: ["modern", "urban", "office", "apartment"],
    characterTypes: ["relatable-everywoman", "quiet-love-interest", "animated-inner-cast", "supportive-friends"],
    streaming: { viki: true, amazon_prime: true },
    network: "tvN",
    actors: [
      { name: "Kim Go-eun", role: "Kim Yumi", isLead: true },
      { name: "Ahn Bo-hyun", role: "Yoo Ba-bi", isLead: true },
      { name: "Park Jin-young", role: "Goo Woong", isLead: true }
    ],
    matchReasoningHints: [
      "Inside Out fans who want a romantic drama that uses the same 'animated emotions as characters' premise but applied to adult love life — Yumi's Cells does exactly this, at feature-drama length, with a live-action world surrounding it",
      "Weightlifting Fairy Kim Bok-joo fans of K-dramas built around a relatable, imperfect female lead navigating regular human emotions — Yumi is the next evolution of that archetype: older, more tired, just as endearing",
      "Reply 1988 fans of dramas where the specific texture of everyday life is the point — Yumi's Cells has that same quality of making the ordinary feel worth studying",
      "New Girl fans of ensemble comedies where the main character's awkwardness is the engine and the supporting cast (including the internal cast) provides all the friction",
      "Ouran High School Host Club fans of shows that create their own internal logic and commit to it completely — the cell world has the same self-consistent comedic rules and delivers them with the same straight face"
    ]
  },

  {
    id: "one-ordinary-day",
    title: "One Ordinary Day",
    nativeTitle: "어느날",
    year: 2021,
    episodes: 8,
    synopsis: "Kim Hyun-soo is a university student who wakes up next to a dead woman with no memory of how he got there. A disgraced lawyer with nothing left to lose agrees to defend him. A Korean remake of the British series Criminal Justice, it's less interested in whether Hyun-soo is guilty and more interested in what the legal system does to people — regardless of guilt — while it processes them.",
    genres: ["thriller", "mystery", "drama", "legal"],
    themes: ["justice", "legal-system", "trauma", "memory", "class-divide"],
    tropes: ["wrongly-accused", "unlikely-lawyer", "murder-mystery", "lawyer-client-bond", "system-vs-individual"],
    tone: ["dark", "suspenseful", "intense", "emotional", "gritty"],
    setting: ["modern", "urban", "prison", "courtroom"],
    characterTypes: ["wrongly-accused-youth", "weathered-defense-lawyer", "unsympathetic-system", "ambiguous-witnesses"],
    streaming: { viki: true },
    network: "Coupang Play",
    actors: [
      { name: "Kim Soo-hyun", role: "Kim Hyun-soo", isLead: true },
      { name: "Cha Seung-won", role: "Shin Joong-han", isLead: true }
    ],
    matchReasoningHints: [
      "Beyond Evil fans of K-dramas that take the criminal justice system seriously as a site of moral ambiguity — One Ordinary Day uses the prison-and-courtroom setting to make the same point Beyond Evil makes about institutions: they process people, they don't resolve guilt",
      "Criminal Justice (UK) fans who've seen the original and want to understand why the Korean remake is considered one of the better translations — the setting changes but the claustrophobic loss of self remains",
      "Mindhunter fans of procedural dramas that are more interested in the system than in the crime — this is the defense attorney version of that: watching the machinery chew someone up from the inside",
      "The Night Of fans of crime dramas where the uncertainty about guilt is structural, not a twist — One Ordinary Day is built the same way: the point is not to give you certainty",
      "Juvenile Justice fans of K-dramas that use legal proceedings to make uncomfortable arguments about justice, age, and accountability — same unflinching institutional focus, different defendant"
    ]
  },

  {
    id: "under-the-queen-umbrella",
    title: "Under the Queen's Umbrella",
    nativeTitle: "슈룹",
    year: 2022,
    episodes: 16,
    synopsis: "Queen Im Hwa-ryeong didn't want to be in the palace, doesn't enjoy politics, and genuinely cannot stand most of her sons. But she will do anything — lie, scheme, embarrass herself completely, or go to war — to protect them from the succession games that could kill them. A historical drama that treats motherhood not as noble sacrifice but as desperate, often undignified, strategic survival. Frequently funny; regularly devastating.",
    genres: ["historical", "drama", "political", "comedy"],
    themes: ["motherhood", "succession-crisis", "political-survival", "maternal-love", "palace-politics"],
    tropes: ["fierce-mother", "court-intrigue", "palace-politics", "strong-female-lead", "succession-race"],
    tone: ["dramatic", "comedic", "intense", "regal", "emotionally-complex"],
    setting: ["joseon", "royal-court", "palace"],
    characterTypes: ["determined-queen-mother", "ruthless-court-rivals", "flawed-princes", "loyal-court-ladies"],
    streaming: { netflix: true },
    network: "tvN",
    actors: [
      { name: "Kim Hye-soo", role: "Queen Im Hwa-ryeong", isLead: true },
      { name: "Kim Hae-sook", role: "Queen Dowager", isLead: false },
      { name: "Choi Won-young", role: "King Sejong", isLead: false }
    ],
    matchReasoningHints: [
      "Mr. Sunshine fans of Joseon-era dramas with impeccable production design and a female protagonist who refuses the passivity the period would assign her — the Queen operates with the same intelligence and defiance as Go Ae-shin",
      "SKY Castle fans of Korean dramas where a parent will do literally anything to protect their child's position — Under the Queen's Umbrella is that premise in a Joseon setting with actual political stakes instead of exam scores",
      "The Crown fans of historical dramas built around the psychological cost of operating within a system designed to erase individual will — the Queen navigates court politics with the same careful claustrophobia as Elizabeth",
      "Succession fans who want the family power-struggle drama but with a mother rather than a patriarch at the center — the dynamic of sons being tested and found wanting while a parent tries to keep the institution alive maps directly",
      "Hospital Playlist fans of ensemble dramas that build genuine warmth for a whole ensemble before breaking your heart with what happens to individual members — the Queen's relationship with each son follows exactly this structure"
    ]
  },

  {
    id: "spring-night-kdrama",
    title: "Spring Night",
    nativeTitle: "봄밤",
    year: 2019,
    episodes: 32,
    synopsis: "Ji-ho is a librarian in a stable but hollow relationship she can't quite explain why she's in. Jung-in is a pharmacist raising his son alone after a tragedy, convinced no one serious would want that. They meet by accident, keep meeting, and slowly — over thirty-two episodes of very ordinary time — fall into something that neither of them was planning for and neither can quite walk away from. The rare K-drama about adult romance as it actually happens: gradually, quietly, and completely.",
    genres: ["romance", "drama", "slice-of-life"],
    themes: ["mature-love", "single-parenthood", "family-opposition", "everyday-connection", "starting-over"],
    tropes: ["single-dad-lead", "realistic-romance", "slow-burn", "family-disapproval", "leaving-a-bad-relationship"],
    tone: ["slow-burn", "warm", "realistic", "gentle", "emotionally-precise"],
    setting: ["modern", "small-city", "pharmacy", "library"],
    characterTypes: ["quiet-single-father", "searching-young-woman", "disapproving-family", "protective-friends"],
    streaming: { netflix: true },
    network: "MBC",
    actors: [
      { name: "Jung Hae-in", role: "Yoo Jung-in", isLead: true },
      { name: "Han Ji-min", role: "Lee Ji-ho", isLead: true }
    ],
    matchReasoningHints: [
      "My Mister fans who want the mature, quiet romantic frequency of that show but with a happier trajectory and a protagonist who isn't carrying quite as much weight — Spring Night has the same patience and the same respect for adult interiority",
      "Romance is a Bonus Book fans of K-dramas about adults navigating love alongside actual adult life complications — single parenthood, family pressure, existing relationships — without the drama feeling artificially accelerated",
      "Normal People fans of slow-burn romances where the obstacles are psychological and relational rather than external — Spring Night is the K-drama version of that: a love story about two people who keep being honest with each other and finding it impossibly hard",
      "Something in the Rain fans of Han Ji-min-energy slow romance where the emotional precision is the entire point — this is her second collaboration with Jung Hae-in and where the chemistry was actually fulfilled narratively",
      "One Day (BBC/Netflix) fans of romances built on time and ordinariness — Spring Night has the same understanding that the most romantic thing is just being consistently, quietly present for someone over a long period"
    ]
  },

  {
    id: "queen-in-hyuns-man",
    title: "Queen In-hyun's Man",
    nativeTitle: "인현왕후의 남자",
    year: 2012,
    episodes: 16,
    synopsis: "Joseon scholar Kim Boong-do discovers a talisman that throws him forward in time to modern Seoul whenever his life is in danger. There he keeps encountering Choi Hee-jin, an actress preparing for a role as Joseon Queen In-hyun. They fall in love across two eras, though time travel keeps erasing what they've built together. A tight, clever romance built on the specific ache of connection that keeps being interrupted by forces neither party can control.",
    genres: ["romance", "fantasy", "historical", "comedy"],
    themes: ["time-travel", "fate", "cross-era-love", "identity", "memory-loss"],
    tropes: ["time-travel", "fish-out-of-water", "fated-lovers", "historical-modern-contrast", "memory-wipe"],
    tone: ["whimsical", "romantic", "comedic", "heartfelt", "bittersweet"],
    setting: ["joseon", "modern-seoul", "supernatural"],
    characterTypes: ["principled-joseon-scholar", "bubbly-modern-actress", "scheming-court-rivals"],
    streaming: { viki: true },
    network: "tvN",
    actors: [
      { name: "Ji Hyun-woo", role: "Kim Boong-do", isLead: true },
      { name: "Yoo Inna", role: "Choi Hee-jin", isLead: true }
    ],
    matchReasoningHints: [
      "Goblin fans of K-dramas built on a supernatural mechanic that keeps lovers apart and makes every moment of connection feel earned by what it costs — the talisman in QIM functions exactly like Goblin's sword: both gift and curse",
      "Signal fans of Korean dramas that use a time/communication gap between two people as the central structural device — the tragedy here is romantic rather than investigative but the ache is identical",
      "Outlander fans of historical/modern time-travel romances where the mechanism is genuinely cruel about how much it can take away — QIM has the same quality of making you dread what the plot will erase next",
      "W: Two Worlds fans of K-dramas that play with the relationship between fiction and reality — Hee-jin is literally performing the historical period that Boong-do comes from, and the show never stops being clever about that recursion",
      "My Love from the Star fans of romance dramas built on the specific longing of an impossible love — QIM is frequently cited as the blueprint for exactly this K-drama subgenre"
    ]
  },

  {
    id: "connect-kdrama",
    title: "Connect",
    nativeTitle: "커넥트",
    year: 2022,
    episodes: 6,
    synopsis: "Ha Dong-soo is immortal — he heals instantly, every time. Until a serial killer harvests his eye. Now Dong-soo can see through the killer's eye: every victim, every act. He can feel what the killer feels. He has to find him before anyone else becomes what he already saw. A dark fantasy thriller that uses the shared-senses premise to make the hunter/hunted relationship genuinely symbiotic — and disturbing.",
    genres: ["thriller", "horror", "fantasy", "crime"],
    themes: ["surveillance", "identity", "trauma", "predator-prey", "duality"],
    tropes: ["supernatural-ability", "serial-killer-hunt", "body-horror", "hunter-and-hunted", "shared-senses"],
    tone: ["dark", "disturbing", "suspenseful", "unique", "stylized"],
    setting: ["modern", "urban", "supernatural"],
    characterTypes: ["immortal-protagonist", "charismatic-serial-killer", "morally-ambiguous-detective"],
    streaming: { disney_plus: true },
    network: "Disney+",
    actors: [
      { name: "Jung Hae-in", role: "Ha Dong-soo", isLead: true },
      { name: "Go Kyung-pyo", role: "Oh Jin-seob", isLead: true }
    ],
    matchReasoningHints: [
      "Strangers from Hell fans of K-dramas willing to go genuinely dark and weird with a horror premise — Connect is in the same corner of the K-drama universe: formally unusual, committed to its disturbing concept, not interested in softening the edges",
      "Killing Eve fans who love a drama where the relationship between the hunter and the quarry becomes the most intimate relationship in both their lives — Connect makes this literal through the shared eye",
      "Parasyte fans of body-horror premises where something invasive creates an unwanted bond — the harvested eye creates the same uneasy intimacy that Migi's presence does for Shinichi",
      "The Watcher fans of Korean thrillers built on surveillance and the terror of being seen — Connect literalizes that premise: Dong-soo doesn't just feel watched, he is watching",
      "My Name fans of dark Netflix K-dramas where the protagonist is placed inside the world of the person they're hunting and has to maintain an identity they barely believe in"
    ]
  }

];
