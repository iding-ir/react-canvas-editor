import { useAppSelector } from "../../app/hooks";
import { selectImages } from "../../features/gallery";
import styles from "./Gallery.module.scss";

export const Gallery = () => {
  const images = useAppSelector(selectImages);

  return (
    <div className={styles.container}>
      {images.map(({ id, src }) => (
        <img key={id} src={src} alt="gallery" />
      ))}
    </div>
  );
};
