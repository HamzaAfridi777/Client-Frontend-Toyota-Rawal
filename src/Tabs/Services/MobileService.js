import React from 'react';
import Header from '../../layouts/partials/header';
import ContactUs from '../../layouts/partials/ContactUs';
import Footer from '../../layouts/partials/footer';
const MobileService = () => {
  return (
    <>
    <Header/>
      {/*<section className="innerBanner" style={{backgroundImage:"url(assets/images/banner/body-paint-service.jpg)"}}>
      <div className="container">
         <h1 style={{margin: "30px"}}>
            Mobile Service
         </h1>

      </div>
  </section>*/}
   <p
      style={{fontSize: "19px",color: "rgb(57,56,56)",lineHeight: 1.579,
      textAlign: "center",paddingBottom: "15px",marginTop: "30px"}}>
      Our Mobile Service Van repairs to all makes and models, with the convenience of coming to your home or workplace.
      Friendly professional service guaranteed.</p>
   <div className="row" style={{justifyContent:"center"}}>
      <div className="col-lg-6 col-md-6"><img src="assets/images/mob1.jpg" alt=""
       style={{margin: "30px 50px",width:"90%"}}/>
      </div>
      <div className="col-lg-6 col-md-6"><img src="assets/images/mob2.jpg" alt="" style={{margin: "30px 50px",width:"90%"}}/>
      </div>
      <div className="col-lg-6 col-md-6"><img src="assets/images/mob3.jpg" alt="" style={{margin: "",width:"90%"}}/>
      </div>
      <div className="col-lg-6 col-md-6"><img src="assets/images/mob4.jpg" alt="" style={{margin: "30px 50px",width:"90%"}}/>
      </div>
   </div>

   <div className="rCar-btn mb-5 text-center">
      <div className="container"> <a href="/OnlineAppointment">Avail Service</a> </div>

   </div>
   <ContactUs/>
   <Footer/>
    </>
  );
}
export default MobileService;
