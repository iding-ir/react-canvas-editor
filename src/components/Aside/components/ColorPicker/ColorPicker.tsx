import { HexColorPicker } from "react-colorful";
import { Button } from "../../../Button";
import { useState } from "react";
import ColorIcon from "../../../../assets/icons/color.svg";
import { Title } from "../../../Title";
import styles from "./ColorPicker.module.scss";

export const ColorPicker = ({
  title,
  color,
  buttonLabel,
  onChange,
}: {
  title: string;
  color: string;
  buttonLabel: string;
  onChange: (color: string) => void;
}) => {
  const [currentColor, setCurrentColor] = useState(color);

  return (
    <div className={styles.container}>
      <Title text={title}>{<ColorIcon />}</Title>

      <HexColorPicker color={color} onChange={setCurrentColor} />

      <Button
        label={buttonLabel}
        disabled={currentColor === color}
        onClick={() => onChange(currentColor)}
      />
    </div>
  );
};
