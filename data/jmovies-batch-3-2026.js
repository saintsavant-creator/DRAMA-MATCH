/**
 * J-Movie/J-Drama Batch 3 — 2026 Catalog Expansion
 * 1 J-movie title: Kore-eda Hirokazu dual-perspective drama
 * Note: entries with 'runtime' (no 'episodes') are typed as 'jmovie' by recommendation-engine.js
 * Added: 2026-04-15
 */
module.exports = [

  // ── DUAL-PERSPECTIVE FAMILY DRAMA ─────────────────────────────────────────────

  {
    id: 'monster-2023-koreeda',
    title: 'Monster (怪物)',
    year: 2023,
    runtime: 126,
    synopsis: 'A mother thinks her son is being bullied by his teacher. The teacher thinks he is trying to protect his student. The student has a secret that neither adult has guessed. Kore-eda Hirokazu tells the same events three times from different perspectives, and each version reframes what preceded it. The Palme d\'Or winner for Best Screenplay — a film about how completely we misread children and each other.',
    genres: ['drama', 'mystery', 'coming-of-age', 'psychological'],
    themes: ['perspective', 'misunderstanding', 'childhood', 'lgbtq', 'family', 'institutional-failure', 'identity'],
    tropes: ['unreliable-narrator', 'multiple-perspectives', 'childhood-secret', 'school-investigation', 'quiet-revelation'],
    tone: ['devastating', 'quiet', 'emotional', 'psychological', 'humanist'],
    setting: ['contemporary-japan', 'school', 'family-home', 'lakeside'],
    characterTypes: ['protective-mother', 'accused-teacher', 'secretive-child', 'observant-friend'],
    streaming: { mubi: true, netflix: true },
    director: 'Kore-eda Hirokazu',
    actors: [
      { name: 'Sakura Ando', role: 'Saori Mugino', isLead: true },
      { name: 'Eita Nagayama', role: 'Michitoshi Hori', isLead: true },
      { name: 'Soya Kurokawa', role: 'Minato', isLead: true }
    ],
    matchReasoningHints: [
      'Juvenile Justice fans of East Asian drama about how adults misread and mishandle children within institutional systems — Monster is about exactly this failure, structured so that each perspective reveals another layer of institutional blindness',
      'Mother (J-drama) fans of Kore-eda-adjacent Japanese family drama that focuses on what parents actually see versus what their children are experiencing — the gap between adult perception and child reality is the whole subject',
      'A Killer Paradox fans of Korean content that uses a mystery structure to ask questions about perspective and moral accountability that have no clean answers — Monster withholds the same kind of final judgment',
      'School 2013 fans of K-dramas that take what happens to children within school systems seriously as subject matter and refuse to simplify the adults as either protectors or villains',
      'Parasite fans of Bong Joon-ho/Kore-eda-style Asian art cinema that uses genre mechanics (thriller, mystery) to illuminate something true about class, family, and the specific damage institutions do to the people inside them'
    ]
  }

];
