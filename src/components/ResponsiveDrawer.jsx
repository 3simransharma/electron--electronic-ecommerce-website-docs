import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

import TreeView from '@mui/lab/TreeView';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import TreeItem from '@mui/lab/TreeItem';

import Home from "../pages/Home"
import About from "../pages/About.jsx"
import Contact from "../pages/Contact.jsx"
import Authentication from '../pages/Authentication';
import OrderAnItem from "../pages/OrderAnItem";
import CartAndWishlist from '../pages/CartAndWishlist';

const drawerWidth = 240;

function ResponsiveDrawer() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const [activeItem, setActiveItem] = useState('home'); // State to track the active item

  const handleItemClick = (item) => {
    setActiveItem(item);
    setMobileOpen(false); // Close the sidebar on item click (optional)
  };

  const drawer = (
    <div>
      <img className='m-4 ml-5' src = "https://i.ibb.co/QP3gH5r/logo.png" alt = "logo" style = {{height:"25px",width:"auto"}}/>

      <Divider />

      <List>
        <ListItem disablePadding>
          <ListItemButton component={Link} to="/" onClick={() => handleItemClick('home')}>
            <ListItemIcon>
            </ListItemIcon>
            <ListItemText primary="About the Project" />
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton component={Link} to="/authentication" onClick={() => handleItemClick('authentication')}>
            <ListItemIcon>
            </ListItemIcon>
            <ListItemText primary="Authentication" />
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton component={Link} to="/cartandwishlist" onClick={() => handleItemClick('cartandwishlist')}>
            <ListItemIcon>
            </ListItemIcon>
            <ListItemText primary="When you click on any one Product" />
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton component={Link} to="/orderanitem" onClick={() => handleItemClick('orderanitem')}>
            <ListItemIcon>
            </ListItemIcon>
            <ListItemText primary="Order an Item" />
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton component={Link} to="/contact" onClick={() => handleItemClick('contact')}>
            <ListItemIcon>
            </ListItemIcon>
            <ListItemText primary="Contact" />
          </ListItemButton>
        </ListItem>
      </List>
      
      <Divider />
    </div>
  );

  const container = window.document.body;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
        style = {{padding:"5px 0",margin:"0px 0 10px 0"}}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Electron Documentation
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
        <Toolbar />
        {activeItem === 'home' && <Home />}
        {activeItem === 'about' && <About />}
        {activeItem === 'contact' && <Contact />}
        {activeItem === 'authentication' && <Authentication />}
        {activeItem === 'orderanitem' && <OrderAnItem />}
        {activeItem === 'cartandwishlist' && <CartAndWishlist />}
      </Box>
    </Box>
  );
}

export default ResponsiveDrawer;
