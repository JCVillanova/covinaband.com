import * as React from 'react';
import { Box, CssBaseline, ThemeProvider, Typography } from '@mui/material';
import theme from '../theme';

export default function Homepage() {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Box sx={{ p: 2 }}>
                <Typography 
                    variant="h1"
                    component="h1"
                    sx={{
                        color: '#80263F',
                    }}
                >
                    Covina High School
                </Typography>
                <Typography variant="h2" component="h2">
                    Band & Guard
                </Typography>
                <Typography variant="body1">
                    Lorem ipsum odor amet, consectetuer adipiscing elit. Vel ornare parturient feugiat diam molestie hac. Auctor curae mi platea purus hendrerit. Mus lectus urna tellus auctor quisque egestas fames efficitur. Molestie potenti convallis, rutrum ante semper diam ultricies montes.
                </Typography>
            </Box>
        </ThemeProvider>
    );
}