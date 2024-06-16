// External Libraries
import React from "react";

// Components

// Styles
import { Container, TitleAndDescription } from "./styles";
import theme from "@globals/theme";
import { AnimatePresence } from "framer-motion";
import { Sheet } from "src/components/toolkit/Sheet";
import { Typography } from "src/components/toolkit/Typography";
import { IBook } from "src/types/book/IBook";
import { TitledInput } from "@components/inputs/TitledInput";

interface Props {
  isOpen: boolean;
  onOutsideClick: () => void;
  bookForm: IBook;
  onChangeForm: (key: keyof IBook, value: any) => void;
}

export const CreateBookSheet: React.FC<Props> = ({
  isOpen,
  onOutsideClick,
  bookForm,
  onChangeForm,
}) => {
  return (
    <Sheet isOpen={isOpen} onOutsideClick={onOutsideClick}>
      <Container>
        <TitleAndDescription>
          <Typography variant="h4">Criar um livro</Typography>

          <Typography variant="b2" color={theme.colors.text.secondary}>
            Insira os dados abaixo e salve suas alterações para criar um novo
            livro.
          </Typography>
        </TitleAndDescription>

        <TitledInput
          title="Título"
          placeholder="título"
          value={bookForm.title}
          onChange={(v) => onChangeForm("title", v)}
        />

        <TitledInput
          title="Autor"
          placeholder="autor"
          value={bookForm.author}
          onChange={(v) => onChangeForm("author", v)}
        />

        <TitledInput
          title="Data de leitura"
          value={bookForm.readAt}
          onChange={(v) => onChangeForm("readAt", v)}
          type="date"
          max={"2024-01-01"}
          min={"1900-01-01"}
        />
      </Container>
    </Sheet>
  );
};
