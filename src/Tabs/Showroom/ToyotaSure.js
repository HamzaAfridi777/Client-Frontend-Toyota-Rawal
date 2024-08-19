import React from 'react'
import Header from '../../layouts/partials/header';
import ContactUs from '../../layouts/partials/ContactUs';
import Footer from '../../layouts/partials/footer';

const ToyotaSure = () => {
  return (
    <>
    <Header/>
   {/**  <section className="innerBanner" style={{backgroundImage:"url(assets/images/banner/accessories.jpg)"}}>
	    <div className="container">
	      <h1>
	        Toyota Sure
	      </h1>
	    </div>
	  </section>*/}
	  <img src="assets/images/t-sure-1banner.jpg" alt="" className="w-100"/>
	  <section>
	    <div className="container">
	      <div id="t-sure">
	        <h3>Toyota SURE Certified Vehicles (TSCV)</h3>
	        <div className="row">
	          <div className="col-lg-8 col-md-8">
	            <h4><strong>Toyota Certified SURE Vehicle program</strong></h4>
	            <ul>
	              <li>Indus Motor Company Limited introduces TOYOTA Trade-in Program in Pakistan.</li>
	              <li>Now you can exchange your old car with a brand new Toyota vehicle with no waiting period. </li>
	              <li>This program is designed for your ultimate, convenience, mastered by the world's No. 1 Toyota
	                Automobile.</li>
	            </ul>
	            <h4><strong>TSCV Programs</strong></h4>
	            <h4>TSCV is based on two different programs:</h4>
	            <ol>
	              <li>Toyota Trade-In</li>
	              <li>Toyota SURE Certified Vehicle</li>
	            </ol>
	            <h4><strong>Toyota Trade-In Program</strong></h4>
	            <p>With Toyota Trade-in policy you can now trade-in your used vehicle and drive out with a brand New Toyota
	              by paying the balance amount.</p>
	            <h4>Benefits: </h4>
	            <ol>
	              <li>Time Selling a Used Car privately can be very RISKY and can take weeks, trading in a used car at
	                Toyota takes about one or two hours. </li>
	              <li>One window operation all about selling and buying at one place.</li>
	              <li>Priority in booking of new vehicle. </li>
	            </ol>
	            <h4><strong>Ease and Convenience</strong></h4>
	            <p>You can easily exchange your old car with a new one by following below steps.</p>
	            <ol>
	              <li>Bring your old car – any make or model. (Preferably 3-4 years old)</li>
	              <li>Give us your car details.</li>
	              <li>Get your vehicle's price quoted at market rate by expert sales staff.</li>
	              <li>Select any brand new Toyota Vehicle of your choice.</li>
	              <li>Let our sales expert prepare the exchange deal.</li>
	              <li>Pay the balance amount and drive away with a brand new Toyota car.</li>
	            </ol>
	            <hr/>
	            <div style={{width:"100%",textAlign:"center"}}>
	              <img src="assets/images/tsure1buysell.jpg" style={{maxWidth:"100%"}}/>
	            </div>
	            <h4><strong>Types Of Vehicles Allowed for TSCV</strong></h4>
	            <p>Only the Toyota & Daihatsu Vehicles sold through Indus Motor Co. Ltd would be eligible for being
	              certified.
	              Non-IMC Toyota & Daihatsu vehicle and any other brand vehicles are not allowed for Toyota Certification
	              but are welcomed in TRADE IN.
	            </p>
	            <h4><strong>Why Exchange From Us?</strong></h4>
	            <ul>
	              <li>Best price of your car, transparent evaluation.</li>
	              <li>Best deals on new cars.</li>
	              <li>Attractive car financing schemes available.</li>
	              <li>Clean Documentation.</li>
	              <li>One stop solution for hassle-free transaction.</li>
	              <li>One window hassle free buying & selling of vehicles.</li>
	              <li>No need to advertise and waste time in trying to handle the inquires as well as in negotiation. </li>
	              <li>Drive in, get your vehicle assessed. If interested in the offer, place order for new car on balance
	                payment only.</li>
	            </ul>
	            <hr/>
	            <h4><strong>How Warranty Calculates</strong></h4>
	            <p className="well" style={{background: "#f2f2f2",margin:"10px"}}>
	              Warranty Formula for Certified Vehicle is as below:<br />
	              <strong style={{color: "#0066cc"}}>TSCV Warranty + Remaining Toyota Warranty = Total Warranty</strong><br />
	              For Example:<br />
	              Remaining Toyota Warranty = 6<br />
	              months TSCV warranty = 6 <br />
	              months Total Warranty = 12 months
	            </p>
	            <h4><strong>What Warranty Covers</strong></h4>
	            <p>Limited warranty will be offered and will only cover Engine & Transaxle. <br />Toyota Certified vehicle
	              will always be covered under warranty.</p>
	            <h4><strong>210 Points Checkup</strong></h4>
	            <p>Toyota 210 points certification will assure the customer that the vehicle is thoroughly checked by the
	              Toyota Certified Technicians and does not carry any defects.</p>
	            <h4><strong>Maximum age / mileage for Trade-in vehicles</strong></h4>
	            <p>The used vehicle for trade-in should ideally be not more than 5 years old or should be driven less then
	              80,000 kilometers.</p>
	            <h4><strong>TSCV Delivery Certificate</strong></h4>
	          </div>
	          <div className="col-lg-4 col-md-4">
	            <img src="assets/images/tsurepic01.jpg" alt="" className="w-100"/>
	          </div>
	        </div>
	      </div>
	    </div>
	  </section>
      <ContactUs/>
      <Footer/>
    </>
  )
}

export default ToyotaSure