import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    components: {
        MuiCssBaseline: {
            styleOverrides: {
                '*, ::before, :: after': {
                    boxSizing: 'border-box',
                },
                '*': {
                    margin: 0,
                    color: 'red',
                },
                'body': {
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
                }
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
});

export default theme;