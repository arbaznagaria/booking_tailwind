/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      container: {
        center: true,
      },
      flex: {
        '2': '1 0 20%'
      },
      boxShadow: {
        'custom': '0px 2px 8px 0px rgba(0,0,0,0.16)'
      },
      colors: {
        'hsla': 'rgba(255, 255, 255, 0.1)',
        'primary': '#003580',
      }
    },
  },
  plugins: [],
}
