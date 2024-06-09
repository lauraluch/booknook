import { ButtonSizes, ButtonVariants } from "./types";
import styled, { css } from "styled-components";
import { motion } from "framer-motion";
import { IMargin } from "@services/style/css";
import { applyMargin } from "@utils/functions/style/applyCss";

export interface ContainerProps extends IMargin {
  variant: ButtonVariants;
  width?: string;
  height?: string;
  size: ButtonSizes;
}

const buttonVariants: Record<ButtonVariants, any> = {
  primary: css`
    background-color: ${({ theme }) => theme.colors.role.primary};
    border: none;
    transition: all 0.15s ease-in-out;
    color: ${({ theme }) => theme.colors.layout.white};

    &:hover {
      background-color: ${({ theme }) => theme.colors.role.primaryDark};
    }

    &:disabled {
      background-color: ${({ theme }) => `${theme.colors.role.primary}1A`};
      color: ${({ theme }) => theme.colors.layout.white};
      cursor: not-allowed;

      path,
      g {
        stroke: ${({ theme }) => theme.colors.border};
      }
    }
  `,
  secondary: css`
    background-color: ${({ theme }) => theme.colors.layout.white};
    border: solid 1px ${({ theme }) => theme.colors.border};
    transition: all 0.15s ease-in-out;
    color: ${({ theme }) => theme.colors.text.primary};
    path,
    g {
      stroke: ${({ theme }) => theme.colors.text.primary};
    }

    &:hover {
      background-color: ${({ theme }) => theme.colors.layout.surface};
    }

    &:disabled {
      background-color: ${({ theme }) => theme.colors.layout.white};
      border: solid 1px ${({ theme }) => theme.colors.role.error};
      color: ${({ theme }) => theme.colors.border};
      cursor: not-allowed;
      path,
      g {
        stroke: ${({ theme }) => theme.colors.border};
      }
    }
  `,
  tertiary: css`
    background-color: ${({ theme }) => theme.colors.layout.white};
    border: solid 1px ${({ theme }) => theme.colors.role.primary};
    transition: all 0.15s ease-in-out;
    color: ${({ theme }) => theme.colors.role.primary};
    path,
    g {
      stroke: ${({ theme }) => theme.colors.role.primary};
    }

    &:hover {
      opacity: 0.7;
    }

    &:disabled {
      background-color: ${({ theme }) => theme.colors.layout.white};
      border: solid 1px ${({ theme }) => theme.colors.role.error};
      color: ${({ theme }) => theme.colors.border};
      cursor: not-allowed;
      path,
      g {
        stroke: ${({ theme }) => theme.colors.border};
      }
    }
  `,
  cancel: css`
    background-color: transparent;
    border: none;
    transition: all 0.15s ease-in-out;
    color: ${({ theme }) => theme.colors.text.secondary};
    path,
    g {
      stroke: ${({ theme }) => theme.colors.role.primary};
    }

    &:hover {
      opacity: 0.7;
    }

    &:disabled {
      background-color: ${({ theme }) => theme.colors.layout.white};
      border: solid 1px ${({ theme }) => theme.colors.role.error};
      color: ${({ theme }) => theme.colors.border};
      cursor: not-allowed;
      path,
      g {
        stroke: ${({ theme }) => theme.colors.border};
      }
    }
  `,

  form: css`
    background-color: ${({ theme }) => theme.colors.border};
    border: none;
    border-radius: 8px;
    padding: 1rem 1.25rem;
    transition: all 0.15s ease-in-out;
    color: ${({ theme }) => theme.colors.text.secondary};

    &:hover {
      background-color: ${({ theme }) => theme.colors.border};
    }

    &:disabled {
      background-color: ${({ theme }) => `${theme.colors.role.primary}1A`};
      color: ${({ theme }) => theme.colors.layout.white};
      cursor: not-allowed;

      path,
      g {
        stroke: ${({ theme }) => theme.colors.border};
      }
    }
  `,
  delete: css`
    background-color: ${({ theme }) => theme.colors.role.error};
    border: none;
    border-radius: 8px;
    padding: 1rem 1.25rem;
    transition: all 0.15s ease-in-out;
    color: ${({ theme }) => theme.colors.layout.white};

    &:hover {
      background-color: ${({ theme }) => theme.colors.role.errorDark};
    }

    &:disabled {
      background-color: ${({ theme }) => `${theme.colors.role.primary}1A`};
      color: ${({ theme }) => theme.colors.layout.white};
      cursor: not-allowed;

      path,
      g {
        stroke: ${({ theme }) => theme.colors.border};
      }
    }
  `,
};

const paddingSize: Record<ButtonSizes, any> = {
  small: css`
    padding: 4px 8px;
  `,
  medium: css`
    padding: 8px 12px;
  `,
  large: css`
    padding: 12px 12px;
  `,
  xsmall: css`
    padding: 4px;
  `,
};

export const LoadingContainer = styled(motion.div)`
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

interface Props {
  loading?: boolean;
}

export const ContentContainer = styled.div<Props>`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  column-gap: 0.5rem;

  opacity: ${({ loading }) => (loading ? 0 : 1)};
`;

export const Container = styled.button<ContainerProps>`
  border-width: 1px;
  position: relative;

  column-gap: 0.5rem;
  white-space: nowrap;

  width: ${({ width }) => width || "fit-content"};
  height: ${({ height }) => height || "2.5rem"};
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  border-radius: 8px;

  cursor: pointer;

  ${({ size }) => paddingSize[size]};
  ${({ variant }) => buttonVariants[variant]};
  ${(props) => applyMargin(props)};
`;
