/**
 * TMDB Poster Paths — Curated map of showId → TMDB poster path
 *
 * Poster CDN: https://image.tmdb.org/t/p/w342{posterPath}
 * Images sourced from The Movie Database (themoviedb.org)
 *
 * To add more: look up show on themoviedb.org and grab the poster hash
 * from image URLs like: media.themoviedb.org/t/p/w300_and_h450_face/{hash}.jpg
 */

const TMDB_BASE = 'https://image.tmdb.org/t/p/w342';

const POSTER_PATHS = {
  // ──────────────────────────────────────────────────
  // FEATURED PAIRS — Western shows/movies (refreshed 2026-04-08)
  // ──────────────────────────────────────────────────
  'psych':                          '/fDI15gTVbtW5Sbv5QenqecRxWKJ.jpg',
  'mindhunter':                     '/fbKE87mojpIETWepSbD5Qt741fp.jpg',
  'dexter':                         '/q8dWfc4JwQuv3HayIZeO84jAXED.jpg',
  'outlander':                      '/bxBmfyzK0ARF9hqf2pbFWsddH14.jpg',
  'john-wick':                      '/wXqWR7dHncNRbxoEGybEy7QTe9h.jpg',
  'notting-hill':                   '/hHRIf2XHeQMbyRb3HUx19SF5Ujw.jpg',
  'greys-anatomy':                  '/hjJkrLXhWvGHpLeLBDFznpBTY1S.jpg',
  'prison-break':                   '/wnmNPaLvhnMeOqnWlhNkYCZxtda.jpg',
  // New featured western shows (2025-2026 trending)
  'shogun':                         '/pgqgaUx1cJb5oZQQ5v0tNARCeBp.jpg',  // TMDB #126308
  'the-gentlemen':                  '/ptpr0kGAckfQkJeJIt8st5dglvd.jpg',  // TMDB #206559
  'the-last-of-us':                 '/uKvVjHNqB5VmOrdxqAt2F7J78ED.jpg',  // TMDB #100088
  'adolescence':                    '/20i4nShZZg1g1VFHSB8xpaYM4r7.jpg',  // TMDB #244786

  // ──────────────────────────────────────────────────
  // FEATURED PAIRS — Korean shows/movies (refreshed 2026-04-08)
  // ──────────────────────────────────────────────────
  'cafe-minamdang':                 '/jFXSdUd12KzpIKixEmTL0P7osxP.jpg',
  'through-the-darkness':           '/8sJW1IHZ4FQnHeE4cJIbR18L7If.jpg',
  'mouse':                          '/qz0axqEwwIa5uaMsUYKGs9u29ut.jpg',
  'moon-lovers-scarlet-heart-ryeo': '/pjdPGHqUe60ZGQJR1TItVNaV4it.jpg',
  'a-bittersweet-life':             '/iqUGAIQqHMMscatykpR6hVBxezA.jpg',
  'my-sassy-girl-movie':            '/grFSgOnSt8saknfRUY05wLGVJ7T.jpg',
  'doctor-romantic':                '/9fbRJgZ2zDTnSUId1bOwsllHNr7.jpg',
  'big-mouth-kdrama':               '/gJDvYUJcPEDJzB3SnQokifPUtRF.jpg',
  // New featured K-drama targets (2025-2026 refresh)
  'sky-castle':                     '/tE2b4DKYteipIBE51re62jLi6RU.jpg',  // TMDB #84327
  'extracurricular':                '/yDd0v9yGewPYOyjoFlrK8V9dsoc.jpg',  // TMDB #97987

  // ──────────────────────────────────────────────────
  // POPULAR K-DRAMAS — Top recommendation results
  // ──────────────────────────────────────────────────
  // Verified directly from TMDB pages
  'crash-landing-on-you':           '/fgBNLPr6mC8pxuR79ENAJY4nBmj.jpg',
  'goblin':                         '/sPkxHNw5BFvuCFGWw825TS7n6X3.jpg',
  'squid-game':                     '/1QdXdRYfktUSONkl1oD5gc6Be0s.jpg',
  'vincenzo':                       '/qbkSS1cTjT4DzIwD44bdhTuYgdT.jpg',
  'the-glory':                      '/uUM4LVlPgIrww07OoEKrGWlS1Ej.jpg',

  // ──────────────────────────────────────────────────
  // POPULAR WESTERN SHOWS — Common source shows
  // ──────────────────────────────────────────────────
  'breaking-bad':                   '/ggFHVNu6YYI5L9pCfOacjizRGt.jpg',
  'game-of-thrones':                '/1XS1oqL89opfnbLl8WnZY1O1uJx.jpg',
  'stranger-things':                '/49WJfeN0moxb9IPfGn8AIqMGskD.jpg',
  'friends':                        '/f496cm9enuEsZkSPzCwnTESEK5s.jpg',
  'the-office':                     '/qWnJzyZhyy74gjpSjIXWmuk0ifX.jpg',
  'suits':                          '/fO0nFvGcbTHpwZGLkr98xuZ5hFs.jpg',  // TMDB #37680 — updated poster
  'criminal-minds':                 '/gigxjNnACiXAfrwoMox5WJFgc0I.jpg',
  'the-crown':                      '/1M876KPjulVwppEpldhdc8V4o68.jpg',
  'ozark':                          '/pCGyPVrI9Fzw6rE1Pvi4BIXF6ET.jpg',
  'killing-eve':                    '/t8NTYbfqzBFz3lzqMwIulvmtYQN.jpg',
  'fleabag':                        '/eMHBqDPovdQpDVXkOHFMIHv2oGT.jpg',
  'succession':                     '/z0XiwdrCQ9yVIr4O0pxzaAYRxdW.jpg',  // fixed: TMDB #76331
  'house':                          '/3Cz7ySOQJmqiuTdrc6CY0r65yDI.jpg',
  'lost':                           '/73IyNPDPMwRCxqcNQHANokLZfqV.jpg',
  'bridgerton':                     '/luoKpgVwi1E5nQsi7W0UuKHu2Rq.jpg',
