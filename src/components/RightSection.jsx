// src/components/RightSection.js
import React from 'react';
import { Box, Typography } from '@mui/material';

const RightSection = () => {
  return (
    <Box
      sx={{
        width: '100%',
        height: 'calc(100vh - 64px)',
        padding: '16px',
        boxSizing: 'border-box',
      }}
    >
      <Typography variant="h5" gutterBottom>
        History Detail
      </Typography>
      {/* Add more content as needed */}
    </Box>
  );
};

export default RightSection;
