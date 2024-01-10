/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'raleway': ['Raleway', 'sans-serif'],
        'roboto': ['Roboto', 'sans-serif'],
        'poppins': ['Poppins', 'sans-serif'],
        'playfair': ['Playfair Display', 'serif'],
      },
      backgroundImage: {
        'light-mode': "url('../../public/5183000.jpg')",
        'dark-mode': 'url("../../public/black.jpg")',
      },
      colors: {
        'secundary': '#89CFF0',
        'tertiary': '#F4A1A1',
        'quaternary': '#98FF98',
        'quinary': '#E6E6FA',
        'verde-claro': '#80D8DA',
        'rosa-pessego': '#F8B7B7',
      },
    },
  },
  plugins: [],
}