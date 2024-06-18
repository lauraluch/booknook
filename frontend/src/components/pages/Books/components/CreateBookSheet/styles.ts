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

export const PickerContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const ButtonsRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1rem;
  align-self: flex-end;
`;