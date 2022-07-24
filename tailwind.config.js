module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        "zilla" : ["Zilla Slab", "serif"],
        "monts" : ['Montserrat Alternates', "sans-serif"],
        "heading" : [ 'Kanit', "sans-serif"],
      },

      backgroundImage: {
        'hero-pattern': "url('/hero.jpg')",
        'footer-texture': "url('/img/footer-texture.png')",
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
