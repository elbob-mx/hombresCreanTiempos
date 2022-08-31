/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    screems: {
      xs: '0px',
      mobile: '360px',
      tablet: '768px',
      laptop: '976px',
      desktop: '1440px',
    },
    extend: {
      colors : {

      },
      fontFamily: {
        'archivo': 'Archivo, sans-serif',
        },
      fontWeight: {
        hairline: 100,
        'extra-light': 100,
        thin: 200,
        light: 300,
        normal: 400,
        medium: 500,
        semibold: 600,
        bold: 700,
        extrabold: 800,
        'extra-bold': 800,
        black: 900,
        }
    },
  },
  plugins: [],
}
