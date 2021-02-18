import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
    -webkit-font-smoothing: antialiased !important;
    font-family: 'Roboto', sans-serif;
  }

  button {
    cursor: pointer;
  }

  a {
    text-decoration: none;
  }
`;