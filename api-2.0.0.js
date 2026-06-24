(function() {
    'use strict';

    var API_BASE = 'https://api-widget-proxy-allcntr-srvvrc.dalam.world/dw.asm';
    var VERSION  = '2.0.0';

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
            } else {
                cb('HTTP ' + xhr.status);
            }
        };
        xhr.send();
    }

    // ══════════════════════════════════════
    // RENDER HELPERS
    // ══════════════════════════════════════
    function row(label, val) {
        return '<div class="dw-row"><span class="dw-label">' + esc(label) + '</span><span class="dw-val">' + val + '</span></div>';
    }

    function esc(s) {
        return String(s || '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
    }

    function dot(online) {
        return '<span class="dw-dot ' + (online ? 'dw-dot-on' : 'dw-dot-off') + '"></span>';
    }

    function footer(lang) {
        return '';
    }

    function playButton(lang, refCode) {
        var href = 'https://dalam.world/?ref_id=' + encodeURIComponent(refCode || '');
        return '<a class="dw-play-btn" href="' + href + '" target="_blank" rel="noopener">' + esc(t(lang, 'play_btn')) + '</a>';
    }

    // Извлечь имя владельца — бывает строкой или объектом
    function ownerName(owner) {
        if (!owner) return null;
        return typeof owner === 'string' ? owner : (owner.name || null);
    }

    // Красивое время осады: день недели + час
    var DAY_NAMES = {
        ru: ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'],
        en: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
        id: ['Min', 'Sen', 'Sel', 'Rab', 'Kam', 'Jum', 'Sab'],
        el: ['Κυρ', 'Δευ', 'Τρι', 'Τετ', 'Πεμ', 'Παρ', 'Σαβ']
    };
    function formatSiegeTime(lang, day, hour) {
        var days = DAY_NAMES[lang] || DAY_NAMES['en'];
        return (days[day] || '?') + ' ' + hour + ':00';
    }

    // Дата свадьбы — только дата без времени
    function shortDate(full) {
        if (!full) return '';
        return full.substring(0, 10);
    }

    // ══════════════════════════════════════
    // WIDGET: ONLINE
    // ══════════════════════════════════════
    function renderOnline(container, data, lang, theme, showBtn, refCode) {
        var html =
            '<div class="dw-online-count">' + data.online + '</div>' +
            '<div class="dw-online-label">' + esc(t(lang, 'online')) + '</div>';
        if (showBtn) html += playButton(lang, refCode);
        html += footer(lang);
        container.innerHTML = html;
    }

    // ══════════════════════════════════════
    // WIDGET: CLAN (без уровня и репутации)
    // ══════════════════════════════════════
    function renderClan(container, data, lang, theme, showBtn, refCode) {
        var th = THEMES[theme];
        var html = '<div class="dw-title">\u2694 ' + esc(data.name) + '</div>';

        html += row(t(lang, 'leader'), '<strong>' + esc(data.leader) + '</strong>');
        html += row(t(lang, 'members'),
            dot(true) + '<span style="color:' + th.green + '">' + data.members_online + '</span>' +
            ' / ' + data.members_total + ' ' + t(lang, 'online_now'));

        if (data.castle) {
            html += row(t(lang, 'castle'), '<span class="dw-tag">\uD83C\uDFF0 ' + esc(data.castle.name) + ' (' + data.castle.tax + '%)</span>');
        } else {
            html += row(t(lang, 'castle'), '<span style="opacity:0.5">' + t(lang, 'no_castle') + '</span>');
        }

        if (data.clanhall) {
            html += row(t(lang, 'clanhall'), '<span class="dw-tag">\uD83C\uDFE0 ' + esc(data.clanhall.name) + '</span>');
        }

        if (data.ally) {
            html += row(t(lang, 'ally'), esc(data.ally));
        }

        if (data.wars && data.wars.length > 0) {
            var enemies = data.wars.map(function(w) { return esc(w.enemy); }).join(', ');
            html += row(t(lang, 'wars'), '<span style="color:' + th.red + '">' + enemies + '</span>');
        }

        // Список участников — только имя и онлайн, без last_seen
        if (data.members && data.members.length > 0) {
            html += '<div class="dw-members">';
            var shown = data.members.slice(0, 10);
            for (var i = 0; i < shown.length; i++) {
                var m = shown[i];
                html += '<div class="dw-member' + (m.online ? ' dw-member-online' : '') + '">' +
                    dot(m.online) + esc(m.name) + '</div>';
            }
            if (data.members.length > 10) {
                html += '<div style="font-size:10px;opacity:0.5;margin-top:4px;">+' + (data.members.length - 10) + ' more</div>';
            }
            html += '</div>';
        }

        if (showBtn) html += playButton(lang, refCode);
        html += footer(lang);
        container.innerHTML = html;
    }

    // ══════════════════════════════════════
    // WIDGET: CASTLES (список)
    // ══════════════════════════════════════
    function renderCastles(container, data, lang, theme, showBtn, refCode) {
        var html = '<div class="dw-title">\uD83C\uDFF0 ' + t(lang, 'castles_title') + '</div>';

        for (var i = 0; i < data.castles.length; i++) {
            var c = data.castles[i];
            var on = ownerName(c.owner);
            html += '<div class="dw-item-row">' +
                '<span class="dw-item-name">' + esc(c.name) + '</span>' +
                '<span class="dw-item-detail">' +
                    (on
                        ? esc(on) + (c.tax ? ' <span class="dw-tax">(' + c.tax + '%)</span>' : '')
                        : '<span style="opacity:0.4">' + t(lang, 'no_owner') + '</span>') +
                '</span></div>';
        }

        if (showBtn) html += playButton(lang, refCode);
        html += footer(lang);
        container.innerHTML = html;
    }

    // ══════════════════════════════════════
    // WIDGET: CASTLE (один замок — подробно)
    // ══════════════════════════════════════
    function renderCastle(container, data, lang, theme, showBtn, refCode) {
        var on = ownerName(data.owner);
        var html = '<div class="dw-subtitle">\uD83C\uDFF0 ' + esc(data.name) + '</div>';

        html += row(t(lang, 'owner'), on
            ? '<span class="dw-status-busy">' + esc(on) + '</span>'
            : '<span class="dw-status-free">' + t(lang, 'no_owner') + '</span>');
        html += row(t(lang, 'tax'), data.tax + '%');

        if (typeof data.siege_day !== 'undefined' && typeof data.siege_hour !== 'undefined') {
            html += row(t(lang, 'siege_time'), formatSiegeTime(lang, data.siege_day, data.siege_hour));
        }
        if (data.siege_date) {
            html += row(t(lang, 'siege'), shortDate(data.siege_date));
        }

        if (showBtn) html += playButton(lang, refCode);
        html += footer(lang);
        container.innerHTML = html;
    }

    // ══════════════════════════════════════
    // WIDGET: FORTS (список)
    // ══════════════════════════════════════
    function renderForts(container, data, lang, theme, showBtn, refCode) {
        var html = '<div class="dw-title">\uD83D-DDFC ' + t(lang, 'forts_title') + '</div>';

        for (var i = 0; i < data.forts.length; i++) {
            var f = data.forts[i];
            var on = ownerName(f.owner);
            html += '<div class="dw-item-row">' +
                '<span class="dw-item-name">' + esc(f.name) + '</span>' +
                '<span class="dw-item-detail">' +
                    (on
                        ? '<span class="dw-status-busy">' + esc(on) + '</span>'
                        : '<span style="opacity:0.4">' + t(lang, 'no_owner') + '</span>') +
                '</span></div>';
        }

        if (showBtn) html += playButton(lang, refCode);
        html += footer(lang);
        container.innerHTML = html;
    }

    // ══════════════════════════════════════
    // WIDGET: FORT (одна крепость — подробно)
    // ══════════════════════════════════════
    function renderFort(container, data, lang, theme, showBtn, refCode) {
        var on = ownerName(data.owner);
        var html = '<div class="dw-subtitle">\uD83D-DDFC ' + esc(data.name) + '</div>';

        html += row(t(lang, 'owner'), on
            ? '<span class="dw-status-busy">' + esc(on) + '</span>'
            : '<span class="dw-status-free">' + t(lang, 'no_owner') + '</span>');
        html += row(t(lang, 'tax'), data.tax + '%');

        if (typeof data.siege_day !== 'undefined' && typeof data.siege_hour !== 'undefined') {
            html += row(t(lang, 'siege_time'), formatSiegeTime(lang, data.siege_day, data.siege_hour));
        }
        if (data.siege_date) {
            html += row(t(lang, 'siege'), shortDate(data.siege_date));
        }

        if (showBtn) html += playButton(lang, refCode);
        html += footer(lang);
        container.innerHTML = html;
    }

    // ══════════════════════════════════════
    // WIDGET: CLANHALLS (список)
    // ══════════════════════════════════════
    function renderClanhalls(container, data, lang, theme, showBtn, refCode) {
        var html = '<div class="dw-title">\uD83C\uDFE0 ' + t(lang, 'clanhalls_title') + '</div>';

        for (var i = 0; i < data.clanhalls.length; i++) {
            var h = data.clanhalls[i];
            var on = ownerName(h.owner);
            html += '<div class="dw-item-row">' +
                '<span class="dw-item-name">' + esc(h.name) + '</span>' +
                '<span class="dw-item-detail">' +
                    (on
                        ? '<span class="dw-status-busy">' + esc(on) + '</span>'
                        : '<span class="dw-status-free">' + t(lang, 'free') + '</span>') +
                '</span></div>';
        }

        if (showBtn) html += playButton(lang, refCode);
        html += footer(lang);
        container.innerHTML = html;
    }

    // ══════════════════════════════════════
    // WIDGET: CLANHALL (один холл — подробно)
    // ══════════════════════════════════════
    function renderClanhall(container, data, lang, theme, showBtn, refCode) {
        var on = ownerName(data.owner);
        var html = '<div class="dw-subtitle">\uD83C\uDFE0 ' + esc(data.name) + '</div>';

        if (data.location) {
            html += row(t(lang, 'location'), esc(data.location));
        }

        html += row(t(lang, 'status'), data.empty
            ? '<span class="dw-status-free">' + t(lang, 'free') + '</span>'
            : '<span class="dw-status-busy">' + t(lang, 'occupied') + ' — ' + esc(on) + '</span>');

        if (showBtn) html += playButton(lang, refCode);
        html += footer(lang);
        container.innerHTML = html;
    }

    // ══════════════════════════════════════
    // WIDGET: COUPLE
    // ══════════════════════════════════════
    function renderCouple(container, data, lang, theme, showBtn, refCode) {
        var html = '<div class="dw-title">\uD83D\uDC8D ' + t(lang, 'couple_title') + '</div>';

        if (!data.married) {
            html += '<div class="dw-loading" style="color:#c04040">Not married</div>';
        } else {
            var p1 = data.player1;
            var p2 = data.player2;
            html += '<div class="dw-couple">';
            html += '<div class="dw-couple-names">' +
                dot(p1.online) + esc(p1.name) +
                ' <span style="opacity:0.5">\u2764</span> ' +
                esc(p2.name) + dot(p2.online) + '</div>';
            if (data.wedding_date) {
                html += '<div style="font-size:11px;opacity:0.6;">' + t(lang, 'wedding_date') + ': ' + esc(shortDate(data.wedding_date)) + '</div>';
            }
            html += '</div>';
        }

        if (showBtn) html += playButton(lang, refCode);
        html += footer(lang);
        container.innerHTML = html;
    }

    // ══════════════════════════════════════
    // MAIN INIT
    // ══════════════════════════════════════
    function initWidget(scriptTag) {
        var type      = scriptTag.getAttribute('data-type')        || 'online';
        var theme     = scriptTag.getAttribute('data-theme')       || 'dark';
        var langOvr   = scriptTag.getAttribute('data-lang')        || '';
        var clan      = scriptTag.getAttribute('data-clan')        || '';
        var charName  = scriptTag.getAttribute('data-char')        || '';
        var castleId  = scriptTag.getAttribute('data-castle-id')   || '';
        var castleN   = scriptTag.getAttribute('data-castle')      || '';
        var fortId    = scriptTag.getAttribute('data-fort-id')     || '';
        var chId      = scriptTag.getAttribute('data-clanhall-id') || '';
        var chName    = scriptTag.getAttribute('data-clanhall')    || '';
        var width     = scriptTag.getAttribute('data-width')       || '';
        var showBtn   = scriptTag.getAttribute('data-button') === 'true';
        var refCode   = scriptTag.getAttribute('data-ref')         || '';
        var lang      = detectLang(langOvr);

        if (!THEMES[theme]) theme = 'dark';

        var container = document.createElement('div');
        container.className = 'dw-widget dw-widget-' + theme;
        if (width) container.style.maxWidth = width;
        container.innerHTML = '<div class="dw-loading">' + t(lang, 'loading') + '</div>';
        scriptTag.parentNode.insertBefore(container, scriptTag.nextSibling);

        var params = {};
        var renderFn = null;

        switch (type) {
            case 'online':
                params = { action: 'online' };
                renderFn = renderOnline;
                break;

            case 'clan':
                if (!clan) { container.innerHTML = '<div class="dw-error">data-clan required</div>'; return; }
                params = { action: 'clan', name: clan };
                renderFn = renderClan;
                break;

            case 'castles':
                params = { action: 'castles' };
                renderFn = renderCastles;
                break;

            case 'castle':
                if (castleId) {
                    params = { action: 'castle', id: castleId };
                } else if (castleN) {
                    params = { action: 'castle', name: castleN };
                } else {
                    container.innerHTML = '<div class="dw-error">data-castle-id or data-castle required</div>'; return;
                }
                renderFn = renderCastle;
                break;

            case 'forts':
                params = { action: 'forts' };
                renderFn = renderForts;
                break;

            case 'fort':
                if (!fortId) { container.innerHTML = '<div class="dw-error">data-fort-id required</div>'; return; }
                params = { action: 'fort', id: fortId };
                renderFn = renderFort;
                break;

            case 'clanhalls':
                params = { action: 'clanhalls' };
                renderFn = renderClanhalls;
                break;

            case 'clanhall':
                if (chId) {
                    params = { action: 'clanhall', id: chId };
                } else if (chName) {
                    params = { action: 'clanhall', name: chName };
                } else {
                    container.innerHTML = '<div class="dw-error">data-clanhall-id or data-clanhall required</div>'; return;
                }
                renderFn = renderClanhall;
                break;

            case 'couple':
                if (!charName) { container.innerHTML = '<div class="dw-error">data-char required</div>'; return; }
                params = { action: 'couple', char: charName };
                renderFn = renderCouple;
                break;

            default:
                container.innerHTML = '<div class="dw-error">Unknown data-type: ' + esc(type) + '</div>';
                return;
        }

        function doRender(err, data) {
            if (err || !data.success) {
                container.innerHTML = '<div class="dw-error">' + t(lang, 'error') + '</div>' + footer(lang);
                return;
            }
            renderFn(container, data, lang, theme, showBtn, refCode);
        }

        apiFetch(params, doRender);

        // Автообновление каждые 60 секунд
        setInterval(function() {
            apiFetch(params, function(err, data) {
                if (!err && data.success) renderFn(container, data, lang, theme, showBtn, refCode);
            });
        }, 60000);
    }

    // ══════════════════════════════════════
    // BOOTSTRAP
    // ══════════════════════════════════════
    function bootstrap() {
        injectStyles();
        var scripts = document.querySelectorAll('script[src*="api.js"][data-type]');
        for (var i = 0; i < scripts.length; i++) {
            initWidget(scripts[i]);
        }
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', bootstrap);
    } else {
        bootstrap();
    }

})();
