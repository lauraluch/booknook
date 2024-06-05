import styled from "styled-components";

import { TypographyStyles } from "./fonts";
import { IMargin, TypographyVariants } from "./types";
import { defaultAnchors } from "@utils/facepaint";
import { applyMargin } from "@utils/functions/style/applyCss";

export interface StyledTextProps extends IMargin {
  variant?: TypographyVariants;

  color?: string;
  size?: string[];

  weight?: number;
  textDecoration?: string;

  align?: "left" | "center" | "right";
}

export const StyledText = styled.div<StyledTextProps>`
  ${(props) => props.variant && TypographyStyles[props.variant]}

  text-decoration: ${({ textDecoration }) => textDecoration || "none"};

  ${({ weight }) => (weight ? { fontWeight: weight } : {})};
  ${({ color }) => (color ? { color } : {})};
  ${({ align }) => (align ? { textAlign: align } : {})};
  ${({ size }) => (size ? defaultAnchors({ fontSize: size }) : {})};

  ${(props) => applyMargin(props)};
  ${(props) => (props.onClick ? { cursor: "pointer" } : {})};

  transition: color 0.3s ease;
`;
