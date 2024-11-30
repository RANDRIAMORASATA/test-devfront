const path = require('path');
const generatePalette = require(path.resolve(__dirname, ('dev/tailwind/utils/generate-palette')));

const customPalettes = {
        primary: generatePalette('#BF2A6B'),
        secondary:generatePalette('#36578A'),
        accent: generatePalette('#434343'),
};

module.exports = {
        content: [
                "./resources/**/*.blade.php",
                "./resources/**/*.js",
                "./resources/**/*.vue",
                "./resources/scss/**/*.scss",
        ],
        theme: {
                extend: {
                        colors: {
                                primary: customPalettes.primary,
                                accent: customPalettes.accent
                        },

                        fontFamily: {
                                'sans': ['Nunito'],
                                'display': ['Nunito'],
                                'mono': ['Nunito'],
                                'body': ['Nunito'],
                                'title': ['Lato']
                        },
                        container:{
                            center: true,
                            padding: {
                                DEFAULT: '1rem',
                                sm: '2rem',
                            },
                            screens:{
                                sm: '100%',
                                md:'768px',
                                lg:'1684px',
                                xl:'1684px'
                            }
                        }
                },
        },
        plugins: [],
}

