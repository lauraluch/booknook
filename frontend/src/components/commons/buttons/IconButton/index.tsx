// External Libraries
import { IMargin } from "@services/style/css";
import React from "react";
import { Container } from "./styles";

// Styles

interface Props extends IMargin {
  icon: JSX.Element;
  disabled?: boolean;
  onClick?: () => void;
  as?: any;
  size?: string;
  color?: string;
  label?: string;
  hasBorder?: boolean;
  borderColor?: string;
  hoverColor?: string;
}

export const IconButton: React.FC<Props> = ({
  icon,
  onClick,
  size,
  color,
  disabled,
  hasBorder = false,
  borderColor,
  as,
  ...rest
}) => {
  return (
    <Container
      as={as}
      onClick={onClick}
      size={size}
      color={color}
      hasBorder={hasBorder}
      borderColor={borderColor}
      disabled={disabled}
      {...rest}
    >
      {icon}
    </Container>
  );
};
