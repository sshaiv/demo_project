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
     
    </div>
  );
};

export default App;
