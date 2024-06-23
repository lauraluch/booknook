// External Libraries
import React, { MutableRefObject } from "react";

// Components

// Styles
import {
  ButtonsRow,
  Container,
  HeaderButton,
  RadioContainer,
  RadioInputs,
  TitleAndButton,
  TitleAndDescription,
} from "./styles";
import { SheetStatus } from "@pages/Books/hooks/useBooks";
import { IEntry } from "src/types/entry/IEntry";
import { ActionModalMethods } from "src/components/modals/ActionModal/types";
import { Sheet } from "src/components/toolkit/Sheet";
import { Typography } from "src/components/toolkit/Typography";
import theme from "@globals/theme";
import { TitledInput } from "@components/inputs/TitledInput";
import { Button } from "@components/buttons/Button";
import { ActionModal } from "src/components/modals/ActionModal";
import { TextField } from "@components/inputs/TextField";

interface Props {
  isOpen: boolean;
  status: SheetStatus;
  onOutsideClick: () => void;
  noteForm: IEntry;
  onChangeForm: (key: keyof IEntry, value: any) => void;
  onConfirm: () => void;
  isLoading: boolean;
  isButtonDisabled?: boolean;
  modalRef: MutableRefObject<ActionModalMethods>;
  onDeleteConfirm: () => void;
}

export const NoteSheet: React.FC<Props> = ({
  isOpen,
  status,
  onOutsideClick,
  noteForm,
  onChangeForm,
  onConfirm,
  isLoading,
  isButtonDisabled,
  modalRef,
  onDeleteConfirm,
}) => {
  const isDisabled = status === SheetStatus.READING;

  function renderTitle() {
    if (status === SheetStatus.CREATING) return "Criar uma nota";
    else if (status === SheetStatus.EDITING) return "Editando a nota";
    return "Detalhes da nota";
  }

  function renderDescription() {
    if (status === SheetStatus.CREATING)
      return "Insira os dados abaixo e salve as alterações para criar uma nova nota em seu livro.";
    else if (status === SheetStatus.EDITING)
      return "Edite os detalhes da nota e salve suas alterações.";
    return 'Confira os detalhes da nota abaixo. Clique no botão "Editar" para alterar os dados.';
  }

  function renderButtonLabel() {
    if (status === SheetStatus.CREATING) return "Criar nota";
    else if (status === SheetStatus.EDITING) return "Salvar alterações";
    return "Editar";
  }

  return (
    <Sheet isOpen={isOpen} onOutsideClick={onOutsideClick}>
      <Container>
        <TitleAndDescription>
          <Typography variant="h4">{renderTitle()}</Typography>

          <Typography variant="b2" color={theme.colors.text.secondary}>
            {renderDescription()}
          </Typography>
        </TitleAndDescription>

        <TitledInput
          title="Título"
          placeholder="Título"
          value={noteForm.title}
          onChange={(v) => onChangeForm("title", v)}
          disabled={isDisabled}
        />

        <TextField
          title="Descrição"
          value={noteForm.description}
          height={26}
          placeholder="Escreva os detalhes da sua nota..."
          onChange={(v) => onChangeForm("description", v)}
        />

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
      </Container>

      <ActionModal
        ref={modalRef}
        title={"Excluir nota"}
        description={"Tem certeza que deseja excluir essa nota de seu livro?"}
        confirmLabel="Confirmar"
        cancelLabel="Cancelar"
        onCancelPress={() => modalRef.current.close()}
        onConfirmPress={onDeleteConfirm}
      />
    </Sheet>
  );
};
