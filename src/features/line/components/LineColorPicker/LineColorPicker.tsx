import { useTranslation } from "react-i18next";

import { useAppDispatch, useAppSelector } from "../../../../app/hooks";
import { ColorPicker } from "../../../../components/Aside/components/ColorPicker";
import { selectLineColor, setLineColor } from "../../line-slice";

export const LineColorPicker = () => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const color = useAppSelector(selectLineColor);

  return (
    <ColorPicker
      title={t("line.color.title")}
      color={color}
      onChange={(color: string) => dispatch(setLineColor(color))}
    />
  );
};
