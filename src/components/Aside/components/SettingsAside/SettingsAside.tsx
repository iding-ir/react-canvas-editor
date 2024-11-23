import { useTranslation } from "react-i18next";

import SettingsIcon from "../../../../assets/icons/settings.svg";
import { LanguageSelector } from "../../../../features/language/components/LanguageSelector";
import { SizeSelector } from "../../../../features/size";
import { ThemeSelector } from "../../../../features/theme";
import { Form } from "../../../Form/Form";
import { Field } from "../../../Form/components/Field";
import asideStyles from "../Aside.module.scss";

export const SettingsAside = () => {
  const { t } = useTranslation();

  return (
    <div className={asideStyles.container}>
      <Form>
        <Field legend={t("settings.title")} icon={<SettingsIcon />}>
          <LanguageSelector />

          <ThemeSelector />

          <SizeSelector />
        </Field>
      </Form>
    </div>
  );
};
