import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Card, Container } from 'react-bootstrap';




const WeatherForecast = ({city}) => {
  const [forecast, setForecast] = useState([]);


  const API_KEY = '74118886e3de48b592162836251507';

  useEffect(() => {
    const fetchForecast = async () => {
      try {
        const res = await axios.get(`https://api.weatherapi.com/v1/forecast.json`, {
          params: {
            key: API_KEY,
            q: city,
            days: 7,
          },
        });
        setForecast(res.data.forecast.forecastday);
      } catch (err) {
        console.error(err);
      }
    };

    fetchForecast();
  }, []);

  return (
    <Container className="my-4">
      <Card className="p-4 shadow">
        <h4 className="mb-4 text-center">7-Day Weather Forecast - {city}</h4>
        <div className="d-flex overflow-auto">
          {forecast.map((day, index) => (
            <Card key={index} className="mx-2 p-3 text-center shadow-sm" style={{ minWidth: '180px' }}>
              <h6 className="text-muted">{day.date}</h6>
              <img src={day.day.condition.icon} alt="weather-icon" width="50" />
              <h5>{day.day.avgtemp_c}°C</h5>
              <p className="mb-0">{day.day.condition.text}</p>
            </Card>
          ))}
        </div>
      </Card>
    </Container>
  );
};

export default WeatherForecast;