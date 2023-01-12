module.exports = {
    content: ['index.html', './src/**/*.{js,jsx,ts,tsx,vue,html}'],
    theme: {
        extend: {
            fontFamily: {
                plexThai: "'IBM Plex Sans Thai Looped',serif",
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
