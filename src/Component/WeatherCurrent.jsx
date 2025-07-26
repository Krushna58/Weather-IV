import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Card, Col, Container, Row } from 'react-bootstrap';
import './Style/WeatherCurrent.css'

import MyMap from './MyMap';
import AstroInfo from './AstroInfo';
import SessionManager from './Session/SessionManager';

const WeatherCurrent = ({ city }) => {
  const [weather, setWeather] = useState(null);
  const API_KEY = '74118886e3de48b592162836251507';

  useEffect(() => {
    if (!city) return;
    const fetchCurrentWeather = async () => {
      try {
        const res = await axios.get(`https://api.weatherapi.com/v1/current.json`, {
          params: { key: API_KEY, q: city },
        });
        setWeather(res.data);
        console.log("Current json data - " + res);
      } catch (err) {
        console.error(err);
      }
    };

    fetchCurrentWeather();
  }, [city]);

  return (
    <>
        <SessionManager/>

     <Container className="my-4">
      <h2 className="text-center mb-4  " style={{ fontFamily: 'Oswald, sans-serif' }}>Current Weather</h2>

      {weather && (
        <Row 
          className="g-4 p-3 rounded shadow-sm bg-light 
          hover-effect transition"
          style={{ transition: '0.3s ease-in-out' }}
        >
          <Col md={3}>
            <div className="p-3 shadow rounded bg-white text-center hover-shadow">
              <span>Location</span>
              <h5>{weather.location.name}, {weather.location.country}</h5>
              <p className="mb-0"><b>Current :</b> {weather.current.condition.text}</p>
               <p className="mb-0"><b>🌡 Temperature:</b> {weather.current.temp_c} °C</p>
                <p className="mb-0"><b>💧 Humidity: </b>{weather.current.humidity} %</p>
                  <p className="mb-0"><b>🌧 Rain:</b> {weather.current.precip_mm} mm</p>
                   <p className="mb-0"><b>📅 Date:</b> {(weather.location.localtime).slice(0,10)} </p>
            </div>

             <Row md={1} className='mt-4'>
              <div className="p-3 shadow rounded bg-white text-center hover-shadow">
         <span><b>🌌 Astronomical Data</b></span>
         <AstroInfo city={city}/>
        </div>
            </Row>

            
          </Col>
        
          <Col md={9}>
            <div className="p-3 shadow rounded bg-white text-center hover-shadow">
             <MyMap city={weather.location.name} lon={weather.location.lon} lat={weather.location.lat} />
            </div>


            
          </Col>

        </Row>
      )}
    </Container>
    
    </>
   
  );
};

export default WeatherCurrent;
