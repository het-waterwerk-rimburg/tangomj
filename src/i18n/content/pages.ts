/**
 * Texts of the smaller pages: Contact, and the titles, descriptions and dates of
 * the legal pages (their full text lives in src/views/legal/, one file per language).
 * When a legal text changes, update its `lastUpdated` date in every language
 * (empty = no date shown).
 */
import type { Language } from '../languages';

const en = {
  contact: {
    meta: {
      title: 'Contact',
      description:
        'Contact us to start or improve your tango, or with any question you have. We will be happy to answer.',
    },
    eyebrow: 'Contact',
    heading: 'Get in touch',
    intro: 'Contact us to start or improve your tango, or with any question you have. We will be happy to answer.',
  },
  legal: {
    eyebrow: 'Legal',
    lastUpdated: 'Last updated:',
    privacyPolicy: {
      lastUpdated: '3 October 2026',
      title: 'Privacy Policy',
      description:
        'How TangoMJ (Het Waterwerk Rimburg V.O.F.) collects, uses and protects your personal data, in line with the GDPR and Dutch data protection law.',
    },
    cookiePolicy: {
      lastUpdated: '3 October 2026',
      title: 'Cookie Policy',
      description:
        'Which cookies and similar technologies the TangoMJ website uses, why, for how long, and how to change your choice.',
    },
    legalNotice: {
      lastUpdated: '',
      title: 'Legal Notice',
      description:
        'Legal disclosure for TangoMJ (Het Waterwerk Rimburg V.O.F.): company details, liability, links, copyright and privacy.',
    },
  },
};

export type PagesText = typeof en;

const nl: PagesText = {
  contact: {
    meta: {
      title: 'Contact',
      description:
        'Neem contact met ons op om met tango te beginnen of je dans te verbeteren, of met welke vraag dan ook. Tangolessen in Landgraaf, Limburg.',
    },
    eyebrow: 'Contact',
    heading: 'Neem contact op',
    intro:
      'Neem contact met ons op om met tango te beginnen of je dans te verbeteren, of met welke vraag dan ook. We helpen je graag.',
  },
  legal: {
    eyebrow: 'Juridisch',
    lastUpdated: 'Laatst bijgewerkt:',
    privacyPolicy: {
      lastUpdated: '3 oktober 2026',
      title: 'Privacyverklaring',
      description:
        'Hoe TangoMJ (Het Waterwerk Rimburg V.O.F.) persoonsgegevens verzamelt, gebruikt en beschermt, in overeenstemming met de AVG.',
    },
    cookiePolicy: {
      lastUpdated: '3 oktober 2026',
      title: 'Cookiebeleid',
      description:
        'Welke cookies en vergelijkbare technieken de website van TangoMJ gebruikt, waarom, hoe lang, en hoe u uw keuze wijzigt.',
    },
    legalNotice: {
      lastUpdated: '',
      title: 'Juridische informatie',
      description:
        'Juridische informatie over TangoMJ (Het Waterwerk Rimburg V.O.F.): bedrijfsgegevens, aansprakelijkheid, links, auteursrecht en privacy.',
    },
  },
};

const de: PagesText = {
  contact: {
    meta: {
      title: 'Kontakt',
      description:
        'Schreib uns, wenn du mit Tango anfangen oder besser werden möchtest – oder bei jeder anderen Frage. Tangokurse in Landgraaf, Limburg.',
    },
    eyebrow: 'Kontakt',
    heading: 'Schreib uns',
    intro:
      'Schreib uns, wenn du mit Tango anfangen oder besser werden möchtest – oder wenn du eine Frage hast. Wir antworten gern.',
  },
  legal: {
    eyebrow: 'Rechtliches',
    lastUpdated: 'Zuletzt aktualisiert:',
    privacyPolicy: {
      lastUpdated: '3. Oktober 2026',
      title: 'Datenschutzerklärung',
      description:
        'Wie TangoMJ (Het Waterwerk Rimburg V.O.F.) personenbezogene Daten gemäß der DSGVO und dem niederländischen Datenschutzrecht erhebt, verwendet und schützt.',
    },
    cookiePolicy: {
      lastUpdated: '3. Oktober 2026',
      title: 'Cookie-Richtlinie',
      description:
        'Welche Cookies und ähnlichen Technologien die Website von TangoMJ verwendet, wozu, wie lange und wie Sie Ihre Auswahl ändern.',
    },
    legalNotice: {
      lastUpdated: '',
      title: 'Impressum',
      description:
        'Impressum von TangoMJ (Het Waterwerk Rimburg V.O.F.): Unternehmensangaben, Haftung, Links, Urheberrecht und Datenschutz.',
    },
  },
};

export const PAGES_TEXT: Record<Language, PagesText> = { en, nl, de };
