import React from 'react';
import ContactUs from '../../layouts/partials/ContactUs';
import Footer from '../../layouts/partials/footer';
import Header from '../../layouts/partials/header';

const Insurance = () => {
  return (
    <div>
   <Header/>
    <section>
        <div className="container">
         <div id="insurance">
            <div className="row bg-red1 pt-5 pb-5">
                <h3 className="col-lg-12"
                 style={{textAlign:"center"}}>Toyota Protection Plan</h3>
                <p className="headng-pp">Toyota Protection Plan is an insurance package especially designed for your Toyota. It combines the strengths of Toyota Pakistan, one of the leading mobility brand in Pakistan, and Habib Insurance Company Ltd., one of the oldest and renowned insurance company in Pakistan.</p> 
            </div>
            <div className="row bg-grey1">
               <div className="col-lg-6 col-md-6  pb-3">
                         <h3 className="fpading">Product Offerings</h3>
                         <p><b>A smart first step!</b>
                            Toyota protection plan is a simple and convenient private car insurance policy that provides complete protection against any accident. The Toyota protection plan offers the following:</p>
                         <ul>
                            <li>Full insurance coverage at 0% depreciation in the first year</li>
                            <li>100% genuine parts replacement</li>
                            <li>100% payout for theft and loss*</li>
                            <li>100% coverage on accidental repairs*</li>
                            <li>Speedy claim approval</li>
                         </ul>
               </div>
               <div className="col-lg-6 col-md-6">
                   <img src="assets/images/product_oferngs.png" alt="" 
                   className="img-responsive"/> 
               </div>
            </div>
            <div className="row">
                   <div className="col-lg-8 col-md-8 pb-4">
                         <h3 className="fpading" style={{color:"#d3020a"}}>Getting Started!</h3>
                         <p>Here is what you need to do, to get your very own Toyota Protection Plan Private Car
                            Insurance Policy:</p>
                         <ul>
                            <li>Read the brochure carefully.</li>
                            <li>Regarding the value of the vehicle to be insured and the premium payable, please contact our sales advisor at the Toyota Authorized Dealership or  visit www.toyota-indus.com/protection-plan</li>
                            <li>Help our sales advisor fill in the proposal form in all respects and kindly do not leave any blanks.</li>
                            <li>For any clarification on the product or the premium, feel free to call our customer care number.</li>
                            <li>Please pay the premium preferably by way of A/c Payee Cheque or Pay Order/Demand Deposit.</li>
                         </ul>
                   </div>
                   
                   <div className="col-lg-4 col-md-4 d-flex align-items-center">
                         <img src="assets/images/gettng_started.jpg" alt="" className="img-responsive"/>
                   </div>
            </div>
            <div className="row">
                   <div className="col-lg-6 col-md-6">
                      <img src="assets/images/plan_cvr.jpg" alt="" className="img-responsive h-100"/>   
                   </div>
                   <div className="col-lg-6 col-md-6 bg-red1">
                            <h3 className="fpading">What does Toyota
                               Protection plan cover?</h3>
                            <p>The policy provides cover for the following occurrences:</p>
                            <ul>
                               <li>Accidental damage of the vehicle</li>
                               <li>Loss or damage by fire, lightning, burglary, house-breaking or theft</li>
                               <li>Accidental loss or damage to factory  fitted electrical and non-electrical accessories</li>
                               <li>Liability for third-party injury or death,  and damage caused to their property</li>
                            </ul>
                            
                            
                            
                            <h3 className="fpading">What does Toyota
                               Protection plan not cover?</h3>
                            <p>Some of the major exclusions under the policy are:</p>
                            <ul>
                               <li>Consequential loss</li>
                               <li>Damaged by a person driving under the influence of drugs or liquor</li>
                            </ul>
                            <p>Please note that this is not an exhaustive list. For a detailed list of exclusions, please read our policy’s terms and conditions.</p>
                   </div>
                      
                         
            </div>
            <div className="row mrg-t-b">
                <div className="col-lg-6 col-md-6">
                         <h3 className="fpading" style={{color:"#d3020a"}}>Speedy Claim Approval</h3>
                         <p>In all aspects of life, safety is an important concern. However, despite precautions, an accident may occur at any time. Toyota Protection Plan promises to be at your side during your time of distress. To enable us to help you, we request you to register a claim by contacting our helpline 051-4917200. Please intimate the help desk as soon as the claim occurs so that we can provide you with matchless service with minimum downtime. You can, alternatively, also register a claim via email us at cr@toyotarawal.com.pk 

                         <br/><br/>
                            While registering the claim, the following information will help us serve you faster:
                         </p>
                         <ul>
                            <li>Policy number</li>
                            <li>Name of the insured</li>
                            <li>Contact number of the insured</li>
                            <li>Date and time of accident</li>
                            <li>Location of accident </li>
                         </ul>
                </div>
                   
                <div className="col-lg-6 col-md-6">
                   <img src="assets/images/speedy_claim_aprvl.jpg" alt=""
                    className="img-responsive"/>
                </div>

            </div>
            <div className="row">
                <div className="col-lg-6 col-md-6 bg-red1 pt-3 pb-4">
                   <p>Toyota Protection Plan provides cash less/direct settlements to customer’s choice of Toyota Authorized Dealership, nationwide. To enable us to help you, we request you to register a claim by contacting our helpline 051-4917200 or email us at cr@toyotarawal.com.pk </p>
                </div>
                      
                <div className="col-lg-6 col-md-6 bg-grey1 pt-3 pb-4">
                   <p>Get in touch with us through our number 051-4917200 or email us at cr@toyotarawal.com.pk , clearly mentioning your postal address, for a hassle-free Toyota Protection Plan Car Insurance Policy.</p>
                </div>
            </div>
            <div className="mt-3 mb-3">
                <h3 className="mt-3 mb-3 text-center">Both <span>Takaful</span> and <span>Conventional</span> Toyota Protection Plan available.
                <span>For more information, please email us at <span 
                style={{textTransform:"lowercase"}}>cr@toyotarawal.com.pk</span> </span></h3>
               <img src="assets/images/takaful_icn.png" alt=""/>
            </div>
            <div className="rCar-btn text-center">
                <div className="container"> <a href="/ApplyNow">Apply Now</a>   </div>
                   
             </div>
            
         </div>
            
        </div>
    </section>
    <ContactUs/>
    <Footer/>
    </div>
  );
}

export default Insurance;
