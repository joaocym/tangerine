/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      spacing: {
        '1/10': '10%',
        '2/10': '20%',
        '8/10': '80%',
        '9/10': '90%',
        '1/9': '11%',
        '8/9': '89%',
        '3/20': '15%',
        '17/20': '85%'
      }
    },
  },
  plugins: [],
}
