module.exports = {
  content: ['index.html','./src/**/*.{js,jsx,ts,tsx,vue,html}'],
  theme: {
    extend: {
      fontFamily:{
        plexThai: "'IBM Plex Sans Thai Looped',serif",
      },
      colors:{
        greybg: "#EEF2F1" , 
        "yellow-bananna": "#E2C044",
        greyFooter: "#DEDEDE",
        greyForm: "#D3CFC6",
        input: "#ECEAE2",
        blueLink: "#0B07BC",
        formPlaceHolder: "#596475",
      },
      screens:{
        "dmp": "320px",
        "dmm": "375px",
        "dmg": "425px",
      },      
    },
  },
  plugins: [],
}
