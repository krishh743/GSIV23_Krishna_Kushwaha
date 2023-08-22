import React from 'react';
import List from '@mui/material/List';
import {mainListItems} from '../../pages/list-item/ListItems';
import Divider from '@mui/material/Divider';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import Drawer from '@mui/material/Drawer';

const Sidebar = ({open, toggleDrawer}) => {
    return (
        <Drawer variant="permanent" open={open}>
            <Toolbar
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'flex-end',
                    px: [1],
                }}
            >
                {/* <IconButton onClick={toggleDrawer}>
                    <ChevronLeftIcon />
                </IconButton> */}
            </Toolbar>
            <Divider />
            <List component="nav">
                {mainListItems}
                <Divider sx={{my: 1}} />
            </List>
        </Drawer>
    );
};

export default Sidebar;
