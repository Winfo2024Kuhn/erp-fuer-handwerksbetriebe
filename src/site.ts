// Zentrale Angaben der Seite. Hier ändern, nicht in den einzelnen Seiten.

export const EMAIL = 'm.kuhn864@gmail.com';
export const GITHUB_URL = 'https://github.com/Winfo2024Kuhn/ERP-System-fuer-Handwerksbetriebe';
export const LINKEDIN_URL = 'https://www.linkedin.com/in/marvin-kuhn-032400169/';
export const SITE_NAME = 'Handwerkerprogramm';

/** Basis-Pfad mit Schrägstrich am Ende, z. B. "/erp-fuer-handwerksbetriebe/". */
export const BASE = import.meta.env.BASE_URL.replace(/\/?$/, '/');

/** Pfad innerhalb der Seite, z. B. url('img/logo.webp'). */
export const url = (path = '') => BASE + path.replace(/^\//, '');

/** Volle Adresse für Suchmaschinen und Vorschaubilder. */
export const absoluteUrl = (path = '') => new URL(url(path), import.meta.env.SITE).href;

export const mailto = (subject?: string) =>
  `mailto:${EMAIL}` + (subject ? `?subject=${encodeURIComponent(subject)}` : '');

export interface Release {
  version: string;
  datum: Date;
  url: string;
}

/**
 * Neueste Version des Programms, beim Bauen der Seite von GitHub abgefragt.
 * Ohne Antwort kommt `null` zurück, dann fehlt die Versionszeile, statt eine veraltete Zahl zu zeigen.
 */
export async function letztesRelease(): Promise<Release | null> {
  const repo = GITHUB_URL.replace('https://github.com/', '');
  const token = process.env.GITHUB_TOKEN;
  try {
    const res = await fetch(`https://api.github.com/repos/${repo}/releases/latest`, {
      headers: { Accept: 'application/vnd.github+json', ...(token && { Authorization: `Bearer ${token}` }) },
      signal: AbortSignal.timeout(10_000),
    });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const r = await res.json();
    return { version: String(r.tag_name).replace(/^v/, ''), datum: new Date(r.published_at), url: r.html_url };
  } catch (e) {
    console.warn(`Neueste Version nicht abrufbar (${e}), die Versionszeile entfällt.`);
    return null;
  }
}

/**
 * Angaben für Impressum und Datenschutzerklärung (§ 5 DDG, Art. 13 DSGVO).
 * Solange hier `null` steht, zeigt die Seite einen gelben Platzhalter und
 * `npm run check` (läuft auch vor jeder Veröffentlichung) bricht ab.
 */
export const ANBIETER = {
  name: 'Marvin Kuhn',
  strasse: 'Kleiststraße 11' as string | null,
  ort: '97072 Würzburg' as string | null,
  // Pflicht: zweiter schneller Kontaktweg neben der E-Mail (EuGH C-298/07).
  // Steht absichtlich nicht im Klartext im Quellcode, damit Bots die Nummer nicht abgreifen:
  // Base64 der rückwärts geschriebenen Nummer. Neu erzeugen mit
  //   node -e "console.log(Buffer.from('+49 931 1234567'.split('').reverse().join('')).toString('base64'))"
  telefonVerschluesselt: 'NzQzMDc3MSAyNjEgOTQr' as string | null,
  // Nur eintragen, falls vorhanden. Bleibt es null, erscheint die Zeile nicht.
  ustId: null as string | null,
  // Wirtschafts-Identifikationsnummer nach § 139c AO, sobald vom Bundeszentralamt zugeteilt.
  wIdNr: null as string | null,
};

/** Telefonnummer im Klartext, nur beim Bauen der Seite entschlüsselt. */
export const telefonKlartext = (): string | null =>
  ANBIETER.telefonVerschluesselt
    ? Buffer.from(ANBIETER.telefonVerschluesselt, 'base64').toString('utf8').split('').reverse().join('')
    : null;
