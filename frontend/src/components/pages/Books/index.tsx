// External Libraries
import React, { useEffect } from "react";

// Components

// Styles
import { BooksContainer, Container, CreateBookButton, Header } from "./styles";
import { Typography } from "src/components/toolkit/Typography";
import SmallShineSVG from "@assets/icons/SmallShine";
import theme from "@globals/theme";
import { SheetStatus, useBooks } from "./hooks/useBooks";
import { Book } from "./components/Book";
import AddSVG from "@assets/icons/buttons/Add";
import { Sheet } from "src/components/toolkit/Sheet";
import { CreateBookSheet } from "./components/CreateBookSheet";
import { mapBookFromBackend } from "src/types/book/utils";

interface Props {
  // Props
}

export const Books: React.FC<Props> = (
  {
    /* Props */
  }
) => {
  const {
    books,
    isOpen,
    sheetStatus,
    handleCreateClick,
    handleOutsideClick,
    form,
    handleFormChange,
    handleCreateBook,
    loading,
    handleBookClick,
    handleEditClick,
  } = useBooks();

  // useEffect(() => {
  //   console.log(form);
  // }, [form]);

  function getButtonFunction() {
    if (sheetStatus === SheetStatus.CREATING) return handleCreateBook;
    else if (sheetStatus === SheetStatus.READING) return handleEditClick;
    return null;
  }

  return (
    <Container>
      <Header>
        <Typography variant="h2" color={theme.colors.text.primary}>
          booknook
        </Typography>

        <SmallShineSVG />
      </Header>

      <BooksContainer>
        {books?.map((item) => (
          <Book
            book={mapBookFromBackend(item)}
            backgroundColor={item.color}
            onClick={handleBookClick}
          />
        ))}
      </BooksContainer>

      <CreateBookButton onClick={handleCreateClick}>
        <AddSVG stroke={theme.colors.layout.white} />
      </CreateBookButton>

      <CreateBookSheet
        isOpen={isOpen}
        status={sheetStatus}
        onOutsideClick={handleOutsideClick}
        bookForm={form}
        onChangeForm={handleFormChange}
        onConfirm={getButtonFunction()}
        isLoading={loading}
      />
    </Container>
  );
};
