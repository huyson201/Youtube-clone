/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "light-gray": "#e5e5e5",
        "yt-red": "#ff0000",
        "border-button": "#d3d3d3",
        "search-button-color": "#f8f8f8",
        "search-button-hover": "#f0f0f0",
        "text-secondary": "#606060"
      },
      fontFamily: {
        "roboto": ["'Roboto', Arial, sans-serif"]
      }
    },
  },
  plugins: [],
}