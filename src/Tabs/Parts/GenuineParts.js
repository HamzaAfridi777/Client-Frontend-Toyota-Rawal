import React, { useState, useEffect } from "react";
import ContactUs from "../../layouts/partials/ContactUs";
import Footer from "../../layouts/partials/footer";
import Header from "../../layouts/partials/header";
import axios from "axios";
import PartsForm from "./PartsForm";
const GenuineParts = () => {
  const [parts, setParts] = useState([]);
  const [expandedIndex, setExpandedIndex] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [selectedPart, setSelectedPart] = useState(null);
  const [companyData, setCompanyData] = useState({});
  useEffect(() => {
    const fetchData = async () => {
      try {
        const DataResponse = await axios.get("/api/parts");
        const parts = DataResponse.data;
        setParts(parts);
       
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);
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
  const toggleExpand = (index) => {
    setExpandedIndex(index === expandedIndex ? null : index);
  };
  const handleBuyNowClick = (part) => {
    setSelectedPart(part);
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
    setSelectedPart(null);
  };
  return (
    <div>
      <Header />

      <section className="accessoriesSection">
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <div className="accessories-aside">
                <h6>Search Product</h6>

                <form>
                  <div className="access-feild">
                    <input type="text" placeholder="Keyword" />
                    <button>
                      <i className="fas fa-search"></i>
                    </button>
                  </div>
                </form>

                <h6>product category</h6>

                <ul className="accessories-product-navBar">
                  <li>
                    <a href="#">Toyota Accessories</a>{" "}
                    <span>
                      <i
                        className="fas fa-sort-down"
                        onClick={() => toggleExpand(0)}
                        style={{ cursor: "pointer" }}
                      ></i>
                    </span>
                    <ul
                      className="accessories-product-itms-navBar"
                      style={{
                        display: expandedIndex === 0 ? "block" : "none",
                      }}
                    >
                      <li>
                        <a href="#">Chairs</a>{" "}
                        <span>
                          <i
                            className="fas fa-sort-down"
                            onClick={() => toggleExpand(0)}
                            style={{ cursor: "pointer" }}
                          ></i>
                        </span>
                        <ol
                          className="accessories-product-itms-sub-navBar"
                          style={{
                            display: expandedIndex === 0 ? "block" : "none",
                          }}
                        >
                          <li>
                            <a href="#">Herman Chair</a>
                          </li>

                          <li>
                            <a href="#">Wishbone Chair</a>
                          </li>

                          <li>
                            <a href="#">J107 Chair</a>
                          </li>

                          <li>
                            <a href="#">Wishbone Chair</a>
                          </li>
                          <li>
                            <a href="#">J107 Chair</a>
                          </li>
                        </ol>
                      </li>
                      <li>
                        <a href="#">Floor Mats</a>{" "}
                      </li>
                      <li>
                        <a href="#">Alloys</a>{" "}
                      </li>
                      <li>
                        <a href="#">Tyres </a>{" "}
                      </li>
                      <li>
                        <a href="#">Body Kit</a>{" "}
                      </li>
                      <li>
                        <a href="#">Air Press</a>{" "}
                      </li>
                      <li>
                        <a href="#">Seat Cover</a>{" "}
                      </li>
                      <li>
                        <a href="#">Emblem</a>{" "}
                      </li>
                      <li>
                        <a href="#">Sun Shade</a>{" "}
                      </li>
                    </ul>
                  </li>

                  <li>
                    <a href="#">Spare Parts</a>{" "}
                    <span>
                      <i className="fas fa-sort-down"></i>
                    </span>
                    <ul className="accessories-product-itms-navBar">
                      {/*  <!-- <li><a href="#">1 Spare Parts</a> </li> -->*/}
                    </ul>
                  </li>
                  <li>
                    <a href="#">Lubricants</a>{" "}
                    <span>
                      <i
                        className="fas fa-sort-down"
                        onClick={() => toggleExpand(1)}
                        style={{ cursor: "pointer" }}
                      ></i>
                    </span>
                    <ul
                      className="accessories-product-itms-navBar"
                      style={{
                        display: expandedIndex === 1 ? "block" : "none",
                      }}
                    >
                      <li>
                        <a href="#">Toyota Motor Oil</a>{" "}
                        <span>
                          <i
                            className="fas fa-sort-down"
                            onClick={() => toggleExpand(1)}
                            style={{ cursor: "pointer" }}
                          ></i>
                        </span>
                        <ol
                          className="accessories-product-itms-sub-navBar"
                          style={{
                            display: expandedIndex === 1 ? "block" : "none",
                          }}
                        >
                          <li>
                            <a href="#">Dezon</a>
                          </li>

                          <li>
                            <a href="#">Taglon</a>
                          </li>

                          <li>
                            <a href="#">Petron</a>
                          </li>
                        </ol>
                      </li>
                    </ul>
                  </li>

                  <li>
                    <a href="#">Chemicals</a>{" "}
                    <span>
                      <i className="fas fa-sort-down"></i>
                    </span>
                    <ul className="accessories-product-itms-navBar">
                     
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-9">
              <div className="assessories-body">
                <div className="row justify-content-center align-items-center">
                {parts.map((part)=>(
                  <div className="col-md-4" key={part.id}>
                  <div className="asserBody-card">
                    <div className="acceBody-img">
                    <img
                    src={`${axios.defaults.baseURL}storage/uploads/parts/${encodeURIComponent(part.part_image)}`}
                    alt={part.name}
                    className="w-20 h-20 rounded-md"
                   // onError={(e) => console.error('Image loading error:', e)}
                />
                      <div className="asserBody-cont">
                        <a href="#">{part.name}</a>

                        <span>
                          <em>PKR {part.car_price}</em>
                        </span>
                      </div>
                    </div>

                    <div className="acceBody-btn">
                      <a onClick={() => handleBuyNowClick(part)} className="acc-buy-button">
                        BUY NOW
                      </a>
                    </div>
                  </div>
                </div>
                ))}
                  <p>For more products please contact dealership </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {showModal && <PartsForm part={selectedPart} handleClose={handleClose} />}
      <section className="accessoriesSection1">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <div className="accSec1-btn">
                <a href={`tel:${companyData.customer_relation_number}`}>
                      Phone: {companyData.customer_relation_number}</a>
              </div>
            </div>

            <div className="col-md-4">
              <div className="accSec1-btn">
                <a
                  href="https://www.google.com/maps/place/Toyota+Rawal+Motors/@33.541916,73.107117,16z/data=!4m5!3m4!1s0x0:0x9af8d0ff4e39a653!8m2!3d33.5423045!4d73.1070542?hl=en"
                  target="_blank"
                 
                >
                  address: {companyData.address}
                </a>
              </div>
            </div>

            <div className="col-md-4">
              <div className="accSec1-btn">
                <a href= {`mailto:${companyData.email}`}>
                  Email: {companyData.email}
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

export default GenuineParts;
