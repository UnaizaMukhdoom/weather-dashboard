import './WeatherCard.css';

function WeatherCard({ data }) {
  return (
    <div className="weather-card">
      <h2>{data.name}, {data.sys.country}</h2>
      <p className="temp">{Math.round(data.main.temp)}°C</p>
      <p className="desc">{data.weather[0].description}</p>
      <div className="weather-details">
        <span>💧 Humidity: {data.main.humidity}%</span>
        <span>💨 Wind: {data.wind.speed} m/s</span>
        <span>🌡️ Feels like: {Math.round(data.main.feels_like)}°C</span>
      </div>
    </div>
  );
}

export default WeatherCard;