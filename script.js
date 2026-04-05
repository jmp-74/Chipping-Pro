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
    ['landing-screen', 'start-screen', 'video-screen', 'quiz-screen', 'rules-screen', 'termine-screen', 'main-app'].forEach(function (s) {
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
}

function goToTermine() {
    showScreen('termine-screen');
}

function goToRules() {
    showScreen('rules-screen');
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