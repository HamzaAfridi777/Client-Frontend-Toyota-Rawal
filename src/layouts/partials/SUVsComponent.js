import React, { useState, useEffect } from "react";
import axios from "axios";
import {useNavigate } from "react-router-dom";
const SUVsComponent = () => {
  const [carData, setCarData] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const DataResponse = await axios.get("/api/new-arrivals");
        setCarData(DataResponse.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  const suvsAndPickups = carData.filter(car => car.category.name === "SUVs & Pickups");
  const handleProductClick = (car) => {
    console.log("Clicked product:", car); // Check if car object is correctly passed
    navigate(`/product/${car.id}`, { state: { car } });
  };
    return (
        <div>
            {/** <div className="box-suvs showroomDD-main"> */}
            <div className="row">
            {suvsAndPickups.map((car,index)=>(
                <div className="col-md-3" key={index}>
                    <div className="srddBox"  onClick={() => handleProductClick(car)}>
                        {/*<a href={`/Product${car.car_name.replace(/\s/g, '')}`}>*/}
                            <div className="srDD-img">
                                <img
                                src={`${axios.defaults.baseURL
                                 }storage/uploads/new_arrivals/${encodeURIComponent(
                                car.car_card_image)}`}     
                                alt={car.car_card_image}
                                style={{
                                    width: "115%",
                                }}
                                onError={(e) =>
                                  console.error("Image loading error:", e)
                                }
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
    )
};

export default SUVsComponent;
