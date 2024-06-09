// External Libraries
import React from "react";

// Components

// Styles
import { Container } from "./styles";
import { Typography } from "src/components/toolkit/Typography";
import { TitledInput } from "@components/inputs/TitledInput";
import { Button } from "@components/buttons/Button";
import { useAuthContext } from "@contexts/useAuthContext";

interface Props {
  // Props
}

export const TestPage: React.FC<Props> = () => {
  const { signOut } = useAuthContext();

  return (
    <Container>
      <Typography variant={"h1"}>test page</Typography>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "12rem",
          gap: "1rem",
        }}
      >
        <TitledInput title="Título do Input" type="password" />

        <Button label={"Sair da conta"} size="large" onClick={signOut} />
      </div>
    </Container>
  );
};
