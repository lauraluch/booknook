// External Libraries
import React from "react";
import chroma from "chroma-js";

// Components

// Styles
import { Container, FavoriteContainer } from "./styles";
import { IBook } from "src/types/book/IBook";
import { Typography } from "src/components/toolkit/Typography";
import FavoriteSVG from "@assets/icons/books/Favorite";

interface Props {
  book: IBook;
  backgroundColor: string;
}

const getAdjustedColor = (color: string) => {
  const luminance = chroma(color).luminance();
  // return luminance > 0.3 ? "#000000" : "#ffffff";
  return luminance > 0.3
    ? chroma(color).darken(3.5)
    : chroma(color).brighten(3.5);
};

export const Book: React.FC<Props> = ({ book, backgroundColor }) => {
  console.log(book);

  return (
    <Container
      backgroundColor={backgroundColor}
      borderColor={chroma(backgroundColor || "#ffffff")
        .darken()
        .hex()}
    >
      {book.favorite && (
        <FavoriteContainer>
          <FavoriteSVG />
        </FavoriteContainer>
      )}

      <Typography
        variant="d1"
        color={getAdjustedColor(backgroundColor || "#ffffff")}
      >
        {book.title}
      </Typography>
      <Typography
        variant="b2"
        color={getAdjustedColor(backgroundColor || "#ffffff")}
      >
        {book.author}
      </Typography>
    </Container>
  );
};
