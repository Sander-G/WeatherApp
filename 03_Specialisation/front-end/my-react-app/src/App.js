import Weather from "./components/Weather";
import Search from "./components/Search";
import Forecast from "./components/Forecast";
import "./styles/Search.css"
// import styles from 'styled-components';
// import GlobalStyle, { globals } from "./styles";

function App() {
// <GlobalStyle />      
  return (
    <>
      <h3 className="title">Weather App </h3> 
      <Search />    
      <Weather />
      <Forecast />
    </>
  );
}
export default App;
