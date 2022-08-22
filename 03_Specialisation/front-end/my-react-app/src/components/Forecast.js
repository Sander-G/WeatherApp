import React from "react";
import styled from 'styled-components';

const Forecast = ({ data }) => {
  // console.log(data)
  return (
    <>
      {data.daily.map((day, index) => {
        if (index === 0) return <></>

        const ForecastDay = new Date((day.dt) * 1000).toLocaleString("en-us", { weekday: "long" });
        const ForecastDate = new Date((day.dt) * 1000).toLocaleString("en-us", { day: "2-digit" });
        const ForecastMonth = new Date((day.dt) * 1000).toLocaleString("en-us", { month: "2-digit" });

        return <ForecastComponent key={index}>
          <ForecastDayHeading><p>{ForecastDay}</p></ForecastDayHeading>
          <ForecastDaySubheading><p>{ForecastDate}{` / `}{ForecastMonth}</p></ForecastDaySubheading>
          <ForecastTempWrapper>
            <WeatherIconSmall alt="ForecastIconSmall" src={`./icons/${day.weather[0].icon}.svg`} />
            <ForecastDescription>{day.weather[0].description}</ForecastDescription>
            <ForecastTemp>{Math.round(day.temp.day)}°C</ForecastTemp>
          </ForecastTempWrapper>
          <ForecastParameterRow>
            <ForecastParameterLabel>Feels like:</ForecastParameterLabel>
            <ForecastParameterValue>{Math.round(day.feels_like.day)}°C</ForecastParameterValue>
          </ForecastParameterRow>
          <ForecastParameterRow>
            <ForecastParameterLabel>Wind:</ForecastParameterLabel>
            <ForecastArrow alt="arrow" style={{ transform: `rotate(${day.wind_deg}deg)` }} />
            <ForecastParameterValue>
              {(day.wind_speed * 1.1268406556253).toFixed(1)} Bft
            </ForecastParameterValue>
          </ForecastParameterRow>
          <ForecastParameterRow>
            <ForecastParameterLabel>Humidity:</ForecastParameterLabel>
            <ForecastParameterValue>{day.humidity}%</ForecastParameterValue>
          </ForecastParameterRow>
          <ForecastParameterRow>
            <ForecastParameterLabel>Pressure:</ForecastParameterLabel>
            <ForecastParameterValue>{day.pressure} hPa</ForecastParameterValue>
          </ForecastParameterRow>
        </ForecastComponent>
      })}
    </>
  );
};
export default Forecast;

const ForecastComponent = styled.div`
    width: 120px;
    border-radius: 5px;
    box-shadow: 10px -2px 20px 2px rgba(0, 0, 0, 30%);
    color: #fff;
    background-color: #091921;
    margin: 0px 10px 0px 10px;
    padding: 10px 10px 10px 10px;
    font-family: "Roboto", Arial !important;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
`;
const ForecastDayHeading = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;
const ForecastDaySubheading = styled.div`
   display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    font-size: 0.8em;
`;
const ForecastTempWrapper = styled.div`
   display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: space-between;
`;
const ForecastDescription = styled.p`
     font-size: 0.8em;
`;
const WeatherIconSmall = styled.img`
   width: 60px;
`;
const ForecastTemp = styled.div`
   font-weight: 600;
    font-size: 35px;
    width: auto;
    letter-spacing: -1px;
    margin: 10px 10px 10px 10px;
`;
const ForecastParameterRow = styled.div`
    display: flex;
    justify-content: space-between;
`;
const ForecastParameterLabel = styled.span`
text-align: left;
font-weight: 400;
font-size: 11px;
`;
const ForecastParameterValue = styled.span`
   text-align: right;
    font-weight: 600;
    font-size: 12px;
`;
const ForecastArrow = styled.img.attrs({
  src: "./images/arrow.svg"
})`
    height: 0.8rem;
`;