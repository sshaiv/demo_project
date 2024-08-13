import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';

const Header = () => (
  <AppBar position="fixed">
    <Toolbar>
      <Typography variant="h6" style={{ flexGrow: 1 }}>
        MedoNext
      </Typography>
      <Button color="inherit">About Us</Button>
      <Button color="inherit">Sign Out</Button>
    </Toolbar>
  </AppBar>
);

export default Header;
