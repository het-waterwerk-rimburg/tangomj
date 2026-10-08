/**
 * Private Lessons page texts (private tango lessons for couples).
 * Prices are written out in each language, so update all three when they change.
 */
import type { Language } from '../languages';

const en = {
  meta: {
    title: 'Private Tango Lessons',
    description:
      'Private Argentine tango lessons for couples in Landgraaf, Limburg, or at your home. With 1 or 2 teachers, from €85 per 60 minutes.',
  },
  hero: {
    eyebrow: 'Private lessons for couples',
    heading: 'Private tango lessons, at your own pace',
    description:
      'Lessons with Maddie & Joel just for the two of you, in our studio in Landgraaf or at your home. We focus on what you want to work on.',
    primaryButton: 'Ask about a private lesson',
    secondaryButton: 'See prices',
    note: 'For couples · 60-minute lessons · Studio in Landgraaf or at your home',
  },
  prices: {
    eyebrow: 'Prices',
    heading: 'Choose where you dance',
    intro: 'All prices are per couple, for a lesson of 60 minutes.',
    perLesson: 'per 60 min',
    studio: {
      title: 'Our studio in Landgraaf',
      options: [
        { label: '1 teacher', price: '€85' },
        { label: '2 teachers', price: '€125' },
      ],
      note: '',
    },
    home: {
      title: 'At your home',
      options: [
        { label: '1 teacher', price: '€100 + travel' },
        { label: '2 teachers', price: '€140 + travel' },
      ],
      note: 'Travel time and fuel are calculated depending on the distance.',
    },
  },
  extras: {
    eyebrow: 'Good to know',
    heading: 'Times and packages',
    items: [
      { title: 'Sunday or special times', value: '+€10–15 per lesson' },
      { title: 'Package of 5 lessons', value: '5–10% discount' },
      { title: 'Package of 10 lessons', value: '10–15% discount' },
    ],
  },
  callToAction: {
    heading: 'Ready for your private lesson?',
    description: 'Tell us what you would like to work on and when it suits you, and we will propose a time.',
    button: 'Ask about a private lesson',
  },
  contact: {
    eyebrow: 'Contact',
    heading: 'Book your private lesson',
    intro: 'Send us a message with your wishes and availability. We will get back to you soon.',
  },
};

export type PrivateLessonsText = typeof en;

const nl: PrivateLessonsText = {
  meta: {
    title: 'Privé tangolessen',
    description:
      'Privélessen Argentijnse tango voor stellen in Landgraaf, Limburg, of bij jullie thuis. Met 1 of 2 docenten, vanaf €85 per 60 minuten.',
  },
  hero: {
    eyebrow: 'Privélessen voor stellen',
    heading: 'Privé tangolessen, in jullie eigen tempo',
    description:
      'Lessen met Maddie & Joel, alleen voor jullie twee, in onze studio in Landgraaf of bij jullie thuis. We richten ons op waar jullie aan willen werken.',
    primaryButton: 'Vraag een privéles aan',
    secondaryButton: 'Bekijk de prijzen',
    note: 'Voor stellen · Lessen van 60 minuten · Studio in Landgraaf of bij jullie thuis',
  },
  prices: {
    eyebrow: 'Prijzen',
    heading: 'Kies waar jullie dansen',
    intro: 'Alle prijzen gelden per stel, voor een les van 60 minuten.',
    perLesson: 'per 60 min',
    studio: {
      title: 'Onze studio in Landgraaf',
      options: [
        { label: '1 docent', price: '€85' },
        { label: '2 docenten', price: '€125' },
      ],
      note: '',
    },
    home: {
      title: 'Bij jullie thuis',
      options: [
        { label: '1 docent', price: '€100 + reiskosten' },
        { label: '2 docenten', price: '€140 + reiskosten' },
      ],
      note: 'Reistijd en brandstof worden berekend op basis van de afstand.',
    },
  },
  extras: {
    eyebrow: 'Goed om te weten',
    heading: 'Tijden en pakketten',
    items: [
      { title: 'Zondag of bijzondere tijden', value: '+€10–15 per les' },
      { title: 'Pakket van 5 lessen', value: '5–10% korting' },
      { title: 'Pakket van 10 lessen', value: '10–15% korting' },
    ],
  },
  callToAction: {
    heading: 'Klaar voor jullie privéles?',
    description: 'Vertel ons waar jullie aan willen werken en wanneer het jullie uitkomt, dan stellen we een tijd voor.',
    button: 'Vraag een privéles aan',
  },
  contact: {
    eyebrow: 'Contact',
    heading: 'Boek jullie privéles',
    intro: 'Stuur ons een bericht met jullie wensen en beschikbaarheid. We nemen snel contact met jullie op.',
  },
};

const de: PrivateLessonsText = {
  meta: {
    title: 'Private Tangostunden',
    description:
      'Privatstunden in argentinischem Tango für Paare in Landgraaf, Limburg – nahe Aachen – oder bei euch zu Hause. Mit 1 oder 2 Lehrkräften, ab €85 pro 60 Minuten.',
  },
  hero: {
    eyebrow: 'Privatstunden für Paare',
    heading: 'Private Tangostunden in eurem Tempo',
    description:
      'Unterricht mit Maddie & Joel nur für euch zwei, in unserem Studio in Landgraaf oder bei euch zu Hause. Wir konzentrieren uns auf das, woran ihr arbeiten möchtet.',
    primaryButton: 'Privatstunde anfragen',
    secondaryButton: 'Preise ansehen',
    note: 'Für Paare · Stunden à 60 Minuten · Studio in Landgraaf oder bei euch zu Hause',
  },
  prices: {
    eyebrow: 'Preise',
    heading: 'Wählt, wo ihr tanzt',
    intro: 'Alle Preise gelten pro Paar für eine Stunde à 60 Minuten.',
    perLesson: 'pro 60 Min.',
    studio: {
      title: 'Unser Studio in Landgraaf',
      options: [
        { label: '1 Lehrkraft', price: '€85' },
        { label: '2 Lehrkräfte', price: '€125' },
      ],
      note: '',
    },
    home: {
      title: 'Bei euch zu Hause',
      options: [
        { label: '1 Lehrkraft', price: '€100 + Anfahrt' },
        { label: '2 Lehrkräfte', price: '€140 + Anfahrt' },
      ],
      note: 'Fahrzeit und Benzinkosten werden je nach Entfernung berechnet.',
    },
  },
  extras: {
    eyebrow: 'Gut zu wissen',
    heading: 'Zeiten und Pakete',
    items: [
      { title: 'Sonntag oder besondere Zeiten', value: '+€10–15 pro Stunde' },
      { title: 'Paket mit 5 Stunden', value: '5–10 % Rabatt' },
      { title: 'Paket mit 10 Stunden', value: '10–15 % Rabatt' },
    ],
  },
  callToAction: {
    heading: 'Bereit für eure Privatstunde?',
    description: 'Erzählt uns, woran ihr arbeiten möchtet und wann es euch passt – wir schlagen euch einen Termin vor.',
    button: 'Privatstunde anfragen',
  },
  contact: {
    eyebrow: 'Kontakt',
    heading: 'Bucht eure Privatstunde',
    intro: 'Schickt uns eine Nachricht mit euren Wünschen und eurer Verfügbarkeit. Wir melden uns bald bei euch.',
  },
};

export const PRIVATE_LESSONS_TEXT: Record<Language, PrivateLessonsText> = { en, nl, de };
