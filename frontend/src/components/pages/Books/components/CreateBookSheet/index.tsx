// External Libraries
import React, { useEffect, useState } from "react";

// Components

// Styles
import {
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

interface Props {
  isOpen: boolean;
  onOutsideClick: () => void;
  bookForm: IBook;
  onChangeForm: (key: keyof IBook, value: any) => void;
  onConfirm: () => void;
  isLoading: boolean;
}

export const CreateBookSheet: React.FC<Props> = ({
  isOpen,
  onOutsideClick,
  bookForm,
  onChangeForm,
  onConfirm,
  isLoading,
}) => {
  useEffect(() => {
    console.log(bookForm);
  }, [bookForm]);

  return (
    <Sheet isOpen={isOpen} onOutsideClick={onOutsideClick}>
      <Container>
        <TitleAndDescription>
          <Typography variant="h4">Criar um livro</Typography>

          <Typography variant="b2" color={theme.colors.text.secondary}>
            Insira os dados abaixo e salve as alterações para criar um novo
            livro.
          </Typography>
        </TitleAndDescription>

        <Rating
          stars={bookForm.rating as IRating}
          onStarClick={(v) => onChangeForm("rating", v)}
        />

        <PickerContainer>
          <Typography variant="s2" color={theme.colors.text.secondary}>
            Cor do livro
          </Typography>

          <ColorPicker
            color={bookForm.color}
            onColorChange={(v) => onChangeForm("color", v)}
          />
        </PickerContainer>

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
          min={"1900-01-01"}
        />

        <RadioInputs>
          <RadioContainer
            onClick={() => onChangeForm("finished", !bookForm.finished)}
          >
            <RadioCheckbox isFilled={bookForm.finished} />

            <Typography variant="s2" color={theme.colors.text.secondary}>
              Livro já lido
            </Typography>
          </RadioContainer>

          <RadioContainer
            onClick={() => onChangeForm("favorite", !bookForm.favorite)}
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

        <Button
          label={"Criar livro"}
          onClick={onConfirm}
          loading={isLoading}
          variant="primary"
          style={{ alignSelf: "flex-end" }}
        />
      </Container>
    </Sheet>
  );
};
