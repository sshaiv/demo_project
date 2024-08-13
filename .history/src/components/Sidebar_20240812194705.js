import React from 'react';
import { Drawer, List, ListItem, ListItemText } from '@mui/material';

const Sidebar = () => {
  return (
    <Drawer variant="permanent">
      <List>
        <ListItem button>
          <ListItemText primary="Home" />
        </ListItem>
        {/* Add other menu items here */}
      </List>
    </Drawer>
  );
}

export default Sidebar;
