// External Libraries
import React, { useEffect, useState } from "react";

// Components

// Styles
import { Banner, BodyContainer, Container, InputsContainer } from "./styles";
import { TitledInput } from "@components/inputs/TitledInput";
import { Button } from "@components/buttons/Button";
import { Title } from "@components/structure/Title";
import { useLogin } from "../hooks/useLogin";
import { useAuthContext } from "@contexts/useAuthContext";
import { useRouter } from "next/router";

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
  } = useLogin();
  // const { signIn, loading } = useAuthContext();

  // const [username, setUsername] = useState("");
  // const [password, setPassword] = useState("");
  // const router = useRouter();

  // const handleLogin = async () => {
  //   const response = await signIn(username, password);

  //   if (response) {
  //     router.push(`/books/${response}`);
  //   }
  // };

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
        </InputsContainer>
      </BodyContainer>
    </Container>
  );
};
