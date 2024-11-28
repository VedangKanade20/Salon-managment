/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: "Oswald, ui-serif", // Adds a new `font-display` class
      },
    },
    // colors: {
    //   darkBackground: "#1a202c", // Dark mode background color
    //   lightBackground: "#f0f4f8", // Light mode background color
    // },
  },
  // eslint-disable-next-line no-undef
  plugins: [require("daisyui")],
};
