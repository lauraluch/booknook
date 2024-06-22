// External Libraries
import React from "react";

// Components

// Styles
import {
  BooksContainer,
  Container,
  CreateNoteButton,
  Header,
  HeaderButton,
  HeaderItems,
  Title,
} from "./styles";
import { Typography } from "src/components/toolkit/Typography";
import theme from "@globals/theme";
import AddSVG from "@assets/icons/buttons/Add";
import SmallShineSVG from "@assets/icons/SmallShine";
import TagSVG from "@assets/icons/header/Tag";

interface Props {
  // Props
}

export const Notes: React.FC<Props> = (
  {
    /* Props */
  }
) => {
  return (
    <Container>
      <Header>
        <Title>
          <Typography variant="h2" color={theme.colors.text.primary}>
            booknook
          </Typography>

          <SmallShineSVG />
        </Title>

        <HeaderItems>
          {/* <HeaderButton>
            <TagSVG stroke={theme.colors.role.primaryDarkest} />
          </HeaderButton> */}
        </HeaderItems>
      </Header>

      <BooksContainer>
        {/* {books?.map((item) => (
          <Book
            book={mapBookFromBackend(item)}
            backgroundColor={item.color}
            onClick={handleBookClick}
          />
        ))} */}
      </BooksContainer>

      <CreateNoteButton>
        <AddSVG stroke={theme.colors.layout.white} />
      </CreateNoteButton>

      {/* <CreateBookSheet
        isOpen={isOpen}
        status={sheetStatus}
        onOutsideClick={handleOutsideClick}
        bookForm={form}
        onChangeForm={handleFormChange}
        onConfirm={getButtonFunction()}
        isLoading={loading}
        isButtonDisabled={checkIfButtonIsDisabled()}
        modalRef={modalRef}
        onDeleteConfirm={handleDeleteBook}
        tags={tags}
      />

      <TagSheet
        status={tagSheetStatus}
        isOpen={isTagSheetOpen}
        onOutsideClick={handleCloseTags}
        tags={tags}
        onCreateClick={handleCreateTagClick}
        onDeleteClick={handleDeleteTag}
        onCreateConfirm={handleCreateTag}
        tagForm={tagForm}
        onFormChange={handleTagFormChange}
        onBackButtonClick={() => handleChangeStatus(SheetStatus.READING)}
        isButtonDisabled={checkIfTagButtonIsDisabled()}
      /> */}
    </Container>
  );
};
