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
  newsletter: {
    meta: {
      title: 'Newsletter',
      description:
        'Subscribe to the Tango MJ newsletter: new classes, workshops, milongas and trips, straight to your inbox.',
    },
    eyebrow: 'Newsletter',
    heading: 'Stay in the tango loop',
    intro:
      'New classes, workshops, milongas and trips: subscribe and you will hear about them first. No spam, and you can unsubscribe at any time.',
  },
  blog: {
    meta: {
      title: 'Blog',
      description: 'Stories, thoughts and news from Tango MJ, Argentine tango school in Landgraaf, Limburg.',
    },
    eyebrow: 'Blog',
    heading: 'Stories from Tango MJ',
    intro: 'Stories, thoughts and news from our tango school in Landgraaf.',
    readArticle: 'Read the article',
    publishedOn: 'Published on',
    backToBlog: 'All articles',
    /** Locale used to write dates, e.g. "9 October 2026". */
    dateLocale: 'en-GB',
    callToAction: {
      heading: 'Come dance with us',
      description: 'Regular classes, private lessons, wedding dance and workshops for companies in Limburg.',
      button: 'Get in touch',
    },
  },
  legal: {
    eyebrow: 'Legal',
    lastUpdated: 'Last updated:',
    privacyPolicy: {
      lastUpdated: '15 October 2026',
      title: 'Privacy Policy',
      description:
        'How TangoMJ (Het Waterwerk Rimburg V.O.F.) collects, uses and protects your personal data, in line with the GDPR and Dutch data protection law.',
    },
    cookiePolicy: {
      lastUpdated: '15 October 2026',
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
  newsletter: {
    meta: {
      title: 'Nieuwsbrief',
      description:
        'Schrijf je in voor de nieuwsbrief van Tango MJ: nieuwe lessen, workshops, milonga’s en reizen, direct in je inbox.',
    },
    eyebrow: 'Nieuwsbrief',
    heading: 'Blijf op de hoogte',
    intro:
      'Nieuwe lessen, workshops, milonga’s en reizen: schrijf je in en je hoort het als eerste. Geen spam, en je kunt je altijd weer uitschrijven.',
  },
  blog: {
    meta: {
      title: 'Blog',
      description: 'Verhalen, gedachten en nieuws van Tango MJ, school voor Argentijnse tango in Landgraaf, Limburg.',
    },
    eyebrow: 'Blog',
    heading: 'Verhalen van Tango MJ',
    intro: 'Verhalen, gedachten en nieuws van onze tangoschool in Landgraaf.',
    readArticle: 'Lees het artikel',
    publishedOn: 'Gepubliceerd op',
    backToBlog: 'Alle artikelen',
    dateLocale: 'nl-NL',
    callToAction: {
      heading: 'Kom met ons dansen',
      description: 'Wekelijkse groepslessen, privélessen, openingsdans en workshops voor bedrijven in Limburg.',
      button: 'Neem contact op',
    },
  },
  legal: {
    eyebrow: 'Juridisch',
    lastUpdated: 'Laatst bijgewerkt:',
    privacyPolicy: {
      lastUpdated: '15 oktober 2026',
      title: 'Privacyverklaring',
      description:
        'Hoe TangoMJ (Het Waterwerk Rimburg V.O.F.) persoonsgegevens verzamelt, gebruikt en beschermt, in overeenstemming met de AVG.',
    },
    cookiePolicy: {
      lastUpdated: '15 oktober 2026',
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
  newsletter: {
    meta: {
      title: 'Newsletter',
      description:
        'Abonniere den Newsletter von Tango MJ: neue Kurse, Workshops, Milongas und Reisen, direkt in dein Postfach.',
    },
    eyebrow: 'Newsletter',
    heading: 'Bleib auf dem Laufenden',
    intro:
      'Neue Kurse, Workshops, Milongas und Reisen: Abonniere den Newsletter und du erfährst es zuerst. Kein Spam, und du kannst dich jederzeit wieder abmelden.',
  },
  blog: {
    meta: {
      title: 'Blog',
      description: 'Geschichten, Gedanken und Neuigkeiten von Tango MJ, Schule für argentinischen Tango in Landgraaf, Limburg.',
    },
    eyebrow: 'Blog',
    heading: 'Geschichten von Tango MJ',
    intro: 'Geschichten, Gedanken und Neuigkeiten aus unserer Tangoschule in Landgraaf.',
    readArticle: 'Artikel lesen',
    publishedOn: 'Veröffentlicht am',
    backToBlog: 'Alle Artikel',
    dateLocale: 'de-DE',
    callToAction: {
      heading: 'Tanz mit uns',
      description: 'Wöchentliche Gruppenkurse, Privatstunden, Hochzeitstanz und Workshops für Unternehmen in Limburg.',
      button: 'Kontakt aufnehmen',
    },
  },
  legal: {
    eyebrow: 'Rechtliches',
    lastUpdated: 'Zuletzt aktualisiert:',
    privacyPolicy: {
      lastUpdated: '15. Oktober 2026',
      title: 'Datenschutzerklärung',
      description:
        'Wie TangoMJ (Het Waterwerk Rimburg V.O.F.) personenbezogene Daten gemäß der DSGVO und dem niederländischen Datenschutzrecht erhebt, verwendet und schützt.',
    },
    cookiePolicy: {
      lastUpdated: '15. Oktober 2026',
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
