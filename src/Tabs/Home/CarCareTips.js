import React, { useState,useEffect } from "react";
import axios from "axios";
const CarCareTips = () => {
  const [data, setData] = useState([]);
  const [expandedIndex, setExpandedIndex] = useState(null);

  useEffect(() => {
    axios.get("/api/caretips")
      .then(response => {
        setData(response.data[0]);
        //console.log(response[0]);
      })
      .catch(error => {
        console.error("There was an error fetching the car care tips!", error);
      });
  }, []);

 const toggleExpand = (index) => {
    setExpandedIndex(index === expandedIndex ? null : index);
  };

  if (!data) return <div>Loading...</div>;

  return (
    <div>
      <section className="car-care">
        <div className="container">
          <div className="row">
            <div className="col-md-2"></div>
            <div className="col-md-8">
              <div className="car-care-txt m1-h text-center p1 pad-btm">
                <h1>{data.heading}</h1>
                <p>
                {data.description}
                </p>
              </div>
            </div>
            <div className="col-md-2"></div>
            <div className="col-md-3 pl-0">
              <div className="event-pic event-pic2">
                <img  src={`${
                  axios.defaults.baseURL
                }storage/uploads/CareTips/${encodeURIComponent(
                  data.image1
                )}`}
               // src={`assets/images/${data.image1}`}
                alt={data.image1}  />
              </div>
              <div className="blog-detail blog-detail2">
                <div className="date date2">
                  <span>22</span>
                  <p>MAR</p>
                </div>
                <div className="short-detail short-detail2">
                  <a href="#">
                    <h3>{data.imagetitle1}</h3>
                  </a>
                  <a href="#">
                    <span className="share share2">
                      <i className="fas fa-share-alt"></i>{data.imageshare1}
                    </span>
                  </a>
                  <a href="#">
                    <span className="share share2">
                      <i className="fas fa-comment"></i>{data.imagecomment1} Comments
                    </span>
                  </a>
                </div>
                <div className="event-txt event-txt2">
                  <p>
                  {data.imagedescription1}
                  </p>
                  <a href="#" className="event-btn event-btn2">
                    Read More<i className="far fa-arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>

            <div className="col-md-3 pr-0">
              <div className="event-pic event-pic2">
                <img   src={`${
                  axios.defaults.baseURL
                }storage/uploads/CareTips/${encodeURIComponent(
                  data.image2
                )}`}
                alt={data.image2} />
              </div>
              <div className="blog-detail blog-detail2">
                <div className="date date2">
                  <span>22</span>
                  <p>MAR</p>
                </div>
                <div className="short-detail short-detail2">
                  <a href="#">
                    <h3>{data.imagetitle2}</h3>
                  </a>
                  <a href="#">
                    <span className="share share2">
                      <i className="fas fa-share-alt"></i>{data.imageshare2}
                    </span>
                  </a>
                  <a href="#">
                    <span className="share share2">
                      <i className="fas fa-comment"></i>{data.imagecomment2} Comments
                    </span>
                  </a>
                </div>
                <div className="event-txt event-txt2">
                  <p>{data.imagedescription2}
                  </p>
                  <a href="#" className="event-btn event-btn2">
                    Read More<i className="far fa-arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>

            <div className="col-md-6">
              <ul className="faq-ul1">
              {data?.tips?.length > 0 ? (
              data.tips.map((tip, index) => (
                tip.heading && (
              <li key={index}>
              <h4 onClick={() => toggleExpand(index)} style={{ cursor: "pointer" }}>
              {tip.heading}
              </h4>
              <div className="faq-item" style={{ display: expandedIndex === index ? "block" : "none" }}>
                <p>{tip.addpoint}
                </p>
              </div>
            </li>
          )
        ))
      ) : (
        <li>No tips available</li> // This is optional, to handle cases where `tips` is empty
      )}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CarCareTips;
