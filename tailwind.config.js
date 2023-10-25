/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        transparent: "transparent",
        "dark-grey": "#272B34",
        "grey": "#363a45",
        "blue": "#378DFB",
        "pink": "#e6407a",
        "red": "#FF4B4C",
        "green": "#63DC93",
        "white": "#FFFFFF",
        "light-grey": "#a6a6a6",
      },

      fontFamily: {
        'sans': ['Roboto', 'sans'],
      },

      width: {
        'card': '45%',
      }
    },
  },
  plugins: [],
}