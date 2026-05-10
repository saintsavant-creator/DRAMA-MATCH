/**
 * K-Drama Batch Z — Mixed Genres Expansion
 * 6 titles: military thriller, space romance, dark contract-marriage thriller,
 *           period political spy drama, multi-agency action procedural, corporate power drama
 * Added: 2026-04-12
 */
module.exports = [

  // ── MILITARY THRILLER / SOCIAL DRAMA ────────────────────────────────────────

  {
    id: 'd-p',
    title: 'D.P.',
    year: 2021,
    episodes: 6,
    synopsis: 'Jun-ho is assigned to the Army\'s Deserter Pursuit unit — tasked with hunting down soldiers who have gone AWOL. What begins as a procedural manhunt becomes something far darker: each deserter has a reason, and those reasons are an indictment of a military system built on institutionalized abuse. A devastating examination of systemic cruelty, complicity, and the cost of following orders. One of Netflix Korea\'s most praised originals.',
    genres: ['thriller', 'drama', 'crime', 'military', 'social-commentary'],
    themes: ['institutional-abuse', 'complicity', 'moral-cost', 'loyalty', 'class', 'systemic-cruelty', 'survival'],
    tropes: ['manhunt', 'unlikely-partners', 'institutional-horror', 'moral-grey-zone', 'desertion-as-protest', 'found-conscience'],
    tone: ['intense', 'dark', 'devastating', 'urgent', 'unflinching', 'gripping'],
    setting: ['military', 'modern', 'korea', 'barracks'],
    characterTypes: ['conflicted-soldier', 'seasoned-pursuer', 'desperate-deserters', 'complicit-officers'],
    streaming: { netflix: true },
    network: 'Netflix',
    actors: [
      { name: 'Jung Hae-in', role: 'Ahn Jun-ho', isLead: true },
      { name: 'Koo Kyo-hwan', role: 'Han Ho-yeol', isLead: true },
      { name: 'Son Seok-gu', role: 'Im Ji-sup', isLead: false }
    ],
    matchReasoningHints: [
      "Band of Brothers fans who want the same intimate military unit drama but inverted — instead of soldiers holding the line together, D.P. follows the men who pursue those who couldn't",
      "The Wire fans of shows that use their genre premise to systematically indict the institutions that generate crime — D.P. does to the Korean military what The Wire did to Baltimore",
      "Full Metal Jacket fans of military fiction that refuses to glorify the institution and treats soldier abuse as a structural problem, not bad apples — D.P. is the most honest Korean military drama made",
      "Mindhunter fans of procedural-adjacent shows where each case expands into something that implicates the entire system — every deserter D.P. pursues is a chapter in a larger indictment",
      "Juvenile Justice fans who want the same unflinching look at a broken institutional system applied to the military — D.P. and Juvenile Justice are companion pieces about the violence of compliance"
    ]
  },

  // ── SPACE ROMANCE ───────────────────────────────────────────────────────────

  {
    id: 'when-the-stars-gossip',
    title: 'When the Stars Gossip',
    year: 2025,
    episodes: 12,
    synopsis: 'A driven aerospace medical officer arrives at Korea\'s first orbital space station with a mission — and no room for distractions. The problem is the station\'s irreverent, rule-bending commander who makes distraction his specialty. A romance set against the backdrop of humanity\'s first permanent presence in orbit, where the stakes are literally life and death and the chemistry is gravitational.',
    genres: ['romance', 'sci-fi', 'drama', 'comedy'],
    themes: ['ambition', 'forbidden-attraction', 'teamwork', 'survival', 'sacrifice', 'human-connection'],
    tropes: ['enemies-to-lovers', 'confined-space', 'opposites-attract', 'rule-breaker-vs-by-the-book', 'slow-burn', 'high-stakes-setting'],
    tone: ['romantic', 'exciting', 'witty', 'tense', 'warm'],
    setting: ['space-station', 'futuristic', 'confined', 'orbital'],
    characterTypes: ['ambitious-professional', 'charming-maverick', 'tight-knit-crew', 'rule-bender'],
    streaming: { netflix: true },
    network: 'ENA/Netflix',
    actors: [
      { name: 'Gong Hyo-jin', role: 'Eve', isLead: true },
      { name: 'Lee Min-ho', role: 'Gong Ryong', isLead: true }
    ],
    matchReasoningHints: [
      "Crash Landing on You fans who want the same 'two people forced together in an impossible setting where ordinary rules don't apply' premise — but in orbit instead of North Korea, with Gong Hyo-jin and Lee Min-ho delivering",
      "For All Mankind (Apple TV+) fans looking for the emotional warmth that show sometimes sacrifices for plot — When the Stars Gossip leans fully into the human story and the confined-space chemistry",
      "Passengers fans of the romance-in-space premise done with proper warmth and character depth — this is that but without the ethical horror and with much better banter",
      "Outlander fans of slow-burn romances where the unusual setting generates all the tension — the space station is as atmospheric and isolating as 18th-century Scotland, and the chemistry earns the wait",
      "Station 19 fans of ensemble workplace dramas where professional stakes and romantic tension run in perfect parallel — this is the Korean version but in orbit"
    ]
  },

  // ── DARK THRILLER / CONTRACT MARRIAGE ────────────────────────────────────────

  {
    id: 'the-trunk',
    title: 'The Trunk',
    year: 2024,
    episodes: 8,
    synopsis: 'NM, an elite agency that provides temporary spouses for the wealthy who need social cover, assigns its top operative to a cold, enigmatic client with dark secrets. What begins as a professional transaction becomes something far more dangerous — and the line between performance and feeling dissolves faster than either of them expected. A psychological thriller wrapped in a dark romance, anchored by Gong Yoo in one of his most unsettling roles.',
    genres: ['thriller', 'romance', 'mystery', 'psychological', 'drama'],
    themes: ['identity', 'manipulation', 'secrets', 'power', 'trust', 'obsession', 'performance-vs-reality'],
    tropes: ['contract-relationship', 'cold-male-lead', 'dangerous-attraction', 'mystery-unraveling', 'forbidden-feelings', 'psychological-game'],
    tone: ['dark', 'tense', 'atmospheric', 'romantic', 'unsettling', 'stylish'],
    setting: ['modern', 'seoul', 'luxury', 'confined-mansion'],
    characterTypes: ['agency-operative', 'cold-enigmatic-client', 'professional-pretender', 'woman-uncovering-truth'],
    streaming: { netflix: true },
    network: 'Netflix',
    actors: [
      { name: 'Gong Yoo', role: 'Han Jeong-won', isLead: true },
      { name: 'Seo Hyun-jin', role: 'Noh In-ji', isLead: true }
    ],
    matchReasoningHints: [
      "Westworld fans of shows where the line between programmed behavior and genuine feeling becomes the central horror — The Trunk asks the same question from a human perspective, with darker implications",
      "Black Mirror fans of near-future concepts where a perfectly plausible industry (contract spouses for the ultra-wealthy) generates ethical horror without a single sci-fi element",
      "You fans of psychological thrillers where the romantic tension is inseparable from the danger — The Trunk has the same 'is this person safe?' electricity running under every scene",
      "Big Little Lies fans of stylish, female-centered thrillers where secrets in wealthy spaces gradually become impossible to contain — this is the Korean version with more psychological precision",
      "The Handmaid's Tale fans of shows that take a premise about women performing roles for powerful men and extract genuine horror from its mechanics — The Trunk is darker than it looks"
    ]
  },

  // ── PERIOD POLITICAL SPY DRAMA ───────────────────────────────────────────────

  {
    id: 'uncle-samsik',
    title: 'Uncle Sam-sik',
    year: 2024,
    episodes: 16,
    synopsis: 'South Korea, the early 1970s. A young KCIA operative is assigned to accompany a legendary fixer — known simply as Uncle Sam-sik — as he navigates the murky world of political power, business deals, and Cold War-era survival. Equal parts political thriller and oddball buddy drama, the show uses its historical setting to explore how a country reinvents itself, and what some people are willing to do to sit at that table.',
    genres: ['thriller', 'political', 'historical', 'drama', 'comedy'],
    themes: ['power', 'survival', 'loyalty', 'ambition', 'political-corruption', 'cold-war', 'korean-identity'],
    tropes: ['odd-couple', 'political-intrigue', 'historical-setting', 'mentor-and-rookie', 'spy-drama', 'reluctant-partnership'],
    tone: ['darkly-comic', 'tense', 'stylish', 'smart', 'period-atmospheric'],
    setting: ['1970s', 'historical', 'korea', 'political-world', 'cold-war'],
    characterTypes: ['veteran-fixer', 'idealistic-operative', 'political-elite', 'cold-war-operators'],
    streaming: { disney_plus: true },
    network: 'Disney+',
    actors: [
      { name: 'Song Kang-ho', role: 'Uncle Sam-sik', isLead: true },
      { name: 'Byun Yo-han', role: 'Park Chung-su', isLead: true }
    ],
    matchReasoningHints: [
      "The Americans fans of shows where political loyalty and personal survival occupy the same moral space, set during the Cold War — Uncle Sam-sik is doing the same dance from the Korean side of the geopolitical board",
      "Slow Horses (Apple TV+) fans of spy shows where the protagonists are morally compromised operators navigating institutional politics — Sam-sik has the same cynical intelligence and dark wit",
      "Better Call Saul fans of shows about characters who are brilliant at navigating systems that reward bad behavior — Song Kang-ho's Sam-sik is exactly that kind of magnetic, morally flexible operator",
      "Vincenzo fans of anti-heroes who play by completely different rules and are impossible not to root for — Sam-sik is Korea's greatest living character actor in a role written for exactly his energy",
      "The Crowned Clown fans of political dramas where the machinery of power is rendered in period detail and the moral cost is built into every scene — Uncle Sam-sik delivers that in 1970s Korea"
    ]
  },

  // ── MULTI-AGENCY ACTION PROCEDURAL ──────────────────────────────────────────

  {
    id: 'the-first-responders',
    title: 'The First Responders',
    year: 2022,
    episodes: 16,
    synopsis: 'A pragmatic detective, a fiery firefighter, and a sharp paramedic are thrown together by circumstance and forced to work as a team across jurisdictions none of them were trained to respect. What follows is a high-energy action procedural about the people who arrive first at disasters — and the specific chaos that erupts when a detective, a firefighter, and a medic all have a different idea about who\'s in charge.',
    genres: ['action', 'crime', 'drama', 'procedural', 'romance'],
    themes: ['teamwork', 'found-family', 'justice', 'sacrifice', 'professional-pride', 'inter-agency'],
    tropes: ['forced-partnership', 'multi-agency-team', 'case-of-the-week', 'found-family', 'opposites-attract', 'workplace-romance'],
    tone: ['exciting', 'action-packed', 'warm', 'fun', 'engaging'],
    setting: ['modern', 'seoul', 'emergency-response', 'urban'],
    characterTypes: ['stubborn-detective', 'passionate-firefighter', 'skilled-paramedic', 'emergency-ensemble'],
    streaming: { viki: true },
    network: 'MBC',
    actors: [
      { name: 'Son Ho-jun', role: 'Bong Do-jin', isLead: true },
      { name: 'Gong Seung-yeon', role: 'Song Seol', isLead: true },
      { name: 'Oh Eui-sik', role: 'Nam Tae-hwa', isLead: true }
    ],
    matchReasoningHints: [
      "Station 19 fans who want the same 'first responders as found family' energy applied to a K-drama — The First Responders runs the same workplace-plus-romance formula with more action and snappier banter",
      "Chicago Fire fans of ensemble emergency procedurals where inter-agency rivalry generates tension and the cases are genuinely life-or-death — this is the Korean version with tighter plotting",
      "9-1-1 fans of shows that put the emergency response front and center and let the team chemistry do the character work — The First Responders has the same addictive procedural pulse",
      "Rookie (The Rookie) fans of shows where someone is learning on the job in a dangerous environment while navigating complicated team dynamics — all three leads are doing this simultaneously",
      "Brooklyn Nine-Nine fans of ensemble workplace procedurals where the comedy comes from professional friction and the warmth comes from how much the team actually cares — this lands in the same emotional register"
    ]
  },

  // ── CORPORATE POWER DRAMA ────────────────────────────────────────────────────

  {
    id: 'agency-2023',
    title: 'Agency',
    year: 2023,
    episodes: 16,
    synopsis: 'Go Ah-in has clawed her way to the top of South Korea\'s most powerful advertising agency through talent, ruthlessness, and the kind of calculated sacrifices most people can\'t make. When she\'s positioned as the first female CEO candidate in the agency\'s history, every man she\'s ever outmaneuvered closes ranks against her. A razor-sharp corporate drama about power, ambition, and what it costs to want things that were never supposed to be yours.',
    genres: ['drama', 'thriller', 'corporate', 'character-study'],
    themes: ['ambition', 'power', 'gender-politics', 'betrayal', 'sacrifice', 'corporate-warfare', 'identity'],
    tropes: ['power-hungry-antihero', 'glass-ceiling', 'corporate-scheming', 'female-ambition', 'enemies-in-suits', 'moral-compromise'],
    tone: ['sharp', 'tense', 'sophisticated', 'compelling', 'dark', 'stylish'],
    setting: ['modern', 'corporate', 'advertising-industry', 'seoul'],
    characterTypes: ['calculating-executive', 'political-rivals', 'reluctant-allies', 'corporate-climber'],
    streaming: { disney_plus: true },
    network: 'JTBC',
    actors: [
      { name: 'Lee Bo-young', role: 'Go Ah-in', isLead: true },
      { name: 'Son Na-eun', role: 'Han Joo-won', isLead: false },
      { name: 'Jo Sung-ha', role: 'Nam Beom-jun', isLead: false }
    ],
    matchReasoningHints: [
      "Succession fans who want the same boardroom power dynamics and the specific horror of watching someone brilliant do terrible things to stay relevant — Agency delivers Succession energy with Korean corporate specificity",
      "Mad Men fans of shows set inside an advertising world where the product being sold is always secondary to the human cost of the industry — Agency has the same sharp industry critique wrapped in gorgeous production",
      "The Devil Wears Prada fans who want the workplace dynamics stretched across a full-length drama — Go Ah-in is Miranda Priestly as protagonist and it's even more fascinating from the inside",
      "Veep fans of political-style maneuvering in a non-political setting where every alliance is temporary and every principle is negotiable — the corporate war here has the same cold black comedy",
      "Invincible (corporate, not superhero) fans of watching a woman refuse to accept that the rules of the game were written to exclude her — the best K-drama about professional ambition in years"
    ]
  }

];
