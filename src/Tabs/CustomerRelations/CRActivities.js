import React from 'react';
import ContactUs from '../../layouts/partials/ContactUs';
import Footer from '../../layouts/partials/footer';
import Header from '../../layouts/partials/header';

const CRActivities = () => {
  return (
    <div>
   <Header/>
    <section>
        <div >
         <div id="cr-active"  className="text-center mt-5 mb-5">
             
             <div className="container"> 
                <p>
                Customer First is Toyota’s cornerstone principle. Raising Customer Satisfaction is the most important
                theme to be tackled as the basis of constant and stable growth. CR activities are operational activities
                to prevent damaging Toyota’s image and win more Toyota fans by checking the escalation of trouble through
                   swift, accurate and sincere handling of customers’ inquiries and complaints.
                </p>
                <p>
                At TRM Customer Relations is focused on providing complete support to customers by connecting with them, 
                owning their problems & seeing them through to resolution in an efficient & effective manner. We believe 
                in our customers and keep them at the forefront by engaging them through different channels. Four key elements
                to achieve this are:
                </p>
                <ul>
                   <li> Opening a larger window for customers</li>
                   <li>Swift and sure handling of inquiries and complaints</li>
                   <li>Making the Voice of the Customer (VOC) the basis for corporate renewal</li>
                   <li>Improving the corporate image and better informing customers to support sales and service activities</li>
                </ul>
                <p>
                Customer satisfaction is the ultimate objective and a strong coordination between all customer 
                touch-points is a key ingredient. Our Customer Relation Department works tirelessly 
                to provide complete support with the ultimate objective of gaining the approval and endorsement of our patrons.
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

export default CRActivities;
