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
    {showLogin? <AddPatient  setShowLogin={setShowLogin}/>:<></>}
      
     <div>
      <NursingHeader  setShowLogin={setShowLogin} /> wo form open krne k liye  login ki jagah or kuch bhi rakh skte h
      </div>
   </>
  );
};

export default LeftSection;
