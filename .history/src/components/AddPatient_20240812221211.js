import React from 'react';
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
      {/* Trigger Button */}
      <button
        type="button"
        className="btn btn-primary"
        data-toggle="modal"
        data-target="#addPatientModal"
      >
        Open Add Patient Form
      </button>

      {/* Modal */}
      <div
        className="modal fade"
        id="addPatientModal"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="addPatientModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="addPatientModalLabel">
                Patient Registration
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <form className="patient-form">
                <div className="form-group">
                  <label>Mobile No</label>
                  <input type="text" className="form-control" placeholder="Mobile No" />
                  <button className="btn btn-outline-secondary mt-2">&#x1F50D;</button>
                </div>

                <div className="form-group">
                  <label>Title <span className="required">*</span></label>
                  <select className="form-control">
                    <option>Mr.</option>
                    <option>Mrs.</option>
                    <option>Ms.</option>
                  </select>
                </div>

                <div className="form-group">
                  <label>First Name <span className="required">*</span></label>
                  <input type="text" className="form-control" placeholder="First Name" />
                </div>

                <div className="form-group">
                  <label>Last Name <span className="required">*</span></label>
                  <input type="text" className="form-control" placeholder="Last Name" />
                </div>

                <div className="form-group">
                  <label>Age <span className="required">*</span></label>
                  <div className="d-flex">
                    <input type="text" className="form-control mr-1" placeholder="Year" />
                    <input type="text" className="form-control mr-1" placeholder="Month" />
                    <input type="text" className="form-control" placeholder="Day" />
                  </div>
                </div>

                <div className="form-group">
                  <label>Date of Birth (DOB) <span className="required">*</span></label>
                  <input type="text" className="form-control" placeholder="DD/MM/YYYY" />
                </div>

                <div className="form-group">
                  <label>Gender <span className="required">*</span></label>
                  <select className="form-control">
                    <option>Male</option>
                    <option>Female</option>
                    <option>Other</option>
                  </select>
                </div>

                <div className="form-group">
                  <label>Mobile Number <span className="required">*</span></label>
                  <input type="text" className="form-control" placeholder="Mobile Number" />
                </div>

                <div className="form-group">
                  <label>Aadhar Number</label>
                  <input type="text" className="form-control" placeholder="Aadhar Number" />
                </div>

                <div className="form-group">
                  <label>Address</label>
                  <input type="text" className="form-control" placeholder="Address" />
                </div>

                <div className="form-group">
                  <label>City</label>
                  <input type="text" className="form-control" placeholder="City" />
                </div>

                <div className="form-group">
                  <label>State</label>
                  <input type="text" className="form-control" placeholder="State" />
                </div>

                <div className="form-group">
                  <label>Country</label>
                  <input type="text" className="form-control" placeholder="Country" />
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
                onClick={handleOnClose}
              >
                Close
              </button>
              <button type="submit" className="btn btn-primary">
                DONE
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddPatient;
