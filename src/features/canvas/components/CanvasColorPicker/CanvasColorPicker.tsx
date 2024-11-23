import { useTranslation } from "react-i18next";

import { useAppDispatch, useAppSelector } from "../../../../app/hooks";
import { ColorPicker } from "../../../../components/ColorPicker";
import {
  selectCanvasBackgroundColor,
  setCanvasBackgroundColor,
} from "../../canvas-slice";

export const CanvasColorPicker = () => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const color = useAppSelector(selectCanvasBackgroundColor);

  return (
    <ColorPicker
      label={t("canvas.document.color")}
      color={color}
      onChange={(color: string) => dispatch(setCanvasBackgroundColor(color))}
    />
  );
};
