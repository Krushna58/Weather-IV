import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Card } from 'react-bootstrap';

const AstroInfo = ({ city }) => {
  const [astro, setAstro] = useState(null);
  const [date] = useState(() => new Date().toISOString().split('T')[0]);
  const API_KEY = '74118886e3de48b592162836251507';

  useEffect(() => {
    if (!city || !date) return;

    const fetchAstro = async () => {
      try {
        const res = await axios.get('https://api.weatherapi.com/v1/astronomy.json', {
          params: {
            key: API_KEY,
            q: city,
            dt: date,
          },
        });
        setAstro(res.data.astronomy.astro);
      } catch (err) {
        console.error(err);
      }
    };

    fetchAstro();
  }, [city, date]);

  return (
    
<>
      {astro && (
        <div className='mt'>
           <p className="mb-0"><b>🌅 Sunrise:</b>{astro.sunrise}</p>
            <p className="mb-0"><b>🌇 Sunset:</b> {astro.sunset}</p>
             <p className="mb-0"><b>🌙 Moonrise: </b>{astro.moonrise}</p>
              <p className="mb-0"><b>🌘 Moonset:  </b>{astro.moonset}</p>
         
        </div>
      )}

      </>
   
  );
};

export default AstroInfo;