// External Libraries
import React, { useImperativeHandle, useRef, useState } from "react";

// Components

// Styles
import { Container, TextFieldInput } from "./styles";
import { Typography } from "src/components/toolkit/Typography";
import theme from "@globals/theme";
import { TextFieldMethods } from "./types";

interface Props {
  title?: string;
  value: string;
  disabled?: boolean;
  height?: number;
  placeholder?: string;
  onChange: (value: string) => void;
}

export const TextField = React.forwardRef<TextFieldMethods, Props>(
  ({ onChange, title, value, disabled, height, placeholder }, ref) => {
    const inputRef = useRef<HTMLInputElement>(null);

    useImperativeHandle(ref, () => ({
      focus: () => inputRef.current?.focus(),
      blur: () => inputRef.current?.blur(),
    }));

    // States
    const [selected, setSelected] = useState(false);

    // Functions
    function onFocus() {
      setSelected(true);
    }

    function onBlur() {
      setSelected(false);
    }

    return (
      <Container>
        {title && (
          <Typography variant="s2" color={theme.colors.text.secondary}>
            {title}
          </Typography>
        )}

        <TextFieldInput
          value={value}
          onChange={(e) => onChange(e.target.value)}
          selected={selected}
          disabled={disabled}
          height={height}
          placeholder={placeholder}
          onFocus={onFocus}
          onBlur={onBlur}
        />
      </Container>
    );
  }
);
