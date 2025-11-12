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
          50: "#f3f6ff",
          100: "#e5ebff",
          200: "#ccd7ff",
          300: "#a3b6ff",
          400: "#7b94ff",
          500: "#4f6aff",
          600: "#354ed6", 
          700: "#293fa6", 
          800: "#ff4d5a",
          900: "#101a40",
        },
        dark: "#0b111b",
        light: "#f9f9fb",
      },
      backgroundImage: {
        'vault-gradient': 'linear-gradient(180deg, #0b121a 0%, #121a24 100%)',
      },
    },
  },
  plugins: [],
};
