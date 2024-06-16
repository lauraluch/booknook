// External Libraries
import React, { useState } from "react";

// Components

// Styles
import { Container, StarContainer } from "./styles";
import { IRating } from "./types";
import StarSVG from "@assets/icons/books/Star";

interface Props {
  stars: IRating;
  onStarClick: (number: IRating) => void;
  isCreating?: boolean;
}

export const Rating: React.FC<Props> = ({
  stars,
  onStarClick,
  isCreating = false,
}) => {
  const [hoveredStar, setHoveredStar] = useState<number | null>(null);

  return (
    <Container onMouseLeave={() => setHoveredStar(null)}>
      {Array.from({ length: 5 }, (_, index) => (
        <StarContainer
          isCreating={isCreating}
          onClick={() => {
            if (!isCreating) {
              if (index + 1 === stars) {
                onStarClick(0 as IRating);
                return;
              }
              onStarClick((index + 1) as IRating);
            }
          }}
          onMouseEnter={() => {
            if (!isCreating) setHoveredStar(index + 1);
          }}
        >
          <StarSVG
            stroke={index < (hoveredStar || stars) ? "#ffd817" : "#c4c4c4"}
          />
        </StarContainer>
      ))}
    </Container>
  );
};
