/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html', // Include your HTML file
    './dist/**/*.html', // Add your distribution files if applicable
    './styles/**/*.css', // Include your custom CSS
    './src/**/*.{js,ts,jsx,tsx}', // Include your source files if applicable
  ],
  theme: {
    extend: {
      colors: {
        'medium-aquamarine': '#01D7AB',
        'royal-blue': '#0272D9',
        'white-smoke': '#FBFBFB',
        'medium-gray': '#FBFBFB4D',
        'dark-gray': '#333333',
        'dark-charcoal': '#333333',
        'dark-gray': '#A9A9A9',
        'light-sky-blue': '#BBE2FA',
        'red-orange': '#EE361C',
        'olive': '#DBD77C',
        'light-gray': '#EFEFEF',
        'very-light-gray': '#F8F8F8',
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(180deg, #01D7AB 0%, #0272D9 100%)',
      },
    },
  },
  plugins: [],
}