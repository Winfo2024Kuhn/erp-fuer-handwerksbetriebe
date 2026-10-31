# GEO Analysis: Handwerkerprogramm landing page

Audited 2026-10-31 · URL: <https://winfo2024kuhn.github.io/erp-fuer-handwerksbetriebe/> · Source: this repo (`src/pages/index.astro`, `src/layouts/Base.astro`, `astro.config.mjs`, `public/robots.txt`)

Framing: per Google's AI optimization guide ("optimizing for generative AI search is … still SEO"), everything below is SEO fundamentals applied to AI-search surfaces. The scores are heuristics from this audit, not Google-internal signals.

---

## 1. GEO Readiness Score: 64/100

| Criterion | Weight | Score | Why |
|---|---|---|---|
| Citability | 25 | 15 | FAQ answers are crisp and self-contained. Missing: a sentence that defines *what the Handwerkerprogramm is* by name, and concrete facts (version, date, scale of use). |
| Structural readability | 20 | 15 | Clean H1→H2→H3, lists, FAQ. No question-shaped headings outside the FAQ, no comparison table. |
| Multi-modal | 15 | 11 | Screenshots, a phone video, rebuilt UI panes with good `aria-label`s. No `VideoObject`, video has no text equivalent. |
| Authority & brand | 20 | 7 | Named author with trade credential and photo, first-hand origin story (strong). But no dates anywhere, `sameAs` only points to GitHub, brand name is a generic word, near-zero third-party mentions. |
| Technical accessibility | 20 | 16 | Fully static HTML (1,568 words readable without JS), every AI search bot gets HTTP 200, JSON-LD present. Loses points because the site sits in a subfolder of `github.io`, so its `robots.txt` and sitemap reference are invisible to crawlers. |

## 2. Platform readiness (qualitative, not measured)

No DataForSEO or SE Ranking tools were available, so no platform scores.

| Platform | Readiness | Notes |
|---|---|---|
| Google AI Overviews / AI Mode | Medium-low | Eligible (indexable, snippet allowed). One page, young site, no backlinks found; AI Overviews mostly cite pages already ranking top-10, which this page is unlikely to do yet for "Handwerkersoftware kostenlos". AI Mode's broader pool gives a better shot for long-tail queries ("Open Source Handwerkersoftware EN 1090"). |
| ChatGPT Search | Low-medium | `OAI-SearchBot` allowed. A web search on 2026-10-31 for "kostenlose Open Source Handwerkersoftware E-Rechnung ZUGFeRD Zeiterfassung" returned Invoice Ninja, Fakturama, HandwerkManager etc., but **neither this site nor the GitHub repo**. The answer even concluded no all-in-one open-source craft ERP exists. That is precisely the gap this product fills. |
| Perplexity | Low | `PerplexityBot` allowed. Perplexity leans on Reddit/community sources; there are none yet. |
| Claude | Low-medium | `Claude-SearchBot` allowed. Brand-name searches find the GitHub repo (not the website). |

## 3. AI crawler access status

**Key structural fact:** crawlers only read `robots.txt` at the host root. The host is `winfo2024kuhn.github.io`, and `https://winfo2024kuhn.github.io/robots.txt` returns **404** ("Site not found"). A 404 robots.txt means "everything allowed", so access is open, but the file you ship (`public/robots.txt` → `/erp-fuer-handwerksbetriebe/robots.txt`) is **ignored by every crawler**, including its `Sitemap:` line.

Live check with each user-agent string against the homepage (2026-10-31):

**Search / citation crawlers** (decide whether you can be cited)

| User-agent | Governs | Status |
|---|---|---|
| `Googlebot` | Google Search, AI Overviews, AI Mode | Allowed (no root robots.txt; HTTP 200; `index, follow, max-image-preview:large`) |
| `OAI-SearchBot` | ChatGPT Search citations | Allowed (HTTP 200) |
| `Claude-SearchBot` | Claude search citations | Allowed (HTTP 200) |
| `PerplexityBot` | Perplexity answers | Allowed (HTTP 200) |
| `Applebot` | Siri, Spotlight, Safari | Allowed (no rule) |

**Training crawlers** (licensing choice, no effect on search citations)

| User-agent | Governs | Status |
|---|---|---|
| `GPTBot` | OpenAI model training | Allowed (HTTP 200) |
| `ClaudeBot` | Anthropic model training | Allowed (no rule) |
| `Google-Extended` | Gemini/Vertex training & grounding | Allowed (no rule). Does not affect Google Search or AI Overviews. |
| `CCBot` | Common Crawl | Allowed (no rule) |
| `Applebot-Extended` | Apple Intelligence training | Allowed (no rule) |

For an open-source project that wants to be known, allowing everything is a reasonable default. Nothing to change here, but you currently *can't* change it even if you wanted to (see Top change #1).

Also check in Search Console: Settings → "Search generative AI" should be **Include** (default). Since 2026-08-31 this controls eligibility for AI Overviews and AI Mode.

## 4. llms.txt status

Missing at `/erp-fuer-handwerksbetriebe/llms.txt` and at the host root. Google says it doesn't need it and it neither helps nor hurts. No major AI provider has confirmed using it. **Low priority, optional.** If you want one for non-Google tools, a ready template:

```
# Handwerkerprogramm
> Kostenlose Open-Source-Handwerkersoftware (ERP, AGPL v3) von Metallbaumeister Marvin Kuhn aus Würzburg: Angebote, Rechnungen mit E-Rechnung (ZUGFeRD, XRechnung), Zeiterfassung per Handy, Nachkalkulation. Läuft auf einem Rechner im eigenen Betrieb.

## Seiten
- [Startseite](https://winfo2024kuhn.github.io/erp-fuer-handwerksbetriebe/): Funktionen, Einrichtung, häufige Fragen
- [Quellcode](https://github.com/Winfo2024Kuhn/ERP-System-fuer-Handwerksbetriebe): Installation, Releases, Lizenz

## Fakten
- Preis: 0 €, kein Abo, keine Gebühr pro Mitarbeiter
- Lizenz: AGPL v3
- Betrieb: Windows-PC oder Linux-Server mit Docker, Bedienung im Browser
```

## 5. Brand mention analysis

| Surface | Presence |
|---|---|
| GitHub repo | Yes, the strongest entity page. 19 stars, 8 forks, active (v2.0.1 on 2026-10-30), good topics, `homepage` set to the site. **But GitHub reports `license: NOASSERTION`**: its detector does not recognise the LICENSE file as AGPL-3.0, so machine readers see "no license". |
| GitHub profile | Name, location Würzburg, bio. **No `blog`/website link** to the site. |
| Third-party forks | `modl00/ERP-System-fuer-Handwerksbetriebe` shows up in search and its README describes an older stack, which AI answers repeated as conflicting info. |
| Wikipedia / Wikidata | None (expected for a project this young; don't force it). |
| Reddit | None found. |
| YouTube | None found. |
| LinkedIn | Not linked from the site or schema. |
| Comparison/review sites (heise download, softwareabc24, handwerkersoftware-test.de, fuer-gruender.de) | Not listed. These rank for "Handwerkersoftware Vergleich" and feed AI answers. |

**Entity ambiguity:** "Handwerkerprogramm" is a generic German noun ("craftsman program"). A query containing it is read as the category, not your product. AI systems can't tie mentions to one entity unless the name always appears next to a distinguishing qualifier (Open Source, Marvin Kuhn, the GitHub URL). The site, repo and schema also use three different names: "Handwerkerprogramm", "ERP-System für Handwerksbetriebe", "erp-fuer-handwerksbetriebe".

## 6. Passage-level citability

Good self-contained blocks already on the page (keep them):

- FAQ "Was kostet das Programm?": direct, quotable, starts with the answer.
- FAQ "Kann das Programm E-Rechnungen?": names the standards (ZUGFeRD, XRechnung, EN 16931).
- FAQ "Unterstützt das Programm die EN 1090?": honest, specific (EN 10204 3.1/3.2/2.2). Unique content no competitor writes.
- "Gebaut im eigenen Betrieb": first-hand origin, exactly the "lived experience" content Google says it values.

Gaps:

- **No defining sentence that names the product.** The hero says "Kostenlose Software für Ihren Handwerksbetrieb" but never "Das Handwerkerprogramm ist …". An AI extracting a passage gets a description without a subject.
- **FAQ answers are 25–60 words.** Fine for quotes, but there's no ~130–170-word block that answers the money question "Gibt es kostenlose Open-Source-Software für Handwerksbetriebe?" end to end. (The length is a heuristic, not a Google rule. Google says not to chunk for AI.)
- **No verifiable facts with dates:** current version, release date, how long it has run in production, how many people/projects in the family business.
- Feature H3s are slogans ("Das Jahr auf einen Blick"), which is fine for people but doesn't match how people phrase questions.

## 7. Server-side rendering check

- Astro static build, no client framework. All text, FAQ answers (inside `<details>`, present in the DOM), and JSON-LD are in the raw HTML.
- `.js .reveal` only animates opacity after a class is set by inline JS; text stays in the source for non-JS crawlers.
- Phone number is decoded client-side (`Telefon.astro`) on purpose. It's invisible to bots, which is the intent and irrelevant to GEO.
- `Last-Modified` header present (GitHub Pages), `cache-control: max-age=600`.

**Pass.**

## 8. Top 5 highest-impact changes

1. **Move to your own domain** (already planned in README). That fixes several things at once: your `robots.txt` and `Sitemap:` line start working, the brand owns its entity URL instead of sharing `github.io`, and links and mentions gain value you keep if you ever leave GitHub Pages. It's a three-line change (`site`, `base`, `robots.txt`) plus a GitHub Pages custom-domain setting and a new Search Console Domain property. Until then, submit the sitemap by hand in Search Console.
2. **Pin the entity down.** Add one defining sentence high on the page (copy in §10). Use one product name consistently with a qualifier, e.g. "Handwerkerprogramm (Open Source)", and add `alternateName` + `sameAs` to the GitHub repo in the schema. Fix the GitHub license detection: use the unmodified AGPL-3.0 text in `LICENSE` so the API reports `AGPL-3.0`. Add the site URL to your GitHub profile.
3. **Show freshness, honestly.** Add a visible line like "Aktuelle Version 2.0.1 vom 30. Oktober 2026" linked to the release, plus `softwareVersion` and `dateModified` in the schema. Pull them from the GitHub release at build time so they never go stale or get faked. The page currently has no date at all.
4. **Answer the gap query on the page.** The AI answer for "kostenlose Open Source Handwerkersoftware" said no all-in-one open-source craft ERP exists. Add a short section with a question heading: "Gibt es kostenlose Handwerkersoftware ohne Abo?" with a factual comparison table: subscription software vs free tiers vs this program, by price, data location, E-Rechnung, staff limit, source code. Only claim what you can source; describe categories rather than naming competitors' prices unless you cite them with a date.
5. **Earn real third-party mentions.** Submit to the listings that already rank (heise download, softwareabc24, handwerkersoftware-test.de), and post a first-hand "Ich habe für den Metallbau meines Vaters ein ERP gebaut" story where craftspeople talk (r/handwerk, r/de_EDV, Handwerk forums, the regional Handwerkskammer/Innung newsletter). Upload the phone tour plus a 2–3-minute desktop walkthrough to YouTube and link it from the page. Per Google's guide, skip anything inauthentic (paid mentions, mass posting).

## 9. Schema recommendations

Current graph: `WebSite`, `WebPage`, `Person`, `SoftwareApplication`, `Service`, `FAQPage`. It's solid. Additions to `src/pages/index.astro`:

```js
// SoftwareApplication: add
alternateName: ['Handwerkerprogramm (Open Source)', 'ERP-System für Handwerksbetriebe'],
softwareVersion: '2.0.1',            // ideally read from the GitHub release at build time
dateModified: '2026-10-30',          // release date, not build date
releaseNotes: `${GITHUB_URL}/releases`,
sameAs: [GITHUB_URL],
isBasedOn / codeRepository → see SoftwareSourceCode below

// New node
{
  '@type': 'SoftwareSourceCode',
  '@id': `${home}#source`,
  name: 'Handwerkerprogramm',
  codeRepository: GITHUB_URL,
  programmingLanguage: ['Java', 'TypeScript'],
  license: 'https://www.gnu.org/licenses/agpl-3.0.html',
  author: { '@id': person },
  targetProduct: { '@id': software },
}

// WebPage: add
dateModified: '<same release date or last content change>',

// Person: add
knowsAbout: ['Metallbau', 'EN 1090', 'Handwerkersoftware', 'E-Rechnung'],
hasCredential: { '@type': 'EducationalOccupationalCredential', credentialCategory: 'Meisterbrief', name: 'Metallbaumeister' },
sameAs: [... , '<LinkedIn URL if you have one>'],

// New node for the phone tour video
{
  '@type': 'VideoObject',
  name: 'Rundgang durch die Handy-App des Handwerkerprogramms',
  description: 'Ein Mitarbeiter stempelt per Handy auf ein Projekt (Demo-Daten).',
  contentUrl: absoluteUrl('img/rundgang-mobil.mp4'),
  thumbnailUrl: absoluteUrl('img/rundgang-mobil-poster-400.webp'),
  uploadDate: '<date the video was made>',
}
```

Notes:

- Keep `FAQPage`. Google restricted FAQ rich results to government and health sites in 2023, so expect no visual result, but it doesn't hurt and other systems parse it. Google also says not to over-invest in structured data *for AI*; these additions are about entity clarity, not tricks.
- Don't add `aggregateRating` until there are real, on-page reviews.

## 10. Content reformatting suggestions

**a) Hero: add a defining sentence** (`index.astro:237`). Keep the H1, and start the lead paragraph with the product name:

> Das **Handwerkerprogramm** ist eine kostenlose Open-Source-Software für Handwerksbetriebe: Angebote, Rechnungen mit E-Rechnung, Zeiterfassung per Handy und Nachkalkulation in einem Programm. Ich bin Metallbaumeister, habe es für den Betrieb meiner Familie gebaut und richte es auf Wunsch bei Ihnen ein.

**b) New answer block before or inside "Häufige Fragen"** (~150 words, question heading):

> ### Gibt es kostenlose Handwerkersoftware ohne Abo?
> Ja. Das Handwerkerprogramm ist Open Source (Lizenz AGPL v3) und kostet nichts, auch nicht pro Mitarbeiter. Es deckt den Ablauf von der Anfrage bis zur bezahlten Rechnung ab: Angebote und Rechnungen mit E-Rechnung nach EN 16931 (ZUGFeRD, XRechnung), Zeiterfassung per Handy auch ohne Netz, Bautagebuch und Nachkalkulation je Projekt. Es läuft auf einem Windows-PC oder Linux-Server im eigenen Büro, die Daten bleiben also im Betrieb. Entstanden ist es in einem Metallbaubetrieb in Würzburg, wo es seit [Jahr] täglich im Einsatz ist. Die aktuelle Version ist [2.0.1 vom 30. Oktober 2026]. Geld kostet nur die Einrichtung, wenn Sie sie nicht selbst übernehmen.

Fill the brackets with real facts only.

**c) Origin section: add one concrete number** (`index.astro:598`). For example, how many employees use it daily, or since when. A specific, first-hand fact is what makes this paragraph worth citing.

**d) Feature H3s:** keep the voice, but consider making one or two match search phrasing, e.g. "Zeiterfassung per Handy, auch ohne Netz" already works. "Das Jahr auf einen Blick" could become "Umsatz und Gewinn je Kunde auswerten".

**e) Video text equivalent:** add a one-sentence caption under the hero phone video describing what it shows (the `aria-label` exists, but there's no visible text).

---

*Sources checked: live site, `robots.txt` at host root and subpath, sitemap, GitHub API for repo and profile, web searches on 2026-10-31. Third-party statistics from the audit framework weren't used in the scoring.*
