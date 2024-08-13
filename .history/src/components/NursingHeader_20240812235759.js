// import React from "react";
import React from "react";
import  '../cssfile/style.css'

const NursingHeader = ({setShowLogin}) => {
  return (
    <div id="NursingHeader" className="container-fluid">
      <div style={{gap: "130px" , position: "relative}} className="row">
        {/* Employee Image */}
        <div className="col-md-1">
          <img
            src="/assets/2000px-User_icon_2.svg.png"
            style={{
              width: "50px",
              height: "50px",
              marginRight: "10px",
              cursor: "pointer",
            }}
            alt=""
            onClick={() => console.log("Add Patient Clicked")}
          />
        </div>

        {/* Patient Information */}
        
        {/* Action Buttons */}
        <div
        className="col-md-6"
        style={{ textAlign: "right", position: "relative", top: "40px" }}
      >
        <img
          src="/assets/addpatients.png"
          style={{
            width: "25px",
            height: "25px",
            marginRight: "10px",
            cursor: "pointer",
          }}
          alt="ADD"
          onClick={() => setShowLogin(true)} 
        />
        <img
          src="/assets/info-button.png"
          style={{
            width: "25px",
            height: "25px",
            marginRight: "10px",
            cursor: "pointer",
          }}
          alt="Info"
          onClick={() => console.log("Info Button Clicked")}
        />
        <img
          src="/assets/refresh.png"
          style={{
            width: "25px",
            height: "25px",
            marginRight: "10px",
            cursor: "pointer",
          }}
          alt="Refresh"
          onClick={() => console.log("Refresh Clicked")}
        />
        <img
          src="/assets/printer.png"
          style={{
            width: "25px",
            height: "25px",
            marginRight: "10px",
            cursor: "pointer",
          }}
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
          <input
            id="txtBedNo"
            type="text"
            className="form-control form-control-readonly"
            readOnly
            disabled
          />
        </div>
        <div className="col-md-1" hidden>
          <label>Age</label>
          <input
            id="txtAge"
            type="text"
            className="form-control form-control-readonly"
            readOnly
            disabled
          />
        </div>
        <div className="col-md-1" hidden>
          <label>Gender</label>
          <input
            id="txtGender"
            type="text"
            className="form-control form-control-readonly"
            readOnly
            disabled
          />
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
    <img
      src={imgSrc}
      style={{ width: "25px", height: "25px" }}
      alt={title || "button"}
    />
  </button>
);

export default NursingHeader;
