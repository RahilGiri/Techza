/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          green: '#B6FF33', // Primary Electric Lime Green
          dark: '#050505',  // Main Dark Background
          gray: '#0D0D0D',  // Card/Section Background
          text: '#94A3B8',  // Secondary Text
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Figtree', 'sans-serif'],
      },
      animation: {
        'marquee': 'marquee 25s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        }
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
}
