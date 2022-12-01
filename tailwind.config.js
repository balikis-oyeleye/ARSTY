/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: "#292929"
      }
    },
    fontFamily:{
      "stix": ['"STIX Two Text"', 'serif']
    }
  },
  plugins: [],
};
