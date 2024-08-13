import React from "react";

const AddPatientModal = () => {
    lo
  return (
    <div
      className="modal fade"
      id="addPatientModal"
      tabIndex="-1"
      aria-labelledby="addPatientModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="addPatientModalLabel">
              Add Patient
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            {/* Form content for adding a patient */}
            <form>
              <div className="mb-3">
                <label htmlFor="patientName" className="form-label">
                  Patient Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="patientName"
                  placeholder="Enter patient name"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="patientAge" className="form-label">
                  Age
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="patientAge"
                  placeholder="Enter patient age"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="patientGender" className="form-label">
                  Gender
                </label>
                <select className="form-select" id="patientGender">
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </form>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Close
            </button>
            <button type="button" className="btn btn-primary">
              Save changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddPatientModal;
 