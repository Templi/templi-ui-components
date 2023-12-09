/** @type {import('tailwindcss').Config} */

const { fontFamily } = require('tailwindcss/defaultTheme')

const BRAND_COLORS = {
  transparent: 'transparent',
  current: 'currentColor',
  'pure-white': '#FFFFFF',
  'pure-white-hover': '#EEEDE8',
  'off-white': '#F6F6F1',
  'tight-black': '#111111',
  black: '#000000',
  '70-grey': '#6D6E71',
  '50-grey': '#939598',
  '20-grey': '#D1D3D4',
  '5-grey': '#F1F2F2',
  'templi-purple': '#484848',
  'templi-7-purple': '#f3f0f8',
  concord: '#473C75',
  'purp-dust': '#7C6A85',
  iris: '#919191',
  rust: '#9E5126',
  brick: '#803838',
  dijon: '#987D47',
  'old-gold': '#CCAD43',
  marigold: '#FFD630',
  'marigold-hover': '#DCAE12',
  navy: '#304078',
  teal: '#2E85B6',
  'teal-hover': '#26739E',
  turquoise: '#269E88',
  red: '#DF1615',
  'purple-mist': '#E7E3ED',
  'parks-green': '#26834B',
  'red-700': '#C53030',
  'red-500': '#F56565',
  'red-400': '#FC8181',
  'red-100': '#FFF5F5',
  'concept-print-gray': '#484848',
  'concept-print-black': '#111111',
  'concept-print-lightgray': '#919191',
  'concept-print-white': '#FFFFFF',
  'templi-bggray': '#C7C7C7',
  'templi-lightgray': '#F8F8F8',
  'templi-darkestgray': '#4F4F4F',
  'templi-gold': '#EDAB00',
  'templi-5-gold': '#EDEAE1',
  'templi-blue': '#2872E1',
  'templi-5-blue': '#D5DAE0',

}
module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors: BRAND_COLORS,
    extend: {
      fontFamily: {
        sans: ['Lato, Helvetica, Arial', ...fontFamily.sans],
        roboto: ['Lato, Helvetica, Arial', 'sans-serif'],
      },
      fontSize: {
        xs: '0.5rem',
        sm: '0.625rem',
        base: '0.75rem',
        lg: '0.875rem',
        xl: '1rem',
        '2xl': '1.25rem',
        '3xl': '1.5rem',
        '4xl': '1.875rem',
        '5xl': '2.25rem',
        '6xl': '2.625rem',
        '7xl': '4.0625rem',
        '8xl': '7.5rem',
      },
      width: {
        maxContentWidth: '1536px',
      },
      maxWidth: {
        maxContentWidth: '1536px',
      },
      boxShadow: {
        'MouseOver-Effect-ProductCard': 'inset 0px 0px 4px 100px rgba(109,110,113,0.7)',
        'Drop-Shadow': '0px -5px 4px 0px rgba(0,0,0,0.5)',
      },
      borderRadius: {
        none: '0',
        xs: '0.047755707055330276rem',
        sm: '0.05137757584452629rem',
        default: '0.0625rem',
        lg: '0.09296715259552002rem',
        xl: '0.09375rem',
        '2xl': '0.11440469324588776rem',
        '3xl': '0.125rem',
        '4xl': '0.13381409645080566rem',
        '5xl': '0.16676683723926544rem',
        '6xl': '0.1875rem',
        '7xl': '0.19498087465763092rem',
        '8xl': '0.20845821499824524rem',
        '9xl': '0.2101440578699112rem',
        '10xl': '0.21023227274417877rem',
        '11xl': '0.22858557105064392rem',
        '12xl': '0.23399291932582855rem',
        '13xl': '0.2340911477804184rem',
        '14xl': '0.24315780401229858rem',
        '15xl': '0.248414546251297rem',
        '16xl': '0.25rem',
        '17xl': '0.2521417737007141rem',
        '18xl': '0.25311529636383057rem',
        '19xl': '0.29488492012023926rem',
        '20xl': '0.29500868916511536rem',
        '21xl': '0.29940617084503174rem',
        '22xl': '0.30357158184051514rem',
        '23xl': '0.3125rem',
        '24xl': '0.33680739998817444rem',
        '25xl': '0.375rem',
        '26xl': '0.41264066100120544rem',
        '27xl': '0.41281387209892273rem',
        '28xl': '0.4375rem',
        '29xl': '0.44088560342788696rem',
        '30xl': '0.44107067584991455rem',
        '31xl': '0.44865331053733826rem',
        '32xl': '0.490755558013916rem',
        '33xl': '0.49096155166625977rem',
        '34xl': '0.5rem',
        '35xl': '0.625rem',
        '36xl': '0.6375216841697693rem',
        '37xl': '0.6459518074989319rem',
        '38xl': '0.6462228894233704rem',
        '39xl': '0.6908530592918396rem',
        '40xl': '0.699999988079071rem',
        '41xl': '0.7226695418357849rem',
        '42xl': '0.7726597189903259rem',
        '43xl': '0.8940026164054871rem',
        '44xl': '0.9273373484611511rem',
        '45xl': '0.9275757670402527rem',
        '46xl': '0.9375rem',
        '47xl': '1rem',
        '48xl': '1.1032493114471436rem',
        '49xl': '1.125rem',
        '50xl': '1.1920034885406494rem',
        '51xl': '1.2396694421768188rem',
        '52xl': '1.25rem',
        '53xl': '1.2664330005645752rem',
        '54xl': '1.3624813556671143rem',
        '55xl': '1.6282893419265747rem',
        '56xl': '1.657436728477478rem',
        '57xl': '1.875rem',
        '58xl': '1.87576425075531rem',
        '59xl': '3.125rem',
        '60xl': '3.75rem',
        full: '9999px',
      },
    },
  },
  safelist: [
    {
      pattern: /^(text-|fill-|bg-)/,
      variants: ['sm', 'lg', 'xl', '2xl'],
    },
    {
      pattern: /^(backdrop)/,
      variants: ['sm', 'lg', 'xl', '2xl'],
    },
    {
      pattern: /^(object)/,
    },
    {
      pattern: /^(p|m)(y|x|t|r|b|l|-)/,
      variants: ['sm', 'lg', 'xl', '2xl'],
    },
    {
      pattern: /^aspect-/,
      variants: ['sm', 'lg', 'xl', '2xl'],
    },
    {
      pattern: /^max-(w|h)-/,
      variants: ['sm', 'lg', 'xl', '2xl'],
    },
    {
      pattern: /^(w|h)-/,
      variants: ['sm', 'lg', 'xl', '2xl'],
    },
    {
      pattern: /^(justify|items|flex|grid|block|gap)/,
      variants: ['sm', 'lg', 'xl', '2xl'],
    },
  ],
  plugins: [require('@tailwindcss/forms')],
}
