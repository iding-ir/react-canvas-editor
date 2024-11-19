import { HexColorPicker } from "react-colorful";
import { Button } from "../../../Button";
import { useState } from "react";
import { useTranslation } from "react-i18next";

export const ColorPicker = ({
  color,
  onChange,
}: {
  color: string;
  onChange: (color: string) => void;
}) => {
  const { t } = useTranslation();
  const [currentColor, setCurrentColor] = useState(color);

  return (
    <>
      <HexColorPicker color={color} onChange={setCurrentColor} />

      <Button
        label={t("canvas.backgroundColor")}
        disabled={currentColor === color}
        onClick={() => onChange(currentColor)}
      />
    </>
  );
};
