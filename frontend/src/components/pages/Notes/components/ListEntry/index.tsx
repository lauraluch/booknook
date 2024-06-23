// External Libraries
import React from "react";

// Components

// Styles
import { Container } from "./styles";
import { Typography } from "src/components/toolkit/Typography";
import { IEntry } from "src/types/entry/IEntry";

interface Props {
  entry: IEntry;
  onClick: (note: IEntry) => void;
}

export const ListEntry: React.FC<Props> = ({ entry, onClick }) => {
  return (
    <Container onClick={() => onClick(entry)}>
      <Typography variant="s2">{entry.title}</Typography>
      <Typography variant="b3">{entry.lastModifiedAt}</Typography>
    </Container>
  );
};
