/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        transparent: "transparent",
        "color-primary-background": "#363a45",
        "color-secondary-background": "#272B34",
        "color-primary": "#378DFB",
        "color-danger": "#FF4B4C",
        "color-success": "#63DC93",
        "color-primary-text": "#FFFFFF",
        "color-secondary-text": "#8F96A8",
      },

      fontFamily: {
        'sans': ['Roboto', 'sans-serif'],
      }
    },
  },
  plugins: [],
}