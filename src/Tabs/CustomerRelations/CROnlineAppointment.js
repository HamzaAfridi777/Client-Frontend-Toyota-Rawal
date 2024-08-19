import React, { useEffect, useRef, useState } from "react";
import Header from "../../layouts/partials/header";
import Footer from "../../layouts/partials/footer";
import "intl-tel-input/build/css/intlTelInput.css";
import axios from "axios";
import "intl-tel-input/build/css/intlTelInput.css";
const CROnlineAppointment = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    appointment_date: "",
    registration_number: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === "appointment_date") {
      const formattedDate = new Date(value)
        .toISOString()
        .slice(0, 19)
        .replace("T", " ");
      setFormData((prev) => ({
        ...prev,
        [name]: formattedDate,
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setTimeout(async () => {
    //  console.log("Form Data Before Submit:", formData);

      try {
        const response = await axios.post("/api/appointments", formData);
        console.log("Form submitted successfully:", response.data);
        alert(response.data.message);
      } catch (error) {
        console.error("Submission error:", error.response || error);
        alert("There was an error submitting the form.");
      }
    }, 100);
  };
  const [selectedImage, setSelectedImage] = useState(0);
  const totalImages = 3;

  const handlePrevClick = () => {
    setSelectedImage((prevSelectedImage) =>
      prevSelectedImage === 0 ? totalImages - 1 : prevSelectedImage - 1
    );
  };

  const handleNextClick = () => {
    setSelectedImage((prevSelectedImage) =>
      prevSelectedImage === totalImages - 1 ? 0 : prevSelectedImage + 1
    );
  };

  const getImageStyle = (index) => {
    if (index === selectedImage) {
      return {
        width: "120px",
        height: "120px",
        transition: "width 0.3s",
        zIndex: 1,
        transform: "scale(1.2)",
        margin: "0 10px",
      };
    }
    return {
      width: "80px",
      height: "auto",
      transition: "width 0.3s",
      opacity: 0.6,
      margin: "0 10px",
    };
  };

  const getDisplayStyle = (index) => {
    if (
      index === selectedImage ||
      index === (selectedImage + 1) % totalImages ||
      index === (selectedImage + totalImages - 1) % totalImages
    ) {
      return { display: "inline-block" };
    }
    return { display: "none" };
  };

  return (
    <>
      <Header />
      <section
        className="customerRelation-Banner"
        style={{
          backgroundImage: "url(assets/images/banner/customer-relation.jpg",
        }}
      >
        <div className="customRelBanner-logo"></div>

        <div className="container">
          <div className="col-md-8">
            <div className="customRelBanner-form">
              <h4>Online Appointment</h4>
              <form onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-md-6">
                    <input
                      type="text"
                      name="name"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="col-md-6">
                    <input
                      type="email"
                      name="email"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="col-md-6">
                    <div className="form-select">
                      <select
                        name="subject"
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
                        value={formData.subject}
                        onChange={handleInputChange}
                        required
                      >
                        <option value="" disabled>
                          Subject Form
                        </option>
                        <option value="Prepaid Periodic Maintenance">
                          Prepaid Periodic Maintenance
                        </option>
                        <option value="Express Maintenance">
                          Express Maintenance
                        </option>
                        <option value="General Repair">General Repair</option>
                        <option value="Body And Paint">Body And Paint</option>
                        <option value="Top Wash">Top Wash</option>
                        <option value="Claim Warranty">Claim Warranty</option>
                        <option value="1st Free Checkup">
                          1st Free Checkup
                        </option>
                        <option value="Mobile Service">Mobile Service</option>
                        <option value="Toyota Sure">Toyota Sure</option>
                        <option value="Seasonal Campaign">
                          Seasonal Campaign
                        </option>
                        <option value="Others">Others</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <input
                      //  ref={phoneInputRef}
                      name="phone"
                      type="tel"
                      placeholder="312-3456789"
                      value={formData.phone || ""}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="col-md-6">
                    <input
                      type="datetime-local"
                      name="appointment_date"
                      required
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
                      value={formData.appointment_date}
                      onChange={handleInputChange}
                    />
                    <span className="validity"></span>
                  </div>
                  <div className="col-md-6">
                    <input
                      type="text"
                      name="registration_number"
                      placeholder="Registration Number"
                      value={formData.registration_number}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="col-md-12 mt-3">
                    <textarea
                      name="message"
                      placeholder="Your Message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                    ></textarea>
                  </div>
                  <div className="col-md-12">
                    <button type="submit">Submit</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section
        className="changes"
        style={{ backgroundImage: "url(assets/images/banner/change.png)" }}
      >
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="changes-txt m1-h m2-h text-center">
                <h1>VALUE ADDED SERVICES</h1>
                {/*<!-- <h3>For Any QUERY REGARDING</h3> -->*/}
              </div>
            </div>
            <div className="col-md-1"></div>
            <div className="col-md-6 mt-5 mb-5">
              <div className="check">
                <ul className="check-list">
                  <li>
                    <img src="assets/images/check.png" />
                    <a href="extended-warranty.php">Extended Warranty</a>
                  </li>
                  <li>
                    <img src="assets/images/check.png" />
                    <a href="Loyalty.php">Loyalty Club Card</a>
                  </li>
                  <li>
                    <img src="assets/images/check.png" />
                    <a href="periodic-maintenance.php">
                      Prepaid Periodic Maintenance
                    </a>
                  </li>

                  <li>
                    <img src="assets/images/check.png" />
                    EFA Engine Flush Additive
                    {/* <!-- <a href="#" className="btn-b"></a> -->*/}
                  </li>
                  <li>
                    <img src="assets/images/check.png" />

                    <a href="Insurance.php">Toyota Protection Plan</a>
                  </li>
                  <li>
                    <img src="assets/images/check.png" />
                    Injector Cleaner
                  </li>
                  <li>
                    <img src="assets/images/check.png" />
                    <a href="mobile-service.php">Mobile Service</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* New Section with Slider Functionality */}
      <section
        className="hero customerRelation-hero pad-tb"
        style={{ overflow: "hidden" }}
      >
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="hero-txt m1-h text-center p1">
                <h1>Client’s love us</h1>
                <p>
                  Keeping a well-maintained vehicle is paramount to your safety.
                  That is why our team of nearly 500 professional tech.
                </p>
              </div>

              <div
                className="col-md-8 client-pic product-slid"
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  margin: "0 auto 40px auto",
                  position: "relative",
                  overflow: "hidden",
                  marginTop: "20px",
                }}
              >
                <button
                  className="prev-button"
                  onClick={handlePrevClick}
                  style={{
                    cursor: "pointer",
                    background: "none",
                    border: "none",
                    fontSize: "2rem",
                    position: "absolute",
                    left: 0,
                    zIndex: 2,
                  }}
                >
                  {"<"}
                </button>
                <div
                  className="slider"
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    width: "320px",
                  }}
                >
                  {[0, 1, 2, 3].map((index) => (
                    <img
                      key={index}
                      src={`assets/images/customer-relation/client${
                        index + 1
                      }.png`}
                      alt={`client${index + 1}.png`}
                      onClick={() => setSelectedImage(index)}
                      style={{
                        ...getImageStyle(index),
                        ...getDisplayStyle(index),
                      }}
                    />
                  ))}
                </div>
                <button
                  className="next-button"
                  onClick={handleNextClick}
                  style={{
                    cursor: "pointer",
                    background: "none",
                    border: "none",
                    fontSize: "2rem",
                    position: "absolute",
                    right: 0,
                    zIndex: 2,
                  }}
                >
                  {">"}
                </button>
              </div>

              <ul
                className="client-detail client-detal"
                style={{
                  marginTop: "20px",
                  position: "relative",
                  transition: "transform 0.5s",
                }}
              >
                <li
                  style={{
                    display: selectedImage === 0 ? "block" : "none",
                    transition: "all 0.5s",
                  }}
                >
                  <div className="all-detail">
                    <p>
                      On the other hand, we denounce with righteous indignation
                      and dislike men who are so beguiled and demoralized by the
                      charms of pleasure of the moment, so blinded by desire,
                      that they cannot foresee the pain and trouble that are
                      bound to ensue; and equal blame belongs to those who fail
                      in their duty through.
                    </p>
                  </div>
                </li>

                <li
                  style={{
                    display: selectedImage === 1 ? "block" : "none",
                    transition: "all 0.5s",
                  }}
                >
                  <div className="all-detail">
                    <p>
                      On the other hand, we denounce with righteous indignation
                      and dislike men who are so beguiled and demoralized by the
                      charms of pleasure of the moment, so blinded by desire,
                      that they cannot foresee the pain and trouble that are
                      bound to ensue; and equal blame belongs to those who fail
                      in their duty through weakness of will, which is the same
                      as saying through shrinking from toil and pain.
                    </p>
                  </div>
                </li>

                <li
                  style={{
                    display: selectedImage === 2 ? "block" : "none",
                    transition: "all 0.5s",
                  }}
                >
                  <div className="all-detail">
                    <p>
                      On the other hand, we denounce with righteous indignation
                      and dislike men who are so beguiled and demoralized by the
                      charms of pleasure of the moment, so blinded by desire,
                      that they cannot foresee the pain and trouble that are
                      bound to ensue; and equal blame belongs to those who fail
                      in their duty through weakness of will, which is the same
                      as saying through shrinking from toil and pain.
                    </p>
                  </div>
                </li>

                <li
                  style={{
                    display: selectedImage === 3 ? "block" : "none",
                    transition: "all 0.5s",
                  }}
                >
                  <div className="all-detail">
                    <p>
                      On the other hand, we denounce with righteous indignation
                      and dislike men who are so beguiled and demoralized by the
                      charms of pleasure of the moment, so blinded by desire,
                      that they cannot foresee the pain and trouble that are
                      bound to ensue; and equal blame belongs to those who fail
                      in their duty through weakness of will, which is the same
                      as saying through shrinking from toil and pain.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section
        className="number-count customerRelation-count"
        style={{ backgroundImage: "url(assets/images/banner/num-banner.png)" }}
      >
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="cRelc-cont">
                <h6>why you should Choose us</h6>
                <p>
                  Keeping a well-maintained vehicle is paramount to your safety.
                  That is why our team of nearly 500 professional tech-
                </p>
              </div>

              <ul className="counter">
                <li>
                  <span className="count">10</span>
                  <span>+</span>
                  <h3>Years on the market </h3>
                </li>
                <li>
                  <span className="count">100</span>
                  <span>%</span>
                  <h3>Toyota Certified technician </h3>
                </li>
                <li>
                  <span className="count">98</span>
                  <span>%</span>
                  <h3>Customer Satisfation </h3>
                </li>
                <li>
                  <span className="count">97</span>
                  <span>%</span>
                  <h3>Employee Satisfaction</h3>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

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
          style={{ border: 0, allowfullscreen: "", loading: "lazy" }}
        ></iframe>
      </section>
      <Footer />
    </>
  );
};

export default CROnlineAppointment;
