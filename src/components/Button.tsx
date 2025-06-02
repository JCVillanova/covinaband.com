import * as React from 'react';
import { useState } from 'react';
import { Box, Button, CssBaseline, Divider, ThemeProvider, Typography } from '@mui/material';
import theme from '../theme';

function ClickableButton() {
    const [clicked, setClicked] = useState(false);

    const handleClick = () => {
        setClicked(false);
        setTimeout(() => {
            setClicked(true);
            setTimeout(() => setClicked(false), 400);
        }, 10);
    };

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
                <Button variant='outlined' size='large'
                    onClick={handleClick}
                >
                    <Box
                        className='button-anim'
                        sx={{
                            backgroundColor: '#6c6c6c',
                            bottom: '-200%',
                            height: '500%',
                            position: 'absolute',
                            right: '85%',
                            width: '200%',
                            '-webkit-transform': 'skewY(-45deg)',
                        }}
                    ></Box>
                    <Box
                        className={`button-click-anim ${clicked ? 'clicked' : ''}`}
                        sx={{
                            backgroundColor: '#8c8c8c',
                            bottom: '-200%',
                            height: '500%',
                            position: 'absolute',
                            right: '50%',
                            width: '0%',
                            '-webkit-transform': 'skewX(-45deg)',
                        }}
                    ></Box>
                    <Typography
                        className='button-text'
                        sx={{
                            fontSize: '2rem',
                            lineHeight: 1,
                            margin: '0 1rem',
                            zIndex: 1,
                        }}
                    >Join Now</Typography>
                </Button>
        </ThemeProvider>
    );
}

export default ClickableButton;