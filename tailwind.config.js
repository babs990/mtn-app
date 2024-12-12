/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      boxShadow: {
        ombreCarte : '15px 15px 22px rgba(0, 0, 0, 0.2);'
      }
    },
  },
  plugins: [],
}

