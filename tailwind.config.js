/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      margin: {
        50: "50px",
      },
      colors: {
        "nav-bg": "#EEE2DF",
        "font-cl": "#31393C",
      },
      fontSize: {
        sm: "0.8rem",
        base: "1rem",
        xl: "1.25rem",
        "2xl": "1.563rem",
        "3xl": "1.953rem",
        "4xl": "2.441rem",
        "5xl": "3.052rem",
      },
      backgroundImage: {
        "hero-pattern": 'url("./Assest/Sprinkle.svg")',
      },

      fontFamily: {
        rubick: ["Rubik Iso", "cursive"],
        dancingScript: ["Dancing Script", "cursive"],
        mono: ["Roboto Mono", "monospace"],
      },
    },
  },
  plugins: [],
};
