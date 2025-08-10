import * as React from 'react';
import useState from 'react';
import { Box, Button, CssBaseline, Divider, TextField, ThemeProvider, Typography } from '@mui/material';
import ClickableButton from '../../components/Button';
import NavBar from '../../components/NavBar';
import theme from '../../theme';

export default function Contact() {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline 
                sx={{
                    'body': {
                        backgroundColor: theme.palette.red.dark,
                    }
                }}
            />
            <NavBar />
            <Box className='secondary-bg'
                sx={{
                    height: '94vh',
                    padding: '2rem 0',
                }}
            >
                <Box
                    sx={{
                        backgroundColor: theme.palette.lightgray.light,
                        borderRadius: '2rem',
                        margin: 'auto',
                        padding: '2rem',
                        width: '45vw',
                    }}
                >
                    <Typography variant='h2' component='h2' 
                        sx={{
                            margin: '0 0 1.5rem',
                            textAlign: 'center',
                        }}
                    >
                        CONTACT US
                    </Typography>
                    <Divider variant='middle' sx={{ margin: '0 0 1.5rem' }}/>
                    <Typography variant='body2'
                        sx={{
                            margin: '1.5rem 0 0',
                        }}
                    >
                        Name
                    </Typography>
                    <Typography variant='body2'
                        sx={{
                            color: theme.palette.red.main,
                            marginLeft: '0.25rem',
                        }}
                    >
                        *
                    </Typography>
                    <Box
                        sx={{
                            display: 'flex',
                        }}
                    >
                        <TextField label='First' variant='outlined'
                            sx={{
                                flex: '1 1 auto',
                                '& .MuiOutlinedInput-root': {
                                    margin: '0.5rem 0 1.5rem',
                                },
                                '& .MuiInputLabel-root': {
                                    margin: '0.5rem 0 1.5rem',
                                },
                            }}
                        />
                        <TextField label='Last' variant='outlined'
                            sx={{
                                flex: '1 1 auto',
                                '& .MuiOutlinedInput-root': {
                                    margin: '0.5rem 0 1.5rem 1rem',
                                },
                                '& .MuiInputLabel-root': {
                                    margin: '0.5rem 0 1.5rem 1rem',
                                },
                            }}
                        />
                    </Box>
                    <Typography variant='body2'
                        sx={{
                            margin: '0',
                        }}
                    >
                        Email
                    </Typography>
                    <Typography variant='body2'
                        sx={{
                            color: theme.palette.red.main,
                            marginLeft: '0.25rem',
                        }}
                    >
                        *
                    </Typography>
                    <TextField variant='outlined'
                        sx={{
                            width: '100%',
                            '& .MuiOutlinedInput-root': {
                                margin: '0.5rem 0 1.5rem',
                            },
                            '& .MuiInputLabel-root': {
                                margin: '0.5rem 0 1.5rem',
                            },
                        }}
                    />
                    <Typography variant='body1'
                        sx={{
                            margin: '0',
                        }}
                    >
                        Phone
                    </Typography>
                    <TextField variant='outlined'
                        sx={{
                            width: '100%',
                            '& .MuiOutlinedInput-root': {
                                margin: '0.5rem 0 1.5rem',
                            },
                            '& .MuiInputLabel-root': {
                                margin: '0.5rem 0 1.5rem',
                            },
                        }}
                    />
                    <Typography variant='body2'
                        sx={{
                            margin: '0',
                        }}
                    >
                        Message
                    </Typography>
                    <Typography variant='body2'
                        sx={{
                            color: theme.palette.red.main,
                            marginLeft: '0.25rem',
                        }}
                    >
                        *
                    </Typography>
                    <TextField multiline='true' rows='4' variant='outlined'
                        sx={{
                            width: '100%',
                            '& .MuiOutlinedInput-root': {
                                backgroundColor: theme.palette.lightgray.main,
                                margin: '0.5rem 0 1.5rem',
                            },
                            '& .MuiInputLabel-root': {
                                margin: '0.5rem 0 1.5rem',
                            },
                        }}
                    />
                    <ClickableButton buttonSize='medium' buttonText='Submit'
                        sx={{
                            display: 'block',
                            mx: 'auto',
                        }}
                    />
                </Box>
            </Box>
        </ThemeProvider>
    );
}