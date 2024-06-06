// External Libraries
import React from "react";

// Components

// Styles
import { Container } from "./styles";
import { Typography } from "src/components/toolkit/Typography";
import { TitledInput } from "@components/inputs/TitledInput";

interface Props {
  // Props
}

export const TestPage: React.FC<Props> = () => {
  return (
    <Container>
      <Typography variant={"h1"}>test page</Typography>

      <div style={{ width: "12rem" }}>
        <TitledInput title="Título do Input" type="password" />
      </div>
    </Container>
  );
};
