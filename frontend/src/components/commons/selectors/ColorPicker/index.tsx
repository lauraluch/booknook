// External Libraries
import React, { useEffect, useRef, useState } from "react";

// Components

// Styles
import { ColorSquare, Container, PickerSquare, Selector } from "./styles";
import { HexColorPicker } from "react-colorful";

interface Props {
  color: string;
  onColorChange: (value: string) => void;
}

export const ColorPicker: React.FC<Props> = ({ color, onColorChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <Container ref={containerRef}>
      <PickerSquare onClick={() => setIsOpen(!isOpen)}>
        <ColorSquare selectedColor={color} />
      </PickerSquare>

      {isOpen && (
        <Selector>
          <HexColorPicker color={color} onChange={onColorChange} />
        </Selector>
      )}
    </Container>
  );
};
