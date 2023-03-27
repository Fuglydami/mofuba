/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      anybody: ['Anybody', 'cursive'],
      mulish: ['Mulish', 'sans-serif'],
    },

    colors: {
      primaryColor: '#008DD0',

      primaryDeep: '#0077ae',
    },
    extend: {},
  },
  plugins: [require('daisyui')],
};
