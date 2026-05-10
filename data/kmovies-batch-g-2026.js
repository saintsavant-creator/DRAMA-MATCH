/**
 * K-Movie Catalog Expansion Batch G — 2026
 * 8 high-demand Korean films filling search gaps.
 * Covers: Peninsula, Burning, The Gangster the Cop the Devil, A Taxi Driver,
 * Broker, Concrete Utopia, Hunt, The Roundup.
 * Dedup verified against 1,910 existing catalog IDs before merge.
 */
module.exports = [

  // ─── 1. Peninsula (2020) ─────────────────────────────────────────────────
  {
    id: 'peninsula',
    title: 'Peninsula',
    year: 2020,
    runtime: 116,
    synopsis: "Four years after Train to Busan, the entire Korean peninsula has been abandoned to the undead. A former soldier living in exile in Hong Kong is offered a deal: return to the peninsula, retrieve a truck full of cash, and get out. He goes back. The mission immediately goes wrong. Peninsula is a different film from Train to Busan — bigger, angrier, more operatic — and its pivot from personal survival story to post-apocalyptic wasteland epic makes the emotional mechanics work differently. The action sequences, particularly a night chase sequence with UV lights and cannibalized vehicles, are extraordinary.",
    genres: ['horror', 'action', 'thriller', 'science-fiction'],
    themes: ['survival', 'sacrifice', 'trauma', 'redemption', 'family', 'collapse'],
    tropes: ['zombie-apocalypse', 'post-apocalyptic', 'survivor-colony', 'action-hero', 'found-family'],
    tone: ['intense', 'action-packed', 'dark', 'emotional', 'epic'],
    setting: ['post-apocalyptic-korea', 'abandoned-city', 'survivor-outpost'],
    characterTypes: ['haunted-soldier', 'survivor-children', 'brutal-militia', 'resistance-fighters'],
    streaming: { amazon_prime: true, shudder: true },
    director: 'Yeon Sang-ho',
    actors: [
      { name: 'Gang Dong-won', role: 'Jung-seok', isLead: true },
      { name: 'Lee Jung-hyun', role: 'Min-jung', isLead: true },
      { name: 'Kwon Hae-hyo', role: 'Elder Kim', isLead: false }
    ],
    matchReasoningHints: [
      "Train to Busan fans who want to return to the world four years later — Peninsula expands the geography and darkens the politics of the original's universe",
      "Mad Max: Fury Road fans of post-apocalyptic action films with extraordinary practical-effects vehicle sequences and a world-building ethos that takes the collapse seriously",
      "28 Days Later fans of zombie horror that is interested in what human society becomes after collapse rather than just the mechanics of survival",
      "World War Z fans of zombie films that operate at a large scale and are interested in the geopolitical aftermath of a pandemic rather than individual survival",
      "All of Us Are Dead fans of Korean survival content that takes the emotional cost of the collapse seriously — Peninsula is the movie version of that interest in what Korea-specific geography and society looks like under apocalyptic conditions"
    ]
  },

  // ─── 2. Burning (2018) ───────────────────────────────────────────────────
  {
    id: 'burning',
    title: 'Burning',
    nativeTitle: '버닝',
    year: 2018,
    runtime: 148,
    synopsis: "Jong-su works a delivery job and runs into Hae-mi, a girl he used to know, who asks him to watch her cat while she travels to Africa. When she returns, she has brought someone with her: Ben, wealthy, handsome, calm in a way that is either spiritual or sinister. Hae-mi disappears. Jong-su cannot prove anything happened. Based on a Haruki Murakami short story, Lee Chang-dong's masterwork is a film about class resentment, male jealousy, and the specific way that poverty makes everything look like it might be a conspiracy — because it is, only not the kind you can prosecute. Steven Yeun's performance as Ben is the most controlled piece of menace in modern Korean cinema.",
    genres: ['thriller', 'drama', 'mystery'],
    themes: ['class-divide', 'jealousy', 'disappearance', 'ambiguity', 'masculinity', 'rage'],
    tropes: ['unreliable-narrator', 'love-triangle', 'mysterious-wealthy-man', 'obsession', 'class-conflict'],
    tone: ['slow-burn', 'menacing', 'ambiguous', 'literary', 'beautiful'],
    setting: ['contemporary-korea', 'pajoengdong-countryside', 'seoul', 'greenhouse'],
    characterTypes: ['angry-poor-young-man', 'free-spirited-woman', 'wealthy-ambiguous-man'],
    streaming: { mubi: true, amazon_prime: true },
    director: 'Lee Chang-dong',
    actors: [
      { name: 'Yoo Ah-in', role: 'Jong-su', isLead: true },
      { name: 'Steven Yeun', role: 'Ben', isLead: true },
      { name: 'Jeon Jong-seo', role: 'Hae-mi', isLead: true }
    ],
    matchReasoningHints: [
      "Parasite fans of Korean films about class as an invisible structure that determines everything — Burning is about the specific rage of someone who can see the structure but has no lever to dismantle it",
      "Minari fans of Korean-American films that use the landscape to carry emotional meaning — Lee Chang-dong's countryside has the same quality of places that hold grief",
      "Succession fans of narratives about the casual cruelty of wealth — Ben's calm is the calm of someone for whom consequences have never applied",
      "Zodiac fans of mystery thrillers where the mystery may never be resolved and the film is interested in what that irresolution does to the person who cannot stop investigating",
      "Drive (2011) fans of neo-noir films where the male lead's stillness contains violence and the film is structured around when and whether that violence will emerge"
    ]
  },

  // ─── 3. The Gangster, the Cop, the Devil (2019) ───────────────────────────
  {
    id: 'the-gangster-the-cop-the-devil',
    title: 'The Gangster, the Cop, the Devil',
    nativeTitle: '악인전',
    year: 2019,
    runtime: 109,
    synopsis: "Jang Dong-su runs a crime organization with bureaucratic efficiency. One night he is attacked by a serial killer and survives because the killer miscalculated his victim. Now the most dangerous crime boss in the city is working with a junior detective to catch a murderer the police cannot officially acknowledge — because to acknowledge it would be to acknowledge that a crime boss was being useful. Ma Dong-seok delivers what might be his definitive performance: a man of genuine violence who is also genuinely funny, and the film's thesis that organized crime and law enforcement share more methods than either admits is proven by every scene they share.",
    genres: ['crime', 'action', 'thriller', 'comedy'],
    themes: ['unusual-alliance', 'justice-vs-law', 'serial-killer', 'organized-crime', 'survival', 'pride'],
    tropes: ['enemy-alliance', 'crime-boss-as-protagonist', 'serial-killer-hunt', 'buddy-cop', 'action-comedy'],
    tone: ['intense', 'funny', 'action-packed', 'propulsive', 'satisfying'],
    setting: ['modern-korea', 'crime-world', 'police-department', 'urban'],
    characterTypes: ['efficient-crime-boss', 'idealistic-detective', 'methodical-serial-killer', 'crime-organization'],
    streaming: { shudder: true, amazon_prime: true },
    director: 'Lee Won-tae',
    actors: [
      { name: 'Ma Dong-seok', role: 'Jang Dong-su', isLead: true },
      { name: 'Kim Mu-yeol', role: 'Jung Tae-seok', isLead: true },
      { name: 'Kim Sung-kyu', role: 'K', isLead: false }
    ],
    matchReasoningHints: [
      "The Outlaws fans of Ma Dong-seok doing the thing he does — a crime boss with a physical presence that makes conventional intimidation look small, wrapped in a story that is funnier than it has any right to be",
      "Mindhunter fans of crime procedurals interested in the mechanics of serial killers — this film has one of the more methodically characterized screen killers in Korean cinema",
      "Breaking Bad fans of crime narratives where organizational efficiency is both morally neutral and frightening — Jang Dong-su's gang runs like a corporation, and the film treats that as a punchline and a horror",
      "Se7en fans of serial killer thrillers where the detective team is complicated by having a member who is not technically on the side of the law — the dynamic between cop and crime boss is the entire engine",
      "Narcos fans of crime dramas that take organized crime seriously as a system rather than as a collection of individual bad actors — the crime boss's perspective makes the institutional structure visible"
    ]
  },

  // ─── 4. A Taxi Driver (2017) ─────────────────────────────────────────────
  {
    id: 'a-taxi-driver',
    title: 'A Taxi Driver',
    nativeTitle: '택시운전사',
    year: 2017,
    runtime: 137,
    synopsis: "In 1980, a German journalist named Jürgen Hinzpeter paid a Korean taxi driver 100,000 won to drive him to Gwangju, where he had heard something was happening. The driver, who needed the money and had no idea what was happening, drove him there. What they found was the Gwangju Uprising — a pro-democracy movement being violently suppressed by martial law forces. A Taxi Driver is based on Hinzpeter's account of those days, and Song Kang-ho plays the driver with the specific moral texture of an ordinary man who arrives at a situation he cannot ignore. The most watched Korean film in domestic box office history at its release.",
    genres: ['historical', 'drama', 'political', 'thriller'],
    themes: ['democracy', 'ordinary-heroism', 'historical-tragedy', 'witness', 'sacrifice', 'journalism'],
    tropes: ['unlikely-hero', 'historical-event', 'buddy-dynamic', 'ordinary-man-in-extraordinary-circumstances'],
    tone: ['moving', 'tense', 'patriotic', 'grounded', 'devastating'],
    setting: ['1980s-korea', 'gwangju', 'korea-martial-law-era', 'political-uprising'],
    characterTypes: ['ordinary-taxi-driver', 'foreign-journalist', 'courageous-locals', 'military-antagonists'],
    streaming: { amazon_prime: true, tubi: true },
    director: 'Jang Hoon',
    actors: [
      { name: 'Song Kang-ho', role: 'Kim Man-seob', isLead: true },
      { name: 'Thomas Kretschmann', role: 'Jürgen Hinzpeter', isLead: true },
      { name: 'Yoo Hae-jin', role: 'Hwang Tae-sul', isLead: false }
    ],
    matchReasoningHints: [
      "1987: When the Day Comes fans of Korean historical films about the pro-democracy movement that take the human cost seriously without turning it into pure propaganda",
      "Schindler's List fans of historical films where an ordinary person is caught in events larger than themselves and their response to those events is the subject — both films are about moral transformation under impossible conditions",
      "Spotlight fans of journalism films where the act of bearing witness is itself the heroic action — Hinzpeter's footage of Gwangju became the historical record because someone drove him there",
      "Parasite fans of Song Kang-ho films that use his specific working-class believability to ground situations that would otherwise become too large to feel human",
      "Anthropoid fans of WWII-adjacent historical thrillers that center ordinary people in specific political events and are interested in the cost of those events to the people who were present"
    ]
  },

  // ─── 5. Broker (2022) ────────────────────────────────────────────────────
  {
    id: 'broker',
    title: 'Broker',
    nativeTitle: '브로커',
    year: 2022,
    runtime: 129,
    synopsis: "Sang-hyeon and Dong-soo run an illegal side business: they take babies left in church donation boxes and sell them to childless couples. When the mother comes back for the baby she left, the three of them end up on a road trip to find the right family, followed by two detectives building a case. Kore-eda Hirokazu, the Japanese director of Shoplifters, made this with a Korean cast and the results are exactly what that sounds like: a film about moral flexibility, parental love, and whether a family assembled from broken people counts as real. Song Kang-ho and Gang Dong-won are perfect, and the film is the rare kind where you don't know what you hope will happen.",
    genres: ['drama', 'road-movie', 'crime'],
    themes: ['parenthood', 'family', 'abandonment', 'moral-ambiguity', 'belonging', 'redemption'],
    tropes: ['road-trip', 'unconventional-family', 'found-family', 'moral-gray-area', 'pursuit'],
    tone: ['warm', 'melancholic', 'morally-complex', 'humanist', 'bittersweet'],
    setting: ['contemporary-korea', 'road-trip', 'church-donation-boxes', 'small-cities'],
    characterTypes: ['small-time-criminals', 'young-mother', 'abandoned-child', 'principled-detective'],
    streaming: { amazon_prime: true, mubi: true },
    director: 'Kore-eda Hirokazu',
    actors: [
      { name: 'Song Kang-ho', role: 'Sang-hyeon', isLead: true },
      { name: 'Gang Dong-won', role: 'Dong-soo', isLead: true },
      { name: 'Lee Ji-eun (IU)', role: 'Moon So-young', isLead: true },
      { name: 'Bae Doona', role: 'Detective', isLead: false }
    ],
    matchReasoningHints: [
      "Shoplifters fans of Kore-eda's previous work — Broker is the Korean companion piece, with the same moral structure: a family formed from crime that turns out to be the realest family any of them have ever had",
      "Parasite fans of Korean films where ordinary circumstances reveal a society's structural cruelties — the baby box system is real, and the film treats it as both heartbreaking and necessary",
      "Flee fans of films about family and belonging that refuse to sentimentalize the circumstances that create chosen families — the found family here is assembled from exactly the kind of moral mess that would disqualify it in most stories",
      "Nebraska (Alexander Payne) fans of road movies where the destination is less important than what the journey does to the relationship between the people in the car",
      "Crash Landing on You fans of IU who want to see her in a film that demands something different from her — IU's performance here is the best dramatic work of her career"
    ]
  },

  // ─── 6. Concrete Utopia (2023) ───────────────────────────────────────────
  {
    id: 'concrete-utopia',
    title: 'Concrete Utopia',
    nativeTitle: '콘크리트 유토피아',
    year: 2023,
    runtime: 130,
    synopsis: "Seoul is destroyed by an earthquake. One apartment complex — Hwanggung Residences — remains standing. Its residents vote to exclude non-residents from shelter. The man who comes to lead this exclusion is warm, principled, and methodically becomes someone who cannot be recognized as either. Concrete Utopia is Korea's best disaster film since Train to Busan, and unlike Train to Busan it is not interested in survival: it is interested in how quickly people organize themselves into systems of exclusion when resources become limited, and how ordinary the descent into cruelty looks from inside.",
    genres: ['disaster', 'thriller', 'drama', 'social-commentary'],
    themes: ['survival', 'exclusion', 'community', 'moral-collapse', 'class', 'leadership'],
    tropes: ['post-disaster', 'survivor-colony', 'charismatic-leader', 'moral-descent', 'social-commentary'],
    tone: ['tense', 'dark', 'bleak', 'powerful', 'thought-provoking'],
    setting: ['post-earthquake-seoul', 'single-apartment-building', 'destroyed-city'],
    characterTypes: ['ordinary-man-becomes-leader', 'young-couple-surviving', 'excluded-outsiders', 'community-enforcers'],
    streaming: { amazon_prime: true },
    director: 'Eom Tae-hwa',
    actors: [
      { name: 'Lee Byung-hun', role: 'Young-tak', isLead: true },
      { name: 'Park Seo-joon', role: 'Min-seong', isLead: true },
      { name: 'Park Bo-young', role: 'Myeong-hwa', isLead: true }
    ],
    matchReasoningHints: [
      "Snowpiercer fans of Korean disaster films that use a contained space to examine how class hierarchy reasserts itself immediately after collapse — Concrete Utopia is the apartment building version of the train",
      "The Handmaid's Tale fans of survival narratives about how exclusion becomes institutional with alarming speed when the people doing the excluding tell themselves it is necessary",
      "Station Eleven fans of post-disaster narratives interested in what human community becomes under extreme resource pressure — both works refuse the comforting answer",
      "Lord of the Flies fans of stories about the specific machinery of how ordinary people become capable of cruelty — the film is a masterclass in that descent done slowly enough to be plausible",
      "Train to Busan fans who want a Korean disaster film that is as technically accomplished but angrier about what disasters reveal about society — Concrete Utopia is the companion film about what happens after you survive"
    ]
  },

  // ─── 7. Hunt (2022) ──────────────────────────────────────────────────────
  {
    id: 'hunt-2022',
    title: 'Hunt',
    nativeTitle: '헌트',
    year: 2022,
    runtime: 125,
    synopsis: "1983. Two rival Korean CIA agents — one from the foreign intelligence division, one from domestic — are each ordered to find a mole within the organization. Each suspects the other. The investigation runs simultaneously with an attempt to assassinate the President of Korea. Lee Jung-jae's directorial debut is a relentlessly plotted spy thriller about the KCIA's role in the assassination of President Park Chung-hee, told with the confidence of someone who has been in enough films to know exactly what he is doing on both sides of the camera. The political history is dense; the action is exceptional.",
    genres: ['thriller', 'action', 'political', 'historical', 'spy'],
    themes: ['political-conspiracy', 'surveillance', 'loyalty', 'power', 'historical-event', 'betrayal'],
    tropes: ['spy-thriller', 'rival-agents', 'mole-hunt', 'political-assassination', 'trust-no-one'],
    tone: ['tense', 'dark', 'intense', 'historically-grounded', 'propulsive'],
    setting: ['1980s-korea', 'kcia-headquarters', 'international-locations', 'political-world'],
    characterTypes: ['rival-intelligence-agents', 'presidential-guard', 'political-operatives', 'resistance-members'],
    streaming: { apple_tv: true, amazon_prime: true },
    director: 'Lee Jung-jae',
    actors: [
      { name: 'Lee Jung-jae', role: 'Park Pyong-ho', isLead: true },
      { name: 'Jung Woo-sung', role: 'Kim Jung-do', isLead: true }
    ],
    matchReasoningHints: [
      "Squid Game fans of Lee Jung-jae who want to see him in full control of a film as both lead and director — Hunt shows a different side of him entirely",
      "The Americans fans of spy dramas set in the Cold War-era where ideological loyalty and personal loyalty are in constant conflict and neither comes out clean",
      "Tinker Tailor Soldier Spy fans of spy thrillers that trust the audience to keep track of complex organizational hierarchies and multiple simultaneous investigations without hand-holding",
      "A Taxi Driver fans of Korean historical films about the specific political violence of the Park Chung-hee era — Hunt is about the intelligence apparatus that enabled and ultimately ended that regime",
      "Mr. Sunshine fans of period K-drama/film that grounds Korean history in specific people making specific choices under specific institutional pressure"
    ]
  },

  // ─── 8. The Roundup (2022) ──────────────────────────────────────────────
  {
    id: 'the-roundup',
    title: 'The Roundup',
    nativeTitle: '범죄도시 2',
    year: 2022,
    runtime: 106,
    synopsis: "Ma Seok-do travels to Vietnam to extradite a petty criminal and discovers a larger operation: a Korean criminal syndicate running scams that have killed multiple people in both countries. The second film in the Crime City franchise (following The Outlaws) is tighter, faster, and funnier than the first, with Ma Dong-seok operating at the peak of his specific gift — making extreme physical violence feel like a natural extension of mild exasperation. The opening fight sequence is one of the most purely entertaining three minutes in Korean cinema. It became the highest-grossing Korean film of 2022.",
    genres: ['crime', 'action', 'thriller', 'comedy'],
    themes: ['justice', 'crime-syndicate', 'international-crime', 'persistence', 'police-work'],
    tropes: ['action-comedy', 'unstoppable-detective', 'international-crime', 'crime-boss', 'fish-out-of-water'],
    tone: ['action-packed', 'funny', 'intense', 'satisfying', 'fast-paced'],
    setting: ['vietnam', 'modern-korea', 'crime-world', 'international-locations'],
    characterTypes: ['unstoppable-detective', 'sophisticated-villain', 'corrupt-allies', 'trapped-victims'],
    streaming: { netflix: true },
    director: 'Lee Sang-yong',
    actors: [
      { name: 'Ma Dong-seok', role: 'Ma Seok-do', isLead: true },
      { name: 'Son Seok-gu', role: 'Kang Hae-sang', isLead: true }
    ],
    matchReasoningHints: [
      "The Outlaws fans who watched the first film and need more Ma Dong-seok doing exactly the same thing with a bigger budget — The Roundup delivers precisely what the audience wanted and adds a better villain",
      "John Wick fans of action films where the appeal is entirely in the hero's physical supremacy over every obstacle — Ma Seok-do dispatches criminals with the same efficient finality, minus the choreographic artistry, plus considerably more charm",
      "Taken fans of action films about a specific man with specific capabilities being deployed against international criminal organizations — The Roundup has Taken's premise but none of its grimness",
      "Brooklyn Nine-Nine fans of cop procedurals where the humor comes from the competence of the central character rather than their incompetence — Ma Seok-do is the most effective detective in Korean cinema because he is also the funniest",
      "The Gangster the Cop the Devil fans of Ma Dong-seok Korean crime action films — these two movies and The Outlaws constitute the best argument for him as a genuine movie star in the classic sense"
    ]
  },

];
