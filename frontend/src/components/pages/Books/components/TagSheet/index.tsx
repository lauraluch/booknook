// External Libraries
import React from "react";

// Components

// Styles
import {
  BackButton,
  Container,
  PickerContainer,
  TagButton,
  TagsContainer,
  TitleAndButton,
  TitleAndDescription,
} from "./styles";
import { Sheet } from "src/components/toolkit/Sheet";
import { Typography } from "src/components/toolkit/Typography";
import theme from "@globals/theme";
import { ITag } from "src/types/tag/ITag";
import { Tag } from "./components/Tag";
import { SheetStatus } from "@pages/Books/hooks/useBooks";
import { TitledInput } from "@components/inputs/TitledInput";
import { ColorPicker } from "@components/selectors/ColorPicker";
import AddSVG from "@assets/icons/buttons/Add";
import AddSmallSVG from "@assets/icons/buttons/AddSmall";
import ArrowLeftSVG from "@assets/icons/arrows/ArrowLeft";
import { Button } from "@components/buttons/Button";

interface Props {
  isOpen: boolean;
  status: SheetStatus;
  onOutsideClick: () => void;
  tags: ITag[];
  onCreateClick: () => void;
  onCreateConfirm: () => void;
  onDeleteClick: (tagId: number) => void;
  tagForm: ITag;
  onFormChange: (key: keyof ITag, value: any) => void;
  onBackButtonClick: () => void;
  isButtonDisabled: boolean;
}

export const TagSheet: React.FC<Props> = ({
  isOpen,
  status,
  onOutsideClick,
  tags,
  onDeleteClick,
  tagForm,
  onFormChange,
  onCreateClick,
  onCreateConfirm,
  onBackButtonClick,
  isButtonDisabled,
}) => {
  function renderTitle() {
    if (status === SheetStatus.CREATING) return "Criar uma tag";
    return "Tags";
  }

  function renderDescription() {
    if (status === SheetStatus.CREATING)
      return "Insira os dados e confirme para criar sua tag.";
    return "Gerencie suas tags.";
  }

  function renderContent() {
    if (status === SheetStatus.READING) {
      return (
        <Container>
          <TitleAndButton>
            <TitleAndDescription>
              <Typography variant="h4">{renderTitle()}</Typography>

              <Typography variant="b2" color={theme.colors.text.secondary}>
                {renderDescription()}
              </Typography>
            </TitleAndDescription>

            <TagButton onClick={onCreateClick}>
              <AddSmallSVG stroke={theme.colors.layout.white} />
            </TagButton>
          </TitleAndButton>

          <TagsContainer>
            {tags?.map((item) => (
              <Tag tag={item} onDeleteClick={onDeleteClick} />
            ))}
          </TagsContainer>
        </Container>
      );
    }

    return (
      <Container>
        <BackButton onClick={onBackButtonClick}>
          <ArrowLeftSVG stroke={theme.colors.role.primary} />
        </BackButton>

        <TitleAndDescription>
          <Typography variant="h4">{renderTitle()}</Typography>

          <Typography variant="b2" color={theme.colors.text.secondary}>
            {renderDescription()}
          </Typography>
        </TitleAndDescription>

        <PickerContainer>
          <Typography variant="s2" color={theme.colors.text.secondary}>
            Cor da tag
          </Typography>

          <ColorPicker
            color={tagForm.color}
            onColorChange={(v) => onFormChange("color", v)}
          />
        </PickerContainer>

        <TitledInput
          title="Título"
          placeholder="título"
          value={tagForm.title}
          onChange={(v) => onFormChange("title", v)}
        />

        <Button
          label={"Criar tag"}
          onClick={onCreateConfirm}
          variant={"primary"}
          style={{ alignSelf: "flex-end" }}
          disabled={isButtonDisabled}
        />
      </Container>
    );
  }

  return (
    <Sheet isOpen={isOpen} onOutsideClick={onOutsideClick}>
      {renderContent()}
    </Sheet>
  );
};
