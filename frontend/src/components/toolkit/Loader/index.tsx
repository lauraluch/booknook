// External Libraries
import React from "react";

// Components

// Styles
import { Container, ContainerProps } from "./styles";
import { Oval } from "react-loader-spinner";
import theme from "@globals/theme";

interface Props extends ContainerProps {
  size?: number;
  color?: string;
}

export const Loader: React.FC<Props> = ({ size = 24, color, ...rest }) => {
  // States

  return (
    <Container {...rest}>
      <Oval
        height={size}
        width={size}
        color={color || theme.colors.layout.white}
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
        ariaLabel="oval-loading"
        secondaryColor={`${color}1A` || theme.colors.border}
        strokeWidth={4}
        strokeWidthSecondary={4}
      />
    </Container>
  );
};
