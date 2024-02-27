/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'roboto': ['Roboto', 'sans-serif'],
      },
      colors: {
        customBg: '#F8F8FF',
        customBlack: '#1a1a1a',
        customWhite: '#fefffe',
        customBlue: '#0a84ff',
        customGray: '#464646',
      },
    },
  },
  plugins: [],
};
