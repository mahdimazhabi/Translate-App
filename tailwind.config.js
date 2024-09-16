/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        custom: {
          dark: "#040711",
          mediumDark: "#394150",
          lighterDark: "#4D5562",
          lightGray: "#CDD5E0",
          veryLightGray: "#F9FAFB",
          blue: "#3662E3",
          lightBlue: "#7CA9F3",
          semiDark1: "#212936cc",
          semiDark2: "#121826cc",
        },
      },
    },
  },
  plugins: [],
};
