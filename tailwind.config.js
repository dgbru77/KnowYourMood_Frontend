/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: "#0f0f0f",
        accent: "#ff4b91",
        glow: "#7d2ae8",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
         pacifico: ["Pacifico", "cursive"],
             signature: ["Great Vibes", "cursive"],
      },
    },
  },
  plugins: [],
};
