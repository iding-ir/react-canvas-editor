import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";

import { useAppDispatch } from "../../../app/hooks";
import Icon from "../../../assets/icons/theme.svg";
import { Select } from "../../../components/Select";
import { THEMES, Theme } from "../theme";
import { selectTheme, setTheme } from "../theme-slice";

export const ThemeSelector = () => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const theme = useSelector(selectTheme);

  const items = Object.values(THEMES).map((theme) => ({
    value: theme,
    label: t(`settings.theme.options.${theme}`),
  }));

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(setTheme(event.target.value as Theme));
  };

  return (
    <Select
      id="theme-selector"
      items={items}
      value={theme}
      icon={<Icon />}
      label={t("settings.theme.label")}
      onChange={handleChange}
    />
  );
};
