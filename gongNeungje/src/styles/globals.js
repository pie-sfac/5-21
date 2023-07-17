import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

const GlobalStyle = createGlobalStyle`

  ${normalize}
  
  * {
    box-sizing: border-box;
  }

  html {
    height: 100%;
  }
  body {
    height: 100%;
    margin: 0;
    padding: 0;
    overflow: hidden;
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
  
  @media (min-width: 375px) {
    html {
      max-width: 375px;
      margin: 0 auto;
    }
  }
`;

export default GlobalStyle;
