import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

const Header = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" style={{ flexGrow: 1 }}>
          MedoNext
        </Typography>
        <Button color="inherit">About Us</Button>
        <Button color="inherit">Sign Out</Button>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
