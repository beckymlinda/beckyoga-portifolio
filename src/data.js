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
export const FLEXIBILITY_PLAN_URL = 'https://becky-yoga.vercel.app'

// Filled in at build time from whatever video is in public/videos/ (see vite.config.js)
export const GYM_VIDEO = __GYM_VIDEO__

export const profile = {
  brand: 'Becky Yoga',
  name: 'Rabecca Mulinda',
  shortName: 'Becky',
  title: 'Certified Yoga Instructor',
  location: 'Lilongwe, Malawi',
  language: 'English',
  photo: 'rabecca',
  heroPhoto: 'wheel',
  bio: [
    "I'm Rabecca Mulinda, but almost everyone knows me as Becky. I'm a certified yoga instructor teaching Vinyasa, Yin and a little Hatha, with every class taught in English.",
    "I've taught in gyms, at festivals and alongside event organisers, from Koahkh Fit Gym in Area 22 to the Lake of Stars festival. My biggest class so far brought twenty people together at Bingu Stadium.",
    'My classes are built to feel good. We warm up, stretch, release tension with yoga balls and massagers, and finish in meditation. You leave looser, lighter and calmer than you arrived.',
  ],
}

export const stats = [
  { value: '1st', label: 'Place in Yogasana, Online World Yoga Championship 2023' },
  { value: '20', label: 'People in my biggest class, at Bingu Stadium' },
  { value: '3', label: 'Styles taught: Vinyasa, Yin and Hatha' },
]

export const experience = [
  {
    place: 'Lake of Stars Festival',
    kind: 'Festival',
    role: 'Yoga instructor',
    text: "Led yoga sessions for festival-goers at Lake of Stars, Malawi's best-known music and arts festival.",
  },
  {
    place: 'Koahkh Fit Gym, Area 22',
    kind: 'Gym',
    role: 'Yoga facilitator',
    text: 'Facilitating yoga classes for gym members in Area 22, Lilongwe.',
    video: true,
  },
  {
    place: 'Bingu Stadium',
    kind: 'Open class',
    role: 'Lead instructor',
    text: 'My biggest class to date: twenty people warming up, stretching and breathing together.',
  },
  {
    place: 'Stories by Lota',
    kind: 'Events',
    role: 'Event instructor',
    text: 'Instructed yoga at wellness events organised by Stories by Lota.',
  },
  {
    place: 'Pilates by Bike',
    kind: 'Events',
    role: 'Event instructor',
    text: 'Instructed yoga at events organised with Pilates by Bike.',
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
  training: 'Earned after three months of online yoga training with Shobhit Pandey, India.',
  details: [
    { label: 'Organised by', value: 'Yoga Council of Asia' },
    { label: 'Hosted by', value: 'Yoga Association of India' },
    { label: 'Affiliated with', value: 'World Yoga Federation' },
    { label: 'Certificate no.', value: 'WYF/WYC/09/23' },
    { label: 'Issued', value: '25 December 2023' },
  ],
}

export const classFlow = [
  { step: 'Warm up', text: 'We start slowly, waking up the joints and muscles so your body is ready to open safely.' },
  { step: 'Stretch', text: 'Yoga stretches and flows from Vinyasa, Yin and Hatha, adjusted to your level.' },
  { step: 'Massage', text: 'Yoga balls and massagers release tension, so the stretch feels good rather than forced.' },
  { step: 'Meditate', text: 'We close in stillness with meditation, so you leave calm and grounded.' },
]

export const styles = [
  { name: 'Vinyasa', note: 'Main style', text: 'Flowing sequences linked to the breath. Builds heat, strength and stamina.' },
  { name: 'Yin', note: 'Main style', text: 'Slow, quiet holds that sink deep. Ideal for flexibility, recovery and rest.' },
  { name: 'Hatha', note: 'Occasionally', text: 'Foundational postures held with attention to alignment and breathing.' },
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
    text: 'For people who want results: your splits, a flexible back and deeper backbends.',
    points: ['Front and side splits', 'Back flexibility and backbends', 'Step-by-step progressions'],
    cta: "Hi Becky, I'm interested in flexibility training (splits / back flexibility).",
    link: { href: FLEXIBILITY_PLAN_URL, label: 'See the 4-week flexibility plan' },
  },
]

export const gallery = [
  { image: 'splits', alt: 'Becky in a front split with a deep backbend', caption: 'Front split with backbend', wide: true },
  { image: 'headstand', alt: 'Becky holding a headstand against a red backdrop', caption: 'Headstand' },
  { image: 'wheel', alt: 'Becky in one-legged wheel pose on the grass', caption: 'One-legged wheel' },
  { image: 'elbow-stand', alt: 'Becky in a deep forearm balance backbend at the wall', caption: 'Forearm balance backbend' },
]
