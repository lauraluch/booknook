// External Libraries
import React from "react";

// Components

// Styles
import { Banner, BodyContainer, Container, InputsContainer } from "./styles";
import { Typography } from "src/components/toolkit/Typography";
import theme from "@globals/theme";
import { TitledInput } from "@components/inputs/TitledInput";
import { Button } from "@components/buttons/Button";
import { Title } from "@components/structure/Title";

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
          <Title />

          <TitledInput title="nome de usuário" placeholder="username" />

          <TitledInput title="senha" type="password" placeholder="●●●●●●●" />

          <Button label={"Entrar"} size="large" />
        </InputsContainer>
      </BodyContainer>
    </Container>
  );
};
