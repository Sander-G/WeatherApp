import { createGlobalStyle } from "styled-components";

export const globals = {
    primaryColor: "#fff",
    secondaryColor: "#000",
    primaryTextColor: "#fff",
    backgroundColor: "#609af7",
}


export default createGlobalStyle`

*, *::after, *::before {
    box-sizing: border-box;
    margin: 0px;
    padding: 0px;

}
.root {
    font-family: "Roboto", Arial !important;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;   
}

#button {
 


}




  .arrow {
    height: 1em;
    margin-right: .5em;
    position: relative;
    top: .2em; 
}
`;






