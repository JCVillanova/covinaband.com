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
                border: '1px solid white',
                display: 'flex',
                justifyContent: 'space-between',
            }}
        >
            <List // Left hand side of the navbar---band logo and title
                sx={{
                    display: 'flex',
                }}
            >
                <ListItem className="navbar-item">
                    <ListItemButton>
                        <ListItemText primary='Image (Placeholder)' />
                    </ListItemButton>
                </ListItem>
                <ListItem className="navbar-item">
                    <ListItemButton component='a' href='/'>
                        <ListItemText primary='COVINA BAND&GUARD' />
                    </ListItemButton>
                </ListItem>
            </List>
            <List // Right hand side of the navbar---various links
                sx={{
                    display: 'flex',
                }}
            >
                <ListItem className="navbar-item">
                    <ListItemButton component='a' href='/Shows'>
                        <ListItemText primary='Shows' />
                    </ListItemButton>
                </ListItem>
                <ListItem className="navbar-item">
                    <ListItemButton component='a' href='/Ensembles'>
                        <ListItemText primary='Ensembles' />
                    </ListItemButton>
                </ListItem>
                <ListItem className="navbar-item">
                    <ListItemButton component='a' href='/Staff'>
                        <ListItemText primary='Staff' />
                    </ListItemButton>
                </ListItem>
                <ListItem className="navbar-item">
                    <ListItemButton component='a' href='/Schedule'>
                        <ListItemText primary='Schedule' />
                    </ListItemButton>
                </ListItem>
                <ListItem className="navbar-item">
                    <ListItemButton component='a' href='/Contact'>
                        <ListItemText primary='Contact' />
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