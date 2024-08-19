import React from 'react';
import Header from '../../layouts/partials/header';
import ContactUs from '../../layouts/partials/ContactUs';
import Footer from '../../layouts/partials/footer';
const CampaignsPromotions = () => {
  return (
    <>
<Header/>
    <section>
       <div className="row m-5">
          <div className="col-md-6 col-sm-6">
             <img src="" alt="" style={{width:"100%"}}/>
             <a href="assets/img/comp3.jpg" target="_blank"><img src="assets/img/comp3.jpg" alt="" style={{width:"100%"}}/></a>
          </div>
          <div className="col-md-6 col-sm-6">
             <img src="" alt="" style={{width:"100%"}}/>
             <a href="assets/img/comp4.jpg" target="_blank"><img src="assets/img/comp4.jpg" alt="" style={{width:"100%"}}/></a>
          </div>
          <div className="col-md-6 col-sm-6">
             <img src="" alt="" style={{width:"100%"}}/>
             <a href="assets/img/comp5.jpg" target="_blank"><img src="assets/img/comp5.jpg" alt="" style={{width:"100%"}}/></a>
          </div>
          <div className="col-md-6 col-sm-6">
             <img src="" alt="" style={{width:"100%"}}/>
             <a href="assets/img/comp6.jpg" target="_blank"><img src="assets/img/comp6.jpg" alt="" style={{width:"100%"}}/></a>
          </div>
          <div className="col-md-6 col-sm-6">
             <img src="" alt="" style={{width:"100%"}}/>
             <a href="assets/img/comp7.jpg" target="_blank"><img src="assets/img/comp7.jpg" alt="" style={{width:"100%"}}/></a>
          </div>
          <div className="col-md-6 col-sm-6">
             <img src="" alt="" style={{width:"100%"}}/>
             <a href="assets/img/comp8.jpg" target="_blank"><img src="assets/img/comp8.jpg" alt="" style={{width:"100%"}}/></a>
          </div>
          <div className="col-md-6 col-sm-6">
             <a href="https://www.facebook.com/toyotapakistanofficial/photos/2008473979333543" target="_blank"><img src="assets/img/c&p-img1.jpg" alt="" style={{width:"100%"}}/></a>
             <h6 style={{fontSize: '20px',lineHeight: 1.3,textAlign: 'justify',padding: "20px"}}>
                Make your Toyota the ultimate partner and pave your own way this Winter season!
                Gear up for Winters by stopping at the nearest authorized Toyota dealership for FREE heater and battery inspection! Limited time offer!
             </h6>
          </div>
          <div className="col-md-6 col-sm-6">
             <a href="https://www.facebook.com/Toyotarawal.official/photos/3139642282946488" target="_blank"><img src="assets/img/c&p-img2.jpg" alt="" style={{width:"100%"}}/></a>
             <h6 style={{fontSize: '20px',lineHeight: 1.3,textAlign: 'justify',padding: "20px"}}>
                Gear up and make your drives comfy for the Winters! Enjoy the warmth by visiting us and get a FREE Heater and Battery inspection by certified Toyota Technicians
             </h6>
          </div>            
       </div>
    </section>
       <p style={{marginBottom:"40px"}}></p>
       <ContactUs/>
       <Footer/>
    </>
  );
}

export default CampaignsPromotions;
