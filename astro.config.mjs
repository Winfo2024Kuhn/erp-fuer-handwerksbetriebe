// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Läuft ohne eigene Domain auf GitHub Pages:
// https://winfo2024kuhn.github.io/erp-fuer-handwerksbetriebe/
// Mit eigener Domain später nur `site` ändern und `base` entfernen.
export default defineConfig({
  site: 'https://winfo2024kuhn.github.io',
  base: '/erp-fuer-handwerksbetriebe',
  trailingSlash: 'ignore',
  build: { format: 'file' },
  integrations: [
    sitemap({
      lastmod: new Date(),
      filter: (page) => !page.includes('impressum') && !page.includes('datenschutz'),
    }),
  ],
});
