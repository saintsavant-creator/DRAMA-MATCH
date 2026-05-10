/**
 * DramaMatch — Internationalization (i18n)
 * Supports: en (English), ko (한국어), ja (日本語), zh (中文)
 * Language stored in localStorage key: 'dm_lang'
 * URL prefixes: /ko/, /ja/, /zh/ for SEO
 */
(function () {
    'use strict';

    const TRANSLATIONS = {
        en: {
            // Nav
            'nav.watchlist': '♡ Watchlist',
            'nav.browse_moods': 'Browse Moods',
            'nav.shows_like': 'Shows Like...',
            'nav.actor_dives': 'Actor Dives',
            'nav.blog': 'Blog',
            'nav.about': 'About',

            // Hero
            'hero.badge': 'your Asian drama obsessed friend',
            'hero.h1': 'Search any show.',
            'hero.h1.accent': 'find your match across borders.',
            'hero.sub': 'Enter a show you love — from anywhere — and get matched to its perfect counterpart, regardless of language, culture, or continent. Works both ways. No drama FOMO.',
            'hero.search.placeholder': 'what show are you obsessed with? try Breaking Bad, Crash Landing on You, The Gentlemen...',

            // Search modes
            'modes.label': 'or browse by',
            'modes.show': '🔍 Search by Show',
            'modes.mood': '🎭 Browse by Mood',
            'modes.trope': '🏷️ Browse by Trope',

            // Mood
            'mood.prompt': 'what kind of emotional damage are we doing tonight?',
            'mood.cry_it_out.label': 'Need a Good Cry',
            'mood.cry_it_out.desc': 'Emotional gut-punches',
            'mood.feel_good.label': 'Make Me Happy',
            'mood.feel_good.desc': 'Warm & uplifting vibes',
            'mood.edge_of_seat.label': 'Edge of My Seat',
            'mood.edge_of_seat.desc': 'Suspense & thrills',
            'mood.laugh_out_loud.label': 'Make Me Laugh',
            'mood.laugh_out_loud.desc': 'Pure comedic chaos',
            'mood.epic_romance.label': 'Epic Romance',
            'mood.epic_romance.desc': 'Sweeping love stories',
            'mood.dark_twisted.label': 'Dark & Twisted',
            'mood.dark_twisted.desc': 'Morally complex & chilling',

            // Tropes
            'trope.placeholder': 'obsessed with enemies to lovers? slow burn? time travel? start here...',
            'trope.section.tropes': 'beloved tropes 🔥',
            'trope.section.themes': 'fan-favorite themes ✨',

            // Stats bar
            'stats.asian': 'Asian Dramas and counting',
            'stats.western': 'Western Titles and counting',
            'stats.week': 'Searches This Week',

            // New & Trending
            'nt.eyebrow': 'just dropped 🆕',
            'nt.heading': 'New & Trending This Week',
            'nt.subhead': '270+ titles added this month — here\'s what\'s fresh and what everyone\'s watching',
            'nt.tab.new': '✨ New Additions',
            'nt.tab.picks': '🔥 Staff Picks',

            // Featured Match
            'fotw.badge': '🔥 Featured Match of the Week',
            'fotw.updated': 'Updated weekly',
            'fotw.loading': 'Loading this week\'s match...',
            'fotw.finding': 'Finding the match...',

            // Filter tabs
            'filter.all': 'All',
            'filter.kdrama': '🇰🇷 K-Drama',
            'filter.cdrama': '🇨🇳 C-Drama',
            'filter.jdrama': '🇯🇵 J-Drama',
            'filter.anime': '📚 Anime/Manga-to-Screen',
            'filter.manhwa': '🖼️ Manhwa-to-Screen',
            'filter.western': '🌍 Western',

            // Result card
            'card.match': 'Match',
            'card.why': 'why this one\'s for you 💫',
            'card.cast': 'Cast',
            'card.where_to_watch': 'Where to Watch',
            'card.accurate': 'Accurate?',
            'card.agree': '✓ Agree',
            'card.too_high': '↓ Too High',
            'card.too_low': '↑ Too Low',
            'card.save': 'Save',
            'card.saved': 'Saved',
            'card.share': '📤 Share this match',
            'card.back': '← search another show',
            'card.back_mood': '← pick a different mood',
            'card.back_trope': '← browse another trope',
            'card.no_results': 'No strong matches found for this show yet. We\'re always expanding our database!',
            'card.no_mood': 'Could not load mood results. Try another vibe.',
            'card.no_trope': 'No titles found for this trope.',
            'card.streaming_unavailable': 'Search streaming platforms for availability',
            'card.asian_dramas': '🌏 Asian Dramas',
            'card.western_shows': '🌎 Western Shows',
            'card.dir': 'Dir.',
            'card.quiz_finding': 'finding your perfect match...',

            // Themed sections
            'themed.eyebrow': 'the full lineup 📋',
            'themed.heading': '20 more matches, organized by vibe',
            'themed.sub': 'every section is a different flavor. scroll each row, click any card.',

            // Founder
            'founder.label': 'Your Asian drama obsessed friend behind the match magic',
            'founder.text': 'I watched Signal on a whim and didn\'t sleep for three days. After that I became the friend who recommends K-dramas, C-dramas, and J-dramas to everyone — because once you find the right one, you\'re hooked for life. This site is that, but it never runs out of suggestions.',
            'founder.sig': '— an Asian drama obsessive',
            'founder.link': 'our full story →',

            // Features
            'features.eyebrow': 'why this slaps',
            'features.heading': 'not just "similar vibes." actual story DNA.',
            'features.cross.title': 'Cross-Cultural Matching',
            'features.cross.desc': 'Love a Western show? I find the K-drama, C-drama, or J-drama with the same energy, same tropes, same emotional beats. just in a different language.',
            'features.actor.title': 'Actor Deep Dives',
            'features.actor.desc': 'fell in love with Lee Jun-ki or Song Hye-kyo? see their entire filmography in one click.',
            'features.watch.title': 'Where to Watch',
            'features.watch.desc': 'Netflix, Viki, Disney+. every recommendation tells you exactly where to stream — no hunting required.',
            'features.trope.title': 'Trope-Level Specificity',
            'features.trope.desc': 'not just "romance." enemies-to-lovers slow burn with a cold male lead. that specific. every time.',

            // Email capture
            'email.heading': 'the Asian drama watchlist your friends wish they had',
            'email.desc': 'monthly picks — hidden gems, new releases, and the ones I can\'t stop recommending. no spam, no fluff. just good dramas landing in your inbox.',
            'email.placeholder': 'your@email.com',
            'email.btn': 'yes please →',

            // Shows Like
            'shows_like.eyebrow': 'curated deep dives',
            'shows_like.heading': 'shows like your favorites — but make it Asian drama',
            'shows_like.sub': 'hand-picked recommendations for fans of the biggest Western shows. each page has 7 curated matches with detailed reasoning.',

            // Closing CTA
            'cta.heading': 'every great Asian drama spiral started with',
            'cta.heading.accent': 'one perfect match.',
            'cta.sub': 'type any show you love. I\'ll tell you exactly what to watch next. you won\'t regret this.',
            'cta.btn': 'find my match →',

            // FAQ
            'faq.eyebrow': 'things I get asked a lot',
            'faq.heading': 'your Asian drama questions, answered',

            // Footer
            'footer.text': 'DramaMatch — made by an Asian drama fan who just wants everyone to watch Signal 🎬',
            'footer.shows_like': 'Shows Like...',
            'footer.blog': 'Blog',
            'footer.our_story': 'Our Story',

            // Quiz
            'quiz.eyebrow': 'find your match 🎯',
            'quiz.heading': 'Find Your Asian Drama Match',
            'quiz.subtitle': '3 questions. your perfect K-drama, C-drama, or J-drama is waiting on the other side.',

            // Gamification
            'stats.matches_discovered': 'matches discovered',
            'stats.day_streak': 'day streak',
            'stats.badges_earned': 'badges earned',
            'stats.journey': 'your journey 🏆',
            'stats.drama_stats': 'Your DramaMatch Stats',
            'stats.live': 'Live',
            'stats.discovered': 'discovered',
        },

        ko: {
            // Nav
            'nav.watchlist': '♡ 찜 목록',
            'nav.browse_moods': '분위기 탐색',
            'nav.shows_like': '비슷한 드라마...',
            'nav.actor_dives': '배우 검색',
            'nav.blog': '블로그',
            'nav.about': '소개',

            // Hero
            'hero.badge': '아시아 드라마에 푹 빠진 친구',
            'hero.h1': '좋아하는 작품을 검색하세요.',
            'hero.h1.accent': '국경을 넘어 딱 맞는 작품을 찾아드려요.',
            'hero.sub': '좋아하는 드라마나 영화를 입력하면 언어·문화·대륙을 가리지 않고 완벽한 상대작을 찾아드려요. 양방향 검색 가능. No drama FOMO.',
            'hero.search.placeholder': '어떤 작품에 빠져 있나요? Breaking Bad, 사랑의 불시착, 젠틀맨을 검색해 보세요...',

            // Search modes
            'modes.label': '또는 탐색',
            'modes.show': '🔍 작품으로 검색',
            'modes.mood': '🎭 분위기로 탐색',
            'modes.trope': '🏷️ 클리셰로 탐색',

            // Mood
            'mood.prompt': '오늘 밤 어떤 감정을 느끼고 싶으세요?',
            'mood.cry_it_out.label': '눈물 한 바가지',
            'mood.cry_it_out.desc': '가슴 뭉클한 감동',
            'mood.feel_good.label': '기분 좋아지기',
            'mood.feel_good.desc': '따뜻하고 밝은 분위기',
            'mood.edge_of_seat.label': '손에 땀을 쥐는',
            'mood.edge_of_seat.desc': '긴장과 스릴',
            'mood.laugh_out_loud.label': '빵 터지는 웃음',
            'mood.laugh_out_loud.desc': '순수한 코미디',
            'mood.epic_romance.label': '로맨스',
            'mood.epic_romance.desc': '가슴 뛰는 러브스토리',
            'mood.dark_twisted.label': '어둡고 반전 있는',
            'mood.dark_twisted.desc': '복잡한 도덕성 & 스릴러',

            // Tropes
            'trope.placeholder': '적대적 연인, 슬로우번, 타임슬립에 빠져 있다면? 여기서 시작하세요...',
            'trope.section.tropes': '인기 클리셰 🔥',
            'trope.section.themes': '팬 최애 테마 ✨',

            // Stats bar
            'stats.asian': '아시아 드라마 (계속 추가 중)',
            'stats.western': '서양 작품 (계속 추가 중)',
            'stats.week': '이번 주 검색 횟수',

            // New & Trending
            'nt.eyebrow': '방금 추가됨 🆕',
            'nt.heading': '이번 주 신작 & 화제작',
            'nt.subhead': '이번 달 270여 편 추가 — 신선한 작품과 인기작을 만나보세요',
            'nt.tab.new': '✨ 신규 추가',
            'nt.tab.picks': '🔥 스태프 픽',

            // Featured Match
            'fotw.badge': '🔥 이번 주 추천 매치',
            'fotw.updated': '매주 업데이트',
            'fotw.loading': '이번 주 추천 매치 로딩 중...',
            'fotw.finding': '매치를 찾는 중...',

            // Filter tabs
            'filter.all': '전체',
            'filter.kdrama': '🇰🇷 한국 드라마',
            'filter.cdrama': '🇨🇳 중국 드라마',
            'filter.jdrama': '🇯🇵 일본 드라마',
            'filter.anime': '📚 애니/만화 원작',
            'filter.manhwa': '🖼️ 만화 원작',
            'filter.western': '🌍 서양 드라마',

            // Result card
            'card.match': '매치율',
            'card.why': '이 작품을 추천하는 이유 💫',
            'card.cast': '출연진',
            'card.where_to_watch': '시청 가능 플랫폼',
            'card.accurate': '정확한가요?',
            'card.agree': '✓ 맞아요',
            'card.too_high': '↓ 너무 높아요',
            'card.too_low': '↑ 너무 낮아요',
            'card.save': '찜하기',
            'card.saved': '찜됨',
            'card.share': '📤 공유하기',
            'card.back': '← 다른 작품 검색',
            'card.back_mood': '← 다른 분위기 선택',
            'card.back_trope': '← 다른 클리셰 탐색',
            'card.no_results': '아직 이 작품의 매치가 없습니다. 계속 추가하고 있어요!',
            'card.no_mood': '이 분위기의 결과를 불러올 수 없어요. 다른 분위기를 선택해 보세요.',
            'card.no_trope': '이 클리셰에 해당하는 작품이 없어요.',
            'card.streaming_unavailable': '스트리밍 플랫폼에서 검색해 보세요',
            'card.asian_dramas': '🌏 아시아 드라마',
            'card.western_shows': '🌎 서양 드라마',
            'card.dir': '감독.',
            'card.quiz_finding': '완벽한 매치를 찾는 중...',

            // Themed sections
            'themed.eyebrow': '전체 라인업 📋',
            'themed.heading': '분위기별 매치 20편 더보기',
            'themed.sub': '섹션마다 다른 매력. 각 행을 스크롤하고 카드를 클릭하세요.',

            // Founder
            'founder.label': '드라마 매치 뒤의 아시아 드라마 덕후',
            'founder.text': '어쩌다 Signal을 보고 3일을 꼬박 새웠어요. 그 뒤로 주변 모두에게 한드·중드·일드를 추천하는 친구가 됐어요 — 딱 맞는 작품을 찾으면 평생 빠져나올 수 없거든요. 이 사이트가 바로 그 친구예요. 추천은 무한정이고요.',
            'founder.sig': '— 아시아 드라마 덕후',
            'founder.link': '우리 이야기 보기 →',

            // Features
            'features.eyebrow': '이래서 다릅니다',
            'features.heading': '"비슷한 분위기"가 아닙니다. 진짜 스토리 DNA.',
            'features.cross.title': '크로스 컬처 매칭',
            'features.cross.desc': '좋아하는 서양 드라마 있나요? 같은 에너지, 같은 클리셰, 같은 감정선을 가진 한드·중드·일드를 찾아드려요. 언어만 다를 뿐.',
            'features.actor.title': '배우 필모그래피 탐색',
            'features.actor.desc': '이준기나 송혜교에게 빠졌나요? 한 번의 클릭으로 전체 필모그래피를 확인하세요.',
            'features.watch.title': '시청 가능 플랫폼',
            'features.watch.desc': 'Netflix, Viki, Disney+. 모든 추천작에서 어디서 볼 수 있는지 정확히 알려드려요.',
            'features.trope.title': '클리셰 단위 맞춤 추천',
            'features.trope.desc': '단순히 "로맨스"가 아닙니다. 차가운 남주의 적대적 연인 슬로우번. 그 수준으로 정확하게. 매번.',

            // Email capture
            'email.heading': '친구들이 부러워할 아시아 드라마 리스트',
            'email.desc': '매달 — 숨겨진 명작, 신작, 지금 가장 추천하고 싶은 작품들. 스팸 없음, 허튼 내용 없음. 좋은 드라마만 받아보세요.',
            'email.placeholder': 'your@email.com',
            'email.btn': '구독하기 →',

            // Shows Like
            'shows_like.eyebrow': '큐레이션 추천',
            'shows_like.heading': '좋아하는 작품과 비슷한 아시아 드라마',
            'shows_like.sub': '인기 서양 드라마 팬을 위한 맞춤 추천. 각 페이지에 7편의 큐레이션 매치와 자세한 이유를 담았습니다.',

            // Closing CTA
            'cta.heading': '모든 위대한 아시아 드라마 여정은',
            'cta.heading.accent': '단 하나의 완벽한 매치에서 시작됩니다.',
            'cta.sub': '좋아하는 작품을 입력하세요. 다음으로 볼 작품을 정확히 알려드릴게요. 후회 없을 거예요.',
            'cta.btn': '내 매치 찾기 →',

            // FAQ
            'faq.eyebrow': '자주 받는 질문들',
            'faq.heading': '아시아 드라마 궁금증, 모두 답해드려요',

            // Footer
            'footer.text': 'DramaMatch — 모두가 Signal을 보길 바라는 아시아 드라마 팬이 만들었습니다 🎬',
            'footer.shows_like': '비슷한 드라마...',
            'footer.blog': '블로그',
            'footer.our_story': '우리 이야기',

            // Quiz
            'quiz.eyebrow': '내 취향 찾기 🎯',
            'quiz.heading': '나의 아시아 드라마 매치 찾기',
            'quiz.subtitle': '3가지 질문. 완벽한 한드·중드·일드가 기다리고 있어요.',

            // Gamification
            'stats.matches_discovered': '매치 발견',
            'stats.day_streak': '일 연속',
            'stats.badges_earned': '획득한 배지',
            'stats.journey': '나의 여정 🏆',
            'stats.drama_stats': '나의 DramaMatch 통계',
            'stats.live': '실시간',
            'stats.discovered': '발견',
        },

        ja: {
            // Nav
            'nav.watchlist': '♡ ウォッチリスト',
            'nav.browse_moods': 'ムードで探す',
            'nav.shows_like': '似たドラマ...',
            'nav.actor_dives': '俳優で探す',
            'nav.blog': 'ブログ',
            'nav.about': 'About',

            // Hero
            'hero.badge': 'アジアドラマに夢中なあなたの友人',
            'hero.h1': 'どんな作品でも検索して、',
            'hero.h1.accent': '国境を越えたあなたのマッチを見つけよう。',
            'hero.sub': '好きな作品を入力すれば、言語・文化・大陸を問わず完璧な対応作を見つけます。双方向対応。ドラマFOMO完全解消。',
            'hero.search.placeholder': 'どんな作品が好きですか？ブレイキング・バッド、愛の不時着、ザ・ジェントルマンなど...',

            // Search modes
            'modes.label': 'または探す',
            'modes.show': '🔍 作品で検索',
            'modes.mood': '🎭 ムードで探す',
            'modes.trope': '🏷️ トロープで探す',

            // Mood
            'mood.prompt': '今夜はどんな気分になりたいですか？',
            'mood.cry_it_out.label': '思いっきり泣きたい',
            'mood.cry_it_out.desc': '感動の涙',
            'mood.feel_good.label': '元気になりたい',
            'mood.feel_good.desc': '温かくて明るい気分',
            'mood.edge_of_seat.label': '手に汗握る',
            'mood.edge_of_seat.desc': 'サスペンス＆スリル',
            'mood.laugh_out_loud.label': '笑いたい',
            'mood.laugh_out_loud.desc': '純粋なコメディ',
            'mood.epic_romance.label': '壮大なロマンス',
            'mood.epic_romance.desc': '胸を打つラブストーリー',
            'mood.dark_twisted.label': 'ダーク＆ひねり',
            'mood.dark_twisted.desc': '複雑な道徳＆ゾクゾク',

            // Tropes
            'trope.placeholder': 'エネミーズtoラバーズ、スロウバーン、タイムトラベル... ここから始めよう...',
            'trope.section.tropes': '人気トロープ 🔥',
            'trope.section.themes': '定番テーマ ✨',

            // Stats bar
            'stats.asian': 'アジアドラマ（随時追加中）',
            'stats.western': '海外作品（随時追加中）',
            'stats.week': '今週の検索数',

            // New & Trending
            'nt.eyebrow': '新着 🆕',
            'nt.heading': '今週の新作＆話題作',
            'nt.subhead': '今月270本以上追加 — 新鮮な作品と人気作をチェック',
            'nt.tab.new': '✨ 新規追加',
            'nt.tab.picks': '🔥 スタッフのおすすめ',

            // Featured Match
            'fotw.badge': '🔥 今週のフィーチャードマッチ',
            'fotw.updated': '毎週更新',
            'fotw.loading': '今週のマッチを読み込み中...',
            'fotw.finding': 'マッチを探しています...',

            // Filter tabs
            'filter.all': 'すべて',
            'filter.kdrama': '🇰🇷 韓国ドラマ',
            'filter.cdrama': '🇨🇳 中国ドラマ',
            'filter.jdrama': '🇯🇵 日本ドラマ',
            'filter.anime': '📚 アニメ・マンガ原作',
            'filter.manhwa': '🖼️ 漫画原作',
            'filter.western': '🌍 海外ドラマ',

            // Result card
            'card.match': 'マッチ度',
            'card.why': 'あなたにおすすめの理由 💫',
            'card.cast': 'キャスト',
            'card.where_to_watch': '視聴できる場所',
            'card.accurate': '正確ですか？',
            'card.agree': '✓ そう思う',
            'card.too_high': '↓ 高すぎる',
            'card.too_low': '↑ 低すぎる',
            'card.save': '保存',
            'card.saved': '保存済',
            'card.share': '📤 シェア',
            'card.back': '← 別の作品を検索',
            'card.back_mood': '← 別のムードを選ぶ',
            'card.back_trope': '← 別のトロープを探す',
            'card.no_results': 'この作品のマッチはまだありません。随時追加しています！',
            'card.no_mood': 'このムードの結果を読み込めません。別のムードを試してください。',
            'card.no_trope': 'このトロープの作品はまだありません。',
            'card.streaming_unavailable': 'ストリーミングプラットフォームで確認してください',
            'card.asian_dramas': '🌏 アジアドラマ',
            'card.western_shows': '🌎 海外ドラマ',
            'card.dir': '監督',
            'card.quiz_finding': 'あなたのベストマッチを探しています...',

            // Themed sections
            'themed.eyebrow': '全ラインアップ 📋',
            'themed.heading': 'ムード別マッチをさらに20本',
            'themed.sub': 'セクションごとに違う味わい。各行をスクロールし、カードをクリック。',

            // Founder
            'founder.label': 'マッチングの裏にいるアジアドラマ狂のあなたの友人',
            'founder.text': '何気なくSignalを観て3日間眠れませんでした。以来、周りみんなに韓ドラ・中ドラ・日ドラを勧める友人になりました — 一度ハマると一生抜け出せないので。このサイトはその友人ですが、おすすめが尽きることはありません。',
            'founder.sig': '— アジアドラマ狂',
            'founder.link': 'ストーリー全文を見る →',

            // Features
            'features.eyebrow': 'ここが違います',
            'features.heading': '「似た雰囲気」じゃない。本物のストーリーDNA。',
            'features.cross.title': 'クロスカルチャーマッチング',
            'features.cross.desc': '好きな海外ドラマがある？同じエネルギー、同じトロープ、同じ感情の起伏を持つ韓ドラ・中ドラ・日ドラを見つけます。言語が違うだけ。',
            'features.actor.title': '俳優フィルモグラフィー探索',
            'features.actor.desc': 'イ・ジュンギや宋慧喬に恋した？ワンクリックでフィルモグラフィー全作をチェック。',
            'features.watch.title': '視聴できる場所',
            'features.watch.desc': 'Netflix、Viki、Disney+。すべての推薦作でどこで視聴できるかを正確にお知らせします。',
            'features.trope.title': 'トロープレベルの精度',
            'features.trope.desc': '単なる「ロマンス」じゃない。クールな男主人公とのエネミーズtoラバーズスロウバーン。それほど具体的に。毎回。',

            // Email capture
            'email.heading': '友達が羨むアジアドラマウォッチリスト',
            'email.desc': '毎月 — 隠れた名作、新作、今いちばん推したい作品。スパムなし、無駄なし。良質なドラマだけお届け。',
            'email.placeholder': 'your@email.com',
            'email.btn': '登録する →',

            // Shows Like
            'shows_like.eyebrow': 'キュレーション特集',
            'shows_like.heading': 'お気に入りに似た作品 — アジアドラマ版',
            'shows_like.sub': '人気海外ドラマのファン向け厳選おすすめ。各ページに7作品のキュレーションマッチと詳細な理由を掲載。',

            // Closing CTA
            'cta.heading': 'すべての偉大なアジアドラマ旅は',
            'cta.heading.accent': 'たったひとつの完璧なマッチから始まります。',
            'cta.sub': '好きな作品を入力してください。次に観るべき作品を正確にお知らせします。後悔しません。',
            'cta.btn': 'マッチを見つける →',

            // FAQ
            'faq.eyebrow': 'よくある質問',
            'faq.heading': 'アジアドラマについての疑問、全部答えます',

            // Footer
            'footer.text': 'DramaMatch — みんなにSignalを観てほしいアジアドラマファンが作りました 🎬',
            'footer.shows_like': '似たドラマ...',
            'footer.blog': 'ブログ',
            'footer.our_story': 'ストーリー',

            // Quiz
            'quiz.eyebrow': 'マッチを探す 🎯',
            'quiz.heading': 'アジアドラマのベストマッチを見つけよう',
            'quiz.subtitle': '3つの質問。あなたの最高の韓ドラ・中ドラ・日ドラが待っています。',

            // Gamification
            'stats.matches_discovered': 'マッチ発見',
            'stats.day_streak': '日連続',
            'stats.badges_earned': '獲得バッジ',
            'stats.journey': '私の旅 🏆',
            'stats.drama_stats': '私のDramaMatch統計',
            'stats.live': 'ライブ',
            'stats.discovered': '発見',
        },

        zh: {
            // Nav
            'nav.watchlist': '♡ 收藏列表',
            'nav.browse_moods': '按心情浏览',
            'nav.shows_like': '相似剧集...',
            'nav.actor_dives': '按演员搜索',
            'nav.blog': '博客',
            'nav.about': '关于',

            // Hero
            'hero.badge': '你的亚洲剧痴朋友',
            'hero.h1': '搜索任何剧集，',
            'hero.h1.accent': '跨越国界找到你的完美匹配。',
            'hero.sub': '输入你喜欢的任何剧集——无论来自哪里——即可找到不受语言、文化或洲际限制的完美对应作品。双向匹配，拒绝错过好剧。',
            'hero.search.placeholder': '你在追什么剧？试试绝命毒师、爱的迫降、绅士...',

            // Search modes
            'modes.label': '或者浏览',
            'modes.show': '🔍 按剧集搜索',
            'modes.mood': '🎭 按心情浏览',
            'modes.trope': '🏷️ 按套路浏览',

            // Mood
            'mood.prompt': '今晚想要什么感觉？',
            'mood.cry_it_out.label': '大哭一场',
            'mood.cry_it_out.desc': '感人至深',
            'mood.feel_good.label': '让我开心',
            'mood.feel_good.desc': '温暖治愈系',
            'mood.edge_of_seat.label': '紧张刺激',
            'mood.edge_of_seat.desc': '悬疑与惊悚',
            'mood.laugh_out_loud.label': '捧腹大笑',
            'mood.laugh_out_loud.desc': '纯喜剧',
            'mood.epic_romance.label': '史诗爱情',
            'mood.epic_romance.desc': '荡气回肠的爱情故事',
            'mood.dark_twisted.label': '黑暗烧脑',
            'mood.dark_twisted.desc': '道德复杂 & 惊悚',

            // Tropes
            'trope.placeholder': '痴迷欢喜冤家、慢热虐心、穿越时空？从这里开始...',
            'trope.section.tropes': '热门套路 🔥',
            'trope.section.themes': '经典主题 ✨',

            // Stats bar
            'stats.asian': '亚洲剧集（持续增加中）',
            'stats.western': '欧美剧集（持续增加中）',
            'stats.week': '本周搜索次数',

            // New & Trending
            'nt.eyebrow': '刚刚上新 🆕',
            'nt.heading': '本周新剧 & 热播剧',
            'nt.subhead': '本月已添加270+部——最新最热，一览无余',
            'nt.tab.new': '✨ 新增剧集',
            'nt.tab.picks': '🔥 编辑推荐',

            // Featured Match
            'fotw.badge': '🔥 本周精选配对',
            'fotw.updated': '每周更新',
            'fotw.loading': '加载本周配对中...',
            'fotw.finding': '正在查找配对...',

            // Filter tabs
            'filter.all': '全部',
            'filter.kdrama': '🇰🇷 韩剧',
            'filter.cdrama': '🇨🇳 中剧',
            'filter.jdrama': '🇯🇵 日剧',
            'filter.anime': '📚 动漫/漫画改编',
            'filter.manhwa': '🖼️ 漫画改编',
            'filter.western': '🌍 欧美剧',

            // Result card
            'card.match': '匹配度',
            'card.why': '为什么推荐给你 💫',
            'card.cast': '主要演员',
            'card.where_to_watch': '观看平台',
            'card.accurate': '准确吗？',
            'card.agree': '✓ 赞同',
            'card.too_high': '↓ 太高了',
            'card.too_low': '↑ 太低了',
            'card.save': '收藏',
            'card.saved': '已收藏',
            'card.share': '📤 分享配对',
            'card.back': '← 搜索其他剧集',
            'card.back_mood': '← 选择其他心情',
            'card.back_trope': '← 浏览其他套路',
            'card.no_results': '该剧集暂无强力匹配，我们一直在扩充数据库！',
            'card.no_mood': '无法加载该心情的结果，请尝试其他心情。',
            'card.no_trope': '暂无该套路的剧集。',
            'card.streaming_unavailable': '请在流媒体平台搜索可用性',
            'card.asian_dramas': '🌏 亚洲剧集',
            'card.western_shows': '🌎 欧美剧集',
            'card.dir': '导演',
            'card.quiz_finding': '正在寻找你的完美配对...',

            // Themed sections
            'themed.eyebrow': '完整阵容 📋',
            'themed.heading': '按风格分类，再看20部好剧',
            'themed.sub': '每个版块都有不同风味。滚动浏览，点击卡片查看详情。',

            // Founder
            'founder.label': '配对魔法背后的亚洲剧痴',
            'founder.text': '无意间看了Signal，三天没睡着。从那以后，我成了向所有人推荐韩剧、中剧、日剧的朋友——因为一旦找到对的那部，就会痴迷一辈子。这个网站就是那个朋友，而且永远不会推荐完。',
            'founder.sig': '— 一个亚洲剧迷',
            'founder.link': '查看我们的故事 →',

            // Features
            'features.eyebrow': '为什么与众不同',
            'features.heading': '不只是"氛围相似"，而是真正的故事DNA。',
            'features.cross.title': '跨文化匹配',
            'features.cross.desc': '喜欢欧美剧？我为你找到具有相同能量、相同套路、相同情感节拍的韩剧、中剧或日剧。只是语言不同。',
            'features.actor.title': '演员作品深挖',
            'features.actor.desc': '爱上了李准基或宋慧乔？一键查看他们的全部作品。',
            'features.watch.title': '观看平台',
            'features.watch.desc': 'Netflix、Viki、Disney+。每条推荐都会告诉你去哪里播，无需苦苦搜索。',
            'features.trope.title': '套路级精准推荐',
            'features.trope.desc': '不只是"爱情"，而是冷面男主的欢喜冤家慢热。就是这么精准，每次都是。',

            // Email capture
            'email.heading': '朋友们都羡慕的亚洲剧单',
            'email.desc': '每月精选——隐藏宝藏、新剧首发、当下最推荐的剧。无垃圾邮件，无废话，只有好剧。',
            'email.placeholder': 'your@email.com',
            'email.btn': '订阅 →',

            // Shows Like
            'shows_like.eyebrow': '精选深度推荐',
            'shows_like.heading': '你的最爱的亚洲剧版本',
            'shows_like.sub': '为最受欢迎的欧美剧粉丝精心挑选。每个页面包含7部精选配对及详细推荐理由。',

            // Closing CTA
            'cta.heading': '每一段精彩的亚洲剧之旅，都始于',
            'cta.heading.accent': '一个完美的配对。',
            'cta.sub': '输入你喜欢的剧集，我来告诉你接下来该看什么，保证不后悔。',
            'cta.btn': '找到我的配对 →',

            // FAQ
            'faq.eyebrow': '常见问题',
            'faq.heading': '你对亚洲剧的疑问，这里都有答案',

            // Footer
            'footer.text': 'DramaMatch — 由一位希望大家都去看Signal的亚洲剧迷打造 🎬',
            'footer.shows_like': '相似剧集...',
            'footer.blog': '博客',
            'footer.our_story': '我们的故事',

            // Quiz
            'quiz.eyebrow': '找到你的配对 🎯',
            'quiz.heading': '找到你的完美亚洲剧配对',
            'quiz.subtitle': '3个问题，你的完美韩剧、中剧或日剧就在另一边等你。',

            // Gamification
            'stats.matches_discovered': '发现的配对',
            'stats.day_streak': '天连续',
            'stats.badges_earned': '获得徽章',
            'stats.journey': '我的旅程 🏆',
            'stats.drama_stats': '我的DramaMatch统计',
            'stats.live': '实时',
            'stats.discovered': '已发现',
        }
    };

    const LANG_NAMES = {
        en: 'English',
        ko: '한국어',
        ja: '日本語',
        zh: '中文'
    };

    const LANG_KEY = 'dm_lang';
    const SUPPORTED = ['en', 'ko', 'ja', 'zh'];

    // ── Detect language ──────────────────────────────────────────────
    function detectLang() {
        // 1. URL path prefix: /ko/, /ja/, /zh/
        const pathMatch = window.location.pathname.match(/^\/(ko|ja|zh)(\/|$)/);
        if (pathMatch) return pathMatch[1];
        // 2. localStorage
        const stored = localStorage.getItem(LANG_KEY);
        if (stored && SUPPORTED.includes(stored)) return stored;
        // 3. Browser preference
        const browser = (navigator.language || navigator.userLanguage || '').toLowerCase();
        if (browser.startsWith('ko')) return 'ko';
        if (browser.startsWith('ja')) return 'ja';
        if (browser.startsWith('zh')) return 'zh';
        return 'en';
    }

    // ── Core translate function ──────────────────────────────────────
    function t(key, fallback) {
        const lang = window.dmLang || 'en';
        const dict = TRANSLATIONS[lang] || TRANSLATIONS.en;
        return dict[key] || TRANSLATIONS.en[key] || fallback || key;
    }

    // ── Apply translations to DOM ────────────────────────────────────
    function applyTranslations() {
        document.querySelectorAll('[data-i18n]').forEach(function(el) {
            const key = el.getAttribute('data-i18n');
            const mode = el.getAttribute('data-i18n-mode') || 'text';
            const val = t(key);
            if (mode === 'placeholder') {
                el.placeholder = val;
            } else if (mode === 'html') {
                el.innerHTML = val;
            } else {
                el.textContent = val;
            }
        });
        // Update html lang attribute
        document.documentElement.lang = window.dmLang || 'en';
        // Update lang switcher active state
        document.querySelectorAll('.lang-btn').forEach(function(btn) {
            btn.classList.toggle('active', btn.getAttribute('data-lang') === window.dmLang);
        });
    }

    // ── Switch language ──────────────────────────────────────────────
    function setLang(lang) {
        if (!SUPPORTED.includes(lang)) return;
        window.dmLang = lang;
        localStorage.setItem(LANG_KEY, lang);
        applyTranslations();
        // Update URL path prefix without full reload
        const currentPath = window.location.pathname;
        const pathSuffix = currentPath.replace(/^\/(ko|ja|zh)(\/|$)/, '/');
        let newPath;
        if (lang === 'en') {
            newPath = pathSuffix;
        } else {
            newPath = '/' + lang + (pathSuffix === '/' ? '' : pathSuffix);
        }
        if (newPath !== currentPath) {
            history.replaceState(null, '', newPath + window.location.search + window.location.hash);
        }
        // Re-init moods if available
        if (typeof window.dmReinitMoods === 'function') {
            window.dmReinitMoods();
        }
    }

    // ── Inject language switcher into nav ────────────────────────────
    function injectLangSwitcher() {
        const navLinks = document.querySelector('.nav-links');
        if (!navLinks) return;
        const switcher = document.createElement('div');
        switcher.className = 'lang-switcher';
        switcher.innerHTML = SUPPORTED.map(function(lang) {
            return '<button class="lang-btn' + (lang === window.dmLang ? ' active' : '') + '" ' +
                   'data-lang="' + lang + '" ' +
                   'onclick="window.dmSetLang(\'' + lang + '\')" ' +
                   'title="' + LANG_NAMES[lang] + '">' +
                   LANG_NAMES[lang] + '</button>';
        }).join('');
        navLinks.appendChild(switcher);
    }

    // ── Inject switcher styles ───────────────────────────────────────
    function injectStyles() {
        const style = document.createElement('style');
        style.textContent = `
            .lang-switcher {
                display: flex;
                align-items: center;
                gap: 2px;
                border: 1px solid var(--border, #2a2a35);
                border-radius: 8px;
                padding: 2px;
                background: var(--bg-card, #13131a);
                margin-left: 0.5rem;
            }
            .lang-btn {
                background: none;
                border: none;
                color: var(--text-secondary, #aaa);
                font-size: 0.72rem;
                font-weight: 500;
                padding: 0.22rem 0.45rem;
                border-radius: 6px;
                cursor: pointer;
                font-family: inherit;
                transition: background 0.15s, color 0.15s;
                white-space: nowrap;
                letter-spacing: 0.01em;
            }
            .lang-btn:hover {
                background: var(--bg-accent, rgba(255,255,255,0.05));
                color: var(--text-primary, #e2e2f0);
            }
            .lang-btn.active {
                background: var(--coral, #e8614d);
                color: #fff;
            }
            @media (max-width: 600px) {
                .lang-switcher {
                    order: -1;
                    margin-left: 0;
                    margin-right: auto;
                }
                .lang-btn {
                    font-size: 0.68rem;
                    padding: 0.2rem 0.35rem;
                }
            }
        `;
        document.head.appendChild(style);
    }

    // ── Bootstrap ────────────────────────────────────────────────────
    window.dmLang = detectLang();
    window.t = t;
    window.dmSetLang = setLang;
    window.DM_I18N = TRANSLATIONS;

    injectStyles();

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', function() {
            injectLangSwitcher();
            applyTranslations();
        });
    } else {
        injectLangSwitcher();
        applyTranslations();
    }

})();
