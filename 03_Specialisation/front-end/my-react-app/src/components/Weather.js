import React from "react";
import styled from 'styled-components';


const Weather = (props) => {
    const weekDay = [  "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday" ];
    const month = [ "January", "Februari", "March", "April", "May", "June", "July", "August", "September", "October", "November",  "December"];

    let thisDay = new Date();
    let currentWeekday = weekDay[thisDay.getDay()];
    let currentMonth = month[thisDay.getMonth()];
    let currentDate = thisDay.getDate();
    let currentYear = [thisDay.getFullYear()];
    let currentDay = currentWeekday + `, ` + currentMonth + ` ` + currentDate + ` ` + currentYear;
    // console.log(currentYear)
    // console.log(thisDay);
    // console.log(currentDay);
    return (
        <WeatherComponent>
            <Top>
                <div>
                    <City>{props.location.city}, {props.location.country}</City>
                    <CurrentDate>{currentDay}</CurrentDate>
                    <WeatherDescription>{props.data.description}</WeatherDescription>
                </div>
                <img alt="weather" width="100px" src={`./icons/${props.data.icon}.svg`} />
            </Top>
            <Bottom>
                <Temperature>{Math.round(props.data.temp)}°C</Temperature>
                    <Details>   
                        <ParameterRow>
                        <ParameterLabel>Feels like:</ParameterLabel>
                        <ParameterValue>{Math.round(props.data.feelslike)}°C</ParameterValue>
                        </ParameterRow>
                        <ParameterRow>
                        <ParameterLabel>Wind:</ParameterLabel>
                        <ParameterValue>
                        <img className="arrow" alt="arrow" src="./images/arrow.svg" style={{transform: `rotate(${props.data.winddirection}deg)`}}/>
                       
                        {(props.data.windspeed*1.1268406556253).toFixed(1)} Bft</ParameterValue>
                        </ParameterRow>
                        <ParameterRow>
                        <ParameterLabel>Humidity:</ParameterLabel>
                        <ParameterValue>{props.data.humidity}%</ParameterValue>
                        </ParameterRow>
                        <ParameterRow>
                        <ParameterLabel>Pressure:</ParameterLabel>
                        <ParameterValue>{props.data.pressure} hPa</ParameterValue>
                        </ParameterRow>
                    </Details>
            </Bottom>
        </WeatherComponent>
    );
}
export default Weather;

//****** sTyLiNg Weather component ******//

const WeatherComponent = styled.div`
    width: 375px;
    border-radius: 5px;
    box-shadow: 10px -2px 20px 2px rgba(0, 0, 0, 30%);
    color: #fff;
    background-color: #091921;
    margin: 20px auto 0 auto;
    padding: 0 10px 10px 10px;

    font-family: "Roboto", Arial !important;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
`;
const Top = styled.div`
 display: flex;
    justify-content: space-between;
    align-items: center;
`;
const Bottom = styled.div`
 display: flex;
    justify-content: space-between;
    align-items: center;
`;
const City = styled.p`
    font-weight: 600;
    font-size: 25px;
    line-height: 1;
    margin: 0;
    letter-spacing: 1px;
`;
const WeatherDescription = styled.p`
    font-weight: 400;
    font-size: 13px;
    line-height: 1;
    margin: .2em;
`;
const CurrentDate = styled.p`
font-weight: 400;
    font-size: 13px;
    line-height: 1;
    margin: 0.2em;
`;
const Temperature = styled.p`
   font-weight: 600;
    font-size: 80px;
    width: auto;
    letter-spacing: -3px;
    margin: 10px 0;
`;
const Details = styled.div`
  width: 100%;
    padding-left: 20px;
`;
const ParameterRow = styled.div`
display: flex;
    justify-content: space-between;
`;
const ParameterLabel = styled.div`
  text-align: left;
    font-weight: 400;
    font-size: 12px;
    padding-left: 15px;
`;
const ParameterValue = styled.span`
  text-align: right;
    font-weight: 550;
`;
const Arrow = styled.img`
  height: 1em;
    margin-right: .5em;
    position: relative;
    top: .2em; 
`;
