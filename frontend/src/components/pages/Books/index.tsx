// External Libraries
import React, { useEffect } from "react";

// Components

// Styles
import {
  BodyContainer,
  BooksContainer,
  Container,
  CreateBookButton,
  Header,
  HeaderButton,
  HeaderItems,
  Title,
} from "./styles";
import { Typography } from "src/components/toolkit/Typography";
import SmallShineSVG from "@assets/icons/SmallShine";
import theme from "@globals/theme";
import { SheetStatus, useBooks } from "./hooks/useBooks";
import { Book } from "./components/Book";
import AddSVG from "@assets/icons/buttons/Add";
import { Sheet } from "src/components/toolkit/Sheet";
import { CreateBookSheet } from "./components/CreateBookSheet";
import { mapBookFromBackend } from "src/types/book/utils";
import TagSVG from "@assets/icons/header/Tag";
import NoteSVG from "@assets/icons/header/Note";
import { TagSheet } from "./components/TagSheet";
import { useTags } from "./hooks/useTags";
import { useRouter } from "next/router";
import SettingsSVG from "@assets/icons/header/Settings";
import { useUserDetails } from "./hooks/useUserDetails";
import { SettingsSheet } from "./components/SettingsSheet";
import { IUser } from "src/types/user/IUser";

interface Props {
  // Props
}

export const Books: React.FC<Props> = (
  {
    /* Props */
  }
) => {
  const { push } = useRouter();

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
    handleEditConfirm,
    checkIfButtonIsDisabled,
    modalRef,
    handleDeleteBook,
    handleNoteClick,
  } = useBooks();

  const {
    isOpen: isTagSheetOpen,
    sheetStatus: tagSheetStatus,
    handleOpen: handleOpenTags,
    handleClose: handleCloseTags,
    tags,
    handleCreateClick: handleCreateTagClick,
    handleCreateTag,
    handleDeleteTag,
    form: tagForm,
    handleFormChange: handleTagFormChange,
    handleChangeStatus,
    checkIfButtonIsDisabled: checkIfTagButtonIsDisabled,
  } = useTags();

  const {
    userForm,
    handleUserFormChange,
    userSheetIsOpen,
    userSheetStatus,
    handleOpenUserSheet,
    handleOutsideClickUserSheet,
    handleEditUserClick,
    handleEditUserConfirm,
  } = useUserDetails();

  function getButtonFunction() {
    if (sheetStatus === SheetStatus.CREATING) return handleCreateBook;
    else if (sheetStatus === SheetStatus.READING) return handleEditClick;
    return handleEditConfirm;
  }

  return (
    <Container>
      <Header>
        <Title onClick={() => push(`/`)}>
          <Typography variant="h2" color={theme.colors.text.primary}>
            booknook
          </Typography>

          <SmallShineSVG />
        </Title>

        <HeaderItems>
          <HeaderButton onClick={handleOpenTags}>
            <TagSVG stroke={theme.colors.role.primaryDarkest} />
          </HeaderButton>

          <HeaderButton onClick={handleOpenUserSheet}>
            <SettingsSVG stroke={theme.colors.role.primaryDarkest} />
          </HeaderButton>
        </HeaderItems>
      </Header>

      <BodyContainer>
        <Typography variant="h6" color={theme.colors.text.primary}>
          Seus livros
        </Typography>

        <BooksContainer>
          {books?.map((item) => (
            <Book
              book={mapBookFromBackend(item)}
              backgroundColor={item.color}
              onClick={handleBookClick}
            />
          ))}
        </BooksContainer>
      </BodyContainer>

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
        isButtonDisabled={checkIfButtonIsDisabled()}
        modalRef={modalRef}
        onDeleteConfirm={handleDeleteBook}
        tags={tags}
        onNoteClick={handleNoteClick}
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
      />

      <SettingsSheet
        status={userSheetStatus}
        isOpen={userSheetIsOpen}
        onOutsideClick={handleOutsideClickUserSheet}
        form={userForm}
        onFormChange={handleUserFormChange}
        onEditClick={handleEditUserClick}
        onEditConfirm={handleEditUserConfirm}
      />
    </Container>
  );
};
