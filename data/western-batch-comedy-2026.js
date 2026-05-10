/**
 * DramaMatch Western Comedy Sources Batch — 2026
 * 8 Western comedy movies and shows added as search sources
 * to improve comedy matching coverage. Covers action-comedy,
 * male-ensemble, teen-comedy, workplace, and buddy-cop sub-genres
 * not previously anchored in the catalog.
 */
module.exports = [
  {
    id: 'the-hangover',
    title: 'The Hangover',
    year: 2009,
    runtime: 100,
    synopsis: 'Three groomsmen wake up in a Las Vegas hotel suite the morning after the bachelor party with no memory of the night before — and no groom. What follows is a backwards mystery about what happened, reconstructed through a city-wide trail of consequences that escalates with every new discovery. Todd Phillips\'s film defined the male ensemble comedy of the 2000s: big laughs from men behaving catastrophically and covering each other\'s disasters.',
    genres: ['comedy', 'mystery', 'action'],
    themes: ['male-friendship', 'bachelor-party', 'chaos', 'mystery-comedy', 'loyalty'],
    tropes: ['male-ensemble', 'night-they-cant-remember', 'escalating-chaos', 'buddy-comedy', 'mystery-unraveling'],
    tone: ['comedic', 'chaotic', 'anarchic', 'ensemble'],
    setting: ['las-vegas', 'modern', 'bachelor-party'],
    characterTypes: ['hapless-groom-friends', 'chaotic-ensemble', 'straight-man-lead'],
    streaming: { amazon_prime: true },
    director: 'Todd Phillips',
    actors: [
      { name: 'Bradley Cooper', role: 'Phil', isLead: true },
      { name: 'Ed Helms', role: 'Stu', isLead: true },
      { name: 'Zach Galifianakis', role: 'Alan', isLead: true }
    ],
    matchReasoningHints: [
      'Exit (2019) fans who want more ensemble chaos-comedy with a group of people trapped in a situation they caused and must now resolve together — The Hangover runs the same "reconstruct the disaster" structure',
      'Welcome to Waikiki fans of Korean male-ensemble comedies built on three distinct personalities managing a single accumulating disaster — The Hangover is the Vegas version of that premise',
      'Luck-Key fans who enjoy identity-chaos comedies where the humor comes from men in situations far outside their competence who have to bluff their way through'
    ]
  },
  {
    id: 'superbad',
    title: 'Superbad',
    year: 2007,
    runtime: 113,
    synopsis: 'Two best friends, facing the last weeks before graduating high school and going to different colleges, try to secure alcohol for a party where the girl one of them has been in love with will be present. Judd Apatow-era teen comedy at its most honest about male adolescent anxiety, friendship as the real love story, and the comedy of trying to be cool when you are profoundly uncool.',
    genres: ['comedy', 'coming-of-age', 'teen'],
    themes: ['male-friendship', 'growing-up', 'first-love', 'end-of-adolescence', 'anxiety'],
    tropes: ['bromance', 'coming-of-age', 'one-epic-night', 'unrequited-crush', 'buddy-comedy'],
    tone: ['comedic', 'heartfelt', 'raunchy', 'nostalgic'],
    setting: ['high-school', 'suburban', 'one-night'],
    characterTypes: ['anxious-teenage-boys', 'unattainable-crush', 'hapless-police'],
    streaming: { netflix: true },
    director: 'Greg Mottola',
    actors: [
      { name: 'Jonah Hill', role: 'Seth', isLead: true },
      { name: 'Michael Cera', role: 'Evan', isLead: true },
      { name: 'Christopher Mintz-Plasse', role: 'McLovin', isLead: false }
    ],
    matchReasoningHints: [
      'Reply 1988 fans of coming-of-age stories where the friendship between the boys is the real love story and the romantic subplot is almost beside the point — Superbad has exactly that structure, set in one night instead of a year',
      'Speed Scandal fans of comedies built on male characters being charmingly terrible at executing a plan that seemed simple — both works find the humor in pure, lovable incompetence',
      'Sunny (2011) fans who love ensemble friend-group comedies about the specific terror of growing up and losing people — Superbad is the male American version of that emotional premise'
    ]
  },
  {
    id: 'game-night',
    title: 'Game Night',
    year: 2018,
    runtime: 100,
    synopsis: 'A couple and their friends who gather weekly for game nights find their latest evening becoming real when one player is apparently kidnapped — except no one is sure whether it\'s part of the game or actually happening. John Francis Daley and Jonathan Goldstein\'s comedy is built on that single sustained joke and exploits every permutation of it, while being genuinely charming about competitive couples and the dynamics of friend groups.',
    genres: ['comedy', 'action', 'thriller', 'mystery'],
    themes: ['competition', 'couple-dynamics', 'friendship', 'paranoia-comedy', 'suburban-life'],
    tropes: ['is-this-real-or-fiction', 'couple-competition', 'ensemble-comedy', 'action-comedy', 'escalating-stakes'],
    tone: ['comedic', 'chaotic', 'warm', 'action-packed'],
    setting: ['suburban', 'modern', 'game-night'],
    characterTypes: ['competitive-couple', 'friend-group-ensemble', 'mysterious-stranger'],
    streaming: { netflix: true, amazon_prime: true },
    director: 'John Francis Daley',
    actors: [
      { name: 'Jason Bateman', role: 'Max', isLead: true },
      { name: 'Rachel McAdams', role: 'Annie', isLead: true },
      { name: 'Billy Magnussen', role: 'Ryan', isLead: false }
    ],
    matchReasoningHints: [
      'Exit (2019) fans who want more "ordinary people in an action-comedy situation they\'re hilariously unqualified for" — Game Night and Exit share the exact premise of non-action people improvising through escalating danger',
      'Intimate Strangers fans of ensemble comedies built on the comedy of a single situation that creates ongoing misunderstandings — Game Night\'s "is this real?" premise creates the same kind of sustained ensemble confusion',
      'Confidential Assignment fans of action-comedies where the comedy comes from watching characters navigate a situation with stakes they keep adjusting their assessment of'
    ]
  },
  {
    id: 'rush-hour',
    title: 'Rush Hour',
    year: 1998,
    runtime: 98,
    synopsis: 'A fast-talking LAPD detective is partnered with a Hong Kong inspector visiting LA to find a kidnapped Chinese consul\'s daughter. Neither wants the partnership; both are spectacularly bad at working with anyone else; together they solve the case in spite of themselves. Brett Ratner\'s action-comedy made Jackie Chan and Chris Tucker into one of cinema\'s great mismatched-buddy duos, built entirely on the comedy of two people who understand each other less and less as they become more and more inseparable.',
    genres: ['action', 'comedy', 'buddy-cop', 'crime'],
    themes: ['culture-clash', 'unlikely-partnership', 'friendship', 'competence', 'loyalty'],
    tropes: ['mismatched-partners', 'buddy-cop', 'culture-clash', 'action-comedy', 'reluctant-friendship'],
    tone: ['comedic', 'action-packed', 'warm', 'chaotic'],
    setting: ['los-angeles', 'modern', 'action'],
    characterTypes: ['fast-talking-american-cop', 'precise-hong-kong-inspector', 'charismatic-duo'],
    streaming: { netflix: true },
    director: 'Brett Ratner',
    actors: [
      { name: 'Jackie Chan', role: 'Inspector Lee', isLead: true },
      { name: 'Chris Tucker', role: 'Detective Carter', isLead: true }
    ],
    matchReasoningHints: [
      'Confidential Assignment fans who want the original template — a Korean-Chinese cop buddy comedy built on culture clash and reluctant partnership is Confidential Assignment doing Rush Hour in East Asia',
      'Strongest Delivery Man fans of buddy comedies where the humor comes from two people who are each excellent in their own context being completely ineffective together',
      'Extreme Job fans of Korean action-comedies that find the same energy Rush Hour does: competent people doing action-hero things while being very funny about the execution'
    ]
  },
  {
    id: '21-jump-street',
    title: '21 Jump Street',
    year: 2012,
    runtime: 109,
    synopsis: 'Two incompetent rookie cops are sent undercover to a high school to bust a drug ring — the same high school one of them was a jock in and the other a geek, now reversed. Phil Lord and Christopher Miller\'s film takes its absurd premise completely seriously and uses it to say something true about how much of identity is performance. Jonah Hill and Channing Tatum\'s chemistry is one of the great comic duos of its decade.',
    genres: ['comedy', 'action', 'crime', 'buddy-cop'],
    themes: ['identity', 'friendship', 'high-school-redux', 'competence-vs-confidence', 'growing-up'],
    tropes: ['undercover-cops', 'mismatched-partners', 'high-school-comedy', 'buddy-cop', 'identity-performance'],
    tone: ['comedic', 'action-packed', 'self-aware', 'warm'],
    setting: ['high-school', 'police-station', 'modern'],
    characterTypes: ['former-jock', 'former-geek', 'bumbling-undercover-duo'],
    streaming: { netflix: true },
    director: 'Phil Lord',
    actors: [
      { name: 'Jonah Hill', role: 'Schmidt', isLead: true },
      { name: 'Channing Tatum', role: 'Jenko', isLead: true },
      { name: 'Ice Cube', role: 'Captain Dickson', isLead: false }
    ],
    matchReasoningHints: [
      'Luck-Key fans who love identity-inversion comedies where a complete swap of social status creates all the comedy — 21 Jump Street runs the same premise but through high school instead of a hitman/loser switch',
      'Psychopath Diary fans of undercover/identity comedies where the humor comes from a character performing an identity that reveals uncomfortable truths about the original one',
      'Strongest Delivery Man fans of buddy-cop comedies with two leads whose individual weaknesses become strengths in combination — Channing Tatum and Jonah Hill have exactly that dynamic'
    ]
  },
  {
    id: 'the-nice-guys',
    title: 'The Nice Guys',
    year: 2016,
    runtime: 116,
    synopsis: 'A bumbling private eye and a hired enforcer team up in 1970s Los Angeles to investigate the apparent suicide of a porn star and the disappearance of a young woman. Shane Black\'s buddy action-comedy is set against the seedy glamour of the Bicentennial era and built on the chemistry of Russell Crowe\'s hired muscle and Ryan Gosling\'s perpetually-failing detective — one of the most purely funny films of its decade.',
    genres: ['comedy', 'action', 'crime', 'mystery', 'noir'],
    themes: ['unlikely-partnership', 'corrupt-institutions', 'father-daughter', 'cynicism', 'friendship'],
    tropes: ['mismatched-partners', 'buddy-comedy', 'period-crime', 'noir-comedy', 'action-comedy'],
    tone: ['darkly-comedic', 'stylish', 'action-packed', 'witty'],
    setting: ['1970s-los-angeles', 'crime-underworld', 'period'],
    characterTypes: ['hapless-private-eye', 'surprisingly-soft-enforcer', 'precocious-kid'],
    streaming: { amazon_prime: true },
    director: 'Shane Black',
    actors: [
      { name: 'Russell Crowe', role: 'Jackson Healy', isLead: true },
      { name: 'Ryan Gosling', role: 'Holland March', isLead: true },
      { name: 'Angourie Rice', role: 'Holly March', isLead: false }
    ],
    matchReasoningHints: [
      'Veteran (2015) fans of Korean action-comedies where a morally-committed tough guy is contrasted with a slippery, self-interested partner and the comedy is in their dynamic',
      'Confidential Assignment fans of buddy-cop action-comedies built on mismatched partnerships where each partner\'s strengths and weaknesses are precisely calibrated to drive each other insane while solving the case',
      'Psychopath Diary fans of comedy-mystery hybrids that take the mystery seriously enough to sustain tension while keeping the humor sharp throughout'
    ]
  },
  {
    id: 'wedding-crashers',
    title: 'Wedding Crashers',
    year: 2005,
    runtime: 119,
    synopsis: 'Two divorce mediators spend every wedding season crashing strangers\' receptions to meet women — until one of them falls genuinely in love with a guest and the con becomes a complication. David Dobkin\'s film is peak Vince Vaughn and Owen Wilson chemistry: male friendship, romantic sabotage, and the comedy of a system breaking down the moment feelings become real.',
    genres: ['comedy', 'romance', 'ensemble'],
    themes: ['male-friendship', 'commitment-phobia', 'deception-meets-real-love', 'family-chaos'],
    tropes: ['con-artists', 'fake-identity', 'falling-for-real', 'male-ensemble', 'family-comedy'],
    tone: ['comedic', 'warm', 'romantic', 'chaotic'],
    setting: ['modern', 'wedding-circuit', 'estate'],
    characterTypes: ['charming-con-artist', 'straight-man-partner', 'chaotic-family'],
    streaming: { amazon_prime: true, hulu: true },
    director: 'David Dobkin',
    actors: [
      { name: 'Owen Wilson', role: 'John Beckwith', isLead: true },
      { name: 'Vince Vaughn', role: 'Jeremy Grey', isLead: true },
      { name: 'Rachel McAdams', role: 'Claire Cleary', isLead: false }
    ],
    matchReasoningHints: [
      'Lucky Romance fans of comedies where a character enters a situation under false pretenses and falls genuinely in love — the moment the con becomes real is the emotional spine of both works',
      'Wok of Love fans of comedies where male friendship and romantic pursuit are so entangled that resolving one complicates the other',
      'My Fellow Citizens fans of Korean comedies built on con artists falling into their own traps — the premise of deception giving way to genuine feeling recurs in Korean comedy across genres'
    ]
  },
  {
    id: 'office-space',
    title: 'Office Space',
    year: 1999,
    runtime: 89,
    synopsis: 'A software engineer at a soul-crushing mid-90s tech company, having been hypnotized into not caring about anything, stops showing up to meetings, ignores emails, and finds himself the most valued employee in the building. Mike Judge\'s film about the specific misery of corporate work culture is the definitive statement on white-collar absurdism: funnier than the workplace it depicts because it depicts the workplace precisely.',
    genres: ['comedy', 'workplace', 'satire'],
    themes: ['corporate-misery', 'meaningless-work', 'rebellion', 'workplace-absurdism', 'class-frustration'],
    tropes: ['workplace-satire', 'anti-corporate', 'passive-rebellion', 'ensemble-workplace', 'class-comedy'],
    tone: ['darkly-comedic', 'dry', 'satirical', 'deadpan'],
    setting: ['1990s-tech-company', 'suburban', 'workplace'],
    characterTypes: ['burnt-out-engineer', 'cartoonish-middle-managers', 'workplace-ensemble'],
    streaming: { hulu: true, amazon_prime: true },
    director: 'Mike Judge',
    actors: [
      { name: 'Ron Livingston', role: 'Peter Gibbons', isLead: true },
      { name: 'Jennifer Aniston', role: 'Joanna', isLead: false },
      { name: 'Gary Cole', role: 'Bill Lumbergh', isLead: false }
    ],
    matchReasoningHints: [
      'Pegasus Market fans who want the original template — a workplace where bureaucracy has divorced itself entirely from the product, and the comedy comes from how employees navigate meaningless procedure with full deadpan commitment',
      'Samjin Company English Class fans who respond to comedies that use the workplace as a vehicle for class commentary — Office Space and Samjin both find the tragedy in office work and flip it into absurdist comedy',
      'Chief Kim fans of Korean workplace comedies about someone who stops performing institutional competence and accidentally becomes better at the job — Office Space runs that exact premise as character arc'
    ]
  }
];
