import { useTranslation } from "react-i18next";

import FileIcon from "../../../../assets/icons/file.svg";
import { useExportContext } from "../../../../hooks/use-export";
import { Button } from "../../../Button";
import { Title } from "../../../Title";
import asideStyles from "../Aside.module.scss";

export const ExportAside = () => {
  const { t } = useTranslation();
  const { handleExportPng, handleExportPdf } = useExportContext();

  return (
    <div className={asideStyles.container}>
      <Title text={t("export.title")}>{<FileIcon />}</Title>

      <Button label={t("export.png")} onClick={handleExportPng} />

      <Button label={t("export.pdf")} onClick={handleExportPdf} />
    </div>
  );
};
