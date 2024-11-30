const path = require('path');
const generatePalette = require(path.resolve(__dirname, ('dev/tailwind/utils/generate-palette')));

const customPalettes = {
    primary: '#BF2A6B',
    dark: '#434343',
    secondary: '#36578A',
    accent: '#E9E9E9',
    gray:'#7A7878',
    white:'#ffff',
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
                           primary: '#BF2A6B',
                           secondary:'#36578A',
                           accent: '#E9E9E9',
                           gray:'#7A7878',
                           dark:'#434343',
                           white:'#ffff',
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
        plugins: [
            function ({ addBase, theme }) {
                addBase({
                  ':root': {
                    '--primary': theme('colors.primary'),
                    '--accent': theme('colors.accent'),
                    '--secondary': theme('colors.secondary'),
                    '--dark': theme('colors.dark'),
                    '--gray':theme('colors.gray'),
                    '--white':theme('colors.white'),

                  },
                });
              },
        ],
}

