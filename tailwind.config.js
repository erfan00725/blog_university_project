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
        "alt-color": "#ffffff",
        "border-secondery-color": "#d3d3d3",
        "input-label": "#767676",
      },
      width: {
        980: "980px",
      },
      flex: {
        2: "2 2 0%",
      },
    },
  },
  plugins: [],
};
