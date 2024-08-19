import React,{useState,useEffect} from "react";
import axios from "axios";
const ValueTime = () => {
  const [valueTimeData, setValueTimeData] = useState(null);
  const [companyData, setCompanyData] = useState({});
  const [services, setServices] = useState([]);

  useEffect(() => {
    // Fetch valuetime data
    const fetchValueTimeData = async () => {
      try {
        const response = await axios.get("/api/valuetime");
        const fetchedData = response.data[0]; // Assuming you want the first item in the array
        setValueTimeData(fetchedData);
       // console.log(fetchedData);
      } catch (error) {
        console.error("Error fetching ValueTime data:", error);
      }
    };


    const fetchCompanyData = async () => {
      try {
        const DataResponse = await axios.get("/api/site-credentials");
        const companyData = DataResponse.data[0];
        setCompanyData(companyData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchValueTimeData();
    fetchCompanyData();
  }, []);

  useEffect(() => {
    // Fetch services data
    const fetchServicesData = async () => {
      try {
        const response = await axios.get("/api/services");
        setServices(response.data.data); // Assuming 'data' contains the array of services
      } catch (error) {
        console.error("Error fetching services data:", error);
      }
    };

    fetchServicesData();
  }, []);

  if (!valueTimeData) {
    return <div>Loading...</div>; // Show a loading indicator until data is fetched
  }
  return (
    <div>
      <section className="value pad-tb">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="value-txt m1-h p1 text-center pad-btm">
                <h1>{valueTimeData.heading}</h1>
                <p>
                {valueTimeData.description}
                </p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="value-car">
                <img 
                src={`${
                  axios.defaults.baseURL
                }storage/uploads/value_time/${encodeURIComponent(valueTimeData.image1)}`}
                alt="value-car" />
              </div>
            </div>
            <div className="col-md-6">
              <div className="value-em">
                <img 
                src={`${
                  axios.defaults.baseURL
                }storage/uploads/value_time/${encodeURIComponent(valueTimeData.image2)}`}
                 alt="value-car" />
                <div className="call-now call-now-2">
                  <span>
                    Call Now:
                    <a href={`tel:${companyData.customer_relation_number}`} className="call-2">
                    {companyData.customer_relation_number}
                    </a>
                  </span>
                  <a href="/ExpressMaintenance" className="btn-b">
                    Learn More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        className="changes"
        style={{backgroundImage:"url(assets/images/banner/change.png)"}}
      >
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="changes-txt m1-h m2-h text-center">
                <h1>VALUE ADDED SERVICES</h1>
                {/*<h3>For Any QUERY REGARDING</h3> */}
              </div>
            </div>
            <div className="col-md-1"></div>
            <div className="col-md-6 mt-5 mb-5">
              <div className="check">
                <ul className="check-list">
                {services.map((service) => (
                  <li key={service.id}>
                    <img src="assets/images/check.png" alt="check.png" />
                    <a href={`/${service.name.toLowerCase().replace(/ /g, "-")}.php`}>
                      {service.name}
                    </a>
                  </li>
                ))} 
                  <li>
                    <img src="assets/images/check.png" alt="check.png" />
                    Injector Cleaner
                  </li>         
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ValueTime;
