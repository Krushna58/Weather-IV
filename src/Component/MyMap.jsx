import React, { useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap ,LayersControl  } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L, { icon } from 'leaflet';

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
});


// Helper to update map view
const ChangeView = ({ lat, lon, zoom }) => {
  const map = useMap();
  useEffect(() => {
    map.setView([lat, lon], zoom);
  }, [lat, lon, zoom]);
  return null;
};

const MyMap = ({ lat, lon, city }) => {
  return (
    <div style={{ height: '300px', width: '100%', marginTop: '20px' }}>
      <MapContainer center={[lat, lon]} zoom={10} style={{ height: '100%', width: '100%' }}>
        <ChangeView lat={lat} lon={lon} zoom={10} />
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          // attribution="© OpenStreetMap contributors"
        />
  {/* //  ----------------------------------------------------- */}

    <LayersControl>
           
          <LayersControl.Overlay checked name="Rain Layer">
            <TileLayer
              url={`https://tile.openweathermap.org/map/precipitation_new/{z}/{x}/{y}.png?appid=cd2ae2d536d225256d36185b184f4c19`}
              // attribution="Rain Data © OpenWeatherMap"
            />
          </LayersControl.Overlay>
          <LayersControl.Overlay name="Cloud Layer">
            <TileLayer
              url={`https://tile.openweathermap.org/map/clouds_new/{z}/{x}/{y}.png?appid=cd2ae2d536d225256d36185b184f4c19`}
              // attribution="Cloud Data © OpenWeatherMap"
            />
          </LayersControl.Overlay>


    </LayersControl>
    


  {/* //------------------------------------------------------------------------- */}


        <Marker position={[lat, lon]}>
          <Popup>{city}</Popup>
        </Marker>


        
      </MapContainer>
    </div>
  );
};

export default MyMap;