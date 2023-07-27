const { guessProductionMode } = require("@ngneat/tailwind");
module.exports = {
  prefix: '',
  content: [
    './src/**/*.{html,ts}',
    './projects/**/*.{html,ts}'
  ],
  darkMode: 'class',
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/typography')
  ],
}
