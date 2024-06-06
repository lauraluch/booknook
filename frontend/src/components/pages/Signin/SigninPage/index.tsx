// External Libraries
import React from "react";

// Components

// Styles
import { Banner, BodyContainer, Container, InputsContainer } from "./styles";
import { Typography } from "src/components/toolkit/Typography";
import theme from "@globals/theme";
import { TitledInput } from "@components/inputs/TitledInput";
import { Button } from "@components/buttons/Button";

interface Props {
  // Props
}

export const SigninPage: React.FC<Props> = (
  {
    /* Props */
  }
) => {
  return (
    <Container>
      <Banner />

      <BodyContainer>
        <InputsContainer>
          <Typography variant="h1" color={theme.colors.text.primary}>
            booknook
          </Typography>

          <TitledInput title="nome de usuário" placeholder="username" />

          <TitledInput title="senha" type="password" placeholder="●●●●●●●" />

          <Button label={"Entrar"} size="large" />
        </InputsContainer>
      </BodyContainer>
    </Container>
  );
};
