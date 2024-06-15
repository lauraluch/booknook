// External Libraries
import React, { PropsWithChildren } from "react";

// Components

// Styles
import { Backdrop, Container, SheetContainer } from "./styles";
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
            initial={{ width: "0.1rem" }}
            animate={{ width: "24rem" }}
            exit={{ width: "0.1rem" }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 30,
            }}
          >
            {children}
          </SheetContainer>
        )}
      </AnimatePresence>
    </>
  );
};
