import React from "react";
import { AppProps } from "next/app";
import theme from "@globals/theme";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "@globals/index";

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />

        <GlobalStyle />
      </ThemeProvider>
    </>
  );
};

export default App;
