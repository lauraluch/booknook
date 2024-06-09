// External Libraries
import React from "react";

// Components

// Styles
import { Container } from "./styles";
import { Checkbox } from "@components/checks/Checkbox";
import { Typography } from "src/components/toolkit/Typography";
import theme from "@globals/theme";

interface Props {
  title: string;
  isFilled: boolean;
}

export const PasswordValidationItem: React.FC<Props> = ({
  title,
  isFilled,
}) => {
  return (
    <Container>
      <Checkbox isFilled={isFilled} />

      <Typography variant="b3" color={theme.colors.text.secondary}>
        {title}
      </Typography>
    </Container>
  );
};
