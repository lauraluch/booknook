import styled from "styled-components";
import {
  getBackgroundColor,
  getBorderColor,
} from "../shared/utils/getInputColors";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  width: 100%;
`;

interface Props {
  disabled?: boolean;
  selected: boolean;
  hasError?: boolean;
  height?: number;
}

export const TextFieldInput = styled.textarea<Props>`
  border-radius: 8px;
  overflow: auto;
  width: 100%;
  height: ${({ height }) => height || 3}rem;
  border: solid 1px ${getBorderColor};
  background-color: ${getBackgroundColor};

  outline: ${({ theme, selected }) =>
    selected ? `${theme.colors.text.primary} solid 2px` : ""};

  padding: 8px 12px;
  flex-direction: row;

  align-items: center;
  justify-content: space-between;
  resize: none;

  &:disabled {
    color: ${({ theme }) => theme.colors.text.secondary};
  }

  transition: border 0.2s ease;
  &:hover:not([disabled]) {
    /* border: ${({ theme, selected }) =>
      !selected ? `${theme.colors.border} solid 1px` : ""}; */
    box-shadow: ${({ theme }) =>
      `0px 0px 0px 3px ${theme.colors.role.primaryLightest}`};
  }

  transition: box-shadow 0.2s ease-in-out;
`;
