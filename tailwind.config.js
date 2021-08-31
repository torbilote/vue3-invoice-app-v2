module.exports = {
  purge: { content: ['./public/**/*.html', './src/**/*.vue'] },
  darkMode: false, // or 'media' or 'class'
  theme: {
    backgroundColor: (theme) => ({
      ...theme('colors'),
      'my-blue': '#0d3558',
    }),
    extend: {
      margin: {
        26: '6.5rem',
      },
      rotate: {
        '-20': '-20deg',
        20: '20deg',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
