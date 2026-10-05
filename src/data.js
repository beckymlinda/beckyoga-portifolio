// All site text lives here. Details supplied by Rabecca Mulinda (Becky Yoga);
// award details taken from her Certificate of Merit (World Yoga Federation, 2023).

export const PHONE_DISPLAY = '+265 882 446 802'
export const PHONE_TEL = 'tel:+265882446802'
export const WHATSAPP_NUMBER = '265882446802'
export const EMAIL = 'beckymlinda@gmail.com'

export const whatsappLink = (text) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`

export const DEFAULT_WHATSAPP_MESSAGE = "Hi Becky, I'd like to book a yoga class."

// The 4-week flexibility programme has its own site
export const FLEXIBILITY_PLAN_URL = 'https://beckyoga.vercel.app'

// Filled in at build time from whatever video is in public/videos/ (see vite.config.js)
export const GYM_VIDEO = __GYM_VIDEO__
export const GYM_VIDEO_POSTER = '/images/koakh-class-poster.webp'

export const profile = {
  brand: 'Becky Yoga',
  name: 'Rabecca Mulinda',
  shortName: 'Becky',
  title: 'Certified Yoga Instructor',
  location: 'Lilongwe, Malawi',
  language: 'English',
  photo: 'standing-split',
  heroPhoto: 'pool-wheel',
  bio: [
    "I'm Rabecca Mulinda, but almost everyone knows me as Becky. My journey started with flexibility training in 2015 and led me to yoga in 2020. Today I teach Vinyasa, Yin and a little Hatha, always in English, to private clients, groups, gyms and events.",
    'My classes are built to feel good: we warm up, stretch, release tension with yoga balls and massagers, and finish in meditation. You leave looser, lighter and calmer than you arrived.',
  ],
}

// Becky's path into teaching, shown as a timeline in About
export const journey = [
  { year: '2015', title: 'Flexibility training', text: 'I started out with flexibility training.' },
  { year: 'Then', title: 'Contortion', text: "I was introduced to contortion, but I realised something was missing: being flexible on its own wasn't enough." },
  { year: '2020', title: 'Yoga', text: "I discovered yoga, and that's when I started taking yoga classes." },
  { year: '2026', title: 'Pilates', text: 'I explored Pilates and found that it and yoga complement each other.' },
]

export const facts = [
  { label: 'Teaches in', value: 'English' },
  { label: 'Based in', value: 'Lilongwe' },
  { label: 'Biggest class', value: '20 people' },
]

export const taughtAt = ['Stories by Lota', 'Pilates by Bike', 'Bingu Stadium', 'Lake of Stars', 'KoakhFit']

// Events with photos are shown as featured cards (newest first); the rest as a compact list.
export const experience = [
  {
    place: 'Stories by Lota',
    kind: 'Events',
    date: '19 September 2026',
    role: 'Event instructor',
    text: 'Instructed at wellness events organised by Stories by Lota, including a "Pilates with the Bride" bridal session on the lawn.',
  },
  {
    place: 'Pilates by Bike',
    kind: 'Event',
    date: '22 June 2026',
    role: 'Event instructor',
    text: 'Led a yoga session on the lawn at an outdoor event organised with Pilates by Bike.',
  },
  {
    place: 'Bingu Stadium',
    kind: 'Open class',
    date: '19 March 2026',
    role: 'Lead instructor',
    text: 'Open-air yoga at Bingu National Stadium. My biggest class so far: twenty people moving and breathing together.',
    photos: [
      { image: 'bingu-group', alt: 'Becky with her class posing joyfully at Bingu Stadium', pos: '50% 42%' },
      { image: 'bingu-stretch', alt: 'Becky leading a low-lunge stretch on the Bingu Stadium track', pos: '60% 60%' },
    ],
  },
  {
    place: 'Lake of Stars Festival',
    kind: 'Festival',
    date: '7 September 2024',
    role: 'Yoga instructor',
    text: "Led yoga on the Kweza stage at Lake of Stars' 20th anniversary, Fish Eagle Bay Lodge, Nkhotakota.",
    photos: [
      { image: 'lake-of-stars', alt: 'Becky leading tree pose on the Kweza stage at Lake of Stars festival', pos: '50% 50%' },
    ],
  },
  {
    place: 'KoakhFit, Area 22',
    kind: 'Gym',
    role: 'Yoga facilitator',
    text: 'Facilitating yoga classes for gym members in Area 22, Lilongwe.',
    video: true,
  },
  {
    place: 'Private & group clients',
    kind: 'Ongoing',
    role: 'Instructor',
    text: 'One-to-one sessions, group classes and dedicated flexibility training.',
  },
]

export const certificate = {
  image: 'certificate',
  title: 'Certificate of Merit',
  award: '1st position, Yogasana',
  event: '3rd Online World Yoga Championship 2023',
  issuer: 'World Yoga Federation · Yoga Council of Asia · Yoga Association of India',
  training: 'Earned after three months of online yoga training with Shobhit Pandey, India.',
  number: 'WYF/WYC/09/23',
  issued: '25 December 2023',
}

export const classFlow = [
  { step: 'Warm up', text: 'Wake up the joints and muscles so the body can open safely.' },
  { step: 'Stretch', text: 'Yoga stretches and flows, adjusted to your level.' },
  { step: 'Massage', text: 'Yoga balls and massagers release tension.' },
  { step: 'Meditate', text: 'Close in stillness, calm and grounded.' },
]

export const styles = [
  { name: 'Vinyasa', text: 'Flowing, breath-led sequences that build heat and strength.' },
  { name: 'Yin', text: 'Slow, deep holds for flexibility, recovery and rest.' },
  { name: 'Hatha', note: 'occasionally', text: 'Foundational postures with care for alignment.' },
]

export const classes = [
  {
    name: 'Group class',
    price: 'MWK 15,000',
    per: 'per session',
    text: 'Practise alongside others in a warm, supportive group. Great for friends, teams and events.',
    points: ['The full four-part class', 'All levels welcome', 'Taught in English'],
    cta: "Hi Becky, I'd like to join a group yoga class.",
  },
  {
    name: 'Private class',
    price: 'MWK 20,000',
    per: 'per session',
    featured: true,
    text: 'One-to-one attention, paced entirely around your body, your goals and your experience.',
    points: ['Personal attention throughout', 'Built around your goals', 'Taught in English'],
    cta: "Hi Becky, I'd like to book a private yoga class.",
  },
  {
    name: 'Flexibility training',
    price: 'Ask for rates',
    short: 'Ask on WhatsApp',
    text: 'For people who want results: your splits, a flexible back and deeper backbends.',
    points: ['Front and side splits', 'Back flexibility and backbends', 'Step-by-step progressions'],
    cta: "Hi Becky, I'm interested in flexibility training (splits / back flexibility).",
    link: { href: FLEXIBILITY_PLAN_URL, label: 'See the 4-week flexibility plan' },
  },
]

export const gallery = [
  { image: 'splits', alt: 'Becky in a front split with a deep backbend', caption: 'Front split with backbend' },
  { image: 'pool-split', alt: 'Becky in a side split with a backbend beside a garden pool', caption: 'Side split by the pool' },
  { image: 'pigeon', alt: 'Becky in king pigeon pose, reaching back to hold her foot', caption: 'Pigeon pose' },
  { image: 'wheel', alt: 'Becky in one-legged wheel pose on the grass', caption: 'One-legged wheel' },
  { image: 'elbow-stand', alt: 'Becky in a deep forearm balance backbend at the wall', caption: 'Forearm balance' },
]
