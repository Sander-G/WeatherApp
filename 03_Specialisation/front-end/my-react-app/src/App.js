import { useState, useEffect } from "react";
import Weather from "./components/Weather";
import Forecast from "./components/Forecast";
import styled from 'styled-components';
import Globals from "./styles";
import PietImg from "./images/weerman.jpg";
import oantMoarn from "./audio/oant_moarn.mp3";

function App() {
  const audio = new Audio(oantMoarn);
  const start = () => {
    audio.play();
  };
  const [city, setCity] = useState("Enschede");
  const [location, setLocation] = useState({
    lat: "52.2209855",
    lon: "6.8940537",
    city: "Enschede",
    country: "NL",
  });
  const [data, setData] = useState(null);
  const searchLocation = () => {
    const input = document.getElementById("input").value;
    setCity(input);
  };

  useEffect(() => {
    if (!city) return; /* Guardclass tegen lege input */
    fetch(
      `https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=5&appid=${process.env.REACT_APP_API_KEY}`
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
      `https://api.openweathermap.org/data/2.5/onecall?lat=${location.lat}&lon=${location.lon}&units=metric&exclude=hourly,minutely,alerts&appid=${process.env.REACT_APP_API_KEY}`
    )
      .then((res) => res.json())
      .then((weatherData) => {
      
        setData(weatherData);
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
  },[]);
  

  return (
    <>
    <Globals/>
      <Container>
        <SearchWrapper>
          <Inputfield>
            <input type="text" id="input" placeholder="Enter city name.." />
            <button id="button" onClick= {() =>{
            searchLocation(); 
            start();
            }}>Sykje!</button>
          </Inputfield>
          {data && <Weather city={city} data={data} location={location} />}
        </SearchWrapper>
        <ForecastWrapper>
          {data && <Forecast data={data} />}
        </ForecastWrapper>
      </Container>
    </>
  );
}
export default App;


//****** Styled Components - Containers & Wrappers & Input ******//

const Container=styled.div`
background-image: url(${PietImg});
background-repeat: no-repeat;
background-size: cover;
background-size: 100vw;
padding: 0px 0px 50px 0px;
`;
const SearchWrapper=styled.div`
    display: flex;
   flex-flow: column wrap;
   align-content: flex-start;
    margin-left: 190px;
    padding-left:20px;
    margin-bottom: 20px;
`;
const ForecastWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
  padding-left:20px;
`;
const Inputfield = styled.div`
  width: 375px;
  border-radius: 5px;
  box-shadow: 10px -2px 20px 2px rgba(0, 0, 0, 30%);
  color: #fff;
  background-color: #091921;
  margin: 20px auto 0 auto;
  padding: 20px 20px 20px 20px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
