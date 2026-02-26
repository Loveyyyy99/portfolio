/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['DM Sans', 'sans-serif'],
        serif: ['Lora', 'Georgia', 'serif'],
      },
      colors: {
        // Soft pastel palette
        rose:    { DEFAULT: '#f9e4e4', deep: '#e8b4b4' },
        peach:   { DEFAULT: '#fdeede', deep: '#f5c99a' },
        sky:     { DEFAULT: '#e3eef9', deep: '#a8c8e8' },
        mint:    { DEFAULT: '#e2f3ee', deep: '#8ecfbb' },
        lavender:{
          50:  '#f5f2fc',
          100: '#ede8f8',
          200: '#d9d0f2',
          300: '#c0b0e8',
          400: '#a48fd8',
          500: '#8c72c8',
          600: '#7659b0',
          700: '#614890',
        },
        stone: {
          50:  '#faf9f7',
          100: '#f5f3f0',
          200: '#e8e4de',
          300: '#d4cfc8',
          400: '#a89f94',
          500: '#7d7268',
          600: '#5a5148',
          700: '#3d3630',
          800: '#2e2c2a',
          900: '#1c1a18',
        },
      },
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.5rem',
        '4xl': '2rem',
      },
      boxShadow: {
        'soft':    '0 4px 24px rgba(0,0,0,0.06)',
        'softer':  '0 2px 12px rgba(0,0,0,0.04)',
        'lift':    '0 12px 40px rgba(0,0,0,0.10)',
      },
      animation: {
        'fade-up':   'fadeUp 0.65s ease both',
        'fade-in':   'fadeIn 0.5s ease both',
      },
      keyframes: {
        fadeUp: {
          '0%':   { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%':   { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}
