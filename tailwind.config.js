const path = require('path');
const generatePalette = require(path.resolve(__dirname, ('dev/tailwind/utils/generate-palette')));

const customPalettes = {
    primary: '#BF2A6B',
    dark: '#434343',
    secondary: '#36578A',
    accent: '#E9E9E9',
    gray:'#7A7878',
    white:'#ffff',
    accentLight:'#F8F9FB'
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
                           accentLight: '#F8F9FB',
                           gray:'#7A7878',
                           dark:'#434343',
                           white:'#ffff',
                        },
                        boxShadow: {
                                'bow-bottom': '0px 1px 0 0 rgba(0, 0, 0, 0.1)'
                            },

                        fontFamily: {
                                'sans': ['Nunito'],
                                'display': ['Nunito'],
                                'mono': ['Nunito'],
                                'body': ['Nunito'],
                                'title': ['Lato']
                        },
                        container:{
                            padding: {
                                DEFAULT: '2rem',
                                sm: '2rem',
                                md: '3rem',
                                lg: '3rem',
                                xl: '2rem',

                            },
                            screens: {
                                'sm': '640px',
                                'md': '768px',
                                'lg': '1024px',
                                'xl': '1280px',
                              },
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
                    '--accentLight':theme('colors.accentLight'),

                  },
                });
              },
        ],
}

