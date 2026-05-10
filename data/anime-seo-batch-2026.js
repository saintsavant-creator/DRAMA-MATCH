/**
 * Anime SEO Expansion Batch — 2026
 * 6 high-search-volume anime and anime films filling major catalog gaps.
 * Covers Netflix originals (Romantic Killer, Pluto), classic romance (Ore Monogatari),
 * iconic magical girl (Sailor Moon), and two essential Studio Ghibli films.
 *
 * IDs: romantic-killer, pluto-anime, ore-monogatari, sailor-moon-classic,
 *      my-neighbor-totoro, grave-of-fireflies
 *
 * Types: runtime-only entries = anime-movie; episodes entries = anime series
 * Dedup verified against 1,980 existing catalog IDs before merge.
 */
module.exports = [

  // ─── 1. Romantic Killer (2022) ─────────────────────────────────────────────
  {
    id: 'romantic-killer',
    title: 'Romantic Killer',
    nativeTitle: 'ロマンティックキラー',
    year: 2022,
    episodes: 12,
    synopsis: "Anzu Hoshino wants nothing from life except video games, her cat, and unlimited chocolate — and a wizard strips all three away to force her into living a real romantic comedy. Romantic Killer is a Netflix anime that deconstructs shojo romance tropes while being genuinely funny and, by the final episode, surprisingly earnest. The show is aware of every cliché it invokes and uses that awareness to ask what girls are actually supposed to want from the genre, and whether the answer changes when a girl decides for herself. A short, sharp, unexpectedly moving watch.",
    genres: ['comedy', 'romance', 'fantasy', 'shojo'],
    themes: ['female-agency', 'romance-deconstruction', 'forced-proximity', 'genuine-friendship', 'self-determination'],
    tropes: ['meta-romcom', 'forced-proximity', 'multiple-love-interests', 'comedy-magic', 'subversive-shojo'],
    tone: ['funny', 'meta', 'warm', 'occasionally-sharp', 'surprisingly-earnest'],
    setting: ['modern', 'japan', 'high-school', 'magical-comedy'],
    characterTypes: ['gamer-girl-protagonist', 'multiple-handsome-love-interests', 'meddling-wizard', 'genuine-female-friendship'],
    streaming: { netflix: true },
    network: 'Netflix',
    countryOfOrigin: 'Japan',
    mangaAdaptation: true,
    actors: [
      { name: 'Akari Kitou', role: 'Anzu Hoshino (voice)', isLead: true },
      { name: 'Natsuki Hanae', role: 'Tsukasa Kazuki (voice)', isLead: false }
    ],
    matchReasoningHints: [
      "A Business Proposal fans of romantic comedies that are very aware of their own genre and derive humor from that awareness while still delivering genuine romance — Romantic Killer knows every romcom beat is coming and the joke is that they work anyway",
      "True Beauty fans of K-dramas about a girl who has had to perform a version of herself for other people's expectations and the story is about whether she can stop — Anzu's resistance to the romantic narrative imposed on her is the same fight",
      "My Dress-Up Darling fans of anime romantic comedies with a female lead whose passionate interest in something non-romantic is treated as a genuine character quality rather than a cute quirk to be overwritten by love",
      "Weightlifting Fairy Kim Bok-joo fans of dramas and anime where the heroine is food-obsessed, comfort-oriented, and completely allergic to performing femininity in ways she didn't choose — both characters are the anti-heroine as actual heroine",
      "Nevertheless fans of K-dramas that are self-aware about romance genre conventions and use that awareness to ask harder questions about what women want from romance when they're allowed to actually want things"
    ]
  },

  // ─── 2. Pluto (2023) ──────────────────────────────────────────────────────
  {
    id: 'pluto-anime',
    title: 'Pluto',
    nativeTitle: 'PLUTO',
    year: 2023,
    episodes: 8,
    synopsis: "Based on Naoki Urasawa's celebrated manga reimagining of Astro Boy: the world's greatest robots are being destroyed one by one, and the detective-robot Gesicht investigates while confronting his own suppressed memories. Pluto is an eight-episode Netflix series about war, trauma, grief, and artificial consciousness — using the premise of robot detectives to ask what it means to feel, what justifies violence, and whether beings without biological life can be said to suffer. One of 2023's most intellectually serious animated works, with a final episode that will break you if you let it.",
    genres: ['sci-fi', 'mystery', 'drama', 'thriller', 'psychological'],
    themes: ['artificial-consciousness', 'grief', 'war-trauma', 'justice', 'what-makes-us-human', 'memory'],
    tropes: ['robot-protagonist', 'serial-killer-mystery', 'philosophical-sci-fi', 'grief-narrative', 'war-aftermath'],
    tone: ['dark', 'profound', 'emotionally-devastating', 'intellectually-serious', 'beautiful'],
    setting: ['near-future', 'robot-integrated-society', 'post-war', 'global'],
    characterTypes: ['robot-detective', 'most-powerful-robots', 'human-allies', 'mysterious-antagonist'],
    streaming: { netflix: true },
    network: 'Netflix',
    countryOfOrigin: 'Japan',
    mangaAdaptation: true,
    actors: [
      { name: 'Toshiki Masuda', role: 'Gesicht (voice)', isLead: true },
      { name: 'Yoko Hikasa', role: 'Helena (voice)', isLead: false }
    ],
    matchReasoningHints: [
      "Signal fans of mystery dramas where the procedural investigation is also a meditation on justice, memory, and what we owe to the people we failed to save — Pluto uses robot detectives to ask exactly the questions Signal asks with human police",
      "Move to Heaven fans of dramas that use a specific, unusual job (forensic cleaner, robot detective) as a way to encounter death systematically and ask what a life meant — Pluto's Gesicht meets the dead robots the same way Geu-ru met the humans",
      "Through the Darkness fans of serial killer procedurals that are more interested in the psychology of violence and its roots than in the mechanics of catching perpetrators — Pluto's investigation of who is destroying robots becomes a meditation on war",
      "Steins;Gate fans of anime that take a high-concept premise (time travel, robot consciousness) and use it to deliver a story about grief and what we cannot undo — Pluto's final revelation is the same category of emotional gut-punch",
      "Frieren fans of anime that use fantasy or sci-fi frameworks to ask genuine questions about time, mortality, and what we owe each other — Pluto and Frieren are the two best examples of genre anime deployed as serious literary fiction in the last five years"
    ]
  },

  // ─── 3. My Love Story!! / Ore Monogatari!! (2015) ─────────────────────────
  {
    id: 'ore-monogatari',
    title: 'My Love Story!! (俺物語!!)',
    nativeTitle: '俺物語!!',
    year: 2015,
    episodes: 24,
    synopsis: "Takeo Gouda is enormous, intimidating-looking, and the kindest human being in any room. Every girl he's ever liked has fallen for his best friend Makoto instead. When he saves Rinko from a train groper and she falls for Takeo — not Makoto — neither of them knows what to do with a romance that actually works. My Love Story!! is the corrective to every anime romance that puts girls through elaborate suffering: a show about two genuinely good people who like each other, are honest about it, and spend their time being happy together. Revolutionary in its gentleness.",
    genres: ['romance', 'comedy', 'shojo', 'slice-of-life'],
    themes: ['genuine-love', 'self-acceptance', 'unlikely-pairing', 'friendship-and-romance', 'body-image'],
    tropes: ['gentle-giant', 'obvious-romantic-devotion', 'anti-love-triangle', 'pure-love', 'slice-of-life-romance'],
    tone: ['warm', 'funny', 'sweet', 'wholesome', 'heartwarming'],
    setting: ['modern', 'japan', 'high-school', 'domestic'],
    characterTypes: ['giant-kind-male-lead', 'devoted-sweet-female-lead', 'beautiful-loyal-best-friend', 'supportive-parents'],
    streaming: { crunchyroll: true, netflix: true },
    network: 'Madhouse / NTV',
    countryOfOrigin: 'Japan',
    mangaAdaptation: true,
    actors: [
      { name: 'Takuya Eguchi', role: 'Takeo Gouda (voice)', isLead: true },
      { name: 'Megumi Han', role: 'Rinko Yamato (voice)', isLead: true }
    ],
    matchReasoningHints: [
      "Weightlifting Fairy Kim Bok-joo fans of romantic stories where both people are just honestly kind, the romance is not defined by misunderstanding or obstacle, and the show's pleasure is in spending time with people who are genuinely good — Ore Monogatari invented the template for that kind of K-drama",
      "Run On fans of Korean romance dramas where the leads are transparently devoted to each other early and the drama comes from watching them figure out how to be together rather than whether they will be — Takeo and Rinko resolve the will-they-wont-they in episode 4 and the show is better for it",
      "Crash Landing on You fans of romances with an unlikely but perfect pairing — Takeo is as unexpected a romantic lead as Ri Jeong-hyeok, and the show's warmth comes from refusing to treat that unexpectedness as a joke",
      "Hometown Cha-Cha-Cha fans of feel-good romances where the pleasure is in the particular warmth of the central couple and the community around them — Takeo's neighborhood, family, and friendships create the same ambient warmth as Gongjin",
      "Because This Is My First Life fans of romance dramas that take the position that two good people being honest with each other is more interesting than the standard obstacle-and-misunderstanding structure — both shows were making an argument about what romance is for"
    ]
  },

  // ─── 4. Sailor Moon (1992) ────────────────────────────────────────────────
  {
    id: 'sailor-moon-classic',
    title: 'Sailor Moon',
    nativeTitle: '美少女戦士セーラームーン',
    year: 1992,
    episodes: 200,
    synopsis: "Usagi Tsukino is a crybaby, a bad student, and a devoted friend who turns out to be a magical princess destined to save the world with her team of sailor guardians. Sailor Moon created the template for magical girl anime with emotional stakes and is one of the foundational works in the history of animation: a story about female friendship as the most powerful force in the universe, a romance between Usagi and Mamoru that the show makes you earn, and five seasons that span the full range from lighthearted episodic fun to genuinely devastating. The show that taught an entire generation of women that girls can save the world too.",
    genres: ['fantasy', 'romance', 'action', 'magical-girl', 'comedy'],
    themes: ['female-friendship', 'love-as-power', 'destiny', 'sacrifice', 'found-family', 'growing-up'],
    tropes: ['magical-girl', 'destined-romance', 'found-family', 'transformation-sequence', 'power-of-love'],
    tone: ['iconic', 'warm', 'emotional', 'sometimes-devastating', 'hopeful'],
    setting: ['modern', 'tokyo', 'magical-realms', 'episodic-battles'],
    characterTypes: ['crybaby-chosen-one', 'devoted-romantic-lead', 'diverse-guardian-team', 'iconic-villains'],
    streaming: { crunchyroll: true, amazon_prime: true },
    network: 'TV Asahi',
    countryOfOrigin: 'Japan',
    mangaAdaptation: true,
    actors: [
      { name: 'Kotono Mitsuishi', role: 'Usagi Tsukino / Sailor Moon (voice)', isLead: true },
      { name: 'Toru Furuya', role: 'Mamoru Chiba / Tuxedo Mask (voice)', isLead: true }
    ],
    matchReasoningHints: [
      "Goblin fans of supernatural romance epics with a destined love between beings from different realms who keep finding each other across lifetimes — Usagi and Mamoru's past life romance and its weight on the present is the original version of that structure",
      "Crash Landing on You fans of romance narratives where the lead couple's love is presented as cosmically ordained and every obstacle is just the universe testing what they're willing to do for each other — Sailor Moon invented that emotional logic",
      "Hospital Playlist fans of ensemble shows built around female friendship as the emotional foundation of everything — Sailor Moon's core premise is that Usagi's friends are as essential to saving the world as her romantic love, and neither the show nor Usagi ever forgets that",
      "My Love from the Star fans of supernatural romance dramas with past lives, destined meetings, and a love interest who is mysterious, powerful, and clearly devoted even when the female lead doesn't understand why — Tuxedo Mask is the original version of Do Min-joon",
      "Frieren fans of fantasy narratives about characters who have outlived their original companions and carry the memory of love across time — Sailor Moon's tragedy arcs use that same emotional material with a heroine who is the most devoted mourner in any anime"
    ]
  },

  // ─── 5. My Neighbor Totoro (1988) ─────────────────────────────────────────
  {
    id: 'my-neighbor-totoro',
    title: 'My Neighbor Totoro',
    nativeTitle: 'となりのトトロ',
    year: 1988,
    runtime: 86,
    synopsis: "Two sisters move to the countryside near a hospital where their mother is recovering, and discover that the old camphor tree nearby is home to Totoro — a massive, gentle forest spirit who only children can see. My Neighbor Totoro has no villain, no traditional narrative arc, and no violence. It is a film about childhood wonder, family anxiety, and the healing presence of nature, built around the most iconic character in the history of Japanese animation. The Studio Ghibli film that Miyazaki made for his own memory of what childhood magic felt like.",
    genres: ['fantasy', 'family', 'adventure', 'slice-of-life'],
    themes: ['childhood-wonder', 'family-love', 'nature-and-spirit', 'anxiety-and-comfort', 'growing-up'],
    tropes: ['magical-creature', 'sibling-bond', 'nature-spirits', 'healing', 'everyday-magic'],
    tone: ['magical', 'warm', 'gentle', 'nostalgic', 'comforting'],
    setting: ['historical', '1950s-japan', 'rural-countryside', 'spirit-world'],
    characterTypes: ['curious-older-sister', 'innocent-younger-sister', 'gentle-giant-spirit', 'devoted-father'],
    streaming: { max: true, netflix: true },
    network: 'Theatrical (Studio Ghibli)',
    countryOfOrigin: 'Japan',
    actors: [
      { name: 'Noriko Hidaka', role: 'Satsuki (voice)', isLead: true },
      { name: 'Chika Sakamoto', role: 'Mei (voice)', isLead: true }
    ],
    matchReasoningHints: [
      "Hotel del Luna fans of dramas about a spirit presence who interacts with children differently than adults — Totoro is the original gentle supernatural being who chooses to be visible to specific people because they need it, not because they earned it",
      "Spirited Away fans who want to see where Miyazaki's grammar for the spirit world was first established — Totoro is the compressed, pure version of the world-building that Spirited Away would later develop into a full narrative",
      "Move to Heaven fans of quietly devastating shows about grief, families under pressure, and the specific courage of children who are carrying more weight than adults acknowledge — Totoro's subtext about the mother's illness is the most precise portrayal of childhood anxiety in animation",
      "Hometown Cha-Cha-Cha fans of feel-good dramas where the pleasure is purely in the warmth of the world and the characters in it — My Neighbor Totoro is 86 minutes of that feeling at its most distilled",
      "Goblin fans of Korean dramas where a powerful supernatural being is also fundamentally gentle and their relationship with ordinary humans is the emotional center of everything — Totoro and Goblin occupy the same emotional space on opposite sides of the Pacific"
    ]
  },

  // ─── 6. Grave of the Fireflies (1988) ─────────────────────────────────────
  {
    id: 'grave-of-fireflies',
    title: 'Grave of the Fireflies',
    nativeTitle: '火垂るの墓',
    year: 1988,
    runtime: 89,
    synopsis: "In 1945 Kobe, fourteen-year-old Seita tries to keep his four-year-old sister Setsuko alive after they're orphaned in the American firebombing raids. Grave of the Fireflies is an antiwar film that never shows a battle: it shows what war produces — two children alone, hungry, and loving each other with everything they have while the adults around them choose survival over compassion. Studio Ghibli's most devastating film and one of the most powerful antiwar statements in cinema history. Watch it once, carry it forever.",
    genres: ['drama', 'historical', 'tragedy', 'war'],
    themes: ['sibling-love', 'war-and-civilian-suffering', 'survival', 'loss', 'pride-and-its-cost', 'childhood-ending'],
    tropes: ['wartime-survival', 'sibling-bond', 'tragic-outcome', 'war-as-context', 'innocent-victim'],
    tone: ['devastating', 'beautiful', 'heartbreaking', 'historically-grounded', 'essential'],
    setting: ['historical', '1945-japan', 'wartime-kobe', 'rural-shelter'],
    characterTypes: ['protective-older-brother', 'innocent-younger-sister', 'indifferent-adults', 'wartime-world'],
    streaming: { max: true, netflix: true },
    network: 'Theatrical (Studio Ghibli)',
    countryOfOrigin: 'Japan',
    actors: [
      { name: 'Tsutomu Tatsumi', role: 'Seita (voice)', isLead: true },
      { name: 'Ayano Shiraishi', role: 'Setsuko (voice)', isLead: true }
    ],
    matchReasoningHints: [
      "Pachinko fans of stories about ordinary people ground up by historical forces with no regard for individual lives, where the subject is what dignity costs under a system designed to deny it — Grave of the Fireflies is the most concentrated version of that subject ever filmed",
      "D.P. fans of K-dramas where institutional indifference to individual suffering is the villain and the show measures that indifference by what it costs specific people — Seita and Setsuko's situation is the result of the same social machinery that D.P. examines",
      "When the Camellia Blooms fans of dramas about a parent figure trying to protect a child from a world that is fundamentally indifferent to their survival — Seita's love for Setsuko is the most complete version of that protective devotion in animation",
      "Reply 1988 fans of Korean nostalgic dramas set in specific historical eras that use the period to talk about what was lost and what was preserved — Grave of the Fireflies does the same work for 1945 Japan with no nostalgia, only grief",
      "The Glory fans of dramas where the emotional devastation is earned rather than manufactured — Grave of the Fireflies tells you in its first minute how it ends, and the remaining 89 minutes are about learning to understand why that ending is a tragedy rather than just a fact"
    ]
  }
];
