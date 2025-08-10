import * as React from 'react';
import { useState } from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { Box, Button, CssBaseline } from '@mui/material';
import theme from '../theme';

function ContentList() {
    return (
        <Box
            sx={{
                borderBottom: '2px solid',
                borderColor: theme.palette.red.main,
                display: 'flex',
                height: '6vh',
                justifyContent: 'space-between',
            }}
        >
            <List // Left hand side of the navbar---band logo and title
                sx={{
                    display: 'flex',
                }}
            >
                <ListItem className="navbar-item">
                    <Box component='img'
                        sx={{
                            flex: '0 0 auto',
                            marginLeft: '1rem',
                            marginRight: '0.5rem',
                            width: '2.5rem',
                        }}
                        alt="Covina High School's logo"
                        src="/assets/images/icons/covina-logo.png"
                    />
                </ListItem>
                <ListItem className="navbar-item">
                    <ListItemButton component='a' href='/'
                        sx={{
                            flex: '0 0 auto',
                            fontWeight: 'bold',
                            whiteSpace: 'nowrap',
                            '&:hover': {
                                backgroundColor: 'transparent',
                            },
                        }}
                    >
                        <ListItemText primary='COVINA ' 
                            sx={{ margin: '0px' }}
                            slotProps={{
                                primary: { sx: { color: theme.palette.text.secondary, margin: '0px' } }
                            }}
                        />
                        <ListItemText primary='BAND&GUARD' sx={{ margin: '0' }}
                            slotProps={{
                                primary: { sx: { margin: '0 0 0 0.5rem' } }
                            }}
                        />
                    </ListItemButton>
                </ListItem>
            </List>
            <Box
                sx={{
                    width: '50rem',
                }}
            />
            <List // Right hand side of the navbar---various links
                sx={{
                    display: 'flex',
                    flex: '1 1'
                }}
            >
                <ListItem className='navbar-item'
                    sx={{
                        overflow: 'hidden',
                        width: '40em',
                    }}
                >
                    <ListItemButton component='a' href='/Shows'
                        sx={{
                            backgroundColor: 'transparent',
                            inset: 0,
                            position: 'absolute',
                            textAlign: 'center',
                            transition: 'background-color 0.4s ease',
                            '&:hover': { backgroundColor: '#6c6c6c' },
                        }}
                    >
                        <ListItemText primary='Shows'/>
                    </ListItemButton>
                </ListItem>
                <ListItem className='navbar-item'
                    sx={{
                        overflow: 'hidden',
                    }}
                >
                    <ListItemButton component='a' href='/Ensembles'
                        sx={{
                            backgroundColor: 'transparent',
                            inset: 0,
                            position: 'absolute',
                            textAlign: 'center',
                            transition: 'background-color 0.4s ease',
                            '&:hover': { backgroundColor: '#6c6c6c' },
                        }}
                    >
                        <ListItemText primary='Ensembles'
                            sx={{
                                
                            }}
                        />
                    </ListItemButton>
                </ListItem>
                <ListItem className='navbar-item'
                    sx={{
                        overflow: 'hidden',
                    }}
                >
                    <ListItemButton component='a' href='/Staff'
                        sx={{
                            backgroundColor: 'transparent',
                            inset: 0,
                            position: 'absolute',
                            textAlign: 'center',
                            transition: 'background-color 0.4s ease',
                            '&:hover': { backgroundColor: '#6c6c6c' },
                        }}
                    >
                        <ListItemText primary='Staff'
                            sx={{
                                
                            }}
                        />
                    </ListItemButton>
                </ListItem>
                <ListItem className='navbar-item'
                    sx={{
                        overflow: 'hidden',
                    }}
                >
                    <ListItemButton component='a' href='/Schedule'
                        sx={{
                            backgroundColor: 'transparent',
                            inset: 0,
                            position: 'absolute',
                            textAlign: 'center',
                            transition: 'background-color 0.4s ease',
                            '&:hover': { backgroundColor: '#6c6c6c' },
                        }}
                    >
                        <ListItemText primary='Schedule'
                            sx={{
                                
                            }}
                        />
                    </ListItemButton>
                </ListItem>
                <ListItem className='navbar-item'
                    sx={{
                        overflow: 'hidden',
                    }}
                >
                    <ListItemButton component='a' href='/Contact'
                        sx={{
                            backgroundColor: 'transparent',
                            inset: 0,
                            position: 'absolute',
                            textAlign: 'center',
                            transition: 'background-color 0.4s ease',
                            '&:hover': { backgroundColor: '#6c6c6c' },
                        }}
                    >
                        <ListItemText primary='Contact'
                            sx={{
                                
                            }}
                        />
                    </ListItemButton>
                </ListItem>
            </List>
        </Box>  
    );
}

export default function NavBar() {
    return (
        <ContentList></ContentList>
    );
}