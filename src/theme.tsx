import { createTheme } from '@mui/material/styles';
import "@fontsource/montserrat/800.css";
import "@fontsource/montserrat/600.css";
import "@fontsource/montserrat/400.css";
import "@fontsource/montserrat";

const theme = createTheme({
    components: {
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
                    '&:hover': {
                        backgroundColor: '#6c6c6c',
                    },
                    '&:hover > .button-anim': {
                        animation: 'diagonal-anim-in 0.4s both',
                    },
                    '> .button-anim': {
                        animation: 'diagonal-anim-out 0.4s both',
                    },
                },
                sizeMedium: {
                    borderColor: '#fcfcfc',
                    color: '#fcfcfc',
                },
                sizeSmall: {
                    borderColor: '#fcfcfc',
                    color: '#fcfcfc',
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
                        right: '-65%',
                    },
                },
                '@keyframes diagonal-anim-out': {
                    '0%': {
                        right: '-65%'
                    },
                    '100%': {
                        right: '-200%',
                    }
                }
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