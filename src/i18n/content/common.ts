/**
 * Texts shared by every page: menu, footer, contact details, contact form,
 * cookie banner, testimonials controls, WhatsApp button and community block.
 *
 * English is the reference; the Dutch and German texts mirror its structure
 * (TypeScript reports a missing text). Marketing copy addresses the reader
 * informally ("je" / "du"); the legal pages use the formal form.
 *
 * Placeholders like {site} or {number} are filled in by the components.
 */
import type { Language } from '../languages';

const en = {
  /** Appended to page titles and used as og:site_name. */
  siteName: 'TangoMJ - Argentine Tango Landgraaf',
  navigation: {
    home: 'Home',
    weddingDance: 'Wedding Dance',
    privateLessons: 'Private Lessons',
    about: 'About',
    contact: 'Contact',
    primaryLabel: 'Primary',
    bookLesson: 'Book a lesson',
    openMenu: 'Open menu',
    closeMenu: 'Close menu',
    chooseLanguage: 'Choose language',
    homeLink: '{site}, home',
    skipToContent: 'Skip to content',
  },
  footer: {
    navigationLabel: 'Footer',
    privacyPolicy: 'Privacy Policy',
    cookiePolicy: 'Cookie Policy',
    legalNotice: 'Legal Notice',
    manageCookies: 'Manage cookies',
    rightsReserved: 'All rights reserved.',
    socialLink: '{site} on {network}',
  },
  contactDetails: {
    email: 'Email:',
    whatsapp: 'WhatsApp:',
    area: 'Area:',
    areaValue: 'Limburg, Netherlands',
  },
  contactForm: {
    name: 'Name',
    email: 'Email',
    interestedIn: "I'm interested in",
    chooseOption: 'Choose an option',
    /** Labels for the topics. The values sent to Make.com stay in English (see ContactForm.astro). */
    topics: {
      regularLessons: 'Regular lessons',
      privateLessons: 'Private lessons',
      weddingDance: 'Wedding dance',
      other: 'Other',
    },
    message: 'Message',
    /** {link} is replaced by a link to the privacy policy, with the text of `consentLink`. */
    consent: 'I have read the {link}.',
    consentLink: 'privacy policy',
    send: 'Send message',
    sending: 'Sending…',
    success: 'Thanks! Your message has been sent. We will get back to you soon.',
    error: 'Something went wrong sending your message. Please try again, or email us directly.',
  },
  cookies: {
    bannerTitle: 'Cookies on this website',
    bannerText:
      'We use technologies that are strictly necessary for the website to work and to remember your choice. With your permission we also use Google Analytics to understand how visitors use the site. You can change your choice at any time via “Manage cookies” in the footer.',
    policyLink: 'Cookie Policy',
    acceptAll: 'Accept all',
    rejectOptional: 'Reject optional',
    settings: 'Cookie settings',
    dialogTitle: 'Cookie settings',
    closeDialog: 'Close cookie settings',
    dialogIntro:
      'Choose which optional technologies we may use. Necessary technologies are always on because the website needs them.',
    necessaryName: 'Necessary',
    alwaysOn: 'Always on',
    necessaryDescription:
      'Needed for the website to work and to remember your cookie choice. Your choice is stored in your own browser and contains no personal data.',
    analyticsName: 'Analytics',
    analyticsDescriptionBefore:
      'Google Analytics 4 counts visits and shows which pages are used, so we can improve the website. It sets the cookies',
    analyticsDescriptionAnd: 'and',
    analyticsDescriptionAfter: '(Google). Off unless you switch it on.',
    save: 'Save choices',
    readPolicy: 'Read the Cookie Policy',
    savedAnalyticsOn: 'Your cookie choice was saved: analytics on.',
    savedAnalyticsOff: 'Your cookie choice was saved: analytics off.',
  },
  testimonials: {
    carouselLabel: 'Student testimonials',
    previous: 'Previous testimonial',
    next: 'Next testimonial',
    goTo: 'Go to testimonial {number}',
    reviewPrompt: 'Danced with us?',
    reviewLink: "We'd love to hear about your experience — leave us a review",
  },
  whatsapp: {
    message: 'Hi! I have a question about tango classes.',
    buttonLabel: 'Chat with us on WhatsApp',
  },
  community: {
    eyebrow: 'Community',
    heading: 'Growing tango in the south of the Netherlands',
    text: 'There is a warm tango community across Limburg and the border region, and we want to help it grow. Milongas, prácticas, classes and visiting teachers: we share what is happening around here in one place, so it is easy to find your next dance.',
    note: 'Everyone is welcome, whatever your level.',
    button: 'Join the WhatsApp community',
  },
};

export type CommonText = typeof en;

const nl: CommonText = {
  siteName: 'TangoMJ - Argentijnse tango Landgraaf',
  navigation: {
    home: 'Home',
    weddingDance: 'Openingsdans',
    privateLessons: 'Privélessen',
    about: 'Over ons',
    contact: 'Contact',
    primaryLabel: 'Hoofdmenu',
    bookLesson: 'Boek een les',
    openMenu: 'Menu openen',
    closeMenu: 'Menu sluiten',
    chooseLanguage: 'Kies een taal',
    homeLink: '{site}, naar de homepage',
    skipToContent: 'Naar de inhoud',
  },
  footer: {
    navigationLabel: 'Voettekst',
    privacyPolicy: 'Privacyverklaring',
    cookiePolicy: 'Cookiebeleid',
    legalNotice: 'Juridische informatie',
    manageCookies: 'Cookies beheren',
    rightsReserved: 'Alle rechten voorbehouden.',
    socialLink: '{site} op {network}',
  },
  contactDetails: {
    email: 'E-mail:',
    whatsapp: 'WhatsApp:',
    area: 'Regio:',
    areaValue: 'Limburg, Nederland',
  },
  contactForm: {
    name: 'Naam',
    email: 'E-mail',
    interestedIn: 'Ik heb interesse in',
    chooseOption: 'Kies een optie',
    topics: {
      regularLessons: 'Wekelijkse groepslessen',
      privateLessons: 'Privélessen',
      weddingDance: 'Openingsdans',
      other: 'Iets anders',
    },
    message: 'Bericht',
    consent: 'Ik heb de {link} gelezen.',
    consentLink: 'privacyverklaring',
    send: 'Verstuur bericht',
    sending: 'Versturen…',
    success: 'Bedankt! Je bericht is verstuurd. We nemen snel contact met je op.',
    error: 'Er ging iets mis bij het versturen van je bericht. Probeer het opnieuw of mail ons rechtstreeks.',
  },
  cookies: {
    bannerTitle: 'Cookies op deze website',
    bannerText:
      'We gebruiken technieken die strikt noodzakelijk zijn om de website te laten werken en om je keuze te onthouden. Met je toestemming gebruiken we ook Google Analytics om te begrijpen hoe bezoekers de site gebruiken. Je kunt je keuze altijd wijzigen via ‘Cookies beheren’ onderaan de pagina.',
    policyLink: 'Cookiebeleid',
    acceptAll: 'Alles accepteren',
    rejectOptional: 'Optionele weigeren',
    settings: 'Cookie-instellingen',
    dialogTitle: 'Cookie-instellingen',
    closeDialog: 'Cookie-instellingen sluiten',
    dialogIntro:
      'Kies welke optionele technieken we mogen gebruiken. Noodzakelijke technieken staan altijd aan, omdat de website ze nodig heeft.',
    necessaryName: 'Noodzakelijk',
    alwaysOn: 'Altijd aan',
    necessaryDescription:
      'Nodig om de website te laten werken en om je cookiekeuze te onthouden. Je keuze wordt in je eigen browser opgeslagen en bevat geen persoonsgegevens.',
    analyticsName: 'Analyse',
    analyticsDescriptionBefore:
      'Google Analytics 4 telt bezoeken en laat zien welke pagina’s worden gebruikt, zodat we de website kunnen verbeteren. Het plaatst de cookies',
    analyticsDescriptionAnd: 'en',
    analyticsDescriptionAfter: '(Google). Staat uit, tenzij je het aanzet.',
    save: 'Keuze opslaan',
    readPolicy: 'Lees het cookiebeleid',
    savedAnalyticsOn: 'Je cookiekeuze is opgeslagen: analyse aan.',
    savedAnalyticsOff: 'Je cookiekeuze is opgeslagen: analyse uit.',
  },
  testimonials: {
    carouselLabel: 'Ervaringen van leerlingen',
    previous: 'Vorige ervaring',
    next: 'Volgende ervaring',
    goTo: 'Ga naar ervaring {number}',
    reviewPrompt: 'Met ons gedanst?',
    reviewLink: 'We horen graag hoe je het vond — laat een review achter',
  },
  whatsapp: {
    message: 'Hoi! Ik heb een vraag over de tangolessen.',
    buttonLabel: 'Chat met ons via WhatsApp',
  },
  community: {
    eyebrow: 'Community',
    heading: 'Samen tango laten groeien in Zuid-Nederland',
    text: 'In heel Limburg en de grensregio is er een warme tangogemeenschap, en die helpen we graag groeien. Milonga’s, práctica’s, lessen en gastdocenten: we delen op één plek wat er in de buurt gebeurt, zodat je makkelijk je volgende dans vindt.',
    note: 'Iedereen is welkom, op elk niveau.',
    button: 'Word lid van de WhatsApp-community',
  },
};

const de: CommonText = {
  siteName: 'TangoMJ - Argentinischer Tango Landgraaf',
  navigation: {
    home: 'Startseite',
    weddingDance: 'Hochzeitstanz',
    privateLessons: 'Privatstunden',
    about: 'Über uns',
    contact: 'Kontakt',
    primaryLabel: 'Hauptmenü',
    bookLesson: 'Tanzstunde buchen',
    openMenu: 'Menü öffnen',
    closeMenu: 'Menü schließen',
    chooseLanguage: 'Sprache wählen',
    homeLink: '{site}, zur Startseite',
    skipToContent: 'Zum Inhalt springen',
  },
  footer: {
    navigationLabel: 'Fußzeile',
    privacyPolicy: 'Datenschutzerklärung',
    cookiePolicy: 'Cookie-Richtlinie',
    legalNotice: 'Impressum',
    manageCookies: 'Cookies verwalten',
    rightsReserved: 'Alle Rechte vorbehalten.',
    socialLink: '{site} auf {network}',
  },
  contactDetails: {
    email: 'E-Mail:',
    whatsapp: 'WhatsApp:',
    area: 'Region:',
    areaValue: 'Limburg, Niederlande',
  },
  contactForm: {
    name: 'Name',
    email: 'E-Mail',
    interestedIn: 'Ich interessiere mich für',
    chooseOption: 'Bitte auswählen',
    topics: {
      regularLessons: 'Wöchentliche Gruppenkurse',
      privateLessons: 'Privatstunden',
      weddingDance: 'Hochzeitstanz',
      other: 'Etwas anderes',
    },
    message: 'Nachricht',
    consent: 'Ich habe die {link} gelesen.',
    consentLink: 'Datenschutzerklärung',
    send: 'Nachricht senden',
    sending: 'Wird gesendet…',
    success: 'Danke! Deine Nachricht wurde gesendet. Wir melden uns bald bei dir.',
    error:
      'Beim Senden ist etwas schiefgegangen. Bitte versuche es noch einmal oder schreib uns direkt eine E-Mail.',
  },
  cookies: {
    bannerTitle: 'Cookies auf dieser Website',
    bannerText:
      'Wir verwenden Technologien, die für den Betrieb der Website und zum Speichern deiner Auswahl unbedingt erforderlich sind. Mit deiner Einwilligung nutzen wir außerdem Google Analytics, um zu verstehen, wie Besucher die Website nutzen. Du kannst deine Auswahl jederzeit über „Cookies verwalten“ unten auf der Seite ändern.',
    policyLink: 'Cookie-Richtlinie',
    acceptAll: 'Alle akzeptieren',
    rejectOptional: 'Optionale ablehnen',
    settings: 'Cookie-Einstellungen',
    dialogTitle: 'Cookie-Einstellungen',
    closeDialog: 'Cookie-Einstellungen schließen',
    dialogIntro:
      'Wähle aus, welche optionalen Technologien wir verwenden dürfen. Notwendige Technologien sind immer aktiv, weil die Website sie braucht.',
    necessaryName: 'Notwendig',
    alwaysOn: 'Immer aktiv',
    necessaryDescription:
      'Erforderlich, damit die Website funktioniert und deine Cookie-Auswahl gespeichert wird. Deine Auswahl wird in deinem eigenen Browser gespeichert und enthält keine personenbezogenen Daten.',
    analyticsName: 'Analyse',
    analyticsDescriptionBefore:
      'Google Analytics 4 zählt Besuche und zeigt, welche Seiten genutzt werden, damit wir die Website verbessern können. Es setzt die Cookies',
    analyticsDescriptionAnd: 'und',
    analyticsDescriptionAfter: '(Google). Ausgeschaltet, solange du es nicht aktivierst.',
    save: 'Auswahl speichern',
    readPolicy: 'Cookie-Richtlinie lesen',
    savedAnalyticsOn: 'Deine Cookie-Auswahl wurde gespeichert: Analyse an.',
    savedAnalyticsOff: 'Deine Cookie-Auswahl wurde gespeichert: Analyse aus.',
  },
  testimonials: {
    carouselLabel: 'Erfahrungen unserer Schüler',
    previous: 'Vorheriger Erfahrungsbericht',
    next: 'Nächster Erfahrungsbericht',
    goTo: 'Zu Erfahrungsbericht {number}',
    reviewPrompt: 'Schon mit uns getanzt?',
    reviewLink: 'Wir freuen uns über deine Erfahrung – hinterlass uns eine Bewertung',
  },
  whatsapp: {
    message: 'Hallo! Ich habe eine Frage zum Tangounterricht.',
    buttonLabel: 'Schreib uns auf WhatsApp',
  },
  community: {
    eyebrow: 'Community',
    heading: 'Tango im Süden der Niederlande wachsen lassen',
    text: 'In ganz Limburg und der Grenzregion gibt es eine herzliche Tango-Community, und wir möchten sie wachsen lassen. Milongas, Prácticas, Kurse und Gastlehrer: Wir teilen an einem Ort, was hier in der Gegend los ist, damit du ganz einfach deinen nächsten Tanz findest.',
    note: 'Alle sind willkommen, egal auf welchem Niveau.',
    button: 'Der WhatsApp-Community beitreten',
  },
};

export const COMMON_TEXT: Record<Language, CommonText> = { en, nl, de };

/** Fills {placeholders} in a text, e.g. fillText('{site} on {network}', { site, network }). */
export function fillText(text: string, values: Record<string, string | number>): string {
  return text.replace(/\{(\w+)\}/g, (match, key: string) => String(values[key] ?? match));
}
