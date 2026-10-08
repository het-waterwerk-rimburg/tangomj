/**
 * Home page texts. The structure follows the page from top to bottom.
 * Event details (Las Tres Esquinas) change with every edition: update the
 * `event` block in all three languages, and the DanceEvent data in HomePage.astro.
 */
import type { Language } from '../languages';

const en = {
  meta: {
    title: 'Tango MJ — Argentine Tango Classes in Landgraaf, Netherlands',
    description:
      'Argentine tango classes in Limburg, the Netherlands. Weekly group lessons, private lessons and wedding dance choreography.',
  },
  hero: {
    imageAlt: 'A tango class gathered around a dancing couple',
    eyebrow: 'Argentine tango in Limburg',
    heading: 'Learn to dance tango in Landgraaf',
    description:
      'Weekly group classes for every level, in a welcoming room. No partner needed, no experience needed.',
    primaryButton: 'Join our regular classes · €5 first class',
    secondaryButton: 'See what we offer',
  },
  event: {
    eyebrow: 'Upcoming Milonga',
    tagline: 'Argentine Tango Milonga in Landgraaf',
    date: 'Friday · 6 November 2026',
    location: 'Landgraaf · Limburg · Netherlands',
    description:
      'Join us for an evening of Argentine tango in Landgraaf, with a tango workshop, live music by Orquesta Conjunto Margot and DJ Cinthya Tomino.',
    button: 'Discover Las Tres Esquinas',
    organiser: 'Organised by Tango MJ',
    imageAlt: 'Orquesta Conjunto Margot performing at Milonga Las Tres Esquinas in Landgraaf',
  },
  school: {
    eyebrow: 'The school',
    heading: 'A place to learn and to meet',
    paragraphs: [
      'In our classes we aim to learn from where each of us is, with patience for ourselves and for one another. We look for connection and mutual support.',
      'We are all on this path, and together we will go further.',
    ],
  },
  lessons: {
    eyebrow: 'What we offer',
    heading: 'Three ways to dance with us',
    intro: 'Pick the one that fits, or ask us and we will point you the right way.',
    items: [
      {
        title: 'Regular lessons',
        description:
          'Weekly group classes for every level. Come with or without a partner and build your dance step by step, in a friendly room. Your first class is €5.',
      },
      {
        title: 'Private lessons',
        description:
          'One-on-one sessions focused on what you want to work on: your embrace, musicality, or getting ready for a special night.',
      },
      {
        title: 'Wedding dance',
        description:
          'A choreography made for your song and your comfort on the floor, rehearsed until it feels easy on the day.',
      },
    ],
  },
  teachers: {
    eyebrow: 'The teachers',
    heading: 'Meet Maddie & Joel',
    intro:
      'An Argentine-German couple who met dancing tango in Buenos Aires. We teach the regular classes together.',
    maddieRole: 'Tango teacher & coach',
    joelRole: 'Tango teacher & tango DJ',
    storyButton: 'Read our full story',
  },
  testimonials: {
    eyebrow: 'Testimonials',
    heading: 'What students say',
  },
  contact: {
    eyebrow: 'Contact',
    heading: 'Join our regular classes',
    intro:
      'Contact us to start or improve your tango, or with any question you have. We will be happy to answer.',
  },
};

export type HomeText = typeof en;

const nl: HomeText = {
  meta: {
    title: 'Tango MJ — Argentijnse tangolessen in Landgraaf, Limburg',
    description:
      'Argentijnse tangolessen in Landgraaf, Limburg. Wekelijkse groepslessen, privélessen en een persoonlijke openingsdans voor je bruiloft.',
  },
  hero: {
    imageAlt: 'Een tangoles rond een dansend paar',
    eyebrow: 'Argentijnse tango in Limburg',
    heading: 'Leer tango dansen in Landgraaf',
    description:
      'Wekelijkse groepslessen voor elk niveau, in een gastvrije zaal. Geen partner nodig, geen ervaring nodig.',
    primaryButton: 'Doe mee met onze lessen · eerste les €5',
    secondaryButton: 'Bekijk ons aanbod',
  },
  event: {
    eyebrow: 'Komende milonga',
    tagline: 'Argentijnse tango-milonga in Landgraaf',
    date: 'Vrijdag · 6 november 2026',
    location: 'Landgraaf · Limburg · Nederland',
    description:
      'Kom naar een avond Argentijnse tango in Landgraaf, met een tangoworkshop, livemuziek van Orquesta Conjunto Margot en DJ Cinthya Tomino.',
    button: 'Ontdek Las Tres Esquinas',
    organiser: 'Georganiseerd door Tango MJ',
    imageAlt: 'Orquesta Conjunto Margot speelt op Milonga Las Tres Esquinas in Landgraaf',
  },
  school: {
    eyebrow: 'De school',
    heading: 'Een plek om te leren en elkaar te ontmoeten',
    paragraphs: [
      'In onze lessen leren we vanaf het punt waar ieder van ons staat, met geduld voor onszelf en voor elkaar. We zoeken verbinding en steunen elkaar.',
      'We zijn allemaal op dit pad, en samen komen we verder.',
    ],
  },
  lessons: {
    eyebrow: 'Ons aanbod',
    heading: 'Drie manieren om met ons te dansen',
    intro: 'Kies wat bij je past, of vraag het ons en we wijzen je de weg.',
    items: [
      {
        title: 'Wekelijkse groepslessen',
        description:
          'Groepslessen voor elk niveau, elke week. Kom met of zonder partner en bouw je dans stap voor stap op, in een vriendelijke zaal. Je eerste les kost €5.',
      },
      {
        title: 'Privélessen',
        description:
          'Lessen één-op-één, gericht op waar jij aan wilt werken: je omhelzing, je muzikaliteit of je voorbereiding op een bijzondere avond.',
      },
      {
        title: 'Openingsdans',
        description:
          'Een choreografie op jullie nummer en afgestemd op hoe jullie je voelen op de dansvloer, geoefend tot het op de grote dag vanzelf gaat.',
      },
    ],
  },
  teachers: {
    eyebrow: 'De docenten',
    heading: 'Maak kennis met Maddie & Joel',
    intro:
      'Een Argentijns-Duits stel dat elkaar leerde kennen tijdens het tangodansen in Buenos Aires. We geven de wekelijkse lessen samen.',
    maddieRole: 'Tangodocent & coach',
    joelRole: 'Tangodocent & tango-dj',
    storyButton: 'Lees ons hele verhaal',
  },
  testimonials: {
    eyebrow: 'Ervaringen',
    heading: 'Wat leerlingen zeggen',
  },
  contact: {
    eyebrow: 'Contact',
    heading: 'Doe mee met onze wekelijkse lessen',
    intro:
      'Neem contact met ons op om met tango te beginnen of je dans te verbeteren, of met welke vraag dan ook. We helpen je graag.',
  },
};

const de: HomeText = {
  meta: {
    title: 'Tango MJ — Argentinische Tangokurse in Landgraaf (Niederlande)',
    description:
      'Argentinischer Tango in Landgraaf, Limburg – nahe Aachen. Wöchentliche Gruppenkurse, Privatstunden und euer persönlicher Hochzeitstanz.',
  },
  hero: {
    imageAlt: 'Eine Tangogruppe rund um ein tanzendes Paar',
    eyebrow: 'Argentinischer Tango in Limburg',
    heading: 'Tango tanzen lernen in Landgraaf',
    description:
      'Wöchentliche Gruppenkurse für jedes Niveau, in einem einladenden Saal. Kein Partner nötig, keine Vorkenntnisse nötig.',
    primaryButton: 'Zu unseren Kursen · erste Stunde €5',
    secondaryButton: 'Unser Angebot ansehen',
  },
  event: {
    eyebrow: 'Nächste Milonga',
    tagline: 'Argentinische Tango-Milonga in Landgraaf',
    date: 'Freitag · 6. November 2026',
    location: 'Landgraaf · Limburg · Niederlande',
    description:
      'Erlebe einen Abend mit argentinischem Tango in Landgraaf – mit Tango-Workshop, Livemusik von Orquesta Conjunto Margot und DJ Cinthya Tomino.',
    button: 'Las Tres Esquinas entdecken',
    organiser: 'Organisiert von Tango MJ',
    imageAlt: 'Orquesta Conjunto Margot spielt bei der Milonga Las Tres Esquinas in Landgraaf',
  },
  school: {
    eyebrow: 'Die Tanzschule',
    heading: 'Ein Ort zum Lernen und Begegnen',
    paragraphs: [
      'In unseren Kursen lernen wir von dort aus, wo jede und jeder gerade steht – mit Geduld für uns selbst und füreinander. Wir suchen Verbindung und unterstützen uns gegenseitig.',
      'Wir alle sind auf diesem Weg, und gemeinsam kommen wir weiter.',
    ],
  },
  lessons: {
    eyebrow: 'Unser Angebot',
    heading: 'Drei Wege, mit uns zu tanzen',
    intro: 'Wähle, was zu dir passt – oder frag uns, und wir zeigen dir den richtigen Weg.',
    items: [
      {
        title: 'Wöchentliche Gruppenkurse',
        description:
          'Gruppenkurse für jedes Niveau, jede Woche. Komm mit oder ohne Partner und bau deinen Tanz Schritt für Schritt auf, in freundlicher Atmosphäre. Deine erste Stunde kostet €5.',
      },
      {
        title: 'Privatstunden',
        description:
          'Einzelunterricht mit Fokus auf das, woran du arbeiten möchtest: deine Umarmung, deine Musikalität oder die Vorbereitung auf einen besonderen Abend.',
      },
      {
        title: 'Hochzeitstanz',
        description:
          'Eine Choreografie zu eurem Lied, abgestimmt darauf, wie ihr euch auf der Tanzfläche wohlfühlt – geprobt, bis sie am großen Tag ganz leicht geht.',
      },
    ],
  },
  teachers: {
    eyebrow: 'Die Lehrer',
    heading: 'Lerne Maddie & Joel kennen',
    intro:
      'Ein argentinisch-deutsches Paar, das sich beim Tangotanzen in Buenos Aires kennengelernt hat. Die wöchentlichen Kurse unterrichten wir gemeinsam.',
    maddieRole: 'Tangolehrerin & Coach',
    joelRole: 'Tangolehrer & Tango-DJ',
    storyButton: 'Unsere ganze Geschichte lesen',
  },
  testimonials: {
    eyebrow: 'Erfahrungen',
    heading: 'Das sagen unsere Schüler',
  },
  contact: {
    eyebrow: 'Kontakt',
    heading: 'Komm in unsere wöchentlichen Kurse',
    intro:
      'Schreib uns, wenn du mit Tango anfangen oder besser werden möchtest – oder wenn du eine Frage hast. Wir antworten gern.',
  },
};

export const HOME_TEXT: Record<Language, HomeText> = { en, nl, de };
