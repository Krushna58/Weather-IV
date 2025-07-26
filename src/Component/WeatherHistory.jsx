// import React, { useEffect, useState } from "react";
// import axios from "axios";

// const WeatherHistory = ({ city }) => {
//   const [weatherData, setWeatherData] = useState([]);
//   const [loading, setLoading] = useState(false);

//   const API_KEY = "74118886e3de48b592162836251507"; // 🔁 Replace with your key

//   const getPastDates = (days) => {
//     const dates = [];
//     for (let i = 0; i < days; i++) {
//       const date = new Date();
//       date.setDate(date.getDate() - i);
//       dates.push(new Date(date));
//     }
//     return dates;
//   };

//   const getDayLabel = (date, index) => {
//     if (index === 0) return "Today";
//     if (index === 1) return "Yesterday";
//     return date.toLocaleDateString("en-US", { weekday: "short" });
//   };

//   useEffect(() => {
//     const fetchData = async () => {
//       setLoading(true);
//       const pastDates = getPastDates(7); // 🔁 Change to 21 when ready
//       const results = [];

//       for (let i = 0; i < pastDates.length; i++) {
//         const dateObj = pastDates[i];
//         const dateStr = dateObj.toISOString().split("T")[0];

//         try {
//           const res = await axios.get(
//             `https://api.weatherapi.com/v1/history.json?key=${API_KEY}&q=${city}&dt=${dateStr}`
//           );
//           const data = res.data.forecast.forecastday[0];

//           results.push({
//             date: dateObj.getDate(),
//             label: getDayLabel(dateObj, i),
//             maxTemp: data.day.maxtemp_c,
//             minTemp: data.day.mintemp_c,
//             icon: data.day.condition.icon,
//             condition: data.day.condition.text,
//           });
//         } catch (error) {
//           console.error("API error or quota reached:", error);
//         }
//       }

//       setWeatherData(results.reverse());
//       setLoading(false);
//     };

//     fetchData();
//   }, [city]);

//   return (
//     <div className="container mt-4">
//       <h5 className="text-primary mb-3">Last 21 Days Weather - {city}</h5>
//       {loading ? (
//         <div className="text-center">Loading...</div>
//       ) : (
//         <div className="d-flex overflow-auto pb-2">
//           {weatherData.map((day, idx) => (
//             <div
//               className="card text-center mx-2 shadow-sm border-0"
//               style={{ minWidth: "100px", backgroundColor: "#eef5ff" }}
//               key={idx}
//             >
//               <div className="card-body p-2">
//                 <h6 className="mb-0">{day.date}</h6>
//                 <small className="text-muted">{day.label}</small>
//                 <div className="my-1">
//                   <img
//                     src={day.icon}
//                     alt={day.condition}
//                     className="img-fluid"
//                     style={{ height: "40px" }}
//                   />
//                 </div>
//                 <p className="mb-0 fw-bold">{day.maxTemp}°</p>
//                 <small className="text-muted">{day.minTemp}°</small>
//               </div>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default WeatherHistory;