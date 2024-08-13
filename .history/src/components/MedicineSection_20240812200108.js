import React from 'react';
import { Accordion, AccordionSummary, AccordionDetails, TextField, Typography, Box, Grid, Button } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import InfoIcon from '@mui/icons-material/Info';
import IconButton from '@mui/material/IconButton';

const MedicineSection = () => {
  return (
    <Accordion>
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <Typography variant="h6">Medicine</Typography>
        <IconButton>
          <InfoIcon />
        </IconButton>
      </AccordionSummary>
      <AccordionDetails>
        <Box>
          <TextField label="Search Medicine" fullWidth margin="normal" />
          <TextField label="Search Generic Medicine" fullWidth margin="normal" />
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6} md={4}>
              <TextField label="Unit" fullWidth />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <TextField label="Frequency" fullWidth />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <TextField label="Duration" fullWidth />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <TextField label="Start From" fullWidth />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <TextField label="Instruction" fullWidth />
            </Grid>
          </Grid>
          <Button variant="contained" color="primary" style={{ marginTop: '16px' }}>
            Create New Template
          </Button>
        </Box>
      </AccordionDetails>
    </Accordion>
  );
};

export default MedicineSection;
