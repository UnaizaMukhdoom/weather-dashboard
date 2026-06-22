import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home    from './pages/Home';
import Weather from './pages/Weather';
import News    from './pages/News';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="main-content">
        <Routes>
          <Route path="/"        element={<Home />} />
          <Route path="/weather" element={<Weather />} />
          <Route path="/news"    element={<News />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;