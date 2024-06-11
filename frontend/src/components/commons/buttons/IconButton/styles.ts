import { IMargin } from "@services/style/css";
import { fontAnchors } from "@utils/facepaint";
import { applyMargin } from "@utils/functions/style/applyCss";
import styled from "styled-components";

interface ContainerProps extends IMargin {
  size?: string;
  color?: string;
  hasBorder?: boolean;
  borderColor?: string;
  disabled?: boolean;
}

export const Container = styled.button<ContainerProps>`
  ${({ size }) =>
    fontAnchors({
      minWidth: size || ["2rem", "2.5rem", "3rem"],
      width: size || ["2rem", "2.5rem", "3rem"],
      height: size || ["2rem", "2.5rem", "3rem"],
      minHeight: size || ["2rem", "2.5rem", "3rem"],
    })};

  border: ${({ hasBorder, borderColor }) =>
    hasBorder ? `1px solid ${borderColor}` : "none"};
  border-radius: ${({ size }) => size || "4rem"};

  background-color: ${({ color, theme }) => color || theme.colors.layout.white};

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  ${(props) => applyMargin(props)};

  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};

  transition: all 0.15s ease-in-out;
  :hover {
    background-color: ${({ theme }) => theme.colors.layout.surface};
  }
`;
