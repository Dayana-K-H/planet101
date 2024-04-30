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
      keyframes: {
        animated: {
          '0%': {
            transform: "rotate(330deg) translateX(0)",
            opacity: '1'
          },
          '75%': {
            opacity: '0'
          },
          '100%' : {
            transform: "rotate(330deg) translateX(-1000px)",
            opacity: '0'
          }
        },
        moveY: {
          '0%': {
            transform: " translateX(-100%)",
          },
          '100%' : {
            transform: "translateX(0)",
          }
        }
      },
      animation: {
        starMove: 'animated 2s infinite linear',
        bgMove: 'moveY 200s linear infinite'
      },
    },
  },
  plugins: [],
};
