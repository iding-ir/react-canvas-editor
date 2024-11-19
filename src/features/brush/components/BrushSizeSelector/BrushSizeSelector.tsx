import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { useAppDispatch } from "../../../../app/hooks";
import { changeBrushSize, selectBrushSize } from "../../brush-slice";
import CircleIcon from "../../../../assets/icons/circle.svg";
import SizeIcon from "../../../../assets/icons/size.svg";
import { Input } from "../../../../components/Input";
import { Title } from "../../../../components/Title";
import styles from "./BrushSizeSelector.module.scss";
import { MAX_BRUSH_SIZE, MIN_BRUSH_SIZE } from "../../brush";

export const BrushSizeSelector = () => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const brushSize = useSelector(selectBrushSize);

  return (
    <div className={styles.container}>
      <Title text={t("brush.sizeSelector.title")}>{<SizeIcon />}</Title>

      <Input
        type="number"
        min={MIN_BRUSH_SIZE}
        max={MAX_BRUSH_SIZE}
        value={brushSize}
        icon={<CircleIcon />}
        placeholder={t("brush.sizeSelector.thickness")}
        onChange={(event) =>
          dispatch(changeBrushSize(Number(event.target.value)))
        }
      />
    </div>
  );
};
