/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      textShadow: {
        "black-glow": "0 0 10px #333, 0 0 10px #333, 0 0 10px #333",
      },
      fontFamily: {
        real: ["Rancho", "cursive"],
        Raleway: ["Raleway", "sans-serif"]
      },
    },
  },
  plugins: [require("daisyui"), require("tailwindcss-textshadow")],
};
