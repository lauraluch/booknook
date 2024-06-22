// External Libraries
import React from "react";

// Components

// Styles
import {
  NotesContainer,
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
import { useNotes } from "./hooks/useNotes";
import { ListEntry } from "./components/ListEntry";
import { mapEntryFromBackend } from "src/types/entry/utils";

interface Props {
  // Props
}

export const Notes: React.FC<Props> = (
  {
    /* Props */
  }
) => {
  const { notes, noteForm, handleFormChange, handleCreateNote } = useNotes();

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

      <NotesContainer>
        {notes?.map((entry) => (
          <ListEntry entry={mapEntryFromBackend(entry)} />
        ))}
      </NotesContainer>

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
