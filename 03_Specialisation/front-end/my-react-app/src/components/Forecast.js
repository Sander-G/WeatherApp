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

const month = [
  "01",
  "02",
  "03",
  "04",
  "05",
  "06",
  "07",
  "08",
  "09",
  "10",
  "11",
  "12",
];

const thisDay = new Date();
let forecastDayOne = weekDay[thisDay.getDay() + 1];
let forecastDayTwo = weekDay[thisDay.getDay() + 2];
let forecastDayThree = weekDay[thisDay.getDay() + 3];
let forecastDayFour = weekDay[thisDay.getDay() + 4];
let forecastDayFive = weekDay[thisDay.getDay() - 2];
let forecastDaySix = weekDay[thisDay.getDay() - 1];
let forecastDaySeven = weekDay[thisDay.getDay()];

// forecast subheader datum day 1

const forecastDatePlusOne = new Date();
forecastDatePlusOne.setDate(forecastDatePlusOne.getDate() + 1);
let forecastMonthOne = month[forecastDatePlusOne.getMonth()];
let forecastDateOne = forecastDatePlusOne.getDate();
let forecastDayMonthOne = forecastDateOne + " " + `/` + " " + forecastMonthOne;

// forecast subheader datum day 2

const forecastDatePlusTwo = new Date();
forecastDatePlusTwo.setDate(forecastDatePlusTwo.getDate() + 2);
let forecastMonthTwo = month[forecastDatePlusTwo.getMonth()];
let forecastDateTwo = forecastDatePlusTwo.getDate();
let forecastDayMonthTwo = forecastDateTwo + " " + `/` + " " + forecastMonthTwo;

// console.log(forecastDatePlusTwo);
// console.log(forecastMonthTwo);

// hier verder






const Forecast = (props) => {
  return (
    <>
      {/* Forecast Dag 1 */}
      <div className="forecast">
        <div className="forecast__day--heading">
          <p>{forecastDayOne}</p>
        </div>
        <div className="forecast__day--subheading">
          <p>{forecastDayMonthOne}</p>
        </div>
        <div className="forecast__temp_wrapper">
          <img
            alt="forecast"
            className="weather__icon--small"
            src={`./icons/${props.data.iconOne}.svg`}
          />
          <p className="weather-description">{props.data.descriptionOne}</p>
          <div className="forecast__temp">
            {Math.round(props.data.tempOne)}°C
          </div>
        </div>
        <div className="forecast__details">
          <div className="forecast__parameter--row">
            <span className="forecast__parameter--label">Feels like:</span>
            <span className="forecast__parameter--value">
              {Math.round(props.data.feelslikeOne)}°C
            </span>
          </div>
          <div className="parameter-row">
            <span className="forecast__parameter--label">Wind:</span>
            <span className="parameter-value">
              <img
                className="forecast__arrow"
                src="./icons/arrow.svg"
                style={{
                  transform: `rotate(${props.data.winddirectionOne}deg)`,
                }}
              />
            </span>
            <span className="forecast__parameter--value">
              {props.data.windspeedOne}m/s
            </span>
          </div>
          <div className="parameter-row">
            <span className="forecast__parameter--label">Humidity:</span>
            <span className="forecast__parameter--value">
              {props.data.humidityOne}%
            </span>
          </div>
          <div className="parameter-row">
            <span className="forecast__parameter--label">Pressure:</span>
            <span className="forecast__parameter--value">
              {props.data.pressureOne} hPa
            </span>
          </div>
        </div>
      </div>{" "}
      {/* Forecast Dag 2 */}
      <div className="forecast">
        <div className="forecast__day--heading">
          <p>{forecastDayTwo}</p>
        </div>
        <div className="forecast__day--subheading">
          <p>{forecastDayMonthTwo}</p>
        </div>
        <div className="forecast__temp_wrapper">
          <img
            alt="forecast"
            className="weather__icon--small"
            src={`./icons/${props.data.iconTwo}.svg`}
          />
          <p className="weather-description">{props.data.descriptionTwo}</p>
          <div className="forecast__temp">
            {Math.round(props.data.tempTwo)}°C
          </div>
        </div>
        <div className="forecast__details">
          <div className="forecast__parameter--row">
            <span className="forecast__parameter--label">Feels like:</span>
            <span className="forecast__parameter--value">
              {Math.round(props.data.feelslikeTwo)}°C
            </span>
          </div>
          <div className="parameter-row">
            <span className="forecast__parameter--label">Wind:</span>
            <span className="parameter-value">
              <img
                className="forecast__arrow"
                src="./icons/arrow.svg"
                style={{
                  transform: `rotate(${props.data.winddirectionTwo}deg)`,
                }}
              />
            </span>
            <span className="forecast__parameter--value">
              {props.data.windspeedTwo}m/s
            </span>
          </div>
          <div className="parameter-row">
            <span className="forecast__parameter--label">Humidity:</span>
            <span className="forecast__parameter--value">
              {props.data.humidityTwo}%
            </span>
          </div>
          <div className="parameter-row">
            <span className="forecast__parameter--label">Pressure:</span>
            <span className="forecast__parameter--value">
              {props.data.pressureTwo} hPa
            </span>
          </div>
        </div>
      </div>{" "}
      {/* Forecast Dag 3 */}
      <div className="forecast">
        <div className="forecast__day--heading">
          <p>{forecastDayThree}</p>
        </div>
        <div className="forecast__temp_wrapper">
          <img
            alt="forecast"
            className="weather__icon--small"
            src={`./icons/${props.data.iconThree}.svg`}
          />
          <p className="weather-description">{props.data.descriptionThree}</p>
          <div className="forecast__temp">
            {Math.round(props.data.tempThree)}°C
          </div>
        </div>
        <div className="forecast__details">
          <div className="forecast__parameter--row">
            <span className="forecast__parameter--label">Feels like:</span>
            <span className="forecast__parameter--value">
              {Math.round(props.data.feelslikeThree)}°C
            </span>
          </div>
          <div className="parameter-row">
            <span className="forecast__parameter--label">Wind:</span>
            <span className="parameter-value">
              <img
                className="forecast__arrow"
                src="./icons/arrow.svg"
                style={{
                  transform: `rotate(${props.data.winddirectionThree}deg)`,
                }}
              />
            </span>
            <span className="forecast__parameter--value">
              {props.data.windspeedThree}m/s
            </span>
          </div>
          <div className="parameter-row">
            <span className="forecast__parameter--label">Humidity:</span>
            <span className="forecast__parameter--value">
              {props.data.humidityThree}%
            </span>
          </div>
          <div className="parameter-row">
            <span className="forecast__parameter--label">Pressure:</span>
            <span className="forecast__parameter--value">
              {props.data.pressureThree} hPa
            </span>
          </div>
        </div>
      </div>{" "}
      {/* Forecast Dag 4 */}
      <div className="forecast">
        <div className="forecast__day--heading">
          <p>{forecastDayFour}</p>
        </div>
        <div className="forecast__temp_wrapper">
          <img
            alt="forecast"
            className="weather__icon--small"
            src={`./icons/${props.data.iconFour}.svg`}
          />
          <p className="weather-description">{props.data.descriptionFour}</p>
          <div className="forecast__temp">
            {Math.round(props.data.tempFour)}°C
          </div>
        </div>
        <div className="forecast__details">
          <div className="forecast__parameter--row">
            <span className="forecast__parameter--label">Feels like:</span>
            <span className="forecast__parameter--value">
              {Math.round(props.data.feelslikeFour)}°C
            </span>
          </div>
          <div className="parameter-row">
            <span className="forecast__parameter--label">Wind:</span>
            <span className="parameter-value">
              <img
                className="forecast__arrow"
                src="./icons/arrow.svg"
                style={{
                  transform: `rotate(${props.data.winddirectionFour}deg)`,
                }}
              />
            </span>
            <span className="forecast__parameter--value">
              {props.data.windspeedFour}m/s
            </span>
          </div>
          <div className="parameter-row">
            <span className="forecast__parameter--label">Humidity:</span>
            <span className="forecast__parameter--value">
              {props.data.humidityFour}%
            </span>
          </div>
          <div className="parameter-row">
            <span className="forecast__parameter--label">Pressure:</span>
            <span className="forecast__parameter--value">
              {props.data.pressureFour} hPa
            </span>
          </div>
        </div>
      </div>{" "}
      {/* Forecast Dag 5 */}
      <div className="forecast">
        <div className="forecast__day--heading">
          <p>{forecastDayFive}</p>
        </div>
        <div className="forecast__temp_wrapper">
          <img
            alt="forecast"
            className="weather__icon--small"
            src={`./icons/${props.data.iconFive}.svg`}
          />
          <p className="weather-description">{props.data.descriptionFive}</p>
          <div className="forecast__temp">
            {Math.round(props.data.tempFive)}°C
          </div>
        </div>
        <div className="forecast__details">
          <div className="forecast__parameter--row">
            <span className="forecast__parameter--label">Feels like:</span>
            <span className="forecast__parameter--value">
              {Math.round(props.data.feelslikeFive)}°C
            </span>
          </div>
          <div className="parameter-row">
            <span className="forecast__parameter--label">Wind:</span>
            <span className="parameter-value">
              <img
                className="forecast__arrow"
                src="./icons/arrow.svg"
                style={{
                  transform: `rotate(${props.data.winddirectionFive}deg)`,
                }}
              />
            </span>
            <span className="forecast__parameter--value">
              {props.data.windspeedFive}m/s
            </span>
          </div>
          <div className="parameter-row">
            <span className="forecast__parameter--label">Humidity:</span>
            <span className="forecast__parameter--value">
              {props.data.humidityFive}%
            </span>
          </div>
          <div className="parameter-row">
            <span className="forecast__parameter--label">Pressure:</span>
            <span className="forecast__parameter--value">
              {props.data.pressureFive} hPa
            </span>
          </div>
        </div>
      </div>{" "}
      {/* Forecast Dag 6 */}
      <div className="forecast">
        <div className="forecast__day--heading">
          <p>{forecastDaySix}</p>
        </div>
        <div className="forecast__temp_wrapper">
          <img
            alt="forecast"
            className="weather__icon--small"
            src={`./icons/${props.data.iconSix}.svg`}
          />
          <p className="weather-description">{props.data.descriptionSix}</p>
          <div className="forecast__temp">
            {Math.round(props.data.tempSix)}°C
          </div>
        </div>
        <div className="forecast__details">
          <div className="forecast__parameter--row">
            <span className="forecast__parameter--label">Feels like:</span>
            <span className="forecast__parameter--value">
              {Math.round(props.data.feelslikeSix)}°C
            </span>
          </div>
          <div className="parameter-row">
            <span className="forecast__parameter--label">Wind:</span>
            <span className="parameter-value">
              <img
                className="forecast__arrow"
                src="./icons/arrow.svg"
                style={{
                  transform: `rotate(${props.data.winddirectionSix}deg)`,
                }}
              />
            </span>
            <span className="forecast__parameter--value">
              {props.data.windspeedSix}m/s
            </span>
          </div>
          <div className="parameter-row">
            <span className="forecast__parameter--label">Humidity:</span>
            <span className="forecast__parameter--value">
              {props.data.humiditySix}%
            </span>
          </div>
          <div className="parameter-row">
            <span className="forecast__parameter--label">Pressure:</span>
            <span className="forecast__parameter--value">
              {props.data.pressureSix} hPa
            </span>
          </div>
        </div>
      </div>{" "}
      {/* Forecast Dag 7 */}
      <div className="forecast">
        <div className="forecast__day--heading">
          <p>{forecastDaySeven}</p>
        </div>
        <div className="forecast__temp_wrapper">
          <img
            alt="forecast"
            className="weather__icon--small"
            src={`./icons/${props.data.iconSeven}.svg`}
          />
          <p className="weather-description">{props.data.descriptionSeven}</p>
          <div className="forecast__temp">
            {Math.round(props.data.tempSeven)}°C
          </div>
        </div>
        <div className="forecast__details">
          <div className="forecast__parameter--row">
            <span className="forecast__parameter--label">Feels like:</span>
            <span className="forecast__parameter--value">
              {Math.round(props.data.feelslikeSeven)}°C
            </span>
          </div>
          <div className="parameter-row">
            <span className="forecast__parameter--label">Wind:</span>
            <span className="parameter-value">
              <img
                className="forecast__arrow"
                src="./icons/arrow.svg"
                style={{
                  transform: `rotate(${props.data.winddirectionSeven}deg)`,
                }}
              />
            </span>
            <span className="forecast__parameter--value">
              {props.data.windspeedSeven}m/s
            </span>
          </div>
          <div className="parameter-row">
            <span className="forecast__parameter--label">Humidity:</span>
            <span className="forecast__parameter--value">
              {props.data.humiditySeven}%
            </span>
          </div>
          <div className="parameter-row">
            <span className="forecast__parameter--label">Pressure:</span>
            <span className="forecast__parameter--value">
              {props.data.pressureSeven} hPa
            </span>
          </div>
        </div>
      </div>
    </>
  );
};
export default Forecast;
