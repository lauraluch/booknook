// Biblitocas Externas
import {
  AnimatePresence,
  Target,
  TargetAndTransition,
  VariantLabels,
} from "framer-motion";
import React, { PropsWithChildren, useEffect } from "react";
import { Portal } from "./Portal";

// Estilização
import {
  BackDrop,
  BackDropProps,
  Container,
  Content,
  ContainerProps,
} from "./styles";

interface Props extends BackDropProps, ContainerProps {
  open: boolean;
  handleClose: (value: boolean) => void;

  hidePortal?: boolean;
  minWidth?: string;
  duration?: number;

  initial?: boolean | Target | VariantLabels;
  animate?: boolean | Target | VariantLabels;
  exit?: TargetAndTransition | VariantLabels;
}

const BaseModal: React.FC<PropsWithChildren<Props>> = ({
  open,
  children,
  minWidth,
  backgroundColor,
  alignProp = "center",
  animate,
  exit,
  initial,
  hidePortal = false,
  duration = 0.2,
  handleClose,
}) => {
  useEffect(() => {
    const closeOnEscapeKey = (e: KeyboardEvent) =>
      e.key === "Escape" ? handleClose(false) : null;
    document.body.addEventListener("keydown", closeOnEscapeKey);

    return () => {
      document.body.removeEventListener("keydown", closeOnEscapeKey);
    };
  }, [handleClose]);

  useEffect(() => {
    const body = document.querySelector("body") as any;

    if (open) {
      body.style.overflow = "hidden";
    } else {
      setTimeout(() => {
        body.style.overflow = "auto";
        body.style.paddingRight = "0px";
      }, 400);
    }
  }, [open]);

  function appendPortal(children: JSX.Element) {
    return <Portal wrapperId="portal-modal">{children}</Portal>;
  }

  function renderComponent() {
    return (
      <>
        <BackDrop
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: duration, ease: "easeInOut" }}
          onClick={() => handleClose(false)}
          backgroundColor={backgroundColor}
        />
        <Content
          initial={initial || { translateY: 10, opacity: 0, scale: 0.95 }}
          animate={animate || { translateY: 0, opacity: 1, scale: 1 }}
          exit={exit || { translateY: 10, opacity: 0, scale: 0.95 }}
          transition={{ duration: duration, ease: "easeInOut" }}
        >
          <Container alignProp={alignProp} minWidth={minWidth}>
            {children}
          </Container>
        </Content>
      </>
    );
  }

  return (
    <AnimatePresence mode="wait">
      {open &&
        (hidePortal ? renderComponent() : appendPortal(renderComponent()))}
    </AnimatePresence>
  );
};

export { BaseModal };
