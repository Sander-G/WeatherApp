import React from "react";
import styled from 'styled-components';

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
let forecastDayThree = weekDay[thisDay.getDay() - 4];
let forecastDayFour = weekDay[thisDay.getDay() - 3];
let forecastDayFive = weekDay[thisDay.getDay() - 2];
let forecastDaySix = weekDay[thisDay.getDay() - 1];
let forecastDaySeven = weekDay[thisDay.getDay()];

// forecast subheader datum day 1
const forecastDatePlusOne = new Date();
forecastDatePlusOne.setDate(forecastDatePlusOne.getDate() + 1);
let forecastMonthOne = month[forecastDatePlusOne.getMonth()];
let forecastDateOne = forecastDatePlusOne.getDate();

let forecastDayMonthOne = forecastDateOne + " / " + forecastMonthOne;

// forecast subheader datum day 2
const forecastDatePlusTwo = new Date();
forecastDatePlusTwo.setDate(forecastDatePlusTwo.getDate() + 2);
let forecastMonthTwo = month[forecastDatePlusTwo.getMonth()];
let forecastDateTwo = forecastDatePlusTwo.getDate();
let forecastDayMonthTwo = forecastDateTwo + " / " + forecastMonthTwo;

// forecast subheader datum day 3
const forecastDatePlusThree = new Date();
forecastDatePlusThree.setDate(forecastDatePlusThree.getDate() + 3);
let forecastMonthThree = month[forecastDatePlusThree.getMonth()];
let forecastDateThree = forecastDatePlusThree.getDate();
let forecastDayMonthThree = forecastDateThree + " / " + forecastMonthThree;

// forecast subheader datum day 4
const forecastDatePlusFour = new Date();
forecastDatePlusFour.setDate(forecastDatePlusFour.getDate() + 4);
let forecastMonthFour = month[forecastDatePlusFour.getMonth()];
let forecastDateFour = forecastDatePlusFour.getDate();
let forecastDayMonthFour = forecastDateFour + " / " + forecastMonthFour;

// forecast subheader datum day 5
const forecastDatePlusFive = new Date();
forecastDatePlusFive.setDate(forecastDatePlusFive.getDate() + 5);
let forecastMonthFive = month[forecastDatePlusFive.getMonth()];
let forecastDateFive = forecastDatePlusFive.getDate();
let forecastDayMonthFive = forecastDateFive + " / " + forecastMonthFive;
 
// forecast subheader datum day 6
const forecastDatePlusSix = new Date();
forecastDatePlusSix.setDate(forecastDatePlusSix.getDate() + 6);
let forecastMonthSix = month[forecastDatePlusSix.getMonth()];
let forecastDateSix = forecastDatePlusSix.getDate();
let forecastDayMonthSix = forecastDateSix + " / " + forecastMonthSix;

// forecast subheader datum day 7
const forecastDatePlusSeven = new Date();
forecastDatePlusSeven.setDate(forecastDatePlusSeven.getDate() + 7);
let forecastMonthSeven = month[forecastDatePlusSeven.getMonth()];
let forecastDateSeven = forecastDatePlusSeven.getDate();
let forecastDayMonthSeven = forecastDateSeven + " / " + forecastMonthSeven;

// console.log(forecastDatePlusSeven);
// console.log(forecastMonthSeven);

const Forecast = ({data}) => {
  console.log(data)
  return (

    <>
      {data.data.daily.map((day, index) => {
        if (index === 0) return <></>
        return <ForecastComponent key={index}>
        {/* <ForecastDayHeading><p>{forecastDayOne}</p></ForecastDayHeading>
        <ForecastDaySubheading><p>{forecastDayMonthOne}</p></ForecastDaySubheading> */}
        <ForecastTempWrapper>
          <WeatherIconSmall alt="ForecastIconSmall"
          src={`./icons/${day.weather[0].icon}.svg`}/>
          <ForecastDescription>{day.weather[0].description}</ForecastDescription>
          <ForecastTemp>{Math.round(day.temp.day)}°C</ForecastTemp>
        </ForecastTempWrapper>
        <ForecastParameterRow>
            <ForecastParameterLabel>Feels like:</ForecastParameterLabel>
            <ForecastParameterValue>{Math.round(day.feels_like.day)}°C</ForecastParameterValue>
          </ForecastParameterRow>
          <ForecastParameterRow>
            <ForecastParameterLabel>Wind:</ForecastParameterLabel>
            <ForecastArrow alt="arrow"
            style={{ transform: `rotate(${day.wind_deg}deg)` }}/>
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
      {/* Forecast Dag 1 */}
      <ForecastComponent>
        {/* <ForecastDayHeading><p>{forecastDayOne}</p></ForecastDayHeading>
        <ForecastDaySubheading><p>{forecastDayMonthOne}</p></ForecastDaySubheading> */}
        <ForecastTempWrapper>
          <WeatherIconSmall alt="ForecastIconSmall"
          src={`./icons/${data.data.daily[0].weather[0].icon}.svg`}/>
          <ForecastDescription>{data.data.daily[0].weather[0].description}</ForecastDescription>
          <ForecastTemp>{Math.round(data.data.daily[0].temp.day)}°C</ForecastTemp>
        </ForecastTempWrapper>
        <ForecastParameterRow>
            <ForecastParameterLabel>Feels like:</ForecastParameterLabel>
            <ForecastParameterValue>{Math.round(data.data.daily[0].feels_like.day)}°C</ForecastParameterValue>
          </ForecastParameterRow>
          <ForecastParameterRow>
            <ForecastParameterLabel>Wind:</ForecastParameterLabel>
            <ForecastArrow alt="arrow"
            style={{ transform: `rotate(${data.data.daily[0].wind_deg}deg)` }}/>
            <ForecastParameterValue>
            {(data.data.daily[0].wind_speed * 1.1268406556253).toFixed(1)} Bft
            </ForecastParameterValue>
          </ForecastParameterRow>
          <ForecastParameterRow>
            <ForecastParameterLabel>Humidity:</ForecastParameterLabel>
            <ForecastParameterValue>{data.data.daily[0].humidity}%</ForecastParameterValue>
          </ForecastParameterRow>
          <ForecastParameterRow>
            <ForecastParameterLabel>Pressure:</ForecastParameterLabel>
            <ForecastParameterValue>{data.data.daily[0]} hPa</ForecastParameterValue>
          </ForecastParameterRow>  
      </ForecastComponent>
      {/* Forecast Dag 2 */}
      <ForecastComponent>
        <ForecastDayHeading><p>{forecastDayTwo}</p></ForecastDayHeading>
        <ForecastDaySubheading><p>{forecastDayMonthTwo}</p></ForecastDaySubheading>
        <ForecastTempWrapper>
          <WeatherIconSmall alt="ForecastIconSmall"
            src={`./icons/${data.iconTwo}.svg`}/>
          <ForecastDescription>{data.descriptionTwo}</ForecastDescription>
          <ForecastTemp>{Math.round(data.tempTwo)}°C</ForecastTemp>
        </ForecastTempWrapper>
        
          <ForecastParameterRow>
            <ForecastParameterLabel>Feels like:</ForecastParameterLabel>
            <ForecastParameterValue>
              {Math.round(data.feelslikeTwo)}°C
            </ForecastParameterValue>
          </ForecastParameterRow>
          <ForecastParameterRow>
            <ForecastParameterLabel>Wind:</ForecastParameterLabel>
              <ForecastArrow alt="arrow" style={{
                  transform: `rotate(${data.winddirectionTwo}deg)`}}/>
            <ForecastParameterValue>
              {(data.windspeedTwo * 1.1268406556253).toFixed(1)} Bft
            </ForecastParameterValue>
          </ForecastParameterRow>
          <ForecastParameterRow>
            <ForecastParameterLabel>Humidity:</ForecastParameterLabel>
            <ForecastParameterValue>
              {data.humidityTwo}%
            </ForecastParameterValue>
          </ForecastParameterRow>
          <ForecastParameterRow>
            <ForecastParameterLabel>Pressure:</ForecastParameterLabel>
            <ForecastParameterValue>
              {data.pressureTwo} hPa
            </ForecastParameterValue>
          </ForecastParameterRow>
      </ForecastComponent>
      {/* Forecast Dag 3 */}
      <ForecastComponent>
        <ForecastDayHeading>
          <p>{forecastDayThree}</p>
        </ForecastDayHeading>
        <ForecastDaySubheading>
          <p>{forecastDayMonthThree}</p>
        </ForecastDaySubheading>
        <ForecastTempWrapper>
          <WeatherIconSmall alt="ForecastIconSmall"
            src={`./icons/${data.iconThree}.svg`}/>
          <ForecastDescription>{data.descriptionThree}</ForecastDescription>
          <ForecastTemp>
            {Math.round(data.tempThree)}°C
          </ForecastTemp>
        </ForecastTempWrapper>
          <ForecastParameterRow>
            <ForecastParameterLabel>Feels like:</ForecastParameterLabel>
            <ForecastParameterValue>
              {Math.round(data.feelslikeThree)}°C
            </ForecastParameterValue>
          </ForecastParameterRow>
          <ForecastParameterRow>
            <ForecastParameterLabel>Wind:</ForecastParameterLabel>
              <ForecastArrow alt="arrow" 
              style={{transform: `rotate(${data.winddirectionThree}deg)`}}/>
            <ForecastParameterValue>
              {(data.windspeedThree * 1.1268406556253).toFixed(1)} Bft
            </ForecastParameterValue>
          </ForecastParameterRow>
          <ForecastParameterRow>
            <ForecastParameterLabel>Humidity:</ForecastParameterLabel>
            <ForecastParameterValue>
              {data.humidityThree}%
            </ForecastParameterValue>
          </ForecastParameterRow>
          <ForecastParameterRow>
            <ForecastParameterLabel>Pressure:</ForecastParameterLabel>
            <ForecastParameterValue>
              {data.pressureThree} hPa
            </ForecastParameterValue>
          </ForecastParameterRow>
        
      </ForecastComponent>
      {/* Forecast Dag 4 */}
      <ForecastComponent>
        <ForecastDayHeading>
          <p>{forecastDayFour}</p>
        </ForecastDayHeading>
        <ForecastDaySubheading>
          <p>{forecastDayMonthFour}</p>
        </ForecastDaySubheading>
        <ForecastTempWrapper>
          <WeatherIconSmall alt="ForecastIconSmall"
          src={`./icons/${data.iconFour}.svg`}/>
          <ForecastDescription>{data.descriptionFour}</ForecastDescription>
          <ForecastTemp>
            {Math.round(data.tempFour)}°C
          </ForecastTemp>
        </ForecastTempWrapper>
          <ForecastParameterRow>
            <ForecastParameterLabel>Feels like:</ForecastParameterLabel>
            <ForecastParameterValue>
              {Math.round(data.feelslikeFour)}°C
            </ForecastParameterValue>
          </ForecastParameterRow>
          <ForecastParameterRow>
            <ForecastParameterLabel>Wind:</ForecastParameterLabel>
              <ForecastArrow alt="arrow"
                style={{transform: `rotate(${data.winddirectionFour}deg)`}}/>
            <ForecastParameterValue>
              {(data.windspeedFour * 1.1268406556253).toFixed(1)} Bft
            </ForecastParameterValue>
          </ForecastParameterRow>
          <ForecastParameterRow>
            <ForecastParameterLabel>Humidity:</ForecastParameterLabel>
            <ForecastParameterValue>
              {data.humidityFour}%
            </ForecastParameterValue>
          </ForecastParameterRow>
          <ForecastParameterRow>
            <ForecastParameterLabel>Pressure:</ForecastParameterLabel>
            <ForecastParameterValue>
              {data.pressureFour} hPa
            </ForecastParameterValue>
          </ForecastParameterRow>
      </ForecastComponent>
      {/* Forecast Dag 5 */}
      <ForecastComponent>
        <ForecastDayHeading>
          <p>{forecastDayFive}</p>
        </ForecastDayHeading>
        <ForecastDaySubheading>
          <p>{forecastDayMonthFive}</p>
        </ForecastDaySubheading>
        <ForecastTempWrapper>
          <WeatherIconSmall alt="ForecastIconSmall"
            src={`./icons/${data.iconFive}.svg`}/>
          <ForecastDescription>{data.descriptionFive}</ForecastDescription>
          <ForecastTemp>
            {Math.round(data.tempFive)}°C
          </ForecastTemp>
        </ForecastTempWrapper>
          <ForecastParameterRow>
            <ForecastParameterLabel>Feels like:</ForecastParameterLabel>
            <ForecastParameterValue>
              {Math.round(data.feelslikeFive)}°C
            </ForecastParameterValue>
          </ForecastParameterRow>
          <ForecastParameterRow>
            <ForecastParameterLabel>Wind:</ForecastParameterLabel>
              <ForecastArrow alt="arrow"
                style={{transform: `rotate(${data.winddirectionFive}deg)`}}/>
            <ForecastParameterValue>
              {(data.windspeedFive * 1.1268406556253).toFixed(1)} Bft
            </ForecastParameterValue>
          </ForecastParameterRow>
          <ForecastParameterRow>
            <ForecastParameterLabel>Humidity:</ForecastParameterLabel>
            <ForecastParameterValue>
              {data.humidityFive}%
            </ForecastParameterValue>
          </ForecastParameterRow>
          <ForecastParameterRow>
            <ForecastParameterLabel>Pressure:</ForecastParameterLabel>
            <ForecastParameterValue>
              {data.pressureFive} hPa
            </ForecastParameterValue>
          </ForecastParameterRow>
      </ForecastComponent>
      {/* Forecast Dag 6 */}
      <ForecastComponent>
        <ForecastDayHeading>
          <p>{forecastDaySix}</p>
        </ForecastDayHeading>
        <ForecastDaySubheading>
          <p>{forecastDayMonthSix}</p>
        </ForecastDaySubheading>
        <ForecastTempWrapper>
          <WeatherIconSmall alt="ForecastIconSmall"
            src={`./icons/${data.iconSix}.svg`}/>
          <ForecastDescription>{data.descriptionSix}</ForecastDescription>
          <ForecastTemp>
            {Math.round(data.tempSix)}°C
          </ForecastTemp>
        </ForecastTempWrapper>
          <ForecastParameterRow>
            <ForecastParameterLabel>Feels like:</ForecastParameterLabel>
            <ForecastParameterValue>
              {Math.round(data.feelslikeSix)}°C
            </ForecastParameterValue>
          </ForecastParameterRow>
          <ForecastParameterRow>
            <ForecastParameterLabel>Wind:</ForecastParameterLabel>
              <ForecastArrow alt="arrow"
              style={{transform: `rotate(${data.winddirectionSix}deg)`}}/>
            <ForecastParameterValue>
              {(data.windspeedSix * 1.1268406556253).toFixed(1)} Bft
            </ForecastParameterValue>
          </ForecastParameterRow>
          <ForecastParameterRow>
            <ForecastParameterLabel>Humidity:</ForecastParameterLabel>
            <ForecastParameterValue>
              {data.humiditySix}%
            </ForecastParameterValue>
          </ForecastParameterRow>
          <ForecastParameterRow>
            <ForecastParameterLabel>Pressure:</ForecastParameterLabel>
            <ForecastParameterValue>
              {data.pressureSix} hPa
            </ForecastParameterValue>
          </ForecastParameterRow>
      </ForecastComponent>
      {/* Forecast Dag 7 */}
      <ForecastComponent>
        <ForecastDayHeading>
          <p>{forecastDaySeven}</p>
        </ForecastDayHeading>
        <ForecastDaySubheading>
          <p>{forecastDayMonthSeven}</p>
        </ForecastDaySubheading>
        <ForecastTempWrapper>
          <WeatherIconSmall alt="ForecastIconSmall"
            src={`./icons/${data.iconSeven}.svg`}/>
          <ForecastDescription>{data.descriptionSeven}</ForecastDescription>
          <ForecastTemp>
            {Math.round(data.tempSeven)}°C
          </ForecastTemp>
        </ForecastTempWrapper>
          <ForecastParameterRow>
            <ForecastParameterLabel>Feels like:</ForecastParameterLabel>
            <ForecastParameterValue>
              {Math.round(data.feelslikeSeven)}°C
            </ForecastParameterValue>
          </ForecastParameterRow>
          <ForecastParameterRow>
            <ForecastParameterLabel>Wind:</ForecastParameterLabel>
            <ForecastParameterValue>
              <ForecastArrow alt="arrow"
                style={{transform: `rotate(${data.winddirectionSeven}deg)`}}/>
            </ForecastParameterValue>
            <ForecastParameterValue>
              {(data.windspeedSeven * 1.1268406556253).toFixed(1)} Bft
            </ForecastParameterValue>
          </ForecastParameterRow>
          <ForecastParameterRow>
            <ForecastParameterLabel>Humidity:</ForecastParameterLabel>
            <ForecastParameterValue>
              {data.humiditySeven}%
            </ForecastParameterValue>
          </ForecastParameterRow>
          <ForecastParameterRow>
            <ForecastParameterLabel>Pressure:</ForecastParameterLabel>
            <ForecastParameterValue>
              {data.pressureSeven} hPa
            </ForecastParameterValue>
          </ForecastParameterRow>
      </ForecastComponent>
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
  src: "./images/arrow.svg"})`
    height: 0.8rem;
`;

