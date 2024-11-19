import { useTranslation } from "react-i18next";
import { useAppDispatch, useAppSelector } from "../../../../app/hooks";
import { ColorPicker } from "../../../../components/Aside/components/ColorPicker";
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
      title={t("canvas.backgroundColor.title")}
      color={color}
      onChange={(color: string) => dispatch(setCanvasBackgroundColor(color))}
    />
  );
};
