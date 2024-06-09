// External Libraries
import React from "react";

// Components

// Styles
import { Container } from "./styles";
import { PasswordValidationItem } from "../PasswordValidationItem";
import { Typography } from "src/components/toolkit/Typography";
import theme from "@globals/theme";

interface Props {
  // Props
}

export const PasswordValidation: React.FC<Props> = () => {
  return (
    <Container>
      <Typography variant="s3" color={theme.colors.text.secondary}>
        Requisitos da senha:
      </Typography>

      <PasswordValidationItem
        title={"Pelo menos 4 caracteres"}
        isFilled={true}
      />
      <PasswordValidationItem title={"Mais de 4 caracteres"} isFilled={false} />
    </Container>
  );
};
