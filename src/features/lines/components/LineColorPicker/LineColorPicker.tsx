import { useTranslation } from "react-i18next";

import { useAppDispatch, useAppSelector } from "../../../../app/hooks";
import { ColorPicker } from "../../../../components/ColorPicker";
import { selectLineColor, setLineColor } from "../../lines-slice";

export const LineColorPicker = () => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const color = useAppSelector(selectLineColor);

  return (
    <ColorPicker
      label={t("line.color")}
      color={color}
      onChange={(color: string) => dispatch(setLineColor(color))}
    />
  );
};
