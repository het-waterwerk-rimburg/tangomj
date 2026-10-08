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
        button: { label: 'Join a regular class', target: 'contact' },
        description:
          'Weekly group classes for every level. Come with or without a partner and build your dance step by step, in a friendly room. Your first class is €5.',
      },
      {
        title: 'Private lessons',
        button: { label: 'See private lessons', target: 'privateLessons' },
        description:
          'One-on-one sessions focused on what you want to work on: your embrace, musicality, or getting ready for a special night.',
      },
      {
        title: 'Wedding dance',
        button: { label: 'Discover wedding dance', target: 'weddingDance' },
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
  faq: {
    eyebrow: 'FAQ',
    heading: 'Frequently asked questions',
    items: [
      {
        question: 'Why learn Argentine tango with Tango MJ?',
        answer: [
          'Tango MJ is taught by a couple who complement technical knowledge with the traditions and culture of Argentine tango. We learned in Buenos Aires with teachers deeply rooted in traditional tango, and we bring that experience to our classes in Limburg.',
          'For us, tango is not only about learning steps. We teach you tools, movement, musicality and the language of the dance so that you can develop your own way of dancing. Tango can also teach valuable skills for life: connection, communication, awareness, confidence and listening.',
        ],
      },
      {
        question: "Do I need a partner to join Tango MJ's tango classes?",
        answer: [
          'No. You do not need a partner to join our Argentine tango classes.',
          'Our methodology allows you to learn and practice with different partners during the classes. This is an important part of learning tango because it helps you develop connection, adaptability and communication with different dancers.',
        ],
      },
      {
        question: 'Can I learn Argentine tango if I have no previous dance experience?',
        answer: [
          'Absolutely. You can start with Tango MJ even if you have never danced before.',
          'Our methodology allows each person to learn at their own pace. We also welcome dancers who already have several years of tango experience and want to continue developing their technique, musicality and understanding of the dance.',
        ],
      },
      {
        question: "Where and when are Tango MJ's regular classes held?",
        answer: [
          'Our regular Argentine tango classes take place every Friday at 19:30 at Brandpoort in Landgraaf, Limburg.',
          'The classes are suitable for people starting their tango journey as well as dancers with previous experience.',
        ],
      },
      {
        question: 'What levels of Argentine tango do you teach?',
        answer: [
          'We welcome both complete beginners and experienced dancers.',
          'You can start with us without any previous experience, or join the regular classes if you have already been dancing tango for years. Our methodology allows each student to develop at their own pace while continuing to work on technique, movement, musicality and connection.',
        ],
      },
      {
        question: 'Who teaches Argentine tango at Tango MJ?',
        answer: [
          'Tango MJ is taught by a couple who have learned Argentine tango in Buenos Aires with teachers of the traditional tango.',
          'We combine technical knowledge with a deep respect for the traditions and culture of Argentine tango. Our goal is not simply to teach choreography or sequences, but to give students the tools and understanding they need to develop their own dance.',
        ],
      },
      {
        question: 'Does Tango MJ offer private Argentine tango lessons?',
        answer: [
          'Yes. We offer private lessons for students who want a highly personalised learning experience.',
          'Private classes allow us to focus directly on the individual needs and goals of each student or couple. This can make the learning process significantly more efficient by addressing specific technical, physical or musical challenges in a focused way.',
        ],
        link: { target: 'privateLessons', label: 'See prices for private lessons' },
      },
      {
        question: "Can I join Tango MJ's classes at any time during the year?",
        answer: [
          'Yes. You can join our regular classes at different points during the year, even if you are new to tango.',
          'We also organise beginner workshops several times a year for people who would like to start their tango journey with a dedicated introduction to the dance.',
        ],
      },
      {
        question: 'What makes Tango MJ different from other Argentine tango schools?',
        answer: [
          'Our approach is based on authenticity and understanding rather than simply memorising steps.',
          'We focus on giving students practical tools, understanding the language of Argentine tango, developing physical awareness and learning how to connect with both the music and another person.',
          'Our experience in Buenos Aires and our connection with traditional tango influence the way we teach. We want students to learn how to dance, rather than simply learn a sequence of steps.',
          'Our classes are available in English, German, Dutch and Spanish.',
        ],
      },
      {
        question: 'Does Tango MJ offer workshops for dance schools and companies?',
        answer: [
          'Yes. In addition to our regular classes and private lessons, we offer workshops for other dance schools and organisations.',
          'We also work with companies and teams, using tango as a way to explore connection, communication, listening, movement and collaboration.',
          'If you are interested in organising a tango workshop for your dance school, company or organisation, you can contact Tango MJ to discuss your needs.',
        ],
        link: { target: 'contact', label: 'Get in touch' },
      },
    ],
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
        button: { label: 'Doe mee met een les', target: 'contact' },
        description:
          'Groepslessen voor elk niveau, elke week. Kom met of zonder partner en bouw je dans stap voor stap op, in een vriendelijke zaal. Je eerste les kost €5.',
      },
      {
        title: 'Privélessen',
        button: { label: 'Bekijk de privélessen', target: 'privateLessons' },
        description:
          'Lessen één-op-één, gericht op waar jij aan wilt werken: je omhelzing, je muzikaliteit of je voorbereiding op een bijzondere avond.',
      },
      {
        title: 'Openingsdans',
        button: { label: 'Ontdek de openingsdans', target: 'weddingDance' },
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
  faq: {
    eyebrow: 'FAQ',
    heading: 'Veelgestelde vragen',
    items: [
      {
        question: 'Waarom Argentijnse tango leren bij Tango MJ?',
        answer: [
          'Tango MJ wordt gegeven door een stel dat technische kennis combineert met de tradities en de cultuur van de Argentijnse tango. Wij leerden in Buenos Aires bij docenten die diep geworteld zijn in de traditionele tango, en die ervaring nemen we mee naar onze lessen in Limburg.',
          'Voor ons gaat tango niet alleen over passen leren. We geven je gereedschap, beweging, muzikaliteit en de taal van de dans mee, zodat je je eigen manier van dansen kunt ontwikkelen. Tango kan je ook waardevolle vaardigheden voor het leven leren: verbinding, communicatie, bewustzijn, zelfvertrouwen en luisteren.',
        ],
      },
      {
        question: 'Heb ik een partner nodig om mee te doen aan de tangolessen van Tango MJ?',
        answer: [
          'Nee. Je hebt geen partner nodig om mee te doen aan onze lessen Argentijnse tango.',
          'Dankzij onze methode leer en oefen je tijdens de lessen met verschillende partners. Dat is een belangrijk onderdeel van tango leren, omdat je zo verbinding, aanpassingsvermogen en communicatie met verschillende dansers ontwikkelt.',
        ],
      },
      {
        question: 'Kan ik Argentijnse tango leren zonder danservaring?',
        answer: [
          'Zeker. Je kunt bij Tango MJ beginnen, ook als je nog nooit gedanst hebt.',
          'Met onze methode leert iedereen in zijn eigen tempo. Ook dansers met al jaren tango-ervaring die hun techniek, muzikaliteit en begrip van de dans verder willen ontwikkelen, zijn van harte welkom.',
        ],
      },
      {
        question: 'Waar en wanneer zijn de wekelijkse lessen van Tango MJ?',
        answer: [
          'Onze wekelijkse lessen Argentijnse tango zijn elke vrijdag om 19:30 uur in de Brandpoort in Landgraaf, Limburg.',
          'De lessen zijn geschikt voor mensen die net met tango beginnen en voor dansers met ervaring.',
        ],
      },
      {
        question: 'Welke niveaus Argentijnse tango geven jullie les?',
        answer: [
          'We verwelkomen zowel absolute beginners als ervaren dansers.',
          'Je kunt bij ons beginnen zonder enige ervaring, of aansluiten bij de wekelijkse lessen als je al jaren tango danst. Met onze methode ontwikkelt iedere leerling zich in zijn eigen tempo, terwijl je blijft werken aan techniek, beweging, muzikaliteit en verbinding.',
        ],
      },
      {
        question: 'Wie geeft de lessen Argentijnse tango bij Tango MJ?',
        answer: [
          'Tango MJ wordt gegeven door een stel dat Argentijnse tango leerde in Buenos Aires, bij docenten van de traditionele tango.',
          'We combineren technische kennis met diep respect voor de tradities en de cultuur van de Argentijnse tango. Ons doel is niet alleen een choreografie of reeksen passen aan te leren, maar leerlingen de middelen en het inzicht te geven om hun eigen dans te ontwikkelen.',
        ],
      },
      {
        question: 'Geeft Tango MJ privélessen Argentijnse tango?',
        answer: [
          'Ja. We geven privélessen voor leerlingen die op een heel persoonlijke manier willen leren.',
          'In een privéles kunnen we ons direct richten op de wensen en doelen van iedere leerling of ieder stel. Dat kan het leerproces een stuk efficiënter maken, omdat we gericht werken aan specifieke technische, fysieke of muzikale uitdagingen.',
        ],
        link: { target: 'privateLessons', label: 'Bekijk de prijzen van privélessen' },
      },
      {
        question: 'Kan ik op elk moment van het jaar instappen bij Tango MJ?',
        answer: [
          'Ja. Je kunt op verschillende momenten in het jaar aansluiten bij onze wekelijkse lessen, ook als tango nieuw voor je is.',
          'Daarnaast organiseren we meerdere keren per jaar workshops voor beginners, voor wie de tangoreis wil starten met een speciale kennismaking met de dans.',
        ],
      },
      {
        question: 'Wat maakt Tango MJ anders dan andere scholen voor Argentijnse tango?',
        answer: [
          'Onze aanpak draait om authenticiteit en begrip, niet om alleen passen uit je hoofd leren.',
          'We richten ons op praktische middelen, het begrijpen van de taal van de Argentijnse tango, lichaamsbewustzijn en leren verbinden met zowel de muziek als een ander persoon.',
          'Onze ervaring in Buenos Aires en onze band met de traditionele tango bepalen hoe we lesgeven. We willen dat leerlingen leren dansen, en niet alleen een reeks passen leren.',
          'Onze lessen zijn beschikbaar in het Engels, Duits, Nederlands en Spaans.',
        ],
      },
      {
        question: 'Geeft Tango MJ workshops voor dansscholen en bedrijven?',
        answer: [
          'Ja. Naast onze wekelijkse lessen en privélessen geven we workshops voor andere dansscholen en organisaties.',
          'We werken ook met bedrijven en teams, waarbij we tango gebruiken om verbinding, communicatie, luisteren, beweging en samenwerking te verkennen.',
          'Wil je een tangoworkshop organiseren voor je dansschool, bedrijf of organisatie? Neem dan contact op met Tango MJ om je wensen te bespreken.',
        ],
        link: { target: 'contact', label: 'Neem contact op' },
      },
    ],
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
        button: { label: 'Zu den Gruppenkursen', target: 'contact' },
        description:
          'Gruppenkurse für jedes Niveau, jede Woche. Komm mit oder ohne Partner und bau deinen Tanz Schritt für Schritt auf, in freundlicher Atmosphäre. Deine erste Stunde kostet €5.',
      },
      {
        title: 'Privatstunden',
        button: { label: 'Privatstunden ansehen', target: 'privateLessons' },
        description:
          'Einzelunterricht mit Fokus auf das, woran du arbeiten möchtest: deine Umarmung, deine Musikalität oder die Vorbereitung auf einen besonderen Abend.',
      },
      {
        title: 'Hochzeitstanz',
        button: { label: 'Hochzeitstanz entdecken', target: 'weddingDance' },
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
  faq: {
    eyebrow: 'FAQ',
    heading: 'Häufige Fragen',
    items: [
      {
        question: 'Warum argentinischen Tango bei Tango MJ lernen?',
        answer: [
          'Tango MJ wird von einem Paar unterrichtet, das technisches Wissen mit den Traditionen und der Kultur des argentinischen Tangos verbindet. Wir haben in Buenos Aires bei Lehrern gelernt, die tief im traditionellen Tango verwurzelt sind, und bringen diese Erfahrung in unsere Kurse in Limburg ein.',
          'Für uns geht es beim Tango nicht nur darum, Schritte zu lernen. Wir geben dir Werkzeuge, Bewegung, Musikalität und die Sprache des Tanzes mit, damit du deine eigene Art zu tanzen entwickeln kannst. Tango kann dir auch wertvolle Fähigkeiten fürs Leben vermitteln: Verbindung, Kommunikation, Achtsamkeit, Selbstvertrauen und Zuhören.',
        ],
      },
      {
        question: 'Brauche ich einen Partner für die Tangokurse von Tango MJ?',
        answer: [
          'Nein. Für unsere Kurse in argentinischem Tango brauchst du keinen Partner.',
          'Mit unserer Methode lernst und übst du im Unterricht mit verschiedenen Partnern. Das ist ein wichtiger Teil des Tangolernens, denn so entwickelst du Verbindung, Anpassungsfähigkeit und Kommunikation mit unterschiedlichen Tänzerinnen und Tänzern.',
        ],
      },
      {
        question: 'Kann ich argentinischen Tango ohne Tanzerfahrung lernen?',
        answer: [
          'Auf jeden Fall. Du kannst bei Tango MJ anfangen, auch wenn du noch nie getanzt hast.',
          'Mit unserer Methode lernt jede Person in ihrem eigenen Tempo. Willkommen sind auch Tänzerinnen und Tänzer mit mehreren Jahren Tango-Erfahrung, die ihre Technik, Musikalität und ihr Verständnis des Tanzes weiterentwickeln möchten.',
        ],
      },
      {
        question: 'Wo und wann finden die wöchentlichen Kurse von Tango MJ statt?',
        answer: [
          'Unsere wöchentlichen Kurse in argentinischem Tango finden jeden Freitag um 19:30 Uhr in der Brandpoort in Landgraaf, Limburg, statt.',
          'Die Kurse eignen sich für Menschen, die gerade mit Tango beginnen, ebenso wie für Tänzerinnen und Tänzer mit Erfahrung.',
        ],
      },
      {
        question: 'Welche Niveaus im argentinischen Tango unterrichtet ihr?',
        answer: [
          'Wir freuen uns über absolute Anfänger ebenso wie über erfahrene Tänzerinnen und Tänzer.',
          'Du kannst bei uns ganz ohne Vorkenntnisse anfangen oder in die wöchentlichen Kurse einsteigen, wenn du schon seit Jahren Tango tanzt. Mit unserer Methode entwickelt sich jede Schülerin und jeder Schüler im eigenen Tempo weiter und arbeitet dabei an Technik, Bewegung, Musikalität und Verbindung.',
        ],
      },
      {
        question: 'Wer unterrichtet argentinischen Tango bei Tango MJ?',
        answer: [
          'Tango MJ wird von einem Paar unterrichtet, das argentinischen Tango in Buenos Aires bei Lehrern des traditionellen Tangos gelernt hat.',
          'Wir verbinden technisches Wissen mit großem Respekt vor den Traditionen und der Kultur des argentinischen Tangos. Unser Ziel ist nicht, einfach Choreografien oder Schrittfolgen beizubringen, sondern unseren Schülern die Werkzeuge und das Verständnis zu geben, die sie brauchen, um ihren eigenen Tanz zu entwickeln.',
        ],
      },
      {
        question: 'Bietet Tango MJ Privatstunden in argentinischem Tango an?',
        answer: [
          'Ja. Wir bieten Privatstunden für alle, die besonders persönlich lernen möchten.',
          'Im Privatunterricht können wir uns direkt auf die Bedürfnisse und Ziele jeder Schülerin, jedes Schülers oder jedes Paares konzentrieren. Das kann das Lernen deutlich effizienter machen, weil wir gezielt an bestimmten technischen, körperlichen oder musikalischen Herausforderungen arbeiten.',
        ],
        link: { target: 'privateLessons', label: 'Preise für Privatstunden ansehen' },
      },
      {
        question: 'Kann ich jederzeit im Jahr bei Tango MJ einsteigen?',
        answer: [
          'Ja. Du kannst zu verschiedenen Zeitpunkten im Jahr in unsere wöchentlichen Kurse einsteigen, auch wenn Tango neu für dich ist.',
          'Außerdem organisieren wir mehrmals im Jahr Workshops für Anfänger – für alle, die ihren Tangoweg mit einer eigenen Einführung in den Tanz beginnen möchten.',
        ],
      },
      {
        question: 'Was unterscheidet Tango MJ von anderen Schulen für argentinischen Tango?',
        answer: [
          'Unser Ansatz beruht auf Authentizität und Verständnis statt auf dem bloßen Auswendiglernen von Schritten.',
          'Wir konzentrieren uns darauf, unseren Schülern praktische Werkzeuge zu geben, die Sprache des argentinischen Tangos zu verstehen, ein Körperbewusstsein zu entwickeln und zu lernen, sich sowohl mit der Musik als auch mit einem anderen Menschen zu verbinden.',
          'Unsere Erfahrung in Buenos Aires und unsere Verbindung zum traditionellen Tango prägen unseren Unterricht. Wir möchten, dass unsere Schüler tanzen lernen – und nicht nur eine Schrittfolge.',
          'Unsere Kurse gibt es auf Englisch, Deutsch, Niederländisch und Spanisch.',
        ],
      },
      {
        question: 'Bietet Tango MJ Workshops für Tanzschulen und Unternehmen an?',
        answer: [
          'Ja. Neben unseren wöchentlichen Kursen und Privatstunden bieten wir Workshops für andere Tanzschulen und Organisationen an.',
          'Wir arbeiten auch mit Unternehmen und Teams und nutzen Tango, um Verbindung, Kommunikation, Zuhören, Bewegung und Zusammenarbeit zu erforschen.',
          'Möchtest du einen Tango-Workshop für deine Tanzschule, dein Unternehmen oder deine Organisation organisieren? Dann kontaktiere Tango MJ, um deine Wünsche zu besprechen.',
        ],
        link: { target: 'contact', label: 'Kontakt aufnehmen' },
      },
    ],
  },
  contact: {
    eyebrow: 'Kontakt',
    heading: 'Komm in unsere wöchentlichen Kurse',
    intro:
      'Schreib uns, wenn du mit Tango anfangen oder besser werden möchtest – oder wenn du eine Frage hast. Wir antworten gern.',
  },
};

export const HOME_TEXT: Record<Language, HomeText> = { en, nl, de };
