module.exports = {
  purge: { content: ['./public/**/*.html', './src/**/*.vue'] },
  darkMode: false, // or 'media' or 'class'
  theme: {
    backgroundColor: (theme) => ({
      ...theme('colors'),
      'blue-filters': '#0d3558',
      'blue-invoice-details': '#0d3558',
      'blue-list-items': '#1b5792',
      'blue-attributes': '#1b5792',
      'blue-products': '#082743',
    }),
    extend: {
      margin: {
        26: '6.5rem',
      },
      rotate: {
        '-20': '-20deg',
        20: '20deg',
      },
      width: {
        '1/7': '14%',
      },
      fontSize: {
        xxs: ['0.625rem', '0.75rem'],
        '3xs': ['0.5rem', '0.625rem'],
      },
      colors: {
        'green-general': '#11EF5C',
      },
      height: {
        '90vh': '90vh',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
