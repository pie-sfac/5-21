import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

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
  }

  ul{
    list-style: none;
    padding: 0;
  }
`;

export default GlobalStyle;
