// External Libraries
import React from "react";

// Components

// Styles
import { Container } from "./styles";
import { Typography } from "src/components/toolkit/Typography";
import { IEntry } from "src/types/entry/IEntry";

interface Props {
  entry: IEntry;
}

export const ListEntry: React.FC<Props> = ({ entry }) => {
  return (
    <Container>
      <Typography variant="s2">{entry.title}</Typography>
      <Typography variant="b3">{entry.lastModifiedAt}</Typography>
    </Container>
  );
};
