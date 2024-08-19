import React, { useState, useEffect } from "react";
import axios from "axios";

const NewCarBooking = () => {
  const [carbooking, setCarBooking] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const DataResponse = await axios.get("/api/carbooking");
        const carbooking = DataResponse.data;
        setCarBooking(carbooking);
       // console.log(carbooking); // Corrected the console log to show the data
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <section
        className="new-cars pad-tb"
        style={{backgroundImage:'url(assets/images/banner/shape.png)'}}
      >
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="new-car-txt m1-h m2-h p1 text-center pad-btm">
                <h1>New Car Booking</h1>
                <p>
                  Toyota Rawal Motors offers easy booking procedures for our
                  Customers providing easy and user-friendly financial plans for
                  car booking and delivery.
                </p>
              </div>
            </div>
            {carbooking.map((booking)=>(
              <React.Fragment key={booking.id}>
            <div className="col-md-5">
              <div className="t2-cars" style={{transform: 'rotatey(175deg)'}}>
                <img
                src={`${
                  axios.defaults.baseURL
                }storage/uploads/car_booking/${encodeURIComponent(booking.image1)}`}
                className="t2-cars-1img"
                alt="Car Image 1"
                />
                <br />
                <img
                src={`${
                  axios.defaults.baseURL
                }storage/uploads/car_booking/${encodeURIComponent(booking.image2)}`}
                  className="t2-cars-2img"
                  alt="Car Image 2"
                />
              </div>
            </div>
            <div className="col-md-7">
              <div className="new-car-txt new-car-txt2 text-center m1-h p1 p5">
                <h1>Booking Process</h1>
                <ol style={{color: '#8d8b8b',lineHeight: 1.5,fontWeight: 400,fontSize: '20px',
                 listStyle:'numeric', lineHeight:1.5,marginLeft: '20px',marginBottom:'10px',
                 textAlign:"left"}}>
                  <li>{booking.note1}</li>
                  <li>{booking.note1}</li>  
                  <li>{booking.note1}</li>
                  <li> {booking.note1}</li>
                </ol>
                <a href="/GetInTouch" className="btn-b btn-c">
                  Contact Us
                </a>
                <a href="/BookingProcess" className="btn-b btn-g">
                  Book Now
                </a>
              </div>
            </div>
            </React.Fragment>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default NewCarBooking;
