import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

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
  }

  ul{
    list-style: none;
    padding: 0;
  }

  h2{
    font-size: 14px;

  }

 
  
`;

export default GlobalStyle;
