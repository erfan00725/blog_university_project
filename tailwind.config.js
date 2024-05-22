/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        customFont: ['"Custom Font"', "sans-serif"],
      },
      colors: {
        "main-color": "#000000",
        "secondery-color": "#6600ea",
        "border-secondery-color": "#d3d3d3",
      },
      width: {
        980: "980px",
      },
    },
  },
  plugins: [],
};
