/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        transparent: "transparent",
        "color-primary-background": "#272B34",
        "color-secondary-background": "#363a45",
        "color-primary": "#378DFB",
        "color-accent": "#e6407a",
        "color-danger": "#FF4B4C",
        "color-success": "#63DC93",
        "color-primary-text": "#FFFFFF",
        "color-secondary-text": "#a6a6a6",
      },

      fontFamily: {
        'sans': ['Roboto', 'sans-serif'],
      }
    },
  },
  plugins: [],
}