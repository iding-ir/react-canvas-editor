import { useTranslation } from "react-i18next";

import { useAppSelector } from "../../app/hooks";
import { selectImages } from "../../features/gallery";
import styles from "./Gallery.module.scss";

export const Gallery = () => {
  const { t } = useTranslation();
  const images = useAppSelector(selectImages);

  return (
    <div className={styles.container}>
      {images.length
        ? images.map(({ id, src }) => <img key={id} src={src} alt="gallery" />)
        : t("gallery.notFound")}
    </div>
  );
};
