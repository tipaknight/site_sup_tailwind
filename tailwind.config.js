/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./public/**/*.{html,js}", "./index.html"],
  theme: {
    screens: {
      'xs': '480px',
      // => @media (min-width: 480px) { ... }
      'sm': '640px',
      // => @media (min-width: 640px) { ... }
      'md': '768px',
      // => @media (min-width: 640px) { ... }
      'tb': '960px',
      // => @media (min-width: 960px) { ... }
      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }
      'xl': '1128px',
      // => @media (min-width: 1280px) { ... }

    },
    extend: {},
  },
  plugins: [require('@tailwindcss/typography'), require('@tailwindcss/forms'),],
};
