import React, { useState, useEffect } from "react";
import CarComponent from "./CarComponent";
import SUVsComponent from "./SUVsComponent";
import BusesComponent from "./BusesComponent";
import axios from "axios";
import "./Header.css";
const Header = () => {
  const [companyData, setCompanyData] = useState({});
  const [expandedIndex, setExpandedIndex] = useState(0); // Set default to show the first category
  const [activeCategory, setActiveCategory] = useState("box-car"); // Default to show Cars & MPVs

  ///Services
  const [isServicesHovered, setIsServicesHovered] = useState(false);
  const [isMechanicalHovered, setIsMechanicalHovered] = useState(false);
  //const [mechanicalServices, setMechanicalServices] = useState([]);
  // Menu toggle state
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showButton, setShowButton] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const DataResponse = await axios.get("/api/site-credentials");
        const companyData = DataResponse.data[0];
        setCompanyData(companyData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  // useEffect(() => {
  //   ///previous method
  //  // const fetchServices = async () => {
  //    // try {
  //   //     const response = await axios.get("/api/services");
  //   //     const services = response.data.data;
  //   //    // console.log(services, 'services');
  //   //     // Filter services for Mechanical category (assuming category id 1 is for Mechanical)
  //   //     const mechanical = services.filter(service => service.service_category_id === 1);
  //   //     setMechanicalServices(mechanical);
  //   //     console.log("Mechanical services set:", mechanical);
  //   //   } catch (error) {
  //   //     console.error("Error fetching services:", error);
  //   //   }
  //   // };

  //   /////new method
  //   const fetchServices = async () => {
  //     try {
  //       const response = await axios.get("/api/services");
  //       const services = response.data.data;
  //       console.log("Services fetched successfully:", services);
  //       const mechanical = services.filter(service => service.service_category_id === 1);
  //       setMechanicalServices(mechanical);
  //     } catch (error) {
  //       console.error("Error fetching services:", error);
  //       if (error.response) {
  //         console.error("Response data:", error.response.data);
  //         console.error("Response status:", error.response.status);
  //       } else if (error.request) {
  //         console.error("No response received:", error.request);
  //       } else {
  //         console.error("Error message:", error.message);
  //       }
  //     }
  //   };
  //   fetchServices();
  // }, []);

  const toggleExpand = (index) => {
    // Update the expandedIndex when a category is clicked
    setExpandedIndex(index === expandedIndex ? null : index);
  };

  const showCategory = (category) => {
    //  console.log("category", category);
    setActiveCategory(category);
  };
  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY === 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    console.log("Menu button clicked", isMenuOpen);
  };
  return (
    <div>
      <header>
        <div className="an-loader hide-loader">
          <img src="assets/images/loader-logo.png" alt="" />
          <div></div>
        </div>

        <div className="top-header">
          <div className="container">
            <div className="top-all top-all1 topheader-deal">
              <div className="deal-top">
                <p>Sunday Open</p>
              </div>
            </div>

            <div className="row align-items-center h_text-left">
              <div className="col-md-2 HT-leftwrap">
                <h3>Showroom Timings</h3>

                <ul>
                  <li>09:00 AM – 5:30 PM</li>
                  <li>
                    <span>LUNCH BREAK </span> 01:00PM-02:00PM
                  </li>
                  <li>
                    <span>FRIDAY BREAK </span> 12:30PM-02:30PM
                  </li>
                </ul>
              </div>
              <a
                href="./"
                className="col-md-8"
                id="main-logoo"
                style={{
                  display: "flex",
                  fontFamily: "Calibri",
                  fontSize: "40px",
                  textAlign: "center",
                  color: "#d3020a",
                  paddingTop: "20px",
                }}
              >
                <img
                  src="assets/images/loader-logo.png"
                  alt=""
                  style={{ height: "100%" }}
                />{" "}
                <h1>{companyData.site_title}</h1>
              </a>

              <div className="col-md-2 text-right">
                <div className="toprightHeader top-headr-rgt">
                  <div className="tr-social" style={{ paddingRight: "9px" }}>
                    <ul>
                      <li>
                        <a
                          href={companyData.facebook_link}
                          target="_blank"
                          className="fab fa-facebook-f"
                        ></a>
                      </li>
                      <li>
                        <a
                          href={companyData.twitter_link}
                          target="_blank"
                          className="fab fa-twitter"
                        ></a>
                      </li>
                      <li>
                        <a
                          href={companyData.instagram_link}
                          target="_blank"
                          className="fab fa-instagram"
                        ></a>
                      </li>
                      <li>
                        <a
                          href={companyData.linkedin_link}
                          target="_blank"
                          className="fab fa-linkedin-in"
                        ></a>
                      </li>
                      <li>
                        <a
                          href={companyData.whatsapp_number}
                          target="_blank"
                          className="fab fa-whatsapp"
                          style={{ color: "#25d366" }}
                        ></a>
                      </li>
                    </ul>
                  </div>
                  <div className="trHead-tel">
                    {companyData.customer_relation_number && (
                      <a href={`tel:${companyData.customer_relation_number}`}>
                        <span>
                          <img src="assets/images/pak.png" alt="pakistan" />
                        </span>
                        {companyData.customer_relation_number}
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="main-header">
          <div className="container">
            <div className="container-fluid">
              {/*  {showButton && (
            <button
              className="menu-button"
              onClick={toggleMenu}
            >
              &#9776; 
            </button>
          )}*/}
              {showButton && (
                <button
                  onClick={toggleMenu}
                  className="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapsibleNavbar"
                >
                  <span className="navbar-toggler-icon menu-button">
                    {" "}
                    &#9776;
                  </span>
                </button>
              )}
              {/* Menu */}
              <ul className={`menu ${isMenuOpen ? "show" : ""}`}>
                <li></li>
                <li className="active">
                  <a href="./">Home </a>
                </li>

                <li className="dropdown-nav">
                  <span>
                    <a href="#">Showroom</a>
                  </span>
                  <ul className="dropdown">
                    <li className="dropdownShowroom-nav">
                      <a
                        href="#"
                        className="car-booking"
                        onClick={() => toggleExpand(0)}
                        style={{ cursor: "pointer" }}
                      >
                        New Car Booking
                      </a>

                      <ul
                        className="dropdown dropdownShowroom-nav srdd1"
                        style={{
                          display: expandedIndex === 0 ? "block" : "none",
                        }}
                      >
                        <div className="showroomDD-subNav">
                          <ol>
                            <li
                              className={
                                activeCategory === "box-car" ? "current" : ""
                              }
                              data-targetit="box-car"
                              onClick={() => showCategory("box-car")}
                              style={{
                                cursor: "pointer",
                              }}
                            >
                              <a href="#">Cars & MPVs</a>
                            </li>
                            <li
                              className={
                                activeCategory === "box-suvs" ? "current" : ""
                              }
                              data-targetit="box-suvs"
                              onClick={() => showCategory("box-suvs")}
                              style={{
                                cursor: "pointer",
                              }}
                            >
                              <a href="#">SUVs & Pickups</a>
                            </li>
                            <li
                              className={
                                activeCategory === "box-buses" ? "current" : ""
                              }
                              data-targetit="box-buses"
                              onClick={() => showCategory("box-buses")}
                              style={{
                                cursor: "pointer",
                              }}
                            >
                              <a href="#">Buses & Vans</a>
                            </li>
                          </ol>
                        </div>

                        {/* Conditionally render the category component */}
                        {activeCategory === "box-car" && <CarComponent />}
                        {activeCategory === "box-suvs" && <SUVsComponent />}
                        {activeCategory === "box-buses" && <BusesComponent />}
                      </ul>
                    </li>
                    <li>
                      <a href="/BookingProcess">Booking Process</a>
                    </li>
                    <li>
                      <a href="/AutoFinance">Auto Financing</a>
                    </li>
                    <li>
                      <a href="/ToyotaSure">Toyota Sure</a>
                    </li>
                    <li>
                      <a href="/CampaignsPromotions">
                        Campaigns and Promotions
                      </a>
                    </li>
                  </ul>
                </li>

                <li
                  className="dropdown-nav"
                  onMouseEnter={() => setIsServicesHovered(true)}
                  onMouseLeave={() => setIsServicesHovered(true)}
                >
                  <span>
                    <a href="#">Services</a>
                  </span>
                  <ul
                    className="dropdown"
                    style={{
                      display: isServicesHovered ? "block" : "none",
                    }}
                    onMouseEnter={() => setIsServicesHovered(true)}
                    onMouseLeave={() => setIsServicesHovered(true)}
                  >
                    <li
                      className="service-nav"
                      onMouseEnter={() => setIsMechanicalHovered(true)}
                      onMouseLeave={() => setIsMechanicalHovered(true)}
                    >
                      <a href="#">Mechanical</a>

                      <ul
                        className="dropdown sub-service"
                        id="dd-service"
                        style={{
                          display: isMechanicalHovered ? "block" : "none",
                        }}
                      >
                        <li>
                          <a href="/PeriodicMaintenance">
                            Periodic Maintenance
                          </a>
                        </li>
                        <li>
                          <a href="/ExpressMaintenance">Express Maintenance</a>
                        </li>
                        <li>
                          <a href="/GeneralRepair">General Repair</a>
                        </li>
                        <li>
                          <a href="/MobileService">Mobile Service</a>
                        </li>
                        <li>
                          <a href="/Warranty">Warranty</a>
                        </li>
                        <li>
                          <a href="/ExtendedWarranty">Extended Warranty</a>
                        </li>
                        <li>
                          <a href="/CampaignsPromotions">
                            Campaigns and Promotions
                          </a>
                        </li>
                        {/*{mechanicalServices.map(service => (
                      <li key={service.id}>
                        <a href={`/${service.name.replace(/\s+/g, '')}`}>
                          {service.name}
                        </a>
                      </li>
                    ))}*/}
                      </ul>
                    </li>
                    <li className="service-nav2">
                      <a href="/BodyPaintService">Body and Paint</a>
                    </li>
                    <li>
                      <a href="/CampaignsPromotions">
                        Campaigns and Promotions
                      </a>
                    </li>
                  </ul>
                </li>

                <li className="dropdown-nav">
                  <span>
                    <a href="#">Parts</a>
                  </span>
                  <ul className="dropdown">
                    <li>
                      <a href="/GenuineParts">Genuine Parts</a>
                    </li>
                    <li>
                      <a href="/Accessories">Accessories</a>
                    </li>
                    <li>
                      <a href="/CampaignsPromotions">
                        Campaigns and Promotions
                      </a>
                    </li>
                  </ul>
                </li>

                <li className="dropdown-nav">
                  <span>
                    <a href="#">Customer Relations</a>
                  </span>
                  <ul className="dropdown">
                    <li>
                      <a href="/CRActivities">CR Activities</a>
                    </li>
                    <li>
                      <a href="/CROnlineAppointment">Online Appointment</a>
                    </li>
                    <li>
                      <a href="/OnlineComplaints">Online Complaints</a>
                    </li>
                    <li>
                      <a href="/Loyalty">Loyalty Club</a>
                    </li>
                    <li>
                      <a href="/CampaignsPromotions">
                        Campaigns and Promotions
                      </a>
                    </li>
                    <li>
                      <a href="/Care">Care and Preventions</a>
                    </li>
                    <li>
                      <a href="/CheckVehicleHistory">Check Vehicle History</a>
                    </li>
                    <li>
                      <a href="/CustomerComment">Customer Comment Form</a>
                    </li>
                    <li>
                      <a href="/Faqs">FAQ's</a>
                    </li>
                  </ul>
                </li>

                <li className="dropdown-nav">
                  <span>
                    <a href="#">About Us</a>
                  </span>
                  <ul className="dropdown">
                    <li>
                      <a href="/AboutUs">History</a>
                    </li>
                    <li>
                      <a href="/AboutUs#vision&mission">Vision and Mission</a>
                    </li>
                    <li>
                      <a href="/AboutUs">Award and Events</a>
                    </li>
                  </ul>
                </li>

                <li>
                  <a href="/Insurance">Insurance</a>
                </li>
                <li>
                  <a href="/Career">Careers</a>
                </li>

                <li>
                  <a href="/CROnlineAppointment">Online Appointment</a>
                </li>
                <li>
                  <a href="/CampaignsPromotions" className="blink">
                    PROMOTIONS
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <a
          href={`tel:${companyData.customer_relation_number}`}
          className="whatsapp"
        >
          {companyData.customer_relation_number}{" "}
          <i className="fas fa-phone"></i>
        </a>
        <a
          href={`tel:${companyData.customer_relation_number}`}
          className="icon-whtsapp"
        >
          {" "}
          <i className="fas fa-phone"></i>
        </a>
      </header>
    </div>
  );
};

export default Header;
