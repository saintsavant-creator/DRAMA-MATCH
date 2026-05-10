/**
 * Western Expansion Batch 5 — 2026
 * 12 Western shows and movies filling real search gaps.
 * Mix of HBO supernatural classics (True Blood), acclaimed mystery/sci-fi (The OA, 1899),
 * Neil Gaiman adaptation (American Gods), Netflix family series (ASOUE),
 * popular continuations (Severance S2, Yellowjackets S2, Boys S4, Bad Sisters S2),
 * and discovery-friendly new entries (Resident Alien, Good Lord Bird, Room).
 *
 * Routing for merge script:
 * Shows (11): true-blood, the-oa, 1899-netflix, american-gods,
 *             a-series-of-unfortunate-events, the-good-lord-bird, resident-alien,
 *             severance-s2, yellowjackets-s2, the-boys-s4, bad-sisters-s2
 * Movies (1): room-2015
 *
 * Dedup verified against all 1,589 existing catalog IDs before merge.
 */
module.exports = [
  {
    "id": "true-blood",
    "title": "True Blood",
    "year": 2008,
    "episodes": 80,
    "synopsis": "In a Louisiana bayou town where vampires have recently come out publicly, thanks to the invention of synthetic blood, telepathic waitress Sookie Stackhouse falls for 173-year-old vampire Bill Compton. The show uses its Southern Gothic setting and supernatural out-of-the-coffin premise as an extended allegory for prejudice, desire, and the politics of who gets to be considered human — with escalating wild energy that grows stranger with each season. HBO at full swagger, first two seasons genuinely great.",
    "genres": ["supernatural", "romance", "drama", "thriller"],
    "themes": ["prejudice", "identity", "forbidden-love", "power", "community", "vampire-mythology"],
    "tropes": ["vampire-romance", "forbidden-love", "supernatural-world-building", "telepathic-protagonist", "enemies-to-lovers"],
    "tone": ["atmospheric", "sexy", "dramatic", "darkly-comedic"],
    "setting": ["modern", "southern-usa", "small-town", "supernatural"],
    "characterTypes": ["telepathic-female-lead", "centuries-old-vampire", "shapeshifter-boss", "ensemble-small-town"],
    "streaming": {"max": true, "amazon_prime": true},
    "network": "HBO",
    "actors": [
      {"name": "Anna Paquin", "role": "Sookie Stackhouse", "isLead": true},
      {"name": "Stephen Moyer", "role": "Bill Compton", "isLead": true},
      {"name": "Alexander Skarsgård", "role": "Eric Northman", "isLead": false}
    ],
    "matchReasoningHints": [
      "Blood fans of vampire romance dramas where the vampire lead is specifically trying to be good against his nature — Bill Compton's struggle with his blood cravings versus his feelings for Sookie is the same structural tension, American and louder about it",
      "Vampire Diaries fans of supernatural romance dramas with a complex vampire ensemble, competing factions, and a female lead whose ordinary human life is no longer possible once she knows the truth — True Blood is the adult HBO version of that premise",
      "Outlander fans of supernatural romance series set in specific regional cultures where the landscape itself is a character — the Louisiana bayou atmosphere in True Blood is as immersive as the Scottish Highlands, with very different moral weather",
      "Interview with the Vampire fans of atmospheric vampire dramas where the mythology is taken seriously and the show is interested in what immortality does to people who have had to watch everything they love die repeatedly",
      "Killing Eve fans of prestige television that refuses to be tidily categorized — True Blood starts as a romance, becomes a conspiracy thriller, keeps adding new supernatural elements, and the show's pleasure is its own escalation"
    ]
  },
  {
    "id": "the-oa",
    "title": "The OA",
    "year": 2016,
    "episodes": 16,
    "synopsis": "Prairie Johnson disappeared seven years ago and returns suddenly — able to see again after years of blindness, with mysterious scars on her back and a name she now calls herself: The OA. She gathers five strangers in a suburban basement and tells them what happened to her: a story involving a near-death experience, captivity with a scientist obsessed with what happens after death, and a set of movements she calls The Movements, which she believes have specific power. The show offers no clear signal about whether to believe her. It commits to both interpretations completely and trusts its audience to hold the ambiguity.",
    "genres": ["mystery", "supernatural", "drama", "science-fiction"],
    "themes": ["trauma", "belief", "captivity", "near-death", "identity", "connection", "dimensions"],
    "tropes": ["unreliable-narrator", "mystery-box", "supernatural-ambiguity", "found-family", "captivity-survival"],
    "tone": ["mysterious", "atmospheric", "emotional", "unsettling"],
    "setting": ["modern", "suburban", "captive-space", "otherworldly"],
    "characterTypes": ["returned-traumatized-lead", "grieving-captor-scientist", "unlikely-ensemble-helpers", "disbelieving-authority"],
    "streaming": {"netflix": true},
    "network": "Netflix",
    "actors": [
      {"name": "Brit Marling", "role": "Prairie / The OA", "isLead": true},
      {"name": "Jason Isaacs", "role": "Hap", "isLead": false},
      {"name": "Phyllis Smith", "role": "Betty Broderick-Allen", "isLead": false}
    ],
    "matchReasoningHints": [
      "Signal fans of mystery dramas that use a supernatural or para-supernatural premise to examine grief, connection, and the specific pain of not being believed — The OA's ensemble in the basement mirrors the emotional stakes of Signal's people across time",
      "Dark fans of mystery dramas where the central mystery keeps expanding in ways that recontextualize everything that has already happened — both shows are built for audiences who want to hold unresolved questions comfortably",
      "Haunting of Hill House fans of Netflix supernatural dramas where the horror is psychological and the supernatural is genuinely ambiguous — The OA is doing something structurally similar in terms of how it handles belief and grief",
      "Station Eleven fans of ensemble dramas built around a central performance that holds the show together through sheer conviction — Brit Marling's commitment to the role is what makes the show's ambiguity function",
      "My Mister fans of dramas that build their emotional case through accumulated small moments rather than plot — The OA earns its basement ensemble through the same patient accumulation of specific human detail"
    ]
  },
  {
    "id": "1899-netflix",
    "title": "1899",
    "year": 2022,
    "episodes": 8,
    "synopsis": "A steamship crossing the Atlantic in 1899 is carrying European emigrants bound for a new life in America when it encounters the Prometheus — a sister vessel that went missing months earlier. What's on board the Prometheus defies explanation. The show is multilingual, with each character speaking their native language, and uses its 1899 setting to examine how much of who we are is constructed from the stories we tell about ourselves. From the creators of Dark, built as a conspiracy about perception, reality, and what we're willing to believe about the world we think we're in.",
    "genres": ["mystery", "thriller", "science-fiction", "historical"],
    "themes": ["identity", "memory", "reality", "immigration", "loop", "perception"],
    "tropes": ["mystery-box", "reality-questioning", "supernatural-vessel", "multilingual-ensemble", "time-loop-adjacent"],
    "tone": ["atmospheric", "mysterious", "unsettling", "visually-stunning"],
    "setting": ["historical", "1899", "transatlantic-voyage", "supernatural"],
    "characterTypes": ["investigative-female-lead", "mysterious-survivor", "international-ensemble", "hidden-antagonist"],
    "streaming": {"netflix": true},
    "network": "Netflix",
    "actors": [
      {"name": "Emily Beecham", "role": "Maura", "isLead": true},
      {"name": "Andreas Pietschmann", "role": "Daniel", "isLead": true},
      {"name": "Aneurin Barnard", "role": "Ciaran", "isLead": false}
    ],
    "matchReasoningHints": [
      "Dark fans of German mystery television built around a puzzle that keeps recontextualizing itself — 1899 is the same creative team, with the same love for using the fantastic to examine questions about memory and identity that are genuinely philosophical",
      "Signal fans of mystery dramas where the central mystery is about time, perception, and what is actually real — 1899's treatment of its mystery has the same quality of each revelation making the previous one feel different",
      "Kingdom fans of period dramas that use a historical setting to deliver genuine supernatural dread — the 1899 ship setting is as claustrophobic as the Joseon fortress, with different but equal menace",
      "Lost fans of ensemble mystery shows where each character has a buried backstory that the mystery is revealing — 1899's multilingual structure means each character comes from a different cultural context, which makes the ensemble genuinely diverse in how they process the same events",
      "Station Eleven fans of atmosphere-first prestige dramas that are as interested in what their setting means as in what happens — the immigrant ship metaphor running underneath 1899's plot gives it an emotional dimension separate from the puzzle"
    ]
  },
  {
    "id": "american-gods",
    "title": "American Gods",
    "year": 2017,
    "episodes": 26,
    "synopsis": "Shadow Moon is released from prison to find his wife dead, and accepts a job with the charming con man Mr. Wednesday — who turns out to be Odin, gathering the old gods brought to America by immigrant believers for a war against the new gods of technology, media, and globalization. Bryan Fuller's adaptation of Neil Gaiman's novel is visually extraordinary — each episode opens with a 'Coming to America' vignette about how a specific god arrived — and Ian McShane's Mr. Wednesday is one of television's great performances.",
    "genres": ["fantasy", "drama", "supernatural", "mythology"],
    "themes": ["belief", "immigration", "american-mythology", "faith", "modernity-vs-tradition", "identity"],
    "tropes": ["reluctant-hero", "road-trip", "mythology-made-real", "war-of-gods", "unreliable-mentor"],
    "tone": ["visually-spectacular", "mythological", "dark", "literary"],
    "setting": ["modern", "rural-usa", "road-trip", "mythological"],
    "characterTypes": ["grieving-everyman-lead", "charismatic-god-mentor", "personified-new-gods", "mythological-ensemble"],
    "streaming": {"amazon_prime": true, "starz": true},
    "network": "Starz",
    "actors": [
      {"name": "Ricky Whittle", "role": "Shadow Moon", "isLead": true},
      {"name": "Ian McShane", "role": "Mr. Wednesday / Odin", "isLead": true},
      {"name": "Emily Browning", "role": "Laura Moon", "isLead": false}
    ],
    "matchReasoningHints": [
      "Goblin fans of supernatural dramas where old divine beings have been living among humans for centuries and the modern world is inadequate to their actual natures — Mr. Wednesday's contempt for the new gods is the same frustrated majesty that makes Goblin's lead compelling",
      "Good Omens fans of Neil Gaiman adaptations that take their mythology seriously and commit to the visual imagination of the source material — American Gods has less whimsy than Good Omens but more visual ambition, and both shows are built around a specific kind of divine charisma",
      "Ragnarok fans of Nordic mythology-inflected drama where the gods are operating on a human scale and the battles are as much about meaning as about power — American Gods is the American version of that mythology's implications",
      "The Witcher fans of shows built around a weary, morally complex lead being pulled into a conflict older than anything in his experience — Shadow Moon's gradual education into what the world actually is mirrors the Witcher's relationship to the Continent's deeper political reality",
      "Narcos fans of prestige dramas that give their secondary and tertiary characters as much dimension as the leads — American Gods' gods-of-the-week structure in season one is the equivalent of a show where every new location has a character worth caring about"
    ]
  },
  {
    "id": "a-series-of-unfortunate-events",
    "title": "A Series of Unfortunate Events",
    "year": 2017,
    "episodes": 25,
    "synopsis": "The Baudelaire orphans — inventor Violet, bookworm Klaus, and toddler Sunny — survive their parents' death in a fire only to be pursued relentlessly by Count Olaf, who wants their fortune and will destroy any guardian placed in his way. The show's consistent tone is luxuriant despair: it keeps telling you it's going to be miserable, then making the miserable beautiful and funny simultaneously. Patrick Warburton narrates as Lemony Snicket with impeccable timing. Neil Patrick Harris plays Count Olaf with the specific theatrical menace the character requires.",
    "genres": ["comedy", "adventure", "mystery", "dark-comedy"],
    "themes": ["injustice", "resilience", "family", "dark-humor", "incompetent-adults", "children-competence"],
    "tropes": ["orphan-siblings", "relentless-villain", "incompetent-authority", "found-family", "dark-comedy"],
    "tone": ["darkly-comedic", "whimsical", "absurdist", "theatrical"],
    "setting": ["alternate-reality", "gothic", "various-locations", "victorian-adjacent"],
    "characterTypes": ["inventor-oldest-sibling", "bookworm-middle-sibling", "toddler-youngest", "theatrical-villain"],
    "streaming": {"netflix": true},
    "network": "Netflix",
    "actors": [
      {"name": "Neil Patrick Harris", "role": "Count Olaf", "isLead": false},
      {"name": "Malina Weissman", "role": "Violet Baudelaire", "isLead": true},
      {"name": "Louis Hynes", "role": "Klaus Baudelaire", "isLead": true}
    ],
    "matchReasoningHints": [
      "Wednesday fans of Gothic, darkly comedic shows where the aesthetic is deliberately theatrical and the comedy comes from the gap between how seriously the adult world takes itself and how correctly the child protagonist reads it",
      "Locke and Key fans of Netflix genre shows with child leads navigating a Gothic world of arbitrary rules and genuine danger — ASOUE and Locke and Key share the same quality of putting young protagonists in situations that are simultaneously fantastical and emotionally real",
      "The Good Place fans of comedy-drama television that wants to do something specific with its structure — ASOUE's seasonal-encyclopedia format, its metatextual narrator, and its refusal to comfort the audience are all deliberate formal choices",
      "Pushing Daisies fans of visually maximalist television that uses its aesthetic excess as emotional argument — ASOUE's production design is doing the same thing Pushing Daisies did: using beauty to make the darkness bearable",
      "Fleabag fans of dark comedies that announce their misery upfront and then make you love the characters anyway — the Baudelaires' specific competence and the show's refusal to protect them from genuine loss earns its occasional genuine heartbreak"
    ]
  },
  {
    "id": "the-good-lord-bird",
    "title": "The Good Lord Bird",
    "year": 2020,
    "episodes": 7,
    "synopsis": "A young enslaved boy nicknamed Onion is accidentally emancipated by abolitionist John Brown — a man of total, consuming, utterly sincere conviction who is also quite comfortable risking other people's lives in service of a cause he cannot imagine being wrong about. Ethan Hawke plays Brown as a force of nature that is simultaneously inspiring and terrifying, and Onion watches from inside the whirlwind as John Brown drives himself toward Harper's Ferry. A biting, surprising, formally inventive miniseries about what idealism costs the people who aren't driving.",
    "genres": ["historical", "drama", "comedy", "adventure"],
    "themes": ["slavery", "idealism", "violence", "history", "identity", "moral-complexity"],
    "tropes": ["reluctant-companion", "charismatic-idealist", "historical-events", "coming-of-age", "unreliable-narrator"],
    "tone": ["biting", "darkly-comedic", "tense", "surprising"],
    "setting": ["historical", "antebellum-america", "road-trip", "1850s"],
    "characterTypes": ["young-observer-narrator", "consumed-idealist", "historical-figures", "freed-and-enslaved-ensemble"],
    "streaming": {"paramount": true, "amazon_prime": true},
    "network": "Showtime",
    "actors": [
      {"name": "Ethan Hawke", "role": "John Brown", "isLead": true},
      {"name": "Joshua Caleb Johnson", "role": "Onion", "isLead": true},
      {"name": "Wyatt Russell", "role": "Owen Brown", "isLead": false}
    ],
    "matchReasoningHints": [
      "Mindhunter fans of historically-grounded American dramas where a charismatic and terrifying person is examined through the perspective of someone in their orbit — Onion's position watching John Brown is the same structural relationship as the agents watching the serial killers they're profiling",
      "Fleabag fans of television that uses a specific narrative voice to create comedy in genuinely dark material — Onion's narration has the same tonal control, finding the absurdity in catastrophe without dismissing the catastrophe",
      "Narcos fans of limited series built around a historical figure whose conviction and methods are both genuinely impressive and genuinely alarming — John Brown gives Hawke the same kind of role that Pedro Pascal and Wagner Moura get in Narcos",
      "Deadwood fans of American historical dramas that refuse to resolve their period's moral complexity — The Good Lord Bird has the same quality of presenting history in a way that implicates the present without making that implication obvious",
      "Band of Brothers fans of prestige American limited series that use specific historical events as the container for an examination of ideology and what people do in its service — Harper's Ferry is as purposefully staged as any battle in Band of Brothers"
    ]
  },
  {
    "id": "resident-alien",
    "title": "Resident Alien",
    "year": 2021,
    "episodes": 40,
    "synopsis": "An alien named Harry Vanderspeigle crash-lands in a small Colorado mountain town and assumes the identity of the local doctor — who he has quietly murdered. His mission: locate a device that will destroy all human life on Earth. The complication is that a nine-year-old boy can see through his disguise, the town's residents keep treating him like a person, and Harry finds himself developing opinions about things. A warm-hearted, genuinely funny comedy about the case for humanity examined by someone who keeps choosing not to make the other choice.",
    "genres": ["comedy", "science-fiction", "mystery", "drama"],
    "themes": ["identity", "belonging", "humanity", "small-town", "fish-out-of-water", "found-family"],
    "tropes": ["fish-out-of-water", "alien-disguise", "small-town-ensemble", "hidden-mission", "found-family"],
    "tone": ["comedic", "warm", "heartfelt", "absurdist"],
    "setting": ["modern", "small-town", "colorado", "alien-premise"],
    "characterTypes": ["alien-disguised-as-doctor", "perceptive-child", "small-town-ensemble", "investigator"],
    "streaming": {"peacock": true, "amazon_prime": true},
    "network": "Syfy",
    "actors": [
      {"name": "Alan Tudyk", "role": "Harry Vanderspeigle", "isLead": true},
      {"name": "Sara Tomko", "role": "Asta Twelvetrees", "isLead": false},
      {"name": "Corey Reynolds", "role": "Sheriff Mike Thompson", "isLead": false}
    ],
    "matchReasoningHints": [
      "Schitt's Creek fans of comedy series about a person with no social skills and considerable contempt for ordinary life being gradually converted to caring about a specific community — the arc from detachment to attachment is Resident Alien's spine, same as Schitt's Creek",
      "Ghosts (UK) fans of gentle supernatural comedies built around an ensemble where the comedy comes from one character's outsider perspective on ordinary human behavior — Harry's literal-alien reading of social situations generates the same flavor of observational comedy",
      "Brooklyn Nine-Nine fans of warm ensemble comedies that are consistently funny but actually care about their characters — Resident Alien has the same quality of being pleasant to spend time in without being emotionally evasive",
      "The Good Place fans of comedy-dramas that use a fantastical premise to ask genuine philosophical questions — what makes humans worth preserving is Resident Alien's running question, and it keeps generating good answers through the small details",
      "Firefly fans of Alan Tudyk who want to see him carrying a show at full power — his physical comedy and deadpan delivery as Harry are doing something technically extraordinary, playing someone who is consciously performing humanness"
    ]
  },
  {
    "id": "severance-s2",
    "title": "Severance Season 2",
    "year": 2025,
    "episodes": 10,
    "synopsis": "After Mark S. activates the reintegration procedure at the season one finale — giving his innie glimpses of the outside world he is never supposed to see — Lumon Industries moves to suppress and contain the breach. The severed employees discover more about the true nature of their procedure, the people who invented it, and what Lumon is actually using them for. The second season deepens every mystery the first season established while adding new ones, and delivers on its predecessor's moral stakes: what does it mean to consent to having a self you cannot access?",
    "genres": ["thriller", "science-fiction", "mystery", "drama"],
    "themes": ["identity", "consent", "corporate-control", "memory", "self", "resistance"],
    "tropes": ["corporate-dystopia", "split-consciousness", "workplace-mystery", "resistance-from-inside", "slow-revelation"],
    "tone": ["tense", "darkly-comedic", "unsettling", "visually-precise"],
    "setting": ["modern", "corporate-office", "dystopian-workplace"],
    "characterTypes": ["severed-employees", "lumon-management", "outside-world-innies", "whistleblower"],
    "streaming": {"apple_tv": true},
    "network": "Apple TV+",
    "actors": [
      {"name": "Adam Scott", "role": "Mark Scout", "isLead": true},
      {"name": "Britt Lower", "role": "Helly R.", "isLead": true},
      {"name": "Tramell Tillman", "role": "Seth Milchick", "isLead": false}
    ],
    "matchReasoningHints": [
      "Severance fans who finished season one and need season two immediately — the second season is not a reset but a deepening; everything that felt significant in season one turns out to be more significant",
      "Dark fans of mystery series that reward patient, attentive watching — Severance S2 has the same quality of planting details that only become recognizable in retrospect, and the season finale pays out on setups from the first season's pilot",
      "The Good Place fans of season-to-season ensemble dramas where each new season reframes the premise without discarding what the previous season established — the severed world keeps expanding without contradicting itself",
      "Squid Game fans of prestige genre dramas where the satirical target is a specific system — Lumon's corporate world is as legible a satire of workplace culture as Squid Game is of capitalism, and the second season makes that satire's stakes explicit",
      "Black Mirror fans of speculative drama that uses its single premise to examine a real-world phenomenon from an unfamiliar angle — the severance procedure is a metaphor for the way professional life asks people to partition themselves, and season two lives in the consequences of that"
    ]
  },
  {
    "id": "yellowjackets-s2",
    "title": "Yellowjackets Season 2",
    "year": 2023,
    "episodes": 9,
    "synopsis": "The second season splits time between the stranded team's brutal second winter in the wilderness (1996) and the adult survivors in 2021, where Lottie's commune surfaces, new investigators start asking questions, and the thing that happened in the wilderness starts actively returning in the present. The show doubles down on its central ambiguity — is what Lottie started in the wilderness a supernatural phenomenon or collective trauma institutionalized? — while deepening the adult characters' psychology and introducing the consequences of a secret the survivors have kept for twenty-five years.",
    "genres": ["thriller", "mystery", "drama", "supernatural"],
    "themes": ["survival", "trauma", "feminine-violence", "supernatural-ambiguity", "secrets", "collective-psychology"],
    "tropes": ["dual-timeline", "survival-horror", "unreliable-memory", "dark-sisterhood", "supernatural-ambiguity"],
    "tone": ["tense", "dark", "psychologically-complex", "unpredictable"],
    "setting": ["modern", "1990s-wilderness", "wilderness-survival", "suburban"],
    "characterTypes": ["surviving-ensemble-women", "wilderness-cult-leader", "investigator", "returning-ghost"],
    "streaming": {"paramount": true, "amazon_prime": true},
    "network": "Showtime / Paramount+",
    "actors": [
      {"name": "Melanie Lynskey", "role": "Shauna (adult)", "isLead": true},
      {"name": "Juliette Lewis", "role": "Natalie (adult)", "isLead": true},
      {"name": "Tawny Cypress", "role": "Taissa (adult)", "isLead": true}
    ],
    "matchReasoningHints": [
      "Yellowjackets fans completing the series — the second season is the point at which the show's bet on its own ambiguity either pays off or doesn't, and the answer is that it mostly pays off while setting up a third season that earned its renewal",
      "The Haunting of Hill House fans of horror-adjacent dramas where the supernatural is inseparable from the psychological — the wilderness events in Yellowjackets S2 maintain the same quality of not resolving whether the horror is external or internal",
      "Big Little Lies fans of ensemble dramas about women sharing a secret that has bound them together across years in ways that are simultaneously protective and corrosive — the adult survivor dynamic in Yellowjackets has the same quality of intimacy-through-complicity",
      "Lost fans of mystery shows that use a survival narrative as the mechanism for character revelation — the wilderness timeline functions the same way as the island, as the place where people become their truest selves under maximum pressure",
      "Sharp Objects fans of Southern Gothic adjacent thrillers where the female ensemble is the source of both the menace and the sympathy — Yellowjackets S2's willingness to make every main character morally complex is the same quality that makes Sharp Objects work"
    ]
  },
  {
    "id": "the-boys-s4",
    "title": "The Boys Season 4",
    "year": 2024,
    "episodes": 8,
    "synopsis": "With Homelander's approval ratings at an all-time high and Vought's political arm openly meddling in the upcoming election, Billy Butcher is operating on a terminal diagnosis with months left, the Boys are fractured, and the Young Supes are making increasingly unreliable choices. The fourth season leans into its political satire harder than any previous season while delivering some of the series' most genuinely disturbing set pieces. The show's argument about what fascism requires from ordinary people is no longer in the subtext.",
    "genres": ["superhero", "action", "thriller", "satire", "drama"],
    "themes": ["fascism", "celebrity-culture", "corruption", "political-manipulation", "mortality", "resistance"],
    "tropes": ["anti-hero-ensemble", "corporate-villain", "political-satire", "superhero-deconstruction", "found-family-fracturing"],
    "tone": ["darkly-satirical", "violent", "intense", "blackly-comedic"],
    "setting": ["modern", "corporate-america", "political", "superhero-world"],
    "characterTypes": ["terminally-ill-leader", "fascist-superhero", "corporate-manipulator", "radicalized-young-supers"],
    "streaming": {"amazon_prime": true},
    "network": "Amazon Prime Video",
    "actors": [
      {"name": "Karl Urban", "role": "Billy Butcher", "isLead": true},
      {"name": "Antony Starr", "role": "Homelander", "isLead": true},
      {"name": "Jack Quaid", "role": "Hughie Campbell", "isLead": true}
    ],
    "matchReasoningHints": [
      "The Boys fans catching up — the fourth season is the show operating at maximum satirical intensity while running the Butcher mortality plot in the foreground, and the finale sets up the final season with unusual emotional weight",
      "Succession fans of prestige dramas about concentrated power and the people who orbit it — The Boys S4's treatment of Vought's political maneuvering has the same quality of making corporate power dynamics both horrifying and deeply human",
      "Squid Game S2 fans of genre shows that get explicitly more political in their second installment while preserving the thing that made the first season work — The Boys has been more consistently explicit about its satire, but S4 removes the last of its plausible deniability",
      "Dark Knight fans of superhero narratives that take their villain seriously enough to make the hero's problem genuinely hard — Homelander in S4 is no longer someone you can dismiss, and Antony Starr's performance is one of the great villain turns in prestige television",
      "Peaky Blinders fans of ensemble crime-adjacent dramas built around a charismatic leader making increasingly desperate decisions while maintaining the fiction of control — Butcher's mortality arc in S4 has the same quality of watching competence fail against circumstance"
    ]
  },
  {
    "id": "bad-sisters-s2",
    "title": "Bad Sisters Season 2",
    "year": 2024,
    "episodes": 10,
    "synopsis": "The Garvey sisters got away with murder — but a new investigation from a completely different direction threatens to unravel what they built in the aftermath. The second season invents a new threat worthy of the first without requiring the same inciting dynamic, deepens each sister's individual arc, and preserves the ensemble chemistry that made the first season exceptional. Sharon Horgan and the writing team prove that the premise wasn't a one-season trick.",
    "genres": ["dark-comedy", "drama", "thriller", "mystery"],
    "themes": ["sisterhood", "secrets", "consequences", "grief", "female-solidarity", "justice"],
    "tropes": ["dark-ensemble-female-comedy", "aftermath-consequences", "female-solidarity", "mystery-investigation", "found-family"],
    "tone": ["darkly-comedic", "emotionally-resonant", "tense", "warm"],
    "setting": ["modern", "ireland", "suburban"],
    "characterTypes": ["four-sister-ensemble", "new-antagonist", "investigator", "family-secrets"],
    "streaming": {"apple_tv": true, "amazon_prime": true},
    "network": "Apple TV+",
    "actors": [
      {"name": "Sharon Horgan", "role": "Eva Garvey", "isLead": true},
      {"name": "Anne-Marie Duff", "role": "Grace Garvey", "isLead": true},
      {"name": "Eve Hewson", "role": "Bibi Garvey", "isLead": true}
    ],
    "matchReasoningHints": [
      "Bad Sisters fans continuing — the second season is the show proving the premise wasn't a one-time concept, with a new threat that requires the sisters to be active rather than reactive and gives each of them something specific to lose",
      "Fleabag fans of dark Irish comedy that manages to be genuinely funny about genuinely painful things — Sharon Horgan's sensibility is consistent across both shows, and Bad Sisters S2 gives her more room to do the emotional work her writing is best at",
      "Big Little Lies fans of female ensemble dramas about women sharing a dangerous secret across time — the Garvey sisters' dynamic in S2 is deeper because what they survived in S1 has changed each of their relationships to the secret and to each other",
      "Derry Girls fans of Irish ensemble comedy with specific familial texture — Bad Sisters is darker but shares the same quality of drawing a specific kind of Irish domestic world that people from outside it find both alien and entirely recognizable",
      "Dead to Me fans of dark comedies built around female complicity in something illegal where the comedy and the drama are genuinely working together — the Garvey sisters and Jen-and-Judy occupy the same tonal space, Bad Sisters slightly more ensemble, Dead to Me more dyadic"
    ]
  },
  {
    "id": "room-2015",
    "title": "Room",
    "year": 2015,
    "runtime": 118,
    "synopsis": "Joy has been held captive in a small shed for seven years, and her five-year-old son Jack has never known any world but that shed — which is, for him, the entire universe. When she finally tells him the truth about what exists beyond their walls, they attempt an escape that changes both of them in ways neither could have predicted. Brie Larson won the Academy Award for Best Actress; Jacob Tremblay gives the kind of child performance that redefines what child performances can be. The film is devastating and ultimately about what love survives.",
    "genres": ["drama", "thriller", "survival"],
    "themes": ["captivity", "maternal-love", "resilience", "trauma", "reintegration", "innocence"],
    "tropes": ["captivity-survival", "mother-child-bond", "escape", "world-outside", "trauma-aftermath"],
    "tone": ["emotionally-devastating", "tender", "tense", "hopeful"],
    "setting": ["modern", "captive-space", "suburban-aftermath"],
    "characterTypes": ["captive-mother", "child-born-in-captivity", "traumatized-survivor", "family-support-network"],
    "streaming": {"amazon_prime": true, "hulu": true},
    "network": "Film (A24)",
    "actors": [
      {"name": "Brie Larson", "role": "Joy 'Ma' Newsome", "isLead": true},
      {"name": "Jacob Tremblay", "role": "Jack Newsome", "isLead": true},
      {"name": "Joan Allen", "role": "Nancy", "isLead": false}
    ],
    "matchReasoningHints": [
      "Maid fans of prestige dramas about maternal love and resilience in extremity — Room and Maid are in the same conversation about what women will do to protect their children and what the system does when they try",
      "The OA fans of narratives centered on captivity and what the experience of being contained does to a person's relationship with the rest of the world — both stories are as interested in the aftermath of captivity as in the captivity itself",
      "Sharp Objects fans of prestige dramas about maternal relationships under extreme psychological pressure — Room's mother-child dynamic is ultimately about love under conditions designed to destroy it",
      "Little Fires Everywhere fans of prestige dramas that examine motherhood as a morally complicated institution rather than a sentimental one — Room's Joy is a specific person in a specific situation, not a symbol, and Larson earns every scene",
      "Parasite fans of A24-distributed prestige films that use a restricted setting to excavate emotional and social complexity — Room's single-location constraint is structural and the escape is the midpoint, not the resolution"
    ]
  }
];
