import React from 'react';
// import '/project/my-app/src/hms_css/NursingHeader.css';
import '../cssfile/style.css';

const AddPatient = () => {
  const handleDocumentPatientFile = (type) => {
    console.log(`Document Patient File Type: ${type}`);
  };

  const handleRefreshDocExmn = () => {
    console.log('Refresh Document Examination');
  };

  const handleGetReportDoctorExmnData = () => {
    console.log('Get Report Doctor Examination Data');
  };

  const handleOnClose = () => {
    console.log('Close');
  };

  return (
    <div className="container">
      <div className="header">
        <h2>Patient Registration</h2>
        <div className="buttons">
          <button className="refresh-btn" onClick={handleRefreshDocExmn}>
            &#x21bb;
          </button>
          <button className="close-btn" onClick={handleOnClose}>
            &#x2716;
          </button>
        </div>
      </div>
      <form className="patient-form">
        {/* ...form elements... */}
        <div className="footer">
          <button type="submit" className="done-btn">
            DONE
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddPatient;
