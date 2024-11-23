import { useTranslation } from "react-i18next";

import { useAppDispatch, useAppSelector } from "../../../../app/hooks";
import Icon from "../../../../assets/icons/name.svg";
import { Input } from "../../../../components/Input";
import { Title } from "../../../../components/Title";
import { selectCanvasName, setCanvasName } from "../../canvas-slice";
import styles from "./CanvasName.module.scss";

export const CanvasName = () => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const name = useAppSelector(selectCanvasName);

  const handleChange = (value: string) => {
    dispatch(setCanvasName(value));
  };

  return (
    <div className={styles.container}>
      <Title text={t("canvas.name.label")}>{<Icon />}</Title>

      <Input
        icon={<Icon />}
        type="text"
        placeholder={t("canvas.name.placeholder")}
        value={name}
        onChange={(event) => handleChange(event.target.value)}
      />
    </div>
  );
};
