import React,{useState,useEffect} from "react";
import Header from "../../layouts/partials/header";
import ContactUs from "../../layouts/partials/ContactUs";
import Footer from "../../layouts/partials/footer";
import axios from "axios";
const BookingProcess = () => {
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
    <>
      <Header />
      <section className="text-booking pad-tb">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="process-text m1-h m2-h p1">
                <p>Dear Customers,</p>
                <p>
                  Thank you for your overwhelming preference of Toyota vehicles.
                  While purchasing a Toyota vehicle please remain mindful of the
                  following guidelines:
                </p>
                <h3>NOTE:</h3>
                <ol style={{color: "#000",lineHeight: 1.5,fontWeight: 400,fontSize: "16px",
                 listStyle:"numeric", lineHeight:1.5,marginLeft: "20px"}}>
                  <li>
                    Customer biometric is must in the dealership before making
                    the pay order from the bank.
                  </li>
                  <li>
                    Make Pay Order/demand draft for the price of the vehicle you
                    are booking in the name of INDUS MOTOR COMPANY LTD on A/C of
                    CUSTOMER NAME.
                  </li>
                  <li>Bring valid orignal CNIC.</li>
                  <li>
                    All prices are provisional and subject to change without
                    prior notice. PRICES ARE INCLUSIVE OF FREIGHT CHARGES.
                  </li>
                </ol>
                <h3>PARTIAL PAYMENT POLICY </h3>
                <div className="row">
                  <div className="col-lg-6 col-md-6"> 
                  
                    <ol  style={{color: "#000",lineHeight: 1.5,fontWeight: 400,fontSize: "16px",
                     listStyle:"numeric", lineHeight:1.5, marginLeft: "20px"}}>
                    {arrivalData.map((item,id)=>(
                       <li key={id}>{item.car_type} ({item.car_price})</li>  ))}
                 {/*<li>TOYOTA COROLLA 1.6 & 1.8 (2,500,000)</li>
                      <li>TOYOTA COROLLA CROSS X MID & HIGH (3,000,000)</li>
                      <li>TOYOTA HILUX S/C ALL & D/C STD (2,500,000)</li>
                      <li>TOYOTA HILUX REVO (4,000,000)</li>
                           <li>TOYOTA FORTUNER (5,000,000)</li>*/}
                  </ol>
                  </div>
                  <div className="col-lg-6 col-md-6">
                    <ol></ol>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <ContactUs />
      <Footer />
    </>
  );
};

export default BookingProcess;
