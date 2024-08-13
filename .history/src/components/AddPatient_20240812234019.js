
import React from 'react';
// import '/project/my-app/src/hms_css/NursingHeader.css';
import '../cssfile/style.css'

const AddPatient = ({setShowLogin}) => {
  // const handleDocumentPatientFile = (type) => {
  //   console.log(Document Patient File Type: ${type});
  // };

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
          <button className="close-btn" onClick={setShowLogin()}>
            &#x2716;
          </button>
        </div>
      </div>
      <form className="patient-form">
        {/* Form Fields */}
        <div className="row">
          <label>Mobile No</label>
          <input type="text" placeholder="Mobile No" />
          <button className="search-btn">&#x1F50D;</button>
        </div>

        <div className="row">
          <label>
            Title <span className="required">*</span>
          </label>
          <select>
            <option>Mr.</option>
            <option>Mrs.</option>
            <option>Ms.</option>
          </select>

          <label>
            First Name <span className="required">*</span>
          </label>
          <input type="text" placeholder="First Name" />

          <label>
            Last Name <span className="required">*</span>
          </label>
          <input type="text" placeholder="Last Name" />
        </div>

        <div className="row">
          <label>
            Age <span className="required">*</span>
          </label>
          <input type="text" placeholder="Year" />
          <input type="text" placeholder="Month" />
          <input type="text" placeholder="Day" />

          <label>
            Date of Birth (DOB) <span className="required">*</span>
          </label>
          <input type="text" placeholder="DD/MM/YYYY" />

          <label>
            Gender <span className="required">*</span>
          </label>
          <select>
            <option>Male</option>
            <option>Female</option>
            <option>Other</option>
          </select>
        </div>

        <div className="row">
          <label>
            Mobile Number <span className="required">*</span>
          </label>
          <input type="text" placeholder="Mobile Number" />

          <label>Aadhar Number</label>
          <input type="text" placeholder="Aadhar Number" />

          <label>Address</label>
          <input type="text" placeholder="Address" />
        </div>

        <div className="row">
          <label>City</label>
          <input type="text" placeholder="City" />

          <label>State</label>
          <input type="text" placeholder="State" />

          <label>Country</label>
          <input type="text" placeholder="Country" />
        </div>

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