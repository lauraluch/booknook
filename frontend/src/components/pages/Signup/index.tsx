// External Libraries
import React from "react";

// Components

// Styles
import { BodyContainer, Container, DescriptionContainer } from "./styles";
import { Typography } from "src/components/toolkit/Typography";
import theme from "@globals/theme";
import { useSignup } from "./hooks/useSignup";
import { TitledInput } from "@components/inputs/TitledInput";
import { Button } from "@components/buttons/Button";

interface Props {
  // Props
}

export const Signup: React.FC<Props> = () => {
  const {
    username,
    handleUsernameChange,
    password,
    handlePasswordChange,
    confirmPassword,
    handleConfirmPasswordChange,
    biography,
    handleBiographyChange,
    errorMessage,
  } = useSignup();

  return (
    <Container>
      <BodyContainer>
        <Typography variant="h3" color={theme.colors.text.primary}>
          Criando uma conta ✦
        </Typography>

        <DescriptionContainer>
          <Typography variant="s1" color={theme.colors.text.primary}>
            Seja bem vindo(a) ao <b>booknook!</b>
          </Typography>

          <Typography variant="b2" color={theme.colors.text.secondary}>
            Aqui, você pode manter registros dos seus livros preferidos, de
            forma simples, leve e divertida.
          </Typography>

          <Typography variant="b2" color={theme.colors.text.secondary}>
            Para criar uma conta, vamos precisar de algumas informações.
          </Typography>
        </DescriptionContainer>

        <TitledInput
          title="Nome de usuário"
          placeholder="username"
          value={username}
          onChange={handleUsernameChange}
        />

        <TitledInput
          title="Senha"
          type="password"
          placeholder="✦✦✦✦✦✦"
          value={password}
          onChange={handlePasswordChange}
        />

        <TitledInput
          title="Confirme sua senha"
          type="password"
          placeholder="✦✦✦✦✦✦"
          value={confirmPassword}
          onChange={handleConfirmPasswordChange}
          errorMessage={errorMessage}
        />

        <TitledInput
          title="Biografia"
          placeholder="Fale um pouco sobre você..."
          value={biography}
          onChange={handleBiographyChange}
          optional
        />

        <Button
          label={"Criar sua conta"}
          marginTop="0.25rem"
          size="large"
          disabled={
            username.length === 0 ||
            password.length === 0 ||
            confirmPassword.length === 0
          }
        />
      </BodyContainer>
    </Container>
  );
};
