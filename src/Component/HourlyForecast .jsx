import React, { useEffect, useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faCoffee } from '@fortawesome/free-solid-svg-icons';


const HourlyForecast = ({ city }) => {
  const [hourlyData, setHourlyData] = useState([]);

  useEffect(() => {
    const fetchHourlyData = async () => {
      try {
        const response = await axios.get(
          `https://api.weatherapi.com/v1/forecast.json?key=74118886e3de48b592162836251507&q=${city}&days=1&aqi=no&alerts=no`
        );
        setHourlyData(response.data.forecast.forecastday[0].hour);
      } catch (error) {
        console.error("Error fetching hourly forecast:", error);
      }
    };

    if (city) fetchHourlyData();
  }, [city]);

  return (
    <div className="container mt-4">
      <h4 className="mb-3">Hourly Forecast - {city.charAt(0).toUpperCase() + city.slice(1)}</h4>
      <div className="d-flex overflow-auto flex-nowrap">
        {hourlyData.map((hour, index) => (
          <div
            key={index}
            className="card text-center mx-2"
            style={{ minWidth: "140px", flex: "0 0 auto", borderRadius: "15px" }}
          >
            <div className="card-body p-3">
              <h6 className="card-title mb-2">{hour.time.split(" ")[1]}</h6>
              <img
                src={hour.condition.icon}
                alt={hour.condition.text}
                style={{ width: "50px", height: "50px" }}
                className="mb-2"
              />
              <p className="mb-1 fw-bold">{hour.temp_c}°C</p>
              <p className="text-muted small mb-0">{hour.condition.text}</p>
             {/* <FontAwesomeIcon icon={faCoffee} /> */}
               <p className="text-muted small mb-0"><i class="bi bi-moisture">  </i> {hour.humidity}</p>
                 <p className="text-muted small mb-0"><i class="bi bi-cloud-rain-fill">  </i>{hour.chance_of_rain}%</p>
              
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HourlyForecast;