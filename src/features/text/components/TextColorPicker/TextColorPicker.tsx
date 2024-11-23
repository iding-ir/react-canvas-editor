import { useTranslation } from "react-i18next";

import { useAppDispatch, useAppSelector } from "../../../../app/hooks";
import { ColorPicker } from "../../../../components/ColorPicker";
import { selectTextColor, setTextColor } from "../../text-slice";

export const TextColorPicker = () => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const color = useAppSelector(selectTextColor);

  return (
    <ColorPicker
      label={t("text.font.color")}
      color={color}
      onChange={(color: string) => dispatch(setTextColor(color))}
    />
  );
};
