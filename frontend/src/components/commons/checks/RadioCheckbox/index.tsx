// External Libraries
import React from "react";

// Components

// Styles
import { Container, SelectedCircle } from "./styles";
import SmallCheckSVG from "@assets/icons/check/SmallCheck";
import theme from "@globals/theme";

interface Props {
  isFilled: boolean;
}

export const RadioCheckbox: React.FC<Props> = ({ isFilled }) => {
  return (
    <Container isFilled={isFilled}>
      <SelectedCircle isFilled={isFilled} />
    </Container>
  );
};
