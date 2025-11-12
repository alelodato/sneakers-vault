/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        heading: ['Orbitron', 'sans-serif'],
        body: ['Poppins', 'sans-serif'],
        accent: ['Rock Salt', 'cursive'],
      },
      colors: {
        brand: {
          400: '#8FE3FF',
          500: '#00BFFF',
          600: '#008ECC',
        },
      },
      backgroundImage: {
        'vault-gradient': 'linear-gradient(180deg, #0b121a 0%, #121a24 100%)',
      },
    },
  },
  plugins: [],
};
