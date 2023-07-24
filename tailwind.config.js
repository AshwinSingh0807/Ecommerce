/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    screens: {
   '2xl': {'max': '1535px'},
      // => @media (max-width: 1535px) { ... }

      'xl': {'max': '1279px'},
      // => @media (max-width: 1279px) { ... }1023-1279

      'lg': {'max': '1023px'},
      // => @media (max-width: 1023px) { ... }767-1022

      // 'md': {'max': '767px'},
      // // => @media (max-width: 767px) { ... }639-766

      'sm': {'max': '767px'},
      // => @media (max-width: 639px) { ... }0-638
    },
  },
  plugins: [],
};
