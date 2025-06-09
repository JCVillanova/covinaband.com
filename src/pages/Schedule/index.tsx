import * as React from 'react';
import useState from 'react';
import { Box, Button, CssBaseline, Divider, ThemeProvider, Typography } from '@mui/material';
import ClickableButton from '../../components/Button';
import NavBar from '../../components/NavBar';
import theme from '../../theme';

export default function Schedules() {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <NavBar />
            <Typography variant='h2' component='h2'>
                Schedules
            </Typography>
        </ThemeProvider>
    );
}