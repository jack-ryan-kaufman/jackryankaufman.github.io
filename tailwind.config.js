/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{html,js}'],
  theme: {
    fontFamily: {
      sans: [
        'Inter',
        'system-ui',
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'sans-serif',
      ],
    },
    extend: {
      colors: {
        accent: '#FF0050',
      },
    },
  },
  plugins: [],
}
