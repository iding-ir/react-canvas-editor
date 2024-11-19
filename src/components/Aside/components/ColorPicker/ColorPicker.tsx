import { HexColorPicker } from "react-colorful";
import { Button } from "../../../Button";
import { useState } from "react";

export const ColorPicker = ({
  color,
  buttonLabel,
  onChange,
}: {
  color: string;
  buttonLabel: string;
  onChange: (color: string) => void;
}) => {
  const [currentColor, setCurrentColor] = useState(color);

  return (
    <>
      <HexColorPicker color={color} onChange={setCurrentColor} />

      <Button
        label={buttonLabel}
        disabled={currentColor === color}
        onClick={() => onChange(currentColor)}
      />
    </>
  );
};
