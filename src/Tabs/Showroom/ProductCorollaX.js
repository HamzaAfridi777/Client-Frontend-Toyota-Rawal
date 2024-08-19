import React, { useState, useEffect } from "react";
import ContactUs from "../../layouts/partials/ContactUs";
import Footer from "../../layouts/partials/footer";
import Header from "../../layouts/partials/header";
import { useLocation } from "react-router-dom";
import axios from "axios";

const ProductCorollaX = () => {
  const [isNavFixed, setIsNavFixed] = useState(false);
  const [isPriceListVisible, setIsPriceListVisible] = useState(false);
  const [car, setCar] = useState(null); // State to store car details
  const [selectedInterior, setSelectedInterior] = useState(null);
  const [selectedExterior, setSelectedExterior] = useState(null);
  const [selectedPerformance, setSelectedPerformance] = useState(null);
  const [selectedSafety, setSelectedSafety] = useState(null);
  const location = useLocation();

  useEffect(() => {
    if (location.state && location.state.car) {
      setCar(location.state.car);
    }
  }, [location.state]);

  useEffect(() => {
    if (car && car.interior_details && car.interior_details.length > 0) {
      setSelectedInterior(car.interior_details[0]);
    }
  }, [car]);

  useEffect(() => {
    if (car && car.exterior_details && car.exterior_details.length > 0) {
      setSelectedExterior(car.exterior_details[0]);
    }
  }, [car]);

  useEffect(() => {
    if (car && car.performance_details && car.performance_details.length > 0) {
      setSelectedPerformance(car.performance_details[0]);
    }
  }, [car]);
  // Effect for handling selected safety
  useEffect(() => {
    if (car && car.safety_details && car.safety_details.length > 0) {
      setSelectedSafety(car.safety_details[0]);
    }
  }, [car]);

  // Handle interior click
  const handleInteriorClick = (detail) => {
    setSelectedInterior(detail);
  };

  // Handle Exterior click
  const handleExteriorClick = (detail) => {
    setSelectedExterior(detail);
  };

  // Handle performance click
  const handlePerformanceClick = (performance) => {
    setSelectedPerformance(performance);
  };

  // Handle safety click
  const handleSafetyClick = (safety) => {
    setSelectedSafety(safety);
  };
  const handleScroll = () => {
    const bannerElement = document.querySelector(".productBanner");
    if (bannerElement) {
      const bannerHeight = bannerElement.offsetHeight;
      if (window.scrollY > bannerHeight) {
        setIsNavFixed(true);
      } else {
        setIsNavFixed(false);
      }
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const handlePriceListToggle = (e) => {
    e.preventDefault(); // Prevent default anchor tag behavior
    setIsPriceListVisible((prevState) => !prevState); // Toggle visibility
  };

  const handlePriceListClose = (e) => {
    e.preventDefault(); // Prevent default anchor tag behavior
    setIsPriceListVisible(false); // Close price list
  };
  if (!car || !selectedPerformance) {
    return null; // Or render a loading indicator
  }

  let carImages = [];
  if (car.categories_car_images) {
    carImages = JSON.parse(car.categories_car_images);
  }
  if (!car) {
    return null; // or render a loading indicator
  }
  return (
    <div>
      <Header />
      <section className="productBanner">
        <img
          src={`${
            axios.defaults.baseURL
          }storage/uploads/new_arrivals/${encodeURIComponent(
            car?.car_hero_image || ""
          )}`}
          alt={car?.car_hero_image || ""}
          onError={(e) => console.error("Image loading error:", e)}
        />
      </section>

      <section
        className={`productNav ${isNavFixed ? "fixed-product" : ""}`}
        style={{
          position: isNavFixed ? "fixed" : "static",
          top: 0,
          width: "100%",
          zIndex: 1000,
          backgroundColor: "#f1f1f1",
        }}
      >
        <div className="container">
          <ul
            className="prodNav"
            style={{
              display: "flex",
              justifyContent: "space-around",
              padding: "0px 0",
              listStyleType: "none",
              margin: 0,
            }}
          >
            <li className="current">
              <a href="#rang">Range</a>
            </li>
            <li>
              <a href="#interior">Interior</a>
            </li>
            <li>
              <a href="#exterior">EXTERIOR</a>
            </li>
            <li>
              <a href="#preformance">PERFORMANCE</a>
            </li>
            <li>
              <a href="#safety">SAFETY</a>
            </li>
            <li>
              <a href="#gallery">GALLERY</a>
            </li>
            <li>
              <a href="#contact">CONTACT US</a>
            </li>
          </ul>
        </div>
      </section>

      <section className="interiorSection page-section" id="rang">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              <div className="interiorSec-cont">
                <h6>{car?.car_type_description}</h6>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="exteriorSection">
        <div className="container">
          <div className="row align-items-centers">
            <div className="col-md-4">
              <div className="exteriorSec-cont">
                <h6 className="teriorSec-cont-h6">{car?.car_type}</h6>
                <p className="teriorSec-cont-p">{car?.car_type_description}</p>
                <h5>
                  PKR.{" "}
                  <span className="teriorSec-cont-h5">{car?.car_price}</span>
                </h5>

                <div className="exterior-btn">
                  <a
                    href="#"
                    className="priceList-popup"
                    onClick={handlePriceListToggle}
                  >
                    Price List
                  </a>

                  <a href="#gallery" className="last">
                    Spec Sheet
                  </a>
                </div>
              </div>
            </div>

            <div className="col-md-8">
              <div className="exteriorSec-right">
                <div className="exteriorSec-car">
                  <ul>
                    <li
                      data-mycartitle="Corolla  Altis A/T 1.8 CVT"
                      data-mycarcont="The Corolla  Altis A/T 1.8 CVT comes with all the power you want from a family drive, balanced by all the safety features you need."
                      data-mycarprice="6,974,000"
                    >
                      {" "}
                      {car?.car_type}
                    </li>
                  </ul>

                  {isPriceListVisible && (
                    <div
                      style={{
                        border: "1px solid #ccc",
                        padding: "10px",
                        position: "absolute",
                        top: "50px",
                        right: "10px",
                        backgroundColor: "#fff",
                        zIndex: "1000",
                        width: "500px",
                        boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
                        borderRadius: "4px",
                      }}
                    >
                      <a
                        href="#"
                        className="exteriorSec-closePop"
                        onClick={handlePriceListClose}
                        style={{
                          float: "right",
                          cursor: "pointer",
                          textDecoration: "none",
                          color: "red",
                        }}
                      >
                        x
                      </a>
                      <h6 style={{ fontSize: "30px" }}>COROLLA X</h6>

                      <table style={{ width: "100%" }}>
                        <thead>
                          <tr>
                            <th
                              style={{
                                borderBottom: "1px solid #ccc",
                                padding: "18px",
                                fontSize: "17px",
                                fontWeight: 600,
                              }}
                            >
                              Variant
                            </th>
                            <th
                              style={{
                                borderBottom: "1px solid #ccc",
                                padding: "18px",
                                fontSize: "17px",
                                fontWeight: 600,
                              }}
                            >
                              PRICE
                            </th>
                          </tr>
                        </thead>

                        <tbody>
                          <tr>
                            <td
                              style={{
                                borderBottom: "1px solid #ccc",
                                padding: "8px",
                              }}
                            >
                              {car?.car_type}
                            </td>
                            <td
                              style={{
                                borderBottom: "1px solid #ccc",
                                padding: "8px",
                              }}
                            >
                              PKR. {car.car_price}/-
                            </td>
                          </tr>
                        </tbody>

                        <tfoot>
                          <tr>
                            <td
                              colspan="2"
                              className="text-center"
                              style={{ padding: "8px" }}
                            >
                              ** THE PRICE IS EXCLUSIVE OF WITHHOLDING TAX.
                            </td>
                          </tr>
                        </tfoot>
                      </table>
                    </div>
                  )}
                  {carImages.length > 0 &&
                    carImages.map((image, index) => (
                      <div className="exterSecCar-img" key={index}>
                        <img
                          src={`${
                            axios.defaults.baseURL
                          }storage/uploads/new_arrivals/${encodeURIComponent(
                            image
                          )}`}
                          alt={`car_image_${index}`}
                          className="car-001"
                          onError={(e) =>
                            console.error("Image loading error:", e)
                          }
                        />
                      </div>
                    ))}
                </div>
              </div>
            </div>

            <div className="col-md-12">
              <div className="exteriorSec-color">
                <ul className="activeul">
                  <li className="car-001"> Colour : Graphite Gray</li>
                  <li className="car-002"> Colour : Strong Blue</li>
                  <li className="car-003 activecolor"> Colour : Super White</li>
                  <li className="car-004"> Colour : Silver Metallic</li>
                  <li className="car-005"> Colour : Attitude Black</li>
                  <li className="car-006"> Colour : Dorado Gold</li>
                  <li className="car-007"> Colour : Dark Blue Metallic</li>
                  <li className="car-008"> Colour : Phantom Brown</li>
                </ul>

                <ul>
                  <li className="dbrown-span" data-mycarcolor="car-008">
                    <span>
                      <i className="fas fa-check"></i>
                    </span>
                  </li>
                  <li className="fone-span" data-mycarcolor="car-006">
                    <span>
                      <i className="fas fa-check"></i>
                    </span>
                  </li>
                  <li className="navyblue-span" data-mycarcolor="car-002">
                    <span>
                      <i className="fas fa-check"></i>
                    </span>
                  </li>
                  <li className="white-span active" data-mycarcolor="car-003">
                    <span>
                      <i className="fas fa-check"></i>
                    </span>
                  </li>
                  <li className="lsilver-span" data-mycarcolor="car-004">
                    <span>
                      <i className="fas fa-check"></i>
                    </span>
                  </li>
                  <li className="dsilver-span" data-mycarcolor="car-001">
                    <span>
                      <i className="fas fa-check"></i>
                    </span>
                  </li>
                  <li className="black-span" data-mycarcolor="car-005">
                    <span>
                      <i className="fas fa-check"></i>
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="preformanceSection">
        <div className="container">
          <div className="preformanceSec-hd">
            <h6>PERFORMANCE</h6>
            <h5>Modern muscle</h5>
            <p>
              Take on any challenge with the ultimate combination of power and
              style.
            </p>
          </div>
        </div>
      </section>

      <section className="interiorViewSection page-section" id="interior">
        <div
          className="productVeiw interiorView"
          style={{
            backgroundImage: `url(${
              axios.defaults.baseURL
            }storage/uploads/new_arrivals/${encodeURIComponent(
            selectedInterior?.image // Update this line
            )})`,
             transition: 'background-image 0.5s ease-in-out', // Smooth transition
          }}
        >
          <div className="container">
            <div className="productVeiw-cont productVeiw-interior-cont">
              <h5>Interior</h5>
              <h6 className="interiorTitle">
                 {selectedInterior?.title} {/* Update this line */}
              </h6>
              <p>
              {selectedInterior?.details} {/* Update this line */}
              </p>
            </div>
          </div>
        </div>

        <div className="productView-nav">
          <div className="container">
            <ul>
              {car?.interior_details.map((detail, index) => (
                <li
                  key={index}
                  className={
                          selectedInterior?.id === detail.id
                            ? "active"
                            : ""
                        }
                        onClick={(e) =>{  e.preventDefault();  handleInteriorClick(detail)}}
                  data-interior={detail.image}
                  data-interiortitle={detail.title}
                >
                  <a href="#">
                    <img
                      src={`${
                        axios.defaults.baseURL
                      }storage/uploads/new_arrivals/${encodeURIComponent(
                        detail.image
                      )}`}
                      alt={detail.title}
                    />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="exteriorViewSection page-section" id="exterior">
        <div
          className="productVeiw exteriorView"
          style={{
            backgroundImage: `url(${
              axios.defaults.baseURL
            }storage/uploads/new_arrivals/${encodeURIComponent(
              selectedExterior?.image // Update this line
            )})`,
             transition: 'background-image 0.5s ease-in-out', // Smooth transition
          }}
        >
          <div className="container">
            <div className="productVeiw-cont productVeiw-exterior-cont">
              <h5>Exterior</h5>
              <div className="p1">
                <ul className="p1 inner-h">
                  <li>
                    <h6 className="exteriorTitle">
                      {" "}
                        {selectedExterior?.title} {/* Update this line */}
                    </h6>
                  </li>
                </ul>
              </div>
              <p>{selectedExterior?.details}</p>
            </div>
          </div>
        </div>

        <div className="productView-nav">
          <div className="container">
            <ul>
              {car?.exterior_details.map((detail, index) => (
                <li
                  key={index}
                   className={
                          selectedExterior?.id === detail.id
                            ? "active"
                            : ""
                        }
                        onClick={(e) =>{e.preventDefault(); handleExteriorClick(detail)}}
                
                  data-exterior={detail.image}
                  data-exteriortitle={detail.title}
                >
                  <a href="#">
                    <img
                      src={`${
                        axios.defaults.baseURL
                      }storage/uploads/new_arrivals/${encodeURIComponent(
                        detail.image
                      )}`}
                      alt={detail.title}
                    />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="performanceViewSection page-section" id="preformance">
        <div
          className="productVeiw performanceView"
          style={{
            backgroundImage: `url(${
              axios.defaults.baseURL
            }storage/uploads/new_arrivals/${encodeURIComponent(
              selectedPerformance?.image || ""
            )})`,
             transition: 'background-image 0.5s ease-in-out', // Smooth transition
          }}
        >
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <div className="productVeiw-cont1 productVeiw-navBar-cont">
                  <ul>
                    {car.performance_details.map((performance, index) => (
                      <li
                        key={index}
                        className={
                          selectedPerformance?.id === performance.id
                            ? "active"
                            : ""
                        }
                        onClick={(e) =>{e.preventDefault(); handlePerformanceClick(performance)}}
                        data-performance={`${
                          axios.defaults.baseURL
                        }storage/uploads/new_arrivals/${encodeURIComponent(
                          performance?.image || ""
                        )}`}
                        data-performancetitle={performance.title}
                      >
                        <a href="#">{performance.title}</a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="col-md-6 d-flex justify-content-end">
                <div className="productVeiw-cont" style={{ marginTop: "99px" }}>
                  <h5>Performance</h5>

                  <h6 className="performance-title">
                    {selectedPerformance?.title}
                  </h6>
                  <p>{selectedPerformance?.details}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="safetyViewSection page-section" id="safety">
        <div
          className="productVeiw safetyView"
          style={{
            backgroundImage: `url(${
              axios.defaults.baseURL
            }storage/uploads/new_arrivals/${encodeURIComponent(
              selectedSafety?.image || ""
            )})`,
              transition: 'background-image 0.5s ease-in-out', // Smooth transition
          }}
        >
          <div className="container">
            <div className="row align-items-end">
              <div className="col-md-6">
                <div
                  className="productVeiw-cont1 productVeiw-navBar-cont"
                  style={{ height: "100%" }}
                >
                  <ul>
                    {car.safety_details.map((safety) => (
                      <li
                        key={safety.id}
                        className={
                          selectedSafety?.id === safety.id ? "active" : ""
                        }
                        onClick={(e) =>{e.preventDefault(); handleSafetyClick(safety)}}
                        data-safety={`${
                          axios.defaults.baseURL
                        }storage/uploads/new_arrivals/${encodeURIComponent(
                          safety.image
                        )}`}
                        data-safetytitle={safety.title}
                      >
                        <a href="#">{safety.title}</a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="col-md-6  d-flex justify-content-end">
                <div className="productVeiw-cont ">
                  <h5>Safety</h5>
                  <h6 className="safety-title">{selectedSafety?.title}</h6>
                  <p>{selectedSafety?.details}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="productGallerySection page-section" id="gallery">
        <div className="container">
          <h6>Gallery</h6>

          <div className="row">
            {carImages.length > 0 ? (
              carImages.map((image, index) => (
                <div
                  className={`col-md-${index === 0 ? 8 : 4} p-0`}
                  key={index}
                >
                  <div className="prodgallery-img">
                    <a
                      href={`${
                        axios.defaults.baseURL
                      }storage/uploads/new_arrivals/${encodeURIComponent(
                        image
                      )}`}
                      data-fancybox="gallery"
                    >
                      <img
                        src={`${
                          axios.defaults.baseURL
                        }storage/uploads/new_arrivals/${encodeURIComponent(
                          image
                        )}`}
                        alt={`gallery_image_${index}`}
                      />
                    </a>
                  </div>
                </div>
              ))
            ) : (
              <div className="col-12">
                <p>No images available for this vehicle.</p>
              </div>
            )}
            <div className="col-md-4 p-0">
              <div className="prodgallery-img">
                <a
                  href="assets/images/product/corolla-x/gallery/img2.jpg"
                  data-fancybox="gallery"
                >
                  <img
                    src="assets/images/product/corolla-x/gallery/img2.jpg"
                    alt=""
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <ContactUs />
      <Footer />
    </div>
  );
};
export default ProductCorollaX;
