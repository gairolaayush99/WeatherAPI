import React, { useState, useEffect } from "react";
import WeatherCard from './weathercard'

const WeatherEngine = ({location}) => { 
    

  const [query, setQuery] = useState();
  const [error,setError]=useState(false)
  const[loading,setLoading] = useState(false)
    const [weather, setWeather] = useState({
      temp: null,
      city: null,
      condition: null,
      country: null,
    });

  const getWeather = async (q) => {
      setLoading(true)
    try {
      const apiRes = await fetch(
        `http://api.openweathermap.org/data/2.5/weather?q=${q}&APPID=62258bb36292b0e4d4c36ee581748edf`
      );
      const resJSON = await apiRes.json();
      var value = resJSON.main.temp - 273;
      value = value.toFixed(2);
      setWeather({
        temp: value,
        city: resJSON.name,
        condition: resJSON.weather[0].main,
        country: resJSON.sys.country,
      });
      
    } catch (error) {
      setError(true)
      
    }  
    
    setLoading(false);
    };
    const handleSearch = (e) => {
      e.preventDefault();
      getWeather(query);
    };

    useEffect(() => {
      getWeather(location);
    }, [location]);
    return (
      <div className="below">
        {!loading ? (
            <div>
              <WeatherCard
                temp={weather.temp}
                condition={weather.condition}
                city={weather.city}
                country={weather.country}
              />

              <form className="search-box">
                <input className="search-txt"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                />
                <button className="search-btn" onClick={(e) => handleSearch(e)}>Search</button>
              </form>
            </div>
          
        ) :loading? (
            <div style={{color: "black"}}>Loading</div>
        ): !loading && error?(<div>There is an error</div>): null}
      </div>
    );



}
export default WeatherEngine;