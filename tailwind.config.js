/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Nunito Sans"', 'system-ui', 'sans-serif'],
        display: ['"Nunito"', 'system-ui', 'sans-serif'],
      },
      colors: {
        sage: {
          50: '#f3f7f4',
          100: '#e3ede6',
          200: '#c7dbce',
          300: '#9fc0ac',
          400: '#6fa088',
          500: '#4e8468',
          600: '#3a6a52',
          700: '#2f5543',
          800: '#274437',
          900: '#20392f',
        },
        mist: {
          50: '#f2f7f9',
          100: '#e2eef2',
          200: '#c5dde5',
          300: '#9bc3d1',
          400: '#6aa1b4',
          500: '#4a82a0',
          600: '#396782',
          700: '#2e536a',
          800: '#274557',
          900: '#223a49',
        },
        sand: {
          50: '#faf7f2',
          100: '#f3ecdf',
          200: '#e6d7c0',
          300: '#d4ba97',
          400: '#c19a6f',
          500: '#b0855a',
          600: '#9a6f4d',
        },
      },
      animation: {
        'fade-in': 'fadeIn 0.4s ease-out',
        'slide-up': 'slideUp 0.4s ease-out',
        'pulse-soft': 'pulseSoft 2.5s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        pulseSoft: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.6' },
        },
      },
    },
  },
  plugins: [],
};
