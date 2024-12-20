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
        primaryColor: "#87CEFA",
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(180deg, #01D7AB 0%, #0272D9 100%)',
      },
    },
  },
  plugins: [],
}