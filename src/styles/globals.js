import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';
import { Link } from 'react-router-dom';

const GlobalStyle = createGlobalStyle`

  ${normalize}
  
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    margin: 0;
    padding: 0;
    width: 100%;
    min-height: 100vh;
    font-size: 14px;
    font-size: 14px;
    color: #1d1d1d;

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

  input {
  outline-style: none;
  outline: none;
 }
 textarea {
  
  border: none; 
  outline: none;
  resize: none;
  font-size: 14px;
 }
 
`;

export default GlobalStyle;
