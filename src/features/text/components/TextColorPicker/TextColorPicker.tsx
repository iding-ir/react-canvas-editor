import { useTranslation } from "react-i18next";
import { useAppDispatch, useAppSelector } from "../../../../app/hooks";
import { ColorPicker } from "../../../../components/Aside/components/ColorPicker";
import { selectTextColor, setTextColor } from "../../text-slice";

export const TextColorPicker = () => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const color = useAppSelector(selectTextColor);

  const onChange = (color: string) => {
    dispatch(setTextColor(color));
  };

  return (
    <ColorPicker
      title={t("text.color.title")}
      color={color}
      buttonLabel={t("text.color.button")}
      onChange={onChange}
    />
  );
};
