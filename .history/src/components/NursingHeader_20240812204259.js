import React from "react";

const NursingHeader = () => {
  return (
    <div id="NursingHeader" className="container-fluid">
      <div className="row">
        {/* Employee Image */}
        <div className="col-md-1">
          <img
            id="imgEmp"
            src="/Images/2000px-User_icon_2.svg.png"
            alt="Employee"
            style={{ width: "60px", height: "50px" }}
          />
        </div>

        {/* Patient Information */}
        <div className="col-md-5">
          <div className="input-group input-group-sm" style={{ fontWeight: "bolder", border: "none" }}>
            <span id="txtPatName" style={{ display: "inline", fontWeight: "bolder", border: "none" }}>
              {/* Patient Name */}
            </span>
            <span id="txtAgeSex" style={{ display: "inline", fontWeight: "bolder", border: "none" }}>
              {/* Age and Sex */}
            </span>
            <span id="txtNurIpdNo" style={{ display: "inline", fontWeight: "bolder", border: "none" }}>
              {/* Nurse IPD Number */}
            </span>
            <span id="txtMobNo" className="glyphicon glyphicon-phone" style={{ display: "inline", fontWeight: "bolder", fontSize: "15px", border: "none" }}>
              {/* Mobile Number */}
            </span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="col-md-6" style={{ textAlign: "right" }}>
          <Button
            id="btnPatAdd"
            // imgSrc="../assets/addpatients.png"
            //  imgSrc="/public/assets/addpatients.png"
             
            // onClick={() => DocumentPatientFile(1)}
            title="ADD"
          />
          <Button
            imgSrc="/Images/docExmnpics/info-button.png"
            disabled
          />
          <Button
            imgSrc="/Images/docExmnpics/refresh.png"
            // onClick={OnRefreshDocExmn}
            disabled
          />
          <Button
            id="btnDocExmnPrintData"
            imgSrc="/Images/docExmnpics/printer.png"
            // onClick={ToGetReportDoctorExmnData}
            disabled
          />
          <Button
            id="btnMRDAdd"
            imgSrc="/Images/docExmnpics/folder.png"
            // onClick={() => DocumentPatientFile(2)}
            title="MRD"
            disabled
          />
          <Button
            imgSrc="/Images/docExmnpics/log-out.png"
            // onClick={onClose}
            disabled
          />
        </div>
      </div>

      {/* Hidden Fields */}
      <div className="row">
        <div className="col-md-1" hidden>
          <label>Bed No.</label>
          <input id="txtBedNo" type="text" className="form-control form-control-readonly" readOnly disabled />
        </div>
        <div className="col-md-1" hidden>
          <label>Age</label>
          <input id="txtAge" type="text" className="form-control form-control-readonly" readOnly disabled />
        </div>
        <div className="col-md-1" hidden>
          <label>Gender</label>
          <input id="txtGender" type="text" className="form-control form-control-readonly" readOnly disabled />
        </div>
      </div>
    </div>
  );
};

// Reusable Button Component
const Button = ({ id, imgSrc, onClick, title, disabled }) => (
  <button
    id={id}
    className="btn btn-primary btn-sm"
    style={{ backgroundColor: "transparent" }}
    onClick={onClick}
    title={title}
    disabled={disabled}
  >
    <img src={imgSrc} style={{ width: "25px", height: "25px" }} alt={title || "button"} />
  </button>
);

export default NursingHeader;
