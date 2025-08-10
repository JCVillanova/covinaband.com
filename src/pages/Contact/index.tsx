import * as React from 'react';
import useState from 'react';
import { Box, Button, CssBaseline, Divider, TextField, ThemeProvider, Typography } from '@mui/material';
import ClickableButton from '../../components/Button';
import NavBar from '../../components/NavBar';
import theme from '../../theme';

export default function Contact() {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <NavBar />
            <Box
                sx={{
                    margin: 'auto',
                    width: '45vw',
                }}
            >
                <Typography variant='h2' component='h2' sx={{ textAlign: 'center' }}>
                    CONTACT US
                </Typography>
                <Divider variant='middle'/>
                <Typography variant='body1'
                    sx={{
                        marginBottom: '0',
                    }}
                >
                    Name
                </Typography>
                <TextField label='First' variant='filled'/>
                <TextField label='Last' variant='filled'/>
                <Typography variant='body1'
                    sx={{
                        marginBottom: '0',
                        marginTop: '0',
                    }}
                >
                    Email
                </Typography>
                <TextField variant='outlined'/>
                <Typography variant='body1'
                    sx={{
                        marginBottom: '0',
                        marginTop: '0',
                    }}
                >
                    Phone
                </Typography>
                <TextField variant='outlined'/>
                <Typography variant='body1'
                    sx={{
                        marginBottom: '0',
                        marginTop: '0',
                    }}
                >
                    Message
                </Typography>
                <TextField multiline='true' rows='4' variant='outlined'
                    sx={{
                        width: '100%',
                        '& .MuiOutlinedInput-root': {
                            backgroundColor: theme.palette.secondary.main,
                        },
                    }}
                />
                <ClickableButton buttonSize='medium' buttonText='Submit'
                    sx={{
                    }}
                />
            </Box>
        </ThemeProvider>
    );
}