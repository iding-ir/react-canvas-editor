import { useTranslation } from "react-i18next";

import BrushIcon from "../../../../assets/icons/brush.svg";
import { LineColorPicker } from "../../../../features/lines/components/LineColorPicker";
import { LineSizeSelector } from "../../../../features/lines/components/LineSizeSelector";
import { Form } from "../../../Form/Form";
import { Field } from "../../../Form/components/Field";
import asideStyles from "../Aside.module.scss";

export const LineAside = () => {
  const { t } = useTranslation();

  return (
    <div className={asideStyles.container}>
      <Form>
        <Field legend={t("line.title")} icon={<BrushIcon />}>
          <LineSizeSelector />

          <LineColorPicker />
        </Field>
      </Form>
    </div>
  );
};
