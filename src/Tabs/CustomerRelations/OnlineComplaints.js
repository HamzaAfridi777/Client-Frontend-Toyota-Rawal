import React,{useState,useRef,useEffect} from 'react';
import Footer from '../../layouts/partials/footer';
import Header from '../../layouts/partials/header';
import 'intl-tel-input/build/css/intlTelInput.css';
import intlTelInput from 'intl-tel-input';
import axios from 'axios';
const OnlineComplaints = () => {
  //  const phoneInputRef = useRef(null);
    const [formData, setFormData] = useState({
      name: '',
      email: '',
      department: '',
      phone: '',
      message: ''
  });
   //  useEffect(() => {
   //      if (phoneInputRef.current) {
   //        intlTelInput(phoneInputRef.current, {
   //          preferredCountries: ['pk'],
   //          separateDialCode: true,
   //          utilsScript: 'https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js',
   //        });
   //      }
   //  }, []);
    const handleChange = (e) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
   e.preventDefault();
   try {
       const response = await axios.post('/api/complaints', formData);
       alert('Complaint submitted successfully');
       setFormData({
           name: '',
           email: '',
           department: '',
           phone: '',
           message: ''
       });
   } catch (error) {
       console.error('Error submitting complaint:', error);
       alert('There was an error submitting your complaint. Please try again.');
   }
};
  return (
    <div>
      <Header/>

<section className="customerRelation-Banner contectUs-banner"
   style={{backgroundImage:"url(assets/images/banner/customer-relation.jpg"}}>
   <div className="customRelBanner-logo">
  
   </div>

   <div className="container">
      <div className="col-md-8">
         <div className="customRelBanner-form">
            <h4>Online Complaints</h4>

            <form onSubmit={handleSubmit}>
               <div className="row">
                  <div className="col-md-6">
                  <input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} />
                  </div>
                  <div className="col-md-6">
                  <input type="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleChange} />
                  </div>
                  <div className="col-md-6">
                  <div className="form-select">
                      <select name="department" value={formData.department} 
                      onChange={handleChange} className="form-control form-select"
                       required   style={{borderWidth: '1px',borderColor: 'rgb(58,58,58)',
                        borderStyle: 'solid',borderRadius: '5px',backgroundColor: 'rgb(241,241,241)',
                        width: '100%',height: '42px',marginBottom: '15px',paddingLeft: '8px',
                        fontWeight: 500,color:"#727272e0"}}>
                          <option value="" disabled>Department</option>
                          <option>Sales</option>
                          <option>Services</option>
                          <option>Parts</option>
                          <option>Customer Relation</option>
                          <option>Admin</option>
                          <option>Others</option>
                      </select>
                  </div>
              </div>
                  <div className="col-md-6">
                  <input  name="phone" type="tel" placeholder="312-3456789"
                   value={formData.phone} onChange={handleChange} />
                  </div>

                  <div className="col-md-12 mt-3">
                  <textarea name="message" placeholder="Your Message" value={formData.message} onChange={handleChange}></textarea>
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

   <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3325.4408564761648!2d73.10492801515127!3d33.54192035189732!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38dfed3c5c453fb3%3A0x9af8d0ff4e39a653!2sToyota%20Rawal%20Motors!5e0!3m2!1sen!2s!4v1638338230783!5m2!1sen!2s"
      width="600" height="450" style={{border:0, allowfullscreen:"" ,loading:"lazy"}}></iframe>
</section>
<Footer/>
    </div>
  );
}

export default OnlineComplaints;
