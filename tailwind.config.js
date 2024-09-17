/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit", // Add this line
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      keyframes: {
        "shine-pulse": {
          "0%": {
            "background-position": "0% 0%",
          },
          "50%": {
            "background-position": "100% 100%",
          },
          to: {
            "background-position": "0% 0%",
          },
        },
      },
    },
    colors: {
      primary: "#4f46e5", // Indigo color for hover
      background: "#18181b", // Your dark background
    },
  },
  plugins: [],
};
