import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";

import { useAppDispatch } from "../../../../app/hooks";
import CircleIcon from "../../../../assets/icons/circle.svg";
import { Input } from "../../../../components/Form/components/Input";
import { MAX_LINE_SIZE, MIN_LINE_SIZE } from "../../lines";
import { changeLineSize, selectLineSize } from "../../lines-slice";
import styles from "./LineSizeSelector.module.scss";

export const LineSizeSelector = () => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const lineSize = useSelector(selectLineSize);

  return (
    <div className={styles.container}>
      <Input
        label={t("line.size")}
        type="number"
        min={MIN_LINE_SIZE}
        max={MAX_LINE_SIZE}
        value={lineSize}
        icon={<CircleIcon />}
        onChange={(event) =>
          dispatch(changeLineSize(Number(event.target.value)))
        }
      />
    </div>
  );
};
