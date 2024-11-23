import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";

import { useAppDispatch } from "../../../../app/hooks";
import HeightIcon from "../../../../assets/icons/height.svg";
import WidthIcon from "../../../../assets/icons/width.svg";
import { Input } from "../../../../components/Form/components/Input";
import {
  MAX_CANVAS_HEIGHT,
  MAX_CANVAS_WIDTH,
  MIN_CANVAS_HEIGHT,
  MIN_CANVAS_WIDTH,
} from "../../canvas";
import {
  changeCanvasHeight,
  changeCanvasWidth,
  selectCanvasHeight,
  selectCanvasWidth,
} from "../../canvas-slice";

export const CanvasSizeSelector = () => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const width = useSelector(selectCanvasWidth);
  const height = useSelector(selectCanvasHeight);

  return (
    <>
      <Input
        label={t("canvas.size.width")}
        type="number"
        value={width}
        min={MIN_CANVAS_WIDTH}
        max={MAX_CANVAS_WIDTH}
        icon={<WidthIcon />}
        onChange={(event) =>
          dispatch(changeCanvasWidth(Number(event.target.value)))
        }
      />

      <Input
        label={t("canvas.size.height")}
        type="number"
        value={height}
        min={MIN_CANVAS_HEIGHT}
        max={MAX_CANVAS_HEIGHT}
        icon={<HeightIcon />}
        onChange={(event) =>
          dispatch(changeCanvasHeight(Number(event.target.value)))
        }
      />
    </>
  );
};
