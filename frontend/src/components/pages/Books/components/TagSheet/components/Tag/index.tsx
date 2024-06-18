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

interface Props {
  tag: ITag;
}

export const Tag: React.FC<Props> = ({ tag }) => {
  return (
    <Container backgroundColor={tag.color}>
      <TagContainer backgroundColor={tag.color}>
        <Typography variant="s1" color={tag.color}>
          {tag.title}
        </Typography>
      </TagContainer>

      <DeleteButton>
        <DeleteSVG stroke={theme.colors.role.error} />
      </DeleteButton>
    </Container>
  );
};
