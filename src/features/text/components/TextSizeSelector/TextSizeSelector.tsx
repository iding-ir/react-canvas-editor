import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { useAppDispatch } from "../../../../app/hooks";
import { changeTextSize, selectTextSize } from "../../text-slice";
import CircleIcon from "../../../../assets/icons/circle.svg";
import SizeIcon from "../../../../assets/icons/size.svg";
import { Input } from "../../../../components/Input";
import { Title } from "../../../../components/Title";
import styles from "./TextSizeSelector.module.scss";
import { MAX_TEXT_SIZE, MIN_TEXT_SIZE } from "../../text";

export const TextSizeSelector = () => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const textSize = useSelector(selectTextSize);

  return (
    <div className={styles.container}>
      <Title text={t("text.sizeSelector.title")}>{<SizeIcon />}</Title>

      <Input
        type="number"
        min={MIN_TEXT_SIZE}
        max={MAX_TEXT_SIZE}
        value={textSize}
        icon={<CircleIcon />}
        placeholder={t("text.sizeSelector.thickness")}
        onChange={(event) =>
          dispatch(changeTextSize(Number(event.target.value)))
        }
      />
    </div>
  );
};
