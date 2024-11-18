import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { useAppDispatch } from "../../../../app/hooks";
import { changeCanvasSize, selectCanvasSize } from "../../canvas-slice";
import { canvasSizes } from "../../canvas";
import { Select } from "../../../../components/Select";
import { Size } from "../../../../types";
import Icon from "../../../../assets/icons/size.svg";

export const CanvasSizeSelector = () => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const canvasSize = useSelector(selectCanvasSize);

  const items = Object.values(canvasSizes).map((canvasSize) => ({
    value: sizeToString(canvasSize),
    label: `${canvasSize.width}px X ${canvasSize.height}px`,
  }));

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(changeCanvasSize(stringToSize(event.target.value)));
  };

  return (
    <Select
      id="canvas-size-selector"
      items={items}
      value={sizeToString(canvasSize)}
      icon={<Icon />}
      label={t("canvas.sizeSelector")}
      onChange={handleChange}
    />
  );
};

export const stringToSize = (value: string): Size => {
  const [width, height] = value.split("-").map(Number);

  return { width, height };
};

export const sizeToString = (size: Size): string => {
  return `${size.width}-${size.height}`;
};
