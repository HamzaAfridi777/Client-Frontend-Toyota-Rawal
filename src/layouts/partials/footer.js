import React, { useState, useEffect } from "react";
import axios from "axios";
const Footer = () => {
  const [companyData, setCompanyData] = useState("");
  useEffect(() => {
    const fetchData = async () => {
      try {
        const DataResponse = await axios.get("/api/site-credentials");
        const companyData = DataResponse.data[0];
        setCompanyData(companyData);
        //console.log(DataResponse);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  const currentYear = new Date().getFullYear();

  return (
    <>
      <footer className="pad-tb footer">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <div className="widget widget1">
                <div className="footer-logo">
                  <a href="./">
                    <img
                      src={`${
                        axios.defaults.baseURL
                      }storage/uploads/site_logos/${encodeURIComponent(
                        companyData.site_logo
                      )}`}
                      alt="Toyota Rawal Logo"
                      // onError={(e) => console.error('Image loading error:', e)}
                    />
                  </a>
                </div>
                <p>
                  Welcome to Toyota Rawal. Find out more about our latest SUV,
                  MPV, 4x4 and other car models. Get updates on promotions,
                  compare car models.{" "}
                </p>
              </div>
            </div>
            <div className="col-md-2">
              <div className="widget">
                <h3>Useful Links</h3>
                <ul className="widget-list">
                  <li>
                    <a href="./">Home</a>
                  </li>
                  <li>
                    <a href="/ToyotaContact">Contact</a>
                  </li>
                  <li>
                    <a href="/EventNews">Blogs</a>
                  </li>
                  <li>
                    <a href="/ActivitiesCampaings">Event & News</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-2">
              <div className="widget">
                <h3>Our Services</h3>

                <ul className="widget-list">
                  <li>
                    <a href="/ExtendedWarranty">After Sales</a>
                  </li>
                  <li>
                    <a href="/AutoFinance">Auto Finance</a>
                  </li>
                  <li>
                    <a href="/PeriodicMaintenance">Auto Repair</a>
                  </li>
                  <li>
                    <a href="/BodyPaintService">Body Paint</a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-md-2">
              <div className="widget">
                <h3>Quick Link</h3>

                <ul className="widget-list">
                  <li>
                    <a href="/AboutUs">About Us</a>
                  </li>
                  <li>
                    <a href="/GetInTouch">Get In Touch</a>
                  </li>
                  <li>
                    <a href="/BookingProcess">Booking Process</a>
                  </li>
                  <li>
                    <a href="/CompanyProfile">Company Profile</a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-md-2">
              <div className="widget">
                <h3>Follow Us</h3>
                <ul className="widget-list">
                  <li className="first">
                    <a href={companyData.facebook_link} target="_blank">
                      <i className="fab fa-facebook-f"></i>Facebook
                    </a>
                  </li>
                  <li>
                    <a href={companyData.twitter_link} target="_blank">
                      <i className="fab fa-twitter"></i>Twitter
                    </a>
                  </li>
                  <li>
                    <a href={companyData.linkedin_link} target="_blank">
                      <i className="fab fa-linkedin-in"></i>LinkedIn
                    </a>
                  </li>
                  <li>
                    <a href={companyData.instagram_link} target="_blank">
                      <i className="fab fa-instagram"></i>Instagram
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <div className="copyright text-center">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <div className="copy-txt">
                <p> &copy; {currentYear} K&K Group All Rights Reserved. </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="copy-txt">
                <p>Powered By Technology Bench</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="copy-txt">
                <p>
                  <a href="/PrivacyPolicy">Privacy policy</a>
                  <span>|</span>
                  <a href="terms-conditions.php">Terms & Condition</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="popupMain">
        <a href="#" className="closePop">
          <i className="fas fa-arrow-left"></i>
        </a>
        <div className="popinner">
          <div className="container-fluid">
           <div className="row">
              <div className="col-md-4">
                <div className="popup-top">
                  <div className="popup-top-hd">
                    <h6>
                      Online Car Service
                      <span>HISTORY</span>
                    </h6>

                    <span className="popup-img">
                      <img src="assets/images/popup/logo1.png" alt="" />
                    </span>
                  </div>

                  <div className="popup-a">
                    <div className="popup-tel">
                      <a href={companyData.customer_relation_number}>
                        <span>Call Now</span>
                        {companyData.customer_relation_number}
                      </a>
                    </div>

                    <div className="popup-btn">
                      <a href="check-vehicle-history.php">Learn More</a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-md-4">
                <div className="popup-top">
                  <div className="popup-top-hd">
                    <h6>
                      Service Charge
                      <span>Calculator</span>
                    </h6>

                    <span className="popup-img">
                      <img src="assets/images/popup/logo2.png" alt="" />
                    </span>
                  </div>

                  <div className="popup-a">
                    <div className="popup-tel">
                      <a href={companyData.customer_relation_number}>
                        <span>Call Now</span>
                        {companyData.customer_relation_number}
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-md-4">
                <div className="popup-top">
                  <div className="popup-top-hd">
                    <h6>Contact Us</h6>

                    <span className="popup-img">
                      <img src="assets/images/popup/logo3.png" alt="" />
                    </span>
                  </div>

                  <div className="popup-a">
                    <div className="popup-tel">
                      <a href={companyData.customer_relation_number}>
                        <span>Call Now</span>
                        {companyData.customer_relation_number}
                      </a>
                    </div>

                    <div className="popup-btn">
                      <a href="get-in-touch.php">Learn More</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>}

            {/*<div className="popup-body">
              <form>
                <div className="popup-body-hd">
                  <div className="row align-items">
                    <div className="col-md-3">
                      <h6>
                        Service Charge
                        <span>Calculator</span>
                      </h6>
                    </div>
                    <div className="col-md-3">
                      <div className="popup-feild">
                        <input
                          type="text"
                          placeholder="Name"
                          style={{
                            width: "100%",
                            borderRadius: "10px",
                            height: "43px",
                            padding: "20px",
                            fontSize: "14px",
                            border: "transparent",
                          }}
                        />
                      </div>
                    </div>
                    <div className="col-md-3">
                      <div className="popup-feild">
                        <input
                          type="text"
                          placeholder="Email"
                          style={{
                            width: "100%",
                            borderRadius: "10px",
                            height: "43px",
                            padding: "20px",
                            fontSize: "14px",
                            border: "transparent",
                          }}
                        />
                      </div>
                    </div>
                    <div className="col-md-3"></div>
                    <div className="col-md-3"></div>

                    <div className="col-md-3">
                      <div className="popup-feild">
                        <select>
                          <option value="" disabled>
                            Select Car
                          </option>
                          <option>ALTIS CVT - 1.8</option>
                          <option>
                            ALTIS GRANDE CVT - 1.8 (Beige Interior){" "}
                          </option>
                          <option>
                            ALTIS GRANDE CVT - 1.8 (Black Interior){" "}
                          </option>
                          <option>Corolla MT 1.6</option>
                          <option>Corolla AT 1.6</option>
                          <option>Corolla AT 1.6SE</option>
                          <option>TOYOTA Camry Hybrid</option>
                          <option>TOYOTA Camry Hybrid - High Grade</option>
                          <option>TOYOTA Camry Hybrid - Low Grade</option>
                          <option>TOYOTA Avanza</option>
                          <option>TOYOTA Prius</option>
                          <option>TOYOTA YARIS 1.3L GLI MT</option>
                          <option>TOYOTA YARIS 1.3L GLI CVT</option>
                          <option>TOYOTA YARIS 1.3L ATIV MT</option>
                          <option>TOYOTA YARIS 1.3L ATIV CVT</option>
                          <option>TOYOTA YARIS 1.5L ATIV X MT</option>
                          <option>TOYOTA YARIS 1.5L ATIV X CVT</option>
                          <option>
                            TOYOTA Corolla Cross Premium (Hybrid){" "}
                          </option>
                          <option>TOYOTA Corolla Cross Small (Hybrid) </option>
                          <option>TOYOTA Corolla Cross (Hybrid) </option>
                          <option>FORTUNER G (4x2 2TR STD Petrol) </option>
                          <option>FORTUNER SIGMA 4 (4X4 1GD HI DIESEL) </option>
                          <option>FORTUNER V (4X4 2TR HI PETROL) </option>
                          <option>
                            TOYOTA LAND CRUISER PRADO 2.8 DIESEL TURBO M/T
                          </option>
                          <option>
                            TOYOTA LAND CRUISER PRADO 2.8 DIESEL TURBO A/T
                          </option>
                          <option>
                            TOYOTA LAND CRUISER PRADO 4.0 Petrol A/T
                          </option>
                          <option>TOYOTA Rush G AT</option>
                          <option>TOYOTA Rush G MT</option>
                          <option>TOYOTA Hilux Single Cabin</option>
                          <option>TOYOTA REVO</option>
                          <option>TOYOTA Hiace Deluxe</option>
                          <option>Hiace Commuter Deluxe Std Roof 2.8L</option>
                          <option>Hiace Commuter Deluxe High Roof 2.8L</option>
                          <option>Hiace Tourer Deluxe High Roof AT 2.8L</option>
                          <option>Standard Roof (Diesel) </option>
                          <option>Standard Roof Dual AC (Diesel) </option>
                          <option>High Roof Dual AC (Diesel) </option>
                          <option>Standard Roof (Gasoline) </option>
                          <option>Standard Roof Dual AC (Gasoline) </option>
                          <option>Mid Roof Dual AC (Gasoline) </option>
                          <option>Coaster High Roof (29- seater) </option>
                        </select>
                      </div>
                    </div>

                    <div className="col-md-3">
                      <div className="popup-feild">
                        <select>
                          <option disabled>
                            Car Model <span>Year</span>
                          </option>
                          <option>2015</option>
                          <option>2016</option>
                          <option>2017</option>
                          <option>2018</option>
                          <option>2019</option>
                          <option>2020</option>
                          <option>2021</option>
                          <option>2022</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="popup-select">
                  <h6>Service Charge</h6>

                  <div className="row">
                    <div className="col-md-10 pr-0">
                      <div className="row">
                        <div className="col-md-3 p-0">
                          <ul>
                            <li className="popup-feild form-check">
                              <input
                                className="form-check-input"
                                type="radio"
                                id="r11"
                              />
                              <label className="form-check-label" htmlFor="r11">
                                Oil Filter Change
                              </label>
                              <br />
                            </li>
                            <li className="popup-feild form-check">
                              <input
                                className="form-check-input"
                                type="radio"
                                id="r12"
                              />
                              <label className="form-check-label" htmlFor="r12">
                                Brake Repair
                              </label>
                              <br />
                            </li>
                            <li className="popup-feild form-check">
                              <input
                                className="form-check-input"
                                type="radio"
                                id="r13"
                              />
                              <label className="form-check-label" htmlFor="r13">
                                A/C Filter
                              </label>
                              <br />
                            </li>
                            <li className="popup-feild form-check">
                              <input
                                className="form-check-input"
                                type="radio"
                                id="r14"
                              />
                              <label className="form-check-label" htmlFor="r14">
                                Transmission
                              </label>
                              <br />
                            </li>
                            <li className="popup-feild form-check">
                              <input
                                className="form-check-input"
                                type="radio"
                                id="r15"
                              />
                              <label className="form-check-label" htmlFor="r15">
                                Gear Oil Change
                              </label>
                              <br />
                            </li>
                            <li className="popup-feild form-check">
                              <input
                                className="form-check-input"
                                type="radio"
                                id="r16"
                              />
                              <label className="form-check-label" htmlFor="r16">
                                Engine Oil Change
                              </label>
                              <br />
                            </li>
                            <li className="popup-feild form-check">
                              <input
                                className="form-check-input"
                                type="radio"
                                id="r17"
                              />
                              <label className="form-check-label" htmlFor="r17">
                                Brake Service
                              </label>
                              <br />
                            </li>
                          </ul>
                        </div>

                        <div className="col-md-3 pr-0">
                          <ul>
                            <li className="popup-feild form-check">
                              <input
                                className="form-check-input"
                                type="radio"
                                id="r21"
                              />
                              <label className="form-check-label" htmlFor="r21">
                                Fuel Filter Replacement
                              </label>
                              <br />
                            </li>
                            <li className="popup-feild form-check">
                              <input
                                className="form-check-input"
                                type="radio"
                                id="r22"
                              />
                              <label className="form-check-label" htmlFor="r22">
                                Engine Repair
                              </label>
                              <br />
                            </li>
                            <li className="popup-feild form-check">
                              <input
                                className="form-check-input"
                                type="radio"
                                id="r23"
                              />
                              <label className="form-check-label" htmlFor="r23">
                                Shocks, Struts & Suspension
                              </label>
                              <br />
                            </li>
                            <li className="popup-feild form-check">
                              <input
                                className="form-check-input"
                                type="radio"
                                id="r24"
                              />
                              <label className="form-check-label" htmlFor="r24">
                                On Board Diagnostics
                              </label>
                              <br />
                            </li>
                            <li className="popup-feild form-check">
                              <input
                                className="form-check-input"
                                type="radio"
                                id="r25"
                              />
                              <label className="form-check-label" htmlFor="r25">
                                Emissions
                              </label>
                              <br />
                            </li>
                            <li className="popup-feild form-check">
                              <input
                                className="form-check-input"
                                type="radio"
                                id="r26"
                              />
                              <label className="form-check-label" htmlFor="r26">
                                Four Wheel Balancing
                              </label>
                              <br />
                            </li>
                            <li className="popup-feild form-check">
                              <input
                                className="form-check-input"
                                type="radio"
                                id="r27"
                              />
                              <label className="form-check-label" htmlFor="r27">
                                Computerized Wheel Allignment
                              </label>
                              <br />
                            </li>
                          </ul>
                        </div>

                        <div className="col-md-3 pr-0">
                          <ul>
                            <li className="popup-feild form-check">
                              <input
                                className="form-check-input"
                                type="radio"
                                id="r31"
                              />
                              <label className="form-check-label" htmlFor="r31">
                                Bearing Change
                              </label>
                              <br />
                            </li>
                            <li className="popup-feild form-check">
                              <input
                                className="form-check-input"
                                type="radio"
                                id="r32"
                              />
                              <label className="form-check-label" htmlFor="r32">
                                Water Pump, Radiator Cooling System Repair
                              </label>
                              <br />
                            </li>
                            <li className="popup-feild form-check">
                              <input
                                className="form-check-input"
                                type="radio"
                                id="r33"
                              />
                              <label className="form-check-label" htmlFor="r33">
                                Timing Belt Replacement
                              </label>
                              <br />
                            </li>
                            <li className="popup-feild form-check">
                              <input
                                className="form-check-input"
                                type="radio"
                                id="r34"
                              />
                              <label className="form-check-label" htmlFor="r34">
                                Serpentine Belts, Cv Boot, U-Joint, & Axil
                                Repair
                              </label>
                              <br />
                            </li>
                            <li className="popup-feild form-check">
                              <input
                                className="form-check-input"
                                type="radio"
                                id="r35"
                              />
                              <label className="form-check-label" htmlFor="r35">
                                Battery Replacement
                              </label>
                              <br />
                            </li>
                            <li className="popup-feild form-check">
                              <input
                                className="form-check-input"
                                type="radio"
                                id="r36"
                              />
                              <label className="form-check-label" htmlFor="r36">
                                V-Belt Change
                              </label>
                              <br />
                            </li>
                          </ul>
                        </div>

                        <div className="col-md-3 pr-0">
                          <ul>
                            <li className="popup-feild form-check">
                              <input
                                className="form-check-input"
                                type="radio"
                                id="r41"
                              />
                              <label className="form-check-label" htmlFor="r41">
                                Tires
                              </label>
                              <br />
                            </li>
                            <li className="popup-feild form-check">
                              <input
                                className="form-check-input"
                                type="radio"
                                id="r42"
                              />
                              <label className="form-check-label" htmlFor="r42">
                                Pump & Nozzles Service
                              </label>
                              <br />
                            </li>
                            <li className="popup-feild form-check">
                              <input
                                className="form-check-input"
                                type="radio"
                                id="r43"
                              />
                              <label className="form-check-label" htmlFor="r43">
                                Alternator and Starter Replacements
                              </label>
                              <br />
                            </li>
                            <li className="popup-feild form-check">
                              <input
                                className="form-check-input"
                                type="radio"
                                id="r44"
                              />
                              <label className="form-check-label" htmlFor="r44">
                                Diesel Engine Service
                              </label>
                              <br />
                            </li>
                            <li className="popup-feild form-check">
                              <input
                                className="form-check-input"
                                type="radio"
                                id="r45"
                              />
                              <label className="form-check-label" htmlFor="r45">
                                Diesel Filter Change & Air Filter
                              </label>
                              <br />
                            </li>
                            <li className="popup-feild form-check">
                              <input
                                className="form-check-input"
                                type="radio"
                                id="r46"
                              />
                              <label className="form-check-label" htmlFor="r46">
                                General Check Up
                              </label>
                              <br />
                            </li>
                          </ul>
                        </div>

                        <div className="col-md-12">
                          <div className="popup-note">
                            {/** <p>
                                     <b>Note:</b>
                                     It is a long established fact that a reader will be distacted by the readable content of a page when looking at its layout.
                                  </p> --> 
                          </div>
                        </div>
                      </div>
                    </div>

                    <div
                      className="col-md-2 popup-btn"
                      style={{ top: "122px" }}
                    >
                      <a href="#">GET QUOTE</a>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>*/}

      <div className="overlay"></div>

      <script>
        document.getElementById('copyright').appendChild(document.createTextNode(new
        Date().getFullYear()))
      </script>
    </>
  );
};

export default Footer;
