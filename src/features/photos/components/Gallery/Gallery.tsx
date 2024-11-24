import { useTranslation } from "react-i18next";

import { useAppSelector } from "../../../../app/hooks";
import { selectPhotos } from "../../photos-slice";
import { Photo } from "../Photo";
import styles from "./Gallery.module.scss";

export const Gallery = () => {
  const { t } = useTranslation();
  const photos = useAppSelector(selectPhotos);

  return (
    <div className={styles.container}>
      {photos.length
        ? photos.map((photo) => <Photo key={photo.id} photo={photo} />)
        : t("gallery.notFound")}
    </div>
  );
};
