import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body {
    font-family: Arial, Helvetica, sans-serif;
    font-size: 16px;
    font-size: 12px;
  }

  html, body, #root {
    width: 100vw;
    height: 100vh;
  }
`;
