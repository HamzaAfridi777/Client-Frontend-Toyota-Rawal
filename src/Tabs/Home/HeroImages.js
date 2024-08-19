import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import axios from "axios";

const HeroImages = () => {
  const [hero, setHero] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const carResponse = await axios.get("/api/getHeroImages");
        const heroData = carResponse.data;
        setHero(heroData);
        //console.log('API Response:', heroData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);
  // Slider settings
  const settings = {
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: <CustomNextArrow />, // Custom next arrow
    prevArrow: <CustomPrevArrow />, // Custom previous arrow
  };

  return (
    <div style={{ width: "100vw" }}>
      {" "}
      {/* Full screen container */}
      <Slider {...settings}>
        {hero.map((item, index) => (
          <div key={index}>
            <section className="mainBanner">
              <img
                src={`${
                  axios.defaults.baseURL
                }storage/uploads/new_arrivals/${encodeURIComponent(
                  item.car_hero_image
                )}`}
                alt={`Hero Image ${index}`}
                // className="w-20 h-20 rounded-md"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
                onError={(e) => console.error("Image loading error:", e)}
              />
            </section>
          </div>
        ))}

       {/* <div>
          <section className="mainBanner">
            <img
              src="assets/images/product/corolla-x/banner/toyotacross.png"
              alt="toyotacross"
              style={{ width: "100%", height: "100%", objectFit: "cover" }} // Full screen style
            />
          </section>
        </div>*/}
       {/* <div>
          <section className="mainBanner">
            <img
              src="assets/images/product/rocco/main-banner.jpg"
              alt="rocco"
              style={{ width: "100%", height: "100%", objectFit: "cover" }} // Full screen style
            />
          </section>
        </div>*/}
        {/*<div>
          <section className="mainBanner">
            <img
              src="assets/images/product/legender/fortuner-l.jpg"
              alt="fortuner"
              style={{ width: "100%", height: "100%", objectFit: "cover" }} // Full screen style
            />
          </section>
        </div>*/}
      </Slider>
    </div>
  );
};

// Custom arrow components
const CustomNextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <button
      className={className}
      style={{
        ...style,
        display: "block",
        background: "transparent",
        zIndex: 1,
        right: 10, // Positioning
        top: "50%", // Center vertically
        transform: "translateY(-50%)", // Adjust for center
      }}
      onClick={onClick}
    >
      Next
    </button>
  );
};

const CustomPrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <button
      className={className}
      style={{
        ...style,
        display: "block",
        background: "transparent",
        zIndex: 1,
        left: 10, // Positioning
        top: "50%", // Center vertically
        transform: "translateY(-50%)", // Adjust for center
      }}
      onClick={onClick}
    >
      Previous
    </button>
  );
};

export default HeroImages;
