import React,{useRef,useEffect} from 'react';
import Footer from '../../layouts/partials/footer';
import Header from '../../layouts/partials/header';
import 'intl-tel-input/build/css/intlTelInput.css';
import intlTelInput from 'intl-tel-input';
const CustomerComment = () => {
    const phoneInputRef = useRef(null);
    useEffect(() => {
        if (phoneInputRef.current) {
          intlTelInput(phoneInputRef.current, {
            preferredCountries: ['pk'],
            separateDialCode: true,
            utilsScript: 'https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js',
          });
        }
    }, []);
  return (
    <div>
    
<Header/>
    <section className="customerRelation-Banner contectUs-banner" 
    style={{backgroundImage:"url(assets/images/banner/customer-relation.jpg"}}>
       
       <div className="container">
          <div className="col-md-8">

             <div className="customRelBanner-form">
                <h4>Customer Comment Form</h4>
                <p  style={{color:'#fff', marginBottom:"15px"}}>Dear Customer,
                 <br/>We value your comments and suggestions, which helps us in making improvement to serve you better.</p>

                <form id="contact-form" method="post" data-email="">
                   <div className="row">
                      <div className="col-md-6">
                         <input type="text" name="name" id="name" placeholder="Your Name"/>
                      </div>

                      <div className="col-md-6">
                         <input type="email" name="email" id="email" placeholder="Your Email"/>
                      </div>

                      
                      <div className="col-md-6">
                         <div className="form-select">
                            
                            <select required id="play_type" name="play_type" className="form-control form-select"
                              style={{fontSize: "20px",borderWidth: '1px',borderColor: 'rgb(58,58,58)',
                              borderStyle: 'solid',borderRadius: '5px',backgroundColor: 'rgb(241,241,241)',
                              width: '100%',height: '42px',marginBottom: '15px',paddingLeft: '8px',
                              fontWeight: 500,color:"#727272e0"}}>
                               <option value="" disabled selected>Overall Experience At Dealership </option>
                               <option value="3">Satisfied </option>
                               <option value="2">Partial Satisfied</option>
                               <option value="4">Dissatisfied </option>                                 
                            </select>
                         </div>
                      </div>
                      
                   <div className="col-md-6">
                         <input ref={phoneInputRef} id="phone" name="phone" type="tel" 
                         style={{marginBottom: "15px",  placeholder:"312-3456789"}}/>
                      </div>

                      
                      <div className="col-md-6">
                         <input id="text-2" type="text" placeholder="Vehicle No."/>
                      </div>
                      <div className="col-md-6">
                         <input id="text-3" type="text" placeholder="PBO/RO #"/>
                      </div>
                      <div className="col-md-6">
                         <div className="form-select">
                            <p style={{color:"#fff", marginBottom:"15px"}}>Please Select The Department You Visited</p>
                            <select required id="play1type" name="play1type" className="form-control form-select"
                              style={{fontSize: "20px", borderWidth: "1px",borderColor: "rgb(58,58,58)",borderStyle: 'solid',
                              borderRadius: "5px",backgroundColor: 'rgb(241,241,241)',width: '100%',height: '42px',
                              marginBottom: '15px',paddingLeft: '8px',fontWeight: 500,color:"#727272e0"}}>
                               <option value="" disabled selected>Department</option>
                               <option>Sales</option>
                               <option>Service</option>
                               <option>Parts</option>
                               <option>Customer Relation</option>
                               <option>Admin</option>
                               <option>Other</option>
                               
                            </select>
                         </div>
                      </div>
                      <div className="col-md-12">
                      <p style={{color:"#fff", marginBottom:"15px"}}>Please Select That Reflect Your Feelings</p>
                      </div>

                      <div className="col-md-12">
                         <div className="form-select">
                            <select required id="play2type" name="play2type" className="form-control form-select" 
                             style={{fontSize: "20px", borderWidth: "1px",borderColor: "rgb(58,58,58)",
                             borderStyle: "solid",borderRadius: "5px",backgroundColor: "rgb(241,241,241)",
                             width: "100%",height: "42px",marginBottom: "15px",paddingLeft: "8px",fontWeight: 500,color:"#727272e0"}}>
                               <option value="" disabled selected>Appearance Of Facility</option>
                               <option>Excelent</option>
                               <option>Very Good</option>
                               <option>Good</option>
                               <option>Fair</option>
                               <option>Poor</option>
                            </select>
                         </div>
                      </div>

                      <div className="col-md-12">
                         <div className="form-select">
                            <select required id="play3type" name="play3type" className="form-control form-select" 
                             style={{fontSize: '20px', borderWidth: '1px',borderColor: 'rgb(58,58,58)',
                             borderStyle: 'solid',borderRadius: '5px',backgroundColor: 'rgb(241,241,241)',
                             width: '100%',height: '42px',marginBottom: '15px',paddingLeft: '8px',
                             fontWeight: 500,color:"#727272e0"}}>
                               <option value="" disabled selected>Courtesy & Attention Of Staff</option>
                               <option>Excelent</option>
                               <option>Very Good</option>
                               <option>Good</option>
                               <option>Fair</option>
                               <option>Poor</option>
                            </select>
                         </div>
                      </div>

                      <div className="col-md-12">
                         <div className="form-select">
                            <select required id="play4type" name="play4type" className="form-control form-select"
                              style={{fontSize: "20px", borderWidth: '1px',borderColor: 'rgb(58,58,58)',
                              borderStyle: 'solid',borderRadius: '5px',backgroundColor: 'rgb(241,241,241)',
                              width: '100%',height: '42px',marginBottom: '15px',paddingLeft: '8px',fontWeight: 500,
                              color:"#727272e0"}}>
                               <option value="" disabled selected>Product Quality</option>
                               <option>Excelent</option>
                               <option>Very Good</option>
                               <option>Good</option>
                               <option>Fair</option>
                               <option>Poor</option>
                            </select>
                         </div>
                      </div>

                      <div className="col-md-12">
                         <div className="form-select">
                            <select required id="play5type" name="play5type" className="form-control form-select"
                              style={{fontSize: '20px', borderWidth: '1px',borderColor: 'rgb(58,58,58)',
                              borderStyle: 'solid',borderRadius: '5px',backgroundColor: 'rgb(241,241,241)',
                              width: '100%',height: '42px',marginBottom: '15px',paddingLeft: '8px',
                              fontWeight: 500,color:"#727272e0"}}>
                               <option value="" disabled selected>Commitments Fulfilled</option>
                               <option>Excelent</option>
                               <option>Very Good</option>
                               <option>Good</option>
                               <option>Fair</option>
                               <option>Poor</option>
                            </select>
                         </div>
                      </div>

                      <div className="col-md-12">
                         <div className="form-select">
                            <select required id="play6type" name="play6type" className="form-control form-select"  
                            style={{fontSize: "20px", borderWidth: "1px",borderColor: "rgb(58,58,58)",
                            borderStyle: 'solid',borderRadius: '5px',backgroundColor: 'rgb(241,241,241)',
                            width: "100%",height: '42px',marginBottom: '15px',paddingLeft: "8px",
                            fontWeight: 500,color:"#727272e0"}}>
                               <option value="" disabled selected>Quality Of Work Carried Out</option>
                               <option>Excelent</option>
                               <option>Very Good</option>
                               <option>Good</option>
                               <option>Fair</option>
                               <option>Poor</option>
                            </select>
                         </div>
                      </div>

                      <div className="col-md-12">
                         <div className="form-select">
                            <select required id="play7type" name="play7type" className="form-control form-select"
                              style={{fontSize: "20px", borderWidth:" 1px",borderColor: "rgb(58,58,58)",
                              borderStyle: "solid",borderRadius: "5px",backgroundColor: "rgb(241,241,241)",
                              width: "100%",height: "42px",marginBottom: "15px",paddingLeft: "8px",
                              fontWeight: 500,color:"#727272e0"}}>
                               <option value="" disabled selected>Would You Recommend Us To Others</option>
                               <option>Excelent</option>
                               <option>Very Good</option>
                               <option>Good</option>
                               <option>Fair</option>
                               <option>Poor</option>
                            </select>
                         </div>
                      </div>


 

                      

                      <div className="col-md-12 mt-3">
                         <textarea id="msg" name="msg" placeholder="Your Message"></textarea>
                      </div>

                      <div className="col-md-12">
                         <button type="submit">Submit</button>
                      </div>
                   </div>
                </form>
              
             </div>
                   
          </div>
       </div>   
    </section>

    <section className="customerRelation-callAway">
       <div className="container">
          <div className="cRelCallaway-hd">
             <h6>We are one call away</h6>
             <p>Customer Assistance Center</p>
          </div>

          <div className="row">
             <div className="col-md-3">
                <div className="cRelCallaway-btn">
                   <a href="#">Call Back Service</a>
                </div>
             </div>

             <div className="col-md-3">
                <div className="cRelCallaway-btn">
                   <a href="#">First Call Resolution</a>
                </div>
             </div>

             <div className="col-md-3">
                <div className="cRelCallaway-btn">
                   <a href="#">Sunday Operational</a>
                </div>
             </div>

             <div className="col-md-3">
                <div className="cRelCallaway-btn">
                   <a href="#">Instant Response</a>
                </div>
             </div>
          </div>
       </div>
    </section>
    <section className="mapSection">
    
       <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3325.4408564761648!2d73.10492801515127!3d33.54192035189732!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38dfed3c5c453fb3%3A0x9af8d0ff4e39a653!2sToyota%20Rawal%20Motors!5e0!3m2!1sen!2s!4v1638338230783!5m2!1sen!2s"
           width="600" height="450" style={{border:"0" ,allowfullscreen:"" ,loading:"lazy"}}></iframe>
    </section>
<Footer/>
    </div>
  );
}

export default CustomerComment;
