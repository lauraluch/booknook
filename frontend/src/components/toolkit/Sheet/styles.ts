import { motion } from "framer-motion";
import styled from "styled-components";

export const SheetContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  height: 100%;
  position: absolute;
  right: 0;
  background-color: ${({ theme }) => theme.colors.layout.white};
`;

interface Props {
  isOpen: boolean;
}

export const Container = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
`;

export const Backdrop = styled(motion.div)<Props>`
  display: flex;
  position: absolute;
  flex-direction: row;
  height: 100%;
  width: 100%;
  background-color: ${({ isOpen }) => (isOpen ? "#000000" : "transparent")};
  opacity: 0.3;

  /* transition: background-color 0.3s ease; */
`;
