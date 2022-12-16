/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    ,
  ],
  theme: {
    screens: {
      xs: "475px",
      sm: "576px",
      md: "768px",
      lg: "1124px",
      // xl: "1280px",
      // "2xl": "1536px",
    },
    extend: {
      colors: {
        dark: "#292929",
        grey: "#333333",
        grey2: "#616161",
        overlay: "#D9D9D9",
        text_fade: "rgba(0, 0, 0, 0.57)",
      },
    },
    fontFamily: {
      stix: ['"STIX Two Text"', "serif"],
      clashDisplay: ["'Clash Display'", "sans-serif"],
      satoshi: ['"Satoshi"', "sans-serif"],
    },
  },
  plugins: [],
};
