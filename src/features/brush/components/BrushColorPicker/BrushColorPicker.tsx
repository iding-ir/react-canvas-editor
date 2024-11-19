import { useTranslation } from "react-i18next";
import { useAppDispatch, useAppSelector } from "../../../../app/hooks";
import { ColorPicker } from "../../../../components/Aside/components/ColorPicker";
import { selectBrushColor, setBrushColor } from "../../brush-slice";

export const BrushColorPicker = () => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const color = useAppSelector(selectBrushColor);

  const onChange = (color: string) => {
    dispatch(setBrushColor(color));
  };

  return (
    <ColorPicker
      title={t("brush.color.title")}
      color={color}
      buttonLabel={t("brush.color.button")}
      onChange={onChange}
    />
  );
};
