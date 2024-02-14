/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    fontFamily: {
      sans: ['Roboto', 'sans-serif'],
    },
    extend: {

      animation: {
        fadein: 'fadein 1s ease-in-out',
      },

      scale: {
        '200': '2',
        '300': '3',
      },

      keyframes: {
        fadein: {
          '0%': {opacity: 0},
          '100%': {opacity: 1}
        }
      }

    },
  },
  plugins: [
    require('tailwind-scrollbar'),
    require('tailwindcss-animate'),
  ],
}

