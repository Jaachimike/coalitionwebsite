/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'section1bg': 'url(./images/section1_bg.png)',
        'section2bg': 'url(./images/section2_bg.png)',
        'tab1bg': 'url(./images/tab1_bg.png)',
        'tab2bg': 'url(./images/tab2_bg.png)'


      }
    },
  },
  plugins: [],
}

