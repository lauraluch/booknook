import { motion } from "framer-motion";
import styled from "styled-components";

export const Container = styled.div`
  /* width: 100%;
  height: 100%; */
  display: flex;
  flex-direction: column;
  padding: 2rem;
  gap: 1rem;
  height: 100dvh;
  overflow: auto;
`;

export const TitleAndDescription = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`;

export const TitleAndButton = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  width: 100%;
`;

interface Props {
  disabled: boolean;
}

export const RadioContainer = styled.div<Props>`
  display: flex;
  flex-direction: row;
  gap: 0.5rem;
  height: 1.5rem;
  align-items: center;
  cursor: ${({ disabled }) => (disabled ? "default" : "pointer")};
  width: fit-content;
  user-select: none;
`;

export const RadioInputs = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  align-items: center;
`;

export const ButtonsRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1rem;
  align-self: flex-end;
`;

export const HeaderButton = styled.div`
  display: flex;
  flex-direction: row;
  min-width: 2.5rem;
  height: 2.5rem;
  border-radius: 30rem;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  background-color: ${({ theme }) => theme.colors.role.primaryLight};

  &:hover {
    background-color: ${({ theme }) => theme.colors.role.primarySemilight};
  }

  transition: background-color 0.3s ease;
`;

export const NoteDescription = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
