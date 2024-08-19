import React from 'react';
import Header from '../../layouts/partials/header';
import ContactUs from '../../layouts/partials/ContactUs';
import Footer from '../../layouts/partials/footer';

const ExpressMaintenance = () => {
  return (
    <>
   {/* <section className="innerBanner" style={{backgroundImage:"url(assets/images/banner/body-paint-service.jpg)"}}>
    <div className="container">
       <h1>
       Express Maintenance
       </h1>
      
    </div>
  </section>*/}

<Header/>
 <section>
    <div id="t-exprs" className="container mt-5 mb-5">
       <h2>Toyota Express Maintenance</h2>
               
                <div className="row">
                      
                       <div className="col-md-10">
                         <br/>  <br/>
                         <p className = "text-justify" >Dear Customers,</p><br/>
                         <p className = "text-justify" >Don't forget to schedule your Toyota Express Maintenance at <strong>Toyota Rawal Motors</strong> today! Convenient hours, including Sunday. Learn all about Toyota Express maintenance below. See what Toyota Express Service means to you, and the life of your Toyota.</p>
                       </div>
                       <div className="col-md-2">
                         <img src="assets/img//03.png" alt=""/>
                       </div>
                </div>
                <div className="row">
                   <div className="col-md-8">
                      <img src="assets/img/02.png"/>
                   </div>
              
                </div>
                   <p className = "lead">The Toyota Express Maintenance Difference.</p><br/><br/>
                   <p className = "text-justify"> Your time is valuable. So when your Toyota needs factory-scheduled maintenance or minor repairs, don't let it slow you down. Toyota Express Maintenance offers everything you need to keep you moving. All from the one place you trust to do it right -- <strong>Toyota Rawal Motors.</strong></p>
                   <p className = "text-justify"> If you live or work in Islamabad, you can rest assure that servicing your vehicle at <strong>Toyota Rawal Motors</strong> will allow you to quickly hit the road with confidence. Contact us today to schedule your next Toyota maintenance service visit. We have the right price, provide the right quality, and can do it right now!</p>

    </div>
 </section>
 <ContactUs/>
 <Footer/>
    </>
  );
}

export default ExpressMaintenance;
