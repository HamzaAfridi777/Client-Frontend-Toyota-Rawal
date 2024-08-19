import React from "react";

const VechileModal = ({ handleClose }) => {
  return (
    <div>
      <div
        className="accessories-popup"
        style={{ display: "block", background: "#EDEDED", width: "80%",}}
      >
        <div style={{ textAlign: "right", marginBottom: "0px" }}>
          <a
            href="#" onClick={handleClose}
            style={{fontSize: "1.2rem",display: "inline-flex",alignItems: "center",}}
            className="text-gray-500 hover:text-gray-700 mb-4 block "
          >
            <i className="fas fa-arrow-left"></i> Back
          </a>
        </div>
        <div className="popinner" style={{ maxHeight: "400px", overflowY: "auto" }}>
          <div className="container">
            <h6 style={{ color: "darkred" }}>Vehicle History</h6>
            <table
            style={{
              width: "100%",
              borderCollapse: "collapse",
              marginBottom: "20px",
            }}
          >
            <thead>
              <tr style={{ textAlign: "left", background: "#1E5128",color:"white", }}>
                <th style={{ padding: "8px" }}>S.No</th>
                <th style={{ padding: "8px" }}>RO Heading</th>
                <th style={{ padding: "8px" }}>Date</th>
                <th style={{ padding: "8px" }}>RONO</th>
                <th style={{ padding: "8px" }}>Mileage</th>
                <th style={{ padding: "8px" }}>Description</th>
              </tr>
            </thead>
            <tbody>
              
              <tr>
                <td style={{ padding: "8px" }}>1</td>
                <td style={{ padding: "8px" }}>Example Heading</td>
                <td style={{ padding: "8px" }}>01/01/2024</td>
                <td style={{ padding: "8px" }}>12345</td>
                <td style={{ padding: "8px" }}>15000 km</td>
                <td style={{ padding: "8px" }}>Example Description</td>
              </tr>
             
            </tbody>
          </table>
          <h1 style={{color:"white",fontSize:'1.2rem', textAlign: "left", background: "darkred",
            marginTop:"200px",lineHeight:"30px" }}>Total Records : 8</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VechileModal;
