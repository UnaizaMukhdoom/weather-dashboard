import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-logo">⛅ WeatherNews</div>
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/weather">Weather</Link>
        <Link to="/news">News</Link>
      </div>
    </nav>
  );
}

export default Navbar;