// src/components/LeftSection.js
import React from 'react';
// import { Box, Typography, TextField, Grid } from '@mui/material';
import NursingHeader from './NursingHeader';
import AddPatient from './AddPatient';
import { useState } from 'react';

const LeftSection = () => {

  
  const [showLogin, setShowLogin] = useState(false)

  return ( //ye to wahi same form h jo pehle se open h
    <>
    {showLogin? <AddPatient  setShowLogin={setShowLogin}/>:<></>}
      
     <div>
      <NursingHeader  setShowLogin={setShowLogin} /> 
      </div>
   </>
  );
};

export default LeftSection;
