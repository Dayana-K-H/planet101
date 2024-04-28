/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        hitam: '#010101',
        ungu: '#855AB4',
        birdong: '#02034E ',
      },
      fontFamily: {
        Inter: ['Inter']
      },
    },
  },
  plugins: [],
}