/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/index.html",
    "./src/main.css",
    "./src/main.js",
  ],
  theme: {
    extend: {},
    colors: {
      main: '#212121',
      white: '#FFFFFF',
      purple: '#4C70EF',
      yellow: '#FFC000',
      darkBlue: '#292C36',
      grey: '#B0ADAD',
      orange: '#FF5733',
      blue: '#3399FF',
      lightBlue: '#558FFF',
    },
    fontSize: {
      64: '64px',
      36: '36px',
      35: '35px',
      24: '24px',
      20: '20px',
      18: '18px',
      15: '15px',
      14: '14px',
    },
  },
  plugins: [],
}
