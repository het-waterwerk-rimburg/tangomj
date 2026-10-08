/** About page texts: the story of Maddie and Joel. */
import type { Language } from '../languages';

const en = {
  meta: {
    title: 'About',
    description:
      'Maddie and Joel: an Argentine-German couple teaching and spreading Argentine tango from Landgraaf, Limburg, the Netherlands.',
  },
  hero: {
    eyebrow: 'About us',
    heading: 'We have a story to tell',
    description:
      'We are Maddie and Joel, an Argentine-German couple who want to teach and spread tango around the world.',
    primaryButton: 'Join our classes',
    secondaryButton: 'Wedding dance',
  },
  story: {
    eyebrow: 'Our story',
    heading: 'An Argentine-German couple',
    paragraphs: [
      'We met dancing tango in Buenos Aires in 2016. We come from totally different, distant worlds. We took our first steps in dance a few years ago, and it still excites us like the first day.',
      'We believe tango is a powerful tool to connect people. For us, tango transcends cultures and countries.',
    ],
  },
  maddie: {
    eyebrow: 'Hi, I am Maddie',
    heading: 'From Germany to Buenos Aires',
    paragraphs: [
      'Maddie is originally from Germany. She started dancing tango in 2013, during her university years in Wageningen. In 2016 she landed in Buenos Aires for three months, and over her four years there she focused on her own tango studies, learning with different teachers in both old and new styles.',
      'During the lockdown she practiced regularly with her dance partner, taking part in a tango ensemble. She shared a few shows and workshops with Joel before they decided to move to the Netherlands. In her classes she puts her coaching background and language skills to good use.',
      'For Maddie, tango is almost therapeutic. It means personal growth, inner and outer expansion, and getting in touch with your feelings and creativity.',
    ],
  },
  joel: {
    eyebrow: 'Hi, I am Joel',
    heading: 'Tango from Buenos Aires',
    paragraphs: [
      'Joel is an Argentine tango dancer from Buenos Aires. He started dancing tango in 2012 and studied Tango Salon and Stage Tango with different teachers in the city.',
      'In 2016-2017 he danced at the famous Homero Manzi Café show. In 2018 he took part in the tango festival in Brno, Czech Republic, and he competed in the Tango Mundial (2018 and 2019) and the Metropolitan Championship of Buenos Aires. He has performed several shows all over Buenos Aires with his previous tango partner.',
      'After the quarantine he started teaching with his wife Maddie, while continuing to study with the big maestros. He loves performing and exploring tango further, but his passion lies in teaching and sharing an art that has brought so much joy to his own life.',
    ],
  },
  video: {
    eyebrow: 'In the media',
    heading: 'Maddie & Joel on RTV Parkstad',
    intro: 'We were guests on the Cultuur Agenda of RTV Parkstad (6 May 2026), talking about our passion for Argentine tango.',
  },
  callToAction: {
    heading: 'Come dance with us',
    description: 'Regular classes, private lessons and wedding dance choreography in Limburg, the Netherlands.',
    button: 'Get in touch',
  },
};

export type AboutText = typeof en;

const nl: AboutText = {
  meta: {
    title: 'Over ons: Maddie & Joel',
    description:
      'Maddie en Joel: een Argentijns-Duits stel dat vanuit Landgraaf, Limburg, Argentijnse tango doceert en verspreidt.',
  },
  hero: {
    eyebrow: 'Over ons',
    heading: 'We hebben een verhaal te vertellen',
    description:
      'Wij zijn Maddie en Joel, een Argentijns-Duits stel dat tango wil doorgeven en verspreiden over de hele wereld.',
    primaryButton: 'Doe mee met onze lessen',
    secondaryButton: 'Openingsdans',
  },
  story: {
    eyebrow: 'Ons verhaal',
    heading: 'Een Argentijns-Duits stel',
    paragraphs: [
      'We leerden elkaar in 2016 kennen tijdens het tangodansen in Buenos Aires. We komen uit totaal verschillende, verre werelden. Een paar jaar geleden zetten we onze eerste danspassen, en het raakt ons nog steeds zoals op de eerste dag.',
      'We geloven dat tango een krachtig middel is om mensen met elkaar te verbinden. Voor ons overstijgt tango culturen en landen.',
    ],
  },
  maddie: {
    eyebrow: 'Hoi, ik ben Maddie',
    heading: 'Van Duitsland naar Buenos Aires',
    paragraphs: [
      'Maddie komt oorspronkelijk uit Duitsland. Ze begon in 2013 met tangodansen, tijdens haar studietijd in Wageningen. In 2016 kwam ze voor drie maanden naar Buenos Aires; in de vier jaar die ze er uiteindelijk doorbracht, richtte ze zich op haar eigen tangostudie, bij verschillende docenten en in zowel oude als nieuwe stijlen.',
      'Tijdens de lockdown oefende ze regelmatig met haar danspartner en maakte ze deel uit van een tango-ensemble. Samen met Joel gaf ze enkele shows en workshops, voordat ze besloten naar Nederland te verhuizen. In haar lessen zet ze haar achtergrond als coach en haar talenkennis goed in.',
      'Voor Maddie is tango bijna therapeutisch. Het betekent persoonlijke groei, innerlijke en uiterlijke ontplooiing, en in contact komen met je gevoelens en je creativiteit.',
    ],
  },
  joel: {
    eyebrow: 'Hoi, ik ben Joel',
    heading: 'Tango uit Buenos Aires',
    paragraphs: [
      'Joel is een Argentijnse tangodanser uit Buenos Aires. Hij begon in 2012 met tangodansen en studeerde Tango Salón en podiumtango bij verschillende docenten in de stad.',
      'In 2016-2017 danste hij in de bekende show van Café Homero Manzi. In 2018 deed hij mee aan het tangofestival in Brno (Tsjechië) en nam hij deel aan het Tango Mundial (2018 en 2019) en het Metropolitan Championship van Buenos Aires. Met zijn vorige tangopartner gaf hij diverse shows door heel Buenos Aires.',
      'Na de quarantaine begon hij samen met zijn vrouw Maddie les te geven, terwijl hij bleef studeren bij de grote maestro’s. Hij treedt graag op en verdiept zich steeds verder in tango, maar zijn passie ligt bij lesgeven en het delen van een kunst die zijn eigen leven zoveel vreugde heeft gebracht.',
    ],
  },
  video: {
    eyebrow: 'In de media',
    heading: 'Maddie & Joel bij RTV Parkstad',
    intro: 'We waren te gast in de Cultuur Agenda van RTV Parkstad (6 mei 2026) en vertelden over onze passie voor Argentijnse tango.',
  },
  callToAction: {
    heading: 'Kom met ons dansen',
    description: 'Wekelijkse groepslessen, privélessen en choreografieën voor je openingsdans in Limburg, Nederland.',
    button: 'Neem contact op',
  },
};

const de: AboutText = {
  meta: {
    title: 'Über uns: Maddie & Joel',
    description:
      'Maddie und Joel: ein argentinisch-deutsches Paar, das von Landgraaf in Limburg aus argentinischen Tango unterrichtet und verbreitet.',
  },
  hero: {
    eyebrow: 'Über uns',
    heading: 'Wir haben eine Geschichte zu erzählen',
    description:
      'Wir sind Maddie und Joel, ein argentinisch-deutsches Paar, das Tango weitergeben und in die ganze Welt tragen möchte.',
    primaryButton: 'Zu unseren Kursen',
    secondaryButton: 'Hochzeitstanz',
  },
  story: {
    eyebrow: 'Unsere Geschichte',
    heading: 'Ein argentinisch-deutsches Paar',
    paragraphs: [
      'Wir haben uns 2016 beim Tangotanzen in Buenos Aires kennengelernt. Wir kommen aus völlig unterschiedlichen, weit entfernten Welten. Vor einigen Jahren haben wir unsere ersten Tanzschritte gemacht, und es begeistert uns noch immer wie am ersten Tag.',
      'Wir glauben, dass Tango ein kraftvolles Mittel ist, um Menschen zu verbinden. Für uns überwindet Tango Kulturen und Ländergrenzen.',
    ],
  },
  maddie: {
    eyebrow: 'Hallo, ich bin Maddie',
    heading: 'Von Deutschland nach Buenos Aires',
    paragraphs: [
      'Maddie stammt ursprünglich aus Deutschland. Mit dem Tangotanzen begann sie 2013 während ihres Studiums in Wageningen. 2016 kam sie für drei Monate nach Buenos Aires; in den vier Jahren, die sie schließlich dort verbrachte, konzentrierte sie sich auf ihr eigenes Tangostudium bei verschiedenen Lehrern, in alten wie neuen Stilen.',
      'Während des Lockdowns trainierte sie regelmäßig mit ihrem Tanzpartner und wirkte in einem Tango-Ensemble mit. Gemeinsam mit Joel gestaltete sie einige Shows und Workshops, bevor die beiden beschlossen, in die Niederlande zu ziehen. In ihrem Unterricht nutzt sie ihren Coaching-Hintergrund und ihre Sprachkenntnisse.',
      'Für Maddie ist Tango fast schon therapeutisch. Er bedeutet persönliches Wachstum, innere und äußere Entfaltung und den Kontakt zu den eigenen Gefühlen und zur eigenen Kreativität.',
    ],
  },
  joel: {
    eyebrow: 'Hallo, ich bin Joel',
    heading: 'Tango aus Buenos Aires',
    paragraphs: [
      'Joel ist ein argentinischer Tangotänzer aus Buenos Aires. Er begann 2012 mit dem Tangotanzen und studierte Tango Salón und Bühnentango bei verschiedenen Lehrern in der Stadt.',
      '2016–2017 tanzte er in der bekannten Show des Café Homero Manzi. 2018 nahm er am Tangofestival in Brno (Tschechien) teil und trat beim Tango Mundial (2018 und 2019) sowie bei der Metropolitan-Meisterschaft von Buenos Aires an. Mit seiner früheren Tangopartnerin trat er in zahlreichen Shows in ganz Buenos Aires auf.',
      'Nach der Quarantäne begann er, gemeinsam mit seiner Frau Maddie zu unterrichten, und studierte weiterhin bei den großen Maestros. Er liebt es aufzutreten und den Tango immer weiter zu erforschen, doch seine Leidenschaft gilt dem Unterrichten und dem Weitergeben einer Kunst, die ihm selbst so viel Freude geschenkt hat.',
    ],
  },
  video: {
    eyebrow: 'In den Medien',
    heading: 'Maddie & Joel bei RTV Parkstad',
    intro: 'Wir waren Gäste in der Cultuur Agenda von RTV Parkstad (6. Mai 2026) und haben über unsere Leidenschaft für argentinischen Tango gesprochen.',
  },
  callToAction: {
    heading: 'Tanz mit uns',
    description: 'Wöchentliche Gruppenkurse, Privatstunden und Choreografien für euren Hochzeitstanz in Limburg, Niederlande.',
    button: 'Kontakt aufnehmen',
  },
};

export const ABOUT_TEXT: Record<Language, AboutText> = { en, nl, de };
