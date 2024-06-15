// External Libraries
import React from "react";

// Components

// Styles
import { Container } from "./styles";
import { IBook } from "src/types/book/IBook";
import { Typography } from "src/components/toolkit/Typography";

interface Props {
  book: IBook;
  backgroundColor: string;
  borderColor: string;
}

export const Book: React.FC<Props> = ({
  book,
  backgroundColor,
  borderColor,
}) => {
  return (
    <Container backgroundColor={backgroundColor} borderColor={borderColor}>
      <Typography variant="s1">{book.title}</Typography>
    </Container>
  );
};
