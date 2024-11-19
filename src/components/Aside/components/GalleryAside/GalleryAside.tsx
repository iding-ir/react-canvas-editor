import { useTranslation } from "react-i18next";
import { Uploader } from "../../../../features/gallery/components/Uploader";
import { Gallery } from "../../../Gallery";
import asideStyles from "../Aside.module.scss";
import styles from "./GalleryAside.module.scss";
import clsx from "clsx";

export const GalleryAside = () => {
  const { t } = useTranslation();

  return (
    <div className={clsx(asideStyles.container, styles.container)}>
      <Uploader>
        <button className={styles.upload}>{t("gallery.upload")}</button>
      </Uploader>

      <Gallery />
    </div>
  );
};
