import React from 'react';
import ContactUs from '../../layouts/partials/ContactUs';
import Footer from '../../layouts/partials/footer';
import Header from '../../layouts/partials/header';

const AboutUs = () => {
  return (
    <div>
    <Header/>
    <section>
        <div className="container">
         <div id="Loyalty">

             <h3 id="hist&achive" className="mt-5">HISTORY</h3><br/>
                <ul style={{listStyle:"disc"}}>
                   <li>Incorporated in 1993, Situated at GT Road Swan Camp, Rawalpindi</li>
                   <li>3S Dealership TOYOTA & DAIHATSU PRODUCTS</li>
                   <li>T-Sure Certification</li>
                   <li>Nationwide Biggest Dealership Area wise </li>
                   <li>No. of Employees: 150</li>
                   
                </ul>
                <h3 className="mt-4">Achievements:</h3>
                <ul style={{listStyle:"disc"}}>
                   <li>Best in CS awad in North Region(1999-2000)</li>
                   <li>Best Customer Relations Award North Region<br/>
                    (2001~02,2002~03,2004~05,2005~06,2012~13,2013~14,2018~19)
                   </li>
                   <li>Best in Service North Region Year(2005~06,2007~08,2011~12)</li>
                   <li>Best in Sale North Region Year2011~12</li>
                   <li>Best in Service North region Year2013~14</li>
                   <li>Among Top 3 dealers in 1* CSKE Cup regional contest and participated in National contest.
                      <br/> CR Regional Award 2018.
                   </li>
                   <li>Higest number of customers retained in north.</li>
                   <li>RegionalStar for the Skill Contest 2020-2021</li>
                </ul>
             <div className="mb-5">
                <h3 id="vision&mission"></h3><br/>
                <h3>Our Vision</h3>
                <p>
                   A professional organization employing skilled and committed people using 
                   the latest technology working under Islamic principles and satisfying customers
                   and business partners
                </p>
                <h3>Our Mission</h3>
                <p>
                   To provide exceptional value to all our customers through 
                   superior service, innovative products and operational excellence.
                </p>
             </div>
                
             
         </div>
            
        </div>
    </section>
    <ContactUs/>
    <Footer/>
    </div>
  );
}

export default AboutUs;
