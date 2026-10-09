/**
 * Languages of the website and the URL of every page in each language.
 *
 * - English is the default language and keeps the original URLs at the root
 *   (/, /about/, /wedding-dance/ …), so existing links and search rankings stay valid.
 * - Dutch lives under /nl/ and German under /de/, with translated URLs
 *   (e.g. /nl/openingsdans/), because people search in their own language.
 * - Every page is plain HTML built ahead of time: search engines see each
 *   language as its own page (no JavaScript translation).
 *
 * To add a page: add it to PAGE_PATHS, create its route file in each language
 * folder under src/pages/, and add its texts to src/i18n/content/.
 */

export const LANGUAGES = ['en', 'nl', 'de'] as const;
export type Language = (typeof LANGUAGES)[number];
export const DEFAULT_LANGUAGE: Language = 'en';

export const LANGUAGE_DETAILS: Record<
  Language,
  {
    /** Name of the language in that language, shown in the language menu. */
    nativeName: string;
    /** Short label next to the flag in the header. */
    shortLabel: string;
    /** Value for <html lang> and hreflang. */
    htmlLang: string;
    /** Open Graph locale (language_TERRITORY). */
    ogLocale: string;
  }
> = {
  en: { nativeName: 'English', shortLabel: 'EN', htmlLang: 'en', ogLocale: 'en_GB' },
  nl: { nativeName: 'Nederlands', shortLabel: 'NL', htmlLang: 'nl', ogLocale: 'nl_NL' },
  de: { nativeName: 'Deutsch', shortLabel: 'DE', htmlLang: 'de', ogLocale: 'de_DE' },
};

/** Every page of the site, in every language. Paths end with a slash, like the built site. */
export const PAGE_PATHS = {
  home: { en: '/', nl: '/nl/', de: '/de/' },
  weddingDance: { en: '/wedding-dance/', nl: '/nl/openingsdans/', de: '/de/hochzeitstanz/' },
  privateLessons: { en: '/private-lessons/', nl: '/nl/privelessen/', de: '/de/privatstunden/' },
  about: { en: '/about/', nl: '/nl/over-ons/', de: '/de/ueber-uns/' },
  contact: { en: '/contact/', nl: '/nl/contact/', de: '/de/kontakt/' },
  blog: { en: '/blog/', nl: '/nl/blog/', de: '/de/blog/' },
  privacyPolicy: { en: '/privacy-policy/', nl: '/nl/privacyverklaring/', de: '/de/datenschutz/' },
  cookiePolicy: { en: '/cookie-policy/', nl: '/nl/cookiebeleid/', de: '/de/cookie-richtlinie/' },
  legalNotice: { en: '/legal-notice/', nl: '/nl/juridische-informatie/', de: '/de/impressum/' },
} as const satisfies Record<string, Record<Language, string>>;

export type PageId = keyof typeof PAGE_PATHS;

/** Path of a page in a language, optionally with a #section. */
export function pagePath(page: PageId, language: Language, sectionId?: string): string {
  const path = PAGE_PATHS[page][language];
  return sectionId ? `${path}#${sectionId}` : path;
}

/** Path of a blog article: the blog path of the language + the file name of the article. */
export function blogPostPath(language: Language, slug: string): string {
  return `${PAGE_PATHS.blog[language]}${slug}/`;
}

/** Finds which page a URL path belongs to (used by the sitemap). */
export function findPageByPath(pathname: string): { page: PageId; language: Language } | undefined {
  const normalized = pathname.endsWith('/') ? pathname : `${pathname}/`;
  for (const page of Object.keys(PAGE_PATHS) as PageId[]) {
    for (const language of LANGUAGES) {
      if (PAGE_PATHS[page][language] === normalized) return { page, language };
    }
  }
  return undefined;
}
