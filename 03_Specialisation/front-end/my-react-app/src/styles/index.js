import { createGlobalStyle } from "styled-components";
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
    background-color: #e1ecf4;
    border-radius: 15px;
    border: 1px solid #7aa7c7;
    box-shadow: rgba(255, 255, 255, .7) 0 1px 0 0 inset;
    min-width: 60px;
    color: #3d3d3c;
    cursor: pointer;
    display: inline-block;
    font-size: 13px;
    font-weight: 600;
    line-height: 1.15385;
    margin: 0;
    outline: none;
    padding: 6px .8em;
    position: relative;
    text-align: center;
    text-decoration: none;
    user-select: none;
    -webkit-user-select: none;
    touch-action: manipulation;
    vertical-align: baseline;
    white-space: nowrap;
}
#button:active {
    scale: 1.1;
}
#input {
    background-color: #e1ecf4;
    border-radius: 15px;
    border: 1px solid #7aa7c7;
    box-shadow: rgba(255, 255, 255, .7) 0 1px 0 0 inset;
    min-width: 60px;
    color: #3d3d3c;
    display: inline-block;
    font-size: 13px;
    font-weight: 600;
    line-height: 1.15385;
    margin: 0;
    outline: none;
    padding: 6px .8em;
    position: relative;

}
#input:focus {
    background-color: lightgrey;
}


.arrow {
    height: 1em;
    margin-right: .5em;
    position: relative;
    top: .2em; 
}

`;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

