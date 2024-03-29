/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.{html,js}'],
  theme: {
    screens: {
      small: '0px',
      mobile: '359px',
      mobileHor: '640px',
      tablet: '768px',
      laptop: '976px',
      desktop: '1440px',
    },
    extend: {
      colors : {
      },
      fontFamily: {
        'archivo': 'Archivo Narrow, sans-serif',
        'lexend': 'Lexend Exa, sans-serif',
        'bebas': 'Bebas Neue, cursive',
        },
      fontWeight: {
        hairline: 100,
        extralight: 100,
        thin: 200,
        light: 300,
        normal: 400,
        medium: 500,
        semibold: 600,
        bold: 700,
        extrabold: 800,
        extrabold: 800,
        black: 900,
        },
        scale: {
          flip: '-1',
        },
    },
  },
  plugins: [],
}
