// External Libraries
import React from "react";

// Components

// Styles
import {
  Banner,
  BodyContainer,
  Container,
  InputsContainer,
  SignupContainer,
} from "./styles";
import { TitledInput } from "@components/inputs/TitledInput";
import { Button } from "@components/buttons/Button";
import { Title } from "@components/structure/Title";
import { useLogin } from "../hooks/useLogin";
import { Typography } from "src/components/toolkit/Typography";
import ArrowUpRightSVG from "@assets/icons/arrows/ArrowUpRight";

interface Props {
  // Props
}

export const SigninPage: React.FC<Props> = () => {
  const {
    username,
    handleChangeUsername,
    password,
    handleChangePassword,
    handleLogin,
    errorMessage,
    loading,
    handleSignupClick,
  } = useLogin();

  return (
    <Container>
      <Banner />

      <BodyContainer>
        <InputsContainer>
          <Title />

          <TitledInput
            title="Nome de usuário"
            placeholder="username"
            value={username}
            onChange={handleChangeUsername}
          />

          <TitledInput
            title="Senha"
            type="password"
            placeholder="✦✦✦✦✦✦"
            value={password}
            onChange={handleChangePassword}
            errorMessage={errorMessage}
          />

          <Button
            label={"Entrar"}
            size="large"
            onClick={() => handleLogin()}
            disabled={username.length === 0 || password.length === 0}
            loading={loading}
          />

          <SignupContainer onClick={handleSignupClick}>
            <Typography variant="s2">Não tenho uma conta</Typography>

            <ArrowUpRightSVG />
          </SignupContainer>
        </InputsContainer>
      </BodyContainer>
    </Container>
  );
};
