import React from "react";
import styled from "styled-components";

const Weather = ({ data, location }) => {
  const Today = new Date(data.current?.dt * 1000).toLocaleString("en-us", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <WeatherComponent>
      <Top>
        <div>
          <City>
            {location.city}, {location.country}
          </City>
          <CurrentDate>{Today}</CurrentDate>
          <WeatherDescription>
            {data.current?.weather[0].description}
          </WeatherDescription>
        </div>
        <img
          alt="weathericon"
          width="100px"
          src={`./icons/${data.current?.weather[0].icon}.svg`}
        />
      </Top>
      <Bottom>
        <Temperature>{Math.round(data.current?.temp)}°C</Temperature>
        <Details>
          <ParameterRow>
            <ParameterLabel>Feels like:</ParameterLabel>
            <ParameterValue>
              {Math.round(data.current?.feels_like)}°C
            </ParameterValue>
          </ParameterRow>
          <ParameterRow>
            <ParameterLabel>Wind:</ParameterLabel>
            <ParameterValue>
              <Arrow
                alt="Arrow"
                style={{ transform: `rotate(${data.current?.wind_deg}deg)` }}
              />
              {(data.current?.wind_speed * 1.1268406556253).toFixed(1)} Bft
            </ParameterValue>
          </ParameterRow>
          <ParameterRow>
            <ParameterLabel>Humidity:</ParameterLabel>
            <ParameterValue>{data.current?.humidity}%</ParameterValue>
          </ParameterRow>
          <ParameterRow>
            <ParameterLabel>Pressure:</ParameterLabel>
            <ParameterValue>{data.current?.pressure} hPa</ParameterValue>
          </ParameterRow>
        </Details>
      </Bottom>
    </WeatherComponent>
  );
};
export default Weather;

//****** Styled components - Weather ******//
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
  margin: 0.2em;
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

const Arrow = styled.img.attrs({
  src: "./images/arrow.svg",
})`
  height: 1em;
  margin-right: 0.5em;
  position: relative;
  top: 0.1em;
`;
