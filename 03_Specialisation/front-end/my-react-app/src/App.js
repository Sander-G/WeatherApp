import { useState, useEffect } from "react";
import Weather from "./components/Weather";
import Forecast from "./components/Forecast";
import "./styles/App.css";
// import styles from 'styled-components';
// import GlobalStyle, { globals } from "./styles";

function App() {
  const [city, setCity] = useState("Enschede");
  const [location, setLocation] = useState({
    lat: "52.2209855",
    lon: "6.8940537",
    city: "Enschede",
    country: "NL",
  });
  const [data, setData] = useState([]);


  const searchLocation = () => {
    const input = document.getElementById("input").value;
    setCity(input);
  };

  useEffect(() => {
    if (!city) return; /* Guardclass tegen lege input */
    fetch(
      `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=5&appid=${process.env.REACT_APP_API_KEY}`
    )
      .then((res) => res.json())
      .then((data) => {
        setLocation({
          lat: data[0].lat,
          lon: data[0].lon,
          city: data[0].name,
          country: data[0].country,
        });
        // console.log(data[0])
      });
  }, [city]);

  useEffect(() => {
    fetch(
      `https://api.openweathermap.org/data/2.5/onecall?lat=${location.lat}&lon=${location.lon}&units=metric&appid=${process.env.REACT_APP_API_KEY}`
    )
      .then((res) => res.json())
      .then((weatherData) => {
        return setData({
          temp: weatherData.current.temp,
          icon: weatherData.current.weather[0].icon,
          feelslike: weatherData.current.feels_like,
          windspeed: weatherData.current.wind_speed,
          winddirection: weatherData.current.wind_deg,
          humidity: weatherData.current.humidity,
          pressure: weatherData.current.pressure,
          description: weatherData.current.weather[0].description,

          tempOne: weatherData.daily[0].temp.day,
          iconOne: weatherData.daily[0].weather[0].icon,
          feelslikeOne: weatherData.daily[0].feels_like.day,
          windspeedOne: weatherData.daily[0].wind_speed,
          winddirectionOne: weatherData.daily[0].wind_deg,
          humidityOne: weatherData.daily[0].humidity,
          pressureOne: weatherData.daily[0].pressure,
          descriptionOne: weatherData.daily[0].description,

          tempTwo: weatherData.daily[1].temp.day,
          iconTwo: weatherData.daily[1].weather[0].icon,
          feelslikeTwo: weatherData.daily[1].feels_like.day,
          windspeedTwo: weatherData.daily[1].wind_speed,
          winddirectionTwo: weatherData.daily[1].wind_deg,
          humidityTwo: weatherData.daily[1].humidity,
          pressureTwo: weatherData.daily[1].pressure,
          descriptionTwo: weatherData.daily[1].description,

          tempThree: weatherData.daily[2].temp.day,
          iconThree: weatherData.daily[2].weather[0].icon,
          feelslikeThree: weatherData.daily[2].feels_like.day,
          windspeedThree: weatherData.daily[2].wind_speed,
          humidityThree: weatherData.daily[2].humidity,
          pressureThree: weatherData.daily[2].pressure,
          descriptionThree: weatherData.daily[2].description,

          tempFour: weatherData.daily[3].temp.day,
          iconFour: weatherData.daily[3].weather[0].icon,
          feelslikeFour: weatherData.daily[3].feels_like.day,
          windspeedFour: weatherData.daily[3].wind_speed,
          humidityFour: weatherData.daily[3].humidity,
          pressureFour: weatherData.daily[3].pressure,
          descriptionFour: weatherData.daily[3].description,

          tempFive: weatherData.daily[4].temp.day,
          iconFive: weatherData.daily[4].weather[0].icon,
          feelslikeFive: weatherData.daily[4].feels_like.day,
          windspeedFive: weatherData.daily[4].wind_speed,
          humidityFive: weatherData.daily[4].humidity,
          pressureFive: weatherData.daily[4].pressure,
          descriptionFive: weatherData.daily[4].description,

          tempSix: weatherData.daily[5].temp.day,
          iconSix: weatherData.daily[5].weather[0].icon,
          feelslikeSix: weatherData.daily[5].feels_like.day,
          windspeedSix: weatherData.daily[5].wind_speed,
          humiditySix: weatherData.daily[5].humidity,
          pressureSix: weatherData.daily[5].pressure,
          descriptionSix: weatherData.daily[5].description,

          tempSeven: weatherData.daily[6].temp.day,
          iconSeven: weatherData.daily[6].weather[0].icon,
          feelslikeSeven: weatherData.daily[6].feels_like.day,
          windspeedSeven: weatherData.daily[6].wind_speed,
          humiditySeven: weatherData.daily[6].humidity,
          pressureSeven: weatherData.daily[6].pressure,
          descriptionSeven: weatherData.daily[6].description,
        });
      });
  }, [location]);

  useEffect(() => {
    document
      .getElementById("input")
      .addEventListener("keyup", function (event) {
        event.preventDefault();
        if (event.keyCode === 13) {
          document.getElementById("button").click();
        }
      });
  });

  return (
    <>
      <div className="container">
        <div className="search__wrapper">
          <div className="inputfield">
            <input type="text" id="input" placeholder="Enter city name.." />
            <button id="button" onClick={searchLocation}>
              Search
            </button>
          </div>
          <Weather city={city} data={data} location={location} />
        </div>
        <div className="forecast__wrapper">
          <Forecast data={data} />
        </div>
      </div>
    </>
  );
}
export default App;
