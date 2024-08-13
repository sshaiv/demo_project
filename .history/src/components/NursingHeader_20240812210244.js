import React from "react";

const NursingHeader = () => {
  return (
    <div id="NursingHeader" className="container-fluid">
      <div className="row">
        {/* Employee Image */}
        <div className="col-md-1">
        <img
        src="/assets/2000px-User_icon_2.svg.png"
        style={{ width: "50px", height: "50px", marginRight: "10px", cursor: "pointer" }}
        alt=""
        onClick={() => console.log("Add Patient Clicked")}
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
        <div className="col-md-6" style={{ textAlign: "right",osition: relative;
    bottom: 40px; }}>
      <img
        src="/assets/addpatients.png"
        style={{ width: "25px", height: "25px", marginRight: "10px", cursor: "pointer" }}
        alt="ADD"
        onClick={() => console.log("Add Patient Clicked")}
      />
      <img
        src="/assets/info-button.png"
        style={{ width: "25px", height: "25px", marginRight: "10px", cursor: "pointer" }}
        alt="Info"
        onClick={() => console.log("Info Button Clicked")}
      />
      <img
        src="/assets/refresh.png"
        style={{ width: "25px", height: "25px", marginRight: "10px", cursor: "pointer" }}
        alt="Refresh"
        onClick={() => console.log("Refresh Clicked")}
      />
      <img
        src="/assets/printer.png"
        style={{ width: "25px", height: "25px", marginRight: "10px", cursor: "pointer" }}
        alt="Print"
        onClick={() => console.log("Print Clicked")}
      />
      <img
        src="/assets/folder.png"
        style={{ width: "25px", height: "25px", cursor: "pointer" }}
        alt="Folder"
        onClick={() => console.log("Folder Clicked")}
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
