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
  // GitHub Pages erlaubt keine eigenen HTTP-Header, daher kommt die CSP als <meta>-Tag.
  // Astro trägt die Hashes aller eigenen Inline-Skripte und -Styles selbst ein.
  security: {
    csp: {
      directives: [
        "default-src 'self'",
        "img-src 'self'",
        "media-src 'self'",
        "object-src 'none'",
        "base-uri 'self'",
        "form-action 'none'",
      ],
    },
  },
  integrations: [
    sitemap({
      lastmod: new Date(),
      filter: (page) => !page.includes('impressum') && !page.includes('datenschutz'),
    }),
  ],
});
