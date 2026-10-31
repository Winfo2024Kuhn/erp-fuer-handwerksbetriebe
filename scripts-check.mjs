// Bricht ab, wenn im fertigen Build Pflichtseiten fehlen oder dort noch Platzhalter stehen.
// So geht keine Seite ohne vollständiges Impressum und Datenschutzerklärung online.
import { existsSync, readFileSync, readdirSync } from 'node:fs';
import { join } from 'node:path';

const dist = new URL('./dist/', import.meta.url).pathname;
const fehler = [];

for (const seite of ['index.html', 'impressum.html', 'datenschutz.html']) {
  if (!existsSync(join(dist, seite))) fehler.push(`${seite} fehlt im Build`);
}

const files = readdirSync(dist, { recursive: true }).filter((f) => String(f).endsWith('.html'));
for (const f of files) {
  if (readFileSync(join(dist, String(f)), 'utf8').includes('data-pflicht-offen')) {
    fehler.push(`${f}: Pflichtangabe fehlt (src/site.ts → ANBIETER)`);
  }
}

if (fehler.length) {
  console.error('Nicht veröffentlichen:\n- ' + fehler.join('\n- '));
  process.exit(1);
}
console.log(`Pflichtangaben vollständig (${files.length} Seiten geprüft).`);
