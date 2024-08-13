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
    <div>
        <h1>hii</h1>
    </div>
  );
};

export default HistoryDetail;
