import * as React from 'react';
import useState from 'react';
import { Box, Button, CssBaseline, Divider, ThemeProvider, Typography } from '@mui/material';
import ClickableButton from '../components/Button';
import NavBar from '../components/NavBar';
import theme from '../theme';

export default function Homepage() {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <NavBar />
            <Box
                sx={{
                    margin: '1.5rem 1rem',
                    width: '45vw',
                }}
            >
                <Typography 
                    variant="h1"
                    component="h1"
                >
                    COVINA HIGH SCHOOL
                </Typography>
                <Typography variant="h2" component="h2">
                    BAND & GUARD
                </Typography>
                <Divider variant='middle'/>
                <Typography variant="body1">
                    Lorem ipsum odor amet, consectetuer adipiscing elit. Vel ornare parturient feugiat diam molestie hac. Auctor curae mi platea purus hendrerit. Mus lectus urna tellus auctor quisque egestas fames efficitur. Molestie potenti convallis, rutrum ante semper diam ultricies montes.
                </Typography>
                <ClickableButton buttonSize='large' buttonText='Join now' />
            </Box>
        </ThemeProvider>
    );
}