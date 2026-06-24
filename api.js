(function() {
    'use strict';

    var API_BASE = 'https://api-widget-proxy-allcntr-srvvrc.dalam.world/dw.asm';
    var VERSION  = '2.0.1';

    // ══════════════════════════════════════
    // TRANSLATIONS
    // ══════════════════════════════════════
    var I18N = {
        en: {
            online:          'players online',
            clan:            'Clan',
            leader:          'Leader',
            members:         'Members',
            online_now:      'online now',
            castle:          'Castle',
            clanhall:        'Clan Hall',
            ally:            'Alliance',
            no_castle:       'No castle',
            no_clanhall:     'No clan hall',
            no_ally:         'No alliance',
            wars:            'At war with',
            castles_title:   'Castles',
            forts_title:     'Fortresses',
            clanhalls_title: 'Clan Halls',
            castle_title:    'Castle',
            fort_title:      'Fortress',
            clanhall_title:  'Clan Hall',
            owner:           'Owner',
            tax:             'Tax',
            siege:           'Siege',
            siege_time:      'Siege time',
            location:        'Location',
            status:          'Status',
            occupied:        'Occupied',
            free:            'Free',
            no_owner:        'No owner',
            couple_title:    'Married Couple',
            wedding_date:    'Wedding',
            powered:         'Powered by Dalam World',
            loading:         'Loading...',
            error:           'Failed to load data',
            fort:            'Fortress',
            play_btn:        'Play Now'
        },
        ru: {
            online:          'игроков онлайн',
            clan:            'Клан',
            leader:          'Лидер',
            members:         'Участники',
            online_now:      'онлайн',
            castle:          'Замок',
            clanhall:        'Клан Холл',
            ally:            'Альянс',
            no_castle:       'Нет замка',
            no_clanhall:     'Нет клан холла',
            no_ally:         'Нет альянса',
            wars:            'Война с',
            castles_title:   'Замки',
            forts_title:     'Крепости',
            clanhalls_title: 'Клан Холлы',
            castle_title:    'Замок',
            fort_title:      'Крепость',
            clanhall_title:  'Клан Холл',
            owner:           'Владелец',
            tax:             'Налог',
            siege:           'Осада',
            siege_time:      'Время осады',
            location:        'Расположение',
            status:          'Статус',
            occupied:        'Занят',
            free:            'Свободен',
            no_owner:        'Нет владельца',
            couple_title:    'Супруги',
            wedding_date:    'Свадьба',
            powered:         'На основе Dalam World',
            loading:         'Загрузка...',
            error:           'Ошибка загрузки',
            fort:            'Крепость',
            play_btn:        'В игру'
        },
        id: {
            online:          'pemain online',
            clan:            'Klan',
            leader:          'Pemimpin',
            members:         'Anggota',
            online_now:      'online',
            castle:          'Kastil',
            clanhall:        'Aula Klan',
            ally:            'Aliansi',
            no_castle:       'Tidak ada kastil',
            no_clanhall:     'Tidak ada aula klan',
            no_ally:         'Tidak ada aliansi',
            wars:            'Perang dengan',
            castles_title:   'Kastil',
            forts_title:     'Benteng',
            clanhalls_title: 'Aula Klan',
            castle_title:    'Kastil',
            fort_title:      'Benteng',
            clanhall_title:  'Aula Klan',
            owner:           'Pemilik',
            tax:             'Pajak',
            siege:           'Pengepungan',
            siege_time:      'Waktu pengepungan',
            location:        'Lokasi',
            status:          'Status',
            occupied:        'Ditempati',
            free:            'Bebas',
            no_owner:        'Tidak ada pemilik',
            couple_title:    'Pasangan Menikah',
            wedding_date:    'Pernikahan',
            powered:         'Diberdayakan oleh Dalam World',
            loading:         'Memuat...',
            error:           'Gagal memuat data',
            fort:            'Benteng',
            play_btn:        'Main Sekarang'
        },
        el: {
            online:          'παίκτες συνδεδεμένοι',
            clan:            'Κλαν',
            leader:          'Αρχηγός',
            members:         'Μέλη',
            online_now:      'συνδεδεμένοι',
            castle:          'Κάστρο',
            clanhall:        'Αίθουσα Κλαν',
            ally:            'Συμμαχία',
            no_castle:       'Χωρίς κάστρο',
            no_clanhall:     'Χωρίς αίθουσα',
            no_ally:         'Χωρίς συμμαχία',
            wars:            'Σε πόλεμο με',
            castles_title:   'Κάστρα',
            forts_title:     'Φρούρια',
            clanhalls_title: 'Αίθουσες Κλαν',
            castle_title:    'Κάστρο',
            fort_title:      'Φρούριο',
            clanhall_title:  'Αίθουσα Κλαν',
            owner:           'Ιδιοκτήτης',
            tax:             'Φόρος',
            siege:           'Πολιορκία',
            siege_time:      'Ωρά πολιορκίας',
            location:        'Τοποθεσία',
            status:          'Κατάσταση',
            occupied:        'Κατειλημμένο',
            free:            'Ελεύθερο',
            no_owner:        'Κανένας ιδιοκτήτης',
            couple_title:    'Παντρεμένο Ζευγάρι',
            wedding_date:    'Γάμος',
            powered:         'Με τη δύναμη του Dalam World',
            loading:         'Φόρτωση...',
            error:           'Αποτυχία φόρτωσης',
            fort:            'Φρούριο',
            play_btn:        'Παίξτε Τώρα'
        },
            // --- Испаноязычные (Мексика / Латинская Америка) ---
        es: {
            online:          'jugadores en línea',
            clan:            'Clan',
            leader:          'Líder',
            members:         'Miembros',
            online_now:      'en línea',
            castle:          'Castillo',
            clanhall:        'Salón del Clan',
            ally:            'Alianza',
            no_castle:       'Sin castillo',
            no_clanhall:     'Sin salón del clan',
            no_ally:         'Sin alianza',
            wars:            'En guerra con',
            castles_title:   'Castillos',
            forts_title:     'Fortalezas',
            clanhalls_title: 'Salones del Clan',
            castle_title:    'Castillo',
            fort_title:      'Fortaleza',
            clanhall_title:  'Salón del Clan',
            owner:           'Dueño',
            tax:             'Impuesto',
            siege:           'Asedio',
            siege_time:      'Hora de asedio',
            location:        'Ubicación',
            status:          'Estado',
            occupied:        'Ocupado',
            free:            'Libre',
            no_owner:        'Sin dueño',
            couple_title:    'Pareja casada',
            wedding_date:    'Boda',
            powered:         'Desarrollado por Dalam World',
            loading:         'Cargando...',
            error:           'Error al cargar los datos',
            fort:            'Fortaleza',
            play_btn:        'Jugar ahora'
        },
        // --- Украинский ---
        uk: {
            online:          'гравців онлайн',
            clan:            'Клан',
            leader:          'Лідер',
            members:         'Учасники',
            online_now:      'онлайн',
            castle:          'Замок',
            clanhall:        'Клан Холл',
            ally:            'Альянс',
            no_castle:       'Немає замку',
            no_clanhall:     'Немає клан холлу',
            no_ally:         'Немає альянсу',
            wars:            'Війна з',
            castles_title:   'Замки',
            forts_title:     'Фортеці',
            clanhalls_title: 'Клан Холи',
            castle_title:    'Замок',
            fort_title:      'Фортеця',
            clanhall_title:  'Клан Холл',
            owner:           'Власник',
            tax:             'Податок',
            siege:           'Облога',
            siege_time:      'Час облоги',
            location:        'Розташування',
            status:          'Статус',
            occupied:        'Зайнято',
            free:            'Вільно',
            no_owner:        'Немає власника',
            couple_title:    'Подружжя',
            wedding_date:    'Весілля',
            powered:         'На основі Dalam World',
            loading:         'Завантаження...',
            error:           'Помилка завантаження',
            fort:            'Фортеця',
            play_btn:        'Грати'
        },
        // --- Болгарский ---
        bg: {
            online:          'играчи онлайн',
            clan:            'Клан',
            leader:          'Лидер',
            members:         'Членове',
            online_now:      'онлайн',
            castle:          'Замък',
            clanhall:        'Клан Хол',
            ally:            'Алианс',
            no_castle:       'Без замък',
            no_clanhall:     'Без клан хол',
            no_ally:         'Без алианс',
            wars:            'Война с',
            castles_title:   'Замъци',
            forts_title:     'Крепости',
            clanhalls_title: 'Клан Холове',
            castle_title:    'Замък',
            fort_title:      'Крепост',
            clanhall_title:  'Клан Хол',
            owner:           'Собственик',
            tax:             'Данък',
            siege:           'Обсада',
            siege_time:      'Време на обсадата',
            location:        'Местоположение',
            status:          'Статус',
            occupied:        'Заето',
            free:            'Свободно',
            no_owner:        'Няма собственик',
            couple_title:    'Женена двойка',
            wedding_date:    'Сватба',
            powered:         'Осъществено от Dalam World',
            loading:         'Зареждане...',
            error:           'Неуспешно зареждане на данните',
            fort:            'Крепост',
            play_btn:        'Играй'
        },
        // --- Немецкий ---
        de: {
            online:          'Spieler online',
            clan:            'Clan',
            leader:          'Anführer',
            members:         'Mitglieder',
            online_now:      'online',
            castle:          'Burg',
            clanhall:        'Clan-Halle',
            ally:            'Allianz',
            no_castle:       'Keine Burg',
            no_clanhall:     'Keine Clan-Halle',
            no_ally:         'Keine Allianz',
            wars:            'Im Krieg mit',
            castles_title:   'Burgen',
            forts_title:     'Festungen',
            clanhalls_title: 'Clan-Hallen',
            castle_title:    'Burg',
            fort_title:      'Festung',
            clanhall_title:  'Clan-Halle',
            owner:           'Besitzer',
            tax:             'Steuer',
            siege:           'Belagerung',
            siege_time:      'Belagerungszeit',
            location:        'Standort',
            status:          'Status',
            occupied:        'Besetzt',
            free:            'Frei',
            no_owner:        'Kein Besitzer',
            couple_title:    'Verheiratetes Paar',
            wedding_date:    'Hochzeit',
            powered:         'Bereitgestellt von Dalam World',
            loading:         'Laden...',
            error:           'Daten konnten nicht geladen werden',
            fort:            'Festung',
            play_btn:        'Jetzt spielen'
        },
        // --- Корейский ---
        ko: {
            online:          '접속자 수',
            clan:            '클랜',
            leader:          '리더',
            members:         '멤버',
            online_now:      '온라인',
            castle:          '성',
            clanhall:        '클랜 홀',
            ally:            '동맹',
            no_castle:       '성 없음',
            no_clanhall:     '클랜 홀 없음',
            no_ally:         '동맹 없음',
            wars:            '전쟁 중',
            castles_title:   '성 목록',
            forts_title:     '요새 목록',
            clanhalls_title: '클랜 홀 목록',
            castle_title:    '성',
            fort_title:      '요새',
            clanhall_title:  '클랜 홀',
            owner:           '점유자',
            tax:             '세금',
            siege:           '공성전',
            siege_time:      '공성 시간',
            location:        '위치',
            status:          '상태',
            occupied:        '점령됨',
            free:            '비어 있음',
            no_owner:        '점유자 없음',
            couple_title:    '부부',
            wedding_date:    '결혼식',
            powered:         'Dalam World 제공',
            loading:         '로딩 중...',
            error:           '데이터 로드 실패',
            fort:            '요새',
            play_btn:        '게임 시작'
        },
        // --- Финский ---
        fi: {
            online:          'pelaajaa verkossa',
            clan:            'Klaani',
            leader:          'Johtaja',
            members:         'Jäsenet',
            online_now:      'paikalla',
            castle:          'Linna',
            clanhall:        'Klaanitalo',
            ally:            'Liitto',
            no_castle:       'Ei linnaa',
            no_clanhall:     'Ei klaanitaloa',
            no_ally:         'Ei liittoa',
            wars:            'Sodassa',
            castles_title:   'Linnat',
            forts_title:     'Linnoitukset',
            clanhalls_title: 'Klaanitalot',
            castle_title:    'Linna',
            fort_title:      'Linnoitus',
            clanhall_title:  'Klaanitalo',
            owner:           'Omistaja',
            tax:             'Vero',
            siege:           'Piiritys',
            siege_time:      'Piiritysaika',
            location:        'Sijainti',
            status:          'Tila',
            occupied:        'Valloitettu',
            free:            'Vapaa',
            no_owner:        'Ei omistajaa',
            couple_title:    'Aviopari',
            wedding_date:    'Häät',
            powered:         'Dalam Worldin voimalla',
            loading:         'Ladataan...',
            error:           'Tietojen lataus epäonnistui',
            fort:            'Linnoitus',
            play_btn:        'Pelaa nyt'
        },
        // --- Китайский ---
        zh: {
            online:          '在线玩家',
            clan:            '公会',
            leader:          '首领',
            members:         '成员',
            online_now:      '当前在线',
            castle:          '城堡',
            clanhall:        '公会大厅',
            ally:            '联盟',
            no_castle:       '无城堡',
            no_clanhall:     '无公会大厅',
            no_ally:         '无联盟',
            wars:            '交战中',
            castles_title:   '城堡列表',
            forts_title:     '要塞列表',
            clanhalls_title: '公会大厅列表',
            castle_title:    '城堡',
            fort_title:      '要塞',
            clanhall_title:  '公会大厅',
            owner:           '拥有者',
            tax:             '税率',
            siege:           '攻城战',
            siege_time:      '攻城时间',
            location:        '位置',
            status:          '状态',
            occupied:        '已占领',
            free:            '空闲',
            no_owner:        '无拥有者',
            couple_title:    '已婚夫妇',
            wedding_date:    '婚礼',
            powered:         '由 Dalam World 提供',
            loading:         '加载中...',
            error:           '数据加载失败',
            fort:            '要塞',
            play_btn:        '立即开始'
        },
        // --- Турецкий ---
        tr: {
            online:          'çevrimiçi oyuncu',
            clan:            'Klan',
            leader:          'Lider',
            members:         'Üyeler',
            online_now:      'şu an çevrimiçi',
            castle:          'Kale',
            clanhall:        'Klan Evi',
            ally:            'İttifak',
            no_castle:       'Kale yok',
            no_clanhall:     'Klan evi yok',
            no_ally:         'İttifak yok',
            wars:            'Savaşta olduğu',
            castles_title:   'Kaleler',
            forts_title:     'Hisarlar',
            clanhalls_title: 'Klan Evleri',
            castle_title:    'Kale',
            fort_title:      'Hisar',
            clanhall_title:  'Klan Evi',
            owner:           'Sahip',
            tax:             'Vergi',
            siege:           'Kuşatma',
            siege_time:      'Kuşatma saati',
            location:        'Konum',
            status:          'Durum',
            occupied:        'İşgal altında',
            free:            'Boş',
            no_owner:        'Sahip yok',
            couple_title:    'Evli Çift',
            wedding_date:    'Düğün',
            powered:         'Dalam World tarafından desteklenmektedir',
            loading:         'Yükleniyor...',
            error:           'Veriler yüklenemedi',
            fort:            'Hisar',
            play_btn:        'Hemen Oyna'
        },
        // --- Азербайджанский ---
        az: {
            online:          'onlayn oyunçu',
            clan:            'Klan',
            leader:          'Lider',
            members:         'Üzvlər',
            online_now:      'onlayn',
            castle:          'Qala',
            clanhall:        'Klan Zalı',
            ally:            'İttifaq',
            no_castle:       'Qala yoxdur',
            no_clanhall:     'Klan zalı yoxdur',
            no_ally:         'İttifaq yoxdur',
            wars:            'Müharibədədir',
            castles_title:   'Qalalar',
            forts_title:     'Qalalar',
            clanhalls_title: 'Klan Zalları',
            castle_title:    'Qala',
            fort_title:      'Qala',
            clanhall_title:  'Klan Zalı',
            owner:           'Sahib',
            tax:             'Vergi',
            siege:           'Mühasirə',
            siege_time:      'Mühasirə vaxtı',
            location:        'Mövqe',
            status:          'Status',
            occupied:        'İşğal olunub',
            free:            'Boş',
            no_owner:        'Sahib yoxdur',
            couple_title:    'Evli Cütlük',
            wedding_date:    'Toy',
            powered:         'Dalam World tərəfindən dəstəklənir',
            loading:         'Yüklənir...',
            error:           'Məlumatlar yüklənmədi',
            fort:            'Qala',
            play_btn:        'İndi Oyna'
        },
        // --- Вьетнамский ---
        vi: {
            online:          'người chơi trực tuyến',
            clan:            'Bang hội',
            leader:          'Tộc trưởng',
            members:         'Thành viên',
            online_now:      'đang trực tuyến',
            castle:          'Lâu đài',
            clanhall:        'Bang hội đường',
            ally:            'Liên minh',
            no_castle:       'Không có lâu đài',
            no_clanhall:     'Không có bang hội đường',
            no_ally:         'Không có liên minh',
            wars:            'Đang chiến tranh',
            castles_title:   'Lâu đài',
            forts_title:     'Pháo đài',
            clanhalls_title: 'Bang hội đường',
            castle_title:    'Lâu đài',
            fort_title:      'Pháo đài',
            clanhall_title:  'Bang hội đường',
            owner:           'Chủ nhân',
            tax:             'Thuế',
            siege:           'Vây hãm',
            siege_time:      'Thời gian vây hãm',
            location:        'Vị trí',
            status:          'Trạng thái',
            occupied:        'Đã chiếm',
            free:            'Trống',
            no_owner:        'Không có chủ nhân',
            couple_title:    'Cặp đôi đã kết hôn',
            wedding_date:    'Đám cưới',
            powered:         'Được hỗ trợ bởi Dalam World',
            loading:         'Đang tải...',
            error:           'Không thể tải dữ liệu',
            fort:            'Pháo đài',
            play_btn:        'Chơi ngay'
        },
        // --- Японский ---
        ja: {
            online:          'オンラインプレイヤー',
            clan:            'クラン',
            leader:          'リーダー',
            members:         'メンバー',
            online_now:      'オンライン',
            castle:          '城',
            clanhall:        'クランホール',
            ally:            '同盟',
            no_castle:       '城なし',
            no_clanhall:     'クランホールなし',
            no_ally:         '同盟なし',
            wars:            '戦争中',
            castles_title:   '城一覧',
            forts_title:     '要塞一覧',
            clanhalls_title: 'クランホール一覧',
            castle_title:    '城',
            fort_title:      '要塞',
            clanhall_title:  'クランホール',
            owner:           '所有者',
            tax:             '税金',
            siege:           '攻城戦',
            siege_time:      '攻城時間',
            location:        '場所',
            status:          '状態',
            occupied:        '占領済み',
            free:            '空き',
            no_owner:        '所有者なし',
            couple_title:    '夫婦',
            wedding_date:    '結婚式',
            powered:         'Powered by Dalam World',
            loading:         '読み込み中...',
            error:           'データの読み込みに失敗しました',
            fort:            '要塞',
            play_btn:        '今すぐプレイ'
        },
        // --- Бразильский португальский (Топ MMORPG рынок) ---
        pt: {
            online:          'jogadores online',
            clan:            'Clã',
            leader:          'Líder',
            members:         'Membros',
            online_now:      'online',
            castle:          'Castelo',
            clanhall:        'Salão do Clã',
            ally:            'Aliança',
            no_castle:       'Sem castelo',
            no_clanhall:     'Sem salão do clã',
            no_ally:         'Sem aliança',
            wars:            'Em guerra com',
            castles_title:   'Castelos',
            forts_title:     'Fortalezas',
            clanhalls_title: 'Salões do Clã',
            castle_title:    'Castelo',
            fort_title:      'Fortaleza',
            clanhall_title:  'Salão do Clã',
            owner:           'Dono',
            tax:             'Taxa',
            siege:           'Cerco',
            siege_time:      'Horário do cerco',
            location:        'Localização',
            status:          'Status',
            occupied:        'Ocupado',
            free:            'Livre',
            no_owner:        'Sem dono',
            couple_title:    'Casal casado',
            wedding_date:    'Casamento',
            powered:         'Desenvolvido por Dalam World',
            loading:         'Carregando...',
            error:           'Falha ao carregar dados',
            fort:            'Fortaleza',
            play_btn:        'Jogar agora'
        },
        // --- Польский (Топ MMORPG рынок) ---
        pl: {
            online:          'graczy online',
            clan:            'Klan',
            leader:          'Lider',
            members:         'Członkowie',
            online_now:      'online',
            castle:          'Zamek',
            clanhall:        'Sala Klanowa',
            ally:            'Sojusz',
            no_castle:       'Brak zamku',
            no_clanhall:     'Brak sali klanowej',
            no_ally:         'Brak sojuszu',
            wars:            'W wojnie z',
            castles_title:   'Zamki',
            forts_title:     'Twierdze',
            clanhalls_title: 'Sale Klanowe',
            castle_title:    'Zamek',
            fort_title:      'Twierdza',
            clanhall_title:  'Sala Klanowa',
            owner:           'Właściciel',
            tax:             'Podatek',
            siege:           'Oblężenie',
            siege_time:      'Czas oblężenia',
            location:        'Lokalizacja',
            status:          'Status',
            occupied:        'Zajęty',
            free:            'Wolny',
            no_owner:        'Brak właściciela',
            couple_title:    'Pobrane małżeństwo',
            wedding_date:    'Ślub',
            powered:         'Napędzane przez Dalam World',
            loading:         'Ładowanie...',
            error:           'Nie udało się załadować danych',
            fort:            'Twierdza',
            play_btn:        'Zagraj teraz'
        },
        // --- Тайский (Топ MMORPG рынок) ---
        th: {
            online:          'ผู้เล่นออนไลน์',
            clan:            'คลาน',
            leader:          'หัวหน้า',
            members:         'สมาชิก',
            online_now:      'ออนไลน์',
            castle:          'ปราสาท',
            clanhall:        'คลานฮอลล์',
            ally:            'พันธมิตร',
            no_castle:       'ไม่มีปราสาท',
            no_clanhall:     'ไม่มีคลานฮอลล์',
            no_ally:         'ไม่มีพันธมิตร',
            wars:            'สงครามกับ',
            castles_title:   'ปราสาท',
            forts_title:     'ป้อมปราการ',
            clanhalls_title: 'คลานฮอลล์',
            castle_title:    'ปราสาท',
            fort_title:      'ป้อมปราการ',
            clanhall_title:  'คลานฮอลล์',
            owner:           'เจ้าของ',
            tax:             'ภาษี',
            siege:           'การล้อม',
            siege_time:      'เวลาล้อม',
            location:        'ตำแหน่ง',
            status:          'สถานะ',
            occupied:        'ถูกยึด',
            free:            'ว่าง',
            no_owner:        'ไม่มีเจ้าของ',
            couple_title:    'คู่สมรส',
            wedding_date:    'งานแต่งงาน',
            powered:         'สนับสนุนโดย Dalam World',
            loading:         'กำลังโหลด...',
            error:           'โหลดข้อมูลล้มเหลว',
            fort:            'ป้อมปราการ',
            play_btn:        'เล่นเลย'
        },
        // --- Французский (Топ MMORPG рынок) ---
        fr: {
            online:          'joueurs en ligne',
            clan:            'Clan',
            leader:          'Chef',
            members:         'Membres',
            online_now:      'en ligne',
            castle:          'Château',
            clanhall:        'Hall de Clan',
            ally:            'Alliance',
            no_castle:       'Pas de château',
            no_clanhall:     'Pas de hall de clan',
            no_ally:         'Pas d\'alliance',
            wars:            'En guerre avec',
            castles_title:   'Châteaux',
            forts_title:     'Forteresses',
            clanhalls_title: 'Halls de Clan',
            castle_title:    'Château',
            fort_title:      'Forteresse',
            clanhall_title:  'Hall de Clan',
            owner:           'Propriétaire',
            tax:             'Taxe',
            siege:           'Siège',
            siege_time:      'Heure de siège',
            location:        'Emplacement',
            status:          'Statut',
            occupied:        'Occupé',
            free:            'Libre',
            no_owner:        'Aucun propriétaire',
            couple_title:    'Couple marié',
            wedding_date:    'Mariage',
            powered:         'Propulsé par Dalam World',
            loading:         'Chargement...',
            error:           'Échec du chargement des données',
            fort:            'Forteresse',
            play_btn:        'Jouer maintenant'
        },
        // --- Филиппинский (Тагалог) (Топ MMORPG рынок) ---
        tl: {
            online:          'mga manlalaro na online',
            clan:            'Klan',
            leader:          'Pinuno',
            members:         'Miyembro',
            online_now:      'online ngayon',
            castle:          'Kastilyo',
            clanhall:        'Klan Hall',
            ally:            'Alyansa',
            no_castle:       'Walang kastilyo',
            no_clanhall:     'Walang klan hall',
            no_ally:         'Walang alyansa',
            wars:            'Nasa digmaan sa',
            castles_title:   'Mga Kastilyo',
            forts_title:     'Mga Kutang Panglaban',
            clanhalls_title: 'Mga Klan Hall',
            castle_title:    'Kastilyo',
            fort_title:      'Kutang Panglaban',
            clanhall_title:  'Klan Hall',
            owner:           'May-ari',
            tax:             'Buwis',
            siege:           'Pagsalakay',
            siege_time:      'Oras ng pagsalakay',
            location:        'Lokasyon',
            status:          'Kalagayan',
            occupied:        'Sakop',
            free:            'Malaya',
            no_owner:        'Walang may-ari',
            couple_title:    'Kasal na Magkasintahan',
            wedding_date:    'Kasal',
            powered:         'Powered by Dalam World',
            loading:         'Naglo-load...',
            error:           'Nabigo ang pag-load ng datos',
            fort:            'Kutang Panglaban',
            play_btn:        'Maglaro Na'
        }
    };

    function detectLang(override) {
        if (override) {
            var o = override.toLowerCase().split('-')[0];
            if (I18N[o]) return o;
        }
        var browser = (navigator.language || navigator.userLanguage || 'en').toLowerCase();
        var short = browser.split('-')[0];
        if (I18N[browser]) return browser;
        if (I18N[short]) return short;
        return 'en';
    }

    function t(lang, key) {
        return (I18N[lang] && I18N[lang][key]) ? I18N[lang][key] : (I18N['en'][key] || key);
    }

    // ══════════════════════════════════════
    // THEMES
    // ══════════════════════════════════════
    var THEMES = {
        dark:  { gold: '#c9943a', gold2: '#e8b84b', green: '#6fcf8a', red: '#c04040' },
        light: { gold: '#8a5a10', gold2: '#b07820', green: '#2a6a3a', red: '#a03030' }
    };

    // ══════════════════════════════════════
    // STYLES INJECTION
    // ══════════════════════════════════════
    function injectStyles() {
        if (document.getElementById('dw-widget-styles')) return;
        var style = document.createElement('style');
        style.id = 'dw-widget-styles';
        style.textContent = [
            '.dw-widget{font-family:Georgia,serif;border-radius:4px;padding:16px;min-width:200px;max-width:400px;box-sizing:border-box;position:relative;}',
            '.dw-widget *{box-sizing:border-box;margin:0;padding:0;}',
            '.dw-widget-dark{background:#0f0d0a;border:1px solid #3a2e1e;color:#d4c4a0;}',
            '.dw-widget-light{background:#faf8f4;border:1px solid #c8b89a;color:#3a2e1e;}',
            '.dw-title{font-size:11px;letter-spacing:2px;text-transform:uppercase;margin-bottom:12px;padding-bottom:8px;}',
            '.dw-widget-dark .dw-title{color:#c9943a;border-bottom:1px solid #3a2e1e;}',
            '.dw-widget-light .dw-title{color:#8a5a10;border-bottom:1px solid #c8b89a;}',
            '.dw-subtitle{font-size:20px;font-weight:bold;text-align:center;margin-bottom:10px;}',
            '.dw-widget-dark .dw-subtitle{color:#e8b84b;}',
            '.dw-widget-light .dw-subtitle{color:#b07820;}',
            '.dw-row{display:flex;justify-content:space-between;align-items:center;padding:5px 0;font-size:13px;}',
            '.dw-row+.dw-row{border-top:1px solid rgba(128,100,60,0.2);}',
            '.dw-widget-dark .dw-label{color:#7a6e5a;}',
            '.dw-widget-light .dw-label{color:#8a7a60;}',
            '.dw-widget-dark .dw-val{color:#c9943a;font-weight:bold;}',
            '.dw-widget-light .dw-val{color:#8a5a10;font-weight:bold;}',
            '.dw-online-count{font-size:36px;font-weight:bold;text-align:center;padding:8px 0;}',
            '.dw-widget-dark .dw-online-count{color:#c9943a;}',
            '.dw-widget-light .dw-online-count{color:#8a5a10;}',
            '.dw-online-label{font-size:11px;text-align:center;letter-spacing:1px;text-transform:uppercase;}',
            '.dw-widget-dark .dw-online-label{color:#7a6e5a;}',
            '.dw-widget-light .dw-online-label{color:#8a7a60;}',
            '.dw-dot{display:inline-block;width:7px;height:7px;border-radius:50%;margin-right:5px;vertical-align:middle;}',
            '.dw-dot-on{background:#3a7a4a;}',
            '.dw-dot-off{background:#555;}',
            '.dw-members{margin-top:10px;}',
            '.dw-member{display:flex;align-items:center;padding:3px 0;font-size:12px;}',
            '.dw-widget-dark .dw-member{color:#d4c4a0;}',
            '.dw-widget-light .dw-member{color:#3a2e1e;}',
            '.dw-member-online{color:#6fcf8a !important;}',
            '.dw-tag{display:inline-block;font-size:10px;padding:2px 7px;border-radius:2px;margin-top:4px;}',
            '.dw-widget-dark .dw-tag{background:rgba(201,148,58,0.12);border:1px solid #3a2e1e;color:#c9943a;}',
            '.dw-widget-light .dw-tag{background:rgba(138,90,16,0.1);border:1px solid #c8b89a;color:#8a5a10;}',
            '.dw-item-row{padding:5px 0;font-size:12px;display:flex;justify-content:space-between;align-items:center;}',
            '.dw-item-row+.dw-item-row{border-top:1px solid rgba(128,100,60,0.15);}',
            '.dw-item-name{font-weight:bold;}',
            '.dw-widget-dark .dw-item-name{color:#e8b84b;}',
            '.dw-widget-light .dw-item-name{color:#b07820;}',
            '.dw-item-detail{font-size:11px;}',
            '.dw-widget-dark .dw-item-detail{color:#7a6e5a;}',
            '.dw-widget-light .dw-item-detail{color:#8a7a60;}',
            '.dw-couple{text-align:center;padding:8px 0;}',
            '.dw-couple-names{font-size:16px;font-weight:bold;margin-bottom:4px;}',
            '.dw-widget-dark .dw-couple-names{color:#e8b84b;}',
            '.dw-widget-light .dw-couple-names{color:#b07820;}',
            '.dw-footer{font-size:9px;text-align:right;margin-top:10px;opacity:0.4;letter-spacing:0.5px;}',
            '.dw-loading{text-align:center;padding:20px;font-size:12px;opacity:0.5;}',
            '.dw-error{text-align:center;padding:10px;font-size:11px;color:#c04040;}',
            '.dw-tax{font-size:10px;opacity:0.7;}',
            '.dw-status-free{color:#6fcf8a !important;}',
            '.dw-status-busy{color:#c9943a !important;}',
            '.dw-play-btn{display:block;width:100%;padding:10px 0;margin-top:12px;border:none;border-radius:3px;font-family:Georgia,serif;font-size:13px;font-weight:bold;letter-spacing:1px;text-transform:uppercase;cursor:pointer;text-decoration:none;text-align:center;transition:opacity 0.2s,transform 0.1s;}',
            '.dw-play-btn:hover{opacity:0.85;}',
            '.dw-play-btn:active{transform:scale(0.98);}',
            '.dw-widget-dark .dw-play-btn{background:linear-gradient(135deg,#c9943a,#e8b84b);color:#0f0d0a;}',
            '.dw-widget-light .dw-play-btn{background:linear-gradient(135deg,#8a5a10,#b07820);color:#faf8f4;}'
        ].join('');
        document.head.appendChild(style);
    }

    // ══════════════════════════════════════
    // API FETCH
    // ══════════════════════════════════════
    function apiFetch(params, cb) {
        var url = API_BASE + '?' + Object.keys(params).map(function(k) {
            return encodeURIComponent(k) + '=' + encodeURIComponent(params[k]);
        }).join('&');
        var xhr = new XMLHttpRequest();
        xhr.open('GET', url, true);
        xhr.onreadystatechange = function() {
            if (xhr.readyState !== 4) return;
            if (xhr.status === 200) {
                try { cb(null, JSON.parse(xhr.responseText)); }
                catch(e) { cb('Parse error'); }
            } else { cb('HTTP ' + xhr.status); }
        };
        xhr.send();
    }

    // ══════════════════════════════════════
    // RENDER HELPERS
    // ════════════════════════════════════
    function row(label, val) {
        return '<div class="dw-row"><span class="dw-label">' + esc(label) + '</span><!-- span class="dw-val" -->' + val + '</span></div>';
    }

    function esc(s) {
        return String(s || '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
    }

    function dot(online) {
        return '<span class="dw-dot ' + (online ? 'dw-dot-on' : 'dw-dot-off') + '"></span>';
    }

    function footer() { return ''; }

    function playButton(lang, refCode) {
        var href = 'https://dalam.world/?ref_id=' + encodeURIComponent(refCode || '');
        return '<a class="dw-play-btn" href="' + href + '" target="_blank" rel="noopener">' + esc(t(lang, 'play_btn')) + '</a>';
    }

    function ownerName(owner) {
        if (!owner) return null;
        return typeof owner === 'string' ? owner : (owner.name || null);
    }

        var DAY_NAMES = {
        ru: ['Вс','Пн','Вт','Ср','Чт','Пт','Сб'],
        en: ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'],
        id: ['Min','Sen','Sel','Rab','Kam','Jum','Sab'],
        el: ['Κυρ','Δευ','Τρι','Τετ','Πεμ','Παρ','Σαβ'],
        es: ['Dom','Lun','Mar','Mié','Jue','Vie','Sáb'],
        uk: ['Нд','Пн','Вт','Ср','Чт','Пт','Сб'],
        bg: ['Нед','Пон','Вто','Сря','Чет','Пет','Съб'],
        de: ['So','Mo','Di','Mi','Do','Fr','Sa'],
        ko: ['일','월','화','수','목','금','토'],
        fi: ['Su','Ma','Ti','Ke','To','Pe','La'],
        zh: ['日','一','二','三','四','五','六'],
        tr: ['Paz','Pzt','Sal','Çar','Per','Cum','Cmt'],
        az: ['Baz','B.e','Ç.a','Çər','C.a','Cüm','Şən'],
        vi: ['CN','T2','T3','T4','T5','T6','T7'],
        ja: ['日','月','火','水','木','金','土'],
        pt: ['Dom','Seg','Ter','Qua','Qui','Sex','Sáb'],
        pl: ['Nd','Pn','Wt','Śr','Cz','Pt','Sb'],
        th: ['อา','จ','อ','พ','พฤ','ศ','ส'],
        fr: ['Dim','Lun','Mar','Mer','Jeu','Ven','Sam'],
        tl: ['Lin','Lun','Mar','Miy','Hue','Biy','Sab']
    };

    function formatSiegeTime(lang, day, hour) {
        var days = DAY_NAMES[lang] || DAY_NAMES['en'];
        return (days[day] || '?') + ' ' + hour + ':00';
    }

    function shortDate(full) {
        if (!full) return '';
        return full.substring(0, 10);
    }

    // ══════════════════════════════════════
    // WIDGET: ONLINE
    // ══════════════════════════════════════
    function renderOnline(c, data, lang, theme, btn, ref) {
        var h = '<div class="dw-online-count">' + data.online + '</div><div class="dw-online-label">' + esc(t(lang,'online')) + '</div>';
        if (btn) h += playButton(lang, ref);
        c.innerHTML = h + footer();
    }

    // ══════════════════════════════════════
    // WIDGET: CLAN
    // ══════════════════════════════════════
    function renderClan(c, data, lang, theme, btn, ref) {
        var th = THEMES[theme];
        var h = '<div class="dw-title">\u2694 ' + esc(data.name) + '</div>';
        h += row(t(lang,'leader'), '<strong>' + esc(data.leader) + '</strong>');
        h += row(t(lang,'members'), dot(true) + '<span style="color:' + th.green + '">' + data.members_online + '</span> / ' + data.members_total + ' ' + t(lang,'online_now'));
        if (data.castle) {
            h += row(t(lang,'castle'), '<span class="dw-tag">\uD83C\uDFF0 ' + esc(data.castle.name) + ' (' + data.castle.tax + '%)</span>');
        } else {
            h += row(t(lang,'castle'), '<span style="opacity:0.5">' + t(lang,'no_castle') + '</span>');
        }
        if (data.clanhall) {
            h += row(t(lang,'clanhall'), '<span class="dw-tag">\uD83C\uDFE0 ' + esc(data.clanhall.name) + '</span>');
        }
        if (data.ally) h += row(t(lang,'ally'), esc(data.ally));
        if (data.wars && data.wars.length > 0) {
            h += row(t(lang,'wars'), '<span style="color:' + th.red + '">' + data.wars.map(function(w){return esc(w.enemy);}).join(', ') + '</span>');
        }
        if (data.members && data.members.length > 0) {
            h += '<div class="dw-members">';
            var shown = data.members.slice(0, 10);
            for (var i = 0; i < shown.length; i++) {
                h += '<div class="dw-member' + (shown[i].online ? ' dw-member-online' : '') + '">' + dot(shown[i].online) + esc(shown[i].name) + '</div>';
            }
            if (data.members.length > 10) h += '<div style="font-size:10px;opacity:0.5;margin-top:4px;">+' + (data.members.length - 10) + ' more</div>';
            h += '</div>';
        }
        if (btn) h += playButton(lang, ref);
        c.innerHTML = h + footer();
    }

    // ══════════════════════════════════════
    // WIDGET: CASTLES (list)
    // ══════════════════════════════════════
    function renderCastles(c, data, lang, theme, btn, ref) {
        var h = '<div class="dw-title">\uD83C\uDFF0 ' + t(lang,'castles_title') + '</div>';
        for (var i = 0; i < data.castles.length; i++) {
            var cs = data.castles[i], on = ownerName(cs.owner);
            h += '<div class="dw-item-row"><span class="dw-item-name">' + esc(cs.name) + '</span><span class="dw-item-detail">' +
                (on ? esc(on) + (cs.tax ? ' <span class="dw-tax">(' + cs.tax + '%)</span>' : '') : '<span style="opacity:0.4">' + t(lang,'no_owner') + '</span>') + '</span></div>';
        }
        if (btn) h += playButton(lang, ref);
        c.innerHTML = h + footer();
    }

    // ══════════════════════════════════════
    // WIDGET: CASTLE (single)
    // ══════════════════════════════════════
    function renderCastle(c, data, lang, theme, btn, ref) {
        var on = ownerName(data.owner);
        var h = '<div class="dw-subtitle">\uD83C\uDFF0 ' + esc(data.name) + '</div>';
        h += row(t(lang,'owner'), on ? '<span class="dw-status-busy">' + esc(on) + '</span>' : '<span class="dw-status-free">' + t(lang,'no_owner') + '</span>');
        h += row(t(lang,'tax'), data.tax + '%');
        if (typeof data.siege_day !== 'undefined' && typeof data.siege_hour !== 'undefined') h += row(t(lang,'siege_time'), formatSiegeTime(lang, data.siege_day, data.siege_hour));
        if (data.siege_date) h += row(t(lang,'siege'), shortDate(data.siege_date));
        if (btn) h += playButton(lang, ref);
        c.innerHTML = h + footer();
    }

    // ══════════════════════════════════════
    // WIDGET: FORTS (list)
    // ══════════════════════════════════════
    function renderForts(c, data, lang, theme, btn, ref) {
        var h = '<div class="dw-title">\uD83D\uDDFC ' + t(lang,'forts_title') + '</div>';
        for (var i = 0; i < data.forts.length; i++) {
            var f = data.forts[i], on = ownerName(f.owner);
            h += '<div class="dw-item-row"><span class="dw-item-name">' + esc(f.name) + '</span><span class="dw-item-detail">' +
                (on ? '<span class="dw-status-busy">' + esc(on) + '</span>' : '<span style="opacity:0.4">' + t(lang,'no_owner') + '</span>') + '</span></div>';
        }
        if (btn) h += playButton(lang, ref);
        c.innerHTML = h + footer();
    }

    // ══════════════════════════════════════
    // WIDGET: FORT (single)
    // ══════════════════════════════════════
    function renderFort(c, data, lang, theme, btn, ref) {
        var on = ownerName(data.owner);
        var h = '<div class="dw-subtitle">\uD83D\uDDFC ' + esc(data.name) + '</div>';
        h += row(t(lang,'owner'), on ? '<span class="dw-status-busy">' + esc(on) + '</span>' : '<span class="dw-status-free">' + t(lang,'no_owner') + '</span>');
        h += row(t(lang,'tax'), data.tax + '%');
        if (typeof data.siege_day !== 'undefined' && typeof data.siege_hour !== 'undefined') h += row(t(lang,'siege_time'), formatSiegeTime(lang, data.siege_day, data.siege_hour));
        if (data.siege_date) h += row(t(lang,'siege'), shortDate(data.siege_date));
        if (btn) h += playButton(lang, ref);
        c.innerHTML = h + footer();
    }

    // ══════════════════════════════════════
    // WIDGET: CLANHALLS (list)
    // ══════════════════════════════════════
    function renderClanhalls(c, data, lang, theme, btn, ref) {
        var h = '<div class="dw-title">\uD83C\uDFE0 ' + t(lang,'clanhalls_title') + '</div>';
        for (var i = 0; i < data.clanhalls.length; i++) {
            var hs = data.clanhalls[i], on = ownerName(hs.owner);
            h += '<div class="dw-item-row"><span class="dw-item-name">' + esc(hs.name) + '</span><span class="dw-item-detail">' +
                (on ? '<span class="dw-status-busy">' + esc(on) + '</span>' : '<span class="dw-status-free">' + t(lang,'free') + '</span>') + '</span></div>';
        }
        if (btn) h += playButton(lang, ref);
        c.innerHTML = h + footer();
    }

    // ══════════════════════════════════════
    // WIDGET: CLANHALL (single)
    // ══════════════════════════════════════
    function renderClanhall(c, data, lang, theme, btn, ref) {
        var on = ownerName(data.owner);
        var h = '<div class="dw-subtitle">\uD83C\uDFE0 ' + esc(data.name) + '</div>';
        if (data.location) h += row(t(lang,'location'), esc(data.location));
        h += row(t(lang,'status'), data.empty ? '<span class="dw-status-free">' + t(lang,'free') + '</span>' : '<span class="dw-status-busy">' + t(lang,'occupied') + ' \u2014 ' + esc(on) + '</span>');
        if (btn) h += playButton(lang, ref);
        c.innerHTML = h + footer();
    }

    // ══════════════════════════════════════
    // WIDGET: COUPLE
    // ══════════════════════════════════════
    function renderCouple(c, data, lang, theme, btn, ref) {
        var h = '<div class="dw-title">\uD83D\uDC8D ' + t(lang,'couple_title') + '</div>';
        if (!data.married) {
            h += '<div class="dw-loading" style="color:#c04040">Not married</div>';
        } else {
            var p1 = data.player1, p2 = data.player2;
            h += '<div class="dw-couple"><div class="dw-couple-names">' + dot(p1.online) + esc(p1.name) + ' <span style="opacity:0.5">\u2764</span> ' + esc(p2.name) + dot(p2.online) + '</div>';
            if (data.wedding_date) h += '<div style="font-size:11px;opacity:0.6;">' + t(lang,'wedding_date') + ': ' + esc(shortDate(data.wedding_date)) + '</div>';
            h += '</div>';
        }
        if (btn) h += playButton(lang, ref);
        c.innerHTML = h + footer();
    }

    // ══════════════════════════════════════
    // MAIN INIT
    // ══════════════════════════════════════
    function initWidget(scriptTag) {
        var type     = scriptTag.getAttribute('data-type')        || 'online';
        var theme    = scriptTag.getAttribute('data-theme')       || 'dark';
        var langOvr  = scriptTag.getAttribute('data-lang')        || '';
        var clan     = scriptTag.getAttribute('data-clan')        || '';
        var charName = scriptTag.getAttribute('data-char')        || '';
        var castleId = scriptTag.getAttribute('data-castle-id')   || '';
        var castleN  = scriptTag.getAttribute('data-castle')      || '';
        var fortId   = scriptTag.getAttribute('data-fort-id')     || '';
        var chId     = scriptTag.getAttribute('data-clanhall-id') || '';
        var chName   = scriptTag.getAttribute('data-clanhall')    || '';
        var width    = scriptTag.getAttribute('data-width')       || '';
        var showBtn  = scriptTag.getAttribute('data-button') === 'true';
        var refCode  = scriptTag.getAttribute('data-ref')         || '';
        var lang     = detectLang(langOvr);
        if (!THEMES[theme]) theme = 'dark';

        var container = document.createElement('div');
        container.className = 'dw-widget dw-widget-' + theme;
        if (width) container.style.maxWidth = width;
        container.innerHTML = '<div class="dw-loading">' + t(lang,'loading') + '</div>';
        scriptTag.parentNode.insertBefore(container, scriptTag.nextSibling);

        var params = {}, renderFn = null;

        switch (type) {
            case 'online':
                params = { action: 'online' }; renderFn = renderOnline; break;
            case 'clan':
                if (!clan) { container.innerHTML = '<div class="dw-error">data-clan required</div>'; return; }
                params = { action: 'clan', name: clan }; renderFn = renderClan; break;
            case 'castles':
                params = { action: 'castles' }; renderFn = renderCastles; break;
            case 'castle':
                if (castleId) params = { action: 'castle', id: castleId };
                else if (castleN) params = { action: 'castle', name: castleN };
                else { container.innerHTML = '<div class="dw-error">data-castle-id or data-castle required</div>'; return; }
                renderFn = renderCastle; break;
            case 'forts':
                params = { action: 'forts' }; renderFn = renderForts; break;
            case 'fort':
                if (!fortId) { container.innerHTML = '<div class="dw-error">data-fort-id required</div>'; return; }
                params = { action: 'fort', id: fortId }; renderFn = renderFort; break;
            case 'clanhalls':
                params = { action: 'clanhalls' }; renderFn = renderClanhalls; break;
            case 'clanhall':
                if (chId) params = { action: 'clanhall', id: chId };
                else if (chName) params = { action: 'clanhall', name: chName };
                else { container.innerHTML = '<div class="dw-error">data-clanhall-id or data-clanhall required</div>'; return; }
                renderFn = renderClanhall; break;
            case 'couple':
                if (!charName) { container.innerHTML = '<div class="dw-error">data-char required</div>'; return; }
                params = { action: 'couple', char: charName }; renderFn = renderCouple; break;
            default:
                container.innerHTML = '<div class="dw-error">Unknown data-type: ' + esc(type) + '</div>'; return;
        }

        function doRender(err, data) {
            if (err || !data.success) { container.innerHTML = '<div class="dw-error">' + t(lang,'error') + '</div>'; return; }
            renderFn(container, data, lang, theme, showBtn, refCode);
        }

        apiFetch(params, doRender);
        setInterval(function() {
            apiFetch(params, function(err, data) { if (!err && data.success) renderFn(container, data, lang, theme, showBtn, refCode); });
        }, 60000);
    }

    // ══════════════════════════════════════
    // BOOTSTRAP
    // ══════════════════════════════════════
    function bootstrap() {
        injectStyles();
        var scripts = document.querySelectorAll('script[src*="api.js"][data-type]');
        for (var i = 0; i < scripts.length; i++) initWidget(scripts[i]);
    }

    if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', bootstrap);
    else bootstrap();
})();
