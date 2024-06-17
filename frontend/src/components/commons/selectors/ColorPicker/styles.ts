import styled from "styled-components";

export const Container = styled.div`
  width: fit-content;
`;

export const Selector = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  padding: 1rem;
  background-color: white;
  border-radius: 5px;

  box-shadow: ${({ theme }) => theme.colors.shadows.shadowSmall};
  width: fit-content;
  z-index: 1000;
`;

interface Props {
  selectedColor: string;
}

export const PickerSquare = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 3px;
  padding: 0.25rem;
  height: 2rem;
  width: 2rem;

  cursor: pointer;
`;

export const ColorSquare = styled.div<Props>`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border-radius: 3px;
  background-color: ${({ theme, selectedColor }) =>
    selectedColor || theme.colors.layout.surface};

  height: 100%;
  width: 100%;
`;
