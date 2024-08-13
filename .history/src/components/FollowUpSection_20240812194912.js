import React from 'react';
import { Accordion, AccordionSummary, AccordionDetails, TextField, Grid, Button } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const FollowUpSection = () => (
  <Accordion>
    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
      <h3>Follow Up</h3>
    </AccordionSummary>
    <AccordionDetails>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <TextField label="Date Time" fullWidth />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField label="Remark" fullWidth />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField label="Refer Doctor" fullWidth />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField label="Remark" fullWidth />
        </Grid>
        <Grid item xs={12}>
          <Button variant="contained">Follow Up Save</Button>
        </Grid>
      </Grid>
    </AccordionDetails>
  </Accordion>
);

export default FollowUpSection;
