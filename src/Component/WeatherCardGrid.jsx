import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
const WeatherCardGrid = ({ data, averages }) => {
  const getWeekday = (dateStr) => {
    const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    return weekdays[new Date(dateStr).getDay()];
  };
  if (!data || data.length === 0) {
    return (
      <div className="text-center text-muted py-5">
        <p className="fw-semibold">No historical weather data available.</p>
      </div>
    );
  }
  return (
    <div className="mt-4 container">
      {averages && (
        <div className="mb-4">
          <div className="card border-secondary shadow-sm mx-auto" style={{ maxWidth: '500px' }}>
            <div className="card-header bg-secondary text-white text-center fw-bold">
              Averages Summary
            </div>
            <div className="card-body">
              <p><i class="bi bi-thermometer-half"></i><strong>Temperature:</strong> {averages.temperature.toFixed(2)}°C</p>
              <p><i class="bi bi-moisture"></i><strong> Humidity:</strong> {averages.humidity.toFixed(2)} %</p>
              <p><i class="bi bi-cloud-drizzle"></i><strong> Rainfall:</strong> {averages.rainfall.toFixed(2)} mm</p>
            </div>
            <div className="card-footer text-end text-muted small">
              Based on {data.length} records
            </div>
          </div>
        </div>
      )}
      {/* Horizontal Scroll Container for Cards */}
      <div className="overflow-auto px-2 pb-4" style={{ whiteSpace: 'nowrap' }}>
        {data.map((item, idx) => (
          <div
            key={idx}
            className="card d-inline-block shadow-sm me-3"
            style={{ width: '340px', verticalAlign: 'top' }}
          >
            <div className="card-header d-flex justify-content-between align-items-center bg-light">
              <div>
                <strong>{item.date}</strong>{' '}
                <span className="text-muted">({getWeekday(item.date)})</span>
              </div>
              <span className="badge bg-primary">{item.cityName}</span>
            </div>
            <div className="card-body">
              <p><i class="bi bi-thermometer-half"></i><strong>Temperature:</strong> {item.temperature}°C</p>
              <p><i class="bi bi-moisture"></i><strong> Humidity:</strong> {item.humidity} %</p>
              <p><i class="bi bi-cloud-drizzle"></i><strong> Rainfall:</strong> {item.rainfall} mm</p>
              <hr />
              <div className="row">
                <div className="col-6"><small><i class="bi bi-sunrise"></i><strong> Sunrise:</strong> {item.sunrise}</small></div>
                <div className="col-6"><small><i class="bi bi-sunset"></i><strong> Sunset:</strong> {item.sunset}</small></div>
                <div className="col-6"><i class="bi bi-moon-stars"></i><small><strong> Moonrise:</strong> {item.moonrise}</small></div>
                <div className="col-6"><i class="bi bi-moon"></i><small><strong> Moonset: </strong> {item.moonset}</small></div>
              </div>
            </div>
            {/* <div className="card-footer text-end text-muted small">
              Archived snapshot
            </div> */}
          </div>
        ))}
      </div>
    </div>
  );
};
export default WeatherCardGrid;