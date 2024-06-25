import { motion } from "framer-motion";
import styled from "styled-components";

export const Container = styled(motion.div)`
  position: absolute;
  top: 13.5rem;
  left: 13.5rem;
  max-width: 9rem;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 1rem;
  gap: 1rem;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.colors.layout.white};
  box-shadow: ${({ theme }) => theme.colors.shadows.shadowSmallest};
  z-index: 10000;
`;
