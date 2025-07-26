// LocationDetector.js
import { useEffect } from "react";

const LocationDetector = ({ onLocationDetected }) => {
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(async (position) => {
        const lat = position.coords.latitude;
        const lon = position.coords.longitude;

        try {
          const res = await fetch(
            `https://api.weatherapi.com/v1/current.json?key=74118886e3de48b592162836251507&q=${lat},${lon}`
          );
          const data = await res.json();

          // Pass the city back to parent
          onLocationDetected(data.location.name);
          console.log(data.location.name);
          
        } catch (error) {
          console.error("Error fetching location city:", error);
        }
      });
    } else {
      console.warn("Geolocation not supported.");
    }
  }, []);

  return null; // No UI needed
};

export default LocationDetector;