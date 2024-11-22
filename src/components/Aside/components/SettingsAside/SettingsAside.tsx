import { LanguageSelector } from "../../../../features/language/components/LanguageSelector";
import { ThemeSelector } from "../../../../features/theme";
import asideStyles from "../Aside.module.scss";

export const SettingsAside = () => {
  return (
    <div className={asideStyles.container}>
      <LanguageSelector />

      <ThemeSelector />
    </div>
  );
};
