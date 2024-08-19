import React, {useState,useEffect, useRef } from 'react';
import 'intl-tel-input/build/css/intlTelInput.css';
import { useIntlTelInput } from './hooks'; // Adjust the path if necessary
import Header from '../../layouts/partials/header';
import ContactUs from '../../layouts/partials/ContactUs';
import Footer from '../../layouts/partials/footer';
import axios from 'axios';
const AutoFinance = () => {
  const [arrivalData, setArrivalData] = useState([]);
  const [formData, setFormData] = useState({
    car: '',
    name: '',
    email: '',
    phone: '',
    landline: '',
    income: '',
    bank: '',
    comment: ''
  });
  useEffect(() => {
    const fetchData = async () => {
      const DataResponse = await axios.get("/api/new-arrivals");
      const arrivalData = DataResponse.data;
      setArrivalData(arrivalData);
    };
    fetchData();
  }, []);

  // const phoneInputRef = useRef(null);
  // const phone1InputRef = useRef(null);

  // useIntlTelInput(phoneInputRef, {
  //   preferredCountries: ['pk'],
  //   separateDialCode: true,
  //   utilsScript: 'https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js', // Ensure this URL is correct and accessible
  // });

  // useIntlTelInput(phone1InputRef, {
  //   preferredCountries: ['pk'],
  //   separateDialCode: true,
  //   utilsScript: 'https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js', // Ensure this URL is correct and accessible
  // });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('/api/auto-finances', formData);
      alert(response.data.message);
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Error submitting form');
    }
  };
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleExpand = (index) => {
     setExpandedIndex(index === expandedIndex ? null : index);
   };
  return (
    <>
    <Header/>
      <section className="auto-finance-banner pad-btm">
        <img src="assets/images/banner/auto-finance-banner.png" alt="Auto Finance Banner" />
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="Benefits-txt m1-h m11-h m2-h p1 text-center">
                <h1>Benefits</h1>
              </div>
            </div>
            <div className="col-md-4">
              <div className="beni-1 p1 text-center">
                <h3>Enjoy</h3>
                <h5>1-3 years</h5>
                <p>of fixed rental rate</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="beni-1 p1 text-center">
                <h3>Get up to</h3>
                <h5>PKR 2.5M</h5>
                <p>free personal accidental coverage</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="beni-1 p1 text-center">
                <h3>Avail</h3>
                <h5>Lowest</h5>
                <p>rental rate</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="auto-features">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="auto-feat-txt m1-h m11-h text-center">
                <h1>Auto Finance Features</h1>
              </div>
            </div>
            <div className="col-md-6">
              <div className="veh-h">
                <div className="veh-img">
                  <img src="assets/images/veh-icon-1.png" alt="Vehicle Icon 1" />
                </div>
                <div className="veh-txt">
                  <h3>Choose Any Type Of Car</h3>
                  <p>New, Used Or Local Car</p>
                </div>
              </div>
              <div className="veh-h">
                <div className="veh-img">
                  <img src="assets/images/ch-icon11.png" alt="CH Icon 11" />
                </div>
                <div className="veh-txt">
                  <h3>Imported Vehicles Financing</h3>
                  <p>(Closed)</p>
                </div>
              </div>
              <div className="veh-h">
                <div className="veh-img">
                  <img src="assets/images/ch-icon3.png" alt="CH Icon 3" />
                </div>
                <div className="veh-txt">
                  <h3>Receive Up To 85% Of Financing</h3>
                  <p>For Your Preferred Car (Max Financing 3 Million)</p>
                </div>
              </div>
              <div className="veh-h">
                <div className="veh-img">
                  <img src="assets/images/ch-icon8.png" alt="CH Icon 8" />
                </div>
                <div className="veh-txt">
                  <h3>Secured Insurance At All Times For Peace Of Mind</h3>
                  <p>(With Or Without Tracker Option Available)</p>
                </div>
              </div>
              <div className="veh-h">
                <div className="veh-img">
                  <img src="assets/images/ch-icon9.png" alt="CH Icon 9" />
                </div>
                <div className="veh-txt">
                  <h3 className="mt-2">Min Down Payment 30%</h3>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="veh-h">
                <div className="veh-img">
                  <img src="assets/images/ch-icon5.png" alt="CH Icon 5" />
                </div>
                <div className="veh-txt">
                  <h3>Continuous Guidance By Our Salesperson</h3>
                  <p>Salesperson For Customers Throughout The Financing Process</p>
                </div>
              </div>
              <div className="veh-h">
                <div className="veh-img">
                  <img src="assets/images/ch-icon2.png" alt="CH Icon 2" />
                </div>
                <div className="veh-txt">
                  <h3>Repayment Tenure: 1-3 Years</h3>
                </div>
              </div>
              <div className="veh-h">
                <div className="veh-img">
                  <img src="assets/images/ch-icon6.png" alt="CH Icon 6" />
                </div>
                <div className="veh-txt">
                  <h3 className="mt-2">Priority Delivery</h3>
                </div>
              </div>
              <div className="veh-h">
                <div className="veh-img">
                  <img src="assets/images/ch-icon7.png" alt="CH Icon 7" />
                </div>
                <div className="veh-txt">
                  <h3 className="mt-2">Tracker & Insurance</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="best-deal pad-tb">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="best-deal-h m1-h pad-btm m11-h p1 text-center">
                <h1>Apply now to get the best deal.</h1>
                <p>
                  Please fill in the following information for an estimation of your repayment amount. The Approximate Monthly Repayment figure for Auto Finance is indicative and is not meant to be final or binding on the Bank. The Bank reserves the right to determine the final rental rate in accordance with applicable laws and amount that can be financed.
                </p>
              </div>
              <div className="big-form-bor">
                <div className="form-best-deal">
                  <form id="autoFinanceForm" onSubmit={handleSubmit}>
                    <div className="flid">
                      <label>Car</label>
                      <select   name="car" className="form-control form-control1"
                       id="exampleFormControlSelect1"   value={formData.car}
                       onChange={handleChange}>
                        <option disabled selected>Select Car</option>
                        {arrivalData.map((arrival, index) => (
                          <option key={index}>{arrival.car_name}</option>
                        ))}
                      </select>
                    </div>
                    <div className="flid">
                      <label>Name</label>
                      <input name="name" type="text" placeholder="Enter Your Name"
                       className="form-control form-control1"  value={formData.name}
                       onChange={handleChange} />
                    </div>
                    <div className="flid">
                      <label>Email</label>
                      <input type="text" name="email" placeholder="Enter Your Email"
                       className="form-control form-control1"   value={formData.email}
                       onChange={handleChange}/>
                    </div>
                    <div className="flid">
                      <label>Mobile Number</label>
                      <input id="phone" name="phone" type="tel" 
                      className="form-control form-control1" value={formData.phone}
                      onChange={handleChange} />
                    </div>
                    <div className="flid">
                      <label>Landline Number</label>
                      <input id="phone1"    name="landline" type="tel"
                       className="form-control form-control1"  value={formData.landline}
                       onChange={handleChange}  />
                    </div>
                    <div className="flid">
                      <label>Monthly Income</label>
                      <input type="text" name="income" placeholder="Income in (PKR)" 
                      className="form-control form-control1" value={formData.income}
                      onChange={handleChange}/>
                    </div>
                    <div className="flid">
                      <label>Select Bank</label>
                      <select    name="bank" className="form-control form-control1" 
                      id="exampleFormControlSelect1"   value={formData.bank}
                      onChange={handleChange}>
                        <option disabled value="#">Select Bank</option>
                        <option value="National Bank">National Bank</option>
                        <option value="Allied Bank Limited">Allied Bank Limited</option>
                        <option value="Habib Bank Limited">Habib Bank Limited</option>
                        <option value="United Bank Limited">United Bank Limited</option>
                        <option value="Meezan Bank Limited">Meezan Bank Limited</option>
                        <option value="Bank Alfalah">Bank Alfalah</option>
                        <option value="Other Bank">Other Bank</option>
                      </select>
                    </div>
                    <div className="flid-full flid">
                      <label>Comment</label>
                      <textarea name="comment" className="form-control form-control1" 
                      rows="3"  value={formData.comment}
                      onChange={handleChange}></textarea>
                    </div>
                    <button type="submit" className="form-btm-a edit-btn">SUBMIT</button>
                    {/*<a  href="#" onClick={(e) => { e.preventDefault(); document.getElementById('autoFinanceForm').submit(); }}
                       className="form-btm-a edit-btn">SUBMIT</a>*/}
                  </form>
                </div>
              </div>
              <ul className="faq-ul faq-ul-section">
                <li>
                  <h4 onClick={() => toggleExpand(0)} style={{ cursor: "pointer" }}>Eligibility Criteria</h4>
                  <div className="p1" style={{ display: expandedIndex === 0 ? "block" : "none" }}>
                    <h2>Eligibility Criteria</h2>
                    <ul className="p1 inner-h">
                      <li><h3>Salaried Individuals</h3></li>
                      <li>
                        <a href="#">
                          <i className="fa fa-check" aria-hidden="true"></i> Citizenship: Pakistani
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa fa-check" aria-hidden="true"></i> Age: 22-60 years
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa fa-check" aria-hidden="true"></i> Minimum monthly income: Rs. 20,000
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa fa-check" aria-hidden="true"></i> Min Down Payment 30%
                        </a>
                      </li>
                    </ul>
                    <ul className="p1 inner-h">
                      <li><h3>Self-Employed Business Persons/Professional</h3></li>
                      <li>
                        <a href="#">
                          <i className="fa fa-check" aria-hidden="true"></i> Citizenship: Pakistani
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa fa-check" aria-hidden="true"></i> Age: 22-70 years
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa fa-check" aria-hidden="true"></i> Minimum monthly income: Rs. 25,000
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa fa-check" aria-hidden="true"></i> Min Down Payment 30%
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>
                <li>
                  <h4  onClick={() => toggleExpand(1)} style={{ cursor: "pointer" }}>Documents Required</h4>
                  <div className="p1" style={{ display: expandedIndex === 1 ? "block" : "none" }}>
                    <h2>Documents Required</h2>
                    <ul className="p1 inner-h">
                      <li><h3>Salaried Individuals</h3></li>
                      <li>
                        <a href="#">
                          <i className="fa fa-check" aria-hidden="true"></i> CNIC: 01 Copy
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa fa-check" aria-hidden="true"></i> Recent passport size photographs: 02
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa fa-check" aria-hidden="true"></i> Latest original salary slip and personal bank statement for last 6 months.
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa fa-check" aria-hidden="true"></i> Stage 1 Signed
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa fa-check" aria-hidden="true"></i> Visiting Card
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa fa-check" aria-hidden="true"></i> Utility Bill
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa fa-check" aria-hidden="true"></i> Account Maintaining Certificate
                        </a>
                      </li>
                    </ul>
                    <ul className="p1 inner-h">
                      <li><h3>Self-Employed Business Persons/Professional</h3></li>
                      <li>
                        <a href="#">
                          <i className="fa fa-check" aria-hidden="true"></i> CNIC: 01 Copy
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa fa-check" aria-hidden="true"></i> Recent passport size photographs: 02
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa fa-check" aria-hidden="true"></i> Latest original salary slip and personal bank statement for last 6 months.
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa fa-check" aria-hidden="true"></i> Proof of business.
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa fa-check" aria-hidden="true"></i> Stage 1 Signed
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa fa-check" aria-hidden="true"></i> Visiting Card
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa fa-check" aria-hidden="true"></i> Utility Bill
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa fa-check" aria-hidden="true"></i> Account Maintaining Certificate
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>
                <li>
                  <h4 onClick={() => toggleExpand(2)} style={{ cursor: "pointer" }}>What does Car Finance provide?</h4>
                  <div className="p1" style={{ display: expandedIndex === 2 ? "block" : "none" }}>
                    <p>
                      Car Finance provides a one-stop financing solution to help you own your dream Toyota. Whether you are a salaried professional or a self-employed businessman, from car loans to auto refinance to cash-back auto refinance, we have a solution for you. TCM Car Finance is a complete financing solution which gives you the most competitive interest rates and the widest range of car finance options.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <ContactUs/>
      <Footer/>
    </>
  );
};

export default AutoFinance;
