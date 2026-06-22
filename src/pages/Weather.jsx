import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import useWeather from '../hooks/useWeather';
import SearchBar from '../components/SearchBar';
import WeatherCard from '../components/WeatherCard';
import Loader from '../components/Loader';
import ErrorMessage from '../components/ErrorMessage';
import './Weather.css';

function Weather() {
  const [searchParams, setSearchParams] = useSearchParams();
  const city = searchParams.get('city') || localStorage.getItem('lastCity') || 'London';

  const [favourites, setFavourites] = useState(
    JSON.parse(localStorage.getItem('favCities') || '[]')
  );

  const { weatherData, loading, error, retry } = useWeather(city);

  useEffect(() => {
    if (city) localStorage.setItem('lastCity', city);
  }, [city]);

  function handleSearch(value) {
    setSearchParams({ city: value });
  }

  function addFavourite() {
    const updated = [...new Set([...favourites, city])];
    setFavourites(updated);
    localStorage.setItem('favCities', JSON.stringify(updated));
  }

  return (
    <div className="weather-page">
      <h1>Weather 🌤️</h1>

      <SearchBar onSearch={handleSearch} placeholder="Enter city name..." />

      {favourites.length > 0 && (
        <div className="favourites">
          <p>⭐ Saved:</p>
          {favourites.map(c => (
            <button
              key={c}
              onClick={() => setSearchParams({ city: c })}
              className="fav-btn"
            >
              {c}
            </button>
          ))}
        </div>
      )}

      {loading && <Loader />}
      {error   && <ErrorMessage message={error} onRetry={retry} />}

      {weatherData && !loading && !error && (
        <>
          <WeatherCard data={weatherData} />
          <button className="save-btn" onClick={addFavourite}>
            ⭐ Save City
          </button>
        </>
      )}
    </div>
  );
}

export default Weather;