/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
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
        "main-hero-sm": "url('/assets/home/mobile/image-header.jpg')",
        "main-hero-md": "url('/assets/home/tablet/image-header.jpg')",
        "main-hero-lg": "url('/assets/home/desktop/image-hero.jpg')",
      },
    },
  },
  plugins: [],
};
