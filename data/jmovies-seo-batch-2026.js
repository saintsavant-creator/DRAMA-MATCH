/**
 * J-Movie SEO Expansion Batch — 2026
 * 1 high-search-volume Japanese film filling a major catalog gap.
 * Drive My Car: Oscar-winning Ryusuke Hamaguchi film, high "movies like Drive My Car" search volume.
 *
 * ID: drive-my-car
 * Type: jmovie (has runtime, no episodes)
 *
 * Dedup verified against 1,980 existing catalog IDs before merge.
 */
module.exports = [

  // ─── 1. Drive My Car (2021) ───────────────────────────────────────────────
  {
    id: 'drive-my-car',
    title: 'Drive My Car (ドライブ・マイ・カー)',
    nativeTitle: 'ドライブ・マイ・カー',
    year: 2021,
    runtime: 179,
    synopsis: "Theater director Yusuke Kafuku's wife dies before he can resolve a silence between them. Two years later, directing a multilingual production of Uncle Vanya in Hiroshima, he is assigned a young driver named Misaki who ferries him in his red Saab 900 and says very little. Drive My Car is Ryusuke Hamaguchi's adaptation of three Haruki Murakami short stories, winner of the Academy Award for Best International Feature Film, and one of the most patient, honest films about grief and the difficulty of knowing another person. Its three hours feel necessary rather than long.",
    genres: ['drama', 'romance', 'mystery', 'art-house'],
    themes: ['grief', 'communication', 'marriage', 'performance-and-truth', 'silence', 'connection-across-difference'],
    tropes: ['grief-narrative', 'unlikely-connection', 'road-trip-intimacy', 'theatrical-world', 'slow-burn'],
    tone: ['contemplative', 'devastating', 'beautifully-paced', 'honest', 'quiet'],
    setting: ['modern', 'hiroshima', 'theater-world', 'long-car-rides'],
    characterTypes: ['grieving-theater-director', 'silent-young-driver', 'theater-company-ensemble', 'ghost-of-the-wife'],
    streaming: { mubi: true, hulu: true },
    network: 'Theatrical (Bitters End)',
    countryOfOrigin: 'Japan',
    actors: [
      { name: 'Hidetoshi Nishijima', role: 'Yusuke Kafuku', isLead: true },
      { name: 'Toko Miura', role: 'Misaki Watari', isLead: true },
      { name: 'Reika Kirishima', role: 'Oto Kafuku', isLead: false }
    ],
    matchReasoningHints: [
      "My Mister fans of slow, interior Korean dramas about two people with different kinds of damage who say very little to each other and somehow create a space that feels more honest than any normal conversation — Drive My Car is the same emotional logic in a Japanese film, with car rides instead of commuter trains",
      "Move to Heaven fans of dramas and films that use an unusual professional relationship as the frame for a story about grief — Misaki and Kafuku's long drives function the same way as Geu-ru's cleaning jobs, as a structure for encountering what was left unfinished",
      "Our Blues fans of episodic K-dramas that take their time with each character's grief and believe that stories about ordinary human loss are the most important stories — Drive My Car has the same patience and the same respect for unexpressed feeling",
      "The World of the Married fans of Korean dramas about marriages where something profound went unsaid, and the tragedy is not just the loss but the gap between what was felt and what was communicated — Kafuku's marriage is defined by exactly that gap",
      "Pachinko fans of narratives that use the formal precision of their craft to do something about time, silence, and what we carry — Drive My Car is the film equivalent of the scope and emotional gravity that Pachinko achieves as a drama series"
    ]
  }
];
