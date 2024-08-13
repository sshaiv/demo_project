import React from 'react';
import { TextField, Grid, Box, Typography } from '@mui/material';

const VitalData = () => {
  return (
    <Box mb={3}>
      <Typography variant="h5" gutterBottom>
        Vital Data
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6} md={4}>
          <TextField label="Height (In Cm)" fullWidth />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <TextField label="Weight (In Kg)" fullWidth />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <TextField label="BMI" fullWidth />
        </Grid>
        {/* Add more fields as necessary */}
      </Grid>
    </Box>
  );
};

export default VitalData;
