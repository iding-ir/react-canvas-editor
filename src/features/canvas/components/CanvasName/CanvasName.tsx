import { useTranslation } from "react-i18next";

import { useAppDispatch, useAppSelector } from "../../../../app/hooks";
import Icon from "../../../../assets/icons/name.svg";
import { Input } from "../../../../components/Form/components/Input";
import { selectCanvasName, setCanvasName } from "../../canvas-slice";

export const CanvasName = () => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const name = useAppSelector(selectCanvasName);

  const handleChange = (value: string) => {
    dispatch(setCanvasName(value));
  };

  return (
    <>
      <Input
        label={t("canvas.document.name.label")}
        icon={<Icon />}
        type="text"
        placeholder={t("canvas.document.name.placeholder")}
        value={name}
        onChange={(event) => handleChange(event.target.value)}
      />
    </>
  );
};
