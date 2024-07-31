/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        black: "#101419",
        green: "#468C98",
        darkBlue: "#476C9B",
        lightBlue: "#ADD9F4",
        red: "#984447",
        gray: "#CED0D2"
      },
      backgroundColor: {
        black: "#101419",
        green: "#468C98",
        darkBlue: "#476C9B",
        lightBlue: "#ADD9F4",
        red: "#984447",
        gray: "#CED0D2"
      }
    },
  },
  plugins: [],
}

