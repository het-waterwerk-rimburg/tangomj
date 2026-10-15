/**
 * Regular Classes page texts (weekly group classes on Friday evening).
 * Prices and times are written out in each language, so update all three when they change.
 * The tango movement names (abrazo, caminata …) stay in Spanish in every language.
 */
import type { Language } from '../languages';

/** The venue. The address is the same in every language. */
export const REGULAR_LESSONS_VENUE = {
  name: 'Zalencentrum de Brandpoort',
  streetAddress: 'Hoogstraat 191',
  postalCode: '6373 HS',
  locality: 'Landgraaf',
};

/** Movements of the tango "language", named in Spanish on every page. */
export const TANGO_MOVEMENTS = ['abrazo', 'caminata', 'ochos', 'medios giros', 'giros', 'sacadas'];

const en = {
  meta: {
    title: 'Regular Argentine Tango Classes in Landgraaf',
    description:
      'Weekly Argentine tango group classes every Friday at 19:30 at De Brandpoort, Landgraaf (Limburg). Everyone welcome, with or without a partner. First class €5.',
  },
  hero: {
    imageAlt: 'A tango class gathered around a dancing couple',
    eyebrow: 'Regular classes',
    heading: 'Argentine tango every Friday in Landgraaf',
    description:
      'Weekly group classes for beginners and experienced dancers. Come on your own or with a partner: everyone is welcome.',
    primaryButton: 'Try a class for €5',
    secondaryButton: 'Where and when',
    note: 'Every Friday · 19:30 · De Brandpoort, Landgraaf',
  },
  practical: {
    eyebrow: 'Practical information',
    heading: 'Where and when',
    intro: 'You can join at any time of the year. No experience needed and no need to sign up in advance.',
    items: [
      { title: 'When', value: 'Every Friday', detail: 'From 19:30 to about 20:00–20:15' },
      { title: 'Where', value: 'De Brandpoort', detail: 'Hoogstraat 191, 6373 HS Landgraaf' },
      { title: 'Who', value: 'Everyone is welcome', detail: 'Come on your own or with a partner' },
      {
        title: 'Language',
        value: 'English and German',
        detail: 'Some Dutch too, and Spanish for the more adventurous',
      },
    ],
  },
  prices: {
    eyebrow: 'Prices',
    heading: 'Start for €5',
    intro: 'Your first class is a trial class. After that you pay per class, or choose a class card.',
    perClass: 'per class',
    cards: [
      {
        title: 'Your first class',
        price: '€5',
        unit: 'trial class',
        text: 'Come and see if tango is for you.',
      },
      {
        title: 'Single class',
        price: '€15',
        unit: 'per class',
        text: 'Pay per class, whenever you come.',
      },
      {
        title: 'Class cards',
        price: '4 or 8 classes',
        unit: 'promotional price',
        text: 'For those who want to commit to the classes. Cards are sold at the class.',
      },
    ],
  },
  map: {
    eyebrow: 'Location',
    heading: 'How to find us',
    intro: 'The classes take place at Zalencentrum de Brandpoort in Landgraaf, with free parking in front of the building.',
  },
  pillars: {
    eyebrow: 'Our pillars',
    heading: 'What you learn in our classes',
    intro: 'Tango is more than steps. Our classes are built on five pillars that together make you a complete dancer.',
    movementsLabel: 'Movements',
    items: [
      {
        title: 'The language of tango',
        text: 'We work on the movements that make up the dance of tango, the vocabulary you need to improvise with any partner.',
        showMovements: true,
      },
      {
        title: 'Connection with yourself and the other',
        text: 'Perceiving yourself, body awareness and empathy. We look for a shared dance, in which both dancers listen and take part.',
        showMovements: false,
      },
      {
        title: 'Movement and the body',
        text: 'We say that the limit of the dance is the limit of the body. Training balance, strength, coordination and mobility gives you more tools to express yourself.',
        showMovements: false,
      },
      {
        title: 'Tango culture',
        text: 'Tango is not only a dance: it is a culture from the Río de la Plata. We share the codes of the milonga and the social side of tango: meeting people and sharing the dance and the company of others.',
        showMovements: false,
      },
      {
        title: 'Music and history',
        text: 'Understanding the music and how to interpret it, getting to know the different orchestras, and how tango developed over time is all part of learning this art.',
        showMovements: false,
      },
    ],
  },
  more: {
    eyebrow: 'Get to know us',
    heading: 'Who teaches the classes?',
    text: 'The classes are taught by Maddie & Joel, an Argentine-German couple who met dancing tango in Buenos Aires.',
    aboutButton: 'About us',
    articleIntro: 'Want to know more about the classes?',
    articleLink: 'Read our article on tango classes for beginners',
  },
  callToAction: {
    heading: 'Come and try your first class',
    description: 'Send us a message and we will tell you everything you need for your first Friday.',
    button: 'Get in touch',
  },
  contact: {
    eyebrow: 'Contact',
    heading: 'Questions about the classes?',
    intro: 'Send us a message, or simply come by on Friday at 19:30. We look forward to dancing with you.',
  },
};

export type RegularLessonsText = typeof en;

const nl: RegularLessonsText = {
  meta: {
    title: 'Wekelijkse tangolessen in Landgraaf',
    description:
      'Wekelijkse groepslessen Argentijnse tango, elke vrijdag om 19:30 uur in De Brandpoort, Landgraaf (Limburg). Iedereen welkom, met of zonder partner. Eerste les €5.',
  },
  hero: {
    imageAlt: 'Een tangoles rond een dansend paar',
    eyebrow: 'Groepslessen',
    heading: 'Elke vrijdag Argentijnse tango in Landgraaf',
    description:
      'Wekelijkse groepslessen voor beginners en ervaren dansers. Kom alleen of met een partner: iedereen is welkom.',
    primaryButton: 'Probeer een les voor €5',
    secondaryButton: 'Waar en wanneer',
    note: 'Elke vrijdag · 19:30 uur · De Brandpoort, Landgraaf',
  },
  practical: {
    eyebrow: 'Praktische informatie',
    heading: 'Waar en wanneer',
    intro: 'Je kunt het hele jaar door instromen. Geen ervaring nodig en je hoeft je niet vooraf aan te melden.',
    items: [
      { title: 'Wanneer', value: 'Elke vrijdag', detail: 'Van 19:30 tot ongeveer 20:00–20:15 uur' },
      { title: 'Waar', value: 'De Brandpoort', detail: 'Hoogstraat 191, 6373 HS Landgraaf' },
      { title: 'Voor wie', value: 'Iedereen is welkom', detail: 'Kom alleen of met een partner' },
      {
        title: 'Taal',
        value: 'Engels en Duits',
        detail: 'Ook al wat Nederlands, en Spaans voor de avonturiers',
      },
    ],
  },
  prices: {
    eyebrow: 'Prijzen',
    heading: 'Begin voor €5',
    intro: 'Je eerste les is een proefles. Daarna betaal je per les, of kies je een lessenkaart.',
    perClass: 'per les',
    cards: [
      {
        title: 'Je eerste les',
        price: '€5',
        unit: 'proefles',
        text: 'Kom kijken of tango iets voor je is.',
      },
      {
        title: 'Losse les',
        price: '€15',
        unit: 'per les',
        text: 'Betaal per les, wanneer je komt.',
      },
      {
        title: 'Lessenkaarten',
        price: '4 of 8 lessen',
        unit: 'voordeelprijs',
        text: 'Voor wie zich aan de lessen wil verbinden. De kaarten zijn te koop tijdens de les.',
      },
    ],
  },
  map: {
    eyebrow: 'Locatie',
    heading: 'Zo vind je ons',
    intro: 'De lessen zijn in Zalencentrum de Brandpoort in Landgraaf, met gratis parkeren voor het gebouw.',
  },
  pillars: {
    eyebrow: 'Onze pijlers',
    heading: 'Wat je leert in onze lessen',
    intro: 'Tango is meer dan passen. Onze lessen rusten op vijf pijlers die samen een complete danser van je maken.',
    movementsLabel: 'Bewegingen',
    items: [
      {
        title: 'De taal van de tango',
        text: 'We werken aan de bewegingen die de tango maken: de woordenschat die je nodig hebt om met elke partner te improviseren.',
        showMovements: true,
      },
      {
        title: 'Verbinding met jezelf en de ander',
        text: 'Jezelf waarnemen, lichaamsbewustzijn en empathie. We zoeken een gedeelde dans, waarin beide dansers luisteren en meedoen.',
        showMovements: false,
      },
      {
        title: 'Beweging en lichaam',
        text: 'Wij zeggen: de grens van de dans ligt bij de grens van het lichaam. Door balans, kracht, coördinatie en mobiliteit te trainen krijg je meer middelen om je uit te drukken.',
        showMovements: false,
      },
      {
        title: 'De tangocultuur',
        text: 'Tango is niet alleen een dans: het is een cultuur uit de Río de la Plata. We delen de codes van de milonga en de sociale kant van de tango: mensen ontmoeten en de dans en het gezelschap met anderen delen.',
        showMovements: false,
      },
      {
        title: 'Muziek en geschiedenis',
        text: 'De muziek begrijpen en leren interpreteren, de verschillende orkesten leren kennen en weten hoe de tango zich heeft ontwikkeld: het hoort allemaal bij het leren van deze kunst.',
        showMovements: false,
      },
    ],
  },
  more: {
    eyebrow: 'Maak kennis',
    heading: 'Wie geeft de lessen?',
    text: 'De lessen worden gegeven door Maddie & Joel, een Argentijns-Duits stel dat elkaar leerde kennen tijdens het tangodansen in Buenos Aires.',
    aboutButton: 'Over ons',
    articleIntro: 'Meer weten over de lessen?',
    articleLink: 'Lees ons artikel over tangolessen voor beginners',
  },
  callToAction: {
    heading: 'Kom je eerste les proberen',
    description: 'Stuur ons een bericht en we vertellen je alles wat je nodig hebt voor je eerste vrijdag.',
    button: 'Neem contact op',
  },
  contact: {
    eyebrow: 'Contact',
    heading: 'Vragen over de lessen?',
    intro: 'Stuur ons een bericht, of kom gewoon vrijdag om 19:30 uur langs. We kijken ernaar uit om met je te dansen.',
  },
};

const de: RegularLessonsText = {
  meta: {
    title: 'Wöchentliche Tangokurse in Landgraaf',
    description:
      'Wöchentliche Gruppenkurse in argentinischem Tango, jeden Freitag um 19:30 Uhr in De Brandpoort, Landgraaf (Limburg) – nahe Aachen. Alle willkommen, mit oder ohne Partner. Erste Stunde 5 €.',
  },
  hero: {
    imageAlt: 'Ein Tangokurs rund um ein tanzendes Paar',
    eyebrow: 'Gruppenkurse',
    heading: 'Jeden Freitag argentinischer Tango in Landgraaf',
    description:
      'Wöchentliche Gruppenkurse für Anfänger und erfahrene Tänzer. Komm allein oder mit Partner: Alle sind willkommen.',
    primaryButton: 'Probestunde für 5 €',
    secondaryButton: 'Wo und wann',
    note: 'Jeden Freitag · 19:30 Uhr · De Brandpoort, Landgraaf',
  },
  practical: {
    eyebrow: 'Praktische Infos',
    heading: 'Wo und wann',
    intro: 'Du kannst das ganze Jahr über einsteigen. Keine Vorkenntnisse nötig und keine Anmeldung im Voraus.',
    items: [
      { title: 'Wann', value: 'Jeden Freitag', detail: 'Von 19:30 bis ca. 20:00–20:15 Uhr' },
      { title: 'Wo', value: 'De Brandpoort', detail: 'Hoogstraat 191, 6373 HS Landgraaf' },
      { title: 'Für wen', value: 'Alle sind willkommen', detail: 'Komm allein oder mit Partner' },
      {
        title: 'Sprache',
        value: 'Englisch und Deutsch',
        detail: 'Auch etwas Niederländisch, und Spanisch für die Abenteuerlustigen',
      },
    ],
  },
  prices: {
    eyebrow: 'Preise',
    heading: 'Starte für 5 €',
    intro: 'Deine erste Stunde ist eine Probestunde. Danach zahlst du pro Stunde oder wählst eine Kurskarte.',
    perClass: 'pro Stunde',
    cards: [
      {
        title: 'Deine erste Stunde',
        price: '5 €',
        unit: 'Probestunde',
        text: 'Komm vorbei und finde heraus, ob Tango etwas für dich ist.',
      },
      {
        title: 'Einzelstunde',
        price: '15 €',
        unit: 'pro Stunde',
        text: 'Zahl pro Stunde, wann immer du kommst.',
      },
      {
        title: 'Kurskarten',
        price: '4 oder 8 Stunden',
        unit: 'Vorteilspreis',
        text: 'Für alle, die regelmäßig dabei sein möchten. Die Karten gibt es direkt im Kurs.',
      },
    ],
  },
  map: {
    eyebrow: 'Ort',
    heading: 'So findest du uns',
    intro: 'Die Kurse finden im Zalencentrum de Brandpoort in Landgraaf statt, mit kostenlosen Parkplätzen vor dem Gebäude.',
  },
  pillars: {
    eyebrow: 'Unsere Säulen',
    heading: 'Was du in unseren Kursen lernst',
    intro: 'Tango ist mehr als Schritte. Unsere Kurse ruhen auf fünf Säulen, die dich gemeinsam zu einem vollständigen Tänzer machen.',
    movementsLabel: 'Bewegungen',
    items: [
      {
        title: 'Die Sprache des Tangos',
        text: 'Wir arbeiten an den Bewegungen, die den Tango ausmachen: dem Wortschatz, den du brauchst, um mit jedem Partner zu improvisieren.',
        showMovements: true,
      },
      {
        title: 'Verbindung mit dir selbst und dem anderen',
        text: 'Sich selbst wahrnehmen, Körperbewusstsein und Empathie. Wir suchen einen gemeinsamen Tanz, in dem beide zuhören und mitgestalten.',
        showMovements: false,
      },
      {
        title: 'Bewegung und Körper',
        text: 'Wir sagen: Die Grenze des Tanzes ist die Grenze des Körpers. Wer Gleichgewicht, Kraft, Koordination und Beweglichkeit trainiert, hat mehr Werkzeuge, um sich auszudrücken.',
        showMovements: false,
      },
      {
        title: 'Die Tangokultur',
        text: 'Tango ist nicht nur ein Tanz: Er ist eine Kultur vom Río de la Plata. Wir teilen die Codes der Milonga und die soziale Seite des Tangos: Menschen kennenlernen und den Tanz und die Gesellschaft mit anderen teilen.',
        showMovements: false,
      },
      {
        title: 'Musik und Geschichte',
        text: 'Die Musik verstehen und interpretieren, die verschiedenen Orchester kennenlernen und wissen, wie sich der Tango entwickelt hat: All das gehört dazu, diese Kunst zu lernen.',
        showMovements: false,
      },
    ],
  },
  more: {
    eyebrow: 'Lerne uns kennen',
    heading: 'Wer unterrichtet die Kurse?',
    text: 'Die Kurse werden von Maddie & Joel geleitet, einem argentinisch-deutschen Paar, das sich beim Tangotanzen in Buenos Aires kennengelernt hat.',
    aboutButton: 'Über uns',
    articleIntro: 'Mehr über die Kurse erfahren?',
    articleLink: 'Lies unseren Artikel über Tangokurse für Anfänger',
  },
  callToAction: {
    heading: 'Komm zu deiner ersten Stunde',
    description: 'Schreib uns eine Nachricht, und wir sagen dir alles, was du für deinen ersten Freitag brauchst.',
    button: 'Kontakt aufnehmen',
  },
  contact: {
    eyebrow: 'Kontakt',
    heading: 'Fragen zu den Kursen?',
    intro: 'Schreib uns eine Nachricht oder komm einfach freitags um 19:30 Uhr vorbei. Wir freuen uns darauf, mit dir zu tanzen.',
  },
};

export const REGULAR_LESSONS_TEXT: Record<Language, RegularLessonsText> = { en, nl, de };
