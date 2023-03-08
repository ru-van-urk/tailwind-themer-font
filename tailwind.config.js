const { fontFamily } = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // Here it works
      // fontFamily: {
      //   ...fontFamily,
      //   sans: "var(--font-inter)",
      // },
    },
  },
  plugins: [
    require("tailwindcss-themer")({
      defaultTheme: {
        // put the default values of any config you want themed
        // just as if you were to extend tailwind's theme like normal https://tailwindcss.com/docs/theme#extending-the-default-theme
        extend: {
          // colors is used here for demonstration purposes
          colors: {
            primary: "red",
          },
        },
      },
      themes: [
        {
          // name your theme anything that could be a valid css selector
          // remember what you named your theme because you will use it as a class to enable the theme
          name: "my-theme",
          // put any overrides your theme has here
          // just as if you were to extend tailwind's theme like normal https://tailwindcss.com/docs/theme#extending-the-default-theme
          extend: {
            colors: {
              primary: "blue",
            },
            // Does not work, the variables gets messed up
            fontFamily: {
              ...fontFamily,
              sans: "var(--font-inter)",
            },
          },
        },
      ],
    }),
  ],
};
