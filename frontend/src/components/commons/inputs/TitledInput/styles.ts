/* eslint-disable @typescript-eslint/no-empty-interface */
import styled from "styled-components";

import { applyMargin } from "@utils/functions/style/applyCss";
import { IMargin } from "@services/style/css";
import {
  getBackgroundColor,
  getBorderColor,
} from "../shared/utils/getInputColors";
import { motion } from "framer-motion";

export interface ContainerProps extends IMargin {
  flex?: number;
  width?: string;
}

export const Container = styled.div<ContainerProps>`
  width: 100%;
  display: flex;
  flex-direction: column;
  position: relative;

  ${(props) => applyMargin(props)};

  ${({ width }) => (width ? { width } : {})};
  ${({ flex }) => (flex ? { flex } : {})};
`;

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Row = styled.div<RowProps>`
  display: flex;
  align-items: center;
  flex-direction: row;

  cursor: ${({ disabled }) => (disabled ? "default" : "text")};

  border-radius: 8px;
  overflow: hidden;
  border: solid 1px ${getBorderColor};
  background-color: ${getBackgroundColor};

  outline: ${({ theme, selected }) =>
    selected ? `${theme.colors.text.primary} solid 2px` : ""};

  padding: 0px 12px;
  flex-direction: row;

  align-items: center;
  justify-content: space-between;

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

export const SuffixContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

export const LoadingContainer = styled.div`
  align-items: center;
  justify-content: center;
  margin-right: 16px;
`;

interface RowProps {
  disabled?: boolean;
  selected: boolean;
  hasError?: boolean;
}

export const StyledInput = styled.input`
  display: flex;
  width: 100%;
  height: 2.5rem;
  font-size: 14px;
  outline: none;

  background-color: transparent;
  border: none;

  ::placeholder {
    /* Chrome, Firefox, Opera, Safari 10.1+ */
    color: ${({ theme }) => theme.colors.text.placeholder};
    opacity: 1; /* Firefox */
  }

  :-ms-input-placeholder {
    /* Internet Explorer 10-11 */
    color: ${({ theme }) => theme.colors.text.placeholder};
  }

  ::-ms-input-placeholder {
    /* Microsoft Edge */
    color: ${({ theme }) => theme.colors.text.placeholder};
  }
`;

export interface TitleProps {
  optional?: boolean;
}

export const TitleOptionalContainer = styled.div<TitleProps>`
  display: flex;
  flex-direction: row;
  align-items: center;

  gap: ${({ optional }) => (optional ? `0.2rem` : `0`)};

  margin-bottom: 4px;
`;

export const ErrorMessageContainer = styled(motion.div)``;
