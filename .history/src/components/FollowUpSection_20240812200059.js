import React from 'react';
import { Accordion, AccordionSummary, AccordionDetails, TextField, Typography, Grid, Button } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import InfoIcon from '@mui/icons-material/Info';
import IconButton from '@mui/material/IconButton';

const FollowUpSection = () => {
  return (
    <Accordion>
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <Typography variant="h6">Follow Up</Typography>
        <IconButton>
          <InfoIcon />
        </IconButton>
      </AccordionSummary>
      <AccordionDetails>
        <Grid container spacing={3}>
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
        </Grid>
        <Button variant="contained" color="primary" style={{ marginTop: '16px' }}>
          Follow Up Save
        </Button>
      </AccordionDetails>
    </Accordion>
  );
};

export default FollowUpSection;
