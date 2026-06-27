// =============================================================
//  Intercontinental Catering — site content (single source of truth)
//  Content derived from incntl.com.sg. Dish lists beyond the known
//  priced items are representative; swap for live menus before launch.
// =============================================================

export const company = {
  name: 'Intercontinental Catering',
  legalName: 'Intercontinental Catering Pte Ltd',
  tagline: 'Memorable Catering, Crafted for Your Events',
  established: 2000,
  yearsLabel: '25+ Years',
  blurb:
    'Premium Asian event catering in Singapore — fresh ingredients, thoughtfully curated menus and seamless service for every occasion.',
  mission:
    'Creating memorable dining experiences with fresh ingredients and thoughtfully curated menus that bring people together.',
}

export const contact = {
  phone: '6242 1191',
  phoneHref: 'tel:+6562421191',
  whatsapp: '6242 1191',
  whatsappHref: 'https://wa.me/6562421191',
  fax: '6289 8368',
  email: 'sales@incntl.com.sg',
  emailHref: 'mailto:sales@incntl.com.sg',
  address: '171 Kampong Ampat, #05-18 KA Food Link, Singapore 368330',
  addressShort: '171 Kampong Ampat, #05-18 KA Food Link',
  postal: 'Singapore 368330',
  hours: [
    { day: 'Monday – Friday', time: '9:00am – 6:00pm' },
    { day: 'Saturday', time: '9:00am – 1:00pm' },
    { day: 'Sunday & PH', time: 'By appointment' },
  ],
  mapsHref:
    'https://www.google.com/maps/search/?api=1&query=KA+Food+Link+171+Kampong+Ampat+Singapore+368330',
}

export const social = [
  { name: 'Facebook', href: 'https://www.facebook.com/', icon: 'facebook' },
  { name: 'Instagram', href: 'https://www.instagram.com/', icon: 'instagram' },
  { name: 'YouTube', href: 'https://www.youtube.com/', icon: 'youtube' },
]

export const nav = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Menu', to: '/menu' },
  { label: 'FAQs', to: '/faqs' },
  { label: 'Articles', to: '/articles' },
  { label: 'Contact', to: '/contact' },
]

// ---- Imagery (real hero from incntl.com.sg + Unsplash food photography) ----
// Verified food/catering imagery (Unsplash). Swap for your own dish photos later.
const U = (id, w = 1100) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=80`
export const images = {
  heroReal: '/assets/images/hero-3.png', // real event spread from incntl.com.sg
  heroDining: U('1555244162-803834f70033', 1600), // catering spread
  banquet: U('1414235077428-338989a2e8c0', 1500), // banquet table
  beefBroccoli: U('1466637574441-749b8f19452f'), // wok cooking
  shrimp: U('1467003909585-2f8a72700288'), // fine plating
  noodles: U('1504674900247-0877df9cc836'), // food spread
  dumplings: U('1541529086526-db283c563270'), // bites / canapés
  chicken: U('1565299624946-b28f40a0ae38'), // plated food
  friedRice: U('1455619452474-d2be8b1e70cd'), // rice / asian
  vegetables: U('1512621776951-a57141f2eefd'), // greens
  chef: U('1577219491135-ce391730fb2c', 1200), // chef
  table: U('1519225421980-715cb0215aed', 1300), // elegant table
  corporate: U('1511795409834-ef04bbd61622', 1200), // corporate dinner
  plating: U('1467003909585-2f8a72700288', 1200), // plating
  steam: U('1530062845289-9109b2c9c868', 1200), // buffet line
  dessert: U('1488477181946-6428a0291777'), // dessert
}

// Hero background slideshow
export const heroSlides = [images.heroReal, images.heroDining, images.banquet, images.table]

// ---- Stats ----
export const stats = [
  { value: 25, suffix: '+', label: 'Years of Experience' },
  { value: 8000, suffix: '+', label: 'Events Catered', compact: true },
  { value: 120, suffix: '+', label: 'Signature Dishes' },
  { value: 5, suffix: '★', label: 'Average Rating' },
]

// ---- Why choose us ----
export const promises = [
  { icon: 'leaf', title: 'Fresh Ingredients', text: 'Sourced daily and cooked the same day — never frozen, never reheated.' },
  { icon: 'utensils', title: 'Curated Menus', text: 'Thoughtfully designed Asian menus, tailored to your taste, theme and budget.' },
  { icon: 'sparkle', title: 'Elegant Presentation', text: 'Beautifully styled buffet lines and plating that elevate every occasion.' },
  { icon: 'shield', title: 'Seamless Service', text: '25 years of reliable delivery, setup and on-site service you can count on.' },
]

export const certifications = [
  { name: '25+ Years of Experience', detail: 'A trusted name since 2000' },
  { name: 'Fresh, Same-day Cooking', detail: 'Quality you can taste' },
  { name: '5-Star Rated Service', detail: 'Loved by corporate & private clients' },
  { name: 'Island-wide Delivery', detail: 'On-time, every time' },
]

// ---- Services / event types ----
export const services = [
  { slug: 'corporate', title: 'Corporate Events', short: 'Functions, launches & D&Ds', text: 'Professional, punctual catering for conferences, seminars, office functions and dinner-and-dance nights.', image: images.corporate },
  { slug: 'private', title: 'Private Celebrations', short: 'Birthdays, gatherings & more', text: 'Warm, generous spreads for birthdays, family gatherings and house celebrations.', image: images.table },
  { slug: 'special', title: 'Special Occasions', short: 'Weddings & milestones', text: 'Elegant menus and styling for weddings, anniversaries and the moments that matter most.', image: images.banquet },
  { slug: 'buffet', title: 'Buffet & Mini-Buffet', short: 'Flexible spreads, any size', text: 'Full buffet lines or compact mini-buffets — scaled to your headcount and venue.', image: images.steam },
  { slug: 'bento', title: 'Bento & Packed Meals', short: 'Individually packed', text: 'Hygienically packed bento sets and packet meals, perfect for distributed or hybrid events.', image: images.plating },
  { slug: 'custom', title: 'Customised Menus', short: 'Designed around you', text: 'Tell us your theme, dietary needs and budget — we curate a menu made just for you.', image: images.chef },
]

// =============================================================
//  MENU — organised by event package (mirrors incntl.com.sg/menu)
//  Prices are per pax (or per set for bento); confirm on enquiry.
// =============================================================
export const menuCategories = [
  {
    slug: 'buffet',
    name: 'Buffet',
    tagline: 'Our signature spread',
    description:
      'From everyday favourites to premium feasts — generous buffet lines for any headcount, freshly cooked and beautifully presented.',
    image: images.banquet,
    packages: [
      { name: 'Buffet Menu A', price: '17.44', unit: 'pax', items: '12 dishes', min: 'Min 30' },
      { name: 'Buffet Menu B', price: '19.62', unit: 'pax', items: '9 dishes', min: 'Min 35' },
      { name: 'Buffet Menu C', price: '23.98', unit: 'pax', items: '11 dishes', min: 'Min 30' },
      { name: 'Buffet Menu D', price: '27.25', unit: 'pax', items: '12 dishes', min: 'Min 30' },
      { name: 'Buffet Menu E', price: '30.52', unit: 'pax', items: '13 dishes', min: 'Min 30' },
      { name: 'Supreme Buffet A & B', price: '35.97', unit: 'pax', items: '14 dishes', min: 'Min 30' },
      { name: 'Deluxe Buffet A & B', price: '39.24', unit: 'pax', items: '15 dishes', min: 'Min 30' },
      { name: 'Premium Buffet A & B', price: '50.14', unit: 'pax', items: '18 dishes', min: 'Min 25' },
    ],
  },
  {
    slug: 'sit-down',
    name: 'Sit-Down Dinner',
    tagline: 'Plated & served',
    description:
      'Elegant plated dinners with full table service — Corporate, Western, Chinese or Wedding styles, tailored to your celebration.',
    image: images.table,
    packages: [
      { name: 'Corporate Sit-Down', price: '21.80', unit: 'pax', items: '9 courses', min: 'Min 40' },
      { name: 'Western Sit-Down', price: '21.80', unit: 'pax', items: '9 courses', min: 'Min 40' },
      { name: 'Chinese Sit-Down', price: '21.80', unit: 'pax', items: '9 courses', min: 'Min 40' },
      { name: 'Wedding Sit-Down', price: '21.80', unit: 'pax', items: '9 courses', min: 'Min 40' },
    ],
  },
  {
    slug: 'cocktail',
    name: 'Cocktail Reception',
    tagline: 'Canapés & mingling',
    description:
      'Stand-up receptions with elegant canapés and finger food — perfect for launches, networking and evening functions.',
    image: images.shrimp,
    packages: [
      { name: 'Cocktail Reception A', price: '41.42', unit: 'pax', items: '17 items', min: 'Min 50' },
      { name: 'Cocktail Reception B', price: '43.60', unit: 'pax', items: '19 items', min: 'Min 40' },
    ],
  },
  {
    slug: 'tea-reception',
    name: 'Tea Reception',
    tagline: 'Light bites & sweet treats',
    description:
      'Relaxed savoury and sweet selections to keep conversation flowing at receptions, meetings and breaks.',
    image: images.dumplings,
    packages: [
      { name: 'Tea Reception Menu A', price: '17.44', unit: 'pax', items: '9 items', min: 'Min 50' },
      { name: 'High Tea Menu A', price: '8.72', unit: 'pax', items: '4 items', min: 'Min 100' },
    ],
  },
  {
    slug: 'seminar',
    name: 'Seminar',
    tagline: 'All-day & half-day',
    description:
      'Refreshments and meals that keep conferences, workshops and training days running smoothly.',
    image: images.corporate,
    packages: [
      { name: 'Full Day Seminar A & B', price: '36.00', unit: 'pax', items: '19 items', min: 'Min 30', from: true },
      { name: 'Half Day Seminar A & B', price: '41.42', unit: 'pax', items: '17 items', min: 'Min 50' },
    ],
  },
  {
    slug: 'bbq',
    name: 'BBQ & Live Station',
    tagline: 'Grilled to order',
    description:
      'Sizzling barbecue spreads and interactive live cooking stations that bring theatre to your event.',
    image: images.steam,
    packages: [
      { name: 'BBQ Menu A1', price: '21.80', unit: 'pax', items: '9 items', min: 'Min 40' },
      { name: 'BBQ Menu B', price: '27.25', unit: 'pax', items: '10 items', min: 'Min 35' },
      { name: 'Live Station', price: '27.25', unit: 'pax', items: '10 items', min: 'Min 100' },
    ],
  },
  {
    slug: 'baby-shower',
    name: 'Baby Shower',
    tagline: 'Celebrate new arrivals',
    description:
      'Joyful buffet spreads complete with sweet goodies, styled for baby showers and full-month celebrations.',
    image: images.dessert,
    packages: [
      { name: 'Baby Shower Buffet A', price: '19.62', unit: 'pax', items: '9 courses + goodies', min: 'Min 35' },
      { name: 'Baby Shower Buffet B', price: '23.98', unit: 'pax', items: '11 courses + goodies', min: 'Min 30' },
    ],
  },
  {
    slug: 'bento',
    name: 'Bento Sets',
    tagline: 'Individually packed',
    description:
      'Hygienically packed bento boxes — fuss-free and ideal for distributed, hybrid or on-the-go events.',
    image: images.plating,
    packages: [
      { name: 'Big Value Bento', price: '7.63', unit: 'set', items: '5 items', min: 'Min 80' },
      { name: 'Standard & Classic Bento', price: '8.72', unit: 'set', items: '5 items', min: 'Min 50' },
      { name: 'Supreme Bento', price: '10.90', unit: 'set', items: '6 items', min: 'Min 50' },
      { name: 'Deluxe Bento', price: '10.90', unit: 'set', items: '5 items', min: 'Min 40' },
      { name: 'Executive Bento', price: '16.35', unit: 'set', items: '6 items', min: 'Min 20' },
    ],
  },
]

// ---- Process ----
export const process = [
  { step: '01', title: 'Share your occasion', text: 'Tell us your date, headcount, venue and budget — we listen first.' },
  { step: '02', title: 'We curate your menu', text: 'Receive a tailored proposal with menu, styling and a transparent quote.' },
  { step: '03', title: 'Refine & confirm', text: 'Fine-tune the details, then confirm with a simple deposit.' },
  { step: '04', title: 'We deliver & serve', text: 'Our crew sets up, serves and clears — you simply enjoy the day.' },
]

// ---- Testimonials ----
export const testimonials = [
  { quote: 'The food was exceptional and beautifully presented. Our guests kept asking who catered — a flawless evening from start to finish.', name: 'Rachel T.', role: 'Wedding, Singapore' },
  { quote: 'We have used Intercontinental for our corporate functions for years. Always punctual, always delicious, always professional.', name: 'Marcus Lim', role: 'Operations Director' },
  { quote: 'From the menu curation to the on-site service, everything was seamless. The sweet & sour chicken was a huge hit!', name: 'Priya S.', role: 'Private Celebration' },
]

// =============================================================
//  FAQs
// =============================================================
export const faqs = [
  { q: 'What type of cuisine do you specialise in?', a: 'We specialise in Asian and Chinese-style catering — wok classics, roasts, seafood, noodles and more — thoughtfully curated for corporate and private events. We can also tailor menus to your preferences.' },
  { q: 'How far in advance should I place my order?', a: 'We recommend confirming at least 5 to 7 working days ahead. For weddings and large functions, 3 to 4 weeks lets us plan the menu, styling and crew properly. Last-minute orders are sometimes possible — just call us.' },
  { q: 'Is there a minimum order?', a: 'Most buffet menus have a minimum headcount, while à la carte dishes are ordered by portion. Tell us your event size and we will recommend the best format.' },
  { q: 'Do you deliver across Singapore?', a: 'Yes, we deliver island-wide. Delivery and setup fees depend on location, timing and order size, and are clearly itemised in your quotation.' },
  { q: 'Can you accommodate dietary requirements?', a: 'Absolutely. We cater for vegetarian, no-pork, no-beef, low-spice and allergy-aware requirements. Let us know when you enquire and we will adjust the menu accordingly.' },
  { q: 'Do you provide setup, service staff and equipment?', a: 'Yes. Depending on the package we provide buffet line setup, warmers, wares and uniformed service crew for full-service events. Just tell us your venue and we will recommend the right setup.' },
  { q: 'Can I customise or mix dishes across categories?', a: 'Of course — bespoke menus are our speciality. Share your must-have dishes, theme and budget, and we will build a menu around your occasion.' },
  { q: 'How do I confirm a booking and pay?', a: 'Once you are happy with the proposal, we confirm with a signed quotation and deposit, with the balance settled before or on the event date. We accept bank transfer and PayNow.' },
]

// =============================================================
//  ARTICLES
// =============================================================
export const articles = [
  { slug: 'choosing-event-menu', title: 'How to Choose the Right Menu for Your Event', category: 'Planning', date: '2026-05-20', readTime: '5 min read', excerpt: 'Headcount, format, dietary mix and budget — a practical guide to building a menu your guests will remember.', image: images.banquet, featured: true },
  { slug: 'corporate-catering-guide', title: 'A Guide to Stress-Free Corporate Catering', category: 'Corporate', date: '2026-04-28', readTime: '6 min read', excerpt: 'From headcount logistics to on-time delivery, here is how we keep corporate functions running flawlessly.', image: images.corporate },
  { slug: 'asian-buffet-favourites', title: 'Our Most-Loved Asian Buffet Dishes', category: 'Food', date: '2026-04-10', readTime: '4 min read', excerpt: 'The crowd-pleasers that disappear first — and why they work so well on a buffet line.', image: images.friedRice },
  { slug: 'portion-planning', title: 'How Much Food Do You Really Need Per Guest?', category: 'Planning', date: '2026-03-22', readTime: '4 min read', excerpt: 'Over-order and you waste; under-order and you worry. Our rule-of-thumb portions for any event.', image: images.steam },
  { slug: 'dietary-requirements', title: 'Catering for Mixed Dietary Requirements', category: 'Planning', date: '2026-03-05', readTime: '5 min read', excerpt: 'Vegetarian, no-pork, no-beef, allergy-aware — a framework for feeding a diverse guest list well.', image: images.vegetables },
  { slug: 'wedding-catering', title: 'Wedding Catering: Buffet or Plated Dinner?', category: 'Weddings', date: '2026-02-18', readTime: '6 min read', excerpt: 'The format shapes the whole evening. A side-by-side look at cost, flow and atmosphere.', image: images.table },
]

export const articleCategories = ['All', 'Planning', 'Corporate', 'Food', 'Weddings']
