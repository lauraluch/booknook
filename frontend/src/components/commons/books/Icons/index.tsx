// External Libraries
import React, { useEffect, useRef } from "react";

// Components

// Styles
import { Container } from "./styles";
import { AnimatePresence } from "framer-motion";
import { MoonSVG, SmallMoonSVG } from "@assets/icons/books/bookIcons/Moon";
import StarSVG from "@assets/icons/books/Star";
import { SmallStarSVG } from "@assets/icons/books/bookIcons/Star";
import { IBook } from "src/types/book/IBook";

interface Props {
  isOpen: boolean;
  onClickOutside: () => void;
  onFormChange: (key: keyof IBook, value: any) => void;
}

export const Icons: React.FC<Props> = ({
  isOpen,
  onClickOutside,
  onFormChange,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        onClickOutside();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onClickOutside]);

  return (
    <AnimatePresence>
      {isOpen && (
        <Container
          ref={containerRef}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <SmallMoonSVG
            onClick={() => {
              onFormChange("icon", "moon");
              onClickOutside();
            }}
          />
          <SmallStarSVG
            onClick={() => {
              onFormChange("icon", "star");
              onClickOutside();
            }}
          />
        </Container>
      )}
    </AnimatePresence>
  );
};
