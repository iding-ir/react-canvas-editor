import { LanguageSelector } from "../../../../features/language/components/LanguageSelector";
import { SizeSelector } from "../../../../features/size";
import { ThemeSelector } from "../../../../features/theme";
import asideStyles from "../Aside.module.scss";

export const SettingsAside = () => {
  return (
    <div className={asideStyles.container}>
      <LanguageSelector />

      <ThemeSelector />

      <SizeSelector />
    </div>
  );
};
