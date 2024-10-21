/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    fontFamily: {
      sans: ['Roboto', 'sans-serif'],
    },
    extend: {

      spacing: {
        '128': '32rem',
      },

      fontSize: {
        '3xl': '1.875rem', // This is the default size for text-3xl
        '4xl': '2.5rem', // This is the default size for text-3xl
        'base': '1.2rem',
      },

      keyframes: {
        reversebounce: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-25%)' },
        },

        underline: {
          '0%': {width: '0%'},
          '100%': {width: '100%'},
        },

        riseup: {
          '0%': {opacity: '0', top: '30px'},
          '50%': {opacity: '1', top: '0px'},
          '100%': {opacity: '0', top: '30px'},
        },

        risedown: {
          '0%': {opacity: '1', top: '0px'},
          '100%': {opacity: '0', top: '30px'},
        },
      },

      animation: {
        reversebounce: 'reversebounce 1s ease-in-out',
        underline: 'underline 1s ease-in-out forwards',
        riseup: 'riseup 1.2s cubic-bezier(.53,0,.5,.99) forwards',
        risedown: 'risedown 0.5s ease-in-out forwards',
      },

      animationDelay: {
        2500: '2.5s',
        2900: '2.9s',
        3000: '3s',
      },

    },
  },
  plugins: [
    require('tailwindcss-animated'),
    require('tailwind-scrollbar'),
    require('tailwindcss-3d'),
  ],
}

