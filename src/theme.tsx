import { createTheme } from '@mui/material/styles';
import "@fontsource/montserrat/800.css";
import "@fontsource/montserrat/600.css";
import "@fontsource/montserrat/400.css";
import "@fontsource/montserrat";

const theme = createTheme({
    components: {
        MuiCssBaseline: {
            styleOverrides: {
                '*, ::before, ::after': {
                    boxSizing: 'border-box',
                },
                '*': {
                    margin: 0,
                },
                'body': {
                    backgroundColor: '#585b5c',
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
            },
        },
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
        fontFamily,
        fontSize: '5rem',
        lineHeight: 1.2,
    },
    h2: {
        color: '#fcfcfc',
        fontFamily,
        fontSize: '3rem',
        fontWeight: 600,
        lineHeight: 1.2,
    },
    body1: {
        color: '#fcfcfc',
        fontFamily,
        fontSize: '1.25rem',
    },
}

export default theme;