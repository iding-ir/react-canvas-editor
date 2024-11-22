import { useTranslation } from "react-i18next";

import { Uploader } from "../../../../features/gallery/components/Uploader";
import { Button } from "../../../Button";
import { Gallery } from "../../../Gallery";
import asideStyles from "../Aside.module.scss";

export const GalleryAside = () => {
  const { t } = useTranslation();

  return (
    <div className={asideStyles.container}>
      <Uploader>
        <Button onClick={() => null} label={t("gallery.upload")} />
      </Uploader>

      <Gallery />
    </div>
  );
};
