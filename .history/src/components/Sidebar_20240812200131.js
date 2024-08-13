import React from 'react';
import { Drawer, List, ListItem, ListItemText } from '@mui/material';

const Sidebar = () => {
  return (
    <Drawer variant="permanent">
      <List>
        <ListItem button>
          <ListItemText primary="Menu Item 1" />
        </ListItem>
        <ListItem button>
          <ListItemText primary="Menu Item 2" />
        </ListItem>
        {/* Add more menu items here */}
      </List>
    </Drawer>
  );
};

export default Sidebar;
