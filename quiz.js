// ====================================================================================
// TEIL 1: FRAGENKATALOG (Insgesamt 70 Fragen)
// ====================================================================================

const quizDataOriginal = [
    // --------------------------------------------------------------------------------
    // R1-4: GRUNDLAGEN, AUSRÜSTUNG (5 Fragen)
    // --------------------------------------------------------------------------------
    {
        "id": "I.1",
        "section": "I. Grundlagen & Ausrüstung (Regeln 1-4)",
        "question": "Wann fallen im Zählspiel nach Regel 1.3c(4) mehrere Strafen für den Verstoß gegen mehrere Regeln an?",
        "image_query": "Golfregel Strafen",
        "options": [
            "Wenn gegen Regeln mit unterschiedlichem Strafmaß verstoßen wird.",
            "Wenn der Spieler die Verstöße nicht selbst erkennt.",
            "Wenn ein zwischenzeitliches Ereignis (ein Schlag oder das Wissen/Erkennen des Verstoßes) zwischen den Regelverstößen lag.",
            "Immer, wenn die Verstöße an verschiedenen Löchern stattfanden."
        ],
        "answer_index": 2,
        "explanation": "Mehrere Strafen fallen nur dann an, wenn ein zwischenzeitliches Ereignis (Schlag oder Wissen/Erkennen) die Verstöße trennt. Wenn keine solche Unterbrechung vorliegt, gilt nur die jeweils höhere Strafe (Regel 1.3c(4))."
    },
    {
        "id": "I.2",
        "section": "I. Grundlagen & Ausrüstung (Regeln 1-4)",
        "question": "Ein zugelassener Schläger wird während der Runde durch Missbrauch (zum Beispiel Wut) beschädigt. Was darf der Spieler tun?",
        "image_query": "Golfschläger beschädigt",
        "options": [
            "Er darf ihn sofort durch einen anderen Schläger ersetzen, aber nur, wenn er die 14er-Grenze nicht überschreitet.",
            "Er muss den Schläger für den Rest der Runde aus dem Spiel nehmen.",
            "Er darf ihn nicht ersetzen, aber er darf ihn in dem beschädigten Zustand weiter benutzen.",
            "Er muss den beschädigten Schläger entweder reparieren oder ersetzen, um ihn weiter zu benutzen."
        ],
        "answer_index": 2,
        "explanation": "Bei Missbrauch darf der Schläger nicht ersetzt werden, aber er gilt weiterhin als regelkonform und darf benutzt werden (Regel 4.1a(2))."
    },
    {
        "id": "I.3",
        "section": "I. Grundlagen & Ausrüstung (Regeln 1-4)",
        "question": "Was ist die Verantwortung des Spielers in Bezug auf das Handicap auf der Scorekarte (gültig ab 2023)?",
        "image_query": "Scorekarte Handicap",
        "options": [
            "Der Spieler ist verpflichtet, sein Handicap und das berechnete Nettoergebnis für das Loch auszuweisen.",
            "Der Spieler muss sicherstellen, dass sein Handicap auf der Scorekarte korrekt ausgewiesen ist, um Disqualifikation zu vermeiden.",
            "Der Spieler ist nicht für die Angabe des Handicaps oder die Addition der Lochergebnisse verantwortlich.",
            "Der Spieler ist nur dafür verantwortlich, die Brutto-Ergebnisse korrekt einzutragen und die Scorekarte zu unterschreiben."
        ],
        "answer_index": 2,
        "explanation": "Seit 2023 muss ein Spieler sein Handicap nicht mehr auf der Scorekarte ausweisen. Die Spielleitung ist für die Berechnung der Handicapschläge und die Addition der Lochergebnisse verantwortlich (Regel 3.3b(4))."
    },
    {
        "id": "I.4",
        "section": "I. Grundlagen & Ausrüstung (Regeln 1-4)",
        "question": "Was geschieht, wenn zwei Spieler im Lochspiel vereinbaren, eine ihnen bekannte, anzuwendende Strafe absichtlich außer Acht zu lassen?",
        "image_query": "Zwei Golfer schütteln Hände",
        "options": [
            "Beide ziehen sich die Grundstrafe (Lochverlust) am nächsten Loch zu.",
            "Das vereinbarte Ergebnis gilt, da das Lochspiel nach Absprache entschieden werden kann.",
            "Beide Spieler sind disqualifiziert.",
            "Der Spieler, der zuerst gegen die Vereinbarung verstößt, zieht sich die Grundstrafe zu."
        ],
        "answer_index": 2,
        "explanation": "Vereinbaren zwei oder mehr Spieler, eine ihnen bekannte Regel oder Strafe absichtlich außer Acht zu lassen und hat einer von ihnen die Runde begonnen, sind sie disqualifiziert (Regel 1.3b(1))."
    },
    {
        "id": "I.5",
        "section": "I. Grundlagen & Ausrüstung (Regeln 1-4)",
        "question": "Wie viele Strafschläge zieht sich ein Spieler im Zählspiel für den ersten Verstoß gegen Regel 4.3 (Unzulässige Verwendung von Ausrüstung) zu?",
        "image_query": "Ausrüstung GPS",
        "options": [
            "Keine Strafe, da die Ausrüstung nicht im Schlag benutzt wurde.",
            "Ein Strafschlag.",
            "Die Grundstrafe (zwei Strafschläge).",
            "Disqualifikation."
        ],
        "answer_index": 2,
        "explanation": "Die Strafe für den ersten Verstoß gegen Regel 4.3 ist die Grundstrafe (zwei Strafschläge). Der zweite Verstoß führt zur Disqualifikation (Regel 4.3)."
    },

    // --------------------------------------------------------------------------------
    // R5-6: RUNDE UND LOCH (5 Fragen)
    // --------------------------------------------------------------------------------
    {
        "id": "II.1",
        "section": "II. Spielen der Runde & Lochs (Regeln 5-6)",
        "question": "Ein Spieler trifft spielbereit vier Minuten nach seiner Startzeit am Ort des Starts ein. Was ist die Strafe im Zählspiel?",
        "image_query": "Uhr Startzeit Golf",
        "options": [
            "Disqualifikation, da die Startzeit nicht eingehalten wurde.",
            "Keine Strafe, da die Verspätung unter fünf Minuten liegt und der Spieler spielbereit ist.",
            "Die Grundstrafe (zwei Strafschläge) am ersten Loch.",
            "Ein Strafschlag am ersten Loch."
        ],
        "answer_index": 2,
        "explanation": "Bei einer Verspätung von nicht mehr als fünf Minuten erhält der Spieler die Grundstrafe (zwei Strafschläge) am ersten Loch (Regel 5.3a Ausnahme 1)."
    },
    {
        "id": "II.2",
        "section": "II. Spielen der Runde & Lochs (Regeln 5-6)",
        "question": "Wo ist das Üben von Putten oder Chippen nach Beendigung eines Lochs, aber vor dem nächsten Abschlag, nicht gestattet?",
        "image_query": "Golfer übt putten",
        "options": [
            "Auf dem Grün des zuletzt gespielten Lochs.",
            "Auf dem Abschlag des nächsten Lochs.",
            "Aus einem Bunker des zuletzt gespielten Lochs.",
            "Auf jedem Übungsgrün, das nicht der Platz ist."
        ],
        "answer_index": 2,
        "explanation": "Das Üben von Putten oder Chippen auf dem zuletzt gespielten Grün und dem nächsten Abschlag ist erlaubt, aber solche Übungsschläge dürfen nicht aus einem Bunker ausgeführt werden (Regel 5.5b Ausnahme)."
    },
    {
        "id": "II.3",
        "section": "II. Spielen der Runde & Lochs (Regeln 5-6)",
        "question": "Sie spielen Ihren ersten Schlag eines Lochs von außerhalb des Abschlags im Lochspiel. Wie verfährt der Gegner?",
        "image_query": "Golf Abschlag",
        "options": [
            "Der Schlag zählt automatisch, und der Ball ist im Spiel.",
            "Der Gegner zieht die Grundstrafe (Lochverlust) zu.",
            "Der Gegner darf den Schlag für ungültig erklären; der Spieler muss dann erneut von innerhalb des Abschlags spielen.",
            "Der Spieler zieht die Grundstrafe (zwei Strafschläge) zu und muss den Fehler berichtigen."
        ],
        "answer_index": 2,
        "explanation": "Im Lochspiel ist der Schlag straflos, aber der Gegner darf ihn unverzüglich für ungültig erklären. Tut er dies, muss der Spieler von innerhalb des Abschlags erneut spielen (Regel 6.1b(1))."
    },
    {
        "id": "II.4",
        "section": "II. Spielen der Runde & Lochs (Regeln 5-6)",
        "question": "Ein Spieler unterbricht das Spiel wegen begründeter Blitzgefahr. Was muss er tun, um eine Disqualifikation zu vermeiden?",
        "image_query": "Blitzgewitter Golfplatz",
        "options": [
            "Er muss die Unterbrechung sofort per SMS an die Spielleitung melden.",
            "Er muss dies so bald wie möglich der Spielleitung mitteilen.",
            "Er darf das Spiel nur unterbrechen, wenn die Spielleitung die sofortige Unterbrechung angeordnet hat.",
            "Er muss die Zustimmung des Gegners (im Lochspiel) oder der Gruppe (im Zählspiel) einholen."
        ],
        "answer_index": 1,
        "explanation": "Ein Spieler darf das Spiel unterbrechen, wenn er begründet Blitzgefahr als gegeben ansieht, muss dies aber so bald wie möglich der Spielleitung mitteilen (Regel 5.7a)."
    },
    {
        "id": "II.5",
        "section": "II. Spielen der Runde & Lochs (Regeln 5-6)",
        "question": "Welche Strafe fällt für den ersten Verstoß gegen die Regel der 'Unangemessenen Verzögerung' (Regel 5.6a) an?",
        "image_query": "Stoppuhr Golf",
        "options": [
            "Verwarnung.",
            "Die Grundstrafe (zwei Strafschläge).",
            "Ein Strafschlag.",
            "Disqualifikation."
        ],
        "answer_index": 2,
        "explanation": "Die Strafe für den ersten Verstoß gegen Regel 5.6a (Unangemessene Verzögerung) ist ein Strafschlag. Der zweite Verstoß zieht die Grundstrafe nach sich, der dritte die Disqualifikation."
    },

    // --------------------------------------------------------------------------------
    // R7-11: BALL SPIELEN, BEWEGUNG (6 Fragen)
    // --------------------------------------------------------------------------------
    {
        "id": "III.1",
        "section": "III. Spielen des Balls (Regeln 7-11)",
        "question": "Ein Ball auf dem Grün, der bereits aufgenommen und zurückgelegt wurde, bewegt sich durch Wind (Naturkräfte) aus seiner Lage. Was muss der Spieler tun?",
        "image_query": "Golfball auf Grün bewegt",
        "options": [
            "Er spielt den Ball von seiner neuen Stelle (straflos).",
            "Er zieht einen Strafschlag zu und legt den Ball an die ursprüngliche Stelle zurück.",
            "Er muss den Ball an seine ursprüngliche Stelle zurücklegen (straflos).",
            "Er zieht die Grundstrafe zu und legt den Ball an die ursprüngliche Stelle zurück."
        ],
        "answer_index": 2,
        "explanation": "Bewegt sich der Ball auf dem Grün, nachdem er bereits aufgenommen und zurückgelegt worden war, muss er an die ursprüngliche Stelle zurückgelegt werden, unabhängig von der Ursache (Regel 9.3 Ausnahme 1)."
    },
    {
        "id": "III.2",
        "section": "III. Spielen des Balls (Regeln 7-11)",
        "question": "Ein vom Grün gespielter Ball trifft versehentlich den Schläger, der für den Schlag benutzt wurde. Wie muss der Spieler verfahren?",
        "image_query": "Golfball trifft Schläger",
        "options": [
            "Der Schlag zählt nicht; der Spieler muss den Schlag wiederholen, ohne Strafe.",
            "Der Schlag zählt; der Spieler zieht einen Strafschlag zu und muss den Ball spielen, wie er liegt.",
            "Der Schlag zählt; der Ball muss gespielt werden, wie er liegt.",
            "Der Spieler ist disqualifiziert, da die eigene Ausrüstung getroffen wurde."
        ],
        "answer_index": 2,
        "explanation": "Trifft ein vom Grün gespielter Ball versehentlich den Schläger, der für den Schlag benutzt wurde, ist dies straflos, und der Ball wird gespielt, wie er liegt. Der Schlag wird nicht wiederholt (Regel 11.1b(2))."
    },
    {
        "id": "III.3",
        "section": "III. Spielen des Balls (Regeln 7-11)",
        "question": "Der Ball eines Spielers wird versehentlich bewegt, während er oder sein Caddie ihn redlich sucht. Was ist die Strafe?",
        "image_query": "Golfball im Rough",
        "options": [
            "Die Grundstrafe (zwei Strafschläge), und der Ball muss zurückgelegt werden.",
            "Keine Strafe, und der Ball muss an seine ursprüngliche Stelle zurückgelegt werden.",
            "Ein Strafschlag, und der Ball muss zurückgelegt werden.",
            "Keine Strafe, und der Ball muss von seiner neuen Stelle gespielt werden."
        ],
        "answer_index": 1,
        "explanation": "Die Bewegung ist straflos, wenn sie versehentlich während der redlichen Suche geschieht; der Ball muss an die geschätzte ursprüngliche Stelle zurückgelegt werden (Regel 7.4)."
    },
    {
        "id": "III.4",
        "section": "III. Spielen des Balls (Regeln 7-11)",
        "question": "Ein Spieler legt einen Schläger auf den Boden, um sich bei der Ausrichtung zu helfen. Ist das Entfernen des Gegenstandes vor dem Schlag straflos?",
        "image_query": "Golf Ausrichtungshilfe",
        "options": [
            "Ja, die Strafe wird vermieden, wenn der Schläger vor dem Schlag entfernt wird.",
            "Nein, diese Handlung ist generell verboten und die Strafe kann nicht durch nachträgliches Entfernen vermieden werden.",
            "Ja, wenn die Spielleitung keine Platzregel erlassen hat, die dies verbietet.",
            "Nein, außer für blinde Spieler, für die diese Regel nicht gilt."
        ],
        "answer_index": 1,
        "explanation": "Das Hinlegen eines Gegenstandes zur Ausrichtung ist eine unzulässige Hilfe, und die Strafe kann nicht vermieden werden, indem der Gegenstand vor dem Schlag entfernt wird (Regel 10.2b(3))."
    },
    {
        "id": "III.5",
        "section": "III. Spielen des Balls (Regeln 7-11)",
        "question": "Sie entfernen einen Ast (losen hinderlichen Naturstoff) und verursachen dadurch, dass sich Ihr Ball außerhalb des Grüns bewegt. Was ist die Folge?",
        "image_query": "Lose hinderliche Naturstoffe bewegen Ball",
        "options": [
            "Straflos, wenn der Ball zurückgelegt wird.",
            "Ein Strafschlag, und der Ball muss an die ursprüngliche Stelle zurückgelegt werden.",
            "Grundstrafe, und der Ball muss an die ursprüngliche Stelle zurückgelegt werden.",
            "Straflos, und der Ball muss von der neuen Stelle gespielt werden."
        ],
        "answer_index": 1,
        "explanation": "Das Entfernen eines losen hinderlichen Naturstoffs, das die Bewegung des Balls außerhalb des Grüns verursacht, zieht einen Strafschlag nach sich, und der Ball muss zurückgelegt werden (Regel 15.1b, Regel 9.4b)."
    },
    {
        "id": "III.6",
        "section": "III. Spielen des Balls (Regeln 7-11)",
        "question": "Welche Handlung ist nach Regel 8.1a verboten, da sie die Bedingungen, die den Schlag beeinflussen, verbessert?",
        "image_query": "Divot zurücklegen",
        "options": [
            "Das leichte Aufsetzen des Schlägers direkt vor dem Ball.",
            "Das Festtreten der Füße, wenn der Stand eingenommen wird.",
            "Das Zurücklegen eines Divots in ein Divotloch im Gelände.",
            "Das Entfernen von Tau oder Reif innerhalb des Abschlags."
        ],
        "answer_index": 2,
        "explanation": "Das Zurücklegen eines Divots in ein Divotloch im Gelände verbessert die Bodenoberfläche und ist eine verbotene Handlung, die zur Grundstrafe führt (Regel 8.1a(3))."
    },
    
    // --------------------------------------------------------------------------------
    // R12-13: SONDERBEREICHE (5 Fragen)
    // --------------------------------------------------------------------------------
    {
        "id": "IV.1",
        "section": "IV. Sonderregeln für Bunker & Grüns (Regeln 12-13)",
        "question": "Welche Handlung zieht eine Strafe nach sich, wenn der Ball im Bunker liegt?",
        "image_query": "Golfbunker",
        "options": [
            "Die Füße eingraben, um den Stand einzunehmen.",
            "Sich auf einen Schläger stützen, um das Gleichgewicht zu halten.",
            "Den Sand in dem Bereich unmittelbar vor dem Ball mit dem Schläger im Rückschwung berühren.",
            "Nachdem der Ball den Bunker verlassen hat, Sand auf der Spiellinie zum nächsten Schlag einharken."
        ],
        "answer_index": 2,
        "explanation": "Das Berühren des Sandes im Rückschwung für den Schlag ist nicht gestattet und zieht die Grundstrafe nach sich (Regel 12.2b(1))."
    },
    {
        "id": "IV.2",
        "section": "IV. Sonderregeln für Bunker & Grüns (Regeln 12-13)",
        "question": "Ein Ball ragt über den Lochrand hinaus. Wie lange darf der Spieler warten, um zu sehen, ob der Ball von selbst fällt?",
        "image_query": "Ball am Lochrand",
        "options": [
            "Fünf Sekunden, nachdem der Spieler das Loch erreicht hat.",
            "Eine angemessene Zeit, um das Loch zu erreichen, und weitere zehn Sekunden.",
            "15 Sekunden ab dem Zeitpunkt, an dem der Spieler das Loch erreicht.",
            "Es gibt keine Wartezeit; der Spieler muss sofort spielen."
        ],
        "answer_index": 1,
        "explanation": "Der Spieler darf eine angemessene Zeit warten, um das Loch zu erreichen, und dann weitere zehn Sekunden, bevor der Ball als zur Ruhe gekommen gilt (Regel 13.3a)."
    },
    {
        "id": "IV.3",
        "section": "IV. Sonderregeln für Bunker & Grüns (Regeln 12-13)",
        "question": "Welche Art von Schaden gehört **nicht** zur Definition von 'Schäden auf dem Grün', die ausgebessert werden dürfen?",
        "image_query": "Golf Grün ausbessern",
        "options": [
            "Sodenkanten oder alte Lochpfropfen.",
            "Die durch Tierspuren oder Hufabdrücke verursachten Schäden.",
            "Die durch eine Ausrüstung (z.B. Schläger) hervorgerufenen Kratzer oder Dellen.",
            "Natürliche Oberflächenunebenheiten, wie Kahlstellen oder Unkraut."
        ],
        "answer_index": 3,
        "explanation": "'Schäden auf dem Grün' sind keine Schäden oder Umstände, die durch natürliche Oberflächenunebenheiten (wie Kahlstellen oder Unkraut) entstehen (Regel 13.1c(2) Ausnahme)."
    },
    {
        "id": "IV.4",
        "section": "IV. Sonderregeln für Bunker & Grüns (Regeln 12-13)",
        "question": "Ein Spieler belässt den Flaggenstock im Loch. Der Ball in Bewegung trifft ihn. Was ist die Folge?",
        "image_query": "Golf Flaggenstock im Loch",
        "options": [
            "Der Schlag wird wiederholt, und der Spieler erhält einen Strafschlag.",
            "Dies ist strafbar, der Spieler zieht die Grundstrafe zu.",
            "Dies ist straflos, und der Ball muss gespielt werden, wie er liegt.",
            "Der Schlag zählt nicht, und der Spieler muss den Schlag wiederholen."
        ],
        "answer_index": 2,
        "explanation": "Trifft der Ball in Bewegung den im Loch befindlichen Flaggenstock, ist dies straflos (außer in bestimmten Fällen des absichtlichen Beeinflussens), und der Ball muss gespielt werden, wie er liegt (Regel 13.2a(2))."
    },
    {
        "id": "IV.5",
        "section": "IV. Sonderregeln für Bunker & Grüns (Regeln 12-13)",
        "question": "Ihr Ball liegt auf dem Grün. Sie bessern eine alte Lochpfropfenkante aus, obwohl der Gegner noch spielt. Ist dies erlaubt?",
        "image_query": "Lochpfropfen ausbessern",
        "options": [
            "Nein, da es den Raum des beabsichtigten Schwungs des Gegners beeinträchtigen könnte.",
            "Ja, dies ist jederzeit erlaubt, solange es das Spiel nicht unangemessen verzögert.",
            "Ja, aber nur, wenn Sie Ihren eigenen Ball noch nicht markiert haben.",
            "Nein, nur Divots dürfen ausgebessert werden."
        ],
        "answer_index": 1,
        "explanation": "Schäden auf dem Grün, wozu auch alte Lochpfropfen gehören, dürfen jederzeit ausgebessert werden, solange das Spiel dadurch nicht unangemessen verzögert wird (Regel 13.1c(2))."
    },

    // --------------------------------------------------------------------------------
    // R14-16: STRAFLOSE ERLEICHTERUNG (6 Fragen)
    // --------------------------------------------------------------------------------
    {
        "id": "V.1",
        "section": "VI. Straflose Erleichterung (Regeln 14-16)",
        "question": "Aus welcher Höhe muss ein Ball bei einem Erleichterungsverfahren korrekt gedroppt werden?",
        "image_query": "Droppen aus Kniehöhe",
        "options": [
            "Aus Schulterhöhe.",
            "Aus Hüfthöhe.",
            "Aus Kniehöhe.",
            "Aus jeder beliebigen Höhe, solange er senkrecht losgelassen wird."
        ],
        "answer_index": 2,
        "explanation": "Der Ball muss aus Kniehöhe senkrecht nach unten fallen gelassen werden (Regel 14.3b(2))."
    },
    {
        "id": "V.2",
        "section": "VI. Straflose Erleichterung (Regeln 14-16)",
        "question": "Ein Spieler versucht, einen Ball an seine ursprüngliche Stelle zurückzulegen (außerhalb des Grüns und nicht im Sand). Der Ball bleibt zweimal nicht liegen. Was muss der Spieler beim dritten Versuch tun?",
        "image_query": "Golfball zurücklegen",
        "options": [
            "Er muss einen Strafschlag hinzurechnen und den Ball von der Stelle des vorigen Schlages spielen.",
            "Er muss den Ball erneut von der Kniehöhe droppen.",
            "Er muss den Ball an die nächstgelegene Stelle legen, an der der Ball in Ruhe liegen bleibt (nicht näher zum Loch).",
            "Er muss einen Ball an einen beliebigen Ort innerhalb einer Schlägerlänge von der ursprünglichen Stelle legen."
        ],
        "answer_index": 2,
        "explanation": "Bleibt der Ball nach zweimaligem Versuchen nicht an der ursprünglichen Stelle liegen, muss er an die nächstgelegene Stelle gelegt werden, an der er in Ruhe liegen bleibt, nicht näher zum Loch (Regel 14.2e)."
    },
    {
        "id": "V.3",
        "section": "VI. Straflose Erleichterung (Regeln 14-16)",
        "question": "Ein auf korrekte Weise gedroppter Ball wird absichtlich von einem äußeren Einfluss abgelenkt, bevor er zur Ruhe kommt. Was muss der Spieler tun?",
        "image_query": "Golfball absichtlich abgelenkt",
        "options": [
            "Er spielt den Ball, wie er liegt, und zieht einen Strafschlag zu.",
            "Er muss einen Ball erneut droppen; der absichtlich abgelenkte Ball zählt nicht als einer der beiden Drops.",
            "Er spielt den Ball von der Stelle, an der er zur Ruhe kam (straflos).",
            "Er beendet das Erleichterungsverfahren, indem er den Ball hinlegt."
        ],
        "answer_index": 1,
        "explanation": "Wird ein auf die richtige Weise gedroppter Ball durch eine Person absichtlich abgelenkt oder aufgehalten (gleich ob innerhalb oder außerhalb des Erleichterungsbereichs), muss der Spieler erneut einen Ball nach Regel 14.3b droppen (Regel 14.3d)."
    },
    {
        "id": "VI.1",
        "section": "VI. Straflose Erleichterung (Regeln 14-16)",
        "question": "Wo auf dem Platz ist straflose Erleichterung von ungewöhnlichen Platzverhältnissen (UPV) nicht zulässig?",
        "image_query": "Ungewöhnliche Platzverhältnisse",
        "options": [
            "Wenn der Ball im Aus liegt.",
            "Wenn der Ball in einem Bunker liegt (straflose Erleichterung ist nur im Bunker möglich).",
            "Wenn der Ball in einer Penalty Area liegt.",
            "Wenn die Beeinträchtigung ausschließlich außerhalb des Platzes (im Aus) liegt."
        ],
        "answer_index": 2,
        "explanation": "Erleichterung bei Beeinträchtigung durch ungewöhnliche Platzverhältnisse ist nur zulässig, wenn die UPV auf dem Platz sind und der Ball auf dem Platz liegt, außer in einer Penalty Area (Regel 16.1a(2))."
    },
    {
        "id": "VI.2",
        "section": "VI. Straflose Erleichterung (Regeln 14-16)",
        "question": "Was passiert, wenn der Ball eines Spielers in oder auf einem beweglichen Hemmnis liegt, aber nicht gefunden wird?",
        "image_query": "Ball in beweglichem Hemmnis verloren",
        "options": [
            "Der Ball gilt als verloren, und der Spieler muss Erleichterung mit Schlag und Distanzverlust in Anspruch nehmen.",
            "Der Spieler darf straflose Erleichterung in Anspruch nehmen, indem er am geschätzten Punkt des Kreuzens der Hemmnisgrenze droppt.",
            "Der Ball gilt als verloren, und der Spieler zieht zwei Strafschläge zu.",
            "Der Spieler zieht einen Strafschlag zu und droppt den Ball an der Stelle, an der das Hemmnis lag."
        ],
        "answer_index": 1,
        "explanation": "Wenn bekannt oder so gut wie sicher ist, dass der Ball in oder auf einem beweglichen Hemmnis liegt, darf der Spieler straflose Erleichterung in Anspruch nehmen, wobei der geschätzte Punkt des Kreuzens der Hemmnisgrenze als Bezugspunkt verwendet wird (Regel 15.2b)."
    },
    {
        "id": "VI.3",
        "section": "VI. Straflose Erleichterung (Regeln 14-16)",
        "question": "Wann gilt ein Ball als eingebettet im Sinne der Regel 16.3?",
        "image_query": "Eingebetteter Ball Gelände",
        "options": [
            "Wenn der Ball tief im Gras liegt und nicht sichtbar ist.",
            "Wenn der Ball in Folge des vorigen Schlags des Spielers in seinem eigenen Einschlagloch liegt und sich teilweise unter der Bodenoberfläche befindet.",
            "Wenn der Ball in einem beliebigen Einschlagloch liegt (auch von einem anderen Ball), das sich im Gelände befindet.",
            "Wenn der Ball unter der Bodenoberfläche liegt, nachdem eine Person darauf getreten ist."
        ],
        "answer_index": 1,
        "explanation": "Der Ball eines Spielers gilt nur dann als eingebettet, wenn er in Folge des vorigen Schlags des Spielers in seinem eigenen Einschlagloch liegt und sich teilweise unter der Bodenoberfläche befindet (Regel 16.3a(2))."
    },

    // --------------------------------------------------------------------------------
    // R17-19: ERLEICHTERUNG MIT STRAFE (5 Fragen)
    // --------------------------------------------------------------------------------
    {
        "id": "VII.1",
        "section": "VII. Erleichterung mit Strafe (Regeln 17-19)",
        "question": "Wie viele Strafschläge zieht sich der Spieler zu, wenn er sich entscheidet, Erleichterung 'auf der Linie zurück' außerhalb des Bunkers für einen unspielbaren Ball im Bunker zu nehmen?",
        "image_query": "Unspielbarer Ball Bunker",
        "options": [
            "Einen Strafschlag.",
            "Drei Strafschläge.",
            "Zwei Strafschläge.",
            "Grundstrafe (Lochverlust im Lochspiel)."
        ],
        "answer_index": 2,
        "explanation": "Die zusätzliche Erleichterungsmöglichkeit, außerhalb des Bunkers zu droppen (Erleichterung auf der Linie zurück nach Regel 19.2b), kostet insgesamt zwei Strafschläge (Regel 19.3b)."
    },
    {
        "id": "VII.2",
        "section": "VII. Erleichterung mit Strafe (Regeln 17-19)",
        "question": "Wie lange hat der Spieler maximal Zeit, nach seinem Ball zu suchen, bevor dieser als 'verloren' gilt?",
        "image_query": "Golfball Suchzeit",
        "options": [
            "Fünf Minuten.",
            "Zehn Minuten.",
            "Drei Minuten.",
            "Eine angemessene Zeit (max. 5 Minuten), um den Suchbereich zu erreichen."
        ],
        "answer_index": 2,
        "explanation": "Ein Ball ist verloren, wenn er nicht innerhalb von drei Minuten gefunden wurde, nachdem der Spieler oder sein Caddie begonnen hat, nach ihm zu suchen (Regel 18.2a(1))."
    },
    {
        "id": "VII.3",
        "section": "VII. Erleichterung mit Strafe (Regeln 17-19)",
        "question": "Sie droppen einen provisorischen Ball, weil der ursprüngliche Ball außerhalb einer Penalty Area verloren sein könnte. Der ursprüngliche Ball wird unspielbar in einem Busch gefunden. Was müssen Sie tun?",
        "image_query": "Provisorischer Ball",
        "options": [
            "Sie spielen den provisorischen Ball weiter.",
            "Der provisorische Ball wird aufgegeben; Sie müssen Erleichterung für den ursprünglichen (unspielbaren) Ball nehmen.",
            "Sie dürfen wählen, welchen Ball Sie weiterspielen.",
            "Der provisorische Ball wird zum Ball im Spiel, da der ursprüngliche Ball nicht spielbar war."
        ],
        "answer_index": 1,
        "explanation": "Der provisorische Ball muss aufgegeben werden, und der Spieler muss dann mit einem Strafschlag Erleichterung für den unspielbaren Originalball nehmen (Regel 18.3c(3))."
    },
    {
        "id": "VII.4",
        "section": "VII. Erleichterung mit Strafe (Regeln 17-19)",
        "question": "Ihr Ball liegt in einer Roten Penalty Area. Welche Erleichterungsoption mit einem Strafschlag steht Ihnen **nicht** zur Verfügung?",
        "image_query": "Rote Penalty Area",
        "options": [
            "Erleichterung mit Schlag und Distanzverlust.",
            "Seitliche Erleichterung.",
            "Erleichterung auf der Linie zurück.",
            "Erleichterung am geschätzten Punkt des Eintritts (Wahlrecht)."
        ],
        "answer_index": 3,
        "explanation": "Die rote Penalty Area gibt drei Möglichkeiten mit einem Strafschlag: Schlag und Distanzverlust (17.1d(1)), Auf der Linie zurück (17.1d(2)) und Seitliche Erleichterung (17.1d(3)). Der geschätzte Punkt des Eintritts ist der Bezugspunkt für die seitliche Erleichterung, nicht eine eigenständige Option (Regel 17.1d)."
    },
    {
        "id": "VII.5",
        "section": "VII. Erleichterung mit Strafe (Regeln 17-19)",
        "question": "Der Spieler droppt einen provisorischen Ball. Der provisorische Ball wird von einer Stelle gespielt, die näher zum Loch liegt als die Stelle, an der der ursprüngliche Ball vermutet wurde. Was ist die Folge?",
        "image_query": "Provisorischer Ball näher zum Loch",
        "options": [
            "Der Spieler erhält die Grundstrafe (zwei Strafschläge).",
            "Der provisorische Ball ist aufgegeben.",
            "Der provisorische Ball wird mit Strafe von Schlag und Distanzverlust zum Ball im Spiel.",
            "Der Spieler erhält einen Strafschlag und muss den ursprünglichen Ball spielen."
        ],
        "answer_index": 2,
        "explanation": "Der provisorische Ball wird unter Strafe von Schlag und Distanzverlust zum Ball im Spiel des Spielers, wenn er von einer Stelle gespielt wird, die näher zum Loch liegt als die, an der der ursprüngliche Ball vermutet wird (Regel 18.3c(2))."
    },

    // --------------------------------------------------------------------------------
    // R20-25: VORGEHENSWEISE & SONDERFORMEN (5 Fragen)
    // --------------------------------------------------------------------------------
    {
        "id": "VIII.1",
        "section": "VIII. Vorgehensweise (Regeln 20)",
        "question": "Sie sind sich im Zählspiel unsicher über die Anwendung einer Regel. Ein Referee ist nicht verfügbar. Welche Option erlaubt Ihnen die Regel 20.1c, um Ihre Rechte zu schützen?",
        "image_query": "Zwei Golfbälle",
        "options": [
            "Eine Absprache mit Ihrem Zähler treffen und das Spiel fortsetzen.",
            "Das Loch straflos mit zwei Bällen zu Ende spielen.",
            "Das Spiel unterbrechen und auf das Eintreffen eines Referees warten.",
            "Die Regel anwenden, von der Sie glauben, dass sie richtig ist, und dies später melden."
        ],
        "answer_index": 1,
        "explanation": "Ein Spieler darf das Loch straflos mit zwei Bällen zu Ende spielen, um seine Rechte zu schützen, muss dies aber der Spielleitung vor Abgabe der Scorekarte mitteilen (Regel 20.1c(3))."
    },
    {
        "id": "IX.1",
        "section": "IX. Andere Spielformen (Regeln 21-24)",
        "question": "Im Vierer (Foursomes) schlägt Partner A versehentlich außer der Reihe ab. Wie wird der Fehler korrigiert (Zählspiel)?",
        "image_query": "Zwei Golfer spielen einen Ball",
        "options": [
            "Es ist straflos, und der Ball wird weitergespielt.",
            "Die Partei zieht die Grundstrafe zu und muss den Fehler berichtigen.",
            "Die Partei zieht einen Strafschlag zu und muss den Fehler berichtigen.",
            "Die Partei wird disqualifiziert, ohne Korrekturmöglichkeit."
        ],
        "answer_index": 1,
        "explanation": "Der Schlag in der falschen Reihenfolge zieht die Grundstrafe (zwei Strafschläge) für die Partei nach sich, und der richtige Partner muss den Fehler berichtigen (Regel 22.3)."
    },
    {
        "id": "IX.2",
        "section": "IX. Andere Spielformen (Regeln 21-24)",
        "question": "Sie spielen ein Stableford-Turnier und verstoßen gegen die Regel zur 'Unangemessenen Verzögerung'. Was ist die Strafe für den ersten Verstoß an diesem Loch?",
        "image_query": "Stableford Scorekarte",
        "options": [
            "Ein Strafschlag.",
            "Grundstrafe (zwei Strafschläge).",
            "Der Spieler erhält 0 Punkte für das Loch.",
            "Der Spieler verliert das Loch (Lochverlust)."
        ],
        "answer_index": 2,
        "explanation": "Die Strafe für den ersten Verstoß gegen die Unangemessene Verzögerung (Regel 5.6a) ist ein Strafschlag. Nach Regel 21.1c wird Stableford angewendet, was bedeutet, dass das Ergebnis des Spielers an diesem Loch auf 0 Punkte reduziert wird."
    },
    {
        "id": "X.1",
        "section": "X. Spieler mit Behinderungen (Regeln 25)",
        "question": "Ein blinder Spieler legt einen Schläger auf den Boden, um sich bei der Ausrichtung zu helfen. Was gilt laut Regel 25.2c?",
        "image_query": "Blinder Golfer Ausrichtungshilfe",
        "options": [
            "Dies ist verboten, da es gegen die Regel zur Hilfe bei der Ausrichtung verstößt.",
            "Es ist erlaubt, aber der Gegenstand muss entfernt werden, bevor der Schlag ausgeführt wird.",
            "Es ist erlaubt, solange nur der Caddie den Gegenstand hinlegt.",
            "Es ist erlaubt, und der Schläger darf während des Schlages auf dem Boden liegen bleiben."
        ],
        "answer_index": 1,
        "explanation": "Die Regel 10.2b(3) wird für blinde Spieler so geändert, dass das Hinlegen eines Gegenstandes zur Hilfe bei der Ausrichtung straflos ist. Der Gegenstand muss aber entfernt werden, bevor der Schlag ausgeführt wird (Regel 25.2c)."
    },
    {
        "id": "X.2",
        "section": "X. Spieler mit Behinderungen (Regeln 25)",
        "question": "Ein Spieler benutzt eine Mobilitätshilfe auf Rädern und nimmt seitliche Erleichterung für einen unspielbaren Ball in Anspruch. Wie groß ist der Erleichterungsbereich?",
        "image_query": "Rollstuhl Golf",
        "options": [
            "Eine Schlägerlänge vom Bezugspunkt.",
            "Zwei Schlägerlängen vom Bezugspunkt.",
            "Drei Schlägerlängen vom Bezugspunkt.",
            "Vier Schlägerlängen vom Bezugspunkt."
        ],
        "answer_index": 3,
        "explanation": "Für Spieler mit einer Mobilitätshilfe auf Rädern wird die Größe des Erleichterungsbereichs bei seitlicher Erleichterung (Regel 19.2c) von zwei Schlägerlängen auf vier Schlägerlängen erweitert (Regel 25.4m)."
    },

    // --------------------------------------------------------------------------------
    // ERWEITERUNG AUF 70 FRAGEN (45 Neue Fragen)
    // --------------------------------------------------------------------------------
    {
        "id": "I.6",
        "section": "I. Grundlagen & Ausrüstung (Regeln 1-4)",
        "question": "Ist die Auslegung einer Regel durch den Deutschen Golf Verband (DGV) in der deutschen Übersetzung strittig, auf welche Fassung ist zur Auslegung zurückzugreifen?",
        "image_query": "Golfregelbuch Auslegung",
        "options": [
            "Auf die Auslegung des DGV-Ausschusses Regeln und Amateurstatut.",
            "Auf die Fassung in englischer Sprache.",
            "Auf die gültige Entscheidung der USGA.",
            "Auf das Offizielle Handbuch zu den Golfregeln."
        ],
        "answer_index": 1,
        "explanation": "Aufgrund des Copyright-Vertrages mit R&A Rules Limited ist bei Differenzen über die Auslegung der vom DGV erstellten Übersetzung in die deutsche Sprache auf die Fassung in englischer Sprache zurückzugreifen."
    },
    {
        "id": "II.6",
        "section": "II. Spielen der Runde & Lochs (Regeln 5-6)",
        "question": "Ein Spieler beginnt das Loch mit einem provisorischen Ball. Wann muss die Spielfolge der Gruppe beim nächsten Schlag eingehalten werden?",
        "image_query": "Provisorischer Ball Spielfolge",
        "options": [
            "Nur wenn der provisorische Ball näher zum Loch liegt als der ursprüngliche Ball.",
            "Nur wenn alle Spieler der Gruppe ihren ersten Schlag am Loch beendet haben.",
            "Nachdem alle Spieler ihren ersten Schlag am Loch beendet haben, und bevor ein provisorischer oder anderer Ball gespielt wird.",
            "Die Spielfolge wird nie durch das Spielen eines provisorischen Balls beeinflusst."
        ],
        "answer_index": 2,
        "explanation": "Die Spielfolge richtet sich nach Regel 6.4c: Alle Spieler der Gruppe machen zuerst ihren ersten Schlag, bevor ein Spieler den provisorischen oder einen anderen Ball vom Abschlag spielt."
    },
    {
        "id": "III.7",
        "section": "III. Spielen des Balls (Regeln 7-11)",
        "question": "Ihr Ball liegt im Gelände. Sie treten versehentlich auf einen Ast, der daraufhin den Ball bewegt. Welche Strafe droht Ihnen?",
        "image_query": "Ast bewegt Ball",
        "options": [
            "Ein Strafschlag, da Sie die Bewegung verursacht haben.",
            "Keine Strafe, aber Sie müssen den Ball zurücklegen.",
            "Grundstrafe, da Sie die Bodenoberfläche verändert haben.",
            "Keine Strafe, der Ball wird von der neuen Stelle gespielt."
        ],
        "answer_index": 1,
        "explanation": "Die Bewegung ist straflos, wenn sie versehentlich beim Versuch, den Ball zu finden oder zu identifizieren, geschieht (Regel 7.4). Der Ball muss zurückgelegt werden."
    },
    {
        "id": "III.8",
        "section": "III. Spielen des Balls (Regeln 7-11)",
        "question": "Ein Ballmarker auf dem Grün wird versehentlich durch den Gegner bewegt. Was ist die Konsequenz?",
        "image_query": "Ballmarker bewegt",
        "options": [
            "Der Gegner zieht einen Strafschlag zu, der Ballmarker muss zurückgelegt werden.",
            "Dies ist straflos, der Ballmarker muss zurückgelegt werden.",
            "Der Gegner zieht die Grundstrafe (Lochverlust) zu.",
            "Der Ball muss von der geschätzten neuen Stelle gespielt werden."
        ],
        "answer_index": 1,
        "explanation": "Es ist straflos, wenn der Ballmarker auf dem Grün versehentlich bewegt wird (Regel 13.1d(1)). Er muss an die ursprüngliche Stelle zurückgelegt werden."
    },
    {
        "id": "III.9",
        "section": "III. Spielen des Balls (Regeln 7-11)",
        "question": "Ihr Ball kommt nach dem Schlag auf dem Golfplatz zur Ruhe und wird anschließend durch eine Person absichtlich abgelenkt, bevor Sie ihn spielen. Was müssen Sie tun?",
        "image_query": "Ball abgelenkt",
        "options": [
            "Sie spielen den Ball, wie er liegt, und die Person erhält die Grundstrafe.",
            "Sie müssen einen Ball an der geschätzten Stelle spielen, an der er ohne Ablenkung zur Ruhe gekommen wäre.",
            "Sie müssen den Schlag mit einem Strafschlag wiederholen.",
            "Sie sind verpflichtet, Schlag und Distanzverlust in Anspruch zu nehmen."
        ],
        "answer_index": 1,
        "explanation": "Wird ein Ball in Bewegung absichtlich abgelenkt, darf der Ball nicht gespielt werden, wie er liegt. Der Spieler muss Erleichterung in Anspruch nehmen, basierend auf der geschätzten Stelle, an der der Ball ohne Ablenkung zur Ruhe gekommen wäre (Regel 11.2c(1))."
    },
    {
        "id": "III.10",
        "section": "III. Spielen des Balls (Regeln 7-11)",
        "question": "Nachdem Sie Ihren Ball aus dem Bunker gespielt haben, harken Sie den Sand in der Nähe Ihrer Spiellinie ein. Der Ball liegt außerhalb des Bunkers. Ist dies erlaubt?",
        "image_query": "Bunker harken",
        "options": [
            "Nein, da dies die Bedingungen der Spiellinie verbessert (Grundstrafe).",
            "Ja, dies ist straflos zum Zweck der Platzpflege.",
            "Ja, aber nur, wenn die Harke ein unbewegliches Hemmnis ist.",
            "Nein, da die Regeln generell das Berühren des Sandes verbieten."
        ],
        "answer_index": 1,
        "explanation": "Da der Ball außerhalb des Bunkers liegt, dürfen Sie den Sand im Bunker straflos zum Zweck der Platzpflege einebnen, auch wenn der Sand auf der Spiellinie des nächsten Schlages liegt (Regel 12.2b(3))."
    },
    {
        "id": "III.11",
        "section": "III. Spielen des Balls (Regeln 7-11)",
        "question": "Sie spielen Ihren Ball. Er trifft versehentlich einen Baum und prallt zurück, wo er Sie oder Ihre Ausrüstung trifft. Was müssen Sie tun?",
        "image_query": "Ball prallt zurück trifft Spieler",
        "options": [
            "Sie spielen den Ball, wie er liegt, straflos.",
            "Sie erhalten einen Strafschlag und müssen den Schlag wiederholen.",
            "Sie erhalten die Grundstrafe und spielen den Ball, wie er liegt.",
            "Sie müssen den Schlag wiederholen, straflos."
        ],
        "answer_index": 0,
        "explanation": "Trifft der Ball in Bewegung den Spieler oder die Ausrüstung versehentlich, ist dies straflos, und der Ball wird gespielt, wie er liegt (Regel 11.1a)."
    },
    {
        "id": "III.12",
        "section": "III. Spielen des Balls (Regeln 7-11)",
        "question": "Ihr Caddie bemerkt, dass Sie sich falsch ausrichten und tritt wortlos aus dem beschränkten Bereich hinter Ihnen heraus. Was ist die Folge?",
        "image_query": "Caddie Hilfe bei Ausrichtung",
        "options": [
            "Straflos, da er keine mündliche Beratung gegeben hat.",
            "Grundstrafe für den Spieler, da der Caddie geholfen hat, beim Zielen.",
            "Ein Strafschlag für den Spieler.",
            "Der Schlag zählt nicht, muss aber wiederholt werden."
        ],
        "answer_index": 1,
        "explanation": "Wenn der Caddie wortlos zur Seite tritt, gibt er dem Spieler ein Signal, dass dieser korrekt ausgerichtet ist, was gegen das Verbot verstößt, dem Spieler beim Zielen zu helfen. Der Spieler zieht sich die Grundstrafe zu (Regel 10.2b(4))."
    },
    {
        "id": "IV.6",
        "section": "IV. Sonderregeln für Bunker & Grüns (Regeln 12-13)",
        "question": "Ihr Ball liegt auf dem Grün. Ein über den Lochrand ragender Ball wird vom Gegner absichtlich aufgenommen, bevor die 10-Sekunden-Wartezeit abgelaufen ist. Was ist die Konsequenz im Lochspiel?",
        "image_query": "Ball am Lochrand aufgenommen",
        "options": [
            "Der Spieler muss den Ball an den Lochrand zurücklegen und der Gegner zieht einen Strafschlag zu.",
            "Der Ball des Spielers gilt als mit dem vorherigen Schlag eingelocht.",
            "Der Gegner verliert das Loch (Grundstrafe).",
            "Der Ball muss an den Lochrand zurückgelegt werden, und die Wartezeit beginnt von neuem."
        ],
        "answer_index": 1,
        "explanation": "Hebt der Gegner im Lochspiel absichtlich den über den Lochrand hinausragenden Ball des Spielers auf, bevor die Wartezeit endet, wird der Ball als mit dem vorherigen Schlag eingelocht behandelt (Regel 13.3b)."
    },
    {
        "id": "IV.7",
        "section": "IV. Sonderregeln für Bunker & Grüns (Regeln 12-13)",
        "question": "Der Ball eines Spielers ruht innerhalb der Grenzen eines Bunkers, berührt aber nur ein Stück Gras (und keinen Sand). Liegt der Ball im Bunker?",
        "image_query": "Ball auf Gras in Bunker",
        "options": [
            "Ja, da der Ball innerhalb der Grenzen des Bunkers liegt.",
            "Nein, da er keinen Sand berührt und auf Gras liegt.",
            "Ja, solange das Gras den Sand berührt.",
            "Nein, der Ball gilt als im Gelände liegend."
        ],
        "answer_index": 1,
        "explanation": "Liegt ein Ball auf Boden oder Gras oder anderen wachsenden oder befestigten natürlichen Gegenständen innerhalb der Grenzen des Bunkers und berührt er keinen Sand, liegt der Ball nicht im Bunker (Regel 12.1)."
    },
    {
        "id": "IV.8",
        "section": "IV. Sonderregeln für Bunker & Grüns (Regeln 12-13)",
        "question": "Welche Strafe fällt an, wenn ein Spieler einen Ball auf einem 'falschen Grün' spielt?",
        "image_query": "Falsches Grün",
        "options": [
            "Ein Strafschlag.",
            "Grundstrafe (Lochverlust/Zwei Strafschläge).",
            "Disqualifikation.",
            "Der Schlag muss wiederholt werden, straflos."
        ],
        "answer_index": 1,
        "explanation": "Ein Spieler darf den Ball nicht spielen, wie er liegt, wenn er durch ein falsches Grün beeinträchtigt ist. Die Strafe für das Spielen vom falschen Ort (Regel 13.1f) ist die Grundstrafe."
    },
    {
        "id": "V.4",
        "section": "VI. Straflose Erleichterung (Regeln 14-16)",
        "question": "Ein gedroppter Ball trifft den Spieler und kommt im Erleichterungsbereich zur Ruhe. Was muss der Spieler tun?",
        "image_query": "Ball trifft Spieler beim Droppen",
        "options": [
            "Er muss den Drop mit einem Strafschlag wiederholen.",
            "Er spielt den Ball, wie er liegt, straflos.",
            "Er muss den Ball an die ursprüngliche Stelle legen.",
            "Er muss erneut droppen, ohne Strafe."
        ],
        "answer_index": 1,
        "explanation": "Es ist straflos, wenn ein auf die richtige Weise gedroppter Ball versehentlich eine Person (einschließlich des Spielers) trifft. Kommt der Ball im Erleichterungsbereich zur Ruhe, ist das Verfahren abgeschlossen und er wird gespielt, wie er liegt (Regel 14.3c(1))."
    },
    {
        "id": "VI.4",
        "section": "VI. Straflose Erleichterung (Regeln 14-16)",
        "question": "Ihr Ball liegt im Gelände. Sie finden in der Nähe einen alten, fest im Boden verankerten Holzpfahl. Darf dieser Pfahl (unbewegliches Hemmnis) entfernt werden?",
        "image_query": "Unbewegliches Hemmnis Holzpfahl",
        "options": [
            "Ja, straflos, wenn er entfernt werden kann, ohne den Platz zu beschädigen.",
            "Ja, aber nur, wenn der Pfahl Ihre Spiellinie beeinträchtigt.",
            "Nein, er ist unbeweglich. Sie müssen straflose Erleichterung nehmen.",
            "Ja, ein Strafschlag für das Entfernen eines fest verankerten Gegenstandes."
        ],
        "answer_index": 2,
        "explanation": "Ein fest im Boden verankerter Gegenstand ist ein unbewegliches Hemmnis (Regel 16.1), das nicht entfernt werden darf. Der Spieler muss straflose Erleichterung in Anspruch nehmen."
    },
    {
        "id": "VI.5",
        "section": "VI. Straflose Erleichterung (Regeln 14-16)",
        "question": "Ihr Ball liegt in einer großen Pfütze (zeitweiliges Wasser) im Fairway. Welche Bedingung muss der 'nächstgelegene Punkt vollständiger Erleichterung' (NPE) nicht zwingend erfüllen?",
        "image_query": "Zeitweiliges Wasser",
        "options": [
            "Er muss sich im Gelände befinden.",
            "Er darf nicht näher zum Loch liegen als die ursprüngliche Lage.",
            "Er muss sich innerhalb einer Schlägerlänge vom Bezugspunkt befinden.",
            "Er muss außerhalb der Penalty Area liegen."
        ],
        "answer_index": 2,
        "explanation": "Der NPE ist der Bezugspunkt selbst. Der Erleichterungsbereich muss sich **eine Schlägerlänge** vom NPE erstrecken, aber der NPE muss im Gelände liegen und darf nicht näher zum Loch sein (Regel 16.1b)."
    },
    {
        "id": "VI.6",
        "section": "VI. Straflose Erleichterung (Regeln 14-16)",
        "question": "Ihr Ball liegt auf einer Ameisenstraße im Gelände. Sie nehmen Erleichterung in Anspruch. Der gedroppte Ball kommt außerhalb des Erleichterungsbereichs zur Ruhe. Was ist der nächste Schritt?",
        "image_query": "Ameisenhügel Erleichterung",
        "options": [
            "Sie spielen den Ball, wie er liegt, da der Drop straflos war.",
            "Sie müssen den Ball ein zweites Mal droppen.",
            "Sie legen den Ball an die Stelle, an der er zuerst den Boden berührte.",
            "Sie ziehen einen Strafschlag zu und droppen erneut."
        ],
        "answer_index": 1,
        "explanation": "Kommt ein auf die richtige Weise gedroppter Ball außerhalb des Erleichterungsbereichs zur Ruhe, muss der Spieler ein zweites Mal einen Ball droppen. Erst wenn auch dieser außerhalb zur Ruhe kommt, wird er hingelegt (Regel 14.3c(2))."
    },
    {
        "id": "VII.6",
        "section": "VII. Erleichterung mit Strafe (Regeln 17-19)",
        "question": "Sie spielen einen Ball. Es ist so gut wie sicher, dass er in einer Penalty Area liegt, er wird aber nicht gefunden. Wie viele Erleichterungsmöglichkeiten haben Sie?",
        "image_query": "Ball verloren Penalty Area",
        "options": [
            "Eine: Nur Schlag und Distanzverlust.",
            "Zwei: Schlag und Distanzverlust oder Auf der Linie zurück.",
            "Drei: Abhängig davon, ob die Penalty Area rot oder gelb ist.",
            "Fünf: Drei mit einem Strafschlag und zwei mit zwei Strafschlägen."
        ],
        "answer_index": 2,
        "explanation": "Da der Ball in der Penalty Area als bekannt oder so gut wie sicher gilt, stehen dem Spieler die normalen Optionen der Penalty Area zur Verfügung. Gelbe PA: 2 Optionen. Rote PA: 3 Optionen (Regel 17.1c, 17.1d)."
    },
    {
        "id": "VII.7",
        "section": "VII. Erleichterung mit Strafe (Regeln 17-19)",
        "question": "Was ist die Konsequenz, wenn Sie den ursprünglichen Ball spielen, nachdem Sie bereits einen provisorischen Ball ins Spiel gebracht haben?",
        "image_query": "Provisorischer Ball gespielt",
        "options": [
            "Der ursprüngliche Ball wird zum Ball im Spiel, straflos.",
            "Sie ziehen die Grundstrafe zu, da Sie einen falschen Ball gespielt haben.",
            "Der ursprüngliche Ball ist nicht länger im Spiel und darf nicht gespielt werden.",
            "Sie dürfen wählen, welchen Ball Sie weiterspielen."
        ],
        "answer_index": 2,
        "explanation": "Sobald der Spieler einen anderen Ball mit Strafe von Schlag und Distanzverlust ins Spiel gebracht hat (auch wenn es ein provisorischer Ball war, der zum Ball im Spiel wurde), ist der ursprüngliche Ball nicht länger im Spiel und darf nicht gespielt werden (Regel 18.1)."
    },
    {
        "id": "VII.8",
        "section": "VII. Erleichterung mit Strafe (Regeln 17-19)",
        "question": "Ihr Ball ist unspielbar. Sie wählen die Option 'Seitliche Erleichterung'. Wo wird der Erleichterungsbereich gemessen?",
        "image_query": "Seitliche Erleichterung",
        "options": [
            "Innerhalb einer Schlägerlänge vom Bezugspunkt.",
            "Innerhalb von zwei Schlägerlängen vom Bezugspunkt (Stelle des ursprünglichen Balls).",
            "Innerhalb von zwei Schlägerlängen von der nächstgelegenen Stelle der vollständigen Erleichterung.",
            "Innerhalb von vier Schlägerlängen von der Stelle, an der der Ball zuletzt die Grenze kreuzte."
        ],
        "answer_index": 1,
        "explanation": "Bei seitlicher Erleichterung (Regel 19.2c) ist der Bezugspunkt die Stelle des ursprünglichen Balls. Der Erleichterungsbereich erstreckt sich von dort zwei Schlägerlängen, nicht näher zum Loch."
    },
    {
        "id": "VII.9",
        "section": "VII. Erleichterung mit Strafe (Regeln 17-19)",
        "question": "Wann ist ein Spieler im Zählspiel **disqualifiziert**, nachdem er vom falschen Ort gespielt hat?",
        "image_query": "Spielen vom falschen Ort Strafe",
        "options": [
            "Wenn er den Fehler nicht berichtigt, bevor er die Scorekarte einreicht.",
            "Wenn er einen Schlag ausführt, bevor er sich entscheidet, einen zweiten Ball zu spielen.",
            "Wenn er den Fehler nicht berichtigt, bevor er den nächsten Schlag ausführt.",
            "Wenn er den Fehler nicht berichtigt, bevor er einen Schlag ausführt, um das nächste Loch zu beginnen."
        ],
        "answer_index": 3,
        "explanation": "Spielt der Spieler vom falschen Ort, muss er den Fehler berichtigen. Wenn er den Fehler nicht berichtigt, bevor er einen Schlag ausführt, um das nächste Loch zu beginnen (oder am letzten Loch, bevor er die Scorekarte einreicht), ist er disqualifiziert (Regel 14.7b(1))."
    },
    {
        "id": "VIII.2",
        "section": "VIII. Vorgehensweise (Regeln 20)",
        "question": "Sie spielen im Zählspiel mit zwei Bällen, da Sie unsicher über die Anwendung einer Regel sind. Was ist die Konsequenz, wenn Sie vergessen, dies der Spielleitung vor dem Einreichen der Scorekarte mitzuteilen?",
        "image_query": "Zwei Bälle Scorekarte",
        "options": [
            "Sie sind disqualifiziert.",
            "Sie erhalten die Grundstrafe.",
            "Nur das Ergebnis des zuerst gespielten Balls zählt.",
            "Das Ergebnis mit dem besseren Ball zählt, und Sie erhalten einen Strafschlag."
        ],
        "answer_index": 0,
        "explanation": "Der Spieler ist disqualifiziert, wenn er es versäumt, den Sachverhalt der Spielleitung mitzuteilen, bevor er seine Scorekarte einreicht (Regel 20.1c(3))."
    },
    {
        "id": "IX.3",
        "section": "IX. Andere Spielformen (Regeln 21-24)",
        "question": "Im Vierball schlägt Spieler A den Ball von der Stelle des Partners B. Was ist die Strafe?",
        "image_query": "Partner spielt falschen Ball",
        "options": [
            "Nur Spieler A erhält die Grundstrafe (zwei Strafschläge), da er einen falschen Ball gespielt hat.",
            "Die Partei (beide Spieler) ist disqualifiziert.",
            "Die Strafe gilt nur für Spieler A, aber er muss den Fehler berichtigen.",
            "Die Grundstrafe gilt nur für Spieler A, und der Schlag zählt nicht."
        ],
        "answer_index": 3,
        "explanation": "Wenn ein Spieler im Vierball den Ball des Partners als falschen Ball spielt, zieht sich nur dieser Spieler die Grundstrafe (zwei Strafschläge) zu. Der Schlag zählt nicht, und der Fehler muss berichtigt werden (Regel 23.9a(2) Ausnahme zu Regel 6.3c)."
    },
    {
        "id": "IX.4",
        "section": "IX. Andere Spielformen (Regeln 21-24)",
        "question": "Sie spielen Stableford und geben auf einem Loch auf, da Sie das Zielergebnis überschritten haben. Was müssen Sie auf der Scorekarte eintragen?",
        "image_query": "Stableford 0 Punkte",
        "options": [
            "Das Ergebnis des vorigen Schlages plus die Grundstrafe.",
            "Das tatsächliche Ergebnis, das höher ist als das Zielergebnis.",
            "Die Scorekarte darf kein Ergebnis oder ein Ergebnis ausweisen, das keine Punkte ergibt.",
            "Das Lochergebnis wird auf den Maximum Score reduziert."
        ],
        "answer_index": 2,
        "explanation": "Zur Förderung der Spielgeschwindigkeit darf ein Spieler das Spielen eines Lochs beenden, wenn er dort keine Punkte mehr erzielen kann. Die Scorekarte darf entweder kein Ergebnis oder ein Ergebnis ausweisen, das keine Punkte ergibt (Regel 21.1b(2))."
    },
    {
        "id": "X.3",
        "section": "X. Spieler mit Behinderungen (Regeln 25)",
        "question": "Ein Spieler mit Amputation, der aufgrund seiner Behinderung nicht ohne Verankerung schwingen kann, führt einen Schlag aus, während er den Schläger verankert. Was ist die Strafe?",
        "image_query": "Verankerter Schläger",
        "options": [
            "Grundstrafe (Verstoß gegen Regel 10.1b).",
            "Keine Strafe.",
            "Ein Strafschlag.",
            "Disqualifikation."
        ],
        "answer_index": 1,
        "explanation": "Für Spieler mit Amputation, die aufgrund fehlender Gliedmaßen nicht in der Lage sind, die meisten Schläger ohne Verankerung zu schwingen, darf der Schlag verankert ausgeführt werden, ohne Strafe (Regel 25.3b)."
    },
    {
        "id": "X.4",
        "section": "X. Spieler mit Behinderungen (Regeln 25)",
        "question": "Welche Erleichterung gilt für einen blinden Spieler bezüglich der Berührung von Sand in einem Bunker?",
        "image_query": "Blinder Golfer im Bunker",
        "options": [
            "Der Spieler muss die normalen Bunkerregeln befolgen (keine Ausnahmen).",
            "Er darf den Sand im Rückschwung berühren, wenn er sich im Bereich unmittelbar vor dem Ball befindet.",
            "Er darf den Sand im Bereich direkt vor oder hinter dem Ball berühren.",
            "Er darf den Sand im Rückschwung berühren, aber nicht den Sand direkt vor oder hinter dem Ball."
        ],
        "answer_index": 2,
        "explanation": "Ein blinder Spieler darf den Sand im Bunker mit einem Schläger straflos berühren: im Bereich direkt vor oder direkt hinter dem Ball, und beim Rückschwung für einen Schlag (Regel 25.2f)."
    },
    {
        "id": "X.5",
        "section": "X. Spieler mit Behinderungen (Regeln 25)",
        "question": "Welchen Status hat ein Betreuer, der von der Spielleitung zur allgemeinen Hilfe für Spieler mit intellektueller Beeinträchtigung abgestellt wird?",
        "image_query": "Betreuer Golfturnier",
        "options": [
            "Caddie des Spielers.",
            "Partner des Spielers.",
            "Äußerer Einfluss.",
            "Hilfsperson mit allen Rechten des Caddies."
        ],
        "answer_index": 2,
        "explanation": "Ein Betreuer, der von der Spielleitung abgestellt wird, um Spielern mit intellektueller Beeinträchtigung zu helfen, ist im Sinne der Regeln ein Äußerer Einfluss. Er darf dem Spieler keine Beratung erteilen (Regel 25.5a)."
    },
    {
        "id": "I.7",
        "section": "I. Grundlagen & Ausrüstung (Regeln 1-4)",
        "question": "Was ist die Strafe, wenn ein Spieler im Zählspiel seine Runde mit 15 Schlägern beginnt?",
        "image_query": "15 Schläger",
        "options": [
            "Grundstrafe am ersten Loch und der Schläger muss aus dem Spiel genommen werden.",
            "Zwei Strafschläge für jedes Loch, an dem der Verstoß vorlag, maximal vier Strafschläge für die Runde.",
            "Disqualifikation.",
            "Keine Strafe, solange der 15. Schläger nicht benutzt wird."
        ],
        "answer_index": 1,
        "explanation": "Die Strafe für Verstoß gegen Regel 4.1b (Höchstzahl von 14 Schlägern) sind zwei Strafschläge für jedes Loch, maximal jedoch vier Strafschläge für die Runde (Regel 4.1b)."
    },
    {
        "id": "I.8",
        "section": "I. Grundlagen & Ausrüstung (Regeln 1-4)",
        "question": "Ein Spieler leiht sich während der Runde einen Schläger von einem anderen Spieler, der ebenfalls am Turnier teilnimmt. Was ist die Strafe?",
        "image_query": "Schläger ausleihen",
        "options": [
            "Grundstrafe am Ende des Lochs.",
            "Zwei Strafschläge für jedes Loch, an dem der Schläger benutzt wurde.",
            "Disqualifikation.",
            "Die Grundstrafe für jeden Spieler, der dies vereinbarte."
        ],
        "answer_index": 2,
        "explanation": "Der Spieler darf keinen Schläger hinzufügen oder ausleihen, der von einem oder für einen anderen Spieler, der auf dem Platz spielt, mitgeführt wird. Die Strafe für Verstoß ist die Disqualifikation (Regel 4.1b(4))."
    },
    {
        "id": "I.9",
        "section": "I. Grundlagen & Ausrüstung (Regeln 1-4)",
        "question": "Was gehört nicht zu den fünf festgelegten Bereichen des Platzes?",
        "image_query": "Fünf Bereiche Golfplatz",
        "options": [
            "Der Abschlag des Lochs, das gerade gespielt wird.",
            "Alle Penalty Areas.",
            "Der Übungsbereich.",
            "Das Gelände."
        ],
        "answer_index": 2,
        "explanation": "Die fünf Bereiche sind: das Gelände, der Abschlag, alle Penalty Areas, alle Bunker und das Grün des Lochs. Der Übungsbereich (oder das Aus) gehört nicht dazu (Regel 2.2)."
    },
    {
        "id": "I.10",
        "section": "I. Grundlagen & Ausrüstung (Regeln 1-4)",
        "question": "Ein Spieler schlägt seinen Ball im Zählspiel. Der Ball bricht dabei in Stücke. Was muss der Spieler tun?",
        "image_query": "Ball bricht in Stücke",
        "options": [
            "Er spielt einen neuen Ball von der Stelle des Schlages, straflos.",
            "Er spielt einen neuen Ball von der Stelle des Schlages, mit einem Strafschlag.",
            "Er muss den Schlag wiederholen, straflos.",
            "Der Ball gilt als unspielbar, mit einem Strafschlag."
        ],
        "answer_index": 0,
        "explanation": "Bricht der Ball eines Spielers nach einem Schlag in Stücke, ist dies straflos, der Schlag zählt nicht. Der Spieler muss einen anderen Ball von der Stelle spielen, an der dieser Schlag ausgeführt wurde (Regel 4.2b)."
    },
    {
        "id": "II.7",
        "section": "II. Spielen der Runde & Lochs (Regeln 5-6)",
        "question": "Wann darf ein Spieler einen Mitspieler bitten, außer der Reihe zu spielen (Ready Golf)?",
        "image_query": "Ready Golf Spielfolge",
        "options": [
            "Nur im Zählspiel, um Zeit zu sparen.",
            "Nur im Lochspiel, wenn der Gegner damit einverstanden ist.",
            "Im Lochspiel darf der Spieler darum bitten, wenn es zur Schonung des Platzes dient.",
            "Im Lochspiel und Zählspiel, wenn es zur Schonung des Platzes dient."
        ],
        "answer_index": 1,
        "explanation": "Im Lochspiel dürfen Spieler übereinkommen, dass einer von ihnen außerhalb der Reihenfolge spielt, um Zeit zu sparen (Regel 6.4a Ausnahme). Im Zählspiel ist dies ohne Absprache erlaubt (Regel 6.4b(2))."
    },
    {
        "id": "II.8",
        "section": "II. Spielen der Runde & Lochs (Regeln 5-6)",
        "question": "Ein Spieler schlägt im Lochspiel vom falschen Abschlag ab. Der Gegner möchte, dass der Schlag zählt. Was ist die Folge?",
        "image_query": "Abschlag falscher Ort Lochspiel",
        "options": [
            "Der Schlag zählt, und der Ball ist im Spiel.",
            "Der Spieler erhält die Grundstrafe.",
            "Der Gegner muss den Schlag für ungültig erklären, sonst zieht er selbst eine Strafe zu.",
            "Das Loch wird geteilt."
        ],
        "answer_index": 0,
        "explanation": "Der Schlag ist straflos, und der Gegner darf den Schlag für ungültig erklären. Erklärt der Gegner den Schlag NICHT für ungültig, zählt der Schlag, und der Ball ist im Spiel (Regel 6.1b(1))."
    },
    {
        "id": "II.9",
        "section": "II. Spielen der Runde & Lochs (Regeln 5-6)",
        "question": "Nach Regel 5.5b ist das Üben von Putten oder Chippen nach Beendigung eines Lochs nur auf oder nahe dem Grün des zuletzt gespielten Lochs, jedem Übungsgrün und dem Abschlag des nächsten Lochs erlaubt. Welche Einschränkung gilt dabei?",
        "image_query": "Übungsschlag Bunker",
        "options": [
            "Es darf nur das Putten, nicht das Chippen geübt werden.",
            "Solche Übungsschläge dürfen nicht aus einem Bunker ausgeführt werden.",
            "Es muss das Einverständnis der Gruppe eingeholt werden.",
            "Die Bälle dürfen nicht gereinigt werden."
        ],
        "answer_index": 1,
        "explanation": "Die Ausnahme erlaubt das Üben von Putten oder Chippen auf den genannten Flächen, aber solche Übungsschläge dürfen nicht aus einem Bunker ausgeführt werden (Regel 5.5b Ausnahme)."
    },
    {
        "id": "II.10",
        "section": "II. Spielen der Runde & Lochs (Regeln 5-6)",
        "question": "Was passiert im Lochspiel, wenn Sie außerhalb der Reihenfolge spielen?",
        "image_query": "Spielfolge Lochspiel",
        "options": [
            "Der Gegner darf den Schlag für ungültig erklären.",
            "Sie ziehen sich einen Strafschlag zu.",
            "Sie verlieren das Loch.",
            "Der Schlag ist straflos und zählt immer."
        ],
        "answer_index": 0,
        "explanation": "Spielt der Spieler, wenn sein Gegner an der Reihe war, ist dies straflos, aber der Gegner hat das Recht, den Schlag für ungültig zu erklären (Regel 6.4a(2))."
    },
    {
        "id": "III.13",
        "section": "III. Spielen des Balls (Regeln 7-11)",
        "question": "Was passiert, wenn ein Spieler im Zählspiel absichtlich den sich bewegenden Ball eines anderen Spielers ablenkt?",
        "image_query": "Spieler lenkt Ball ab",
        "options": [
            "Der Schlag des anderen Spielers muss straflos wiederholt werden.",
            "Der ablenkende Spieler zieht sich die Grundstrafe zu.",
            "Es ist straflos, aber der Ball muss an die geschätzte Stelle gelegt werden.",
            "Beide Spieler ziehen sich die Grundstrafe zu."
        ],
        "answer_index": 1,
        "explanation": "Ein Spieler zieht sich die Grundstrafe zu, wenn er absichtlich einen Ball in Bewegung ablenkt oder aufhält, unabhängig davon, ob es sein eigener Ball oder der Ball eines anderen Spielers ist (Regel 11.2b)."
    },
    {
        "id": "III.14",
        "section": "III. Spielen des Balls (Regeln 7-11)",
        "question": "Ihr Ball kommt zur Ruhe. Er bewegt sich, weil Sie einen Übungsschwung ausführen, der den Boden in der Nähe des Balls berührt. Was ist die Strafe?",
        "image_query": "Übungsschwung bewegt Ball",
        "options": [
            "Keine Strafe, wenn der Ball zurückgelegt wird.",
            "Grundstrafe, da der Spieler die Bewegung verursacht hat.",
            "Ein Strafschlag, da der Spieler die Bewegung verursacht hat.",
            "Der Schlag muss wiederholt werden."
        ],
        "answer_index": 2,
        "explanation": "Verursacht der Spieler (oder sein Caddie) die Bewegung des Balls in Ruhe, zieht er sich einen Strafschlag zu und muss den Ball zurücklegen (Regel 9.4b). Dies gilt nicht auf dem Abschlag oder Grün."
    },
    {
        "id": "III.15",
        "section": "III. Spielen des Balls (Regeln 7-11)",
        "question": "Ihr Ball liegt in Ruhe. Ein äußerer Einfluss (z.B. ein Vogel oder ein anderer Ball im Zählspiel) bewegt Ihren Ball. Was ist die Folge?",
        "image_query": "Vogel bewegt Ball",
        "options": [
            "Der Ball muss von der neuen Stelle gespielt werden, straflos.",
            "Der Ball muss an die ursprüngliche Stelle zurückgelegt werden, straflos.",
            "Sie ziehen einen Strafschlag zu und legen den Ball zurück.",
            "Die Grundstrafe für den äußeren Einfluss."
        ],
        "answer_index": 1,
        "explanation": "Wird ein Ball in Ruhe durch einen äußeren Einfluss bewegt (Regel 9.6), ist dies straflos, und der Ball muss an seine ursprüngliche Stelle zurückgelegt werden."
    },
    {
        "id": "III.16",
        "section": "III. Spielen des Balls (Regeln 7-11)",
        "question": "Sie spielen einen Schlag. Der Ball trifft ein unbewegliches Hemmnis (z.B. einen Bewässerungskopf) und lenkt den Ball zu Ihrem Vorteil ab. Was ist die Folge?",
        "image_query": "Ball trifft Bewässerungskopf",
        "options": [
            "Der Schlag muss straflos wiederholt werden.",
            "Sie ziehen die Grundstrafe zu.",
            "Der Schlag zählt, und der Ball wird gespielt, wie er liegt.",
            "Der Schlag muss wiederholt werden, mit einem Strafschlag."
        ],
        "answer_index": 2,
        "explanation": "Trifft der Ball in Bewegung versehentlich einen äußeren Einfluss (wie ein unbewegliches Hemmnis), ist dies straflos, und der Ball wird gespielt, wie er liegt (Regel 11.1a)."
    },
    {
        "id": "IV.9",
        "section": "IV. Sonderregeln für Bunker & Grüns (Regeln 12-13)",
        "question": "Ihr Ball ragt über den Lochrand hinaus. Ein Mitspieler hebt ihn auf, nachdem er sich nach 5 Sekunden nicht bewegt hat. Was ist die Konsequenz im Zählspiel?",
        "image_query": "Mitspieler hebt Ball am Lochrand",
        "options": [
            "Der Spieler zieht einen Strafschlag zu, da er die Bewegung verursacht hat.",
            "Der Ball des Spielers gilt als eingelocht, und der Mitspieler zieht die Grundstrafe zu.",
            "Der Spieler muss den Schlag wiederholen.",
            "Der Mitspieler zieht die Grundstrafe zu, und der Ball muss zurückgelegt werden."
        ],
        "answer_index": 1,
        "explanation": "Hebt ein anderer Spieler absichtlich den Ball des Spielers auf, bevor die Wartezeit endet, gilt der Ball des Spielers als eingelocht, und der andere Spieler zieht sich die Grundstrafe zu (Regel 13.3b)."
    },
    {
        "id": "IV.10",
        "section": "IV. Sonderregeln für Bunker & Grüns (Regeln 12-13)",
        "question": "Was ist die Folge, wenn ein Spieler im Bunker den Sand absichtlich berührt, um dessen Zustand zu prüfen?",
        "image_query": "Sandzustand prüfen",
        "options": [
            "Dies ist straflos, um Hinweise für den nächsten Schlag zu erhalten.",
            "Grundstrafe (Zwei Strafschläge).",
            "Ein Strafschlag.",
            "Der Spieler muss den Ball im Bunker für unspielbar erklären."
        ],
        "answer_index": 1,
        "explanation": "Das absichtliche Berühren des Sandes, um den Zustand zu prüfen und dadurch Hinweise für den nächsten Schlag zu erhalten, ist verboten und zieht die Grundstrafe nach sich (Regel 12.2b(1))."
    },
    {
        "id": "IV.11",
        "section": "IV. Sonderregeln für Bunker & Grüns (Regeln 12-13)",
        "question": "Welche Art von Schäden auf dem Grün darf jederzeit ausgebessert werden?",
        "image_query": "Schaden auf Grün",
        "options": [
            "Alle Schäden, einschließlich der durch Bodenbelüftungslöcher entstandenen.",
            "Nur Balleinschlaglöcher und Schäden durch Schuhe (z.B. Spikemarken).",
            "Alle Schäden, außer solchen, die durch Wind oder Wasser verursacht wurden.",
            "Alle Schäden, außer natürlichen Oberflächenunebenheiten und Schäden durch übliche Pflegearbeiten."
        ],
        "answer_index": 3,
        "explanation": "Der Begriff 'Schäden auf dem Grün' umfasst unter anderem Balleinschlaglöcher und Schuhschäden, schließt aber Schäden durch übliche Pflegearbeiten (wie Bodenbelüftungslöcher) und natürliche Oberflächenunebenheiten aus (Regel 13.1c(2))."
    },
    {
        "id": "IV.12",
        "section": "IV. Sonderregeln für Bunker & Grüns (Regeln 12-13)",
        "question": "Ihr Ball liegt außerhalb des Bunkers. Sie entfernen Sand vom Fairway, der Ihren Schlag beeinträchtigt, aber der Sand stammt aus dem Bunker. Ist dies erlaubt?",
        "image_query": "Sand aus Bunker entfernen",
        "options": [
            "Nein, Sand aus dem Bunker darf nicht entfernt werden (Grundstrafe).",
            "Ja, dies ist straflos, da Sand außerhalb des Bunkers als loser hinderlicher Naturstoff behandelt wird.",
            "Ja, aber nur, wenn Sie dafür den Fuß und nicht den Schläger benutzen.",
            "Nein, da Sand generell kein loser hinderlicher Naturstoff ist."
        ],
        "answer_index": 1,
        "explanation": "Sand oder loses Erdreich, die außerhalb des Bunkers liegen, dürfen straflos entfernt werden. Sand ist außerhalb des Bunkers kein fester Bestandteil (Regel 13.1c(1))."
    },
    {
        "id": "V.5",
        "section": "VI. Straflose Erleichterung (Regeln 14-16)",
        "question": "Ein Spieler nimmt Erleichterung auf der Linie zurück in Anspruch. Die Stelle, an der der Ball gedroppt wird, schafft einen Erleichterungsbereich. Wie groß ist dieser Bereich?",
        "image_query": "Erleichterung auf der Linie",
        "options": [
            "Zwei Schlägerlängen in jede Richtung.",
            "Zwei Schlägerlängen von der Bezugslinie.",
            "Eine Schlägerlänge in jede Richtung von der Stelle, an der der Ball zuerst den Boden berührt.",
            "Eine Schlägerlänge von der Bezugslinie, nicht näher zum Loch."
        ],
        "answer_index": 2,
        "explanation": "Bei Erleichterung auf der Linie zurück muss der Ball auf der Linie gedroppt werden. Die Stelle, an der er zuerst den Boden berührt, schafft einen Erleichterungsbereich von einer Schlägerlänge in alle Richtungen von diesem Punkt aus (Regel 14.3b(3))."
    },
    {
        "id": "VI.9",
        "section": "VI. Straflose Erleichterung (Regeln 14-16)",
        "question": "Ihr Ball liegt im Gelände und wird durch ein Loch, das durch einen Erdbohrer für einen entfernten Pfahl entstanden ist, beeinträchtigt. Wie verfahren Sie?",
        "image_query": "Erdbohrer Loch UPV",
        "options": [
            "Sie erhalten Erleichterung mit einem Strafschlag.",
            "Sie erhalten straflose Erleichterung, da es sich um ein von der Spielleitung verursachtes Loch handelt.",
            "Sie müssen den Ball spielen, wie er liegt.",
            "Sie können den Ball für unspielbar erklären."
        ],
        "answer_index": 1,
        "explanation": "Ein solches Loch ist ein Teil des Bodens in Ausbesserung (UPV). Der Spieler darf straflose Erleichterung in Anspruch nehmen (Regel 16.1)."
    },
    {
        "id": "VI.10",
        "section": "VI. Straflose Erleichterung (Regeln 14-16)",
        "question": "Wann darf ein Spieler einen Ball, der außerhalb des Grüns aufgenommen wurde, reinigen?",
        "image_query": "Ball reinigen",
        "options": [
            "Immer, außer wenn er zur Identifizierung aufgenommen wurde.",
            "Immer, außer wenn er aufgenommen wurde, um zu prüfen, ob er eine Kerbe hat.",
            "Nur, wenn er in einer Penalty Area liegt.",
            "Nur, wenn die Scorekarte des Gegners falsch ist."
        ],
        "answer_index": 1,
        "explanation": "Ein an anderer Stelle (nicht Grün) aufgenommener Ball darf immer gereinigt werden, außer wenn er aufgenommen wurde, um zu prüfen, ob er eine Kerbe oder einen Sprung hat (Regel 14.1c)."
    },
    {
        "id": "VI.11",
        "section": "VI. Straflose Erleichterung (Regeln 14-16)",
        "question": "Ihr Ball liegt auf einer Ameisenstraße. Sie entfernen den Hügel und bewegen dabei versehentlich den Ball. Was ist die Folge?",
        "image_query": "Ameisenhügel bewegt Ball Strafe",
        "options": [
            "Grundstrafe, da Ameisenhügel lose hinderliche Naturstoffe sind.",
            "Ein Strafschlag, da der Ball im Gelände bewegt wurde.",
            "Keine Strafe, aber der Ball muss zurückgelegt werden.",
            "Die Grundstrafe für das Entfernen eines beweglichen Hemmnisses."
        ],
        "answer_index": 2,
        "explanation": "Ameisenhügel sind lose hinderliche Naturstoffe. Verursacht das Entfernen eines losen hinderlichen Naturstoffs durch einen Spieler die Bewegung seines Balls außerhalb des Grüns, zieht er sich einen Strafschlag zu (Regel 15.1b, Regel 9.4b). Da Ameisenhügel jedoch auch als Tierloch gelten, kann straflose Erleichterung genommen werden."
    },
    {
        "id": "VII.10",
        "section": "VII. Erleichterung mit Strafe (Regeln 17-19)",
        "question": "Sie spielen Ihren Ball in einer Penalty Area. Der Ball kommt in derselben Penalty Area zur Ruhe. Welche der folgenden Optionen steht Ihnen **nicht** zur Verfügung?",
        "image_query": "Ball bleibt in Penalty Area",
        "options": [
            "Erleichterung mit Schlag und Distanzverlust (1 Strafschlag).",
            "Erleichterung auf der Linie zurück (1 Strafschlag).",
            "Seitliche Erleichterung (nur bei roter PA, 1 Strafschlag).",
            "Zwei Strafschläge, um an der Stelle des vorigen Schlags außerhalb der PA zu droppen."
        ],
        "answer_index": 3,
        "explanation": "Wenn der Ball innerhalb der PA gespielt wird und in der PA zur Ruhe kommt, hat der Spieler die normalen Optionen (17.1d) mit einem Strafschlag. Die Option, von der Stelle des vorigen Schlags **außerhalb** der PA mit **zwei** Strafschlägen zu spielen (Regel 17.2a(2)), ist nur verfügbar, wenn der Schlag außerhalb der PA ausgeführt wurde und der Ball in der PA landete."
    },
    {
        "id": "VII.11",
        "section": "VII. Erleichterung mit Strafe (Regeln 17-19)",
        "question": "Sie erklären Ihren Ball im Gelände für unspielbar. Sie entscheiden sich für die Erleichterung 'Schlag und Distanzverlust'. Wie viele Strafschläge ziehen Sie sich zu?",
        "image_query": "Unspielbarer Ball Schlag Distanzverlust",
        "options": [
            "Keine Strafe.",
            "Einen Strafschlag.",
            "Zwei Strafschläge.",
            "Die Grundstrafe plus Schlag und Distanzverlust."
        ],
        "answer_index": 1,
        "explanation": "Die Erleichterung für einen unspielbaren Ball kostet immer einen Strafschlag, unabhängig von der gewählten Option (Schlag und Distanzverlust, Auf der Linie zurück, Seitliche Erleichterung) (Regel 19.2)."
    },
    {
        "id": "III.17",
        "section": "III. Spielen des Balls (Regeln 7-11)",
        "question": "Wann ist es straflos, wenn Ihr Ball in Ruhe auf dem Grün versehentlich bewegt wird?",
        "image_query": "Ball auf Grün versehentlich bewegt",
        "options": [
            "Nur wenn Sie die Bewegung nicht selbst verursacht haben.",
            "Immer, unabhängig davon, wie die Bewegung verursacht wurde.",
            "Nur wenn Sie den Ball markiert haben.",
            "Nur wenn der Ball durch Naturkräfte bewegt wurde."
        ],
        "answer_index": 1,
        "explanation": "Es ist straflos, wenn ein Spieler, Gegner oder ein anderer Spieler im Zählspiel versehentlich den Ball oder Ballmarker des Spielers auf dem Grün bewegt (Regel 13.1d(1))."
    },
    {
        "id": "IV.13",
        "section": "IV. Sonderregeln für Bunker & Grüns (Regeln 12-13)",
        "question": "Wann dürfen Sie Sand im Bunker nach dem Schlag einebnen?",
        "image_query": "Bunker harken nach Schlag",
        "options": [
            "Bevor Sie den Schlag ausführen.",
            "Nachdem der Ball den Bunker verlassen hat oder Sie Erleichterung außerhalb des Bunkers in Anspruch genommen haben.",
            "Nur, wenn Sie sich dabei nicht auf der Spiellinie zum nächsten Schlag befinden.",
            "Nie, da es die Bedingungen des Platzes verändern könnte."
        ],
        "answer_index": 1,
        "explanation": "Nachdem ein Ball im Bunker gespielt wurde und sich außerhalb des Bunkers befindet oder der Spieler Erleichterung außerhalb des Bunkers genommen hat, darf der Spieler den Sand straflos zum Zweck der Platzpflege einebnen (Regel 12.2b(3))."
    },
    {
        "id": "III.18",
        "section": "III. Spielen des Balls (Regeln 7-11)",
        "question": "Ihr Ball kommt zur Ruhe. Sie bemerken, dass er in einer Fuchsfährte liegt. Was ist die Konsequenz, wenn Sie die Fuchsfährte ausbessern?",
        "image_query": "Fuchsfährte ausbessern",
        "options": [
            "Grundstrafe für das Verbessern der Bedingungen.",
            "Ein Strafschlag.",
            "Straflos, da es sich um ein Tierloch handelt.",
            "Straflos, wenn der Ball zurückgelegt wird."
        ],
        "answer_index": 2,
        "explanation": "Eine Fuchsfährte ist ein Tierloch und gehört zu den Ungewöhnlichen Platzverhältnissen (UPV). UPV dürfen nicht einfach ausgebessert werden (Regel 8.1a). Der Spieler muss straflose Erleichterung nehmen (Regel 16.1)."
    },
    {
        "id": "II.11",
        "section": "II. Spielen der Runde & Lochs (Regeln 5-6)",
        "question": "Ein Spieler schlägt im Zählspiel vom falschen Abschlag ab. Er korrigiert den Fehler, bevor er den nächsten Schlag beginnt. Was ist die Strafe?",
        "image_query": "Falscher Abschlag Zählspiel Strafe",
        "options": [
            "Grundstrafe (zwei Strafschläge).",
            "Ein Strafschlag.",
            "Keine Strafe.",
            "Disqualifikation."
        ],
        "answer_index": 0,
        "explanation": "Der Spieler zieht sich die Grundstrafe (zwei Strafschläge) zu und muss den Fehler berichtigen, indem er einen Ball von innerhalb des Abschlags spielt. Der falsch gespielte Schlag zählt nicht (Regel 6.1b(2))."
    },
    {
        "id": "VII.12",
        "section": "VII. Erleichterung mit Strafe (Regeln 17-19)",
        "question": "Welche Farbe wird verwendet, um Penalty Areas zu kennzeichnen, die eine zusätzliche seitliche Erleichterungsmöglichkeit bieten?",
        "image_query": "Rote Penalty Area Markierung",
        "options": [
            "Gelb.",
            "Blau.",
            "Rot.",
            "Weiß."
        ],
        "answer_index": 2,
        "explanation": "Rote Penalty Areas bieten zusätzlich die Möglichkeit der seitlichen Erleichterung. Gelbe Penalty Areas bieten nur die Optionen Schlag und Distanzverlust sowie Auf der Linie zurück (Regel 17.1d)."
    },
    {
        "id": "VI.12",
        "section": "VI. Straflose Erleichterung (Regeln 14-16)",
        "question": "Ihr Ball liegt in einer Roten Penalty Area. Sie nehmen Erleichterung auf der Linie zurück. Wo liegt der Bezugspunkt?",
        "image_query": "Erleichterung auf der Linie Bezugspunkt",
        "options": [
            "Die Stelle des Balls.",
            "Der nächstgelegene Punkt der vollständigen Erleichterung.",
            "Der geschätzte Punkt, an dem der ursprüngliche Ball zuletzt die Grenze der PA kreuzte.",
            "Der geschätzte Punkt, an dem der Ball zur Ruhe kam."
        ],
        "answer_index": 2,
        "explanation": "Bei der Erleichterung 'auf der Linie zurück' (Regel 17.1d(2)) ist der Bezugspunkt der geschätzte Punkt, an dem der ursprüngliche Ball zuletzt die Grenze der Penalty Area kreuzte. Von dort wird die Bezugslinie zum Loch gezogen."
    },
    {
        "id": "VIII.4",
        "section": "VIII. Vorgehensweise (Regeln 20)",
        "question": "Was geschieht, wenn ein Spieler im Zählspiel versehentlich eine Scorekarte mit einem **höheren** Lochergebnis als tatsächlich gespielt einreicht?",
        "image_query": "Scorekarte falsches Ergebnis",
        "options": [
            "Der Spieler ist disqualifiziert.",
            "Das eingetragene höhere Ergebnis gilt.",
            "Das Ergebnis wird korrigiert und der Spieler erhält einen Strafschlag.",
            "Der Spieler muss die Runde erneut spielen."
        ],
        "answer_index": 1,
        "explanation": "Ist das eingetragene Ergebnis höher als das tatsächliche Ergebnis, gilt das eingetragene höhere Ergebnis für das Loch (Regel 3.3b(3))."
    },
    {
        "id": "III.19",
        "section": "III. Spielen des Balls (Regeln 7-11)",
        "question": "Ein Spieler schlägt im Zählspiel. Der Ball bewegt sich, nachdem er den Rückschwung begonnen hat. Was muss der Spieler tun?",
        "image_query": "Rückschwung Ball bewegt sich",
        "options": [
            "Er muss den Schlag wiederholen, straflos.",
            "Der Schlag zählt und der Ball muss von der neuen Stelle gespielt werden.",
            "Der Ball muss zurückgelegt werden, und der Spieler erhält einen Strafschlag.",
            "Der Spieler muss den Ball an die ursprüngliche Stelle zurücklegen, straflos."
        ],
        "answer_index": 1,
        "explanation": "Beginnt sich der Ball in Ruhe zu bewegen, nachdem der Spieler den Schlag oder Rückschwung begonnen hat und den Schlag dann ausführt, darf der Ball nicht zurückgelegt werden. Der Schlag zählt, und der Ball muss von der Stelle gespielt werden, an der er zur Ruhe kommt (Regel 9.1b)."
    },
    {
        "id": "IV.14",
        "section": "IV. Sonderregeln für Bunker & Grüns (Regeln 12-13)",
        "question": "Ein Ball liegt im Gelände, aber seine Spiellinie zum Loch wird durch Sand eines Bunkers beeinträchtigt. Was dürfen Sie tun?",
        "image_query": "Sand Spiellinie",
        "options": [
            "Den Sand vom Bunker bis zur Spiellinie entfernen (straflos).",
            "Den Sand nur außerhalb des Bunkers entlang der Spiellinie entfernen (straflos).",
            "Nichts, da das Verbessern der Spiellinie im Gelände nicht erlaubt ist.",
            "Erleichterung vom unbeweglichen Sand im Bunker nehmen."
        ],
        "answer_index": 2,
        "explanation": "Regel 12.2b(1) verbietet das Berühren des Sandes vor dem Schlag. Außerhalb des Bunkers gilt Regel 8.1a, die das Entfernen von Sand oder losem Erdreich auf der Spiellinie verbietet (Grundstrafe)."
    },
    {
        "id": "X.6",
        "section": "X. Spieler mit Behinderungen (Regeln 25)",
        "question": "Wie wird der Status 'Stand' für einen Spieler definiert, der eine Mobilitätshilfe (z.B. Rollstuhl) benutzt?",
        "image_query": "Stand Rollstuhl Golf",
        "options": [
            "Nur die Stellung der Füße zählt.",
            "Die Stellung der Füße und des Körpers, aber nicht die Mobilitätshilfe.",
            "Die Stellung der Füße und des Körpers sowie die Stellung der Mobilitätshilfe.",
            "Der Stand ist nicht definiert, da die Mobilitätshilfe als Hemmnis gilt."
        ],
        "answer_index": 2,
        "explanation": "Für Spieler, die eine Mobilitätshilfe benutzen, wird die Definition des Begriffs 'Stand' dahingehend geändert, dass er auch die Stellung der Mobilitätshilfe mit einschließt (Regel 25.4d)."
    },
    {
        "id": "V.6",
        "section": "VI. Straflose Erleichterung (Regeln 14-16)",
        "question": "Wird ein Ball, der außerhalb des Grüns aufgenommen wurde, gereinigt, obwohl dies nicht erlaubt ist, zieht sich der Spieler einen Strafschlag zu. Was muss er danach tun?",
        "image_query": "Ball unzulässig gereinigt",
        "options": [
            "Er muss den Ball erneut droppen.",
            "Er muss den Ball von der Stelle des vorigen Schlages spielen.",
            "Er muss den Ball an die Stelle zurücklegen, von der er aufgenommen wurde.",
            "Er muss das Loch mit einem Strafschlag beenden."
        ],
        "answer_index": 2,
        "explanation": "Reinigt der Spieler seinen Ball, wenn dies nicht erlaubt ist, zieht er sich einen Strafschlag zu und muss den Ball an die Stelle zurücklegen, von der er aufgenommen wurde (Regel 14.1c)."
    },
    {
        "id": "VI.13",
        "section": "VI. Straflose Erleichterung (Regeln 14-16)",
        "question": "Ihr Ball liegt im Gelände. Sie finden in der Nähe einen Baum, der nur lose Zweige hat. Sie entfernen einen der Äste und bewegen den Ball versehentlich. Was ist die Folge?",
        "image_query": "Loser Zweig bewegt Ball",
        "options": [
            "Straflos, da es sich um einen losen hinderlichen Naturstoff handelt; Ball zurücklegen.",
            "Ein Strafschlag, da Sie die Bewegung des Balls verursacht haben; Ball zurücklegen.",
            "Grundstrafe, da Sie die Bedingungen verbessert haben.",
            "Der Ball muss von der neuen Stelle gespielt werden, straflos."
        ],
        "answer_index": 1,
        "explanation": "Das Entfernen eines losen hinderlichen Naturstoffs, das die Bewegung des Balls außerhalb des Grüns verursacht, zieht einen Strafschlag nach sich, und der Ball muss zurückgelegt werden (Regel 15.1b, Regel 9.4b)."
    },
    {
        "id": "III.20",
        "section": "III. Spielen des Balls (Regeln 7-11)",
        "question": "Ihr Ball kommt zur Ruhe in einem Teil des Geländes, das Sie für unspielbar halten. Wie lange haben Sie Zeit, um nach dem Ball zu suchen, bevor er als verloren gilt?",
        "image_query": "Ballsuche im Gelände",
        "options": [
            "Fünf Minuten.",
            "Drei Minuten.",
            "Zwei Minuten.",
            "Zehn Minuten."
        ],
        "answer_index": 1,
        "explanation": "Ein Ball ist verloren, wenn er nicht innerhalb von drei Minuten gefunden wurde, nachdem der Spieler oder sein Caddie begonnen hat, nach ihm zu suchen (Regel 18.2a(1))."
    },
    {
        "id": "IX.5",
        "section": "IX. Andere Spielformen (Regeln 21-24)",
        "question": "Im Vierer (Foursomes) schlägt Partner A den Ball. Was ist der nächste Schritt der Partei, wenn dieser Schlag annulliert wird?",
        "image_query": "Schlag annulliert Vierer",
        "options": [
            "Partner B muss den Schlag ausführen, um die abwechselnde Reihenfolge beizubehalten.",
            "Partner A muss den Schlag erneut ausführen.",
            "Die Partei muss mit Schlag und Distanzverlust verfahren.",
            "Die Partei zieht die Grundstrafe zu."
        ],
        "answer_index": 1,
        "explanation": "Wird ein Schlag annulliert, wiederholt oder zählt er nach einer Regel nicht, muss derselbe Partner, der den Schlag ausgeführt hatte, den nächsten Schlag der Partei ausführen (Regel 22.3)."
    },
    {
        "id": "VII.13",
        "section": "VII. Erleichterung mit Strafe (Regeln 17-19)",
        "question": "Sie spielen Ihren Ball in einer Penalty Area. Der Ball ist unspielbar in einem Baum innerhalb der Penalty Area. Welche Erleichterungsoption steht Ihnen zur Verfügung?",
        "image_query": "Unspielbarer Ball in Penalty Area",
        "options": [
            "Erleichterung für unspielbaren Ball außerhalb der PA mit 1 Strafschlag.",
            "Erleichterung für unspielbaren Ball mit 2 Strafschlägen.",
            "Die Optionen der Penalty Area (Regel 17), mit 1 Strafschlag.",
            "Erleichterung am nächstgelegenen Punkt der vollständigen Erleichterung, straflos."
        ],
        "answer_index": 2,
        "explanation": "Liegt der Ball eines Spielers innerhalb einer Penalty Area, gibt es keine Erleichterung für unspielbare Bälle nach Regel 19. Der Spieler darf lediglich Erleichterung mit Strafschlag nach Regel 17 in Anspruch nehmen (Regel 17.3)."
    },
    {
        "id": "V.7",
        "section": "V. Ball aufnehmen & ins Spiel zurückbringen (Regel 14)",
        "question": "Ein Spieler markiert den Ball mit einem Ballmarker, nimmt ihn auf und reinigt ihn. Welche Strafe droht ihm, wenn er vergisst, den Ballmarker vor dem Schlag zu entfernen?",
        "image_query": "Ballmarker vergessen",
        "options": [
            "Keine Strafe, wenn der Ball eingelocht wird.",
            "Ein Strafschlag.",
            "Grundstrafe (Zwei Strafschläge).",
            "Disqualifikation."
        ],
        "answer_index": 1,
        "explanation": "Nimmt der Spieler seinen Ball auf und vergisst, den Ballmarker vor dem Schlag zu entfernen, zieht er sich einen Strafschlag zu (Regel 14.1a)."
    },
    {
        "id": "IV.15",
        "section": "IV. Sonderregeln für Bunker & Grüns (Regeln 12-13)",
        "question": "Was passiert, wenn der Ball in Bewegung den im Loch befindlichen Flaggenstock trifft, nachdem der Spieler ihn absichtlich in eine unzulässige Position bewegt hat?",
        "image_query": "Flaggenstock absichtlich bewegt",
        "options": [
            "Der Schlag ist straflos, der Ball wird gespielt, wie er liegt.",
            "Der Spieler zieht sich die Grundstrafe zu.",
            "Der Schlag zählt nicht, muss aber wiederholt werden.",
            "Der Spieler zieht einen Strafschlag zu und spielt den Ball, wie er liegt."
        ],
        "answer_index": 1,
        "explanation": "Wenn der Spieler versucht, einen Vorteil durch absichtliches Bewegen des Flaggenstocks in eine unzulässige Stellung zu erreichen und der Ball den Flaggenstock trifft, zieht er sich die Grundstrafe zu (Regel 13.2a(1))."
    },
    {
        "id": "III.21",
        "section": "III. Spielen des Balls (Regeln 7-11)",
        "question": "Ihr Ball liegt im Gelände. Sie treten aus Versehen auf einen losen Stein, der daraufhin einen anderen Gegenstand bewegt, der Ihren Ball bewegt. Was ist die Folge?",
        "image_query": "Kette bewegt Ball",
        "options": [
            "Grundstrafe, da Sie die Bewegung verursacht haben.",
            "Ein Strafschlag, da es sich um lose hinderliche Naturstoffe handelt.",
            "Keine Strafe, da die Bewegung indirekt war.",
            "Keine Strafe, der Ball muss zurückgelegt werden."
        ],
        "answer_index": 3,
        "explanation": "Die Bewegung ist straflos, wenn sie versehentlich beim Versuch, den Ball zu finden, geschieht. Der Ball muss an die ursprüngliche Stelle zurückgelegt werden (Regel 7.4)."
    }
];

// ====================================================================================
// TEIL 2: LOGIK UND AUSWERTUNG (FEHLERBEHEBUNG FÜR MODULSTART)
// ====================================================================================

let quizData = [...quizDataOriginal]; // Aktuell verwendete Fragenliste
let currentQuestionIndex = 0;
let correctAnswersCount = 0;
let incorrectAnswers = [];

// DOM-Elemente werden lazy abgerufen
function getQuizArea() { return document.getElementById('quiz-area'); }
function getNextButton() { return document.getElementById('next-btn'); }

// ZÄHLT ALLE FRAGEN PRO ABSCHNITT FÜR DIE FORTSCHRITTSANZEIGE
function countSectionQuestions(data) {
    return data.reduce((acc, question) => {
        const section = question.section;
        acc[section] = (acc[section] || 0) + 1;
        return acc;
    }, {});
}

// Globaler Zugriff auf die Section Counts der aktuell verwendeten Fragen
let sectionCounts = countSectionQuestions(quizData);


function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function getEvaluationText(scorePercentage) {
    const totalQuestions = quizData.length;
    const incorrectCount = totalQuestions - correctAnswersCount;

    // Skaliert die Fehlerzahl, damit die Staffelung (basierend auf 100 Fragen) funktioniert
    const errorScale = 100 / totalQuestions;
    const scaledIncorrectCount = incorrectCount * errorScale;

    if (scaledIncorrectCount >= 80) { // > 80 Fehler (0-20% richtig)
        return "Du musst dich wirklich **mehr anstrengen**! Du hast noch massive Lücken im Regelwerk. Konzentriere dich auf die Erklärungen und versuche es erneut – die Chippingdales zählen auf dich!";
    } else if (scaledIncorrectCount >= 50) { // 50-79 Fehler (21-50% richtig)
        return "Naja, da muss **mehr kommen**! Das Ergebnis ist enttäuschend. Du verpasst viele Grundlagen. Wirf einen intensiven Blick in die Regeln, bevor du das nächste Turnier spielst.";
    } else if (scaledIncorrectCount >= 30) { // 30-49 Fehler (51-70% richtig)
        return "OHA! Du bist im Mittelfeld, aber das ist noch **nicht befriedigend**. Die Lücken sind noch zu groß, um Strafschläge sicher zu vermeiden. Hol dir das Regelbuch zur Hand!";
    } else if (scaledIncorrectCount >= 15) { // 15-29 Fehler (71-85% richtig)
        return "Befriedigend! Du hast die meisten Hauptregeln erfasst, aber es gibt noch Details zu verbessern. Eine **gute** Grundlage, aber noch nicht fehlerfrei. Kämpfe um die Spitze!";
    } else if (scaledIncorrectCount > 0) { // 1-14 Fehler (86-99% richtig)
        return "Gut! Ein **sehr gutes** Ergebnis! Du bist ein Regelkenner, aber ein paar kleine Fehler haben sich eingeschlichen. Das Ziel ist 100%! Du bist fast ein Regel-Ass!";
    } else { // 0 Fehler (100% richtig)
        return "Überragend! Das ist ein **perfektes Ergebnis**! Du bist ein wandelndes Regelbuch. Dies garantiert eine stressfreie Runde. Weiter so, Champion!";
    }
}

// ZÄHLT, WIE VIELE FRAGEN IM AKTUEN ABSCHNITT BEREITS GESPIELT WURDEN
function countPlayedInSection(currentSection, currentIndex) {
    let playedCount = 0;
    // Durchläuft das QuizData Array bis zum aktuellen Index
    for (let i = 0; i < currentIndex; i++) {
        if (quizData[i].section === currentSection) {
            playedCount++;
        }
    }
    // Da der aktuelle Index noch nicht gespielt wurde, zählen wir ihn für den Fortschritt hinzu
    return playedCount + 1;
}

function displayFinalResult() {
    const totalQuestions = quizData.length;
    const percentage = (correctAnswersCount / totalQuestions) * 100;
    const evaluationText = getEvaluationText(percentage);

    let incorrectListHtml = '';
    if (incorrectAnswers.length > 0) {
        incorrectListHtml = `
            <h3>${incorrectAnswers.length} Fehler gefunden (von ${totalQuestions} Fragen):</h3>
            <ul style="list-style-type: none; padding-left: 0;">
                ${incorrectAnswers.map(item => `
                    <li style="margin-bottom: 15px; border-left: 3px solid #ff6666; padding-left: 10px;">
                        <strong>${item.question}</strong><br>
                        <span style="color: #66cc66;">✅ Korrekt: ${item.correct_option}</span><br>
                        <span style="color: #ff6666;">❌ Deine Antwort: ${item.selected_option}</span><br>
                        <p style="font-size: 0.9em; margin-top: 5px;">*Erklärung: ${item.explanation}</p>
                    </li>
                `).join('')}
            </ul>
        `;
    }

    getQuizArea().innerHTML = `
        <h2>📋 Auswertung der Golfregeln</h2>
        <p class="subtitle">Deine Leistung: ${correctAnswersCount} von ${totalQuestions} Fragen (${percentage.toFixed(0)}%)</p>
        
        <div class="explanation" style="background-color: #f0fff0; color: #1a1a1a;">
            <p style="font-size: 1.1em; font-weight: 600;">${evaluationText}</p>
        </div>
        
        ${incorrectListHtml}
    `;

    // Setze den lustigen Neustart-Namen
    getNextButton().innerHTML = '⛳ Regel-Reset: Von vorne anfangen!';
    getNextButton().removeEventListener('click', nextQuestionHandler);
    getNextButton().addEventListener('click', restartQuizHandler);
}

function loadQuestion(questionData) {
    const card = document.createElement('div');
    card.className = 'question-card';
    card.id = `q-${questionData.id}`;
    
    const questionNumber = currentQuestionIndex + 1;
    const currentSection = questionData.section;
    const totalSectionQuestions = sectionCounts[currentSection];
    const playedInSection = countPlayedInSection(currentSection, currentQuestionIndex);
    const remainingInSection = totalSectionQuestions - playedInSection;

    card.innerHTML = `
        <div class="progress-box">
            <p>Gesamtfragen: ${questionNumber} von ${quizData.length} Fragen.</p>
            <p>Abschnitt "${currentSection}": ${remainingInSection} Fragen verbleibend (von ${totalSectionQuestions})</p>
        </div>
        <h2>${questionData.section}</h2>
        
        <div class="quiz-img-wrap">
            <img 
                src="https://source.unsplash.com/featured/600x280/?golf,${encodeURIComponent(questionData.image_query)}"
                alt="${questionData.image_query}"
                class="quiz-img"
                onerror="this.style.display='none'"
                loading="lazy"
            >
        </div>
        
        <p class="question-text">${questionData.question}</p>
        
        <div class="options">
            ${quizData[currentQuestionIndex].options.map((option, index) => {
                return `
                    <button class="option-btn" data-index="${index}">
                        ${option}
                    </button>
                `;
            }).join('')}
        </div>
        
        <div class="explanation hidden">
            <p><strong>Erklärung:</strong> ${questionData.explanation}</p>
        </div>
    `;
    
    getQuizArea().innerHTML = '';
    getQuizArea().appendChild(card);
    
    document.querySelectorAll('.option-btn').forEach(button => {
        button.addEventListener('click', handleAnswer);
    });

    getNextButton().classList.add('hidden');
}

function handleAnswer(event) {
    const selectedButton = event.target;
    const selectedIndex = parseInt(selectedButton.dataset.index);
    const question = quizData[currentQuestionIndex];
    const correctIndex = question.answer_index;
    
    document.querySelectorAll('.option-btn').forEach(btn => {
        btn.disabled = true;
    });
    
    if (selectedIndex === correctIndex) {
        selectedButton.classList.add('correct');
        selectedButton.innerHTML += ' ✅';
        correctAnswersCount++;
    } else {
        selectedButton.classList.add('incorrect');
        selectedButton.innerHTML += ' ❌';
        
        const correctButton = document.querySelector(`.option-btn[data-index="${correctIndex}"]`);
        correctButton.classList.add('correct');
        correctButton.innerHTML += ' ✅';
        
        incorrectAnswers.push({
            question: question.question,
            selected_option: question.options[selectedIndex],
            correct_option: question.options[correctIndex],
            explanation: question.explanation
        });
    }

    document.querySelector('.explanation').classList.remove('hidden');
    getNextButton().classList.remove('hidden');
    getNextButton().innerHTML = 'Nächste Frage';
}

// ====================================================================================
// MODUL LOGIK UND INITIALISIERUNG
// ====================================================================================

const nextQuestionHandler = () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < quizData.length) {
        loadQuestion(quizData[currentQuestionIndex]);
    } else {
        displayFinalResult();
    }
};

const restartQuizHandler = () => {
    // WICHTIG: Setze quizData zurück auf das Original-Array, falls ein Modul lief
    if (quizData.length < quizDataOriginal.length) { 
        quizData = [...quizDataOriginal]; // Alle Fragen wiederherstellen
    }
    
    // Reset der Zähler
    correctAnswersCount = 0;
    incorrectAnswers = [];
    currentQuestionIndex = 0;
    
    // Fragen neu mischen
    shuffleArray(quizData); 
    
    // Wichtig: sectionCounts muss für das aktuell verwendete QuizData-Array neu berechnet werden
    sectionCounts = countSectionQuestions(quizData); 
    
    loadQuestion(quizData[currentQuestionIndex]);
    getNextButton().innerHTML = 'Nächste Frage';
    getNextButton().removeEventListener('click', restartQuizHandler);
    getNextButton().addEventListener('click', nextQuestionHandler);
};


const MODULE_DEFINITIONS = [
    { name: "Grundlagen & Start", keys: ["I. ", "II. "], fullRange: "Regeln 1–6" },
    { name: "Ball in Ruhe & Platz", keys: ["III. "], fullRange: "Regeln 7–11" },
    { name: "Sonderbereiche", keys: ["IV. "], fullRange: "Regeln 12–13" },
    { name: "Straflose Erleichterung", keys: ["V. ", "VI. "], fullRange: "Regeln 14–16" },
    { name: "Straf-Erleichterung & Formen", keys: ["VII. ", "VIII. ", "IX. ", "X. ", "Def."], fullRange: "Regeln 17–25" }
];


function displayModuleSelection() {
    // Setze quizData nur temporär auf das Original für die Anzeige
    const currentQuizData = [...quizDataOriginal];
    getNextButton().classList.add('hidden');
    
    // Die Section Counts werden für das gesamte Original-Set berechnet
    sectionCounts = countSectionQuestions(currentQuizData); 

    const modulesHtml = MODULE_DEFINITIONS.map((mod, index) => {
        const moduleQuestions = currentQuizData.filter(q => mod.keys.some(key => q.section.startsWith(key)));
        const count = moduleQuestions.length;

        return `
            <button class="module-btn" data-module-index="${index}">
                <strong>Modul ${index + 1}: ${mod.name}</strong><br>
                <span>(${mod.fullRange}) – ${count} Fragen</span>
            </button>
        `;
    }).join('');

    getQuizArea().innerHTML = `
        <h2>Wählen Sie Ihr Trainingsmodul:</h2>
        <div id="module-buttons-container" class="options module-selection-grid">
            ${modulesHtml}
        </div>
        <button id="start-full-quiz-btn" class="module-btn full-quiz-btn" data-module-index="full">
            Alle ${currentQuizData.length} Fragen üben (Komplett-Quiz)
        </button>
    `;

    // NEU: Listener auf dem Container setzen, um Klicks im Modul-Grid zu behandeln
    const container = document.getElementById('module-buttons-container');
    if (container) {
        container.addEventListener('click', handleModuleSelection);
    }
    document.getElementById('start-full-quiz-btn').addEventListener('click', handleModuleSelection);
}


function handleModuleSelection(event) {
    const button = event.target.closest('.module-btn'); 
    
    if (!button) return; 

    let selectedQuestions = [];
    const moduleIndex = button.dataset.moduleIndex;

    if (moduleIndex === 'full' || button.id === 'start-full-quiz-btn') {
        selectedQuestions = quizDataOriginal;
    } else {
        const index = parseInt(moduleIndex);
        const selectedModule = MODULE_DEFINITIONS[index]; 
        
        if (!selectedModule) {
            console.error("Modul-Definition für Index", index, "nicht gefunden.");
            return;
        }

        selectedQuestions = quizDataOriginal.filter(q => 
            selectedModule.keys.some(key => q.section.startsWith(key))
        );
    }
    
    // 1. Die globale quizData durch die gefilterten Fragen ersetzen
    // Wir nutzen splice, um die Referenz des ursprünglichen Arrays zu erhalten
    quizData.splice(0, quizData.length, ...selectedQuestions); 
    
    // 2. Quiz starten
    restartQuizHandler();
}


// Event Listener für den Reset-Button im Header
const topResetButton = document.getElementById('reset-top-btn');
if (topResetButton) {
    // Führt bei Klick zurück zur Modulauswahl
    topResetButton.addEventListener('click', displayModuleSelection); 
}

getNextButton().addEventListener('click', nextQuestionHandler);

// START: Wir starten die App immer mit der Modulauswahl
// Quiz wird über goToQuiz() aus script.js gestartet

// ─────────────────────────────────────────────
// QUIZ INITIALISIERUNG (wird von goToQuiz() aufgerufen)
// ─────────────────────────────────────────────
function initQuiz() {
    // Reset state
    quizData = [...quizDataOriginal];
    currentQuestionIndex = 0;
    correctAnswersCount = 0;
    incorrectAnswers = [];
    sectionCounts = countSectionQuestions(quizData);

    // Event Listener setzen
    var topResetButton = document.getElementById('reset-top-btn');
    if (topResetButton) {
        topResetButton.onclick = function() { displayModuleSelection(); };
    }
    var nb = getNextButton();
    if (nb) {
        nb.onclick = nextQuestionHandler;
    }
    displayModuleSelection();
}