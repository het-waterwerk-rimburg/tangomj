// @ts-check
import { defineConfig, fontProviders } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import {
  DEFAULT_LANGUAGE,
  LANGUAGES,
  LANGUAGE_DETAILS,
  PAGE_PATHS,
  findPageByPath,
} from './src/i18n/languages.ts';

const SITE = 'https://www.tangomj.nl';

// https://astro.build/config
export default defineConfig({
  // Used for canonical URLs, Open Graph tags and sitemap generation.
  site: SITE,
  integrations: [
    sitemap({
      // Lists, for every page, the same page in the other languages (hreflang),
      // so search engines connect /wedding-dance/, /nl/openingsdans/ and /de/hochzeitstanz/.
      serialize(item) {
        const match = findPageByPath(new URL(item.url).pathname);
        if (!match) return item;
        const paths = PAGE_PATHS[match.page];
        item.links = [
          ...LANGUAGES.map((language) => ({
            lang: LANGUAGE_DETAILS[language].htmlLang,
            url: new URL(paths[language], SITE).href,
          })),
          { lang: 'x-default', url: new URL(paths[DEFAULT_LANGUAGE], SITE).href },
        ];
        return item;
      },
    }),
  ],
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
