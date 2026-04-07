// ─────────────────────────────────────────────
// DATEN
// ─────────────────────────────────────────────
const clubs = ["Driver", "Holz 3", "Holz 5", "Hybrid", "Eisen 4", "Eisen 5", "Eisen 6", "Eisen 7", "Eisen 8", "Eisen 9", "PW", "GW", "SW", "LW"];

const refs = {
    women: {
        "Driver": [170, 195], "Holz 3": [150, 175], "Holz 5": [140, 160], "Hybrid": [135, 155],
        "Eisen 4": [125, 145], "Eisen 5": [115, 135], "Eisen 6": [105, 125], "Eisen 7": [95, 115],
        "Eisen 8": [85, 105], "Eisen 9": [75, 95], "PW": [60, 80], "GW": [50, 70], "SW": [40, 60], "LW": [30, 50]
    },
    men: {
        "Driver": [210, 255], "Holz 3": [190, 215], "Holz 5": [180, 200], "Hybrid": [170, 195],
        "Eisen 4": [160, 185], "Eisen 5": [150, 175], "Eisen 6": [140, 165], "Eisen 7": [130, 155],
        "Eisen 8": [120, 145], "Eisen 9": [110, 135], "PW": [90, 115], "GW": [80, 100], "SW": [70, 90], "LW": [60, 80]
    }
};

let user = { name: "", hcp: "", gender: "" };

// ─────────────────────────────────────────────
// BOOT — immer Landing Page zuerst
// ─────────────────────────────────────────────
window.onload = function () {
    showScreen('landing-screen');
};

// ─────────────────────────────────────────────
// SCREEN NAVIGATION
// ─────────────────────────────────────────────
function showScreen(id) {
    ['landing-screen', 'start-screen', 'video-screen', 'quiz-screen', 'rules-screen', 'termine-screen', 'hcp-screen', 'impressum-screen', 'nutzung-screen', 'main-app'].forEach(function (s) {
        var el = document.getElementById(s);
        if (el) el.classList.add('hidden');
    });
    var target = document.getElementById(id);
    if (target) target.classList.remove('hidden');
}

function goToLogin() {
    var saved = localStorage.getItem('cp_final_elite_v10');
    if (saved) {
        user = JSON.parse(saved);
        autoStartApp();
    } else {
        showScreen('start-screen');
    }
}

function goToVideos() {
    showScreen('video-screen');
    var saved = localStorage.getItem('cp_final_elite_v10');
    var n = saved ? JSON.parse(saved).name : '';
    var el = document.getElementById('wb-video-title');
    if (el && n) el.innerText = 'Willkommen, ' + n + '! 🎬';
}

function goToTermine() {
    showScreen('termine-screen');
    updateWetterLink();
    var saved = localStorage.getItem('cp_final_elite_v10');
    var n = saved ? JSON.parse(saved).name : '';
    var el = document.getElementById('wb-termine-title');
    if (el && n) el.innerText = 'Willkommen, ' + n + '! 📅';
}

function goToImpressum() {
    showScreen('impressum-screen');
}

function goToNutzung() {
    showScreen('nutzung-screen');
}

function goToRules() {
    showScreen('rules-screen');
    var saved = localStorage.getItem('cp_final_elite_v10');
    var n = saved ? JSON.parse(saved).name : '';
    var el = document.getElementById('wb-rules-title');
    if (el && n) el.innerText = 'Willkommen, ' + n + '! 📖';
}

function goToQuiz() {
    showScreen('quiz-screen');
    if (typeof initQuiz === 'function') {
        setTimeout(function() { initQuiz(); }, 50);
    }
}

function backToLanding() {
    closeVideo();
    showScreen('landing-screen');
}

function goBackToLandingFromApp() {
    showScreen('landing-screen');
}

// ─────────────────────────────────────────────
// LOGIN & APP START
// ─────────────────────────────────────────────
function startApp(gender) {
    user.name = document.getElementById('p-name').value || "Elite Spieler";
    user.hcp  = document.getElementById('p-hcp').value  || "0.0";
    user.gender = gender;
    localStorage.setItem('cp_final_elite_v10', JSON.stringify(user));
    autoStartApp();
}

function autoStartApp() {
    document.getElementById('display-name-header').innerText = user.name;
    document.getElementById('display-hcp').innerText = "HCP: " + user.hcp;
    document.getElementById('gender-tag').innerText = user.gender === 'women' ? "DAMEN" : "HERREN";
    document.getElementById('welcome-message').innerText = "GUTEN TAG, " + user.name.toUpperCase() + "!";
    var wbT = document.getElementById('wb-training-title');
    if (wbT) wbT.innerText = 'Guten Tag, ' + user.name + '! 👋';
    document.getElementById('live-date-header').innerText = new Date().toLocaleDateString('de-DE');
    initInputs();
    initRefs(user.gender);
    renderHistory();
    showScreen('main-app');
    showTab('entry');
}

// ─────────────────────────────────────────────
// TRAINING
// ─────────────────────────────────────────────
function initInputs() {
    document.getElementById('input-list').innerHTML = clubs.map(function (c) {
        return '<div class="club-row">' +
            '<span class="c-name">' + c + '</span>' +
            '<input type="number" class="dist-v" data-club="' + c + '" placeholder="0" inputmode="numeric">' +
            '<input type="text" class="note-v" placeholder="Notiz">' +
            '</div>';
    }).join('');
}

function initRefs(gender) {
    document.getElementById('ref-grid').innerHTML = Object.keys(refs[gender]).map(function (c) {
        return '<div class="ref-item"><label>' + c + '</label><span>' + refs[gender][c][0] + '-' + refs[gender][c][1] + 'm</span></div>';
    }).join('');
}

function showTab(t) {
    document.querySelectorAll('.nav-item').forEach(function (btn) { btn.classList.remove('active'); });
    var btn = document.getElementById('nav-' + t);
    if (btn) btn.classList.add('active');

    document.querySelectorAll('.tab-pane').forEach(function (p) { p.classList.add('hidden'); });

    var section = document.getElementById('section-' + t);
    if (section) {
        section.classList.remove('hidden');
        var area = section.querySelector('.scroll-area');
        if (area) area.scrollTop = 0;
    }
}

function saveToHistory() {
    var ds = document.querySelectorAll('.dist-v');
    var ns = document.querySelectorAll('.note-v');
    var dt = new Date().toLocaleDateString('de-DE');
    var hs = JSON.parse(localStorage.getItem('cp_hist_elite_v10') || '[]');
    var count = 0;

    ds.forEach(function (input, i) {
        if (input.value) {
            hs.push({
                id: Date.now() + i,
                dt: dt,
                c: input.getAttribute('data-club'),
                d: parseInt(input.value),
                n: ns[i].value || "-",
                g: user.gender
            });
            count++;
            input.value = "";
            ns[i].value = "";
        }
    });

    if (count === 0) { alert("Meter-Werte eingeben!"); return; }
    localStorage.setItem('cp_hist_elite_v10', JSON.stringify(hs));
    renderHistory();
    alert("Training gespeichert.");
    showTab('history');
}

function renderHistory() {
    var hs = JSON.parse(localStorage.getItem('cp_hist_elite_v10') || '[]');
    var container = document.getElementById('history-rows');
    if (hs.length === 0) {
        container.innerHTML = '<p style="text-align:center;color:#333;font-size:0.7rem;margin-top:50px;">KEINE DATEN</p>';
        return;
    }
    hs.sort(function (a, b) { return b.id - a.id; });
    container.innerHTML = hs.map(function (h) {
        var rf = refs[h.g] && refs[h.g][h.c] ? refs[h.g][h.c] : [0, 0];
        var ok = h.d >= rf[0] && h.d <= rf[1];
        var col = ok ? '#2ecc71' : 'var(--gold)';
        return '<div class="h-card">' +
            '<div class="h-top"><span>' + h.c + '</span><span>' + h.dt + ' | ' + h.n + '</span></div>' +
            '<div class="h-mid">' +
            '<div class="h-val"><label>IST</label><span style="color:' + col + '">' + h.d + 'm</span></div>' +
            '<div class="h-val"><label>REF</label><span>' + rf[0] + '-' + rf[1] + 'm</span></div>' +
            '<div style="font-size:0.5rem;padding:3px 6px;border-radius:3px;font-weight:800;border:1px solid ' + col + ';color:' + col + ';">' + (ok ? 'TREFFER' : 'ABW.') + '</div>' +
            '</div></div>';
    }).join('');
}

// ─────────────────────────────────────────────
// MODALS
// ─────────────────────────────────────────────
function openRef() { document.getElementById('ref-modal').classList.remove('hidden'); }
function closeRef() { document.getElementById('ref-modal').classList.add('hidden'); }
function openDeleteModal() { document.getElementById('delete-modal').classList.remove('hidden'); }
function closeDeleteModal() { document.getElementById('delete-modal').classList.add('hidden'); }
function clearAllData() { localStorage.clear(); location.reload(); }

// ─────────────────────────────────────────────
// VIDEO PLAYER
// ─────────────────────────────────────────────
function openVideo(videoId) {
    document.getElementById('video-iframe').src =
        'https://www.youtube.com/embed/' + videoId + '?autoplay=1&rel=0';
    document.getElementById('video-modal').classList.remove('hidden');
}

function closeVideo() {
    var iframe = document.getElementById('video-iframe');
    if (iframe) iframe.src = '';
    var modal = document.getElementById('video-modal');
    if (modal) modal.classList.add('hidden');
}

// ─────────────────────────────────────────────
// REGELVIDEOS PLAYER
// ─────────────────────────────────────────────
function openRulesVideo(videoId) {
    document.getElementById('rules-video-iframe').src =
        'https://www.youtube.com/embed/' + videoId + '?autoplay=1&rel=0';
    document.getElementById('rules-video-modal').classList.remove('hidden');
}

function closeRulesVideo() {
    var iframe = document.getElementById('rules-video-iframe');
    if (iframe) iframe.src = '';
    var modal = document.getElementById('rules-video-modal');
    if (modal) modal.classList.add('hidden');
}

// ─────────────────────────────────────────────
// KALENDER INTEGRATION
// ─────────────────────────────────────────────
function addToCalendar(titel, start, end, ort) {
    var beschreibung = 'Chippingdales Golf Club – ' + titel;
    // ICS-Datei generieren (funktioniert auf iOS, Android, Outlook, Google)
    var ics = [
        'BEGIN:VCALENDAR',
        'VERSION:2.0',
        'PRODID:-//Chippingdales//Golf App//DE',
        'BEGIN:VEVENT',
        'DTSTART:' + start,
        'DTEND:' + end,
        'SUMMARY:' + titel,
        'DESCRIPTION:' + beschreibung,
        'LOCATION:' + ort,
        'END:VEVENT',
        'END:VCALENDAR'
    ].join('\r\n');

    var blob = new Blob([ics], { type: 'text/calendar;charset=utf-8' });
    var url  = URL.createObjectURL(blob);
    var a    = document.createElement('a');
    a.href   = url;
    a.download = titel.replace(/[^a-z0-9]/gi, '_') + '.ics';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
}

// ─────────────────────────────────────────────
// GOOGLE MAPS
// ─────────────────────────────────────────────
function openMaps(url) {
    window.open(url, '_blank');
}

// ─────────────────────────────────────────────
// HANDICAP RECHNER
// ─────────────────────────────────────────────
function goToHcp() {
    showScreen('hcp-screen');
    var saved = localStorage.getItem('cp_final_elite_v10');
    var n = saved ? JSON.parse(saved).name : '';
    var el = document.getElementById('wb-hcp-title');
    if (el && n) el.innerText = 'Willkommen, ' + n + '! 🧮';
}

function openHcp(url) {
    window.open(url, '_blank');
}

// ─────────────────────────────────────────────
// WETTER – Link zur Wetter-App
// ─────────────────────────────────────────────
function openWetter() {
    // Wird nicht mehr direkt aufgerufen - GPS aktualisiert den Link
}

function updateWetterLink() {
    // Link bleibt auf Waiblingen – zuverlässig
}

// ─────────────────────────────────────────────
// GOOGLE MAPS
// ─────────────────────────────────────────────
function openMaps(url) {
    window.open(url, '_blank');
}

// ─────────────────────────────────────────────
// HANDICAP RECHNER
// ─────────────────────────────────────────────
function goToHcp() {
    showScreen('hcp-screen');
    var saved = localStorage.getItem('cp_final_elite_v10');
    var n = saved ? JSON.parse(saved).name : '';
    var el = document.getElementById('wb-hcp-title');
    if (el && n) el.innerText = 'Willkommen, ' + n + '! 🧮';
}

function openHcp(url) {
    window.open(url, '_blank');
}

// ─────────────────────────────────────────────
// WETTER (Open-Meteo API – kostenlos, kein Key)
// ─────────────────────────────────────────────
function loadWetter() {
    var el = document.getElementById('wetter-leiste');
    if (!el) return;
    el.innerHTML = '<div class="wetter-loading">📍 Wetterdaten werden geladen...</div>';

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            function(pos) {
                fetchWetter(pos.coords.latitude.toFixed(4), pos.coords.longitude.toFixed(4));
            },
            function() {
                // Fallback Waiblingen
                fetchWetter('48.8340', '9.3184');
            },
            { timeout: 6000, maximumAge: 300000 }
        );
    } else {
        fetchWetter('48.8340', '9.3184');
    }
}

function fetchWetter(lat, lon) {
    var el = document.getElementById('wetter-leiste');

    var url = 'https://api.open-meteo.com/v1/forecast'
            + '?latitude=' + lat
            + '&longitude=' + lon
            + '&daily=weathercode,temperature_2m_max,temperature_2m_min,precipitation_sum,windspeed_10m_max'
            + '&timezone=Europe%2FBerlin'
            + '&forecast_days=3';

    fetch(url)
        .then(function(r) {
            if (!r.ok) throw new Error('HTTP ' + r.status);
            return r.json();
        })
        .then(function(data) {
            // Ortsname abrufen
            fetch('https://nominatim.openstreetmap.org/reverse?lat=' + lat + '&lon=' + lon + '&format=json')
                .then(function(r) { return r.json(); })
                .then(function(geo) {
                    var ort = (geo.address && (geo.address.city || geo.address.town || geo.address.village || geo.address.county)) || 'Aktueller Standort';
                    renderWetter(data, ort);
                })
                .catch(function() {
                    renderWetter(data, 'Waiblingen');
                });
        })
        .catch(function(err) {
            if (el) el.innerHTML = '<div class="wetter-error">⚠ ' + (err.message || 'Verbindungsfehler') + '</div>';
        });
}

function renderWetter(data, ort) {
    var el = document.getElementById('wetter-leiste');
    if (!el) return;

    var codes  = data.daily.weathercode;
    var maxT   = data.daily.temperature_2m_max;
    var minT   = data.daily.temperature_2m_min;
    var rain   = data.daily.precipitation_sum;
    var wind   = data.daily.windspeed_10m_max;
    var dates  = data.daily.time;

    function wetterIcon(code) {
        if (code === 0)   return '☀️';
        if (code <= 2)    return '🌤️';
        if (code === 3)   return '☁️';
        if (code <= 49)   return '🌫️';
        if (code <= 59)   return '🌦️';
        if (code <= 69)   return '🌧️';
        if (code <= 79)   return '❄️';
        if (code <= 82)   return '🌧️';
        if (code <= 84)   return '🌨️';
        if (code <= 99)   return '⛈️';
        return '🌡️';
    }

    function golfEignung(code, regen, windSpeed) {
        if (code >= 80 || regen > 5)  return { text: 'Schlechte Bedingungen', col: '#ff4d4d' };
        if (code >= 61 || regen > 1)  return { text: 'Bedingt spielbar',      col: '#ffa726' };
        if (windSpeed > 40)            return { text: 'Sehr windig',           col: '#ffa726' };
        if (code <= 2 && regen === 0)  return { text: 'Ideale Bedingungen ⛳', col: '#2ecc71' };
        return { text: 'Gute Bedingungen', col: '#2ecc71' };
    }

    function tagName(i) {
        if (i === 0) return 'HEUTE';
        if (i === 1) return 'MORGEN';
        // Explizit lokales Datum berechnen
        var now  = new Date();
        var next = new Date(now.getFullYear(), now.getMonth(), now.getDate() + i);
        return ['SO','MO','DI','MI','DO','FR','SA'][next.getDay()];
    }

    var html = '<div class="wetter-ort">📍 ' + ort + '</div><div class="wetter-tage">';
    for (var i = 0; i < 3; i++) {
        var eg = golfEignung(codes[i], rain[i], wind[i]);
        html += '<div class="wetter-tag">'
            + '<span class="wt-day">'   + tagName(i) + '</span>'
            + '<span class="wt-icon">'  + wetterIcon(codes[i]) + '</span>'
            + '<span class="wt-temp">'  + Math.round(maxT[i]) + '° / ' + Math.round(minT[i]) + '°</span>'
            + '<span class="wt-regen">' + (rain[i] > 0 ? '💧 ' + rain[i].toFixed(1) + 'mm' : '🌵 trocken') + '</span>'
            + '<span class="wt-golf" style="color:' + eg.col + '">' + eg.text + '</span>'
            + '</div>';
    }
    html += '</div>';
    el.innerHTML = html;
}

// ─────────────────────────────────────────────
// GOOGLE MAPS
// ─────────────────────────────────────────────
function openMaps(url) {
    window.open(url, '_blank');
}

// ─────────────────────────────────────────────
// HANDICAP RECHNER
// ─────────────────────────────────────────────
function goToHcp() {
    showScreen('hcp-screen');
    var saved = localStorage.getItem('cp_final_elite_v10');
    var n = saved ? JSON.parse(saved).name : '';
    var el = document.getElementById('wb-hcp-title');
    if (el && n) el.innerText = 'Willkommen, ' + n + '! 🧮';
}

function openHcp(url) {
    window.open(url, '_blank');
}

// ─────────────────────────────────────────────
// WETTER (Open-Meteo API – kostenlos, kein Key)
// ─────────────────────────────────────────────
function loadWetter() {
    var el = document.getElementById('wetter-leiste');
    if (!el) return;

    el.innerHTML = '<div class="wetter-loading">📍 Wetterdaten werden geladen...</div>';

    // Versuche Geolocation, Fallback: Stuttgart (Waiblingen-Nähe)
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            function(pos) {
                fetchWetter(pos.coords.latitude.toFixed(4), pos.coords.longitude.toFixed(4));
            },
            function(err) {
                // GPS verweigert oder Timeout → Stuttgart/Waiblingen
                fetchWetter('48.8340', '9.3184');
            },
            { timeout: 6000, maximumAge: 300000 }
        );
    } else {
        fetchWetter('48.8340', '9.3184');
    }
}

function fetchWetter(lat, lon) {
    var url = 'https://api.open-meteo.com/v1/forecast'
        + '?latitude=' + lat
        + '&longitude=' + lon
        + '&daily=weathercode,temperature_2m_max,temperature_2m_min,precipitation_sum,windspeed_10m_max'
        + '&timezone=Europe%2FBerlin'
        + '&forecast_days=3';

    // Immer frisch laden
    fetch(url, { cache: 'no-store', mode: 'cors' })
        .then(function(r) { return r.json(); })
        .then(function(data) { renderWetter(data, lat, lon); })
        .catch(function() {
            var el = document.getElementById('wetter-leiste');
            if (el) el.innerHTML = '<div class="wetter-error">⚠ Wetter gerade nicht verfügbar – bitte Internet prüfen</div>';
        });
}

function renderWetter(data, lat, lon) {
    var el = document.getElementById('wetter-leiste');
    if (!el) return;

    var codes = data.daily.weathercode;
    var maxT   = data.daily.temperature_2m_max;
    var minT   = data.daily.temperature_2m_min;
    var rain   = data.daily.precipitation_sum;
    var wind   = data.daily.windspeed_10m_max;
    var dates  = data.daily.time;

    function wetterIcon(code) {
        if (code === 0)              return '☀️';
        if (code <= 2)               return '🌤️';
        if (code === 3)              return '☁️';
        if (code <= 49)              return '🌫️';
        if (code <= 59)              return '🌦️';
        if (code <= 69)              return '🌧️';
        if (code <= 79)              return '❄️';
        if (code <= 82)              return '🌧️';
        if (code <= 84)              return '🌨️';
        if (code <= 99)              return '⛈️';
        return '🌡️';
    }

    function golfEignung(code, regen, windSpeed) {
        if (code >= 80 || regen > 5) return { text: 'Schlechte Bedingungen', col: '#ff4d4d' };
        if (code >= 61 || regen > 1) return { text: 'Bedingt spielbar', col: '#ffa726' };
        if (windSpeed > 40)          return { text: 'Sehr windig', col: '#ffa726' };
        if (code <= 2 && regen === 0) return { text: 'Ideale Bedingungen ⛳', col: '#2ecc71' };
        return { text: 'Gute Bedingungen', col: '#2ecc71' };
    }

    function tagName(dateStr, i) {
        if (i === 0) return 'HEUTE';
        if (i === 1) return 'MORGEN';
        // Datum explizit als lokale Zeit parsen (kein UTC-Versatz)
        var parts = dateStr.split('-');
        var d = new Date(parseInt(parts[0]), parseInt(parts[1])-1, parseInt(parts[2]));
        var tage = ['SO', 'MO', 'DI', 'MI', 'DO', 'FR', 'SA'];
        return tage[d.getDay()];
    }

    // Ortsname per Reverse Geocoding
    fetch('https://nominatim.openstreetmap.org/reverse?lat=' + lat + '&lon=' + lon + '&format=json')
        .then(function(r) { return r.json(); })
        .then(function(geo) {
            var ort = geo.address.city || geo.address.town || geo.address.village || geo.address.county || 'Aktueller Standort';
            var html = '<div class="wetter-ort">📍 ' + ort + '</div><div class="wetter-tage">';
            for (var i = 0; i < 3; i++) {
                var eg = golfEignung(codes[i], rain[i], wind[i]);
                html += '<div class="wetter-tag">'
                    + '<span class="wt-day">' + tagName(dates[i], i) + '</span>'
                    + '<span class="wt-icon">' + wetterIcon(codes[i]) + '</span>'
                    + '<span class="wt-temp">' + Math.round(maxT[i]) + '° / ' + Math.round(minT[i]) + '°</span>'
                    + '<span class="wt-regen">' + (rain[i] > 0 ? '💧 ' + rain[i].toFixed(1) + 'mm' : '🌵 trocken') + '</span>'
                    + '<span class="wt-golf" style="color:' + eg.col + '">' + eg.text + '</span>'
                    + '</div>';
            }
            html += '</div>';
            el.innerHTML = html;
        })
        .catch(function() {
            // Ohne Ortsname anzeigen
            var html = '<div class="wetter-ort">📍 Wetter</div><div class="wetter-tage">';
            for (var i = 0; i < 3; i++) {
                var eg = golfEignung(codes[i], rain[i], wind[i]);
                html += '<div class="wetter-tag">'
                    + '<span class="wt-day">' + tagName(dates[i], i) + '</span>'
                    + '<span class="wt-icon">' + wetterIcon(codes[i]) + '</span>'
                    + '<span class="wt-temp">' + Math.round(maxT[i]) + '° / ' + Math.round(minT[i]) + '°</span>'
                    + '<span class="wt-regen">' + (rain[i] > 0 ? '💧 ' + rain[i].toFixed(1) + 'mm' : '🌵 trocken') + '</span>'
                    + '<span class="wt-golf" style="color:' + eg.col + '">' + eg.text + '</span>'
                    + '</div>';
            }
            html += '</div>';
            el.innerHTML = html;
        });
}