import { motion } from "framer-motion";
import styled, { css } from "styled-components";

export const Content = styled(motion.div)`
  position: fixed;
  pointer-events: none;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background: transparent;

  width: 100vw;
  height: 100%;

  z-index: 100;
`;

export interface ContainerProps {
  alignProp?: "center" | "left" | "right" | "top" | "bottom";
  minWidth?: string;
}

const options = {
  bottom: css`
    bottom: 0;
  `,
  left: css`
    left: 0;
  `,
  right: css`
    left: 0;
  `,
  top: css`
    top: 0;
  `,
  center: css`
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  `,
};

export const Container = styled(motion.div)<ContainerProps>`
  min-width: ${({ minWidth }) => minWidth || "unset"};
  position: fixed;
  overflow: hidden;
  background: transparent;
  pointer-events: all;
  box-shadow: ${({ theme }) => theme.colors.shadows.shadowLarge};

  max-height: 90vh;

  ${(props) => options[props.alignProp || "bottom"]}
`;

export interface BackDropProps {
  backgroundColor?: string;
}

export const BackDrop = styled(motion.div)<BackDropProps>`
  opacity: 0.4;
  background-color: ${(props) =>
    props.backgroundColor || "rgba(0, 0, 0, 0.25)"};
  position: fixed;
  bottom: 0;
  right: 0;
  left: 0;
  top: 0;

  z-index: 100;
`;
