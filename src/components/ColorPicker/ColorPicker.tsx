import { useState } from "react";
import { HexColorPicker } from "react-colorful";

import ColorIcon from "../../assets/icons/color.svg";
import { Title } from "../Title";

export const ColorPicker = ({
  label,
  color,
  onChange,
}: {
  label: string;
  color: string;
  onChange: (color: string) => void;
}) => {
  const [currentColor, setCurrentColor] = useState(color);

  return (
    <>
      <Title text={label} icon={<ColorIcon />} />

      <HexColorPicker
        color={color}
        onChange={setCurrentColor}
        onPointerUp={() => onChange(currentColor)}
      />
    </>
  );
};
