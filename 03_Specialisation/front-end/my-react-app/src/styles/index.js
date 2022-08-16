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

`;