// External Libraries
import React, {
  ButtonHTMLAttributes,
  forwardRef,
  useImperativeHandle,
  useRef,
} from "react";

// Components

// Services

// Styles
import { Container, ContentContainer, LoadingContainer } from "./styles";
import { IMargin } from "@services/style/css";
import { ButtonSizes, ButtonVariants } from "./types";
import { TypographyVariants } from "src/components/toolkit/Typography/types";
import { Typography } from "src/components/toolkit/Typography";
import Link from "next/link";

interface Props
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, "label">,
    IMargin {
  label?: string | JSX.Element;
  labelVariant?: TypographyVariants;
  labelColor?: string;

  width?: string;
  height?: string;

  variant?: ButtonVariants;
  disabled?: boolean;
  loading?: boolean;
  href?: string;

  size?: ButtonSizes;

  startIcon?: JSX.Element;
  endIcon?: JSX.Element;
}

export interface ButtonMethods {
  focus: () => void;
}

export const Button = forwardRef<ButtonMethods, Props>(
  (
    {
      label,
      variant = "primary",
      href,
      disabled,
      loading,
      startIcon,
      endIcon,
      size = "large",
      labelVariant,
      labelColor,
      ...rest
    }: Props,
    ref
  ) => {
    const isLink = href && !disabled && !loading;
    const buttonRef = useRef<HTMLButtonElement>(null);

    useImperativeHandle(ref, () => ({
      focus: () => buttonRef.current.focus(),
    }));

    // Functions
    const getButtonLabel = () => {
      if (typeof label === "string") {
        return label;
      } else {
        return rest["aria-label"] || "";
      }
    };

    const renderBody = () => {
      if (typeof label === "string")
        return (
          <Typography
            color={labelColor}
            weight={500}
            as={"span"}
            variant={labelVariant || "b2"}
          >
            {label}
          </Typography>
        );
      else return label;
    };

    const renderComponent = () => {
      return (
        <Container
          {...rest}
          as={isLink ? "div" : "button"}
          variant={variant}
          aria-label={getButtonLabel()}
          disabled={disabled || loading}
          size={size}
          ref={buttonRef}
        >
          <ContentContainer loading={loading}>
            {startIcon}
            {renderBody()}
            {endIcon}
          </ContentContainer>

          {loading ? (
            <LoadingContainer
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              {/* <Loader color={theme.colors.primaryDark} /> */}
            </LoadingContainer>
          ) : null}
        </Container>
      );
    };

    return isLink ? (
      <Link href={href}>{renderComponent()}</Link>
    ) : (
      renderComponent()
    );
  }
);

Button.displayName = "Button";
