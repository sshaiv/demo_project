import React from 'react';
import { TextField, Grid } from '@mui/material';

const VitalData = () => {
  return (
    <div style={{ padding: 16 }}>
      <h2>Vital Data</h2>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} md={3}>
          <TextField label="Height (In Cm)" fullWidth />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <TextField label="Weight (In Kg)" fullWidth />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <TextField label="BMI" fullWidth />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <TextField label="BP Systolic" fullWidth />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <TextField label="BP Diastolic" fullWidth />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <TextField label="Temp. (F)" fullWidth />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <TextField label="Pulse" fullWidth />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <TextField label="R.R." fullWidth />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <TextField label="Head Circumference (In Inch)" fullWidth />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <TextField label="SpO2 (%)" fullWidth />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <TextField label="Pain Score" fullWidth />
        </Grid>
      </Grid>
    </div>
  );
}

export default VitalData;
