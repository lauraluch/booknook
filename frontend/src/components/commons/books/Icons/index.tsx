import React, { useEffect, useRef } from "react";
import { Container } from "./styles";
import { AnimatePresence } from "framer-motion";
import { SmallMoonSVG } from "@assets/icons/books/bookIcons/Moon";
import { SmallStarSVG } from "@assets/icons/books/bookIcons/Star";
import { SmallFlowerSVG } from "@assets/icons/books/bookIcons/Flower";
import { SmallCloverSVG } from "@assets/icons/books/bookIcons/Clover";
import { SmallLoveheartSVG } from "@assets/icons/books/bookIcons/Loveheart";
import { SmallCherrySVG } from "@assets/icons/books/bookIcons/Cherry";
import { SmallCloudSVG } from "@assets/icons/books/bookIcons/Cloud";
import { SmallCrownSVG } from "@assets/icons/books/bookIcons/Crown";
import { SmallFireSVG } from "@assets/icons/books/bookIcons/Fire";
import { SmallBluefireSVG } from "@assets/icons/books/bookIcons/Bluefire";
import { SmallPaintSVG } from "@assets/icons/books/bookIcons/Paint";
import { SmallCoffeeSVG } from "@assets/icons/books/bookIcons/Coffee";
import { SmallWandSVG } from "@assets/icons/books/bookIcons/Wand";
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
          <SmallFlowerSVG
            onClick={() => {
              onFormChange("icon", "flower");
              onClickOutside();
            }}
          />
          <SmallCloverSVG
            onClick={() => {
              onFormChange("icon", "clover");
              onClickOutside();
            }}
          />
          <SmallLoveheartSVG
            onClick={() => {
              onFormChange("icon", "loveheart");
              onClickOutside();
            }}
          />
          <SmallCherrySVG
            onClick={() => {
              onFormChange("icon", "cherry");
              onClickOutside();
            }}
          />
          <SmallCloudSVG
            onClick={() => {
              onFormChange("icon", "cloud");
              onClickOutside();
            }}
          />
          <SmallCrownSVG
            onClick={() => {
              onFormChange("icon", "crown");
              onClickOutside();
            }}
          />
          <SmallFireSVG
            onClick={() => {
              onFormChange("icon", "fire");
              onClickOutside();
            }}
          />
          <SmallBluefireSVG
            onClick={() => {
              onFormChange("icon", "bluefire");
              onClickOutside();
            }}
          />
          <SmallPaintSVG
            onClick={() => {
              onFormChange("icon", "paint");
              onClickOutside();
            }}
          />
          <SmallCoffeeSVG
            onClick={() => {
              onFormChange("icon", "coffee");
              onClickOutside();
            }}
          />
          <SmallWandSVG
            onClick={() => {
              onFormChange("icon", "wand");
              onClickOutside();
            }}
          />
        </Container>
      )}
    </AnimatePresence>
  );
};
