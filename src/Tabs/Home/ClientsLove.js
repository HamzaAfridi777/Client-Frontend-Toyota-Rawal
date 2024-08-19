import React, { useState,useEffect } from "react";
import axios from "axios";
const ClientsLove = () => {
  const [reviews, setReviews] = useState([]);
  const [selectedImage, setSelectedImage] = useState(0);

  useEffect(() => {
    // Fetch the client reviews data from the API
    axios
      .get("/api/clientreview")
      .then((response) => {
        setReviews(response.data);
       // console.log(response);
      })
      .catch((error) => {
        console.error("There was an error fetching the reviews!", error);
      });
  }, []);



  const totalImages = 4;

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
    <div>
      <section className="hero pad-tb" style={{ overflow: "hidden" }}>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="hero-txt m1-h text-center p1" style={{ marginBottom: "40px" }}>
                <h1>Clients love us</h1>
                <p>
                  Our customer’s positive feedback always motivates us to bring
                  top quality services and maintain the highest standards.
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
                {reviews.map((review, index) => (
                    <img
                      key={review.id}
                      src={`${
                        axios.defaults.baseURL
                      }storage/uploads/client_review/${encodeURIComponent(
                        review.image1
                      )}`}
                     // src={`assets/new-img/person-av${index % 2 + 1}.png`}
                      alt={review.name}
                     // alt={`person-av${index % 2 + 1}.png`}
                      onClick={() => setSelectedImage(index)}
                      style={{ ...getImageStyle(index), ...getDisplayStyle(index) }}
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
              {reviews.map((review, index) => (
                <li key={review.id} style={{ display: selectedImage === index ? "block" : "none", transition: "all 0.5s" }}>
                  <span className="name">{review.name}</span>
                  <img
                    src="assets/images/star.png"
                    alt="star"
                    className="star"
                  />
                  <div className="men-service">
                    <p>
                      Service <span>{review.service}</span>
                    </p>
                  </div>
                  <div className="all-detail">
                    <p>{review.servicedescription}</p>
                  </div>
                </li>
              ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ClientsLove;
