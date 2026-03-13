/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'rush-red': '#da8307',
        'rush-black': '#000000',
        'rush-dark': '#111111',
      },
      fontFamily: {
        sans: ['Montserrat', 'Inter', 'sans-serif'],
        heading: ['Syncopate', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
