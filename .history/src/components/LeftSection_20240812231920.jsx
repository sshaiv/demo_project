// src/components/LeftSection.js
import React from 'react';
// import { Box, Typography, TextField, Grid } from '@mui/material';
import NursingHeader from './NursingHeader';
import AddPatient from './AddPatient';
import { useState } from 'react';

const LeftSection = () => {

  
  const [showLogin, setShowLogin] = useState(false)

  return (
    <>
      <AddPatient  />
     <div>
      <NursingHeader />
      </div>
   </>
  );
};

export default LeftSection;
