// External Libraries
import React from "react";

// Components

// Styles
import { Container } from "./styles";
import { BookIconEnum } from "./types";
import MoonSVG from "@assets/icons/books/bookIcons/Moon";

interface Props {
  icon: string;
}

export const BookIcon: React.FC<Props> = ({ icon }) => {
  function getBookIcon() {
    if (icon === BookIconEnum.moon) return <MoonSVG />;
  }

  return <Container>{/* Code */}</Container>;
};
