import { createTheme } from '@mui/material/styles';
import "@fontsource/montserrat/800.css";
import "@fontsource/montserrat/600.css";
import "@fontsource/montserrat/400.css";
import "@fontsource/montserrat";
import { PaletteOptions } from '@mui/material/styles';

const theme = createTheme({
    components: {
        MuiButtonBase: {
            defaultProps: {
                disableRipple: true,
                disableTouchRipple: true,
            },
            styleOverrides: {
                root: {
                    '&:hover': {
                        background: 'none',
                    },
                },
            },
        },
        MuiButton: {
            defaultProps: {
                disableElevation: true,
            },
            styleOverrides: {
                sizeLarge: {
                    borderColor: '#fcfcfc',
                    borderRadius: '1rem',
                    color: '#fcfcfc',
                    fontSize: '2rem',
                    overflow: 'hidden',
                    padding: '1.5rem 3rem',
                    '&:hover > .button-hover-anim': {
                        animation: 'fade-anim-in 0.4s both',
                    },
                    '.button-click-anim.clicked': {
                        animation: 'diagonal-anim-expand 0.4s both',
                    },
                    '> .button-hover-anim': {
                        animation: 'fade-anim-out 0.4s both',
                    },
                },
                sizeMedium: {
                    borderColor: '#fcfcfc',
                    borderRadius: '0.8rem',
                    color: '#fcfcfc',
                    fontSize: '1.5rem',
                    overflow: 'hidden',
                    padding: '1rem 2rem',
                    '&:hover > .button-hover-anim': {
                        animation: 'fade-anim-in 0.4s both',
                    },
                    '.button-click-anim.clicked': {
                        animation: 'diagonal-anim-expand 0.4s both',
                    },
                    '> .button-hover-anim': {
                        animation: 'fade-anim-out 0.4s both',
                    },
                },
                sizeSmall: {
                    borderColor: '#fcfcfc',
                    borderRadius: '0.5rem',
                    color: '#fcfcfc',
                    fontSize: '1rem',
                    overflow: 'hidden',
                    padding: '0.75rem 1.5rem',
                    '&:hover > .button-hover-anim': {
                        animation: 'fade-anim-in 0.4s both',
                    },
                    '.button-click-anim.clicked': {
                        animation: 'diagonal-anim-expand 0.4s both',
                    },
                    '> .button-hover-anim': {
                        animation: 'fade-anim-out 0.4s both',
                    },
                },
                endIcon: {

                },
            }
        },
        MuiCssBaseline: {
            styleOverrides: {
                '*, ::before, ::after': {
                    boxSizing: 'border-box',
                },
                '*': {
                    margin: 0,
                },
                'body': {
                    backgroundColor: '#26282e',
                    lineHeight: 1.5,
                    margin: 0,
                    '-webkit-font-smoothing': 'antialiased',
                },
                '@media (prefers-reduced-motion: no-preference)': {
                    html: {
                        scrollBehavior: 'smooth',
                    },
                },
                'img, picture, video, canvas, svg': {
                    display: 'block',
                    maxWidth: '100%',
                },
                'p, h1, h2, h3, h4, h5, h6': {
                    overflowWrap: 'break-word',
                },
                '@keyframes fade-anim-in': {
                    '0%': {
                        opacity: 0,
                    },
                    '100%': {
                        opacity: 100,
                    },
                },
                '@keyframes fade-anim-out': {
                    '0%': {
                        opacity: 100,
                    },
                    '100%': {
                        opacity: 0,
                    }
                },
                '@keyframes background-anim-in': {
                    '0%': {
                        backgroundColor: 'transparent',
                    },
                    '100%': {
                        backgroundColor: '#6c6c6c',
                    },
                },
                '@keyframes background-anim-out': {
                    '0%': {
                        backgroundColor: '#6c6c6c',
                    },
                    '100%': {
                        backgroundColor: 'transparent',
                    },
                },
                '@keyframes diagonal-anim-expand': {
                    '0%': {
                        right: '50%',
                        width: '0%',
                    },
                    '25%': {
                        right: '-50%',
                        width: '200%',
                    },
                    '50%': {
                        right: '-50%',
                        width: '200%',
                    },
                    '100%': {
                        right: '50%',
                        width: '0%',
                    }
                },
            },
        },
        MuiDivider: {
            styleOverrides: {
                root: {
                    backgroundColor: '#fcfcfc',
                },
            },
        },
        MuiList: {
            styleOverrides: {
                root: {
                    padding: 0,
                },
            }
        },
        MuiListItemButton: {
            styleOverrides: {
                root: {
                    padding: 0,
                    '&:hover .button-hover-anim': {
                        animation: 'background-anim-in 0.4s both',
                    },
                    '.button-hover-anim': {
                        animation: 'background-anim-out 0.4s both',
                    },
                },
            }
        },
        MuiListItem: {
            styleOverrides: {
                root: {
                    padding: 0,
                    '&hover': {
                        backgroundColor: 'transparent',
                    },
                },
            }
        },
        MuiTypography: {
            styleOverrides: {
            }
        },
    },
    palette: {
        text: {
            primary: '#FCFCFC',
            secondary: '#80263F'
        },
        secondary: {
            main: '#B0B0B0',
        },
    },
    typography: {
        fontFamily: ['Montserrat', 'sans-serif'].join(','),
    },
});

const fontFamily = theme.typography.fontFamily;

theme.typography = {
    ...theme.typography,

    h1: {
        color: '#80263F',
        fontFamily,
        fontSize: '4rem',
        lineHeight: 1,
        margin: '1.5rem 1rem',
    },
    h2: {
        color: '#fcfcfc',
        fontFamily,
        fontSize: '3rem',
        fontWeight: 400,
        letterSpacing: 8,
        lineHeight: 1,
        margin: '1.5rem 1rem',
    },
    body1: {
        color: '#fcfcfc',
        fontFamily,
        fontSize: '1.25rem',
        lineHeight: 1.5,
        margin: '1.5rem 1rem',
    },
    button: {
        fontFamily,
        fontSize: '1.25rem',
        lineHeight: 1,
        margin: '0 1rem',
    },
}

export default theme;