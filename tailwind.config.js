const defaultTheme = require('tailwindcss/defaultTheme')
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html' , './assets/js/*.js'],
  theme: {
    extend: {
      fontFamily: {
        'serif': ['"Gideon Roman"', ...defaultTheme.fontFamily.serif],
        'sans': ['"Teko"', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
}

