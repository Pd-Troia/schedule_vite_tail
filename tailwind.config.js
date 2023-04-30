module.exports = {
    content: ['index.html', './src/**/*.{js,jsx,ts,tsx,vue,html}'],
    theme: {
        extend: {
            fontFamily: {
                plexThai: "IBM Plex Sans Thai Looped,serif",
            },
            colors: {
                greybg: '#EEF2F1',
                'yellow-bananna': '#E7D702',
                greyFooter: '#DEDEDE',
                greyForm: '#D3CFC6',
                input: '#ECEAE2',
                blueLink: '#0B07BC',
                lightBlue: '#596475',
                greenSucess: '#5DB53F',
                redFail: '#B31515',
                brownStrong: '#230C0F',
                greyLogin: '#DFE0E2',
                whiteIcon: '#ECEAE2',
                blackIcon: '#1C1B1F',
                'black-90': '#0C0101',
                cianTheme: '#61A0AF',
                yellowBeige: '#CECE25',
                button: "#D9D9D9",
                card: "#BEBEBE",
                label: "#545454",
                tittle: "#262626",
                panelPrimary: "#D9D9D9",
                panelSecondary: '#A6A6A6',
                menuColor: "#0C0C0C",
                tittleTheme: "#282828",
                inputForm: "#B2B2B2",
                cardButton: "#D9D9D9"

                
            },
            screens: {
                dmp: '320px',
                dmm: '375px',
                dmg: '425px',
            },
        },
    },
    plugins: [],
}
