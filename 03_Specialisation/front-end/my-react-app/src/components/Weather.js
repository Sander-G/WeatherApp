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
        <Weather__component>
            <Top>
                <div>
                    <City>{props.location.city}, {props.location.country}</City>
                    <Current__date>{currentDay}</Current__date>
                    <Weather__description>{props.data.description}</Weather__description>
                </div>
                <img alt="weather" width="100px" src={`./icons/${props.data.icon}.svg`} />
            </Top>
            <Bottom>
                <Temperature>{Math.round(props.data.temp)}°C</Temperature>
                    <Details>   
                        <Parameter__row>
                        <Parameter__label>Feels like:</Parameter__label>
                        <Parameter__value>{Math.round(props.data.feelslike)}°C</Parameter__value>
                        </Parameter__row>
                        <Parameter__row>
                        <Parameter__label>Wind:</Parameter__label>
                        <Parameter__value>
                        <img className="arrow" alt="arrow" src="./images/arrow.svg" style={{transform: `rotate(${props.data.winddirection}deg)`}}/>
                       
                        {(props.data.windspeed*1.1268406556253).toFixed(1)} Bft</Parameter__value>
                        </Parameter__row>
                        <Parameter__row>
                        <Parameter__label>Humidity:</Parameter__label>
                        <Parameter__value>{props.data.humidity}%</Parameter__value>
                        </Parameter__row>
                        <Parameter__row>
                        <Parameter__label>Pressure:</Parameter__label>
                        <Parameter__value>{props.data.pressure} hPa</Parameter__value>
                        </Parameter__row>
                    </Details>
            </Bottom>
        </Weather__component>
    );
}
export default Weather;

//****** sTyLiNg Weather component ******//

const Weather__component = styled.div`
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
const Weather__description = styled.p`
    font-weight: 400;
    font-size: 13px;
    line-height: 1;
    margin: .2em;
`;
const Current__date = styled.p`
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
const Parameter__row = styled.div`
display: flex;
    justify-content: space-between;
`;
const Parameter__label = styled.div`
  text-align: left;
    font-weight: 400;
    font-size: 12px;
    padding-left: 15px;
`;
const Parameter__value = styled.span`
  text-align: right;
    font-weight: 550;
`;
const Arrow = styled.img`

  height: 1em;
    margin-right: .5em;
    position: relative;
    top: .2em; 
`;
