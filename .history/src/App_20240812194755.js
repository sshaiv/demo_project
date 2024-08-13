import React from 'react';
import { Container, Box } from '@mui/material';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import VitalData from './components/VitalData';
import AccordionSection from './components/AccordionSection';

const App = () => {
  return (
    <div style={{ display: 'flex' }}>
      <Header />
      <Sidebar />
      <Container style={{ marginTop: '64px', marginLeft: '240px' }}>
        <Box mt={3}>
          <VitalData />
          <AccordionSection title="Chief Complaint" />
          <AccordionSection title="Past Medical History" />
          <AccordionSection title="Examination Findings" />
          <AccordionSection title="Surgical History" />
          <AccordionSection title="Family History" />
        </Box>
      </Container>
    </div>
  );
}

export default App;
