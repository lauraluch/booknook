import React, { useMemo } from "react";

import { StyledTextProps, StyledText } from "./styles";

interface TypographyProps extends StyledTextProps {
  children?: string | number | JSX.Element[] | JSX.Element | any;
  as?: any;
  href?: string;
  onClick?: () => void;
  disabled?: boolean;
}

export const Typography: React.FC<TypographyProps> = ({
  variant,
  children,
  as,
  ...rest
}) => {
  const variantsMapping: Record<string, React.ElementType | "s1" | "s2"> =
    useMemo(
      () => ({
        h1: "h1",
        h2: "h2",
        h3: "h3",
        h4: "h4",
        h5: "h5",
        h6: "h6",
        s1: "p",
        s2: "p",
        button: "p",
        caption: "caption",
        b1: "p",
        b2: "p",
      }),
      []
    );

  return (
    <StyledText
      variant={variant}
      as={as || (variant ? variantsMapping[variant] : "p")}
      {...rest}
    >
      {children}
    </StyledText>
  );
};
