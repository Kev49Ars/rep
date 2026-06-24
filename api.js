(function() {
    'use strict';

    var API_BASE = 'https://api.dalam.world/launcher/api.wdg.php';
    var VERSION  = '1.0.0';

    // ══════════════════════════════════════
    // TRANSLATIONS
    // ══════════════════════════════════════
    var I18N = {
        en: {
            online:        'players online',
            clan:          'Clan',
            leader:        'Leader',
            members:       'Members',
            online_now:    'online now',
            castle:        'Castle',
            clanhall:      'Clan Hall',
            ally:          'Alliance',
            no_castle:     'No castle',
            no_clanhall:   'No clan hall',
            no_ally:       'No alliance',
            wars:          'At war with',
            castles_title: 'Castles',
            owner:         'Owner',
            tax:           'Tax',
            siege:         'Siege',
            no_owner:      'No owner',
            couple_title:  'Married Couple',
            wedding_date:  'Wedding',
            powered:       'Powered by Dalam World',
            loading:       'Loading...',
            error:         'Failed to load data',
            fort:          'Fortress',
            forts_title:   'Fortresses'
        },
        ru: {
            online:        'игроков онлайн',
            clan:          'Клан',
            leader:        'Лидер',
            members:       'Участники',
            online_now:    'онлайн',
            castle:        'Замок',
            clanhall:      'Клан Холл',
            ally:          'Альянс',
            no_castle:     'Нет замка',
            no_clanhall:   'Нет клан холла',
            no_ally:       'Нет альянса',
            wars:          'Война с',
            castles_title: 'Замки',
            owner:         'Владелец',
            tax:           'Налог',
            siege:         'Осада',
            no_owner:      'Нет владельца',
            couple_title:  'Супруги',
            wedding_date:  'Свадьба',
            powered:       'На основе Dalam World',
            loading:       'Загрузка...',
            error:         'Ошибка загрузки',
            fort:          'Крепость',
            forts_title:   'Крепости'
        },
        id: {
            online:        'pemain online',
            clan:          'Klan',
            leader:        'Pemimpin',
            members:       'Anggota',
            online_now:    'online',
            castle:        'Kastil',
            clanhall:      'Aula Klan',
            ally:          'Aliansi',
            no_castle:     'Tidak ada kastil',
            no_clanhall:   'Tidak ada aula klan',
            no_ally:       'Tidak ada aliansi',
            wars:          'Perang dengan',
            castles_title: 'Kastil',
            owner:         'Pemilik',
            tax:           'Pajak',
            siege:         'Pengepungan',
            no_owner:      'Tidak ada pemilik',
            couple_title:  'Pasangan Menikah',
            wedding_date:  'Pernikahan',
            powered:       'Diberdayakan oleh Dalam World',
            loading:       'Memuat...',
            error:         'Gagal memuat data',
            fort:          'Benteng',
            forts_title:   'Benteng'
        },
        el: {
            online:        'παίκτες συνδεδεμένοι',
            clan:          'Κλαν',
            leader:        'Αρχηγός',
            members:       'Μέλη',
            online_now:    'συνδεδεμένοι',
            castle:        'Κάστρο',
            clanhall:      'Αίθουσα Κλαν',
            ally:          'Συμμαχία',
            no_castle:     'Χωρίς κάστρο',
            no_clanhall:   'Χωρίς αίθουσα',
            no_ally:       'Χωρίς συμμαχία',
            wars:          'Σε πόλεμο με',
            castles_title: 'Κάστρα',
            owner:         'Ιδιοκτήτης',
            tax:           'Φόρος',
            siege:         'Πολιορκία',
            no_owner:      'Κανένας ιδιοκτήτης',
            couple_title:  'Παντρεμένο Ζευγάρι',
            wedding_date:  'Γάμος',
            powered:       'Με τη δύναμη του Dalam World',
            loading:       'Φόρτωση...',
            error:         'Αποτυχία φόρτωσης',
            fort:          'Φρούριο',
            forts_title:   'Φρούρια'
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
        dark: {
            bg:        '#0f0d0a',
            bg2:       '#181410',
            border:    '#3a2e1e',
            gold:      '#c9943a',
            gold2:     '#e8b84b',
            text:      '#d4c4a0',
            text2:     '#7a6e5a',
            green:     '#3a7a4a',
            green2:    '#6fcf8a',
            red:       '#c04040',
            font:      "'Georgia', serif"
        },
        light: {
            bg:        '#faf8f4',
            bg2:       '#f0ece2',
            border:    '#c8b89a',
            gold:      '#8a5a10',
            gold2:     '#b07820',
            text:      '#3a2e1e',
            text2:     '#8a7a60',
            green:     '#2a6a3a',
            green2:    '#2a6a3a',
            red:       '#a03030',
            font:      "'Georgia', serif"
        }
    };

    // ══════════════════════════════════════
    // STYLES INJECTION
    // ══════════════════════════════════════
    function injectStyles() {
        if (document.getElementById('dw-widget-styles')) return;
        var style = document.createElement('style');
        style.id  = 'dw-widget-styles';
        style.textContent = [
            '.dw-widget{font-family:Georgia,serif;border-radius:4px;padding:16px;min-width:200px;max-width:400px;box-sizing:border-box;position:relative;}',
            '.dw-widget *{box-sizing:border-box;margin:0;padding:0;}',
            '.dw-widget-dark{background:#0f0d0a;border:1px solid #3a2e1e;color:#d4c4a0;}',
            '.dw-widget-light{background:#faf8f4;border:1px solid #c8b89a;color:#3a2e1e;}',
            '.dw-title{font-size:11px;letter-spacing:2px;text-transform:uppercase;margin-bottom:12px;padding-bottom:8px;}',
            '.dw-widget-dark .dw-title{color:#c9943a;border-bottom:1px solid #3a2e1e;}',
            '.dw-widget-light .dw-title{color:#8a5a10;border-bottom:1px solid #c8b89a;}',
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
            '.dw-dot{display:inline-block;width:7px;height:7px;border-radius:50%;margin-right:5px;}',
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
            '.dw-castle-row{padding:5px 0;font-size:12px;display:flex;justify-content:space-between;}',
            '.dw-castle-row+.dw-castle-row{border-top:1px solid rgba(128,100,60,0.15);}',
            '.dw-castle-name{font-weight:bold;}',
            '.dw-widget-dark .dw-castle-name{color:#e8b84b;}',
            '.dw-widget-light .dw-castle-name{color:#b07820;}',
            '.dw-castle-owner{font-size:11px;}',
            '.dw-widget-dark .dw-castle-owner{color:#7a6e5a;}',
            '.dw-widget-light .dw-castle-owner{color:#8a7a60;}',
            '.dw-couple{text-align:center;padding:8px 0;}',
            '.dw-couple-names{font-size:16px;font-weight:bold;margin-bottom:4px;}',
            '.dw-widget-dark .dw-couple-names{color:#e8b84b;}',
            '.dw-widget-light .dw-couple-names{color:#b07820;}',
            '.dw-footer{font-size:9px;text-align:right;margin-top:10px;opacity:0.4;letter-spacing:0.5px;}',
            '.dw-loading{text-align:center;padding:20px;font-size:12px;opacity:0.5;}',
            '.dw-error{text-align:center;padding:10px;font-size:11px;color:#c04040;}',
            '.dw-tax{font-size:10px;opacity:0.7;}'
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
                try {
                    cb(null, JSON.parse(xhr.responseText));
                } catch(e) {
                    cb('Parse error');
                }
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
        return String(s || '').replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
    }

    function dot(online) {
        return '<span class="dw-dot ' + (online ? 'dw-dot-on' : 'dw-dot-off') + '"></span>';
    }

    function footer(lang) {
        return '<div class="dw-footer"><a href="https://dalam.world" target="_blank" style="color:inherit;text-decoration:none;">' + t(lang,'powered') + '</a></div>';
    }

    // ══════════════════════════════════════
    // WIDGET RENDERERS
    // ══════════════════════════════════════

    // ONLINE
    function renderOnline(container, data, lang, theme) {
        container.innerHTML =
            '<div class="dw-online-count">' + data.online + '</div>' +
            '<div class="dw-online-label">' + esc(t(lang,'online')) + '</div>' +
            footer(lang);
    }

    // CLAN
    function renderClan(container, data, lang, theme) {
        var html = '<div class="dw-title">⚔ ' + esc(data.name) + '</div>';

        html += row(t(lang,'leader'), '<strong>' + esc(data.leader) + '</strong>');
        html += row(t(lang,'members'),
            dot(true) + '<span style="color:' + (theme === 'dark' ? '#6fcf8a' : '#2a6a3a') + '">' + data.members_online + '</span>' +
            ' / ' + data.members_total + ' ' + t(lang,'online_now'));

        if (data.castle) {
            html += row(t(lang,'castle'), '<span class="dw-tag">🏰 ' + esc(data.castle.name) + ' (' + data.castle.tax + '%)</span>');
        } else {
            html += row(t(lang,'castle'), '<span style="opacity:0.5">' + t(lang,'no_castle') + '</span>');
        }

        if (data.clanhall) {
            html += row(t(lang,'clanhall'), '<span class="dw-tag">🏠 ' + esc(data.clanhall.name) + '</span>');
        }

        if (data.ally) {
            html += row(t(lang,'ally'), esc(data.ally));
        }

        if (data.wars && data.wars.length > 0) {
            var enemies = data.wars.map(function(w) { return esc(w.enemy); }).join(', ');
            html += row(t(lang,'wars'), '<span style="color:#c04040">' + enemies + '</span>');
        }

        // Members list (max 10)
        if (data.members && data.members.length > 0) {
            html += '<div class="dw-members">';
            var shown = data.members.slice(0, 10);
            shown.forEach(function(m) {
                html += '<div class="dw-member' + (m.online ? ' dw-member-online' : '') + '">' +
                    dot(m.online) + esc(m.name) +
                '</div>';
            });
            if (data.members.length > 10) {
                html += '<div style="font-size:10px;opacity:0.5;margin-top:4px;">+' + (data.members.length - 10) + ' more</div>';
            }
            html += '</div>';
        }

        html += footer(lang);
        container.innerHTML = html;
    }

    // CASTLES
    function renderCastles(container, data, lang, theme) {
        var html = '<div class="dw-title">🏰 ' + t(lang,'castles_title') + '</div>';

        data.castles.forEach(function(c) {
            var siegeStr = '';
            if (c.siege_date) {
                var d = new Date(c.siege_date);
                siegeStr = (d.getMonth()+1) + '/' + d.getDate() + ' ' + d.getHours() + ':00';
            }
            html += '<div class="dw-castle-row">' +
                '<span class="dw-castle-name">' + esc(c.name) + '</span>' +
                '<span class="dw-castle-owner">' +
                    (c.owner
                        ? esc(c.owner) + (c.tax ? ' <span class="dw-tax">(' + c.tax + '%)</span>' : '')
                        : '<span style="opacity:0.4">' + t(lang,'no_owner') + '</span>') +
                '</span>' +
            '</div>';
        });

        html += footer(lang);
        container.innerHTML = html;
    }

    // FORTS
    function renderForts(container, data, lang, theme) {
        var html = '<div class="dw-title">🗼 ' + t(lang,'forts_title') + '</div>';

        data.forts.forEach(function(f) {
            html += '<div class="dw-castle-row">' +
                '<span class="dw-castle-name">' + esc(f.name) + '</span>' +
                '<span class="dw-castle-owner">' +
                    (f.owner
                        ? esc(f.owner)
                        : '<span style="opacity:0.4">' + t(lang,'no_owner') + '</span>') +
                '</span>' +
            '</div>';
        });

        html += footer(lang);
        container.innerHTML = html;
    }

    // COUPLE
    function renderCouple(container, data, lang, theme) {
        var html = '<div class="dw-title">💍 ' + t(lang,'couple_title') + '</div>';

        if (!data.married) {
            html += '<div class="dw-loading" style="color:#c04040">Not married</div>';
        } else {
            var p1 = data.player1;
            var p2 = data.player2;
            html += '<div class="dw-couple">';
            html += '<div class="dw-couple-names">' +
                dot(p1.online) + esc(p1.name) +
                ' <span style="opacity:0.5">❤</span> ' +
                esc(p2.name) + dot(p2.online) +
            '</div>';
            if (data.wedding_date) {
                var wd = data.wedding_date.substring(0, 10);
                html += '<div style="font-size:11px;opacity:0.6;">' + t(lang,'wedding_date') + ': ' + esc(wd) + '</div>';
            }
            html += '</div>';
        }

        html += footer(lang);
        container.innerHTML = html;
    }

    // ══════════════════════════════════════
    // MAIN INIT
    // ══════════════════════════════════════
    function initWidget(scriptTag) {
        var type    = scriptTag.getAttribute('data-type')  || 'online';
        var theme   = scriptTag.getAttribute('data-theme') || 'dark';
        var langOvr = scriptTag.getAttribute('data-lang')  || '';
        var clan    = scriptTag.getAttribute('data-clan')  || '';
        var charName= scriptTag.getAttribute('data-char')  || '';
        var width   = scriptTag.getAttribute('data-width') || '';
        var lang    = detectLang(langOvr);

        if (!THEMES[theme]) theme = 'dark';

        // Create container
        var container = document.createElement('div');
        container.className = 'dw-widget dw-widget-' + theme;
        if (width) container.style.maxWidth = width;
        container.innerHTML = '<div class="dw-loading">' + t(lang,'loading') + '</div>';

        // Insert after script tag
        scriptTag.parentNode.insertBefore(container, scriptTag.nextSibling);

        // Fetch and render
        var params = {};
        var renderFn = null;

        if (type === 'online') {
            params  = { action: 'online' };
            renderFn = renderOnline;
        } else if (type === 'clan') {
            if (!clan) { container.innerHTML = '<div class="dw-error">data-clan required</div>'; return; }
            params  = { action: 'clan', name: clan };
            renderFn = renderClan;
        } else if (type === 'castles') {
            params  = { action: 'castles' };
            renderFn = renderCastles;
        } else if (type === 'forts') {
            params  = { action: 'forts' };
            renderFn = renderForts;
        } else if (type === 'couple') {
            if (!charName) { container.innerHTML = '<div class="dw-error">data-char required</div>'; return; }
            params  = { action: 'couple', char: charName };
            renderFn = renderCouple;
        } else {
            container.innerHTML = '<div class="dw-error">Unknown data-type: ' + esc(type) + '</div>';
            return;
        }

        apiFetch(params, function(err, data) {
            if (err || !data.success) {
                container.innerHTML = '<div class="dw-error">' + t(lang,'error') + '</div>' + footer(lang);
                return;
            }
            renderFn(container, data, lang, theme);
        });

        // Auto-refresh every 60 seconds
        setInterval(function() {
            apiFetch(params, function(err, data) {
                if (!err && data.success) renderFn(container, data, lang, theme);
            });
        }, 60000);
    }

    // ══════════════════════════════════════
    // BOOTSTRAP — find all widget scripts
    // ══════════════════════════════════════
    function bootstrap() {
        injectStyles();
        var scripts = document.querySelectorAll('script[src*="widget.js"][data-type]');
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
