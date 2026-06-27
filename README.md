# Intercontinental Catering — Website

A complete modern redesign for **Intercontinental Catering Pte Ltd** — premium Asian event catering in Singapore. *"Memorable Catering, Crafted for Your Events."*

Sister brand of International Catering (same group), but a distinct identity: **Asian / Chinese à-la-carte cuisine** on an elegant **dark navy + gold** theme.

Built with **React + Vite + Tailwind CSS**. Playfair Display over Inter.

## Quick start

```bash
npm install      # install dependencies
npm run dev      # dev server → http://localhost:5174
npm run build    # production build into /dist
npm run preview  # preview the production build
```

## Pages

| Route        | Page     | Highlights |
|--------------|----------|------------|
| `/`          | Home     | Animated hero slideshow, services, menu taster, stats, process, testimonials, journal |
| `/about`     | About    | Brand story, mission/vision/values, timeline, stats, why-us |
| `/menu`      | Menu     | All 8 Asian categories with dishes & per-portion prices |
| `/faqs`      | FAQs     | Accordion + contact prompt |
| `/articles`  | Articles | Filterable journal + featured post + newsletter |
| `/contact`   | Contact  | Working enquiry form, contact details, map |

## Design tokens (`tailwind.config.js`)

- **Colours** — `ink` (page base, near-black navy), `navy` (+ `light`/`deep`) panels, `gold` (+ `light`/`soft`/`dark`) accent, `cream`/`sand`/`muted` text
- **Type** — `font-serif` → Playfair Display (headings), `font-sans` → Inter (body)
- **Motion** — hero Ken-Burns slideshow, scroll-reveal, animated counters; all respect `prefers-reduced-motion`

## Content

Everything — company details, contact, the full menu (dishes + prices), FAQs, articles,
testimonials — lives in **`src/data/content.js`**.

## Notes

- **Logo** is the real `logo-light.png` from incntl.com.sg (cream wordmark, ideal on dark).
- **Hero** uses one real event photo (`hero-3.png`) plus Unsplash food photography; swap the
  `images` URLs in `content.js` for your own shots.
- **Menu prices** are the real known per-dish prices plus representative additions — replace
  with the live menu before launch.
- The contact form is **client-side only** (shows a success state); wire it to an email
  service or backend to receive enquiries.
