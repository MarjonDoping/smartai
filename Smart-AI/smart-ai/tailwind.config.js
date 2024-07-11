const colors = require('tailwindcss/colors')

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "cyan-gradient":
          "linear-gradient(89deg, #00B9ED 34.77%, #AAFDEF 113.38%)",
      },

      colors: {
        myColor: '#4dcb7a',
    },

      fontFamily: {
        jakarta: ["Plus Jakarta Sans", "sans-serif"],
      },
    },

    fontSize: {
      sm: "0.8rem",
      base: "1rem",
      xl: "1.25rem",
      mh1: "3rem",
      mh2: "1.563rem",
      mh3: "1.953rem",
      mh4: "2.25rem",
      mh5: "5.625rem",
      mh6: "9.375rem",
      mh7: "4rem",
    },

    animation: {
      move: "move 4s infinite ease-in-out",
      scroll: "scroll-logos 30s linear infinite",
    },
  },

  plugins: [require("flowbite/plugin")],
};
