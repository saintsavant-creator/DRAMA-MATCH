/**
 * Anime Catalog Expansion Batch E — 2026
 * 4 high-demand anime titles filling major search gaps.
 * Covers: Naruto (classic), Frieren: Beyond Journey's End, Mashle: Magic and Muscles,
 * The Wind Rises (Miyazaki).
 * Dedup verified against 1,910 existing catalog IDs before merge.
 */
module.exports = [

  // ─── 1. Naruto (2002) ─────────────────────────────────────────────────────
  {
    id: 'naruto',
    title: 'Naruto',
    nativeTitle: 'ナルト',
    year: 2002,
    episodes: 220,
    synopsis: "Naruto Uzumaki is a loudmouth orphan who wants to become Hokage — the most powerful ninja in his village — despite the fact that his village fears and resents him because of the demon fox sealed inside him since birth. Naruto is the foundational shonen anime: a coming-of-age story about a child who turns his biggest wound into his defining trait. The first 220 episodes track his growth from a boy who craves acknowledgment into someone who understands what it costs. The filler is extensive; the highlights are some of the most emotionally effective moments in anime history.",
    genres: ['action', 'adventure', 'coming-of-age', 'fantasy', 'shonen'],
    themes: ['belonging', 'perseverance', 'redemption', 'friendship', 'sacrifice', 'identity'],
    tropes: ['underdog', 'found-family', 'rival-turned-friend', 'power-of-friendship', 'chosen-one', 'orphan-hero'],
    tone: ['emotional', 'action-packed', 'inspiring', 'sometimes-heartbreaking', 'hopeful'],
    setting: ['ninja-world', 'hidden-leaf-village', 'multiple-nations', 'fantasy-japan'],
    characterTypes: ['determined-underdog', 'rival-prodigy', 'wise-sensei', 'complex-villain', 'loyal-teammates'],
    streaming: { crunchyroll: true, netflix: true, amazon_prime: true },
    network: 'TV Tokyo',
    countryOfOrigin: 'Japan',
    mangaAdaptation: true,
    actors: [
      { name: 'Junko Takeuchi', role: 'Naruto Uzumaki (voice)', isLead: true },
      { name: 'Noriaki Sugiyama', role: 'Sasuke Uchiha (voice)', isLead: true },
      { name: 'Chie Nakamura', role: 'Sakura Haruno (voice)', isLead: false }
    ],
    matchReasoningHints: [
      "Goblin fans of stories about a person who carries something monstrous inside them and must determine whether that thing is their identity or their burden — Naruto's relationship to the Nine-Tails is the same question Goblin asks about the sword",
      "Solo Leveling fans of power-scaling narratives where the protagonist starts at the absolute bottom and every level of strength is earned rather than given — Naruto's growth is slower and more earned than most",
      "All of Us Are Dead fans of ensemble survival stories about teenagers whose bonds are tested by escalating violence — Team 7's friendship under pressure follows the same structure",
      "My Name fans of Korean crime dramas where the protagonist's identity is inseparable from their capacity for violence and the story is about whether they can become something other than what they were shaped to be",
      "Avatar: The Last Airbender fans who want the same warmth, the same ensemble, the same coming-of-age structure, the same respect for emotional stakes — Naruto is the anime equivalent in terms of cultural impact and tonal generosity"
    ]
  },

  // ─── 2. Frieren: Beyond Journey's End (2023) ──────────────────────────────
  {
    id: 'frieren',
    title: "Frieren: Beyond Journey's End",
    nativeTitle: '葬送のフリーレン',
    year: 2023,
    episodes: 28,
    synopsis: "The hero's party defeated the Demon King. The adventure is over. Fifty years later, everyone who participated is dead of old age — except Frieren, the elven mage, who barely noticed the years pass. She begins a journey to understand the humans she traveled with and didn't pay enough attention to while they were alive. Frieren: Beyond Journey's End is an anime about grief and time that has no precedent in the medium: quiet, devastating, and formally brilliant, it won Anime of the Year 2023 and redefined what the fantasy genre can do with elegy.",
    genres: ['fantasy', 'adventure', 'drama', 'slice-of-life'],
    themes: ['grief', 'time', 'mortality', 'memory', 'connection', 'legacy'],
    tropes: ['post-adventure', 'immortal-perspective', 'found-family', 'journey', 'mentor-student'],
    tone: ['melancholic', 'quietly-devastating', 'warm', 'contemplative', 'beautiful'],
    setting: ['high-fantasy', 'post-demon-king', 'journey-across-continent', 'multiple-towns'],
    characterTypes: ['immortal-who-missed-it', 'new-companions', 'memories-of-the-dead', 'other-long-lived-beings'],
    streaming: { crunchyroll: true },
    network: 'Aniplex / TOHO',
    countryOfOrigin: 'Japan',
    mangaAdaptation: true,
    actors: [
      { name: 'Atsumi Tanezaki', role: 'Frieren (voice)', isLead: true },
      { name: 'Kana Ichinose', role: 'Fern (voice)', isLead: true },
      { name: 'Chiaki Kobayashi', role: 'Stark (voice)', isLead: false }
    ],
    matchReasoningHints: [
      "My Liberation Notes fans of meditative dramas about someone who has never fully inhabited their own life noticing too late what they were missing — Frieren's relationship to grief is structurally identical",
      "Goblin fans of Korean fantasy where immortality is not power but damage — a specific form of loss that comes from outliving every connection that made the world worth inhabiting",
      "The Leftovers fans of grief narratives that take the experience of loss seriously as the organizing condition of a life, and refuse to resolve it into something more comfortable",
      "Violet Evergarden fans of anime that use high fantasy settings to examine what it means to understand human emotion from outside it — both shows are about artificial or inhuman beings learning to grieve",
      "Normal People fans of slow, quiet narratives about connection and loss where the formal restraint is the emotional delivery mechanism — Frieren has the same density of feeling in small gestures"
    ]
  },

  // ─── 3. Mashle: Magic and Muscles (2023) ──────────────────────────────────
  {
    id: 'mashle',
    title: 'Mashle: Magic and Muscles',
    nativeTitle: 'マッシュル-MASHLE-',
    year: 2023,
    episodes: 12,
    synopsis: "In a world where magical ability determines social status, Mash Burnedead has no magic at all — he compensates by being physically impossible. He can punch away magic spells, catch bullets, and fold steel with his bare hands, all while caring only about protecting the simple life he shares with his adopted father and eating cream puffs. Sent to the most prestigious magic school to survive, Mash solves every magical problem with his fists and is too simple to understand that he's supposed to be terrified. A Harry Potter parody that is actually funnier the more seriously it takes itself.",
    genres: ['action', 'comedy', 'fantasy', 'school', 'shonen'],
    themes: ['belonging', 'physical-vs-magical', 'simple-goals', 'found-family', 'defying-expectations'],
    tropes: ['magic-school', 'no-magic-protagonist', 'overpowered-hero', 'pure-hearted-lead', 'harry-potter-parody'],
    tone: ['hilarious', 'action-packed', 'absurdist', 'warm', 'earnest'],
    setting: ['magic-school', 'fantasy-britain', 'tournament', 'dormitory'],
    characterTypes: ['physically-invincible-simple-protagonist', 'diverse-magic-school-students', 'tyrannical-elites', 'eccentric-friends'],
    streaming: { crunchyroll: true },
    network: 'A-1 Pictures',
    countryOfOrigin: 'Japan',
    mangaAdaptation: true,
    actors: [
      { name: 'Chiaki Kobayashi', role: 'Mash Burnedead (voice)', isLead: true }
    ],
    matchReasoningHints: [
      "One Punch Man fans of anime about an overpowered protagonist who is too straightforward to notice the dramatic irony of his situation — Mash and Saitama occupy the same conceptual space at different temperature settings",
      "Harry Potter fans who want the magic school structure deconstructed by someone who refuses to follow its logic — Mash's solution to every magical obstacle is a reminder that rules only work if everyone agrees to follow them",
      "Spy x Family fans of anime where the premise generates comedy from an innocent protagonist navigating a world of deception with zero awareness of how threatening they are",
      "Mob Psycho 100 fans of anime about characters who are physically dominant but emotionally motivated by the simplest possible things — Mash's cream puff motivation is as compelling as Mob's quest for normalcy",
      "Legally Blonde fans of stories about someone who enters an elite institution by an unconventional route and succeeds precisely because they are too sincere to play the game the way the institution designed it"
    ]
  },

  // ─── 4. The Wind Rises (2013) ─────────────────────────────────────────────
  {
    id: 'the-wind-rises',
    title: 'The Wind Rises',
    nativeTitle: '風立ちぬ',
    year: 2013,
    runtime: 126,
    synopsis: "Jiro Horikoshi, the real engineer who designed the Mitsubishi A6M Zero fighter — the plane that would be used in the attack on Pearl Harbor — wanted only to design beautiful aircraft. The Wind Rises is Hayao Miyazaki's final film (as of its release) and the most explicitly biographical: a dreamer so consumed by the beauty of flight that he builds something magnificent and terrible. It contains arguably the most devastating love story in Ghibli's catalog, a meditation on art and complicity that refuses to simplify Jiro's choices, and animation of such quality that individual sequences have been studied as technical benchmarks.",
    genres: ['drama', 'romance', 'historical', 'animated-film'],
    themes: ['art-and-consequence', 'war', 'ambition', 'love-and-loss', 'beauty', 'moral-complexity'],
    tropes: ['biographical', 'tragic-romance', 'dreamer-protagonist', 'illness', 'wartime-romance'],
    tone: ['bittersweet', 'visually-stunning', 'melancholic', 'romantic', 'ambiguous'],
    setting: ['1930s-japan', 'wartime', 'aircraft-design', 'countryside-sanatorium'],
    characterTypes: ['obsessed-creator', 'terminally-ill-love', 'dreaming-mentor', 'wartime-colleagues'],
    streaming: { netflix: true, max: true },
    director: 'Hayao Miyazaki',
    network: 'Studio Ghibli / Toho',
    countryOfOrigin: 'Japan',
    actors: [
      { name: 'Hideaki Anno', role: 'Jiro Horikoshi (voice)', isLead: true },
      { name: 'Miori Takimoto', role: 'Naoko (voice)', isLead: true }
    ],
    matchReasoningHints: [
      "Broker fans of morally complex films that refuse to judge their protagonist for choices that are simultaneously understandable and complicit in larger harm — The Wind Rises and Broker share an interest in beautiful people doing ambiguous things",
      "My Mister fans of quietly devastating dramas about people who carry enormous weight with enormous dignity and whose love stories are defined by what the circumstances prevent rather than allow",
      "Burning fans of Lee Chang-dong-adjacent Korean art cinema that is interested in what it means to make beautiful things in a world that uses beautiful things for terrible purposes",
      "Princess Mononoke fans who want Miyazaki at his most morally complex — The Wind Rises is the director's most direct statement about the relationship between art and the world it serves",
      "1883 (Yellowstone prequel) fans of period pieces where the physical beauty of the setting is inseparable from the violence of the era, and the show trusts you to hold both without being instructed on what to feel"
    ]
  },

];
