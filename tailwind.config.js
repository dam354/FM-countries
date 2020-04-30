const tailwind = require('tailwindcss/defaultTheme');

module.exports = {
  theme: {
    extend: {},
    fontFamily: {
      body: ['Nunito Sans', 'sans-serif'],
    },
  },
  variants: {},
  plugins: [require('./theme.config.js')],
};
