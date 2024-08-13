import React from 'react';
import { Accordion, AccordionSummary, AccordionDetails, TextField, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import InfoIcon from '@mui/icons-material/Info';
import IconButton from '@mui/material/IconButton';

const AccordionSection = ({ title }) => {
  return (
    <Accordion>
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <Typography variant="h6">{title}</Typography>
        <IconButton>
          <InfoIcon />
        </IconButton>
      </AccordionSummary>
      <AccordionDetails>
        <TextField label={`Search ${title}`} fullWidth margin="normal" />
      </AccordionDetails>
    </Accordion>
  );
};

export default AccordionSection;
