import React from 'react';
import ContactUs from '../../layouts/partials/ContactUs';
import Footer from '../../layouts/partials/footer';
import Header from '../../layouts/partials/header';

const Career = () => {
  return (
    <div>
   <Header/>
    <section>
        <div className="container">
         <div id="career"  className="text-center">
             
             <p style={{marginTop: "30px"}}>Over the years we have implemented a set of values, beliefs, principles and business methods
                   that act as the life blood of the company: we call them the TOYOTA WAY. The Toyota Way is supported 
                   by two main pillars – Respect for People and Continuous Improvement. We are never satisfied with where 
                   we are and always improve our business by putting forth our best ideas and efforts. We respect people
                   and believe that the 
                   success of our business is created by good people working together in a team environment.
             
                <br/><br/>
             
                We always look for dynamic, result – oriented and high – potential candidates to take on challenges,
                exercise the power to think, develop and perform.For future positions, please apply at the following email address hrm@toyotarawal.com.pk
             </p>
             
             <p style={{marginBottom:"700px"}}></p>
  

         </div>
            
        </div>
    </section>
<ContactUs/>
<Footer/>
    </div>
  );
}

export default Career;
