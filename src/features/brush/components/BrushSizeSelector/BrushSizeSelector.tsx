import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { useAppDispatch } from "../../../../app/hooks";
import { changeBrushSize, selectBrushSize } from "../../brush-slice";
import { brushSizes } from "../../brush";
import { Select } from "../../../../components/Select";
import Icon from "../../../../assets/icons/size.svg";

export const BrushSizeSelector = () => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const brushSize = useSelector(selectBrushSize);

  const items = Object.values(brushSizes).map((brushSize) => ({
    value: `${brushSize}`,
    label: `${brushSize}px`,
  }));

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(changeBrushSize(Number(event.target.value)));
  };

  return (
    <Select
      id="brush-size-selector"
      items={items}
      value={String(brushSize)}
      icon={<Icon />}
      label={t("brush.sizeSelector")}
      onChange={handleChange}
    />
  );
};
