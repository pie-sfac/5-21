import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';
import { Link } from 'react-router-dom';

const GlobalStyle = createGlobalStyle`

  ${normalize}
  
  * {
    box-sizing: border-box;
  }
  body {
    margin: 0;
    padding: 0;
    width: 100%;
    min-height: 100vh;
    font-size: 14px;

    > div, > div > div {
      height: 100%;
    }
  }
  
  p {
    margin: 0;
  }
  button{
    cursor: pointer;
    border: 0;
    background-color:transparent;
  }

  ul,li{
    list-style: none;
    padding: 0;
    color: black;
  }

  h2{
    font-size: 14px;

  }

 input {
  outline-style: none;
  border: none;
  background-color:transparent;
  
 }
  
`;

export default GlobalStyle;
