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
  'moon-lovers-scarlet-heart-ryeo': '/pjdPGHqUe60ZGQJRi1TItVNaV4it.jpg',
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
  'little-women':                   '/oK6q2rDVXNpPyZaZhhiqG2g5Wty.jpg',  // TMDB #134675 (K-drama)
  'little-women-kdrama':            '/oK6q2rDVXNpPyZaZhhiqG2g5Wty.jpg',  // TMDB #134675 (K-drama)

  // ──────────────────────────────────────────────────
  // WESTERN MOVIES — Common sources
  // ──────────────────────────────────────────────────
  'parasite-kmovie':                '/7IiTTgloJzvGI1TAYymCfbfl3vT.jpg',
  'train-to-busan':                 '/oN9QDwN7gLWLuBt8y0mXwSrjzXm.jpg',

  // ──────────────────────────────────────────────────
  // THEMED SECTIONS — Western source shows
  // All verified from TMDB pages
  // ──────────────────────────────────────────────────
  'billions':                       '/edwYPQdZE998d748AdwWLsfy0rl.jpg',  // TMDB #62852
  'gossip-girl':                    '/mRvSUuU1VQQkZZ578jKJpcUCuL8.jpg',  // TMDB #1395
  'house-of-cards':                 '/hKWxWjFwnMvkWQawbhvC0Y7ygQ8.jpg',  // TMDB #1425
  'sherlock':                       '/7WTsnHkbA0FaG6R9twfFde0I9hl.jpg',  // TMDB #19885
  'the-good-wife':                  '/lasNCd45fpPLirlA7QxkuopWro.jpg',   // TMDB #1435
  'the-bear':                       '/eKfVzzEazSIjJMrw9ADa2x8ksLz.jpg',  // TMDB #136315
  'sex-and-the-city':               '/jfLp8gTfdi9d8onEFJ60kp1Bl1e.jpg',  // TMDB #105
  'black-mirror':                   '/seN6rRfN0I6n8iDXjlSMk1QjNcq.jpg',  // TMDB #42009
  'the-walking-dead':               '/s3OIDrCErUjthsnPPreY7XktQXB.jpg',  // TMDB #1402
  'emily-in-paris':                 '/c0bkO416OU7YGdOFktk45H8REgL.jpg',  // TMDB #82596
  'the-queens-gambit':              '/zU0htwkhNvBQdVSIKB9s6hgVeFK.jpg',  // TMDB #87739
  'normal-people':                  '/c4mk4EQVIM11yd3W43DDdqDazDU.jpg',  // TMDB #89905

  // ──────────────────────────────────────────────────
  // THEMED SECTIONS — Korean match shows
  // All verified from TMDB pages
  // ──────────────────────────────────────────────────
  'reborn-rich':                    '/ksXvHQEzcOy8wyxZUivhfHakiXg.jpg',  // TMDB #153496
  'tracer':                         '/cfE8rFOi7jYfkJodsmUC6HQg5Cg.jpg',  // TMDB #135272
  'penthouse':                      '/wybv1VgIOMhcHdU3ooikn2LuR1o.jpg',  // TMDB #99489
  'chief-of-staff':                 '/95U7TJGxDP6OHeAF5HP78as7eff.jpg',  // TMDB #89642
  'signal':                         '/uIskxIo84jexPhnrzm1TpsUCI9w.jpg',  // TMDB #64840
  'stranger':                       '/blbbtx7DyvZ3JTGyc9MCArDL79b.jpg',  // TMDB #70626
  'hospital-playlist':              '/8MSjQkH2FrG0t4l84L5HmiSFrS7.jpg',  // TMDB #96102
  'wok-of-love':                    '/dTh81YtdEzacHhnmLw1Tef7cBRl.jpg',  // TMDB #78797
  'search-www':                     '/2noAzJLq5dYm2HXbpGlWrgMyNqm.jpg',  // TMDB #89410
  'welcome-to-waikiki':             '/pggzZamoLNTiRgoYz8WVCISMCqv.jpg',  // TMDB #76557
  'the-man-from-nowhere':           '/ld19CFIo27t41JXSGZdaPMUGTxh.jpg',  // TMDB movie #51608
  'bloodhounds':                    '/yLQQoseay2JXHZO9UVGA53i1HQ.jpg',   // TMDB #127529
  'prison-playbook':                '/vlPZbMxbEAxQG67TOAYFMYwMBjo.jpg',  // TMDB #74821
  'kingdom':                        '/AsICtiVtz4icMQQRwDvOzfaTzjK.jpg',  // TMDB #70593
  'business-proposal':              '/iLh7L8ZuvgdxFaM9sImyv2iKYLe.jpg',  // TMDB #154825
  'sweet-home':                     '/ovLdkMclsr9NjkfRPgMaGDTHyGk.jpg',  // TMDB #96648
  'our-beloved-summer':             '/bA15g6OLmhQ2HkURRaCztA2jwqI.jpg',  // TMDB #135897
  'the-good-wife-kr':               '/1rowNWM1P4cplxUrKPC9ElenkW.jpg',   // TMDB #66781

  // ──────────────────────────────────────────────────
  // BATCH W2 — WESTERN SHOWS (added 2026-03-31)
  // ──────────────────────────────────────────────────
  '1923':                           '/vlFqg5NFYP3E29X06ggCBN5CyEQ.jpg',  // TMDB #120168
  'tulsa-king':                     '/dHr9lmGdQHAfDu2q0hMbgbJd7lC.jpg',  // TMDB #150001
  'industry':                       '/gdIrmf2DdY5mgN6ycVP0XlzKzbE.jpg',  // TMDB #85552
  'the-sympathizer':                '/eP0SJuL3XBqZZV0wSl1oPOkSAJe.jpg',  // TMDB #230424
  'landman':                        '/bPBYgrJxEMFyMlnXb1SHlHVSC2c.jpg',  // TMDB #237800
  'russian-doll':                   '/aAKoQ2MPPZY5yrGHBNMU1DDeQyE.jpg',  // TMDB #80241
  'i-may-destroy-you':              '/heOnolzQXnBsOWXGVCHoRINqKze.jpg',  // TMDB #102776
  'lovecraft-country':              '/byDUSjU0OoFZTFJJoWGnByKKJCi.jpg',  // TMDB #87108
  'pam-and-tommy':                  '/mL4bCZEJepGJE9KBv0YqECJe4IG.jpg',  // TMDB #111900
  'people-v-oj-simpson':            '/kZFAXhbEh6b9VpKPfXWFAqkE3sO.jpg',  // TMDB #65995
  'halt-and-catch-fire':            '/cqzHqkSBtkaoUNpFqUFfCb5fFWq.jpg',  // TMDB #61055
  'eric':                           '/e9JYjqZkBxfBiPeEuwaNzInFNjp.jpg',  // TMDB #243038
  'tokyo-vice':                     '/i8kww3KnXmHLQtdpTk51KhKE4bq.jpg',  // TMDB #135157
  'the-offer':                      '/6f5lMk2TBHbHHfxvnVRTOFfABE9.jpg',  // TMDB #126146
  'will-trent':                     '/cDh5kRl4BwSqYBaRvHnXMUJdTsq.jpg',  // TMDB #142434
  'minx':                           '/pQMerKqGPxSt1CRCcTGXFcTNQNI.jpg',  // TMDB #121392
  'physical':                       '/rV4nOrQQIBmJGd12zHWrPGeBlY4.jpg',  // TMDB #105025 (Apple TV+)
  'gaslit':                         '/8G1G5jCJ3Lb0lUB7T3LpCRQZmpq.jpg',  // TMDB #116744
  'fall-of-the-house-of-usher':     '/RYLCNQVV61JXB6gFPF3Mwr8Hflm.jpg',  // TMDB #119051
  'bodies':                         '/7oAm3DMliaCLaGGKzUCaFQQBVWX.jpg',  // TMDB #167605

  // ──────────────────────────────────────────────────
  // BATCH M2 — WESTERN MOVIES (added 2026-03-31)
  // ──────────────────────────────────────────────────
  'past-lives':                     '/k3waqVXSnvCZSAdjjS3JtvkFyJF.jpg',  // TMDB #901362
  'barbie':                         '/iuFNMS8vlbLBi7a5zn2h4uAJ7kq.jpg',  // TMDB #346698
  'oppenheimer':                    '/8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg',  // TMDB #872585
  'poor-things':                    '/kCGlIMHnOm8JPXIRFKjMM9z7M4.jpg',   // TMDB #792307
  'banshees-of-inisherin':          '/9IaFhLIMnXCaC9RgLYf4oNV3t6K.jpg',  // TMDB #674324
  'the-menu':                       '/v3ZZn54H8ZWAaCQ5nNqSihaF0Ka.jpg',  // TMDB #593643
  'spider-verse':                   '/iiZZdoQBEYBv6id8su7ImL0aMbT.jpg',  // TMDB #324857
  'tar':                            '/tBXlhA8WodCRxWPjfbzGOlXSKkZ.jpg',  // TMDB #706323
  'aftersun':                       '/dsvHJCzJFKsXFqGGheWEhvtRtFi.jpg',  // TMDB #832349
  'triangle-of-sadness':            '/a3CDvjlgkxhQVDQrMHJYhyMtUbq.jpg',  // TMDB #830805

  // ──────────────────────────────────────────────────
  // BATCH H — K-DRAMAS (added 2026-04-02)
  // ──────────────────────────────────────────────────
  'mine-2021':                      '/r5kJZl10lE2gbIuY92gPaQHYEa4.jpg',  // TMDB #124426
  'jirisan':                        '/7oAKJBoeMICBkyaANQHFPU9fDFD.jpg',  // TMDB #110533
  'military-prosecutor-doberman':   '/9FICze3QdBj1mJ0eUriroAJDFly.jpg',  // TMDB #135652
  'why-her':                        '/5OmQlGvYOWt8HLTfduyG4SMTTeZ.jpg',  // TMDB #136644
  'eve-2022':                       '/6xvIRR50lDzFRWLFCAwSzEkoEu3.jpg',  // TMDB #138251
  'the-forbidden-marriage':         '/xzlMB1nGJtMhr2GnecpHIh7XUZe.jpg',  // TMDB #201330
  'unlock-my-boss':                 '/8SmsIBU2v4AWNNhFi5qfSUOT4ZN.jpg',  // TMDB #155459
  'kairos':                         '/cnThovHCzJ2YoKrZ0oBBZfkd26j.jpg',  // TMDB #112119
  'when-the-weather-is-fine':       '/h3FeWqdslmfD3d2wffFELjMcjQZ.jpg',  // TMDB #96977
  'find-me-in-your-memory':         '/u7bCi8AoLID1ykXogzL5a4mAL0o.jpg',  // TMDB #99477
  'may-i-help-you':                 '/5raBam3P9PypmcNsK7RDgyC5wAm.jpg',  // TMDB #209275
  'hyena':                          '/u6iQysC0Vl3SW4G6x9NjL9pfieD.jpg',  // TMDB #95110
  'green-mothers-club':             '/1khpDFmRfKtBUJ2VMgJsKBf64PU.jpg',  // TMDB #195747
  'curtain-call':                   '/76meAyF9VzQzOPu4nQ4Mq89dHF.jpg',  // TMDB #194736
  'island-2022':                    '/bpoDjjcj6vE7k9xH14wb13UMYqi.jpg',  // TMDB #211747
  'big-bet':                        '/9GEGH8kT7XK8iUXl76cWsCt8e46.jpg',  // TMDB #112486
  'blood-free':                     '/gxd86XTik9QfPLXxbMiMdsg407V.jpg',  // TMDB #209750
  'pachinko':                       '/wUTXdmL6oNjhiStGveOaPeuFOYQ.jpg',  // TMDB #110382
  'class-of-lies':                  '/j57pZCKyaXRParhXE18hDGJRfbA.jpg',  // TMDB #90181
  'zombie-detective':               '/ndFDaobo9M0lfTjHRp9sVHT8OnO.jpg',  // TMDB #108285
  'the-escape-of-the-seven':        '/gVx3QEJ7ShVXdJJdWIYmTgwplXi.jpg',  // TMDB #200707
  'race-2023':                      '/yQShXAwquNCE2nyHOOSJCf3IoIb.jpg',  // TMDB #215472
  'brave-citizen':                  '/ixQoOExnnvIxYvnqGgfhaWqXeXc.jpg',  // TMDB #897160
  'my-dangerous-wife':              '/58NL2gDog1sOTKdns5Ag9vpTVgW.jpg',  // TMDB #106415
  'one-more-happy-ending':          '/i4ZrXTE2z48MCzBtRuBbFHb5jTi.jpg',  // TMDB #65187
  'lie-after-lie':                  '/RfWfTECbvLLLNWaAyTFIGNYAOM.jpg',   // TMDB #106535
  'rugal':                          '/lLXeqmvJ6KnWz1ifLMBPHYOovCt.jpg',  // TMDB #97766
  'memorist':                       '/eC5lQovhFgJma2lqkKvM1XItiZB.jpg',  // TMDB #99478
  'police-university':              '/2xBZSR9HMKmBSstZ37yNhZs1MUK.jpg',  // TMDB #127356
  'lovers-of-the-red-sky':          '/lzKiEoVUTdhGDOuqNoYoL0Q1FYA.jpg',  // TMDB #117896

  // ──────────────────────────────────────────────────
  // BATCH I — K-DRAMAS (added 2026-04-02)
  // ──────────────────────────────────────────────────
  'doctor-john':                    '/2EtZ91FzsFRe3FFtAr29ESgW9QK.jpg',  // TMDB #90706
  'my-secret-romance':              '/j7AM5lQS18jQUtrfWsKzOqDy1VQ.jpg',  // TMDB #70744
  'mystic-popup-bar':               '/ol3UYd3EfHmz5jz777jpAPwGxwp.jpg',  // TMDB #99491
  'live':                           '/f8eQMaFRM4kvohslsTv2wa0CSSG.jpg',  // TMDB #77283
  'misty':                          '/5kqnPQJrbOiyT03OawvSAKnX1u5.jpg',  // TMDB #76715
  'radio-romance':                  '/xpiV46aAnD4U5r7IUZYh4NtkcvU.jpg',  // TMDB #76114
  'girl-who-sees-smells':           '/uC95QIWiPq2ts558aki8NC5rXHN.jpg',  // TMDB #62301
  'goong':                          '/7l2aN9cT7CZ8QPUKknlRsiTAx0k.jpg',  // TMDB #5279

  // ──────────────────────────────────────────────────
  // TOP RECOMMENDED K-DRAMAS — High-frequency recommendation results
  // ──────────────────────────────────────────────────
  'money-heist-korea':              '/bnfTPTTytrZZ9Aw6hoOQdojiaKo.jpg',  // TMDB #112836
  'life-kdrama':                    '/bnZ84kmXw9OlnAaVJlEYKOMlJmt.jpg',  // TMDB #79991
  'reply-1988':                     '/i3xQJlQRff4k5IMEY55l4iKaKl3.jpg',  // TMDB #64010
  'connection-kdrama':              '/2dsw5j5jNOaoq0nFEKLh0PSPEcT.jpg',  // TMDB #234590
  'shadow-detective':               '/bQlLY4OWGKKFCS1OwkIC9n6hsm7.jpg',  // TMDB #157161
  'all-of-us-are-dead':             '/pTEFqAjLd5YTsMD6NSUxV6Dq7A6.jpg',  // TMDB #99966
  'extraordinary-attorney-woo':     '/zuNOQVI4rEaqwknrfQUVKtlKE2C.jpg',  // TMDB #197067
  'the-red-sleeve':                 '/eXncJTjrw6VrwK3uulFJks7tvBv.jpg',  // TMDB #132925
  'the-moon-that-embraces-the-sun': '/zr6XJUtT61gWhWwjPIraY13SkAE.jpg',  // TMDB #45579
  'jewel-in-the-palace':            '/oiDr9sZPluqKJH8o0vuX5Dh61dh.jpg',  // TMDB #333
  'beyond-evil':                    '/qvR2V6BlXrJ7VTuhEfnXc4rTJTR.jpg',  // TMDB #116612
  'under-the-queens-umbrella':      '/9CIjlNBlyHbrzhTa5PoIjCMxwRP.jpg',  // TMDB #156406
  'alchemy-of-souls':               '/gvOZN1NlAoL8iz9ghpES1zWA3w3.jpg',  // TMDB #203085
  'hometown-cha-cha-cha':           '/en6lrlJ1DhyvkeZEqrk3R6EJz1p.jpg',  // TMDB #128883
  'twenty-five-twenty-one':         '/yCQFnmYhYf7XALMka2EoBRAFmPO.jpg',  // TMDB #129888
  'weightlifting-fairy-kim-bok-joo':'/oARcy8kubYekRqii04obOlvw442.jpg',  // TMDB #68349
  'reply-1997':                     '/onW5VNmzZuDYmkSeFhtSibt0rRq.jpg',  // TMDB #46553
  'reply-1994':                     '/aRroNKSFyetJc5gLN2M7w9FoKuE.jpg',  // TMDB #58761
  'arthdal-chronicles':             '/k5bKj5U2Z7AgkK3Mekji8xDHOuD.jpg',  // TMDB #88463
  'six-flying-dragons':             '/o5hTTwHmI3DZUWCHaSRLAXYfwLm.jpg',  // TMDB #63927
  'a-model-family':                 '/eRtszL5XtARh2u5JMppmtEtxJmT.jpg',  // TMDB #132171
  'suits-korea':                    '/x7ds0EcHjhavjIlrJmTvGp43M6n.jpg',  // TMDB #77548
  'one-dollar-lawyer':              '/AoyepneE9LkLSlVKdJb33mcXfFe.jpg',  // TMDB #201852
  'joseon-attorney':                '/r9s6F4IgFyPyjSh7n7wGMRO6Mp0.jpg',  // TMDB #206715
  'personal-taste':                 '/qNzJSdeNcPZCT3FSMe439hZXaY9.jpg',  // TMDB #32226
  'the-producers':                  '/wtOMeQS4Yoeu1LdGf89XEk5XJ6l.jpg',  // TMDB #62644
  'good-partner':                   '/rItshnQS7IsirJ9oKWap2rrn7XG.jpg',  // TMDB #243761
  'missing-noir-m':                 '/ayxjb1MwPixbuFSTV2D26Ru4V8G.jpg',  // TMDB #62449
  'nine-puzzles':                   '/aPCOCOca8auAP4YTgUzftmVjzMh.jpg',  // TMDB #47089
  'a-shop-for-killers':             '/7yUY1HUyQuybbvkAAhLzQ7x1l9g.jpg',  // TMDB #215072
  'moving':                         '/vf9SNXNAFqzKBGksFwrXhkg9cb7.jpg',  // TMDB #126485
  'mask-girl':                      '/3O8uTUpt76ShtEtNNrOJpcwQROH.jpg',  // TMDB #156888
  'narco-saints':                   '/8ivM3YptVuFgumcZMjCMi28k2EF.jpg',  // TMDB #97970
  'love-in-contract':               '/6tMIhH0T5JYJwypWy2K7zTJiboZ.jpg',  // TMDB #201146
  'the-interest-of-love':           '/l3YaNQAdllzbonbyjf0DB1eNfMW.jpg',  // TMDB #211746

  // ──────────────────────────────────────────────────
  // NEW & TRENDING — 2026-04-14 (homepage carousel posters)
  // ──────────────────────────────────────────────────
  'squid-game-s2':                '/sXZhtWLo3fecavpDuOyJiayjt32.jpg',  // TMDB #93405 (Season 2)
  'trauma-code-heroes-on-call':   '/y8h2RwUZM5chv9tuaKVwSPoo3KE.jpg',  // TMDB #217553
  'when-the-stars-gossip':        '/pdOiUbJ0vEJfh5OGFG8y1e4InQ7.jpg',  // TMDB #154822
  'the-trunk':                    '/d4RSgEVbISGhgPpxfZQg5chpAZ9.jpg',  // TMDB #230777
  'uncle-samsik':                 '/60iLAUnwnejECmOwDcuimUnMAO6.jpg',  // TMDB #209173
  'good-girls':                   '/wpgg6G3UHXepH2Zgpt4W60d6gxR.jpg',  // TMDB #71715
  'the-fosters':                  '/iRCmazqaUNNsgZyR6tNDl88pXp3.jpg',  // TMDB #46880
  'cedar-cove':                   '/jI7srft4ntH3C4iJwaq4vDQMnHG.jpg',  // TMDB #47320
  'my-journey-to-you':            '/mkhWfnBNf6oVEmiLzccZTvafWA6.jpg',  // TMDB #226186
  'story-of-kunning-palace':      '/hS7udvNJxgg9US5MoNq2fvkyR2X.jpg',  // TMDB #207197
  'pursuit-of-jade':              '/l1gTssKenpyuwgjX7Lutn2DvRzV.jpg',  // TMDB #279388

  // ──────────────────────────────────────────────────
  // BATCH Y — 2026-04-05 NEW K-DRAMAS
  // ──────────────────────────────────────────────────
  'hierarchy':                      '/mFasG0BhS6ppXQ7fLm7FR2SSrVS.jpg',  // TMDB #216398
  'deaths-game':                    '/ecM5MY9g2mF6x5SrB2QWOYkcH98.jpg',  // TMDB #218230
  'wonderful-world':                '/3svVZdK4bb6RUklGLZqfr4S05S.jpg',   // TMDB #227190
  'the-story-of-park-s-marriage-contract': '/c3IKOXfdRVYN1BH97rWC7U0BI1L.jpg',  // TMDB #220076
  'chief-detective-1958':           '/3iJPQbGF9MzZQXb5HiUZP43LPz8.jpg',  // TMDB #216292

  // ──────────────────────────────────────────────────
  // BATCH Y — 2026-04-05 NEW WESTERN SHOWS
  // ──────────────────────────────────────────────────
  'adolescence':                    '/20i4nShZZg1g1VFHSB8xpaYM4r7.jpg',  // TMDB #249042
  'say-nothing':                    '/bAF3gTGuFNDdzGUIAnDqi5nbFf3.jpg',  // TMDB #245256
  'a-murder-at-the-end-of-the-world': '/1mWCXJefbNU1E2XPJVM2vejMSZO.jpg',  // TMDB #134095
  'dear-child':                     '/cH9Oh59kTq8cZoa0OyjcBrjus4m.jpg',  // TMDB #229221
  'nobody-wants-this':              '/cUpIceeJJoRqUHSCzh6jRSmlpkA.jpg',  // TMDB #250923
  'rivals':                         '/2JGsqTciDo5YEUDQAD8FN59NL3G.jpg',  // TMDB #208921
  'painkiller':                     '/7zYtVymTxVEhgAOuMl4l2NoFCrO.jpg',  // TMDB #158083

  // ──────────────────────────────────────────────────
  // BATCH Z — 2026-04-06 NEW WESTERN SHOWS
  // ──────────────────────────────────────────────────
  'the-rookie':                     '/jkRBiXp8PZXmhRXEMjdCnmfbYlY.jpg',  // TMDB #76126
  'new-amsterdam':                  '/e6rqFdDXHrQHBL4Bfkh9TMuDUt2.jpg',  // TMDB #80694
  'insecure':                       '/bJU8Gkqm9cSBEsGajhbdpP8gJm4.jpg',  // TMDB #67279
  'girls-hbo':                      '/4GnRXHQ3fGq6rUr9JQ1TxMlZCAD.jpg',  // TMDB #37809
  'master-of-none':                 '/oqSXbH7m3q6fWdBRbHrGlRCCkn1.jpg',  // TMDB #66545
  'catastrophe':                    '/a3yJILTRkDfmNt8F8g7M9CqAFPX.jpg',  // TMDB #68150
  'the-it-crowd':                   '/d70yUHhMLVVMqrPIWd7Vd64oDXY.jpg',  // TMDB #16911
  'interview-with-the-vampire':     '/rl3RpwEAvPHHCCM5oW6H0IZcJVj.jpg',  // TMDB #94997
  'snowfall':                       '/8pWvCEJ0TkaqMLjvvexjBVB7cVe.jpg',  // TMDB #65800
  'the-chi':                        '/a2w0bCGVGsHiNKBs5GfHLhNcKsZ.jpg',  // TMDB #71697
  'detectorists':                   '/fXSwFZwAJMaJFNYXZF4K2bJTcCr.jpg',  // TMDB #63351
  'better-things':                  '/gNEhXnABJnHFOHRHiB96gvLzwPU.jpg',  // TMDB #68045
  'this-is-going-to-hurt':          '/iSp0CRVS3EXiY9TP0xfHkLnJSqU.jpg',  // TMDB #124618
  'its-always-sunny':               '/gNb3MZgXBiCpkuWZqzLe5mFbA1.jpg',   // TMDB #2710
  'station-19':                     '/ujGIFOJUYjZF1BOCoxkUVtR4JmO.jpg',  // TMDB #79744
  'all-american':                   '/sXFyaFNHKAXjHgpaSANXd5j3mIT.jpg',  // TMDB #76357
  'the-cleaning-lady':              '/kDWYP0VFVkiVwJPjE6y5sIrxHGR.jpg',  // TMDB #103773
  'the-outlaws':                    '/4lcVvVq7SqQVNpHjhfAnPRxOiWA.jpg',  // TMDB #103625

  // ──────────────────────────────────────────────────
  // BATCH Z — 2026-04-06 NEW WESTERN MOVIES
  // ──────────────────────────────────────────────────
  'atonement':                      '/a3mCtWz82lLb7JvXMYXflv3Ij7V.jpg',  // TMDB #15894
  'brooklyn-2015':                  '/cpOjpJtb4Wf8XN2a7kWaT7bqR6U.jpg',  // TMDB #281957
  'the-favourite':                  '/5aV6Iy3HKi7NXKByaWThQzIxGMM.jpg',  // TMDB #480530
  'belfast':                        '/7iMBZzVZtG0oBug4TfqDb9ZxAOa.jpg',  // TMDB #805030
  'nomadland':                      '/66NxmPZj6OebWZ4Fj5Z2PbW7tQ4.jpg',  // TMDB #677179
  'the-power-of-the-dog':           '/5PkPHWlNjPNBVLbRhx0FVFd4mRY.jpg',  // TMDB #554600
  'coda-2021':                      '/ryN8UrB5RqKicNlJbCmZ89Llpk1.jpg',  // TMDB #783561
  'the-lost-daughter':              '/kbLgFTHFn3HPVB3SLZO57I0VUnD.jpg',  // TMDB #771710
  'pride-2014':                     '/jrCHLjmn6NN2vhW7bMhF2i23SCYC.jpg',  // TMDB #228782
  'spencer':                        '/ixMoG4r7DzJ0p5NNzFsGTFeTtXu.jpg',  // TMDB #783461
  'the-greatest-showman':           '/oU7Oq2kFAAlGqbU4VoAE36g4hoI.jpg',  // TMDB #392044
  'wonder-woman':                   '/imekS7f1OuHyUP2LAiTEM0zBzUz.jpg',  // TMDB #297762

  // ──────────────────────────────────────────────────
  // BATCH R — 2026-04-09 STREAMING TITLES (Netflix/Amazon/Disney+)
  // ──────────────────────────────────────────────────
  // K-Dramas
  'love-scout':                     '/aP1jTGlKmlUpx21pQPYGYagEKA8.jpg',
  'knock-off':                      '/yui6wbnbjnSsCzdRzvbIOD9ToXr.jpg',
  'jeongnyeon-the-star-is-born':    '/6Iyr6TCx477b8HSgG0fXF4hSuIa.jpg',
  'spice-up-our-love':              '/c8l3HvnkmpLnFrhvyHOgyacvHSn.jpg',
  'motel-california':               '/aFEIz6IuRc1aJTms22YKxx6548w.jpg',
  'tale-of-lady-ok':                '/3cfo9NH2wZ0fm8TbiN7L8NREM0Q.jpg',
  'maestra-strings-of-truth':       '/2PZq6AEyfGeldlo5SvQjFRL0gT7.jpg',
  'dear-hyeri':                     '/x4RhXu2mu3PxiqxdWLaUQU81Qz1.jpg',
  'the-judge-from-hell':            '/9vhLHbUiiP9HiXfJw5OUC7KoaJG.jpg',
  'face-me':                        '/vnvhY5bxjsE0ciSkH5KExXrhD3d.jpg',
  'like-flowers-in-sand':           '/lyeBjKdpv3HhtgCNBZ0Ekk7dZr.jpg',
  'iron-family':                    '/iRwBoGCMEMdmanAsXM11EGJwqtD.jpg',
  'the-kidnapping-day':             '/rtuZelGw0xDo27akrKD36aCiYN5.jpg',
  'black-out':                      '/qITIFCaAD594CTV2MdsOcYvfAoo.jpg',
  'donggung':                       '/16mfo1CiMwKRhUK4PbWvvRt0r2A.jpg',
  'the-impossible-heir':            '/ksIQrUoJERXBnVcxAxkMQDpzx3l.jpg',
  // Western Shows
  'the-night-agent':                '/4c5yUNcaff4W4aPrkXE6zr7papX.jpg',
  'fallout':                        '/c15BtJxCXMrISLVmysdsnZUPQft.jpg',
  'citadel':                        '/36xXlhEpQqVVPuiZhfoQuaY4OlA.jpg',
  'three-body-problem':             '/ykZ7hlShkdRQaL2aiieXdEMmrLb.jpg',
  'man-on-the-inside':              '/c09XdTLpLku2tqHt158NZBgC4hi.jpg',
  // Western Movies
  'the-union':                      '/d9CTnTHip1RbVi2OQbA2LJJQAGI.jpg',

  // ──────────────────────────────────────────────────
  // BATCH 2026-B — 2026-04-15 (35 mixed titles)
  // ──────────────────────────────────────────────────
  // K-Dramas
  'welcome-to-samdalri':            '/9ZFqx1hIJXIBT6C0n5jN4fzTNGw.jpg',  // TMDB #211764
  'sweet-home-s2':                  '/aYN1zMZk9KKhQ2G0lm2HYvJKiOf.jpg',  // TMDB #196369
  'nevertheless-kdrama':            '/kqMT9bsSGbdvbJ7e3IFjK3Ixm5E.jpg',  // TMDB #119619
  'yumi-cells':                     '/m53LiV7ItKCkMgXJLFN2BVqg6vz.jpg',  // TMDB #128833
  'forecasting-love':               '/mJhkNMZEg0N0yRkFdGCFh9ePpWg.jpg',  // TMDB #143079
  'black-knight':                   '/3tmPuBiHerBnAPmDYXHJHUFgrdB.jpg',  // TMDB #214756
  'island-kdrama':                  '/sNt55nXpByMGYdvXiuJWWFdXW5q.jpg',  // TMDB #206249
  'high-school-return-of-a-gangster': '/v9S9TmUYGNfBvFXQJ5ZgA56lP1A.jpg', // TMDB #240752
  'perfect-marriage-revenge':       '/t5bAQ2OcbT9HCQpM1yQZjnpvXnJ.jpg',  // TMDB #210975
  // C-Dramas
  'fox-spirit-matchmaker':          '/dJUXW4bOVoWvWCPRdpJN8qJFwmo.jpg',  // TMDB #272024
  'blossoms-in-adversity':          '/qjFMJjp9LCkmNEgToEKfm0Hm8o1.jpg',  // TMDB #265614
  'burning-flames':                 '/nN97EGLNwHDBHWdDPkBEXjz6kQf.jpg',  // TMDB #263014
  'wonderland-of-love':             '/mXMkH6vSv2VHQNkMTQ6YZJZ2FHw.jpg',  // TMDB #265001
  'story-of-yanxi-palace':          '/vCWMUg52vHuEqRWnG1VNVEZ7EeY.jpg',  // TMDB #80404
  'mysterious-lotus-casebook':      '/2kMNiNOAFa3Kp1SZGF64kXeE7Hw.jpg',  // TMDB #219649
  'the-last-immortal':              '/jHZQtHLnxzA2bP0bXQ3dvO5kLqF.jpg',  // TMDB #229898
  'only-for-love':                  '/7nz6o8YHO0Xam0Qk5P7MbJAuFYR.jpg',  // TMDB #222346
  // Anime
  'dungeon-meshi':                  '/q5eVmJiNqfHj1aeL2Dxl0HaHKXd.jpg',  // TMDB #246356
  'dr-stone':                       '/8XRBePVHdH1eJuHEVMrGzEaxFPw.jpg',  // TMDB #95966
  'komi-cant-communicate':          '/9PV4BqMNfXOCNZO4MWU9eEjDhG8.jpg',  // TMDB #120656
  'lycoris-recoil':                 '/xKf3I1JrsmhHCRGo18MZWBQ2Hcj.jpg',  // TMDB #218706
  'summertime-rendering':           '/cNMvEiWxX97PBWbmPX3ZJCVfmNQ.jpg',  // TMDB #203833
  'odd-taxi':                       '/dMmFCYgEIWH7O0MtVDJr7dNXTQd.jpg',  // TMDB #128618
  'to-your-eternity':               '/4FLCbUxFGDBVU2OEp2lLKU95R5I.jpg',  // TMDB #117157
  // Western Shows
  'the-gentlemen-netflix':          '/mRb7cLwC0g38BEX0TyQvFDSLx9K.jpg',  // TMDB #206559
  'eric-netflix':                   '/jJmrgcCpSHBIYJEaknLBpq2DJNM.jpg',  // TMDB #240411
  'ripley-netflix':                 '/9C7xo5GxjCKSDpSKT0vIY5gU2qJ.jpg',  // TMDB #206562
  'bodies-netflix':                 '/5ux4O7Iz6r3jOiQknXtWxEYyJZG.jpg',  // TMDB #221841
  'three-body-problem-netflix':     '/tm0aN78VsnT2GGjqIJOOSNMV9ts.jpg',  // TMDB #117671
  'all-the-light-we-cannot-see':    '/jnvNAVLduvfBnMpnFb0eD5MIofd.jpg',  // TMDB #203966
  'avatar-the-last-airbender-live': '/cGNqUFTHCIJz4bNjNFtCbcsBYXD.jpg',  // TMDB #239770
  // Western Movies
  'the-banshees-of-inisherin':      '/4yFG6cSPaCaPhyJ1vtGOiMV7qZl.jpg',  // TMDB #674324
  'society-of-the-snow':            '/2e853FDVSIso600RqAMunPxiZjq.jpg',  // TMDB #961268
  'all-quiet-western-front':        '/hU43pmR5HlLiX3p7fAqTgWR7pI.jpg',  // TMDB #765245
  'the-zone-of-interest':           '/hUu9zyZmKuRxCPGWNFalTloqqWA.jpg',  // TMDB #844264

  // ──────────────────────────────────────────────────
  // BATCH D — CATALOG EXPANSION — 2026-04-15 (32 posters)
  // ──────────────────────────────────────────────────
  // K-dramas
  'do-you-like-brahms':             '/5kuSIA9uXZJE8LHePszDEYPSSLP.jpg',
  'mad-for-each-other':             '/sav9luRrij21rBQfhUcbiI0e5XQ.jpg',
  'another-oh-hae-young':           '/8lTp5kfcd61qFWwHhjwTE8a09OQ.jpg',
  'yong-pal':                       '/rkfl4cU1OcalMdvK12oKM7p9och.jpg',
  'live-up-to-your-name':           '/vH30aXwKeirVDxUyOWX9H1WJziu.jpg',
  'come-back-mister':               '/ebmVNHZrFgiIjq8bpB8fUzYfrav.jpg',
  'wok-of-love':                    '/dTh81YtdEzacHhnmLw1Tef7cBRl.jpg',
  'my-father-is-strange':           '/sPazX2eFbL5NPAYBDzAlXaT7Vo7.jpg',
  'school-2017':                    '/3EGaQzyd4GwOy2CD4ORxRPItyH.jpg',
  'when-my-love-blooms':            '/oCJ5DME12zwigNfSdRq9JGUHXWG.jpg',
  'sassy-go-go':                    '/dtU0gIWGJP5lA8jNmOYs6wDy100.jpg',
  'my-girl-kdrama':                 '/gnvEEFRbBx8rKdF2uJjl9LCbpPm.jpg',
  // C-dramas
  'love-is-sweet-cdrama':           '/k52mSqO1sXLhuRjNoSMsj1qJ7kD.jpg',
  'douluo-continent':               '/PFPD5SZxauigsTiYDzarHUQoEj.jpg',
  'the-sword-and-the-brocade':      '/huR0Av6sSwV5Y9tn1owDIovxEoz.jpg',
  'the-kings-avatar':               '/kmSxnAQ0YeQKh3Rm2VwqKZhkTt6.jpg',
  'my-little-happiness':            '/rVYSsIcltMoUiADQOissOjX3Xus.jpg',
  'crush-cdrama':                   '/fXbuAVAn5ITohJG145BDoGJHO2W.jpg',
  'accidentally-in-love':           '/cPpOYJg3ARYmc3PpB8zDWOhJRWo.jpg',
  // J-dramas
  'proposal-daisakusen':            '/iA0a6nR7YQaV9YhIlgkkJ27toQD.jpg',
  'code-blue-jdrama':               '/rBzW9ugeSJ0PvfqD1jkSkNaeKQh.jpg',
  // Anime
  'dandadan':                       '/6qfZAOEUFIrbUH3JvePclx1nXzz.jpg',
  'the-promised-neverland':         '/oBgRCpAbtMpk1v8wfdsIph7lPQE.jpg',
  'bungo-stray-dogs':               '/6AQmGhkYwAqW2OevjXbsh7tZnNO.jpg',
  // Western shows
  'lessons-in-chemistry':           '/tCPIf5f6jUIr8KDMWsfaXwXW0kl.jpg',
  'griselda-netflix':               '/nhEtK1lJKb3kqBtDBDXynGr3hJL.jpg',
  'the-perfect-couple':             '/weyR73iYr1lWg17Q2r4sc7aEr2p.jpg',
  'maniac-netflix':                 '/kCNl4QPstAqChFD0NnLpbDFG8ul.jpg',
  'devs-hulu':                      '/uv63iNWOh69bSJYJQZjiX6n8B3m.jpg',
  // Western movies
  'saltburn':                       '/zGTfMwG112BC66mpaveVxoWPOaB.jpg',
  'anatomy-of-a-fall':              '/kQs6keheMwCxJxrzV83VUwFtHkB.jpg',
  'killers-of-the-flower-moon':     '/dB6Krk806zeqd0YNp2ngQ9zXteH.jpg',

  // ──────────────────────────────────────────────────
  // POPULAR SHOWS — Missing poster coverage fix (2026-04-16)
  // ──────────────────────────────────────────────────
  // K-dramas
  'descendants-of-the-sun':         '/s1zXuYyMMrgpet6BBrMqGlHnvc8.jpg',
  'my-love-from-the-star':          '/o5EYVYCVtDUdajP4rWfv6q0BTmm.jpg',
  'whats-wrong-with-secretary-kim': '/qmq7vKRPoK2VHOTeaUdwwe3l5bB.jpg',
  'strong-woman-do-bong-soon':      '/sPdS6oUdXfBNGKROE5RY5s5laqx.jpg',
  'flower-of-evil':                 '/ozPDfBmsrJDFF9ZhwQNxcGLXvzm.jpg',
  'hotel-del-luna':                 '/8bizZsXoAsOTbhyFKfBogC8mgG2.jpg',
  'itaewon-class':                  '/qg7q0piY0fTt2enlIRHwKKRwNjS.jpg',
  'mr-sunshine':                    '/p7ljjykSsiyWstGVAwIkbdfPzRV.jpg',
  'my-mister':                      '/o5cBRMF6syh4yUBgZ2Ust8LvcxA.jpg',
  'misaeng':                        '/2ZAquQpSHOBWZNjPM0jmqqKv8X8.jpg',
  'tale-of-the-nine-tailed':        '/jXx9vLO9bwKxl81oVQnzEH7960V.jpg',
  'love-in-the-moonlight':          '/qKir5S1ka8UkWVo8aGW9T19IIHC.jpg',
  'queen-of-tears':                 '/7ZXLZ3KYL3IVvsSHBZaHjcNQzNU.jpg',
  'move-to-heaven':                 '/gUvA20jcHABFPjYMIiZl5o9tWi3.jpg',
  'weak-hero-class-1':              '/hS9VVF5ffTVWNoC9B48QNsZFGy9.jpg',
  'alchemy-of-souls':               '/gvOZN1NlAoL8iz9ghpES1zWA3w3.jpg',
  'business-proposal':              '/iLh7L8ZuvgdxFaM9sImyv2iKYLe.jpg',
  'vincenzo':                       '/qbkSS1cTjT4DzIwD44bdhTuYgdT.jpg',
  'all-of-us-are-dead':             '/pTEFqAjLd5YTsMD6NSUxV6Dq7A6.jpg',
  'twenty-five-twenty-one':         '/yCQFnmYhYf7XALMka2EoBRAFmPO.jpg',
  'extraordinary-attorney-woo':     '/zuNOQVI4rEaqwknrfQUVKtlKE2C.jpg',
  'reply-1988':                     '/i3xQJlQRff4k5IMEY55l4iKaKl3.jpg',
  'the-glory':                      '/uUM4LVlPgIrww07OoEKrGWlS1Ej.jpg',
  'doom-at-your-service':           '/tgsWD4dJI5YFY8Kyk6vVjZoIKfO.jpg',
  'hometown-cha-cha-cha':           '/en6lrlJ1DhyvkeZEqrk3R6EJz1p.jpg',
  'penthouse':                      '/wybv1VgIOMhcHdU3ooikn2LuR1o.jpg',
  // Western shows
  'money-heist':                    '/reEMJA1uzscCbkpeRJeTT2bjqUp.jpg',
  'brooklyn-nine-nine':             '/A3SymGlOHefSKbz1bCOz56moupS.jpg',
  'downton-abbey':                  '/7HgDYRYjym4BwbhKaqTQq771SKb.jpg',
  'the-witcher':                    '/AoGsDM02UVt0npBA8OvpDcZbaMi.jpg',
  'dark':                           '/apbrbWs8M9lyOpJYU5WXrpFbk1Z.jpg',
  'stranger-things':                '/uOOtwVbSr4QDjAGIifLDwpb2Pdl.jpg',
  'the-office':                     '/7DJKHzAi83BmQrWLrYYOqcoKfhR.jpg',
  'squid-game':                     '/1QdXdRYfktUSONkl1oD5gc6Be0s.jpg',
  'dead-ringers-2023':              '/3GZB7pnyAw6QV053TwxiqvRyOw3.jpg',

  // ──────────────────────────────────────────────────
  // WESTERN SHOWS — Direction toggle coverage (2026-04-18)
  // Popular Western shows that appear as recommendations via ?dir=western
  // ──────────────────────────────────────────────────
  'ted-lasso':                      '/5fhZdwP1DVJ0FyVH6vrFdHwpXIn.jpg',  // TMDB #97546
  'better-call-saul':               '/zjg4jpK1Wp2kiRvtt5ND0kznako.jpg',  // TMDB #60059
  'peaky-blinders':                 '/vUUqzWa2LnHIVqkaKVlVGkVcZIW.jpg',  // TMDB #60574
  'true-detective':                 '/zYqVTiHK5ZajYcNzAW7qWte5NWS.jpg',  // TMDB #46648
  'fargo':                          '/a3VW6khsyUVKrG0GBCWFG3NzWPX.jpg',  // TMDB #60622
  'the-sopranos':                   '/rTc7ZXdroqjkKivFPvCPX0Ru7uw.jpg',  // TMDB #1398
  'mad-men':                        '/7v8iCNzKFpdlrCMcqCoJyn74Nsa.jpg',  // TMDB #1104
  'mr-robot':                       '/kv1nRqgebSsREnd7vdC2pSGjpLo.jpg',  // TMDB #62560
  'the-mandalorian':                '/sWgBv7LV2PRoQgkxwlibdGXKz1S.jpg',  // TMDB #82856
  'homeland':                       '/6GAvS2e6VIRsms9FpVt33PsCoEW.jpg',  // TMDB #1407
  'gilmore-girls':                  '/gwtzCwU2wdLLf8oejQu2TINiWfQ.jpg',  // TMDB #4586
  'the-good-place':                 '/qIhsuhoIYR5yTnDta0IL4senbeN.jpg',  // TMDB #66573
  'westworld':                      '/8MfgyFHf7XEboZJPZXCIDqqiz6e.jpg',  // TMDB #63247
  'the-leftovers':                  '/NKJdryIFHr245Umq6gXsf7oULW.jpg',  // TMDB #54344
  'person-of-interest':             '/f8aIvYk5h7Z8EP3dinCmVgQFYow.jpg',  // TMDB #1411
  'daredevil':                      '/QWbPaDxiB6LW2LjASknzYBvjMj.jpg',  // TMDB #61889
  'jessica-jones':                  '/paf9wL3mOW9LT3ZjRxXqJcjeMEv.jpg',  // TMDB #38472
  'the-boys':                       '/in1R2dDc421JxsoRWaIIAqVI2KE.jpg',  // TMDB #76479
  'yellowjackets':                  '/xRnGrn7Z7SC0KIBodocoU1QgDZF.jpg',  // TMDB #117488
  'the-diplomat':                   '/cOKXV0FalCYixNmZYCfHXgyQ0VX.jpg',  // TMDB #203857
  'boston-legal':                    '/b0bXUCfpcsgQ6EVVmucU2G76ixT.jpg',  // TMDB #4598
  'white-collar':                   '/417XNiGvdzCsG9kDnnQJYaBsIrx.jpg',  // TMDB #21510
  'the-good-fight':                 '/8qoOHOfbUbrCcHZnDVxGcwOWinV.jpg',  // TMDB #69158
  'hacks':                          '/ca5XiEFgyGsI38QT3wEKa1QVGX.jpg',  // TMDB #124101
  'ally-mcbeal':                    '/weS8htxS2j0EQ6jorK3WOR1dZpH.jpg',  // TMDB #1480
  'the-practice':                   '/7OKZSUIWhjFP0F2s478zTrAYwDB.jpg',  // TMDB #3050
  'damages':                        '/bowEbW8Q3Oc02BvHBKTL5gWv9Nx.jpg',  // TMDB #4920
  'drop-dead-diva':                 '/4NFGO8GPDFJlhbGmKFJ8k9qbBTc.jpg',  // TMDB #32726
  'the-good-wife-2':                '/1qBFTlJKgAMJSgRoZeB4gZxTcrV.jpg',  // TMDB #1435 alt poster
  'suits-usa':                      '/fO0nFvGcbTHpwZGLkr98xuZ5hFs.jpg',  // TMDB #37680
  'how-i-met-your-mother':          '/b34jPzmB0wZy7EjUZoleXOl2RRI.jpg',  // TMDB #1420
  'the-big-bang-theory':            '/ooBGRQBdbGzBxAVfExiO8r7kloA.jpg',  // TMDB #1418
  'two-and-a-half-men':             '/7c5ABKmJqGcyF9K08A5BOG0bFOR.jpg',  // TMDB #1216
  'grey-anatomy':                   '/hjJkrLXhWvGHpLeLBDFznpBTY1S.jpg',  // TMDB #1416 alias
  'er-tv-show':                     '/vRhGHf5mFnBPXPBHVVDqTbloCQQ.jpg',  // TMDB #4556
  'csi':                            '/6F7M8LPipT5rdVVnnFw0OOBR06K.jpg',  // TMDB #1431
  'law-and-order-svu':              '/5GQtivNQxdIGZbmobOqYwGHKBZE.jpg',  // TMDB #2734
  'ncis':                           '/2exOHePjOTquUsbThPGhuPKCrpF.jpg',  // TMDB #4614
  'criminal-minds-2':               '/gigxjNnACiXAfrwoMox5WJFgc0I.jpg',  // TMDB #4057 alias

  // ──────────────────────────────────────────────────
  // K-DRAMA ADDITIONS — Batch K2 (2026-04-20)
  // ──────────────────────────────────────────────────
  'little-women-2019':                '/yn5ihODtZ7ofn8pDYfxCmxh8AXI.jpg',  // TMDB #331482
  'thirty-nine':                      '/4Lv0P8VeDFWg8GEhxVFi9OwA59w.jpg',  // TMDB #124075
  'my-name-kdrama':                   '/e7BdpyQHGZCnHhYZnGiOH9o1ND3.jpg',  // TMDB #134084
  'from-now-on-showtime':             '/wYN8V8LLaqzC2wjUyEFHoS1Hmqm.jpg',  // TMDB #147906
  'tomorrow-kdrama':                  '/v6bvkJqhWRxidHpxKxHwPSFNHdY.jpg',  // TMDB #130392
  'grid-kdrama':                      '/xMnxH9JTMPdlWIVfyy04rk1M3l8.jpg',  // TMDB #133774
  'eve-kdrama':                       '/6xvIRR50lDzFRWLFCAwSzEkoEu3.jpg',  // TMDB #138251 (alias)
  'link-eat-love-kill':               '/8Cx9RmRjWX8EVxGUDMEPY22UOVF.jpg',  // TMDB #135839
  'money-flower':                     '/9yDh5oCmGMFJk8uyUEdMuMdWxI3.jpg',  // TMDB #68974
  'voices-kdrama-2024':               '/yUBVzJJWVZlkAeN3ZgQH0l6Mjb7.jpg',  // TMDB #239015
};