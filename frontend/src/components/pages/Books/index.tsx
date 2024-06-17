// External Libraries
import React, { useEffect } from "react";

// Components

// Styles
import { BooksContainer, Container, CreateBookButton, Header } from "./styles";
import { Typography } from "src/components/toolkit/Typography";
import SmallShineSVG from "@assets/icons/SmallShine";
import theme from "@globals/theme";
import { useBooks } from "./hooks/useBooks";
import { Book } from "./components/Book";
import AddSVG from "@assets/icons/buttons/Add";
import { Sheet } from "src/components/toolkit/Sheet";
import { CreateBookSheet } from "./components/CreateBookSheet";

interface Props {
  // Props
}

export const Books: React.FC<Props> = (
  {
    /* Props */
  }
) => {
  const {
    isCreating,
    handleCreateClick,
    handleOutsideClick,
    booksMock,
    form,
    handleFormChange,
    handleCreateBook,
    loading,
  } = useBooks();

  return (
    <Container>
      <Header>
        <Typography variant="h2" color={theme.colors.text.primary}>
          booknook
        </Typography>

        <SmallShineSVG />
      </Header>

      <BooksContainer>
        {booksMock.map((item) => (
          <Book book={item} backgroundColor={""} borderColor={""} />
        ))}
      </BooksContainer>

      <CreateBookButton onClick={handleCreateClick}>
        <AddSVG stroke={theme.colors.layout.white} />
      </CreateBookButton>

      <CreateBookSheet
        isOpen={isCreating}
        onOutsideClick={handleOutsideClick}
        bookForm={form}
        onChangeForm={handleFormChange}
        onConfirm={handleCreateBook}
        isLoading={loading}
      />
    </Container>
  );
};
