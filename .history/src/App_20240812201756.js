// src/App.js
import React from 'react';
import { Box, Container } from '@mui/material';
import LeftSection from './components/LeftSection';
import RightSection from './components/RightSection';
import Header from './components/Header'; // Assuming you have a Header component

const App = () => {
  return (
    <div>
      <Header /> 
      {/* Include your header if you have one */}
      <Box
        sx={{
          display: 'flex',
          height: 'calc(100vh - 64px)', // Adjust height if you have a header
        }}
      >
        <Box sx={{ width: '50%', overflowY: 'scroll' }}>
          <LeftSection />
        </Box>
        <Box sx={{ width: '50%', borderLeft: '1px solid #ddd' }}>
          <RightSection />
        </Box>
      </Box>
    </div>
  );
};

export default App;
