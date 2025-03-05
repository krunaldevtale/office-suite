/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.html',
    './index.html', // Include your HTML file
    './user-login.html', // Include your HTML file
    './register.html',
    './userMgmt.html',
    './src/*.html',
    './dist/**/*.html', // Add your distribution files if applicable
    './styles/**/*.css', // Include your custom CSS
    './src/**/*.{js,ts,jsx,tsx}', // Include your source files if applicable
  ],
  theme: {
    extend: {
      fontFamily: {
        roboto: ["Roboto", "sans-serif"], // Adding Roboto font
      },

      colors: {
        'medium-aquamarine': '#01D7AB',
        'royal-blue': '#0272D9',
        'white-smoke': '#FBFBFB',
        'frosted-white': '#FFFFFF1A',
        'hazy-white': '#FBFBFB99',
        'medium-gray': '#FBFBFB4D',
        'dark-charcoal': '#333333',
        'transparent-charcoal': '#3333334D',
        'charcoal-black': '#1D1D1F',
        'shadow-black': '#00000033',
        'dark-gray': '#A9A9A9',
        'transparent-dark-gray': '#33333399',
        'frosted-gray': '#D4D4D41A',
        'light-sky-blue': '#BBE2FA',
        'steel-blue': '#44576699',
        'transparent-light-sky-blue': '#87CEFA8C',
        'red-orange': '#EE361C',
        'olive': '#DBD77C',
        'light-gray': '#EFEFEF',
        'very-light-gray': '#F8F8F8',
        'transparent-medium-gray': '#9090901A',
        'royal-blue': '#0272D9',
        'transparent-sky-blue':'#BDE3FB',
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(180deg, #01D7AB 0%, #0272D9 100%)',
      },
    },
  },
  plugins: [],
}