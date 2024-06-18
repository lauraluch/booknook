// External Libraries
import React from "react";

// Components

// Styles
import { AddButtonContainer } from "./styles";
import AddSmallSVG from "@assets/icons/buttons/AddSmall";
import theme from "@globals/theme";

interface Props {
  onClick: () => void;
}

export const AddButton: React.FC<Props> = ({ onClick }) => {
  return (
    <AddButtonContainer onClick={onClick}>
      <AddSmallSVG stroke={theme.colors.layout.white} />
    </AddButtonContainer>
  );
};
