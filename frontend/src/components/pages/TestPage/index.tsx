// External Libraries
import React from "react";

// Components

// Styles
import { Container } from "./styles";
import { Typography } from "src/components/toolkit/Typography";
import { TitledInput } from "@components/inputs/TitledInput";
import { Button } from "@components/buttons/Button";

interface Props {
  // Props
}

export const TestPage: React.FC<Props> = () => {
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

        <Button variant="primary" label={"Botão"} />
      </div>
    </Container>
  );
};
