// External Libraries
import React from "react";

// Components

// Styles
import { Container, TagsContainer, TitleAndDescription } from "./styles";
import { Sheet } from "src/components/toolkit/Sheet";
import { Typography } from "src/components/toolkit/Typography";
import theme from "@globals/theme";
import { ITag } from "src/types/tag/ITag";
import { Tag } from "./components/Tag";

interface Props {
  isOpen: boolean;
  onOutsideClick: () => void;
  tags: ITag[];
}

export const TagSheet: React.FC<Props> = ({ isOpen, onOutsideClick, tags }) => {
  return (
    <Sheet isOpen={isOpen} onOutsideClick={onOutsideClick}>
      <Container>
        <TitleAndDescription>
          <Typography variant="h4">{"Tags"}</Typography>

          <Typography variant="b2" color={theme.colors.text.secondary}>
            {"Gerencie suas tags."}
          </Typography>
        </TitleAndDescription>

        <TagsContainer>
          {tags?.map((item) => (
            <Tag tag={item} />
          ))}
        </TagsContainer>
      </Container>
    </Sheet>
  );
};
