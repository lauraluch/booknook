// External Libraries
import React from "react";

// Components

// Styles
import { Container } from "./styles";
import { Typography } from "src/components/toolkit/Typography";

interface Props {
  // Props
}

export const TestPage: React.FC<Props> = (
  {
    /* Props */
  }
) => {
  return (
    <Container>
      <Typography variant={"h1"}>test page</Typography>
    </Container>
  );
};
