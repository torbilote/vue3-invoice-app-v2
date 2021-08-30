module.exports = {
  purge: { content: ['./public/**/*.html', './src/**/*.vue'] },
  darkMode: false, // or 'media' or 'class'
  theme: {
    rotate: {
      '-180': '-180deg',
      '-90': '-90deg',
      '-45': '-45deg',
      '-20': '-20deg',
      0: '0',
      20: '20deg',
      45: '45deg',
      90: '90deg',
      135: '135deg',
      180: '180deg',
      270: '270deg',
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
