import useFetch from './useFetch';
import { getWeatherUrl } from '../services/api';

function useWeather(city) {
  const { data, loading, error, retry } = useFetch(
    city ? getWeatherUrl(city) : null
  );

  return { weatherData: data, loading, error, retry };
}

export default useWeather;