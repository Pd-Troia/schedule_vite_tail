module.exports = {
  content: ['index.html','./src/**/*.{js,jsx,ts,tsx,vue,html}'],
  theme: {
    extend: {
      fontFamily:{
        plexThai: "'IBM Plex Sans Thai Looped',serif",
      },
      colors:{
        greybg: "#EEF2F1" , 'amarelo-macaco-tranzante': "#E2C044"        
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
