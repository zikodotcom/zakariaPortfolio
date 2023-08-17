/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        /* Purple violet */
        'purpleViolet-100': '#7843e9',
        /* Gray */
        'gray-100': '#fff',
        'gray-200': '#fafafa',
        'gray-300': '#f0f0f0',
        'gray-400': '#ebebeb',
        // Black font
        'black-font' : '#111',
        'rgb': 'rgba(153,153,153,.2)'
      }
    },
  },
  plugins: [],
}
