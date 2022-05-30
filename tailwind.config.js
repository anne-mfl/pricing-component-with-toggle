module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      'montserrat': ['Montserrat', 'sans-serif']
    },
    extend: {
      colors: {
        veryLightGrayishBlue: 'hsl(240, 78%, 98%)',
        lightGrayishBlue: 'hsl(234, 14%, 74%)',
        grayishBlue: 'hsl(233, 13%, 49%)',
        darkGrayishBlue: 'hsl(232, 13%, 33%)',
        themeBlue: 'hsl(237, 63%, 64%)',
        blueGradient: 'linear-gradient(90deg, hsl(236, 72%, 79%) 0%, hsl(237, 63%, 64%) 100%)'
      },
      backgroundImage: {
        // 'bgTop': 'url("./src/images/bg-top.svg")',
        // 'bgBottom': 'url("./src/images/bg-bottom.svg")',
        'blueGradient': 'linear-gradient(90deg, hsl(236, 72%, 79%) 0%, hsl(237, 63%, 64%) 100%)'
      },
      backgroundPosition: {
        mobileTop: 'right -12rem top -3rem'
      }
    },
  },
  plugins: [],
}
