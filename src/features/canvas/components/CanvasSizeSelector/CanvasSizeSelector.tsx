import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { useAppDispatch } from "../../../../app/hooks";
import {
  selectCanvasSize,
  changeCanvasWidth,
  changeCanvasHeight,
} from "../../canvas-slice";
import WidthIcon from "../../../../assets/icons/width.svg";
import HeightIcon from "../../../../assets/icons/height.svg";
import SizeIcon from "../../../../assets/icons/size.svg";
import { Input } from "../../../../components/Input";
import { Title } from "../../../../components/Title";
import styles from "./CanvasSizeSelector.module.scss";
import {
  MAX_CANVAS_HEIGHT,
  MAX_CANVAS_WIDTH,
  MIN_CANVAS_HEIGHT,
  MIN_CANVAS_WIDTH,
} from "../../canvas";

export const CanvasSizeSelector = () => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const canvasSize = useSelector(selectCanvasSize);
  const { width, height } = canvasSize;

  return (
    <div className={styles.container}>
      <Title text={t("canvas.sizeSelector.title")}>{<SizeIcon />}</Title>

      <Input
        type="number"
        value={width}
        min={MIN_CANVAS_WIDTH}
        max={MAX_CANVAS_WIDTH}
        icon={<WidthIcon />}
        placeholder={t("canvas.sizeSelector.width")}
        onChange={(event) =>
          dispatch(changeCanvasWidth(Number(event.target.value)))
        }
      />

      <Input
        type="number"
        value={height}
        min={MIN_CANVAS_HEIGHT}
        max={MAX_CANVAS_HEIGHT}
        icon={<HeightIcon />}
        placeholder={t("canvas.sizeSelector.height")}
        onChange={(event) =>
          dispatch(changeCanvasHeight(Number(event.target.value)))
        }
      />
    </div>
  );
};
