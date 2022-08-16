import React from "react";
import "../styles/Weather.css";


const Weather = (props) => {
    const weekDay = [
        "Sunday",
        "Monday", 
        "Tuesday", 
        "Wednesday", 
        "Thursday", 
        "Friday", 
        "Saturday"
    ];
    const month = [
        "January", 
        "Februari", 
        "March", 
        "April", 
        "May", 
        "June", 
        "July", 
        "August", 
        "September", 
        "October", 
        "November", 
        "December"];

    let thisDay = new Date();
    let currentWeekday = weekDay[thisDay.getDay()];
    let currentMonth = month[thisDay.getMonth()];
    let currentDate = thisDay.getDate();
    let currentDay = currentWeekday + `, ` + currentMonth + ` ` + currentDate;
      // console.log(thisDay);
    // console.log(currentDay);

    return (
        <div className="weather">
            <div className="top">
                <div>
                    <p className="city">{props.location.city}, {props.location.country}</p>
                    <p className="current-date">{currentDay}</p>
                    <p className="weather-description">{props.data.description}</p>
                </div>
                <img alt="weather" className="weather-icon" src={`./icons/${props.data.icon}.svg`} />
            </div>
            <div className="bottom">
                <p className="temperature">{Math.round(props.data.temp)}°C</p>
                    <div className="details">   
                    <div className="parameter-row">
                        <span className="parameter-label">Feels like:</span>
                        <span className="parameter-value">{Math.round(props.data.feelslike)}°C</span>
                    </div>
                    <div className="parameter-row">
                        <span className="parameter-label">Wind:</span>
                        <span className="parameter-value">
                        <img className="arrow" alt="arrow" src="./icons/arrow.svg" style={{transform: `rotate(${props.data.winddirection}deg)`}} />
                        </span>
                        <span className="parameter-value">{props.data.windspeed} m/s</span>
                    </div>
                    <div className="parameter-row">
                        <span className="parameter-label">Humidity:</span>
                        <span className="parameter-value">{props.data.humidity}%</span>
                    </div>
                    <div className="parameter-row">
                        <span className="parameter-label">Pressure:</span>
                        <span className="parameter-value">{props.data.pressure}hPa</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Weather;