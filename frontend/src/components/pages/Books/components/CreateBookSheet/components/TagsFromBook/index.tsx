// External Libraries
import React from "react";
import Select, { StylesConfig } from "react-select";
import chroma from "chroma-js";

// Components

// Styles
import {
  Container,
  TagsRow,
  TitleAndButton,
  TitleAndDescription,
} from "./styles";
import { ITag } from "src/types/tag/ITag";
import { Typography } from "src/components/toolkit/Typography";
import theme from "@globals/theme";
import { Badge } from "@components/structure/Badge";
import { AddButton } from "@components/buttons/AddButton";
import { TagOption } from "./types";

interface Props {
  tags: ITag[];
  allTags: ITag[];
  onAddTagConfirm: (tagId: number) => void;
  onRemoveTag: (tagId: number) => void;
}

export const TagsFromBook: React.FC<Props> = ({
  tags,
  allTags,
  onAddTagConfirm,
  onRemoveTag,
}) => {
  const handleSelectChange = (selectedOptions: any) => {
    console.log(selectedOptions);

    selectedOptions.forEach((option: any) => {
      if (!tags?.some((tag) => tag.id === option.value)) {
        console.log(`${option.value} na tag`);

        onAddTagConfirm(option.value);
        return;
      }
    });

    tags?.forEach((tag) => {
      if (!selectedOptions.some((option: any) => option.value === tag.id)) {
        onRemoveTag(tag.id);
        return;
      }
    });
  };

  const selectedOptions = tags?.map((tag) => ({
    value: tag.id,
    label: tag.title,
    color: tag.color,
  }));

  const options = allTags?.map((tag) => ({
    value: tag.id,
    label: tag.title,
    color: tag.color,
  }));

  const colourStyles: StylesConfig<TagOption, true> = {
    control: (styles) => ({ ...styles, backgroundColor: "white" }),
    option: (styles, { data, isDisabled, isFocused, isSelected }) => {
      const color = chroma(data.color);
      return {
        ...styles,
        backgroundColor: isDisabled
          ? undefined
          : isSelected
          ? data.color
          : isFocused
          ? color.alpha(0.1).css()
          : undefined,
        color: isDisabled
          ? "#ccc"
          : isSelected
          ? chroma.contrast(color, "white") > 2
            ? "white"
            : "black"
          : data.color,
        cursor: isDisabled ? "not-allowed" : "default",

        ":active": {
          ...styles[":active"],
          backgroundColor: !isDisabled
            ? isSelected
              ? data.color
              : color.alpha(0.3).css()
            : undefined,
        },
      };
    },
    multiValue: (styles, { data }) => {
      const color = chroma(data.color);
      return {
        ...styles,
        backgroundColor: color.alpha(0.1).css(),
      };
    },
    multiValueLabel: (styles, { data }) => ({
      ...styles,
      color: data.color,
    }),
    multiValueRemove: (styles, { data }) => ({
      ...styles,
      color: data.color,
      ":hover": {
        backgroundColor: data.color,
        color: "white",
      },
    }),
  };

  return (
    <Container>
      <TitleAndButton>
        <TitleAndDescription>
          <Typography variant="h6">{"Tags associadas"}</Typography>

          <Typography variant="b2" color={theme.colors.text.secondary}>
            {"Gerencie as tags associadas ao livro."}
          </Typography>
        </TitleAndDescription>
      </TitleAndButton>

      <Select
        isMulti
        value={selectedOptions}
        onChange={handleSelectChange}
        options={options}
        styles={colourStyles}
        components={{
          ClearIndicator: null,
        }}
      />
    </Container>
  );
};
