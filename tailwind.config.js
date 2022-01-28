/** @type {import("@types/tailwindcss/tailwind-config").TailwindConfig } */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        primary: ['Montserrat'],
      },
      colors: {
        'dark-navi': '#060447',
        yellow: '#FFF38A',
        'yellow-dark': '#827B68',
      },
    },
  },
  variants: {},
  plugins: [],
};
