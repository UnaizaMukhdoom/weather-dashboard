const WEATHER_KEY = process.env.REACT_APP_WEATHER_KEY;
const NEWS_KEY    = process.env.REACT_APP_NEWS_KEY;

export const getWeatherUrl = (city) =>
  `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${WEATHER_KEY}&units=metric`;

export const getNewsUrl = (topic) =>
  `https://gnews.io/api/v4/search?q=${topic}&token=${NEWS_KEY}&lang=en&max=6`;