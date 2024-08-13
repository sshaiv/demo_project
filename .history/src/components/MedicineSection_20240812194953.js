import React from 'react';
import { Accordion, AccordionSummary, AccordionDetails, TextField, Grid, Button } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const MedicineSection = () => (
  <Accordion>
    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
      <h3>Medicine</h3>
    </AccordionSummary>
    <AccordionDetails>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <TextField label="Search Medicine" fullWidth />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField label="Search Generic Medicine" fullWidth />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField label="Template" fullWidth />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Button variant="contained">Create New Template</Button>
        </Grid>
      </Grid>
    </AccordionDetails>
  </Accordion>
);

export default MedicineSection;
