// import { useState } from "react";
import styles from 'styled-components';
import GlobalStyle, { globals } from "./styles";
import Search from "./components/search/search"
import CurrentWeather from './components/current-weather/current-weather';



function App() {

  const handleOnSearchChange = (searchData) => {
    console.log(searchData);                                     /* output van geoDB Api  */
  }

  return (
    <>          
    <GlobalStyle />                                       
      <h3>Weather App </h3>       
    <div className="container"></div>
    <Search onSearchChange={handleOnSearchChange}/>

 
       
       <CurrentWeather />
        


        <div className="foreCast">
          <p>7-day forecast:</p>
        </div>


            </>




  )
}
export default App;
