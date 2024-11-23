import { useTranslation } from "react-i18next";

import ContentIcon from "../../../../assets/icons/content.svg";
import FontIcon from "../../../../assets/icons/font.svg";
import { TextColorPicker } from "../../../../features/text/components/TextColorPicker";
import { TextInput } from "../../../../features/text/components/TextInput";
import { TextSizeSelector } from "../../../../features/text/components/TextSizeSelector";
import { Form } from "../../../Form/Form";
import { Field } from "../../../Form/components/Field";
import asideStyles from "../Aside.module.scss";

export const TextAside = () => {
  const { t } = useTranslation();

  return (
    <div className={asideStyles.container}>
      <Form>
        <Field legend={t("text.title")} icon={<ContentIcon />}>
          <TextInput />
        </Field>

        <Field legend={t("text.font.title")} icon={<FontIcon />}>
          <TextSizeSelector />

          <TextColorPicker />
        </Field>
      </Form>
    </div>
  );
};
