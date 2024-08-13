import React from 'react';
import { Accordion, AccordionSummary, AccordionDetails, TextField } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const AccordionSection = ({ title }) => (
  <Accordion>
    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
      <h3>{title}</h3>
    </AccordionSummary>
    <AccordionDetails>
      <TextField label={`Search ${title}`} fullWidth />
    </AccordionDetails>
  </Accordion>
);

export default AccordionSection;
