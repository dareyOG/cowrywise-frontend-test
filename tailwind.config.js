/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    // gridTemplateColumns: {
    //   imageContainer: 'repeat(auto-fit, minmax(20rem,1fr))',
    // },
    extend: {
      colors: {
        bgHeader: '#dde3ea',
        infoText: '#f0ffff',
      },
    },
  },
  plugins: [],
};
