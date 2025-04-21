import * as React from 'react';
import { Box, CssBaseline, ThemeProvider, Typography } from '@mui/material';
import theme from '../theme';

export default function Homepage() {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Box sx={{ p: 2 }}>
                <Typography variant="h1" component="h1">
                    Covina Band & Color Guard
                </Typography>
                <Typography variant="body1">
                    Something something something something something something something something something something something something something
                </Typography>
            </Box>
        </ThemeProvider>
    );
}