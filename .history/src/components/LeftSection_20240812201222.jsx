// src/components/LeftSection.js
import React from 'react';
import { Box, Typography, TextField, Grid } from '@mui/material';

const LeftSection = () => {
  return (
    <Box
      sx={{
        width: '100%',
        height: 'calc(100vh - 64px)',
        overflowY: 'scroll',
        padding: '16px',
        boxSizing: 'border-box',
        borderRight: '1px solid #ddd',
      }}
    >
      <Typography variant="h5" gutterBottom>
        Vital Data
      </Typography>
      {/* Add your form fields or content here */}
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <TextField label="Height (In Cm)" fullWidth />
        </Grid>
        <Grid item xs={12}>
          <TextField label="Weight (In Kg)" fullWidth />
        </Grid>
        <Grid item xs={12}>
          <TextField label="BMI" fullWidth />
        </Grid>
        <Grid item xs={12}>
          <TextField label="BP" fullWidth />
        </Grid>
        <Grid item xs={12}>
          <TextField label="Temperature (F)" fullWidth />
        </Grid>
        <Grid item xs={12}>
          <TextField label="Pulse" fullWidth />
        </Grid>
        <Grid item xs={12}>
          <TextField label="R.R." fullWidth />
        </Grid>
        <Grid item xs={12}>
          <TextField label="Head Circumference (In Inch)" fullWidth />
        </Grid>
        <Grid item xs={12}>
          <TextField label="SpO2 (%)" fullWidth />
        </Grid>
        <Grid item xs={12}>
          <TextField label="Pain Score" fullWidth />
        </Grid>
        {/* Add more fields as needed */}
      </Grid>
    </Box>
  );
};

export default LeftSection;
