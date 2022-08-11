import React from "react";
import "../styles/Forecast.css"

const WEEK_DAYS =["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

const Forecast = () => {
    return (
        <>
            <label className="title"> 8 Day Forecast:</label>
            <div className="wrapper">
                <div className="forecast__day--1">
                    <img alt="forecast" className="icon__small" src="icons/01d.png" />
                    <label className="day"> </label>
                </div>
            </div>
        </>
    )
}
export default Forecast;