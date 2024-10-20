/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        myFont:['MyLocalFont','sans-serif'],
        myFont2:['zeroes_1','sans-serif'],
        myFont3:['myFont3','sans-serif'],
      }
    },
  },
  plugins: [],
}