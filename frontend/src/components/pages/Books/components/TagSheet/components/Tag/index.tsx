// External Libraries
import React from "react";

// Components

// Styles
import { Container, DeleteButton, TagContainer } from "./styles";
import { ITag } from "src/types/tag/ITag";
import { Typography } from "src/components/toolkit/Typography";
import CloseSVG from "@assets/icons/modals/Close";
import DeleteSVG from "@assets/icons/tags/Delete";
import theme from "@globals/theme";
import { Badge } from "@components/structure/Badge";

interface Props {
  tag: ITag;
  onDeleteClick: (tagId: number) => void;
}

export const Tag: React.FC<Props> = ({ tag, onDeleteClick }) => {
  return (
    <Container backgroundColor={tag.color}>
      <Badge title={tag.title} color={tag.color} />

      <DeleteButton onClick={() => onDeleteClick(tag.id)}>
        <DeleteSVG stroke={theme.colors.role.error} />
      </DeleteButton>
    </Container>
  );
};
