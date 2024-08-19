import React from 'react';
import ContactUs from '../../layouts/partials/ContactUs';
import Footer from '../../layouts/partials/footer';
import Header from '../../layouts/partials/header';

const Loyalty = () => {
  return (
    <div>
    <Header/>
    
    <section>
       <div id="loyalty-card">
          <div className="col-lg-12 d-flex">
           {/*  <!-- <div className="col-lg-1 col-md-1 col-sm-2"><img src="assets/images/loader-logo.png" alt="" style="width:63px;"></div> -->
  <!-- <h2 className="col-lg-12 col-md-12 col-sm-12 text-center">TOYOTA RAWAL MOTORS</h2> -->*/}
          </div>
          <div className="container">
             <div className="row justify-content-center">
                <div className="col-lg-3 col-md-3 col-sm-3 card-box">
                   <h3>Cost Saving Incentive</h3>
                   <p>We have developed various cost saving schemes for our Loyalty
                      Card members. some of them are as under :
                   </p>
                   <ul>
                      <li>Flat 5% Discount on parts.</li>
                      <li>Flat 7% Discounts on all Periodic maintenance packages.</li>
                      <li>Upto 17% Discount on car Accessories utility packages.</li>
                      <li>Offer of Rs. 2000 on all car Detailing Services.</li>
                      <li>10% Discount on paint labour and one day delivery of
                         single panel replacement.
                      </li>
                   </ul>
                </div>
                <div className="col-lg-3 col-md-3 col-sm-3 card-box mt-2">
                   <h3>24-hours Free Checkup & Pickup</h3>
                   <p>Loyalty Card offers 24-hours emergency Car repair and pickup
                      services. The purpose is to provide help to our valued customers
                      when they encounter any unexpected breakdown in Rawalpindi/Islamabad
                      area as mentioned below.
                      <br/>
                      <b>Service Include:</b>
                   </p>
                   <ul>
                      <li>Technicians can be called for basic jobs within a pre-specified area
                         Covering from </li>
                      <ol style={{listStyle: "auto"}}>
                         <li>Tarnol</li>
                         <li>Barakhu</li>
                         <li>Rawat T-Chowk</li>
                         <li>Adiala Jail & Motorway Toll Plaza</li>
                      </ol>
                      <li>Car pickup service will be provided free of cost
                         if technician is unable to fix the issue on the spot.
                      </li>
                      <li>The Extent of the service provided on the spot are
                         limited, all the additional services will be provided
                         at the dealership.
                      </li>

                   </ul>
                </div>
                <div className="col-lg-3 col-md-3 col-sm-3 card-box">
                   <h3>How to get you Card</h3>
                   <p>You can get you Loyalty Card membership in very simple way.</p>
                   <ul>
                      <li>Please provide us with your vehicle's basic information and get registered.</li>
                      <li>The membership fee is annual.</li>
                      <li>The membership card is to be renewed annually.</li>
                   </ul>
                   <div className="row justify-content-center text-center">
                      <div className="col-lg-5 col-md-5 card-subbox">
                         <h6>20 <span>%<br/>OFF</span></h6> Engine Tuning
                      </div>
                      <div className="col-lg-5 col-md-5 card-subbox">
                         <h6>20 <span>%<br/>OFF</span></h6> Genral Checkup
                      </div>
                      <div className="col-lg-5 col-md-5 card-subbox">
                         <h6>Free </h6>Oil Filter Replace (Labour Only)
                      </div>
                      <div className="col-lg-5 col-md-5 card-subbox">
                         <h6>Free</h6>Body and Paint Inspection
                      </div>
                   </div>
                </div>
             </div>
          </div>
          <div className="col-lg-6 offset-5"><img src="assets/images/product/ToyotaYarisColor/car3.png" alt=""
                style={{width: "100%",margin:"-135px -80px -100px -43px"}}/></div>

       </div>
    </section>
<ContactUs/>
<Footer/>
    </div>
  );
}

export default Loyalty;
