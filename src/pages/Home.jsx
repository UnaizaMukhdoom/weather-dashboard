import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
  return (
    <div className="home">
      <h1>Welcome to WeatherNews 🌤️</h1>
      <p>Check live weather and latest news in one place.</p>
      <div className="home-buttons">
        <Link to="/weather" className="home-btn">Check Weather</Link>
        <Link to="/news"    className="home-btn secondary">Read News</Link>
      </div>
    </div>
  );
}

export default Home;