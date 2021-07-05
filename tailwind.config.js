module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        body: ["Poppins"],
        headings: ["Epilogue"],
        body2: ["IBM Plex Sans"],
        body3: ["Inter"],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
