import { createTheme } from '@mui/material/styles';
import "@fontsource/montserrat/800.css";
import "@fontsource/montserrat/600.css";
import "@fontsource/montserrat/400.css";
import "@fontsource/montserrat";
import { loadEnvFile } from 'process';

const theme = createTheme({
    components: {
        MuiButtonBase: {
            defaultProps: {
                disableRipple: true,
                disableTouchRipple: true,
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
                    '&:hover > .button-anim': {
                        animation: 'diagonal-anim-in 0.4s both',
                    },
                    '.button-click-anim.clicked': {
                        animation: 'diagonal-anim-expand 0.4s both',
                    },
                    '> .button-anim': {
                        animation: 'diagonal-anim-out 0.4s both',
                    },
                },
                sizeMedium: {
                    borderColor: '#fcfcfc',
                    borderRadius: '0.8rem',
                    color: '#fcfcfc',
                    fontSize: '1.5rem',
                    overflow: 'hidden',
                    padding: '1rem 2rem',
                    '&:hover > .button-anim': {
                        animation: 'diagonal-anim-in 0.4s both',
                    },
                    '.button-click-anim.clicked': {
                        animation: 'diagonal-anim-expand 0.4s both',
                    },
                    '> .button-anim': {
                        animation: 'diagonal-anim-out 0.4s both',
                    },
                },
                sizeSmall: {
                    borderColor: '#fcfcfc',
                    borderRadius: '0.5rem',
                    color: '#fcfcfc',
                    fontSize: '1rem',
                    overflow: 'hidden',
                    padding: '0.75rem 1.5rem',
                    '&:hover > .button-anim': {
                        animation: 'diagonal-anim-in 0.4s both',
                    },
                    '.button-click-anim.clicked': {
                        animation: 'diagonal-anim-expand 0.4s both',
                    },
                    '> .button-anim': {
                        animation: 'diagonal-anim-out 0.4s both',
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
                '@keyframes diagonal-anim-in': {
                    '0%': {},
                    '100%': {
                        right: '-55%',
                    },
                },
                '@keyframes diagonal-anim-out': {
                    '0%': {
                        right: '-55%'
                    },
                    '100%': {
                        right: '-190%',
                    }
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
        MuiTypography: {
            styleOverrides: {
            }
        }
    },
    palette: {
        primary: {
            main: '#303030',
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