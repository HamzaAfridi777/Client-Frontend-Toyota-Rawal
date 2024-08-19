import React, { useState, useEffect } from "react";
import axios from "axios";

const PeriodicMaintenanceService = () => {
  const [companyData, setCompanyData] = useState({});
  const [calculatorData, setCalculatorData] = useState(null);

  useEffect(() => {
    const fetchCalculatorData = async () => {
      try {
        const response = await axios.get("/api/calculator");
        const fetchedData = response.data[0]; // Getting the first item in the array
        setCalculatorData(fetchedData);
      } catch (error) {
        console.error("Error fetching calculator data:", error);
      }
    };

    const fetchCompanyData = async () => {
      try {
        const dataResponse = await axios.get("/api/site-credentials");
        const companyData = dataResponse.data[0];
        setCompanyData(companyData);
      } catch (error) {
        console.error("Error fetching company data:", error);
      }
    };

    fetchCalculatorData();
    fetchCompanyData();
  }, []);

  if (!calculatorData) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <section
        className="periodic"
        style={{
          backgroundImage: "url(assets/images/banner/periodic-banner.png)",
        }}
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <div className="periodic-txt m1-h p1 p5">
                <img 
                src={`${
                  axios.defaults.baseURL
                }storage/uploads/Calculator/${encodeURIComponent(calculatorData.image)}`}
               // src={`assets/images/${calculatorData.image}`}
                 alt="dic" />
                <h1>{calculatorData.service}</h1>
                <div className="p-and-btn">
                  <p>{calculatorData.description}</p>
                  <a href="/GetInTouch" className="btn-white">
                    Contact Us
                  </a>
                  <a href="/PeriodicMaintenance" className="btn-white">
                    Explore More
                  </a>
                </div>
              </div>
            </div>
            
            <div className="col-md-6">
              <div className="history">
                <h1>
                  {calculatorData.history} <span>History</span>
                </h1>
                <img src="assets/images/his-men.png" alt="his-men" />
                <div className="call-now">
                  <span>
                    Call Now:
                    <a href={`Tel:${companyData.phone}`} className="">
                      {companyData.phone}
                    </a>
                  </span>
                  <a href="/CheckVehicleHistory" className="btn-b">
                    Request Now
                  </a>
                </div>
              </div>
              
              <div className="history">
                <h1>
                  {calculatorData.calculatorservice}<span>Calculator</span>
                </h1>
                <img src="assets/images/his-men1.png" alt="his-men1" />
                <div className="call-now">
                  <span>
                    Call Now:
                    <a href={`Tel:${companyData.phone}`} className="">
                      {companyData.phone}
                    </a>
                  </span>
                  <a href="#" className="btn-b popbtn">
                    Learn More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PeriodicMaintenanceService;