/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors: {
      bgHeader: '#DDE3EA',
    },
    gridTemplateColumns: {
      imageContainer: 'repeat(auto-fit, minmax(20rem,1fr))',
    },
    extend: {},
  },
  plugins: [],
};
