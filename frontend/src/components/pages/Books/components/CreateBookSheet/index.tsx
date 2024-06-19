// External Libraries
import React, { MutableRefObject, useEffect, useState } from "react";

// Components

// Styles
import {
  ButtonsRow,
  Container,
  PickerContainer,
  RadioContainer,
  RadioInputs,
  TitleAndDescription,
} from "./styles";
import theme from "@globals/theme";
import { AnimatePresence } from "framer-motion";
import { Sheet } from "src/components/toolkit/Sheet";
import { Typography } from "src/components/toolkit/Typography";
import { IBook } from "src/types/book/IBook";
import { TitledInput } from "@components/inputs/TitledInput";
import { Rating } from "@components/books/Rating";
import { IRating } from "@components/books/Rating/types";
import { Checkbox } from "@components/checks/Checkbox";
import { RadioCheckbox } from "@components/checks/RadioCheckbox";
import HeartSelectSVG from "@assets/icons/books/HeartSelect";
import { ColorPicker } from "@components/selectors/ColorPicker";
import { Button } from "@components/buttons/Button";
import { SheetStatus } from "@pages/Books/hooks/useBooks";
import { ActionModalMethods } from "src/components/modals/ActionModal/types";
import { ActionModal } from "src/components/modals/ActionModal";
import { useTagsInBooks } from "@pages/Books/hooks/useTagsInBook";
import { TagsFromBook } from "./components/TagsFromBook";
import { ITag } from "src/types/tag/ITag";
import { EntriesFromBook } from "./components/EntriesFromBook";

interface Props {
  isOpen: boolean;
  status: SheetStatus;
  onOutsideClick: () => void;
  bookForm: IBook;
  onChangeForm: (key: keyof IBook, value: any) => void;
  onConfirm: () => void;
  isLoading: boolean;
  isButtonDisabled?: boolean;
  modalRef: MutableRefObject<ActionModalMethods>;
  onDeleteConfirm: () => void;
  tags: ITag[];
}

export const CreateBookSheet: React.FC<Props> = ({
  isOpen,
  status,
  onOutsideClick,
  bookForm,
  onChangeForm,
  onConfirm,
  isLoading,
  isButtonDisabled,
  modalRef,
  onDeleteConfirm,
  tags,
}) => {
  const isDisabled = status === SheetStatus.READING;

  function renderTitle() {
    if (status === SheetStatus.CREATING) return "Criar um livro";
    else if (status === SheetStatus.EDITING) return "Editando o livro";
    return "Detalhes do livro";
  }

  function renderDescription() {
    if (status === SheetStatus.CREATING)
      return "Insira os dados abaixo e salve as alterações para criar um novo livro.";
    else if (status === SheetStatus.EDITING)
      return "Edite os detalhes do livro e salve suas alterações.";
    return 'Confira os detalhes do livro abaixo. Clique no botão "Editar" para alterar os dados.';
  }

  function renderButtonLabel() {
    if (status === SheetStatus.CREATING) return "Criar livro";
    else if (status === SheetStatus.EDITING) return "Salvar alterações";
    return "Editar";
  }

  const { tagsInBook, handleAddTagToBook, handleDeleteTagFromBook } =
    useTagsInBooks(bookForm.id);

  return (
    <Sheet isOpen={isOpen} onOutsideClick={onOutsideClick}>
      <Container>
        <TitleAndDescription>
          <Typography variant="h4">{renderTitle()}</Typography>

          <Typography variant="b2" color={theme.colors.text.secondary}>
            {renderDescription()}
          </Typography>
        </TitleAndDescription>

        <Rating
          stars={bookForm.rating as IRating}
          onStarClick={(v) => onChangeForm("rating", v)}
          isCreating={isDisabled}
        />

        <PickerContainer>
          <Typography variant="s2" color={theme.colors.text.secondary}>
            Cor do livro
          </Typography>

          <ColorPicker
            color={bookForm.color}
            onColorChange={(v) => onChangeForm("color", v)}
            disabled={isDisabled}
          />
        </PickerContainer>

        <TitledInput
          title="Título"
          placeholder="título"
          value={bookForm.title}
          onChange={(v) => onChangeForm("title", v)}
          disabled={isDisabled}
        />

        <TitledInput
          title="Autor"
          placeholder="autor"
          value={bookForm.author}
          onChange={(v) => onChangeForm("author", v)}
          disabled={isDisabled}
        />

        <TitledInput
          title="Data de leitura"
          value={bookForm.readAt}
          onChange={(v) => onChangeForm("readAt", v)}
          type="date"
          min={"1900-01-01"}
          disabled={isDisabled}
        />

        <RadioInputs>
          <RadioContainer
            onClick={() => {
              if (isDisabled) return;
              onChangeForm("finished", !bookForm.finished);
            }}
            disabled={isDisabled}
          >
            <RadioCheckbox isFilled={bookForm.finished} />

            <Typography variant="s2" color={theme.colors.text.secondary}>
              Livro já lido
            </Typography>
          </RadioContainer>

          <RadioContainer
            onClick={() => {
              if (isDisabled) return;
              onChangeForm("favorite", !bookForm.favorite);
            }}
            disabled={isDisabled}
          >
            <HeartSelectSVG
              stroke={theme.colors.role.primary}
              selected={bookForm.favorite}
            />

            <Typography variant="s2" color={theme.colors.text.secondary}>
              Livro favorito
            </Typography>
          </RadioContainer>
        </RadioInputs>

        <ButtonsRow>
          {status === SheetStatus.READING && (
            <Button
              label="Excluir"
              labelColor={theme.colors.role.error}
              onClick={() => modalRef.current.open()}
              variant={"secondary"}
            />
          )}

          <Button
            label={renderButtonLabel()}
            onClick={onConfirm}
            loading={isLoading}
            variant={status === SheetStatus.READING ? "tertiary" : "primary"}
            disabled={isButtonDisabled}
          />
        </ButtonsRow>

        {/* <TitleAndDescription>
          <Typography variant="h6">{"Tags associadas"}</Typography>

          <Typography variant="b2" color={theme.colors.text.secondary}>
            {renderDescription()}
          </Typography>
        </TitleAndDescription> */}

        {status !== SheetStatus.CREATING && (
          <TagsFromBook
            tags={tagsInBook}
            allTags={tags}
            onAddTagConfirm={handleAddTagToBook}
            onRemoveTag={handleDeleteTagFromBook}
          />
        )}

        {status !== SheetStatus.CREATING && <EntriesFromBook />}
      </Container>

      <ActionModal
        ref={modalRef}
        title={"Excluir livro"}
        description={"Tem certeza que deseja excluir esse livro?"}
        confirmLabel="Confirmar"
        cancelLabel="Cancelar"
        onCancelPress={() => modalRef.current.close()}
        onConfirmPress={onDeleteConfirm}
      />
    </Sheet>
  );
};
