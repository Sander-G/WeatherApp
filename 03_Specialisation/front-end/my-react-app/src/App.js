// import { useState } from "react";
import styles from 'styled-components';
import GlobalStyle, { globals } from "./styles";
import Search from "./components/search/search"


function App() {

  const handleOnSearchChange = (searchData) => {
    console.log(searchData);
  }

  return (
    <>          
    <GlobalStyle />                                       
      <h3>Weather App </h3>       
    <div className="container"></div>
    <Search onSearchChange={handleOnSearchChange}/>

 
       









        
        <div className="localWeather">


      <p>Local Weather</p>
        </div>
        


        <div className="foreCast">
          <p>7-day forecast:</p>
        </div>


            </>




  )
}
export default App;
