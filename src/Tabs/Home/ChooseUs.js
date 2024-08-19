import React,{useState,useEffect} from "react";
import axios from 'axios';
const ChooseUs = () => {
  const [choose,setChoose] = useState([]);
  useEffect(() => {
    // Fetch the client reviews data from the API
    axios
      .get("/api/choose")
      .then((response) => {
        setChoose(response.data);
       // console.log(response);
      })
      .catch((error) => {
        console.error("There was an error fetching the reviews!", error);
      });
  }, []);

// Check if data is loaded
if (choose.length === 0) {
  return <div>Loading...</div>;
}

const data = choose[0]; // Assuming there's only one object in the array
  return (
    <div>
    {choose.map((item) => (
      <section
      key={item.id}
        className="number-count pad-tb"
        style={{ backgroundImage: "url(assets/images/banner/num-banner.png)" }}
      >
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="num-txt-wrap text-center m1-h m2-h pad-btm">
                <h1>{item.heading}</h1>
                <p>{item.description} 
                </p>
              </div>

              <ul className="counter">
                <li>
                  <span className="count">{item.years}</span>
                  <span>+</span>
                  <h3>Years of Presence</h3>
                </li>
                <li>
                  <span className="count">{item.technicians}</span>
                  <span>%</span>
                  <h3>Toyota Certified Technicians </h3>
                </li>
                <li>
                  <span className="count">{item.customer}</span>
                  <span>%</span>
                  <h3>Customer Satisfation </h3>
                </li>
                <li>
                  <span className="count">{item.employee}</span>
                  <span>%</span>
                  <h3>Employee Satisfaction</h3>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    ))}
    </div>
  );
};

export default ChooseUs;
