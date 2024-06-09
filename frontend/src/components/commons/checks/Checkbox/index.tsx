// External Libraries
import React from "react";

// Components

// Styles
import { Container } from "./styles";
import SmallCheckSVG from "@assets/icons/check/SmallCheck";
import theme from "@globals/theme";

interface Props {
  isFilled: boolean;
}

export const Checkbox: React.FC<Props> = ({ isFilled }) => {
  return (
    <Container isFilled={isFilled}>
      <SmallCheckSVG stroke={theme.colors.layout.white} />
    </Container>
  );
};
