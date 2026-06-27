/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    container: {
      center: true,
      padding: { DEFAULT: '1.25rem', sm: '1.5rem', lg: '2rem', xl: '2.5rem' },
      screens: { sm: '640px', md: '768px', lg: '1024px', xl: '1200px', '2xl': '1280px' },
    },
    extend: {
      colors: {
        // Deep navy/charcoal backgrounds (dark theme)
        ink: '#0A0F1C', // page base — near-black navy
        navy: {
          DEFAULT: '#14203A', // primary dark panel
          light: '#1E2C4C', // elevated surface
          deep: '#0C1426', // deeper section
        },
        // Brand gold accent
        gold: {
          DEFAULT: '#B8965A',
          light: '#D8BC86',
          soft: '#E6D2B5',
          dark: '#8C6E3D',
        },
        // Light text tones on dark
        cream: '#F3EEE2',
        sand: '#CFC6B4',
        muted: '#8B93A8',
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', '-apple-system', 'Segoe UI', 'sans-serif'],
      },
      fontSize: {
        '7xl': ['4.5rem', { lineHeight: '1.02', letterSpacing: '-0.01em' }],
        '8xl': ['6rem', { lineHeight: '1', letterSpacing: '-0.015em' }],
        '9xl': ['8rem', { lineHeight: '0.98', letterSpacing: '-0.02em' }],
      },
      letterSpacing: { widest: '0.3em' },
      maxWidth: { '8xl': '88rem' },
      boxShadow: {
        soft: '0 18px 50px -28px rgba(0, 0, 0, 0.7)',
        lift: '0 35px 90px -45px rgba(0, 0, 0, 0.85)',
        gold: '0 20px 60px -28px rgba(184, 150, 90, 0.5)',
      },
      backgroundImage: {
        'hero-fade':
          'linear-gradient(180deg, rgba(10,15,28,0.35) 0%, rgba(10,15,28,0.55) 45%, rgba(10,15,28,0.92) 100%)',
        'gold-line': 'linear-gradient(90deg, transparent, rgba(184,150,90,0.8), transparent)',
        'grain':
          "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.4'/%3E%3C/svg%3E\")",
      },
      transitionTimingFunction: { 'out-expo': 'cubic-bezier(0.16, 1, 0.3, 1)' },
      keyframes: {
        'fade-up': { '0%': { opacity: '0', transform: 'translateY(28px)' }, '100%': { opacity: '1', transform: 'translateY(0)' } },
        'fade-in': { '0%': { opacity: '0' }, '100%': { opacity: '1' } },
        'scale-in': { '0%': { opacity: '0', transform: 'scale(1.06)' }, '100%': { opacity: '1', transform: 'scale(1)' } },
        marquee: { '0%': { transform: 'translateX(0)' }, '100%': { transform: 'translateX(-50%)' } },
        float: { '0%, 100%': { transform: 'translateY(0)' }, '50%': { transform: 'translateY(-12px)' } },
        kenburns: { '0%': { transform: 'scale(1.03) translate3d(0,0,0)' }, '100%': { transform: 'scale(1.16) translate3d(-2.2%,-2%,0)' } },
        kenburns2: { '0%': { transform: 'scale(1.16) translate3d(2.2%,1.6%,0)' }, '100%': { transform: 'scale(1.03) translate3d(0,0,0)' } },
        shimmer: { '0%': { backgroundPosition: '-200% 0' }, '100%': { backgroundPosition: '200% 0' } },
      },
      animation: {
        'fade-up': 'fade-up 0.9s cubic-bezier(0.16,1,0.3,1) both',
        'fade-in': 'fade-in 1.1s ease both',
        'scale-in': 'scale-in 1.4s cubic-bezier(0.16,1,0.3,1) both',
        marquee: 'marquee 38s linear infinite',
        float: 'float 7s ease-in-out infinite',
        kenburns: 'kenburns 13s ease-in-out infinite alternate',
        kenburns2: 'kenburns2 13s ease-in-out infinite alternate',
        shimmer: 'shimmer 6s linear infinite',
      },
    },
  },
  plugins: [],
}
