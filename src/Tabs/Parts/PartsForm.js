import React, { useState } from "react";
import axios from "axios";

const PartsForm = ({ part, handleClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    quantity: 1,
    part_id: part.id,  // use part_id to match the backend field
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("/api/submit-part-form", formData);
      if (response.status === 200) {
        alert("Form submitted successfully");
        handleClose();  // Close the modal on successful submission
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Failed to submit form");
    }
  };

  return (
    <div>
      <div className="accessories-popup" style={{ display: "block" }}>
        <a href="#" onClick={handleClose} className="text-gray-500 hover:text-gray-700 mb-4 block">
          <i className="fas fa-arrow-left"></i> Back
        </a>
        <div className="popinner">
          <div className="container">
            <h6>Contact No</h6>
            <form onSubmit={handleSubmit}>
              <div className="row align-items-end">
                <div className="col-md-6">
                  <div className="access-popup-feild">
                    <label>Name</label>
                    <input 
                      type="text" 
                      name="name" 
                      placeholder="Your Name" 
                      value={formData.name} 
                      onChange={handleChange} 
                      required 
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="access-popup-feild">
                    <label>Email</label>
                    <input 
                      type="email" 
                      name="email" 
                      placeholder="Your Email" 
                      value={formData.email} 
                      onChange={handleChange} 
                      required 
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="access-popup-feild">
                    <label>Mobile Number</label>
                    <input 
                      id="phone-access" 
                      name="phone" 
                      type="tel" 
                      value={formData.phone} 
                      onChange={handleChange} 
                      required 
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="access-popup-feild">
                    <label>Message</label>
                    <input 
                      type="text" 
                      name="message" 
                      placeholder="Your Message" 
                      value={formData.message} 
                      onChange={handleChange} 
                      required 
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="access-popup-feild">
                    <label>Quantity</label>
                    <input 
                      type="number" 
                      name="quantity" 
                      min="1" 
                      value={formData.quantity} 
                      onChange={handleChange} 
                      required 
                    /> 
                    <span className="access-price">Rs {part.car_price}</span>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="access-popup-feild">
                    <button type="submit">Submit</button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PartsForm;
