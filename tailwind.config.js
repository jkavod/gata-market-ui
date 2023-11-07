/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        darkShade: "#333333",
        darkShadeReduced: "rgba(51, 51, 51, 0.4)",
        darkButtons: "#3F3F3F",
        yellowShade: "#E8CE6A",
      }
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
  ],
}