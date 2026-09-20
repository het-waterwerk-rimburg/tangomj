// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  // Used for canonical URLs, Open Graph tags and sitemap generation.
  site: 'https://www.tangomj.nl',
  integrations: [sitemap()],
  redirects: {
    '/milonga': 'https://lastresesquinas.nl/',
  },
});
