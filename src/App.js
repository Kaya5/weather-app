import React, { useState } from "react";

const api = {
  key: "", //please enter key
  base: "http://api.openweathermap.org/data/2.5/",
};

function App() {
  const [query, setQuery] = useState("");
  const [weather, setWeather] = useState({});

  const search = (evt) => {
    //if ENTER key is pressed,
    if (evt.key === "Enter") {
      //..send a GET request to this url,
      fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
        //..get the json from the response,
        .then((res) => res.json())
        //..set weather to the result received.
        .then((result) => {
          setQuery("");
          setWeather(result);
        })
        .catch(function (err) {
          console.warn("Something went wrong.", err);
        });
    }
  };

  const dateChecker = (d) => {
    var days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    var months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    let day = days[d.getDay()]; //returns an index between 0 and 6
    let date = d.getDate(); //returns an index between 0 and 30
    let month = months[d.getMonth()]; //returns an index between 0 and 11
    let year = d.getFullYear();

    return `${day} ${date} ${month} ${year}`;
  };
  return (
    <div
      className={
        typeof weather.main != "undefined"
          ? weather.main.temp < 5
            ? "weather-app"
            : weather.weather[0].main === "Rain"
            ? "rain"
            : weather.weather[0].main === "Clouds"
            ? "clouds"
            : weather.weather[0].main === "Sunny"
            ? "warm"
            : weather.weather[0].main === "Clear"
            ? "clear"
            : weather.weather[0].main === "Mist"
            ? "mist"
            : "undefined"
          : "undefined"
      }
    >
      <main>
        <div className="search-bar">
          <input
            type="text"
            className="search-box"
            placeholder="Search..."
            onChange={(e) => setQuery(e.target.value)}
            value={query}
            onKeyPress={search}
          />
        </div>
        {typeof weather.main != "undefined" ? (
          <div>
            <div className="location-box">
              <div className="location">
                {weather.name}, {weather.sys.country}
              </div>
              <div className="date">{dateChecker(new Date())}</div>
            </div>

            <div className="weather-box">
              <div className="temp">{Math.round(weather.main.temp)}°c</div>
              <div className="weather">{weather.weather[0].main}</div>
            </div>
          </div>
        ) : (
          <div>
            <div>
              <h1>WELCOME TO THE WEATHER APP</h1>
            </div>
            <div className="date">{dateChecker(new Date())}</div>
          </div>
        )}
      </main>
    </div>
  );
}

export default App;

