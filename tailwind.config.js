/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*.{html,js}",          // For HTML and JS files in the root directory
    "./assets/**/*.{html,js}", // For files inside the assets folder (if applicable)
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Open Sans', 'sans-serif'],
      },
      backgroundImage: {
        'custom-bg': "url('/fithealth.github.io/assets/images/bg.png')",

      },
    }
  },
  plugins: [],
}

