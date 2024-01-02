const defaultTheme = require('tailwindcss/defaultTheme')
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./assets/views/*.html' , './assets/js/*.js'],
  theme: {
    extend: {
      fontFamily: {
        'serif': ['"Gideon Roman"', ...defaultTheme.fontFamily.serif],
        'sans': ['"Barlow Semi Condensed"', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        'gunmetal': {
          '50' : '#d3dad9',
          '100': '#859997',
          '200': '#667a78',
          '300': '#4a5957',
          '400': '#434f4e',
          '500': '#384341',
          '600': '#2c3534',
          '700': '#252c2c',
          '800': '#1c2121',
          '900': '#131616',
          '950': '#090b0b',
        },
        'lion': {
          '50' : '#e8e2d9',
          '100': '#d0c4b3',
          '200': '#c1b19a',
          '300': '#ab9577',
          '400': '#987f5d',
          '500': '#725f46',
          '600': '#3f3527',
          '700': '#332a1f',
          '800': '#262017',
          '900': '#191510',
          '950': '#0d0b08',
        },
      },
    },
  },
  plugins: [],
}

