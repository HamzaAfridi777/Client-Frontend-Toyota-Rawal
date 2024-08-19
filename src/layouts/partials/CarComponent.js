import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const CarComponent = () => {
  const [carData, setCarData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const DataResponse = await axios.get("/api/new-arrivals");
      //  console.log('Fetched Data:', DataResponse.data); // Log fetched data
        setCarData(DataResponse.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  // Define category mapping
  const categoryMapping = {
    1: "Cars & MPVs",
    2: "SUVs & Pickups",
    3: "Buses & Vans",
  };

  const carsAndMPVs = carData.filter(
    (car) => categoryMapping[car.category_id] === "Cars & MPVs"
  );
 // console.log('Filtered Cars & MPVs:', carsAndMPVs); // Log filtered data

  const handleProductClick = (car) => {
    navigate(`/product/${car.id}`, { state: { car } });
  };

  return (
    <div>
      <div className="box-car showfirst showroomDD-main">
        <div className="row">
          {carsAndMPVs.map((car, index) => (
            <div className="col-md-3" key={index}>
              <div className="srddBox" onClick={() => handleProductClick(car)}>
                
                  <div className="srDD-img">
                    <img
                      src={`${
                        axios.defaults.baseURL
                      }storage/uploads/new_arrivals/${encodeURIComponent(
                        car.car_card_image
                      )}`}
                      alt={car.car_card_image}
                      style={{ width: "115%" }}
                      onError={(e) => console.error("Image loading error:", e)}
                    />
                  </div>
                  <div className="srDD-cont">
                    <h6>{car.car_name}</h6>
                    <p>
                      Starting from. <span>{car.car_price}/-</span>
                    </p>
                  </div>
             
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CarComponent;
