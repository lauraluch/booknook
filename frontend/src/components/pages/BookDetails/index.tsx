// External Libraries
import React from "react";

// Components

// Styles
import { Container } from "./styles";
import { useRouter } from "next/router";

interface Props {
  // Props
}

export const BookDetails: React.FC<Props> = (
  {
    /* Props */
  }
) => {
  const { query } = useRouter();
  console.log(query);

  return <Container>{/* Code */}</Container>;
};
