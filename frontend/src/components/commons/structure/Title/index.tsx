// External Libraries
import React from "react";

// Components

// Styles
import { Container } from "./styles";
import ShineSVG from "@assets/icons/Shine";
import { Typography } from "src/components/toolkit/Typography";
import theme from "@globals/theme";

interface Props {
  // Props
}

export const Title: React.FC<Props> = () => {
  return (
    <Container>
      <Typography variant="t1" color={theme.colors.text.primary}>
        booknook
      </Typography>

      <ShineSVG />
    </Container>
  );
};
