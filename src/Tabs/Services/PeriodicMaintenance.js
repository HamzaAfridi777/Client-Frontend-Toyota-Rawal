import React, { useRef, useEffect } from 'react';
import 'intl-tel-input/build/css/intlTelInput.css';
import intlTelInput from 'intl-tel-input';
import Header from '../../layouts/partials/header';
import ContactUs from '../../layouts/partials/ContactUs';
import Footer from '../../layouts/partials/footer';
const PeriodicMaintenance = () => {
    const phoneInputRef = useRef(null);
    const phone1InputRef = useRef(null);
  
    useEffect(() => {
      if (phoneInputRef.current) {
        intlTelInput(phoneInputRef.current, {
          preferredCountries: ['pk'],
          separateDialCode: true,
          utilsScript: 'https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js',
        });
      }
  
      if (phone1InputRef.current) {
        intlTelInput(phone1InputRef.current, {
          preferredCountries: ['pk'],
          separateDialCode: true,
          utilsScript: 'https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js',
        });
      }
    }, []);
  return (
    <>
    <Header/>
   {/** <section className="innerBanner" 
    style={{backgroundImage:"url(assets/images/banner/auto-repair-service.jpg)"}}>
       <div className="container">
          <h1>
             Periodic Maintenance
             <br/>
             Services
          </h1>
       </div>
    </section> */}
 
    <section className="auto-repair-service-section1">
       <div className="container">
          <div className="arssec1-cont">
             <p>
                RawalMotors Auto Service goes beyond the basic services you’d find at any other auto repair shop. While
                we complete all of the standard maintenance services, we also go one step further. Our certified
                technicians do thorough inspections of your vehicle, and can provide same day service. Only the work you
                authorize will be completed, and our services are guaranteed in writing and warrantied. Competitive
                pricing, quality technicians, and comprehensive service makes Rawal Auto Service the right choice for all
                of your vehicle’s needs.
             </p>
 
             <div className="big-form-bor">
                <h6>Periodic Maintenance</h6>
                <div className="form-best-deal">
                   <form>
                      <div className="row">
                         <div className="col-md-4">
                            <div className="arssec-feild">
                               <label>Car</label>
                               <select className="form-control form-control1" id="exampleFormControlSelect1">
                                  <option value="" disabled selected>Select Car</option>
                                  <option>ALTIS CVT - 1.8</option>
                                  <option>ALTIS GRANDE CVT - 1.8 (Beige Interior) </option>
                                  <option>ALTIS GRANDE CVT - 1.8 (Black Interior) </option>
                                  <option>Corolla MT 1.6</option>
                                  <option>Corolla AT 1.6</option>
                                  <option>Corolla AT 1.6SE</option>
                                  <option>TOYOTA Camry Hybrid</option>
                                  <option>TOYOTA Camry Hybrid - High Grade</option>
                                  <option>TOYOTA Camry Hybrid - Low Grade</option>
                                  <option>TOYOTA Avanza</option>
                                  <option>TOYOTA Prius</option>
                                  <option>TOYOTA YARIS 1.3L GLI MT</option>
                                  <option>TOYOTA YARIS 1.3L GLI CVT</option>
                                  <option>TOYOTA YARIS 1.3L ATIV MT</option>
                                  <option>TOYOTA YARIS 1.3L ATIV CVT</option>
                                  <option>TOYOTA YARIS 1.5L ATIV X MT</option>
                                  <option>TOYOTA YARIS 1.5L ATIV X CVT</option>
                                  <option>TOYOTA Corolla Cross Premium (Hybrid) </option>
                                  <option>TOYOTA Corolla Cross Small (Hybrid) </option>
                                  <option>TOYOTA Corolla Cross (Hybrid) </option>
                                  <option>FORTUNER G (4x2 2TR STD Petrol) </option>
                                  <option>FORTUNER SIGMA 4 (4X4 1GD HI DIESEL) </option>
                                  <option>FORTUNER V (4X4 2TR HI PETROL) </option>
                                  <option>TOYOTA LAND CRUISER PRADO 2.8 DIESEL TURBO M/T</option>
                                  <option>TOYOTA LAND CRUISER PRADO 2.8 DIESEL TURBO A/T</option>
                                  <option>TOYOTA LAND CRUISER PRADO 4.0 Petrol A/T</option>
                                  <option>TOYOTA Rush G AT</option>
                                  <option>TOYOTA Rush G MT</option>
                                  <option>TOYOTA Hilux Single Cabin</option>
                                  <option>TOYOTA REVO</option>
                                  <option>TOYOTA Hiace Deluxe</option>
                                  <option>Hiace Commuter Deluxe Std Roof 2.8L</option>
                                  <option>Hiace Commuter Deluxe High Roof 2.8L</option>
                                  <option>Hiace Tourer Deluxe High Roof AT 2.8L</option>
                                  <option>Standard Roof (Diesel) </option>
                                  <option>Standard Roof Dual AC (Diesel) </option>
                                  <option>High Roof Dual AC (Diesel) </option>
                                  <option>Standard Roof (Gasoline) </option>
                                  <option>Standard Roof Dual AC (Gasoline) </option>
                                  <option>Mid Roof Dual AC (Gasoline) </option>
                                  <option>Coaster High Roof (29- seater) </option>
                               </select>
                            </div>
                         </div>
 
                         <div className="col-md-4">
                            <div className="arssec-feild">
                               <label>Name</label>
                               <input type="text" placeholder="Name"/>
                            </div>
                         </div>
 
                         <div className="col-md-4">
                            <div className="arssec-feild">
                               <label>Email</label>
                               <input type="email" placeholder="Email Address"/>
                            </div>
                         </div>
 
                         <div className="col-md-4">
                            <div className="arssec-feild">
                               <label>Moblie Number</label>
                               <input ref={phoneInputRef} id="phone" name="phone" type="tel" placeholder="312-3456789"/>
                            </div>
                         </div>
 
                         <div className="col-md-4">
                            <div className="arssec-feild">
                               <label>WhatsApp Number</label>
                               <input ref={phone1InputRef} id="phone1" name="phone" type="tel" placeholder="312-3456789"/>
                            </div>
                         </div>
 
                         <div className="col-md-4">
                            <div className="arssec-feild">
                               <label>Periodic Maintenance</label>
                               {/** <input type="text" placeholder="Enter Periodic Maintenance"> -->*/}
                               <select name="play_type" id="play_type"
                                  style={{display: 'block',width: '100%',height: 'calc(1.5em + 0.75rem + 2px)', padding: '0.375rem 0.75rem',
                                  fontSize: '1rem',fontWeight: 400,lineHeight: 1.5,color: '#495057',
                                  backgroundColor: '#fff',backgroundClip: 'paddingBox',border: '1px solid #ced4da',
                                  borderRadius: "0.25rem"}}>
                                  <option value="" disabled selected>Milage</option>
                                  <option value="5">5,000</option>
                                  <option value="6">10,000</option>
                                  <option value="7">15,000</option>
                                  <option value="9">20,000</option>
                                  <option value="10">25,000</option>
                                  <option value="11">30,000</option>
                                  <option value="12">35,000</option>
                                  <option value="13">40,000</option>
                                  <option value="14">45,000</option>
                                  <option value="15">50,000</option>
                                  <option value="11">55,000</option>
                                  <option value="12">60,000</option>
                                  <option value="13">65,000</option>
                                  <option value="14">70,000</option>
                                  <option value="15">75,000</option>
                                  <option value="16">80,000</option>
                               </select>
 
                            </div>
                         </div>
 
 
 
                         <div className="col-md-4">
                            <div className="arssec-feild">
                               <label>Registration Number</label>
                               <input  type="text" placeholder="Registration Number Here"/>
                            </div>
                         </div>
 
                         <div className="col-md-4">
                            <div className="arssec-feild">
                               <label>Date</label>
                               <input type="datetime-local"/>
                            </div>
                         </div>
 
                         <div className="col-md-12">
                          {/**   <!-- <div className="arssec-feild">
                                  <label>Total Cost RS - <em>0/-</em></label>
                               </div>                                   -->*/}
                         </div>
 
                         <div className="col-md-12">
                            <div className="arssec-feild last">
                               <button type="submit">GET QUOTE</button>
                            </div>
                         </div>
                      </div>
                   </form>
                </div>
             </div>
          </div>
       </div>
    </section>
 
    <section className="auto-repair-service-section2">
       <div className="container">
          <div className="row align-items">
 
 
             <div className="col-md-3">
                <div className="arssec2-card" data-arssec2="card1">
                   <div className="arssec2C-img">
                      <img src="assets/images/repair-service/img1.jpg" alt=""/>
                      <h6>Engine Oil <br/>Change</h6>
 
                      <div className="arssec2C-check">
                         <img src="assets/images/repair-service/check.png" alt=""/>
                      </div>
                   </div>
 
                   <div className="arssec2C-cont">
                      <a href="#"><i className="fas fa-circle"></i> Book Now</a>
 
 
                   </div>
                </div>
             </div>
 
             <div className="col-md-3">
                <div className="arssec2-card" data-arssec2="card1">
                   <div className="arssec2C-img">
                      <img src="assets/images/repair-service/img1.jpg" alt=""/>
                      <h6>Oil Filter <br/>Change</h6>
 
                      <div className="arssec2C-check">
                         <img src="assets/images/repair-service/check.png" alt=""/>
                      </div>
                   </div>
 
                   <div className="arssec2C-cont">
                      <a href="#"><i className="fas fa-circle"></i> Book Now</a>
 
 
                   </div>
                </div>
             </div>
 
             <div className="col-md-3">
                <div className="arssec2-card" data-arssec2="card1">
                   <div className="arssec2C-img">
                      <img src="assets/images/repair-service/img1.jpg" alt=""/>
                      <h6>Gear oil <br/>change</h6>
 
                      <div className="arssec2C-check">
                         <img src="assets/images/repair-service/check.png" alt=""/>
                      </div>
                   </div>
 
                   <div className="arssec2C-cont">
                      <a href="#"><i className="fas fa-circle"></i> Book Now</a>
 
 
                   </div>
                </div>
             </div>
 
             <div className="col-md-3">
                <div className="arssec2-card" data-arssec2="card1">
                   <div className="arssec2C-img">
                      <img src="assets/images/repair-service/img2.jpg" alt=""/>
                      <h6>Brake <br/> REPAIR</h6>
 
                      <div className="arssec2C-check">
                         <img src="assets/images/repair-service/check.png" alt=""/>
                      </div>
                   </div>
 
                   <div className="arssec2C-cont">
                      <a href="#"><i className="fas fa-circle"></i>Book Now</a>
 
 
                   </div>
                </div>
             </div>
 
 
 
             <div className="col-md-3">
                <div className="arssec2-card" data-arssec2="card1">
                   <div className="arssec2C-img">
                      <img src="assets/images/repair-service/img2.jpg" alt=""/>
                      <h6>Brake <br/> Service</h6>
 
                      <div className="arssec2C-check">
                         <img src="assets/images/repair-service/check.png" alt=""/>
                      </div>
                   </div>
 
                   <div className="arssec2C-cont">
                      <a href="#"><i className="fas fa-circle"></i>Book Now</a>
 
 
                   </div>
                </div>
             </div>
             <div className="col-md-3">
                <div className="arssec2-card" data-arssec2="card1">
                   <div className="arssec2C-img">
                      <img src="assets/images/repair-service/img2.jpg" alt=""/>
                      <h6>Inspection of brake <br/>fluid level, <br/> pipes & pedal</h6>
 
                      <div className="arssec2C-check">
                         <img src="assets/images/repair-service/check.png" alt=""/>
                      </div>
                   </div>
 
                   <div className="arssec2C-cont">
                      <a href="#"><i className="fas fa-circle"></i>Book Now</a>
 
 
                   </div>
                </div>
             </div>
 
             <div className="col-md-3">
                <div className="arssec2-card" data-arssec2="card1">
                   <div className="arssec2C-img">
                      <img src="assets/images/repair-service/img3.jpg" alt=""/>
                      <h6>Inspection of <br/>Air Filter</h6>
 
                      <div className="arssec2C-check">
                         <img src="assets/images/repair-service/check.png" alt=""/>
                      </div>
                   </div>
 
                   <div className="arssec2C-cont">
                      <a href="#"><i className="fas fa-circle"></i>Book Now</a>
 
 
                   </div>
                </div>
             </div>
             <div className="col-md-3">
                <div className="arssec2-card" data-arssec2="card1">
                   <div className="arssec2C-img">
                      <img src="assets/images/repair-service/img3.jpg" alt=""/>
                      <h6>AC Filter <br/>Change</h6>
 
                      <div className="arssec2C-check">
                         <img src="assets/images/repair-service/check.png" alt=""/>
                      </div>
                   </div>
 
                   <div className="arssec2C-cont">
                      <a href="#"><i className="fas fa-circle"></i>Book Now</a>
 
 
                   </div>
                </div>
             </div>
 
             <div className="col-md-3">
                <div className="arssec2-card" data-arssec2="card1">
                   <div className="arssec2C-img">
                      <img src="assets/images/repair-service/img4.jpg" alt=""/>
                      <h6>TRANSMISSION </h6>
 
                      <div className="arssec2C-check">
                         <img src="assets/images/repair-service/check.png" alt=""/>
                      </div>
                   </div>
 
                   <div className="arssec2C-cont">
                      <a href="#"><i className="fas fa-circle"></i>Book Now</a>
 
 
                   </div>
                </div>
             </div>
 
 
             <div className="col-md-3">
                <div className="arssec2-card" data-arssec2="card1">
                   <div className="arssec2C-img">
                      <img src="assets/images/repair-service/img5.jpg" alt=""/>
                      <h6>All Fluid <br/>level Inspection </h6>
 
                      <div className="arssec2C-check">
                         <img src="assets/images/repair-service/check.png" alt=""/>
                      </div>
                   </div>
 
                   <div className="arssec2C-cont">
                      <a href="#"><i className="fas fa-circle"></i>Book Now</a>
 
 
                   </div>
                </div>
             </div>
             <div className="col-md-3">
                <div className="arssec2-card" data-arssec2="card1">
                   <div className="arssec2C-img">
                      <img src="assets/images/repair-service/img5.jpg" alt=""/>
                      <h6>All Lubricant <br/>Change </h6>
 
                      <div className="arssec2C-check">
                         <img src="assets/images/repair-service/check.png" alt=""/>
                      </div>
                   </div>
 
                   <div className="arssec2C-cont">
                      <a href="#"><i className="fas fa-circle"></i>Book Now</a>
 
 
                   </div>
                </div>
             </div>
 
 
 
             <div className="col-md-3">
                <div className="arssec2-card" data-arssec2="card1">
                   <div className="arssec2C-img">
                      <img src="assets/images/repair-service/img6.jpg" alt=""/>
                      <h6>Computerized wheel <br/> allignment </h6>
 
                      <div className="arssec2C-check">
                         <img src="assets/images/repair-service/check.png" alt=""/>
                      </div>
                   </div>
 
                   <div className="arssec2C-cont">
                      <a href="#"><i className="fas fa-circle"></i>Book Now</a>
 
 
                   </div>
                </div>
             </div>
 
             <div className="col-md-3">
                <div className="arssec2-card" data-arssec2="card1">
                   <div className="arssec2C-img">
                      <img src="assets/images/repair-service/img7.jpg" alt=""/>
                      <h6>FUEL FILTER <br/>REPLACEMENT </h6>
 
                      <div className="arssec2C-check">
                         <img src="assets/images/repair-service/check.png" alt=""/>
                      </div>
                   </div>
 
                   <div className="arssec2C-cont">
                      <a href="#"><i className="fas fa-circle"></i>Book Now</a>
 
 
                   </div>
                </div>
             </div>
 
             <div className="col-md-3">
                <div className="arssec2-card" data-arssec2="card1">
                   <div className="arssec2C-img">
                      <img src="assets/images/repair-service/img8.jpg" alt=""/>
                      <h6>ENGINE <br/> REPAIR </h6>
 
                      <div className="arssec2C-check">
                         <img src="assets/images/repair-service/check.png" alt=""/>
                      </div>
                   </div>
 
                   <div className="arssec2C-cont">
                      <a href="#"><i className="fas fa-circle"></i>Book Now</a>
 
 
                   </div>
                </div>
             </div>
 
             <div className="col-md-3">
                <div className="arssec2-card" data-arssec2="card1">
                   <div className="arssec2C-img">
                      <img src="assets/images/repair-service/img9.jpg" alt=""/>
                      <h6>SHOCKS, <br/> STRUTS & <br/>SUSPENSION</h6>
 
                      <div className="arssec2C-check">
                         <img src="assets/images/repair-service/check.png" alt=""/>
                      </div>
                   </div>
 
                   <div className="arssec2C-cont">
                      <a href="#"><i className="fas fa-circle"></i>Book Now</a>
 
 
                   </div>
                </div>
             </div>
             <div className="col-md-3">
                <div className="arssec2-card" data-arssec2="card1">
                   <div className="arssec2C-img">
                      <img src="assets/images/repair-service/img9.jpg" alt=""/>
                      <h6>Front & Rear <br/> Suspension Check</h6>
 
                      <div className="arssec2C-check">
                         <img src="assets/images/repair-service/check.png" alt=""/>
                      </div>
                   </div>
 
                   <div className="arssec2C-cont">
                      <a href="#"><i className="fas fa-circle"></i>Book Now</a>
 
 
                   </div>
                </div>
             </div>
 
             <div className="col-md-3">
                <div className="arssec2-card" data-arssec2="card1">
                   <div className="arssec2C-img">
                      <img src="assets/images/repair-service/img10.jpg" alt=""/>
                      <h6>ON-BOARD <br/> DIAGNOSTICS </h6>
 
                      <div className="arssec2C-check">
                         <img src="assets/images/repair-service/check.png" alt=""/>
                      </div>
                   </div>
 
                   <div className="arssec2C-cont">
                      <a href="#"><i className="fas fa-circle"></i>Book Now</a>
 
 
                   </div>
                </div>
             </div>
 
             <div className="col-md-3">
                <div className="arssec2-card" data-arssec2="card1">
                   <div className="arssec2C-img">
                      <img src="assets/images/repair-service/img10.jpg" alt=""/>
                      <h6>Engine <br/> Tune Up </h6>
 
                      <div className="arssec2C-check">
                         <img src="assets/images/repair-service/check.png" alt=""/>
                      </div>
                   </div>
 
                   <div className="arssec2C-cont">
                      <a href="#"><i className="fas fa-circle"></i>Book Now</a>
 
 
                   </div>
                </div>
             </div>
             <div className="col-md-3">
                <div className="arssec2-card" data-arssec2="card1">
                   <div className="arssec2C-img">
                      <img src="assets/images/repair-service/img10.jpg" alt=""/>
                      <h6>General <br/>Check up </h6>
 
                      <div className="arssec2C-check">
                         <img src="assets/images/repair-service/check.png" alt=""/>
                      </div>
                   </div>
 
                   <div className="arssec2C-cont">
                      <a href="#"><i className="fas fa-circle"></i>Book Now</a>
 
 
                   </div>
                </div>
             </div>
 
             <div className="col-md-3">
                <div className="arssec2-card" data-arssec2="card1">
                   <div className="arssec2C-img">
                      <img src="assets/images/repair-service/img11.jpg" alt=""/>
                      <h6>EMISSIONS </h6>
 
                      <div className="arssec2C-check">
                         <img src="assets/images/repair-service/check.png" alt=""/>
                      </div>
                   </div>
 
                   <div className="arssec2C-cont">
                      <a href="#"><i className="fas fa-circle"></i>Book Now</a>
 
 
                   </div>
                </div>
             </div>
 
 
             <div className="col-md-3">
                <div className="arssec2-card" data-arssec2="card1">
                   <div className="arssec2C-img">
                      <img src="assets/images/repair-service/img12.jpg" alt=""/>
                      <h6>ALTERNATOR <br/>AND STARTER <br/>REPLACEMENT </h6>
 
                      <div className="arssec2C-check">
                         <img src="assets/images/repair-service/check.png" alt=""/>
                      </div>
                   </div>
 
                   <div className="arssec2C-cont">
                      <a href="#"><i className="fas fa-circle"></i>Book Now</a>
 
 
                   </div>
                </div>
             </div>
 
             <div className="col-md-3">
                <div className="arssec2-card" data-arssec2="card1">
                   <div className="arssec2C-img">
                      <img src="assets/images/repair-service/img13.jpg" alt=""/>
                      <h6>Bearing<br/> change</h6>
 
                      <div className="arssec2C-check">
                         <img src="assets/images/repair-service/check.png" alt=""/>
                      </div>
                   </div>
 
                   <div className="arssec2C-cont">
                      <a href="#"><i className="fas fa-circle"></i>Book Now</a>
 
 
                   </div>
                </div>
             </div>
 
 
             <div className="col-md-3">
                <div className="arssec2-card" data-arssec2="card1">
                   <div className="arssec2C-img">
                      <img src="assets/images/repair-service/img19.jpg" alt=""/>
                      <h6>WATER PUMP, <br/> RADIATOR <br/> COOLING SYSTEM <br/>REPAIR </h6>
 
                      <div className="arssec2C-check">
                         <img src="assets/images/repair-service/check.png" alt=""/>
                      </div>
                   </div>
 
                   <div className="arssec2C-cont">
                      <a href="#"><i className="fas fa-circle"></i>Book Now</a>
 
 
                   </div>
                </div>
             </div>
 
 
             <div className="col-md-3">
                <div className="arssec2-card" data-arssec2="card1">
                   <div className="arssec2C-img">
                      <img src="assets/images/repair-service/img14.jpg" alt=""/>
                      <h6>TIMING BELT <br/> REPLACEMENT </h6>
 
                      <div className="arssec2C-check">
                         <img src="assets/images/repair-service/check.png" alt=""/>
                      </div>
                   </div>
 
                   <div className="arssec2C-cont">
                      <a href="#"><i className="fas fa-circle"></i>Book Now</a>
 
 
                   </div>
                </div>
             </div>
 
 
             <div className="col-md-3">
                <div className="arssec2-card" data-arssec2="card1">
                   <div className="arssec2C-img">
                      <img src="assets/images/repair-service/img15.jpg" alt=""/>
                      <h6>SERPENTINE BELTS, <br/>CV BOOT, <br/> U-JOINT, <br/> & AXIL REPAIR</h6>
 
                      <div className="arssec2C-check">
                         <img src="assets/images/repair-service/check.png" alt=""/>
                      </div>
                   </div>
 
                   <div className="arssec2C-cont">
                      <a href="#"><i className="fas fa-circle"></i>Book Now</a>
 
 
                   </div>
                </div>
             </div>
 
             <div className="col-md-3">
                <div className="arssec2-card" data-arssec2="card1">
                   <div className="arssec2C-img">
                      <img src="assets/images/repair-service/img13.jpg" alt=""/>
                      <h6>V-belt change</h6>
 
                      <div className="arssec2C-check">
                         <img src="assets/images/repair-service/check.png" alt=""/>
                      </div>
                   </div>
 
                   <div className="arssec2C-cont">
                      <a href="#"><i className="fas fa-circle"></i>Book Now</a>
 
 
                   </div>
                </div>
             </div>
 
 
             <div className="col-md-3">
                <div className="arssec2-card" data-arssec2="card1">
                   <div className="arssec2C-img">
                      <img src="assets/images/repair-service/img16.jpg" alt=""/>
                      <h6>BATTERY <br/> REPLACEMENT </h6>
 
                      <div className="arssec2C-check">
                         <img src="assets/images/repair-service/check.png" alt=""/>
                      </div>
                   </div>
 
                   <div className="arssec2C-cont">
                      <a href="#"><i className="fas fa-circle"></i>Book Now</a>
 
                   </div>
                </div>
             </div>
 
 
             <div className="col-md-3">
                <div className="arssec2-card" data-arssec2="card1">
                   <div className="arssec2C-img">
                      <img src="assets/images/repair-service/img17.jpg" alt=""/>
                      <h6>DIESEL <br/> ENGINE SERVICE </h6>
 
                      <div className="arssec2C-check">
                         <img src="assets/images/repair-service/check.png" alt=""/>
                      </div>
                   </div>
 
                   <div className="arssec2C-cont">
                      <a href="#"><i className="fas fa-circle"></i>Book Now</a>
 
                   </div>
                </div>
             </div>
             <div className="col-md-3">
                <div className="arssec2-card" data-arssec2="card1">
                   <div className="arssec2C-img">
                      <img src="assets/images/repair-service/img17.jpg" alt=""/>
                      <h6>Diesel filter <br/> change & Air Filter </h6>
 
                      <div className="arssec2C-check">
                         <img src="assets/images/repair-service/check.png" alt=""/>
                      </div>
                   </div>
 
                   <div className="arssec2C-cont">
                      <a href="#"><i className="fas fa-circle"></i>Book Now</a>
 
                   </div>
                </div>
             </div>
 
 
             <div className="col-md-3">
                <div className="arssec2-card" data-arssec2="card1">
                   <div className="arssec2C-img">
                      <img src="assets/images/repair-service/img18.jpg" alt=""/>
                      <h6>TIRES </h6>
 
                      <div className="arssec2C-check">
                         <img src="assets/images/repair-service/check.png" alt=""/>
                      </div>
                   </div>
 
                   <div className="arssec2C-cont">
                      <a href="#"><i className="fas fa-circle"></i>Book Now</a>
 
                   </div>
                </div>
             </div>
             <div className="col-md-3">
                <div className="arssec2-card" data-arssec2="card1">
                   <div className="arssec2C-img">
                      <img src="assets/images/repair-service/img18.jpg" alt=""/>
                      <h6>Pump & nozzles <br/>service </h6>
 
                      <div className="arssec2C-check">
                         <img src="assets/images/repair-service/check.png" alt=""/>
                      </div>
                   </div>
 
                   <div className="arssec2C-cont">
                      <a href="#"><i className="fas fa-circle"></i>Book Now</a>
 
                   </div>
                </div>
             </div>
             <div className="col-md-3">
                <div className="arssec2-card" data-arssec2="card1">
                   <div className="arssec2C-img">
                      <img src="assets/images/repair-service/img18.jpg" alt=""/>
                      <h6>Four wheel<br/> balancing </h6>
 
                      <div className="arssec2C-check">
                         <img src="assets/images/repair-service/check.png" alt=""/>
                      </div>
                   </div>
 
                   <div className="arssec2C-cont">
                      <a href="#"><i className="fas fa-circle"></i>Book Now</a>
 
                   </div>
                </div>
             </div>
 
 
 
 
 
          </div>
       </div>
    </section>
 
 
 
 
    {/*<!-- Start Body Content -->*/}
    <div className="main" role="main">
       <div id="content" className="content full">
          <div className="container">
             <div className="row">
                {/*<!-- Start Sidebar -->*/}
                <div className=" sidebar">
                   <div className="widget sidebar-widget widget_categories">
 
                   </div>
                </div>
                <div className="col-md-9 posts-archive">
                   <div className="tab-content">
                      <div id="saletab1" className="tab-pane">
                         <article className="post format-standard">
                            <div className="row">
                               <div className="col-md-12 col-sm-12">
                                  <h3 className="post-title"><a href="">Maintenance</a></h3>
                                  <p>Our aim to provide the vehicles with the Best Services on very Economical Price to
                                     our all valued customers . Our expertise, attention to detail, commitment to client
                                     and personal touch will enable them to ease and hassle free. We aim not only at
                                     providing excellent services but also at the realization of your desired services.
                                     We offer our service with highly skilled staff .We have team of highly Toyota
                                     qualified staff who are trained in customer services with high level of commitment,
                                     dedication and loyalty. As a result we are working with many Multinational
                                     Companies, National Companies, Govt. Departments Semi Government Department, NGOs’
                                     foreign missions and other private sector, at Karachi - Pakistan with full
                                     satisfaction. We offer the following services.</p>
                               </div>
                            </div>
                         </article>
                      </div>
                      <div id="saletab2" className="tab-pane active">
                         <article className="post format-standard">
                            <div className="row">
                               <div className="col-md-12 col-sm-12">
                                  <h3 className="post-title"><a href="">Periodic Maintenance</a></h3>
                                  <p>In periodic maintenance service, vital parts and lubes are replaced/inspected in
                                     order to prevent vehicle breakdown while driving.</p>
                                  <br />
                                  <h3 className="post-title"><a href="">Results derived from following the recommended
                                        Periodic Maintenance schedule:</a></h3>
                                  <p>We seek to provide our customers with the best and keeping them at ease at every
                                     level. Our customers are facilitated with:</p>
                                  <ul className="unordered">
                                     <li>Early problem detection and repair</li>
                                     <li>Driving comfort, safety, and peace-of-mind </li>
                                     <li>Longer vehicle service life</li>
                                  </ul>
                                  <p>No other workshop can take good care of your Toyota better than we can. From a
                                     simple brake pad replacement to a more complicated engine problem, our
                                     highly-skilled technicians can effectively diagnose and fix your vehicle in no time,
                                     ensuring you peace-of-mind and long driving pleasure.</p>
 
                                  <h3 className="post-title"><a href="">Reason for choosing Toyota Society Motors Private
                                        Limited service for repair needs</a></h3>
                                  <p>We seek to provide our customers with the best and keeping them at ease at every
                                     level. Our customers are facilitated with:</p>
                                  <ul className="unordered">
                                     <li>Toyota-certified technicians</li>
                                     <li>Use of high quality Toyota Genuine Parts </li>
                                     <li> Accurate problem diagnosing</li>
                                     <li> Fast repair</li>
                                     <li> Guaranteed Service</li>
                                  </ul>
                                  <h3 className="post-title"><a href="">Repair Services offered at Toyota Society Motors
                                        Private Limited</a></h3>
                                  <p>We seek to provide our customers with the best and keeping them at ease at every
                                     level. Our customers are facilitated with:</p>
                                  <ul className="unordered">
                                     <li>All General Repair & Maintenance</li>
                                     <li>Body & Paint Repair </li>
                                  </ul>
                               </div>
                            </div>
                         </article>
                      </div>
                      <div id="saletab3" className="tab-pane ">
                         <article className="post format-standard">
                            <div className="row">
                               <div className="col-md-12 col-sm-12">
                                  <h3 className="post-title"><a href="#">General Maintenance</a></h3>
                                  <p>General car maintenance is an important part of your car's survival. Routine
                                     maintenance is done for many reasons. Through regular maintenance you could retain
                                     the value of your car over time. Scheduled maintenance will ensure that any current
                                     problems or future problems will be looked at as (or before) they happen. Some
                                     general maintenance tasks include;</p>
                                  <ul className="unordered">
                                     <li>Car wash </li>
                                     <li>Check/replace the engine oil and replace oil filters </li>
                                     <li>Check/replace fuel filters </li>
                                     <li>Inspect or replace windshield wipers </li>
                                     <li>Check or refill windshield washer fluid </li>
                                     <li>Inspect tires for pressure and wear </li>
                                     <li>Tire balancing </li>
                                     <li>Tire rotation </li>
                                     <li>Wheel alignment </li>
                                     <li>Check, clean or replace battery terminals and top up battery fluid </li>
                                     <li>Inspect or replace brake pads </li>
                                     <li>Check or Replace brake fluid </li>
                                     <li>Check or Replace transmission fluid </li>
                                     <li>Check and Replace engine coolant </li>
                                     <li>Inspect or replace spark plugs </li>
                                     <li>Inspect or replace air filter </li>
                                     <li>Inspect or replace timing belt and other belts </li>
                                     <li>lubricate locks, latches, hinges </li>
                                     <li>Check all lights </li>
                                     <li>Tighten chassis nuts and bolts </li>
                                     <li>Check if rubber boots are cracked and need replacement </li>
                                     <li>Test electronics, e.g., Anti-lock braking system or ABS </li>
 
                                  </ul>
                                  <p>General car maintenance is an integral part to your car's long term health and
                                     should not be ignored.</p>
                               </div>
                            </div>
                         </article>
                      </div>
                      <div id="saletab4" className="tab-pane ">
                         <article className="post format-standard">
                            <div className="row">
                               <div className="col-md-12 col-sm-12">
                                  <p>
                                     Toyota Society Motors Private Limited Quick Body and Paint facility is a revolution
                                     in the car body repair industry, thanks to the efficient Toyota Production System
                                     (TPS).
                                     TPS divides the repair process into 11 stages with individual technicians
                                     specializing in different repair stages. This system minimizes unnecessary movements
                                     while maximizing productivity and expertise.
                                  </p>
                                  <br />
                                  <p>
                                     With specialization and increased efficiency, Toyota Society Motors Private Limited
                                     quick Body & Paint cuts down repair time and minimizes inconvenience to you. A light
                                     repair will take less than 2 working days while a medium repair takes only less than
                                     3 working days!
                                     This way, your car gets back in shape faster and back to you on time, every time.
                                     Guaranteed.
                                  </p>
                                  <h3 className="post-title"><a href="">General Accident Repairs</a></h3>
                                  <p>Through our highest quality repairs, precision, craftsmanship and a great finish,
                                     medium to heavy damage (more than two panels damaged) to your car is not a concern.
                                     We ensure that your car still feels and functions just like it did when you first
                                     bought it.</p>
                                  <h3 className="post-title"><a href="">Insurance Centre</a></h3>
                                  <p>As your time is important to us, we speed up the insurance claims process through
                                     onsite support. All major insurance companies are represented at the TOYOTA SOCIETY
                                     MOTORS where some surveyors are available for inspection, paperwork and approvals,
                                     on site.</p>
                               </div>
                            </div>
                         </article>
                      </div>
                      <div id="saletab5" className="tab-pane ">
                         <article className="post format-standard">
                            <div className="row">
                               <div className="col-md-12 col-sm-12">
                                  <p>As fast pace life requires fast pace solutions, Toyota Society Motor’s Express
                                     Maintenance offers all Toyota customers a menu of fast, competitively priced
                                     services and along with the most common wear and tear parts and lubrication
                                     services. This friendly "while-u-wait" service needs no appointment. Simply choose
                                     from the menu and pay for your selection.</p>
                                  <br />
                                  <p>Express Service uses only Toyota Genuine Parts and offers a six (6) month warranty
                                     on parts and labor. Express Service maintains "Full Service History" of vehicles
                                     checked in. All work is automatically added to customer’s vehicle history on our
                                     software.
                                     Customers will find a remarkable difference in our prices as of our competitors once
                                     they avail our services. Our Express Maintenance includes the following; </p>
                                  <h3 className="post-title"><a href="">In the interest of customer satisfaction, prices in
                                        the express service are generally lower than the parent workshop.</a></h3>
                                  <p>Through our highest quality repairs, precision, craftsmanship and a great finish,
                                     medium to heavy damage (more than two panels damaged) to your car is not a concern.
                                     We ensure that your car still feels and functions just like it did when you first
                                     bought it.</p>
                                  <h3 className="post-title"><a href="">Insurance Centre</a></h3>
                                  <p>As your time is important to us, we speed up the insurance claims process through
                                     onsite support. All major insurance companies are represented at the Toyota Society
                                     Motors Private Limited where some surveyors are available for inspection, paperwork
                                     and approvals, on site.</p>
                                  <ul className="unordered">
                                     <li>Oil & filter change </li>
                                     <li>Computerized wheel alignment check </li>
                                     <li>Tire change and balance </li>
                                     <li>Replace brake pads & shoes </li>
                                     <li>Replace / reface brake disk/drum </li>
                                     <li>Battery change and system check </li>
                                     <li>Transmission oil change (ATM/MTM) </li>
                                     <li>Differential oil change </li>
                                     <li>Air filter change </li>
                                     <li>Wiper blade change </li>
                                     <li>Bulb replacement</li>
 
                                  </ul>
                               </div>
                            </div>
                         </article>
                      </div>
                      <div id="saletab6" className="tab-pane ">
                         <article className="post format-standard">
                            <div className="row">
                               <div className="col-md-12 col-sm-12">
                                  <h3 className="post-title"><a href="">Checking Engine Oil</a></h3>
                                  <h3 className="post-title"><a href="">With the engine at operating temperature and turned
                                        off, check the oil level on the dipstick.</a></h3>
                                  <ul className="unordered">
                                     <li>Park the vehicle on level ground. After turning off the engine, wait a few
                                        minutes for the oil to drain back in the bottom of the engine. </li>
                                     <li>Holds a drag under the end pull the dipstick out. </li>
                                     <li>Wipe the dipstick clean. </li>
                                     <li>Reinsert the dipstick fully. </li>
                                     <li> Holding a rag under the end, pull the dipstick out and check the oil level.
                                     </li>
                                     <li>Wipe the dipstick and reinsert it fully. </li>
                                     <li> </li>
 
                                  </ul>
                                  <h3 className="post-title"><a href="">Washer Fluid</a></h3>
                                  <h4> Do not use any fluid other than washer fluid</h4>
                                  <ul className="unordered">
                                     <li>Do not use soapy water or engine antifreeze instead of washer fluid. </li>
                                     <li>Doing so may cause streaking on the vehicle's painted surfaces. </li>
                                  </ul>
                                  <h4> Diluting washer fluid</h4>
                                  <ul className="unordered">
                                     <li>Dilute washer fluid with water as necessary. </li>
                                     <li>Refer to the freezing temperatures listed on the washer fluid tank </li>
                                  </ul>
                                  <h3 className="post-title"><a href="">Notice</a></h3>
                                  <h4> To prevent serious engine damage</h4>
                                  <ul className="unordered">
                                     <li>Check the oil level on regular basis</li>
                                  </ul>
                                  <h4> When replacing the engine oil</h4>
                                  <ul className="unordered">
                                     <li>Be careful not to spill engine oil on the vehicle components. </li>
                                     <li>Avoid overfilling, as the engine could be damaged.</li>
                                     <li>Check the oil level on the dipstick every time you refill the vehicle.</li>
                                     <li>Be sure the engine oil filler cap is properly tightened.</li>
                                  </ul>
 
                               </div>
                            </div>
                         </article>
                      </div>
                      <div id="saletab7" className="tab-pane ">
                         <div className="row">
                            <div className="gallery-filter">
                               <ul className="nav nav-pills sort-source" data-sort-id="gallery" data-option-key="filter">
                                  <li data-option-value="*" className="active"><a href="#"><i className="fa fa-th"></i>
                                        <span>Show All</span></a></li>
                                  <li data-option-value=".format-BodyPaint"><a href="#"><i className="fa fa-picture-o"></i>
                                        <span>BodyPaint</span></a></li>
                                  <li data-option-value=".format-Recieption"><a href="#"><i className="fa fa-picture-o"></i>
                                        <span>Recieption</span></a></li>
                                  <li data-option-value=".format-WorkShop"><a href="#"><i className="fa fa-picture-o"></i>
                                        <span>WorkShop</span></a></li>
                               </ul>
                            </div>
                            <div className="row">
                            </div>
                         </div>
                      </div>
                      <div id="saletab8" className="tab-pane">
                         <div className="row text-center">
                            <ul className="sort-destination gallery-grid" data-sort-id="gallery">
                               <li className="col-md-12 col-sm-12 grid-item format-video videos">
                                  <div className="grid-item-inner">
                                     {/*<!-- <a href="https://youtu.be/hvmAtoSaDhE" data-rel="prettyPhoto" className="media-box"> <img src="/Assets/images/Vehicle/Grande/Exterior/Exterior1.jpg" alt=""> </a> -->*/}
 
                                  </div>
                               </li>
                            </ul>
                         </div>
                      </div>
                      <div id="saletab9" className="tab-pane ">
                         <div className="row">
                            <div>
                               <i className="fa fa-office"></i><b>TOYOTA SOCIETY MOTORS.</b><br/>
                               150-F, P.E.CH.S Block-2 Main Khalid Bin Waleed Road, Karachi.<br/>
                               <i className="fa fa-home"></i> <b>Mon - sat 9.00 - 18.00</b> Sunday OPEN
                               <i className="fa fa-phone"></i> <b>(+92-21) 111-786-113</b>
 
                               <i className="fa fa-envelope"></i> <a href="#">Service@toyota-society.com</a><br/><br/>
 
                            </div>
                         </div>
                         <div className="row">
 
                            <div className="col-md-12 col-sm-8">
                               <form action="/ThreeS/ServicesSubmit" method="post">
                                  <div className="row">
                                     <div className="col-md-5">
                                        <div className="form-group">
                                           <input className="form-control" id="txtName" name="txtName" placeholder="Name"
                                              required="True" type="text" value="" />
                                        </div>
                                        <div className="form-group">
                                           <input className="form-control" id="txtEmail" name="txtEmail" placeholder="Email"
                                              required="True" type="text" value="" />
                                        </div>
                                        <div className="form-group">
                                           <input className="form-control" id="txtCellNo" name="txtCellNo"
                                              placeholder="Mobile No. (e.g; 03001234567)" required="True" type="text"
                                              value="" />
                                        </div>
                                     </div>
                                     <div className="col-md-7">
                                        <div className="form-group">
                                           <textarea className="form-control" cols="20" id="txtcomments" name="txtcomments"
                                              placeholder="Your comments" required="True" rows="2">
                                                                      </textarea>
                                        </div>
                                        <input type="submit" className="btn btn-primary btn-lg pull-right" value="Submit"/>
 
                                     </div>
                                  </div>
                               </form>
                               <div className="clearfix"></div>
                               <div id="message"></div>
                            </div>
                         </div>
                      </div>
                   </div>
 
                </div>
             </div>
          </div>
       </div>
    </div>
 
 <ContactUs/>
 <Footer/>
    
   
    </>
  );
}

export default PeriodicMaintenance;


 

// <script>
//    var input = document.querySelector("#phone");
//    var input1 = document.querySelector("#phone1");
//    window.intlTelInput(input, {
//       preferredCountries: ['pk'],
//       separateDialCode: true,
//       utilsScript: "./assets/js/utils.js",
//    });

//    window.intlTelInput(input1, {
//       preferredCountries: ['pk'],
//       separateDialCode: true,
//       utilsScript: "./assets/js/utils.js",
//    });
// </script>