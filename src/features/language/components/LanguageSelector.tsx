import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";

import { useAppDispatch } from "../../../app/hooks";
import Icon from "../../../assets/icons/language.svg";
import { Select } from "../../../components/Select";
import { LANGUAGES, Language } from "../language";
import { selectLanguage, setLanguage } from "../language-slice";

export const LanguageSelector = () => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const language = useSelector(selectLanguage);

  const items = Object.values(LANGUAGES).map((language) => ({
    value: language,
    label: t(`settings.language.options.${language}`),
  }));

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(setLanguage(event.target.value as Language));
  };

  return (
    <Select
      id="language-selector"
      items={items}
      value={language}
      icon={<Icon />}
      label={t("settings.language.label")}
      onChange={handleChange}
    />
  );
};
