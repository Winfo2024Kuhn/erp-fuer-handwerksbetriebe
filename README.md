# Internetseite: ERP für Handwerksbetriebe

Landingpage für das [Handwerkerprogramm](https://github.com/Winfo2024Kuhn/ERP-System-fuer-Handwerksbetriebe), ein kostenloses Open-Source-ERP für Handwerksbetriebe. Live unter <https://winfo2024kuhn.github.io/erp-fuer-handwerksbetriebe/>.

Gebaut mit [Astro](https://astro.build), rein statisch, ohne Tracking, Cookies oder fremde Server.

## Lokal starten

Node.js 22.23.4 oder neuer.

```bash
npm ci
npm run dev
```

## Veröffentlichen

Jeder Push auf `main` baut die Seite und stellt sie über GitHub Pages online (`.github/workflows/deploy.yml`). Vorher prüft `npm run check`, ob Impressum und Datenschutzerklärung vollständig sind; fehlt eine Pflichtangabe in `src/site.ts`, bricht die Veröffentlichung ab.

## Aufbau

| Pfad | Inhalt |
| --- | --- |
| `src/site.ts` | E-Mail, GitHub-Link, Anbieterangaben fürs Impressum |
| `src/pages/` | Startseite, Impressum, Datenschutz |
| `src/components/` | MacBook- und Handy-Rahmen (nur CSS) |
| `src/styles/global.css` | Farben und Formen wie in der App (rose/slate) |
| `public/img/` | Bildschirmfotos und Videos mit Demo-Daten |

Eigene Domain später: in `astro.config.mjs` `site` ändern, `base` entfernen, `public/robots.txt` anpassen.
