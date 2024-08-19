import React, { useRef, useEffect,useState } from "react";
import Footer from "../../layouts/partials/footer";
import Header from "../../layouts/partials/header";
import "intl-tel-input/build/css/intlTelInput.css";
import intlTelInput from "intl-tel-input";
import VechileModal from "./VechileModal";

const CheckVehicleHistory = () => {

   const [showModal, setShowModal] = useState(false);
   const handleSubmitClick = (event) => {
      event.preventDefault(); // Prevent the default form submission
     // setSelectedPart(part);
     console.log("Submit button clicked"); // Debugging step
      setShowModal(true);
      console.log("showModal after setShowModal(true):", showModal); // Debugging step
    };
  
    const handleClose = () => {
      setShowModal(false);
     // setSelectedPart(null);
    };


  // const phoneInputRef = useRef(null);
  // useEffect(() => {
  //   if (phoneInputRef.current) {
  //     intlTelInput(phoneInputRef.current, {
  //       preferredCountries: ["pk"],
  //       separateDialCode: true,
  //       utilsScript:
  //         "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js",
  //     });
  //   }
  // }, []);

  return (
    <div>
      <Header />

      <section
        className="customerRelation-Banner contectUs-banner"
        style={{
          backgroundImage: "url(assets/images/banner/customer-relation.jpg",
        }}
      >
        <div className="container">
          <div className="col-md-8">
            <div className="customRelBanner-form">
              <h4>Vehicle History</h4>

              <form>
                <div className="row">
                  <div className="col-md-6">
                    <input type="text" placeholder="Your Name" />
                  </div>

                  {/*<div className="col-md-6">
                    <input type="email" placeholder="Your Email" />
                  </div>*/}

                  <div className="col-md-6">
                    <div className="form-select">
                      <select
                        required
                       // id="play_type"
                       // name="play_type"
                        className="form-control form-select"
                        style={{
                          borderWidth: "1px",
                          borderColor: "rgb(58,58,58)",
                          borderStyle: "solid",
                          borderRadius: "5px",
                          backgroundColor: "rgb(241,241,241)",
                          width: "100%",
                          height: "42px",
                          marginBottom: "15px",
                          paddingLeft: "8px",
                          fontWeight: 500,
                          color: "#727272e0",
                        }}
                      >
                        <option value="" disabled selected>
                          Select Car
                        </option>
                        <option>ALTIS CVT - 1.8</option>
                        <option>
                          ALTIS GRANDE CVT - 1.8 (Beige Interior)
                        </option>
                        <option>
                          ALTIS GRANDE CVT - 1.8 (Black Interior)
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
                        <option>TOYOTA Corolla Cross Premium (Hybrid) </option>
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

                  <div className="col-md-6">
                    <input
                     // ref={phoneInputRef}
                      id="phone"
                      name="phone"
                      type="tel"
                      style={{ marginBottom: "15px" }}
                      placeholder="312-3456789"
                    />
                  </div>
                  <div className="col-md-6">
                    <input type="text" placeholder="Chasis Number" />
                  </div>

                  {/*<div className="col-md-12 mt-3">
                    <textarea placeholder="Your Message"></textarea>
                  </div>*/}

                  <div className="col-md-12">
                    <button type="submit" onClick={handleSubmitClick}>Submit</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      {showModal && <VechileModal  handleClose={handleClose} />}
      <section className="customerRelation-callAway">
        <div className="container">
          <div className="cRelCallaway-hd">
            <h6>We are one call away</h6>
            <p>Customer Assistance Center</p>
          </div>

          <div className="row">
            <div className="col-md-3">
              <div className="cRelCallaway-btn">
                <a href="#">Call Back Service</a>
              </div>
            </div>

            <div className="col-md-3">
              <div className="cRelCallaway-btn">
                <a href="#">First Call Resolution</a>
              </div>
            </div>

            <div className="col-md-3">
              <div className="cRelCallaway-btn">
                <a href="#">Sunday Operational</a>
              </div>
            </div>

            <div className="col-md-3">
              <div className="cRelCallaway-btn">
                <a href="#">Instant Response</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mapSection">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3325.4408564761648!2d73.10492801515127!3d33.54192035189732!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38dfed3c5c453fb3%3A0x9af8d0ff4e39a653!2sToyota%20Rawal%20Motors!5e0!3m2!1sen!2s!4v1638338230783!5m2!1sen!2s"
          width="600"
          height="450"
          style={{ border: "0", allowfullscreen: "", loading: "lazy" }}
        ></iframe>
      </section>
      <Footer />
    </div>
  );
};

export default CheckVehicleHistory;
