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
    ['landing-screen', 'start-screen', 'video-screen', 'quiz-screen', 'rules-screen', 'termine-screen', 'hcp-screen', 'impressum-screen', 'nutzung-screen', 'caddie-screen', 'main-app'].forEach(function (s) {
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
// GOLF WISSENSBASIS
// ─────────────────────────────────────────────
var quizWissen = [
    { keys: ['zählspiel', 'regel 1'], antwort: '**Wann fallen im Zählspiel nach Regel 1.3c(4) mehrere Strafen für den Verstoß gegen mehrere Regeln an?**\\n\\n✅ **Er darf ihn nicht ersetzen, aber er darf ihn in dem beschädigten Zustand weiter benutzen.**\\n\\n📖 Bei Missbrauch darf der Schläger nicht ersetzt werden, aber er gilt weiterhin als regelkonform und darf benutzt werden (Regel 4.1a(2)).' },
    { keys: ['scorekarte', 'handicap'], antwort: '**Was ist die Verantwortung des Spielers in Bezug auf das Handicap auf der Scorekarte (gültig ab 2023)?**\\n\\n✅ **Beide Spieler sind disqualifiziert.**\\n\\n📖 Vereinbaren zwei oder mehr Spieler, eine ihnen bekannte Regel oder Strafe absichtlich außer Acht zu lassen und hat einer von ihnen die Runde begonnen, sind sie disqualifiziert (Regel 1.3b(1)).' },
    { keys: ['regel 4', 'zählspiel', 'ausrüstung'], antwort: '**Wie viele Strafschläge zieht sich ein Spieler im Zählspiel für den ersten Verstoß gegen Regel 4.3 (Unzulässige Verwendung von Ausrüstung) zu?**\\n\\n✅ **Die Grundstrafe (zwei Strafschläge) am ersten Loch.**\\n\\n📖 Bei einer Verspätung von nicht mehr als fünf Minuten erhält der Spieler die Grundstrafe (zwei Strafschläge) am ersten Loch (Regel 5.3a Ausnahme 1).' },
    { keys: ['abschlag'], antwort: '**Wo ist das Üben von Putten oder Chippen nach Beendigung eines Lochs, aber vor dem nächsten Abschlag, nicht gestattet?**\\n\\n✅ **Der Gegner darf den Schlag für ungültig erklären; der Spieler muss dann erneut von innerhalb des Abschlags spielen.**\\n\\n📖 Im Lochspiel ist der Schlag straflos, aber der Gegner darf ihn unverzüglich für ungültig erklären. Tut er dies, muss der Spieler von innerhalb des Abschlags erneut spielen (Regel 6.1b(1)).' },
    { keys: ['grün', 'disqualifikation'], antwort: '**Ein Spieler unterbricht das Spiel wegen begründeter Blitzgefahr. Was muss er tun, um eine Disqualifikation zu vermeiden?**\\n\\n✅ **Die Grundstrafe (zwei Strafschläge).**\\n\\n📖 Die Strafe für den ersten Verstoß gegen Regel 5.6a (Unangemessene Verzögerung) ist ein Strafschlag. Der zweite Verstoß zieht die Grundstrafe nach sich, der dritte die Disqualifikation.' },
    { keys: ['grün', 'ball'], antwort: '**Ein Ball auf dem Grün, der bereits aufgenommen und zurückgelegt wurde, bewegt sich durch Wind (Naturkräfte) aus seiner Lage. Was muss der Spieler tun?**\\n\\n✅ **Der Schlag zählt; der Ball muss gespielt werden, wie er liegt.**\\n\\n📖 Trifft ein vom Grün gespielter Ball versehentlich den Schläger, der für den Schlag benutzt wurde, ist dies straflos, und der Ball wird gespielt, wie er liegt. Der Schlag wird nicht wiederholt (Regel 11.1b(2)).' },
    { keys: ['ball', 'caddie'], antwort: '**Der Ball eines Spielers wird versehentlich bewegt, während er oder sein Caddie ihn redlich sucht. Was ist die Strafe?**\\n\\n✅ **Nein, diese Handlung ist generell verboten und die Strafe kann nicht durch nachträgliches Entfernen vermieden werden.**\\n\\n📖 Das Hinlegen eines Gegenstandes zur Ausrichtung ist eine unzulässige Hilfe, und die Strafe kann nicht vermieden werden, indem der Gegenstand vor dem Schlag entfernt wird (Regel 10.2b(3)).' },
    { keys: ['grün', 'ball'], antwort: '**Sie entfernen einen Ast (losen hinderlichen Naturstoff) und verursachen dadurch, dass sich Ihr Ball außerhalb des Grüns bewegt. Was ist die Folge?**\\n\\n✅ **Das Festtreten der Füße, wenn der Stand eingenommen wird.**\\n\\n📖 Das Zurücklegen eines Divots in ein Divotloch im Gelände verbessert die Bodenoberfläche und ist eine verbotene Handlung, die zur Grundstrafe führt (Regel 8.1a(3)).' },
    { keys: ['ball', 'bunker'], antwort: '**Welche Handlung zieht eine Strafe nach sich, wenn der Ball im Bunker liegt?**\\n\\n✅ **15 Sekunden ab dem Zeitpunkt, an dem der Spieler das Loch erreicht.**\\n\\n📖 Der Spieler darf eine angemessene Zeit warten, um das Loch zu erreichen, und dann weitere zehn Sekunden, bevor der Ball als zur Ruhe gekommen gilt (Regel 13.3a).' },
    { keys: ['grün'], antwort: '**Welche Art von Schaden gehört **nicht** zur Definition von \'Schäden auf dem Grün\', die ausgebessert werden dürfen?**\\n\\n✅ **Der Schlag zählt nicht, und der Spieler muss den Schlag wiederholen.**\\n\\n📖 Trifft der Ball in Bewegung den im Loch befindlichen Flaggenstock, ist dies straflos (außer in bestimmten Fällen des absichtlichen Beeinflussens), und der Ball muss gespielt werden, wie er liegt (Regel 13.2a(2)).' },
    { keys: ['grün', 'ball'], antwort: '**Ihr Ball liegt auf dem Grün. Sie bessern eine alte Lochpfropfenkante aus, obwohl der Gegner noch spielt. Ist dies erlaubt?**\\n\\n✅ **Aus Hüfthöhe.**\\n\\n📖 Der Ball muss aus Kniehöhe senkrecht nach unten fallen gelassen werden (Regel 14.3b(2)).' },
    { keys: ['grün', 'ball', 'sand'], antwort: '**Ein Spieler versucht, einen Ball an seine ursprüngliche Stelle zurückzulegen (außerhalb des Grüns und nicht im Sand). Der Ball bleibt zweimal nicht liegen. Was muss der Spieler beim dritten Versuch tun?**\\n\\n✅ **Er spielt den Ball von der Stelle, an der er zur Ruhe kam (straflos).**\\n\\n📖 Wird ein auf die richtige Weise gedroppter Ball durch eine Person absichtlich abgelenkt oder aufgehalten (gleich ob innerhalb oder außerhalb des Erleichterungsbereichs), muss der Spieler erneut einen Ball nach Regel 14.3b droppen (Regel 14.3d).' },
    { keys: ['erleichterung'], antwort: '**Wo auf dem Platz ist straflose Erleichterung von ungewöhnlichen Platzverhältnissen (UPV) nicht zulässig?**\\n\\n✅ **Der Ball gilt als verloren, und der Spieler zieht zwei Strafschläge zu.**\\n\\n📖 Wenn bekannt oder so gut wie sicher ist, dass der Ball in oder auf einem beweglichen Hemmnis liegt, darf der Spieler straflose Erleichterung in Anspruch nehmen, wobei der geschätzte Punkt des Kreuzens der Hemmnisgrenze als Bezugspunkt verwendet wird (Regel 15.2b).' },
    { keys: ['regel 16', 'eingebettet', 'ball'], antwort: '**Wann gilt ein Ball als eingebettet im Sinne der Regel 16.3?**\\n\\n✅ **Drei Strafschläge.**\\n\\n📖 Die zusätzliche Erleichterungsmöglichkeit, außerhalb des Bunkers zu droppen (Erleichterung auf der Linie zurück nach Regel 19.2b), kostet insgesamt zwei Strafschläge (Regel 19.3b).' },
    { keys: ['ball'], antwort: '**Wie lange hat der Spieler maximal Zeit, nach seinem Ball zu suchen, bevor dieser als \'verloren\' gilt?**\\n\\n✅ **Sie dürfen wählen, welchen Ball Sie weiterspielen.**\\n\\n📖 Der provisorische Ball muss aufgegeben werden, und der Spieler muss dann mit einem Strafschlag Erleichterung für den unspielbaren Originalball nehmen (Regel 18.3c(3)).' },
    { keys: ['strafschlag', 'penalty', 'ball', 'erleichterung'], antwort: '**Ihr Ball liegt in einer Roten Penalty Area. Welche Erleichterungsoption mit einem Strafschlag steht Ihnen **nicht** zur Verfügung?**\\n\\n✅ **Der Spieler erhält einen Strafschlag und muss den ursprünglichen Ball spielen.**\\n\\n📖 Der provisorische Ball wird unter Strafe von Schlag und Distanzverlust zum Ball im Spiel des Spielers, wenn er von einer Stelle gespielt wird, die näher zum Loch liegt als die, an der der ursprüngliche Ball vermutet wird (Regel 18.3c(2)).' },
    { keys: ['zählspiel', 'regel 20'], antwort: '**Sie sind sich im Zählspiel unsicher über die Anwendung einer Regel. Ein Referee ist nicht verfügbar. Welche Option erlaubt Ihnen die Regel 20.1c, um Ihre Rechte zu schützen?**\\n\\n✅ **Die Partei zieht die Grundstrafe zu und muss den Fehler berichtigen.**\\n\\n📖 Der Schlag in der falschen Reihenfolge zieht die Grundstrafe (zwei Strafschläge) für die Partei nach sich, und der richtige Partner muss den Fehler berichtigen (Regel 22.3).' },
    { keys: ['verzögerung', 'stableford'], antwort: '**Sie spielen ein Stableford-Turnier und verstoßen gegen die Regel zur \'Unangemessenen Verzögerung\'. Was ist die Strafe für den ersten Verstoß an diesem Loch?**\\n\\n✅ **Es ist erlaubt, solange nur der Caddie den Gegenstand hinlegt.**\\n\\n📖 Die Regel 10.2b(3) wird für blinde Spieler so geändert, dass das Hinlegen eines Gegenstandes zur Hilfe bei der Ausrichtung straflos ist. Der Gegenstand muss aber entfernt werden, bevor der Schlag ausgeführt wird (Regel 25.2c).' },
    { keys: ['erleichterung', 'ball'], antwort: '**Ein Spieler benutzt eine Mobilitätshilfe auf Rädern und nimmt seitliche Erleichterung für einen unspielbaren Ball in Anspruch. Wie groß ist der Erleichterungsbereich?**\\n\\n✅ **Auf das Offizielle Handbuch zu den Golfregeln.**\\n\\n📖 Aufgrund des Copyright-Vertrages mit R&A Rules Limited ist bei Differenzen über die Auslegung der vom DGV erstellten Übersetzung in die deutsche Sprache auf die Fassung in englischer Sprache zurückzugreifen.' },
    { keys: ['ball', 'provisorisch'], antwort: '**Ein Spieler beginnt das Loch mit einem provisorischen Ball. Wann muss die Spielfolge der Gruppe beim nächsten Schlag eingehalten werden?**\\n\\n✅ **Grundstrafe, da Sie die Bodenoberfläche verändert haben.**\\n\\n📖 Die Bewegung ist straflos, wenn sie versehentlich beim Versuch, den Ball zu finden oder zu identifizieren, geschieht (Regel 7.4). Der Ball muss zurückgelegt werden.' },
    { keys: ['grün', 'ball'], antwort: '**Ein Ballmarker auf dem Grün wird versehentlich durch den Gegner bewegt. Was ist die Konsequenz?**\\n\\n✅ **Sie müssen einen Ball an der geschätzten Stelle spielen, an der er ohne Ablenkung zur Ruhe gekommen wäre.**\\n\\n📖 Wird ein Ball in Bewegung absichtlich abgelenkt, darf der Ball nicht gespielt werden, wie er liegt. Der Spieler muss Erleichterung in Anspruch nehmen, basierend auf der geschätzten Stelle, an der der Ball ohne Ablenkung zur Ruhe gekommen wäre (Regel 11.2c(1)).' },
    { keys: ['sand', 'ball', 'bunker'], antwort: '**Nachdem Sie Ihren Ball aus dem Bunker gespielt haben, harken Sie den Sand in der Nähe Ihrer Spiellinie ein. Der Ball liegt außerhalb des Bunkers. Ist dies erlaubt?**\\n\\n✅ **Sie erhalten einen Strafschlag und müssen den Schlag wiederholen.**\\n\\n📖 Trifft der Ball in Bewegung den Spieler oder die Ausrüstung versehentlich, ist dies straflos, und der Ball wird gespielt, wie er liegt (Regel 11.1a).' },
    { keys: ['caddie'], antwort: '**Ihr Caddie bemerkt, dass Sie sich falsch ausrichten und tritt wortlos aus dem beschränkten Bereich hinter Ihnen heraus. Was ist die Folge?**\\n\\n✅ **Der Ball des Spielers gilt als mit dem vorherigen Schlag eingelocht.**\\n\\n📖 Hebt der Gegner im Lochspiel absichtlich den über den Lochrand hinausragenden Ball des Spielers auf, bevor die Wartezeit endet, wird der Ball als mit dem vorherigen Schlag eingelocht behandelt (Regel 13.3b).' },
    { keys: ['sand', 'ball', 'bunker'], antwort: '**Der Ball eines Spielers ruht innerhalb der Grenzen eines Bunkers, berührt aber nur ein Stück Gras (und keinen Sand). Liegt der Ball im Bunker?**\\n\\n✅ **Grundstrafe (Lochverlust/Zwei Strafschläge).**\\n\\n📖 Ein Spieler darf den Ball nicht spielen, wie er liegt, wenn er durch ein falsches Grün beeinträchtigt ist. Die Strafe für das Spielen vom falschen Ort (Regel 13.1f) ist die Grundstrafe.' },
    { keys: ['erleichterung', 'ball', 'dropp'], antwort: '**Ein gedroppter Ball trifft den Spieler und kommt im Erleichterungsbereich zur Ruhe. Was muss der Spieler tun?**\\n\\n✅ **Ja, aber nur, wenn der Pfahl Ihre Spiellinie beeinträchtigt.**\\n\\n📖 Ein fest im Boden verankerter Gegenstand ist ein unbewegliches Hemmnis (Regel 16.1), das nicht entfernt werden darf. Der Spieler muss straflose Erleichterung in Anspruch nehmen.' },
    { keys: ['erleichterung', 'ball'], antwort: '**Ihr Ball liegt in einer großen Pfütze (zeitweiliges Wasser) im Fairway. Welche Bedingung muss der \'nächstgelegene Punkt vollständiger Erleichterung\' (NPE) nicht zwingend erfüllen?**\\n\\n✅ **Sie legen den Ball an die Stelle, an der er zuerst den Boden berührte.**\\n\\n📖 Kommt ein auf die richtige Weise gedroppter Ball außerhalb des Erleichterungsbereichs zur Ruhe, muss der Spieler ein zweites Mal einen Ball droppen. Erst wenn auch dieser außerhalb zur Ruhe kommt, wird er hingelegt (Regel 14.3c(2)).' },
    { keys: ['penalty', 'ball', 'erleichterung'], antwort: '**Sie spielen einen Ball. Es ist so gut wie sicher, dass er in einer Penalty Area liegt, er wird aber nicht gefunden. Wie viele Erleichterungsmöglichkeiten haben Sie?**\\n\\n✅ **Der ursprüngliche Ball ist nicht länger im Spiel und darf nicht gespielt werden.**\\n\\n📖 Sobald der Spieler einen anderen Ball mit Strafe von Schlag und Distanzverlust ins Spiel gebracht hat (auch wenn es ein provisorischer Ball war, der zum Ball im Spiel wurde), ist der ursprüngliche Ball nicht länger im Spiel und darf nicht gespielt werden (Regel 18.1).' },
    { keys: ['erleichterung', 'ball'], antwort: '**Ihr Ball ist unspielbar. Sie wählen die Option \'Seitliche Erleichterung\'. Wo wird der Erleichterungsbereich gemessen?**\\n\\n✅ **Wenn er einen Schlag ausführt, bevor er sich entscheidet, einen zweiten Ball zu spielen.**\\n\\n📖 Spielt der Spieler vom falschen Ort, muss er den Fehler berichtigen. Wenn er den Fehler nicht berichtigt, bevor er einen Schlag ausführt, um das nächste Loch zu beginnen (oder am letzten Loch, bevor er die Scorekarte einreicht), ist er disqualifiziert (Regel 14.7b(1)).' },
    { keys: ['scorekarte', 'zählspiel'], antwort: '**Sie spielen im Zählspiel mit zwei Bällen, da Sie unsicher über die Anwendung einer Regel sind. Was ist die Konsequenz, wenn Sie vergessen, dies der Spielleitung vor dem Einreichen der Scorekarte mitzuteilen?**\\n\\n✅ **Nur Spieler A erhält die Grundstrafe (zwei Strafschläge), da er einen falschen Ball gespielt hat.**\\n\\n📖 Wenn ein Spieler im Vierball den Ball des Partners als falschen Ball spielt, zieht sich nur dieser Spieler die Grundstrafe (zwei Strafschläge) zu. Der Schlag zählt nicht, und der Fehler muss berichtigt werden (Regel 23.9a(2) Ausnahme zu Regel 6.3c).' },
    { keys: ['scorekarte', 'stableford'], antwort: '**Sie spielen Stableford und geben auf einem Loch auf, da Sie das Zielergebnis überschritten haben. Was müssen Sie auf der Scorekarte eintragen?**\\n\\n✅ **Ein Strafschlag.**\\n\\n📖 Für Spieler mit Amputation, die aufgrund fehlender Gliedmaßen nicht in der Lage sind, die meisten Schläger ohne Verankerung zu schwingen, darf der Schlag verankert ausgeführt werden, ohne Strafe (Regel 25.3b).' },
    { keys: ['erleichterung', 'bunker', 'sand'], antwort: '**Welche Erleichterung gilt für einen blinden Spieler bezüglich der Berührung von Sand in einem Bunker?**\\n\\n✅ **Äußerer Einfluss.**\\n\\n📖 Ein Betreuer, der von der Spielleitung abgestellt wird, um Spielern mit intellektueller Beeinträchtigung zu helfen, ist im Sinne der Regeln ein Äußerer Einfluss. Er darf dem Spieler keine Beratung erteilen (Regel 25.5a).' },
    { keys: ['zählspiel', 'schläger'], antwort: '**Was ist die Strafe, wenn ein Spieler im Zählspiel seine Runde mit 15 Schlägern beginnt?**\\n\\n✅ **Zwei Strafschläge für jedes Loch, an dem der Schläger benutzt wurde.**\\n\\n📖 Der Spieler darf keinen Schläger hinzufügen oder ausleihen, der von einem oder für einen anderen Spieler, der auf dem Platz spielt, mitgeführt wird. Die Strafe für Verstoß ist die Disqualifikation (Regel 4.1b(4)).' },
    { keys: ['regel 5', 'grün', 'abschlag'], antwort: '**Nach Regel 5.5b ist das Üben von Putten oder Chippen nach Beendigung eines Lochs nur auf oder nahe dem Grün des zuletzt gespielten Lochs, jedem Übungsgrün und dem Abschlag des nächsten Lochs erlaubt. Welche Einschränkung gilt dabei?**\\n\\n✅ **Sie ziehen sich einen Strafschlag zu.**\\n\\n📖 Spielt der Spieler, wenn sein Gegner an der Reihe war, ist dies straflos, aber der Gegner hat das Recht, den Schlag für ungültig zu erklären (Regel 6.4a(2)).' },
    { keys: ['zählspiel', 'ball'], antwort: '**Was passiert, wenn ein Spieler im Zählspiel absichtlich den sich bewegenden Ball eines anderen Spielers ablenkt?**\\n\\n✅ **Grundstrafe, da der Spieler die Bewegung verursacht hat.**\\n\\n📖 Verursacht der Spieler (oder sein Caddie) die Bewegung des Balls in Ruhe, zieht er sich einen Strafschlag zu und muss den Ball zurücklegen (Regel 9.4b). Dies gilt nicht auf dem Abschlag oder Grün.' },
    { keys: ['zählspiel', 'ball'], antwort: '**Ihr Ball liegt in Ruhe. Ein äußerer Einfluss (z.B. ein Vogel oder ein anderer Ball im Zählspiel) bewegt Ihren Ball. Was ist die Folge?**\\n\\n✅ **Sie ziehen die Grundstrafe zu.**\\n\\n📖 Trifft der Ball in Bewegung versehentlich einen äußeren Einfluss (wie ein unbewegliches Hemmnis), ist dies straflos, und der Ball wird gespielt, wie er liegt (Regel 11.1a).' },
    { keys: ['zählspiel', 'ball'], antwort: '**Ihr Ball ragt über den Lochrand hinaus. Ein Mitspieler hebt ihn auf, nachdem er sich nach 5 Sekunden nicht bewegt hat. Was ist die Konsequenz im Zählspiel?**\\n\\n✅ **Grundstrafe (Zwei Strafschläge).**\\n\\n📖 Das absichtliche Berühren des Sandes, um den Zustand zu prüfen und dadurch Hinweise für den nächsten Schlag zu erhalten, ist verboten und zieht die Grundstrafe nach sich (Regel 12.2b(1)).' },
    { keys: ['grün'], antwort: '**Welche Art von Schäden auf dem Grün darf jederzeit ausgebessert werden?**\\n\\n✅ **Nein, da Sand generell kein loser hinderlicher Naturstoff ist.**\\n\\n📖 Sand oder loses Erdreich, die außerhalb des Bunkers liegen, dürfen straflos entfernt werden. Sand ist außerhalb des Bunkers kein fester Bestandteil (Regel 13.1c(1)).' },
    { keys: ['erleichterung', 'ball', 'dropp'], antwort: '**Ein Spieler nimmt Erleichterung auf der Linie zurück in Anspruch. Die Stelle, an der der Ball gedroppt wird, schafft einen Erleichterungsbereich. Wie groß ist dieser Bereich?**\\n\\n✅ **Sie müssen den Ball spielen, wie er liegt.**\\n\\n📖 Ein solches Loch ist ein Teil des Bodens in Ausbesserung (UPV). Der Spieler darf straflose Erleichterung in Anspruch nehmen (Regel 16.1).' },
    { keys: ['grün', 'ball'], antwort: '**Wann darf ein Spieler einen Ball, der außerhalb des Grüns aufgenommen wurde, reinigen?**\\n\\n✅ **Ein Strafschlag, da der Ball im Gelände bewegt wurde.**\\n\\n📖 Ameisenhügel sind lose hinderliche Naturstoffe. Verursacht das Entfernen eines losen hinderlichen Naturstoffs durch einen Spieler die Bewegung seines Balls außerhalb des Grüns, zieht er sich einen Strafschlag zu (Regel 15.1b, Regel 9.4b). Da Ameisenhügel jedoch auch als Tierloch gelten, kann straflose Erleichterung genommen werden.' },
    { keys: ['penalty', 'ball'], antwort: '**Sie spielen Ihren Ball in einer Penalty Area. Der Ball kommt in derselben Penalty Area zur Ruhe. Welche der folgenden Optionen steht Ihnen **nicht** zur Verfügung?**\\n\\n✅ **Die Grundstrafe plus Schlag und Distanzverlust.**\\n\\n📖 Die Erleichterung für einen unspielbaren Ball kostet immer einen Strafschlag, unabhängig von der gewählten Option (Schlag und Distanzverlust, Auf der Linie zurück, Seitliche Erleichterung) (Regel 19.2).' },
    { keys: ['grün', 'ball'], antwort: '**Wann ist es straflos, wenn Ihr Ball in Ruhe auf dem Grün versehentlich bewegt wird?**\\n\\n✅ **Nachdem der Ball den Bunker verlassen hat oder Sie Erleichterung außerhalb des Bunkers in Anspruch genommen haben.**\\n\\n📖 Nachdem ein Ball im Bunker gespielt wurde und sich außerhalb des Bunkers befindet oder der Spieler Erleichterung außerhalb des Bunkers genommen hat, darf der Spieler den Sand straflos zum Zweck der Platzpflege einebnen (Regel 12.2b(3)).' },
    { keys: ['ball'], antwort: '**Ihr Ball kommt zur Ruhe. Sie bemerken, dass er in einer Fuchsfährte liegt. Was ist die Konsequenz, wenn Sie die Fuchsfährte ausbessern?**\\n\\n✅ **Keine Strafe.**\\n\\n📖 Der Spieler zieht sich die Grundstrafe (zwei Strafschläge) zu und muss den Fehler berichtigen, indem er einen Ball von innerhalb des Abschlags spielt. Der falsch gespielte Schlag zählt nicht (Regel 6.1b(2)).' },
    { keys: ['penalty', 'erleichterung'], antwort: '**Welche Farbe wird verwendet, um Penalty Areas zu kennzeichnen, die eine zusätzliche seitliche Erleichterungsmöglichkeit bieten?**\\n\\n✅ **Der geschätzte Punkt, an dem der ursprüngliche Ball zuletzt die Grenze der PA kreuzte.**\\n\\n📖 Bei der Erleichterung \'auf der Linie zurück\' (Regel 17.1d(2)) ist der Bezugspunkt der geschätzte Punkt, an dem der ursprüngliche Ball zuletzt die Grenze der Penalty Area kreuzte. Von dort wird die Bezugslinie zum Loch gezogen.' },
    { keys: ['scorekarte', 'zählspiel'], antwort: '**Was geschieht, wenn ein Spieler im Zählspiel versehentlich eine Scorekarte mit einem **höheren** Lochergebnis als tatsächlich gespielt einreicht?**\\n\\n✅ **Der Schlag zählt und der Ball muss von der neuen Stelle gespielt werden.**\\n\\n📖 Beginnt sich der Ball in Ruhe zu bewegen, nachdem der Spieler den Schlag oder Rückschwung begonnen hat und den Schlag dann ausführt, darf der Ball nicht zurückgelegt werden. Der Schlag zählt, und der Ball muss von der Stelle gespielt werden, an der er zur Ruhe kommt (Regel 9.1b).' },
    { keys: ['sand', 'ball', 'bunker'], antwort: '**Ein Ball liegt im Gelände, aber seine Spiellinie zum Loch wird durch Sand eines Bunkers beeinträchtigt. Was dürfen Sie tun?**\\n\\n✅ **Die Stellung der Füße und des Körpers sowie die Stellung der Mobilitätshilfe.**\\n\\n📖 Für Spieler, die eine Mobilitätshilfe benutzen, wird die Definition des Begriffs \'Stand\' dahingehend geändert, dass er auch die Stellung der Mobilitätshilfe mit einschließt (Regel 25.4d).' },
    { keys: ['strafschlag', 'grün', 'ball'], antwort: '**Wird ein Ball, der außerhalb des Grüns aufgenommen wurde, gereinigt, obwohl dies nicht erlaubt ist, zieht sich der Spieler einen Strafschlag zu. Was muss er danach tun?**\\n\\n✅ **Grundstrafe, da Sie die Bedingungen verbessert haben.**\\n\\n📖 Das Entfernen eines losen hinderlichen Naturstoffs, das die Bewegung des Balls außerhalb des Grüns verursacht, zieht einen Strafschlag nach sich, und der Ball muss zurückgelegt werden (Regel 15.1b, Regel 9.4b).' },
    { keys: ['ball'], antwort: '**Ihr Ball kommt zur Ruhe in einem Teil des Geländes, das Sie für unspielbar halten. Wie lange haben Sie Zeit, um nach dem Ball zu suchen, bevor er als verloren gilt?**\\n\\n✅ **Partner A muss den Schlag erneut ausführen.**\\n\\n📖 Wird ein Schlag annulliert, wiederholt oder zählt er nach einer Regel nicht, muss derselbe Partner, der den Schlag ausgeführt hatte, den nächsten Schlag der Partei ausführen (Regel 22.3).' },
    { keys: ['penalty', 'ball', 'erleichterung'], antwort: '**Sie spielen Ihren Ball in einer Penalty Area. Der Ball ist unspielbar in einem Baum innerhalb der Penalty Area. Welche Erleichterungsoption steht Ihnen zur Verfügung?**\\n\\n✅ **Grundstrafe (Zwei Strafschläge).**\\n\\n📖 Nimmt der Spieler seinen Ball auf und vergisst, den Ballmarker vor dem Schlag zu entfernen, zieht er sich einen Strafschlag zu (Regel 14.1a).' },
    { keys: ['ball', 'flagge'], antwort: '**Was passiert, wenn der Ball in Bewegung den im Loch befindlichen Flaggenstock trifft, nachdem der Spieler ihn absichtlich in eine unzulässige Position bewegt hat?**\\n\\n✅ **Ein Strafschlag, da es sich um lose hinderliche Naturstoffe handelt.**\\n\\n📖 Die Bewegung ist straflos, wenn sie versehentlich beim Versuch, den Ball zu finden, geschieht. Der Ball muss an die ursprüngliche Stelle zurückgelegt werden (Regel 7.4).' },
];

var golfWissen = [
    { keys: ['wasser', 'teich', 'bach', 'see', 'fluss', 'rote', 'rot ', 'roten', 'lateral', 'seitlich', 'penalty', 'penaltybereich'], antwort: '**Roter Penaltybereich (Regel 17)**\n\n3 Optionen – je **1 Strafschlag**:\n\n1. **Schlag & Distanz** – vom letzten Ort neu spielen\n2. **Rückwärts auf der Linie** – beliebig weit hinter dem Bereich auf der Ball–Fahne-Linie\n3. **Seitliche Erleichterung** – innerhalb 2 Schlägerlängen vom Eintrittspunkt, nicht näher zur Fahne\n\n💡 Rote Markierung = **3 Optionen**, die seitliche Option ist der Unterschied zur gelben!' },
    { keys: ['gelbe', 'gelb ', 'gelben', 'gelber'], antwort: '**Gelber Penaltybereich (Regel 17)**\n\nNur **2 Optionen** – je **1 Strafschlag**:\n\n1. **Schlag & Distanz** – vom letzten Ort neu spielen\n2. **Rückwärts auf der Linie** – beliebig weit hinter dem Bereich auf Ball–Fahne-Linie\n\n⚠️ **Keine seitliche Erleichterung** bei gelber Markierung!\n\n💡 Merkhilfe: Gelb = nur 2 Optionen, Rot = 3 Optionen' },
    { keys: ['aus ', 'ins aus', 'ob ', 'out of bounds', 'weiße', 'weiss', 'weiß ', 'außerhalb', 'platzgrenze'], antwort: '**Out of Bounds – Aus (Regel 18)**\n\nWeiße Pfähle/Linien = **Platzgrenze**.\n\nBall vollständig außerhalb → **Schlag & Distanz**:\n- 1 Strafschlag + zurück zum letzten Ort neu spielen\n\n💡 **Provisorischen Ball spielen** wenn OB möglich – Zeit sparen!\n\nSeit 2019 gibt es eine optionale lokale Regel: Droppen nahe der Grenze gegen **2 Strafschläge** (prüfe ob dein Club diese nutzt)' },
    { keys: ['provisorisch', 'vorläufig', 'zweiten ball', 'zweiter ball', 'ersatzball'], antwort: '**Provisorischer Ball (Regel 18.3)**\n\nSpielen wenn Ball **möglicherweise OB oder verloren**.\n\n✅ **Ankündigung Pflicht:** Sage laut: *\'Ich spiele einen provisorischen Ball\'*\n\nErster Ball gefunden & im Spiel → provisorischer Ball aufnehmen\nErster Ball nicht gefunden → provisorischer Ball weiterspielen (1 Strafschlag)\n\n💡 Immer provisorisch spielen – spart Zeit und Laufen!' },
    { keys: ['verloren', 'nicht auffindbar', 'suchzeit', 'suche', '3 minuten', 'drei minuten', 'suchen', 'weg'], antwort: '**Verlorener Ball (Regel 18)**\n\n⏱️ Suchzeit: **3 Minuten** ab Beginn der Suche.\n\nNicht gefunden → **Schlag & Distanz**: 1 Strafschlag, zurück zum letzten Ort.\n\nSeit 2019 optionale lokale Regel: Droppen im Verlustbereich gegen **2 Strafschläge** – prüfe ob dein Club diese nutzt!\n\n💡 Bei möglichem Verlust immer **provisorischen Ball spielen**' },
    { keys: ['unspielbar', 'unspielbare', 'komme nicht ran', 'nicht spielbar', 'im dickicht', 'im gestrüpp', 'hinter baum', 'unter busch'], antwort: '**Unspielbare Lage (Regel 19)**\n\n3 Optionen – je **1 Strafschlag**:\n\n1. **Schlag & Distanz** – zurück zum letzten Ort\n2. **Rückwärts** – beliebig weit hinter dem Ball auf Ball–Fahne-Linie\n3. **Seitlich** – innerhalb 2 Schlägerlängen vom Ball, nicht näher zur Fahne\n\n⚠️ Im **Bunker**: Optionen 1 & 2 bleiben im Bunker – ODER außerhalb des Bunkers mit **2 Strafschlägen**' },
    { keys: ['bunker', 'sand ', 'sandbunker', 'sandhindernis'], antwort: '**Bunker-Regeln (Regel 12)**\n\n❌ **Verboten im Bunker:**\n- Sand vor dem Schlag absichtlich berühren\n- Schläger beim Adressieren aufsetzen\n- Sand ebnen vor dem Schlag\n- Lose Hemmnisse entfernen (außer Blätter seit 2019)\n\n✅ **Erlaubt:**\n- Sand nach dem Schlag glätten\n- Schläger locker halten beim Adressieren\n\n**Erleichterung:** 1 Strafschlag hinter Bunker, oder 2 Strafschläge außerhalb' },
    { keys: ['nasser bunker', 'wasser bunker', 'pfütze bunker', 'temporäres wasser bunker'], antwort: '**Temporäres Wasser im Bunker (Regel 16)**\n\nStraflose Erleichterung **innerhalb** des Bunkers:\nDroppe am trockensten Punkt im Bunker, 1 Schlägerlänge.\n\nODER mit **1 Strafschlag** außerhalb des Bunkers auf Ball–Fahne-Linie droppen.' },
    { keys: ['grün', 'putten', 'putt ', 'einlochen', 'fahne', 'flagge', 'loch '], antwort: '**Auf dem Grün (Regel 13)**\n\n✅ **Erlaubt:**\n- Ball markieren, aufheben und reinigen\n- Ballmarken & Pitchmarken ausbessern\n- Flagge stecken lassen (seit 2019 – kein Strafschlag)\n- Linie des Putts absuchen (nicht berühren)\n\n❌ **Verboten:**\n- Putlinie mit Fuß/Schläger testen\n- Sand oder loses Material auf Puttlinie wischen\n\n⚠️ Ball trifft ruhenden Ball auf Grün → **2 Strafschläge** (Zählspiel)' },
    { keys: ['trifft anderen', 'trifft ball', 'ball trifft', 'anderer ball grün', 'fremder ball grün'], antwort: '**Ball trifft ruhenden Ball auf dem Grün (Regel 11)**\n\n**Zählspiel:** 2 Strafschläge für den schlagenden Spieler. Getroffener Ball wird zurückgelegt.\n\n**Lochspiel:** Kein Strafschlag. Getroffener Ball zurücklegen, gespielter Ball bleibt wo er liegt.\n\n💡 Tipp: Auf dem Grün immer den Ball des Mitspielers **markieren lassen** bevor du puttest!' },
    { keys: ['pitchmarke', 'einschlagloch', 'ballmarke', 'delle grün', 'grün beschädigt'], antwort: '**Pitchmarken ausbessern (Regel 13.1c)**\n\n✅ Pitchmarken (Einschlaglöcher) auf dem Grün dürfen **ausgebessert** werden – kein Strafschlag.\n\nAuch erlaubt: Schäden durch Schuhe, alte Lochpositionen und Tierspuren ausbessern.\n\n🔧 Mit Pitchgabel oder Tee von außen nach innen arbeiten – nie nach oben ziehen!' },
    { keys: ['abschlag', 'tee ', 'teebox', 'aufteeen', 'auftee', 'außerhalb abschlag', 'falscher abschlag', 'außerhalb tee'], antwort: '**Abschlag-Regeln (Regel 6.1)**\n\nBall muss **zwischen** den Markierungen stehen (oder bis zu 2 Schlägerlängen dahinter).\n\nNur der Ball muss in der Teebox sein, nicht die Füße.\n\n**Ball fällt vom Tee:** Straflos neu aufteeen.\n\n**Falscher Abschlag** (Zählspiel): 2 Strafschläge + vom richtigen Abschlag neu spielen.\n\n💡 Farben: Schwarz/Gold=Pro, Blau=Herren, Weiß=Standard, Gelb/Rot=Damen/Senioren' },
    { keys: ['dropp', 'drop ', 'erleichterung', 'fallen lassen', 'kniehöhe', 'schlägerlänge'], antwort: '**Dropping-Regeln (Regel 14.3)**\n\nSeit 2019: Ball aus **Kniehöhe** fallen lassen (früher Schulterhöhe).\n\n📏 **Relief Area:**\n- **1 Schlägerlänge:** Standard-Erleichterung\n- **2 Schlägerlängen:** Laterale/seitliche Erleichterung\n\nBall muss in der Relief Area zur Ruhe kommen.\nRollt er heraus: nochmals droppen → dann platzieren.' },
    { keys: ['pfütze', 'temporäres wasser', 'casual water', 'nach regen', 'nasse stelle', 'matsch', 'schlammig'], antwort: '**Temporäres Wasser (Regel 16)**\n\nPfützen die beim Auftreten sichtbar werden = temporäres Wasser.\n\n✅ **Straflose Erleichterung:**\nDroppe am nächsten trockenen Punkt, innerhalb **1 Schlägerlänge**, nicht näher zur Fahne.\n\nGilt auch für:\n- Ball der in Wasser liegt\n- Stance im Wasser (auch ohne Ball drin)\n- Auf dem Grün: nächste trockene Stelle' },
    { keys: ['beweglich', 'papier', 'dose', 'schild', 'rechen', 'harke', 'entfernen hindernis'], antwort: '**Bewegliche Obstruktion (Regel 15.2)**\n\nKünstliche Gegenstände die bewegt werden können (Papier, Rechen, Schilder, Dosen):\n\n✅ Einfach **entfernen** – kein Strafschlag!\n\nBall bewegt sich dabei: straflos zurücklegen.\n\n💡 Natürliche Dinge (Blätter, Äste, Steine) = Lose Hemmnisse – ebenfalls entfernbar!' },
    { keys: ['sprinkler', 'weg ', 'pfad', 'brücke', 'gebäude', 'unbeweglich', 'bewässerung', 'betonweg', 'asphalt'], antwort: '**Unbewegliche Obstruktion (Regel 16.1)**\n\nSprinkler, Wege, Gebäude, Brücken:\n\n✅ **Straflose Erleichterung** wenn Obstruktion:\n- Den Stand behindert\n- Im Schwungbereich liegt\n- Auf der Spiellinie liegt (nur auf dem Grün)\n\nDroppe innerhalb **1 Schlägerlänge** vom nächsten Punkt ohne Behinderung, nicht näher zur Fahne.' },
    { keys: ['tier', 'maulwurf', 'kaninchen', 'vogel', 'nest', 'tierbau', 'tierloch', 'ameisen', 'wespen'], antwort: '**Tierbauten (Regel 16.1)**\n\nBall in oder auf Tierbau (Maulwurf, Kaninchen, Vogel etc.):\n\n✅ **Straflose Erleichterung:**\nDroppe am nächsten Punkt ohne Behinderung, innerhalb **1 Schlägerlänge**, nicht näher zur Fahne.\n\nGilt auch wenn der Tierbau deinen Stand beeinträchtigt!' },
    { keys: ['gur', 'ground under repair', 'ausbesserung', 'reparatur', 'boden in ausbesserung', 'weiße linie rasen'], antwort: '**Ground Under Repair – GUR (Regel 16)**\n\nAls GUR markierte Bereiche (weiße Linien oder Schilder):\n\n✅ **Straflose Erleichterung** immer möglich.\n\n**Pflichtige Erleichterung** wenn lokale Regel dies vorschreibt:\nDroppe am nächsten Punkt ohne Behinderung, innerhalb **1 Schlägerlänge**.\n\n💡 Du kannst auch im GUR spielen wenn keine Pflicht besteht – aber wozu?' },
    { keys: ['markierung', 'pfahl', 'pfähle', 'linie bedeutet', 'was bedeutet', 'farbe platz'], antwort: '**Platz-Markierungen Übersicht**\n\n🟡 **Gelb** = Penaltybereich\n→ 2 Optionen: Schlag & Distanz ODER rückwärts\n\n🔴 **Rot** = Lateraler Penaltybereich\n→ 3 Optionen: + seitlich 2 Schlägerlängen\n\n⚪ **Weiß** = Out of Bounds (Aus)\n→ Nur Schlag & Distanz\n\n⬜ **Weiße Linie auf Rasen** = GUR\n→ Straflose Erleichterung\n\n🔵 **Blau** = Lokalregel (je Platz verschieden)' },
    { keys: ['falscher ball', 'wrong ball', 'fremder ball', 'anderen ball gespielt', 'verwechselt'], antwort: '**Falscher Ball (Regel 6.3)**\n\n**Zählspiel:** 2 Strafschläge – zurück und mit richtigem Ball weiterspielen.\n**Lochspiel:** Lochverlust.\n\n⚠️ Nicht zählen die Schläge mit dem falschen Ball!\n\n💡 **Tipp:** Ball immer vor dem Schlag identifizieren – Marke oder Seriennummer merken!' },
    { keys: ['ball bewegt', 'ball verschoben', 'ball angestossen', 'ball weggerollt', 'adressiert ball'], antwort: '**Bewegter Ball (Regel 9)**\n\nBall bewegt sich nach dem Adressieren:\n- **Seit 2019:** Kein automatischer Strafschlag mehr!\n- Strafschlag nur wenn du den Ball absichtlich bewegt hast\n\nBall durch Wind bewegt: **Kein Strafschlag**, von neuer Position spielen.\n\nBall durch Mitspieler bewegt: Straflos zurücklegen.' },
    { keys: ['eingebettet', 'plugged', 'eingebuddet', 'im einschlagloch', 'steckt im boden'], antwort: '**Eingebetteter Ball (Regel 16.3)**\n\nBall liegt eingebettet in eigenem Einschlagloch auf **kurzem Rasen** (Fairway, Rough):\n\n✅ **Straflose Erleichterung:**\nBall aufheben, reinigen, innerhalb **1 Schlägerlänge** direkt neben dem Einschlagloch droppen.\n\n⚠️ Im Bunker oder Grün gilt diese Regel NICHT.' },
    { keys: ['blätter', 'ast', 'stein', 'zapfen', 'lose', 'natürlich', 'hemmnisse', 'entfernen natur'], antwort: '**Lose Hemmnisse (Regel 15.1)**\n\nNatürliche Gegenstände die nicht befestigt sind (Blätter, Äste, Steine, Tannenzapfen):\n\n✅ Überall entfernbar – kein Strafschlag!\n\n**Ausnahme:** Im Bunker (Sand nicht berühren) und wenn das Entfernen den Ball bewegt (dann zurücklegen).\n\n💡 Tipp: Vorsichtig entfernen damit der Ball nicht rollt!' },
    { keys: ['14 schläger', 'wie viele schläger', 'anzahl schläger', 'zu viele schläger', 'schläger limit'], antwort: '**Maximale Schlägeranzahl (Regel 4.1)**\n\nMaximal **14 Schläger** erlaubt.\n\nÜberschreitung:\n- Zählspiel: **2 Strafschläge** pro Loch (max. 4 pro Runde)\n- Lochspiel: Lochverlust pro Loch (max. 2 Löcher)\n\nSchläger darf während Runde **nicht ersetzt** werden (außer defekt durch normales Spiel).\n\n💡 Vor der Runde Schläger zählen!' },
    { keys: ['schläger defekt', 'schläger kaputt', 'beschädigt', 'gebrochen', 'wut schläger', 'schläger verbogen'], antwort: '**Beschädigter Schläger (Regel 4.1a)**\n\nDurch **normales Spiel** beschädigt:\n✅ Schläger weiterverwenden ODER ersetzen erlaubt\n\nDurch **eigene Schuld** (Wut, Absicht) beschädigt:\n❌ Nicht ersetzen – aber weiterverwenden erlaubt\n\n💡 Selbst ein verbogener Schläger darf in der Runde weiterverwendet werden!' },
    { keys: ['ball wechseln', 'neuen ball', 'ball beschädigt', 'ball kaputt', 'ball kratzer', 'anderen ball'], antwort: '**Ball wechseln (Regel 4.2)**\n\n✅ **Erlaubt** wenn Ball sichtbar beschädigt ist (Schnitt, Delle, Knick).\n\n**Procedure:** Mitspieler informieren, Ball zeigen, neuen Ball an selber Stelle.\n\n❌ Nicht erlaubt nur weil Ball schmutzig oder nass – nur auf dem Grün!\n\n💡 Zwischen Löchern darf immer ein neuer Ball verwendet werden.' },
    { keys: ['stableford', 'punkte system', 'netto punkte', 'stableford punkte'], antwort: '**Stableford-System (Regel 21.1)**\n\nPunkte pro Loch:\n- 3+ über Par: **0 Punkte**\n- Doppelbogey (2 über): **0 Punkte**\n- Bogey (1 über): **1 Punkt**\n- Par: **2 Punkte**\n- Birdie (1 unter): **3 Punkte**\n- Eagle (2 unter): **4 Punkte**\n- Albatross (3 unter): **5 Punkte**\n\nBei Netto-Stableford werden Vorgabeschläge (HCP-Striche) pro Loch abgezogen.' },
    { keys: ['lochspiel', 'match play', 'matchplay', 'loch gewinnen', 'loch verloren'], antwort: '**Lochspiel (Regel 3)**\n\nJedes Loch einzeln: Wer weniger Schläge braucht gewinnt das Loch.\n\nErgebnis: \'3 & 2\' = 3 Löcher Vorsprung, 2 Löcher zu spielen.\n\n**Strafen im Lochspiel = Lochverlust** (statt Strafschläge wie im Zählspiel).\n\n💡 Man kann ein Loch **schenken** – im Zählspiel nicht möglich!' },
    { keys: ['zählspiel', 'strokeplay', 'brutto', 'netto zählen', 'schläge zählen'], antwort: '**Zählspiel (Regel 3)**\n\nAlle Schläge über alle 18 Löcher werden gezählt.\n\n**Brutto:** Gesamtschläge ohne Abzug\n**Netto:** Brutto minus Course Handicap\n\nWichtig: Alle Strafschläge müssen eingetragen werden!\n\n**Nicht eingelochter Ball:** Disqualifikation für das Loch (max. Doppelbogey bei Stableford)' },
    { keys: ['scramble', 'texas scramble', 'team', 'vierer', 'foursome', 'foursomes'], antwort: '**Team-Formate**\n\n**Scramble:** Alle spielen, besten Ball wählen, alle spielen von dort weiter.\n\n**Vierer/Foursomes:** 2 Spieler, 1 Ball, abwechselnd spielen.\n\n**Greensomes:** Beide schlagen ab, besten Ball wählen, dann abwechselnd.\n\n**Besserball:** Jeder spielt seinen Ball, besseres Ergebnis zählt.' },
    { keys: ['handicap', 'hcp', 'vorgabe', 'stammvorgabe', 'spielvorgabe', 'index'], antwort: '**World Handicap System (WHS)**\n\n**Handicap Index** = Durchschnitt der besten 8 deiner letzten 20 Runden.\n\n**Course Handicap** für einen Platz:\nHandicap Index × (Slope ÷ 113) + (Course Rating − Par)\n\n**Score Differential:**\n(113 ÷ Slope) × (Bruttoergebnis − Course Rating)\n\n💡 Nutze den **HCP-Rechner** in dieser App für deine Golfclubs!' },
    { keys: ['eagle', 'birdie', 'bogey', 'albatross', 'condor', 'par bedeutet', 'unter par', 'über par'], antwort: '**Golf-Schlagzahl Begriffe**\n\n🏆 **Condor:** 4 unter Par (extrem selten!)\n⭐ **Albatross:** 3 unter Par\n🦅 **Eagle:** 2 unter Par\n🐦 **Birdie:** 1 unter Par\n✅ **Par:** Sollschlagzahl\n➕ **Bogey:** 1 über Par\n➕➕ **Double Bogey:** 2 über Par\n➕➕➕ **Triple Bogey:** 3 über Par' },
    { keys: ['fairway', 'rough ', 'semi-rough', 'dogleg', 'doglegg', 'par 3', 'par 4', 'par 5'], antwort: '**Platz-Begriffe**\n\n🟩 **Fairway:** Kurzgemähter Bereich zwischen Abschlag und Grün\n🌿 **Rough:** Hohes Gras neben dem Fairway\n🏜️ **Bunker:** Sandhindernis\n💧 **Penaltybereich:** Wasser und andere Hindernisse\n🐢 **Dogleg:** Kurvender Fairway (links/rechts)\n📏 **Par 3/4/5:** Sollschlagzahl des Lochs' },
    { keys: ['hcp striche', 'vorgabeschläge', 'stroke index', 'si ', 'si1', 'si 1', 'wer bekommt strich'], antwort: '**Vorgabeschläge / HCP-Striche**\n\nAuf der Scorekarte steht der **Stroke Index (SI)** pro Loch (1-18).\n\nSI 1 = schwierigsten Loch → bekommt als erstes einen Strich.\n\nBeispiel: Course Handicap 18 = auf jedem Loch 1 Strich.\nCourse Handicap 9 = auf den 9 schwierigsten Löchern je 1 Strich.\n\n💡 Im Stableford zählt immer das **Netto-Ergebnis** (Brutto minus Striche).' },
    { keys: ['slow play', 'spieltempo', 'zu langsam', 'aufholen', 'marshal', 'zeit'], antwort: '**Spieltempo (Regel 5.6)**\n\n⏱️ Pro Schlag max. **40 Sekunden** (Empfehlung).\n\nBei Aufforderung durch Marshal: sofort aufholen.\n\n**Strafen bei Zeitverzögerung:**\n- 1. Verstoß: Verwarnung\n- 2. Verstoß: 1 Strafschlag\n- Weitere: Disqualifikation möglich\n\n💡 **Tipp:** Schon beim Gehen zur Kugel die Situation analysieren – nicht erst beim Ball!' },
    { keys: ['honor', 'ehre', 'wer zuerst', 'reihenfolge', 'first to play', 'wer schlägt zuerst', 'spielreihenfolge'], antwort: '**Spielreihenfolge (Regel 6.4)**\n\n**Am Abschlag:**\nSpieler mit niedrigstem Score am vorherigen Loch hat \'die Ehre\' (Honor).\n\n**Im Spiel:**\nImmer der Spieler der am weitesten vom Loch entfernt ist.\n\n**Ready Golf:** Im freundschaftlichen Spiel erlaubt – einfach spielen wenn bereit.\n\n💡 Im Lochspiel kann Reihenfolge taktisch genutzt werden!' },
    { keys: ['muss ich einlochen', 'ball aufnehmen', 'gimme', 'geschenkt', 'zählt es'], antwort: '**Einlochen (Regel 3)**\n\n**Zählspiel:** Du MUSST immer einlochen – kein Gimme erlaubt!\n\n**Lochspiel:** Ein Loch kann \'geschenkt\' werden. Mitspieler kann kurze Putts schenken.\n\n💡 Im Zählspiel jeden kurzen Putt einlochen – Strafschläge für nicht eingelochten Ball!' },
    { keys: ['disqualifikation', 'dq ', 'disqualifiziert', 'aus dem turnier', 'gestrichen'], antwort: '**Disqualifikation (Regel 1.2)**\n\nHäufige DQ-Gründe:\n❌ Scorekarte nicht unterschrieben\n❌ Falsches Ergebnis eingetragen (zu niedrig)\n❌ Falscher Abschlag ohne Korrektur\n❌ Regelverstoß nicht deklariert\n❌ Verspätung über 5 Minuten zum Start\n❌ Absichtliche Regelaushöhlung\n\n💡 Immer Scorekarte prüfen bevor du sie abgibst!' },
    { keys: ['scorekarte', 'scorecard', 'unterschreiben', 'eintragen', 'score abgeben', 'falsches ergebnis'], antwort: '**Scorekarte (Regel 3.3)**\n\n✅ **Pflichten:**\n- Ergebnis jedes Lochs eintragen\n- Scorekarte **unterschreiben**\n- Marker (Mitspieler) unterschreibt ebenfalls\n- Karte rechtzeitig abgeben\n\n⚠️ **Zu niedriges Ergebnis:** Disqualifikation!\n⚠️ **Zu hohes Ergebnis:** Bleibt so stehen (eigene Schuld)' },
    { keys: ['gewitter', 'blitz', 'unwetter', 'spielunterbrechung', 'horn', 'sirene', 'unterbrechung signal'], antwort: '**Spielunterbrechung (Regel 5.7)**\n\n🔔 **Signale:**\n- 1 langer Ton = sofortige Unterbrechung (Gefahr)\n- 3 kurze Töne = Unterbrechung (kein Danger)\n- 2 kurze Töne = Spiel fortsetzen\n\n⚡ **Bei Blitz:** SOFORT unterbrechen, Schutz suchen!\nMetallschläger nicht in die Luft halten.\n\n💡 Ball darf markiert werden, Position merken.' },
    { keys: ['hut', 'mütze', 'kappe', 'kleidung', 'dress code', 'dresscode', 'schuhe', 'spike', 'handschuh', 'outfit'], antwort: '**Kleidung auf dem Golfplatz**\n\n👒 **Hut/Kappe:** Keine Regelvorschrift, aber viele Clubs verlangen ihn.\n\n👟 **Schuhe:** Die meisten Clubs fordern **Softspikes** (keine Metallspikes mehr).\n\n🧤 **Handschuh:** Beliebig viele erlaubt – kein Limit.\n\n👕 **Dress Code:** Meist Kragen am Shirt, keine Jeans. Vor der Runde beim Club prüfen!\n\n💡 Immer die Hausordnung des Clubs beachten.' },
    { keys: ['etikette', 'benehmen', 'verhalten', 'rücksicht', 'ruhe', 'handy', 'telefon', 'störung'], antwort: '**Golf-Etikette**\n\n🤫 **Ruhe** beim Schlag der Mitspieler\n📵 **Handy** auf lautlos oder aus\n🚶 **Vor** dem Spieler gehen – nie hinter ihm stehen\n🟩 **Divots** wieder einlegen, Pitchmarken ausbessern\n🏜️ **Bunker** nach dem Spiel harken\n⚡ **Tempo:** Bei Rückstand Feld durchlassen\n🛒 **Trolley/Buggy:** Nicht auf Abschlag und Grün fahren' },
    { keys: ['schwung', 'slice', 'hook', 'fade', 'draw', 'ball fliegt rechts', 'ball fliegt links', 'schwungfehler'], antwort: '**Häufige Schlagfehler**\n\n**Slice** (Ball fliegt nach rechts bei Rechtshänder):\n→ Clubface offen, Außen-nach-Innen-Schwung\n→ Grip lockern, Schulterrotation verbessern\n\n**Hook** (Ball fliegt nach links):\n→ Clubface geschlossen, Innen-nach-Außen-Schwung\n→ Handgelenk beim Impact prüfen\n\n💡 Videotipp: Video Academy in dieser App!' },
    { keys: ['chip', 'chippen', 'kurzes spiel', 'rund ums grün', 'bump and run'], antwort: '**Chip-Technik**\n\n⚙️ **Grundposition:**\n- Enger Stand, Ball mittig bis leicht hinten\n- Gewicht **60-70% auf Vorderfuß**\n- Hände vor dem Ball (Shaft Lean)\n\n🎯 **Bewegung:**\n- Kurze Schulter-Pendel-Bewegung\n- Kein aktives Handgelenk\n- Gleichmäßige Beschleunigung\n\n💡 **Schlägerauswahl:** Je nach Landeposition PW, 9, 8 oder 7-Eisen' },
    { keys: ['putt', 'putten', 'putting', 'auf dem grün schlagen', 'linien lesen'], antwort: '**Putt-Technik**\n\n👁️ **Augen über dem Ball** – Kopf ruhig halten\n\n🎯 **Schulter-Pendel:**\nNur Schultern bewegen, keine Arme oder Handgelenke!\n\n📏 **Linie lesen:**\n- Von hinter dem Ball lesen\n- Gefälle & Brechung einschätzen\n- Putterlänge = Distanz × Faktor\n\n💡 **Praxis:** Auf einer Uhr putten – vom Ball in alle Richtungen, 1 Meter Distanz' },
    { keys: ['aufwärmen', 'warm up', 'vorbereitung runde', 'vor der runde', 'stretching golf'], antwort: '**Aufwärmen vor der Runde**\n\n1️⃣ **Stretching** (10 Min): Hüfte, Schultern, Rücken\n2️⃣ **Putting-Grün:** Lange Putts für Distanzgefühl\n3️⃣ **Chipping:** Kurze Eisen, Gefühl aufbauen\n4️⃣ **Range:** Kurz → Mittel → Driver\n5️⃣ **Letztes:** Nochmals Putting\n\n⚠️ Nicht mit dem Driver anfangen – Verletzungsgefahr!\n💡 Ziel: Rhythmus finden, nicht Bestleistung üben' },
    { keys: ['bunker schlagen', 'aus bunker', 'sand schlagen', 'explosionsschlag', 'explosion'], antwort: '**Bunker-Technik**\n\n⚙️ **Grundposition:**\n- Füße in den Sand eingraben (Stabilität)\n- Ball **vorne** im Stand (linke Ferse)\n- Clubface leicht **öffnen**\n- Gewicht leicht vorne\n\n🎯 **Schlag:**\n- Ca. **5 cm hinter** dem Ball eintreten\n- Durch den Sand schwingen – Ball wird rausgeschaufelt\n- Keine \'Schaufelwirkung\' – Durchschwingen!\n\n💡 Mehr Loft = mehr Bunkersand = weicherer Aufprall' },
];



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
// LOKALE REGELKARTEI
// ─────────────────────────────────────────────

// ─────────────────────────────────────────────
// GOOGLE MAPS
// ─────────────────────────────────────────────


// ─────────────────────────────────────────────
// HANDICAP RECHNER


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
// LOKALE REGELKARTEI
// ─────────────────────────────────────────────
function caddieAntwort(frage) {
    var f = frage.toLowerCase();

    if (f.includes('wasser') || f.includes('hindernis') || f.includes('penalty area')) {
        return '**Ball im Penaltybereich (Regel 17)**\n\n' +
            'Du hast **3 Optionen** (je 1 Strafschlag):\n\n' +
            '1. **Schlag und Distanz** – Spiele vom Ort des letzten Schlags erneut\n' +
            '2. **Rückwärts auf der Linie** – Stelle auf der Linie zwischen Fahne und Eintrittspunkt des Balls auf (beliebige Entfernung hinter dem Penaltybereich)\n' +
            '3. **Seitliche Erleichterung** (nur rote Markierung) – Droppe innerhalb 2 Schlägerlängen vom Eintrittspunkt, nicht näher zur Fahne\n\n' +
            '**Tipp:** Bei gelber Markierung entfällt Option 3.';
    }
    if (f.includes('unspielbar')) {
        return '**Unspielbare Lage (Regel 19)**\n\n' +
            'Du hast **3 Optionen** (je 1 Strafschlag):\n\n' +
            '1. **Schlag und Distanz** – Zurück zum Ort des letzten Schlags\n' +
            '2. **Rückwärts auf der Linie** – Beliebig weit hinter dem Ball auf der Linie Ball–Fahne\n' +
            '3. **Seitliche Erleichterung** – Droppe innerhalb 2 Schlägerlängen vom Ball, nicht näher zur Fahne\n\n' +
            '**Ausnahme:** Im Bunker? Dann nur Optionen 1 & 2 (oder mit 2 Strafschlägen außerhalb).';
    }
    if (f.includes('nicht auffindbar') || f.includes('verloren') || f.includes('suche') || f.includes('such')) {
        return '**Verlorener Ball (Regel 18)**\n\n' +
            '**Suchzeit:** Du hast **3 Minuten** ab Beginn der Suche.\n\n' +
            'Wird der Ball nicht gefunden:\n' +
            '**Schlag und Distanz** – 1 Strafschlag, zurück zum Ort des letzten Schlags.\n\n' +
            '**Seit 2019:** Lokale Regel erlaubt alternativ das Droppen im Bereich wo der Ball verloren ging (2 Strafschläge) – prüfe ob dein Club diese Regel nutzt.';
    }
    if (f.includes('grün') && (f.includes('trifft') || f.includes('berührt') || f.includes('anderer ball'))) {
        return '**Ball trifft Ball auf dem Grün (Regel 11.1)**\n\n' +
            'Im **Zählspiel:** 2 Strafschläge für den Spieler dessen Ball den ruhenden Ball trifft. Beide Bälle werden zurückgelegt.\n\n' +
            'Im **Lochspiel:** Kein Strafschlag. Der getroffene Ball wird zurückgelegt, dein Ball bleibt liegen wo er ist.\n\n' +
            '**Tipp:** Auf dem Grün immer den Ball des Mitspielers markieren lassen bevor du puttest!';
    }
    if (f.includes('bunker') || f.includes('sand')) {
        return '**Bunker-Regeln (Regel 12)**\n\n' +
            '**Im Bunker nicht erlaubt:**\n' +
            '- Sand vor dem Schlag berühren (Testschlag)\n' +
            '- Schläger in den Sand aufsetzen (Adresse)\n' +
            '- Lose Hemmnisse entfernen (außer ab 2019 erlaubt)\n\n' +
            '**Erleichterung aus Bunker:**\n' +
            '- 1 Strafschlag: Droppe hinter dem Bunker auf Ball–Fahne Linie\n' +
            '- 2 Strafschläge: Schlag und Distanz (verlasse Bunker)';
    }
    if (f.includes('obstruktion') || f.includes('pfahl') || f.includes('sprinkler') || f.includes('hindernis')) {
        return '**Bewegliche/Unbewegliche Obstruktion (Regel 15/16)**\n\n' +
            '**Beweglich** (z.B. Papier, Rechen): Einfach entfernen – kein Strafschlag.\n\n' +
            '**Unbeweglich** (z.B. Sprinkler, Weg): Straflose Erleichterung.\n' +
            'Droppe innerhalb 1 Schlägerlänge vom nächsten Punkt ohne Behinderung, nicht näher zur Fahne.';
    }
    if (f.includes('handicap') || f.includes('hcp') || f.includes('vorgabe')) {
        return '**Handicap Berechnung (World Handicap System)**\n\n' +
            'Dein **Handicap Index** basiert auf den besten 8 deiner letzten 20 Runden.\n\n' +
            '**Score Differential** = (113 / Slope) × (Bruttoergebnis – Course Rating)\n\n' +
            'Das **Course Handicap** für einen Platz:\n' +
            'Handicap Index × (Slope / 113) + (Course Rating – Par)\n\n' +
            '**Tipp:** Nutze den HCP-Rechner in dieser App für deinen genauen Wert!';
    }
    if (f.includes('drop') || f.includes('droppen') || f.includes('erleichterung')) {
        return '**Dropping-Regeln (Regel 14.3)**\n\n' +
            '**Seit 2019:** Ball wird aus **Kniehöhe** fallengelassen (früher Schulterhöhe).\n\n' +
            '**Relief Area:**\n' +
            '- 1 Schlägerlänge: bei den meisten Erleichterungen\n' +
            '- 2 Schlägerlängen: bei lateraler Erleichterung\n\n' +
            'Der Ball muss in der Relief Area zur Ruhe kommen. Rollt er heraus, wird er platziert.';
    }
    if (f.includes('ausrüstung') || f.includes('schläger') || f.includes('ball') && f.includes('beschädigt')) {
        return '**Beschädigte Ausrüstung (Regel 4)**\n\n' +
            '**Beschädigter Schläger:**\n' +
            '- Durch normales Spiel beschädigt: weiter verwenden erlaubt\n' +
            '- Durch Wut/Missbrauch beschädigt: nicht ersetzen, aber weiter verwenden\n\n' +
            '**Max. 14 Schläger:** Überschreitung = 2 Strafschläge pro Loch (max. 4/Runde)\n\n' +
            '**Ball wechseln:** Erlaubt wenn sichtbar beschädigt (Schnitt, Delle) – Mitspieler informieren!';
    }

    // Allgemeine Antwort
    return '**Golfregeln 2023–2027**\n\n' +
        'Für diese Frage kann ich dir folgende Regelthemen empfehlen:\n\n' +
        '⛳ Tippe auf einen der Vorschläge unten\n' +
        '💧 Ball im Wasser\n' +
        '🚫 Unspielbare Lage\n' +
        '🔍 Ball nicht auffindbar\n' +
        '🏌️ Bunker-Regeln\n\n' +
        '**Oder stelle deine Frage genauer** – ich helfe dir sofort!';
}

// ─────────────────────────────────────────────
// GOOGLE MAPS
// ─────────────────────────────────────────────


// ─────────────────────────────────────────────
// HANDICAP RECHNER


// ─────────────────────────────────────────────
// WETTER (Open-Meteo API – kostenlos, kein Key)
// ─────────────────────────────────────────────


// ─────────────────────────────────────────────
// KI-CADDIE
// ─────────────────────────────────────────────
var caddieHistory = [];

function goToCaddie() {
    showScreen('caddie-screen');
    var saved = localStorage.getItem('cp_final_elite_v10');
    var n = saved ? JSON.parse(saved).name : '';
    var el = document.getElementById('caddie-welcome-name');
    if (el && n) el.innerText = 'Hallo ' + n + ', dein KI-Caddie!';
}

function clearCaddie() {
    caddieHistory = [];
    var msgs = document.getElementById('caddie-messages');
    if (!msgs) return;
    var wraps = msgs.querySelectorAll('.caddie-msg-wrap');
    wraps.forEach(function(w) { w.remove(); });
    var wb = document.getElementById('caddie-welcome-box');
    if (wb) wb.style.display = 'block';
}

function askSuggestion(btn) {
    document.getElementById('caddie-input').value = btn.innerText;
    sendCaddie();
}

function sendCaddie() {
    var input = document.getElementById('caddie-input');
    if (!input) return;
    var text = input.value.trim();
    if (!text) return;
    input.value = '';

    var wb = document.getElementById('caddie-welcome-box');
    if (wb) wb.style.display = 'none';

    addCaddieMsg('user', text);
    caddieHistory.push({ role: 'user', content: text });

    // Lokale Regelkartei – sofortige Antwort
    var answer = caddieAntwort(text);
    caddieHistory.push({ role: 'assistant', content: answer });
    addCaddieMsg('assistant', answer);
    scrollCaddie();
}

function addCaddieMsg(role, text, id) {
    var msgs = document.getElementById('caddie-messages');
    if (!msgs) return;
    var wrap = document.createElement('div');
    wrap.className = 'caddie-msg-wrap caddie-msg-' + role;
    var bubble = document.createElement('div');
    bubble.className = 'caddie-bubble';
    if (id) bubble.id = id;
    bubble.innerHTML = formatCaddieText(text);
    wrap.appendChild(bubble);
    msgs.appendChild(wrap);
    scrollCaddie();
}

function scrollCaddie() {
    var body = document.querySelector('.caddie-body');
    if (body) body.scrollTop = body.scrollHeight;
}

function formatCaddieText(text) {
    if (!text) return '';
    var r = text.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>');
    r = r.replace(/\*([^*]+)\*/g, '<em>$1</em>');
    r = r.split("\n").join("<br>");
    return r;
}

document.addEventListener('DOMContentLoaded', function() {
    var inp = document.getElementById('caddie-input');
    if (inp) {
        inp.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault();
                sendCaddie();
            }
        });
    }
});