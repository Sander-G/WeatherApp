import { useState, useEffect } from "react";
import styles from 'styled-components';
import GlobalStyle, { globals } from "./styles";
// import CurrentWeather from './components/current-weather/current-weather';



function App() {

  <GlobalStyle />  
      const [input, setInput] = useState('')
      const [selection, setSelection] = useState('')

      useEffect(() => {
        if (!selection) return 
        fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${selection}&limit=5&appid=${process.env.REACT_APP_API_KEY}`)

          .then(res => res.json())
          .then(data => {
            console.log(data);
            console.log(data[0].lat);
            console.log(data[0].lon);
          }
            )
      }, [selection])



  return (
     

 <>

      <h3>Weather App </h3> 
      <input type="text" value={input} onChange={(e) => setInput(e.target.value)} />   
      <button onClick={() => setSelection(input)}>Search City</button>
   
</>

                               
    

       
      // <CurrentWeather />
      //   <div className="foreCast">
      //     <p>7-day forecast:</p>
      //   </div>

  );
  }
export default App;
