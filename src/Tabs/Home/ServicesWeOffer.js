import React,{useState,useEffect} from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import axios from 'axios';
import { Link } from 'react-router-dom';

const ServicesWeOffer = () => {
  const [serviceData, setServiceData] = useState([]);
  const [companyData, setCompanyData] = useState({});
  useEffect(() => {
    const fetchData = async () => {
      const DataResponse = await axios.get("/api/services");
      const serviceData = DataResponse.data.data;
      setServiceData(serviceData);
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
  // Slider settings
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  const serviceSlideStyle = {
    padding: '0 15px',
    textAlign: 'center'
  };

  const serviceImageStyle = {
    maxWidth: '100%',
    marginBottom: '10px'
  };

  const serviceTitleStyle = {
    color: 'white',
    fontSize: '1.5rem',
    margin: '10px 0 20px'
  };

  const containerStyle = {
    padding: '0 40px',
    position: 'relative' // Added to position the buttons correctly
  };

  return (
    <div>
      <section className="services pad-tb" style={{ backgroundImage: 'url(assets/images/banner/services-banner.png)' }}>
        <div className="container" style={containerStyle}>
          <div className="row">
            <div className="col-md-12">
              <div className="ser-txt text-center m1-h m2-h">
                <h1>Services We Offer</h1>
                <h3>Unmatchable Service Quality and Customer Satisfaction</h3>
              </div>
              <Slider {...settings}>
                {serviceData.map((service, index) => (
                  <div key={service.id} style={serviceSlideStyle}>
                    <a href={service.link}>
                      <img  src= {`${axios.defaults.baseURL}storage/uploads/services/${encodeURIComponent(service.image)}`}
                       alt={service.name} style={serviceImageStyle} />
                      <h3 style={serviceTitleStyle}>{service.name}</h3>
                    </a>
                  </div>
                ))}
              </Slider>
              <div className="text-center" style={{ marginTop: '20px' }}>
                <a href="get-in-touch.php" className="btn-b">Contact Us</a>
                <a href={`tel:${companyData.customer_relation_number}`}
                   className="btn-b">{companyData.customer_relation_number}</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

const services = [
  {
    link: "/GeneralRepair",
    image: "assets/images/ser-1.png",
    alt: "ser1",
    title: "General Repair"
  },
  {
    link: "/ExtendedWarranty",
    image: "assets/images/ser-2.png",
    alt: "ser2",
    title: "Extended Warranty"
  },
  {
    link: "/BodyPaintService",
    image: "assets/images/ser-3.png",
    alt: "ser3",
    title: "Body And Paint"
  },
  {
    link: "/PeriodicMaintenance",
    image: "assets/images/ser-4.png",
    alt: "ser4",
    title: "Periodic Maintenance"
  },
  {
    link: "/ExpressMaintenance",
    image: "assets/images/ser-5.png",
    alt: "ser5",
    title: "Express Maintenance"
  },
  {
    link: "/MobileService",
    image: "assets/images/ser-6.png",
    alt: "ser6",
    title: "Mobile Service"
  },
  {
    link: "/Warranty",
    image: "assets/images/ser-7.png",
    alt: "ser7",
    title: "Warranty"
  },
  // {
  //   link: "/ExtendedWarranty",
  //   image: "assets/images/ser-7.png",
  //   alt: "ser7",
  //   title: "ExtendedWarranty"
  // }
];

// Custom arrow components
const CustomNextArrow = (props) => {
  const { onClick } = props;
  const buttonStyle = {
    display: 'block',
    background: 'transparent',
    color: 'white',
    fontSize: '4rem',
    border: 'none',
    zIndex: 1,
    top: '50%',
    transform: 'translateY(-50%)',
    cursor: 'pointer',
    position: 'absolute',
    right: '10px'
  };
  return (
    <button
      style={buttonStyle}
      onClick={onClick}
    >
      &gt;
    </button>
  );
};

const CustomPrevArrow = (props) => {
  const { onClick } = props;
  const buttonStyle = {
    display: 'block',
    background: 'transparent',
    color: 'white',
    fontSize: '4rem',
    border: 'none',
    zIndex: 1,
    top: '50%',
    transform: 'translateY(-50%)',
    cursor: 'pointer',
    position: 'absolute',
    left: '-50px'
  };
  return (
    <button
      style={buttonStyle}
      onClick={onClick}
    >
      &lt;
    </button>
  );
};

export default ServicesWeOffer;




