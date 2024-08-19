import React, {useState, useRef,useEffect, } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import axios from "axios";
const ExpertTeam = () => {
  const sliderRef = useRef(null);
  const [teamMembers, setTeamMembers] = useState([]);
  useEffect(() => {
    // Fetch team members data from the API
    const fetchTeamMembers = async () => {
      try {
        const response = await axios.get("http://127.0.0.1:8000/api/team");
        setTeamMembers(response.data);
      //  console.log(response);
      } catch (error) {
        console.error("Error fetching team members:", error);
      }
    };

    fetchTeamMembers();
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  const arrowButtonStyle = {
    display: "inline-block",
    background: "white",
    zIndex: 1,
    position: 'relative',
    borderRadius: "0",
    width: "40px",
    height: "40px",
    lineHeight: "40px",
    textAlign: "center",
    color: "black",
    fontSize: "30px",
    marginLeft: '5px',
    border: 'none',
    cursor: 'pointer',
    marginBottom: "70px"
  };

  return (
    <div>
      <section className="our-team pad-tb">
        <div className="container">
          <div className="team-txt pad-btm m1-h p1 p5 text-center">
            <h1>OUR EXPERT TEAM</h1>
            <p>
              Meet our highly dedicated Team of experts who strive to bring you
              the best quality services.
            </p>
          </div>
          <div style={{ position: "relative" }}>
            <div style={{ position: 'absolute', right: 0, top: '50%', transform: 'translateY(-50%)' }}>
              <button onClick={() => sliderRef.current.slickPrev()} style={arrowButtonStyle}>←</button>
              <button onClick={() => sliderRef.current.slickNext()} style={arrowButtonStyle}>→</button>
            </div>
          </div>
          <Slider ref={sliderRef} {...settings}>
            {teamMembers.map((member, index) => (
              <div key={index} style={{margin: "0 10px", borderBottom: "2px solid black"}}>
                <img  src={`${
                  axios.defaults.baseURL
                }storage/uploads/Team/${encodeURIComponent(
                  member.image
                )}`}
                alt={member.role}
                  style={{ width: "100%" }}
                />
                <span className="m-name" style={{ display: "block", marginTop: "10px", textAlign: "center",
                           color: "black", fontSize: "1.2rem", borderBottom: "2px solid black",
                           paddingBottom: "5px",}}>
                           {member.role}
                </span>
              </div>
            ))}
          </Slider>
        </div>
      </section>
    </div>
  );
};

// const teamMembers = [
//   {
//     name: "Chief Operating Officer",
//     image: "assets/images/Chief Operating Officer.JPG"
//   },
//   {
//     name: "Deputy General Manager Sales",
//     image: "assets/images/Director General Manager Sales.JPG"
//   },
//   {
//     name: "Manager Parts",
//     image: "assets/images/Manger Parts.JPG"
//   },
//   {
//     name: "Assistant Manager Customer Relations",
//     image: "assets/images/assistantcr.jpg"
//   },
//   {
//     name: "Service Manager Service Department",
//     image: "assets/images/servicecd.jpg"
//   } 
// ];

export default ExpertTeam;
