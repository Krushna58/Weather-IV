import React, { useState } from 'react';
import axios from 'axios';
import WeatherCardGrid from './WeatherCardGrid';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';




const HistoricalWeatherFetcher = () => {
  const [city, setCity] = useState('');
  const [fromDate, setFromDate] = useState('');
  const [toDate, setToDate] = useState('');
  const [data, setData] = useState([]);
  const [averages, setAverages] = useState(null);
  const [error, setError] = useState('');
  const today = new Date();
  const maxDate = new Date(today.setDate(today.getDate() - 1)).toISOString().split('T')[0];
  const minDate = new Date(new Date().setDate(new Date().getDate() - 31)).toISOString().split('T')[0];

   const navigate = useNavigate(); 

  const fetchData = async () => {
    setError('');
    if (!city || !fromDate || !toDate) {
      setError('Please provide city, from date, and to date.');
      return;
    }
    try {
      const response = await axios.get(`http://localhost:8080/weather/api/history/city/${city}/${fromDate}/${toDate}`);
      const records = response.data || [];
      // Compute averages on frontend
      if (records.length > 0) {
        const avgTemp = records.reduce((sum, r) => sum + (r.temperature || 0), 0) / records.length;
        const avgHumidity = records.reduce((sum, r) => sum + (r.humidity || 0), 0) / records.length;
        const avgRain = records.reduce((sum, r) => sum + (r.rainfall || 0), 0) / records.length;
        setAverages({ temperature: avgTemp, humidity: avgHumidity, rainfall: avgRain });
      } else {
        setAverages(null);
      }
      setData(records);
    } catch (err) {
      console.error('Fetch error:', err);
      setError('Failed to fetch data.');
    }
  };
  const downloadCsv = async () => {
    setError('');
    if (!city || !fromDate || !toDate) {
      setError('Please provide city, from date, and to date.');
      return;
    }
    try {
      const response = await axios.get(
        `http://localhost:8080/weather/api/history/export/${city}/${fromDate}/${toDate}`,
        { responseType: 'blob' }
      );
      const blob = new Blob([response.data]);
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = `${city}_weather_${fromDate}_to_${toDate}.csv`;
      link.click();
    } catch (err) {
      console.error('Download error:', err);
      setError('Failed to download CSV.');
    }
  };
  return (
    <div className="container mt-4">
      <h2 className="mb-4 text-center text-uppercase text-muted border-bottom pb-2 fw-semibold">
         Historical Weather Report</h2>
      <div className="mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Enter city"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
      </div>
      <div className="row mb-3">
        <div className="col">
          <input
            type="date"
            className="form-control"
            value={fromDate}
            onChange={(e) => setFromDate(e.target.value)}
            min={minDate}
            max={maxDate}
          />
        </div>
        <div className="col">
          <input
            type="date"
            className="form-control"
            value={toDate}
            onChange={(e) => setToDate(e.target.value)}
            min={minDate}
            max={maxDate}
          />
        </div>
      </div>
      <button className="btn btn-primary mb-3 me-1" onClick={fetchData}>Fetch Data</button>
       <button className="btn btn-primary mb-3 me-1" onClick={()=>navigate("/home")}>Back</button>
      {data.length > 0 && (
        <button className="btn btn-success mb-3" onClick={downloadCsv}>Download CSV</button>
      )}
      {error && <div className="alert alert-danger mt-3">{error}</div>}
      <WeatherCardGrid data={data} averages={averages} />
    </div>
  );
};
export default HistoricalWeatherFetcher;