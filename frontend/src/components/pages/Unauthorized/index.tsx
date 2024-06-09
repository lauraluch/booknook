// External Libraries
import React from "react";

// Components

// Styles
import { Container } from "./styles";
import { Typography } from "src/components/toolkit/Typography";
import theme from "@globals/theme";

interface Props {
  // Props
}

export const Unauthorized: React.FC<Props> = () => {
  return (
    <Container>
      <Typography variant="h1" color={theme.colors.text.primary}>
        Ops!
      </Typography>
      <Typography variant="s1" color={theme.colors.text.secondary}>
        Parece que não encontramos nada por aqui...
      </Typography>
    </Container>
  );
};
