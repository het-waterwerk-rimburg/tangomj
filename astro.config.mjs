// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  // Used for canonical URLs, Open Graph tags and sitemap generation.
  // Update this to the real production domain when it is known.
  site: 'https://example.com',
  integrations: [sitemap()],
  redirects: {
    '/milonga': 'https://tresesquinas.vercel.app/',
  },
});
