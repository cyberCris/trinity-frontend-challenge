import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
      margin: 0;
      padding: 0;
      outline: 0;
      box-sizing: border-box;
  }
  html, body, #root {
      height: 100%;
      font-family: 'Roboto', sans-serif;
  }
  body{
      background: #242435;
      /* -webkit-font-smoothing: antialiased !important; */
  }
  body, input, button{
      color: #2e2f45;
      font-size: 14px;
      font-family: Arial, Helvetica, sans-serif;
  }
  button {
      cursor: pointer;
  }
`;
