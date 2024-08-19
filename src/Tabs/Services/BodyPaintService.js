import React from 'react';
import Header from '../../layouts/partials/header';
import ContactUs from '../../layouts/partials/ContactUs';
import Footer from '../../layouts/partials/footer';
const BodyPaintService = () => {
  return (
    <div>
    <Header/>
    <section className="body-paint-service">
       <div className="container">
          <div className="row">
             <div className="col-md-12">
                <div className="bpsersec-img">
                   <img src="assets/images/body-paint/img1.jpg" alt=""/>
                </div>
                <p>
                Having an accident is certainly not on your to-do list but when it happens you want the most professional 
                auto body shop to repair your vehicle. Collision Repair in Toyota Rawal Motors, is the auto body 
                repair authority with the experience, skill and facilities to return your vehicle back to showroom-new condition.
                </p>
                <p>
                Your facilities boast the latest technology in repair mechanics with a staff of professionally trained and certified technicians. We use quality Paint so your vehicle receives 
                not only one of the most durable paint in the industry, but is an environmentally friendly waterborne paint
                </p>
                <p>
                   Feeling down and out if your vehicle experienced a collision. Come and avail our Body and Paint services to make your vehicle just like new.
                   With Toyota Body and Paint services availed you can be assured of getting your vehicle repaired quickly. Your vehicle is repaired on latest equipment to ensure quality repair work; use of premium genuine parts is also ensured. <br/>
                   Our state of the art paint-mixing facility for precise color matching guarantees to make your car gleam and look like new. You will be rewarded by trusting us when you give your car in good hands.
                </p>  
             </div>

             <div className="col-md-6">
                <div className="bpsersec-img">
                   <img src="assets/images/body-paint/img2.jpg" alt=""/>
                </div>
             </div>

             <div className="col-md-6">
                <div className="bpsersec-img">
                   <img src="assets/images/body-paint/img3.jpg" alt=""/>
                </div>
             </div>

             <div className="col-md-4">
                <div className="bpsersec-btn">
                   <a href="Tel:+(051)4917200">Call now (051) 4917200</a>
                </div>
             </div>

             <div className="col-md-4">
                <div className="bpsersec-btn">
                   <a href="/OnlineAppointment">Request an appoinment</a>
                </div>
             </div>

             <div className="col-md-4">
                <div className="bpsersec-btn">
                   <a href="https://www.google.com/maps/place/Toyota+Rawal+Motors/@33.541916,73.107117,16z/data=!4m5!3m4!1s0x0:0x9af8d0ff4e39a653!8m2!3d33.5423045!4d73.1070542?hl=en" target="_blank">Location Service Station</a>
                </div>
             </div>
          </div>             
       </div>
    </section>
    <ContactUs/>
    <Footer/>
    </div>
  );
}

export default BodyPaintService;
