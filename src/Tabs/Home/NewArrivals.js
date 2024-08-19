import React, { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import axios from "axios";

const NewArrivals = () => {
  const sliderRef = useRef(null);
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
  };
  const [arrivalData, setArrivalData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const DataResponse = await axios.get("/api/new-arrivals");
      const arrivalData = DataResponse.data;
      setArrivalData(arrivalData);
    };
    fetchData();
  }, []);
  return (
    <div style={{ marginTop: 0, paddingTop: 0 }}>
      <section className="new-arrival" style={{ padding: "20px 0" }}>
        <div className="container" style={{ padding: "0 15px" }}>
          <div className="row">
            <div className="col-md-12">
              <div
                className="arriv-txt m1-h m2-h text-center"
                style={{ marginTop: "30px" }}
              >
                <h1>New Arrivals</h1>
                <div style={{ position: "relative" }}>
                  <h3 style={{ display: "inline-block" }}>
                    LATEST RELEASED CAR MODELS
                  </h3>
                  <div
                    style={{
                      position: "absolute",
                      right: 0,
                      top: "50%",
                      transform: "translateY(-50%)",
                    }}
                  >
                    <button
                      onClick={() => sliderRef.current.slickPrev()}
                      style={arrowButtonStyle}
                    >
                      ←
                    </button>
                    <button
                      onClick={() => sliderRef.current.slickNext()}
                      style={arrowButtonStyle}
                    >
                      →
                    </button>
                  </div>
                </div>
              </div>
              <Slider ref={sliderRef} {...settings}>
                {arrivalData.map((arrival, index) => (
                  <div key={index}>
                    <li
                      style={{
                        backgroundImage:
                          "linear-gradient(rgba(0, 0, 0, 0.9), rgba(189, 0, 0, 0.82)), url(assets/images/ar-3.jpg)",
                        boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.3)",
                        listStyle: "none",
                        margin: "0 10px",
                        padding: "10px",
                        borderRadius: "10px",
                      }}
                    >
                      <Link
                        to={`/product/${arrival.id}`}
                        state={{ car: arrival }}
                      >
                        <div className="ariv-txt ariv-txt-new">
                          <h1>
                            {arrival.car_name}
                            <br />
                            <span style={{ fontSize: "28px" }}></span>
                          </h1>
                          <h3>Starting From PKR {arrival.car_price}/-</h3>
                        </div>
                        <div className="ariv-img">
                          <img
                            src={`${
                              axios.defaults.baseURL
                            }storage/uploads/new_arrivals/${encodeURIComponent(
                              arrival.car_card_image
                            )}`}
                            alt={arrival.car_name}
                            style={{ position: "relative", zIndex: 2 }}
                            onError={(e) =>
                              console.error("Image loading error:", e)
                            }
                          />
                        </div>
                      </Link>
                    </li>
                  </div>
                ))}
                <div></div>
              </Slider>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

const arrowButtonStyle = {
  display: "inline-block",
  background: "white",
  zIndex: 1,
  position: "relative",
  borderRadius: "50%",
  width: "40px",
  height: "40px",
  lineHeight: "40px",
  textAlign: "center",
  color: "black",
  fontSize: "30px",
  marginLeft: "5px",
  border: "none",
};

export default NewArrivals;
