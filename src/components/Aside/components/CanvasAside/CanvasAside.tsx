import { useTranslation } from "react-i18next";

import DocumentIcon from "../../../../assets/icons/file.svg";
import SizeIcon from "../../../../assets/icons/size.svg";
import { CanvasColorPicker } from "../../../../features/canvas/components/CanvasColorPicker";
import { CanvasName } from "../../../../features/canvas/components/CanvasName";
import { CanvasSizeSelector } from "../../../../features/canvas/components/CanvasSizeSelector";
import { Form } from "../../../Form/Form";
import { Field } from "../../../Form/components/Field";
import asideStyles from "../Aside.module.scss";

export const CanvasAside = () => {
  const { t } = useTranslation();

  return (
    <div className={asideStyles.container}>
      <Form>
        <Field legend={t("canvas.document.title")} icon={<DocumentIcon />}>
          <CanvasName />

          <CanvasColorPicker />
        </Field>

        <Field legend={t("canvas.size.title")} icon={<SizeIcon />}>
          <CanvasSizeSelector />
        </Field>
      </Form>
    </div>
  );
};
