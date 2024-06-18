// External Libraries
import React from "react";

// Components

// Styles
import { BadgeContainer } from "./styles";
import { Typography } from "src/components/toolkit/Typography";

interface Props {
  title: string;
  color: string;
}

export const Badge: React.FC<Props> = ({ title, color }) => {
  return (
    <BadgeContainer backgroundColor={color}>
      <Typography variant="s2" color={color}>
        {title}
      </Typography>
    </BadgeContainer>
  );
};
