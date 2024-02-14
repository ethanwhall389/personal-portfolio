/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    fontFamily: {
      sans: ['Roboto', 'sans-serif'],
    },
    extend: {
      keyframes: {
        reversebounce: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-25%)' },
        },

        underline: {
          '0%': {width: '0%'},
          '100%': {width: '100%'},
        }
      },

      animation: {
        reversebounce: 'reversebounce 1s ease-in-out',
        underline: 'underline 1s ease-in-out forwards',
      },

      animationDelay: {
        2900: '2.9s',
        3000: '3s',
      },

    },
  },
  plugins: [
    require('tailwindcss-animated'),
    require('tailwind-scrollbar'),
  ],
}

