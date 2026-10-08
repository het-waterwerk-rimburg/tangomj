/**
 * Wedding Dance page texts ("Openingsdans" in Dutch, "Hochzeitstanz" in German:
 * the words people search for in each language).
 * The testimonial quotes themselves stay as the couples wrote them (see WeddingDancePage.astro);
 * only the short line under each name is translated here.
 */
import type { Language } from '../languages';

const en = {
  meta: {
    title: 'Wedding Dance',
    description:
      'A personalized tango first dance for your wedding, taught by Maddie & Joel in Landgraaf, Limburg, the Netherlands. No previous experience required.',
  },
  hero: {
    imageAlt: 'Maddie and Joel dancing tango',
    eyebrow: 'Tango Wedding Dance',
    heading: 'Your first dance should feel like you.',
    description:
      'Learn a beautiful, personalized first dance in Landgraaf, even if you have never danced before.',
    primaryButton: 'Book a free consultation',
    secondaryButton: 'See how it works',
    note: 'Personalized private lessons · No previous experience required · Landgraaf, Limburg',
  },
  concerns: {
    eyebrow: 'First dance',
    heading: 'You don’t need to be dancers.',
    intro: 'You just need to feel confident together.',
    items: [
      { title: '“We have two left feet.”', description: 'You’ve never danced together and don’t know where to start.' },
      {
        title: '“We don’t have much time.”',
        description:
          'Between venues, invitations and everything else, learning a choreography can feel overwhelming.',
      },
      {
        title: '“We don’t want to look awkward.”',
        description: 'You want your first dance to feel natural, not like you’re trying to remember 27 steps.',
      },
    ],
  },
  transformation: {
    eyebrow: 'The transformation',
    heading: 'From “we don’t know how to dance” to “we can’t believe we did that.”',
    beforeLabel: 'Before',
    before: ['Nervous', 'No experience', 'No choreography', 'Afraid of forgetting'],
    afterLabel: 'After',
    after: ['Confident', 'Connected', 'Personalized choreography', 'Ready for the big day'],
    statement: 'We don’t teach you a routine to perform.',
    statementStrong: 'We help you create a dance that feels like yours.',
  },
  whyTango: {
    eyebrow: 'Why tango?',
    heading: 'Why tango?',
    reasons: [
      { title: 'Connection', description: 'You learn to move together, communicate and listen without words.' },
      { title: 'Elegance', description: 'Simple movements can look beautiful when they are danced with connection.' },
      {
        title: 'Personality',
        description: 'Your choreography is built around your music, your space and your comfort level.',
      },
      {
        title: 'A memory you’ll keep',
        description:
          'You’re not just learning a wedding dance. You’re learning something you can continue enjoying together.',
      },
    ],
  },
  coaches: {
    eyebrow: 'Meet your wedding dance coaches',
    heading: 'Maddie & Joel',
    intro:
      'Two different backgrounds, one goal: helping couples feel confident, connected and beautiful on the dance floor.',
    joel: 'Argentine tango teacher with 10+ years of experience studying and dancing tango in Buenos Aires.',
    maddie:
      'Coach specialized in personal development, movement and helping people feel comfortable in their bodies.',
  },
  method: {
    eyebrow: 'The method',
    heading: 'Your journey to the first dance',
    steps: [
      {
        title: 'Tell us your story',
        meta: '15-20 min free consultation.',
        description: 'Your music, wedding, experience, venue and what you imagine for your first dance.',
      },
      { title: 'Create your dance', meta: '', description: 'We design a choreography around you, not around a generic routine.' },
      {
        title: 'Learn together',
        meta: 'Private 60-minute sessions.',
        description: 'Step by step. No pressure. Videos and exercises to practice at home.',
      },
      { title: 'Make it yours', meta: '', description: 'We refine the details, adapt to your dress, shoes, venue and music.' },
      { title: 'Wedding day ready', meta: 'Final rehearsal.', description: 'You walk onto the dance floor knowing exactly what to do.' },
    ],
  },
  faq: {
    eyebrow: 'FAQ',
    heading: 'Wedding answers',
    intro: 'All you want to know about learning tango for your big day… and more!',
    items: [
      {
        question: 'Do we need previous dance experience?',
        answer:
          'No! You don’t need any prior experience. We start from the basics and adapt the lessons to fit your pace and style as a couple.',
      },
      {
        question: 'How many classes do we need before the wedding?',
        answer:
          'There’s no minimum or maximum. First, we have an initial meeting to understand your starting point and agree on a plan. From there, we’ll recommend a package tailored to you.',
      },
      {
        question: 'Can we practice in our wedding outfits?',
        answer:
          'Absolutely! The dance can be adapted to your dress and suit so you’ll feel comfortable and confident.',
      },
      {
        question: 'Can you help us choose the music?',
        answer:
          'Yes! We’ll explore the music together. Tango is our favorite recommendation, but we can adapt tango steps to another rhythm if you prefer.',
      },
      { question: 'How long is each class?', answer: 'Classes are 60 minutes each.' },
      {
        question: 'How do we progress between classes?',
        answer:
          'Progress depends on your dedication. We provide exercises and guidance to practice at home, helping you improve efficiently. Our goal is to reach your objective with the fewest number of classes possible.',
      },
      {
        question: 'What if one of us learns faster than the other?',
        answer:
          'We adapt lessons to the couple’s pace. The focus is on connection, not perfection. You’ll always feel comfortable and supported.',
      },
      {
        question: 'Can we include special choreography for our first dance?',
        answer:
          'Of course! We personalize a choreography based on your style, music, and comfort level, making it unique for your wedding.',
      },
      {
        question: 'When are the lessons?',
        answer:
          'We schedule according to your availability. Flexibility is key: we work around your wedding planning.',
      },
      {
        question: 'Where do the lessons take place?',
        answer:
          'We teach private lessons in Limburg, Netherlands. Get in touch and we’ll find a time and place that works for you.',
      },
      {
        question: 'Do you offer group classes or is it only private lessons?',
        answer:
          'For wedding dance, we recommend private classes to fully personalize the choreography and pace, but we can suggest optional workshops if you want to add fun extras.',
      },
      {
        question: 'Can we record the lessons to practice at home?',
        answer:
          'Yes! We encourage you to record the lessons or take notes so you can practice at home. We’ll also give you exercises and tips to keep improving between classes.',
      },
      {
        question: 'How early should we start learning before the wedding?',
        answer:
          'We recommend starting at least 4 months before your wedding, and ideally as early as possible. This gives you enough time to learn at a relaxed pace, practice at home, and feel confident and connected on your big day.',
      },
      {
        question: 'Can we adapt the choreography if our wedding is in a small space?',
        answer: 'Absolutely! We tailor the dance to your venue, whether it’s a small room or a big hall.',
      },
    ],
  },
  testimonials: {
    eyebrow: 'Testimonials',
    heading: 'Stories from the dance floor',
    /** One line per couple, in the same order as the quotes in WeddingDancePage.astro. */
    details: ['Married in Spain', 'Our very first students', 'Married in Germany'],
  },
  callToAction: {
    heading: 'Ready to start your first dance?',
    description:
      'Book a free 15-20 minute consultation. We’ll talk about your song, your wedding and what you imagine for your dance.',
    button: 'Book a free consultation',
  },
  contact: {
    eyebrow: 'Contact',
    heading: 'Tell us about your first dance',
    intro: 'Send us a message and we will get back to you to arrange your free consultation.',
  },
};

export type WeddingDanceText = typeof en;

const nl: WeddingDanceText = {
  meta: {
    title: 'Openingsdans bruiloft',
    description:
      'Een persoonlijke openingsdans op tango voor jullie bruiloft, met les van Maddie & Joel in Landgraaf, Limburg. Geen danservaring nodig.',
  },
  hero: {
    imageAlt: 'Maddie en Joel dansen tango',
    eyebrow: 'Tango-openingsdans',
    heading: 'Jullie openingsdans moet echt bij jullie passen.',
    description:
      'Leer een mooie, persoonlijke openingsdans in Landgraaf, ook als jullie nog nooit gedanst hebben.',
    primaryButton: 'Plan een gratis kennismaking',
    secondaryButton: 'Zo werkt het',
    note: 'Persoonlijke privélessen · Geen ervaring nodig · Landgraaf, Limburg',
  },
  concerns: {
    eyebrow: 'Openingsdans',
    heading: 'Jullie hoeven geen dansers te zijn.',
    intro: 'Jullie moeten je alleen samen zeker voelen.',
    items: [
      {
        title: '“We hebben twee linkervoeten.”',
        description: 'Jullie hebben nog nooit samen gedanst en weten niet waar je moet beginnen.',
      },
      {
        title: '“We hebben weinig tijd.”',
        description:
          'Tussen de locatie, de uitnodigingen en al het andere kan het leren van een choreografie overweldigend voelen.',
      },
      {
        title: '“We willen niet houterig overkomen.”',
        description: 'Jullie willen dat je openingsdans natuurlijk voelt, niet alsof je 27 passen probeert te onthouden.',
      },
    ],
  },
  transformation: {
    eyebrow: 'De verandering',
    heading: 'Van “we kunnen niet dansen” naar “niet te geloven dat we dat gedaan hebben.”',
    beforeLabel: 'Vooraf',
    before: ['Zenuwachtig', 'Geen ervaring', 'Geen choreografie', 'Bang om het te vergeten'],
    afterLabel: 'Achteraf',
    after: ['Vol vertrouwen', 'Verbonden', 'Persoonlijke choreografie', 'Klaar voor de grote dag'],
    statement: 'We leren jullie geen vast nummertje om op te voeren.',
    statementStrong: 'We helpen jullie een dans te maken die echt van jullie is.',
  },
  whyTango: {
    eyebrow: 'Waarom tango?',
    heading: 'Waarom tango?',
    reasons: [
      {
        title: 'Verbinding',
        description: 'Jullie leren samen te bewegen, te communiceren en naar elkaar te luisteren zonder woorden.',
      },
      {
        title: 'Elegantie',
        description: 'Eenvoudige bewegingen kunnen prachtig zijn als ze met verbinding gedanst worden.',
      },
      {
        title: 'Persoonlijkheid',
        description: 'Jullie choreografie wordt opgebouwd rond jullie muziek, jullie ruimte en wat voor jullie prettig voelt.',
      },
      {
        title: 'Een herinnering voor altijd',
        description:
          'Jullie leren niet alleen een openingsdans. Jullie leren iets waar je samen van kunt blijven genieten.',
      },
    ],
  },
  coaches: {
    eyebrow: 'Jullie coaches voor de openingsdans',
    heading: 'Maddie & Joel',
    intro:
      'Twee verschillende achtergronden, één doel: stellen helpen zich zeker, verbonden en mooi te voelen op de dansvloer.',
    joel: 'Argentijnse tangodocent met meer dan 10 jaar ervaring in het studeren en dansen van tango in Buenos Aires.',
    maddie:
      'Coach, gespecialiseerd in persoonlijke ontwikkeling, beweging en mensen helpen zich prettig te voelen in hun lichaam.',
  },
  method: {
    eyebrow: 'De methode',
    heading: 'Jullie weg naar de openingsdans',
    steps: [
      {
        title: 'Vertel ons jullie verhaal',
        meta: 'Gratis kennismaking van 15-20 minuten.',
        description: 'Jullie muziek, bruiloft, ervaring, locatie en hoe jullie je openingsdans voor je zien.',
      },
      {
        title: 'Jullie dans ontwerpen',
        meta: '',
        description: 'We maken een choreografie rond jullie, niet rond een standaardroutine.',
      },
      {
        title: 'Samen leren',
        meta: 'Privélessen van 60 minuten.',
        description: 'Stap voor stap. Zonder druk. Met video’s en oefeningen om thuis te oefenen.',
      },
      {
        title: 'Maak hem van jullie',
        meta: '',
        description: 'We werken de details uit en stemmen alles af op jurk, schoenen, locatie en muziek.',
      },
      {
        title: 'Klaar voor de grote dag',
        meta: 'Generale repetitie.',
        description: 'Jullie stappen de dansvloer op en weten precies wat je moet doen.',
      },
    ],
  },
  faq: {
    eyebrow: 'Veelgestelde vragen',
    heading: 'Antwoorden over de openingsdans',
    intro: 'Alles wat je wilt weten over tango leren voor de grote dag… en meer!',
    items: [
      {
        question: 'Hebben we danservaring nodig?',
        answer:
          'Nee! Je hebt geen ervaring nodig. We beginnen bij de basis en stemmen de lessen af op jullie tempo en stijl als stel.',
      },
      {
        question: 'Hoeveel lessen hebben we nodig vóór de bruiloft?',
        answer:
          'Er is geen minimum of maximum. Eerst hebben we een kennismaking om te zien waar jullie staan en spreken we samen een plan af. Daarna adviseren we een pakket dat bij jullie past.',
      },
      {
        question: 'Kunnen we oefenen in onze trouwkleding?',
        answer:
          'Zeker! De dans kan worden aangepast aan jurk en pak, zodat jullie je comfortabel en zeker voelen.',
      },
      {
        question: 'Kunnen jullie helpen met de muziekkeuze?',
        answer:
          'Ja! We ontdekken de muziek samen. Tango is onze favoriete aanrader, maar als jullie dat liever willen, passen we tangopassen ook aan op een ander ritme.',
      },
      { question: 'Hoe lang duurt een les?', answer: 'Elke les duurt 60 minuten.' },
      {
        question: 'Hoe gaan we vooruit tussen de lessen?',
        answer:
          'Jullie vooruitgang hangt af van jullie inzet. We geven oefeningen en begeleiding om thuis te oefenen, zodat jullie efficiënt beter worden. Ons doel is jullie doel te bereiken met zo weinig mogelijk lessen.',
      },
      {
        question: 'Wat als een van ons sneller leert dan de ander?',
        answer:
          'We passen de lessen aan op jullie tempo als stel. De nadruk ligt op verbinding, niet op perfectie. Jullie voelen je altijd op je gemak en gesteund.',
      },
      {
        question: 'Kunnen we een speciale choreografie voor onze openingsdans krijgen?',
        answer:
          'Natuurlijk! We maken een persoonlijke choreografie op basis van jullie stijl, muziek en wat voor jullie prettig voelt, uniek voor jullie bruiloft.',
      },
      {
        question: 'Wanneer zijn de lessen?',
        answer:
          'We plannen de lessen op basis van jullie beschikbaarheid. Flexibiliteit staat voorop: we houden rekening met jullie bruiloftsplanning.',
      },
      {
        question: 'Waar vinden de lessen plaats?',
        answer:
          'We geven privélessen in Limburg, Nederland. Neem contact op en we zoeken samen een tijd en plek die jullie uitkomt.',
      },
      {
        question: 'Bieden jullie groepslessen aan of alleen privélessen?',
        answer:
          'Voor een openingsdans raden we privélessen aan, zodat we de choreografie en het tempo helemaal op jullie kunnen afstemmen. Willen jullie er iets leuks bij, dan stellen we graag optionele workshops voor.',
      },
      {
        question: 'Mogen we de lessen opnemen om thuis te oefenen?',
        answer:
          'Ja! We raden jullie juist aan om de lessen op te nemen of aantekeningen te maken, zodat je thuis kunt oefenen. Jullie krijgen ook oefeningen en tips om tussen de lessen door beter te worden.',
      },
      {
        question: 'Hoe ruim voor de bruiloft moeten we beginnen?',
        answer:
          'We raden aan om minstens 4 maanden voor jullie bruiloft te beginnen, en het liefst zo vroeg mogelijk. Zo hebben jullie genoeg tijd om in een ontspannen tempo te leren, thuis te oefenen en je op de grote dag zeker en verbonden te voelen.',
      },
      {
        question: 'Kan de choreografie worden aangepast als onze bruiloft in een kleine ruimte is?',
        answer: 'Zeker! We stemmen de dans af op jullie locatie, of het nu een kleine zaal is of een grote.',
      },
    ],
  },
  testimonials: {
    eyebrow: 'Ervaringen',
    heading: 'Verhalen van de dansvloer',
    details: ['Getrouwd in Spanje', 'Onze allereerste leerlingen', 'Getrouwd in Duitsland'],
  },
  callToAction: {
    heading: 'Klaar om aan jullie openingsdans te beginnen?',
    description:
      'Plan een gratis kennismaking van 15-20 minuten. We praten over jullie nummer, jullie bruiloft en hoe jullie je de dans voorstellen.',
    button: 'Plan een gratis kennismaking',
  },
  contact: {
    eyebrow: 'Contact',
    heading: 'Vertel ons over jullie openingsdans',
    intro: 'Stuur ons een bericht en we nemen contact op om jullie gratis kennismaking te plannen.',
  },
};

const de: WeddingDanceText = {
  meta: {
    title: 'Hochzeitstanz lernen',
    description:
      'Euer persönlicher Hochzeitstanz mit Tango: Unterricht bei Maddie & Joel in Landgraaf, Limburg – nahe Aachen. Keine Tanzerfahrung nötig.',
  },
  hero: {
    imageAlt: 'Maddie und Joel tanzen Tango',
    eyebrow: 'Tango-Hochzeitstanz',
    heading: 'Euer Hochzeitstanz sollte sich nach euch anfühlen.',
    description:
      'Lernt einen schönen, persönlichen Hochzeitstanz in Landgraaf – auch wenn ihr noch nie getanzt habt.',
    primaryButton: 'Kostenlose Beratung buchen',
    secondaryButton: 'So funktioniert’s',
    note: 'Persönliche Privatstunden · Keine Vorkenntnisse nötig · Landgraaf, Limburg',
  },
  concerns: {
    eyebrow: 'Der erste Tanz',
    heading: 'Ihr müsst keine Tänzer sein.',
    intro: 'Ihr müsst euch nur gemeinsam sicher fühlen.',
    items: [
      {
        title: '„Wir haben zwei linke Füße.“',
        description: 'Ihr habt noch nie zusammen getanzt und wisst nicht, wo ihr anfangen sollt.',
      },
      {
        title: '„Wir haben nicht viel Zeit.“',
        description:
          'Zwischen Location, Einladungen und allem anderen kann es überwältigend wirken, auch noch eine Choreografie zu lernen.',
      },
      {
        title: '„Wir wollen nicht unbeholfen aussehen.“',
        description:
          'Euer erster Tanz soll sich natürlich anfühlen – nicht so, als müsstet ihr euch an 27 Schritte erinnern.',
      },
    ],
  },
  transformation: {
    eyebrow: 'Die Verwandlung',
    heading: 'Von „wir können nicht tanzen“ zu „wir können kaum glauben, dass wir das getanzt haben“.',
    beforeLabel: 'Vorher',
    before: ['Nervös', 'Keine Erfahrung', 'Keine Choreografie', 'Angst, etwas zu vergessen'],
    afterLabel: 'Nachher',
    after: ['Selbstsicher', 'Verbunden', 'Persönliche Choreografie', 'Bereit für den großen Tag'],
    statement: 'Wir bringen euch keine Routine zum Vorführen bei.',
    statementStrong: 'Wir helfen euch, einen Tanz zu gestalten, der sich wie eurer anfühlt.',
  },
  whyTango: {
    eyebrow: 'Warum Tango?',
    heading: 'Warum Tango?',
    reasons: [
      {
        title: 'Verbindung',
        description: 'Ihr lernt, euch gemeinsam zu bewegen, zu kommunizieren und einander ohne Worte zuzuhören.',
      },
      {
        title: 'Eleganz',
        description: 'Einfache Bewegungen können wunderschön aussehen, wenn sie mit Verbindung getanzt werden.',
      },
      {
        title: 'Persönlichkeit',
        description: 'Eure Choreografie entsteht rund um eure Musik, euren Raum und das, womit ihr euch wohlfühlt.',
      },
      {
        title: 'Eine bleibende Erinnerung',
        description:
          'Ihr lernt nicht nur einen Hochzeitstanz. Ihr lernt etwas, das ihr gemeinsam weiter genießen könnt.',
      },
    ],
  },
  coaches: {
    eyebrow: 'Eure Coaches für den Hochzeitstanz',
    heading: 'Maddie & Joel',
    intro:
      'Zwei verschiedene Hintergründe, ein Ziel: Paaren zu helfen, sich auf der Tanzfläche sicher, verbunden und schön zu fühlen.',
    joel: 'Argentinischer Tangolehrer mit über 10 Jahren Erfahrung im Studium und Tanz des Tango in Buenos Aires.',
    maddie:
      'Coach mit Schwerpunkt auf persönlicher Entwicklung und Bewegung, die Menschen hilft, sich in ihrem Körper wohlzufühlen.',
  },
  method: {
    eyebrow: 'Die Methode',
    heading: 'Euer Weg zum ersten Tanz',
    steps: [
      {
        title: 'Erzählt uns eure Geschichte',
        meta: 'Kostenloses Beratungsgespräch, 15–20 Min.',
        description: 'Eure Musik, eure Hochzeit, eure Erfahrung, die Location und wie ihr euch euren ersten Tanz vorstellt.',
      },
      {
        title: 'Euren Tanz gestalten',
        meta: '',
        description: 'Wir entwerfen eine Choreografie rund um euch – nicht nach einer Standardroutine.',
      },
      {
        title: 'Gemeinsam lernen',
        meta: 'Privatstunden à 60 Minuten.',
        description: 'Schritt für Schritt. Ohne Druck. Mit Videos und Übungen für zu Hause.',
      },
      {
        title: 'Euer ganz eigener Tanz',
        meta: '',
        description: 'Wir feilen an den Details und passen alles an Kleid, Schuhe, Location und Musik an.',
      },
      {
        title: 'Bereit für den großen Tag',
        meta: 'Generalprobe.',
        description: 'Ihr betretet die Tanzfläche und wisst genau, was zu tun ist.',
      },
    ],
  },
  faq: {
    eyebrow: 'FAQ',
    heading: 'Antworten rund um den Hochzeitstanz',
    intro: 'Alles, was ihr über Tango für euren großen Tag wissen wollt … und mehr!',
    items: [
      {
        question: 'Brauchen wir Tanzerfahrung?',
        answer:
          'Nein! Ihr braucht keinerlei Vorkenntnisse. Wir beginnen mit den Grundlagen und passen den Unterricht an euer Tempo und euren Stil als Paar an.',
      },
      {
        question: 'Wie viele Stunden brauchen wir vor der Hochzeit?',
        answer:
          'Es gibt kein Minimum und kein Maximum. Zuerst treffen wir uns zu einem Kennenlerngespräch, um euren Ausgangspunkt zu verstehen und einen Plan zu vereinbaren. Danach empfehlen wir euch ein passendes Paket.',
      },
      {
        question: 'Können wir in unserem Hochzeitsoutfit üben?',
        answer:
          'Auf jeden Fall! Der Tanz lässt sich an Kleid und Anzug anpassen, damit ihr euch wohl und sicher fühlt.',
      },
      {
        question: 'Könnt ihr uns bei der Musikauswahl helfen?',
        answer:
          'Ja! Wir suchen die Musik gemeinsam aus. Tango ist unsere liebste Empfehlung, aber wir können Tangoschritte auch an einen anderen Rhythmus anpassen, wenn ihr das lieber möchtet.',
      },
      { question: 'Wie lange dauert eine Stunde?', answer: 'Jede Stunde dauert 60 Minuten.' },
      {
        question: 'Wie machen wir zwischen den Stunden Fortschritte?',
        answer:
          'Euer Fortschritt hängt von eurem Einsatz ab. Wir geben euch Übungen und Tipps für zu Hause, damit ihr effizient besser werdet. Unser Ziel ist es, euer Ziel mit so wenigen Stunden wie möglich zu erreichen.',
      },
      {
        question: 'Was, wenn einer von uns schneller lernt als der andere?',
        answer:
          'Wir passen den Unterricht an euer Tempo als Paar an. Im Mittelpunkt steht die Verbindung, nicht die Perfektion. Ihr fühlt euch immer wohl und gut begleitet.',
      },
      {
        question: 'Können wir eine besondere Choreografie für unseren ersten Tanz bekommen?',
        answer:
          'Natürlich! Wir gestalten eine persönliche Choreografie nach eurem Stil, eurer Musik und dem, womit ihr euch wohlfühlt – einzigartig für eure Hochzeit.',
      },
      {
        question: 'Wann finden die Stunden statt?',
        answer:
          'Wir planen die Termine nach eurer Verfügbarkeit. Flexibilität ist uns wichtig: Wir richten uns nach eurer Hochzeitsplanung.',
      },
      {
        question: 'Wo findet der Unterricht statt?',
        answer:
          'Wir geben Privatstunden in Limburg, Niederlande. Schreibt uns, und wir finden eine Zeit und einen Ort, die für euch passen.',
      },
      {
        question: 'Bietet ihr Gruppenkurse an oder nur Privatstunden?',
        answer:
          'Für den Hochzeitstanz empfehlen wir Privatstunden, damit wir Choreografie und Tempo ganz auf euch abstimmen können. Wenn ihr noch etwas Schönes dazunehmen möchtet, schlagen wir gern optionale Workshops vor.',
      },
      {
        question: 'Dürfen wir die Stunden filmen, um zu Hause zu üben?',
        answer:
          'Ja! Wir empfehlen euch sogar, die Stunden zu filmen oder euch Notizen zu machen, damit ihr zu Hause üben könnt. Außerdem bekommt ihr Übungen und Tipps, um zwischen den Stunden weiter besser zu werden.',
      },
      {
        question: 'Wie früh vor der Hochzeit sollten wir anfangen?',
        answer:
          'Wir empfehlen, mindestens 4 Monate vor eurer Hochzeit zu beginnen – am besten so früh wie möglich. So habt ihr genug Zeit, entspannt zu lernen, zu Hause zu üben und euch an eurem großen Tag sicher und verbunden zu fühlen.',
      },
      {
        question: 'Lässt sich die Choreografie anpassen, wenn wir in einem kleinen Raum feiern?',
        answer: 'Auf jeden Fall! Wir passen den Tanz an eure Location an – ob kleiner Raum oder großer Saal.',
      },
    ],
  },
  testimonials: {
    eyebrow: 'Erfahrungen',
    heading: 'Geschichten von der Tanzfläche',
    details: ['In Spanien geheiratet', 'Unsere allerersten Schüler', 'In Deutschland geheiratet'],
  },
  callToAction: {
    heading: 'Bereit für euren ersten Tanz?',
    description:
      'Bucht ein kostenloses Beratungsgespräch von 15–20 Minuten. Wir sprechen über euer Lied, eure Hochzeit und darüber, wie ihr euch euren Tanz vorstellt.',
    button: 'Kostenlose Beratung buchen',
  },
  contact: {
    eyebrow: 'Kontakt',
    heading: 'Erzählt uns von eurem Hochzeitstanz',
    intro: 'Schickt uns eine Nachricht, und wir melden uns, um euer kostenloses Beratungsgespräch zu vereinbaren.',
  },
};

export const WEDDING_DANCE_TEXT: Record<Language, WeddingDanceText> = { en, nl, de };
