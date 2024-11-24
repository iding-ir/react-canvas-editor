import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";

import { useAppDispatch } from "../../../../app/hooks";
import CircleIcon from "../../../../assets/icons/circle.svg";
import { Input } from "../../../../components/Form/components/Input";
import { MAX_TEXT_SIZE, MIN_TEXT_SIZE } from "../../texts";
import { changeTextSize, selectTextSize } from "../../texts-slice";
import styles from "./TextSizeSelector.module.scss";

export const TextSizeSelector = () => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const textSize = useSelector(selectTextSize);

  return (
    <div className={styles.container}>
      <Input
        label={t("text.font.size")}
        type="number"
        min={MIN_TEXT_SIZE}
        max={MAX_TEXT_SIZE}
        value={textSize}
        icon={<CircleIcon />}
        onChange={(event) =>
          dispatch(changeTextSize(Number(event.target.value)))
        }
      />
    </div>
  );
};
