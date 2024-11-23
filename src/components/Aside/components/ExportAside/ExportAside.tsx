import { useTranslation } from "react-i18next";

import FileIcon from "../../../../assets/icons/file.svg";
import { useExportContext } from "../../../../hooks/use-export";
import { Form } from "../../../Form/Form";
import { Button } from "../../../Form/components/Button";
import { Field } from "../../../Form/components/Field";
import asideStyles from "../Aside.module.scss";

export const ExportAside = () => {
  const { t } = useTranslation();
  const { handleExportJpg, handleExportPng, handleExportPdf } =
    useExportContext();

  return (
    <div className={asideStyles.container}>
      <Form>
        <Field legend={t("export.title")} icon={<FileIcon />}>
          <Button label={t("export.jpg")} onClick={handleExportJpg} />
          <Button label={t("export.png")} onClick={handleExportPng} />
          <Button label={t("export.pdf")} onClick={handleExportPdf} />
        </Field>
      </Form>
    </div>
  );
};
