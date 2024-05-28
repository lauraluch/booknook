import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 16px;
  }

  body {
    font-family: 'Poppins', sans-serif;
    -webkit-font-smoothing: antialiased;
  }

  button, a, input, textarea {
    font-family: 'Poppins', sans-serif;
    -webkit-font-smoothing: antialiased;
  }

  .custom-linear-progress .mdc-linear-progress__bar-inner {
    background-color: ${({ theme }) => theme.colors.primary};
  }

`;

export { GlobalStyle };
