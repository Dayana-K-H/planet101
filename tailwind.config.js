/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        hitam: "#010101",
        hitamBiru: '#010229',
        ungu: "#855AB4",
        birdong: "#02034E ",
        grayText: "#D9D9D9",
        abu: "#666666",
      },
      fontFamily: {
        Outfit: ["Outfit", "sans-serif"],
      },
    },
  },
  plugins: [],
};
