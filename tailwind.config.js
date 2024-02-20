/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customBg: '#F8F8FF',
        customBlack: '#1a1a1a',
        customWhite: '#fefffe',
        customBlue: '#0a84ff',
      },
    },
  },
  plugins: [],
};
