/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{html,js}'],
  theme: {
    fontFamily: {
      sans: [
        '"Public Sans"',
        'system-ui',
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'sans-serif',
      ],
      display: [
        '"Libre Franklin"',
        '"Public Sans"',
        'system-ui',
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
