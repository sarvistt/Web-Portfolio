/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // Enable dark mode support
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'custom-gradient': ' background-image: radial-gradient(circle, #80bdff, #a4c7ff, #c0d2ff, #d8dffe, #ebecfe, #f2f2fe, #f9f8ff, #ffffff, #ffffff, #ffffff, #ffffff, #ffffff);',
      },
      fontFamily: {
        'sf': ['DM Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
}