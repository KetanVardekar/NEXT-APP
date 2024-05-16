import React from 'react';
import { Drawer, List, ListItem, ListItemText } from '@mui/material';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Divider from '@mui/material/Divider';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import { mainListItems } from './ListItems';
import icon from '../../public/B2-LogoT.png'
import Image from 'next/image';
const Sidebar = ({ open, toggleDrawer }:any) => {
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
          {/* <Image  src={icon} alt="Icon" width={10} height={10} /> */}
          {/* Treatment Tracker™ */}
        
            <IconButton onClick={toggleDrawer}>
              <ChevronLeftIcon />
            </IconButton>
          </Toolbar>
          <Divider />
          <List component="nav">
            {mainListItems}
            
          </List>
        </Drawer>
  );
};

export default Sidebar;
