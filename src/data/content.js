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
//  MENU — Asian à la carte (real priced items + representative)
//  Prices are per portion (serves several); confirm pax on enquiry.
// =============================================================
export const menuCategories = [
  {
    slug: 'chef-recommends',
    name: 'Chef Recommends',
    tagline: 'Our most-loved signatures',
    image: images.shrimp,
    items: [
      { name: 'Jumbo Shrimp with Garlic Sauce', price: '6.90', desc: 'Plump prawns wok-tossed in fragrant garlic sauce' },
      { name: 'Chicken with Garlic Sauce', price: '9.00', desc: 'Tender chicken in a savoury house garlic glaze' },
      { name: 'Sweet & Sour Chicken', price: '11.00', desc: 'Crispy chicken, pineapple and peppers' },
      { name: "Vegetarian's Delight", price: '6.50', desc: 'Seasonal greens and mushrooms, lightly braised' },
    ],
  },
  {
    slug: 'beef',
    name: 'Beef',
    tagline: 'Hearty wok classics',
    image: images.beefBroccoli,
    items: [
      { name: 'Beef with Broccoli', price: '6.50', desc: 'Sliced beef and crisp broccoli in oyster sauce' },
      { name: 'Beef Noodle Soup', price: '7.00', desc: 'Comforting broth with tender beef and noodles' },
      { name: 'Black Pepper Beef', price: '8.00', desc: 'Wok-seared beef with cracked black pepper' },
      { name: 'Beef Hor Fun', price: '7.50', desc: 'Flat rice noodles in silky egg gravy' },
    ],
  },
  {
    slug: 'chicken',
    name: 'Chicken',
    tagline: 'Crowd favourites',
    image: images.chicken,
    items: [
      { name: 'Spicy Chicken Wings', price: '7.90', desc: 'Crispy wings tossed in a spicy glaze' },
      { name: 'Sweet & Sour Chicken', price: '11.00', desc: 'A perennial favourite, tangy and bright' },
      { name: 'Chicken with Garlic Sauce', price: '9.00', desc: 'Aromatic garlic sauce over tender chicken' },
      { name: 'Kung Pao Chicken', price: '8.50', desc: 'Diced chicken, dried chilli and cashews' },
      { name: 'Lemon Chicken', price: '8.00', desc: 'Golden chicken in a zesty lemon sauce' },
    ],
  },
  {
    slug: 'pork',
    name: 'Pork',
    tagline: 'Roasts & braises',
    image: images.plating,
    items: [
      { name: 'Roast Pork with Vegetables', price: '8.50', desc: 'Crackling roast pork with seasonal greens' },
      { name: 'Sweet & Sour Pork', price: '8.00', desc: 'Crisp pork, pineapple and peppers' },
      { name: 'Char Siew', price: '9.00', desc: 'Honey-glazed barbecue pork' },
    ],
  },
  {
    slug: 'seafood',
    name: 'Seafood',
    tagline: 'From the wok & steamer',
    image: images.steam,
    items: [
      { name: 'Jumbo Shrimp with Garlic Sauce', price: '6.90', desc: 'Sweet jumbo prawns in garlic sauce' },
      { name: 'Cereal Prawns', price: '12.00', desc: 'Crispy prawns in buttery cereal' },
      { name: 'Steamed Fish Fillet', price: '10.00', desc: 'Delicate fillet, superior soy and ginger' },
      { name: 'Salt & Pepper Squid', price: '9.50', desc: 'Lightly battered, salt-and-pepper tossed' },
    ],
  },
  {
    slug: 'vegetables',
    name: 'Vegetables',
    tagline: 'Fresh & wholesome',
    image: images.vegetables,
    items: [
      { name: "Vegetarian's Delight", price: '6.50', desc: 'Mixed greens and mushrooms, lightly braised' },
      { name: 'Broccoli with Mushroom', price: '6.00', desc: 'Crisp broccoli and shiitake in light sauce' },
      { name: 'Sambal Kang Kong', price: '6.00', desc: 'Water spinach wok-fried with sambal' },
      { name: 'Braised Beancurd', price: '6.50', desc: 'Silken tofu in a savoury braise' },
    ],
  },
  {
    slug: 'rice-noodles',
    name: 'Rice & Noodles',
    tagline: 'Satisfying staples',
    image: images.friedRice,
    items: [
      { name: 'Yang Chow Fried Rice', price: '6.00', desc: 'Wok-fried rice with prawns, char siew and egg' },
      { name: 'Hokkien Mee', price: '7.00', desc: 'Braised noodles in rich prawn stock' },
      { name: 'Seafood Hor Fun', price: '7.50', desc: 'Flat noodles with seafood in egg gravy' },
      { name: 'Beef Noodle Soup', price: '7.00', desc: 'Tender beef in a comforting broth' },
    ],
  },
  {
    slug: 'soup-dessert',
    name: 'Soups & Desserts',
    tagline: 'To start & to finish',
    image: images.dessert,
    items: [
      { name: 'Hot & Sour Soup', price: '5.00', desc: 'Classic spicy-sour soup with tofu' },
      { name: 'Sweet Corn Soup', price: '5.00', desc: 'Velvety sweet corn and egg drop' },
      { name: 'Chilled Mango Pudding', price: '4.00', desc: 'Silky mango pudding, served cold' },
      { name: 'Almond Beancurd', price: '4.00', desc: 'Smooth almond jelly with fruit' },
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
