/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        lg: "1440px",
      },
      fontFamily: {
        sans: ["Manrope", "sans-serif"],
      },
      colors: {
        "raw-sienna": "#D87D4A",
        "hit-pink": "#FBAF85",
        "cod-gray": "#101010",
        seashell: "#F1F1F1",
        alabaster: "#FAFAFA",
        alto: "#CFCFCF",
        "persian-red": "#CD2C2C",
      },
      backgroundImage: {
        "main-hero-sm": "url('/public/assets/home/mobile/image-header.jpg')",
        "main-hero-md": "url('/public/assets/home/tablet/image-header.jpg')",
        "main-hero-lg": "url('/public/assets/home/desktop/image-hero.jpg')",
      },
    },
  },
  plugins: [],
};
