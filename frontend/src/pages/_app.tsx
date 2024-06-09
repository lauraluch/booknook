import React from "react";
import { AppProps } from "next/app";
import theme from "@globals/theme";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "@globals/index";
import { AuthContextProvider } from "@contexts/useAuthContext";

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <AuthContextProvider>
          <Component {...pageProps} />

          <GlobalStyle />
        </AuthContextProvider>
      </ThemeProvider>
    </>
  );
};

export default App;
