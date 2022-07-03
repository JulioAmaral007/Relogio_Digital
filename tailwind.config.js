/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.html"],
  theme: {
    extend: {
      boxShadow: {
        '3xl': '0 8px 10px rgba(0, 0, 0, 0.5)',
        '4xl': '5px 5px 15px rgba(0, 0, 0, 0.7)'
      }
    },
  },
  plugins: [],
}
