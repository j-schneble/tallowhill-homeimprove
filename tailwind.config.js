/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors')
const { fontFamily } = require('tailwindcss/defaultTheme')
const sans = [
  'Inter',
  '-apple-system',
  'system-ui',
  'Segoe UI',
  'Roboto',
  'Helvetica Neue',
  'sans-serif',
  'sfprodisplayregular',
  'sfprodisplayheavy',
  'sfprodisplaylight',
  'sfprodisplaybold',
]
module.exports = {
  mode: 'jit',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      spacing: {
        128: '32rem',
      },
      objectPosition: {
        'center-bottom': 'center bottom',
      },
      colors: {
        white: '#fff',
        green: colors.emerald,
        yellow: colors.amber,
        purple: colors.violet,
        gray: colors.neutral,
        'gray-150': '#EEEFF2',
        'gray-1000': '#050505',
        black: '#050505',
        'design-details': '#458886',
        'design-details-light': '#EEF3F3',
        'design-details-dark': '#273F3F',
        twitter: '#479BEA',
        blue1: '#2d3849',
        current: 'currentColor',
        transparent: 'transparent',
        gradient1: '-webkit-linear-gradient(to top, #4A00E0, #8E2DE2) linear-gradient(to top, #4A00E0, #8E2DE2)',
        blu1: '#3f91f2',
        purp2: '#7816f0',
        grgray: '#63686b',
        blue2: '#1a202c',
        oran : '#ffa500',
        
      },
      fontFamily: {
        sfprodisplayregular: ['SF-Pro-Display-Regular', ...fontFamily.sans],
        sfprodisplaybold: ['SF-Pro-Display-Bold', ...fontFamily.sans],
        sfprodisplaylight: ['SF-Pro-Display-Light', ...fontFamily.sans],
        sfprodisplayheavy: ['SF-Pro-Display-Heavy', ...fontFamily.sans],

      },
    },
  },
  plugins: [],
}
