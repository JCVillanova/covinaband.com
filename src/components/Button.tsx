import * as React from 'react';
import { useState } from 'react';
import { Box, Button, CssBaseline, Divider, ThemeProvider, Typography } from '@mui/material';
import theme from '../theme';

function ClickableButton({ buttonSize, buttonText }) {
    const [clicked, setClicked] = useState(false);

    const handleClick = () => {
        // Immediately reset clicked state to false: this removes the clicked class from the animated component, allowing it to be added
        // again on a rapid subsequent click (retriggering the animation in case it hasn't finished the first time). This is a rather
        // unnecessary edgecase, but it's still nice to have
        setClicked(false);
        setTimeout(() => {
            setClicked(true);
            setTimeout(() => setClicked(false), 400); // Set clicked back to false after the animation plays
        }, 10);
    };

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
                <Button 
                    variant='outlined' 
                    size={ buttonSize }
                    onClick={handleClick}
                    sx={{
                        position: 'relative',
                    }}
                >
                    <Box // Lighter box that fades in on hover (and fades back out)
                        className='button-hover-anim'
                        sx={{
                            backgroundColor: '#6c6c6c',
                            height: '120%',
                            inset: 0,
                            opacity: 0,
                            position: 'absolute',
                            width: '120%',
                        }}
                    ></Box>
                    <Box // Another diagonal box that expands from center of button on click (then shrinks)
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
                            // Change the font size of text based on button's size
                            fontSize: buttonSize == 'large' ? '2rem' : buttonSize == 'medium' ? '1.5rem' : '1rem',
                            lineHeight: 1,
                            margin: '0 1rem',
                            zIndex: 1,
                        }}
                    >{ buttonText }</Typography>
                </Button>
        </ThemeProvider>
    );
}

export default ClickableButton;