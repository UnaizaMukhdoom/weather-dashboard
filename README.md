WeatherNews — React Weather & News Dashboard

A  React application that combines live weather data and real-time news in one clean.Covering React fundamentals, state management, routing, custom hooks, and multi-API integration.

 Screenshots:
 
 🏠 Home Page
The landing page with navigation to Weather and News sections.

<img width="718" height="339" alt="image" src="https://github.com/user-attachments/assets/ba650ff3-818f-4f9f-bf07-e188f97446e1" />

🌡️ Weather Page
Live weather search with saved cities stored in localStorage. Shows temperature, humidity, wind speed, and feels-like temperature.

<img width="959" height="442" alt="image" src="https://github.com/user-attachments/assets/f595305f-5610-4b24-8b66-68e3d5303bd5" />


📰 News Page
News search with query parameters reflected in the URL (?topic=elon+musk). Displays article cards with images and descriptions.

<img width="959" height="443" alt="image" src="https://github.com/user-attachments/assets/d81b8e41-bcf0-4ba1-99ad-babc61c8dcf7" />

 Features:
🔍 Live weather search — search any city and get real-time weather data
⭐ Save cities — persist favourite cities using localStorage
📰 News search — search news by topic with URL query param sync
🔗 React Router v7 — multi-page routing with /, /weather, /news
🧠 Custom hooks — reusable useWeather and useNews API hooks
⚡ Loading, error, retry & fallback states — robust UX for all network conditions
🧩 Reusable components — Navbar, WeatherCard, NewsCard, SearchBar


🗂️ Project Structure:
weather-dashboard/
├── public/
│   └── index.html
├── src/
│   ├── components/          # Reusable UI components
│   │   ├── Navbar.jsx
│   │   ├── WeatherCard.jsx
│   │   ├── NewsCard.jsx
│   │   └── SearchBar.jsx

│   ├── hooks/               # Custom React hooks
│   │   ├── useWeather.js    # Encapsulates weather API logic
│   │   └── useNews.js       # Encapsulates news API logic
│   ├── pages/               # Route-level components
│   │   ├── Home.jsx
│   │   ├── Weather.jsx
│   │   └── News.jsx
│   ├── services/            # API call functions
│   │   ├── api.js
│   │  
│   ├── App.js               # Router setup and route definitions
│   └── index.js             # React DOM entry point
├── .env                     # API keys (gitignored)
├── .gitignore
├── package.json
└── README.md


Installation:
# 1. Clone the repo
git clone https://github.com/UnaizaMukhdoom/weather-dashboard.git
cd weather-dashboard

# 2. Install dependencies
npm install

# 3. Create your .env file
touch .env

Add your keys to .env:
REACT_APP_WEATHER_API_KEY=your_key_here
REACT_APP_NEWS_API_KEY=your_key_here

# 4. Start the development server
npm start




