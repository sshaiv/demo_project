import React from 'react';
import { Grid, Accordion, AccordionSummary, AccordionDetails, TextField } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';

const sections = [
  { title: 'Chief Complaint', fields: ['Symptoms'] },
  { title: 'Past Medical History', fields: ['Search Past Medical'] },
  { title: 'Examination Findings', fields: ['Search Findings'] },
  { title: 'Surgical History', fields: ['Search Findings'] },
  { title: 'Family History', fields: [] },
  { title: 'Allergy History', fields: ['Search Allergy'] },
  { title: 'Medicine', fields: ['Search Medicine', 'Search Generic Medicine', 'Template'] },
  { title: 'Investigation', fields: ['Search Investigation'] },
  { title: 'Follow Up', fields: ['Date Time', 'Remark', 'Refer Doctor', 'Remark'] },
];

const HistoryDetail = () => {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12} sm={6}>
        {sections.slice(0, Math.ceil(sections.length / 2)).map((section, index) => (
          <Accordion key={index}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <h3>{section.title}</h3>
              <IconButton>
                <InfoIcon />
              </IconButton>
            </AccordionSummary>
            <AccordionDetails>
              {section.fields.map((field, idx) => (
                <TextField key={idx} label={field} fullWidth margin="normal" />
              ))}
            </AccordionDetails>
          </Accordion>
        ))}
      </Grid>
      <Grid item xs={12} sm={6}>
        {sections.slice(Math.ceil(sections.length / 2)).map((section, index) => (
          <Accordion key={index}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <h3>{section.title}</h3>
              <IconButton>
                <InfoIcon />
              </IconButton>
            </AccordionSummary>
            <AccordionDetails>
              {section.fields.map((field, idx) => (
                <TextField key={idx} label={field} fullWidth margin="normal" />
              ))}
            </AccordionDetails>
          </Accordion>
        ))}
      </Grid>
    </Grid>
  );
};

export default HistoryDetail;
