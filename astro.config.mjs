// @ts-check
import { defineConfig, fontProviders } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  // Used for canonical URLs, Open Graph tags and sitemap generation.
  site: 'https://www.tangomj.nl',
  integrations: [sitemap()],
  // Inter is downloaded at build time and served from this site, so visitors'
  // browsers never contact Google Fonts (no IP sent to Google before consent).
  fonts: [
    {
      provider: fontProviders.google(),
      name: 'Inter',
      cssVariable: '--font-inter',
      weights: [400, 500, 600, 700],
      styles: ['normal'],
      subsets: ['latin'],
    },
  ],
  redirects: {
    '/milonga': 'https://lastresesquinas.nl/',
  },
});
