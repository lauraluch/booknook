// External Libraries
import React, {
  InputHTMLAttributes,
  memo,
  useImperativeHandle,
  useRef,
  useState,
} from "react";

// Components

// Styles
import {
  Container,
  ContainerProps,
  ErrorMessageContainer,
  LoadingContainer,
  Row,
  StyledInput,
  SuffixContainer,
  TitleContainer,
  TitleOptionalContainer,
} from "./styles";
import { SMaskTypes } from "@services/masks/types";
import { TitledInputMethods } from "./types";
import { utilsModule } from "@services/masks";
import theme from "@globals/theme";
import { Typography } from "src/components/toolkit/Typography";
import { AnimatePresence } from "framer-motion";
import EyeSVG from "@assets/icons/inputs/Eye";
import ClosedEyeSVG from "@assets/icons/inputs/ClosedEye";

interface Props
  extends ContainerProps,
    Omit<
      InputHTMLAttributes<HTMLInputElement>,
      "width" | "onChange" | "onSubmit" | "prefix"
    > {
  title?: string;
  mask?: SMaskTypes;
  disabled?: boolean;
  suffix?: string;
  errorMessage?: string;
  loading?: boolean;
  titleColor?: string;
  labelButton?: string;
  buttonColor?: string;
  prefix?: JSX.Element;
  optional?: boolean;
  onChange?: (v: string) => void;
  onSubmit?: () => void;
  onLabelButtonPress?: () => void;
}

export const TitledInputComponent = React.forwardRef<TitledInputMethods, Props>(
  (
    {
      onChange,
      mask,
      title,
      disabled,
      marginBottom = "0px",
      marginLeft,
      marginRight,
      marginTop,
      width,
      suffix,
      errorMessage,
      prefix,
      loading,
      titleColor,
      labelButton,
      buttonColor,
      optional,
      onLabelButtonPress,
      ...rest
    },
    ref
  ) => {
    const inputRef = useRef<HTMLInputElement>(null);

    useImperativeHandle(ref, () => ({
      focus: () => inputRef.current?.focus(),
      blur: () => inputRef.current?.blur(),
    }));

    // States
    const [selected, setSelected] = useState(false);
    const [hideValue, setHideValue] = useState(rest.type === "password");

    // Functions
    function handleHideValuePress() {
      setHideValue((prev) => !prev);
    }

    function onFocus() {
      setSelected(true);
    }

    function onBlur() {
      setSelected(false);
    }

    const handleChangeText = (text: string) => {
      let updatedText = text;
      if (rest.type === "number") {
        const parsedNumber = Number(text);
        updatedText = parsedNumber.toString();
        if (parsedNumber < Number(rest.min)) {
          updatedText = rest.min?.toString();
        }
      }

      if (mask) updatedText = utilsModule[mask].mask(text);

      onChange && onChange(updatedText);
    };

    const getInputMaxLength = () => {
      return rest.maxLength
        ? rest.maxLength
        : mask
        ? utilsModule[mask].maxLength
        : undefined;
    };

    // Renders
    function renderTitle() {
      if (!title) return null;

      const renderOptionalText =
        optional !== undefined ? (optional === true ? "(Opcional)" : "*") : "";

      const renderOptionalColor =
        optional !== undefined
          ? optional === true
            ? `${theme.colors.text.secondary}`
            : `${theme.colors.role.error}`
          : "";

      return (
        <TitleOptionalContainer optional={optional}>
          <Typography
            variant="s2"
            color={titleColor || theme.colors.text.secondary}
          >
            {title}
          </Typography>
          <Typography variant="s2" color={renderOptionalColor}>
            {renderOptionalText}
          </Typography>
        </TitleOptionalContainer>
      );
    }

    function renderSuffix() {
      if (loading) {
        return (
          <LoadingContainer>
            <div />
          </LoadingContainer>
        );
      } else if (rest.type === "password") {
        return (
          <SuffixContainer onClick={handleHideValuePress}>
            {hideValue ? (
              <EyeSVG stroke={theme.colors.text.secondary} />
            ) : (
              <ClosedEyeSVG stroke={theme.colors.text.secondary} />
            )}
          </SuffixContainer>
        );
      } else if (suffix) {
        return (
          <SuffixContainer>
            <Typography
              marginRight="12px"
              variant="b2"
              color={theme.colors.text.secondary}
            >
              {suffix}
            </Typography>
          </SuffixContainer>
        );
      }

      return null;
    }

    function renderPrefix() {
      if (prefix) return prefix;
      return null;
    }

    function handleKeyDown(event?: React.KeyboardEvent<HTMLInputElement>) {
      if (event.key === "Enter") {
        rest.onSubmit && rest.onSubmit();
      }
    }

    return (
      <Container
        width={width}
        {...rest}
        {...{ marginLeft, marginRight, marginTop, marginBottom }}
      >
        <TitleContainer>
          {renderTitle()}

          {labelButton && onLabelButtonPress ? (
            <Typography
              marginBottom="4px"
              variant="s3"
              color={buttonColor || theme.colors.text.primary}
              onClick={onLabelButtonPress}
            >
              {labelButton}
            </Typography>
          ) : null}
        </TitleContainer>

        <Row
          {...rest}
          onClick={() => inputRef.current.focus()}
          hasError={!!errorMessage}
          selected={selected}
          disabled={disabled}
        >
          {renderPrefix()}

          <StyledInput
            {...rest}
            type={rest.type === "password" && !hideValue ? "text" : rest.type}
            value={rest.value}
            disabled={disabled}
            ref={inputRef}
            onKeyDown={handleKeyDown}
            onFocus={onFocus}
            onBlur={onBlur}
            onChange={(e) => handleChangeText(e.target.value)}
            maxLength={getInputMaxLength()}
          />

          {renderSuffix()}
        </Row>

        <AnimatePresence>
          {errorMessage ? (
            <ErrorMessageContainer
              layout
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "1rem" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
            >
              <Typography
                marginTop="0.2rem"
                variant="b3"
                color={theme.colors.role.error}
              >
                {errorMessage}
              </Typography>
            </ErrorMessageContainer>
          ) : null}
        </AnimatePresence>
      </Container>
    );
  }
);

export const TitledInput = memo(
  TitledInputComponent,
  (prev: Props, next: Props) => {
    if (
      prev.value === next.value &&
      prev.errorMessage === next.errorMessage &&
      prev.placeholder === next.placeholder &&
      prev.marginBottom === next.marginBottom &&
      prev.marginTop === next.marginTop &&
      prev.marginLeft === next.marginLeft &&
      prev.marginRight === next.marginRight &&
      prev.title === next.title &&
      prev.mask === next.mask &&
      prev.loading === next.loading &&
      prev.disabled === next.disabled &&
      prev.suffix === next.suffix &&
      prev.prefix === next.prefix
    ) {
      return true;
    }

    return false;
  }
);

TitledInputComponent.displayName = "TitledInputComponent";
