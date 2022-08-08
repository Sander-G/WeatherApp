import { createGlobalStyle } from "styled-components";

export const globals = {
    primaryColor: "#fff",
    secondaryColor: "#000",
    primaryTextColor: "#fff",
    backgroundColor: "#609af7",
}



export default createGlobalStyle`
   *, *::before, *::after {
    box-sizing: border-box;

   }

   html {
    font-size: 1.5rem;
    @media (min-width: 768px) {
        font-size: 1.8 rem;
    }
   }

   body {
    margin: 0;
    font-family: "Roboto", Arial !important;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
   }

   #root {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: ${globals.primaryTextColor};
    background-color: ${globals.backgroundColor};


   }
`;