import React from 'react';

import './App.css';
import WeatherEngine from './components/WeatherCard/Weathercardengine';
import Clock from './components/clock'
import News from './components/newsarticles'
function App() {
  return (
    <div>
      <div>
        <Clock />
        <br />
        <br />
      </div>

      <div className="App">
        <WeatherEngine location="canada" />
        <WeatherEngine location="Sydney" />
        <WeatherEngine location="Dehradun" />
        <WeatherEngine location="alaska" />
        <WeatherEngine location="Minnesota" />
        <WeatherEngine location="Mongolia" />
      </div>
      <div className="news">
        <br />
        <br />
        <br />
        <News />
      </div>
    </div>
  );
  
}

export default App;
