// External Libraries
import React, { PropsWithChildren } from "react";

// Components

// Styles
import {
  Backdrop,
  ChildrenContainer,
  Container,
  SheetContainer,
} from "./styles";
import { AnimatePresence } from "framer-motion";

interface Props {
  isOpen?: boolean;
  onOutsideClick?: () => void;
}

export const Sheet: React.FC<PropsWithChildren<Props>> = ({
  isOpen,
  onOutsideClick,
  children,
}) => {
  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <Backdrop
            key={"backdrop-container"}
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.3 }}
            exit={{ opacity: 0 }}
            isOpen={isOpen}
            onClick={onOutsideClick}
          />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {isOpen && (
          <SheetContainer
            key={"sheet-container"}
            initial={{ width: "0rem" }}
            animate={{ width: "24rem" }}
            exit={{ width: "0rem" }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 30,
            }}
          >
            <ChildrenContainer
              key={"sheet-children"}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ opacity: { delay: 0.15 } }}
            >
              {children}
            </ChildrenContainer>
          </SheetContainer>
        )}
      </AnimatePresence>
    </>
  );
};
