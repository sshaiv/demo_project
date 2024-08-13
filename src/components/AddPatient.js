import React, { useState } from 'react';
import '../cssfile/style.css';

const AddPatient = ({ setShowLogin }) => {
  const [formData, setFormData] = useState({
    mobileNo: '',
    title: 'Mr.',
    firstName: '',
    lastName: '',
    ageYear: '',
    ageMonth: '',
    ageDay: '',
    dob: '',
    gender: 'Male',
    mobileNumber: '',
    aadharNumber: '',
    address: '',
    city: '',
    state: '',
    country: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data:', JSON.stringify(formData));
    // You can send formData to your backend or perform other actions here
  };

  return (
    <div className="container">
      <div className="header">
        <h2>Patient Registration</h2>
        <div className="buttons">
          <button className="refresh-btn" onClick={() => console.log('Refresh Document Examination')}>
            &#x21bb;
          </button>
          <button className="close-btn" onClick={() => setShowLogin(false)}>
            &#x2716;
          </button>
        </div>
      </div>
      <form className="patient-form" onSubmit={handleSubmit}>
        <div className="row">
          <label>Mobile No</label>
          <input
            type="text"
            placeholder="Mobile No"
            name="mobileNo"
            value={formData.mobileNo}
            onChange={handleInputChange}
          />
          <button className="search-btn" type="button">
            &#x1F50D;
          </button>
        </div>

        <div className="row">
          <label>
            Title <span className="required">*</span>
          </label>
          <select name="title" value={formData.title} onChange={handleInputChange}>
            <option>Mr.</option>
            <option>Mrs.</option>
            <option>Ms.</option>
          </select>

          <label>
            First Name <span className="required">*</span>
          </label>
          <input
            type="text"
            placeholder="First Name"
            name="firstName"
            value={formData.firstName}
            onChange={handleInputChange}
          />

          <label>
            Last Name <span className="required">*</span>
          </label>
          <input
            type="text"
            placeholder="Last Name"
            name="lastName"
            value={formData.lastName}
            onChange={handleInputChange}
          />
        </div>

        <div className="row">
          <label>
            Age <span className="required">*</span>
          </label>
          <input
            type="text"
            placeholder="Year"
            name="ageYear"
            value={formData.ageYear}
            onChange={handleInputChange}
          />
          <input
            type="text"
            placeholder="Month"
            name="ageMonth"
            value={formData.ageMonth}
            onChange={handleInputChange}
          />
          <input
            type="text"
            placeholder="Day"
            name="ageDay"
            value={formData.ageDay}
            onChange={handleInputChange}
          />

          <label>
            Date of Birth (DOB) <span className="required">*</span>
          </label>
          <input
            type="text"
            placeholder="DD/MM/YYYY"
            name="dob"
            value={formData.dob}
            onChange={handleInputChange}
          />

          <label>
            Gender <span className="required">*</span>
          </label>
          <select name="gender" value={formData.gender} onChange={handleInputChange}>
            <option>Male</option>
            <option>Female</option>
            <option>Other</option>
          </select>
        </div>

        <div className="row">
          <label>
            Mobile Number <span className="required">*</span>
          </label>
          <input
            type="text"
            placeholder="Mobile Number"
            name="mobileNumber"
            value={formData.mobileNumber}
            onChange={handleInputChange}
          />

          <label>Aadhar Number</label>
          <input
            type="text"
            placeholder="Aadhar Number"
            name="aadharNumber"
            value={formData.aadharNumber}
            onChange={handleInputChange}
          />

          <label>Address</label>
          <input
            type="text"
            placeholder="Address"
            name="address"
            value={formData.address}
            onChange={handleInputChange}
          />
        </div>

        <div className="row">
          <label>City</label>
          <input
            type="text"
            placeholder="City"
            name="city"
            value={formData.city}
            onChange={handleInputChange}
          />

          <label>State</label>
          <input
            type="text"
            placeholder="State"
            name="state"
            value={formData.state}
            onChange={handleInputChange}
          />

          <label>Country</label>
          <input
            type="text"
            placeholder="Country"
            name="country"
            value={formData.country}
            onChange={handleInputChange}
          />
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
