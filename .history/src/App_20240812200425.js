import React from 'react';
import { Container, Box } from '@mui/material';
import Header from './components/Header';
import VitalData from './components/VitalData';
import AccordionSection from './components/AccordionSection';
import MedicineSection from './components/MedicineSection';
import FollowUpSection from './components/FollowUpSection';
import HistoryDetail from './components/HistoryDetail'; // Import the new component

const App = () => {
  return (
    <div style={{ display: 'flex' }}>
      <Header />
      {/* <Sidebar /> */}
      <Container style={{ marginTop: '64px', marginLeft: '240px' }}>
        <Box mt={3}>
          <VitalData />
          <AccordionSection title="Chief Complaint" />
          <AccordionSection title="Past Medical History" />
          <AccordionSection title="Examination Findings" />
          <AccordionSection title="Surgical History" />
          <AccordionSection title="Family History" />
          <AccordionSection title="Allergy History" />
          <MedicineSection />
          <AccordionSection title="Investigation" />
          <FollowUpSection />
          <HistoryDetail /> {/* Add the HistoryDetail component here */}
        </Box>
      </Container>
    </div>
  );
};

export default App;
