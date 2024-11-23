import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";

import { useAppDispatch } from "../../../app/hooks";
import Icon from "../../../assets/icons/size.svg";
import { Select } from "../../../components/Select";
import { SIZES, Size } from "../size";
import { selectSize, setSize } from "../size-slice";

export const SizeSelector = () => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const size = useSelector(selectSize);

  const items = Object.values(SIZES).map((size) => ({
    value: size,
    label: t(`settings.size.options.${size}`),
  }));

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(setSize(event.target.value as Size));
  };

  return (
    <Select
      id="size-selector"
      items={items}
      value={size}
      icon={<Icon />}
      label={t("settings.size.label")}
      onChange={handleChange}
    />
  );
};
