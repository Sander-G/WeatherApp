import React from "react";
import "../styles/Forecast.css";

const weekDay = [
  "Sunday",  
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const thisDay = new Date();
let forecastDayOne = weekDay[thisDay.getDay() +1];
let forecastDayTwo = weekDay[thisDay.getDay() +2];
let forecastDayThree = weekDay[thisDay.getDay() +3];
let forecastDayFour = weekDay[thisDay.getDay() +4];
let forecastDayFive = weekDay[thisDay.getDay() +5];
let forecastDaySix = weekDay[thisDay.getDay() -1];
let forecastDaySeven = weekDay[thisDay.getDay()];

// console.log(forecastDaySeven);




const Forecast = (props) => {
  let iconOne = `http://openweathermap.org/img/wn/${props.data.iconOne}@4x.png`
  let iconTwo = `http://openweathermap.org/img/wn/${props.data.iconTwo}@4x.png`
  let iconThree = `http://openweathermap.org/img/wn/${props.data.iconThree}@4x.png`
  let iconFour = `http://openweathermap.org/img/wn/${props.data.iconFour}@4x.png`
  let iconFive = `http://openweathermap.org/img/wn/${props.data.iconFive}@4x.png`
  let iconSix = `http://openweathermap.org/img/wn/${props.data.iconSix}@4x.png`
  let iconSeven = `http://openweathermap.org/img/wn/${props.data.iconSeven}@4x.png`
  return (
    <>

      <div className="forecast">
        <div className="forecast__day--heading">
          <p>{forecastDayOne}</p>
        </div>
        <div className="forecast__temp_wrapper">
          <img
            alt="forecast"
            className="weather__icon--small"
            src={iconOne}
          />
          <div className="forecast__temp">{Math.round(props.data.tempOne)}°C</div>
        </div>
        <div className="forecast__details">
          <div className="forecast__parameter--row">
            <span className="forecast__parameter--label">Feels like:</span>
            <span className="forecast__parameter--value">{Math.round(props.data.feelslikeOne)}°C</span>
          </div>
          <div className="parameter-row">
            <span className="forecast__parameter--label">Wind:</span>
            <span className="forecast__parameter--value">{props.data.windspeedOne}m/s</span>
          </div>
          <div className="parameter-row">
            <span className="forecast__parameter--label">Humidity:</span>
            <span className="forecast__parameter--value">{props.data.humidityOne}%</span>
          </div>
          <div className="parameter-row">
            <span className="forecast__parameter--label">Pressure:</span>
            <span className="forecast__parameter--value">{props.data.pressureOne} hPa</span>
          </div>
        </div>
      </div> 
      <div className="forecast">
        <div className="forecast__day--heading">
          <p>{forecastDayTwo}</p>
        </div>
        <div className="forecast__temp_wrapper">
          <img
            alt="forecast"
            className="weather__icon--small"
            src={iconTwo}
          />
          <div className="forecast__temp">{Math.round(props.data.tempTwo)}°C</div>
        </div>
        <div className="forecast__details">
          <div className="forecast__parameter--row">
            <span className="forecast__parameter--label">Feels like:</span>
            <span className="forecast__parameter--value">{Math.round(props.data.feelslikeTwo)}°C</span>
          </div>
          <div className="parameter-row">
            <span className="forecast__parameter--label">Wind:</span>
            <span className="forecast__parameter--value">{props.data.windspeedTwo}m/s</span>
          </div>
          <div className="parameter-row">
            <span className="forecast__parameter--label">Humidity:</span>
            <span className="forecast__parameter--value">{props.data.humidityTwo}%</span>
          </div>
          <div className="parameter-row">
            <span className="forecast__parameter--label">Pressure:</span>
            <span className="forecast__parameter--value">{props.data.pressureTwo} hPa</span>
          </div>
        </div>
      </div>
      <div className="forecast">
        <div className="forecast__day--heading">
          <p>{forecastDayThree}</p>
        </div>
        <div className="forecast__temp_wrapper">
          <img
            alt="forecast"
            className="weather__icon--small"
            src={iconThree}
          />
          <div className="forecast__temp">{Math.round(props.data.tempThree)}°C</div>
        </div>
        <div className="forecast__details">
          <div className="forecast__parameter--row">
            <span className="forecast__parameter--label">Feels like:</span>
            <span className="forecast__parameter--value">{Math.round(props.data.feelslikeThree)}°C</span>
          </div>
          <div className="parameter-row">
            <span className="forecast__parameter--label">Wind:</span>
            <span className="forecast__parameter--value">{props.data.windspeedThree}m/s</span>
          </div>
          <div className="parameter-row">
            <span className="forecast__parameter--label">Humidity:</span>
            <span className="forecast__parameter--value">{props.data.humidityThree}%</span>
          </div>
          <div className="parameter-row">
            <span className="forecast__parameter--label">Pressure:</span>
            <span className="forecast__parameter--value">{props.data.pressureThree} hPa</span>
          </div>
        </div>
      </div>
      <div className="forecast">
        <div className="forecast__day--heading">
          <p>{forecastDayFour}</p>
        </div>
        <div className="forecast__temp_wrapper">
          <img
            alt="forecast"
            className="weather__icon--small"
            src={iconFour}
          />
          <div className="forecast__temp">{Math.round(props.data.tempFour)}°C</div>
        </div>
        <div className="forecast__details">
          <div className="forecast__parameter--row">
            <span className="forecast__parameter--label">Feels like:</span>
            <span className="forecast__parameter--value">{Math.round(props.data.feelslikeFour)}°C</span>
          </div>
          <div className="parameter-row">
            <span className="forecast__parameter--label">Wind:</span>
            <span className="forecast__parameter--value">{props.data.windspeedFour}m/s</span>
          </div>
          <div className="parameter-row">
            <span className="forecast__parameter--label">Humidity:</span>
            <span className="forecast__parameter--value">{props.data.humidityFour}%</span>
          </div>
          <div className="parameter-row">
            <span className="forecast__parameter--label">Pressure:</span>
            <span className="forecast__parameter--value">{props.data.pressureFour} hPa</span>
          </div>
        </div>
      </div>
      <div className="forecast">
        <div className="forecast__day--heading">
          <p>{forecastDayFive}</p>
        </div>
        <div className="forecast__temp_wrapper">
          <img
            alt="forecast"
            className="weather__icon--small"
            src={iconFive}
          />
          <div className="forecast__temp">{Math.round(props.data.tempFive)}°C</div>
        </div>
        <div className="forecast__details">
          <div className="forecast__parameter--row">
            <span className="forecast__parameter--label">Feels like:</span>
            <span className="forecast__parameter--value">{Math.round(props.data.feelslikeFive)}°C</span>
          </div>
          <div className="parameter-row">
            <span className="forecast__parameter--label">Wind:</span>
            <span className="forecast__parameter--value">{props.data.windspeedFive}m/s</span>
          </div>
          <div className="parameter-row">
            <span className="forecast__parameter--label">Humidity:</span>
            <span className="forecast__parameter--value">{props.data.humidityFive}%</span>
          </div>
          <div className="parameter-row">
            <span className="forecast__parameter--label">Pressure:</span>
            <span className="forecast__parameter--value">{props.data.pressureFive} hPa</span>
          </div>
        </div>
      </div>
      <div className="forecast">
        <div className="forecast__day--heading">
          <p>{forecastDaySix}</p>
        </div>
        <div className="forecast__temp_wrapper">
          <img
            alt="forecast"
            className="weather__icon--small"
            src={iconSix}
          />
          <div className="forecast__temp">{Math.round(props.data.tempSix)}°C</div>
        </div>
        <div className="forecast__details">
          <div className="forecast__parameter--row">
            <span className="forecast__parameter--label">Feels like:</span>
            <span className="forecast__parameter--value">{Math.round(props.data.feelslikeSix)}°C</span>
          </div>
          <div className="parameter-row">
            <span className="forecast__parameter--label">Wind:</span>
            <span className="forecast__parameter--value">{props.data.windspeedSix}m/s</span>
          </div>
          <div className="parameter-row">
            <span className="forecast__parameter--label">Humidity:</span>
            <span className="forecast__parameter--value">{props.data.humiditySix}%</span>
          </div>
          <div className="parameter-row">
            <span className="forecast__parameter--label">Pressure:</span>
            <span className="forecast__parameter--value">{props.data.pressureSix} hPa</span>
          </div>
        </div>
      </div>
      <div className="forecast">
        <div className="forecast__day--heading">
          <p>{forecastDaySeven}</p>
        </div>
        <div className="forecast__temp_wrapper">
          <img
            alt="forecast"
            className="weather__icon--small"
            src={iconSeven}
          />
          <div className="forecast__temp">{Math.round(props.data.tempSeven)}°C</div>
        </div>
        <div className="forecast__details">
          <div className="forecast__parameter--row">
            <span className="forecast__parameter--label">Feels like:</span>
            <span className="forecast__parameter--value">{Math.round(props.data.feelslikeSeven)}°C</span>
          </div>
          <div className="parameter-row">
            <span className="forecast__parameter--label">Wind:</span>
            <span className="forecast__parameter--value">{props.data.windspeedSeven}m/s</span>
          </div>
          <div className="parameter-row">
            <span className="forecast__parameter--label">Humidity:</span>
            <span className="forecast__parameter--value">{props.data.humiditySeven}%</span>
          </div>
          <div className="parameter-row">
            <span className="forecast__parameter--label">Pressure:</span>
            <span className="forecast__parameter--value">{props.data.pressureSeven} hPa</span>
          </div>
        </div>
      </div>

    </>
  );
};
export default Forecast;
