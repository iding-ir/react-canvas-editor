import { LanguageSelector } from "../../../../features/language/components/LanguageSelector";
import asideStyles from "../Aside.module.scss";
export const SettingsAside = () => {
  return (
    <div className={asideStyles.container}>
      <LanguageSelector />
    </div>
  );
};
