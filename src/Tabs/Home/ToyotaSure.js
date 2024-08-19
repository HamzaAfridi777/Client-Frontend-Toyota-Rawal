import React,{useState,useEffect} from 'react';
import axios from 'axios';
const ToyotaSure = () => {
   const [toyotasure, setToyotaSure] = useState([]);

useEffect(() => {
  const fetchData = async () => {
    try {
      const DataResponse = await axios.get("/api/toyotasure");
      const toyotasure = DataResponse.data;
      setToyotaSure(toyotasure);
     // console.log(toyotasure); // Corrected the console log to show the data
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  fetchData();
}, []);
  return (
    <div>
    {toyotasure.length > 0 && (
    <section className="sure pad-tb">
    <div className="container">
       <div className="row br-bod align-items-center">
          <div className="col-md-12">
             <div className="pad-btm text-center sure-100">
                <img src="assets/images/sure-logo.png" alt="sure-logo"/>
             </div>
          </div>
          
          <div className="col-md-6">
             <div className="sure-txt p1">
                <p>{toyotasure[0].description}</p>
             </div>

             <div className="sure-txt sure-txt1 m2-h p1">
                <span className="check">
                   <img src="assets/images/check.png" alt="check"/>
                </span>
                <div className="sure-all">
                   <h3>{toyotasure[0].heading1}</h3>
                   <p>{toyotasure[0].note1}</p>
                </div>
             </div>

             <div className="sure-txt sure-txt1 m2-h p1">
                <span className="check">
                   <img src="assets/images/check.png" alt="check"/>
                </span>
                <div className="sure-all">
                   <h3>{toyotasure[0].heading2}</h3>
                   <p>{toyotasure[0].note3}</p>
                </div>
             </div>

             <div className="sure-txt sure-txt1 m2-h p1">
                <span className="check">
                   <img src="assets/images/check.png" alt="check"/>
                </span>
                <div className="sure-all">
                   <h3>{toyotasure[0].heading3}</h3>
                   <p>{toyotasure[0].note3}</p>
                </div>
             </div>
          </div>
          <div className="col-md-6">
             <div className="r-car">
                <h6 style={{fontWeight: 'bold'}}>Do Not Just Dream It, Do It!</h6>
                <img src={`${
                  axios.defaults.baseURL
                }storage/uploads/toyota_sure/${encodeURIComponent(toyotasure[0].image1)}`}
                alt="toyotasure"
                />

                <div className="rCar-btn">
                   <a href="/GetInTouch">Contact Us</a>

                   <a href="/ToyotaSure">Explore More</a>
                </div>
             </div>
          </div>    
       </div>
    </div>
 </section>
  )}
    </div>
  );
}

export default ToyotaSure;
