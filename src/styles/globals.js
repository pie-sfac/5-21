import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

const GlobalStyle = createGlobalStyle`

  ${normalize}
  
  * {
    box-sizing: border-box;
  }
  body {
    font-family: 'Noto Sans KR', sans-serif;
    font-weight: 400;
    margin: 0;
    padding: 0;
    width: 100%;
    min-height: 100vh;
    font-size: 12px;

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
<<<<<<< HEAD
=======
  
  @media (min-width: 1920px) {
    html {
      max-width: 1920px;
      margin: 0 auto;
    }
  }
>>>>>>> sun
`;

export default GlobalStyle;
