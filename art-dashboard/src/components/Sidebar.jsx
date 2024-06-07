import React from 'react';
import { Box, List, ListItem, ListItemIcon, ListItemText, Typography, Divider } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import MailIcon from '@mui/icons-material/Mail';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SettingsIcon from '@mui/icons-material/Settings';
// import LogoutIcon from '@mui/icons-material/Logout';


const Sidebar = () => {
  return (
    <Box
      sx={{
        width: 240,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: 240,
          boxSizing: 'border-box',
        },
      }}
    >
      <Box sx={{ display: 'flex', alignItems: 'center', p: 2 }}>
      <Typography variant="subtitle1">LOGO</Typography>
      </Box>
      <List>
        {['Home', 'Notifications', 'Shop', 'Conversations', 'Invoices', 'Subscriptions', 'My Profile', 'Settings'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              {index === 0 ? <HomeIcon /> :
                index === 1 ? <NotificationsIcon /> :
                  index === 2 ? <ShoppingCartIcon /> :
                    index === 3 ? <MailIcon /> :
                      index === 4 ? <MailIcon /> :
                        index === 5 ? <MailIcon /> :
                          index === 6 ? <AccountCircleIcon /> :
                            <SettingsIcon />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Divider />
     
    </Box>
  );
};

export default Sidebar;
