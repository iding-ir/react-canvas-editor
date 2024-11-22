import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";

import { useAppDispatch } from "../../../../app/hooks";
import CircleIcon from "../../../../assets/icons/circle.svg";
import SizeIcon from "../../../../assets/icons/size.svg";
import { Input } from "../../../../components/Input";
import { Title } from "../../../../components/Title";
import { MAX_LINE_SIZE, MIN_LINE_SIZE } from "../../line";
import { changeLineSize, selectLineSize } from "../../line-slice";
import styles from "./LineSizeSelector.module.scss";

export const LineSizeSelector = () => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const lineSize = useSelector(selectLineSize);

  return (
    <div className={styles.container}>
      <Title text={t("line.sizeSelector.title")}>{<SizeIcon />}</Title>

      <Input
        type="number"
        min={MIN_LINE_SIZE}
        max={MAX_LINE_SIZE}
        value={lineSize}
        icon={<CircleIcon />}
        placeholder={t("line.sizeSelector.thickness")}
        onChange={(event) =>
          dispatch(changeLineSize(Number(event.target.value)))
        }
      />
    </div>
  );
};
