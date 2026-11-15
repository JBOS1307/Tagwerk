# Tagwerk

Eine App für alles, damit das Handy wieder Werkzeug ist:
**Notizen** (Bullet-Journal-Stil) · **Todos** · **News** (RSS) · **Gewohnheiten**

## Auf GitHub Pages bringen
1. Neues Repo anlegen, z. B. `tagwerk`
2. Alle Dateien aus diesem Ordner hochladen (inkl. Ordner `icons/`)
3. Settings → Pages → Branch `main` / Ordner `/ (root)` → Save
4. Nach 1–2 Minuten läuft die App unter `https://DEIN-NAME.github.io/tagwerk/`
5. iPhone: In Safari öffnen → Teilen → „Zum Home-Bildschirm“

## Bedienung in Kürze
- Alles Neue landet im **Eingang**. Über das Archiv-Symbol wandert eine Notiz in einen **Bereich**.
- `[ ] Text` in einer Notiz wird zum Todo und erscheint im Tab **Todos**. Abhaken: auf den Punkt • tippen → ×
- Formatierung: `# Titel`, `**fett**`, `*kursiv*`, `~~durch~~`, `==markiert==`, `- Liste`, `> Zitat`, `---`
- **News-Ausgaben:** Neue Artikel gibt es nur zu festen Zeiten (Standard 07:00 und 18:00). Einstellbar oder abschaltbar.
- **Gewohnheiten:** täglich oder X× pro Woche, Serie, Rekord und Kalender der letzten 20 Wochen. Tage lassen sich nachtragen.

## Daten
Alles liegt lokal im Browser des Geräts (kein Server, kein Konto).
Unter Einstellungen → **Backup exportieren** regelmäßig sichern. Handy und Laptop synchronisieren sich nicht automatisch.

## RSS-Proxy
Browser dürfen fremde RSS-Feeds meist nicht direkt laden (CORS). Tagwerk nutzt deshalb öffentliche Proxys
(allorigins, codetabs, corsproxy). Wenn die mal streiken: `cloudflare-worker.js` als kostenlosen Cloudflare Worker
anlegen und dessen URL in den Einstellungen eintragen.

## Updates
Nach Änderungen an `index.html` in `sw.js` die Zeile `const CACHE = 'tagwerk-v1'` hochzählen (v2, v3 …),
damit das iPhone die neue Version sicher lädt.

## Kurzbefehle / Siri / Action-Button
Mit der Kurzbefehle-App kannst du ohne Umweg in den Eingang schreiben:
1. Neuer Kurzbefehl → „Nach Eingabe fragen“ (Text)
2. „URL“ → `https://DEIN-NAME.github.io/tagwerk/?add=` + Variable „Angegebene Eingabe“
3. „URLs öffnen“
Für Todos `?todo=` statt `?add=` verwenden.

## Sync über GitHub Gist
1. github.com → Profilbild → **Settings** → ganz unten **Developer settings**
2. **Personal access tokens → Tokens (classic) → Generate new token (classic)**
3. Note: `Tagwerk` · Expiration: z. B. 1 Jahr · Haken **nur bei `gist`**
4. **Generate token**, den Schlüssel `ghp_…` kopieren (wird nur einmal angezeigt)
5. Tagwerk → Einstellungen → Sync über GitHub → Token **und Sync-Passwort** eintragen → **Verbinden**
6. Auf dem zweiten Gerät denselben Token und dasselbe Passwort eintragen – der Gist wird automatisch gefunden.

Verschlüsselung: Die Daten werden auf dem Gerät mit AES-256 verschlüsselt (Schlüssel per PBKDF2 aus dem Passwort).
Im Gist steht nur unlesbarer Text. Das Passwort verlässt deine Geräte nie – geht es verloren, ist der Gist-Inhalt
nicht wiederherstellbar (die Daten auf den Geräten bleiben erhalten; einfach neues Passwort setzen).
Den Gist nicht löschen. Läuft der Token ab: neuen erzeugen und in Tagwerk neu verbinden.
